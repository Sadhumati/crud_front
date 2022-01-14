import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input }  from '@rocketseat/unform';

import {  Container } from './styles';
import api from '../../services/api';
import history from '../../services/history';

export default function Edit() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [taxId, setTaxId ] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        async function getUser(){
            await api.get(`/user/`)
                .then(({data}) => {
                    setName(data.name)
                    setTaxId(data.tax_id)
                    setEmail(data.email)
                })
        }

        getUser()
    }, [])

    async function handleSubmit(){
        await api.put(`/user/${id}`, {
            name,
            tax_id: taxId,
            email
        })
            .then(() => window.alert('usuário atualizado com sucesso'))
            .then(() => history.push('/'))
    }
    return (
        <Container>
            <button onClick={() => history.push('/')}> Voltar </button>
            <h1> Editar Cadastro </h1>

            <Form onSubmit={handleSubmit}>
                <Input name="name"  value={name  } onChange={({ target }) => setName(target.value)} placeholder="Nome" />
                <Input name="cpf"  value={taxId } onChange={({ target }) => setTaxId(target.value)} placeholder="CPF" />
                <Input name="email"  value={email || ''} onChange={({ target }) => setEmail(target.value)} placeholder="E-mail" />
                <button type="submit"> Editar </button>
            </Form>
        </Container>
    )
}
