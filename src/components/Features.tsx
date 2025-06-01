
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Bot, Zap, Eye, TrendingUp, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "AI-Powered Price Intelligence",
      description: "Our AI agent continuously monitors and analyzes competitor pricing, automatically suggesting optimal price points for maximum profitability.",
      highlight: "Smart AI"
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "Autonomous Competitor Tracking",
      description: "AI agents work 24/7 to track competitor activities, product launches, and strategic moves, delivering insights while you sleep.",
      highlight: "24/7 AI Agent"
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Predictive Market Trends",
      description: "Machine learning algorithms analyze patterns to forecast market trends and consumer behavior before they happen.",
      highlight: "Predictive AI"
    },
    {
      icon: <Eye className="h-10 w-10 text-primary" />,
      title: "Real-time Market Vision",
      description: "AI-powered data collection from multiple marketplaces provides instant visibility into market changes and opportunities.",
      highlight: "Real-time AI"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Intelligent Benchmarking",
      description: "AI compares your performance against industry standards and top competitors with smart, actionable recommendations.",
      highlight: "AI Insights"
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Smart Alert System",
      description: "AI-driven alerts intelligently filter noise, only notifying you of the market changes that truly matter to your business.",
      highlight: "Smart AI"
    }
  ];

  return (
    <section id="features" className="section bg-gradient-to-b from-muted/30 to-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Brain className="w-4 h-4 mr-2" />
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            AI-Powered Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your AI agent handles the complexity, <br />you focus on <span className="gradient-text">growing your business</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Advanced artificial intelligence works around the clock to deliver market insights that drive real results for your e-commerce business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card border-none group hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mb-5 rounded-full bg-primary/10 p-3 w-fit group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <div className="mb-3 flex items-center gap-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                    {feature.highlight}
                  </span>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual AI demonstration */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
              <Brain className="w-6 h-6 mr-2 text-primary" />
              Watch our AI agent in action
            </h3>
            <p className="text-muted-foreground">See how artificial intelligence transforms raw market data into actionable insights</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <h4 className="font-semibold mb-2">AI Monitors</h4>
              <p className="text-sm text-muted-foreground">Continuously scans millions of data points</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <h4 className="font-semibold mb-2">AI Analyzes</h4>
              <p className="text-sm text-muted-foreground">Processes patterns and predicts trends</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              <h4 className="font-semibold mb-2">AI Delivers</h4>
              <p className="text-sm text-muted-foreground">Provides instant, actionable insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
