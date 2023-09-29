interface Idescr {
    descr: {
        num: number,
        str: string,
    }
}

export const Description = (props: Idescr) => {
    return (
        <div className="item">
            <span>{props.descr.num}</span>
            {props.descr.str}
        </div>
    )
}