import type { LoaderFunction } from 'react-router-dom'

import JsonPlaseholderAPI from '../../api/JsonPlaseholderAPI/JsonPlaseholderAPI'
import { store } from '../../store'

import { setPosts } from '../../store/posts'

export const postsLoader = async ({ request: { signal } }: Parameters<LoaderFunction>[number]) => {
  store.dispatch(setPosts( await JsonPlaseholderAPI.getPosts({ signal }) ))

  return null
}
