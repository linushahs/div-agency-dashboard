import React from "react";

export default function CreateInvoice() {
  return (
    <div className="hk-pg-wrapper pb-0">
      <div className="hk-pg-body py-0">
        <div className="invoiceapp-wrap invoiceapp-setting-active">
          <nav className="invoiceapp-sidebar">
            <div data-simplebar className="nicescroll-bar">
              <div className="menu-content-wrap">
                <button
                  type="button"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  className="btn btn-primary btn-rounded btn-block mb-4 dropdown-toggle"
                >
                  Create
                </button>
                <div role="menu" className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Create Invoice
                  </a>
                  <a className="dropdown-item" href="#">
                    Create Estimate
                  </a>
                </div>
                <div className="menu-group">
                  <ul className="nav nav-light navbar-nav flex-column">
                    <li className="nav-item active">
                      <a className="nav-link" href="javascript:void(0);">
                        <span className="nav-icon-wrap">
                          <span className="feather-icon">
                            <i data-feather="users"></i>
                          </span>
                        </span>
                        <span className="nav-link-text">All Invoices</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0);">
                        <span className="nav-icon-wrap">
                          <span className="feather-icon">
                            <i data-feather="star"></i>
                          </span>
                        </span>
                        <span className="nav-link-text">Sent</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0);">
                        <span className="nav-icon-wrap">
                          <span className="feather-icon">
                            <i data-feather="archive"></i>
                          </span>
                        </span>
                        <span className="nav-link-text">Archived</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0);">
                        <span className="nav-icon-wrap">
                          <span className="feather-icon">
                            <i data-feather="edit"></i>
                          </span>
                        </span>
                        <span className="nav-link-text">Pending</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0);">
                        <span className="nav-icon-wrap">
                          <span className="feather-icon">
                            <i data-feather="trash-2"></i>
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
                      <a className="nav-link" href="javascript:void(0);">
                        <span className="nav-icon-wrap">
                          <span className="feather-icon">
                            <i data-feather="upload"></i>
                          </span>
                        </span>
                        <span className="nav-link-text">Manage Invoices</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0);">
                        <span className="nav-icon-wrap">
                          <span className="feather-icon">
                            <i data-feather="download"></i>
                          </span>
                        </span>
                        <span className="nav-link-text">
                          Recurring Invoices
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0);">
                        <span className="nav-icon-wrap">
                          <span className="feather-icon">
                            <i data-feather="layers"></i>
                          </span>
                        </span>
                        <span className="nav-link-text">Manage Estimate</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0);">
                        <span className="nav-icon-wrap">
                          <span className="feather-icon">
                            <i data-feather="book"></i>
                          </span>
                        </span>
                        <span className="nav-link-text">Manage Contacts</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0);">
                        <span className="nav-icon-wrap">
                          <span className="feather-icon">
                            <i data-feather="save"></i>
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
                      <a className="nav-link" href="javascript:void(0);">
                        <span className="nav-icon-wrap">
                          <span className="feather-icon">
                            <i data-feather="users"></i>
                          </span>
                        </span>
                        <span className="nav-link-text">Business Info</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0);">
                        <span className="nav-icon-wrap">
                          <span className="feather-icon">
                            <i data-feather="star"></i>
                          </span>
                        </span>
                        <span className="nav-link-text">Tax Info</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                          <i data-feather="settings"></i>
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
                          <i data-feather="archive"></i>
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
                          <i data-feather="book"></i>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--/ Sidebar Fixnav--> */}
          </nav>
          <div className="invoiceapp-content">
            <div className="invoiceapp-detail-wrap">
              <header className="invoice-header">
                <div className="d-flex align-items-center">
                  <a
                    className="invoiceapp-title dropdown-toggle link-dark"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <h1>Standard Template</h1>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      Simplicity Template
                    </a>
                    <a className="dropdown-item" href="#">
                      Essential Template
                    </a>
                    <a className="dropdown-item" href="#">
                      Classic Template
                    </a>
                    <a className="dropdown-item" href="#">
                      Pro Forma Template
                    </a>
                    <a className="dropdown-item" href="#">
                      Trade Template
                    </a>
                    <a className="dropdown-item" href="#">
                      Interim Template
                    </a>
                    <a className="dropdown-item" href="#">
                      Primary Template
                    </a>
                    <a className="dropdown-item" href="#">
                      Matt Opel Template
                    </a>
                    <a className="dropdown-item" href="#">
                      Freelancer Template
                    </a>
                  </div>
                </div>
                <div className="invoice-options-wrap">
                  <a
                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover invoiceapp-setting-toggle active"
                    href="#"
                  >
                    <span className="icon">
                      <span className="feather-icon">
                        <i data-feather="sliders"></i>
                      </span>
                    </span>
                  </a>
                  <a
                    href="invoice-preview.html"
                    className="btn btn-outline-secondary flex-shrink-0 d-md-inline-block d-none"
                  >
                    Preview
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary ms-2 d-sm-inline-block d-none"
                  >
                    save
                  </a>
                  <a
                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-md-inline-block d-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Collapse"
                  >
                    <span className="icon">
                      <span className="feather-icon">
                        <i data-feather="chevron-up"></i>
                      </span>
                      <span className="feather-icon d-none">
                        <i data-feather="chevron-down"></i>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hk-sidebar-togglable"></div>
              </header>
              <div className="invoice-body">
                <div data-simplebar className="nicescroll-bar">
                  <div className="container">
                    <div className="create-invoice-wrap mt-xxl-5 p-md-5 p-3">
                      <div className="row">
                        <div className="col-lg-3 col-md-5 order-md-0 order-1">
                          <div className="upload-logo">
                            <input type="file" className="dropify-2" />
                          </div>
                        </div>
                        <div className="col-lg-4 offset-lg-5 offset-md-3 col-md-4 mb-md-0 mb-4">
                          <h2 className="d-flex align-items-center justify-content-md-end mb-0 inline-editable-wrap">
                            <a
                              className="btn btn-sm btn-icon btn-flush-light btn-rounded flush-soft-hover edit-tyn ms-md-5"
                              href="#"
                            >
                              <span className="icon">
                                <span className="feather-icon">
                                  <i data-feather="edit-2"></i>
                                </span>
                              </span>
                            </a>
                            <span className="editable">Invoice</span>
                          </h2>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-xxl-3">
                          <a
                            className="d-inline-block mb-3"
                            data-bs-toggle="collapse"
                            href="#address_collpase"
                            role="button"
                            aria-expanded="false"
                          >
                            - Your business information
                          </a>
                          <div className="collapse show" id="address_collpase">
                            <div className="address-wrap">
                              <h6>Hencework</h6>
                              <p>4747, Pearl Street</p>
                              <p>Rainy Day Drive, </p>
                              <p>Washington DC 42156</p>
                              <p>jampack_01@hencework.com</p>
                            </div>
                            <a
                              className="d-inline-flex align-items-center mt-2"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_info"
                              href="#"
                            >
                              <i className="ri-pencil-line me-1"></i> Edit Info
                            </a>
                          </div>
                        </div>
                        <div className="col-xxl-4 offset-xxl-5 mt-xxl-0 mt-6">
                          <form>
                            <div className="row gx-3">
                              <div className="col-lg-6 form-group">
                                <input
                                  className="form-control"
                                  value="Invoice No*"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-6 form-group">
                                <input
                                  className="form-control"
                                  value="0001"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="row gx-3">
                              <div className="col-lg-6 form-group">
                                <input
                                  className="form-control"
                                  value="Invoice Date*"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-6 form-group">
                                <input
                                  className="form-control"
                                  name="single-date-pick"
                                  value="24/2/2020"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="row gx-3">
                              <div className="col-lg-6 form-group">
                                <input
                                  className="form-control"
                                  value="Due date*"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-6 form-group">
                                <select className="form-select">
                                  <option selected>Due on Reciept</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                            </div>
                            <div className="row gx-3">
                              <div className="col-lg-6 form-group">
                                <input
                                  className="form-control"
                                  value="Customer No"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-6 form-group">
                                <input
                                  className="form-control"
                                  value="32321"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="repeater">
                              <div data-repeater-list="category-group">
                                <div
                                  className="row gx-3"
                                  data-repeater-item
                                  style={{ display: "none" }}
                                >
                                  <div className="col-lg-6 form-group">
                                    <input
                                      className="form-control"
                                      placeholder="Label"
                                      type="text"
                                    />
                                  </div>
                                  <div className="col-lg-6 form-group">
                                    <input
                                      className="form-control"
                                      placeholder="Value"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                              <a
                                data-repeater-create
                                className="d-inline-flex align-items-center"
                                href="#"
                              >
                                <i className="ri-add-box-line me-1"></i> Add
                                more fields
                              </a>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="separator separator-light"></div>
                      <div className="row">
                        <div className="col-xxl-3 mb-xxl-0 mb-4">
                          <h6>Billed To</h6>
                          <form>
                            <div className="form-group">
                              <select className="form-select">
                                <option selected>Supernova consultant</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <a
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#billed_info"
                              href="#"
                            >
                              <i className="ri-add-box-line me-1"></i> Add new
                              client
                            </a>
                          </form>
                          <div className="Billto-wrap mt-4">
                            <h6>Supernova consultant</h6>
                            <p>Sycamore Street</p>
                            <p>San Antonio Valley,</p>
                            <p>CA 34668</p>
                            <p>thompson_peter@super.co</p>
                          </div>
                          <a
                            className="d-inline-flex align-items-center mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#billed_info"
                            href="#"
                          >
                            <i className="ri-pencil-line me-1"></i> Edit Info
                          </a>
                        </div>
                        <div className="col-xxl-4 offset-xxl-5">
                          <h6>Ship To</h6>
                          <div className="repeater">
                            <div className="collapse" id="shipto_collpase">
                              <div className="row gx-3">
                                <div className="col-sm-12 form-group">
                                  <input
                                    className="form-control"
                                    placeholder="Client business name"
                                    type="text"
                                  />
                                </div>
                                <div className="col-sm-12 form-group">
                                  <input
                                    className="form-control"
                                    placeholder="Address"
                                    type="text"
                                  />
                                </div>
                                <div className="col-lg-6 form-group">
                                  <input
                                    className="form-control"
                                    placeholder="City"
                                    type="text"
                                  />
                                </div>
                                <div className="col-lg-6 form-group">
                                  <input
                                    className="form-control"
                                    placeholder="Postal Code"
                                    type="text"
                                  />
                                </div>
                                <div className="col-sm-12 form-group">
                                  <input
                                    className="form-control"
                                    placeholder="State"
                                    type="text"
                                  />
                                </div>
                                <div className="col-sm-12 form-group">
                                  <input
                                    className="form-control"
                                    placeholder="Country"
                                    type="text"
                                  />
                                </div>
                                <div className="col-sm-12 form-group">
                                  <input
                                    className="form-control"
                                    placeholder="GSTIN Enter GSTIN here(optional)"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                            <a
                              data-bs-toggle="collapse"
                              href="#shipto_collpase"
                              className="d-inline-flex align-items-center"
                            >
                              <i className="ri-add-box-line me-1"></i> Add
                              shipping address
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-sm">
                          <form className="form-inline p-3 bg-grey-light-5 rounded">
                            <div className="row gx-3 align-items-center">
                              <div className="col-xl-auto mb-xl-0 mb-2">
                                <label className="form-label mb-xl-0">
                                  Filters
                                </label>
                              </div>
                              <div className="col-xl-auto mb-xl-0 mb-2">
                                <select className="form-select">
                                  <option selected>Number format</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="col-xl-auto mb-xl-0 mb-2">
                                <select className="form-select">
                                  <option selected>Add/Remove columns</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="col-xl-auto">
                                <select className="form-select">
                                  <option selected>US Dollar ($ USD)</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="table-wrap mt-5">
                        <div className="invoice-table-wrap">
                          <table className="table table-bordered invoice-table">
                            <thead className="thead-primary">
                              <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th colSpan={2}>Discount</th>
                                <th>Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="table-row-gap">
                                <td></td>
                              </tr>
                              <tr>
                                <td className="w-70 rounded-top-start border-end-0 border-bottom-0">
                                  <input
                                    type="text"
                                    className="form-control"
                                    value="Redesiging of agencyclick.com"
                                  />
                                </td>
                                <td className="border-end-0 border-bottom-0">
                                  <input
                                    type="text"
                                    className="form-control qty"
                                    value="1"
                                  />
                                </td>
                                <td className="w-15 border-end-0 border-bottom-0">
                                  <input
                                    type="text"
                                    className="form-control price"
                                    value="150.00"
                                  />
                                </td>
                                <td className="border-end-0 border-bottom-0">
                                  <input
                                    type="text"
                                    className="form-control discount w-60p"
                                    value="2"
                                  />
                                </td>
                                <td className="border-end-0 border-bottom-0">
                                  <select className="form-select disc-type w-70p">
                                    <option value="1">%</option>
                                    <option value="2">₹</option>
                                  </select>
                                </td>
                                <td
                                  className="w-20  rounded-end  bg-primary-light-5 close-over position-relative"
                                  rowSpan={2}
                                >
                                  <input
                                    type="text"
                                    className="form-control bg-transparent border-0 p-0 total"
                                    value=""
                                    readOnly
                                  />
                                  <button
                                    type="button"
                                    className="close-row btn-close"
                                  >
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  colSpan={5}
                                  className="rounded-bottom-start border-end-0"
                                >
                                  <input
                                    type="text"
                                    className="form-control"
                                    value="This is my project description. if the line do not filt like the sentence is to big the area will start getting bigger"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <a
                            className="d-inline-flex align-items-center add-new-row"
                            href="#"
                          >
                            <i className="ri-add-box-line me-1"></i> Add new
                            item
                          </a>
                        </div>
                      </div>
                      <div className="row justify-content-end">
                        <div className="col-xxl-6 mt-5">
                          <div className="table-wrap">
                            <div className="table-responsive">
                              <table className="table table-bordered subtotal-table">
                                <tbody>
                                  <tr>
                                    <td
                                      colSpan={3}
                                      className="rounded-top-start border-end-0 border-bottom-0"
                                    >
                                      Subtotal
                                    </td>
                                    <td className="rounded-top-end border-bottom-0 w-30 bg-primary-light-5">
                                      <input
                                        type="text"
                                        className="form-control bg-transparent border-0 p-0 gross-total"
                                        value=""
                                        readOnly
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      colSpan={3}
                                      className="border-end-0 border-bottom-0"
                                    >
                                      Item Discount
                                    </td>
                                    <td className="border-bottom-0  bg-primary-light-5">
                                      <input
                                        type="text"
                                        className="form-control bg-transparent border-0 p-0 gross-discount"
                                        value=""
                                        readOnly
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border-end-0 border-bottom-0">
                                      Extra Discount
                                    </td>
                                    <td className="border-end-0 border-bottom-0 w-25">
                                      <input
                                        type="text"
                                        className="form-control extdiscount"
                                        value="0"
                                      />
                                    </td>
                                    <td className="border-end-0 border-bottom-0 w-25">
                                      <select className="form-select extra-disc-type">
                                        <option selected value="1">
                                          %
                                        </option>
                                        <option value="2">₹</option>
                                      </select>
                                    </td>
                                    <td className="border-bottom-0  bg-primary-light-5">
                                      <input
                                        type="text"
                                        className="form-control bg-transparent border-0 p-0 extdiscount-read"
                                        value="0"
                                        readOnly
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      colSpan={3}
                                      className="rounded-bottom-start border-end-0 bg-primary-light-5"
                                    >
                                      <span className="text-dark">Total</span>
                                    </td>
                                    <td className="rounded-bottom-end  bg-primary-light-5">
                                      <input
                                        type="text"
                                        className="form-control bg-transparent border-0 p-0 subtotal"
                                        value=""
                                        readOnly
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-xxl-5 order-2 order-xxl-0">
                          <div className="form-group">
                            <div className="form-label-group">
                              <label className="form-label">
                                Note to client
                              </label>
                              <small className="text-muted">1400</small>
                            </div>
                            <textarea
                              className="form-control"
                              rows={6}
                              placeholder="Write an internal note"
                            ></textarea>
                            <button className="btn btn-outline-light mt-2">
                              Add Note
                            </button>
                          </div>
                        </div>
                        <div className="col-xxl-4 offset-xxl-3 text-xxl-end mb-xxl-0 mb-3">
                          <div className="btn btn-light btn-link text-primary btn-file bg-transparent p-0 border-0">
                            <span className="d-inline-flex align-items-center">
                              <i className="ri-add-box-line me-1"></i> Add
                              signature (Optional)
                              <input type="file" className="upload" />
                            </span>
                          </div>
                          <div>
                            <a
                              className="d-inline-flex align-items-center mt-2"
                              data-bs-toggle="collapse"
                              href="#label_collpase"
                            >
                              <i className="ri-add-box-line me-1"></i> Add Name
                              & Label
                            </a>
                          </div>
                          <div
                            className="collapse show mt-5"
                            id="label_collpase"
                          >
                            <div className="form-group close-over">
                              <input
                                type="text"
                                className="form-control"
                                value="Katherine Zeta Jones"
                              />
                              <button
                                type="button"
                                className="close-input btn-close"
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="form-group close-over">
                              <input
                                type="text"
                                className="form-control"
                                value="Co-founder Hencework"
                              />
                              <button
                                type="button"
                                className="close-input btn-close"
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="separator separator-light"></div>
                      <h6 className="mb-4">Terms & Condition</h6>
                      <div className="repeater">
                        <ol
                          className="ps-3"
                          data-repeater-list="category-group"
                        >
                          <li className="form-group close-over">
                            <input
                              type="text"
                              className="form-control"
                              value="Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments."
                            />
                            <button
                              type="button"
                              className="close-input btn-close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </li>
                          <li className="form-group close-over">
                            <input
                              type="text"
                              className="form-control"
                              value="Please quote invoice number when remitting funds."
                            />
                            <button
                              type="button"
                              className="close-input btn-close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </li>
                          <li
                            data-repeater-item
                            style={{display: "none"}}
                            className="form-group close-over"
                          >
                            <input type="text" className="form-control" />
                            <button
                              type="button"
                              className="close-input btn-close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </li>
                        </ol>
                        <a
                          data-repeater-create
                          className="d-inline-flex align-items-center"
                          href="#"
                        >
                          <i className="ri-add-box-line me-1"></i> Add New Term
                          Row
                        </a>
                      </div>
                      <div className="separator separator-light"></div>
                      <div className="btn btn-light btn-file mb-4">
                        Attach files
                        <input type="file" className="upload" />
                      </div>
                      <div className="my-2">
                        <a
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="collapse"
                          href="#memo_collpase"
                        >
                          <i className="ri-add-box-line me-1"></i> Add a
                          personal memo
                        </a>
                      </div>

                      <div className="collapse show" id="memo_collpase">
                        <div className="row">
                          <div className="col-xxl-5">
                            <div className="form-group">
                              <div className="form-label-group">
                                <label className="form-label">
                                  Personal Memo
                                </label>
                                <small className="text-muted">1400</small>
                              </div>
                              <textarea
                                className="form-control"
                                rows={6}
                                placeholder="Write an internal note"
                              ></textarea>
                              <button className="btn btn-outline-light mt-2">
                                Add Note
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="invoice-settings">
                <div data-simplebar className="nicescroll-bar">
                  <button type="button" className="info-close btn-close">
                    <span aria-hidden="true">×</span>
                  </button>
                  <div className="collapse-simple mt-lg-0 mt-2">
                    <div className="card">
                      <div className="card-header">
                        <a
                          role="button"
                          data-bs-toggle="collapse"
                          href="#currency"
                          aria-expanded="true"
                        >
                          Currency
                        </a>
                      </div>
                      <div id="currency" className="collapse show">
                        <div className="form-group mt-2">
                          <label className="form-label">Currency Symbol</label>
                          <select className="form-select">
                            <option selected>US Dollar ($ USD)</option>
                            <option value="1">IND Rupees (₹ USD)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a
                          role="button"
                          data-bs-toggle="collapse"
                          href="#typography"
                          aria-expanded="true"
                        >
                          Typography
                        </a>
                      </div>
                      <div id="typography" className="collapse show">
                        <div className="form-group mt-2">
                          <label className="form-label">Font</label>
                          <select className="form-select">
                            <option selected>Arial</option>
                            <option value="1">Times New Roman</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="form-label">Size</label>
                          <select className="form-select">
                            <option selected>16px</option>
                            <option value="1">20px</option>
                            <option value="2">24px</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="form-label">Align</label>
                          <div>
                            <div className="btn-group" role="group">
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                <i className="fa fa-align-left text-primary"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                <i className="fa fa-align-center"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                <i className="fa fa-align-right"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                <i className="fa fa-align-justify"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a
                          role="button"
                          data-bs-toggle="collapse"
                          href="#color"
                          aria-expanded="true"
                        >
                          Color
                        </a>
                      </div>
                      <div id="color" className="collapse show">
                        <div className="form-group mt-2">
                          <label className="form-label">Accent</label>
                          <div
                            className="input-group color-picker"
                            title="Using horizontal option"
                          >
                            <span className="input-group-text colorpicker-input-addon">
                              <i></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              value="#007D88"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="form-label">Heading Color</label>
                          <div
                            className="input-group color-picker"
                            title="Using horizontal option"
                          >
                            <span className="input-group-text colorpicker-input-addon">
                              <i></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              value="#1F2327"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="form-label">Text Color</label>
                          <div
                            className="input-group color-picker"
                            title="Using horizontal option"
                          >
                            <span className="input-group-text colorpicker-input-addon">
                              <i></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              value="#646A71"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a
                          role="button"
                          data-bs-toggle="collapse"
                          href="#action"
                          aria-expanded="true"
                        >
                          Actions
                        </a>
                      </div>
                      <div id="action" className="collapse show">
                        <div className="form-group mt-2">
                          <label className="form-label">Schedule send</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <a
                          role="button"
                          data-bs-toggle="collapse"
                          href="#option"
                          aria-expanded="true"
                        >
                          Options
                        </a>
                      </div>
                      <div id="option" className="collapse show">
                        <div className="button-list">
                          <button className="btn btn-light btn-block">
                            Get Link
                          </button>
                          <button className="btn btn-light btn-block">
                            Download Invoice
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Edit Info --> */}
          <div
            id="edit_info"
            className="modal fade"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
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
                  <h5 className="mb-5">Edit Info</h5>
                  <form>
                    <div className="row gx-3">
                      <div className="col-sm-12 form-group">
                        <label className="form-label">Company Name</label>
                        <input
                          className="form-control"
                          type="text"
                          value="Hencework"
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label className="form-label">Email ID</label>
                        <input
                          className="form-control"
                          type="email"
                          value="jampack_01@hencework.com"
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label className="form-label">Address Line One</label>
                        <input
                          className="form-control"
                          type="text"
                          value="4747, Pearl Street Rainy day Drive"
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label className="form-label">Address Line Two</label>
                        <input
                          className="form-control"
                          type="text"
                          value="Washington DC 42341"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer align-items-center">
                  <button type="button" className="btn btn-secondary">
                    Discard
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /Edit Info --> */}

          {/* <!-- Billed Edit Info --> */}
          <div
            id="billed_info"
            className="modal fade"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
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
                  <h5 className="mb-5">Billed To</h5>
                  <form>
                    <div className="row gx-3">
                      <div className="col-sm-12 form-group">
                        <label className="form-label">Company Name</label>
                        <input
                          className="form-control"
                          type="text"
                          value="Supernova Consultants"
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label className="form-label">Email ID</label>
                        <input
                          className="form-control"
                          type="email"
                          value="thompson_peter@super.co"
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label className="form-label">Address Line One</label>
                        <input
                          className="form-control"
                          type="text"
                          value="Sycamore Street"
                        />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label className="form-label">Address Line Two</label>
                        <input
                          className="form-control"
                          type="text"
                          value="San Antonio Valley, CA 34668"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer align-items-center">
                  <button type="button" className="btn btn-secondary">
                    Discard
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /Billed Edit Info --> */}
        </div>
      </div>
      {/* <!-- /Page Body --> */}
    </div>
  );
}
