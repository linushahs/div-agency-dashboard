import { useState } from "react";

export default function VerticalNavbar() {
  const [showContact, setShowContact] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);

  return (
    <>
      <div className="hk-menu">
        {/* <!-- Brand --> */}
        <div className="menu-header">
          <span>
            <a className="navbar-brand" href="index.html">
              <img
                className="brand-img img-fluid"
                src="../src/assets/img/brand-sm.svg"
                alt="brand"
              />
              <img
                className="brand-img img-fluid"
                src="../src/assets/img/Jampack.svg"
                alt="brand"
              />
            </a>
            <button className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover navbar-toggle">
              <span className="icon">
                <span className="svg-icon fs-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-arrow-bar-to-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="10" y1="12" x2="20" y2="12"></line>
                    <line x1="10" y1="12" x2="14" y2="16"></line>
                    <line x1="10" y1="12" x2="14" y2="8"></line>
                    <line x1="4" y1="4" x2="4" y2="20"></line>
                  </svg>
                </span>
              </span>
            </button>
          </span>
        </div>
        {/* <!-- /Brand --> */}

        {/* <!-- Main Menu --> */}
        <div data-simplebar className="nicescroll-bar">
          <div className="menu-content-wrap">
            <div className="menu-group">
              <ul className="navbar-nav flex-column">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    <span className="nav-icon-wrap">
                      <span className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-template"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <rect x="4" y="4" width="16" height="4" rx="1" />
                          <rect x="4" y="12" width="6" height="8" rx="1" />
                          <line x1="14" y1="12" x2="20" y2="12" />
                          <line x1="14" y1="16" x2="20" y2="16" />
                          <line x1="14" y1="20" x2="20" y2="20" />
                        </svg>
                      </span>
                    </span>
                    <span className="nav-link-text">Dashboard</span>
                    <span className="badge badge-sm badge-soft-pink ms-auto">
                      Hot
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu-gap"></div>
            <div className="menu-group">
              <div className="nav-header">
                <span>Apps</span>
              </div>
              <ul className="navbar-nav flex-column">
                {/* Contact menu ------------->  */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    aria-expanded={showContact}
                    onClick={() => setShowContact(!showContact)}
                  >
                    <span className="nav-icon-wrap">
                      <span className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-notebook"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                          <line x1="13" y1="8" x2="15" y2="8" />
                          <line x1="13" y1="12" x2="15" y2="12" />
                        </svg>
                      </span>
                    </span>
                    <span className="nav-link-text">Contact</span>
                  </a>
                  {showContact ? (
                    <ul className="nav flex-column  nav-children">
                      <li className="nav-item">
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="contact.html">
                              <span className="nav-link-text">
                                Contact List
                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="contact-cards.html">
                              <span className="nav-link-text">
                                Contact Cards
                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="edit-contact.html">
                              <span className="nav-link-text">
                                Edit Contact
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    data-bs-target="#dash_file"
                  >
                    <span className="nav-icon-wrap">
                      <span className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-file-check"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                          <path d="M9 15l2 2l4 -4" />
                        </svg>
                      </span>
                    </span>
                    <span className="nav-link-text">File Manager</span>
                  </a>
                  <ul
                    id="dash_file"
                    className="nav flex-column collapse  nav-children"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="file-manager-list.html">
                            <span className="nav-link-text">List View</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="file-manager-grid.html">
                            <span className="nav-link-text">Grid View</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="gallery.html">
                    <span className="nav-icon-wrap">
                      <span className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-photo"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="15" y1="8" x2="15.01" y2="8" />
                          <rect x="4" y="4" width="16" height="16" rx="3" />
                          <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                          <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
                        </svg>
                      </span>
                    </span>
                    <span className="nav-link-text">Gallery</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href=""
                    data-bs-toggle="collapse"
                    data-bs-target="#dash_task"
                  >
                    <span className="nav-icon-wrap">
                      <span className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-list-details"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M13 5h8" />
                          <path d="M13 9h5" />
                          <path d="M13 15h8" />
                          <path d="M13 19h5" />
                          <rect x="3" y="4" width="6" height="6" rx="1" />
                          <rect x="3" y="14" width="6" height="6" rx="1" />
                        </svg>
                      </span>
                    </span>
                    <span className="nav-link-text">Todo</span>
                    <span className="badge badge-soft-success ms-2">2</span>
                  </a>
                  <ul
                    id="dash_task"
                    className="nav flex-column collapse  nav-children"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="tasklist.html">
                            <span className="nav-link-text">Tasklist</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="gantt.html">
                            <span className="nav-link-text">Gantt</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href=""
                    data-bs-toggle="collapse"
                    data-bs-target="#dash_blog"
                  >
                    <span className="nav-icon-wrap">
                      <span className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-browser"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <rect x="4" y="4" width="16" height="16" rx="1" />
                          <line x1="4" y1="8" x2="20" y2="8" />
                          <line x1="8" y1="4" x2="8" y2="8" />
                        </svg>
                      </span>
                    </span>
                    <span className="nav-link-text">Blog</span>
                  </a>
                  <ul
                    id="dash_blog"
                    className="nav flex-column collapse  nav-children"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="posts.html">
                            <span className="nav-link-text">Posts</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="add-new-post.html">
                            <span className="nav-link-text">Add New Post</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="post-detail.html">
                            <span className="nav-link-text">Post Detail</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    aria-expanded={showInvoice}
                    onClick={() => setShowInvoice(!showInvoice)}
                  >
                    <span className="nav-icon-wrap">
                      <span className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-file-digit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                          <rect x="9" y="12" width="3" height="5" rx="1" />
                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                          <path d="M15 12v5" />
                        </svg>
                      </span>
                    </span>
                    <span className="nav-link-text">Invoices</span>
                  </a>
                  {showInvoice ? (
                    <ul className="nav flex-column   nav-children">
                      <li className="nav-item">
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="invoice-list.html">
                              <span className="nav-link-text">
                                Invoice List
                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="invoice-templates.html"
                            >
                              <span className="nav-link-text">
                                Invoice Templates
                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="create-invoice.html">
                              <span className="nav-link-text">
                                Create Invoice
                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="invoice-preview.html">
                              <span className="nav-link-text">
                                Invoice Preview
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href=""
                    data-bs-toggle="collapse"
                    data-bs-target="#dash_integ"
                  >
                    <span className="nav-icon-wrap">
                      <span className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-code"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <polyline points="7 8 3 12 7 16" />
                          <polyline points="17 8 21 12 17 16" />
                          <line x1="14" y1="4" x2="10" y2="20" />
                        </svg>
                      </span>
                    </span>
                    <span className="nav-link-text">Integrations</span>
                  </a>
                  <ul
                    id="dash_integ"
                    className="nav flex-column collapse  nav-children"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="all-apps.html">
                            <span className="nav-link-text">All Apps</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="integrations-detail.html"
                          >
                            <span className="nav-link-text">App Detail</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="integrations.html">
                            <span className="nav-link-text">Integrations</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="menu-gap"></div>
            <div className="menu-group">
              <div className="nav-header">
                <span>Pages</span>
              </div>
              <ul className="navbar-nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href=""
                    data-bs-toggle="collapse"
                    data-bs-target="#dash_pages"
                  >
                    <span className="nav-icon-wrap">
                      <span className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user-plus"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          <path d="M16 11h6m-3 -3v6" />
                        </svg>
                      </span>
                    </span>
                    <span className="nav-link-text">Authentication</span>
                  </a>
                  <ul
                    id="dash_pages"
                    className="nav flex-column collapse  nav-children"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href=""
                            data-bs-toggle="collapse"
                            data-bs-target="#dash_log"
                          >
                            <span className="nav-link-text">Log In</span>
                          </a>
                          <ul
                            id="dash_log"
                            className="nav flex-column collapse  nav-children"
                          >
                            <li className="nav-item">
                              <ul className="nav flex-column">
                                <li className="nav-item">
                                  <a className="nav-link" href="login.html">
                                    <span className="nav-link-text">Login</span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="login-simple.html"
                                  >
                                    <span className="nav-link-text">
                                      Login Simple
                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="login-classNameic.html"
                                  >
                                    <span className="nav-link-text">
                                      Login ClassNameclassNameic
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href=""
                            data-bs-toggle="collapse"
                            data-bs-target="#dash_sign"
                          >
                            <span className="nav-link-text">Sign Up</span>
                          </a>
                          <ul
                            id="dash_sign"
                            className="nav flex-column collapse  nav-children"
                          >
                            <li className="nav-item">
                              <ul className="nav flex-column">
                                <li className="nav-item">
                                  <a className="nav-link" href="signup.html">
                                    <span className="nav-link-text">
                                      Signup
                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="signup-simple.html"
                                  >
                                    <span className="nav-link-text">
                                      Signup Simple
                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="signup-classNameic.html"
                                  >
                                    <span className="nav-link-text">
                                      Signup ClassNameclassNameic
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="lock-screen.html">
                            <span className="nav-link-text">Lock Screen</span>
                          </a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="reset-password.html">
                            <span className="nav-link-text">
                              Reset Password
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="404.html">
                            <span className="nav-link-text">Error 404</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="503.html">
                            <span className="nav-link-text">Error 503</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href=""
                    data-bs-toggle="collapse"
                    data-bs-target="#dash_profile"
                  >
                    <span className="nav-icon-wrap">
                      <span className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user-search"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="7" r="4" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h1" />
                          <circle cx="16.5" cy="17.5" r="2.5" />
                          <path d="M18.5 19.5l2.5 2.5" />
                        </svg>
                      </span>
                    </span>
                    <span className="nav-link-text position-relative">
                      Profile
                      <span className="badge badge-danger badge-indicator position-absolute top-0 start-100"></span>
                    </span>
                  </a>
                  <ul
                    id="dash_profile"
                    className="nav flex-column collapse  nav-children"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="profile.html">
                            <span className="nav-link-text">Profile</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="edit-profile.html">
                            <span className="nav-link-text">Edit Profile</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="account.html">
                            <span className="nav-link-text">Account</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="menu-gap"></div>
            <div className="menu-group">
              <div className="nav-header">
                <span>Documentation</span>
              </div>
              <ul className="navbar-nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://nubra-ui.hencework.com/"
                    target="_blank"
                  >
                    <span className="nav-icon-wrap">
                      <span className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-file-code-2"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M10 12h-1v5h1" />
                          <path d="M14 12h1v5h-1" />
                          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        </svg>
                      </span>
                    </span>
                    <span className="nav-link-text">Documentation</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://nubra-ui.hencework.com/avatar.html"
                    target="_blank"
                  >
                    <span className="nav-icon-wrap">
                      <span className="svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-layout"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <rect x="4" y="4" width="6" height="5" rx="2" />
                          <rect x="4" y="13" width="6" height="7" rx="2" />
                          <rect x="14" y="4" width="6" height="16" rx="2" />
                        </svg>
                      </span>
                    </span>
                    <span className="nav-link-text">Components</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- /Main Menu --> */}
      </div>
      <div id="hk_menu_backdrop" className="hk-menu-backdrop"></div>
    </>
  );
}
