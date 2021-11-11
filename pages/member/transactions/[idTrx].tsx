import Sidebar from "../../../components/organisms/SideBar";
import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import { HistoryTransactionTypes } from "../../../services/data-types";
import { getTransactionDetail } from "../../../services/member";

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

interface TransactionsDetailProps {
  transactionDetail: HistoryTransactionTypes;
}

function TransactionsDetail(props: TransactionsDetailProps) {
  const { transactionDetail } = props;

  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
}

export default TransactionsDetail;

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { token } = req.cookies;
  const { idTrx } = params;

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const response = await getTransactionDetail(idTrx, jwtToken);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
