import React from 'react'
import Layout from '../views/Layout';
import DetailsView from '../views/Detailsview';
import SubdetailsView from '../views/Subdetails'
import '../assets/css/style.css'

function Dashboard() {
  return (
    <Layout>
    <div className='dashboard'>
        <div className='row'>
          <DetailsView/>
          <SubdetailsView/>
        </div>
    </div>
    </Layout>
  )
}

export default Dashboard