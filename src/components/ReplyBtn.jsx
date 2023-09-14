import { useState } from 'react'
import { send } from '../assets';

const ReplyBtn = ({ handleClick, value, valueChange }) => {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div>
            {isEditing ? (
                <div className='bg-input p-2 rounded-md'>
                <input
                    placeholder="Write a reply..."
                    value={value}
                    onChange={valueChange}
                    className='bg-transparent outline-none'
                />
                <button onClick={handleClick} >
                    <img src={send} alt="send" className="w-5 h-5" onClick={() => setIsEditing(false)} />
                </button>
            </div>
            ) : (
                <button onClick={() => setIsEditing(true)} className='text-my-blue font-poppins font-medium'>
                Reply
            </button>
            )}
        </div>
    )
}

export default ReplyBtn