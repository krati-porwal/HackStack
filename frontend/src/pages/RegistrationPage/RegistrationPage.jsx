import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/AppButton"; // Reusable button
import Header from "../../components/Header";

const RegistrationPage = () => {
  const navigate = useNavigate();
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
    navigate("/login"); // Redirect to login after successful registration
  };

  return (
    <>
    <Header/>
    <section className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 justify-content-center">
        <div
          className="col-md-6 col-11 border rounded p-5"
          style={{ borderColor: "#00ffff", borderWidth: 2 }}
        >
          <form onSubmit={handleSubmit}>
            <h2 className="text-center mb-4 text-info fw-bold">
              Create Your Account
            </h2>

            {["name", "email", "password", "confirmPassword"].map((field) => (
              <div className="mb-3" key={field}>
                <label
                  htmlFor={field}
                  className="form-label fw-semibold text-capitalize"
                >
                  {field === "confirmPassword"
                    ? "Confirm Password"
                    : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field.includes("password") ? "password" : "text"}
                  id={field}
                  name={field}
                  className="form-control border-info"
                  value={form[field]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <div className="text-center my-4">
              <Button
                type="submit"
                className="rounded-pill px-4 py-2 fw-bold"
                style={{
                  backgroundColor: "#00ffff",
                  color: "#000",
                  border: "none",
                }}
              >
                Register
              </Button>
            </div>

            <div className="text-center">
              <p>
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-info text-decoration-none fw-semibold"
                >
                  Login here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default RegistrationPage;
