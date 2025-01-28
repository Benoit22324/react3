import { Button } from "@atoms/Button"
import { PlusOne } from "@molecules/PlusOne"

type UserViewProps = {
    user: any
    handleDelete: () => void
}

export const UserView = ({user, handleDelete}: UserViewProps) => {

    return <>
        <div>
            <h3>{user.username}</h3>
            <p>Email: {user.email}</p>
            <PlusOne label="Recommend" count={Math.floor(Math.random() * 500)} />
            <Button label="Delete" handleClick={handleDelete} />
        </div>
    </>
}