import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Coffee, Users, BookOpen, Heart, Mail, Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Host = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to the Penny U Network!",
      description: "We'll send your starter kit and add you to the map within 48 hours. Thank you for creating space for thoughtful conversation.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-civic-earth mb-4">
              Bring Penny U to Your Community
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Host a weekly gathering in your café, library, or community space. We'll provide the questions, you provide the welcome.
            </p>
          </div>

          {/* What You Get */}
          <Card className="p-8 civic-gradient">
            <h2 className="text-2xl font-serif font-bold text-civic-earth mb-6 text-center">
              What You'll Receive
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-civic-terracotta mt-1" />
                <div>
                  <h3 className="font-semibold text-civic-earth mb-1">Weekly Question Pack</h3>
                  <p className="text-sm text-muted-foreground">
                    Thoughtfully crafted questions delivered every Monday, with conversation tips and printable materials.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Download className="h-6 w-6 text-civic-terracotta mt-1" />
                <div>
                  <h3 className="font-semibold text-civic-earth mb-1">Host Toolkit</h3>
                  <p className="text-sm text-muted-foreground">
                    Table tents, welcome scripts, and gentle facilitation guides to create inclusive conversations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-civic-terracotta mt-1" />
                <div>
                  <h3 className="font-semibold text-civic-earth mb-1">Network Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with other hosts, share experiences, and get help navigating challenges.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Heart className="h-6 w-6 text-civic-terracotta mt-1" />
                <div>
                  <h3 className="font-semibold text-civic-earth mb-1">Community Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Be part of a growing movement creating spaces for meaningful dialogue across communities.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Registration Form */}
          <Card className="p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-serif font-bold text-civic-earth mb-2">
                  Register Your Space
                </h2>
                <p className="text-muted-foreground">
                  Tell us about your venue and we'll help you get started.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Venue Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-civic-earth">Venue Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="venue-name">Venue Name *</Label>
                      <Input 
                        id="venue-name" 
                        required
                        placeholder="The Reading Room Café"
                        className="border-civic-warm focus:border-civic-terracotta"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="venue-type">Type of Space</Label>
                      <Select>
                        <SelectTrigger className="border-civic-warm focus:border-civic-terracotta">
                          <SelectValue placeholder="Select venue type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cafe">Café</SelectItem>
                          <SelectItem value="library">Library</SelectItem>
                          <SelectItem value="bookstore">Bookstore</SelectItem>
                          <SelectItem value="community-center">Community Center</SelectItem>
                          <SelectItem value="coworking">Coworking Space</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Input 
                      id="address" 
                      required
                      placeholder="123 Main St, Your City, State 12345"
                      className="border-civic-warm focus:border-civic-terracotta"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Space Description</Label>
                    <Textarea 
                      id="description"
                      placeholder="Tell us about your space: seating capacity, accessibility features, atmosphere, etc."
                      className="border-civic-warm focus:border-civic-terracotta resize-none"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Schedule */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-civic-earth">Gathering Schedule</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="day">Weekly Day *</Label>
                      <Select>
                        <SelectTrigger className="border-civic-warm focus:border-civic-terracotta">
                          <SelectValue placeholder="Choose a day" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monday">Monday</SelectItem>
                          <SelectItem value="tuesday">Tuesday</SelectItem>
                          <SelectItem value="wednesday">Wednesday</SelectItem>
                          <SelectItem value="thursday">Thursday</SelectItem>
                          <SelectItem value="friday">Friday</SelectItem>
                          <SelectItem value="saturday">Saturday</SelectItem>
                          <SelectItem value="sunday">Sunday</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time">Time *</Label>
                      <Input 
                        id="time" 
                        type="time"
                        required
                        className="border-civic-warm focus:border-civic-terracotta"
                      />
                    </div>
                  </div>
                </div>

                {/* Host Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-civic-earth">Host Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="host-name">Your Name *</Label>
                      <Input 
                        id="host-name" 
                        required
                        placeholder="Jamie Smith"
                        className="border-civic-warm focus:border-civic-terracotta"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="host-email">Email *</Label>
                      <Input 
                        id="host-email" 
                        type="email"
                        required
                        placeholder="jamie@venue.com"
                        className="border-civic-warm focus:border-civic-terracotta"
                      />
                    </div>
                  </div>
                </div>

                {/* Agreements */}
                <div className="bg-civic-warm/30 p-4 rounded-lg space-y-3">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="commitment" />
                    <Label htmlFor="commitment" className="text-sm">
                      I commit to hosting weekly drop-in conversations using the shared question for at least 3 months.
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox id="inclusive" />
                    <Label htmlFor="inclusive" className="text-sm">
                      I agree to create an inclusive, welcoming environment for participants of all backgrounds.
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox id="guidelines" />
                    <Label htmlFor="guidelines" className="text-sm">
                      I will follow Penny U community guidelines and facilitation practices.
                    </Label>
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-civic-terracotta hover:bg-civic-terracotta/90 text-white font-medium py-3 rounded-full"
                  >
                    {isSubmitting ? "Submitting Application..." : "Join the Penny U Network"}
                  </Button>
                </div>
              </form>
            </div>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <p>
              Questions? Email us at <a href="mailto:hello@pennyu.org" className="text-civic-terracotta hover:underline">hello@pennyu.org</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Host;