// import { useEffect, useState } from "react"


// function App() {
//   const [users, setUsers] = useState(null)
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res)=>res.json())
//     .then((data)=>setUsers(data))
//   }, [])
// console.log('users', users)
//   return (
//     <>
//     <div>
//       <h1>Users Details</h1>
//       <ul>
//           {users && users.map((user) => (
//             <li key={user.id}>
//               <div>
//                 <strong>Name:</strong> {user.name}
//                 <br />
//                 <strong>Email:</strong> {user.email}
//                 <br />
//                 <strong>Phone:</strong> {user.phone}
//               </div>
//             </li>
//           ))}
//         </ul>
//     </div>
//     </>
//   )
// }

// export default App





// import { useEffect, useState } from 'react';

// const App = () => {
// 	const [user, setUser] = useState({});
// 	const [loading, setLoading] = useState(false);
// 	const [id, setId] = useState(1);
// 	const max = 10;

// 	useEffect(() => {
// 		setLoading(true);
// 		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
// 			.then((res) => res.json())
// 			.then((data) => setUser(data))
// 			.finally(() => setLoading(false));
// 	}, [id]);

// 	const nextHandler = () => {
// 		if (id < max) {
// 			setId(id + 1);
// 		}
// 	};

// 	const prevHandler = () => {
// 		if (id > 1) {
// 			setId(id - 1);
// 		}
// 	};

// 	return (
// 		<div>
// 			<h1>User Detail: {id}</h1>
// 			{loading && <p>loading...</p>}
// 			{!loading && user && (
// 				<div>
// 					name: {user.name}
// 					<br />
// 					email: {user.email}
// 					<br />
// 					phone: {user.phone}
// 				</div>
// 			)}
// 			<div>
// 				<button disabled={id === 1} onClick={prevHandler}>
// 					previous
// 				</button>
// 				<button disabled={id === max} onClick={nextHandler}>
// 					next
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default App;





// import { useEffect, useState } from 'react';

// const cacheData = {};

// const App = () => {
// 	const [user, setUser] = useState({});
// 	const [loading, setLoading] = useState(false);
// 	const [id, setId] = useState(1);
// 	const max = 10;

// 	useEffect(() => {
// 		if (cacheData[`user-${id}`]) {
// 			setUser(cacheData[`user-${id}`]);
// 			return;
// 		}
// 		setLoading(true);
// 		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				setUser(data);
// 				cacheData[`user-${id}`] = data;
// 			})
// 			.finally(() => setLoading(false));
// 	}, [id]);

// 	const nextHandler = () => {
// 		if (id < max) {
// 			setId(id + 1);
// 		}
// 	};

// 	const prevHandler = () => {
// 		if (id > 1) {
// 			setId(id - 1);
// 		}
// 	};

// 	return (
// 		<div>
// 			<h1>User Detail: {id}</h1>
// 			{loading && <p>loading...</p>}
// 			{!loading && user && (
// 				<div>
// 					Name: {user.name}
// 					<br />
// 					Email: {user.email}
// 					<br />
// 					Phone: {user.phone}
// 				</div>
// 			)}
// 			<div>
// 				<button disabled={id === 1} onClick={prevHandler}>
// 					previous
// 				</button>
// 				<button disabled={id === max} onClick={nextHandler}>
// 					next
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default App;



// custom hook

// import { useState } from 'react';

// const App = () => {
// 	const [counter1, setCounter1] = useState(0);
// 	const [counter2, setCounter2] = useState(0);

// 	const handleCounter1Inc = () => {
// 		if (counter1 < 10) {
// 			setCounter1(counter1 + 1);
// 		}
// 	};

// 	const handleCounter1Dec = () => {
// 		if (counter1 > 0) {
// 			setCounter1(counter1 - 1);
// 		}
// 	};

// 	const handleCounter2Inc = () => {
// 		if (counter2 < 10) {
// 			setCounter2(counter2 + 1);
// 		}
// 	};

// 	const handleCounter2Dec = () => {
// 		if (counter2 > 0) {
// 			setCounter2(counter2 - 1);
// 		}
// 	};

// 	return (
// 		<div>
// 			<div>
// 				<button onClick={handleCounter1Inc}>+</button>
// 				<span>{counter1}</span>
// 				<button onClick={handleCounter1Dec}>-</button>
// 			</div>
// 			<div>
// 				<button onClick={handleCounter2Inc}>+</button>
// 				<span>{counter2}</span>
// 				<button onClick={handleCounter2Dec}>-</button>
// 			</div>
// 		</div>
// 	);
// };

// export default App;





// import { useState } from 'react';

// const CountController = ({ count, handleInc, handleDec }) => {
// 	return (
// 		<div>
// 			<button onClick={handleInc}>+</button>
// 			<span>{count}</span>
// 			<button onClick={handleDec}>-</button>
// 		</div>
// 	);
// };

// const App = () => {
// 	const [counter1, setCounter1] = useState(0);
// 	const [counter2, setCounter2] = useState(0);
// 	const [counter3, setCounter3] = useState(0);

// 	const handleCounter1Inc = () => {
// 		if (counter1 < 10) {
// 			setCounter1(counter1 + 1);
// 		}
// 	};

// 	const handleCounter1Dec = () => {
// 		if (counter1 > 0) {
// 			setCounter1(counter1 - 1);
// 		}
// 	};

// 	const handleCounter2Inc = () => {
// 		if (counter2 < 10) {
// 			setCounter2(counter2 + 1);
// 		}
// 	};

// 	const handleCounter2Dec = () => {
// 		if (counter2 > 0) {
// 			setCounter2(counter2 - 1);
// 		}
// 	};

// 	const handleCounter3Inc = () => {
// 		if (counter3 < 10) {
// 			setCounter3(counter3 + 1);
// 		}
// 	};

// 	const handleCounter3Dec = () => {
// 		if (counter3 > 0) {
// 			setCounter3(counter3 - 1);
// 		}
// 	};

// 	return (
// 		<div>
// 			<CountController
// 				count={counter1}
// 				handleInc={handleCounter1Inc}
// 				handleDec={handleCounter1Dec}
// 			/>
// 			<CountController
// 				count={counter2}
// 				handleInc={handleCounter2Inc}
// 				handleDec={handleCounter2Dec}
// 			/>
// 			<CountController
// 				count={counter3}
// 				handleInc={handleCounter3Inc}
// 				handleDec={handleCounter3Dec}
// 			/>
// 		</div>
// 	);
// };

// export default App;




import useCounter from "./hooks/useCounter";

const App = () => {
	const {
		count: count1,
		handleInc: handleInc1,
		handleDec: handleDec1,
	} = useCounter();
	const {
		count: count2,
		handleInc: handleInc2,
		handleDec: handleDec2,
	} = useCounter();
	const {
		count: count3,
		handleInc: handleInc3,
		handleDec: handleDec3,
	} = useCounter();

	return (
		<div>
			<CountController
				count={count1}
				handleInc={handleInc1}
				handleDec={handleDec1}
			/>
			<CountController
				count={count2}
				handleInc={handleInc2}
				handleDec={handleDec2}
			/>
			<CountController
				count={count3}
				handleInc={handleInc3}
				handleDec={handleDec3}
			/>
		</div>
	);
};
export default App;