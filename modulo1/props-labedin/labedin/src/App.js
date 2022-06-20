import React from 'react'
import './App.css'
import CardGrande from './components/CardGrande/CardGrande'
import ImagemButton from './components/ImagemButton/ImagemButton'
import CardPequeno from './components/cardPequeno/cardPequeno'

function App() {
	return (
		<div className='App'>
			<div className='page-section-container'>
				<h2>Dados pessoais</h2>
				<CardGrande
					imagem='imagem/Sem Título-2.png'
					nome='Arthur Farias'
					descricao='Olá, eu sou o Arthur Farias, tenho 19 anos, atualmente estudo na Labenu para virar desenvolvedor web'
				/>

				<ImagemButton
					imagem='https://image.flaticon.com/icons/png/512/117/117472.png'
					texto='Ver mais'
				/>
			</div>

			<div className='page-section-container'>
				<h2>Experiências profissionais</h2>
				<CardGrande
					imagem='https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png'
					nome='Labenu'
					descricao='Estudando nessa instituição'
				/>

				<CardGrande
					imagem='https://imagens.canaltech.com.br/empresas/4418.400.jpg'
					nome='NASA'
					descricao='Apontando defeitos.'
				/>
			</div>

			<div className='page-section-container'>
				<h2>Minhas redes sociais</h2>
				<a href='https://www.facebook.com/'>
					<ImagemButton
						imagem='https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png'
						texto='Facebook'
					/>
				</a>
				<a href='https://twitter.com/sportrecife'>
					<ImagemButton
						imagem='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png'
						texto='Twitter'
					/>
				</a>

				<a href='https://www.linkedin.com/in/arthurcfarias/'>
					<CardPequeno
						imagem='https://logodownload.org/wp-content/uploads/2019/03/linkedIn-logo-0.png'
						texto='Linkedin'
					/>
				</a>
				<a href=''>
					<CardPequeno
						imagem='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-0.png'
						texto='Gmail'
					/>
				</a>
			</div>
		</div>
	)
}

export default App
