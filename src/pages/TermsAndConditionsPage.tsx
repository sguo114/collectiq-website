// src/pages/TermsAndConditionsPage.tsx
import { Link } from "react-router-dom";

function TermsAndConditionsPage() {
  return (
    <div className="main-content legal-content">
      <Link to="/" className="back-button" style={{ textDecoration: "none", display: "inline-block" }}>
        &larr; Back to Home
      </Link>
      <h1 className="section-title text-center">Terms and Conditions for Collectiq</h1>
      <section className="section">
        <p className="text-base mb-4">
          <strong>Effective Date: August 23, 2024</strong>
        </p>

        <p className="text-base mb-4">
          Welcome to Collectiq! These Terms and Conditions ("Terms") govern your access to and use of the Collectiq
          mobile application (the "App"), provided by Collectiq ("we," "our," or "us"). By accessing or using the App,
          you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of the terms, then
          you may not access the App.
        </p>

        <h2>1. Access and Use of the App</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <strong>Eligibility:</strong> You must be at least 13 years old to use the App. By using the App, you
            represent and warrant that you meet this age requirement.
          </li>
          <li>
            <strong>License to Use:</strong> We grant you a limited, non-exclusive, non-transferable, revocable license
            to use the App for your personal, non-commercial purposes, subject to these Terms.
          </li>
        </ul>

        <h2>2. User Accounts</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <strong>Account Creation:</strong> To access certain features of the App, you must register for an account
            using your email, a password, and a unique username. You agree to provide accurate, current, and complete
            information during the registration process and to update such information to keep it accurate, current, and
            complete.
          </li>
          <li>
            <strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your
            account login information (username and password) and for all activities that occur under your account. You
            agree to notify us immediately of any unauthorized use of your account.
          </li>
        </ul>

        <h2>3. User Content</h2>
        <p className="text-base mb-4">
          The App allows you to create, upload, post, link, store, share, and otherwise make available certain
          information, text, graphics, videos, or other material ("User Content").
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <strong>Ownership:</strong> You retain all ownership rights in your User Content. You are solely responsible
            for the User Content that you post on or through the App.
          </li>
          <li>
            <strong>Public vs. Private Collections:</strong> You can designate your collections as "public" or
            "private." Public collections and their associated items will be visible to all other App users. Private
            collections and their items will only be visible to you.
          </li>
          <li>
            <strong>License to Collectiq:</strong> By making your User Content available on or through the App
            (especially public collections), you grant Collectiq a worldwide, non-exclusive, royalty-free, transferable
            license to use, reproduce, distribute, prepare derivative works of, display, and perform that User Content
            in connection with the App and Collectiq's (and its successors' and affiliates') business, including without
            limitation for promoting and redistributing part or all of the App (and derivative works thereof) in any
            media formats and through any media channels. This license is solely for the purpose of operating,
            improving, and promoting the App.
          </li>
          <li>
            <strong>Representations and Warranties:</strong> You represent and warrant that your User Content does not
            violate any third-party rights, including copyright, trademark, privacy, publicity, or other personal or
            proprietary rights.
          </li>
        </ul>

        <h2>4. Prohibited Conduct</h2>
        <p className="text-base mb-4">You agree not to use the App to:</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            Post any User Content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar,
            obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise
            objectionable.
          </li>
          <li>
            Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person
            or entity.
          </li>
          <li>Interfere with or disrupt the App or servers or networks connected to the App.</li>
          <li>
            Upload, post, email, transmit, or otherwise make available any content that you do not have a right to make
            available under any law or under contractual or fiduciary relationships.
          </li>
          <li>
            Upload, post, email, transmit, or otherwise make available any unsolicited or unauthorized advertising,
            promotional materials, "junk mail," "spam," "chain letters," "pyramid schemes," or any other form of
            solicitation.
          </li>
          <li>
            Attempt to gain unauthorized access to the App, other user accounts, or computer systems or networks
            connected to the App.
          </li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p className="text-base mb-4">
          The App and its original content (excluding User Content), features, and functionality are and will remain the
          exclusive property of Collectiq and its licensors. The App is protected by copyright, trademark, and other
          laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in
          connection with any product or service without the prior written consent of Collectiq.
        </p>

        <h2>6. Links to Other Websites</h2>
        <p className="text-base mb-4">
          Our App may contain links to third-party websites or services that are not owned or controlled by Collectiq.
          We have no control over and assume no responsibility for the content, privacy policies, or practices of any
          third-party websites or services. You further acknowledge and agree that Collectiq shall not be responsible or
          liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with
          the use of or reliance on any such content, goods, or services available on or through any such websites or
          services.
        </p>

        <h2>7. Disclaimer of Warranties</h2>
        <p className="text-base mb-4">
          Your use of the App is at your sole risk. The App is provided on an "AS IS" and "AS AVAILABLE" basis. The App
          is provided without warranties of any kind, whether express or implied, including, but not limited to, implied
          warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p className="text-base mb-4">
          In no event shall Collectiq, nor its directors, employees, partners, agents, suppliers, or affiliates, be
          liable for any indirect, incidental, special, consequential, or punitive damages, including without
          limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access
          to or use of or inability to access or use the App; (ii) any conduct or content of any third party on the App;
          (iii) any content obtained from the App; and (iv) unauthorized access, use, or alteration of your
          transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal
          theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth
          herein is found to have failed of its essential purpose.
        </p>

        <h2>9. Indemnification</h2>
        <p className="text-base mb-4">
          You agree to defend, indemnify, and hold harmless Collectiq and its licensee and licensors, and their
          employees, contractors, agents, officers, and directors, from and against any and all claims, damages,
          obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees),
          resulting from or arising out of a) your use and access of the App, by you or any person using your account
          and password; b) a breach of these Terms, or c) Content posted on the App.
        </p>

        <h2>10. Governing Law</h2>
        <p className="text-base mb-4">
          These Terms shall be governed and construed in accordance with the laws of [Your State/Country, e.g., the
          State of California, United States], without regard to its conflict of law provisions.
        </p>

        <h2>11. Changes to Terms</h2>
        <p className="text-base mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
          material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a
          material change will be determined at our sole discretion. By continuing to access or use our App after those
          revisions become effective, you agree to be bound by the revised terms.
        </p>

        <h2>12. Termination</h2>
        <p className="text-base mb-4">
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason
          whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the App
          will immediately cease. If you wish to terminate your account, you may simply discontinue using the App and
          delete your account through the App settings.
        </p>

        <h2>13. Contact Us</h2>
        <p className="text-base mb-4">If you have any questions about these Terms, please contact us at:</p>
        <p className="text-base mb-4">
          Email: <a href="mailto:sguo114@gmail.com">sguo114@gmail.com</a>
        </p>
      </section>
    </div>
  );
}

export default TermsAndConditionsPage;
