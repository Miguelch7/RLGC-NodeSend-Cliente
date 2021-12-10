import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import AuthContext from '../context/auth/authContext';

const Index = () => {

  // Acceder al context
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <Layout>
      <h1>Index</h1>
    </Layout>
  );
}
 
export default Index;