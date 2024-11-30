import { useState } from 'react'
import './App.css'
import DynamicForm from './components/DynamicForm'

function App() {
  const handleSubmit = (event)=>{
    event.preventDefault()
    // get value from dom - we dont have control so we use out state
    // console.log(event.target[0].value)
    // console.log(event.target[1].value)
    // console.log(event.target[2].value)

    // two way data binding
    console.log(formState)
  }
  
  // we use our own state
  const [formState, setFormState] = useState({
    name: '',
    email:'',
    mobileNumber:''
  })

  const handleSubmitChange = (event)=>{
    setFormState({
      ...formState,
      [event.target.name] : event.target.value,
      [event.target.email] : event.target.value,
      [event.target.mobileNumber] : event.target.value
    })
  }


  return (
    <>
      {/* <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>What is your name ?</label>
          <input type='text' name="name" placeholder='enter your name' value={formState.name} onChange={handleSubmitChange} />
          <br/><br/>
          <label>What is your emal ?</label>
          <input type='text' name="email" placeholder='enter your email' value={formState.email} onChange={handleSubmitChange} />
          <br/><br/>
          <label>What is your mobile number ?</label>
          <input type='text' name="mobileNumber" placeholder='enter your mobile number' value={formState.mobileNumber} onChange={handleSubmitChange} />
          <br/><br/>
          <button type='submit'>Submit</button>
        </div>
      </form> */}

      
      <h1>App</h1>
      <DynamicForm/>
    </>
  )
}

export default App
