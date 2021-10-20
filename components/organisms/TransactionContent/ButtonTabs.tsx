import cx from "classnames";

interface ButtonTabsProps {
  title: string;
  active: boolean;
}

function ButtonTabs(props: ButtonTabsProps) {
  const { title, active } = props;

  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });

  return (
    <a data-filter="*" href="#" className={btnClass}>
      {title}
    </a>
  );
}

export default ButtonTabs;
