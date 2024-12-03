// import './App.css'
// /**
//  * Any function that return  a jsx is functional component in react
//  * Name must be capital: App(){}
//  * Must return a place of HTML(JSX)
//  * It always accept an object as an argument: App(argument){}
//  * We can't call  or invoke as a html tag
//  * 
//  * props: anything that is dynamic can be dynamic using props
//  */


// const checkBox = [
//   {
//     id: 1,
//     title: "Please check it 1",
//     checked: true
//   },
//   {
//     id: 2,
//     title: "Please check it 2",
//     checked: true
//   },
//   {
//     id: 3,
//     title: "Please check it 3",
//     checked: false
//   }
// ]

// function App(props) {
//   console.log('Argument:', props)
//   return (
//     <>
//       {/* <h1>Hello React</h1> */}
//       <h1>{props.name}</h1>

//       {/* Why react: where have repeated code break a component and resuse */}
//       <div>
//         {/* <ul>
//           <li>
//             <input type='checkbox'/>
//             <span>Please check it</span>
//           </li>
//           <li>
//             <input type='checkbox'/>
//             <span>Please check it 2</span>
//           </li>
//           <li>
//             <input type='checkbox'/>
//             <span>Please check it 3</span>
//           </li>
//         </ul> */}

//         {/* <ListItem title="Please check it 1" />
//         <ListItem title="Please check it 2" />
//         <ListItem title="Please check it 3" /> */}

//         {/* <ul>
//           {checkBox.map((item)=>{
//             return <ListItem key={item.id} title={item.title} checked={item.checked} />
//           })}
//         </ul> */}

//         <ul>
//           {checkBox.map((item)=>{
//             return <ListItem key={item.id} title={item.title} checked={item.checked} >I am children</ListItem>
//           })}
//         </ul>

//       </div>
//     </>
//   )
// }

// export default App


// function ListItem(props) {
//   return (
//     <ul>
//       <li>
//         <input type='checkbox' checked={props.checked} />
//         <span>{props.title}</span>
//         <span>{props.children}</span>
//         <button type='submit'>Edit</button>
//         <button type='submit'>Delete</button>
//       </li>
//     </ul>
//   )
// }



// state
// import { useState } from "react"

// function App() {
//   // let count = 0
//   // const increment = ()=>{
//   //   count++
//   // }
//   // const decrement = ()=>{
//   //   count++
//   // }
//   // return (
//   //   <div>
//   //     <h1>Count: {count}</h1>
//   //     <div>
//   //       <button onClick={increment}>Increment</button>
//   //       <button onClick={decrement}>Decrements</button>
//   //     </div>
//   //   </div>
//   // )


//   return (
//     <>
//       <ProductList productName={'keybord'} stock={10} />
//       <ProductList productName={'mouse'} stock={5} />
//       <ProductList productName={'headphone'} stock={0} />
//     </>
//   )
// }
// export default App

// function ProductList({ productName, stock }) {
//   const [count, setCount] = useState(0)
//   const increment = () => {
//     if (count < stock) {
//       setCount(count + 1)
//     }
//   }
//   const decrement = () => {
//     if (count > 0) {
//       setCount(count - 1)
//     }
//   }

//   return (
//     <div>
//       {productName}
//       <h1>Count: {count}/{stock}</h1>
//       {
//         count >= stock && (<div >
//           <p>
//             Condition passed limit reached
//           </p>
//         </div>)
//       }
//       <div>
//         <button onClick={increment} disabled={count === stock}>Increment</button>
//         <button onClick={decrement} disabled={count === 0}>Decrements</button>
//       </div>
//     </div>
//   )
// }


// // Shoping cart with state
// import { useState } from "react"
// const productList = [
// 	{
// 		id: 'P1',
// 		productName: 'Keyboard',
// 		stock: 10,
// 		price: 2000,
// 	},
// 	{
// 		id: 'P2',
// 		productName: 'Mouse',
// 		stock: 5,
// 		price: 1500,
// 	},
// 	{
// 		id: 'P3',
// 		productName: 'Headphone',
// 		stock: 15,
// 		price: 2500,
// 	},
// ];

