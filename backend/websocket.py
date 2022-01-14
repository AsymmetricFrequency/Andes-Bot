import asyncio
import config2
from binance.client import Client
from binance import AsyncClient, BinanceSocketManager

clientn = Client(config2.API_KEY, config2.API_SECRET, tld='com')

#obtiene la lista de todas las criptos
lista = clientn.get_all_tickers()

lista2 = []
dicMonedas = {}

#obtiene todas las criptos de USDT y las mete en una lista
for j in lista:
  if j['symbol'][-4:] == "USDT":
    lista2.append(j["symbol"])

async def main(cripto):
    client = await AsyncClient.create()
    bm = BinanceSocketManager(client)
    # start any sockets here, i.e a trade socket
    ts = bm.symbol_ticker_socket(cripto)
    # then start receiving messages
    async with ts as tscm:
        while True:
            res = await tscm.recv()
            Precio = round(float(res['c']),3)
            Cambio24h = res['P']
            Volumen24h = round(float(res['q']))
            global dicMonedas 
            dicMonedas = {"Moneda": cripto,"Precio": Precio,"Cambio 24h": Cambio24h,"Volumen 24h":Volumen24h}
            break

if __name__ == "__main__":

    loop = asyncio.get_event_loop()
    for i in lista2:
        try:
            loop.run_until_complete(main(i))
            print(dicMonedas)
        except Exception as e:
            print("No Data")
            continue