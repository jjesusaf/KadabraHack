import React from 'react';
import styles from '../styles/Modal.module.css';
import Wallet from '../public/images/place.svg';
import Image from 'next/image';
import { useState } from 'react';
import Cancel from '../public/images/Cancel.svg';

const ModalWithdraw = () => {

    const [view, setView] = useState(true)

    return (
        <>
            {view ? <div>
                <div className={`${styles.backdrop}`}>
                </div>
                <div className={`${styles.containerModal}`}>
                    <div className={`${styles.mod}`} style={{ height: '597px' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <h1 className={`${styles.modH1}`} style={{ textAlign: 'left' }}>
                                    Retirar
                                </h1>
                                <Image src={Cancel} alt="Wallet" onClick={() => setView(false)}/>
                            </div>
                            <p className={`${styles.modP}`} style={{ textAlign: 'left', color: 'red' }}>
                                Estás por salir anticipado de un reto de ahorro.
                                Se te cobrará una comisión del 5% sobre el monto.
                            </p>
                            <div style={{ paddingBottom: '10px', paddingTop: '20px', gap: '12px', display: 'flex', flexDirection: 'column' }}>
                                <Image src={Wallet} alt='Wallet' />
                            </div>
                        </div>
                        <div className={`${styles.modDeposit}`} style={{ paddingTop: '25px', paddingBottom: '20px', borderBottom: '2px solid #E6E8EC' }}>
                            <div>
                                <p className={`${styles.modP}`} style={{ margin: '0' }}>
                                    Retiro sin penalidad
                                </p>
                            </div>
                            <div>
                                <p className={`${styles.modP}`} style={{ margin: '0', color: 'black', fontWeight: 'bold' }}>
                                    7 de abril
                                </p>
                            </div>
                        </div>
                        <div className={`${styles.modDeposit}`} style={{ paddingTop: '5px', paddingBottom: '20px' }}>
                            <div>
                                <p className={`${styles.modP}`} style={{ margin: '0' }}>
                                    Penalidad por retiro anticipado
                                </p>
                            </div>
                            <div>
                                <p className={`${styles.modP}`} style={{ margin: '0', color: 'black', fontWeight: 'bold' }}>
                                    -2.5 USDC
                                </p>
                            </div>
                        </div>
                        <div className={`${styles.modDeposit}`} style={{ paddingTop: '5px', paddingBottom: '30px' }}>
                            <div>
                                <p className={`${styles.modP}`} style={{ margin: '0' }}>
                                    Total a retirar
                                </p>
                            </div>
                            <div>
                                <p className={`${styles.modP}`} style={{ margin: '0', color: 'black', fontWeight: 'bold', fontSize: '24px' }}>
                                    47.5 USDC
                                </p>
                            </div>
                        </div>
                        <button
                            className={`${styles.btnAprove}`}
                            onClick={() => setView(false)}>
                            Retirar
                        </button>
                    </div>
                </div>
            </div> : null}

        </>

    );
};

export default ModalWithdraw;