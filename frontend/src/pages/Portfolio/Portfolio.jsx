import './Portfolio.scss'
import Header from "../../Layouts/Header/Header";
import Name from "../../Layouts/Name/Name";
import Post from "../../Layouts/Post/Post";
import Title from '../../components/Title/Title';
import axios from 'axios';
import { useRef } from 'react';
import { useState } from 'react';
import Tabs from '../../Layouts/Tabs/Tabs';
import { PostContext } from '../../context';
import makeRemoteRepos from '../../api/repos/makeRemoteRepos';
import { useEffect } from 'react';
import makeDownloadReadMe from '../../api/repos/downloadReadMe/makeDownloadReadMe';
import getPages from '../../api/repos/getPages/getPages';
import { ApiClientFactory } from '../../api/ApiClientFactory';
import { API_GIT_BASE_URL, API_GIT_USER } from '../../api/constants';
import React from '../../components/Icons/React';
import Node from '../../components/Icons/Node';
import makeGetPages from '../../api/repos/getPages/makeGetPages';

const { log } = console



function Portfolio({ props, children }) {
    const [posts, setPosts] = useState([])
	const wrapper = useRef()

	const [state, setState] = useState({
		allPostsLength: 0,
		loadedPostsLength: 0,
	})

   

    const repos = makeRemoteRepos()
    const readme = makeDownloadReadMe()
    const pages = makeGetPages()
    
	// window.onscroll = e => {
	// 	const scrollHeight = window.scrollY + window.innerHeight
	// 	if (scrollHeight >= wrapper.current.getBoundingClientRect().height - 300) {
	// 		fetchPosts(reposNames[state.loadedPostsLength].name)
	// 	}
	// 	//log(state.loadedPostsLength, '/' , state.allPostsLength)
	// }


	// function showWatchers() {
	// 	const token = '#}@@uVoIdq4$@8baW0WDIVR2B---1'
	// 	if (!localStorage.getItem('token') === token) {
	// 		localStorage.setItem('token', token)
	// 		addWatcher()
	// 	}
	// }

	// async function addWatcher() {
	// 	await axios.post('/api/add-watcher', {
	// 		id: 1
	// 	})
    // }
    
	function postFilter(filter) {

	}
	
    function select(from, to, str) {
        if (str.indexOf(from) === -1 || str.indexOf(to) === -1) return null
        return str.substring(
            str.indexOf(from) + from.length, 
            str.lastIndexOf(to)
        )
    }
    
    async function fetchPosts(name) {
        await repos.getReposContents(name)
            .then(data => {
                if (data.some(repo => repo.name === 'README.md')) {
                    readme.download(name)
                        .then(text => {
                            postConstruct(text, name)
                           
                        })
                    
                        
                        .catch(error => console.log(error))
                    

                } else {
                    //console.log(`${name} - NO`)
                }
            })
            .catch(error => console.log(error))
    }

    async function postConstruct(text, name) {
        if (text.indexOf('<Disabled/>') === -1) {
            let postInput = {
                name,
                description: '',
                writeOn: [],
                params: []
            }
            try {
                const response = await pages.get(name)
                if (!response) {
                    postInput.params.push('noPages')
                } 
            } catch (error) {
                log(error)
                postInput.params.push('noPages')
            }
           
            postInput.fullName = select('<name>', '</name>', text)
            postInput.description = select('<-', '->', text)
            postInput.writeOn = [<Node />]
           
                
            
            
            
            setPosts(prevState => [...prevState, postInput])
        }
    }
    
    useEffect(() => {
        
        repos.getAll()
            .then(data => {

                data.map(item => fetchPosts(item.name))

            })
            .catch(error => console.log(error))
            //showWatchers()
    }, [])

	return (<>
		<Title />
		{children}
		<div ref={wrapper} className="wrapper">
			<a name='top'></a>
			<Name />

			<PostContext.Provider value={{
				posts,
				setPosts,
			}}>
				<Header />

				<Tabs props={{
					postFilter,
					state,
					setState,
					fetchPosts
				}} />

				<Post props={{
					admin: props.admin,

				}} />
			</PostContext.Provider>

		</div>
	</>)
}
export default Portfolio;
