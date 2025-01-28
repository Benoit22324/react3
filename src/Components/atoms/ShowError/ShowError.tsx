type ShowErrorProps = {
    message: string
}

export const ShowError = ({ message }: ShowErrorProps) => {
    return <>
        <p className="errorAtom">{message}</p>
    </>
}