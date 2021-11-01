import Product from "./Product/Product";

const BestProduct = () => {
  require("./BestProduct.css");
  const mystyle = {
    marginBottom: "50px",
  };
  return (
    <>
      <section className="best-product-sec">
        <div className="best-product">
          <span>
            <Product />
          </span>
          <span>
            <Product />
          </span>
          <span>
            <Product />
          </span>
          <span>
            <Product />
          </span>
          <span>
            <Product />
          </span>
          <span>
            <Product />
          </span>
          <span>
            <Product />
          </span>
          <span>
            <Product />
          </span>
        </div>
      </section>
    </>
  );
};

export default BestProduct;
