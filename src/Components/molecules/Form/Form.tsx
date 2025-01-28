import { Button } from "@atoms/Button"
import { Input } from "@atoms/Input"
import { Label } from "@atoms/Label"
import { useState } from "react"

type FormProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const Form = ({ handleSubmit }: FormProps) => {
    const [title, setTitle] = useState("")

    return <>
        <form onSubmit={handleSubmit}>
            <Label id="title" label="Titre" />
            <Input id="title" type="text" value={title} setValue={setTitle} />
            <Button label="Ajouter" />
        </form>
    </>
}