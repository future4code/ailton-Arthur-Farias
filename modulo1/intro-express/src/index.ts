import express from 'express'
import cors from 'cors'
import { playlist, Playlist } from './data'

const app = express()

app.use(express.json())
app.use(cors())
//EXERCICIO 1
app.get('/', (req, res) => {
	res.send('hello from Express')
})
//-----------------------------------------------------
//------------------------------------------------------
//EXERCICIO 2
app.get('/pegar-dados-params/:id', (req, res) => {
	res.send('hello from Express id')
})
app.get('/pegar-dados-params/:name', (req, res) => {
	res.send('hello from Express name')
})
app.get('/pegar-dados-params/:phone', (req, res) => {
	res.send('hello from Express phone')
})
app.get('/pegar-dados-params/:email', (req, res) => {
	res.send('hello from Express email')
})
app.get('/pegar-dados-params/:website', (req, res) => {
	res.send('hello from Express website')
})
//-----------------------------------------------------------
//-----------------------------------------------------------
//EXERCICIO 4
app.get('/retornaPlaylist', (request, response) => {
	response.send(playlist)
})

app.listen(3003, () => {
	console.log('Server is running in http://localhost:3003')
})
