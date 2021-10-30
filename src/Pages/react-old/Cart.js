// import React, { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import "react-tagsinput/react-tagsinput.css";
// import TagsInput from "react-tagsinput";
// import * as auth from "../../reduxStore/actions/auth";
// import { useSelector, useDispatch } from "react-redux";
// // @material-ui/core components
// import Box from "@material-ui/core/Box";
// import List from "@material-ui/core/List";
// import Grid from "@material-ui/core/Grid";
// // import Chip from "@material-ui/core/Chip";

// import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import MenuItem from "@material-ui/core/MenuItem";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import ListItemText from "@material-ui/core/ListItemText";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import IconButton from "@material-ui/core/IconButton";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Fade from "@material-ui/core/Fade";
// import Checkbox from "@material-ui/core/Checkbox";
// import Snackbar from "@material-ui/core/Snackbar";

// // @material-ui/icons
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import AddIcon from "@material-ui/icons/Add";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import Check from "@material-ui/icons/Check";

// import { USstates } from "../../variables/usStatesJson";
// import { countries } from "../../variables/countryCodesJson";

// const hexToRgb = (input) => {
//   input = input + "";
//   input = input.replace("#", "");
//   let hexRegex = /[0-9A-Fa-f]/g;
//   if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
//     throw new Error("input is not a valid hex color.");
//   }
//   if (input.length === 3) {
//     let first = input[0];
//     let second = input[1];
//     let last = input[2];
//     input = first + first + second + second + last + last;
//   }
//   input = input.toUpperCase(input);
//   let first = input[0] + input[1];
//   let second = input[2] + input[3];
//   let last = input[4] + input[5];
//   return (
//     parseInt(first, 16) +
//     ", " +
//     parseInt(second, 16) +
//     ", " +
//     parseInt(last, 16)
//   );
// };

// const useStyles = makeStyles((theme) => ({
//   listItem: {
//     padding: theme.spacing(1, 0),
//   },
//   total: {
//     fontWeight: 700,
//   },
//   title: {
//     marginTop: theme.spacing(2),
//   },
//   paper: {
//     width: "60%",
//     borderRadius: "20px",
//     padding: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
//       // marginTop: theme.spacing(6),
//       // marginBottom: theme.spacing(6),
//       padding: theme.spacing(3),
//     },
//   },
// }));

// export default function Cart() {
//   const classes = useStyles();
//   const dispatch = useDispatch();

//   const [cart, setCart] = useState(null);
//   const [cartTotal, setCartTotal] = useState(0);
//   const [shipAddress, setShipAddress] = useState(null);
//   const [taxBreakdown, setTaxBreakdown] = useState(null);
//   const [couponsArray, setCouponsArray] = useState(null);
//   const [shippingAddressList, setShippingAddressList] = useState(null);
//   const [openShippingDialog, setOpenShippingDialog] = useState(false);
//   const [couponCode, setCouponCode] = useState(null);

//   // local states for shipping address details
//   const [city, setCity] = useState(null);
//   const [state, setState] = useState(null);
//   const [street, setStreet] = useState(null);
//   const [zipCode, setZipCode] = useState(null);
//   const [country, setCountry] = useState(null);
//   const [building, setBulding] = useState(null);
//   const [modifiedCart, setModifiedCart] = useState(null);

//   // States for guest user info
//   const [email, setEmail] = useState(null);
//   const [agreed, setAgreed] = useState(false);
//   const [lastName, setLastName] = useState(null);
//   const [firstName, setFirstName] = useState(null);
//   const [checked, setChecked] = useState([]);

//   const [guestInfoDialog, setGuestInfoDialog] = useState(false);

//   const [alert, setAlert] = useState({
//     open: false,
//     message: "",
//     backgroundColor: "",
//   });

//   // state for swal
//   const [open, setOpen] = useState(false);
//   const [paymentDone, setPaymentDone] = useState(false);

//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   const addShippingAddress = () => {
//     setOpenShippingDialog(true);
//   };

//   const getCart = async () => {
//     try {
//       if (isAuthenticated) {
//         const res = await fetch("http://localhost:8000/api/order/getCart", {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: localStorage.getItem("token"),
//           },
//         });
//         const response = await res.json();
//         if (response.success) {
//           console.log("cart is from backend >> ", response.cart);
//           setCart(response.cart);
//           getCartTotal(response.cart);
//         } else {
//           throw new Error();
//         }
//       } else {
//         if (localStorage.getItem("cart")) {
//           let oldProductsList = JSON.parse(localStorage.getItem("cart"));
//           setCart(oldProductsList);
//           getCartTotal(oldProductsList);
//           return;
//         }
//         setCart(null);
//       }
//     } catch (err) {
//       console.log("error", err);
//     }
//   };

//   const getTax = async (cart) => {
//     try {
//       console.log("in get tax >>>> ", cart, shipAddress, cartTotal);
//       const res = await fetch("http://localhost:8000/api/order/getTax", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: localStorage.getItem("token"),
//         },
//         body: JSON.stringify({
//           cart,
//           toAddressID: shipAddress,
//           cartTotal,
//           isAuthenticated,
//         }),
//       });

//       const response = await res.json();

//       if (response.success) {
//         setTaxBreakdown(response.tax);
//       } else {
//         throw new Error();
//       }
//     } catch (err) {
//       console.log("error", err);
//     }
//   };

//   const getCartTotal = async (cart) => {
//     let totalPrice = 0;
//     if (cart) {
//       for (let i = 0; i < cart.length; i++) {
//         totalPrice =
//           parseFloat(totalPrice) +
//           parseFloat(cart[i].unitPrice) * parseInt(cart[i].quant);
//       }

//       setCartTotal(Math.round((totalPrice + Number.EPSILON) * 100) / 100);
//     }
//   };

