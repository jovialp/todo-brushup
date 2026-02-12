import { useEffect, useState } from "react";

const UserSearch = () => {
  const [users, setUsers] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const handeleSearch = (e: { target: { value: string } }) => {
    const currentSearch = e.target.value;
    setSearchTerm(currentSearch);
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const filterUserByName = async (searchTerm: string) => {
      let currentFilteredUsers = [];
      if (searchTerm.length > 1) {
        const users = await fetchUsers();

        currentFilteredUsers = users.filter((user: { name: string }) =>
          user.name.toLowerCase().includes(searchTerm),
        );

        setUsers(currentFilteredUsers);
      } else {
        setUsers([]);
      }
    };

    const timer = setTimeout(() => {
      filterUserByName(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <section>
      <h1>UserSearch</h1>

      <input
        className="border-2"
        name="search"
        onChange={handeleSearch}
        value={searchTerm}
      />
      <ul>
        {users?.map((user: { id: string; name: string }) => (
          <li key={user.id}>
            <p>{user.name} </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserSearch;
