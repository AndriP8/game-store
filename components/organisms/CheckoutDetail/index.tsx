import Row from "./Row";

function CheckoutDetail() {
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
        <Row label="Your Game ID" value="masayoshizero" />
        <Row label="Order ID" value="#GG001" />
        <Row label="Item" value="250 Diamonds" />
        <Row label="Price" value={42280000} />
        <Row label="Tax (10%)" value={4228000} />
        <Row label="Total" value={550000600} className="color-palette-4" />
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
        <Row label="Your Account Name" value="Masayoshi Angga Zero" />
        <Row label="Type" value="Worldwide Transfer" />
        <Row label="Bank Name" value="Mandiri" />
        <Row label="Bank Account Name" value="PT Store GG Indonesia" />
        <Row label="Bank Number" value="1800 - 9090 - 2021" />
      </div>
    </>
  );
}

export default CheckoutDetail;
