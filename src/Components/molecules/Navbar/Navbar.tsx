import { Button } from "@atoms/Button"

type NavbarProps = {
    setValue: (value: string) => void
}

export const Navbar = ({ setValue }: NavbarProps) => {
    return <>
        <div>
            <Button label="Home" handleClick={() => setValue("Home")} />
            <Button label="Users" handleClick={() => setValue("Users")} />
            <Button label="Products" handleClick={() => setValue("Products")} />
        </div>
    </>
}