import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center gap-5">
      <div className="flex gap-5">
        <Input text="Task" />
        <Button text="Add task" />
      </div>
    </div>
  );
};

export default App;
