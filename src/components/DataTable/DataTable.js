import React from 'react';
import {Button, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import FirebaseService from "../../services/FirebaseService";
import {Link} from "react-router-dom";
import {privateUrls} from "../../utils/urlUtils";

export const DataTable = ({data}) => {

    console.log(data);
    const remove = (id) => {
        FirebaseService.remove(id, 'equipamentos');
    };

    return <React.Fragment>
        <Typography variant="headline" component="h2">Data</Typography>
        <Link to="/add">
            <Button  style={{backgroundColor: 'rgb(156, 39, 176)',color:'white'}}>Novo</Button>
        </Link>
        <Table selectable="false">
            <TableHead>
                <TableRow>
                    <TableCell>Equipamento</TableCell>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Código</TableCell>
                    <TableCell>Local</TableCell>
                    <TableCell>Data</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item, index) =>
                        
                        <TableRow key={index}>
                            <TableCell>{item.equipamento}</TableCell>
                            <TableCell>{item.quantidade}</TableCell>
                            <TableCell>{item.codigo}</TableCell>
                            <TableCell>{item.local}</TableCell>
                            <TableCell>{item.data}</TableCell>
                            <TableCell>
                                <Button  style={{backgroundColor: 'red',color:'white'}} onClick={() => remove(item.key)}>
                                    Remover
                                </Button>

                                <Button style={{backgroundColor: 'rgb(255, 193, 7)',color:'white',marginLeft:'10px'}} component={props => <Link to={privateUrls.edit.pathWithouParam + item.key} {...props}/>}>
                                    Editar
                                </Button>

                            </TableCell>
                        </TableRow>
                        
                    )
                }
            </TableBody>
            
        </Table>

    </React.Fragment>
};