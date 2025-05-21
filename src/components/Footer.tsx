
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-lg w-8 h-8"></div>
              <span className="text-xl font-bold">MarketPulse</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Empowering e-commerce businesses with real-time market intelligence and competitive insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-primary">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Reviews</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">API Reference</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 MarketPulse. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
