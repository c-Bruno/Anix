import { useState } from 'react'

function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais) 
    function setValue(chave, valor) {
    setValues({
        ...values,
        [chave]: valor,
    })
    }

    function digitar(info) {
        /* const { getAttribute, value } = info.target; */
        setValue(
            info.target.getAttribute('name'), 
            info.target.value
        )}

    function clearForm(){
        setValues(valoresIniciais)
    }

    return{
        digitar, 
        values,
        clearForm,
    }
}

export default useForm;