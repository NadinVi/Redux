import type { LoaderFunction } from 'react-router-dom'

import JsonPlaseholderAPI from '../../api/JsonPlaseholderAPI/JsonPlaseholderAPI'
import { store } from '../../store'
import { setComments } from '../../store/comments'

export const commentsLoader = async ({ request: { signal } }: Parameters<LoaderFunction>[number]) => {
  store.dispatch(setComments(await JsonPlaseholderAPI.getComments({ signal })))

  return null
}
