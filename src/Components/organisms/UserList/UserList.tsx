import { Button } from "@atoms/Button"
import { useDeleteUser } from "@hooks/mutation"
import { UserView } from "@molecules/UserView"

type UserListProps = {
    data: any
    handleRefresh: () => void
}

export const UserList = ({data, handleRefresh}: UserListProps) => {
    const { mutate: deleteMutate } = useDeleteUser();

    return <>
        <div>
            <Button label="Refresh" handleClick={handleRefresh} />
            {
                data.map((user: any) => <UserView key={user.id} user={user} handleDelete={() => deleteMutate(user.id)} />)
            }
        </div>
    </>
}