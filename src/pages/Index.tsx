import Navigation from "@/components/Navigation";
import QuestionOfTheWeek from "@/components/QuestionOfTheWeek";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, Users, Coffee, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-gathering.jpg";

const lastWeekHighlights = [
  {
    quote: "That I have to earn rest.",
    location: "Berkeley, CA"
  },
  {
    quote: "That I need to have the answers before I speak.",
    location: "San Francisco, CA"
  },
  {
    quote: "That worth is based on output. Turns out my dog never cared.",
    location: "Palo Alto, CA"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroImage} 
            alt="People gathering for thoughtful conversation"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-civic-earth mb-6 leading-tight">
              One question.<br/>
              <span className="text-civic-terracotta">Many places.</span><br/>
              <span className="hand-underline">Endless possibilities.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Join a weekly civic gathering near you. Every Thursday and Friday, neighbors come together to explore life's big questions over coffee and conversation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild 
              size="lg"
              className="bg-civic-terracotta hover:bg-civic-terracotta/90 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg"
            >
              <Link to="/map" className="gap-2">
                <MapPin className="h-5 w-5" />
                Find a Gathering Near You
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-civic-earth text-civic-earth hover:bg-civic-earth hover:text-white px-8 py-4 rounded-full text-lg"
            >
              <Link to="/host" className="gap-2">
                <Users className="h-5 w-5" />
                Start One in Your Community
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Question of the Week */}
      <section className="py-16 bg-civic-warm/20">
        <div className="max-w-4xl mx-auto px-4">
          <QuestionOfTheWeek question="What's a tradition we should bring back?" />
        </div>
      </section>

      {/* Last Week's Highlights */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-civic-earth mb-4">
              Voices from Last Week
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              "What's something you've unlearned recently?"
            </p>
            <Button 
              asChild 
              variant="ghost" 
              className="text-civic-terracotta hover:text-civic-terracotta/80"
            >
              <Link to="/mosaic" className="gap-2">
                Read the Full Mosaic
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {lastWeekHighlights.map((highlight, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-200">
                <Quote className="h-6 w-6 text-civic-terracotta/60 mb-4" />
                <blockquote className="text-base italic text-civic-earth mb-4">
                  "{highlight.quote}"
                </blockquote>
                <p className="text-sm text-muted-foreground">
                  — {highlight.location}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What is Penny U */}
      <section className="py-16 bg-civic-warm/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Coffee className="h-16 w-16 text-civic-terracotta mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-bold text-civic-earth mb-6">
            What is Penny U?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              In 18th-century London, "Penny Universities" were cafés where ideas flowed freely—you paid a penny for a cup and got access to the conversation.
            </p>
            <p className="mb-6">
              <strong className="text-civic-earth">Penny U 2.0</strong> revives that spirit for today: one weekly question, many local gatherings, all networked by shared curiosity and genuine human connection.
            </p>
          </div>
          <Button 
            asChild 
            variant="outline"
            className="border-civic-terracotta text-civic-terracotta hover:bg-civic-terracotta hover:text-white"
          >
            <Link to="/about">Learn More About Our Story</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-civic-earth text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 font-serif font-bold text-xl mb-4">
                <Coffee className="h-6 w-6" />
                Penny U
              </div>
              <p className="text-white/80 text-sm">
                Creating spaces for thoughtful conversation in communities everywhere.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Get Involved</h3>
              <div className="space-y-2 text-sm">
                <Link to="/map" className="block text-white/80 hover:text-white">Find a Gathering</Link>
                <Link to="/reflect" className="block text-white/80 hover:text-white">Share a Reflection</Link>
                <Link to="/host" className="block text-white/80 hover:text-white">Host a Gathering</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <div className="space-y-2 text-sm">
                <Link to="/mosaic" className="block text-white/80 hover:text-white">Weekly Mosaics</Link>
                <Link to="/archive" className="block text-white/80 hover:text-white">Question Archive</Link>
                <Link to="/about" className="block text-white/80 hover:text-white">About Penny U</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
            <p>&copy; 2024 Penny U 2.0. Building the future of civic conversation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
