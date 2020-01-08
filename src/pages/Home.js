import React from 'react';
import Hours from '../components/Hours/Hours';
import Layout from '../components/Layout/Layout';
import Card from '../components/Card/Card';


const Home = () => (
  <>
    <Layout 
      style={{ 
        paddingTop: `40px` 
      }}
    >
      <Card>
        <h3>Profile</h3>
      </Card>
      <Card>
        <h3>Hours</h3>
        <Hours />
      </Card>
      <Card>
        <h3>Contact</h3>
      </Card>
      <Card>
        <h3>Team</h3>
      </Card>


    </Layout>
  </>
);

export default Home;
