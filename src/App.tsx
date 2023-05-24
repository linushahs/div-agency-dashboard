import { useState } from "react";
import Layout from "./layout/Layout";
import { Outlet } from "react-router-dom";

import "./scss/style.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const [navLayout, setNavLayout] = useState("default");

  return (
    <Provider store={store}>
      <Layout navLayout={navLayout} setNavLayout={setNavLayout}>
        {/* Main Content ----->  */}
        <Outlet />
      </Layout>
    </Provider>
  );
}

export default App;
