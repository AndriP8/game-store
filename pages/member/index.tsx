import OverviewContent from "../../components/organisms/OverviewContent";
import Sidebar from "../../components/organisms/SideBar";

function MemberOverview() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}

export default MemberOverview;
