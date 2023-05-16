import { useState } from "react";
import TopNavbar from "./components/TopNavbar";
import VerticalNavbar from "./components/VerticalNavbar";
import "./scss/style.scss";

function App() {
  const [navLayout, setNavLayout] = useState("default");

  return (
    // <!-- Wrapper -->
    <div
      className="hk-wrapper"
      data-layout="vertical"
      data-layout-style={navLayout}
      data-menu="light"
      data-footer="simple"
      data-hover="active"
    >
      {/* <!-- Top Navbar --> */}
      <TopNavbar />
      {/* <!-- /Top Navbar --> */}

      {/* <!-- Vertical Nav --> */}
      <VerticalNavbar navLayout={navLayout} setNavLayout={setNavLayout} />
      {/* <!-- /Vertical Nav --> */}
    </div>
  );
}

export default App;
