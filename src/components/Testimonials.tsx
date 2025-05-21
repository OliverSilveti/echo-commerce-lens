
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "MarketPulse has been a game-changer for our pricing strategy. We've increased our margins by 15% while remaining competitive.",
    author: "Sarah Johnson",
    position: "E-commerce Director",
    company: "FashionRetail Inc.",
    avatar: "SJ"
  },
  {
    quote: "The competitor intelligence features helped us identify a gap in the market that we were able to capitalize on immediately.",
    author: "Michael Chen",
    position: "CEO",
    company: "TechGadgets Co.",
    avatar: "MC"
  },
  {
    quote: "The ROI on MarketPulse was almost immediate. Within one month, we had optimized our listings based on the analytics.",
    author: "Alex Rivera",
    position: "Marketplace Manager",
    company: "HomeGoods Direct",
    avatar: "AR"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-muted/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by e-commerce businesses worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            See how businesses like yours have transformed their market strategy with our intelligence platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md">
              <CardContent className="p-8 bg-white relative">
                <svg className="absolute top-6 right-6 h-10 w-10 text-primary/10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                
                <p className="mb-6 text-foreground italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src="" alt={testimonial.author} />
                    <AvatarFallback className="bg-primary/10 text-primary">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
