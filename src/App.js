import React from 'react';
import Layout from './components/Layout/Layout';
import WelcomeContainer from './containers/Welcome/WelcomeContainer'
import ConditionsContainer from './containers/Conditions/ConditionsContainer'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CatalogContainer from "./containers/Catalog/CatalogContainer";

function App() {
  return (
    <div >
        <Layout>
            <BrowserRouter>
                <Route path="/" exact component={WelcomeContainer}/>
                <Route path="/conditions" component={ConditionsContainer}/>
                <Route path="/equipment" component={CatalogContainer}/>
            </BrowserRouter>
        </Layout>
    </div>
  );
}

export default App;
