import React, { FC } from "react";
import { Footer, Sidebar } from "..";
import Topnav from "../Topnav";

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
