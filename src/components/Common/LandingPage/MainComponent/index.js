import React from "react";

import "./styles.css";
import Button from "../../Button";
// import {Link} from "react-router-dom";

import { motion } from "framer-motion";


function MainComponent() {

    return (
        <div className="flex-info">
            <div className="left-component">
                <motion.h1 className="track-data-heading"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Track Data
                </motion.h1>

                <motion.h1 className="real-time-heading"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    WiJungle By HTTP Cart.
                </motion.h1>

                <motion.p className="info-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.75 }}
                >
                    Data will be shown through a public api in real time. Visit the Show Chart to see!
                </motion.p>
            </div>
        </div>
    )

}

export default MainComponent;