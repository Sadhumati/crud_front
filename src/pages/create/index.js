import React from 'react';
import { Form, Input }  from '@rocketseat/unform';
import api from '../../services/api'
import history from '../../services/history';
import { Container } from './styles';

export default function Create() {

    async function handleSubmit({name, email, cpf}){
        await api.post('/user', {
                name,
                email,
                tax_id: cpf
        })
            .then(() => window.alert('usuário cadastrado com sucesso'))
            .then(() => history.push('/'))
    }

    return (
        <Container>
            <button onClick={() => history.push('/')}>Voltar</button>
            <h1> Adicione um usuário </h1>

            <Form onSubmit={handleSubmit}>
                <Input name="name"  placeholder="Nome" />
                <Input name="cpf"  placeholder="CPF" />
                <Input name="email"  placeholder="E-mail" />
                <button type="submit"> Cadastrar </button>
            </Form>
        </Container>
    )
}
