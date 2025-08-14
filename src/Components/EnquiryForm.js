import React, { useState, useEffect } from "react";


export default function EnquiryForm() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    location: "",
    phone: "",
    message: ""
  });

   useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 2000);

    return () => clearTimeout(timer); // cleanup if component unmounts
  }, []);

  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.course) newErrors.course = "Course is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validate()
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setShowForm(false);
      setFormData({
        name: "",
        email: "",
        course: "",
        location: "",
        phone: "",
        message: ""
      });
    }
  };

  return (
    <>
      <button className="en-floating-btn" onClick={toggleForm}>
  Enquiry <i className="fas fa-arrow-down"></i>


      </button>

      {showForm && (
        <div className="en-form-overlay" onClick={toggleForm}>
          <div
            className="en-form-container"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="en-form-title"> Enquiry Form</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="en-input"
              />
              {errors.name && <span className="en-error">{errors.name}</span>}

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="en-input"
              />
              {errors.email && <span className="en-error">{errors.email}</span>}

              <input
                type="text"
                name="course"
                placeholder="Course You Want"
                value={formData.course}
                onChange={handleChange}
                className="en-input"
              />
              {errors.course && (
                <span className="en-error">{errors.course}</span>
              )}

              <input
                type="text"
                name="location"
                placeholder="Your Location"
                value={formData.location}
                onChange={handleChange}
                className="en-input"
              />
              {errors.location && (
                <span className="en-error">{errors.location}</span>
              )}

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="en-input"
              />
              {errors.phone && (
                <span className="en-error">{errors.phone}</span>
              )}

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="en-textarea"
              ></textarea>
              {errors.message && (
                <span className="en-error">{errors.message}</span>
              )}

              <button type="submit" className="en-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
