import axios from "axios"

export const fetchUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
}

export const addUser = async (user: any) => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/users", user);
    return response.data;
}

export const deleteUser = async (id: number) => {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}