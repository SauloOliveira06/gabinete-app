import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './InfoTable.css'

const InfoTable = () => {
    return (
        <>
            <Container >
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
                                        <td>Diego Batista</td>
                                        <td>Ronaldo Fenômeno</td>
                                        <td>Cristiano</td>
                                        <td>61</td>
                                        <td>Pauta X com problemas</td>
                                        <td>Outros</td>
                                    </tr>

                                    <tr>
                                        <td>Ellie</td>
                                        <td>Obiwan</td>
                                        <td>Maria</td>
                                        <td>28</td>
                                        <td>Pauta Y com problemas</td>
                                        <td>Outros</td>
                                    </tr>
                                    <tr>
                                        <td>Darth Vader</td>
                                        <td>Naruto</td>
                                        <td>Joaquim</td>
                                        <td>11</td>
                                        <td>Pauta Z com problemas</td>
                                        <td>Outros</td>
                                    </tr>
                                    <tr>
                                        <td>Adamaster</td>
                                        <td>Buda</td>
                                        <td>Armando</td>
                                        <td>18</td>
                                        <td>Pauta W com problemas</td>
                                        <td>Outros</td>
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
