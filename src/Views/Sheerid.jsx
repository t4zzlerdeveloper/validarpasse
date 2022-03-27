import { motion } from "framer-motion";

const zad1 = "calc(100vw - 5%)";

function Sheerid() {
    return (
        <>
            <motion.div title="sheerid" initial={{ y: zad1 }} animate={{ y: "0%" }} className='form'>
                <iframe className="sheerid" width="500px" height="650px" src='https://services.sheerid.com/verify/623e8edc19a65d5a7db2969a/'></iframe>
            </motion.div>
        </>
    );
}

export default Sheerid;