//   const handleShippingSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isAuthenticated) {
//         const res = await fetch(
//           "http://localhost:8000/api/user/addShippingAddress",
//           {
//             method: "POST",
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json",
//               Authorization: localStorage.getItem("token"),
//             },
//             body: JSON.stringify({
//               city,
//               state,
//               street,
//               zipCode,
//               country,
//               building,
//             }),
//           }
//         );
//         const response = await res.json();
//         if (!response.success) {
//           throw new Error();
//         } else {
//           handleClose();
//           getShippingAddressList();
//         }
//       } else {
//         // setGuestShippingAddress([
//         //   city,
//         //   state,
//         //   street,
//         //   zipCode,
//         //   country,
//         //   building,
//         // ]);

//         console.log("setting shipping address list as >>> ", [
//           {
//             city: city,
//             state: state,
//             street: street,
//             zipCode: zipCode,
//             country: country,
//             building: building,
//           },
//         ]);

//         setShippingAddressList([
//           {
//             city: city,
//             state: state,
//             street: street,
//             zipCode: zipCode,
//             country: country,
//             building: building,
//           },
//         ]);

//         localStorage.setItem(
//           "guestShippingAddress",
//           JSON.stringify([
//             {
//               city: city,
//               state: state,
//               street: street,
//               zipCode: zipCode,
//               country: country,
//               building: building,
//             },
//           ])
//         );

//         // localStorage.setItem("guestShippingAddress", [
//         //   {
//         //     city: city,
//         //     state: state,
//         //     street: street,
//         //     zipCode: zipCode,
//         //     country: country,
//         //     building: building,
//         //   },
//         // ]);

//         // console.log(
//         //   "saving address",
//         //   city,
//         //   state,
//         //   street,
//         //   zipCode,
//         //   country,
//         //   building
//         // );
//         handleClose();
//         // getShippingAddressList();
//       }
//     } catch (err) {
//       console.log("error", err);
//     }
//   };

//   const getShippingAddressList = async () => {
//     try {
//       console.log("user aut is >>> ", isAuthenticated);
//       if (isAuthenticated) {
//         const res = await fetch(
//           "http://localhost:8000/api/user/getShippingAddressList",
//           {
//             method: "GET",
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json",
//               Authorization: localStorage.getItem("token"),
//             },
//           }
//         );
//         const response = await res.json();

//         if (!response.success) {
//           console.log("No Shipping address found");
//         } else {
//           console.log(
//             "logged in shipping address list is >>> ",
//             response.shippingAddressList
//           );
//           setShippingAddressList(response.shippingAddressList);
//         }
//       } else {
//         console.log("address there in localstorage");
//         if (localStorage.getItem("guestShippingAddress")) {
//           console.log(
//             "here-----> ",
//             JSON.parse(localStorage.getItem("guestShippingAddress"))
//           );
//           setShippingAddressList(
//             JSON.parse(localStorage.getItem("guestShippingAddress"))
//           );
//         }
//       }
//     } catch (err) {
//       console.log("error", err);
//     }
//   };

//   const changeCart = async (e, product, index) => {
//     e.preventDefault();
//     try {
//       let newCart = [...cart];

//       for (let i = 0; i < newCart.length; i++) {
//         if (newCart[i].productID === product.productID) {
//           if (e.target.value === "") {
//             newCart.splice(index, 1);
//           } else {
//             newCart[i].quant = e.target.value;
//           }
//         }
//       }

//       setCart(newCart);
//       updateCart(newCart);
//     } catch (err) {
//       console.log("error in changing cart >> ", err);
//     }
//   };

//   const removeCoupon = async (updatedCouponsArray) => {
//     try {
//       let cartResult;
//       let cartTot = cartTotal;
//       for (let i = 0; i < updatedCouponsArray.length; i++) {
//         const res = await fetch(
//           "http://localhost:8000/api/order/applycoupons",
//           {
//             method: "POST",
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json",
//               Authorization: localStorage.getItem("token"),
//             },
//             body: JSON.stringify({
//               cartObject: cart,
//               couponCode: updatedCouponsArray[i],
//               cartTotal: cartTot,
//             }),
//           }
//         );
//         // const response = await res.json();

//         if (!res.ok) {
//           const resErr = await res.json();
//           console.log("Error json ", resErr);
//           throw new Error("No coupons found");
//         } else {
//           const response = await res.json();
//           cartResult = response.cart;
//           cartTot = response.newCartTotal;
//         }
//       }

//       setCouponsArray(updatedCouponsArray);
//       setModifiedCart(cartResult);

//       if (updatedCouponsArray && updatedCouponsArray.length < 1) {
//         getCartTotal(cart);
//         getTax(cart);
//       } else {
//         setCartTotal(cartTot);
//         getCartTotal(cartResult);
//         getTax(cartResult);
//       }
//     } catch (err) {
//       console.log("Failed to remove coupon ", err);
//     }
//   };

//   const updateCart = async (cart) => {
//     try {
//       if (isAuthenticated) {
//         const res = await fetch("http://localhost:8000/api/order/updateCart", {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: localStorage.getItem("token"),
//           },
//           body: JSON.stringify({
//             cart,
//           }),
//         });
//         const response = await res.json();
//         if (response.success) {
//           //get the coupon codes from the modified cart
//           //apply coupons in a loop to the original cart
//           //save the modified cart in applycoupon
//           if (couponsArray && couponsArray.length > 0) {
//             let cartResult;
//             let cartTot = cartTotal;

