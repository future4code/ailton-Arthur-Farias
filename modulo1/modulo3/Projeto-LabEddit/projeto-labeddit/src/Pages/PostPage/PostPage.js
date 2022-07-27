import React from 'react'
import Header from '../../Components/Header/Header'

const PostPage = () => {
	return (
		<div>
			<Header />
			<div>
				<input placeholder='Adicionar comentário' />
				<button>Responder</button>
			</div>
		</div>
	)
}
export default PostPage
