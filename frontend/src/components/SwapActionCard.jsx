const SwapActionCard = ({
  profilePhoto,
  name,
  skillsOffered,
  skillsWanted,
  rating,
  status, // "Pending" | "Accepted" | "Rejected"
  onAccept,
  onReject,
}) => {
  const renderBadges = (skills, color) =>
    skills.map((skill, idx) => (
      <span key={idx} className={`badge bg-${color} me-2 mb-2`}>
        {skill}
      </span>
    ));

  return (
    <div className="card shadow-sm rounded-4 mb-4">
      <div className="card-body">
        <div className="row row-cols-1 row-cols-md-3 align-items-center">
          {/* Profile Image */}
          <div className="col d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <img
              src={profilePhoto}
              alt="Profile"
              className="rounded-circle border border-2"
              style={{ width: 80, height: 80, objectFit: "cover" }}
            />
          </div>

          {/* Name, Skills, Rating */}
          <div className="col">
            <h5 className="fw-bold mb-1">{name}</h5>
            <p className="text-muted small mb-2">⭐ {rating.toFixed(1)} / 5</p>
            <div className="mb-2">
              <strong className="text-success">Skills Offered:</strong>
              <br />
              {renderBadges(skillsOffered, "success")}
            </div>
            <div>
              <strong className="text-primary">Skills Wanted:</strong>
              <br />
              {renderBadges(skillsWanted, "primary")}
            </div>
          </div>

          {/* Status + Actions */}
          <div className="col text-md-end mt-3 mt-md-0">
            <div className="mb-2 fw-semibold">
              Status:{" "}
              <span
                className={
                  status === "Pending"
                    ? "text-secondary"
                    : status === "Accepted"
                    ? "text-success"
                    : "text-danger"
                }
              >
                {status}
              </span>
            </div>
            {status === "Pending" && (
              <div>
                <button className="btn btn-success me-2" onClick={onAccept}>
                  Accept
                </button>
                <button className="btn btn-danger" onClick={onReject}>
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapActionCard;