import React, { useState } from "react";
import Header from "../../components/Header";
import AppButton from "../../components/AppButton";

const RequestPage = () => {
  const [form, setForm] = useState({
    offeredSkill: "",
    wantedSkill: "",
    message: "",
  });

  const userProfile = {
    name: "Marc Demo",
    profilePhoto: "/profile1.png",
    skillsOffered: ["JavaScript", "Python"],
    skillsWanted: ["UI/UX", "Graphic Designer"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Swap Request Submitted:", form);
  };

  return (
    <section className="row mx-0 justify-content-center py-5">
        <Header
        title="Skill Swap Platform"
        showSearch={true}
        userProfile={{ name: "Krati", avatar: "/profile1.png" }}
      />
      <div className="col-md-10 col-12 mt-4">
        <div className="row row-cols-1 row-cols-md-2 g-4">

          {/* Form Section */}
          <div className="col">
            <form className="p-4 border rounded-4 shadow-sm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Choose one of your offered skill
                </label>
                <select
                  name="offeredSkill"
                  className="form-select"
                  value={form.offeredSkill}
                  onChange={handleChange}
                >
                  <option value="">Select skill</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="React">React</option>
                  <option value="Photoshop">Photoshop</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Choose one of their wanted skills
                </label>
                <select
                  name="wantedSkill"
                  className="form-select"
                  value={form.wantedSkill}
                  onChange={handleChange}
                >
                  <option value="">Select skill</option>
                  {userProfile.skillsWanted.map((skill, i) => (
                    <option key={i} value={skill}>{skill}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="form-control"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <AppButton type="submit" variant="primary">
                Submit
              </AppButton>
            </form>
          </div>

          {/* Profile Section */}
          <div className="col">
            <div className="border rounded-4 p-4 shadow-sm">
              <div className="text-end mb-3">
                <AppButton variant="info" className="px-4">
                  Request
                </AppButton>
              </div>

              <h5 className="fw-bold mb-2">{userProfile.name}</h5>
              <p className="mb-2">
                <strong>Skills Offered:</strong>
              </p>
              <div className="mb-2">
                {userProfile.skillsOffered.map((skill, i) => (
                  <span key={i} className="badge bg-success me-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>

              <p className="mt-3 mb-2">
                <strong>Skills Wanted:</strong>
              </p>
              <div>
                {userProfile.skillsWanted.map((skill, i) => (
                  <span key={i} className="badge bg-primary me-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="text-center mt-4">
                <img
                  src={userProfile.profilePhoto}
                  alt="Profile"
                  className="rounded-circle border border-2"
                  style={{ width: 100, height: 100, objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RequestPage;