import cx from "classnames";

interface ButtonTabsProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

function ButtonTabs(props: ButtonTabsProps) {
  const { title, active, onClick } = props;

  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });

  return (
    <button type="button" onClick={onClick} className={btnClass}>
      {title}
    </button>
  );
}

export default ButtonTabs;
