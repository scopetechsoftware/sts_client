// src/pages/Consultancy.js
import React, { useState } from "react";


const Consultancy = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    joiningDate: "",
    currentCTC: "",
    expectedCTC: "",
    shift: "",
    experience: "",
    position: "",
    source: "",
    reason: "",
    coverLetter: "",
  });
  const [errors, setErrors] = useState({});

  // 🔹 Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        return value.trim() ? "" : "Full name is required";
      case "phone":
        return /^[0-9]{10}$/.test(value)
          ? ""
          : "Phone must be 10 digits";
      case "email":
        return /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email address";
      case "joiningDate":
        return value ? "" : "Joining date is required";
      case "position":
        return value ? "" : "Please select a position";
      default:
        return "";
    }
  };

  // 🔹 Handle input change + live validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  // 🔹 Submit validation
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted ✅", formData);
      setShowForm(false);
    }
  };

  return (
    <div className="cs-container">
      {/* Header */}
      <header className="cs-header">
        <h1 className="cs-title">STS Consultancy</h1>
        <p className="cs-subtitle">
          STS located in Madurai, is a leading training and skill development
          institute dedicated to bridging the gap between education and industry needs.
        </p>
      </header>

   

      {/* Job Postings */}
      <section className="cs-section">
     
        <button className="cs-btn" onClick={() => setShowForm(true)}>
          Start with Us
        </button>
      </section>

      {/* Popup Form */}
      {showForm && (
        <div className="cs-modal">
          <div className="cs-modal-content">
            <h2 className="cs-form-heading">Apply & Join BLAZE</h2>
            <form onSubmit={handleSubmit} className="cs-form">
            <div className="scroll-cs">
              {[
                { label: "Full Name *", name: "fullName", type: "text" },
                { label: "Phone Number *", name: "phone", type: "tel" },
                { label: "Email *", name: "email", type: "email" },
                { label: "Expected Joining Date *", name: "joiningDate", type: "date" },
              ].map((field, idx) => (
                <div key={idx}>
                  <label>{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    min={field.type === "date" ? new Date().toISOString().split("T")[0] : undefined}
                    onChange={handleChange}
                  />
                  {errors[field.name] && (
                    <span className="cs-error">{errors[field.name]}</span>
                  )}
                </div>
              ))}

              {/* Current & Expected CTC */}
              <label>Current CTC</label>
              <input
                type="text"
                name="currentCTC"
                value={formData.currentCTC}
                onChange={handleChange}
              />
              <label>Expected CTC</label>
              <input
                type="text"
                name="expectedCTC"
                value={formData.expectedCTC}
                onChange={handleChange}
              />

              {/* Work shift */}
              <label>Work Shift Availability</label>
              <select name="shift" value={formData.shift} onChange={handleChange}>
                <option value="">Select</option>
                <option>11AM to 7PM</option>
                <option>2PM to 10PM</option>
                <option>4PM to 1AM</option>
              </select>

              {/* Experience */}
              <label>Experience</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Fresher</option>
                <option>Less than 1 year</option>
                <option>1 to 2.5 Years</option>
                <option>2.5 to 4 Years</option>
                <option>4 to 7 Years</option>
                <option>7+ Years</option>
                <option>Internship</option>
              </select>

              {/* Applying for */}
              <label>Applying for *</label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>PHP Developer</option>
                <option>JS Frontend Developer</option>
                <option>JS Backend Developer</option>
                <option>Full Stack Developer</option>
                <option>Mobile App Developer</option>
                <option>UI/UX Developer</option>
                <option>QA Tester</option>
              </select>
              {errors.position && <span className="cs-error">{errors.position}</span>}

              {/* Source */}
              <label>How did you find about BLAZE?</label>
              <input
                type="text"
                name="source"
                value={formData.source}
                onChange={handleChange}
              />

              {/* Reason */}
              <label>Reason for switching</label>
              <input
                type="text"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
              />

              {/* Cover Letter */}
              <label>Cover Letter</label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
              />
            </div>
              {/* Sticky Footer Actions */}
              <div className="cs-form-actions">
                <button
                  type="button"
                  className="cs-btn-outline"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="cs-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Consultancy;
