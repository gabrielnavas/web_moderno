import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import { BrowserRouter } from 'react-router-dom'
import Routers from './Routes'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'


export default props =>
    <BrowserRouter>
        <div className="app">
                <Routers />
                <Logo />
                <Nav />
                <Footer />
            </div>
    </BrowserRouter>
    