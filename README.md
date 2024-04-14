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

## How to start the API

```
export FLASK_APP=main.py
flask run
```
