import requests
import time
# response = requests.get("http://localhost:5001/getcoordinates")
# print(response.json()['data'])
#
# while True:
#     lat = input("Enter your latitude: ")
#     long = input ("Enter your longitude: ")
#     print('finding your location......')
#     response = requests.post('http://localhost:5001/address', data={'lat': lat, 'long': long})
#     time.sleep(1)
#     response2 = requests.get("http://localhost:5001/getaddress")
#     print(response2.json())
#

while True:
    message = input("Enter your message: ")
    print('sending your message......')
    response = requests.post('http://localhost:5001/postmessage', data={'message': message})
    print(response)
    time.sleep(1)
    response2 = requests.get("http://localhost:5001/getmessage")
    print(response2.json())



