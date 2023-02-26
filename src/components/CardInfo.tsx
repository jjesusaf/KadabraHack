import Image from "next/image";
import { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useNetwork } from "wagmi";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Form } from "react-bootstrap";
import buks from "../public/images/logo_c.png";
import styles from "../styles/Card.module.css";
import { WithdrawBtn } from "./Withdraw";
import { DepositBtn } from "./Deposit";
import {
  useApprove,
  useAllowance,
  useGetUsers,
  useGetNumberOfPayment,
  useGetUserPayments,
} from "../WagmiMethods";
import { calcFeeData } from "../utils/Avalanche";
import ModalProcessing from "./ModalProcessing";
import ModalApprove from "./ModalApprove";
import ModalError from "./ModalError";
import KadabraC from '../public/images/kadabraC.svg'

export function CardInfo() {
  const [isApproved, setIsApproved] = useState(false);
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const chainId = chain ? chain.id : 43113;
  const [withdraw, setWithdraw] = useState(false);
  const [deposit, setDeposit] = useState(true);
  const [maxFeePerGas, setMaxFeePerGas] = useState(0);
  const [maxPriorityFeePerGas, setMaxPriorityFeePerGas] = useState(0);

  const { usersCount, usersError } = useGetUsers(chainId);
  const {
    isLoading /*La transacción se está procesando */,
    txSuccess /*La transacción ya se efectuó */,
    txError,
    isPrepareError,
    prepareError,
    isError,
    error,
    data,
    approveERC20,
  } = useApprove(chainId, maxFeePerGas, maxPriorityFeePerGas);

  const { remainingTokens, allowanceError } = useAllowance(chainId);
  const { paymentCount } = useGetNumberOfPayment(chainId);

  useEffect(() => {
    (async () => {
      const result: any = await calcFeeData(chainId);

      setMaxFeePerGas(result?.maxFeePerGas);
      setMaxPriorityFeePerGas(result?.maxPriorityFeePerGas);
    })();

    setIsApproved(remainingTokens * 10 ** -6 >= 100);
  }, [remainingTokens, allowanceError, chainId]);

  const approveToken = () => {
    try {
      if (approveERC20) {
        console.log({ data, approveERC20 });
        approveERC20();
      }
    } catch (error: any) {
      console.log("[ERROR !!] ", error);
    }
  };

  const btnWithdraw = () => {
    setWithdraw(true);
    setDeposit(false);
  };

  const btnDeposit = () => {
    setDeposit(true);
    setWithdraw(false);
  };

  return (
    <>
      <Card className={styles.cardContent}>
        <Card.Body>
          <div style={{ margin: '1rem' }}>
            <Image src={KadabraC} alt='logo' />
            {/*<div className="col-4 text-center">
              <div className={`${styles.bsBadge} rounded-5`}>
                <p style={{ margin: '0', padding: '0' }}>Lotería</p>
              </div>
            </div>
            <div className="col-4" style={{ marginTop: "65.5px" }}>
              <div className="position-relative">
                <Image
                  src={buks}
                  alt="Bucks Logo"
                  width={65}
                  height={72}
                  className="position-absolute top-100 start-50 translate-middle mt-3 mb-5"
                />
              </div>
            </div>
            <div className="col-4 text-center">
              <div className={`${styles.bsBadge} rounded-5`}>
                <p style={{ margin: '0', padding: '0' }}>Cierra en 30 días</p>
              </div>
            </div> */}
          </div>
          <p style={{ color: '#65676B' }}>
            Primer reto incentivado de Kadabra App para conocer la Beta y empezar a ahorrar
            en comunidad.
          </p>
          {/* <h3 className={`${styles.cardTitle} fw-semibold`}>Buks</h3>*/}
          {/*<Card.Text className="text-center fw-bolder">
            Reto para la comunidad
          </Card.Text> */}
          {/*<Card className={styles.about}>
            <Card.Body>
              <Card.Title className={`${styles.aboutTitle} fw-bolder`}>
                Acerca
              </Card.Title>
              <Card.Text className={`${styles.aboutText} fw-semibold`}>
                Forma parte del 1er reto de ahorro en Buks y acompáñanos al
                Avalanche Summit.
              </Card.Text>
            </Card.Body>
          </Card> */}
          {/* <div className={`row d-flex justify-content-around ${styles.cardBody1}`}>
            <div className={`col-6 ${styles.cardTT1}`}>
              <Card className={styles.price}>
                <Card.Body>
                  <Card.Title className={`${styles.aboutTitle} fw-bolder`}>
                    Premio
                  </Card.Title>
                  <Card.Text className={`${styles.aboutText} fw-semibold`}>
                    3 Avalanche Summit tickets rifados
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className={`col-5 ${styles.cardTT1}`}>
              <Card className={styles.objective}>
                <Card.Body>
                  <Card.Title className={`${styles.aboutTitle} fw-bolder`}>
                    Objetivo
                  </Card.Title>
                  <Card.Text className={`${styles.aboutText}`}>
                    Ahorrar $150 USDC durante 7 semanas
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div> */}
          <div className={`${styles.cardBody2}`}>
            <div>
              <p>
                0
              </p>
              <p>
                Jugadores
              </p>
            </div>
            <div>
              <p>
                0
              </p>
              <p>
                Jugadores
              </p>
            </div>
            <div>
              <p>
                0
              </p>
              <p>
                Jugadores
              </p>
            </div>
          </div>
          <Card className={styles.registry}>
            <Card.Body>
              <div className="d-flex justify-content-center">
                <Nav
                  variant="pills"
                  className={`${styles.action} p-1`}
                  fill
                  aria-label="SubMenu"
                >
                  <Nav.Item>
                    <Nav.Link
                      as="button"
                      onClick={btnDeposit}
                      className="rounded-3"
                      style={{
                        height: deposit ? "38px" : "38px",
                        background: deposit ?'linear-gradient(93.63deg, #484848 5.36%, rgba(72, 72, 72, 0.36) 47.78%, #484848 91.69%)' :'#1C1D21',
                        color: "white", 
                        boxShadow: deposit ? '0px 3px 5px #121111' : 'none',
                        fontWeight: deposit ? 'bold' : 'normal'
                      }}
                      active
                    >
                      Depositar
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      as="button"
                      onClick={btnWithdraw}
                      className="rounded-3"
                      style={{
                        height: withdraw ? "38px" : "38px",
                        background: withdraw ? 'linear-gradient(93.63deg, #484848 5.36%, rgba(72, 72, 72, 0.36) 47.78%, #484848 91.69%)': '#1C1D21',
                        boxShadow: withdraw ? '0px 3px 5px #121111' : 'none',
                        color: "white",
                        fontWeight: withdraw ? 'bold' : 'normal'
                      }}
                    >
                      Retirar
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div>
                <div
                  className="row d-flex justify-content-around"
                  style={{ margin: "12px" }}
                >
                  <div className="col-6">
                    {!txSuccess && deposit && (
                      <>
                        <div className={styles.descText}>
                          <p>Participantes actuales</p>
                          <span>{usersCount} participantes</span>
                        </div>
                        <div className={styles.descText}>
                          <p>Cierre de inicio</p>
                          <span>3 Marzo</span>
                        </div>
                      </>
                    )}
                    {txSuccess && (
                      <div className={styles.descText}>
                        <p>Depositado</p>
                        <span>$0 USDC</span>
                      </div>
                    )}
                    {withdraw && !deposit && (
                      <>
                        <div className={styles.descText}>
                          <p>Depositado</p>
                          <span>$150 USDC</span>
                        </div>
                        <div className={styles.descText}>
                          <p>Monto a Retirar </p>
                          <Form.Control
                            type="text"
                            className={`${styles.formcard1}`}
                            placeholder={`0 USDC`}
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="col-5">
                    {!txSuccess && deposit && (
                      <>
                        <div className={`${styles.descText}`}>
                          <p>No. ganadores</p>
                          <span>3 billeteras</span>
                        </div>
                        <div className={`${styles.descText}`}>
                          <p>Término de reto</p>
                          <span>14 Abril</span>
                        </div>
                      </>
                    )}
                    {txSuccess && deposit && (
                      <div className={`${styles.descText} text-end`}>
                        <p>Prob de ganar</p>
                        <span>0</span>
                      </div>
                    )}
                    {withdraw && !deposit && (
                      <>
                        <div className={`${styles.descText} text-end`}>
                          <p>Penalidad</p>
                          <span>5%</span>
                        </div>
                      </>
                    )}
                  </div>
                  {txSuccess && deposit && (
                    <div className="col-11">
                      <div className={`${styles.descText}`}>
                        <p>0 de 7 depósitos realizados</p>
                        <ProgressBar animated now={10} />
                      </div>
                    </div>
                  )}
                </div>
                {!isConnected && (
                  <div
                    className={`${styles.buksButton} d-flex justify-content-center`}
                  >
                    <ConnectButton
                      label="CONECTA BILLETERA"
                      chainStatus="icon"
                      showBalance={{ smallScreen: false }}
                    />
                  </div>
                )}
                {isConnected && !txSuccess && !isApproved && (
                  <>
                    <div className={`d-flex justify-content-center`}>
                      <Button
                        className={styles.approveButton}
                        onClick={() => approveToken()}
                        disabled={isLoading || isPrepareError}
                      >
                        {isLoading ? "APROBANDO..." : "APROBAR CONTRATO"}
                      </Button>
                    </div>
                  </>
                )}
                {isLoading && <ModalProcessing />}
                {txSuccess && (
                  <ModalApprove
                    txSuccess={txSuccess}
                    data={data}
                    chainId={chainId}
                  />
                )}
                {(isPrepareError || isError) && (
                  <ModalError
                    isPrepareError={isPrepareError}
                    prepareError={prepareError}
                    isError={isError}
                    error={error}
                    txError={txError}
                  />
                )}
                {isConnected &&
                  !isError &&
                  (isApproved || txSuccess) &&
                  deposit && (
                    <div className={`d-flex justify-content-center`}>
                      <DepositBtn
                        maxFeePerGas={maxFeePerGas}
                        maxPriorityFeePerGas={maxPriorityFeePerGas}
                      />
                    </div>
                  )}
                {isConnected && !isError && isApproved && withdraw && (
                  <div className={`d-flex justify-content-center`}>
                    <WithdrawBtn
                      maxFeePerGas={maxFeePerGas}
                      maxPriorityFeePerGas={maxPriorityFeePerGas}
                    />
                  </div>
                )}
              </div>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </>
  );
}
