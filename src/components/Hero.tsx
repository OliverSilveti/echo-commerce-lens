
import { Button } from "@/components/ui/button";
import { TrendingUp, Sparkles, Brain, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6 animate-fade-in">
                <Brain className="w-4 h-4 mr-2" />
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                AI-Powered Market Intelligence
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
                Your AI agent for smarter <span className="gradient-text">e-commerce</span> decisions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in">
                e-sights uses advanced AI to analyze millions of data points, delivering real-time insights on pricing, competitors, and market trends that drive your success.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button size="lg" className="text-md group">
                <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Start Free Trial
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-md">
                Watch AI in Action
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-6 animate-fade-in">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-background bg-primary/10 flex items-center justify-center font-semibold text-xs text-primary animate-scale-in`} style={{ animationDelay: `${i * 0.1}s` }}>
                      <Sparkles className="w-4 h-4" />
                    </div>
                  ))}
                </div>
                <p className="ml-4 text-sm text-muted-foreground">Trusted by <span className="font-semibold text-foreground">12,000+</span> AI-powered businesses</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-pulse"></div>
            <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden relative z-10 hover:shadow-3xl transition-all duration-300 hover-scale">
              <div className="p-4 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  <div className="ml-4 bg-muted rounded-md px-4 py-1 text-xs w-full flex items-center">
                    <Brain className="w-3 h-3 mr-2 text-primary" />
                    e-sights AI Dashboard
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-primary" />
                      AI Market Analysis
                    </h3>
                    <p className="text-sm text-muted-foreground">AI processed 2.4M data points • Last update: Now</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">AI Active</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/20">
                    <div className="text-sm text-muted-foreground mb-1 flex items-center">
                      <Brain className="w-3 h-3 mr-1" />
                      AI Price Optimization
                    </div>
                    <div className="text-2xl font-bold">+23%</div>
                    <div className="flex items-center space-x-1 text-green-600 text-xs">
                      <TrendingUp className="h-3 w-3" />
                      <span>Profit increase</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-4 rounded-lg border border-secondary/20">
                    <div className="text-sm text-muted-foreground mb-1 flex items-center">
                      <Zap className="w-3 h-3 mr-1" />
                      Market Position
                    </div>
                    <div className="text-2xl font-bold">Top 5%</div>
                    <div className="flex items-center space-x-1 text-green-600 text-xs">
                      <TrendingUp className="h-3 w-3" />
                      <span>AI-driven rank</span>
                    </div>
                  </div>
                </div>
                <div className="h-40 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg flex items-center justify-center border border-muted/50">
                  <div className="text-center">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-2 animate-pulse" />
                    <div className="text-muted-foreground text-sm">AI Analytics Engine</div>
                    <div className="text-xs text-muted-foreground">Real-time processing...</div>
                  </div>
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
