import React from 'react';

export default function NewsPosts({ posts }) {
    if (posts.length === 0) {
        return <div><h1>Loading...</h1></div>;
    }

    return (
        <div>
            <h1>News Top 10 Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <a href={post.url}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
