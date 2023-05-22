import { useState } from "react";
import Layout from "./layout/Layout";
import { Outlet } from "react-router-dom";

import "./scss/style.scss";

function App() {
  const [navLayout, setNavLayout] = useState("default");

  return (
    <Layout navLayout={navLayout} setNavLayout={setNavLayout}>
      {/* Main Content ----->  */}
      <Outlet />
    </Layout>
  );
}

export default App;
