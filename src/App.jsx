import {Route,Routes} from 'react-router-dom'
import './App.css'
import MainPage from "./pages/mainPage/MainPage.jsx";
import PostList from "./pages/postList/PostList.jsx";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.jsx";
import Layout from "./components/Layout.jsx";
import UpdatePost from "./pages/updatePost/UpdatePost.jsx";
import CreatePost from "./pages/createPost/CreatePost.jsx";
import SinglePost from "./pages/singlePost/SinglePost.jsx";
import DeletePost from "./pages/deletePost/DeletePost.jsx";


function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path='posts' element={<PostList/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                    <Route path='posts/:id' element={<SinglePost/>}/>
                    <Route path="/create" element={<CreatePost/>} />
                    <Route path="/update/:id"  element= {<UpdatePost  />} />
                    <Route path="/delete/:id"  element= {<DeletePost  />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
