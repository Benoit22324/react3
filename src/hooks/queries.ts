import { fetchUsers } from "@api/UsersApi";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {
    return useQuery({
        queryFn: fetchUsers,
        queryKey: ["users"]
    })
}