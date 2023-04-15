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
import Node from '../../components/Icons/Node.jsx';
import makeGetPages from '../../api/repos/getPages/makeGetPages';
import { icons } from '../../data/IconList';
const { log } = console



function Portfolio({ props, children }) {
    const [posts, setPosts] = useState([])
    const wrapper = useRef()

    const [state, setState] = useState({
        allPostsLength: 0,
        loadedPostsLength: 0,
        followers: 0,
        isLoading: false,
    })



    const repos = makeRemoteRepos()
    const readme = makeDownloadReadMe()
    const pages = makeGetPages()
    const getFollowers = makeGetUserFollowers()
    

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
                this.writeOn = getStack()
                this.params = []

                function getStack(params) {
                    const stackString = select('<stack>', '</stack>', repoReadme)
                    if (stackString) {
                        return stackString.split(', ').map(item => icons[item])
                    } else {
                        return []
                    }
                    
                }

            } else {

                this.invalid = true

            }

        }

        isValid() {
            
            if (
                !this.invalid 
                && this.description
                
            ) {
                return true
            }
            else return false
        }

        async fetchPages() {
            try {
                const response = await pages.get(this.name)
                if (!response) {
                    this.params.push('noPages')
                }
            } catch (error) {
                log(error)
                this.params.push('noPages')
            }
        }



        add() {
            setPosts(prevState => [...prevState, this])
        }
    }

    function postFilter(filter) {

    }


    let num = 0
    function fetchPosts(reposList) {
        if (num > reposList.length) return
        fetchPost()
        
        async function fetchPost() {
            if ((num + 1) > reposList.length) return
            const name = reposList[num].name
            
            num++
            repos.getReposContents(name)

                .then(files => {

                    if (files.some(file => file.name === 'README.md')) {

                        readme.download(name)

                            .then(async text => {
                                
                                const post = new ProjectPost(name, text)

                                if (post.isValid()) {

                                    await post.fetchPages()
                                    post.add()
                                } else {

                                    fetchPost()
                                }

                            })
                    } else {
                        fetchPost()
                    }
                })
                .catch(error => {
                    fetchPost()
                })
        }
    }

    useEffect(() => {

        repos.getAll()
            .then(data => {

                fetchPosts(data)

                window.onscroll = () => {

                    const scrollHeight = window.scrollY + window.innerHeight

                    if (scrollHeight >= wrapper.current.getBoundingClientRect().height - 300) {

                        fetchPosts(data)
                       
                    }
                }

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
