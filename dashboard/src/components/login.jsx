import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userData, setuserData] = useState("");
  const navigate = useNavigate();

  const oHautConnection = (user) => {
    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        type: "Oauth2",
        name: user.name,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setuserData("");
        setuserData(data.data);
        console.log(data.data);
        localStorage.setItem("user", JSON.stringify(data.data));
        navigate("/dashboard");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const object = {};

    //Transformation de  l'objet formData en json
    data.forEach((value, key) => {
      if (object.hasOwnProperty(key)) {
        if (!Array.isArray(object[key])) {
          object[key] = [object[key]];
        }
        object[key].push(value);
      } else {
        object[key] = value;
      }
    });

    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: object.email,
        password: object.password,
      }),
    })
      .then((response) => {
        // console.log(response);
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then((data) => {
        setuserData(data);
        if (data.name != undefined) {
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/dashboard");
        }
      });
  };
  return (
    <div>
      <div class="grid lg:grid-cols-5 md:grid-cols-2 items-center gap-y-4 h-full">
        <div class="max-md:order-1 lg:col-span-3 md:h-screen w-full bg-[#000842] md:rounded-tr-xl md:rounded-br-xl lg:p-12 p-8">
          <img
            src="https://readymadeui.com/signin-image.webp"
            class="lg:w-2/3 w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div class="lg:col-span-2 w-full p-8 max-w-lg max-md:max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            <div class="mb-8">
              <h1 class="text-slate-900 text-3xl font-bold">Sign in</h1>
              <p class="text-[15px] mt-6 text-slate-600">
                Don't have an account
                <Link
                  to="/register"
                  class="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </Link>
              </p>
            </div>
            <p>{userData.error}</p>
            <div class="space-y-6">
              <div>
                <label class="text-slate-900 text-[15px] font-medium mb-2 block">
                  Email
                </label>
                <div class="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    class="w-full text-sm text-slate-900 bg-slate-100 focus:bg-transparent pl-4 pr-10 py-3.5 rounded-md border border-gray-200 focus:border-blue-600 outline-none"
                    placeholder="Enter email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clip-path="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div>
                <label class="text-slate-900 text-[15px] font-medium mb-2 block">
                  Password
                </label>
                <div class="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    class="w-full text-sm text-slate-900 bg-slate-100 focus:bg-transparent pl-4 pr-10 py-3.5 rounded-md border border-gray-200 focus:border-blue-600 outline-none"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded-md"
                  />
                  <label
                    for="remember-me"
                    class="ml-3 block text-[15px] text-slate-900"
                  >
                    Remember me
                  </label>
                </div>
                <div></div>
              </div>
            </div>

            <div class="mt-12">
              <button class="w-full py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                Sign in
              </button>
            </div>

            <div class="my-4 flex items-center gap-4">
              <hr class="w-full border-slate-300" />
              <p class="text-sm text-slate-900 text-center">or</p>
              <hr class="w-full border-slate-300" />
            </div>

            <GoogleLogin
              type="button"
              onSuccess={(credentialResponse) => {
                const donnee = jwtDecode(credentialResponse.credential);
                const user = {
                  name: donnee.name,
                  password: donnee.aud,
                  email: donnee.email,
                };
                oHautConnection(user);
              }}
              onError={() => console.log("Login failled")}
              auto_select={true}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
