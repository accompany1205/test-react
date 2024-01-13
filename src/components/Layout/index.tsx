import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC<{}> = () => {

  return (
    <div>
      {/* header component */}
      <Outlet />
      {/* footer component */}
    </div>
  );
};

export default Layout;
