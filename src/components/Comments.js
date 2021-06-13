import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Comments(props) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        async function showComments() {
            try {
                const json = props.post.kids;
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
        }
        showComments();
    })
   
    return (
        <div className="comments">
            <ul>
                {comments.map(comments => (
                    <li className="comments" key={comments.id}>
                        <p>{comments.text}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}