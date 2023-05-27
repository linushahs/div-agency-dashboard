import clsx from "clsx";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { ChevronDown, ChevronUp, Sliders } from "react-feather";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import InvoiceItem from "./InvoiceItem";
import InvoiceSidebar from "./InvoiceSidebar";
import {
  addItem,
  addTermsAndCondition,
  editInvoice,
  editSenderDetails,
  editShippingDetails,
  editTermsAndCondition,
  removeTermsAndCondition,
  saveInvoiceDetails,
} from "./invoiceSlice";
import { Invoice, ShippingAddress } from "./types";

export default function CreateInvoice() {
  //state variables
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleSetting, setToggleSetting] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showBilledEditModal, setShowBilledEditModal] = useState(false);
  const [showShippingSection, setShowShippingSection] = useState(false);
  const [showNameAndLabel, setShowNameAndLabel] = useState(true);

  //redux state variables
  const dispatch = useAppDispatch();
  const invoice = useAppSelector((state) => state.invoice.invoice);
  const businessInfo = invoice.businessInfo;
  const clientInfo = invoice.clientInfo;
  const items = invoice.items;

  const [businessInformation, setBusinessInformation] = useState(businessInfo);
  const [clientInformation, setClientInformation] = useState(clientInfo);

  //edit invoice basic details
  const editInvoiceDetails = <K extends keyof Invoice>(
    e: React.ChangeEvent<HTMLInputElement>,
    key: K
  ) => {
    dispatch(
      saveInvoiceDetails({
        key,
        value: e.target.value,
      })
    );
  };

  //edit business info
  const editBusinessInfo = (
    e: React.ChangeEvent<HTMLInputElement>,
    target: string
  ) => {
    setBusinessInformation({
      ...businessInformation,
      [target]: e.target.value,
    });
  };

  //save business info
  const saveBusinessInfo = () => {
    dispatch(
      editInvoice({
        key: "businessInfo",
        value: businessInformation,
      })
    );

    setShowEditModal(false);
  };

  //edit client info and save it
  const editClientInfo = (
    e: React.ChangeEvent<HTMLInputElement>,
    target: string
  ) => {
    setClientInformation({ ...clientInformation, [target]: e.target.value });
  };

  //save client info in redux store
  const saveClientInfo = () => {
    dispatch(editInvoice({ key: "clientInfo", value: clientInformation }));

    setShowBilledEditModal(false);
  };

  //add new item to the invoice
  const addNewItem = () => {
    dispatch(
      addItem({
        item: { title: "", description: "", price: 0 },
      })
    );
  };

  //edit Shipping address
  const editShippingAddress = <K extends keyof ShippingAddress>(
    e: React.ChangeEvent<HTMLInputElement>,
    key: K
  ) => {
    dispatch(
      editShippingDetails({
        key,
        value: e.target.value,
      })
    );
  };

  return (
    <div className="hk-pg-wrapper pb-0">
      <div className="hk-pg-body py-0">
        {/* invoiceapp-setting-active --->  */}
        <div
          className={clsx(
            toggleSidebar && "invoiceapp-sidebar-toggle",
            toggleSetting && "invoiceapp-setting-active",
            "invoiceapp-wrap"
          )}
        >
          <InvoiceSidebar />

          {/* Main section -------------------->  */}
          <div className="invoiceapp-content">
            <div className="invoiceapp-detail-wrap">
              <header className="invoice-header">
                <div className="d-flex align-items-center"></div>
                <div className="invoice-options-wrap">
                  <a
                    className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover invoiceapp-setting-toggle"
                    href="#"
                    onClick={() => setToggleSetting(!toggleSetting)}
                  >
                    <span className="icon">
                      <span className="feather-icon">
                        <Sliders />
                      </span>
                    </span>
                  </a>
                  <Link
                    to="/invoice-preview"
                    className="btn btn-outline-secondary flex-shrink-0 d-md-inline-block d-none"
                  >
                    Preview
                  </Link>
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
              <div className="invoice-body">
                <SimpleBar
                  style={{ height: "100%" }}
                  className="nicescroll-bar"
                >
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
                              <h6>{businessInfo.name}</h6>
                              <p>{businessInfo.address1}</p>
                              <p>{businessInfo.address2} </p>
                              <p>{businessInfo.email}</p>
                            </div>
                            <a
                              className="d-inline-flex align-items-center mt-2"
                              href="#"
                              onClick={() => setShowEditModal(true)}
                            >
                              <i className="ri-pencil-line me-1"></i> Edit Info
                            </a>
                          </div>
                        </div>
                        <div className="col-xxl-5 offset-xxl-4 mt-xxl-0 mt-6">
                          <form>
                            <div className="row gx-3">
                              <div className="col-lg-6 form-group">
                                <span className="form-control">
                                  Invoice No*
                                </span>
                              </div>
                              <div className="col-lg-6 form-group">
                                <input
                                  className="form-control"
                                  value={invoice.invoiceNo}
                                  type="number"
                                  onChange={(e) =>
                                    editInvoiceDetails(e, "invoiceNo")
                                  }
                                />
                              </div>
                            </div>
                            <div className="row gx-3">
                              <div className="col-lg-6 form-group">
                                <span className="form-control">
                                  Invoice Date*
                                </span>
                              </div>
                              <div className="col-lg-6 form-group">
                                <input
                                  className="form-control"
                                  name="single-date-pick"
                                  value={invoice.invoiceDate}
                                  type="date"
                                  onChange={(e) =>
                                    editInvoiceDetails(e, "invoiceDate")
                                  }
                                />
                              </div>
                            </div>
                            <div className="row gx-3">
                              <div className="col-lg-6 form-group">
                                <span className="form-control">Due Date*</span>
                              </div>
                              <div className="col-lg-6 form-group">
                                <input
                                  className="form-control"
                                  name="single-date-pick"
                                  value={invoice.dueDate}
                                  type="date"
                                  onChange={(e) =>
                                    editInvoiceDetails(e, "dueDate")
                                  }
                                />
                              </div>
                            </div>
                            <div className="row gx-3">
                              <div className="col-lg-6 form-group">
                                <span className="form-control">
                                  Customer No*
                                </span>
                              </div>
                              <div className="col-lg-6 form-group">
                                <input
                                  className="form-control"
                                  value={invoice.customerNo}
                                  type="number"
                                  onChange={(e) =>
                                    editInvoiceDetails(e, "customerNo")
                                  }
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
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="separator separator-light"></div>
                      <div className="row">
                        <div className="col-xxl-3 mb-xxl-0 mb-4">
                          <h6>Billed To</h6>

                          <div className="Billto-wrap mt-4">
                            <h6>{clientInfo.name}</h6>
                            <p>{clientInfo.address1}</p>
                            <p>{clientInfo.address2}</p>
                            <p>{clientInfo.email}</p>
                          </div>
                          <a
                            className="d-inline-flex align-items-center mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#billed_info"
                            onClick={() => setShowBilledEditModal(true)}
                            href="#"
                          >
                            <i className="ri-pencil-line me-1"></i> Edit Info
                          </a>
                        </div>
                        <div className="col-xxl-4 offset-xxl-5">
                          <h6>Ship To</h6>
                          <div className="repeater">
                            {showShippingSection && (
                              <div className="row gx-3">
                                <div className="col-sm-12 form-group">
                                  <input
                                    className="form-control"
                                    placeholder="Client business name"
                                    type="text"
                                    onChange={(e) =>
                                      editShippingAddress(e, "businessName")
                                    }
                                  />
                                </div>
                                <div className="col-sm-12 form-group">
                                  <input
                                    className="form-control"
                                    placeholder="Address"
                                    type="text"
                                    onChange={(e) =>
                                      editShippingAddress(e, "address")
                                    }
                                  />
                                </div>
                                <div className="col-lg-6 form-group">
                                  <input
                                    className="form-control"
                                    placeholder="City"
                                    type="text"
                                    onChange={(e) =>
                                      editShippingAddress(e, "city")
                                    }
                                  />
                                </div>
                                <div className="col-lg-6 form-group">
                                  <input
                                    className="form-control"
                                    placeholder="Postal Code"
                                    type="number"
                                    onChange={(e) =>
                                      editShippingAddress(e, "postalCode")
                                    }
                                  />
                                </div>
                                <div className="col-sm-12 form-group">
                                  <input
                                    className="form-control"
                                    placeholder="State"
                                    type="text"
                                    onChange={(e) =>
                                      editShippingAddress(e, "state")
                                    }
                                  />
                                </div>
                                <div className="col-sm-12 form-group">
                                  <input
                                    className="form-control"
                                    placeholder="Country"
                                    type="text"
                                    onChange={(e) =>
                                      editShippingAddress(e, "country")
                                    }
                                  />
                                </div>
                              </div>
                            )}

                            <a
                              onClick={() =>
                                setShowShippingSection(!showShippingSection)
                              }
                              href="#shipto_collpase"
                              className="d-inline-flex align-items-center"
                            >
                              <i className="ri-add-box-line me-1"></i> Add
                              shipping address
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="table-wrap mt-5">
                        <div className="invoice-table-wrap">
                          <table className="table table-bordered invoice-table">
                            <thead className="thead-primary">
                              <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="table-row-gap">
                                <td></td>
                              </tr>

                              {items.map((item, id) => (
                                <InvoiceItem key={id} item={item} index={id} />
                              ))}
                            </tbody>
                          </table>
                          <a
                            className="d-inline-flex align-items-center add-new-row"
                            href="#"
                            onClick={() => addNewItem()}
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
                                    <td className="w-50 rounded-bottom-start border-end-0 bg-primary-light-5">
                                      <span className="text-dark">Total:</span>
                                    </td>
                                    <td className="w-50">
                                      {invoice.totalPrice}
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
                              onChange={(e) =>
                                dispatch(
                                  editInvoice({
                                    key: "noteToClient",
                                    value: e.target.value,
                                  })
                                )
                              }
                            ></textarea>
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
                              href="#label_collpase"
                              onClick={() =>
                                setShowNameAndLabel(!showNameAndLabel)
                              }
                            >
                              <i className="ri-add-box-line me-1"></i> Add Name
                              & Label
                            </a>
                          </div>
                          {showNameAndLabel && (
                            <div className=" show mt-5">
                              <div className="form-group close-over">
                                <input
                                  type="text"
                                  className="form-control"
                                  value={invoice.sender.name}
                                  onChange={(e) =>
                                    dispatch(
                                      editSenderDetails({
                                        key: "name",
                                        value: e.target.value,
                                      })
                                    )
                                  }
                                />
                              </div>
                              <div className="form-group close-over">
                                <input
                                  type="text"
                                  className="form-control"
                                  value={invoice.sender.label}
                                  onChange={(e) =>
                                    dispatch(
                                      editSenderDetails({
                                        key: "label",
                                        value: e.target.value,
                                      })
                                    )
                                  }
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="separator separator-light"></div>
                      <h6 className="mb-4">Terms & Condition</h6>
                      <div className="repeater">
                        <ol
                          className="ps-3"
                          data-repeater-list="category-group"
                        >
                          {invoice.termsAndConditions.map((term, id) => (
                            <li key={id} className="form-group close-over">
                              <input
                                type="text"
                                className="form-control"
                                value={term}
                                onChange={(e) =>
                                  dispatch(
                                    editTermsAndCondition({
                                      index: id,
                                      value: e.target.value,
                                    })
                                  )
                                }
                              />
                              <button
                                type="button"
                                className="close-input btn-close"
                                onClick={() =>
                                  dispatch(
                                    removeTermsAndCondition({ index: id })
                                  )
                                }
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                            </li>
                          ))}
                        </ol>
                        <a
                          data-repeater-create
                          className="d-inline-flex align-items-center"
                          href="#"
                          onClick={() =>
                            dispatch(addTermsAndCondition({ term: "" }))
                          }
                        >
                          <i className="ri-add-box-line me-1"></i> Add New Term
                          Row
                        </a>
                      </div>
                    </div>
                  </div>
                </SimpleBar>
              </div>
              <div className="invoice-settings">
                <SimpleBar
                  style={{ height: "100%" }}
                  className="nicescroll-bar"
                >
                  <button
                    type="button"
                    className="info-close btn-close"
                    onClick={() => setToggleSetting(!toggleSetting)}
                  >
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
                </SimpleBar>
              </div>
            </div>
          </div>
          {/* <!-- Edit Info --> */}
          <Modal
            tabIndex={-1}
            show={showEditModal}
            onHide={() => setShowEditModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="row gx-3">
                  <div className="col-sm-12 form-group">
                    <label className="form-label">Company Name</label>
                    <input
                      className="form-control"
                      type="text"
                      value={businessInformation.name}
                      onChange={(e) => editBusinessInfo(e, "name")}
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <label className="form-label">Email ID</label>
                    <input
                      className="form-control"
                      type="email"
                      value={businessInformation.email}
                      onChange={(e) => editBusinessInfo(e, "email")}
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <label className="form-label">Address Line One</label>
                    <input
                      className="form-control"
                      type="text"
                      value={businessInformation.address1}
                      onChange={(e) => editBusinessInfo(e, "address1")}
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <label className="form-label">Address Line Two</label>
                    <input
                      className="form-control"
                      type="text"
                      value={businessInformation.address2}
                      onChange={(e) => editBusinessInfo(e, "address2")}
                    />
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowEditModal(false)}
              >
                Discard
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={saveBusinessInfo}
              >
                Save
              </button>
            </Modal.Footer>
          </Modal>
          {/* <!-- /Edit Info --> */}

          {/* <!-- Billed Edit Info --> */}
          <Modal
            tabIndex={-1}
            show={showBilledEditModal}
            onHide={() => setShowBilledEditModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Billed To</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="row gx-3">
                  <div className="col-sm-12 form-group">
                    <label className="form-label">Company Name</label>
                    <input
                      className="form-control"
                      type="text"
                      value={clientInformation.name}
                      onChange={(e) => editClientInfo(e, "name")}
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <label className="form-label">Email ID</label>
                    <input
                      className="form-control"
                      type="email"
                      value={clientInformation.email}
                      onChange={(e) => editClientInfo(e, "email")}
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <label className="form-label">Address Line One</label>
                    <input
                      className="form-control"
                      type="text"
                      value={clientInformation.address1}
                      onChange={(e) => editClientInfo(e, "address1")}
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <label className="form-label">Address Line Two</label>
                    <input
                      className="form-control"
                      type="text"
                      value={clientInformation.address2}
                      onChange={(e) => editClientInfo(e, "address2")}
                    />
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer className="align-items-center">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowBilledEditModal(false)}
              >
                Discard
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => saveClientInfo()}
              >
                Save
              </button>
            </Modal.Footer>
          </Modal>

          {/* <!-- /Billed Edit Info --> */}
        </div>
      </div>
      {/* <!-- /Page Body --> */}
    </div>
  );
}
