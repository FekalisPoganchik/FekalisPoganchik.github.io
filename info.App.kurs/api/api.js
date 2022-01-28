import axios from 'axios'
import cheerio from 'cheerio'
import iconv from 'iconv-lite'
import fs from 'fs'

const getHtml = async () => {
	const config = {
		method: 'get',
		url: 'http://mnokol.tyuiu.ru/rtsp/shedule/show_shedule.php?action=group&union=0&sid=246&gr=583&year=2022&vr=1',
		responseType: 'arraybuffer',
		responseEncoding: 'binary'
	}
	const { data } = await axios(config)
	const html = iconv.decode(data, 'cp-1251')
	const $ = cheerio.load(html)
	return $
}

const getTrs = (htmlObject) => {
	const table = htmlObject("#main_table")
	const tbody = table.children('tbody')
	const trs = tbody.children('tr').toArray()
	return trs
}

const getData = (tr) => {
	let dataObject = []
	tr.childNodes.forEach((td) => {
		let fullString = ''
		td.childNodes.forEach((child) => {
			if (child.data) {
				fullString += ` ${child.data}`
			}
			else {
				if (child.name === 'table') {
					child.childNodes[0].childNodes[0].childNodes.forEach((td) => {
						td.childNodes.forEach((div) => {
							if (div.attribs.value)
								div.childNodes.forEach((content) => { if (content.data) fullString += ` ${content.data}` })
						})
					})
				}
			}
		})
		dataObject.push(fullString.trim())
	})
	return dataObject
}

const getDataObject = (array) => {
	const dataObject = {}
	const keys = JSON.parse(JSON.stringify(array[0]))
	const values = JSON.parse(JSON.stringify(array.splice(1, array.length - 1)))
	keys.forEach((key, index) => {
		dataObject[key] = values.map((value) => value[index])
	})
	return dataObject
}

const parseHtml = async () => {
	const htmlObject = await getHtml()
	const trs = getTrs(htmlObject)
	const values = trs.map((tr) => getData(tr))
	const dataObject = getDataObject(values)
	writeResponseToFile(dataObject)
}

const writeResponseToFile = (data) => {
	fs.writeFile('json/data.json', JSON.stringify(data), err => {
		if (err) {
			console.error(err)
			return
		}
	})
}

parseHtml()
console.log('parsing html...')
setInterval(() => {
	parseHtml()
	console.log('parsing html...')
}, 6000)