// src/pages/HomePage.tsx
import React from "react";

// IMPORTANT: Replace these with the actual paths to your images in the public/images folder
// For example: "/images/profile-page.jpg"
const screenshots = [
  "/images/profile-page.jpg", // Placeholder for profile-page.jpg
  "/images/explore-page.jpg", // Placeholder for explore-page.jpg
  "/images/collection-page.jpg", // Placeholder for collection-page.jpg
];

interface HomePageProps {
  setCurrentPage: (page: "home" | "privacy" | "terms") => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <main className="main-content">
      <header className="hero-section">
        <h1 className="hero-title">Collectiq: Your Ultimate Collection Tracker</h1>
        <p className="hero-tagline">Effortlessly manage, explore, and share your passion for collecting.</p>
        <div className="hero-buttons">
          <a
            href="https://apps.apple.com/us/app/collectiq/idYOURAPPID" // TODO: Replace with actual App Store link
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            Download on the App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.irohsdevhouse.collectiq" // TODO: Replace with actual Google Play link
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button secondary"
          >
            Get it on Google Play
          </a>
        </div>
      </header>

      {/* App Description Section */}
      <section className="section">
        <h2 className="section-title">About Collectiq</h2>
        <p className="section-text">
          Collectiq is designed for passionate collectors who want to keep track of their precious collections. Whether
          you collect stamps, cards, coins, or anything in between, Collectiq provides a seamless experience to
          categorize, document, and showcase your items. Follow other collectors, discover unique collections, and share
          your passion with a vibrant community. Each item in your collection can be extensively documented with photos,
          personal notes, and even purchase prices, making it a comprehensive digital archive of your cherished
          possessions.
        </p>
      </section>

      {/* Screenshots Section */}
      <section className="section">
        <h2 className="section-title">See Collectiq in Action</h2>
        <div className="screenshots-grid">
          {screenshots.map((src, index) => (
            <div key={index} className="screenshot-card">
              <img src={src} alt={`Collectiq Screenshot ${index + 1}`} className="w-full h-auto object-cover" />
              <p className="screenshot-card-caption">
                {index === 0
                  ? "Your Personalized Profile"
                  : index === 1
                  ? "Explore New Collections"
                  : "Detailed Collection View"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section text-center">
        <h2 className="section-title">Got Ideas or Feedback?</h2>
        <p className="section-text mb-6">
          We're always looking to improve Collectiq and value your input! Reach out to us with any suggestions, bug
          reports, or just to share your thoughts.
        </p>
        <a href="mailto:sguo114@gmail.com" className="contact-button">
          Email Us: sguo114@gmail.com
        </a>
      </section>
    </main>
  );
}

export default HomePage;
