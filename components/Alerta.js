import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import AppContext from '../context/app/appContext';

const Alerta = () => {

    // Acceder al Context
    const authContext = useContext(AuthContext);
    const { mensaje } = authContext;

    // Acceder al Context de la App
    const appContext = useContext(AppContext);
    const { mensaje_archivo } = appContext;

    return (
        <div className="bg-red-500 py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto">
            { mensaje || mensaje_archivo }
        </div>
    );
}
 
export default Alerta;