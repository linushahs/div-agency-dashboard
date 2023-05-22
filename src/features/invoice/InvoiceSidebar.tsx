import React from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import SimpleBar from "simplebar-react";

//icons
import {
  Archive,
  Book,
  Download,
  Edit,
  Layers,
  Save,
  Settings,
  Star,
  Trash2,
  Upload,
  Users,
} from "react-feather";

export default function InvoiceSidebar() {
  return (
    <nav className="invoiceapp-sidebar">
      <SimpleBar className="nicescroll-bar" style={{ height: "100%" }}>
        <div className="menu-content-wrap">
          <Dropdown>
            <Dropdown.Toggle className="btn btn-primary btn-rounded btn-block mb-4 dropdown-toggle">
              Create
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item className="dropdown-item" href="/create-invoice">
                Create Invoice
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-item" href="#">
                Create Estimate
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="menu-group">
            <ul className="nav nav-light navbar-nav flex-column">
              <li className="nav-item active">
                <a className="nav-link" href="">
                  <span className="nav-icon-wrap">
                    <span className="feather-icon">
                      <Users />
                    </span>
                  </span>
                  <span className="nav-link-text">All Invoices</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <span className="nav-icon-wrap">
                    <span className="feather-icon">
                      <Star />
                    </span>
                  </span>
                  <span className="nav-link-text">Sent</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <span className="nav-icon-wrap">
                    <span className="feather-icon">
                      <Archive />
                    </span>
                  </span>
                  <span className="nav-link-text">Archived</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <span className="nav-icon-wrap">
                    <span className="feather-icon">
                      <Edit />
                    </span>
                  </span>
                  <span className="nav-link-text">Pending</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <span className="nav-icon-wrap">
                    <span className="feather-icon">
                      <Trash2 />
                    </span>
                  </span>
                  <span className="nav-link-text">Deleted</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="menu-gap"></div>
          <div className="nav-header">
            <span>Manage</span>
          </div>
          <div className="menu-group">
            <ul className="nav nav-light navbar-nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="">
                  <span className="nav-icon-wrap">
                    <span className="feather-icon">
                      <Upload />
                    </span>
                  </span>
                  <span className="nav-link-text">Manage Invoices</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <span className="nav-icon-wrap">
                    <span className="feather-icon">
                      <Download />
                    </span>
                  </span>
                  <span className="nav-link-text">Recurring Invoices</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <span className="nav-icon-wrap">
                    <span className="feather-icon">
                      <Layers />
                    </span>
                  </span>
                  <span className="nav-link-text">Manage Estimate</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <span className="nav-icon-wrap">
                    <span className="feather-icon">
                      <Book />
                    </span>
                  </span>
                  <span className="nav-link-text">Manage Contacts</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <span className="nav-icon-wrap">
                    <span className="feather-icon">
                      <Save />
                    </span>
                  </span>
                  <span className="nav-link-text">Saved Templates</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="menu-gap"></div>
          <div className="nav-header">
            <span>Info</span>
          </div>
          <div className="menu-group">
            <ul className="nav nav-light navbar-nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="">
                  <span className="nav-icon-wrap">
                    <span className="feather-icon">
                      <Users />
                    </span>
                  </span>
                  <span className="nav-link-text">Business Info</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <span className="nav-icon-wrap">
                    <span className="feather-icon">
                      <Star />
                    </span>
                  </span>
                  <span className="nav-link-text">Tax Info</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </SimpleBar>
      {/* <!--Sidebar Fixnav--> */}
      <div className="invoiceapp-fixednav">
        <div className="hk-toolbar">
          <ul className="nav nav-light">
            <li className="nav-item nav-link">
              <a
                className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="Settings"
                href="#"
              >
                <span className="icon">
                  <span className="feather-icon">
                    <Settings />
                  </span>
                </span>
              </a>
            </li>
            <li className="nav-item nav-link">
              <a
                href="#"
                className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="Archive"
              >
                <span className="icon">
                  <span className="feather-icon">
                    <Archive />
                  </span>
                </span>
              </a>
            </li>
            <li className="nav-item nav-link">
              <a
                href="#"
                className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="Help"
              >
                <span className="icon">
                  <span className="feather-icon">
                    <Book />
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!--/ Sidebar Fixnav--> */}
    </nav>
  );
}
