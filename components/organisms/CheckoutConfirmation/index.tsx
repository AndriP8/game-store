import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { setCheckout } from "../../../services/player";

function CheckoutConfirmation() {
  const [checkbox, setCheckbox] = useState(false);

  const router = useRouter();

  const onSubmit = async () => {
    const dataItemLocal = localStorage.getItem("data-item");
    const dataTopUpLocal = localStorage.getItem("data-top-up");
    const dataItem = JSON.parse(dataItemLocal!);
    const dataTopUp = JSON.parse(dataTopUpLocal!);
    if (!checkbox) {
      toast.error("Pastikan telah melakukan pembayaran");
    }

    const data = {
      voucher: dataItem._id,
      nominal: dataTopUp.nominalItem._id,
      payment: dataTopUp.paymentItem.payment._id,
      bank: dataTopUp.paymentItem.bank._id,
      name: dataTopUp.verifyID,
      accountUser: dataTopUp.bankAccountName,
    };

    const response = await setCheckout(data);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success("Checkout Berhasil");
      router.push("/complete-checkout");
    }
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkbox}
          onChange={() => setCheckbox(!checkbox)}
        />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          role="button"
          type="button"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}

export default CheckoutConfirmation;
