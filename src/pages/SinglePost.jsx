import {useParams,useNavigate} from "react-router-dom";

const SinglePost= () => {
   const params = useParams()
    const navigate= useNavigate()
    console.log(params)

    return (
        <div>
            SinglePost {params.id}
        <button onClick={() => navigate(-1)}>Назад</button>
        </div>
    );
}

export default SinglePost;