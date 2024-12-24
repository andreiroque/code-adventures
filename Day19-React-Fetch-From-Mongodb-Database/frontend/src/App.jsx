import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/students")
      .then((response) => setStudents(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-20 font-mono">
      <div>
        <p className="lg:text-6xl">Students</p>
      </div>
      <div>
        <Table>
          <TableCaption>List</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>GPA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student._id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.gpa}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default App;
