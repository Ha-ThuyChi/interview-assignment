import './App.css';
import { useEffect, useState } from 'react';

async function fetchUsers(pageNum, setUsers) {
  try {
      const response = await fetch(`https://randomuser.me/api/?page=${pageNum}&results=10`, {
          method: "GET",
      });
      if (!response.ok) {
          console.error("error:", response.status);
      };
      const result = await response.json();
      console.log(result.results);
      setUsers(result.results);
  } catch (error) {
      console.error("Error while fetching products: ", error.message);
  }
};

function App() {
  const [users, setUsers] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [order, setOrder] = useState("Order");
  const [property, setProperty] = useState("Property");
  const headers = ["Full name", "Username", "Thumbnail icon"];


  useEffect(() => {
    fetchUsers(pageNum, setUsers);
  }, [pageNum]);

  function sortUsername(order) { 
    if (order === 'Ascending') {
      setUsers([...users].sort((a, b) =>
        a.login.username > b.login.username ? 1 : -1,
      ))
    } 
    if (order === "Descending") {
      setUsers([...users].sort((a, b) =>
        a.login.username > b.login.username ? -1 : 1,
      ))
    };
  };
  function sortName(order) { 
    if (order === 'Ascending') {
      setUsers([...users].sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1,
      ))
    } 
    if (order === "Descending") {
      setUsers([...users].sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1,
      ))
    };
  };
  function handleSorting(e) {
    e.preventDefault();
    if (property === "Full name") {
      sortName(order);
    } 
    if (property === "Username") {
      sortUsername(order);
    };
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
        <tr>
          {headers.map((header) => {
            return (<th>
              {header}
            </th>)
          })}
        </tr>
        {users.map((user) => {
          return (
            <tr>
              <td>{user.name.title} {user.name.first} {user.name.last}</td>
              <td>{user.login.username}</td>
              <td><img src={user.picture.thumbnail}/></td>
            </tr>
          )}
        )}
      </table>
      <div className='pagination'>
        {pageNum > 1 && (
          <a onClick={() => setPageNum(pageNum - 1)}>Previous</a>
        )}
        <a className={pageNum == 1 && "active"} onClick={() => setPageNum(1)}>1</a> 
        &nbsp;
        {pageNum > 1 && pageNum < 100 ? (<a className='active'>{pageNum}</a>) : (<a onClick={() => setPageNum(50)}>50</a>)} 
        &nbsp;
        <a className={pageNum == 100 && "active"} onClick={() => setPageNum(100)}>100</a>
        &nbsp;
        {pageNum < 100 && (
          <a onClick={() => setPageNum(pageNum + 1)}>Next</a>
        )}
      </div>
    </div>
  );
}

export default App;
