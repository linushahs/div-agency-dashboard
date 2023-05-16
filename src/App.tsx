import { useState } from "react";
import Layout from "./layout/Layout";
import "./scss/style.scss";

function App() {
  const [navLayout, setNavLayout] = useState("default");

  return (
    <Layout navLayout={navLayout} setNavLayout={setNavLayout}>
      {/* Dashboard ----->  */}
      <div>Hello</div>
    </Layout>
  );
}

export default App;
