import React from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import './BreadCrumb.css'

const BreadCrumb = () => {
    return (
        <Container style={{ marginTop: '1rem' }}>
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
    )
}

export default BreadCrumb
