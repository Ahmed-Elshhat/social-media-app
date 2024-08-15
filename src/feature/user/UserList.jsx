import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";
import { useEffect } from "react";

const UserList = () => {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users:</h2>
      {data.loading && "Loading..."}
      {!data.loading && data.error ? <div>Error: {data.error}</div> : null}
      {!data.loading && data.data.length ? (
        <ul>
          {data.data.map((user) => (
            <li key={user.name}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UserList;
