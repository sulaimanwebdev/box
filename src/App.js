import { Route, Switch } from "react-router-dom";
import { useLocation } from "react-router";
import Layout from "./Components/Layout";
import { AllProducts, CartPage, Confirmation, CreateOrder, CreateProduct, CreateUser, EditOrder, EditProduct, EditUser, Error, ForgetPassword, Login, OrderDashboard, ProductDashboard, ProductDetails, RegisterPageOne, RegisterPageTwo, RegisterSuccess, ReviewOrder, SettingDashboard, ViewCustomerInfo, ViewOrder, ViewProduct, ViewUser } from "./pages";

function App() {
  const location = useLocation()
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/forgot-password" exact component={ForgetPassword} />
      <Route path="/registration-step-one" exact component={RegisterPageOne} />
      <Route path="/registration-step-two" exact component={RegisterPageTwo} />
      <Route path="/registration-success" exact component={RegisterSuccess} />
      <Route path="/all-products" exact component={AllProducts} />
      <Route path="/cart" exact component={CartPage} />
      <Route path="/confirmation" exact component={Confirmation} />
      <Route path="/product-details" exact component={ProductDetails} />
      {
        location.pathname === "/order-dashboard" ||
          location.pathname === "/create-order" ||
          location.pathname === "/review-order" ||
          location.pathname === "/edit-order" ||
          location.pathname === "/view-order" ||
          location.pathname === "/view-customer-info" ||
          location.pathname === "/create-user" ||
          location.pathname === "/edit-user" ||
          location.pathname === "/view-user" ||
          location.pathname === "/setting-dashboard" ||
          location.pathname === "/create-product" ||
          location.pathname === "/view-product" ||
          location.pathname === "/edit-product" ||
          location.pathname === "/product-dashboard" ?
          <Layout>
            <Route path="/create-order" exact component={CreateOrder} />
            <Route path="/order-dashboard" exact component={OrderDashboard} />
            <Route path="/review-order" exact component={ReviewOrder} />
            <Route path="/view-order" exact component={ViewOrder} />
            <Route path="/edit-order" exact component={EditOrder} />
            <Route path="/setting-dashboard" exact component={SettingDashboard} />
            <Route path="/view-customer-info" exact component={ViewCustomerInfo} />
            <Route path="/create-user" exact component={CreateUser} />
            <Route path="/edit-user" exact component={EditUser} />
            <Route path="/view-user" exact component={ViewUser} />
            <Route path="/product-dashboard" exact component={ProductDashboard} />
            <Route path="/create-product" exact component={CreateProduct} />
            <Route path="/view-product" exact component={ViewProduct} />
            <Route path="/edit-product" exact component={EditProduct} />
          </Layout> : null
      }
      <Route path="*" component={Error} />
    </Switch>
  );
}

export default App;