import React from 'react';
import Hours from '../components/Hours/Hours';
import Layout from '../components/Layout/Layout';
import Card from '../components/Card/Card';

const Home = () => (
  <>
    <Layout 
      style={{ 
        padding: `20px 40px` 
      }}
    >
      <Card>
        <h3>Profile</h3>
        <label>Business Name<input type='text'></input></label>
        <br></br>
        <label>Business Description<textarea></textarea></label>
      </Card>
      <Card>
        <h3>Hours</h3>
        <Hours />
      </Card>
      <Card>
        <h3>Contact</h3>
        <label>Address<input type='text'></input></label>
        <br></br>
        <label>Phone<input type='text'></input></label>
        <br></br>
        <label>Email<input type='text'></input></label>
      </Card>
      <Card>
        <h3>Team</h3>
      </Card>


    </Layout>
  </>
);

export default Home;
