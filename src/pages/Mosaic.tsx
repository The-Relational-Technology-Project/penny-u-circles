import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quote, MapPin, Calendar, Archive } from "lucide-react";
import { Link } from "react-router-dom";

const reflections = [
  {
    id: 1,
    reflection: "That I have to earn rest.",
    location: "Berkeley, CA",
    venue: "Troubadour Coffee",
    author: "Anonymous"
  },
  {
    id: 2,
    reflection: "That I need to have the answers before I speak. Turns out some of the best conversations start with 'I don't know, but...'",
    location: "San Francisco, CA", 
    venue: "Mission Branch Library",
    author: "Sarah M."
  },
  {
    id: 3,
    reflection: "That worth is based on output. Turns out my dog never cared how productive I was—just that I was present.",
    location: "Palo Alto, CA",
    venue: "Redwood Roasters", 
    author: "Anonymous"
  },
  {
    id: 4,
    reflection: "That disagreement means disrespect. I've learned you can challenge ideas while honoring the person behind them.",
    location: "Berkeley, CA",
    venue: "Troubadour Coffee",
    author: "Marcus"
  },
  {
    id: 5,
    reflection: "That I had to choose between being kind and being honest. The best conversations happen when you're both.",
    location: "San Francisco, CA",
    venue: "Mission Branch Library", 
    author: "Jennifer L."
  },
  {
    id: 6,
    reflection: "That success looks the same for everyone. Comparing my chapter 3 to someone else's chapter 20 was exhausting.",
    location: "Palo Alto, CA",
    venue: "Redwood Roasters",
    author: "Anonymous"
  }
];

const Mosaic = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="h-4 w-4" />
            <span>Week of November 18, 2024</span>
          </div>
          <h1 className="text-4xl font-serif font-bold text-civic-earth mb-4">
            Last Week's Mosaic
          </h1>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif text-civic-earth/80 mb-6 italic">
              "What's something you've unlearned recently?"
            </h2>
            <p className="text-lg text-muted-foreground">
              Six conversations. Three cities. One question that invited us all to examine what we've outgrown.
            </p>
          </div>
        </div>

        {/* Reflections Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {reflections.map((reflection) => (
            <Card key={reflection.id} className="p-6 hover:shadow-lg transition-all duration-200 border-civic-warm/50">
              <div className="space-y-4">
                <Quote className="h-6 w-6 text-civic-terracotta/60" />
                
                <blockquote className="text-base leading-relaxed text-civic-earth">
                  "{reflection.reflection}"
                </blockquote>
                
                <div className="flex items-center justify-between pt-2 border-t border-civic-warm/50">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-civic-earth">
                      — {reflection.author}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{reflection.venue}, {reflection.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Week Statistics */}
        <Card className="p-6 bg-civic-warm/30 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-civic-earth">6</p>
              <p className="text-sm text-muted-foreground">Reflections Shared</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-civic-earth">3</p>
              <p className="text-sm text-muted-foreground">Gathering Locations</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-civic-earth">45+</p>
              <p className="text-sm text-muted-foreground">People Participated</p>
            </div>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            variant="outline"
            className="border-civic-terracotta text-civic-terracotta hover:bg-civic-terracotta hover:text-white"
          >
            <Link to="/archive">
              <Archive className="h-4 w-4 mr-2" />
              Browse Past Questions
            </Link>
          </Button>
          
          <Button 
            asChild
            className="bg-civic-terracotta hover:bg-civic-terracotta/90 text-white"
          >
            <Link to="/reflect">
              Share This Week's Reflection
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Mosaic;