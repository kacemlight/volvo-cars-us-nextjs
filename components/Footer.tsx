// Footer component
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-volvo-blue text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">VOLVO CARS</h3>
            <p className="text-gray-200">Swedish Safety and Innovation</p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Models</h4>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-white">XC90</a></li>
              <li><a href="#" className="hover:text-white">XC60</a></li>
              <li><a href="#" className="hover:text-white">S90</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Sitemap</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-volvo-lightblue pt-8 text-center text-gray-200">
          <p>&copy; {currentYear} Volvo Cars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
