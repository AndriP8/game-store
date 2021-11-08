import NumberFormat from "react-number-format";

interface RowProps {
  label: string;
  value: string | number;
  className?: string;
  numberFormat: boolean;
}

function Row(props: Partial<RowProps>) {
  const { label, value, className, numberFormat } = props;

  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      {numberFormat ? (
        <span className={`purchase-details ${className}`}>
          <NumberFormat
            value={value}
            prefix="Rp "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        </span>
      ) : (
        <span className={`purchase-details ${className}`}>{value}</span>
      )}
    </p>
  );
}

export default Row;
