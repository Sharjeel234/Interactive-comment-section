
import CommentInfo from "./CommentInfo";
import { users } from '../constants'
import AddComment from "./AddComment";

const Comment = () => {


  return (
    <div className="flex justify-center items-center flex-col">
      {users.map((user) => (
        <CommentInfo key={user.id} image={ user.image } name={ user.name } userName={ user.username } content={user.comment} />
      ))}
      <div>
        <AddComment />
      </div>
    </div>
  );
};

export default Comment;
