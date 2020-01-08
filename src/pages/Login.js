import React from 'react';
import LoginButton from '../containers/LoginButton';
import Layout from '../components/Layout/Layout';

const Login = () => (
  <>
    <Layout 
      style={{ 
        padding: `20px 40px` 
      }}
    >
    <LoginButton />
  </Layout>
  </>
);

export default Login;
