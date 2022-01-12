import React, { FC } from "react";
import { Footer, Sidebar, Topnav } from "..";

export const AppLayout: FC = ({ children }) => {
  return (
    <div id="app-container">
      <Topnav />
      <Sidebar />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
