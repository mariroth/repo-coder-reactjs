import React from "react";

const FormCheckout = ({ dataForm, handleChangeImput, sendOrder }) => {
    return (
        <form onSubmit={sendOrder}>
            <input 
                type="text" 
                name="fullname" 
                value={dataForm.fullname} 
                onChange={handleChangeImput} 
                placeholder="Ingrese su nombre"
            />

            <input 
                type="number" 
                name="phone" 
                value={dataForm.phone} 
                onChange={handleChangeImput} 
                placeholder="Ingrese su teléfono"
            />

            <input 
                type="text" 
                name="email" 
                value={dataForm.email} 
                onChange={handleChangeImput} 
                placeholder="Ingrese su email"
            />

            <button type="submit">Enviar Orden</button>
        </form>
    );
}

export default FormCheckout;
