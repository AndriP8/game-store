import Link from "next/link";
import Image from "next/image";

function SignUpSucces() {
  return (
    <section className="sign-up-success mx-auto pt-md-179 pb-md-179 pt-150 pb-100">
      <div className="container-fluid">
        <div className="text-center">
          <Image
            src="/img/Sign-up-success.png"
            width={316}
            height={300}
            alt="icon-sign-up-success"
          />
        </div>
        <div className="pt-70 pb-md-50 pb-150">
          <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">
            Well Done!
          </h2>
          <p className="text-lg text-center color-palette-1 m-0">
            Kamu sudah bisa melakukan top up
            <br className="d-sm-block d-none" />
            dan menjadi pemenang!
          </p>
        </div>
        <div className="button-group d-flex flex-column mx-auto">
          <Link href="/sign-in">
            <button
              className="btn btn-top-up fw-medium text-lg text-white rounded-pill"
              role="button"
              type="button"
            >
              Top Up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignUpSucces;
