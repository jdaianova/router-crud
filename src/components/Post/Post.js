import './Post.css';
import ava from '../../data/ava.jpg';
import { Link } from 'react-router-dom';


function Post({ post, handleDelete, handleEdit }) {

    return (
        <div className="Post" >
            <div className='Post__Header'>
                <img src={ava}></img>
                <div className='Post__Header__Info'>
                    <h6>Princess</h6>
                    <p>5 min ago</p>
                </div>
            </div>

            <div className='Post__Content'>{post.content}</div>

            <div className='Post__Btn'>
                <Link to={'/EditPost'}>
                    <button onClick={() => { handleEdit(post) }}>edit</button>
                </Link>
                &nbsp;
                <button onClick={() => { handleDelete(post.id) }}>delete</button>
            </div>
        </div>
    )
}

export default Post;