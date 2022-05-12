import React from 'react'
import { useState } from 'react'
import './Form.css'

import { db } from '../../../firebase/Firebase'
import { collection, addDoc } from 'firebase/firestore'

//ja esta tudo feito aqui, enviando a coleção pro banco de dados no Firebase

export default function FormFooter() {    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        addDoc(collection(db, 'newsletter'), {
            name: nome,
            email: email,
            data: new Date()
        })
        .then(() => {
            alert('Dados cadastrado com sucesso')
            setNome('')
            setEmail('')
        })
    }

    return(
        <form onSubmit={handleSubmit} className='FormFooter'>
            <div>
                <div>
                    <input type="text" placeholder='Digite seu nome...' value={nome} onChange={(e) => setNome(e.target.value)} required/>
                </div>
                <div>
                    <input type="email" placeholder='Digite seu e-mail...' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div>
                    <button className='Button' type='submit'>QUERO RECEBER</button>   
                </div>
            </div>
        </form>
    )
};
