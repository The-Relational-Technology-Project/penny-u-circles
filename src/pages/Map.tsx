import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Coffee, BookOpen, Accessibility } from "lucide-react";

const gatherings = [
  {
    id: 1,
    name: "Troubadour Coffee",
    address: "1234 Telegraph Ave, Berkeley, CA",
    day: "Thursday",
    time: "6:00 PM",
    description: "Sunny patio, poetry-friendly crowd",
    capacity: "12-15 people",
    accessibility: "Wheelchair accessible",
    host: "Maya & Team"
  },
  {
    id: 2,
    name: "Mission Branch Library",
    address: "300 Bartlett St, San Francisco, CA", 
    day: "Thursday",
    time: "5:30 PM",
    description: "Family-friendly, tea available",
    capacity: "20+ people",
    accessibility: "Fully accessible",
    host: "Library Staff"
  },
  {
    id: 3,
    name: "Redwood Roasters",
    address: "567 Main St, Palo Alto, CA",
    day: "Friday",
    time: "7:00 PM", 
    description: "Quiet back room, mostly students",
    capacity: "8-10 people",
    accessibility: "Step-free entrance",
    host: "Alex"
  }
];

const Map = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-civic-earth mb-4">
            Find a Gathering Near You
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a weekly conversation in your community. Every Thursday and Friday, neighbors gather to explore this week's question together.
          </p>
        </div>

        {/* Map placeholder - in real implementation would be interactive */}
        <Card className="mb-8 p-8 bg-civic-warm/30">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-civic-terracotta" />
              <p className="text-lg font-medium">Interactive Map Coming Soon</p>
              <p className="text-sm">See all gatherings plotted on a live map</p>
            </div>
          </div>
        </Card>

        {/* Gatherings List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gatherings.map((gathering) => (
            <Card key={gathering.id} className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-xl text-civic-earth mb-2">
                    {gathering.name}
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 text-civic-terracotta shrink-0" />
                    {gathering.address}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-civic-sage" />
                    <span className="font-medium">{gathering.day}s at {gathering.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-civic-sage" />
                    <span>{gathering.capacity}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Accessibility className="h-4 w-4 text-civic-sage" />
                    <span>{gathering.accessibility}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground italic">
                  "{gathering.description}"
                </p>

                <div className="flex items-center justify-between pt-2">
                  <Badge variant="secondary" className="text-xs">
                    Host: {gathering.host}
                  </Badge>
                  
                  <Button 
                    size="sm" 
                    className="bg-civic-terracotta hover:bg-civic-terracotta/90 text-white"
                  >
                    Attend This Week
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Don't see a gathering near you?</p>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-civic-terracotta text-civic-terracotta hover:bg-civic-terracotta hover:text-white"
          >
            <a href="/host">Start One in Your Community</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Map;