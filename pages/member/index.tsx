import jwtDecode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";
import OverviewContent from "../../components/organisms/OverviewContent";
import Sidebar from "../../components/organisms/SideBar";

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

function MemberOverview() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}

export default MemberOverview;

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;

  return {
    props: {
      user: userFromPayload,
    },
  };
}
