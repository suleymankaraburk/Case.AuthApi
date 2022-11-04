import React, { Component, useState } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Login } from './components/login/Login';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

function App() {
    
    const [count, setCount] = useState(0);

    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
        </Layout>
    );
}
export default App;
//export default class App extends Component {
//  static displayName = App.name;

//  render () {
//    return (
//      <Layout>
//        <Route exact path='/' component={Home} />
//        <Route exact path='/login' component={Login} />
//        <Route path='/counter' component={Counter} />
//        <Route path='/fetch-data' component={FetchData} />
//      </Layout>
//    );
//  }
//}
