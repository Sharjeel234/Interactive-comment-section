import { useState } from "react";
import HeartBtn from "./HeartBtn";
import { like, unlike } from "../assets";

const Reply = ({ content, author, image, username, handleDelete }) => {
    const [count, setCount] = useState(1)

    return (
        <div>
            <div className="flex items-start gap-4 mt-4">
                <img src={image} alt='avatar' className='w-8 h-8' />
                <div className='flex flex-col items-start'>
                    <span className='flex items-center gap-2 text-black font-poppins -mb-[4px]'>{author}<span className='text-my-purple bg-badge p-[3px] font-poppins text-[9px] rounded'>ME</span></span>
                    <span className='text-my-grey font-poppins font-light text-[10px]'>{username}</span>
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
                        <button onClick={handleDelete} className="text-my-red font-poppins font-medium">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reply;
