import React from "react";
import TableContainer from "./components/TableContainer";

const data = [
  { id: 1, name: "Alice", age: 25, score: 85 },
  { id: 2, name: "Bob", age: 30, score: 70 },
  { id: 3, name: "Charlie", age: 35, score: 95 },
];

const columns = [
  { title: "ID", key: "id", sortable: true, filterable: true },
  { title: "Name", key: "name", sortable: true, filterable: true },
  { title: "Age", key: "age", sortable: true, filterable: false },
  { title: "Score", key: "score", sortable: true, filterable: false },
];

const App = () => {
  return (
    <div className="App">
      <h1>Custom Table Component</h1>
      <TableContainer data={data} columns={columns} />
    </div>
  );
};

export default App;