//             for (let i = 0; i < couponsArray.length; i++) {
//               const res2 = await fetch(
//                 "http://localhost:8000/api/order/applycoupons",
//                 {
//                   method: "POST",
//                   headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
//                     Authorization: localStorage.getItem("token"),
//                   },
//                   body: JSON.stringify({
//                     cartObject:
//                       cartResult && cartResult.length > 0
//                         ? cartResult
//                         : response.cart,
//                     couponCode: couponsArray[i],
//                     cartTotal: cartTot,
//                   }),
//                 }
//               );
//               // const response = await res.json();

//               if (!res2.ok) {
//                 const resErr = await res2.json();
//                 console.log("Res error ", resErr);
//                 throw new Error(resErr.msg);
//               } else {
//                 const response2 = await res2.json();
//                 cartResult = response2.cart;
//                 cartTot = response2.newCartTotal;
//               }
//             }

//             // setCouponsArray(updatedCouponsArray);
//             setCart(response.cart);
//             setModifiedCart(cartResult);

//             if (couponsArray && couponsArray.length < 1) {
//               getCartTotal(response.cart);
//               getTax(cartResult);
//             } else {
//               setCartTotal(cartTot);
//               getCartTotal(cartResult);
//               getTax(cartResult);
//               // getCartTotal(cartResult);
//             }
//           } else {
//             setCart(response.cart);
//             getCartTotal(response.cart);
//             getTax(response.cart);
//           }
//           // setCart(response.cart);
//           // getCartTotal(response.cart);
//         } else {
//           throw new Error();
//         }
//       }

//       // User is not logged in update cart in localstorage
//       // else {
//       //   const res = await fetch("http://localhost:8000/api/order/updateCart", {
//       //     method: "POST",
//       //     headers: {
//       //       Accept: "application/json",
//       //       "Content-Type": "application/json",
//       //       Authorization: localStorage.getItem("token"),
//       //     },
//       //     body: JSON.stringify({
//       //       cart,
//       //     }),
//       //   });
//       //   const response = await res.json();
//       //   if (response.success) {
//       //     //get the coupon codes from the modified cart
//       //     //apply coupons in a loop to the original cart
//       //     //save the modified cart in applycoupon
//       //     if (couponsArray && couponsArray.length > 0) {
//       //       let cartResult;
//       //       let cartTot = cartTotal;

//       //       for (let i = 0; i < couponsArray.length; i++) {
//       //         const res2 = await fetch(
//       //           "http://localhost:8000/api/order/applycoupons",
//       //           {
//       //             method: "POST",
//       //             headers: {
//       //               Accept: "application/json",
//       //               "Content-Type": "application/json",
//       //               Authorization: localStorage.getItem("token"),
//       //             },
//       //             body: JSON.stringify({
//       //               cartObject:
//       //                 cartResult && cartResult.length > 0
//       //                   ? cartResult
//       //                   : response.cart,
//       //               couponCode: couponsArray[i],
//       //               cartTotal: cartTot,
//       //             }),
//       //           }
//       //         );
//       //         // const response = await res.json();

//       //         if (!res2.ok) {
//       //           const resErr = await res2.json();
//       //           console.log("Res error ", resErr);
//       //           throw new Error(resErr.msg);
//       //         } else {
//       //           const response2 = await res2.json();
//       //           cartResult = response2.cart;
//       //           cartTot = response2.newCartTotal;
//       //         }
//       //       }

//       //       // setCouponsArray(updatedCouponsArray);
//       //       setCart(response.cart);
//       //       setModifiedCart(cartResult);

//       //       if (couponsArray && couponsArray.length < 1) {
//       //         getCartTotal(response.cart);
//       //         getTax(cartResult);
//       //       } else {
//       //         setCartTotal(cartTot);
//       //         getCartTotal(cartResult);
//       //         getTax(cartResult);
//       //         // getCartTotal(cartResult);
//       //       }
//       //     } else {
//       //       // setCart(response.cart);
//       //       localStorage.setItem("cart", response.cart);
//       //       getCartTotal(response.cart);
//       //       getTax(response.cart);
//       //     }
//       //     // setCart(response.cart);
//       //     // getCartTotal(response.cart);
//       //   } else {
//       //     throw new Error();
//       //   }
//       // }
//     } catch (err) {
//       console.log("error", err.message);
//       if (err.message == "Your cart is empty") {
//         console.log("Cart empty");
//         setCouponsArray(null);
//         setCart(null);
//         setModifiedCart(null);
//       }
//     }
//   };

//   const applyCoupon = async () => {
//     try {
//       const res = await fetch("http://localhost:8000/api/order/applycoupons", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: localStorage.getItem("token"),
//         },
//         body: JSON.stringify({
//           cartObject:
//             modifiedCart && modifiedCart.length > 0 ? modifiedCart : cart,
//           couponCode,
//           cartTotal,
//         }),
//       });
//       // const response = await res.json();

//       if (!res.ok) {
//         throw new Error("No coupons found");
//       } else {
//         const response = await res.json();
//         setModifiedCart(response.cart);
//         // let modifiedCouponsArray = [];

//         // for (let i = 0; i < response.couponsArray.length; i++) {
//         //   modifiedCouponsArray.push({
//         //     key: i,
//         //     label: response.couponsArray[i],
//         //   });
//         // }

//         // console.log("CouponsArray ", modifiedCouponsArray);
//         setCouponsArray(response.couponsArray);
//         if (response.newCartTotal) {
//           setCartTotal(response.newCartTotal);
//         } else {
//           getCartTotal(response.cart);
//         }

//         getTax(response.cart);
//         // setOpenCouponModal(false);
//         // setMyCoupons(response.coupons);
//         // setProductsAdded(tags);
//       }
//     } catch (err) {
//       console.log("Error ", err);
//     }
//   };

//   const handleToggle = (value) => {
//     setAgreed(!agreed);
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }
//     setChecked(newChecked);
//   };

//   const purchaseCart = async () => {
//     try {
//       // if (isAuthenticated) {
//       setOpen(true);

