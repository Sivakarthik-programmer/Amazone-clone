const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HuJlrEONtRouCoYLapurPVyK8hrgDXZmqCgCfLAGNRXMJBDTHaEwWxIww5YXw22RH676Vg6vn2SJODY6m7WBSuD00lIPx8tJw')

//API

//App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, responce) => responce.status(200).send ('hello world'))


app.post('/payments/create', async (request,responce)=> {
	const total = request.query.total;
	console.log('Payment Request Received!!! for this amount >>>', total )

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, //subunits of the currency
		currency: "inr",
		payment_method_types: ['card'],
	});
	//Ok created
	responce.status(201).send({
		clientSecret: paymentIntent.client_secret,
	})
})

//Listen command

exports.api = functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/clone-837e9/us-central1/api