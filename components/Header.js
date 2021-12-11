import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthContext from '../context/auth/authContext';
import AppContext from '../context/app/appContext';

const Header = () => {

    // Routing
    const router = useRouter();

    // Acceder al context
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    // Acceder al context de la app
    const appContext = useContext(AppContext);
    const { limpiarState } = appContext;

    useEffect(() => {
        usuarioAutenticado();
    }, []);

    const volverAlIndex = () => {
        limpiarState();
        router.push('/');
    }

    return (
        <header className="py-8 flex flex-col md:flex-row items-center justify-between">
            <img
                onClick={ () => volverAlIndex() } 
                className="w-64 mb-8 md:mb-0 cursor-pointer" src="/logo.svg" 
            />

            <div>
                { usuario ? (
                    <div className="flex items-center">
                        <p className="mr-2">Hola { usuario.nombre }</p>
                        <button
                            type="button"
                            className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase"
                            onClick={ () => cerrarSesion() }
                        >Cerrar Sesión</button>
                    </div>
                ) : (
                    <>
                        <Link href="/login">
                            <a className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2">Iniciar Sesión</a>
                        </Link>
                        <Link href="/crear-cuenta">
                            <a className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase">Crear Cuenta</a>
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}
 
export default Header;