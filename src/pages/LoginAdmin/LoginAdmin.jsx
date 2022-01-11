
import React from 'react'
import imgAssembleia from '../../assets/images/assembleia.jpg'
import brasaoAssembleia from '../../assets/images/_brasao.png'
import { Row } from 'react-bootstrap'
import './LoginAdmin.css'

const LoginAdmin = () => {
    return (
        <section className={{ height: '100vh' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem', border: 'none', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src={imgAssembleia}
                                        alt="login form"
                                        className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form>
                                            <div className="d-flex align-items-center justify-content-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                <span className="h1 fw-bold mb-0">
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
                                                <input type="email" id="username" className="form-control form-control-lg" />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="password">Senha</label>
                                                <input type="password" id="password" className="form-control form-control-lg" />
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-primary btn-lg w-100 btn-block" type="button">Acessar</button>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginAdmin
