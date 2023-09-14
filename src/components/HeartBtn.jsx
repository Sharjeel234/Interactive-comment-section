const HeartBtn = ({ count, svg }) => {
    return (
        <div className='flex justify-center items-center gap-1'>
            <img src={svg} alt="like" />
            <span className="font-poppins text-my-grey text-sm">{count}</span>
        </div>
    )
}

export default HeartBtn