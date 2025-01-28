import "./Skeleton.css"

type SkeletonProps = {
    width?: string
    height?: string
    borderRadius?: string
}

export const Skeleton = ({width = "50px", height = "50px", borderRadius = "2px"}: SkeletonProps) => {
    return <>
        <div className="skeletonAtom" style={{
            width,
            height,
            borderRadius
        }}></div>
    </>
}