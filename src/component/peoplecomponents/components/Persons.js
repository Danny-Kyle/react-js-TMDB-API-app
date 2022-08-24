import React from 'react'

const baseURL = `http://image.tmdb.org/t/p/w500/`;

const Persons = ({person}) => {
  return (
    <div>
      <img src={`${baseURL}/${person.profile_path}`} alt=""className='h-56 w-44' />
      {person.name}
      </div>
  )
}

export default Persons