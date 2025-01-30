import React, { useState } from 'react';

function PostInput({ onAddPost }) {
    const [input, setInput] = useState('');

    const handlePost = () => {
        if (input.trim()) {
            onAddPost(input);
            setInput('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handlePost();
        }
    }

    return (
        <div className="postInput">
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="What's on your mind?"
            />
            <button onClick={handlePost}>Post</button>
        </div>
    );
}

export default PostInput;