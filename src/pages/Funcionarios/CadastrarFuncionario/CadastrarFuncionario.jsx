import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Card, Col, Container, Row } from 'react-bootstrap'
import Navbar from '../../../common/components/Navbar'
import ApiCep from '../../../services/api_cep'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import './FuncionariosForm.css'

const CadastrarFuncionario = () => {
    const [endereco, setEndereco] = useState({});

    const validationSchema = Yup.object().shape({
        nome: Yup.string()
            .required('campo nome é obrigatório!'),
        sobrenome: Yup.string()
            .required('campo sobrenome é obrigatório!'),
        email: Yup.string()
            .required('o email é obrigatório!'),
        cep: Yup.string()
            .required('CEP obrigatório!'),
        logradouro: Yup.string()
            .required('o logradouro é obrigatório!'),
        localidade: Yup.string()
            .required('campo cidade é obrigatório!'),
        bairro: Yup.string()
            .required('campo bairro é obrigatório!'),
        uf: Yup.string()
            .required('campo UF é obrigatório!'),
        password: Yup.string()
            .required('campo senha é obrigatório!')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    // useEffect(() => {
    //     setTimeout(() => setEndereco({nome: '', }))
    // }, [])

    const handleEndereco = (e) => {
        const cep = e.target.value;
        console.log('cep: ', cep)
        ApiCep.SearchCep(cep)
            .then((res) => {
                let logradouro = res.data.logradouro;
                let localidade = res.data.localidade;
                let bairro = res.data.bairro;
                let uf = res.data.uf;
                console.log(res.data);
                setEndereco({
                    logradouro: logradouro,
                    localidade: localidade,
                    bairro: bairro,
                    uf: uf
                });
            })
            .catch(err => console.log(err))
            .finally(() => console.log('end'))
    }

    const checarEnter = (e) => {
        if (e.key === 'Enter') e.preventDefault();
    };

    function onSubmit(data) {
        alert('Cadastrado (FAKE) \n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return (
        <>
            <Navbar />
            <Container fluid>
                <form className="mt-5" onKeyDown={checarEnter} onSubmit={handleSubmit(onSubmit)} >
                    <h3 className='mb-4'>Cadastrar Funcionário</h3>
                    <Row>
                        <Col md={6}>
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
                                    id="nome"
                                    placeholder="Digite o nome"
                                    {...register('nome')}
                                />
                                <div className="invalid-feedback">{errors.nome?.message}</div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-group">
                                <label htmlFor="sobrenome">Sobrenome</label>
                                <input
                                    type="text"
                                    name="sobrenome"
                                    className={`form-control ${errors.sobrenome ? 'is-invalid' : ''}`}
                                    placeholder="Digite o sobrenome"
                                    {...register('sobrenome')}
                                />
                                <div className="invalid-feedback">{errors.sobrenome?.message}</div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    {...register('email')}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder="Digite o email"
                                />
                                <div className="invalid-feedback">{errors.email?.message}</div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="form-group">
                                <label htmlFor="cep">CEP</label>
                                <InputMask
                                    type="text"
                                    name="cep"
                                    {...register('cep')}
                                    value={endereco.cep}
                                    mask="99999-999"
                                    className={`form-control ${errors.cep ? 'is-invalid' : ''}`}
                                    placeholder="Digite o CEP"
                                    onBlur={handleEndereco}
                                />
                                <div className="invalid-feedback">{errors.cep?.message}</div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="logradouro">Logradouro</label>
                                    <input
                                        type="text"
                                        name="logradouro"
                                        {...register('logradouro')}
                                        className={`form-control ${errors.logradouro ? 'is-invalid' : ''}`}
                                        value={endereco.logradouro}
                                        placeholder="Logradouro"
                                    />
                                    <div className="invalid-feedback">{errors.logradouro?.message}</div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="complemento">Complemento</label>
                                    <input
                                        type="text"
                                        name="complemento"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="bairro">Bairro</label>
                                    <input
                                        type="text"
                                        name="bairro"
                                        {...register('bairro')}
                                        className={`form-control ${errors.bairro ? 'is-invalid' : ''}`}
                                        value={endereco.bairro}
                                        placeholder="Bairro"
                                    />
                                    <div className="invalid-feedback">{errors.bairro?.message}</div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="cidade">Cidade</label>
                                    <input
                                        type="text"
                                        name="city"
                                        {...register('localidade')}
                                        className={`form-control ${errors.localidade ? 'is-invalid' : ''}`}
                                        value={endereco.localidade}
                                        placeholder='Cidade'
                                    />
                                    <div className="invalid-feedback">{errors.localidade?.message}</div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="form-group">
                                <label htmlFor="estado">Estado</label>
                                <input
                                    type="text"
                                    name="uf"
                                    {...register('uf')}
                                    className={`form-control ${errors.uf ? 'is-invalid' : ''}`}
                                    value={endereco.uf}
                                    placeholder='UF'
                                />
                                <div className="invalid-feedback">{errors.uf?.message}</div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="form-group">
                                <label htmlFor="data_nascimento" >Data de Nascimento</label>
                                <input
                                    className="form-control"
                                    name="starting_date"
                                    type="date"
                                />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="form-group">
                                <label htmlFor="password" >Cadastrar Senha</label>
                                <input
                                    type='password'
                                    name="password"
                                    {...register('password')}
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder='Digite uma senha'
                                />
                                <div className="invalid-feedback">{errors.password?.message}</div>
                            </div>
                        </Col>
                    </Row>
                    <button className="btn btn-primary mt-2">Cadastrar</button>
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

export default CadastrarFuncionario
