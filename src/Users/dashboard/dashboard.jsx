import React from 'react';
import { Navbar } from '../components/Navbar';
import { CarouselSection } from './components/Carousel';
import { SafetyTipsSection } from './components/SafetyTips';
import { LatestNews } from './components/LatestNews';
import { NewsUpdates } from './components/NewsUpdates';
import { carouselItems, safetyTips, newsItems, newsUpdates } from './data/dashboardData';
import '../components/Navbar.css';
import './styles/Carousel.css';
import './styles/SafetyTips.css';
import './styles/LatestNews.css';
import './styles/NewsUpdates.css';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          <div className="dashboard-content">
            {/* Left Section - Carousel and Latest News */}
            <div className="main-content">
              <CarouselSection items={carouselItems} />
              <LatestNews newsItems={newsItems} />
            </div>

            {/* Right Section - Safety Tips and News Updates */}
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
