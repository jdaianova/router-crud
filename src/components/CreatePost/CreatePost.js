import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './CreatePost.css';

function CreatePost() {
    let history = useNavigate();

    const [content, setContent] = useState('');

    const handleCreatePost = (currentText) => {
        axios.post('http://localhost:7070/posts', {
            "id": 0,
            "content": currentText
        });
        history('/');
    };

    return (
        <div className="CreatePost">
            <form onSubmit={() => handleCreatePost(content)}>
                <textarea
                    type='text'
                    required
                    placeholder='enter text of post'
                    value={content}
                    onChange={(e) => { setContent(e.target.value) }}
                />

                <button type='submit'>Create</button>

            </form>

        </div>

    )
}

export default CreatePost;