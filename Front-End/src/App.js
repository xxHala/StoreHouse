import { Provider, ProductProvider , CatProvider} from "./Context";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import AllUsers from "./components/AllUsers";
import CreateUser from "./components/CreateUser";
import CreateProduct from "./components/CreateProduct";
import { Actions } from "./Actions/UsersActions";
import { ProductActions } from "./Actions/ProductActions";
import { CategoryActions } from "./Actions/CategoryActions";

import Products from "./components/Products";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { FaRegAddressCard } from "react-icons/fa";

function App() {
  const userData = Actions();
  const productData = ProductActions();
  const catData = CategoryActions();
  return (
    <Provider value={userData}>
      <div className="App-wrapper">
        <Router>
          <div className="header">
            <div className="header-title">
              <a href="/home">StoreHouse</a>
            </div>
            <Navbar />
          </div>
          <div className="App">
            <div className="wrapper">
              <Switch>
                <ProductProvider value={productData}>
                  <Route path="/products">
                    <Link className='create-user' to ='/create-product'>
                     Click here to Create New product !
                    </Link>
                    <div className="product-wrapper">
                      <Products />
                    </div>
                  </Route>
                  <CatProvider value={catData}>
                  <Route path="/catagories">
                    <Link className='create-user' to ='/create-categories'>
                     Click here to Create New Category!
                    </Link>
                    <div className="product-wrapper">
                      <Products />
                    </div>
                  </Route>
                  <Route path="/create-product">
                    <CreateProduct />
                  </Route>
                  <Route path="/sign-up">
                    <SignUpForm />
                  </Route>
                  <Route path="/signin">
                    <SignInForm />
                  </Route>
                  <Route path="/users">
                    <Link className="create-user" to="/create-user">
                      Create New User Now !
                      <FaRegAddressCard />
                    </Link>
                    <div className="users-wrapper">
                      <AllUsers />
                    </div>
                  </Route>
                  <Route path="/create-user">
                    <CreateUser />
                  </Route>
                  </CatProvider>
                </ProductProvider>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
