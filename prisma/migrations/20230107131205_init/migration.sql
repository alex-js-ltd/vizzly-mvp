-- CreateTable
CREATE TABLE "Order" (
    "order_id" INTEGER NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "item_id" INTEGER NOT NULL,
    "sku" TEXT NOT NULL,
    "qty_ordered" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "value" INTEGER NOT NULL,
    "discount_amount" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "payment_method" TEXT NOT NULL,
    "bi_st" TEXT NOT NULL,
    "cust_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "month" TEXT NOT NULL,
    "ref_num" INTEGER NOT NULL,
    "customer_since" TIMESTAMP(3) NOT NULL,
    "place_name" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" INTEGER NOT NULL,
    "region" TEXT NOT NULL,
    "discount_percent" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_order_id_key" ON "Order"("order_id");
