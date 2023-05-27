import { useAppDispatch } from "../../store/hooks";
import { editItem, removeItem } from "./invoiceSlice";
import { ItemType } from "./types";

export default function InvoiceItem({
  item,
  index,
}: {
  item: ItemType;
  index: number;
}) {
  const dispatch = useAppDispatch();

  const handleChange = <K extends keyof ItemType>(
    e: React.ChangeEvent<HTMLInputElement>,
    key: K
  ) => {
    dispatch(
      editItem({
        itemIndex: index,
        itemKey: key,
        value: e.target.value as ItemType[K],
      })
    );
  };

  return (
    <>
      <tr>
        {/* Item title -------->  */}
        <td className="w-70 rounded-top-start border-end-0 border-bottom-0">
          <input
            type="text"
            className="form-control"
            placeholder="Item title"
            value={item.title}
            onChange={(e) => handleChange(e, "title")}
          />
        </td>

        {/* Item price --------------->  */}
        <td className="w-15 border-end-0 border-bottom-0">
          <input
            type="number"
            className="form-control price"
            placeholder="Price"
            value={item.price}
            onChange={(e) => handleChange(e, "price")}
          />
        </td>

        {/* Total price ------------> */}
        <td
          className="w-20  rounded-end  bg-primary-light-5 close-over position-relative"
          rowSpan={2}
        >
          <button
            type="button"
            className="close-row btn-close"
            onClick={() =>
              dispatch(removeItem({ invoiceIndex: 0, itemIndex: index }))
            }
          >
            <span aria-hidden="true">×</span>
          </button>
        </td>
      </tr>
      <tr>
        {/* Item description ------> */}

        <td colSpan={5} className="rounded-bottom-start border-end-0">
          <input
            type="text"
            className="form-control"
            placeholder="Item description"
            value={item.description}
            onChange={(e) => handleChange(e, "description")}
          />
        </td>
      </tr>
      <tr className="table-row-gap">
        <td></td>
      </tr>
    </>
  );
}
