import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Navbar from '../../../common/components/Navbar'
import './FuncionariosForm.css'

const FormFuncionario = () => {
    return (
        <>
            <Navbar />
            <Container fluid>
                <form className="mt-5">
                    <h3 className='mb-4'>Cadastrar Funcionário</h3>
                    <Row>
                        <Col md={6}>
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" name="fullname" className="form-control" id="nome" placeholder="Digite o nome" required="required" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-group">
                                <label htmlFor="sobrenome">Sobrenome</label>
                                <input type="text" name="fullname" className="form-control" id="sobrenome" placeholder="Digite o sobrenome" required="required" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-group">
                                <label htmlFor="cep">Localização / CEP</label>
                                <input type="text" name="address" className="form-control" id="cep" placeholder="63 rua X" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="cidade">Cidade</label>
                                    <input type="text" name="city" className="form-control" id="cidade" placeholder="Manaus" />
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="form-group">
                                <label htmlFor="estado">Estado</label>
                                <input type="text" name="zip" className="form-control" id="estado" placeholder="Amazonas" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="form-group">
                                <label htmlFor="data_nascimento" >Data de Nascimento</label>
                                <input className="form-control" name="starting_date" type="date" value="2020-02-01" id="data_nascimento" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="form-group">
                                <label htmlFor="password" >Cadastrar Senha</label>
                                <input className="form-control" name="password" type="password" id="password" />
                            </div>
                        </Col>
                    </Row>
                    <button type="submit" className="btn btn-primary mt-2">Cadastrar</button>
                </form>
            </Container>

            <Container fluid >
                <Row>
                    <Col sm={12} md={12} xl={12}>
                        <div className='mt-5'>
                            <table id="datatable" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Sobrenome</th>
                                        <th>Endereço</th>
                                        <th>Idade</th>
                                        <th>Data de Nascimento</th>
                                        <th>Senha</th>
                                        <th>Editar</th>
                                        <th>Deletar</th>
                                    </tr>
                                </thead>

                                <tfoot>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Sobrenome</th>
                                        <th>Endereço</th>
                                        <th>Idade</th>
                                        <th>Data de Nascimento</th>
                                        <th>Senha</th>
                                        <th>Editar</th>
                                        <th>Deletar</th>
                                    </tr>
                                </tfoot>

                                <tbody>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>61</td>
                                        <td>2011/04/25</td>
                                        <td>********</td>
                                        <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button className="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span className="glyphicon glyphicon-pencil"></span></button></p></td>
                                        <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span className="glyphicon glyphicon-trash"></span></button></p></td>
                                    </tr>

                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>61</td>
                                        <td>2011/04/25</td>
                                        <td>********</td>
                                        <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button className="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span className="glyphicon glyphicon-pencil"></span></button></p></td>
                                        <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span className="glyphicon glyphicon-trash"></span></button></p></td>
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

export default FormFuncionario
