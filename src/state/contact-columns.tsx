import { ContactProps } from "../features/ContactListItem";

const columnTitle = (title: string) => {
  return (
    <span
      className="d-flex justify-content-between align-items-center"
      style={{ width: "100%", color: title === "Name" ? "#007D88" : "" }}
    >
      {title}{" "}
      <i className="bi bi-arrow-down-up" style={{ fontSize: "14px" }}></i>
    </span>
  );
};

export const columns = [
  {
    name: columnTitle("Name"),
    selector: (row: ContactProps) => row.name,
    style: {
      fontWeight: "600",
      color: "black",
    },
  },
  {
    name: columnTitle("Email Address"),
    selector: (row: ContactProps) => row.email,
  },
  {
    name: columnTitle("Phone"),
    selector: (row: ContactProps) => row.phone,
  },
  {
    name: columnTitle("Tags"),
    selector: (row: ContactProps) => row.tags.join(", "),
    style: {
      minWidth: "290px",
    },
    cell: (row: ContactProps) => (
      <div>
        {row.tags.map((tag) => (
          <span key={tag} className="badge badge-soft-violet my-1 me-2">
            {tag}
          </span>
        ))}
      </div>
    ),
  },
  {
    name: columnTitle("Labels"),
    selector: (row: ContactProps) => row.label,
  },
  {
    name: columnTitle("Date Created"),
    selector: (row: ContactProps) => row.date,
  },
  {
    name: "Actions",
    selector: (row: ContactProps) => row.action,
  },
];
