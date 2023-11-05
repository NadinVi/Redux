import { Link} from 'react-router-dom'

import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'

import type { Comments } from '../../api/JsonPlaseholderAPI/JsonPlaseholderAPI'
import { useAppSelector } from '../../hooks/useAppSelector'

const Comments = () => {
  const comments = useAppSelector((state) => state.comments.comments)
  console.log(comments)

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Comments
      </Typography>
      <List>
        {comments.map((comment) => (
          <Card key={comment.id} className="card">
            <CardContent>
              <ListItem component={Link} to={`/comments/${comment.id}`}>
                <ListItemText primary={comment.name} secondary={comment.body} />
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </>
  )
}

export { Comments }
