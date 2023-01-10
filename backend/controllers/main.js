const path = require('path')

module.exports.posts = async (req, res) => {
	res.send(global.projects[req.body[0]])
}

module.exports.postsLength = async (req, res) => {
	res.send([global.projectsLength])
	console.log(1);
}
