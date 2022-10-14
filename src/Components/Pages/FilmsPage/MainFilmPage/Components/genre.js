export const Genre = ({ data }) => {

  return (
    data.map((item, index) => { // Здесь идет проверка на то, является ли жанр последним в списке
      if (index !== data.length - 1) {
        return <div key={index}>{item},</div>
      }
      return <div>{item}</div> // Если да, то без запятой
    })
  )
}
