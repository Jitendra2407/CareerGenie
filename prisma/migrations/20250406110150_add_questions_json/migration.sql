/*
  Warnings:

  - You are about to drop the column `quizScroe` on the `Assessment` table. All the data in the column will be lost.
  - Added the required column `quizScore` to the `Assessment` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `questions` on the `Assessment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Assessment" DROP COLUMN "quizScroe",
ADD COLUMN     "quizScore" DOUBLE PRECISION NOT NULL,
DROP COLUMN "questions",
ADD COLUMN     "questions" JSONB NOT NULL;
