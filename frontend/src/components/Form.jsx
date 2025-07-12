import { useState } from "react";

const UserProfileForm = ({ initialValues = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    skillsOffered: [],
    skillsWanted: [],
    availability: "",
    profile: "Public",
    ...initialValues,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiInput = (name, values) => {
    setFormData((prev) => ({ ...prev, [name]: values }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">

        <div className="col-md-6 col-12">
          <label className="form-label fw-semibold">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 col-12">
          <label className="form-label fw-semibold">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 col-12">
          <label className="form-label fw-semibold">Skills Offered</label>
          <input
            type="text"
            className="form-control"
            placeholder="Comma-separated skills (e.g., Design, React)"
            value={formData.skillsOffered.join(", ")}
            onChange={(e) =>
              handleMultiInput("skillsOffered", e.target.value.split(",").map(s => s.trim()))
            }
          />
        </div>

        <div className="col-md-6 col-12">
          <label className="form-label fw-semibold">Skills Wanted</label>
          <input
            type="text"
            className="form-control"
            placeholder="Comma-separated skills"
            value={formData.skillsWanted.join(", ")}
            onChange={(e) =>
              handleMultiInput("skillsWanted", e.target.value.split(",").map(s => s.trim()))
            }
          />
        </div>

        <div className="col-md-6 col-12">
          <label className="form-label fw-semibold">Availability</label>
          <input
            type="text"
            className="form-control"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 col-12">
          <label className="form-label fw-semibold">Profile</label>
          <select
            className="form-select"
            name="profile"
            value={formData.profile}
            onChange={handleChange}
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>

        <div className="col-12 d-flex justify-content-end gap-3 mt-3">
          <button type="button" className="btn btn-outline-danger">Discard</button>
          <button type="submit" className="btn btn-success">Save</button>
        </div>

      </div>
    </form>
  );
};

export default UserProfileForm;
