import React  from 'react';
import Login from './Pages/Login'
import Products from './Pages/Products'
import NavbarHeader from './Component/NavbarHeader'
import ProductForm from './Component/ProductForm';
import './App.css'


function App() {
  const [view, setView] = React.useState(0);
  const [renderAs , setRenderAs] = React.useState("add");
  const [user, setUser] = React.useState(null)
  const [initialState , setInitialState] = React.useState({email : "" , password : "" , name : "" });
  return (
    <div >
      <NavbarHeader setView={setView} view={view} setRenderAs={setRenderAs} setInitialState={setInitialState} user={user} setUser={setUser} /> 
      {[<Login setUser={setUser} setView={setView} /> ,
      <ProductForm setView={setView} initialState={initialState} renderAs={renderAs} setRenderAs={setRenderAs} />,
      <Products setRenderAs={setRenderAs} setView={setView} setInitialState={setInitialState}  />][view]}
    </div>
  );
}

export default App;
