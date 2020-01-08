import React from 'react';
import Hours from '../components/Hours/Hours';
import Layout from '../components/Layout/Layout';
import Card from '../components/Card/Card';
import Text from '../components/Inputs/Text/Text';

const Home = () => (
  <>
    <Layout 
      style={{ 
        padding: `20px 40px` 
      }}
    >
      <Card>
        <h3>Profile</h3>
        <Text label="Business Name" labelid="name" />
        <Text label="Business Description" labelid="description" />
      </Card>
      <Card>
        <h3>Hours</h3>
        <Hours />
      </Card>
      <Card>
        <h3>Contact</h3>
        <Text label="Address" labelid="address" />
        <Text label="Phone" labelid="Phone" />
        <Text label="Email" labelid="email" />
      </Card>
      <Card>
        <h3>Team</h3>
      </Card>
      <Card>
        <h3>Misc</h3>
      </Card>


    </Layout>
  </>
);

export default Home;
