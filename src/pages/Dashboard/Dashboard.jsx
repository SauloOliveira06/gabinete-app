import React from 'react'
import Navbar from '../../common/components/Navbar'
import BreadCrumb from './BreadCrumb/BreadCrumb';
import CardsInfo from './Cards/CardsInfo';
import Charts from './Charts/Charts';
import InfoTable from './InfoTable/InfoTable';

const Dashboard = () => {
    return (
        <main>
            <Navbar />
            <section>
                <BreadCrumb />
            </section>
            <section>
                <CardsInfo />
            </section>
            <section>
                <Charts />
            </section>
            <section>
                <InfoTable />
            </section>
        </main>
    )
}

export default Dashboard
