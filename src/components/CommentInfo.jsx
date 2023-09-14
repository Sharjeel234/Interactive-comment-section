import { useState } from 'react'
import HeartBtn from './HeartBtn'
import ReplyBtn from './ReplyBtn'
import Reply from './Reply'
import { like, unlike, john } from '../assets'


const CommentInfo = ({ image, name, userName, content }) => {

    const [count, setCount] = useState(1)
    const [replies, setReplies] = useState([])
    const [replyContent, setReplyContent] = useState('')

    const handleReply = () => {
        if (replyContent.trim() !== '') {
            const newReply = {
                author: 'John Doe',
                username: 'johndoe',
                image: john,
                content: replyContent,
            };
            setReplies([...replies, newReply]);
            setReplyContent('')
        }
    };

    const handleDeleteReply = (index) => {
        const updatedReplies = [...replies];
        updatedReplies.splice(index, 1);
        setReplies(updatedReplies);
      };
    return (
        <div className='flex flex-col p-2 w-[630px] max-sm:w-[450px]'>
            <div className='flex items-start gap-4 bg-white p-4 rounded-md shadow-lg'>
                <img src={image} alt='avatar' className='w-8 h-8' />
                <div className='flex flex-col items-start'>
                    <span className='text-black font-poppins -mb-[4px]'>{name}</span>
                    <span className='text-my-grey font-poppins font-light text-[10px]'>{userName}</span>
                    <p className="font-poppons text-base my-2">{content}</p>
                    <div className='mt-2 flex justify-center items-center gap-3'>
                        {count === 1 ? (
                            <button onClick={() => setCount(count - 1)}>
                                <HeartBtn count={count} svg={like} />
                            </button>
                        ) : (
                            <button onClick={() => setCount(count + 1)}>
                                <HeartBtn count={count} svg={unlike} />
                            </button>
                        )}
                        •
                        <ReplyBtn handleClick={handleReply} value={replyContent} valueChange={(e) => setReplyContent(e.target.value)} />
                    </div>
                    {replies.map((reply, index) => (
                        <Reply key={index} content={reply.content} author={reply.author} image={reply.image} username={reply.username} handleDelete={() => handleDeleteReply(index)} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CommentInfo