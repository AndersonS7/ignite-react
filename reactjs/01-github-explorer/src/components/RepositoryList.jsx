import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repository.scss';

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/AndersonS7/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []); // quando o array está vasio, a função só executará uma única vez

    return (
        <section className='repository-list'>
            <h1>Lista de Repositórios</h1>

            <ul>
                {
                    repositories.map(repository => {
                        return <RepositoryItem key={repository.name} repository={repository} />
                    })
                }
            </ul>
        </section>
    )
}