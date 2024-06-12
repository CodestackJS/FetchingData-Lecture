// import axios from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import UserService from "../services/UserService";
// import apiClient, {CanceledError} from "../services/apiClient";


interface User {
  id: number;
  name: string;
  // username: string;
}

const UpdateData = () => {
  //we need a useState to help us hold the state of our users
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  //UseState for our isLoading indicator
  const [isLoading, setIsLoading] = useState(false);

  ///Create a function to helps us fetch our data with axios
  const FetchData = () => {
    setIsLoading(true);
    const {request} = UserService.getAll<User>()
    request
    // apiClient
    // apiClient
    //   .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data)
        setIsLoading(false);
      } )
      .catch(error => {
        setError(error.message)
        setIsLoading(false);
      }
      )
  };

  //UseEffect to help us with our FetchingData

  useEffect(() => {
    FetchData();
  }, []);
  

// ******************* addDelete Function *********************
  ///Lets create a helper function to help us delete our users from our front end UI
  // const userDelete =(user:User) => {
  //   setUsers(users.filter(u => u.id != user.id))
  // }
// *******************addUser Function *********************

  ///Lets create a helper function to help us delete our users from our front end UI
const updateUser = (user:User) => {
  const originalUsers = [...users]
  const updatedUser = {...user, name: user.name + "!"}
  setUsers(users.map(u => u.id === user.id ? updatedUser : u))
  // apiClient
  apiClient
  .put('/users/' + user.id, updatedUser)
  .catch(error => {
    setError(error.message)
    setUsers(originalUsers)
  })
}



  return (
    <>
      <h1 className="text-center">CRUD Update with Axios</h1>
      {/* <button className="btn btn-outline-primary mx-3 mb-3" onClick={addUser}>Add</button> */}
      <ul className="list-group">
        {users.map((user) => (
          <li 
          className="list-group-item d-flex justify-content-between" 
          key={user.id}> {user.name}
          
          <button className="btn btn-outline-secondary" onClick={() => updateUser(user)}>Update</button> </li>
        ))}
     
        { error && <p className="text-danger">{error}</p>}
        { isLoading && <div className="spinner-border"></div>}
      </ul>
    </>
  );
};

export default UpdateData;
