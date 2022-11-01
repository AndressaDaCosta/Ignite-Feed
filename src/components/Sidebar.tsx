import { PencilSimpleLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1519936842580-b4bd2cff9352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=570&q=50"
				alt=""
			/>

			<div className={styles.profile}>
				<Avatar
					src="https://github.com/AndressaDaCosta.png"
					alt=""
				/>
				<strong>Andressa da Costa</strong>
				<span>Front-End Web Developer</span>
			</div>

			<footer>
				<a href="#">
					<PencilSimpleLine size={19} /*color="blueviolet"*/ />
					Editar seu Perfil
				</a>
			</footer>
		</aside>
	);
}
