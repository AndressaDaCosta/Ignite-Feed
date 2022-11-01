// Componente é uma função que retorna HTML, arquivos.jsx
// JSX = Javascript + XML (HTML) arquivo javascript que contém html

import { Header } from './components/Header';
import { Post, PostProps } from './components/Post';
import { Sidebar } from './components/Sidebar';
import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css';

import './global.css';

interface Posts extends PostProps {
	id: string;
}

const posts: Posts[] = [
	{
		id: uuidv4(),
		author: {
			avatarUrl: 'https://github.com/diego3g.png',
			name: 'Diego Fernandes',
			role: 'CTO @Rocketseat'
		},
		content: [
			{ type: 'paragraph', content: 'Fala galera 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
			},
			{ type: 'link', content: '👉🏼 jane.design/doctorcare' },
			{ type: 'link', content: ' #novoprojeto #nlw #rocketseat' }
		],
		publishedAt: new Date('2022-09-03 20:00:00')
	},
	{
		id: uuidv4(),
		author: {
			avatarUrl: 'https://github.com/maykbrito.png',
			name: 'Mayk Brito',
			role: 'Educator @Rocketseat'
		},
		content: [
			{ type: 'paragraph', content: 'Fala pessoal 🤙🏽' },
			{
				type: 'paragraph',
				content:
					'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏽 '
			},
			{ type: 'paragraph', content: 'Acesse e deixe seu feedback!' },
			{ type: 'link', content: '👉🏽 Mayk.design' }
		],
		// mdn Intl DateTime formatting
		publishedAt: new Date('2022-08-31 20:00:00')
	}
];

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}
