import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './InfoTable.css'

const InfoTable = () => {
    return (
        <>
            <Container fluid >
                <Row>
                    <Col sm={12} md={12} xl={12}>
                        <div className='mt-5'>
                            <table id="datatable" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th>Gestores</th>
                                        <th>Funcionários</th>
                                        <th>Clientes</th>
                                        <th>Pautas</th>
                                        <th>Pendências</th>
                                        <th>Outro</th>
                                    </tr>
                                </thead>

                                <tfoot>
                                    <tr>
                                        <th>Gestores</th>
                                        <th>Funcionários</th>
                                        <th>Clientes</th>
                                        <th>Pautas</th>
                                        <th>Pendências</th>
                                        <th>Outro</th>
                                    </tr>
                                </tfoot>

                                <tbody>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>61</td>
                                        <td>2011/04/25</td>
                                        <td>$320,800</td>
                                    </tr>

                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>61</td>
                                        <td>2011/04/25</td>
                                        <td>$320,800</td>
                                    </tr>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>61</td>
                                        <td>2011/04/25</td>
                                        <td>$320,800</td>
                                    </tr>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>61</td>
                                        <td>2011/04/25</td>
                                        <td>$320,800</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InfoTable
