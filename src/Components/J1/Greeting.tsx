type GreetingProps = {
    name: string,
    age?: number
}

export const Greeting = ({name, age}: GreetingProps) => {
    return <>
        {
            age && <p>{age >= 18 ? "Bonjour" : "Bonjour mon petit"} {name}</p>
        }
    </>
}