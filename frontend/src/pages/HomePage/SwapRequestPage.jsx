import { useState } from "react";
import SwapActionCard from "../../components/SwapActionCard";
import Pagination from "../../components/pagination";
import AppButton from "../../components/AppButton";
import Header from "../../components/Header";

const dummyRequests = [
  {
    id: 1,
    name: "Marc Demo",
    skillsOffered: ["JavaScript"],
    skillsWanted: ["Photoshop"],
    rating: 3.9,
    profilePhoto: "/profile1.png",
    status: "Pending",
  },
  {
    id: 2,
    name: "Michelle",
    skillsOffered: ["React", "Node.js"],
    skillsWanted: ["UX Design"],
    rating: 3.9,
    profilePhoto: "/profile2.png",
    status: "Rejected",
  },
];

const SwapRequestPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [requests, setRequests] = useState(dummyRequests);

  const handleAccept = (id) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "Accepted" } : req
      )
    );
  };

  const handleReject = (id) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "Rejected" } : req
      )
    );
  };

  return (
    <> 
     <Header
        title="Skill Swap Platform"
        showSearch={true}
        userProfile={{ name: "Krati", avatar: "/profile1.png" }}
      />
    <section className="row mx-0 py-5 justify-content-center">
      <div className="col-md-10 col-12 px-3">

        {/* Top Filter Row */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-3 col-6 mb-2">
            <select className="form-select">
              <option>Pending</option>
              <option>Accepted</option>
              <option>Rejected</option>
            </select>
          </div>
          <div className="col-md-7 col-6">
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
          <div className="col-md-2 col-12 text-end mt-2 mt-md-0">
            <AppButton variant="outline-primary" block>
              Home
            </AppButton>
          </div>
        </div>

        {/* Request Cards */}
        {requests.map((req) => (
          <SwapActionCard
            key={req.id}
            {...req}
            onAccept={() => handleAccept(req.id)}
            onReject={() => handleReject(req.id)}
          />
        ))}

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={3}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </section>
    </>
  );
};

export default SwapRequestPage;