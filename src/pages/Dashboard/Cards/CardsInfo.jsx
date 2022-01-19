import React from 'react'
import './CardsInfo.css'
import { Col, Container, Row } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

const CardsInfo = () => {
    // const cardInfo = [
    //     { id: 1, boxText: "Funcionários", boxNumber: "58", bgColor: 'primary' },
    //     { id: 2, boxText: "Pautas", boxNumber: "120", bgColor: 'danger' },
    //     { id: 3, boxText: "Clientes", boxNumber: "99", bgColor: 'success' },
    //     { id: 4, boxText: "Pendências", boxNumber: "58", bgColor: 'info' },
    // ];
    return (
        <>
            {/* {
                cardInfo.map((card, index) => {
                    return (
                        <Col sm key={index}>
                            <div className={`card-counter ${card.bgColor}`}  >
                                <span className="count-numbers">{card.boxText}</span>
                                <span className="count-name">{card.boxNumber}</span>
                            </div>
                        </Col >
                    )
                })
            } */}


            <Container className='mt-4'>
                <Row>
                    <Col xl={3} md={6} style={{ marginBottom: '1.5rem' }}>
                        <div className="card border-left-primary h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <Col>
                                        <div className="text-xs text-primary text-uppercase mb-1">
                                            Funcionários
                                        </div>
                                        <div className="h5 mb-0">357</div>
                                    </Col>
                                    <Col className="col-auto">
                                        <FaIcons.FaUsers style={{ fontSize: '42px', color: 'rgb(136,136,136)' }} />
                                    </Col>
                                </div>
                            </div>
                        </div>
                    </Col>


                    <Col xl={3} md={6} style={{ marginBottom: '1.5rem' }}>
                        <div className="card border-left-success h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <Col>
                                        <div className="text-xs text-success text-uppercase mb-1">
                                            Pautas
                                        </div>
                                        <div className="h5 mb-0">389</div>
                                    </Col>
                                    <Col className="col-auto">
                                        <IoIcons.IoIosPaper style={{ fontSize: '42px', color: 'rgb(136,136,136)' }} />
                                    </Col>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xl={3} md={6} style={{ marginBottom: '1.5rem' }}>
                        <div className="card border-left-info h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <Col className="col mr-2">
                                        <Col>
                                            <div className="text-xs text-info text-uppercase mb-1">
                                                Clientes
                                            </div>
                                            <div className="h5 mb-0">
                                                57
                                            </div>
                                        </Col>
                                    </Col>
                                    <Col className="col-auto">
                                        <IoIcons.IoIosPeople style={{ fontSize: '42px', color: 'rgb(136,136,136)' }} />
                                    </Col>
                                </div>
                            </div>
                        </div>
                    </Col>


                    <Col xl={3} md={6} style={{ marginBottom: '1.5rem' }}>
                        <div className="card border-left-warning h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <Col>
                                        <div className="text-xs text-warning text-uppercase mb-1">
                                            Pendências
                                        </div>
                                        <div className="h5 mb-0">
                                            48
                                        </div>
                                    </Col>
                                    <Col className="col-auto">
                                        <IoIcons.IoMdWarning style={{ fontSize: '42px', color: 'rgb(136,136,136)' }} />
                                    </Col>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default CardsInfo
