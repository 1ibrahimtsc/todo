import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between">
        <AddTodoModal />
        <button>Filter</button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-3">
        <div className="bg-white p-5 w-full h-full rounded-lg">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
        {/*
<div className="bg-white p-5 text-2xl font-bold flex justify-center items-center">
          <p>There is no task pending</p>
        </div>
          */}
      </div>
    </div>
  );
};

export default TodoContainer;
