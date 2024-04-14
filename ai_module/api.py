
from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('mongodb+srv://snack-overflow:SxaL5fSDYSCRO4ja@cluster0.oy0udmz.mongodb.net/')
db = client['SnackOverflow']
collection = db['Items']

@app.route('/getRecommendation')
def get_Request():
    people = request.args.get('people', default='World')
    kilos_needed = int(people) * .5
    documents = list(collection.find())
    
    return jsonify({'message': f'Hello, {people}!'})
