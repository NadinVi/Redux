import { useNavigation } from 'react-router-dom'

import { Grid, ImageList, ImageListItem, Typography } from '@mui/material'

import { Loader } from '../../components/Loader/Loader'
import { useAppSelector } from '../../hooks/useAppSelector'

const Photos = () => {
  const photos = useAppSelector((state) => state.photos.photos)
  const navigation = useNavigation()

  const isLoading = navigation.state === 'loading'

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Photos
      </Typography>
      <Grid container spacing={2}>
        {isLoading ? (
          <Loader />
        ) : (
          <ImageList gap={10} cols={5}>
            {photos.map((photo) => (
              <ImageListItem key={photo.id}>
                <img src={photo.url} alt={photo.title}></img>
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Grid>
    </>
  )
}

export { Photos }
