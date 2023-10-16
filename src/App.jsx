import { useState } from "react";
import "./App.css";
import Registro from "./componenetes/Registro";
import Footer from "./componenetes/Footer";

function App() {
    return (
        <>
            <main>
                <Registro></Registro>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
}

export default App;
