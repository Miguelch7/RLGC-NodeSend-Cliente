import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthContext from '../context/auth/authContext';
import Alerta from '../components/Alerta';

const CrearCuenta = () => {

  // Acceder al context
  const authContext = useContext(AuthContext);
  const { mensaje, registrarUsuario } = authContext;

  // Formulario y validación con formik y yup
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      nombre: yup.string().required('El Nombre es obligatorio'),
      email: yup.string().required('El Email es obligatorio').email('El Email no es válido'),
      password: yup.string().required('El Password no puede estar vacío').min(6, 'El Password debe contener al menos 6 caracteres'),
    }),
    onSubmit: (valores) => {
      registrarUsuario(valores);
    }
  });

  return (
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">Crear Cuenta</h2>

      { mensaje && <Alerta /> }

        <div className="flex justify-center mt-5">
          <div className="w-full max-w-lg">
            <form
              className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
              onSubmit={ formik.handleSubmit }
            >
              <div className="mb-4">
                <label
                  className="block text-black text-sm font-bold mb-2"
                  htmlFor="nombre"
                >Nombre</label>
                <input 
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nombre"
                  placeholder="Nombre de Usuario"
                  value={ formik.values.nombre }
                  onChange={ formik.handleChange }
                  onBlur={ formik.handleBlur }
                />
                { formik.touched.nombre && formik.errors.nombre ? (
                  <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{ formik.errors.nombre }</p>
                  </div>
                ) : null }
              </div>

              <div className="mb-4">
                <label
                  className="block text-black text-sm font-bold mb-2"
                  htmlFor="email"
                >Email</label>
                <input 
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  placeholder="Email de Usuario"
                  value={ formik.values.email }
                  onChange={ formik.handleChange }
                  onBlur={ formik.handleBlur }
                />
                { formik.touched.email && formik.errors.email ? (
                  <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{ formik.errors.email }</p>
                  </div>
                ) : null }
              </div>

              <div className="mb-4">
                <label
                  className="block text-black text-sm font-bold mb-2"
                  htmlFor="password"
                >Password</label>
                <input 
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  placeholder="Password de Usuario"
                  value={ formik.values.password }
                  onChange={ formik.handleChange }
                  onBlur={ formik.handleBlur }
                />
                { formik.touched.password && formik.errors.password ? (
                  <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{ formik.errors.password }</p>
                  </div>
                ) : null }
              </div>

              <input
                type="submit"
                className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold"
                value="Crear Cuenta"
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
 
export default CrearCuenta;