import React from 'react';
import '../styles/DashboardLayout.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">Analytics Dashboard</div>
        
        <nav>
          <ul>
            <li><a href="#">Upload Data</a></li>
            <li><a href="#">View Charts</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Area */}
      <main className="content-area">
        <h1>Welcome, User</h1>
        <div className="content-box">
          <h2>Dashboard Overview</h2>
          <p>This is where your charts and data analytics will appear.</p>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
