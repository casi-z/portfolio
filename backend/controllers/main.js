const fs = require('fs')
const mysql = require("mysql2")
const obj = (fs.readFileSync('./watchers.json', 'utf8'));

module.exports.posts = async (req, res) => {
	res.send(global.projects[req.body.id])
}

module.exports.postsLength = async (req, res) => {
	res.send([global.projectsLength])
	
	
}
module.exports.getWatchers = async (req, res) => {
	
	res.send(obj);
	
}
module.exports.addWatcher = async (req, res) => {
	res.send([global.projectsLength])
	fs.writeFileSync('./watchers.json', `{"watchers":${(JSON.parse(fs.readFileSync('./watchers.json', 'utf8'))).watchers + 1}}`)
}
module.exports.addPost = (req, res) => {
	//console.log(req.body);
	res.send([1])
	global.con.query(
		`UPDATE projects SET description = '${req.body.newPost.description}'  WHERE id = '${req.body.newPost.id}';`,
		function (error, result) {
			if (error) throw error
			console.log(result);
		}
	)
}