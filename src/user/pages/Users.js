import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "ul",
      name: "Kadu Maverick",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1gYgKDcyhb0mxt6D6VFyuAU8Aoa0dCfZvu7HPEK4pxjGfEc4v&usqp=CAU",
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
 