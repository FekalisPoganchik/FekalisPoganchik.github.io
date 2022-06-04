import parsedData from './json/data.json'

const createTable = (data) => {
	const rowsAmount = []
	for (let i = 0; i < parsedData[Object.keys(parsedData)[0]].length; i++) rowsAmount.push(i)

	const table = `
		<table>
			<tbody>
				<tr>
					${Object.keys(parsedData).map((th) => `<td>${th}</td>`).join(`
					`)}
				</tr>
				${rowsAmount.map((index) => {
					return (
						`<tr>
							${Object.keys(parsedData).map((td) => `<td>${parsedData[td][index]}</td>`).join(`
							`)}
						</tr>`
					)
				}).join(`
				`)}
			</tbody>
		</table>
	`
	return table
}

const table = createTable(parsedData)

document.querySelector('#table').innerHTML = table