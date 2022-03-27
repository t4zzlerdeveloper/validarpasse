/* eslint-disable import/first */

import check from "../images/circle-check-solid.svg";;
import transparent from "../images/logo-vp-back-transparent.png";

import { motion } from "framer-motion"

import { globalArea } from "./Map";
import {useState}  from '@hookstate/core';

const zad = "calc(100vw - 100%)";
const zad1 = "calc(100vw - 5%)";

function Validated() {

    const launchPartner = () =>{
        window.open("https://www.pick.ubirider.com/","about:blank");
    }

    const area = useState(globalArea);

    return (
        <>
            <motion.div initial={{ y: zad }} animate={{ y: "0%" }} className='form'>
                <img className="logo" src={transparent} />
                <motion.div initial={{ y: zad1 }} animate={{ y: "0%" }}>
                    <h3 Style="font-weight:100" >Obrigado!<p />O teu estatuto de estudante foi verificado e dentro de momentos o teu passe Sub-23 estará válido para uso na área metropolitana{area.get()}.</h3>
                </motion.div>
                <motion.div initial={{ y: zad1 }} animate={{ y: "0%" }}>
                    <img className="check" src={check} alt="check" />
                </motion.div>
                <motion.div initial={{ y: zad1 }} animate={{ y: "0%" }}>
                    <h3 Style="font-weight:100" >Gostavas de carregar o teu passe online?</h3>
                </motion.div>
                <motion.div initial={{ y: zad1 }} animate={{ y: "0%" }}>
                    <button className='btn' onClick={launchPartner}>Aceder</button>
                </motion.div>

            </motion.div>
        </>);
}

export default Validated;