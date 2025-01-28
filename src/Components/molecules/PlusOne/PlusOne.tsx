import { Button } from "@atoms/Button";
import { useRecommendStore } from "@store/useRecommendStore";
import { useState } from "react"

type PlusOneProps = {
    label: string
    count: number
}

export const PlusOne = ({ label, count }: PlusOneProps) => {
    const { increment, decrement } = useRecommendStore()
    const [added, setAdded] = useState(false);
    const [counter, setCounter] = useState(count);

    const handleClick = () => {
        if (added) {
            setCounter(counter - 1);
            decrement();
        } else {
            setCounter(counter + 1);
            increment();
        }

        setAdded(!added);
    }

    return <>
        <div>
            <p>Number of {label}: {counter}</p>
            <Button label={label} handleClick={handleClick} />
        </div>
    </>
}