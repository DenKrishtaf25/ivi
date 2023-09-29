interface Iquality {
    quality: string
}

export const Button = (props: Iquality) => {
    return (
        <button className="btn">
            { props.quality }
        </button>
    )
}