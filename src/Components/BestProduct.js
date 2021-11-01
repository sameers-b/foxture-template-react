import Product from "./Product/Product";
import "./BestProduct.css";

const BestProduct = () => {
  const mystyle = {
    marginBottom: "50px",
  };
  return (
    <>
      <section>
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
