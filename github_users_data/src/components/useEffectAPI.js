import React from "react";
import { useEffect, useState } from "react";

function UseEffectAPI() {
  const [users, setUsers] = useState();

  const getUser = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    setUsers(await response.json());
    let data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h2>List Of Github Users</h2>
      <div className="row">
        <div>
          {users?.map((e) => {
            return (
              <div>
                <div>{e.title}</div>
                <img src={e.url} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UseEffectAPI;
