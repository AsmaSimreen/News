import React from 'react';
import Comments from './Comments';
import '../App.css';
export default function NewsPosts({ posts }) {
    if (posts.length === 0) {
        return <div><h1>Loading...</h1></div>;
    }
    const comments = (() => {
        
        <Comments post={posts[index]}></Comments>
    })
    return (
        <div>
            <h1>News Top 10 Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li className="posts" key={post.id}>
                        <a href={post.url}>{post.title}</a>
                        <button onClick={comments()}>Comments</button>
                        {/* <Comments post={posts[index]}></Comments> */}
                    </li>
                ))}
            </ul>
        </div >
    );
}
