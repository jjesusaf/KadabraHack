import React from 'react';
import styles from '../styles/Modal.module.css';
import confirm from '../public/images/confirm.svg';
import Image from 'next/image';
import Snowtrace from '../public/images/Snowtrace.svg';
import { useState } from 'react';
import { useNetwork } from "wagmi";
import { useWithdraw } from "../WagmiMethods";
const ModalWithdAprove = ({ maxFeePerGas, maxPriorityFeePerGas }: any) => {
    const { chain } = useNetwork();
    const chainId = chain ? chain.id : 43113;
    const {
        isLoading,
        txSuccess,
        txError,
        isPrepareError,
        prepareError,
        isError,
        error,
        data,
        withdraw,
    } = useWithdraw(chainId, maxFeePerGas, maxPriorityFeePerGas);

    const [view, setView] = useState(true)

    return (
        <>
            {view ? <div>
                <div className={`${styles.backdrop}`}>
                </div>
                <div className={`${styles.containerModal}`}>
                    <div className={`${styles.mod}`} style={{ height: '547px' }}>
                        <div style={{ borderBottom: '2px solid #E6E8EC' }}>
                            <Image src={confirm} alt='confirm' />
                            <div style={{ paddingBottom: '10px', paddingTop: '30px', gap: '12px', display: 'flex', flexDirection: 'column' }}>
                                <h1 className={`${styles.modH1}`}>
                                    Retiro realizado
                                </h1>
                                <p className={`${styles.modP}`}>
                                    Los fondos ya se encuentran en tu billetera. <br />
                                    ¡Esperamos verte en el próximo reto!
                                </p>
                            </div>
                        </div>
                        <div style={{ paddingTop: '10px', paddingBottom: '30px' }}>
                            <p className={`${styles.modP}`} style={{ margin: '0' }}>
                                Ver la transacción en el explorador
                            </p>
                            <a
                                href={`https://testnet.snowtrace.io/tx/${data?.hash}`}
                                target="_blank"
                                rel="noreferrer">
                                <Image src={Snowtrace} alt='Snowtrace' />
                            </a>
                        </div>
                        <button
                            className={`${styles.btnAprove}`}
                            onClick={() => setView(false)}>
                            Hecho
                        </button>
                    </div>
                </div>
            </div> : null}

        </>

    );
};

export default ModalWithdAprove;