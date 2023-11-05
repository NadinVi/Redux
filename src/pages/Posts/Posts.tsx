import { Link, useLoaderData } from 'react-router-dom'

import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'

import { Posts as PostType } from '../../api/JsonPlaseholderAPI/JsonPlaseholderAPI'

const Posts = () => {
  const posts = useLoaderData() as PostType[]

  //console.log(users);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Posts
      </Typography>
      <List>
        {posts.map((post) => (
          <Card key={post.id} className="card">
            <CardContent>
              <ListItem key={post.id} component={Link} to={`/posts/${post.id}`}>
                <ListItemText primary={post.title} secondary={post.body} />
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </>
  )
}

export { Posts }
