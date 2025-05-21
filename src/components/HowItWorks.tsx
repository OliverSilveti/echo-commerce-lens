
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Connect Your Marketplace Accounts",
    description: "Easily integrate with Amazon, eBay, Walmart, and other major marketplaces to centralize your data.",
  },
  {
    number: "02",
    title: "Define Your Competitors",
    description: "Identify key competitors you want to track and benchmark against in your market segments.",
  },
  {
    number: "03",
    title: "Set Up Custom Alerts",
    description: "Configure alerts for price changes, stock levels, buy box ownership, and other critical events.",
  },
  {
    number: "04",
    title: "Analyze & Act On Insights",
    description: "Review automated reports and insights, then implement data-driven strategies to gain a competitive edge.",
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start making data-driven decisions in minutes
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our intuitive platform makes it easy to get started and immediately gain valuable insights into your market position.
            </p>
            
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex">
                  <div className="mr-6 flex flex-col items-center">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center font-bold text-primary">
                      {step.number}
                    </div>
                    {step.number !== "04" && <div className="h-full w-px bg-border mt-2"></div>}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Button size="lg">Get Started Now</Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl border border-border p-6 shadow-lg">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Market Intelligence Dashboard</h3>
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center text-sm text-muted-foreground">
                    Interactive Dashboard Preview
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="text-sm font-semibold mb-2">Price Movements</div>
                    <div className="h-24 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                      Price Graph
                    </div>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="text-sm font-semibold mb-2">Competitor Activity</div>
                    <div className="h-24 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                      Activity Feed
                    </div>
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

export default HowItWorks;
