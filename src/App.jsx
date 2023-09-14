import { Comment, AddComment } from "./components";

function App() {
  

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-body">
      <h1 className="flex font-poppins font-bold text-4xl">Comment</h1>
      <Comment />
    </div>
  );
}

export default App;