// const TableRow = ({
// 	id,
// 	name,
// 	stock,
// 	price,
// 	quantity,
// 	total,
// 	increment,
// 	decrement,
// }) => {
// 	return (
// 		<tr>
// 			<td>{id}</td>
// 			<td>{name}</td>
// 			<td>{stock}</td>
// 			<td>{price}</td>
// 			<td>{quantity}</td>
// 			<td>{total}</td>
// 			<td>
// 				<button disabled={quantity === stock} onClick={() => increment(id)}>
// 					+
// 				</button>
// 				<button disabled={quantity === 0} onClick={() => decrement(id)}>
// 					-
// 				</button>
// 			</td>
// 		</tr>
// 	);
// };

// const App = () => {
// 	const [products, setProducts] = useState(
// 		productList.map((item) => ({
// 			...item,
// 			quantity: 0,
// 			total: 0,
// 		}))
// 	);

// 	const incrementQuantity = (id) => {
// 		setProducts(
// 			products.map((product) => {
// 				if (id === product.id && product.stock > product.quantity) {
// 					product.quantity++;
// 					product.total = product.quantity * product.price;
// 				}
// 				return product;
// 			})
// 		);
// 	};

// 	const decrementQuantity = (id) => {
// 		setProducts(
// 			products.map((product) => {
// 				if (id === product.id && product.quantity > 0) {
// 					product.quantity--;
// 					product.total = product.quantity * product.price;
// 				}
// 				return product;
// 			})
// 		);
// 	};

// 	const total = products.reduce((acc, cur) => acc + cur.total, 0);

// 	return (
// 		<div>
// 			<h1>Product List</h1>
// 			<table>
// 				<thead>
// 					<tr>
// 						<th>ID</th>
// 						<th>Name</th>
// 						<th>Stock</th>
// 						<th>Price</th>
// 						<th>Quantity</th>
// 						<th>Total</th>
// 						<th>Actions</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{products.map((product) => (
// 						<TableRow
// 							key={product.id}
// 							{...product}
// 							increment={incrementQuantity}
// 							decrement={decrementQuantity}
// 						/>
// 					))}
// 				</tbody>
// 			</table>
// 			{total > 0 && <p>Total Rs: {total}</p>}
// 		</div>
// 	);
// };

// export default App



/**
 * DONE: Handle User Input Fields
 * Done: Handle operations
 * DONE: Handle a list of histories
 * DONE: Render history list
 * TODO: Restore the history
 */

// import { useState } from 'react';

// function* generateId() {
// 	let id = 0;

// 	while (true) {
// 		yield id++;
// 	}
// }

// const getId = generateId();

// const initialInputState = {
// 	a: 0,
// 	b: 0,
// };

// const App = () => {
// 	const [inputState, setInputState] = useState({ ...initialInputState });
// 	const [result, setResult] = useState(0);
// 	const [histories, setHistories] = useState([]);
// 	const [restoredHistory, setRestoredHistory] = useState(null);

// 	const handleInputChange = (e) => {
// 		setInputState({
// 			...inputState,
// 			[e.target.name]: parseInt(e.target.value),
// 		});
// 	};

// 	const handleClearOps = () => {
// 		setInputState({ ...initialInputState });
// 		setResult(0);
// 	};

// 	const handleArithmeticOps = (operation) => {
// 		if (!inputState.a || !inputState.b) {
// 			alert('Invalid Input');
// 			return;
// 		}

// 		const f = new Function(
// 			'operation',
// 			`return ${inputState.a} ${operation} ${inputState.b}`
// 		);
// 		const result = f(operation);
// 		setResult(result);

// 		// setResult(eval(`${inputState.a} ${operation} ${inputState.b}`));

// 		const history = {
// 			id: getId.next().value,
// 			inputs: { ...inputState },
// 			operation,
// 			result,
// 			date: new Date(),
// 		};
// 		setHistories([history, ...histories]);
// 	};

// 	const handleRestoreBtn = (history) => {
// 		setInputState({ ...history.inputs });
// 		setResult(history.result);
// 		setRestoredHistory(history.id);
// 	};


