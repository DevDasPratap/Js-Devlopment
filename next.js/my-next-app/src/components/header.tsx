import Link from "next/link";

const NavbarPage = () => {
	return (
		<div>
			<nav className="container flex items-center justify-between mx-auto h-14">
				<h1 className="font-bold text-xl">My Next.js App</h1>
				<div className="flex gap-4">
					<Link href="/performance">Performance</Link>
					<Link href="/reliability">Reliability</Link>
					{/* <h1>Performance</h1>
					<h1>Reliability</h1> */}
				</div>
			</nav>
		</div>
	);
}
export default NavbarPage;