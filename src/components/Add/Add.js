import {Button, TextField, Typography} from "@material-ui/core";
import React, {Component} from "react";
import FirebaseService from "../../services/FirebaseService";
import {urls} from "../../utils/urlUtils";
import {withRouter} from "react-router-dom";

var today = new Date();

var day = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();

var date = year + '-' + month + '-' + day;




class Add extends Component {

    state = {id: null, quantidade:'', equipamento: '', codigo: '', data: date, local: ''};

    componentWillMount = () => {
        const {id} = this.props.match.params;
        if (!(id === undefined || !id)) {
            this.setState({id});
            FirebaseService.getUniqueDataBy('leituras', id, (data) => this.setState({...data}, () => console.log(this.state)));
        }

    };

    submit = (event) => {
        event.preventDefault();

        const {equipamento} = this.state;
        const {quantidade} = this.state;
        const {codigo} = this.state;
        const {local} = this.state;
        const {data} = this.state


        

        let objToSubmit = {
            equipamento,
            quantidade,
            codigo,
            local,
            data
        };

        if (this.props.match.params.id === undefined) {
            FirebaseService.pushData('leituras', objToSubmit);
        } else {
            FirebaseService.updateData(this.props.match.params.id, 'leituras', objToSubmit)
        }

        this.props.history.push(urls.data.path);

    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render = () => {
        return (<React.Fragment>

            <Typography variant="headline" component="h2">Add New</Typography>
            <form onSubmit={this.submit}>
                <TextField className="input-field"
                           type="text"
                           value={this.state.equipamento}
                           label="Equipamento"
                           required
                           onChange={this.handleChange('equipamento')}/>

                <TextField className="input-field"
                           type="text"
                           value={this.state.quantidade}
                           label="Quantidade"
                           required
                           onChange={this.handleChange('quantidade')}/>

                <TextField className="input-field"
                           type="text"
                           label="codigo"
                           value={this.state.codigo}
                           required
                           onChange={this.handleChange('codigo')}/>


                <TextField className="input-field"
                           type="text"
                           label="Local"
                           value={this.state.local}
                           required
                           onChange={this.handleChange('local')}/>

                <Button type="submit"
                        style={{marginTop: '20px', display: 'inline-block'}}>
                    Add
                </Button>
            </form>
        </React.Fragment>)
    }
}

export default withRouter(Add);