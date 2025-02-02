import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import React from "react";

const IndustryInsightsPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();
  console.log("printing isOnboarded", isOnboarded);

  if (!isOnboarded) {
    console.log("redirecting to onboarding page");
    throw redirect("/onboarding");
  }

  return <div>IndustryInsightsPage</div>;
};

export default IndustryInsightsPage;
