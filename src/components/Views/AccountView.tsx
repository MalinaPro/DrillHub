import React from 'react';
import './AccountView.css';

const AccountView: React.FC = () => {
  return (
    <div className="account-view">
      <div className="account-header">
        <h1>Account</h1>
        <p>Manage your account settings and preferences</p>
      </div>
      
      <div className="account-content">
        <div className="account-section">
          <h2>Profile</h2>
          <div className="profile-info">
            <div className="avatar-section">
              <div className="avatar">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                </svg>
              </div>
              <button className="change-avatar-btn">Change Avatar</button>
            </div>
            <div className="profile-details">
              <div className="profile-item">
                <label>Display Name</label>
                <input type="text" defaultValue="John Doe" />
              </div>
              <div className="profile-item">
                <label>Email</label>
                <input type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="profile-item">
                <label>Username</label>
                <input type="text" defaultValue="johndoe" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="account-section">
          <h2>Subscription</h2>
          <div className="subscription-info">
            <div className="plan-card">
              <div className="plan-header">
                <h3>Pro Plan</h3>
                <span className="plan-badge">Active</span>
              </div>
              <p className="plan-description">Access to all premium features and unlimited projects</p>
              <div className="plan-details">
                <div className="plan-detail">
                  <span className="label">Next billing date:</span>
                  <span className="value">March 15, 2024</span>
                </div>
                <div className="plan-detail">
                  <span className="label">Amount:</span>
                  <span className="value">$9.99/month</span>
                </div>
              </div>
              <div className="plan-actions">
                <button className="btn-secondary">Change Plan</button>
                <button className="btn-secondary">Cancel Subscription</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="account-section">
          <h2>Security</h2>
          <div className="security-options">
            <div className="security-item">
              <div className="security-info">
                <h4>Password</h4>
                <p>Last changed 3 months ago</p>
              </div>
              <button className="btn-secondary">Change Password</button>
            </div>
            <div className="security-item">
              <div className="security-info">
                <h4>Two-Factor Authentication</h4>
                <p>Add an extra layer of security to your account</p>
              </div>
              <button className="btn-primary">Enable 2FA</button>
            </div>
            <div className="security-item">
              <div className="security-info">
                <h4>Active Sessions</h4>
                <p>Manage devices that are signed in to your account</p>
              </div>
              <button className="btn-secondary">View Sessions</button>
            </div>
          </div>
        </div>
        
        <div className="account-section danger-zone">
          <h2>Danger Zone</h2>
          <div className="danger-actions">
            <div className="danger-item">
              <div className="danger-info">
                <h4>Delete Account</h4>
                <p>Permanently delete your account and all associated data</p>
              </div>
              <button className="btn-danger">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountView;