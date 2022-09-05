import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';


import styles from './Post.module.css';

export interface PostProps {
	author: {
	  avatarUrl: string;
	  name: string;
	  role: string
	},
	content: {
	  type: 'paragraph' | 'link';
	  content: string
	}[],
	publishedAt: Date
  }


export function Post({ author, publishedAt, content }: PostProps) {
	// estado = variáveis que eu quero que o componente monitore
	const [comments, setComments] = useState(['Post muito bacana, hein?!']);

	const [newCommentText, setNewCommentText] = useState('');

	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBR
		}
	);

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true
	});

	// evento do usuário padrao handle...
	function handleCrateNewComment(event: FormEvent) {
		event.preventDefault();

		// setComments([1,2,3]); imutabilidade
		// ... spread operator
		setComments([...comments, newCommentText]);
		setNewCommentText('');
	}

	function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('');
		setNewCommentText(event.target.value);
	}

	function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('Esse campo é obrigatório!');
	}

	const isNewCommentEmpty = newCommentText.length === 0;

	function deleteComment(commentToDelete: string) {
		const commentsWithoutDeletedOne = comments.filter((comment) => {
			return comment !== commentToDelete;
		});

		setComments(commentsWithoutDeletedOne);

		// imutabilidade -> as variáveis não sofrem mutação, nos criamos um novo valor(um novo espaço na memória)
	}

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((line) => {
					if (line.type === 'paragraph') {
						return <p key={line.content}>{line.content}</p>;
					} else if (line.type === 'link') {
						return (
							<p key={line.content}>
								<a href="#">{line.content}</a>
							</p>
						);
					}
				})}
			</div>

			<form
				onSubmit={handleCrateNewComment}
				className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				{/* <textarea placeholder="Deixe um comentário" /> */}
				<textarea
					name="comment"
					placeholder="Deixe um comentário"
					value={newCommentText}
					onChange={handleNewCommentChange}
					onInvalid={handleNewCommentInvalid}
					required
				/>

				<footer>
					<button
						type="submit"
						disabled={isNewCommentEmpty}>
						Publicar
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => {
					return (
						<Comment
							key={comment}
							content={comment}
							onDeleteComment={deleteComment}
						/>
					);
				})}
			</div>
		</article>
	);
}
