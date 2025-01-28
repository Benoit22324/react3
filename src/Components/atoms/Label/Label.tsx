import "./Label.css"

type LabelProps = {
    id: string
    label: string
}

export const Label = ({ id, label }: LabelProps) => {
    return <>
        <label htmlFor={id} className="labelAtom">{label}:</label>
    </>
}