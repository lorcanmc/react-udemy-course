import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  

  const addUserHandler = (uName, uAge) => {
    setUsers((prev) => [...prev, { name: uName, age: uAge }]);
  };
  return (
    <div className="app">
      <h1>Add User Project</h1>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
