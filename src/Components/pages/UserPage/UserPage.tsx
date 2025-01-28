import { ShowError } from "@atoms/ShowError";
import { Skeleton } from "@atoms/Skeleton";
import { Title } from "@atoms/Title";
import { useUsers } from "@hooks/queries"
import { UserList } from "@organisms/UserList";

export const UserPage = () => {
    const { data, isLoading, isError, error, refetch } = useUsers();

    return <>
        <Title label="User List" />
        {
            isError && <ShowError message={error.message} />
        }
        {
            isLoading ? <>
                <Skeleton width="50%" height="20%" />
            </>
            : <UserList data={data} handleRefresh={() => refetch()} />
        }
    </>
}