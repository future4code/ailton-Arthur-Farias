import express from 'express'
import { AddressInfo } from 'net'
import { playlist, Playlist, Musicas } from './data'

const app = express()
app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo
		console.log(`Server is running in http://localhost:${address.port}`)
	} else {
		console.error(`Failure upon starting server.`)
	}
})
app.get('/ping', (request, response) => {
	console.log('Pong! 🏓')
})
app.get('/visualizaPlaylist', (resquest, response) => {
	response.send(playlist)
})
