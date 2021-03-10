import React, { Component } from 'react'
import Columns from './Columns'

export class Table extends Component {
    render() {
        return (
            <>
             <tbody>
                    <tr>
                        <Columns/>
                    </tr>
                </tbody>   
            </>
        )
    }
}

export default Table
