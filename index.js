import express from "express"
import bodyParser from "body-parser"
import createFile from "create-file"
import { renderView } from "./utility.js"
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
express.response.renderView = renderView

app.get('/', (req, res) => {

	res.renderView()
})

app.post('/', (req, res) => {

	createFile(req.body.file, req.body.content, (error) => {
		if (error) {
			console.log(error)
			res.renderView('/error', error)
			return
		}
	})

	res.redirect('/')
})

app.get('/about', (req, res) => {
	res.renderView()
})

app.get('/error', (req, res) => {
	res.renderView()
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})