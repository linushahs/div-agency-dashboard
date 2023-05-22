import clsx from "clsx";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import {
  Archive,
  ChevronDown,
  ChevronUp,
  Download,
  Edit,
  ExternalLink,
  Layers,
  MoreVertical,
  RefreshCw,
  Save,
  Settings,
  Slash,
  Star,
  Trash2,
  Upload,
  Users,
} from "react-feather";
import InvoiceSidebar from "./InvoiceSidebar";

export default function InvoiceList() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <section>
      {/* <!-- Main Content --> */}
      <div className="hk-pg-wrapper pb-0">
        <div className="hk-pg-body py-0">
          <div
            className={clsx(
              toggleSidebar && "invoiceapp-sidebar-toggle",
              "invoiceapp-wrap"
            )}
          >
            <InvoiceSidebar />
            <div className="invoiceapp-content">
              <div className="invoiceapp-detail-wrap">
                <header className="invoice-header">
                  <div className="d-flex align-items-center">
                    <Dropdown>
                      <Dropdown.Toggle className="invoiceapp-title ">
                        <h1>All invoices</h1>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="dropdown-item" href="#">
                          <span className="feather-icon dropdown-icon">
                            <Users />
                          </span>
                          <span>All Invoices</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          <span className="feather-icon dropdown-icon">
                            <Star />
                          </span>
                          <span>Sent</span>
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
                  </div>
                  <div className="invoice-options-wrap">
                    <a
                      className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret d-lg-inline-block d-none"
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      data-bs-original-title="Refresh"
                    >
                      <span className="btn-icon-wrap">
                        <span className="feather-icon">
                          <RefreshCw />
                        </span>
                      </span>
                    </a>
                    <div className="v-separator d-lg-inline-block d-none"></div>
                    <a
                      className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret ms-0  d-sm-inline-block d-none"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      <span className="btn-icon-wrap">
                        <span className="feather-icon">
                          <Settings />
                        </span>
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        <span className="feather-icon dropdown-icon">
                          <Upload />
                        </span>
                        <span>Manage Invoices</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="feather-icon dropdown-icon">
                          <Download />
                        </span>
                        <span>Recurring Invoices</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="feather-icon dropdown-icon">
                          <Layers />
                        </span>
                        <span>Manage Estimate</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="feather-icon dropdown-icon">
                          <Save />
                        </span>
                        <span>Saved Templates</span>
                      </a>
                    </div>
                    <a
                      className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      <span className="btn-icon-wrap">
                        <span className="feather-icon">
                          <MoreVertical />
                        </span>
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        <span className="feather-icon dropdown-icon">
                          <Settings />
                        </span>
                        <span>Settings</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="feather-icon dropdown-icon">
                          <Slash />
                        </span>
                        <span>Block Content</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="feather-icon dropdown-icon">
                          <ExternalLink />
                        </span>
                        <span>Feedback</span>
                      </a>
                    </div>
                    <a
                      className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-lg-inline-block d-none"
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      data-bs-original-title="Collapse"
                    >
                      <span className="btn-icon-wrap">
                        <span className="feather-icon">
                          <ChevronUp />
                        </span>
                        <span className="feather-icon d-none">
                          <ChevronDown />
                        </span>
                      </span>
                    </a>
                  </div>
                  <div
                    className={clsx(
                      toggleSidebar && "active",
                      "hk-sidebar-togglable"
                    )}
                    onClick={() => setToggleSidebar(!toggleSidebar)}
                  ></div>
                </header>

                {/* Invoice body --------------------------------->  */}
                {/* ---------------------------------------------->  */}
                <div className="invoice-body">
                  <div data-simplebar className="nicescroll-bar">
                    <div className="invoice-list-view">
                      <table id="datable_1" className="table nowrap w-100 mb-5">
                        <thead>
                          <tr>
                            <th>
                              <span className="form-check mb-0">
                                <input
                                  type="checkbox"
                                  className="form-check-input check-select-all"
                                  id="customCheck1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customCheck1"
                                ></label>
                              </span>
                            </th>
                            <th>Invoice #</th>
                            <th>Date</th>
                            <th>Reciplent</th>
                            <th>Status</th>
                            <th>Activity</th>
                            <th>Amount</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td>
                              <a
                                href="#"
                                className="table-link-text link-high-em"
                              >
                                11234
                              </a>
                            </td>
                            <td>13 Jan, 2020</td>
                            <td>
                              <div className="text-dark">Patrik Schelton</div>
                              <div className="fs-7">morgan@jampack.com</div>
                            </td>
                            <td>
                              <span className="badge badge-light">draft</span>
                            </td>
                            <td>-</td>
                            <td>$ 2,300.00 USD</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="btn-group selectable-split-dropdown">
                                  <button
                                    type="button"
                                    className="btn btn-outline-light btn-dyn-text w-100p"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-light dropdown-toggle dropdown-toggle-split me-3"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="sr-only">
                                      Toggle Dropdown
                                    </span>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                      Remind
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Sent
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Active
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Archive"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="archive"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Edit"
                                    href="contact-details.html"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="edit"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Delete"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="trash-2"></i>
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <a
                                href="#"
                                className="table-link-text link-high-em"
                              >
                                11235
                              </a>
                            </td>
                            <td>13 Jan, 2020</td>
                            <td>
                              <div className="text-dark">Huma Therman</div>
                              <div className="fs-7">huma@clariesup.au</div>
                            </td>
                            <td>
                              <span className="badge badge-danger">Unpaid</span>
                              <div className="fs-8 mt-1">Due 25 Apr 2020</div>
                            </td>
                            <td>Sent</td>
                            <td>$ 780.00 USD</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="btn-group selectable-split-dropdown">
                                  <button
                                    type="button"
                                    className="btn btn-outline-light btn-dyn-text w-100p"
                                  >
                                    Remind
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-light dropdown-toggle dropdown-toggle-split me-3"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="sr-only">
                                      Toggle Dropdown
                                    </span>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                      Remind
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Sent
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Active
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Archive"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="archive"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Edit"
                                    href="contact-details.html"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="edit"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Delete"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="trash-2"></i>
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <a
                                href="#"
                                className="table-link-text link-high-em"
                              >
                                11236
                              </a>
                            </td>
                            <td>13 Jan, 2020</td>
                            <td>
                              <div className="text-dark">Charlie Chaplin</div>
                              <div className="fs-7">
                                charlie@leernoca.monster
                              </div>
                            </td>
                            <td>
                              <span className="badge badge-primary">Paid</span>
                            </td>
                            <td>Done</td>
                            <td>$ 567.00 USD</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="btn-group selectable-split-dropdown">
                                  <button
                                    type="button"
                                    className="btn btn-outline-light btn-dyn-text w-100p"
                                  >
                                    Active
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-light dropdown-toggle dropdown-toggle-split me-3"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="sr-only">
                                      Toggle Dropdown
                                    </span>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                      Remind
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Sent
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Active
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Archive"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="archive"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Edit"
                                    href="contact-details.html"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="edit"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Delete"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="trash-2"></i>
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <a
                                href="#"
                                className="table-link-text link-high-em"
                              >
                                11237
                              </a>
                            </td>
                            <td>13 Jan, 2020</td>
                            <td>
                              <div className="text-dark">Winston Churchil</div>
                              <div className="fs-7">winston@worthniza.ga</div>
                            </td>
                            <td>
                              <span className="badge badge-danger">Unpaid</span>
                              <div className="fs-8 mt-1">Due 12 Sep 2020</div>
                            </td>
                            <td>-</td>
                            <td>$ 1,500.00 USD</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="btn-group selectable-split-dropdown">
                                  <button
                                    type="button"
                                    className="btn btn-outline-light btn-dyn-text w-100p"
                                  >
                                    Sent
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-light dropdown-toggle dropdown-toggle-split me-3"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="sr-only">
                                      Toggle Dropdown
                                    </span>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                      Remind
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Sent
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Active
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Archive"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="archive"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Edit"
                                    href="contact-details.html"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="edit"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Delete"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="trash-2"></i>
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <a
                                href="#"
                                className="table-link-text link-high-em"
                              >
                                11238
                              </a>
                            </td>
                            <td>13 Jan, 2020</td>
                            <td>
                              <div className="text-dark">Jaquiline Joker</div>
                              <div className="fs-7">jaquljoker@jampack.com</div>
                            </td>
                            <td>
                              <span className="badge badge-danger">Unpaid</span>
                              <div className="fs-8 mt-1">Due 18 Oct 2020</div>
                            </td>
                            <td>Sent</td>
                            <td>$ 900.00 USD</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="btn-group selectable-split-dropdown">
                                  <button
                                    type="button"
                                    className="btn btn-outline-light btn-dyn-text w-100p"
                                  >
                                    Remind
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-light dropdown-toggle dropdown-toggle-split me-3"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="sr-only">
                                      Toggle Dropdown
                                    </span>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                      Remind
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Sent
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Active
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Archive"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="archive"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Edit"
                                    href="contact-details.html"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="edit"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Delete"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="trash-2"></i>
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <a
                                href="#"
                                className="table-link-text link-high-em"
                              >
                                11239
                              </a>
                            </td>
                            <td>3 July, 2020</td>
                            <td>
                              <div className="text-dark">Tom Cruz</div>
                              <div className="fs-7">tomcz@jampack.com</div>
                            </td>
                            <td>
                              <span className="badge badge-primary">Paid</span>
                            </td>
                            <td>Done</td>
                            <td>$ 4,750.00 USD</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="btn-group selectable-split-dropdown">
                                  <button
                                    type="button"
                                    className="btn btn-outline-light btn-dyn-text w-100p"
                                  >
                                    Active
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-light dropdown-toggle dropdown-toggle-split me-3"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="sr-only">
                                      Toggle Dropdown
                                    </span>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                      Remind
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Sent
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Active
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Archive"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="archive"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Edit"
                                    href="contact-details.html"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="edit"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Delete"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="trash-2"></i>
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <a
                                href="#"
                                className="table-link-text link-high-em"
                              >
                                11240
                              </a>
                            </td>
                            <td>24 Jun, 2019</td>
                            <td>
                              <div className="text-dark">Danial Craig</div>
                              <div className="fs-7">danialc@jampack.com</div>
                            </td>
                            <td>
                              <span className="badge badge-primary">Paid</span>
                              <div className="fs-8 mt-1">Due 25 Apr 2020</div>
                            </td>
                            <td>Done</td>
                            <td>$ 2,300.00 USD</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="btn-group selectable-split-dropdown">
                                  <button
                                    type="button"
                                    className="btn btn-outline-light btn-dyn-text w-100p"
                                  >
                                    Active
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-light dropdown-toggle dropdown-toggle-split me-3"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="sr-only">
                                      Toggle Dropdown
                                    </span>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                      Remind
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Sent
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Active
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Archive"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="archive"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Edit"
                                    href="contact-details.html"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="edit"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Delete"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="trash-2"></i>
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <a
                                href="#"
                                className="table-link-text link-high-em"
                              >
                                11241
                              </a>
                            </td>
                            <td>24 Jun, 2019</td>
                            <td>
                              <div className="text-dark">Katharine Jones</div>
                              <div className="fs-7">joneskath@jampack.com</div>
                            </td>
                            <td>
                              <span className="badge badge-primary">Paid</span>
                            </td>
                            <td>Done</td>
                            <td>$ 7,650.00 USD</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="btn-group selectable-split-dropdown">
                                  <button
                                    type="button"
                                    className="btn btn-outline-light btn-dyn-text w-100p"
                                  >
                                    Active
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-light dropdown-toggle dropdown-toggle-split me-3"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="sr-only">
                                      Toggle Dropdown
                                    </span>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                      Remind
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Sent
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Active
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Archive"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="archive"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Edit"
                                    href="contact-details.html"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="edit"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Delete"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="trash-2"></i>
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <a
                                href="#"
                                className="table-link-text link-high-em"
                              >
                                11242
                              </a>
                            </td>
                            <td>24 Jun, 2019</td>
                            <td>
                              <div className="text-dark">Hence Work</div>
                              <div className="fs-7">contact@hencework.com</div>
                            </td>
                            <td>
                              <span className="badge badge-light">Draft</span>
                            </td>
                            <td>-</td>
                            <td>$ 4,500.00 USD</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="btn-group selectable-split-dropdown">
                                  <button
                                    type="button"
                                    className="btn btn-outline-light btn-dyn-text w-100p"
                                  >
                                    Sent
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-light dropdown-toggle dropdown-toggle-split me-3"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <span className="sr-only">
                                      Toggle Dropdown
                                    </span>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                      Remind
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Sent
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Active
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Archive"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="archive"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Edit"
                                    href="contact-details.html"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="edit"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a
                                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Delete"
                                    href="#"
                                  >
                                    <span className="btn-icon-wrap">
                                      <span className="feather-icon">
                                        <i data-feather="trash-2"></i>
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Page Body --> */}
      </div>
      {/* <!-- /Main Content --> */}
    </section>
  );
}
