import Sidebar from "../Component/Sidebar";

import { Outlet } from "react-router-dom";

const PortofolioLayout = () => {
  return (
    <div className="bg-[#E1DCE0] aspect-auto flex flex-row overflow-hidden">
      <Sidebar />
      <div className="w-full bg-[#D7D7D7] flex h-screen overflow-auto md-max:relative">
        <Outlet />
      </div>
    </div>
  );
};
export default PortofolioLayout;
