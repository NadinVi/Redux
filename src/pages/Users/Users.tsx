import { Link } from 'react-router-dom'

import { List, ListItem, ListItemText, Typography } from '@mui/material'

//import type { User } from '../../api/JsonPlaseholderAPI/JsonPlaseholderAPI'
//import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';


const Users = () => {
//const users = useLoaderData() as User[]
//const dispatch = useAppDispatch();
const users = useAppSelector((state) => state.users);
console.log(users);


  return (
    <>
      <Typography variant="h5" gutterBottom>
        Users
      </Typography>
      <List>
        {users && users.map((user) => (
          <ListItem key={user.id} component={Link} to={`/users/${user.id}`}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export { Users }
