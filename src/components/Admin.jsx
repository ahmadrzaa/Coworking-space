// ------------------------------------------------------------
// © 2025 Ahmad Raza  (@ahmadrzaa on GitHub)
// All rights reserved. Do not distribute without permission.
// ------------------------------------------------------------




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function Admin() {
  const [users, setUsers] = useState([]);
  const [adminName, setAdminName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const current = JSON.parse(localStorage.getItem("authUser"));
    if (!current || current.role !== "admin") {
      navigate("/login"); 
      return;
    }

    setAdminName(current.name);
    const userList = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(userList);
  }, [navigate]);

  const handleDelete = (email) => {
    const updated = users.filter((u) => u.email !== email);
    localStorage.setItem("users", JSON.stringify(updated));
    setUsers(updated);
  };

  return (
    <div className="admin-page">
      <h2>Admin Panel � {adminName}</h2>

      {users.length === 0 ? (
        <p>No users registered.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Role</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <button onClick={() => handleDelete(u.email)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;
