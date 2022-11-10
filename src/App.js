import React, { useState } from 'react'
import Estatus from './components/Estatus';
import Posteos from './components/Posteos';

function App() {
  const [total, setTotal] = useState(0)

  const aumentar = () => {
    setTotal(total +1)
    // setTotal(prev => prev +1 )
  }

  return (
    <div className="App">
      <Estatus total={total}/>
      <Posteos aumentar={aumentar}/>
    </div>
  );
}

export default App;
