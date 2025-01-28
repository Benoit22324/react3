import "./Title.css";

type TitleProps = {
    label: string
}

export const Title = ({ label }: TitleProps) => {
    return <>
        <h2 className="titleAtom">{label}</h2>
    </>
}