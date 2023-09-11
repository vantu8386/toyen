const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const port = 3000;
// khoi tao server
const app = express();

const authRoutes = require("./routes/auth.routes")
const categoryRoutes = require("./routes/category.routes")
const mediaRoutes = require("./routes/media.routes")
const orderRoutes = require("./routes/order.routes")
const productRoutes = require("./routes/product.routes")
const tagRoutes = require("./routes/tag.routes")
const usersRoutes = require("./routes/users.routes")

// su dung cac package can thiet
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/categoryes", categoryRoutes);
app.use("/api/v1/media", mediaRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/tags", tagRoutes);
app.use("/api/v1/users", usersRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
