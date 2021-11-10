import Sidebar from "../../../components/organisms/SideBar";
import TransactionContent from "../../../components/organisms/TransactionContent";

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}

export default Transactions;

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

  return {
    props: {},
  };
}
