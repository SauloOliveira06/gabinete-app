import React from 'react'
import * as Bs from 'react-icons/bs';
import './CardsInfo.css'
import { Col, Container, Row } from 'react-bootstrap';

const CardsInfo = () => {
    const cardInfo = [
        { id: 1, boxText: "Funcionários", boxNumber: "58", bgColor: 'primary' },
        { id: 2, boxText: "Pautas", boxNumber: "120", bgColor: 'danger' },
        { id: 3, boxText: "Clientes", boxNumber: "99", bgColor: 'success' },
        { id: 4, boxText: "Pendências", boxNumber: "58", bgColor: 'info' },
    ];
    return (
        <>
            {
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
            }

        </>
    )
}

export default CardsInfo
