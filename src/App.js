import './App.css';
import { useEffect, useState } from 'react';

async function fetchUsers(setUsers) {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=100`); //http://localhost:2222/api?results=20 for local API
    if (!response.ok) {
      console.error("Error:", response.error);
    }
    const result = await response.json();
    setUsers(result.results);
  } catch (error) {
    console.error("Error while fetching users: ", error.message);
  }
}

function App() {
  const [users, setUsers] = useState([]);
  const [viewedUsers, setViewedUsers] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [order, setOrder] = useState("Order");
  const [property, setProperty] = useState("Property");
  const headers = ["Full name", "Username", "Thumbnail icon"];

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      const startIndex = (pageNum - 1) * 10;
      const endIndex = startIndex + 10;
      const slicedUsers = users.slice(startIndex, endIndex);
      setViewedUsers(slicedUsers);
    }
  }, [pageNum, users]);

  function sortUsername(order) {
    if (order === 'Ascending') {
      setViewedUsers([...viewedUsers].sort((a, b) =>
        a.login.username.localeCompare(b.login.username)
      ));
    }
    if (order === "Descending") {
      setViewedUsers([...viewedUsers].sort((a, b) =>
        b.login.username.localeCompare(a.login.username)
      ));
    }
  }

  function sortName(order) {
    if (order === 'Ascending') {
      setViewedUsers([...viewedUsers].sort((a, b) =>
        a.name.first.localeCompare(b.name.first)
      ));
    }
    if (order === "Descending") {
      setViewedUsers([...viewedUsers].sort((a, b) =>
        b.name.first.localeCompare(a.name.first)
      ));
    }
  }

  function handleSorting(e) {
    e.preventDefault();
    if (property === "Full name") {
      sortName(order);
    }
    if (property === "Username") {
      sortUsername(order);
    }
  }

  return (
    <div className='page'>
      <div className='sort'>
        Sort:  
          <select value={property} onChange={(e) => setProperty(e.target.value)}>
            <option value="">Property</option>
            <option value="Username">Username</option>
            <option value="Full name">Full name</option>
          </select> 
        by: 
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="">Order</option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select> 
        <button onClick={e => handleSorting(e)}>Sort</button>
      </div>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {viewedUsers.map((user) => (
            <tr key={user.login.username}>
              <td>{user.name.title} {user.name.first} {user.name.last}</td>
              <td>{user.login.username}</td>
              <td><img src={user.picture.thumbnail} alt="Thumbnail" /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        {pageNum > 1 && (
          <button onClick={() => setPageNum(pageNum - 1)}>Previous</button>
        )}
        <button onClick={() => setPageNum(1)} className={pageNum === 1 ? 'active' : ''}>1</button> 
        {pageNum > 1 && pageNum < 10 ? (
          <button className='active'>{pageNum}</button>
        ) : (
          <button onClick={() => setPageNum(5)}>5</button>
        )} 
        <button onClick={() => setPageNum(10)} className={pageNum === 10 ? 'active' : ''}>10</button>
        {pageNum < 10 && (
          <button onClick={() => setPageNum(pageNum + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}

export default App;
