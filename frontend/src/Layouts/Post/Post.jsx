import Logo from '../../components/Logo/Logo';
import './Post.scss'
import { icons } from '../../data/IconList';
import UserName from '../../components/UserName/UserName';
import Href from '../../components/Href/Href';
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { MainContext } from '../../context';
import AltImage from '../../img/code.jpg'
import Loader from '../../components/Loader/Loader';
const { log } = console

function Post(props) {

    const { posts, setPosts } = useContext(MainContext)


    return (<>
        {posts.map((post, index) =>

            <div id={'post-' + (index + 1)} key={index} className="post">
                {/* <div className="post__head">
						<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z"></path></g></svg>
						Pinned Tweet
					</div> */}
                <div className="post__column post__column_left">
                    <Logo className='post__logo' />
                </div>
                <div className="post__column post__column_right">
                    <div className="post__bar post__bar_top">
                        <div className="post__userInfo userInfo">
                            <UserName />
                            <Href />
                            <span className="userInfo__point"> · </span>
                            <span className="userInfo__date">19h</span>
                        </div>
                    </div>
                    <div className="post__bar post__bar_bottom">
                        <div className='post__projectDescription projectDescription'>
                            <span>{post.fullName || post.name}</span>
                            <div className="projectDescription__text">

                                <br />
                                <p>{post.description}</p>
                                <br />
                            </div>
                            <div className="projectDescription__iconContainer">
                                Написан на:
                                {post.writeOn.map((icon, index) => <React.Fragment key={index}>{icon}</React.Fragment>)}

                            </div>



                        </div>
                        <div className="post__object">{
                            post.params.indexOf('noPages') ?
                                <a rel="noreferrer" target="_blank" href={post.otherHost || `https://casi-z.github.io/${post.name}/`}>

                                    <iframe title={index + 1} src={`https://casi-z.github.io/${post.name}/`} frameBorder="0">привет</iframe>

                                    <div className="title">
                                        <span>{post.fullName}</span>
                                    </div>

                                </a>
                                : <img src={AltImage} alt="" />
                        }</div>
                        <div className="projectDescription__links">
                            {post.params.indexOf('noPages') ? <a data-title='Hosting' rel="noreferrer" target="_blank" href={post.otherHost || `https://casi-z.github.io/${post.name}/`} equate="height" className="link link_hosting">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg>
                            </a> : <></>}
                            <a rel="noreferrer" data-title='Github' target="_blank" href={`https://github.com/casi-z/${post.name}/`} equate="height" className="link link_github">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        )}
        
    </>)
}
export default Post;