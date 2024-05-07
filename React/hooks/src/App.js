import React, { useEffect, useState } from 'react'
import './App.css';
import MyCompo from './MyCompo';


function App() {
  const [isVisible, setVisible] = useState(true)
  useEffect(() => {
    console.log('App component, is mouting')
  }, [])
  return <div className='App'>
      {/* <MyCompo /> */}

      {isVisible ? <MyCompo /> : <></>}
      <button onClick={()=>setVisible(!isVisible)}>Toggle</button>
      </div>

}

export default App;
