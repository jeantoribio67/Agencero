import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary/20">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h2:mt-12 prose-h2:border-b prose-h2:pb-4 prose-a:text-primary">
          <h1>TERMS OF SERVICE</h1>

          <p><strong>Last Updated: June 2026</strong></p>

          <p>
            <strong>Agencero LLC</strong><br />
            <strong><a href="https://agencero.com/terms-of-service" className="text-primary hover:underline">agencero.com</a></strong><br />
            <strong>611 South DuPont Highway Suite 102, Dover, Delaware, 19901</strong>
          </p>

          <hr className="my-8" />

          <h2>1. AGREEMENT TO TERMS</h2>

          <p>By accessing our website, signing up for our services, or making any payment to Agencero LLC ("Company," "we," "us," or "our"), you ("Client," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our services.</p>

          <p>These Terms constitute a legally binding agreement between you and Agencero LLC, a business entity registered in the State of Delaware.</p>

          <hr className="my-8" />

          <h2>2. DESCRIPTION OF SERVICES</h2>

          <p>Agencero LLC provides an AI-powered receptionist service ("Service") designed to answer inbound calls on behalf of the Client when the Client is unavailable. The Service includes:</p>

          <ul>
            <li>AI-powered call answering and handling</li>
            <li>Automated appointment and estimate booking directly into the Client's designated calendar</li>
            <li>Call transcripts delivered after each handled call</li>
            <li>Instant notification to the Client via text message upon call completion</li>
            <li>Monthly performance reports summarizing call volume and activity</li>
          </ul>

          <p>The Service is designed to operate as an overflow solution, activating when the Client's primary line is unanswered after a designated number of rings.</p>

          <hr className="my-8" />

          <h2>3. SUBSCRIPTION PLANS AND BILLING</h2>

          <h3>3.1 Base Subscription</h3>
          <p>The standard monthly subscription is <strong>$500.00 per month</strong>, which includes up to <strong>250 minutes</strong> of AI call handling per calendar month.</p>

          <h3>3.2 Overage Charges</h3>
          <p>Minutes used in excess of the included 250 minutes are billed at <strong>$0.50 per minute</strong>. Overage charges are calculated at the end of each billing cycle and added to the following month's invoice.</p>

          <h3>3.3 Billing Cycle</h3>
          <p>Billing occurs on the same date each month corresponding to your original sign-up date. Invoices are generated automatically and charged to the payment method on file.</p>

          <h3>3.4 Payment Methods</h3>
          <p>We accept major credit cards and ACH bank transfers processed through our payment processor. By providing payment information you authorize Agencero LLC to charge your payment method on a recurring monthly basis until the subscription is cancelled in accordance with these Terms.</p>

          <h3>3.5 Failed Payments</h3>
          <p>If a payment fails, we will attempt to collect payment up to three times over seven days. If payment cannot be collected after three attempts, your service will be suspended until payment is received. Agencero LLC reserves the right to charge a $25 reactivation fee for suspended accounts.</p>

          <h3>3.6 Price Changes</h3>
          <p>Agencero LLC reserves the right to modify subscription pricing with <strong>30 days written notice</strong> to the Client. Continued use of the Service after the notice period constitutes acceptance of the new pricing.</p>

          <hr className="my-8" />

          <h2>4. FREE TRIAL AND SATISFACTION GUARANTEE</h2>

          <h3>4.1 30-Day Satisfaction Guarantee</h3>
          <p>New Clients are eligible for a full refund of their first month's subscription fee if the following conditions are met:</p>

          <ul>
            <li>The refund request is submitted in writing within 30 days of the subscription start date</li>
            <li>The AI system was properly configured and activated during the trial period</li>
            <li>The Client's phone system was correctly forwarded to the Service number</li>
            <li>At least one inbound call was received and handled by the AI during the trial period</li>
          </ul>

          <p>Overage charges are non-refundable. The satisfaction guarantee applies to first-time subscribers only and may not be used more than once per business entity.</p>

          <h3>4.2 Refund Process</h3>
          <p>Approved refunds will be processed within 5-10 business days to the original payment method.</p>

          <hr className="my-8" />

          <h2>5. CALL RECORDING AND TRANSCRIPTION</h2>

          <h3>5.1 Consent to Recording</h3>
          <p><strong>By activating the Service, Client acknowledges and agrees that all calls handled by the AI system will be recorded and transcribed.</strong> It is the Client's sole responsibility to ensure compliance with all applicable federal, state, and local laws regarding call recording consent, including but not limited to the Electronic Communications Privacy Act (ECPA) and any applicable state wiretapping or recording statutes.</p>

          <h3>5.2 Two-Party Consent States</h3>
          <p>Some states require all parties to a call to consent to recording. Client assumes all legal liability for compliance with applicable recording consent laws in their jurisdiction and in the jurisdiction of their callers.</p>

          <h3>5.3 Transcript Delivery</h3>
          <p>Call transcripts are provided to the Client for business purposes only. Transcripts may contain personally identifiable information of third-party callers. Client agrees to handle such information in accordance with all applicable privacy laws.</p>

          <h3>5.4 Data Retention</h3>
          <p>Call recordings and transcripts are retained for a period of <strong>90 days</strong> from the date of the call. After 90 days, recordings are permanently deleted. Transcripts may be retained longer at the Client's request for an additional fee.</p>

          <hr className="my-8" />

          <h2>6. CALENDAR INTEGRATION AND BOOKING</h2>

          <h3>6.1 Calendar Access</h3>
          <p>The Service requires integration with the Client's designated calendar system (Google Calendar or equivalent). By enabling this integration, Client grants Agencero LLC and its AI system permission to read, create, and modify calendar events solely for the purpose of booking appointments on the Client's behalf.</p>

          <h3>6.2 Booking Accuracy</h3>
          <p>Agencero LLC will make reasonable efforts to ensure appointments are booked accurately based on the Client's availability. However, Agencero LLC does not guarantee the accuracy of all bookings and is not liable for scheduling errors, double bookings, or missed appointments resulting from calendar configuration issues, system outages, or third-party calendar service failures.</p>

          <h3>6.3 Client Responsibility</h3>
          <p>Client is responsible for maintaining accurate availability in their calendar, promptly notifying Agencero LLC of changes to booking preferences, and verifying all AI-booked appointments before confirming with their end customers.</p>

          <hr className="my-8" />

          <h2>7. AI SYSTEM PERFORMANCE AND LIMITATIONS</h2>

          <h3>7.1 No Guarantee of Performance</h3>
          <p>The AI system is designed to handle inbound calls professionally and efficiently. However, Agencero LLC does not guarantee that the AI will:</p>

          <ul>
            <li>Answer every call without interruption or delay</li>
            <li>Correctly interpret every caller's request</li>
            <li>Book every appointment accurately</li>
            <li>Perform without technical errors or system outages</li>
          </ul>

          <h3>7.2 System Availability</h3>
          <p>Agencero LLC targets <strong>99% system uptime</strong> but does not guarantee uninterrupted service. Scheduled maintenance, carrier outages, and third-party service disruptions may temporarily affect Service availability. Agencero LLC will make reasonable efforts to notify Clients of planned maintenance in advance.</p>

          <h3>7.3 AI Limitations</h3>
          <p>The AI system may not perform optimally in situations involving:</p>

          <ul>
            <li>Heavy background noise on the caller's end</li>
            <li>Thick or regional accents</li>
            <li>Highly technical or unusual caller requests outside standard roofing inquiries</li>
            <li>Caller attempts to circumvent or confuse the AI system</li>
          </ul>

          <h3>7.4 Not a Replacement for Human Staff</h3>
          <p>The Service is designed as a supplemental overflow tool and is not intended to replace human receptionists, office staff, or direct client communication entirely.</p>

          <hr className="my-8" />

          <h2>8. CLIENT RESPONSIBILITIES</h2>

          <p>Client agrees to:</p>

          <ul>
            <li>Provide accurate business information during onboarding including business name, address, services offered, and scheduling preferences</li>
            <li>Configure call forwarding correctly to route unanswered calls to the Service number provided</li>
            <li>Maintain an active and accessible calendar integration at all times</li>
            <li>Promptly respond to AI-booked appointments and follow up with prospective customers</li>
            <li>Notify Agencero LLC of any changes to business hours, services offered, or scheduling preferences</li>
            <li>Not use the Service for any unlawful purpose or in violation of any applicable laws or regulations</li>
            <li>Not attempt to reverse engineer, copy, or replicate the AI system</li>
          </ul>

          <hr className="my-8" />

          <h2>9. TCPA COMPLIANCE</h2>

          <p>The Service handles inbound calls only and does not make outbound calls on behalf of the Client. However, Client acknowledges that:</p>

          <ul>
            <li>All calls received through the Service may be recorded as described in Section 5</li>
            <li>Client is solely responsible for ensuring their business phone number and call forwarding practices comply with the Telephone Consumer Protection Act (TCPA) and all applicable FCC regulations</li>
            <li>Agencero LLC is not liable for any TCPA violations arising from the Client's use of the Service or their independent business practices</li>
          </ul>

          <hr className="my-8" />

          <h2>10. DATA PRIVACY AND SECURITY</h2>

          <h3>10.1 Data We Collect</h3>
          <p>In providing the Service, Agencero LLC may collect and process:</p>

          <ul>
            <li>Call recordings and transcripts</li>
            <li>Caller contact information provided during calls</li>
            <li>Calendar data necessary for appointment booking</li>
            <li>Client account and billing information</li>
          </ul>

          <h3>10.2 Data Use</h3>
          <p>Collected data is used solely to provide the Service and improve system performance. Agencero LLC does not sell Client data or caller data to third parties.</p>

          <h3>10.3 Third-Party Services</h3>
          <p>The Service integrates with third-party platforms including but not limited to calendar services, telephony providers, and payment processors. Each third party's data practices are governed by their own privacy policies. Agencero LLC is not responsible for third-party data handling.</p>

          <h3>10.4 California Residents</h3>
          <p>If Client or their callers are California residents, additional rights may apply under the California Consumer Privacy Act (CCPA).</p>

          <h3>10.5 Security</h3>
          <p>Agencero LLC implements reasonable technical and organizational measures to protect data against unauthorized access, loss, or disclosure. However, no system is completely secure and Agencero LLC cannot guarantee absolute data security.</p>

          <hr className="my-8" />

          <h2>11. CANCELLATION POLICY</h2>

          <h3>11.1 Client Cancellation</h3>
          <p>Client may cancel the Service at any time by providing written notice to Agencero LLC via email at jeantoribio@agencero.com. Cancellation takes effect at the end of the current billing cycle. No partial month refunds are provided.</p>

          <h3>11.2 Cancellation Process</h3>
          <p>To cancel, Client must:</p>

          <ul>
            <li>Submit a written cancellation request to jeantoribio@agencero.com</li>
            <li>Receive written confirmation of cancellation from Agencero LLC</li>
            <li>Continue to have access to the Service through the end of the paid billing period</li>
          </ul>

          <h3>11.3 Effect of Cancellation</h3>
          <p>Upon cancellation:</p>

          <ul>
            <li>Service access will terminate at the end of the billing period</li>
            <li>Call recordings and transcripts will be retained for 90 days then permanently deleted</li>
            <li>Calendar integrations will be disconnected</li>
            <li>Any outstanding overage charges will be billed on the final invoice</li>
          </ul>

          <h3>11.4 Agencero LLC Right to Terminate</h3>
          <p>Agencero LLC reserves the right to terminate or suspend Service immediately without notice if Client:</p>

          <ul>
            <li>Violates any provision of these Terms</li>
            <li>Fails to make payment after three collection attempts</li>
            <li>Uses the Service for unlawful purposes</li>
            <li>Engages in abusive behavior toward Agencero LLC staff</li>
          </ul>

          <hr className="my-8" />

          <h2>12. LIMITATION OF LIABILITY</h2>

          <h3>12.1 Maximum Liability</h3>
          <p className="uppercase">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AGENCERO LLC'S TOTAL LIABILITY TO CLIENT FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY CLIENT TO AGENCERO LLC IN THE THREE MONTHS IMMEDIATELY PRECEDING THE CLAIM.</p>

          <h3>12.2 Exclusion of Consequential Damages</h3>
          <p className="uppercase">IN NO EVENT SHALL AGENCERO LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF BUSINESS OPPORTUNITY, OR LOSS OF DATA, EVEN IF AGENCERO LLC HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>

          <h3>12.3 Specific Exclusions</h3>
          <p>Agencero LLC is not liable for:</p>

          <ul>
            <li>Missed calls due to incorrect call forwarding configuration by the Client</li>
            <li>Lost business resulting from AI booking errors or system downtime</li>
            <li>Actions or statements made by the AI system during calls</li>
            <li>Third-party service outages affecting call handling or calendar integration</li>
            <li>Unauthorized access to Client data resulting from Client's failure to secure their account credentials</li>
          </ul>

          <hr className="my-8" />

          <h2>13. INDEMNIFICATION</h2>

          <p>Client agrees to indemnify, defend, and hold harmless Agencero LLC and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to:</p>

          <ul>
            <li>Client's use of the Service</li>
            <li>Client's violation of these Terms</li>
            <li>Client's violation of any applicable law or regulation</li>
            <li>Any claim by a third party arising from calls handled by the AI system on Client's behalf</li>
            <li>Client's failure to obtain required call recording consents</li>
          </ul>

          <hr className="my-8" />

          <h2>14. DISPUTE RESOLUTION</h2>

          <h3>14.1 Governing Law</h3>
          <p>These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.</p>

          <h3>14.2 Jurisdiction</h3>
          <p>Any dispute arising out of or related to these Terms or the Service shall be resolved exclusively in the state or federal courts located in Kent County, Texas. Both parties consent to personal jurisdiction in such courts.</p>

          <h3>14.3 Informal Resolution</h3>
          <p>Before initiating any legal proceeding, both parties agree to attempt to resolve any dispute informally by contacting the other party in writing and attempting to negotiate in good faith for a period of 30 days.</p>

          <h3>14.4 Arbitration</h3>

          <hr className="my-8" />

          <h2>15. INTELLECTUAL PROPERTY</h2>

          <h3>15.1 Our IP</h3>
          <p>All aspects of the Service including the AI system, software, scripts, branding, and proprietary processes are the exclusive intellectual property of Agencero LLC. Client is granted a limited, non-exclusive, non-transferable license to use the Service solely for their internal business purposes during the subscription period.</p>

          <h3>15.2 Client IP</h3>
          <p>Client retains ownership of all business information, call recordings, transcripts, and data generated through their use of the Service.</p>

          <h3>15.3 Feedback</h3>
          <p>If Client provides feedback or suggestions regarding the Service, Agencero LLC may use such feedback without obligation or compensation to the Client.</p>

          <hr className="my-8" />

          <h2>16. MODIFICATIONS TO TERMS</h2>

          <p>Agencero LLC reserves the right to modify these Terms at any time. Changes will be communicated via email to the address on file with at least <strong>14 days notice</strong> before taking effect. Continued use of the Service after the effective date constitutes acceptance of the modified Terms. If Client does not agree to the modified Terms, Client must cancel the Service before the effective date.</p>

          <hr className="my-8" />

          <h2>17. ENTIRE AGREEMENT</h2>

          <p>These Terms, together with any order forms or service agreements signed by both parties, constitute the entire agreement between Client and Agencero LLC regarding the Service and supersede all prior agreements, representations, and understandings. No modification of these Terms is valid unless made in writing and signed by an authorized representative of Agencero LLC.</p>

          <hr className="my-8" />

          <h2>18. SEVERABILITY</h2>

          <p>If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining Terms will otherwise remain in full force and effect.</p>

          <hr className="my-8" />

          <h2>19. WAIVER</h2>

          <p>Failure by Agencero LLC to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision.</p>

          <hr className="my-8" />

          <h2>20. CONTACT INFORMATION</h2>

          <p>For questions, cancellations, or legal notices:</p>

          <p>
            <strong>Agencero LLC</strong><br />
            Email: jeantoribio@agencero.com<br />
            Address: 611 South DuPont Highway Suite 102, Dover, Delaware, 19901<br />
            Phone: +18176705386
          </p>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
