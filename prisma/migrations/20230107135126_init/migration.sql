/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
CREATE SEQUENCE order_order_id_seq;
ALTER TABLE "Order" DROP CONSTRAINT "Order_pkey",
DROP COLUMN "id",
ALTER COLUMN "order_id" SET DEFAULT nextval('order_order_id_seq'),
ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("order_id");
ALTER SEQUENCE order_order_id_seq OWNED BY "Order"."order_id";
