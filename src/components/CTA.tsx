
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your e-commerce strategy with data?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of successful businesses using MarketPulse to make smarter, data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
