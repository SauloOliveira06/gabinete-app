
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import imgAssembleia from '../../assets/images/assembleia.jpg'
import brasaoAssembleia from '../../assets/images/_brasao.png'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './LoginAdmin.css'

const LoginAdmin = () => {
    const [userInput, setUserInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setUserInput(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let acessoAdmin = {
            email: 'admin',
            password: 'admin'
        }

        if ((userInput === acessoAdmin.email) && (passwordInput === acessoAdmin.password)) {
            const token = '123456abcdef';
            sessionStorage.setItem('auth-token', token);
            navigate('/dashboard-administrativo');
        } else {
            alert('Email e Senha inválidos');
        }
    }

    return (
        <section className={{ height: '100vh' }}>
            <Container style={{height: '100vh'}}>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                    <Col xl={10}>
                        <Card style={{ borderRadius: '1rem', border: 'none', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src={imgAssembleia}
                                        alt="login form"
                                        className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black" style={{height: '100%'}}>
                                        <form autoComplete="off" onSubmit={handleLoginSubmit}>
                                            <div className="d-flex align-items-center justify-content-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                <span className="h1 fw-bold mb-0" style={{margin: '0'}}>
                                                    <img
                                                        src={brasaoAssembleia}
                                                        alt="Brasao Assembleia"
                                                        className="img-fluid"
                                                        id='brasao_assembleia'
                                                    />
                                                </span>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Acesso Administrativo</h5>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="username">Usuário</label>
                                                <input
                                                    type="text"
                                                    id="username"
                                                    className="form-control form-control-lg"
                                                    value={userInput}
                                                    onChange={handleEmailChange}
                                                    required
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="password">Senha</label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    className="form-control form-control-lg"
                                                    value={passwordInput}
                                                    onChange={handlePasswordChange}
                                                    required
                                                />
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-primary btn-lg w-100 btn-block" type="submit">Acessar</button>
                                            </div>
                                            <div className='copyright-login'>
                                                <Row>
                                                    <a href="/#" className="small text-muted">Termos de uso </a>
                                                </Row>
                                                <Row>
                                                    <a href="/#" className="small text-muted">Política de Privacidade </a>
                                                </Row>
                                                <Row>
                                                    <a href="/#" className="small text-muted">&copy; Arktech - Assembléia Legislativa</a>
                                                </Row>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LoginAdmin
