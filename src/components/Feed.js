import React, {useState} from 'react';
import Post from './Post';
import PostInput from './PostInput';
import { v4 as uuidv4 } from 'uuid';

function Feed() {
    const [posts, setPosts] = useState([
        { id: uuidv4(), username: 'John Doe', content: 'This is the first post!' },
        { id: uuidv4(), username: 'Jane Smith', content: 'This is the Second post!' }
    ]);

    const addPost = (content) => {
        const newPost = {
            id: uuidv4(),
            username: 'CurrentUser',
            content,
        };
        setPosts((prevPosts) => [newPost, ...prevPosts]);
    };

    return (
        <div className="feed">
            <h2>Feed</h2>
            <PostInput onAddPost={addPost} /> {/* Post Input Box */}
            {posts.map(post => (
                <Post key={post.id} username={post.username} content={post.content} />
            ))}
        </div>
    );
}

export default Feed;