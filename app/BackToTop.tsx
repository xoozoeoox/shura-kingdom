"use client";

export default function BackToTop() {
  return (
    <button
      className="back-to-top"
      type="button"
      aria-label="回到頁首"
      title="回到頁首"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path className="back-to-top-shadow" d="M5 12h4V8h4V4h6v4h4v4h4v14H5z" />
        <path className="back-to-top-roof" d="M7 12h4V8h3V5h4v3h3v4h4v3H7z" />
        <path className="back-to-top-tower" d="M10 15h12v11H10z" />
        <path className="back-to-top-arrow" d="M14 23v-5h-3l5-5 5 5h-3v5z" />
      </svg>
    </button>
  );
}
