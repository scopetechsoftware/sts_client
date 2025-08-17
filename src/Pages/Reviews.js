import React, { useState } from "react";
import { reviews as initialReviews } from "../data/review";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);

  const userProfile = {
    name: "John Doe",
    image: "" // leave blank to test fallback
  };

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment || rating === 0) return;

    const newReview = {
      name: userProfile.name,
      rating: rating.toString(),
      review: comment,
      src: userProfile.image
    };

    setReviews([newReview, ...reviews]);
    setComment("");
    setRating(0);
    setHover(null);
  };

  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

  // consistent background color for same name
  const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = Math.floor((Math.abs(Math.sin(hash) * 16777215)) % 16777215).toString(16);
    return `#${"0".repeat(6 - color.length) + color}`;
  };

  const renderAvatar = (src, name) => {
    if (src && src.trim() !== "") {
      return <img src={src} alt={name} style={styles.avatarImg} />;
    }
    return (
      <div style={{ 
        ...styles.avatarFallback, 
        backgroundColor: stringToColor(name || "?") 
      }}>
        {getInitial(name)}
      </div>
    );
  };

  const styles = {
    container: { padding: "20px", maxWidth: "900px", margin: "auto", fontFamily: "sans-serif" },
    title: { fontSize: "2rem", marginBottom: "20px", fontWeight: "bold", textAlign: "center" },
    reviewCard: { background: "#fff", borderRadius: "12px", padding: "15px", marginBottom: "15px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", display: "flex", gap: "15px" },
    avatarImg: { width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" },
    avatarFallback: { width: "50px", height: "50px", borderRadius: "50%", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem" },
    reviewBody: { flex: 1 },
    reviewName: { fontWeight: "bold", fontSize: "1rem", marginBottom: "4px" },
    reviewText: { marginTop: "5px", fontSize: "0.95rem", lineHeight: "1.4" },
    stars: { display: "flex", gap: "3px" },
    form: { marginTop: "30px", background: "#f8f9fa", padding: "20px", borderRadius: "10px" },
    formHeader: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" },
    input: { width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "0.95rem" },
    submitBtn: { marginTop: "10px", padding: "10px 15px", background: "#4f46e5", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student Reviews</h1>

      {/* Reviews List */}
      {reviews.map((r, i) => (
        <div key={i} style={styles.reviewCard}>
          {renderAvatar(r.src, r.name)}
          <div style={styles.reviewBody}>
            <div style={styles.reviewName}>{r.name}</div>
            <div style={styles.stars}>
              {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} color={idx < r.rating ? "#ffc107" : "#e4e5e9"} />
              ))}
            </div>
            <div style={styles.reviewText}>{r.review}</div>
          </div>
        </div>
      ))}

      {/* Review Form */}
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formHeader}>
          {renderAvatar(userProfile.image, userProfile.name)}
          <strong>{userProfile.name}</strong>
        </div>

        {/* Star Rating */}
        <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <FaStar
                key={index}
                size={28}
                color={starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                style={{ cursor: "pointer", transition: "color 0.2s" }}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(null)}
              />
            );
          })}
        </div>

        <textarea
          style={styles.input}
          rows="4"
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button style={styles.submitBtn} type="submit">
          Submit Review
        </button>
      </form>
    </div>
  );
}
