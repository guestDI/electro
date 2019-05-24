import React from 'react';
import Layout from './components/Layout/Layout';
import WelcomeContainer from './containers/Welcome/WelcomeContainer'
import ConditionsContainer from './containers/Conditions/ConditionsContainer'
import { Route, Switch } from 'react-router-dom';
import CatalogContainer from "./containers/Catalog/CatalogContainer";

function App() {
  return (
    <div >
        <Layout>
            <Route path="/" exact component={WelcomeContainer}/>
            <Route path="/conditions" component={ConditionsContainer}/>
            <Route path="/equipment" component={CatalogContainer}/>
        </Layout>
    </div>
  );
}

export default App;