//       let res;
//       if (isAuthenticated) {
//         res = await fetch("http://localhost:8000/api/order/purchaseCart", {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: localStorage.getItem("token"),
//           },
//           body: JSON.stringify({
//             cart: modifiedCart && modifiedCart.length > 0 ? modifiedCart : cart,
//             totalAmount:
//               Math.round(
//                 (taxBreakdown.totalTax + cartTotal + Number.EPSILON) * 100
//               ) / 100,
//             totalTax:
//               Math.round((taxBreakdown.totalTax + Number.EPSILON) * 100) / 100,
//             subTotal: Math.round((cartTotal + Number.EPSILON) * 100) / 100,
//             shippingAddress: shipAddress,
//           }),
//         });
//       } else {
//         console.log("initiating guest purchase");
//         // return;
//         setGuestInfoDialog(false);

//         res = await fetch("http://localhost:8000/api/order/purchaseGuestCart", {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             // Authorization: localStorage.getItem("token"),
//           },
//           body: JSON.stringify({
//             cart: modifiedCart && modifiedCart.length > 0 ? modifiedCart : cart,
//             totalAmount:
//               Math.round(
//                 (taxBreakdown.totalTax + cartTotal + Number.EPSILON) * 100
//               ) / 100,
//             totalTax:
//               Math.round((taxBreakdown.totalTax + Number.EPSILON) * 100) / 100,
//             subTotal: Math.round((cartTotal + Number.EPSILON) * 100) / 100,
//             firstName,
//             lastName,
//             email,
//             shippingAddress: shipAddress,
//           }),
//         });
//       }

//       const response = await res.json();

//       console.log("response is >>> ", response);

//       // return;

//       if (response.success) {
//         console.log("payment done");
//         setOpen(false);
//         setPaymentDone(true);
//         setAlert({
//           open: true,
//           message: `Order created with orderID : ${response.orderID}`,
//           backgroundColor: "#4BB543",
//         });
//       } else if (!response.success) {
//         console.log("error ");
//         setOpen(false);
//         // setPaymentDone(false);
//         console.log("22");

//         setAlert({
//           open: true,
//           message: response.msg,
//           backgroundColor: "#FF3232",
//         });
//         throw new Error();
//       }
//     } catch (err) {
//       // console.log("error", err);
//     }
//   };

//   const handleClose = () => {
//     setOpenShippingDialog(false);
//   };

//   const getUserFromToken = async () => {
//     if (localStorage.getItem("token")) {
//       await dispatch(auth.getUserFromToken(localStorage.getItem("token")));
//     }
//   };

//   const closeGuestInfoDialog = () => {
//     setGuestInfoDialog(false);
//     setEmail(null);
//     setFirstName(null);
//     setLastName(null);
//   };

//   useEffect(() => {
//     console.log("isAuthenticated state changed ---- ", isAuthenticated);
//     getCart();
//     getShippingAddressList();
//   }, [isAuthenticated]);

//   // Update tax breakdown if ship address is changed
//   useEffect(() => {
//     if (shipAddress && cart) getTax(cart);
//   }, [shipAddress]);

//   useEffect(() => {
//     console.log("payment done is changed !!");

//     if (paymentDone == true) {
//       Swal.fire({
//         title: "Successful !",
//         text: "Payment completed successfully.",
//         icon: "success",
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Continue shopping",
//         onClose: () => setPaymentDone(false),
//       }).then((result) => {
//         if (result.value) {
//         }
//       });
//     }
//   }, [paymentDone]);

//   useEffect(() => {
//     console.log("open is changed !!");
//     // if (open == true) {
//     Swal.fire({
//       title: "Processing your order",
//       // html: 'I will close in <b></b> milliseconds.',
//       timerProgressBar: true,
//       didOpen: () => {
//         console.log("in close", open);
//         Swal.showLoading();
//         if (open == false) Swal.close();
//       },
//       onClose: () => setOpen(false),
//     }).then((result) => {
//       /* Read more about handling dismissals below */
//       if (result.value) {
//       }
//     });
//     // }
//   }, [open]);

//   // Get cart and ship address list on page load
//   useEffect(() => {
//     getUserFromToken();
//     getCart();
//     getShippingAddressList();
//   }, []);

//   return (
//     <React.Fragment>
//       {/* Dialog for guest info details */}
//       <Dialog
//         aria-labelledby="guestInfo"
//         aria-describedby="guestInfo"
//         open={guestInfoDialog}
//         onClose={closeGuestInfoDialog}
//         scroll={"paper"}
//         // classes={{ paper: classes.dialogPaper }}
//         closeAfterTransition
//       >
//         <Fade in={guestInfoDialog}>
//           <DialogContent dividers={true}>
//             <Grid container direction="column" spacing={2}>
//               <Grid container item style={{ marginLeft: "-1em" }}>
//                 <IconButton onClick={() => setGuestInfoDialog(false)}>
//                   <ArrowBackIosIcon />
//                 </IconButton>
//               </Grid>
//               <Grid container item justify="center" spacing={2}>
//                 <Grid item xs={12}>
//                   <TextField
//                     id="firstName"
//                     type="text"
//                     label="First Name"
//                     margin="dense"
//                     fullWidth
//                     required
//                     value={firstName ? firstName : ""}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     // InputProps={{
//                     //   startAdornment: (
//                     //     <InputAdornment position="start">
//                     //       <Face />
//                     //     </InputAdornment>
//                     //   ),
//                     // }}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     id="lastName"
//                     type="text"
//                     label="Last Name"
//                     margin="dense"
//                     fullWidth
//                     required
//                     value={lastName ? lastName : ""}
//                     onChange={(e) => setLastName(e.target.value)}
//                     // InputProps={{
//                     //   startAdornment: (
//                     //     <InputAdornment position="start">
//                     //       <Face />
//                     //     </InputAdornment>
//                     //   ),
//                     // }}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     id="email"
//                     type="text"
//                     label="Email"
//                     margin="dense"
//                     fullWidth
//                     required
//                     value={email ? email : ""}
//                     onChange={(e) => setEmail(e.target.value)}
//                     // InputProps={{
//                     //   startAdornment: (
//                     //     <InputAdornment position="start">
//                     //       <Email />
//                     //     </InputAdornment>
//                     //   ),
//                     // }}
//                   />
//                 </Grid>

