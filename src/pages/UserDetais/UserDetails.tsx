import { Form, Link, useLoaderData } from 'react-router-dom'

import { Box, Button, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'

import type { User } from '../../api/JsonPlaseholderAPI/JsonPlaseholderAPI'

const FIELDS = [
  { name: 'Name', key: 'name' },
  { name: 'Username', key: 'username' },
  { name: 'Email', key: 'email' },
  { name: 'Phone', key: 'phone' },
  { name: 'Website', key: 'website' },
] satisfies { name: string; key: keyof Pick<User, 'name' | 'username' | 'email' | 'phone' | 'website'> }[]

const UserDetails = () => {
  const user = useLoaderData() as User
  return (
    <>
      <Typography variant="h5" gutterBottom>
        User Details
      </Typography>
      {user && (
        <Card>
          <CardContent>
            <List>
              {FIELDS.map((field) => (
                <ListItem key={field.key}>
                  <ListItemText primary={field.name} secondary={user[field.key]}></ListItemText>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}
      <Box mt={2} display="flex" flexDirection="row">
        <Box mr={2}>
          <Button component={Link} variant="contained" color="primary" to="edit">
            Edit User
          </Button>
        </Box>
        <Form
          method="delete"
          action="destroy"
          onSubmit={(event) => {
            if (!confirm('Please confirm that you want to delete this user.')) {
              event.preventDefault()
            }
          }}
        >
          <Button variant="contained" color="error" type="submit">
            Delete User
          </Button>
        </Form>
      </Box>
    </>
  )
}

export { UserDetails }