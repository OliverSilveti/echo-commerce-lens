
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg w-8 h-8 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">e-sights</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">AI</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-primary">Features</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary">How It Works</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="text-sm">Log In</Button>
          <Button className="text-sm">Get Started</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-500 hover:text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-white border-b border-gray-200">
          <nav className="flex flex-col space-y-3">
            <a 
              href="#features" 
              className="text-sm font-medium hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-3 pt-3 border-t border-gray-200">
              <Button variant="outline" className="text-sm w-full">Log In</Button>
              <Button className="text-sm w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
