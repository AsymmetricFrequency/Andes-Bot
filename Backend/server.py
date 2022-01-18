import time
from flask import Flask , jsonify, request
from binance.client import Client


#conexion con app local
app = Flask(__name__)

api_publica = ""
api_secreta = ""

#conexion con api
clientn = Client(tld='com')

#ruta de la api 
@app.route('/obtener_apis', methods = ['POST'])
def obtener_apis():

  global api_publica
  global api_secreta

  api_publica = request.json['api_publica']
  api_secreta = request.json['api_secreta']

  print(api_secreta, api_publica)
  return api_publica, api_secreta



@app.route('/monedas')
def monedas():
  
  #obtiene la lista de todas las criptos
  lista = clientn.get_all_tickers()

  lista2 = []
  for j in lista:
    if j['symbol'][-4:] == "USDT":
      j['price'] = round(float(j['price']),9)
      lista2.append(j)
      
  return {'monedas':lista2}



if __name__ == '__main__' :
    
    app.run(host= '10.10.18.13', port=4000, debug=True)