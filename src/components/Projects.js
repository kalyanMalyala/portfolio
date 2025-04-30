import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      
      {/* Project 1: Salesforce Public Job Portal */}
      <div className="card">
        <h4><strong>Salesforce Public Job Portal with Experience Cloud – PPR International Jobs for Dubai UAE</strong></h4>
        <p>
          Led the architecture and implementation of a Salesforce-based public job portal to facilitate recruitment between India-based job seekers and UAE-based employers. The system captures, stores, and processes resumes and hiring requests while integrating with external tools for file storage, communication, and workflow automation.
        </p>
        
        <h3>Roles and Responsibilities:</h3>
        
        <h3><strong>Team Leadership & Project Ownership</strong></h3>
        <ul>
          <li>Led a 5-member Salesforce development team, allocating responsibilities for LWC components, data modeling, automation, UI design, and integration modules.</li>
          <li>Conducted sprint planning, code reviews, and client walkthroughs to ensure quality and timely delivery.</li>
        </ul>
        
        <h3><strong>Experience Cloud Site Development</strong></h3>
        <ul>
          <li>Built a public site using Salesforce Experience Builder (LWR template) with no-login access for job seekers and employers.</li>
          <li>Applied custom branding and configured for production deployment with custom domain (pprjobs.com).</li>
        </ul>

        <h3><strong>Lightning Web Components (LWC)</strong></h3>
        <ul>
          <li>Developed LWCs for:
            <ul>
              <li>Resume submission with file upload</li>
              <li>Employer job request form</li>
              <li>Public job listing viewer with dynamic filtering</li>
            </ul>
          </li>
          <li>Used lightning-record-edit-form, lightning-file-upload, and Apex for backend record creation and validation.</li>
        </ul>

        <h3><strong>Backend Architecture & Automation</strong></h3>
        <ul>
          <li>Created Candidate__c and Job_Request__c objects for structured record management.</li>
          <li>Configured record-triggered Flows for automatic email confirmations and admin alerts.</li>
          <li>Used Apex Controllers to handle dynamic data fetching, validation, and conditional logic.</li>
        </ul>

        <h3><strong>Integrations</strong></h3>
        <ul>
          <li><strong>Google Drive Integration:</strong> Implemented Apex-based file transfer logic to store uploaded resumes in structured folders via Drive API for external access and backup.</li>
          <li><strong>Zoho Mail / Gmail Integration:</strong> Auto-notification to admin and clients for each submission using email services.</li>
          <li><strong>Google Sheets API Integration (optional):</strong> Pushed summarized candidate/job request data to collaborative Google Sheets for offline HR access.</li>
          <li>Prepared architectural design for future WhatsApp API, payment gateway, and resume parsing API integration.</li>
        </ul>

        <h3><strong>Guest User Profile Configuration</strong></h3>
        <ul>
          <li>Customized Guest User Profile with secure access to Candidate__c and Job_Request__c objects.</li>
          <li>Ensured all forms and file uploads respect security model and are accessible without authentication.</li>
        </ul>

        <h3><strong>Deployment & Scalability</strong></h3>
        <ul>
          <li>Prepared for live deployment with Salesforce Domain Management, SSL enablement, and GoDaddy DNS routing.</li>
          <li>Documented future scalability roadmap with login portals, recruiter dashboards, analytics, and multilingual support.</li>
        </ul>
      </div>

      {/* Project 2: Sagitta's External Policy & Invoicing System */}
      <div className="card">
        <h4><strong>Project 2: Sagitta's External Policy and Invoicing System via REST APIs</strong></h4>
        <h3>Roles and Responsibilities:</h3>
        
        <h3><strong>Developed Apex Methods</strong></h3>
        <ul>
          <li>Implemented the checkAllFrontEndValidation method to validate Salesforce Opportunity records by performing comprehensive checks against business rules and integration requirements.</li>
          <li>Utilized WrapperData for structured data handling, providing validation results and error messages.</li>
          <li>Managed policy-related validations and interactions with external systems.</li>
        </ul>

        <h3><strong>Integration</strong></h3>
        <ul>
          <li>Integrated Salesforce with Sagitta to handle policy and invoice data using REST API. Managed data submission and updates through custom batch processes.</li>
          <li>Ensured seamless data exchange between Salesforce and external systems by validating and transforming data as required.</li>
        </ul>

        <h3><strong>Lightning Web Components (LWC)</strong></h3>
        <ul>
          <li>Designed and developed custom LWCs for user interaction and data display related to the integration and validation framework.</li>
          <li>Implemented frontend components to enhance user experience, including forms for policy creation and error handling displays.</li>
        </ul>

        <h3><strong>Triggers</strong></h3>
        <ul>
          <li>Created and managed triggers to handle record-level validations and updates based on business logic and integration requirements.</li>
          <li>Developed triggers to ensure that changes to Opportunity records trigger appropriate validation and data processing workflows.</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
