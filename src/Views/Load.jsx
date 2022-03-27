import big from "../images/logo-vp-big-transparent.png";

import { motion } from "framer-motion";

const zad = "calc(100vw - 100%)";
const zad1 = "calc(100vw - 5%)";
const zad2 = "calc(5vw - 5%)";

function Load() {
    return (
        <>
            <motion.div initial={{ y: zad }} animate={{ y: "0%" }} className='form'>
                <img className="logo loader" src={big} />
                <div>
                    <h3 Style="font-weight:100" >A comunicar com os servidores...</h3>
                </div>

            </motion.div>
        </>);
}

export default Load;