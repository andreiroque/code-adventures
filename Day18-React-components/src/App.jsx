import { useRef, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Table from "./components/Table";

const App = () => {
  const taskRef = useRef();
  const [tasks, setTask] = useState([]);

  const markAsDone = (index) => {
    setTask(
      tasks.map((task, i) => {
        if (index == i) {
          return { ...task, status: "Done" };
        }
        return task;
      })
    );
  };

  const addTask = () => {
    setTask([...tasks, { value: taskRef.current.value, status: "Pending" }]);
    console.log(taskRef.current.value);
    taskRef.current.value = "";
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-5">
      <div className="flex gap-5">
        <Input text="Task" ref={taskRef} />
        <Button text="Add task" click={addTask} />
      </div>
      <Table tasks={tasks} markDone={markAsDone} />
    </div>
  );
};

export default App;
