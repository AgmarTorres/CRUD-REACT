import React from 'react'

import './App.css'

import Logo from '../components/template/logo'

import Nav from '../components/template/main'
import Main from '../components/template/main'
import Footer from '../components/template/main'


export default props =>
    <div className= "app">
        <Logo></Logo>
        <Nav />
        <Main />
        <Footer />
    </div>