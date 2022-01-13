import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./assets/logo.svg";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Input,
  Spinner,
} from "reactstrap";
import { localeOptions } from "../../../lib/utils";
import { useSelector } from "react-redux";

const Topnav = () => {
  const { data, isFetching } = useSelector((state) => state.brand.brand);

  const profile = !isFetching && data && data.result[0].brand;

  return (
    <nav className="navbar fixed-top">
      <div className="d-flex align-items-center justify-content-around navbar-left">
        <NavLink to={"/"}>
          <img alt="Logo" src={"../white.svg"} />
          <span className="logo-mobile d-block d-xs-none" />
        </NavLink>
        <div className="search w-100">
          <Input
            name="searchKeyword"
            id="searchKeyword"
            placeholder={"Search"}
            onChange={(e) => e}
            onKeyPress={(e) => e}
          />
          <span className="search-icon" onClick={(e) => e}>
            <i className="simple-icon-magnifier" />
          </span>
        </div>
      </div>

      <div className="navbar-right">
        <div className="d-inline-block mr-5">
          <UncontrolledDropdown className="ml-2">
            <DropdownToggle
              caret
              color="light"
              size="sm"
              className="language-button"
            >
              <span className="name">{"English"}</span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" end>
              {localeOptions.map((l) => {
                return (
                  <DropdownItem onClick={(e) => e} key={l.id}>
                    {l.name}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <div className="user d-inline-block">
          <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle className="p-0" color="empty">
              {isFetching ? (
                <Spinner color="red">.</Spinner>
              ) : profile && profile.displayName ? (
                <>
                  <img alt="Profile" src={profile.pic} />
                  <span className="text-decoration-underline fs-4 fw-bold ml-2">
                    {profile.displayName.toString().toUpperCase()}
                  </span>
                </>
              ) : (
                <>
                  <span className="name mr-1">Hello Hamza</span>
                </>
              )}
              <span></span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" end>
              <DropdownItem>Account</DropdownItem>
              <DropdownItem>Products</DropdownItem>
              <DropdownItem>Orders</DropdownItem>
              <DropdownItem>Agents</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={(e) => e}>Sign out</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
};

export default Topnav;
