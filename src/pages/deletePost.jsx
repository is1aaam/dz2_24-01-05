import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

const DeletePost = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDelete = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(response => {
            console.log(response.data);
            navigate('/');
          })


        navigate('/');
    }

    const handleCancel = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>Вы действительно хотите удалить пост {id} ?</h1>
            <button onClick={handleDelete}>Да</button>
            <button onClick={handleCancel}>Нет</button>
        </div>
    );
}

export default DeletePost;