import Navigation from "@/components/Navigation";
import QuestionOfTheWeek from "@/components/QuestionOfTheWeek";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Reflect = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you for reflecting!",
      description: "Your voice is part of something bigger. We'll share anonymized reflections in this week's mosaic.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <QuestionOfTheWeek 
            question="What's a tradition we should bring back?" 
            showReflectButton={false}
          />
          
          <Card className="p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-serif font-bold text-civic-earth mb-2">
                  Share Your Reflection
                </h2>
                <p className="text-muted-foreground">
                  Your thoughts help weave the weekly mosaic of perspectives from across our network.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">First Name (optional)</Label>
                    <Input 
                      id="name" 
                      placeholder="How should we credit you?"
                      className="border-civic-warm focus:border-civic-terracotta"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Gathering Location</Label>
                    <Select>
                      <SelectTrigger className="border-civic-warm focus:border-civic-terracotta">
                        <SelectValue placeholder="Where did you attend?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="troubadour">Troubadour Coffee, Berkeley</SelectItem>
                        <SelectItem value="mission">Mission Branch Library, SF</SelectItem>
                        <SelectItem value="redwood">Redwood Roasters, Palo Alto</SelectItem>
                        <SelectItem value="online">Attended online</SelectItem>
                        <SelectItem value="other">Other/Write-in</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reflection">Your Reflection</Label>
                  <Textarea 
                    id="reflection"
                    placeholder="Share your thoughts on this week's question. What traditions would you bring back and why? What does this question stir up for you?"
                    className="min-h-32 border-civic-warm focus:border-civic-terracotta resize-none"
                    maxLength={500}
                  />
                  <p className="text-xs text-muted-foreground text-right">
                    500 characters max
                  </p>
                </div>

                <div className="bg-civic-warm/30 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="consent" className="mt-1" />
                    <div className="space-y-1">
                      <Label htmlFor="consent" className="text-sm font-medium">
                        Publishing Consent
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        I consent to having my reflection shared anonymously in the public Weekly Mosaic. 
                        Names and locations may be included if provided, but can be omitted upon request.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-civic-terracotta hover:bg-civic-terracotta/90 text-white font-medium py-3 rounded-full"
                  >
                    {isSubmitting ? "Sharing Your Reflection..." : "Share Your Reflection"}
                  </Button>
                </div>
              </form>
            </div>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <p>
              Reflections are reviewed before publication to maintain the thoughtful, respectful tone of our community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reflect;