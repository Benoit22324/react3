type ListingProps = {
    list?: string[]
}

export const Listing = ({list}: ListingProps) => {
    return <>
        {
            list && <>
                {
                    list.map((item: string, index: number) => <p key={index}>{item}</p>)
                }
            </>
        }
    </>
}