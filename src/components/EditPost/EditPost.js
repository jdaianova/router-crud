import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './EditPost.css';



function EditPost() {
    let history = useNavigate();

    const currentId = localStorage.getItem('Id');
    const [content, setContent] = useState(localStorage.getItem('Content'));

    const handleUpdate = (e) => {
        axios.put('http://localhost:7070/posts/' + currentId, {
            "content": content
        });
        history('/');
    };

    return (
        <div className="EditPost">
            <form onSubmit={(e) => handleUpdate(e)}>
                <textarea
                    type='text'
                    required
                    placeholder='enter text of post'
                    value={content}
                    onChange={(e) => { setContent(e.target.value) }}
                />
                <button type='submit'>Update</button>

            </form>
        </div>
    )
}

export default EditPost;