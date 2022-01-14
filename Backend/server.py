from flask import Flask , jsonify
from binance.client import Client

#conexion con api
clientn = Client('bXT9L3cRiQyHAAiMOo42C0Nz2f9LugxLsLEvhWmkgN6Ksdon6DmcIEaAkoptPQzj', 'E4CGmqmUDPiFhJmBPG5oVS51i5SZHF2KqyfC2mhLQXUREbQquKjYU4xCCWcxDDFT', tld='com')
#conexion con app local
app = Flask(__name__)

#ruta de la api 

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
    app.run(host= '10.10.18.14', port=4000, debug=True)