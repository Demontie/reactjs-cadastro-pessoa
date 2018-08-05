import React, { Component } from 'react';
import Axios from '../../node_modules/axios';
import { Collection, CollectionItem } from '../../node_modules/react-materialize';

class ListPessoas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pessoa: [],
        }
    }
    
    componentDidMount(){
        Axios.get('http://localhost:4000/pessoas', { headers: {'Access-Control-Allow-Origin': '*'}}).then(resposta => {
            this.setState({ pessoa: resposta.data });
        })
    }
    render() {
        
        return (
            <Collection>
                {this.state.pessoa.map(pessoa => (
                    <CollectionItem key={pessoa._id}>{pessoa.nome}</CollectionItem>
                ))}
            </Collection>
        );
    }
}

export default ListPessoas;