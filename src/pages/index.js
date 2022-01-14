import React, { useEffect, useState } from 'react';
import api from '../services/api'
import history from '../services/history'
import { Title, Container }  from './styles';

export default function Main() {

    const [data, setData] = useState([])

    useEffect(() => {
        api.get('/users').then( ({data}) => {
            setData(data.users);
        });
    }, []);

    async function handleDelete(id){
        await api.delete(`/user/${id}`)
            .then( () => {
                api.get('/users').then( ({data}) => {
                    setData(data.users);
                });
            })
    }
    return (
        <Container>
            <Title>
            <h1>
                "Pagina Inicial"
            </h1>
            </Title>
            <button onClick={() => history.push('/create')}>
                cadastrar novo
            </button>
            <ul>
                {data && data.map(user => (
                        <li key={user.id} >
                          <strong>{`  Nome:   ${user.name}   `}</strong>
                          <strong>{`  Cpf:    ${user.tax_id} `}</strong>
                          <strong>{`  E-Mail: ${user.email}  `}</strong>
                          <button onClick={() => handleDelete(user.id)}>
                            excluir
                          </button>
                          <button onClick={() => history.push(`/edit/${user.id}`)}>
                            Editar
                          </button>
                        </li>
                      ))}
            </ul>
        </Container>
    )

}
