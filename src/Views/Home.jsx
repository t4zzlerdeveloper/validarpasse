import transparent from "../images/logo-vp-back-transparent.png";
import { motion } from "framer-motion";

import { globalIndex } from "../App";

import {useState}  from '@hookstate/core';

const zad = "calc(100vw - 100%)";
const zad1 = "calc(100vw - 5%)";
const zad2 = "calc(5vw - 5%)";

function Home() {

    const pageIndex = useState(globalIndex);
    
    const nextIndex = () =>{
        pageIndex.set(1);
    }

    return (
        <>
            <motion.div initial={{ y: zad }} animate={{ y: "0%" }} className='form'>
                <img className="logo" src={transparent} />
                <motion.div initial={{ y: zad1 }} animate={{ y: "0%" }}>
                    <h3>Bem-vindo!<p />A nossa plataforma permite validar o teu passe Sub-23 dentro da sua área metropolitana em apenas 2 passos.</h3>
                </motion.div>
                <motion.div initial={{ y: zad1 }} animate={{ y: "0%" }}>
                    <button className='btn' onClick={nextIndex}>Começar</button>
                </motion.div>

            </motion.div>
        </>
    );
}

export default Home;