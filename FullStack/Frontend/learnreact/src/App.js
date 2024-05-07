// import React from 'react'
// function App() {
//   // create dom using js
//   return React.createElement(
//     'div',
//     null,
//     [
//       React.createElement('h1', null, 'Hello React Hi'),
//       React.createElement('p', null, 'React is all about JavaScript')
//     ]
//     )
// }

// export default App

// now create react code wise
function Button({text}) {
  return <button
  style={{
    padding: '0.5rem 1rem',
    border: 'none',
    background: 'black',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '0.25rem',
    margin: '0.25rem'
  }}
  >{text}</button>
}
function Input() {
  return <input type="text" placeholder="Type here" />
}
function Message() {
  return <p>This is a message</p>
}
function App() {
  // here babel and webpack parse only div are convert into js then display to browser
  return (
    <div>
      <h1>Hello React</h1>
      <p>React is all about JavaScript</p>
      <Input/>
      <Button text="Click" />
      <Button text="Submit" />
      <Message/>
    </div>
  )
}

export default App

