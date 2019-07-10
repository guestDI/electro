import React from 'react';
import Layout from './components/Layout/Layout';
import WelcomeContainer from './containers/Welcome/WelcomeContainer';
import ConditionsContainer from './containers/Conditions/ConditionsContainer';
import { Route, Redirect, Switch } from 'react-router-dom';
import ProtectedRoute from "./hoc/ProtectedRoute/ProtectedRoute";
import CatalogContainer from "./containers/Catalog/CatalogContainer";
import LoginContainer from "./containers/Admin/LoginContainer/LoginContainer";
import InstrumentsContainer from "./containers/Admin/InstrumentsContainer/InstrumentsContainer";
import DashboardContainer from "./containers/Admin/DashboardContainer/DashboardContainer";
import NotFound from "./screens/Admin/NotFound/NotFound";

function App() {
  return (
    <div >
        <Layout>
            <Switch>
            <Route path="/" exact component={WelcomeContainer}/>
            <Route path="/conditions" component={ConditionsContainer}/>
            <Route path="/equipment" component={CatalogContainer}/>
            <Route path="/admin" component={LoginContainer}/>
            <Route path="/dashboard" component={DashboardContainer}/>
            <Route path="/instruments" component={InstrumentsContainer}/>
            <Route component={NotFound} />
            </Switch>
        </Layout>
    </div>
  );
}

export default App;
