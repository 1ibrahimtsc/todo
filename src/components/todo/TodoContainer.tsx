import { useAppSelector } from "@/redux/hook";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

//import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  console.log(priority);
  //* From Local Store
  // const { todos } = useAppSelector((state) => state.todos);

  //* From server
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {/*  {todos.map((item) => (
            <TodoCard title={item.title} description={item.description} />
          ))} */}

          {todos?.data?.map((item) => (
            <TodoCard key={item.id} {...item} />
          ))}

          {/*  <TodoCard /> */}
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
