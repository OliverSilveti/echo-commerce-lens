
import { Button } from "@/components/ui/button";
import { Brain, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary to-secondary text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            <span className="flex h-2 w-2 rounded-full bg-white mr-2 animate-pulse"></span>
            AI-Powered Intelligence
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to let AI transform your e-commerce strategy?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of successful businesses using e-sights AI agent to make smarter, data-driven decisions and outperform competitors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 group">
              <Sparkles className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Start AI Analysis Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              See AI Demo
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">No credit card required • AI starts working in 60 seconds</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
