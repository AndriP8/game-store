import Image from "next/image";
import NumberFormat from "react-number-format";

interface NominalItemProps {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
  onChange: () => void;
}

function NominalItem(props: NominalItemProps) {
  const { _id, coinQuantity, coinName, price, onChange } = props;
  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={_id}
      onChange={onChange}
    >
      <input
        className="d-none"
        type="radio"
        id={_id}
        name="topup"
        value={_id}
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 m-0">
            <span className="fw-medium">{coinQuantity}</span>
            {coinName}
          </p>
          <Image
            src="/icon/icon-checked.svg"
            id="icon-check"
            height={20}
            width={20}
          />
        </div>
        <p className="text-lg color-palette-1 m-0">
          <NumberFormat
            value={price}
            prefix="Rp "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        </p>
      </div>
    </label>
  );
}

export default NominalItem;
