import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Comments({ posts }) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        async function showComments() {
            const url = `https://hacker-news.firebaseio.com/v0/topstories.json`;
            try {
                const response = await axios.get(url);
                const json = response.data.kids;
                const promises = json.slice(0, 20).map(id =>
                    axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
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
            <Comments posts={comments} >
                {/* Comments */}
            </Comments>
        </div>
    )
}