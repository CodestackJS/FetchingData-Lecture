//import apiClient from "./apiClient";

import create from "./httpsService";

export interface User {
    id: number
    name: string
}



export default create("/users");




// interface User {
//     id: number
//     name: String
// }

// //Create a class and a method
// class UserService {

//     //lets create a getAllUsers method
//     getAllUsers() {
//         const request = apiClient.get('users')
//         return {request}
//     }

//     //Delete User method
//     deleteUser(id: number){
//         return apiClient.delete('/users/' + id)
//     }
// }
// export default new UserService();

