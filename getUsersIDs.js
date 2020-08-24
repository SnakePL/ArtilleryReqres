const getIds = (obj) => obj.data.map((obj) => obj.id);

function saveIDsFromResponse(requestParams, response, context, ee, next) {
	context.vars.arrayOfUsers = getIds(JSON.parse(response.body));
	return next();
}

module.exports = {
	saveIDsFromResponse: saveIDsFromResponse
};
