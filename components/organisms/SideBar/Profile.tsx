import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Image from "next/image";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";

function Profile() {
  const [user, setuser] = useState({
    avatar: "/img/avatar.png",
    name: "",
    email: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      setuser(userFromPayload);
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <Image
        src={user.avatar}
        width={90}
        height={90}
        className="img-fluid mb-20 rounded-circle"
        alt="profile"
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}

export default Profile;
