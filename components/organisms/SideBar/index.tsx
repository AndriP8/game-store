import Footer from "./Footer";
import Profile from "./Profile";
import MenuItem from "./MenuItem";

interface SidebarProps {
  activeMenu: "overview" | "transactions" | "settings";
}

function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="overview" href="/member" active={activeMenu === "overview"} />
          <MenuItem title="Transactions" icon="transaction" href="/member/transactions" active={activeMenu === "transactions"} />
          <MenuItem title="Messages" icon="messages" href="/member" />
          <MenuItem title="Card" icon="card" href="/member" />
          <MenuItem title="Rewards" icon="rewards" href="/member" />
          <MenuItem title="Settings" icon="setting" href="/member/edit-profile" active={activeMenu === "settings"} />
          <MenuItem title="Logout" icon="logout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Sidebar;
