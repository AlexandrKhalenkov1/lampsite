import React from 'react';
import Layout from '../components/layout';

const test = ({id}) => {
  console.log(id)
  return(
    <Layout>
      <div>
        test + {id}
      </div>
    </Layout>
  )
}
export default test