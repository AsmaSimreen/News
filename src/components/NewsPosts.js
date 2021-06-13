import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
import Comments from './Comments';

export default function NewsPosts({ posts }) {
    const [comments, setComments] = useState([]);
    // useEffect(() => {
    const getNewsId = (async(index) => {
        try {
            const json = posts[index].kids;
            const promises = json.slice(0, 20).map(id =>
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(
                    response => response.data
                )
            );
            const result = await Promise.all(promises);
            setComments(result);
        }
        catch (err) {
            console.log(err);
        }
    })
    return (
        <>
            <div>
                <h1>News Top 10 Posts</h1>
                <ul>
                    {posts.map((post, index) => (
                        <li className="posts" key={post.id}>
                            <a href={post.url}>{post.title}</a>
                            <li>
                                <Link to="/comments">
                                    <button onClick={() => {
                                        getNewsId(index)
                                    }
                                    }>View Comments</button>
                                </Link>

                            </li>
                        </li>
                    ))
                    }
                </ul >
            </div >

            <div className="comments">
                <ul>
                    {comments.map(comments => (
                        <li className="comments" key={comments.id}>
                            <p>{comments.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}