import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbar from '../../common/components/Navbar'
import './Funcionario.css'

const Funcionarios = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Row>
                    <Col md={6}>
                        <Link to='/cadastrar-funcionario' id='link-box'>
                            <div className="box-part text-center">
                                <div className="title">
                                    <h3>CADASTRAR FUNCIONÁRIO</h3>
                                </div>
                                <div className="text">
                                    <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md={6}>
                        <Link to='/editar-funcionario' id='link-box'>
                            <div className="box-part text-center">
                                <div className="title">
                                    <h3>EDITAR FUNCIONÁRIO</h3>
                                </div>
                                <div className="text">
                                    <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Funcionarios