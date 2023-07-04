import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                const post = response.data;
                setTitle(post.title);
                setBody(post.body);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title, body })
            .then(response => {
                console.log(response.data);
                navigate('/');
            })

    }

    return (
        <div>
            <h1>Изменить пост</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Заголовок"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Текст поста"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
                <button type="submit">Сохранить</button>
            </form>
        </div>
    );
}

export default UpdatePost;