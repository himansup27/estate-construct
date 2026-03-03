import React from 'react';
import { Shield, Lock, Eye, UserCheck, FileText, Mail, Share2 } from 'lucide-react';
const PrivacyPolicyPage = () => {
return (
<div className="pt-20">
{/* Hero Section */}
<section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary-800/60 via-primary-900/90 to-primary-900/95 z-10"></div>
<img 
       src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600" 
       alt="Privacy Policy" 
       className="absolute inset-0 w-full h-full object-cover"
     />

     <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
      <Shield className="text-accent-600 mx-auto mb-6" size={64} />
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-xl text-gray-300">
        Last updated: January 16, 2026
      </p>
    </div>
  </section>

  {/* Content */}
  <section className="py-20 bg-primary-900">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 md:p-12 space-y-8">
          
          {/* Introduction */}
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <FileText className="text-accent-600" size={32} />
              Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              At Estate & Construct, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Eye className="text-accent-600" size={32} />
              Information We Collect
            </h2>
            
            <h3 className="text-xl font-bold mb-3 mt-6">Personal Information</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Register on the website</li>
              <li>Express interest in obtaining information about us or our products and services</li>
              <li>Participate in activities on the website</li>
              <li>Contact us via email, phone, or contact forms</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-6">Information Collected Includes:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Property preferences and search history</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <UserCheck className="text-accent-600" size={32} />
              How We Use Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect or receive:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>To provide, operate, and maintain our services</li>
              <li>To improve, personalize, and expand our services</li>
              <li>To understand and analyze how you use our website</li>
              <li>To communicate with you about properties, services, and updates</li>
              <li>To process your transactions and manage your orders</li>
              <li>To send you marketing and promotional communications (with your consent)</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To detect, prevent, and address technical issues and fraudulent activity</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Share2 className="text-accent-600" size={32} />
              Information Sharing and Disclosure
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, sale, or acquisition</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests</li>
              <li><strong>With Your Consent:</strong> We may share your information with third parties when you give us explicit consent to do so</li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Lock className="text-accent-600" size={32} />
              Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information by authorized personnel only</li>
              <li>Secure data storage and backup procedures</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </div>

          {/* Your Privacy Rights */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Your Privacy Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Access:</strong> You can request copies of your personal information</li>
              <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> You can request deletion of your personal information</li>
              <li><strong>Objection:</strong> You can object to the processing of your personal information</li>
              <li><strong>Restriction:</strong> You can request restriction of processing your personal information</li>
              <li><strong>Data Portability:</strong> You can request transfer of your data to another organization</li>
              <li><strong>Withdraw Consent:</strong> You can withdraw your consent at any time</li>
            </ul>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Types of cookies we use:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for marketing purposes</li>
              <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
            </ul>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Third-Party Websites</h2>
            <p className="text-gray-300 leading-relaxed">
              Our website may contain links to third-party websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.
            </p>
          </div>

          {/* Changes to Privacy Policy */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-accent-600/10 border border-accent-600/30 rounded-lg p-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Mail className="text-accent-600" size={32} />
              Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="text-gray-300 space-y-2">
              <p><strong>Email:</strong> privacy@estateconstruct.com</p>
              <p><strong>Phone:</strong> +929 333 9296</p>
              <p><strong>Address:</strong> 742 Evergreen Terrace, Brooklyn, NY 11201</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</div>

);
};
export default PrivacyPolicyPage;