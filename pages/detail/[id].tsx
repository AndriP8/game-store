import { useEffect } from "react";
import Footer from "../../components/organisms/Footer";
import TopUpForm from "../../components/organisms/TopUpForm";
import TopUpItem from "../../components/organisms/TopUpItems";
import Navbar from "../../components/organisms/Navbar";
import { getFeaturedGame, getVoucherDetail } from "../../services/player";
import {
  GameItemTypes,
  NominalTypes,
  PaymentTypes,
} from "../../services/data-types";

interface DetailProps {
  dataItem: GameItemTypes;
  nominals: NominalTypes[];
  payments: PaymentTypes[];
}

function Detail({ dataItem, nominals, payments }: DetailProps) {
  useEffect(() => {
    localStorage.setItem("data-item", JSON.stringify(dataItem));
  }, []);

  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem type="mobile" data={dataItem} />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem type="dekstop" data={dataItem} />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Detail;

interface GetStaticProps {
  params: {
    id: string;
  };
}

export const getStaticPaths = async () => {
  const data = await getFeaturedGame();
  const paths = data.map((item: GameItemTypes) => ({
    params: {
      id: item._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticProps) => {
  const { id } = params;
  const data = await getVoucherDetail(id);

  return {
    props: {
      dataItem: data.detail,
      nominals: data.detail.nominals,
      payments: data.payment,
    },
  };
};
