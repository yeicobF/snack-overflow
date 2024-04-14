
from keras.models import load_model
from flask import Flask, request, jsonify
from pymongo import MongoClient
import pandas as pd
import json
from math import radians, sin, cos, sqrt, atan2

app = Flask(__name__)

client = MongoClient('mongodb+srv://snack-overflow:SxaL5fSDYSCRO4ja@cluster0.oy0udmz.mongodb.net/')
db = client['SnackOverflow']

def haversine(lat1, lon1, lat2, lon2):
    # Convert latitude and longitude from degrees to radians
    lat1, lon1, lat2, lon2 = map(radians, [lat1, lon1, lat2, lon2])

    # Haversine formula
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * atan2(sqrt(a), sqrt(1-a))
    
    # Radius of the Earth in kilometers
    R = 6371.0
    
    # Calculate the distance
    distance = R * c
    
    return distance

@app.route('/getRecommendation')
def get_Request():
    people = request.args.get('people', default='World')
    kilos_needed = float(people) * .5

    if kilos_needed > 50:
        kilos_needed = (50 - 3) / (50 - 3)
    elif kilos_needed <= 50:
        kilos_needed = (kilos_needed - 3) / (50 - 5)

    #get inventory
    inventory = list(db["Items"].find())

    for i in inventory:
        i["total_kg"] = i["quantity"] * i["packages"]

    #get total kg per provider
    df = pd.DataFrame(inventory)
    group_by_provider = df.groupby('providerId')['total_kg'].sum().reset_index()

    #get the latitudes/longitudes of provider
    providers = list(db["Providers"].find())
    providers_df = pd.DataFrame(providers)
    merged_df = pd.merge(group_by_provider, providers_df, left_on='providerId', right_on='_id', how='inner')

    client_latitude = float(request.args.get('latitude', default='World'))
    client_longitude = float(request.args.get('longitude', default='World'))

    distances = []
    for index, row in merged_df.iterrows():
    # Access specific values in columns 'A' and 'B'
        distances.append(haversine(client_latitude, client_longitude, row["latitude"], row["longitude"]))
    
    merged_df["distance"] = distances
    
    # noramlize values
    for index, row in merged_df.iterrows():
        max_distance = row["distance"]
        if row["distance"] > 50:
            row["distance"] = 50
        row["distance"] = (row["distance"]- 5) / (50 - 5)
        if row["total_kg"] > 50:
            row["total_kg"] = (50 - 3) / (50 - 3)
        elif row["total_kg"] <= 50:
            row["total_kg"] = (row["total_kg"] - 3) / (50 - 5)
        
    predictions = []
    model = load_model("our_model.keras")
    for index, row in merged_df.iterrows():
        input = [row["distance"], 0.5, 0.5,row["total_kg"], kilos_needed]
        prediction.append((i, model.predict(input)))


        

        


    max_distancia = np.max(np.max(ds_distance), )


    
    return jsonify({'message': f'Hello, {merged_df}!'})
