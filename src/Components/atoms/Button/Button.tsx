type ButtonProps = {
    label: string,
    handleClick?: () => void
}

export const Button = ({ label, handleClick }: ButtonProps) => {
    return <>
        <button onClick={handleClick}>{label}</button>
    </>
}