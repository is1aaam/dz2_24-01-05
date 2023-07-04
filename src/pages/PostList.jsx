import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data.slice(0, 10));
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>Список постов</h1>
            <Link to="/create" className='create'>Создать пост</Link>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        <br/>
                        <Link to={`/update/${post.id}`} className='update'>Изменить</Link>
                        <Link to={`/delete/${post.id}`} className='delete'>Удалить</Link>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default PostList;