// import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
// import UserService, { User } from "../services/UserService";
import useUsers from "../hooks/useUsers";
// import apiClient from "../services/apiClient";

// interface User {
//   id: number;
//   name: string;
//   // username: string;
// }



const CreateDataService = () => {

  const {users, setUsers,error, setError, isLoading, setIsLoading} = useUsers();


  //we need a useState to help us hold the state of our users
  // const [users, setUsers] = useState<User[]>([]);
  // const [error, setError] = useState('');
  // //UseState for our isLoading indicator
  // const [isLoading, setIsLoading] = useState(false);

  // ///Create a function to helps us fetch our data with axios
  // const FetchData = () => {
  //   setIsLoading(true);
  //   // apiClient
  //   const {request} = UserService.getAll<User>();
  //   request
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
  

// ******************* addDelete Function *********************
  ///Lets create a helper function to help us delete our users from our front end UI
  // const userDelete =(user:User) => {
  //   setUsers(users.filter(u => u.id != user.id))
  // }
// *******************addUser Function *********************

  ///Lets create a helper function to help us delete our users from our front end UI
  const addUser = () => {
   // we are going to have a new object with id and name
   const originalUsers = [...users]
   const newUser = {id: 0, name: 'Aaron'}
   //set our users and spread all users and add our new user
   setUsers([newUser,...users])
   //we need to send this updated data to our back-end
  //  apiClient
  apiClient
   .post('/users', newUser)
   .then(response => setUsers([response.data, ...users]))
   .catch(error => {
    setError(error.message);
    setUsers(originalUsers);
    }) 
   }
   
  

  return (
    <>
      <h1 className="text-center">CRUD Create with Axios</h1>
      <button className="btn btn-outline-primary mx-3 mb-3" onClick={addUser}>Add</button>
      <ul className="list-group">
        {users.map((user) => (
          <li 
          className="list-group-item d-flex justify-content-between" 
          key={user.id}> {user.name}
          
          <button className="btn btn-outline-danger">Delete</button> </li>
        ))}
     
        { error && <p className="text-danger">{error}</p>}
        { isLoading && <div className="spinner-border"></div>}
      </ul>
    </>
  );
};

export default CreateDataService;
