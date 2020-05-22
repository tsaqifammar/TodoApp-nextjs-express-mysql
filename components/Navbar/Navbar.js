import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

class Navbar extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<nav className={styles.nav}>
					<Link href="/">
						<a>TodoApp</a>
					</Link>
					<ul className={styles.navlists}>
						<li className={styles.navlist}>
							<Link href="/">
								<a>List</a>
							</Link>
						</li>
						<li className={styles.navlist}>
							<Link href="/crud">
								<a>Add Todo</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navbar;
