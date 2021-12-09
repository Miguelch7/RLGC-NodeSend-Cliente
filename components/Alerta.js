import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';

const Alerta = () => {

    // Acceder al Context
    const authContext = useContext(AuthContext);
    const { mensaje } = authContext;

    return (
        <div className="bg-red-500 py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto">
            { mensaje }
        </div>
    );
}
 
export default Alerta;