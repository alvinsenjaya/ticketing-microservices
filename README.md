# Ticketing Application
### About
This is ticketing application using microservices. This application is built using MERN stack. 

![Architecture](https://i.imgur.com/eZvpFQp.jpg)


### How to run in your local machine
1. Install node, npm, mongodb, redis-server, nats-streaming-server

2. Run npm install for each service
```
cd auth
npm install
cd ../tickets
npm install
cd ../orders
npm install
cd ../expiration
npm install
cd ../payments
npm install
cd ../view
npm install
```

3. Run nats streaming server, mongodb, and redis-server
```
nats-streaming-server -p 4222 -m 8222 -hbi 5s -hbt 5s -hbf 2 -SD -cid ticketing
sudo systemctl start mongodb
redis-server
```

4. Run `npm start` from each folder
```
cd auth
npm start
```
```
cd tickets
npm start
```
```
cd orders
npm start
```
```
cd expiration
npm start
```
```
cd payments
npm start
```
```
cd view
npm start
```
5. Open your browser and browse http://localhost:3000
