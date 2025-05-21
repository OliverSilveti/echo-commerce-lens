
import { Button } from "@/components/ui/button";
import { TrendingUp, LineChart, PieChart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Real-time Market Intelligence
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Make smarter <span className="gradient-text">e-commerce</span> decisions with data
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Get instant insights into pricing trends, competitor movements, and market opportunities to optimize your e-commerce strategy.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-md">
                Start Free Trial
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-md">
                Schedule Demo
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-6">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-background bg-primary/10 flex items-center justify-center font-semibold text-xs text-primary`}>
                      {i}K+
                    </div>
                  ))}
                </div>
                <p className="ml-4 text-sm text-muted-foreground">Trusted by <span className="font-semibold text-foreground">12,000+</span> e-commerce brands</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
            <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden relative z-10">
              <div className="p-4 border-b border-border bg-muted/30">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 bg-muted rounded-md px-4 py-1 text-xs w-full">MarketPulse Dashboard</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold">Market Overview</h3>
                    <p className="text-sm text-muted-foreground">Last updated: Today, 10:45 AM</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LineChart className="h-5 w-5 text-primary" />
                    <PieChart className="h-5 w-5 text-secondary" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Price Competitiveness</div>
                    <div className="text-2xl font-bold">87%</div>
                    <div className="flex items-center space-x-1 text-green-600 text-xs">
                      <TrendingUp className="h-3 w-3" />
                      <span>+2.4%</span>
                    </div>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Market Position</div>
                    <div className="text-2xl font-bold">Top 10%</div>
                    <div className="flex items-center space-x-1 text-green-600 text-xs">
                      <TrendingUp className="h-3 w-3" />
                      <span>+1.2%</span>
                    </div>
                  </div>
                </div>
                <div className="h-40 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-muted-foreground">Interactive Analytics Dashboard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