//                 {/* <Grid item xs={12}>
//                   <TextField
//                     id="password"
//                     type="password"
//                     label="Password"
//                     margin="dense"
//                     fullWidth
//                     required
//                     value={password ? password : ""}
//                     onChange={(e) => setPassword(e.target.value)}
//                     // InputProps={{
//                     //   startAdornment: (
//                     //     <InputAdornment position="start">
//                     //       <Icon />
//                     //     </InputAdornment>
//                     //   ),
//                     // }}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     id="confirmPassword"
//                     type="password"
//                     label="Confirm password"
//                     margin="dense"
//                     fullWidth
//                     required
//                     value={confirmPassword ? confirmPassword : ""}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     // InputProps={{
//                     //   startAdornment: (
//                     //     <InputAdornment position="start">
//                     //       <Icon />
//                     //     </InputAdornment>
//                     //   ),
//                     // }}
//                   />
//                 </Grid> */}
//               </Grid>

//               <Grid container item>
//                 <FormControlLabel
//                   // classes={{
//                   //   root: classes.checkboxLabelControl,
//                   //   label: classes.checkboxLabel,
//                   // }}
//                   control={
//                     <Checkbox
//                       tabIndex={-1}
//                       onClick={() => handleToggle(1)}
//                       checkedIcon={<Check />}
//                       icon={<Check />}
//                       // classes={{
//                       //   checked: classes.checked,
//                       //   root: classes.checkRoot,
//                       // }}
//                     />
//                   }
//                   label={
//                     <Typography variant="caption">
//                       By continuing, you agree to Pranaforce's
//                       <span style={{ color: "#255586" }}>
//                         {"  Privacy Policy."}
//                       </span>
//                     </Typography>
//                   }
//                 />
//               </Grid>

//               <Grid container justify="center" item>
//                 <Button
//                   fullWidth
//                   onClick={purchaseCart}
//                   style={{
//                     backgroundColor: "#255586",
//                     color: "#FFF",
//                     boxShadow:
//                       "0 5px 5px -2px rgba(" + hexToRgb("#505050") + ",.4)",
//                   }}
//                 >
//                   Purchase product
//                 </Button>
//               </Grid>
//             </Grid>
//           </DialogContent>
//         </Fade>
//       </Dialog>

//       <Grid container justify="center">
//         <Paper className={classes.paper}>
//           <Grid container justify="space-between">
//             <Grid item>
//               <Typography variant="h6" gutterBottom>
//                 Order summary
//               </Typography>
//             </Grid>
//             <Grid item>
//               <Button
//                 variant="contained"
//                 // color='primary'
//                 disabled={shipAddress && taxBreakdown ? false : true}
//                 onClick={
//                   isAuthenticated
//                     ? purchaseCart
//                     : () => {
//                         setGuestInfoDialog(true);
//                       }
//                 }
//                 style={
//                   shipAddress && taxBreakdown
//                     ? { backgroundColor: "#307df7", color: "#FFF" }
//                     : null
//                 }
//               >
//                 {/* Purchase */}
//                 {isAuthenticated ? "Purchase" : "Continue"}
//               </Button>
//             </Grid>
//           </Grid>
//           <Divider />

//           {modifiedCart && modifiedCart.length ? (
//             <List disablePadding>
//               <Grid container justify="center" alignItems="center">
//                 <ListItem className={classes.listItem}>
//                   <Grid item xs={4}>
//                     <Typography variant="body1">Product Name</Typography>
//                   </Grid>
//                   <Grid container item justify="flex-end" xs={4}>
//                     <Grid item>
//                       <Typography variant="body1">Quantity</Typography>
//                     </Grid>
//                   </Grid>
//                   <Grid container item justify="flex-end" xs={4}>
//                     <Grid item>
//                       <Typography variant="body1">Unit price</Typography>
//                     </Grid>
//                   </Grid>
//                 </ListItem>
//                 {modifiedCart.map((product, i) => (
//                   <ListItem className={classes.listItem} key={i}>
//                     <Grid item xs={4}>
//                       <ListItemText
//                         primary={product.name}
//                         secondary={product.desc}
//                       />
//                     </Grid>
//                     <Grid container item justify="flex-end" xs={4}>
//                       <Grid item>
//                         <Box width={75}>
//                           {/* <TextField
//                               name="productQuant"
//                               variant="outlined"
//                               id="productQuant"
//                               select
//                               value={product.quant ? product.quant : ""}
//                               onChange={(e) => {
//                                 changeCart(e, product, i);
//                               }}
//                               inputProps={{
//                                 style: {
//                                   textAlign: "right",
//                                 },
//                               }}
//                             > */}

//                           <FormControl className={classes.formControl}>
//                             <Select
//                               name="productQuant"
//                               variant="outlined"
//                               id="productQuant"
//                               select
//                               value={product.quant ? product.quant : ""}
//                               onChange={(e) => {
//                                 changeCart(e, product, i);
//                               }}
//                             >
//                               <MenuItem value={""}>0 (Delete)</MenuItem>
//                               <MenuItem value={1}>1</MenuItem>
//                               <MenuItem value={2}>2</MenuItem>
//                               <MenuItem value={3}>3</MenuItem>
//                               <MenuItem value={4}>4</MenuItem>
//                             </Select>
//                           </FormControl>

