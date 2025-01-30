import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function Post({ username, content }) {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');
    const [expanded, setExpanded] = useState(false);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleAddComment = () => {
        if (commentInput.trim()) {
            const newComment = {
                id: uuidv4(),
                text: commentInput,
            };
            setComments([...comments, newComment]);
            setCommentInput('');
        }
    }

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    const commentsToDisplay = expanded ? comments : comments.slice (-1);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleAddComment();
        }
    }

    return (
        <div className="post">
            <h3>{username}</h3>
            <p>{content}</p>

        {/* Comment Section */}
            <div className="post__comments">
                <textarea
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Write a comment..."
                />

                {/* Action Buttons */}
                <div className="post__actionButtons">
                    <button onClick={handleAddComment} className="post__commentButton">
                        Comment
                    </button>
                    <button onClick={handleLike} className="post__likeButton">
                        Like {likes > 0 && `(${likes})`}
                    </button>
                </div>


                <div className="post__commentsList">
                    {commentsToDisplay.map((comment) => (
                        <p key={comment.id} className="post__comment">{comment.text}</p>
                    ))}

                    {comments.length > 2 && !expanded && (
                        <button onClick={toggleExpanded} className="post__expandButton">
                            View more comments
                        </button>
                    )}

                    {expanded && (
                        <button onClick={toggleExpanded} className="post__expandButton">
                            Hide comments
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Post;