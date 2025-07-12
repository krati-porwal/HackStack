import UserProfileForm from "../../components/Form";
import Header from "../../components/Header";
import { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Lokesh Vyas",
    location: "Rishi Nagar",
    skillsOffered: ["Graphic Design", "Video Editing", "Photoshop"],
    skillsWanted: ["Python", "JavaScript", "Manager"],
    availability: "weekends",
    profile: "Public",
    avatar: "/profile1.png",
  });

  const handleUpdate = (updatedData) => {
    console.log("Updated user:", updatedData);
    setUser(updatedData);
  };

  return (
    <>
      <Header
        title="User profile"
        showSearch={false}
        userProfile={{ name: user.name, avatar: user.avatar }}
      />

      <section className="row mx-0 py-5 justify-content-center">
        <div className="col-md-10 col-12 px-3">
          <div className="row g-4">
            {/* Form Section */}
            <div className="col-md-8">
              <UserProfileForm
                initialValues={user}
                onSubmit={handleUpdate}
              />
            </div>

            {/* Profile Photo */}
            <div className="col-md-4 d-flex flex-column align-items-center">
              <img
                src={user.avatar || "https://via.placeholder.com/120"}
                alt="User Avatar"
                className="rounded-circle border border-2 mb-3"
                width={120}
                height={120}
                style={{ objectFit: "cover" }}
              />
              <div className="text-center">
                <button className="btn btn-sm btn-outline-primary me-2">Add/Edit</button>
                <button className="btn btn-sm btn-outline-danger">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;