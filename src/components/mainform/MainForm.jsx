import React, {useState} from 'react'
import './MainForm.css'
//adicionar a action dps vamos mandar os dados pro banco de dados aqui iremos usar o FireBase ou outro q seja mais sussa de configurar  
// aqui temos três tipos de forms o do TCC da consultoria e do contato a renderização é condicional a partir de props (Propriedades), e o titulo também é passada por props

import {db} from '../../firebase/Firebase'
import {collection, addDoc } from 'firebase/firestore'

export default function MainForm(props) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [assunto, setAssunto] = useState('')
    const [data, setData] = useState(new Date())

    //const [file, setFile] = React.useState('') aqui é o arquivo tipo midia que acho que vamos chamar ele durante o subm do form, creio que podemos passar o mesmo id pra eles  mas o file não é controlado

    //handleSubmit é uma função que recebe um evento como parâmetro, que nosso caso é quando submetemos o form.

    const handleSubmit = (e) => {
        e.preventDefault()
        //aqui vamos usar o firebase para mandar os dados pro banco de dados

        addDoc(collection(db, props.origem ? props.origem : 'nao_classificado'), {
            name: nome,
            email: email,
            telefone: telefone,
            mensagem: mensagem,
            assunto: assunto,
            date: data
        })
        .then(() => {
            alert('Mensagem enviada com sucesso!')
            setNome('')
            setEmail('')
            setTelefone('')
            setMensagem('')
            setAssunto('')
            setData(new Date())
        })
    
    }
    return(
        <div className='MainForm'>
            <form onSubmit={handleSubmit}>
                <div>
                    <h4>{props.nome ? props.nome : 'DIGITE AQUI O TITULO DO FORMULÁRIO'}</h4>
                </div>
                <div>
                    <label htmlFor="#">NOME </label><br/>
                    <input type="text" placeholder='Digite o seu nome...' className='Input Input2' value={nome} onChange={(e) => setNome(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="#">E-MAIL</label><br/>
                    <input type="email" placeholder='Digite seu e-mail...' className='Input Input2' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="#">TELEFONE</label><br/>
                    <input type="number" placeholder='Digite seu telefone...' className='Input Input2' value={telefone} onChange={(e) => setTelefone(e.target.value)} required/>
                </div>
                { (props.tableType === 'contact') ? (
                    <>
                        <div>
                            <label htmlFor="#">ASSUNTO</label><br />
                            <select className='Input Input2' value={assunto} onChange={(e) => setAssunto(e.target.value)}>
                                <option value='null' >Selecione uma opção...</option>
                                <option value="Elogio">Elogio</option>
                                <option value="Duvida">Duvida</option>
                                <option value="Sugestao">Sugestão</option>
                                <option value="Reclamacao">Reclamação</option>
                            </select>
                        </div>
                        <div>
                                <label htmlFor="#">MENSAGEM</label><br />
                                <textarea name="Digite sua mensagem" id="msg" cols="30" rows="10" className='Input' value={mensagem} onChange={(e) => setMensagem(e.target.value)} required></textarea>
                        </div>
                    </>) : (props.tableType === 'tcc') ?(
                    <div>
                    <label htmlFor="#">ENVIE SUA IDÉIA</label><br/>
                    <input type="file" name="esboco" id="esboco" accept='image/png, image/jpg, document.pdf'/>
                    </div> ) : null
                }     
                <div className='buttonArea'>
                    <input type="submit" value="ENVIAR" className='button'/>
                </div>
            </form>
        </div>
    )
}
