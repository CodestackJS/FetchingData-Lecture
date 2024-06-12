// import axios from "axios";
import { useEffect, useState } from "react";
// import apiClient, {CanceledError} from "../services/apiClient";
import axios from "axios";
import apiClient from "../services/apiClient";


interface User {
  id: number;
  name: string;
  username: string;
}

const DeleteData = () => {
  //we need a useState to help us hold the state of our users
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  //UseState for our isLoading indicator
  const [isLoading, setIsLoading] = useState(false);

  ///Create a function to helps us fetch our data with axios
  const FetchData = () => {
    setIsLoading(true);
    // apiClient
    axios
      .get("https://jsonplaceholder.typicode.com/users")
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


  ///Lets create a helper function to help us delete our users from our front end UI
  const userDelete =(user:User) => {
    const originalUsers = [...users]
    setUsers(users.filter(u => u.id != user.id))
    apiClient.delete('/users/' + user.id)
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
          <li className="list-group-item d-flex justify-content-between" key={user.id}>{user.username}<button onClick={() => userDelete(user)} className="btn btn-outline-danger">Delete</button> </li>
        ))}
     
        { error && <p className="text-danger">{error}</p>}
        { isLoading && <div className="spinner-border"></div>}
      </ul>
    </>
  );
};

export default DeleteData;
