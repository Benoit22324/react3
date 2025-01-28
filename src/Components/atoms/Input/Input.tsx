import "./Input.css"

type InputProps = {
    id: string
    type: string
    value: string
    setValue: (value: string) => void
    placeholder?: string
}

export const Input = ({ id, type, value, setValue, placeholder }: InputProps) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return <>
        <input id={id} type={type} onChange={handleOnChange} value={value} placeholder={placeholder} className="inputAtom" />
    </>
}