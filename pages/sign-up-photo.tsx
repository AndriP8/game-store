import { useRouter } from "next/router";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import { setSignUp } from "../services/auth";
import { getGameCategory } from "../services/player";
import { CategoryTypes } from "../services/data-types";
import "react-toastify/dist/ReactToastify.css";

function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("/icon/upload.svg");
  const [localForm, setLocalForm] = useState({
    name: "",
    email: "",
  });

  const router = useRouter();

  const getGameCategoyAPI = useCallback(async () => {
    const data = await getGameCategory();
    setCategories(data);
    setFavorite(data[0]._id);
  }, [getGameCategory]);

  useEffect(() => {
    getGameCategoyAPI();
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem("user-form");
    setLocalForm(JSON.parse(getLocalForm!));
  }, []);

  const onSubmit = async () => {
    const getLocalForm = localStorage.getItem("user-form");
    const form = JSON.parse(getLocalForm!);
    const data = new FormData();
    data.append("image", image);
    data.append("email", form.email);
    data.append("name", form.name);
    data.append("password", form.password);
    data.append("username", form.name);
    data.append("phoneNumber", "081234567");
    data.append("role", "user");
    data.append("status", "Y");
    data.append("favorite", favorite);
    const response = await setSignUp(data);

    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success("Register Berhasil");
      router.push("/sign-up-success");
      localStorage.removeItem("user-form");
    }
  };

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    <Image
                      src={imagePreview}
                      width={120}
                      height={120}
                      alt="upload-image"
                    />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      const img = e.target.files[0];
                      setImage(img);
                      setImagePreview(URL.createObjectURL(img));
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                {localForm?.name}
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                {localForm?.email}
              </p>
              <div className="pt-50 pb-50">
                <label
                  htmlFor="category"
                  className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                  Favorite Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={(e) => setFavorite(e.target.value)}
                >
                  {categories.map((category: CategoryTypes) => {
                    return (
                      <option key={category._id} value={category._id} selected>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                role="button"
                type="button"
                onClick={onSubmit}
              >
                Create My Account
              </button>
              <a
                className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                href="#"
                role="button"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}

export default SignUpPhoto;
