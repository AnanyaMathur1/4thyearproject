
import React from "react";
import Layout from "../../components/Layouts/Layout";
import UserMenu from "../../components/Layouts/UserMenu";
import Profile from "./Profile"; // Import the Profile component
import { useAuth } from "../../context/auth";
import "../../styles/Otherstyles.css";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - projectlab"}>
      <div className="container-fluid m-3 p-3 dashboard dashboard-list">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <Profile /> {/* Use the Profile component as a tag here */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
