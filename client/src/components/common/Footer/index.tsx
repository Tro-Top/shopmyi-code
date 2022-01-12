import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "reactstrap";

export const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-content">
        <div className="container-fluid">
          <Row>
            <Col xxs="12" sm="6">
              <p className="mb-0 text-muted">Wbh 2022</p>
            </Col>
            <Col className="col-sm-6 d-none d-sm-block">
              <ul className="breadcrumb pt-0 pr-0 float-right">
                <li className="breadcrumb-item mb-0">
                  <NavLink className="btn-link" to="#">
                    SmyI
                  </NavLink>
                </li>
                <li className="breadcrumb-item mb-0">
                  <NavLink className="btn-link" to="#">
                    Wbh
                  </NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};
