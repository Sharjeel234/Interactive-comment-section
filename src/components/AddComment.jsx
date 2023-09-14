import { useState } from "react"
import { john, send } from '../assets'
import CommentInfo from "./CommentInfo";

const AddComment = () => {

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [selectedComment, setSelectedComment] = useState(null);
  const [editedComment, setEditedComment] = useState('');

  const handleNewComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObject = {
        id: comments.length + 1,
        image: john,
        name: 'John Doe',
        username: 'johndoe',
        comment: newComment,
      };
      setComments([...comments, newCommentObject]);
      setNewComment('');
    }
  };
  const handleEditComment = () => {
    if (editedComment.trim() !== '') {
      const updatedComments = comments.map((comment) =>
        comment.id === selectedComment.id
          ? { ...comment, comment: editedComment }
          : comment
      );
      setComments(updatedComments);
      setSelectedComment(null);
      setEditedComment('');
    }
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-full">
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <div className="comment-info">
              {selectedComment && selectedComment.id === comment.id ? (
                <div className="bg-input flex justify-start w-[630px] max-sm:w-[450px] gap-4 p-4 rounded-md">
                  <textarea
                    value={editedComment}
                    onChange={(e) => setEditedComment(e.target.value)}
                    placeholder="Edit your comment..."
                    className="w-full bg-transparent outline-none"
                  />
                  <button onClick={handleEditComment} className="text-my-blue font-poppins font-medium">Save</button>
                </div>
              ) : (
                <CommentInfo name={comment.name} userName={comment.username} image={comment.image} content={comment.comment} />
              )}
              <div className="flex gap-4 justify-center items-center">
                <button
                  onClick={() =>
                    setSelectedComment(selectedComment === comment ? null : comment)
                  }
                  className="text-my-blue font-poppins font-medium"
                >
                  {selectedComment === comment ? 'Cancel' : 'Edit'}
                </button>
                <button onClick={() => handleDeleteComment(comment.id)} className="text-my-red font-poppins font-medium">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-input flex justify-start w-[630px] max-sm:w-[450px] gap-4 p-4 rounded-md">
        <img src={john} alt="user" />
        <div className="flex w-full">
          <input
            placeholder="Write your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full bg-transparent outline-none"
          />
          <button onClick={handleNewComment}><img src={send} alt="send" className="w-8 h-8" /></button>
        </div>
      </div>
    </div>
  )
}

export default AddComment