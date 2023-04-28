const Alert = (props) => {
    return (
        <div>
            {props.mensaje && !props.correctLogin? <p className="alert alert-danger my-2">{props.mensaje}</p> : null}
            {props.mensaje && props.correctLogin ? <p className="alert alert-success my-2">{props.mensaje}</p> : null}
        </div>
    );
}

export default Alert;