# Ecommerce store + Admin panel - full stack MERN application

## Introduction - project's aim
From the desire to know more about web applications, not only the front end part, I wanted to create an application that contains both the front end and the back end part,so I decided that I would create a online store, for which products and orders can be managed from an administrator panel.

So this project contains 2 applications, one of which is the online store, where the customer can see the available products, add the products he likes to his favorites and order the ones he wants. And the second application that is intended for the administrator, where he can log in, see information related to the added products, modify and update them. At the same time, he can see the orders placed by customers and update their delivery status.

## Technologies
The technologies used in this project seem to me to be very efficient and oriented towards creating an efficient and easy-to-modify application in subsequent updates, and these are:

### React
React, a powerful library used in the front end of both applications, which helps you structure and organize in an easy-to-understand way, both javascript and jsx code. 
  
### Node.js & Express
Node.js and Express used on the backend side, where I created a server that I linked to the MongoDb database, and for which I created certain routes that serve the front end of the online store as well as the admin panel.

### MongoDb
MongoDb is the database that I choosed to use for this project because of it's JSON-like data structure.

### HTML & SCSS
HTML & SCSS basic languages for web applications, I choosed SCSS over CSS only because it's nested structure, which helps me understand faster HTML components hierarchy.


### Dependencies :
#### Redux
I used Redux for both the online store and the admin panel. In online store it was used for cart and wishlist state management, and for admin panel it was used to update products information in real-time, without fetching again the updated product from database.
#### Axios
I used axios to fetch products from database and to use the routes from database.
#### Bcrypt & JsonWebToken
Bcrypt was used to hash the password before storing it to database, when a new user register on admin panel, and JWT was used to allow access to authorized users to modify and update database products.
#### Mongoose
Mongoose was used to create order, user and product schemas and models for database.

## What I learned?
This was the first project that matured me on the web development side and helped me better understand the overall image of a complex web application. I understood better how the part of accessibility to some information in the database works and how the information and its access can be secured.I understood better how Redux works and how we can update the information in the application without making a request to the database. I learned how to manipulate and change information from the MongoDb database. I have better understood the authentication process and how we can limit the access of unauthenticated ones using react-router.

## Functionalities
Both websites are deployed using Render.com, you can find here [Ecommerce store](https://shzwebsite.onrender.com) and [Admin panel](https://shzecomadminpage.onrender.com)

### Ecommerce store
**All products are fetched from database with updated stock quantity, and using Redux those products added to favorites are filtered and highlighted using a heart.**

<img src="https://github.com/Costinnn/shauz-ecommerce-admin-panel/assets/103998434/4aa57421-8be2-46e1-b85d-205a2f1aba69" width=50%>

**From favorite list products can be removed or added to cart. Products that are on sale are highlighted using red color price.**

<img src="https://github.com/Costinnn/shauz-ecommerce-admin-panel/assets/103998434/9a0301b5-0bb6-47b9-8d62-76b1f7c70172" width=50%>

**From product page, the items can also be added to cart if a size is selected. If the product stock in equal to 0 that product can't be selected or added to cart.**

<img src="https://github.com/Costinnn/shauz-ecommerce-admin-panel/assets/103998434/fbf317ac-ebcb-445d-ac3b-ab11d9dd313a" width=50%>

**Checkout page shows order products summary and allows you to complete information about contact and shipping. When an order is placed it is sent to database and on store owner email using EmailJS.**

<img src="https://github.com/Costinnn/shauz-ecommerce-admin-panel/assets/103998434/b5a61b64-1947-45ef-a4d3-67f15bbcc2d3" width=50%>

### Admin page
**If user wasn't logged he has access only to login/register page, where he can create an account and wait for authorization or he can login. If user was logged in the las 3 days and token is available he will be redirected to Order-list page.**

<img src="https://github.com/Costinnn/shauz-ecommerce-admin-panel/assets/103998434/8eac6fc5-1c52-47fc-9d76-88c82340b999" width=80%>

**This page display a summary of all products from database and their details. Each product page can be accessed by "SEE PRODUCT" button.**

<img src="https://github.com/Costinnn/shauz-ecommerce-admin-panel/assets/103998434/80dd645c-48d0-4021-8bdd-549c984e2feb" width=80%>

**In the product page admin can change and update every detail about the product, title, photos, description, stock sizes, the update will change database information and edux state information for that product.**

<img src="https://github.com/Costinnn/shauz-ecommerce-admin-panel/assets/103998434/8d7e354e-cf02-40ea-b255-a4a97b84ca27" width=80%>

**The admin can also add new products by completing each input information. The new products will also be added in MongoDb database and Redux state.**

<img src="https://github.com/Costinnn/shauz-ecommerce-admin-panel/assets/103998434/3e7bb142-8856-4b2e-b220-350cb286be4d" width=80%>


## Launch
Front end : npm install

Back end : npm install
