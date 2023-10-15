import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertDismissible({ show1, name, email, out }) {
    const [show, setShow] = useState(true);

    return (
        <div className={`content ${show1 ? "show1" : ""}`}>
            <Alert className="alert-content" show={show} variant="success">
                <Alert.Heading>Cuenta creada!</Alert.Heading>
                <h1>{name}</h1>
                <p>
                    Felicitaciones, te enviaremos un correo a <b>{email}</b> para que puedas corroborar tus datos
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => out()} variant="outline-success">
                        Genial!
                    </Button>
                </div>
            </Alert>
        </div>
    );
}

export default AlertDismissible;
