import Product from "./Product/Product";
import "./BestProduct.css";

const BestProduct = () => {
  return (
    <>
      <section>
        <div className="best-product-row-1">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="best-product-row-2">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </>
  );
};

export default BestProduct;
