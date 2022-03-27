import transparent from "../images/logo-vp-back-transparent.png";
import map from "../images/map_por.png";

import { motion } from "framer-motion";
import {createState,useState}  from '@hookstate/core';
import { globalIndex } from "../App";

const zad = "calc(100vw - 100%)";
const zad1 = "calc(100vw - 5%)";

export const globalArea= createState("");

function Map() {
    const pageIndex = useState(globalIndex);

    const area = useState(globalArea);

    const selectOporto = () => {
        area.set(" do Porto / Gaia");

        simWait();
    }

    const selectLisbon = () => {
        area.set(" de Lisboa / Setúbal");

        simWait();
    }

    const simWait = () => {
        pageIndex.set(3);

        setTimeout(() => {
            pageIndex.set(4);
        }, 3000);
    }


    return (
        <>
            <motion.div initial={{ y: zad }} animate={{ y: "0%" }} className='form'>
                <img className="logo" src={transparent} />
                <motion.div initial={{ y: zad1 }} animate={{ y: "0%" }}>
                    <h3 Style="font-weight:100" >Selecione a área metropolitana correspondente ao teu passe.</h3>
                </motion.div>
                <motion.div className='container' initial={{ y: zad1 }} animate={{ y: "0%" }}>
                    <img className="map" src={map} />
                    <a className='lisboa'>⬤&nbsp;Lisboa&nbsp;&nbsp;&nbsp;&nbsp;</a>
                    <a className='porto'>&nbsp;&nbsp;&nbsp;⬤&nbsp;Porto</a>
                    <button onClick={selectLisbon} class="btn2">&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    <button onClick={selectOporto} class="btn3">&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </motion.div>
            </motion.div>
        </>);
}

export default Map;