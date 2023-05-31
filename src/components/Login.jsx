import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputChange, setInputChange] = useState({ email: "", password: "" });
  const password = "password";
  const email = "admin@gmail.com";

  const handleEmailChange = (e) => {
    setInputChange((inputChange) => ({
      ...inputChange,
      email: e.target.value,
    }));
  };

  const handlePasswordChange = (e) => {
    setInputChange((inputChange) => ({
      ...inputChange,
      password: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputChange.email === email && inputChange.password === password) {
      navigate("/quotes");
    } else {
      alert("Credential Invalid");
    }
  };

  return (
    <div class="col-md-4 mt-5 pt-5 mx-auto ">
      <div class="d-grid gap-2">
        <p class="btn btn-primary">Login</p>
      </div>
      <div class="tab-content">
        <div
          class="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form>
            <div class="mt-5">
              <div class="form-outline my-4">
                <input
                  type="email"
                  id="loginName"
                  class="form-control textStyle"
                  value={inputChange.email}
                  onChange={handleEmailChange}
                  placeholder="email or username"
                />
              </div>

              <div class="form-outline my-4">
                <input
                  type="password"
                  id="loginPassword"
                  class="form-control textStyle"
                  placeholder="password"
                  value={inputChange.password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-md-6 d-flex justify-content-center">
                <div class="form-check mb-3 mb-md-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="loginCheck"
                    checked
                  />
                  <label class="form-check-label" for="loginCheck">
                    Remember me
                  </label>
                </div>
              </div>

              <div class="col-md-6 d-flex justify-content-center">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button
              type="submit"
              class="btn btn-primary btn-block mb-4"
              onClick={handleSubmit}
            >
              Log in
            </button>

            <div class="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
            </div>
          </form>
        </div>
        <div
          class="tab-pane fade"
          id="pills-register"
          role="tabpanel"
          aria-labelledby="tab-register"
        >
          {/*Register Form */}
          {/* <form>
            <div class="text-center mb-3">
              <p>Sign up with:</p>
              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-google"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-github"></i>
              </button>
            </div>

            <p class="text-center">or:</p>

            <div class="form-outline mb-4">
              <input type="text" id="registerName" class="form-control" />
              <label class="form-label" for="registerName">
                Name
              </label>
            </div>
            <div class="form-outline mb-4">
              <input type="text" id="registerUsername" class="form-control" />
              <label class="form-label" for="registerUsername">
                Username
              </label>
            </div>

            <div class="form-outline mb-4">
              <input type="email" id="registerEmail" class="form-control" />
              <label class="form-label" for="registerEmail">
                Email
              </label>
            </div>

            <div class="form-outline mb-4">
              <input
                type="password"
                id="registerPassword"
                class="form-control"
              />
              <label class="form-label" for="registerPassword">
                Password
              </label>
            </div>

            <div class="form-outline mb-4">
              <input
                type="password"
                id="registerRepeatPassword"
                class="form-control"
              />
              <label class="form-label" for="registerRepeatPassword">
                Repeat password
              </label>
            </div>

            <div class="form-check d-flex justify-content-center mb-4">
              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="registerCheck"
                checked
                aria-describedby="registerCheckHelpText"
              />
              <label class="form-check-label" for="registerCheck">
                I have read and agree to the terms
              </label>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-3">
              Sign in
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
