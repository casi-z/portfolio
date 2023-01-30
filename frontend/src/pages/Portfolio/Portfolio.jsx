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
import Tabs from '../../Layouts/Tabs/Tabs';

const { log } = console



function Portfolio({ props, children }) {
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
		//log(state.loadedPostsLength, '/' , state.allPostsLength)
	}
	

	async function fetchPosts(id) {
		log('work')
		if (state.allPostsLength && state.loadedPostsLength === state.allPostsLength) return

		await axios.post('/api/',{
				'id': id
			}
		).then(res => {
			
			if (typeof res.data === 'object' && posts.indexOf(res.data) == -1) {
				setPosts([...posts, res.data])
				setState({...state, loadedPostsLength: state.loadedPostsLength + 1})
			}
		}).catch(err => log(err))

	}

	async function fetchPostsLength() {
		await axios.get('/api/posts-length')
			.then(res => setState({ ...state, allPostsLength: res.data[0] }))
			


	}

	function showWatchers() {
		const token = '#}@@uVoIdq4$@8baW0WDIVR2B---1'
		if (!localStorage.getItem('token') === token) {
			localStorage.setItem('token', token)
			addWatcher()
		}
	}

	async function addWatcher() {
		await axios.post('/api/add-watcher', {
			id: 1
		})
	}
	function postFilter(filter) {
		
	}
	useEffect(() => {
		fetchPostsLength()
		fetchPosts(0)
		showWatchers()
		
	}, [])



	return (<>
		
		<Title />
		{children}
		<div ref={wrapper} className="wrapper">
			<a name='top'></a>
			<Name />
			<Header />

			<Tabs props={{
				'posts': posts,
				'setPosts': setPosts,
				'postFilter': postFilter,
				'state': state,
				'setState': setState,
				'fetchPosts': fetchPosts
			}} />
			
			<Post props={{
				admin: props.admin,
				'posts': posts,
				'setPosts': setPosts,
				
			}} />

		</div>
	</>)
}
export default Portfolio;
