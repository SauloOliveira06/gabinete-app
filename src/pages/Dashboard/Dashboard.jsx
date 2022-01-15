import React from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../common/components/Navbar'
import CardsInfo from './Cards/CardsInfo';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <main>
            <Navbar />
            <section className='content-dashboard'>
                <Container fluid style={{ marginTop: '1rem' }}>
                    <Row>
                        <Col sm={6}>
                            <div className='title-dashboard'>Dashboard</div>
                        </Col>
                        <Col sm={6}>
                            <Breadcrumb className='componente-breadcrumb'>
                                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <CardsInfo />
            </section>
        </main>
    )
}

export default Dashboard