//                           {/* </TextField> */}
//                         </Box>
//                       </Grid>
//                     </Grid>
//                     <Grid
//                       container
//                       item
//                       // style={{ border: "1px solid red" }}
//                       justify="flex-end"
//                       xs={4}
//                     >
//                       <Grid
//                         item
//                         container
//                         direction="column"
//                         justify="flex-end"
//                         align="flex-end"
//                         // style={{ border: "1px solid red" }}
//                       >
//                         <Typography
//                           variant="body1"
//                           style={{
//                             textAlign: "right",
//                             color:
//                               product.primaryOriginalAmount ==
//                                 product.unitPrice || product.deductedCartAmount
//                                 ? "#000"
//                                 : "#7A7A7A",
//                             textDecoration:
//                               product.primaryOriginalAmount ==
//                                 product.unitPrice || product.deductedCartAmount
//                                 ? null
//                                 : "line-through",
//                           }}
//                         >
//                           $ {product.primaryOriginalAmount}
//                         </Typography>
//                         {product.deductedCartAmount ? null : product.primaryOriginalAmount !=
//                           product.unitPrice ? (
//                           <Typography
//                             variant="body2"
//                             style={{ textAlign: "right" }}
//                           >
//                             $ {product.unitPrice}
//                           </Typography>
//                         ) : null}
//                       </Grid>
//                     </Grid>
//                   </ListItem>
//                 ))}
//               </Grid>
//               <Divider />
//               <Grid container justify="space-between">
//                 <Grid item>
//                   <Grid container direction="column">
//                     <Grid item>
//                       <Typography variant="subtitle2">Subtotal : </Typography>
//                     </Grid>
//                     {taxBreakdown ? (
//                       <React.Fragment>
//                         <Grid item>
//                           <Typography variant="body2">
//                             Tax breakdown :
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2">County tax :</Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2">
//                             Special district tax :
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2">State tax :</Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2">Total tax :</Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography
//                             variant="subtitle2"
//                             // style={{ color: "#777" }}
//                           >
//                             Total payble amount :
//                           </Typography>
//                         </Grid>
//                       </React.Fragment>
//                     ) : (
//                       ""
//                     )}
//                   </Grid>
//                 </Grid>
//                 <Grid item>
//                   <Grid container direction="column">
//                     <Grid item>
//                       <Typography variant="subtitle2" align="right">
//                         $ {cartTotal ? cartTotal : ""}
//                       </Typography>
//                     </Grid>
//                     {taxBreakdown ? (
//                       <React.Fragment>
//                         <Grid item>
//                           <Typography variant="body2" align="right">
//                             ------
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2" align="right">
//                             $ {taxBreakdown.countyTax}{" "}
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2" align="right">
//                             $ {taxBreakdown.specialDistrictTax}
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2" align="right">
//                             $ {taxBreakdown.stateTax}
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2" align="right">
//                             $ {taxBreakdown.totalTax}
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography
//                             variant="subtitle2"
//                             align="right"
//                             // style={{
//                             //   color: "#777",
//                             //   fontWeight: 300,
//                             //   fontSize: "1.25rem",
//                             // }}
//                           >
//                             ${" "}
//                             {Math.round(
//                               (taxBreakdown.totalTax +
//                                 cartTotal +
//                                 Number.EPSILON) *
//                                 100
//                             ) / 100}
//                           </Typography>
//                         </Grid>
//                       </React.Fragment>
//                     ) : (
//                       ""
//                     )}
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </List>
//           ) : cart && cart.length > 0 ? (
//             <List disablePadding>
//               <Grid container justify="center" alignItems="center">
//                 <ListItem className={classes.listItem}>
//                   <Grid item xs={4}>
//                     <Typography variant="body1">Product Name</Typography>
//                   </Grid>
//                   <Grid container item justify="flex-end" xs={4}>
//                     <Grid item>
//                       <Typography variant="body1">Quantity</Typography>
//                     </Grid>
//                   </Grid>
//                   <Grid container item justify="flex-end" xs={4}>
//                     <Grid item>
//                       <Typography variant="body1">Unit price</Typography>
//                     </Grid>
//                   </Grid>
//                 </ListItem>

