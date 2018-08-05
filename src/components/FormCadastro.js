import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Row, Input, Button, CardPanel, Col } from 'react-materialize';
import Axios from '../../node_modules/axios';

class FormCadastro extends Component {
    constructor(props){
        super(props)
        this.state = {
            nome:'',
            idade:'',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();                
        const data = this.state;
        Axios.post('http://localhost:4000/pessoas',data,{ headers: {'Access-Control-Allow-Origin': '*'}}).then(function(response){
            console.log(response);
        }).catch(function(error){
            console.log(error);    
        });                
    }
    handleChange(event) {        
        const name = event.target.name;
        const valor = event.target.value;
        this.setState({[name]: valor});
    }
    render() {
        return (
            <Row>
                <Col s={12} m={6}>
                    <CardPanel className="default lighten-4 black-text">
                        <form onSubmit={this.handleSubmit}>
                            <Row>
                                <Input s={12} label="Nome" id="nome" name="nome" onChange={this.handleChange}/>
                                <Input s={12} label="Idade" id="idade" name="idade" onChange={this.handleChange}/>
                            </Row>
                            <Button type="submit" waves='light'>button</Button>
                        </form>
                    </CardPanel>
                </Col>
            </Row>
        );
    }
}

export default FormCadastro;