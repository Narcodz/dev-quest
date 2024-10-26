import React, { useEffect, useState } from "react";
import TileComponent from "../core/TileComponent";

// Improved solution for async function returning a promise
function getUserPromise(id, name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, name: name + " - " + id });
    }, Math.random() * 1000);
  });
}

function fetchUserDataWithPromise(userIds, userNames) {
  const userPromises = userIds.map((id, index) =>
    getUserPromise(id, userNames[index])
  );

  return Promise.all(userPromises);
}

//  callbacks
function getUserCallback(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: `User - ${id}` });
  }, Math.random() * 1000);
}

// callbacks
function fetchUserDataWithCallback(userIds, callback) {
  let users = [];

  userIds.forEach((id) => {
    getUserCallback(id, (user) => {
      users.push(user);
      if (users.length === userIds.length) {
        callback(users);
      }
    });
  });
}

const UserDataComponent = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [usePromise, setUsePromise] = useState(true);

  useEffect(() => {
    const userIds = [1, 2, 3, 4, 5];
    const userNames = ["Robert", "Kusal", "Maahi", "Jeremy", "Nihaal"];

    if (usePromise) {
      fetchUserDataWithPromise(userIds, userNames)
        .then((fetchedUsers) => {
          setUsers(fetchedUsers);
          console.log("All users fetched with Promise:", fetchedUsers);
        })
        .catch((err) => {
          setError("Failed to fetch user data with Promise.");
          console.error(err);
        });
    } else {
      fetchUserDataWithCallback(userIds, (fetchedUsers) => {
        setUsers(fetchedUsers);
        console.log("All users fetched with Callback:", fetchedUsers);
      });
    }
  }, [usePromise]);

  return (
    <TileComponent>
      <h2 className="text-lg font-semibold mb-4 text-center">User Data</h2>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setUsePromise(true)}
          className={`px-4 py-2 rounded mr-2 ${
            usePromise ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Fetch with Promise
        </button>
        <button
          onClick={() => setUsePromise(false)}
          className={`px-4 py-2 rounded ${
            !usePromise ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Fetch with Callback
        </button>
      </div>
      {error && <p className="error">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </TileComponent>
  );
};

export default UserDataComponent;
