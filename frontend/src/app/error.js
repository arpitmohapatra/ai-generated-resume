"use client";

export default function Error() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>Something went wrong</h1>
      <p>Please try refreshing the page or go back to the home page.</p>
      <button
        onClick={() => (window.location.href = "/ai-generated-resume")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go to Home Page
      </button>
    </div>
  );
}
