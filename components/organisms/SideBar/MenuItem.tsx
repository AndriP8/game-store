import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon:
    | "overview"
    | "transaction"
    | "messages"
    | "card"
    | "rewards"
    | "setting"
    | "logout";
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href, onClick } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={classItem} onClick={onClick}>
      <div className="me-3">
        <Image src={`/icon/icon-menu-${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        {!onClick ? (
          <Link href={href}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        ) : (
          <a
            className="text-lg text-decoration-none"
            style={{ cursor: "pointer" }}
          >
            {title}
          </a>
        )}
      </p>
    </div>
  );
}

export default MenuItem;
