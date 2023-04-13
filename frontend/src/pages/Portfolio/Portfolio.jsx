import './Portfolio.scss'
import Header from "../../Layouts/Header/Header";
import Name from "../../Layouts/Name/Name";
import Post from "../../Layouts/Post/Post";
import Title from '../../components/Title/Title';
import { useRef } from 'react';
import { useState } from 'react';
import Tabs from '../../Layouts/Tabs/Tabs';
import { PostContext } from '../../context';
import makeRemoteRepos from '../../api/repos/makeRemoteRepos';
import { useEffect } from 'react';
import makeDownloadReadMe from '../../api/repos/downloadReadMe/makeDownloadReadMe';
import makeGetUserFollowers from '../../api/user/userFollowers/makeGetUserFollowers';
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
        followers: 0,
	})

   

    const repos = makeRemoteRepos()
    const readme = makeDownloadReadMe()
    const pages = makeGetPages()
    const getFollowers = makeGetUserFollowers()
	// window.onscroll = e => {
	// 	const scrollHeight = window.scrollY + window.innerHeight
	// 	if (scrollHeight >= wrapper.current.getBoundingClientRect().height - 300) {
	// 		fetchPosts(reposNames[state.loadedPostsLength].name)
	// 	}
	// 	//log(state.loadedPostsLength, '/' , state.allPostsLength)
	// }

    function select(from, to, str) {
        if (str.indexOf(from) === -1 || str.indexOf(to) === -1) return null
        return str.substring(
            str.indexOf(from) + from.length, 
            str.lastIndexOf(to)
        )
    }

	class ProjectPost {
        constructor(repoName, repoReadme) {
            if (repoReadme.indexOf('<Disabled/>') === -1) {

                this.fullName = select('<name>', '</name>', repoReadme)
                this.name = repoName
                this.description = select('<-', '->', repoReadme)
                this.writeOn = [<Node />]
                this.params = []
                
            } else {

                this.invalid = true

            }

        }

        isValid() { 
            if (this.invalid) {
                
                return false
                
            } 
            else return true   
        }

        async add() {
            
            try {
                const response = await pages.get(this.name)
                if (!response) {
                    this.params.push('noPages')
                } 
            } catch (error) {
                log(error)
                this.params.push('noPages')
            }
            log(this)
            setPosts(prevState => [...prevState, this])
        }
    }

	function postFilter(filter) {

	}
	
    

    async function fetchPosts(name) {
        await repos.getReposContents(name)
            .then(data => {
                if (data.some(repo => repo.name === 'README.md')) {
                    readme.download(name)
                        .then(text => {
                            
                            const post = new ProjectPost(name, text)
                            if (post.isValid()) {
                                
                                post.add()
                            }
                            //postConstruct(text, name)
                           
                        })
                    
                        
                        .catch(error => console.log(error))
                    

                } else {
                    //console.log(`${name} - NO`)
                }
            })
            .catch(error => console.log(error))
    }

    
    
    useEffect(() => {
        
        repos.getAll()
            .then(data => {

                data.map(item => fetchPosts(item.name))

            })
            .catch(error => console.log(error))
        
        getFollowers.get()
            
            .then(data => setState({ ...state, followers: data.length }))
            .catch(error => console.log(error))
        
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
                <Header followers={state.followers} />

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
