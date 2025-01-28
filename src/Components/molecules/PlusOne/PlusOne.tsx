import { Button } from "@atoms/Button";
import { useState } from "react"

type PlusOneProps = {
    label: string
    count: number
}

export const PlusOne = ({ label, count }: PlusOneProps) => {
    const [added, setAdded] = useState(false);
    const [counter, setCounter] = useState(count);

    const handleClick = () => {
        if (added) setCounter(counter - 1);
        else setCounter(counter + 1);

        setAdded(!added);
    }

    return <>
        <div>
            <p>Number of {label}: {counter}</p>
            <Button label={label} handleClick={handleClick} />
        </div>
    </>
}