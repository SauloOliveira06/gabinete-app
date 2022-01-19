import React from 'react'
import { Chart } from "react-google-charts"
import { Container, Row, Col } from 'react-bootstrap'

export const data = [
    ["City", "Clientes", "Pautas"],
    ["Manaus", 8175000, 8008000],
    ["Maceió", 3792000, 3694000],
    ["Aracaju", 2695000, 2896000],
    ["Brusque", 2099000, 1953000],
    ["Florinópolis", 1526000, 1517000],
];

export const options = {
    title: "Demanda de Clientes e Pauas",
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
        title: "Cliente/Pauta",
        minValue: 0,
    },
    vAxis: {
        title: "Gráfico",
    },
};

const Charts = () => {
    return (
        <>
            <Container className='mt-4'>
                <Row>
                    <Col sm={6}>
                        <Chart
                            chartType="BarChart"
                            width="100%"
                            height="400px"
                            data={data}
                            options={options}
                            style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}
                        />
                    </Col>
                    <Col sm={6}>
                        <Chart
                            chartType="LineChart"
                            width="100%"
                            height="400px"
                            data={data}
                            options={options}
                            style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Charts
