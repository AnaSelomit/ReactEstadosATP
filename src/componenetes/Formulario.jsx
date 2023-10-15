import { useState } from "react";
import AlertA from "./AlertA";

const formulario = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpassword, setRepeatpassword] = useState("");
    const [error, setError] = useState("");
    const [show1, setShow1] = useState(false);

    //Función antes de enviar el formulario
    const validarDatos = (e) => {
        e.preventDefault();
        //Validación;
        if (name === "" || email === "" || password === "" || repeatpassword === "") {
            setError("Todos los campos son obligatorios");
            return;
        }

        if (password !== repeatpassword) {
            setError("Las contraseñas no son iguales, reingrésa");
            return;
        }

        if (password.length < 8) {
            setError("La contraseña debe tener más de 8 caracteres ");
            return;
        }

        setError("");
        setShow1(true);
    };

    const outA = () => {
        setName("");
        setEmail("");
        setPassword("");
        setRepeatpassword("");
        setShow1(false);
    };

    // const ventana = () => {
    //     if (show1) {
    //         setShow1(false);
    //     } else {
    //         setShow1(true);
    //     }
    // };

    return (
        <div>
            <form className="formulario" onSubmit={validarDatos}>
                {error ? <p className="error">{error}</p> : ""}
                <div className="form-one">
                    <label>Nombre</label>
                    <input type="text" name="nombre" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className="form-one">
                    <label>Correo</label>
                    <input type="text" name="e-mail" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="form-one">
                    <label>Contraseña</label>
                    <input type="text" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div className="form-one">
                    <label>Repetir Contraseña</label>
                    <input
                        type="text"
                        name="repeat password"
                        className="form-control"
                        onChange={(e) => setRepeatpassword(e.target.value)}
                        value={repeatpassword}
                    />
                </div>
                <button type="submit" className="btn">
                    Enviar
                </button>
            </form>
            <AlertA show1={show1} name={name} email={email} out={outA}></AlertA>
        </div>
    );
};

export default formulario;
