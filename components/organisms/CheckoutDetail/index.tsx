import { useEffect, useState } from "react";

import Row from "./Row";

function CheckoutDetail() {
  const [dataTopUp, setDataTopUp] = useState({
    verifyID: "",
    nominalItem: {
      coinName: "",
      coinQuantity: "",
      price: 0,
    },
    paymentItem: {
      payment: {
        id: "",
        type: "",
      },
      bank: {
        bankName: "",
        name: "",
        noRekening: "",
      },
    },
    bankAccountName: "",
  });

  useEffect(() => {
    const dataFromLocal = localStorage.getItem("data-top-up");
    setDataTopUp(JSON.parse(dataFromLocal!));
  }, []);

  const itemPrice = dataTopUp.nominalItem.price;

  const tax = dataTopUp.nominalItem.price * (10 / 100);
  const totalPrice = itemPrice + tax;

  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <Row label="Your Game ID" value={dataTopUp.verifyID} />
        <Row label="Order ID" value="#GG001" />
        <Row
          label="Item"
          value={`${dataTopUp.nominalItem.coinQuantity} ${dataTopUp.nominalItem.coinName}`}
        />
        <Row label="Price" value={itemPrice} numberFormat />
        <Row label="Tax (10%)" value={tax} numberFormat />
        <Row
          label="Total"
          value={totalPrice}
          className="color-palette-4"
          numberFormat
        />
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <Row label="Your Account Name" value={dataTopUp.bankAccountName} />
        <Row label="Type" value={dataTopUp.paymentItem.payment.type} />
        <Row label="Bank Name" value={dataTopUp.paymentItem.bank.bankName} />
        <Row
          label="Bank Account Name"
          value={dataTopUp.paymentItem.bank.name}
        />
        <Row
          label="Bank Number"
          value={dataTopUp.paymentItem.bank.noRekening}
        />
      </div>
    </>
  );
}

export default CheckoutDetail;
