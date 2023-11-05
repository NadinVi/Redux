import { Form, useLoaderData } from 'react-router-dom'

import { Box, Button, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'

import type { Comments } from '../../api/JsonPlaseholderAPI/JsonPlaseholderAPI'

const COMMENTS = [
  { name: 'Title', key: 'name' },
  { name: 'Email', key: 'email' },
  { name: 'Сomment', key: 'body' },
] satisfies { name: string; key: keyof Pick<Comments, 'name' | 'email' | 'body'> }[]

const CommentDetails = () => {
  const comment = useLoaderData() as Comments
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Comment Details
      </Typography>
      {comment && (
        <Card>
          <CardContent>
            <List>
              {COMMENTS.map((detail) => (
                <ListItem key={detail.key}>
                  <ListItemText primary={detail.name} secondary={comment[detail.key]}></ListItemText>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}
      <Box mt={2} display="flex" flexDirection="row">
        <Form
          method="delete"
          action="destroy"
          onSubmit={(event) => {
            if (!confirm('Delete the comment?')) {
              event.preventDefault()
            }
          }}
        >
          <Button variant="contained" color="error" type="submit">
            Delete Comment
          </Button>
        </Form>
      </Box>
    </>
  )
}

export { CommentDetails }
