import './Portfolio.scss'
import Header from "../../Layouts/Header/Header";
import Name from "../../Layouts/Name/Name";
import Post from "../../Layouts/Post/Post";
import Title from '../../components/Title/Title';
import PixPe from '../../components/PixPe/PixPe';
import axios from 'axios';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const { log } = console



function Portfolio({ props }) {
	const [posts, setPosts] = useState([])
	const wrapper = useRef()

	const [state, setState] = useState({
		setAllPostsLength: 0,
		loadedPostsLength: 0,
	})

	window.onscroll = e => {
		const scrollHeight = window.scrollY + window.innerHeight
		if (scrollHeight >= wrapper.current.getBoundingClientRect().height - 300) {
			fetchPosts(state.loadedPostsLength)
		}
		log(state.loadedPostsLength === state.allPostsLength)
	}

	async function fetchPosts(id) {
		if (state.loadedPostsLength === state.allPostsLength) return
		await fetch(
			'http://localhost:5000/api/',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				
				body: JSON.stringify([id])
			}
		).then(res => res.json())
			.then(data => {
				if(typeof data === 'object' && posts.indexOf(data) != -1){
					setPosts([...posts, data])
					setState({...state, loadedPostsLength: state.loadedPostsLength + 1})
				}
			})
		
	}

	async function fetchPostsLength() {
		await fetch(
			'http://localhost:5000/api/posts-length',
			
		).then(res => res.json())
			.then(data => setState({...state, allPostsLength: data[0]}))
	
		
	}


	useEffect(() => {
		fetchPosts(0)
		fetchPostsLength()
	}, [])

	

	return (<>
		<PixPe />
		<Title />
		<div ref={wrapper} className="wrapper">
			<a name='top'></a>
			<Name />
			<Header />
			<Post postList={posts} />

		</div>
	</>)
}
export default Portfolio;
