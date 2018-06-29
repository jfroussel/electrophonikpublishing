import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import AudioPlayer from './Audioplayer'

const products = [
    { title: 'titre 1', length: 20,<AudioPlayer /> },
    { title: 'titre 2', length: 20, },
    { title: 'titre 3', length: 20,},
    { title: 'titre 4', length: 20 },
    { title: 'titre 5', length: 20 },
    { title: 'titre 6', length: 20 },
    { title: 'titre 7', length: 20 },
    { title: 'titre 8', length: 20 },
    { title: 'titre 9', length: 20 },
    { title: 'titre 10', length: 20 },
    { title: 'titre 11', length: 20 },
    { title: 'titre 12', length: 20 },

]
export default class CatalogTable extends Component {
    constructor(props) {
        super(props)

    }

    isExpandableRow(row) {
        if (row.id < 2) return true;
        else return false;
    }

    expandComponent(row) {
        return (
            'details du morceau'
        );
    }

    render() {
        const options = {
            expandRowBgColor: 'rgb(242, 255, 163)'
        };
        return (
            <div>
                <BootstrapTable
                    data={products}
                    version='4'
                    pagination
                    options={ options }
                    striped
                    expandableRow={ this.isExpandableRow }
                    expandComponent={ this.expandComponent }
                    search>
                    <TableHeaderColumn dataField='title' isKey>Title</TableHeaderColumn>
                    <TableHeaderColumn dataField='length'>Length</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Actions</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
};
