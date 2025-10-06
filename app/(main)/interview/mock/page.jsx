import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import Quiz from "../_components/quiz";

const MockInterviewPage = () => {
  return (
    <div className="container mx-auto space-y-6 py-6">
      <div>
        <Link href={"/interview"}>
          <Button variant="ghost" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Interview Prep
          </Button>
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl gradient-title">
          Mock Interview
        </h1>
        <p className="text-muted-foreground mt-2">
          Test your knowledge with industry-specific questions.
        </p>
      </div>

      <Quiz />
    </div>
  );
};

export default MockInterviewPage;