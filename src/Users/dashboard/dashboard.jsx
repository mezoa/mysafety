import React from 'react';
import { Navbar } from '../components/Navbar';
import { CarouselSection } from './components/Carousel';
import { SafetyTipsSection } from './components/SafetyTips';
import { LatestNews } from './components/LatestNews';
import NewsUpdates from './components/NewsUpdates';
import { carouselItems, safetyTips, newsItems, newsUpdates } from './data/dashboardData';
import '../components/Navbar.css';
import './styles/Carousel.css';
import './styles/SafetyTips.css';
import './styles/LatestNews.css';
import './styles/NewsUpdates.css';
import './Dashboard.css';
import { CampusMap } from './components/CampusMap';
import './styles/CampusMap.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          <div className="dashboard-content">
            {/* Left Section */}
            <div className="main-content">
              <CarouselSection items={carouselItems} />
              <LatestNews newsItems={newsItems} />
              <div className="campus-map-section">
                <h2 style={{ marginBottom: '20px'}}>Campus Map</h2>
                <CampusMap />
              </div>
            </div>

            {/* Right Section */}
            <div className="sidebar">
              <SafetyTipsSection tips={safetyTips} />
              <NewsUpdates updates={newsUpdates} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
