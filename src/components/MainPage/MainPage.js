import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import axios from 'axios';
import Post from '../Post/Post';

function MainPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => { updatePosts() }, []);

    const updatePosts = () => {
        axios.get('http://localhost:7070/posts')
            .then(responce => {
                setPosts(responce.data);
            })
    }

    const handleDelete = (idDeletedPost) => {
        axios.delete('http://localhost:7070/posts/' + idDeletedPost);
        updatePosts();
    }

    const handleEdit = (editedPost) => {
        localStorage.setItem('Id', editedPost.id);
        localStorage.setItem('Content', editedPost.content);
    }

    return (
        <div className="MainPage">

            <Link to='/CreatePost'>
                <button>Create Post</button>
            </Link>

            <div className='posts'>
                {posts && posts.length > 0 ?
                    posts.map((item) => {
                        return <Post
                            key={item.id}
                            post={item}
                            handleDelete={handleDelete}
                            handleEdit = {handleEdit}
                        />

                    })
                    :
                    'no posts'}
            </div>

        </div>
    )
}

export default MainPage;