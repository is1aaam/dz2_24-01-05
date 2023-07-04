import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://jsonplaceholder.typicode.com/posts', { title, body })
            .then(response => {
                console.log(response.data);
                navigate('/');
            })

    }

    return (
        <div>
            <h1>Создать пост</h1>
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

export default CreatePost;