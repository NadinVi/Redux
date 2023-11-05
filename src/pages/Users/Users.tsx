import { Link } from 'react-router-dom'

import { List, ListItem, ListItemText, Typography } from '@mui/material'

import { useAppSelector } from '../../hooks/useAppSelector';

const Users = () => {
//const dispatch = useAppDispatch();
const users = useAppSelector((state) => state.users.users);
console.log(users);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Users
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id} component={Link} to={`/users/${user.id}`}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export { Users }
