import { useRef, useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const App = () => {
  const inputRef = useRef();
  const [tasks, setTask] = useState([]);

  const addTask = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="flex gap-5">
        <Input ref={inputRef} placeholder="Task" />
        <Button variant="outline" onClick={addTask}>
          Add task
        </Button>
      </div>
      <div className="mt-5">
        <Table>
          <TableCaption>To-do List</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Task</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody></TableBody>
        </Table>
      </div>
    </div>
  );
};

export default App;
