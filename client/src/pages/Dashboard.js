import React, { useState, useEffect } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // 🔗 Import the external CSS file

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    jobTitle: "",
    company: "",
    applicationDate: "",
    status: "Applied",
    notes: "",
  });
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
    } else {
      fetchJobs();
    }
  }, []);

  // Fetch jobs from backend
  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data);
    } catch (err) {
      console.error("Failed to load jobs", err);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await API.put(`/jobs/${editingId}`, form);
        alert("Job updated!");
      } else {
        await API.post("/jobs", form);
        alert("Job added!");
      }

      setForm({
        jobTitle: "",
        company: "",
        applicationDate: "",
        status: "Applied",
        notes: "",
      });
      setEditingId(null);
      fetchJobs();
    } catch (err) {
      console.error(err);
      alert("Error submitting job");
    }
  };

  // Handle job delete
  const deleteJob = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      await API.delete(`/jobs/${id}`);
      fetchJobs();
    } catch (err) {
      console.error(err);
      alert("Failed to delete job");
    }
  };

  // Load job into form for editing
  const startEditing = (job) => {
    setEditingId(job._id);
    setForm({
      jobTitle: job.jobTitle,
      company: job.company,
      applicationDate: job.applicationDate?.slice(0, 10),
      status: job.status,
      notes: job.notes,
    });
  };

  // Logout handler
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Header with Logout */}
      <div className="dashboard-header">
        <h2>Job Tracker Dashboard</h2>
        <button onClick={logoutHandler} className="logout-button">
          Logout
        </button>
      </div>

      {/* Job Form */}
      <form onSubmit={handleSubmit} className="job-form">
        <input
          placeholder="Job Title"
          value={form.jobTitle}
          onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
          required
        />
        <input
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          required
        />
        <input
          type="date"
          value={form.applicationDate}
          onChange={(e) =>
            setForm({ ...form, applicationDate: e.target.value })
          }
          required
        />
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <textarea
          placeholder="Notes"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />
        <button type="submit">{editingId ? "Update Job" : "Add Job"}</button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm({
                jobTitle: "",
                company: "",
                applicationDate: "",
                status: "Applied",
                notes: "",
              });
            }}
          >
            Cancel Edit
          </button>
        )}
      </form>

      <hr />

      {/* Job List */}
      <h3>My Job Applications:</h3>
      {jobs.length === 0 ? (
        <p>No jobs added yet.</p>
      ) : (
        jobs.map((job) => (
          <div key={job._id} className="job-card">
            <h4>
              {job.jobTitle} at {job.company}
            </h4>
            <p>Date: {job.applicationDate?.slice(0, 10)}</p>
            <p>Status: {job.status}</p>
            <p>Notes: {job.notes}</p>

            <button onClick={() => startEditing(job)}>Edit</button>
            <button onClick={() => deleteJob(job._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
