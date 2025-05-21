
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for small sellers beginning their market analysis journey",
    features: [
      "Track up to 100 products",
      "Monitor 5 competitors",
      "Daily data updates",
      "Basic pricing analytics",
      "Email alerts"
    ],
    button: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "$249",
    description: "Ideal for growing businesses that need deeper market insights",
    features: [
      "Track up to 1,000 products",
      "Monitor 20 competitors",
      "Hourly data updates",
      "Advanced analytics dashboard",
      "Custom reports",
      "API access",
      "Email & SMS alerts"
    ],
    button: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Comprehensive solution for large-scale marketplace sellers",
    features: [
      "Unlimited product tracking",
      "Unlimited competitor monitoring",
      "Real-time data updates",
      "Advanced analytics & forecasting",
      "Custom reports & integrations",
      "Dedicated account manager",
      "Priority support"
    ],
    button: "Contact Us",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Pricing Plans
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choose the perfect plan for your business
          </h2>
          <p className="text-lg text-muted-foreground">
            All plans include a 14-day free trial with no credit card required. Cancel anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col border ${plan.popular ? 'border-primary shadow-lg shadow-primary/10' : ''}`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center text-sm py-1 font-medium">
                  MOST POPULAR
                </div>
              )}
              <CardHeader className="pb-0">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground ml-1">/month</span>}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 py-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full"
                >
                  {plan.button}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
