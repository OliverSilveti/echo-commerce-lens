
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Database, Search, Filter, TrendingUp, LineChart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Dynamic Pricing Analysis",
      description: "Track competitor pricing changes in real-time and optimize your pricing strategy for maximum profitability."
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Competitor Intelligence",
      description: "Monitor your competitors' product launches, promotions, and strategic shifts to stay ahead in the market."
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Market Trends Forecasting",
      description: "Identify emerging market trends and consumer behavior patterns to capitalize on new opportunities."
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Real-time Data Collection",
      description: "Continuous data collection from multiple marketplaces, ensuring you always have the latest information."
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Performance Benchmarking",
      description: "Compare your performance against industry standards and top competitors with customizable metrics."
    },
    {
      icon: <Filter className="h-10 w-10 text-primary" />,
      title: "Customizable Alerts",
      description: "Set up alerts for price changes, stock levels, and competitor activities that matter most to your business."
    }
  ];

  return (
    <section id="features" className="section bg-muted/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Key Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything you need for data-driven e-commerce decisions
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive suite of tools provides you with all the insights you need to optimize your marketplace presence and outperform competitors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card border-none">
              <CardContent className="pt-6">
                <div className="mb-5 rounded-full bg-primary/10 p-3 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
