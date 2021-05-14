# E-Commerce

## Application Overview
This is a fully functional eCommerce application which is built from start to end. Some of the key features of the app are:
 - Users are able to navigate through the list of products the store provides and them to cart.
 - User capability to change the number of units per product and corresponding subtotal amount will be calculated dynamically.
 - During checkout process, users are allowed to input their shipping address.
 - Shipping fee will be calculated based on user's shipping location and subsequently added to the subtotal amount.
 - Order summary will be displayed before user makes the payment.
 - Accepts real credit/debit details to make the payment.
 - Order receipt/invoice will be sent to the user's e-mail post successful checkout.
<br />

![User Interface](https://github.com/maheswarha/e-commerce/blob/master/E-Commerce%20User%20Interface.gif)
<br />
<br />

## Project Details
 - The following project was build purely on React framework and it only involves front-end development
 - The project didn't require back-end development or database because '[Commerce.js](https://commercejs.com/)' is used to design, build, and control the products listed, shipping methods, etc using the API(s) and dashboard provided. It also generates the order receipt/invoice to user and order instruction to the e-commerce owner/supplier.
 - '[Stripe](https://stripe.com/)' has been used for the payment infrastructure (Credit/Debit Card). For testing purposes, user can use Stripe's default card number, '**4242 4242 4242 4242**'.
 - The project has been deployed and hosted by Firebase.
 - The live website can be viewed [HERE](https://e-commerce-c677a.web.app/).