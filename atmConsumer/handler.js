// The consuming service (target) Lambda functions

exports.case1Handler = async (event) => {
  console.log('--- Approved transactions ---')
  console.log(JSON.stringify(event, null, 2))
  const response = {
	statusCode: 200,
	body: JSON.stringify({
	  message: 'Approved transactions',
	})
 };
}

exports.case2Handler = async (event) => {
  console.log('--- NY location transactions ---')
  console.log(JSON.stringify(event, null, 2))
  const response = {
	statusCode: 200,
	body: JSON.stringify({
	  message: 'NY location transactions',
	})
 };
}

exports.case3Handler = async (event) => {
  console.log('--- Unapproved transactions ---')
  console.log(JSON.stringify(event, null, 2))
  const response = {
	statusCode: 200,
	body: JSON.stringify({
	  message: 'Unapproved transactions',
	})
 };

}
