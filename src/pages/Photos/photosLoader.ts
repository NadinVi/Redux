import type { LoaderFunction } from 'react-router-dom'

import JsonPlaseholderAPI from '../../api/JsonPlaseholderAPI/JsonPlaseholderAPI'
import { store } from '../../store'
import { setPhotos } from '../../store/photos'

export const photosLoader = async ({ request: { signal } }: Parameters<LoaderFunction>[number]) => {
  store.dispatch(setPhotos( await JsonPlaseholderAPI.getPhotos({ signal }) ))

  return null
}
