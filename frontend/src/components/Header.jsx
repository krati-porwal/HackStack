import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({
  title = "Skill Swap Platform",
  onSearch,
  userProfile = null,
  showSearch = true,
  showUserProfile = true,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="bg-white shadow-sm border-bottom">
      <div className="container-fluid">
        <div className="row align-items-center py-3">
          {/* Logo and Title */}
          <div className="col-md-3 col-lg-2">
            <div className="d-flex align-items-center">
              <div
                className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{ width: "40px", height: "40px" }}
              >
                <span className="text-white fw-bold">H</span>
              </div>
              <h1 className="h4 mb-0 text-primary fw-bold">{title}</h1>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-md-6 col-lg-7 d-none d-md-block">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link fw-medium" to="/swap-requests">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-medium" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-medium" to="/request">
                    Request
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="col-md-3 col-lg-2">
              <form onSubmit={handleSearch} className="d-flex">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-end-0"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    className="btn btn-outline-secondary border-start-0"
                    type="submit"
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* User Profile or Auth Buttons */}
          {showUserProfile && (
            <div className="col-md-3 col-lg-1">
              <div className="d-flex align-items-center justify-content-end">
                {userProfile ? (
                  <div className="dropdown">
                    <button
                      className="btn btn-link text-decoration-none dropdown-toggle d-flex align-items-center"
                      type="button"
                      id="userDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={
                          userProfile.avatar ||
                          "https://via.placeholder.com/32x32"
                        }
                        alt="Profile"
                        className="rounded-circle me-2"
                        width="32"
                        height="32"
                      />
                      <span className="text-dark">{userProfile.name}</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="userDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/settings">
                          Settings
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/logout">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="d-flex gap-2">
                    <Link to="/login" className="btn btn-outline-primary btn-sm">
                      Login
                    </Link>
                    <Link to="/register" className="btn btn-primary btn-sm">
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;