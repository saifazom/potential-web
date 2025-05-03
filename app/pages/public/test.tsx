import React, { useEffect, useState } from "react";
import { userService } from "~/services/httpServices/userService";
import type { User } from "~/types/user";

const Test = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [vipUser, setVipUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    age: "",
    email: "",
    phone: "",
    address: { address: "" },
  });
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    const getUsers = async () => {
      const userData: User[] | { users: User[] } = await userService.getUsers();
      if (Array.isArray(userData)) {
        setUsers(userData);
      } else if (userData && Array.isArray((userData as any).users)) {
        setUsers((userData as any).users);
      } else {
        setUsers([]);
      }
    };
    getUsers();

    const getUserUsingId = async () => {
      const vipUserData = await userService.getUserById(5);
      setVipUser(vipUserData);
    };
    getUserUsingId();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex gap-5">
        <div className="flex-1/2">
          <h2 className="border-b-1 pb-2 pl-4 border-themeDarkBlue text-2xl uppercase font-bold text-themeViolet">
            Users List
          </h2>
          <ul>
            {users.map((user) => (
              <li
                className="border-b-1 border-gray-400 py-4 px-4 even:bg-[#dce0ef]"
                key={user.id}
              >
                <div className="userData">
                  <div className="name">
                    <strong className="w-[80px] inline-block">Name:</strong>
                    {user.firstName} - (ID:{user.id})
                  </div>
                  <div className="age">
                    <strong className="w-[80px] inline-block">Age:</strong>
                    {user.age}
                  </div>
                  <div className="email">
                    <strong className="w-[80px] inline-block">Email:</strong>
                    {user.email}
                  </div>
                  <div className="phone">
                    <strong className="w-[80px] inline-block">Phone:</strong>
                    {user.phone}
                  </div>
                  <div className="address">
                    <strong className="w-[80px] inline-block">Address:</strong>
                    {user.address.address}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                      className="bg-green-500 px-3 py-1 text-white rounded"
                      onClick={() => {
                        setEditingUser(user);
                        setFormData({
                          firstName: user.firstName,
                          age: String(user.age),
                          email: user.email,
                          phone: String(user.phone),
                          address: { address: user.address.address },
                        });
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 px-3 py-1 text-white rounded"
                      onClick={async () => {
                        await userService.deleteUser(user.id);
                        setSuccessMessage("User Deleted Successfully");
                        const userData = await userService.getUsers();
                        // setUsers(
                        //   Array.isArray(userData) ? userData : userData.users
                        // );
                        setUsers(
                          Array.isArray(userData)
                            ? userData
                            : userData && Array.isArray((userData as any).users)
                            ? (userData as any).users
                            : []
                        );
                        setTimeout(() => setSuccessMessage(""), 2000);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1/4">
          <h2 className="border-b-1 pb-2 mb-5 border-themeDarkBlue text-2xl uppercase font-bold text-themeViolet">
            Users Form
          </h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const dataToSubmit = {
                ...formData,
                age: Number(formData.age),
                phone: Number(formData.phone),
                name: formData.firstName,
                city: "",
              };
              if (editingUser) {
                await userService.updateUser(editingUser.id, dataToSubmit);
                setSuccessMessage(
                  `User ${editingUser.id} Updated Successfully`
                );
                setEditingUser(null);
              } else {
                const createdUser = await userService.createUser(dataToSubmit);
                setUsers([...users, createdUser]);
                setSuccessMessage("User Created Successfully");
              }
              setFormData({
                firstName: "",
                age: "",
                email: "",
                phone: "",
                address: { address: "" },
              });
              setTimeout(() => setSuccessMessage(""), 2000);
            }}
            className="flex flex-col gap-2"
          >
            <input
              className="border p-2"
              type="text"
              name="firstName"
              placeholder="Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
            <input
              className="border p-2"
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              required
            />
            <input
              className="border p-2"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <input
              className="border p-2"
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
            <input
              className="border p-2"
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address.address}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { address: e.target.value },
                })
              }
              required
            />
            <button
              className="bg-themeViolet text-white px-4 py-2 rounded"
              type="submit"
            >
              {editingUser ? "Update" : "Create"}
            </button>
            {editingUser && (
              <button
                type="button"
                className="bg-gray-400 text-white px-4 py-2 rounded mt-2"
                onClick={() => {
                  setEditingUser(null);
                  setFormData({
                    firstName: "",
                    age: "",
                    email: "",
                    phone: "",
                    address: { address: "" },
                  });
                }}
              >
                Cancel
              </button>
            )}
            {successMessage && (
              <div className="text-green-600 mt-2">{successMessage}</div>
            )}
          </form>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="border-b-1 pb-2 pl-4 border-themeDarkBlue text-xl uppercase font-bold text-themeViolet">
          Get User By ID
        </h3>
        {vipUser ? (
          <div className="userData border p-4 mt-2 bg-[#f3f0ff]">
            <div className="name">
              <strong className="w-[80px] inline-block">Name:</strong>
              {vipUser.firstName} - ({vipUser.id})
            </div>
            <div className="age">
              <strong className="w-[80px] inline-block">Age:</strong>
              {vipUser.age}
            </div>
            <div className="email">
              <strong className="w-[80px] inline-block">Email:</strong>
              {vipUser.email}
            </div>
            <div className="phone">
              <strong className="w-[80px] inline-block">Phone:</strong>
              {vipUser.phone}
            </div>
            <div className="address">
              <strong className="w-[80px] inline-block">Address:</strong>
              {vipUser.address.address}
            </div>
          </div>
        ) : (
          <div className="text-center text-green-700 ">Loading...</div>
        )}
      </div>

      <div className="mt-10"></div>
    </div>
  );
};

export default Test;
