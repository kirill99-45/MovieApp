export const Description = ({ description, searchState }) => {

  const str = description
  const findWord = searchState.toLowerCase()

  if (description.toLowerCase().indexOf(searchState.toLowerCase()) !== -1) {
    return (
      <div>
        { str.slice(0, str.toLowerCase().indexOf(searchState.toLowerCase())) }
        <span className='search__result'>
          { str.slice(str.toLowerCase().indexOf(findWord), str.toLowerCase().indexOf(findWord) + findWord.length) }
        </span>
        { str.slice(str.toLowerCase().indexOf(searchState.toLowerCase()) + searchState.length) }
      </div>
    )
  } else {
    return <div>{ description }</div>
  }
}
