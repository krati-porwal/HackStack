import { useState } from "react";
import Button from "../../common/Button"; // If you have a custom button

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", form);
  };

  return (
    <section className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-dark text-light">
      <div className="row w-100 justify-content-center">
        <div className="col-md-5 col-10 border rounded p-5" style={{ borderColor: "#00ffff", borderWidth: 2 }}>
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-12">
                <label htmlFor="email" className="form-label fw-bold">Email</label>
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

            <div className="row mb-4">
              <div className="col-12">
                <label htmlFor="password" className="form-label fw-bold">Password</label>
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

            <div className="row justify-content-center mb-3">
              <div className="col-auto">
                <Button
                  type="submit"
                  label="Login"
                  className="rounded-circle px-4 py-2"
                  style={{ backgroundColor: "#00ffff", color: "#000", borderRadius: "50%" }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col text-center">
                <a href="/forgot-password" className="text-info text-decoration-none">
                  Forgot username/password
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
