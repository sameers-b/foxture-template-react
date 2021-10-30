// import React, { useState, useEffect } from "react";

// // import useMediaQuery from "@material-ui/core/useMediaQuery";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles((theme) => ({
//   rowContainer: {
//     paddingLeft: "1em",
//     paddingRight: "1em",
//     [theme.breakpoints.down("sm")]: {
//       paddingLeft: "0.5em",
//       paddingRight: "0.5em",
//     },
//   },
// }));

// export default function Revolution(props) {
//   const classes = useStyles();
//   const theme = useTheme();
//   // const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
//   // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

//   // const defaultOptions = {
//   //   loop: true,
//   //   autoplay: false,
//   //   animationData: technologyAnimation,
//   //   rendererSettings: {
//   //     preserveAspectRatio: "xMidYMid slice",
//   //   },
//   // };

//   const [products, setProducts] = useState(null);

//   const getProducts = async () => {
//     try {
//       console.log("GET products");
//       const res = await fetch(
//         "http://localhost:8000/api/order/listAllProducts",
//         {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const response = await res.json();

//       if (!response.products) {
//         // setIsError(true);
//         throw new Error();
//       } else {
//         setProducts(response.products);
//       }
//     } catch (err) {
//       console.log("error", err);
//       // setIsError(true);
//     }
//   };

//   const addToCart = async (product) => {
//     try {
//       // console.log("product is >>>> ", product);
//       if (product.sold == product.quantity || product.sold > product.quantity) {
//         console.log("Product is out of stock");
//         throw Error("Out of stock !!");
//       }

//       if (localStorage.getItem("token")) {
//         let res = await fetch("http://localhost:8000/api/order/addToCart", {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: localStorage.getItem("token"),
//           },
//           body: JSON.stringify({
//             product,
//           }),
//         });
//         // const response = await res.json();
//       } else {
//         if (localStorage.getItem("cart")) {
//           let oldProductsList = JSON.parse(localStorage.getItem("cart"));
//           console.log("oldProductsList", oldProductsList);
//           let updatedProductsList = [];
//           for (let i = 0; i < oldProductsList.length; i++) {
//             if (oldProductsList[i].productID === product.productID) {
//               console.log("product already in cart , increasing qty");
//               oldProductsList[i].quant += 1;
//               updatedProductsList = [...oldProductsList];
//               localStorage.setItem("cart", JSON.stringify(updatedProductsList));
//               return;
//             }
//           }
//           console.log("product not found in cart, adding new !!");

//           updatedProductsList = [
//             ...oldProductsList,
//             {
//               productID: product.productID,
//               name: product.name,
//               desc: product.description,
//               unitPrice: product.price,
//               quant: 1,
//             },
//           ];
//           localStorage.setItem("cart", JSON.stringify(updatedProductsList));
//         } else {
//           let cart = [
//             {
//               productID: product.productID,
//               name: product.name,
//               desc: product.description,
//               unitPrice: product.price,
//               quant: 1,
//             },
//           ];
//           localStorage.setItem("cart", JSON.stringify(cart));
//         }
//       }
//       console.log("user cart is >>> ", localStorage.getItem("cart"));
//     } catch (err) {
//       console.log("error", err);
//       // setIsError(true);
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <React.Fragment>
//       <Grid
//         container
//         // direction="column"
//         spacing={2}
//         className={classes.rowContainer}
//         //   style={{ padding: 0, margin: 0 }}
//       >
//         {!products ? (
//           <div>No products found</div>
//         ) : (
//           products.map((products, key) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={3}
//               key={key}

//               // style={{ marginTop: "50px" }}
//             >
//               <Card>
//                 <CardActionArea>
//                   <CardMedia
//                     component="img"
//                     alt="product.png not found"
//                     height="140"
//                     image={require("../../assets/product.png")}
//                     title="Product"
//                   />
//                   <CardContent style={{ textAlign: "center" }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       {products.name}
//                     </Typography>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Price : ${products.price}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="textSecondary"
//                       component="p"
//                     >
//                       {products.description}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//                 <CardActions style={{ justifyContent: "center" }}>
//                   {products.sold == products.quantity ? (
//                     <Button variant="outlined" color="primary">
//                       Out of stock
//                     </Button>
//                   ) : (
//                     <React.Fragment>
//                       <Button
//                         variant="outlined"
//                         size="small"
//                         color="primary"
//                         onClick={() => addToCart(products)}
//                       >
//                         Add to cart
//                       </Button>
//                       <Button
//                         // onClick={() => {
//                         //   purchaseItem(products);
//                         // }}
//                         variant="outlined"
//                         size="small"
//                         color="primary"
//                       >
//                         View Details
//                       </Button>
//                     </React.Fragment>
//                   )}
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))
//         )}
//       </Grid>
//     </React.Fragment>
//   );
// }
