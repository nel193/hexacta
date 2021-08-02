import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from '../components/Layout'
import BoardExtPb from './BoardExtPb'
import BoardExtRest from './BoardExtRest'
import BoardInt from './BoardInt'

const App = () =>{
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={BoardExtPb}/>
                    <Route exact path='/int' component={BoardInt}/>
                    <Route exact path='/rest' component={BoardExtRest}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App