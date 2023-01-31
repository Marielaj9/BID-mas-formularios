
import {useState} from 'react'

const Formularios = () => {

    const [nombre, setNombre]= useState("");
    const [nombreError, setNombreError]= useState("");
    const [apellido, setApellido]= useState("");
    const [apellidoError, setApellidoError]= useState("");
    const [email, setEmail]= useState("");
    const [emailError, setEmailError]= useState("");
    const [contraseña, setContraseña]= useState("");
    const [contraseñaError, setContraseñaError]= useState("");
    const [confirmarContraseña, setConfirmarContraseña]= useState("");
    const [confirmarContraseñaError, setConfirmarContraseñaError]= useState("");

    

    const handleNewName = (value) =>{
        if (value.length <2){
            setNombreError(" el campo debe tener al menos 2 caracteres")
        }
        else{
            setNombreError("");
        }
        setNombre(value);
    }

    const handleNewLastName = (value) =>{
        if (value.length <2){
            setApellidoError(" el campo debe tener al menos 2 caracteres")
        }
        else {
            setApellidoError("");
        }
        setApellido(value);
    }

    const handleNewEmail = (value) =>{
        if (value.length <5){
            setEmailError(" el campo debe tener al menos 5 caracteres")
        }
        else {
            setEmailError("");
        }
        setEmail(value);
    }

    const handleNewContraseña = (value) => {
        if (value.length <8){
            setContraseñaError("El campo debe tener al menos 8 caracteres")
        }
        else {
            setContraseñaError("");
        }
        setContraseña(value);
    }

    const verificarContraseña = (e) =>{
        if (contraseña !==confirmarContraseña){
            setConfirmarContraseñaError("La contraseña no coincide")
        }
        else {
            setConfirmarContraseñaError("");
        }
        setConfirmarContraseña(e);

    } 

    return (
    <>
        <h2>Formularios</h2>
        <form>
            <div>
                <label>Nombre</label>
                <input type="text" min={2} value= {nombre} onChange={(e) => handleNewName (e.target.value)} />
            </div>
            <p>{nombreError}</p>
            <div>
                <label>Apellido</label>
                <input type="text" min={2} value= {apellido} onChange={(e) => handleNewLastName(e.target.value)}/>
            </div>
            <p>{apellidoError}</p>
            
            <div>
                <label>Email</label>
                <input type="text" min={5} value= {email} onChange={(e) => handleNewEmail(e.target.value)}/>
            </div>
            <p>{emailError}</p>
            <div>
                <label>Contraseña</label>
                <input type="password" min={8} value= {contraseña} onChange={(e) => handleNewContraseña(e.target.value)}/>
            </div>
            <p>{contraseñaError}</p>
            <div>
                <label>Confirmar contraseña</label>
                <input type="password" min={8} value= {confirmarContraseña} onChange={(e) => verificarContraseña(e.target.value)}/>
            </div>
            <p>{confirmarContraseñaError}</p>
            
            <input type="submit"/>
        </form>
        </>
    )
}

export default Formularios