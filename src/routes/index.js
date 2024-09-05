const { Router } = require("express");
const router = Router();
const currencyRoutes = require("./Vendor/Currency/currencyRoutes");
const unitRoutes = require("./Items/Units/unitRoutes");
const productCategoryRoutes = require("./Items/productCategory/productCategoryRoutes");
const paymentTermRoutes = require("./Vendor/PaymentTerms/paymentTermRoutes");
const vendorRoutes = require("./Vendor/vendorRoutes");
const itemRoutes = require("./Items/itemRoutes");
const fileUploadRoutes = require("./Uploadfile/uploadFileRoutes");
const categoryRoutes = require("./receipes/category/categoryRoutes");
const recipesRoutes = require("./Receipes/recipesRoutes");
const purchaseRequisitionRoutes = require("./PurchaseRequisition/purchaseRequisitionRoutes");
const purchaseOrderRoutes = require("./purchaseOrder/purchaseOrderRoutes");
const commentsRoutes = require("./PurchaseRequisition/Comments/commentsRoutes");
const couponRoutes = require("./POS/Coupon/couponRoutes");
const purchaseReceivesRoutes = require("./purchaseReceives/purchaseReceivesRoutes");

router.use("/currency", currencyRoutes);
router.use("/payment-term", paymentTermRoutes);
router.use("/vendor", vendorRoutes);
router.use("/units", unitRoutes);
router.use("/product/category", productCategoryRoutes);
router.use("/item", itemRoutes);
router.use("/file", fileUploadRoutes);
router.use("/category", categoryRoutes);
router.use("/recipe", recipesRoutes);
router.use("/purchase-requisition", purchaseRequisitionRoutes);
router.use("/purchase/order", purchaseOrderRoutes);
router.use("/comment", commentsRoutes);
router.use("/coupon", couponRoutes);
router.use("/purchase/receives", purchaseReceivesRoutes);

module.exports = router;
