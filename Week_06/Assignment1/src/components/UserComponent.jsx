import { useState } from "react";
function UserComponent() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    DOB: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.name === "" || formData.email === "" || formData.mobile === "" ||formData.DOB===""){
      alert("Please fill all fields");
      return;
    }

    setUsers([...users, formData]);

    setFormData({
      name: "",
      email: "",
      mobile: "",
      DOB: ""
    });
  };

  return (
    <div>

      <h2>Create User</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />

        <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />

        <input type="text" name="mobile" placeholder="Enter Mobile" value={formData.mobile} onChange={handleChange} />

        <input type="date" name="DOB" placeholder="Enter DOB" value={formData.DOB} onChange={handleChange} />

        <button type="submit">Add User</button>
      </form>

      <h2>User List</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>DOB</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.DOB}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default UserComponent;