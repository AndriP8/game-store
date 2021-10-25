export interface InputFormProps {
  label: string;
  labelFor: string;
  type: string;
  placeholder: string;
}

function InputForm(props: InputFormProps) {
  const { label, labelFor, placeholder, type, ...nativeProps } = props;
  return (
    <div className="pt-30">
      <label htmlFor={labelFor} className="form-label text-lg fw-medium color-palette-1 mb-10">
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={labelFor}
        name={labelFor}
        aria-describedby={labelFor}
        placeholder={placeholder}
        {...nativeProps}
      />
    </div>
  );
}

export default InputForm;
