# BetterWay Mini E-Commerce Application
This project is a mini e-commerce web application developed as part of the BetterWay company assignment. The application demonstrates core frontend development skills using React, including product listing, cart management, routing, and state handling.
The goal of the project is to build a simple yet functional shopping experience that allows users to browse products, add them to a cart, and manage item quantities.

Features Implemented
1. Product Listing

Products are fetched from the DummyJSON API.

Products are displayed with image, title, price, and category.

Search functionality to filter products by name.

Category filter dropdown.

Price-based sorting.

2. Add to Cart

Users can add products to the cart.

If the product already exists in the cart, its quantity increases.

Cart state is managed globally using React state.

3. Cart Page

Dedicated cart page using React Router.

Displays all added products with quantity and price.

Shows empty cart message when no items are present.

4. Quantity Management

Increase and decrease quantity buttons for each cart item.

Automatically removes an item when quantity reaches zero.

Cart updates in real time.
