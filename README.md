1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Usage](#usage)

# Product CRUD Operations Node.js Application

## Introduction

This Node.js application is designed to manage products with a complex structure. The product structure includes relationships with Unit of Measure (UOM), UOM Image, UOM Barcode Relation, Addons, and Addon Items. The application provides CRUD operations to create, retrieve, update, and delete products along with their associated UOMs, Barcodes, Images, Addons, and Addon Items.

## Installation

Follow the steps below to install and set up the project:

1. Run the following command to install dependencies:

    ```bash
    npm install
    ```

2. Create a `.env` file in the root directory and set up environment variables if necessary.

3. Install RabbitMQ as a dependency if not already installed, as the application uses it for handling asynchronous tasks. [RabbitMQ Installation Guide](https://www.rabbitmq.com/download.html)

4. Run the following command to start the development server:

    ```bash
    npm run dev
    ```

5. Access the application at `localhost:3000` and explore the API documentation at `localhost:3000/api`.

## API Documentation

The API documentation provides details on the available endpoints and their usage. You can access it at `localhost:3000/api`.

## CRUD Operations

### 1. Create a New Product

To create a new product with multiple UOMs, Barcodes, and Images, send a POST request to the `/products` endpoint with the necessary data.

### 2. Retrieve Product Information

Retrieve detailed information about a product, including its associated UOMs, Barcodes, and Images, by sending a GET request to the `/products/{productId}` endpoint.

### 3. Update Product Details

Update the details of a product, including its UOMs, Barcodes, and Images, by sending a PUT request to the `/products/{productId}` endpoint with the updated data.

### 4. Delete a Product

Delete a product and ensure the cascading deletion of associated UOMs, Barcodes, Images, Addons, and Addon Items by sending a DELETE request to the `/products/{productId}` endpoint.

## Synchronous and Asynchronous Operations

This application employs the RabbitMQ pub/sub model to handle both synchronous and asynchronous operations. Synchronous operations ensure real-time responsiveness, while asynchronous tasks are offloaded to RabbitMQ for improved scalability and performance.


## Expectations

This application showcases a solid understanding of relational database design, CRUD operations, and the ability to handle complex relationships between tables. The candidate is expected to navigate the API endpoints as documented and perform CRUD operations seamlessly.
