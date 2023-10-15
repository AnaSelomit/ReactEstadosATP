import SocialButton from "./SocialButton";
import React from "react";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Formulario from "./Formulario";

const registro = () => {
    return (
        <>
            <div className="box0">
                <section className="box1">
                    <div className="box2">
                        <div className="title">
                            <h3>Crea una Cuenta</h3>
                        </div>
                        <div className="brands">
                            <SocialButton icon={faFacebook} icon2={faGithub} icon3={faLinkedin}></SocialButton>
                        </div>
                        <div className="formulary">
                            <Formulario></Formulario>
                            <h4>Enjoy</h4>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default registro;
