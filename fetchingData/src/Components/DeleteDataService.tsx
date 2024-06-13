// import axios from "axios";
// import { useEffect, useState } from "react";
// import apiClient from "../services/apiClient";
import UserService, { User } from "../services/UserService";
import useUsers from "../hooks/useUsers";
// import apiClient, {CanceledError} from "../services/apiClient";


// interface User {
//   id: number;
//   name: string;
//   username: string;
// }

const DeleteDataService = () => {

  const {users, setUsers,error, setError, isLoading, setIsLoading} = useUsers();

  // //we need a useState to help us hold the state of our users
  // const [users, setUsers] = useState<User[]>([]);
  // const [error, setError] = useState('');
  // //UseState for our isLoading indicator
  // const [isLoading, setIsLoading] = useState(false);

  // ///Create a function to helps us fetch our data with axios
  // const FetchData = () => {
  //   setIsLoading(true);
  //   const {request} = UserService.getAll<User>()
  //   request
  //   // apiClient
  //     // .get("/users")
  //     .then((response) => {
  //       setUsers(response.data)
  //       setIsLoading(false);
  //     } )
  //     .catch(error => {
  //       setError(error.message)
  //       setIsLoading(false);
  //     }
  //     )
  // };

  // //UseEffect to help us with our FetchingData

  // useEffect(() => {
  //   FetchData();
  // }, []);


  ///Lets create a helper function to help us delete our users from our front end UI
  const userDelete =(user:User) => {
    const originalUsers= [...users]
    setUsers(users.filter(u => u.id != user.id))
    UserService.delete(user.id)
    .catch(error => {
      setError(error.message)
      setUsers(originalUsers)

    })
  }

  return (
    <>
      <h1 className="text-center">CRUD delete with apiClient</h1>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item d-flex justify-content-between" 
          key={user.id}>{user.name}<button onClick={() => userDelete(user)} 
          className="btn btn-outline-danger">Delete</button> </li>
        ))}
     
        { error && <p className="text-danger">{error}</p>}
        { isLoading && <div className="spinner-border"></div>}
      </ul>
    </>
  );
};

export default DeleteDataService;
