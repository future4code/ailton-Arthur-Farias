import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'

export const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3000, () => {
	if (server) {
		const address = server.address() as AddressInfo
		console.log(`server is running in http://localhost:${address.port}`)
	} else {
		console.log(`falilure upon starting server`)
	}
})
