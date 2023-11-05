import type { LoaderFunction } from 'react-router-dom'

import JsonPlaseholderAPI from '../../api/JsonPlaseholderAPI/JsonPlaseholderAPI'
import { store } from '../../store'
import { setUsers } from '../../store/users'

export const usersLoader = async ({ request: { signal } }: Parameters<LoaderFunction>[number]) => {
  store.dispatch(setUsers( await JsonPlaseholderAPI.getUsers({ signal }) ))
  
  return null
}
