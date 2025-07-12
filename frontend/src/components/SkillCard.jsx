import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SkillCard = ({
  profilePhoto = 'https://via.placeholder.com/80x80?text=Photo',
  name = 'User Name',
  skillsOffered = [],
  skillsWanted = [],
  rating = 0,
  isLoggedIn = false,
  onRequest = () => {},
}) => {
  // Render skill badges
  const renderBadges = (skills, color) =>
    skills.map((skill, idx) => (
      <span key={idx} className={`badge bg-${color} me-2 mb-2`}>
        {skill}
      </span>
    ));

  return (
    <div className="card shadow-sm rounded-4 mb-4">
      <div className="card-body">
        <div className="row align-items-center row-cols-1 row-cols-md-3">
          {/* Profile Image */}
          <div className="col d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <img
              src={profilePhoto}
              alt="Profile"
              className="rounded-circle border border-2"
              style={{ width: 80, height: 80, objectFit: 'cover' }}
            />
          </div>

          {/* Name, Skills, Rating */}
          <div className="col">
            <h5 className="fw-bold mb-1">{name}</h5>
            <p className="text-muted small mb-2">⭐ {rating.toFixed(1)} / 5</p>
            <div className="mb-2">
              <strong className="text-success">Skills Offered:</strong><br />
              {renderBadges(skillsOffered, 'success')}
            </div>
            <div>
              <strong className="text-primary">Skills Wanted:</strong><br />
              {renderBadges(skillsWanted, 'primary')}
            </div>
          </div>

          {/* Request Button */}
          <div className="col text-md-end mt-3 mt-md-0">
            <button
              className="btn btn-info fw-semibold px-4"
              onClick={onRequest}
              disabled={!isLoggedIn}
            >
              Request
            </button>
            {!isLoggedIn && (
              <div className="text-danger small mt-2">Login required</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;