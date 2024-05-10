/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */

export const HelloWorldHandler = async (event, context) => {
// export const helloworldHandler = async (event, context) => {
// export const lambdaHandler = async (event, context) => {

	console.log("Hello World -- From app.mjs > HelloWorldHandler(~)")
	// console.log("Hello World -- From Hello World Handler -- app.mjs")
	
	console.log(JSON.stringify(event, null, 2))

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'hello world -- From app.mjs > HelloWorldHandler(~)',
      })
    };
    return response;
  };
  