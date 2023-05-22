import clsx from "clsx";
import { Dropdown } from "react-bootstrap";
import DataTable from "react-data-table-component";

//import icons
import { useState } from "react";
import {
  Archive,
  Book,
  ChevronDown,
  ChevronUp,
  Download,
  Edit,
  ExternalLink,
  Grid,
  Inbox,
  List,
  MoreVertical,
  Plus,
  Printer,
  RefreshCw,
  Server,
  Settings,
  Slash,
  Star,
  Trash2,
  Upload,
  Users,
} from "react-feather";
import SimpleBar from "simplebar-react";

//state
import { columns } from "../../state/contact-columns";
import { data } from "../../state/contact-data";

//custom styles
const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
    },
  },
  cells: {
    style: {
      fontSize: "16px",
      color: "#6f6f6f",
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
    },
  },
};

export default function ContactList() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <section>
      {/* <!-- Main Content --> */}
      <div className="hk-pg-wrapper pb-0">
        {/* <!-- Page Body --> */}
        <div className="hk-pg-body py-0">
          <div
            className={clsx(
              toggleSidebar && "contactapp-sidebar-toggle",
              "contactapp-wrap"
            )}
          >
            {/* contact app sidebar ------------------------->  */}
            {/* -------------------------------------------> */}
            <nav className="contactapp-sidebar">
              <SimpleBar style={{ height: "84vh" }}>
                <div className="menu-content-wrap">
                  <button
                    type="button"
                    className="btn btn-primary btn-rounded btn-block mb-4"
                    data-bs-toggle="modal"
                    data-bs-target="#add_new_contact"
                  >
                    Add new contact
                  </button>
                  <div className="menu-group">
                    <ul className="nav nav-light navbar-nav flex-column">
                      <li className="nav-item active">
                        <a className="nav-link" href="">
                          <span className="nav-icon-wrap">
                            <span className="feather-icon">
                              <Inbox />
                            </span>
                          </span>
                          <span className="nav-link-text">All Contacts</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          <span className="nav-icon-wrap">
                            <span className="feather-icon">
                              <Star />
                            </span>
                          </span>
                          <span className="nav-link-text">Important</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          <span className="nav-icon-wrap">
                            <span className="feather-icon">
                              <Archive />
                            </span>
                          </span>
                          <span className="nav-link-text">Archive</span>
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
                  <div className="separator separator-light"></div>
                  <div className="menu-group">
                    <ul className="nav nav-light navbar-nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          <span className="nav-icon-wrap">
                            <span className="feather-icon">
                              <Upload />
                            </span>
                          </span>
                          <span className="nav-link-text">Export</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          <span className="nav-icon-wrap">
                            <span className="feather-icon">
                              <Download />
                            </span>
                          </span>
                          <span className="nav-link-text">Import</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          <span className="nav-icon-wrap">
                            <span className="feather-icon">
                              <Printer />
                            </span>
                          </span>
                          <span className="nav-link-text">Print</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="separator separator-light"></div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="title-sm text-primary mb-0">Labels</div>
                    <a
                      href="#"
                      className="btn btn-xs btn-icon btn-rounded btn-light"
                      data-bs-toggle="modal"
                      data-bs-target="#add_new_label"
                    >
                      <span
                        className="icon"
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-bs-original-title="Add Label"
                      >
                        <span className="feather-icon">
                          <Plus />
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="menu-group">
                    <ul className="nav nav-light navbar-nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link link-badge-right" href="#">
                          <span className="nav-link-text">Design</span>
                          <span className="badge badge-pill badge-sm badge-soft-primary ms-auto">
                            136
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link link-badge-right" href="#">
                          <span className="nav-link-text">Development</span>
                          <span className="badge badge-pill badge-sm badge-soft-primary ms-auto">
                            2
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link link-badge-right" href="#">
                          <span className="nav-link-text">Inventory</span>
                          <span className="badge badge-pill badge-sm badge-soft-primary ms-auto">
                            86
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link link-badge-right" href="#">
                          <span className="nav-link-text">Human Resource</span>
                          <span className="badge badge-pill badge-sm badge-soft-primary ms-auto">
                            34
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="separator separator-light"></div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="title-sm text-primary mb-0">Tags</div>
                    <a
                      href="#"
                      className="btn btn-xs btn-icon btn-rounded btn-light"
                      data-bs-toggle="modal"
                      data-bs-target="#add_new_tag"
                    >
                      <span
                        className="icon"
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-bs-original-title="Add Tag"
                      >
                        <span className="feather-icon">
                          <i data-feather="plus"></i>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="tag-cloud">
                    <a href="#" className="badge badge-outline badge-light">
                      Collaboration
                    </a>
                    <a href="#" className="badge badge-outline badge-light">
                      React Developer
                    </a>
                    <a href="#" className="badge badge-outline badge-light">
                      Angular Developer
                    </a>
                    <a href="#" className="badge badge-outline badge-light">
                      promotion
                    </a>
                    <a href="#" className="badge badge-outline badge-light">
                      Advertisement
                    </a>
                  </div>
                </div>
              </SimpleBar>
              {/* <!--Sidebar Fixnav start--> */}
              <div className="contactapp-fixednav">
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
              {/* <!--/ Sidebar Fixnav end--> */}
            </nav>
            <div className="contactapp-content">
              <div className="contactapp-detail-wrap">
                <header className="contact-header">
                  <div className="d-flex align-items-center">
                    {/* Contact dropdown -----------------------> */}
                    {/* --------------------------------------->  */}
                    <Dropdown>
                      <Dropdown.Toggle className="contactapp-title" href="#">
                        <h1>Contacts</h1>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="dropdown-item" href="#">
                          <span className="feather-icon dropdown-icon">
                            <Users />
                          </span>
                          <span>All Contacts</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          <span className="feather-icon dropdown-icon">
                            <Star />
                          </span>
                          <span>Important</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          <span className="feather-icon dropdown-icon">
                            <Archive />
                          </span>
                          <span>Archive</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          <span className="feather-icon dropdown-icon">
                            <Edit />
                          </span>
                          <span>Pending</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          <span className="feather-icon dropdown-icon">
                            <Trash2 />
                          </span>
                          <span>Deleted</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* Create New dropdown --------------------->  */}
                    {/* ------------------------------------------> */}
                    <Dropdown className="ms-3">
                      <Dropdown.Toggle
                        className="btn btn-sm btn-outline-secondary flex-shrink-0 dropdown-toggle d-lg-inline-block d-none"
                        data-bs-toggle="dropdown"
                      >
                        Create New
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="dropdown-item" href="#">
                          Add New Contact
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Add New Department
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Add Category
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Add New Tag
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  {/* List view dropdown ----------------->  */}
                  {/* ------------------------------------> */}
                  <Dropdown className="contact-options-wrap">
                    <Dropdown.Toggle
                      className="btn btn-icon btn-flush-dark flush-soft-hover dropdown-toggle no-caret active"
                      href="#"
                    >
                      <span className="icon">
                        <span className="feather-icon">
                          <List />
                        </span>
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                      <Dropdown.Item
                        className="dropdown-item active"
                        href="contact.html"
                      >
                        <span className="feather-icon dropdown-icon">
                          <List />
                        </span>
                        <span>List View</span>
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        href="contact-cards.html"
                      >
                        <span className="feather-icon dropdown-icon">
                          <Grid />
                        </span>
                        <span>Grid View</span>
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        <span className="feather-icon dropdown-icon">
                          <Server />
                        </span>
                        <span>Compact View</span>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                    <a
                      className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret d-sm-inline-block d-none"
                      href="#"
                      data-bs-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-bs-original-title="Refresh"
                    >
                      <span className="icon">
                        <span className="feather-icon">
                          <RefreshCw />
                        </span>
                      </span>
                    </a>
                    <div className="v-separator d-lg-block d-none"></div>
                    <a
                      className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret  d-lg-inline-block d-none  ms-sm-0"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      <span
                        className="icon"
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-bs-original-title="Manage Contact"
                      >
                        <span className="feather-icon">
                          <Settings />
                        </span>
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        Manage Contact
                      </a>
                      <a className="dropdown-item" href="#">
                        Import
                      </a>
                      <a className="dropdown-item" href="#">
                        Export
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Send Messages
                      </a>
                      <a className="dropdown-item" href="#">
                        Delegate Access
                      </a>
                    </div>
                    <a
                      className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret d-lg-inline-block d-none"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      <span
                        className="icon"
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-bs-original-title="More"
                      >
                        <span className="feather-icon">
                          <MoreVertical />
                        </span>
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="profile.html">
                        <span className="feather-icon dropdown-icon">
                          <Star />
                        </span>
                        <span>Stared Contacts</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="feather-icon dropdown-icon">
                          <Archive />
                        </span>
                        <span>Archive Contacts</span>
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="email.html">
                        <span className="feather-icon dropdown-icon">
                          <Slash />
                        </span>
                        <span>Block Content</span>
                      </a>
                      <a className="dropdown-item" href="email.html">
                        <span className="feather-icon dropdown-icon">
                          <ExternalLink />
                        </span>
                        <span>Feedback</span>
                      </a>
                    </div>
                    <a
                      className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none"
                      href="#"
                      data-bs-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-bs-original-title="Collapse"
                    >
                      <span className="icon">
                        <span className="feather-icon">
                          <ChevronUp />
                        </span>
                        <span className="feather-icon d-none">
                          <ChevronDown />
                        </span>
                      </span>
                    </a>
                  </Dropdown>
                  <div
                    className={clsx(
                      toggleSidebar && "active",
                      "hk-sidebar-togglable"
                    )}
                    onClick={() => setToggleSidebar(!toggleSidebar)}
                  ></div>
                </header>

                {/* contact body ------------------------------>  */}
                {/* ------------------------------------------->  */}
                <div className="contact-body">
                  <SimpleBar
                    style={{ height: "100%" }}
                    className="nicescroll-bar"
                  >
                    <div className="collapse" id="collapseQuick">
                      <div className="quick-access-form-wrap">
                        <form className="quick-access-form border">
                          <div className="row gx-3">
                            <div className="col-xxl-10">
                              <div className="position-relative">
                                <div className="dropify-square">
                                  <input type="file" className="dropify-1" />
                                </div>
                                <div className="col-md-12">
                                  <div className="row gx-3">
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <input
                                          className="form-control"
                                          placeholder="First name*"
                                          value=""
                                          type="text"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          className="form-control"
                                          placeholder="Last name*"
                                          value=""
                                          type="text"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <input
                                          className="form-control"
                                          placeholder="Email Id*"
                                          value=""
                                          type="text"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <input
                                          className="form-control"
                                          placeholder="Phone"
                                          value=""
                                          type="text"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <input
                                          className="form-control"
                                          placeholder="Department"
                                          value=""
                                          type="text"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <select
                                          id="input_tags"
                                          className="form-control"
                                          multiple={true}
                                        >
                                          <option selected={true}>
                                            Collaborator
                                          </option>
                                          <option>Designer</option>
                                          <option selected={true}>
                                            Developer
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-2">
                              <div className="form-group">
                                <button
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseExample"
                                  aria-expanded="false"
                                  className="btn btn-block btn-primary "
                                >
                                  Create New
                                </button>
                              </div>
                              <div className="form-group">
                                <button
                                  data-bs-toggle="collapse"
                                  disabled
                                  data-bs-target="#collapseExample"
                                  aria-expanded="false"
                                  className="btn btn-block btn-secondary"
                                >
                                  Discard
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="contact-list-view">
                      {/* Contact toolbar left -------------------->  */}
                      {/* -------------------------------------->  */}
                      <div className="d-flex gap-3 mb-4 mt-2 align-items-center">
                        <div className="d-xxl-flex d-none align-items-center">
                          <select className="form-select form-select-sm w-120p">
                            <option selected>Bulk actions</option>
                            <option value="1">Edit</option>
                            <option value="2">Move to trash</option>
                          </select>
                          <button className="btn btn-sm btn-light ms-2">
                            Apply
                          </button>
                        </div>
                        <div className="d-xxl-flex d-none align-items-center form-group mb-0">
                          <label className="flex-shrink-0 mb-0 me-2">
                            Sort by:
                          </label>
                          <select className="form-select form-select-sm w-130p">
                            <option selected>Date Created</option>
                            <option value="1">Date Edited</option>
                            <option value="2">Frequent Contacts</option>
                            <option value="3">Recently Added</option>
                          </select>
                        </div>
                        <select className="d-flex align-items-center w-130p form-select form-select-sm">
                          <option selected>Export to CSV</option>
                          <option value="2">Export to PDF</option>
                          <option value="3">Send Message</option>
                          <option value="4">Delegate Access</option>
                        </select>
                      </div>

                      {/* Data table ----------------------------------->  */}
                      {/* ----------------------------------------------> */}
                      <DataTable
                        className="custom-checkbox"
                        columns={columns}
                        data={data}
                        pagination
                        highlightOnHover
                        selectableRows
                        customStyles={customStyles}
                      />
                    </div>
                  </SimpleBar>
                </div>
              </div>
              {/* <!-- Edit Info --> */}
              <div
                id="add_new_contact"
                className="modal fade add-new-contact"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered modal-lg"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-body">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                      <h5 className="mb-5">Create New Conatct</h5>
                      <form>
                        <div className="row gx-3">
                          <div className="col-sm-2 form-group">
                            <div className="dropify-square">
                              <input type="file" className="dropify-1" />
                            </div>
                          </div>
                          <div className="col-sm-10 form-group">
                            <textarea
                              className="form-control mnh-100p"
                              rows={4}
                              placeholder="Add Biography"
                            ></textarea>
                          </div>
                        </div>
                        <div className="title title-xs title-wth-divider text-primary text-uppercase my-4">
                          <span>Basic Info</span>
                        </div>
                        <div className="row gx-3">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="form-label">First Name</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="form-label">Middle Name</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="form-label">Last Name</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="row gx-3">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label className="form-label">Email ID</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label className="form-label">Phone</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="row gx-3">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="form-label">City</label>
                              <select className="form-select">
                                <option selected={true}>--</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="form-label">State</label>
                              <select className="form-select">
                                <option selected={true}>--</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="form-label">Country</label>
                              <select className="form-select">
                                <option selected={true}>--</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="title title-xs title-wth-divider text-primary text-uppercase my-4">
                          <span>Company Info</span>
                        </div>
                        <div className="row gx-3">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label className="form-label">Company Name</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label className="form-label">Designation</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label className="form-label">Website</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label className="form-label">Work Phone</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="title title-xs title-wth-divider text-primary text-uppercase my-4">
                          <span>Additional Info</span>
                        </div>
                        <div className="row gx-3">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label className="form-label">Tags</label>
                              <select
                                id="input_tags_2"
                                className="form-control"
                                multiple={true}
                              ></select>
                              <small className="form-text text-muted">
                                You can add upto 4 tags per contact
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="row gx-3">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Facebook"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Twitter"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="LinkedIn"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Gmail"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer align-items-center">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Discard
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Create Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Edit Info --> */}

              {/* <!-- Add Label --> */}
              <div
                id="add_new_label"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered modal-sm"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-body">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                      <h6 className="text-uppercase fw-bold mb-3">Add Label</h6>
                      <form>
                        <div className="row gx-3">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Label Name"
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary float-end"
                          data-bs-dismiss="modal"
                        >
                          Add
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Add Label --> */}

              {/* <!-- Add Tag --> */}
              <div
                id="add_new_tag"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered modal-sm"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-body">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                      <h6 className="text-uppercase fw-bold mb-3">Add Tag</h6>
                      <form>
                        <div className="row gx-3">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <select
                                id="input_tags_3"
                                className="form-control"
                                multiple={true}
                              >
                                <option selected={true}>Collaborator</option>
                                <option selected={true}>Designer</option>
                                <option selected={true}>React Developer</option>
                                <option selected={true}>Promotion</option>
                                <option selected={true}>Advertisement</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary float-end"
                          data-bs-dismiss="modal"
                        >
                          Add
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Add Tag --> */}
            </div>
          </div>
        </div>
        {/* <!-- /Page Body --> */}
      </div>
      {/* <!-- /Main Content --> */}
    </section>
  );
}
