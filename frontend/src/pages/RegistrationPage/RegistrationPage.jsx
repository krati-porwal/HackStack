import { useState } from "react";
import Button from "../../common/Button"; // Replace with actual import path

const RegistrationPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Registering:", form);
    // Add registration logic here
  };

  return (
    <section className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-dark text-light">
      <div className="row w-100 justify-content-center">
        <div className="col-md-6 col-11 border rounded p-5" style={{ borderColor: "#00ffff", borderWidth: 2 }}>
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-12">
                <label htmlFor="name" className="form-label fw-bold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control border border-info"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-12">
                <label htmlFor="email" className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
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
                  id="password"
                  name="password"
                  className="form-control border border-info"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-12">
                <label htmlFor="confirmPassword" className="form-label fw-bold">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control border border-info"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row justify-content-center mb-3">
              <div className="col-auto">
                <Button
                  type="submit"
                  label="Register"
                  className="rounded-circle px-4 py-2"
                  style={{ backgroundColor: "#00ffff", color: "#000", borderRadius: "50%" }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col text-center">
                <a href="/login" className="text-info text-decoration-none">
                  Already have an account? Login
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
