import http from 'http'

http.createServer((req, res) => {
	res.write('hello')
	res.end()
}).listen(3000)