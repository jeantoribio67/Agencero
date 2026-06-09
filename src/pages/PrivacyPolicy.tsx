import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary/20">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h2:mt-12 prose-h2:border-b prose-h2:pb-4 prose-a:text-primary">
          <h1>PRIVACY POLICY</h1>

          <p><strong>Last Updated: June 2026</strong></p>

          <p>
            <strong>Agencero LLC</strong><br />
            <strong><a href="https://agencero.com" className="hover:underline">agencero.com</a></strong><br />
            <strong>611 South DuPont Highway Suite 102, Dover, Delaware, 19901</strong>
          </p>

          <hr className="my-8" />

          <h2>1. INFORMATION WE COLLECT</h2>
          <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, and other information you choose to provide.</p>

          <h2>2. HOW WE USE YOUR INFORMATION</h2>
          <p>We may use the information we collect about you to:</p>
          <ul>
            <li>Provide, maintain, and improve our Services.</li>
            <li>Process transactions and send you related information.</li>
            <li>Send you technical notices, updates, security alerts, and support messages.</li>
            <li>Respond to your comments, questions, and requests.</li>
          </ul>

          <h2>3. SHARING OF INFORMATION</h2>
          <p>We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows:</p>
          <ul>
            <li>With third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
            <li>In response to a request for information if we believe disclosure is in accordance with, or is otherwise required by, any applicable law, regulation, or legal process.</li>
          </ul>

          <h2>4. CONTACT US</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at jeantoribio@agencero.com.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
