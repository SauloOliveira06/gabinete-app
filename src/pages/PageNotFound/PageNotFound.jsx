import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <>
            <div className='body-404'>
                <div className="container-404">
                    <h2>404</h2>
                    <h3>Oops, nada encontrado...</h3>
                    <p>Por favor, verifique a URL</p>
                    <p>Ou, <Link to="/">Clique Aqui</Link> para redirecionar a página incial.</p>
                </div>
            </div>
        </>
    )
}

export default PageNotFound
