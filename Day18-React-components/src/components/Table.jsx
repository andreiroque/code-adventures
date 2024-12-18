import Button from "./Button";

const Table = ({ tasks, markDone }) => {
  return (
    <table className="table-auto font-mono">
      <caption className="caption-bottom text-gray-500">To-do List</caption>
      <thead>
        <tr className="flex gap-5">
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index} className="flex gap-5">
            <td>{task.value}</td>
            <td>{task.status}</td>
            <td>{<Button text="Done" click={() => markDone(index)} />}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
