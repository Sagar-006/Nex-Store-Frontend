const AboutPage = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center py-16 px-6">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">About NEX Store</h1>

        <p className="text-lg mb-6">
          NEX Store is a cutting-edge e-commerce platform dedicated to bringing
          you the latest in technology and innovation. Founded in 2023, we’ve
          quickly become a go-to destination for tech enthusiasts and early
          adopters.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-6">
          Our mission is to make the latest technology accessible to everyone.
          We believe that innovation should be within reach, and we strive to
          offer a curated selection of high-quality products at competitive
          prices.
        </p>

        <h2 className="text-2xl font-semibold mb-2">What Sets Us Apart</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            <strong>Curated Selection:</strong> We handpick every product in our
            store, ensuring only the best makes it to you.
          </li>
          <li>
            <strong>Expert Support:</strong> Our team of tech experts is always
            ready to assist you with any questions or concerns.
          </li>
          <li>
            <strong>Fast Shipping:</strong> We partner with top logistics
            providers to get your orders to you as quickly as possible.
          </li>
          <li>
            <strong>Secure Shopping:</strong> Your security is our priority. We
            use state-of-the-art encryption to protect your data.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-2">
          We’re always here to help. If you have any questions, concerns, or
          just want to chat about the latest tech, don’t hesitate to reach out
          to us at{" "}
          <a href="mailto:support@NEXstore.com" className="underline">
            support@NEXstore.com
          </a>
          or call us at 1-800-NEX-TECH.
        </p>

        <p className="mt-6 text-sm">
          NEX Store – Bringing the Future to Your Doorstep
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
