import React, { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch quote");
        return res.json();
      })
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Quote fetch error:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading quote...</p>;

  if (error)
    return (
      <p style={{ color: "#ccc" }}>
        “Stay focused and never give up.” — Unknown
      </p>
    );

  return (
    <blockquote style={{ fontStyle: "italic", marginBottom: "20px" }}>
      “{quote}” — <span style={{ fontWeight: "bold" }}>{author}</span>
    </blockquote>
  );
}

export default Quote;