//                 {cart.map((product, i) => (
//                   <ListItem className={classes.listItem} key={i}>
//                     <Grid item xs={4}>
//                       <ListItemText
//                         primary={product.name}
//                         secondary={product.desc}
//                       />
//                     </Grid>
//                     <Grid container item justify="flex-end" xs={4}>
//                       <Grid item>
//                         <Box width={75}>
//                           {/* <TextField
//                               name="productQuant"
//                               variant="outlined"
//                               id="productQuant"
//                               select
//                               value={product.quant ? product.quant : ""}
//                               onChange={(e) => {
//                                 changeCart(e, product, i);
//                               }}
//                               inputProps={{
//                                 style: {
//                                   textAlign: "right",
//                                 },
//                               }}
//                             > */}
//                           <FormControl className={classes.formControl}>
//                             <Select
//                               // labelId="demo-simple-select-label"
//                               name="productQuant"
//                               variant="outlined"
//                               id="productQuant"
//                               value={product.quant ? product.quant : ""}
//                               onChange={(e) => {
//                                 changeCart(e, product, i);
//                               }}
//                             >
//                               <MenuItem value={""}>0 (Delete)</MenuItem>
//                               <MenuItem value={1}>1</MenuItem>
//                               <MenuItem value={2}>2</MenuItem>
//                               <MenuItem value={3}>3</MenuItem>
//                               <MenuItem value={4}>4</MenuItem>
//                             </Select>
//                           </FormControl>
//                           {/* </TextField> */}
//                         </Box>
//                       </Grid>
//                     </Grid>
//                     <Grid container item justify="flex-end" xs={4}>
//                       <Grid item>
//                         <Typography variant="body2">
//                           $ {product.unitPrice}
//                         </Typography>
//                       </Grid>
//                     </Grid>
//                   </ListItem>
//                 ))}
//               </Grid>
//               <Divider />
//               <Grid container justify="space-between">
//                 <Grid item>
//                   <Grid container direction="column">
//                     <Grid item>
//                       <Typography variant="subtitle2">Subtotal : </Typography>
//                     </Grid>
//                     {taxBreakdown ? (
//                       <React.Fragment>
//                         <Grid item>
//                           <Typography variant="body2">
//                             Tax breakdown :
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2">County tax :</Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2">
//                             Special district tax :
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2">State tax :</Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2">Total tax :</Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="subtitle2">
//                             Total payble amount :
//                           </Typography>
//                         </Grid>
//                       </React.Fragment>
//                     ) : (
//                       ""
//                     )}
//                   </Grid>
//                 </Grid>
//                 <Grid item>
//                   <Grid container direction="column">
//                     <Grid item>
//                       <Typography variant="subtitle2" align="right">
//                         $ {cartTotal ? cartTotal : ""}
//                       </Typography>
//                     </Grid>
//                     {taxBreakdown ? (
//                       <React.Fragment>
//                         <Grid item>
//                           <Typography variant="body2" align="right">
//                             ------
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2" align="right">
//                             $ {taxBreakdown.countyTax}{" "}
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2" align="right">
//                             $ {taxBreakdown.specialDistrictTax}
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2" align="right">
//                             $ {taxBreakdown.stateTax}
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="body2" align="right">
//                             $ {taxBreakdown.totalTax}
//                           </Typography>
//                         </Grid>
//                         <Grid item>
//                           <Typography variant="subtitle2" align="right">
//                             ${" "}
//                             {Math.round(
//                               (taxBreakdown.totalTax +
//                                 cartTotal +
//                                 Number.EPSILON) *
//                                 100
//                             ) / 100}
//                           </Typography>
//                         </Grid>
//                       </React.Fragment>
//                     ) : (
//                       ""
//                     )}
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </List>
//           ) : (
//             <React.Fragment>
//               <CardActionArea>
//                 <Grid
//                   container
//                   direction="column"
//                   justify="center"
//                   alignItems="center"
//                 >
//                   <Grid item>
//                     <ShoppingCartIcon
//                       style={{ height: "140px", width: "340px" }}
//                     />
//                   </Grid>

//                   <Grid item>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       No Items found
//                     </Typography>
//                   </Grid>

//                   <Grid item>
//                     <Typography
//                       variant="subtitle2"
//                       color="textSecondary"
//                       component="p"
//                     >
//                       Sorry mate ... No items found in your cart !!
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </CardActionArea>
//             </React.Fragment>
//           )}

//           <Divider />
//           <Grid container spacing={2}>
//             <Grid container item sm={12} md={6} alignItems="center">
//               <Grid container>
//                 <Grid item xs={11}>
//                   <Typography
//                     variant="h6"
//                     gutterBottom
//                     className={classes.title}
//                   >
//                     Shipping
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={1}>
//                   <IconButton
//                     onClick={addShippingAddress}
//                     // style={{ paddingLeft: "1em" }}
//                   >
//                     <AddIcon />
//                   </IconButton>
//                 </Grid>
//               </Grid>
//               <Grid container item>
//                 <FormControl className={classes.formControl} fullWidth>
//                   <Select
//                     variant="outlined"
//                     required
//                     fullWidth
//                     id="address"
//                     label="Address"
//                     name="address"
//                     // disabled={shippingAddressList ? false : true}
//                     value={shipAddress ? shipAddress : ""}
//                     onChange={(e) => {
//                       console.log("selected menu item is >> ", e.target.value);
//                       setShipAddress(e.target.value);
//                     }}
//                   >
//                     {isAuthenticated ? (
//                       shippingAddressList && shippingAddressList.length > 0 ? (
//                         shippingAddressList.map((option, key) => (
//                           <MenuItem key={key} value={option}>
//                             {option.street +
//                               " , " +
//                               option.city +
//                               " , " +
//                               option.state +
//                               " , " +
//                               option.country +
//                               " , " +
//                               option.zipCode}
//                           </MenuItem>
//                         ))
//                       ) : (
//                         <MenuItem disabled>{"No address found."}</MenuItem>
//                       )
//                     ) : shippingAddressList &&
//                       shippingAddressList.length > 0 ? (
//                       shippingAddressList.map((option, key) => (
//                         <MenuItem key={key} value={option}>
//                           {option.street +
//                             " , " +
//                             option.city +
//                             " , " +
//                             option.state +
//                             " , " +
//                             option.country +
//                             " , " +
//                             option.zipCode}
//                         </MenuItem>
//                       ))
//                     ) : (
//                       <MenuItem disabled>{"No address found."}</MenuItem>
//                     )}
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid
//                 item
//                 container
//                 xs={12}
//                 style={{
//                   display:
//                     couponsArray && couponsArray.length > 0 ? "block" : "none",
//                 }}
//               >
//                 {couponsArray && couponsArray.length > 0 ? (
//                   <TagsInput
//                     value={couponsArray}
//                     onChange={removeCoupon}
//                     inputProps={{ placeholder: null, disabled: true }}
//                     tagProps={{ className: "react-tagsinput-tag info" }}
//                   />
//                 ) : null}
//               </Grid>
//               <Grid
//                 item
//                 container
//                 xs={12}
//                 justify="space-evenly"
//                 alignItems="center"
//                 spacing={2}
//                 // alignItems="center"
//                 style={{ marginTop: "3.5%" }}
//               >
//                 <Grid item>
//                   <TextField
//                     // error={couponCreationError}
//                     id="filled-required"
//                     onChange={(v) => {
//                       setCouponCode(v.target.value);
//                     }}
//                     label="Coupon Code"
//                     placeholder="Amount"
//                     value={couponCode ? couponCode : ""}
//                     // defaultValue="Hello World"
//                     variant="filled"
//                   />
//                   {/* {couponsArray && couponsArray.length > 0
//                     ? couponsArray.map((item, key) => (
//                         <TagsInput
//                           value={couponsArray.map((item) => item.label)}
//                           // onChange={handleTags}
//                           tagProps={{ className: "react-tagsinput-tag info" }}
//                         />
//                       ))
//                     : null} */}
//                 </Grid>
//                 <Grid item>
//                   <Button
//                     onClick={() => {
//                       applyCoupon();
//                     }}
//                     size="medium"
//                     style={{ backgroundColor: "#307df7", color: "#fff" }}
//                   >
//                     Apply coupon
//                   </Button>
//                 </Grid>
//               </Grid>

