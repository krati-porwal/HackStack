import { useState } from "react";
import Header from "../../components/Header";
import Pagination from "../../components/pagination";
import SkillCard from "../../components/SkillCard";
import UserProfileForm from "../../components/Form";

const HeroSection = () => {
   
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add logic to fetch new data here
  }
    //form
    const handleSave = (data) => {
    console.log("Submitted Data:", data);
  };
  return (
    <>
      <Header />
      <SkillCard
        name="Krati"
        profilePhoto="https://example.com/krati.jpg"
        skillsOffered={["React", "Python"]}
        skillsWanted={["DevOps", "System Design"]}
        rating={4.8}
        isLoggedIn={true}
        onRequest={() => alert("Requested")}
      />
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

       <section className="row mx-0 py-5 justify-content-center">
      <div className="col-md-8 col-12 px-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>User Profile</h3>
          <img src="/avatar.png" alt="Profile" style={{ width: 50, borderRadius: "50%" }} />
        </div>
        <UserProfileForm onSubmit={handleSave} />
      </div>
    </section>
    </>
  );
};

export default HeroSection;