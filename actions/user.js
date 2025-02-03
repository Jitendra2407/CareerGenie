"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

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
        // If industry doesn't exist, create it with default values - will replace it with ai later
        if (!industryInsight) {
          industryInsight = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              salaryRanges: [], // Default empty array
              growthRate: 0, // Default value
              demandLevel: "MEDIUM", // Default value
              topSkills: [], // Default empty array
              marketOutlook: "NEUTRAL", // Default value
              keyTrends: [], // Default empty array
              recommendedSkills: [], // Default empty array
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
            },
          });
        }
        // Update the user
        const updateUser = await tx.user.update({
          where: {
            clerkUserId: userId,
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
    return {success: true, ...result};
  } catch (error) {
    console.error("Error updating user and industry:", error.message);
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
     console.error("Error checking onboarding status:", error.message);
     throw new Error("Failed to check onboarding status");
  }
}


// "use server";

// import { db } from "@/lib/prisma";
// import { auth } from "@clerk/nextjs/server";

// export async function updateUser(data) {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: {
//       clerkUserId: userId, // Fix: Use clerkUserId instead of id
//     },
//   });

//   if (!user) throw new Error("User not found");

//   try {
//     const result = await db.$transaction(
//       async (tx) => {
//         // Find if the industry exists
//         let industryInsight = await tx.industryInsight.findUnique({
//           where: {
//             industry: data.industry,
//           },
//         });

//         // If industry doesn't exist, create it with default values
//         if (!industryInsight) {
//           industryInsight = await tx.industryInsight.create({
//             data: {
//               industry: data.industry,
//               salaryRanges: [], // Default empty array
//               growthRate: 0, // Default value
//               demandLevel: "Medium", // Default value
//               topSkills: [], // Default empty array
//               marketOutlook: "Neutral", // Default value
//               keyTrends: [], // Default empty array
//               recommendedSkills: [], // Typo fix: "recomondedSkills" -> "recommendedSkills"
//               nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
//             },
//           });
//         }

//         // Update the user
//         const updatedUser = await tx.user.update({
//           where: {
//             clerkUserId: userId, // Fix: Use clerkUserId instead of id
//           },
//           data: {
//             industry: data.industry,
//             experience: data.experience,
//             bio: data.bio, // Fix: Use data.bio instead of bio.data
//             skills: data.skills,
//           },
//         });

//         return { updatedUser, industryInsight };
//       },
//       {
//         timeout: 10000, // Increased timeout
//       }
//     );

//     return result.updatedUser; // Fix: Return updatedUser instead of result.user
//   } catch (error) {
//     console.error("Error updating user and industry:", error.message);
//     throw new Error("Failed to update profile");
//   }
// }

// export async function getUserOnboardingStatus() {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   try {
//     const user = await db.user.findUnique({
//       where: {
//         clerkUserId: userId, // Fix: Use clerkUserId instead of id
//       },
//       select: {
//         industry: true,
//       },
//     });

//     return {
//       isOnboarded: !!user?.industry,
//     };
//   } catch (error) {
//     console.error("Error checking onboarding status:", error.message);
//     throw new Error("Failed to check onboarding status");
//   }
// }
