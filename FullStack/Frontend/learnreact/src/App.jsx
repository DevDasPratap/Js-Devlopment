// // import React from 'react'
// // function App() {
// //   // create dom using js
// //   return React.createElement(
// //     'div',
// //     null,
// //     [
// //       React.createElement('h1', null, 'Hello React Hi'),
// //       React.createElement('p', null, 'React is all about JavaScript')
// //     ]
// //     )
// // }

// // export default App

// // now create react code wise
// function Button({text}) {
//   return <button
//   style={{
//     padding: '0.5rem 1rem',
//     border: 'none',
//     background: 'black',
//     color: 'white',
//     cursor: 'pointer',
//     borderRadius: '0.25rem',
//     margin: '0.25rem'
//   }}
//   >{text}</button>
// }
// function Input() {
//   return <input type="text" placeholder="Type here" />
// }
// function Message() {
//   return <p>This is a message</p>
// }
// function App() {
//   // here babel and webpack parse only div are convert into js then display to browser
//   return (
//     <div>
//       <h1>Hello React</h1>
//       <p>React is all about JavaScript</p>
//       <Input/>
//       <Button text="Click" />
//       <Button text="Submit" />
//       <Message/>
//     </div>
//   )
// }

// export default App

import Button from './components/button/Button';
import InputGroup from './components/input/InputGroup';

function App() {
	return (
		<div
			style={{
				width: '50%',
				margin: '2rem auto',
				backgroundColor: '#fff',
				padding: '2rem',
			}}
		>
			<div
				style={{
					textAlign: 'center',
					display: 'flex',
					flexDirection: 'column',
					gap: '0.5rem',
					marginBottom: '1rem',
				}}
			>
				<h3 style={{ fontFamily: 'Arial', fontSize: '2rem', color: '#222' }}>
					Sign Up
				</h3>
				<p style={{ fontFamily: 'Arial', fontSize: '1rem', color: '#666' }}>
					Leanr react from begining
				</p>
			</div>

			<form>
				<InputGroup label="What is your name?" type="text" id="name" />
				<InputGroup label="What is your email?" type="email" id="email" />
				<InputGroup
					label="What is your password?"
					type="password"
					id="password"
				/>

				<div>
					<Button type="reset" text="Reset" variant="warning" size="small" />
					<Button type="submit" text="Submit" variant="primary" size="medium" />
					<Button type="button" text="Cancel" variant="error" size="large" />
				</div>
			</form>
		</div>
	);
}

export default App;

/**
 * When should we deside a creating a new component?
 * *** When we need to write duplicate code
 * *** Which data are diffrent
 * 
 * *** When you see any duplicate structure just make it a component
 */