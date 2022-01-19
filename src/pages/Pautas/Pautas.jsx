import React from 'react'
import Navbar from '../../common/components/Navbar'
import { Col, Row, Container, Breadcrumb } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai'

const Pautas = () => {
    return (
        <>
            <Navbar />
            <Container style={{ marginTop: '1rem' }}>
                <Row>
                    <Col sm={6}>
                        <div className='title-dashboard'>Cadastro de Pautas</div>
                    </Col>
                    <Col sm={6}>
                        <Breadcrumb className='componente-breadcrumb'>
                            <Breadcrumb.Item href="/dashboard-administrativo">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Cadastro de pautas</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <Container>
                <form className="mt-5" >
                    {/* <h3 className='mb-4'>Cadastrar Funcionário</h3> */}
                    <Row>
                        <Col md={6}>
                            <div className="form-group">
                                <label htmlFor="assunto">Assunto</label>
                                <input
                                    type="text"
                                    name="assunto"
                                    className="form-control"
                                    id="assunto"
                                    placeholder="Digite o assunto"

                                />

                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-group">
                                <label htmlFor="descricao">Descrição</label>
                                <input
                                    type="text"
                                    name="descricao"
                                    className="form-control"
                                    placeholder="Digite o descricao"
                                />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-group">
                                <label htmlFor="associar_categoria">Associar Categoria</label>
                                <input
                                    type="associar_categoria"
                                    name="associar_categoria"
                                    className="form-control"
                                    placeholder="Associar a categoria"
                                />

                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="form-group">
                                <label htmlFor="associar_usuario">Associar Usuario</label>
                                <input
                                    type="associar_usuario"
                                    name="associar_usuario"
                                    className="form-control"
                                    placeholder="Associar usuario"
                                />

                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="form-group">
                                <label htmlFor="data_cadastro" >Data de Cadastro</label>
                                <input
                                    className="form-control"
                                    name="starting_date"
                                    type="date"
                                />
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="funcionario_cadastrou">Funcionário que Cadastrou</label>
                                    <input
                                        type="text"
                                        name="funcionario_cadastrou"
                                        className="form-control"
                                        placeholder="Digite o funcionario cadastrou"
                                    />

                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="status">Status</label>
                                    <input
                                        type="text"
                                        name="city"
                                        className="form-control"

                                        placeholder='Status'
                                    />

                                </div>
                            </div>
                        </Col>
                    </Row>
                    <button className="btn btn-primary mt-2">Cadastrar</button>
                    <button type="button" className="btn btn-secondary mt-2" style={{ marginLeft: '10px' }}>Limpar filtro</button>
                </form>
            </Container>

            <Container>
                <Row>
                    <Col sm={12} md={12} xl={12}>
                        <div className='mt-5'>
                            <table id="datatable" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th>Assunto</th>
                                        <th>Descrição</th>
                                        <th>Categoria Associada</th>
                                        <th>Usuário Associado</th>
                                        <th>Data de Cadastro</th>
                                        <th>Funcionário Responsável</th>
                                        <th>Status</th>
                                        <th>Editar</th>
                                        <th>Deletar</th>
                                    </tr>
                                </thead>

                                <tfoot>
                                    <tr>
                                        <th>Assunto</th>
                                        <th>Descrição</th>
                                        <th>Categoria Associada</th>
                                        <th>Usuário Associado</th>
                                        <th>Data de Cadastro</th>
                                        <th>Funcionário Responsável</th>
                                        <th>Status</th>
                                        <th>Editar</th>
                                        <th>Deletar</th>
                                    </tr>
                                </tfoot>

                                <tbody>
                                    <tr>
                                        <td>Categoria X</td>
                                        <td>Descrição X</td>
                                        <td>Cidade</td>
                                        <td>João</td>
                                        <td>04/03/1999</td>
                                        <td>Pedro Pereira</td>
                                        <td><span style={{background: 'orange', color: '#fff', padding: '4px', borderRadius: '4px'}}>ENCAMINHADO</span></td>
                                        <td>
                                            <p data-placement="top" data-toggle="tooltip" title="Edit">
                                                <button className="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" >
                                                    <AiIcons.AiOutlineEdit style={{ fontSize: '1.3rem' }} />
                                                </button>
                                            </p>
                                        </td>
                                        <td>
                                            <p data-placement="top" data-toggle="tooltip" title="Delete">
                                                <button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" >
                                                    <AiIcons.AiOutlineDelete style={{ fontSize: '1.3rem' }} />
                                                </button>
                                            </p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Categoria Y</td>
                                        <td>Descrição Y</td>
                                        <td>Bairro</td>
                                        <td>Pedro</td>
                                        <td>21/04/1999</td>
                                        <td>Estevan Joaquim</td>
                                        <td><span style={{background: 'green', color: '#fff', padding: '4px', borderRadius: '4px'}}>PROCESSADO</span></td>
                                        <td>
                                            <p data-placement="top" data-toggle="tooltip" title="Edit">
                                                <button className="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" >
                                                    <AiIcons.AiOutlineEdit style={{ fontSize: '1.3rem' }} />
                                                </button>
                                            </p>
                                        </td>
                                        <td>
                                            <p data-placement="top" data-toggle="tooltip" title="Delete">
                                                <button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" >
                                                    <AiIcons.AiOutlineDelete style={{ fontSize: '1.3rem' }} />
                                                </button>
                                            </p>
                                        </td>
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

export default Pautas
