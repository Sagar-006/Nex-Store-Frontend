import { Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-white text-gray-700 py-10 px-6  border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-md">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li>Find A Store</li>
            <li>Become A Member</li>
            <li>Running Shoe Finder</li>
            <li>Product Advice</li>
            <li>Education Discounts</li>
            <li>Send Us Feedback</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-3">Help</h3>
          <ul className="space-y-2">
            <li>Get Help</li>
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li onClick={() => navigate('/about')} className="cursor-pointer">About Nex</li>
            <li onClick={() => navigate('/terms')} className="cursor-pointer">Terms & conditions</li>
            <li>Careers</li>
            <li onClick={() => navigate('/terms')} className="cursor-pointer">Privacy Policy </li>
            <li>Sustainability</li>
            <li>Impact</li>
            {/* <li>Report a Concern</li> */}
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-10 text-s text-gray-600 gap-4">
        <p>© 2025 NEX STORE, Inc. All rights reserved</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <span>Guides</span>
          <span>Terms of Sale</span>
          <span>Terms of Use</span>
          <span>Nex Privacy Policy</span>
          <span>Privacy Settings</span>
        </div>
        <div className="flex items-center gap-1">
          <Globe className="w-4 h-4" />
          <span>India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
