import React, { FC, useEffect, useState } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { sidebarItems } from "../../../lib/utils";

export const Sidebar: FC = ({ children }) => {
  const [selectedParentMenu, setParentMenu] = useState<any>("");
  const [viewingParentMenu, setViewingParentMenu] = useState("");

  useEffect(() => {
    const oldli = document.querySelector(".nav-item");
    oldli && oldli.classList.add("active");
  }, []);
  return (
    <div className="sidebar">
      <div className="main-menu">
        <div className="scroll">
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {sidebarItems &&
              sidebarItems.map((item) => {
                return (
                  <Nav key={item.id} vertical>
                    <NavItem key={item.id}>
                      <NavLink
                        to={item.to}
                        onClick={(e) => e}
                        data-flag={item.id}
                        key={item.id}
                      >
                        <i className={item.icon} />
                        {item.label}
                      </NavLink>
                    </NavItem>
                  </Nav>
                );
              })}
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};
