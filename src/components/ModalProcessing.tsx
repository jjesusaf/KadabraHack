import React, { useState } from 'react';
import styles from "../styles/Modal.module.css";

const ModalProcessing = () => {   

    return (
        <div>
            <div className={`${styles.backdrop}`}>

            </div>
            <div className={`${styles.containerModal}`}>
                <div className={`${styles.mod}`}>
                    <div className={`${styles.ldsSpinner}`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    <h1 className={`${styles.modH1}`}>
                        Procesando
                    </h1>
                    <p className={`${styles.modP}`}>
                        Estamos validando tu transacción enviada.
                        ¡Si tarda demasiado, reinicia la página!
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ModalProcessing;