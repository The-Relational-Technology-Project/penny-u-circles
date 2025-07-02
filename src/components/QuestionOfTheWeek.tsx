import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface QuestionOfTheWeekProps {
  question: string;
  showReflectButton?: boolean;
}

const QuestionOfTheWeek = ({ question, showReflectButton = true }: QuestionOfTheWeekProps) => {
  return (
    <Card className="p-8 civic-gradient border-civic-terracotta/20 shadow-lg">
      <div className="text-center space-y-6">
        <div>
          <p className="text-sm font-medium text-civic-earth/70 uppercase tracking-wider mb-2">
            This Week's Question
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-civic-earth leading-tight">
            <span className="hand-underline">{question}</span>
          </h2>
        </div>
        
        {showReflectButton && (
          <div className="pt-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-civic-terracotta hover:bg-civic-terracotta/90 text-white font-medium px-8 py-3 rounded-full shadow-lg"
            >
              <Link to="/reflect" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Share Your Reflection
              </Link>
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default QuestionOfTheWeek;