import React from 'react';
import Layout from './components/Layout/Layout';
import WelcomeContainer from './containers/Welcome/WelcomeContainer'
import ConditionsContainer from './containers/Conditions/ConditionsContainer'
import { Route } from 'react-router-dom';
import CatalogContainer from "./containers/Catalog/CatalogContainer";
import LoginContainer from "./containers/Admin/LoginContainer/LoginContainer";
import InstrumentsContainer from "./containers/Admin/InstrumentsContainer/InstrumentsContainer";
import DashboardContainer from "./containers/Admin/DashboardContainer/DashboardContainer";

function App() {
  return (
    <div >
        <Layout>
            <Route path="/" exact component={WelcomeContainer}/>
            <Route path="/conditions" component={ConditionsContainer}/>
            <Route path="/equipment" component={CatalogContainer}/>
            <Route path="/admin" component={LoginContainer}/>
            <Route path="/dashboard" component={DashboardContainer}/>
            <Route path="/instruments" component={InstrumentsContainer}/>
        </Layout>
    </div>
  );
}

export default App;