// 	return (
// 		<div style={{ width: '50%', margin: '0 auto' }}>
// 			<h1>Result: {result}</h1>
// 			<div>
// 				<p>Inputs</p>
// 				<input
// 					type="number"
// 					value={inputState.a}
// 					onChange={handleInputChange}
// 					name="a"
// 				/>
// 				<input
// 					type="number"
// 					value={inputState.b}
// 					onChange={handleInputChange}
// 					name="b"
// 				/>
// 			</div>
// 			<div>
// 				<p>Operations</p>
// 				<button onClick={() => handleArithmeticOps('+')}>+</button>
// 				<button onClick={() => handleArithmeticOps('-')}>-</button>
// 				<button onClick={() => handleArithmeticOps('*')}>*</button>
// 				<button onClick={() => handleArithmeticOps('/')}>/</button>
// 				<button onClick={() => handleArithmeticOps('%')}>%</button>
// 				<button onClick={handleClearOps}>Clear</button>
// 			</div>
// 			<div>
// 				<p>History</p>
// 				{histories.length === 0 ? (
// 					<p>
// 						<small>There is no history</small>
// 					</p>
// 				) : (
// 					<ul>
// 						{histories.map((history) => (
// 							<li key={history.id}>
// 								<p>
// 									Operations: {history.inputs.a} {history.operation}{' '}
// 									{history.inputs.b}, Result = {history.result}
// 								</p>
// 								<small>
// 									{history.date.toLocaleDateString()}{' '}
// 									{history.date.toLocaleTimeString()}
// 								</small>
// 								<br />
// 								<button
// 									onClick={() => handleRestoreBtn(history)}
// 									disabled={
// 										restoredHistory !== null && restoredHistory === history.id
// 									}
// 								>
// 									Restore
// 								</button>
// 							</li>
// 						))}
// 					</ul>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default App;


// refactor code

/**
 * DONE: Handle User Input Fields
 * Done: Handle operations
 * DONE: Handle a list of histories
 * DONE: Render history list
 * DONE: Restore the history
 */

import { useState } from 'react';
import HistorySection from './components/history/HistorySection';
import InputSection from './components/inputs/InputSection';
import OperationSection from './components/operation/OperationSection';

function* generateId() {
	let id = 0;

	while (true) {
		yield id++;
	}
}

const getId = generateId();

const initialInputState = {
	a: 0,
	b: 0,
};

const App = () => {
	const [inputState, setInputState] = useState({ ...initialInputState });
	const [result, setResult] = useState(0);
	const [histories, setHistories] = useState([]);
	const [restoredHistory, setRestoredHistory] = useState(null);

	const handleInputChange = (e) => {
		setInputState({
			...inputState,
			[e.target.name]: parseInt(e.target.value),
		});
	};

	const handleClearOps = () => {
		setInputState({ ...initialInputState });
		setResult(0);
	};

	const handleArithmeticOps = (operation) => {
		if (!inputState.a || !inputState.b) {
			alert('Invalid Input');
			return;
		}

		const f = new Function(
			'operation',
			`return ${inputState.a} ${operation} ${inputState.b}`
		);
		const result = f(operation);
		setResult(result);

		const history = {
			id: getId.next().value,
			inputs: { ...inputState },
			operation,
			result,
			date: new Date(),
		};
		setHistories([history, ...histories]);
	};

	const handleRestoreBtn = (history) => {
		setInputState({ ...history.inputs });
		setResult(history.result);
		setRestoredHistory(history.id);
	};

	return (
		<div style={{ width: '50%', margin: '0 auto' }}>
			<h1>Result: {result}</h1>
			<InputSection inputs={inputState} handleInputChange={handleInputChange} />
			<OperationSection
				handleArithmeticOps={handleArithmeticOps}
				handleClearOps={handleClearOps}
			/>
			<HistorySection
				histories={histories}
				handleRestoreBtn={handleRestoreBtn}
				restoredHistory={restoredHistory}
			/>
		</div>
	);
};

export default App;