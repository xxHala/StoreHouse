import { useContext, useState } from "react";
import { AppContext } from "../../Context";
import {FaEdit , FaTrashAlt} from "react-icons/fa";
import "./table.css";

const UserList = () => {
  const {
    users,
    userLength,
    editMode,
    cancelEdit,
    updateUser,
    deleteUser,
  } = useContext(AppContext);

  const [newData, setNewData] = useState({});

  const saveBtn = () => {
    updateUser(newData);
  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (id, user_name, user_email, user_pass) => {
    setNewData({ id, user_name, user_email, user_pass });
    editMode(id);
  };

  const deleteConfirm = (id) => {
    if (window.confirm("Are you sure You ?")) {
      deleteUser(id);
    }
  };

  return !userLength ? (
    <p>{userLength === null ? "Loading..." : "Please insert some users."}</p>
  ) : (
    <div className='table-wrapper'>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>password</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, user_name, user_email ,user_pass, isEditing }) => {
          return isEditing === true ? (
            <tr key={id}>
              <td>
                <input
                  type="text"
                  defaultValue={user_name}
                  onChange={(e) => updateNewData(e, "user_name")}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={user_pass}
                  onChange={(e) => updateNewData(e, "user_pass")}
                />
              </td>
              <td>
                <input
                  type="Email"
                  defaultValue={user_email}
                  onChange={(e) => updateNewData(e, "user_email")}
                />
              </td>
              <td>
                <button className=" save-button table-button" onClick={() => saveBtn()}>
                  Save
                </button>
                <button
                  className="table-button delete-button"
                  onClick={() => cancelEdit(id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ) : (
            <tr key={id}>
              <td>{user_name}</td>
              <td>{user_pass}</td>
              <td>{user_email}</td>
              <td>
                <button
                  className="table-button edti-button"
                  onClick={() => enableEdit(id, user_name, user_email,user_pass)}
                >
                  <FaEdit/>
                </button>
                <button
                  className=" table-button delete-button"
                  onClick={() => deleteConfirm(id)}
                >
                  <FaTrashAlt/>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>

  );
};

export default UserList;
