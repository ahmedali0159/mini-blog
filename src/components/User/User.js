import React from "react";
import { useHistory } from "react-router";
import { useMyContext } from "../Context/Context";
import Pagination from "./Pagination";

const User = () => {
  const { query, setQuery, setSearch, setSort, setUserPage, currentUser } =
    useMyContext();
  const history = useHistory();
  return (
    <div className="container">
      <h2 className="text-center my-4">Users List</h2>
      <div className="row">
        <div className="col-md-4 my-2 d-flex">
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <select
            className="form-control"
            defaultValue={localStorage.getItem("search") || "search"}
            onChange={(e) => {
              setSearch(e.target.value);
              localStorage.setItem("search", e.target.value);
            }}
          >
            <option value="search" disabled hidden>
              Search By
            </option>
            <option value="name">Search By Name</option>
            <option value="email">Search By Email</option>
            <option value="website">Search By Website</option>
            <option value="all">Search By All</option>
          </select>
        </div>
        <div className="col-md-4 my-2">
          <select
            className="form-control"
            defaultValue={localStorage.getItem("userPage") || "setUsers"}
            onChange={(e) => {
              setUserPage(e.target.value);
              localStorage.setItem("userPage", e.target.value);
            }}
          >
            <option value="setUsers" disabled hidden>
              Set Users
            </option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="all">All</option>
          </select>
        </div>
        <div className="col-md-4 my-2">
          <select
            className="form-control"
            defaultValue={localStorage.getItem("sort") || "sort"}
            onChange={(e) => {
              setSort(e.target.value);
              localStorage.setItem("sort", e.target.value);
            }}
          >
            <option value="sort" disabled hidden>
              Sort By
            </option>
            <option value="nameAsc">Name ASC</option>
            <option value="nameDsc">Name DSC</option>
            <option value="emailAsc">Email ASC</option>
            <option value="emailDsc">Email DSC</option>
          </select>
        </div>
      </div>
      <table className="table table-hover" style={{wordBreak: 'break-word'}}>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Website</th>
                </tr>
            </thead>
            <tbody>
                {
                    currentUser.map(user => (
                        <tr key={user.id}>
                            <td
                              onClick={() => history.push(`/user/$(user.id)`)}
                              >{user.name}  
                            </td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                        </tr>
                    ))
                }
            </tbody>
      </table>
        <Pagination />
    </div>
  );
};

export default User;
