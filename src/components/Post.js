import React, { useState } from 'react'


export default function Post({aumentar, item}) {

  const [likes, setLikes] = useState(item.likes)

  const handleLike = () => {
    setLikes(likes + 1)
    aumentar()
    console.log('Suma un like: ' + item.titulo)
  }

  return (
    <div className='posteo'>
      <h3>{item.titulo}</h3>
      <p>{item.texto}</p>
      <button onClick={handleLike}>👍</button>
      <h5> {likes >= 10 ? "Más de 10 likes" : "Likes:" + likes }</h5>
    </div>
  )
}
