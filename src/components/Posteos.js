import data from './data.json'
import Post from './Post'

export default function Posteos({aumentar}) {
  return (
    <div className='container'>
      {data.map(item => <Post item={item} aumentar={aumentar} key={item.id}/> )}
    </div>
  )
}
