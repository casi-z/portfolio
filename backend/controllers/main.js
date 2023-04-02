const fs = require('fs')
const mysql = require("mysql2")
const obj = (fs.readFileSync('./watchers.json', 'utf8'));



module.exports.posts = async (req, res) => {
	global.con.query(`SELECT * FROM projects WHERE id = ${req.body.id + 1}`, (error, result) => {
		if (error) throw error
		res.send(result[0])
	})
}

module.exports.postsLength = async (req, res) => {
	global.con.query('SELECT * FROM projects', (error, result) => {
		if (error) throw error
		res.send([result.length])
	})


}
module.exports.getWatchers = async (req, res) => {
	// global.con.query(`SELECT * FROM watchers`, (error, result) => {
	// 	if (error) throw error
	// 	console.log(result);
	// 	// res.send(result[0])
	// })

	res.send(obj);

}

module.exports.addWatcher = async (req, res) => {
	//res.status(400)
	fs.writeFileSync('./watchers.json', `{"watchers":${(JSON.parse(fs.readFileSync('./watchers.json', 'utf8'))).watchers + 1}}`)
}
module.exports.addPost = (req, res) => {
	//console.log(req.body);
	res.status(400)
	global.con.query(
		`UPDATE projects SET 
		description = '${req.body.newPost.description}'  
		WHERE id = '${req.body.newPost.id}';`,
		function (error) {
			if (error) throw error

		}
	)
	global.con.query(
		`UPDATE projects SET 
		fullName = '${req.body.newPost.fullName}'  
		WHERE id = '${req.body.newPost.id}';`,
		function (error) {
			if (error) throw error

		}
	)
}