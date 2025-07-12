import { useState } from "react";
import Pagination from "../../components/pagination";
import SkillCard from "../../components/SkillCard";
import AppButton from "../../components/AppButton";


const dummyProfiles = [
  {
    id: 1,
    name: "Marc Demo",
    skillsOffered: ["JavaScript", "Python"],
    skillsWanted: ["UI/UX", "Graphic Designer"],
    rating: 3.9,
    profilePhoto: "/profile1.png",
  },
  {
    id: 2,
    name: "Michell",
    skillsOffered: ["JavaScript"],
    skillsWanted: ["Graphic Designer"],
    rating: 2.5,
    profilePhoto: "/profile2.png",
  },
  {
    id: 3,
    name: "Joe Wills",
    skillsOffered: ["Java", "Python"],
    skillsWanted: ["UI/UX", "React"],
    rating: 4.0,
    profilePhoto: "/profile3.png",
  },
];

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRequestClick = (profileId) => {
    if (!isLoggedIn) {
      alert("Please login to send a request.");
    } else {
      console.log(`Request sent to profile ID: ${profileId}`);
    }
  };

  return (
    <section className="row mx-0 py-5 justify-content-center">
      <div className="col-md-10 col-12 px-3">

        {/* Top Bar: Availability + Search + Login */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-4 col-12 mb-2 mb-md-0">
            <select className="form-select">
              <option>Availability</option>
              <option>Weekends</option>
              <option>Evenings</option>
            </select>
          </div>
          <div className="col-md-6 col-8">
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
          <div className="col-md-2 col-4 text-end">
            <AppButton variant="outline-primary" block onClick={() => setIsLoggedIn(true)}>
              {isLoggedIn ? "Logged In" : "Login"}
            </AppButton>
          </div>
        </div>

        {/* Profile Cards */}
        {dummyProfiles.map((profile) => (
          <SkillCard
            key={profile.id}
            name={profile.name}
            skillsOffered={profile.skillsOffered}
            skillsWanted={profile.skillsWanted}
            rating={profile.rating}
            profilePhoto={profile.profilePhoto}
            isLoggedIn={isLoggedIn}
            onRequest={() => handleRequestClick(profile.id)}
          />
        ))}

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={7}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </section>
  );
};

export default LandingPage;