-- DropForeignKey
ALTER TABLE "position" DROP CONSTRAINT "position_categoryId_fkey";

-- AddForeignKey
ALTER TABLE "position" ADD CONSTRAINT "position_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
