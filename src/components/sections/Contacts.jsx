import React, { useState, useEffect } from "react";
import GlassBlock from "../GlassBlock";

const Contacts = ({ title, contacts }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <GlassBlock delay={0.1}>
      <h2
        style={{
          color: "#fff",
          marginTop: "0",
          fontSize: isMobile ? "1.3rem" : "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "0.8rem",
          color: "rgba(255, 255, 255, 0.9)",
          fontSize: isMobile ? "0.85rem" : "0.9rem",
        }}
      >
        <a
          href={`mailto:${contacts.email}`}
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span>{contacts.email}</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{contacts.location}</span>
        </div>
        {/* <a
          href={`tel:${contacts.phone.replace(/\s/g, "")}`}
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>{contacts.phone}</span>
          </a>*/}
        <a
          href={`https://${contacts.github}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            wordBreak: "break-all",
            color: "rgba(255, 255, 255, 0.9)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span>github.com</span>
        </a>
        <a
          href={`https://t.me/${contacts.telegram.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          <span>Telegram.org</span>
        </a>
        {contacts.linkedin && (
          <a
            href={`https://${contacts.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              wordBreak: "break-all",
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span>linkedin.com</span>
          </a>
        )}
        {contacts.headhunter && (
          <a
            href={`https://${contacts.headhunter}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              wordBreak: "break-all",
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span>HeadHunter.kz</span>
          </a>
        )}
      </div>
    </GlassBlock>
  );
};
export default Contacts;
