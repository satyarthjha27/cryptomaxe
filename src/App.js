import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import { Typography,Layout, Space } from 'antd';

import {Navbar,Cryptocurrencies,News,CryptoDetails,Homepage } from './Components';
import './App.css';

const App = () => {
  return <div className='app'>
  <div className='navbar'>
    <Navbar />
  </div>
  <div className='main'>
  <Layout>
    <div className='routes'>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/cryptocurrencies">
          <Cryptocurrencies />
        </Route>
        <Route exact path="/crypto/:coinId">
          <CryptoDetails />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
      </Switch>
    </div>
  </Layout>
  <div className='footer'>
    <Typography.Title level={5} style={{color:'white', textAlign:'center'}} >
    Cryptoverse <br />
    All Right Reserved
  </Typography.Title>
  <Space >
    <Link to='/' > Home</Link>  
    <Link to='/news' > News</Link>  
    </Space>
  </div>
  </div>
  </div>;
};

export default App;
