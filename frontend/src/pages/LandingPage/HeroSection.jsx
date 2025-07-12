import { useState } from "react";
import Header from "../../components/Header";
import Pagination from "../../components/pagination";
import SkillCard from "../../components/SkillCard";

const HeroSection = () => {
   
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add logic to fetch new data here
  }
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
    </>
  );
};

export default HeroSection;