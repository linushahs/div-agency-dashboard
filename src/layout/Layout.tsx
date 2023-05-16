import TopNavbar from "./TopNavbar";
import VerticalNavbar from "./VerticalNavbar";

type LayoutProps = {
  children: React.ReactNode;
  navLayout: string;
  setNavLayout: (type: string) => void;
};

export default function Layout({
  children,
  navLayout,
  setNavLayout,
}: LayoutProps) {
  return (
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
      <VerticalNavbar setNavLayout={setNavLayout} navLayout={navLayout} />
      {/* <!-- /Vertical Nav --> */}

      {/* <!-- Main Content --> */}
      {children}
      {/* <!-- /Main Content --> */}
    </div>
  );
}
