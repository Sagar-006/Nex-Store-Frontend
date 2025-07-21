const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col items-center px-6 py-12">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>

        <p>
          At ACME Store, we are committed to safeguarding your privacy. This
          Privacy Policy outlines how we collect, use, and protect your personal
          information.
        </p>

        <div>
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p>
            We collect the information you provide directly to us, such as when
            you create an account, place an order, or contact our support team.
            This information may include your name, email address, mailing
            address, phone number, and payment details.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            How We Use Your Information
          </h2>
          <p>
            We use your personal information to fulfill your orders, offer
            customer support, send promotional messages (if you’ve opted in),
            and enhance our services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Data Security</h2>
          <p>
            We employ a range of security practices to ensure the safety of your
            personal data. Please note that while we strive to protect your
            information, no method of transmission over the Internet or
            electronic storage can be guaranteed 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal
            information. Additionally, you may object to or limit certain
            processing of your data. To exercise your rights, please reach out
            to us.
          </p>
        </div>

        <p className="text-sm text-neutral-400">Last updated: 7/21/2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
