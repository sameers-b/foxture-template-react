import GradeIcon from "@material-ui/icons/Grade";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Product = () => {
  require("./Product.css");

  return (
    <>
      <div className="product">
        <div className="product-card">
          <span className="product-offer">NEW</span>
          <p>
            <FavoriteBorderIcon color="secondary" />
          </p>
          <div className="product-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="product-details">
          <div className="product-review">
            <GradeIcon color="secondary" fontSize="small" />
            <GradeIcon color="secondary" fontSize="small" />
            <GradeIcon color="secondary" fontSize="small" />
            <GradeIcon color="secondary" fontSize="small" />
            <GradeIcon color="secondary" fontSize="small" />
            <span className="product-total-review"> ( 32 reviews )</span>
          </div>
          <div className="product-name">Pendent light roof minimal</div>
          <div className="product-price">
            <span>$ 55.00</span>
            <span>
              <del>$120.0</del>
            </span>
          </div>
          <div className="product-color">
            <span style={{ "background-color": "red" }}></span>
            <span style={{ "background-color": "black" }}></span>
            <span style={{ "background-color": "pink" }}></span>
          </div>
          <div className="product-mob-icon-menu">
            <span className="product-mob-icon">1</span>
            <span className="product-mob-icon">1</span>
            <span className="product-mob-icon">1</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
