import transparent from "../images/logo-vp-back-transparent.png";
import error from "../images/circle-exclamation-solid.svg";
import { motion } from "framer-motion";

import {useState}  from '@hookstate/core';
import { globalIndex } from "../App";

const zad = "calc(100vw - 100%)";
const zad1 = "calc(100vw - 5%)";


function Invalidated() {

    const pageIndex = useState(globalIndex);

    const resetStep = () => {
        pageIndex.set(0);
    }

    return (
        <>
            <motion.div initial={{ y: zad }} animate={{ y: "0%" }} className='form'>
                <img className="logo" src={transparent} />
                <motion.div initial={{ y: zad1 }} animate={{ y: "0%" }}>
                    <h3 Style="font-weight:100" >Pedimos desculpa!<p />Mas ocorreu um erro a inesperado.</h3>
                </motion.div>
                <motion.div initial={{ y: zad1 }} animate={{ y: "0%" }}>
                    <img className="error" src={error} />
                </motion.div>
                <motion.div initial={{ y: zad1 }} animate={{ y: "0%" }}>
                    <button className='btn' onClick={resetStep}>Voltar</button>
                </motion.div>
            </motion.div>
        </>);

}
export default Invalidated;
