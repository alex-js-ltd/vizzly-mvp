-- DropIndex
DROP INDEX "Order_order_id_key";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("id");
