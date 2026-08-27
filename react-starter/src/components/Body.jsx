import Hello from "./Hello";
import StudentCard from "./StudentCard";

const students = [
  { id: 1, name: "Rahul", roll: 101 },
  { id: 2, name: "Aman", roll: 102 },
  { id: 3, name: "Priya", roll: 103 },
  { id: 4, name: "Neha", roll: 104 },
  { id: 5, name: "Ravi", roll: 105 }
];


export default function Body() {

  return (
    <>
      <Hello />
      <h2>Welcome to My Website</h2>
      {students.map((student) => (
        <StudentCard key={student.id} name={student.name} roll={student.roll} />
      ))}
      <p>This is the body content of the website.</p>
    </>
  );
};
