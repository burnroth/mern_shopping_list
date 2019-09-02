import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'reactstrap'
import { Helmet } from 'react-helmet'
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from './components/itemModal'

function App() {
  return (
    <Provider store={store}>
      <Helmet title="Marcus learning the MERN stack">

      </Helmet>
      <div className="App">
        <AppNavbar />
        <Container>
        <ItemModal />
        <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
