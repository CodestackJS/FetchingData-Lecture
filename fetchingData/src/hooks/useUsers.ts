import { useEffect, useState } from "react";
import UserService, { User } from "../services/UserService";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    //UseState for our is Loading Indicator
    const [isLoading, setIsLoading] = useState(false);
    //create a function to help us fetch our data with axios
    const FetchData = () => {
        setIsLoading(true);
        const {request} = UserService.getAll<User>()
        request
        .then(response => {
        setUsers(response.data)
        setIsLoading(false);
        }
    )
        .catch(error => {
            setError(error.message)
            setIsLoading(false);
        });
    }
    //UseEffect to help us with our fetching data
    useEffect(() => {
        FetchData();
    }, [])
    return {users, setUsers, error,  setError, isLoading, setIsLoading}
}
export default useUsers;