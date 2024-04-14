
from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017/')
db = client['mydatabase']

@app.route('/getRecommendation')
def get_Request():
    people = request.args.get('people', default='World')
    kilos_needed = poeple * .5
    
    return jsonify({'message': f'Hello, {people}!'})
