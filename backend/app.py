from flask import Flask, jsonify, request
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from flask.wrappers import Request

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db=firestore.client()

app = Flask(__name__)

apis = db.collection('Usuarios').get()
for api in apis:
    print(api.to_dict())

@app.route('/obtener_apis', methods = ['POST'])
def get_apis():
    api_key = request.json['api_key']
    api_secret = request.json['api_secret']
    """apisx = db.collection('Usuarios').get()
    for api in apisx:
        apis.append(api.to_dict())"""

    return jsonify(api_key,api_secret)    

if __name__ == '__main__':
    app.run(host = '192.168.56.1', port=3000, debug=True)