import React, { Component } from 'react'
import './Mainstyle.css'


function StyleSheet(props) {
    let classNam=(props.primary) ? 'primary':''
    return (
        <div>
            <h2 className={`${classNam} font-xl`}> Hello World!</h2>
        </div>
    )
}

export default StyleSheet