//               {openShippingDialog ? (
//                 <Dialog
//                   open={openShippingDialog}
//                   onClose={handleClose}
//                   aria-labelledby="form-dialog-title"
//                 >
//                   <DialogTitle id="form-dialog-title">
//                     Add shipping address
//                   </DialogTitle>
//                   <DialogContent>
//                     <DialogContentText>
//                       Please fill details to continue ..
//                     </DialogContentText>
//                     <form
//                       className={classes.form}
//                       noValidate
//                       autoComplete="off"
//                     >
//                       <Grid container spacing={2}>
//                         <Grid item xs={12} sm={12}>
//                           <TextField
//                             name="streetName"
//                             variant="outlined"
//                             required
//                             fullWidth
//                             id="streetName"
//                             label="Street address"
//                             value={street ? street : ""}
//                             onChange={(e) => setStreet(e.target.value)}
//                           />
//                         </Grid>
//                         <Grid item xs={12} sm={12}>
//                           <TextField
//                             name="building"
//                             variant="outlined"
//                             fullWidth
//                             id="building"
//                             label="Building/Apartment/Suite (optional)"
//                             value={building ? building : ""}
//                             onChange={(e) => setBulding(e.target.value)}
//                           />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                           <TextField
//                             variant="outlined"
//                             required
//                             fullWidth
//                             id="city"
//                             label="City"
//                             name="city"
//                             value={city ? city : ""}
//                             onChange={(e) => setCity(e.target.value)}
//                           />
//                         </Grid>
//                         <Grid item xs={6}>
//                           <TextField
//                             variant="outlined"
//                             required
//                             select={country === "US" ? true : false}
//                             fullWidth
//                             id="state"
//                             label="State"
//                             name="state"
//                             value={state ? state : ""}
//                             onChange={(e) => setState(e.target.value)}
//                           >
//                             {USstates.map((option, key) => (
//                               <MenuItem key={key} value={option.abbreviation}>
//                                 {option.name}
//                               </MenuItem>
//                             ))}
//                           </TextField>
//                         </Grid>
//                         <Grid item xs={6}>
//                           <TextField
//                             variant="outlined"
//                             required
//                             fullWidth
//                             name="zipCode"
//                             label="Zip Code"
//                             id="zipCode"
//                             type="number"
//                             value={zipCode ? zipCode : ""}
//                             onChange={(e) => setZipCode(e.target.value)}
//                           />
//                         </Grid>
//                         <Grid item xs={6}>
//                           <TextField
//                             variant="outlined"
//                             required
//                             fullWidth
//                             select
//                             name="country"
//                             label="Country"
//                             id="country"
//                             value={country ? country : ""}
//                             onChange={(e) => setCountry(e.target.value)}
//                           >
//                             {countries.map((option, key) => (
//                               <MenuItem key={key} value={option.abbreviation}>
//                                 {option.name}
//                               </MenuItem>
//                             ))}
//                           </TextField>
//                         </Grid>
//                       </Grid>
//                     </form>
//                   </DialogContent>
//                   <DialogActions>
//                     <Button
//                       onClick={handleShippingSubmit}
//                       color="primary"
//                       variant="contained"
//                     >
//                       Save
//                     </Button>
//                     <Button onClick={handleClose} variant="contained">
//                       Cancel
//                     </Button>
//                   </DialogActions>
//                 </Dialog>
//               ) : (
//                 ""
//               )}
//               {/* <Grid item>
//                 <Typography gutterBottom> ----------- </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography gutterBottom>[Customer Name]</Typography>
//               </Grid>
//               <Grid item>
//                 <Typography gutterBottom>{addresses.join(', ')}</Typography>
//               </Grid> */}
//             </Grid>
//             <Grid container item direction="column" sm={12} md={6}>
//               <Typography variant="h6" gutterBottom className={classes.title}>
//                 Payment details
//               </Typography>
//               <Grid container>
//                 {payments.map((payment, key) => (
//                   <React.Fragment key={key}>
//                     <Grid item xs={6}>
//                       <Typography gutterBottom>{payment.name}</Typography>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <Typography gutterBottom>{payment.detail}</Typography>
//                     </Grid>
//                   </React.Fragment>
//                 ))}
//               </Grid>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Grid>

//       <Snackbar
//         open={alert.open}
//         message={alert.message}
//         ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
//         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//         onClose={() => setAlert({ ...alert, open: false })}
//         autoHideDuration={4000}
//       />
//     </React.Fragment>
//   );
// }

// const payments = [
//   { name: "Card type", detail: "-" },
//   { name: "Card holder", detail: "-" },
//   { name: "Card number", detail: "-" },
//   { name: "Expiry date", detail: "-" },
// ];
