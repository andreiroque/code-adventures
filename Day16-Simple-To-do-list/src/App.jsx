import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

const App = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex gap-5">
        <Input placeholder="Task" />
        <Button variant="outline">Add task</Button>
      </div>
    </div>
  );
};

export default App;
