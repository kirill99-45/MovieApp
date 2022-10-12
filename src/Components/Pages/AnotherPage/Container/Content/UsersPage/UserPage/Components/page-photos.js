import Photo from 'C:/Users/User/github/movies/src/Components/Pages/AnotherPage/Container/Content/Profile/photo.js';

export const PagePhotos = ({ photos, setBigPhotoState, activeUser, color }) => {
  return (
    photos.map((photo, index) => {
      if (index < 4) {
        return (
          <Photo
            key={photos[index].id}
            index={index}
            setBigPhotoState={setBigPhotoState}
            data={photos[index]}
            activeUser={activeUser}
            color={color}
          />
        )
      }
    })
  )
}
