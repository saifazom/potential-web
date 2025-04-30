import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState<
    { id: string; name: string; email: string; address: { city: string } }[]
  >([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: { city: "" },
  });
  const [editingUser, setEditingUser] = useState<null | {
    id: string;
    name: string;
    email: string;
    address: { city: string };
  }>(null);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersData = Array.isArray(response.data) ? response.data : [];
      setUsers(
        usersData.map((user) => ({
          ...user,
          address: { city: user.address.city },
        }))
      );
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const keys = name.split(".");
      setFormData((prevFormData) => {
        const nestedObject = prevFormData[keys[0] as keyof typeof prevFormData];
        if (typeof nestedObject === "object" && nestedObject !== null) {
          return {
            ...prevFormData,
            [keys[0]]: {
              ...nestedObject,
              [keys[1]]: value,
            },
          };
        }
        return prevFormData;
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingUser) {
      try {
        await updateUser(editingUser.id, formData);
        setEditingUser(null);
        setFormData({ name: "", email: "", address: { city: "" } });
        setSuccessMessage("User updated successfully");
        setTimeout(() => setSuccessMessage(""), 2000);
      } catch (error) {
        console.error("Error updating user", error);
      }
      return;
    }
    const maxRetries = 3;
    let attempt = 0;
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    let idCounter = users.length + 1;
    const newUser = { ...formData, id: idCounter++ };

    while (attempt < maxRetries) {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          newUser
        );
        setUsers([...users, response.data]);
        fetchUsers();
        setFormData({ name: "", email: "", address: { city: "" } });
        setSuccessMessage("New User Added sucsesfully");
        setTimeout(() => setSuccessMessage(""), 2000);
        break;
      } catch (error: any) {
        if (error.response && error.response.status === 429) {
          attempt++;
          console.error(`Too many requests. Retrying attempt ${attempt}...`);
          await delay(1000 * Math.pow(2, attempt));
        } else {
          console.error("Error submitting form", error);
          break;
        }
      }
    }
    console.log("Form data submitted:", newUser);
  };

  const updateUser = async (
    id: string,
    updatedData: { name: string; email: string; address: { city: string } }
  ) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        updatedData
      );
      fetchUsers();
      console.log("API response:", response.data);
      console.log("User updated successfully", updatedData);
    } catch (error) {
      console.error("Error updating user", error);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      fetchUsers();
      setSuccessMessage("User deleted successfully");
      setTimeout(() => setSuccessMessage(""), 2000);
      console.log("User deleted successfully", id);
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  return (
    <div className="container mx-auto px-5">
      <div className="flex gap-5">
        <div className="add-user border-b-2 mb-10 flex-1/4">
          <h2 className="bg-themeDarkBlue text-white text-2xl px-5 py-3 mb-5">
            Add User
          </h2>
          <form className="flex flex-wrap gap-" onSubmit={handleSubmit}>
            <input
              className="block flex-1/2 p-5 border-2 border-gray-300 outline-0 mb-5"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              className="block flex-1/2 p-5 border-2 border-gray-300 outline-0 mb-5"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              className="block flex-auto p-5 border-2 border-gray-300 outline-0 mb-5"
              type="text"
              name="address.city"
              value={formData.address.city}
              onChange={handleInputChange}
              placeholder="City"
            />
            <button
              className="u-button--violate w-full text-center justify-center rounded-none"
              type="submit"
            >
              {editingUser ? "Update" : "Submit"}
            </button>
            {successMessage && (
              <div className="text-green-600 text-center mt-2">
                {successMessage}
              </div>
            )}
          </form>
        </div>

        <div className="user-list flex-1/2">
          <h1 className="bg-gray-500 text-white text-2xl px-5 py-3 mb-5">
            User List
          </h1>
          <ul>
            {users.map((user) => (
              <li className="border-b-2 py-2" key={String(user.id)}>
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <strong>Name:</strong> {user.name}
                    <strong>Email:</strong> {user.email}
                    <strong>Address:</strong> {user.address.city}
                  </div>
                  <div className="flex-center">
                    <button
                      className="bg-green-500 px-5 py-2 text-white rounded-full"
                      onClick={() => {
                        setEditingUser(user);
                        setFormData({
                          name: user.name,
                          email: user.email,
                          address: { city: user.address.city },
                        });
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 px-5 py-2 text-white rounded-full"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
