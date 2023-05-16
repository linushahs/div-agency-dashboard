import Contact from "./components/ContactList";
import TopNavbar from "./components/TopNavbar";
import VerticalNavbar from "./components/VerticalNavbar";
import "./scss/style.scss";

function App() {
  return (
    // <!-- Wrapper -->
    <div
      className="hk-wrapper"
      data-layout="vertical"
      data-layout-style="default"
      data-menu="light"
      data-footer="simple"
    >
      {/* <!-- Top Navbar --> */}
      <TopNavbar />
      {/* <!-- /Top Navbar --> */}

      {/* <!-- Vertical Nav --> */}
      <VerticalNavbar />
      {/* <!-- /Vertical Nav --> */}
    </div>
  );
}

export default App;
