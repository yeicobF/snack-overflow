# Endpoints

-  POST /recommendations?quantity=10     
/provider-orders
/inventories
/inventories
/consumer-orders

### AI api
# A Sequential Neural Network trained on a custom dataset to classify restaurants that are eligible to fulfill the NGOs needs. The initial layer is composed of 5 features (distance, %_protein, %_carbs, kg_needed, kg_storage).

## GET request
# Endpoint: /getRecommendation

## Obligatory query params
# people: this is the number of people the NGOs are expecting to feed.
# latitude: latitude degree coordinates of the NGO position.
# longitude: longitude degree coordinates of the NGO position.

## HTTP Response:
# Content-Type: application/json

# The response is a json object that includes the restaurant with the highest score based on the model. Additionally there will be a pacakge suggestion of the food supply for the restaurant.

### How to start api
## export FLASK_APP=main.py
## flask run
