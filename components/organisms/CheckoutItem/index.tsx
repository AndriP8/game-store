import { useEffect, useState } from "react";

function CheckoutItem() {
  const [dataItem, setDataItem] = useState({
    thumbnail: "",
    category: {
      name: "",
    },
    name: "",
  });

  useEffect(() => {
    const dataFromLocal = localStorage.getItem("data-item");
    setDataItem(JSON.parse(dataFromLocal!));
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMAGE;

  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <img
            src={`${IMG}/${dataItem.thumbnail}`}
            className="img-fluid"
            alt="image_item"
          />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">{dataItem.name}</p>
        <p className="color-palette-2 m-0">
          Category: {dataItem.category.name}
        </p>
      </div>
    </div>
  );
}

export default CheckoutItem;
