import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-red-500 w-full h-[500px] rounded-xl p-5">
        <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center">
          <p>There is no task pending</p>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
