import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import jwtDecode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "../services/data-types";
import CheckoutConfirmation from "../components/organisms/CheckoutConfirmation";
import CheckoutDetail from "../components/organisms/CheckoutDetail";
import CheckoutItem from "../components/organisms/CheckoutItem";

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

function Checkout() {
  return (
    <>
      <Head>
        <title>GameStore | Checkout</title>
      </Head>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <Link href="/">
              <a>
                <Image src="/icon/logo.svg" height={60} width={60} />
              </a>
            </Link>
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>
          <CheckoutItem />
          <hr />
          <CheckoutDetail />
          <CheckoutConfirmation />
        </div>
      </section>
    </>
  );
}

export default Checkout;

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
