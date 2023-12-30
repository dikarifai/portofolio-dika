import { useState } from "react";
import HamburgerMenu from "../Component/HamburgerMenu";
import Sidebar from "../Component/Sidebar";

import { Outlet } from "react-router-dom";

const PortofolioLayout = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const HandlerSidebarActive = () => {
    setSidebarActive((prev) => !prev);
  };
  return (
    <div className="bg-[#E1DCE0] aspect-auto flex flex-row overflow-hidden">
      <HamburgerMenu onClick={HandlerSidebarActive} />
      <Sidebar
        sidebarActive={sidebarActive}
        onClickItem={() => setSidebarActive(false)}
      />
      <div className="w-full bg-[#D7D7D7] flex h-screen overflow-auto md-max:relative">
        <Outlet />
      </div>
    </div>
  );
};
export default PortofolioLayout;
