import React from 'react'
import './anime.scss'
const Anime = ({letterClass, strArray, idx}) => {
  return (
    <>
      <span>
        {
            strArray.map((char, i)=> (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))
        }
      </span>
    </>
  )
}

export default Anime
