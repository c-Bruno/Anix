import React from "react"

function FormField({ value, onChange }) {
    return(
        <div>
                <label>
                    Nome da Categoria:
                <input
                    type="text"
                    name="nome"
                    value = {value}
                    onChange ={onChange} 
                />
                </label>             
            </div> 
    )
}

export default FormField;