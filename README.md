### Project "FoodAid"

Welcome to the repository of the "FoodAid" project, a platform that connects NGOs with supermarket chains and restaurants to facilitate the donation of surplus food nearing its expiration date, thereby helping to combat hunger in Mexico.

#### Objective

The main goal of this project is to reduce food waste and help those in need by providing a platform where NGOs can request and receive food donations from restaurants and supermarkets.

#### Key Features

1. **Order Management**: Restaurants can view and manage orders placed by NGOs, as well as order details to facilitate delivery.
2. **Order Generation for NGOs**: NGOs can request donations based on an AI model that takes into account the number of people the food will be distributed to.
3. **Order Editing**: NGOs can edit automatically generated orders to tailor them to their specific needs.
4. **Intuitive Interface**: The platform features an easy-to-use interface for users to navigate and efficiently use the functions.

#### Technologies Used

The project is developed using the following technologies:

- Framework: Next.js
- Frontend: HTML, CSS, JavaScript, React.js
- Backend: Node.js, Express.js, MongoDB
- AI (Artificial Intelligence): AI model for order generation
- Additional Tools: Tailwind CSS

#### Installation and Configuration

1. Clone this repository to your local machine.
2. Install frontend and backend dependencies using npm or yarn.
3. Configure environment variables as needed (e.g., for MongoDB database connection, database name, etc.).
4. Run the backend server and frontend server to start the application.

# Endpoints

-  POST /recommendations?quantity=10     
/provider-orders
/inventories
/inventories
/consumer-orders


# AI API

A Sequential Neural Network trained on a custom dataset to classify restaurants that are eligible to fulfill the NGOs needs. The initial layer is composed of 5 features (distance, %_protein, %_carbs, kg_needed, kg_storage).

## GET request

getRecommendation/

### Obligatory query params

- `people`: The number of people the NGOs are expecting to feed.
- `latitude`: Latitude degree coordinates of the NGO position.
- `longitude`: Longitude degree coordinates of the NGO position.

### HTTP Response

- `Content-Type`: application/json

The response is a JSON object that includes the restaurant with the highest score based on the model. Additionally, there will be a package suggestion of the food supply for the restaurant.

### Install conda list of packages
```
conda create -n env_name --file conda_packages.txt
```

## How to start the API

```
export FLASK_APP=main.py
flask run
```
