import React from 'react'
import './Form.css'

export default function FormFooter() {
    //criar um estado para cada input do formulário
    //criar um estado para cada input do formulário
    
    return(
        <form>
            <div>
                <div>
                    <input type="text" placeholder='Digite seu nome...' />
                </div>
                <div>
                    <input type="text" placeholder='Digite seu e-mail...' />
                </div>
                <div>
                    <button type='submit'>QUERO RECEBER</button>   
                </div>
            </div>
        </form>
    )
};
