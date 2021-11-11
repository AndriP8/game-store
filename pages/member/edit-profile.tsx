import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import InputForm from "../../components/atoms/input";
import Sidebar from "../../components/organisms/SideBar";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";
import { updateProfile } from "../../services/member";

function EditProfile() {
  const [user, setuser] = useState({
    _id: "",
    name: "",
    email: "",
    phoneNumber: "",
    avatar: "",
  });

  const [imagePreview, setImagePreview] = useState("/icon/upload.svg");

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    const jwtToken = atob(token);
    const payload: JWTPayloadTypes = jwtDecode(jwtToken);
    const userFromPayload: UserTypes = payload.player;
    setuser(userFromPayload);
    setImagePreview(userFromPayload?.avatar);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", user.avatar);
    data.append("name", user.name);

    const response = await updateProfile(data);
    if (response.error) {
      toast.error(response.message);
    } else {
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };

  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <Image
                        src={imagePreview}
                        width={90}
                        height={90}
                        className="avatar img-fluid rounded-circle"
                        alt="avatar"
                      />
                    ) : (
                      <Image
                        src={user?.avatar}
                        width={90}
                        height={90}
                        className="avatar img-fluid rounded-circle "
                        alt="avatar"
                      />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      const img = e.target.files[0];
                      setImagePreview(URL.createObjectURL(img));
                      return setuser({ ...user, avatar: img });
                    }}
                  />
                </div>
              </div>
              <InputForm
                label="Full Name"
                labelFor="name"
                type="text"
                placeholder="Enter your name"
                value={user.name}
                onChange={(e) => setuser({ ...user, name: e.target.value })}
              />
              <InputForm
                label="Email Addres"
                labelFor="email"
                type="email"
                placeholder="Enter your email address"
                disabled
              />
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="submit"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  onClick={onSubmit}
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}

export default EditProfile;
