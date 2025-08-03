"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // validate input
  if(!data.industry){
    throw new Error("Industry is required to update the profile.");
  }

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User not found");

  try {
    const result = await db.$transaction(
      async (tx) => {
        // find if the industry exists
        let industryInsight = await tx.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        });
        console.log("printing industryInsights in user", industryInsight);
        // If industry doesn't exist, create it with default values - will replace it with ai later
        if (!industryInsight) {
          console.log("printing data.industry", data.industry);
          const insights = await generateAIInsights(data.industry);
          // industryInsight = await tx.industryInsight.upsert({
          //   data: {
          //     industry: data.industry,
          //     ...insights,
          //     nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          //   },
          // });
          industryInsight = await tx.industryInsight.upsert({
            where: {
              industry: data.industry,
            },
            create: {
              industry: data.industry,
              ...insights,
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
            update: {
              // you can update any field you want or leave it empty
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // optional update example
            },
          });
        }
        // Update the user
        const updateUser = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });
        return { updateUser, industryInsight };
      },

      {
        timeout: 10000, // default 5000
      }
    );
    return { success: true, ...result };
  } catch (error) {
    console.log("Error updating user and industry:", error.message);
    throw new Error("Failed to update profile" + error.message);
  }
}

export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    return {
      isOnboarded: !!user?.industry,
    };
  } catch (error) {
    console.log("Error checking onboarding status:", error.message);
    throw new Error("Failed to check onboarding status");
  }
}