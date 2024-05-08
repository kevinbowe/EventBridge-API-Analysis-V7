const { EventBridgeClient, PutEventsCommand } = require("@aws-sdk/client-eventbridge")

const ebClient = new EventBridgeClient()

const lambdaHandler = async ( event, context ) => {

				console.log("MODIFIED IN VSCode, LOCALLY")
				console.log("A Change to atmProducer > handler.js > I'm still working...")


    const { params } = require('./events.js')

            console.log('--- Params ---')
            console.log( params )
              
    const putEventsCmd = new PutEventsCommand( params ) 
    const result = await ebClient.send( putEventsCmd )
    
            console.log('--- Response ---')
            console.log(result)  
};

module.exports = { lambdaHandler }

//// Original code that was provided by GitHub and uploaded from local system.
//      This code DOES NOT work.

// const AWS = require('aws-sdk')
// AWS.config.region = process.env.AWS_REGION || 'us-east-1'
// const eventbridge = new AWS.EventBridge()

// exports.lambdaHandler = async (event, context) => {
//   // Do some work... 
//   // And now create the event...

//   const { params } = require('./events.js')

//   console.log('--- Params ---')
//   console.log(params)
//   const result = await eventbridge.putEvents(params).promise()

//   console.log('--- Response ---')
//   console.log(result)  
// }

