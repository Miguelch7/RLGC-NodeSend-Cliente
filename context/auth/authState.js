import React, { useReducer } from 'react';
import AuthContext from "./authContext";
import authReducer from './authReducer';

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LIMPIAR_ALERTA
} from '../../types';

import clienteAxios from '../../config/axios';

const AuthState = ({ children }) => {

    // Definir State Inicial
    const initialState = {
        token: '',
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    // Definir Reducer
    const [ state, dispatch ] = useReducer(authReducer, initialState);

    // Registrar nuevos usuarios
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data.msg
            });
        } catch (error) {
            dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.msg
            });
        }

        // Limpia la alerta despues de 3 segundos
        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA
            });
        }, 3000);
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthState;