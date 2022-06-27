function Thumbnail(props) {
    return (
        <img
            src={props.src}
            alt={props.alt}
            width="100"
            height="100"
        />
    )
}

export default Thumbnail;