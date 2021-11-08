import Image from "next/image";

interface PaymentItemProps {
  bankId: string;
  name: string;
  type: string;
  onChange: () => void;
}

function PaymentItem(props: PaymentItemProps) {
  const { bankId, type, name, onChange } = props;

  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={bankId}
      onChange={onChange}
    >
      <input
        className="d-none"
        type="radio"
        id={bankId}
        name="paymentMethod"
        value={bankId}
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 fw-medium m-0">{type}</p>
          <Image
            src="/icon/icon-checked.svg"
            id="icon-check"
            height={20}
            width={20}
          />
        </div>
        <p className="text-lg color-palette-1 m-0">{name}</p>
      </div>
    </label>
  );
}

export default PaymentItem;
