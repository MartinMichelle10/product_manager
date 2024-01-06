1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Usage](#usage)

## Introduction

Product CRUD Operations

Objective: Assess the candidate's ability to design and implement CRUD operations for a
complex product structure in a Node.js application.
Task: Design a Node.js application that manages products with the following structure:
Products linked to UOM (Unit of Measure), where each UOM is linked to UOM Image and
UOM Barcode Relation. Additionally, each UOM is linked to Addon, and Addons can have
multiple Addon Items.
Implement the following CRUD operations:

1. Create a new product with multiple UOMs, Barcodes, and Images.
2. Retrieve product information along with its associated UOMs, Barcodes, and Images.
3. Update the details of a product, including its UOMs, Barcodes, and Images.
4. Delete a product and ensure the cascading deletion of associated UOMs, Barcodes,
   Images, Addons, and Addon Items.
   Expectations: The candidate should demonstrate a solid understanding of relational
   database design, CRUD operations, and the ability to handle complex relationships between
   tables


### Installation

Include step-by-step instructions on how to install your project. This may include dependencies, environment setup, or any specific configurations.

1. istall node libraries
2. create .env file
3. dependencies (rabbitMQ)
4. npm run dev


```bash
# Example installation commands
npm install

npm run dev

```

url: localhost:3000
docs url: localhost:3000/api