import { createContext, useContext, useEffect, useState } from "react";

const ownContext = createContext();
export const useMyContext = () => {
  return useContext(ownContext);
};

export const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const [userPaginate, setUserPaginate] = useState(users);
  const [currentUser, setCurrentUser] = useState(userPaginate);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(
    localStorage.getItem("search") || "name"
  );

  useEffect(() => {
    if (search === "all") {
      setCurrentUser(
        userPaginate.filter(
          (user) =>
            user.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
            user.email.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
            user.website.toLowerCase().indexOf(query.toLowerCase()) > -1
        )
      );
    } else {
      setCurrentUser(
        userPaginate.filter(
          (user =>
            user[search].toLowerCase().indexOf(query.toLowerCase()) > -1)
        )
      );
    }
  }, [search, query, userPaginate]);

  const [sort, setSort] = useState(localStorage.getItem('sortBy') || null)

  switch (sort) {
      case 'nameAsc':
          currentUser.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
          break;
      case 'nameDsc':
          currentUser.sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));
          break;
      case 'emailAsc':
          currentUser.sort((a, b) => (a.email > b.email) ? 1 : ((b.email > a.email) ? -1 : 0));
          break;
      case 'emailDsc':
          currentUser.sort((a, b) => (a.email < b.email) ? 1 : ((b.email < a.email) ? -1 : 0));
          break;
      default:
          break;
  }


  const [currentPage, setCurrentPage] = useState(localStorage.getItem('pageNumber') || 1);
  const [userPage, setUserPage]  = useState(localStorage.getItem('userPage') || 'all');

  useEffect(() => {
      const lastOfUser = currentUser * userPage;
      const firstOfUser = lastOfUser - userPage;
      if(userPage === 'all') {
          setUserPaginate(users);
      } else {
          setUserPaginate(users.slice(firstOfUser, lastOfUser));
      }
  }, [userPage, currentPage, users])

  const paginate = (number) => setCurrentPage(number)

  const [editPost, setEditPost] = useState({});
  const editHandle = (post) => setEditPost(post);

  const [userPost, setUserPost] = useState([]);

  const value = {
    users,
    currentUser,
    userPost,
    setUserPost,
    editPost,
    editHandle,
    search,
    query,
    setQuery,
    paginate,
    setSort,
    setUserPage,
    setSearch,
    userPage,
  };
  return <ownContext.Provider value={value}>{children}</ownContext.Provider>;
};
