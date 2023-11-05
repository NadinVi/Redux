import { Link } from 'react-router-dom'

import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/useAppSelector'

const Posts = () => {
  const posts = useAppSelector((state) => state.posts.posts)
  console.log(posts);
  
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
