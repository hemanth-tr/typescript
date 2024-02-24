import config from './config.json' assert {type: "json"};
import path from 'path';

const __dirname = path.resolve();
const pages = config.pages;
const errorPage = path.join(__dirname, 'pages', 'error.html')
function render(fileName) {
	let filePath = '';
	pages.forEach(page => {
		if (page.name == fileName) {
			filePath = path.join(__dirname, 'pages', page.value)
		}
	})

	if (filePath == '') {
		return errorPage
	}

	return filePath
}

export function renderView(viewName = null, data) {

	let view = viewName
	if (view == '' || view == undefined) {
		view = render(this.req.route.path)
	} else {
		view = render(viewName)
	}

	this.sendFile(view)
}