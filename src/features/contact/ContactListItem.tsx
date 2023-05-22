import {
  Archive,
  Copy,
  Edit,
  MoreVertical,
  Trash,
  Trash2,
} from "react-feather";
import { Dropdown } from "react-bootstrap";

export type ContactProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
  tags: string[];
  label: string;
  date: string;
  action: string;
};

export default function ContactListItem({
  contact,
}: {
  contact: ContactProps;
}) {
  const { name, email, phone, tags, label, date, action } = contact;

  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <span className="contact-star marked">
            <span className="feather-icon">
              <i data-feather="star"></i>
            </span>
          </span>
        </div>
      </td>
      <td>
        <div className="media align-items-center">
          <div className="media-head me-2">
            <div className="avatar avatar-xs avatar-rounded">
              <img
                src="../src/assets/img/avatar1.jpg"
                alt="user"
                className="avatar-img"
              />
            </div>
          </div>
          <div className="media-body">
            <span className="d-block text-high-em">{name}</span>
          </div>
        </div>
      </td>
      <td className="text-truncate">{email}</td>
      <td>{phone}</td>
      <td>
        <span className="badge badge-soft-violet my-1  me-2">Collaborator</span>
        <span className="badge badge-soft-danger  my-1  me-2">
          Angular Developer
        </span>
      </td>
      <td>{label}</td>
      <td>{date}</td>
      <td>
        <div className="d-flex align-items-center">
          <div className="d-flex">
            <a
              className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
              data-bs-toggle="tooltip"
              data-placement="top"
              title=""
              data-bs-original-title="Archive"
              href="#"
            >
              <span className="icon">
                <span className="feather-icon">
                  <Archive />
                </span>
              </span>
            </a>
            <a
              className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
              data-bs-toggle="tooltip"
              data-placement="top"
              title=""
              data-bs-original-title="Edit"
              href="edit-contact.html"
            >
              <span className="icon">
                <span className="feather-icon">
                  <Edit />
                </span>
              </span>
            </a>
            <a
              className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
              data-bs-toggle="tooltip"
              data-placement="top"
              title=""
              data-bs-original-title="Delete"
              href="#"
            >
              <span className="icon">
                <span className="feather-icon">
                  <Trash />
                </span>
              </span>
            </a>
          </div>

          {/* More Options Dropdown ----------------------->  */}
          {/* -------------------------------------------->  */}
          <Dropdown className="dropdown">
            <Dropdown.Toggle className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret">
              <span className="icon">
                <span className="feather-icon">
                  <MoreVertical />
                </span>
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item className="dropdown-item" href="">
                <span className="feather-icon dropdown-icon">
                  <Edit />
                </span>
                <span>Edit Contact</span>
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-item" href="#">
                <span className="feather-icon dropdown-icon">
                  <Trash2 />
                </span>
                <span>Delete</span>
              </Dropdown.Item>

              <Dropdown.Item className="dropdown-item" href="#">
                <span className="feather-icon dropdown-icon">
                  <Copy />
                </span>
                <span>Duplicate</span>
              </Dropdown.Item>

              <Dropdown.Item disabled>
                <h6 className="dropdown-header dropdown-header-bold">
                  Change Labels
                </h6>
              </Dropdown.Item>

              <Dropdown.Item className="dropdown-item" href="#">
                Design
              </Dropdown.Item>

              <Dropdown.Item className="dropdown-item" href="#">
                Developer
              </Dropdown.Item>

              <Dropdown.Item className="dropdown-item" href="#">
                Inventory
              </Dropdown.Item>

              <Dropdown.Item className="dropdown-item" href="#">
                Human Resource
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </td>
    </tr>
  );
}
