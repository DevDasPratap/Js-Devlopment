import { useState } from 'react';
import Layout from '../components/layout/Layout';

const Help = () => {
	const [name, setName] = useState('pd')
	setTimeout(() => {
		setName('Pratap')
	}, 5000);
	return (
		<Layout>
			<h1>Hello, {name ? name : 'Guest'} I am Help page</h1>
		</Layout>
	);
};

export default Help;