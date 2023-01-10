const { log } = console
export async function fetchPosts() {
	await fetch(
		'http://localhost:5000/api/',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			//mode: 'no-cors',
			body: JSON.stringify([2])
		}
	).then(res => res.json())
		.then(data => log(data))
}