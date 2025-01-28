import { Title } from "@atoms/Title"
import { Form } from "@molecules/Form"

export const HomePage = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log("ajouté")
    }

    return <>
        <Title label="Home Page" />
        <Form handleSubmit={handleSubmit} />
    </>
}