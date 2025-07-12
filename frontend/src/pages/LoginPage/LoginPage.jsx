import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/AppButton"; // Your reusable button
import Header from "../../components/Header";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", form);
    // Add your login logic here
  };

  return (
    <>
    <Header/>
    <section className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 justify-content-center">
        <div
          className="col-md-5 col-10 border rounded p-5"
          style={{ borderColor: "#00ffff", borderWidth: 2 }}
        >
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="row mb-4">
              <div className="col-12">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control border border-info"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="row mb-4">
              <div className="col-12">
                <label htmlFor="password" className="form-label fw-bold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control border border-info"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="row justify-content-center mb-3">
              <div className="col-auto">
                <Button
                  type="submit"
                  className="rounded-pill px-4 py-2 fw-bold"
                  variant="primary"
                  style={{
                    backgroundColor: "#00ffff",
                    color: "#000",
                    border: "none",
                  }}
                >
                  Login
                </Button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="row mb-2">
              <div className="col text-center">
                <Link
                  to="/forgot-password"
                  className="text-info text-decoration-none"
                >
                  Forgot username/password
                </Link>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="row">
              <div className="col text-center">
                <span className="text-light">Don't have an account?</span>{" "}
                <Link to="/register" className="text-info text-decoration-none">
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default LoginPage;
