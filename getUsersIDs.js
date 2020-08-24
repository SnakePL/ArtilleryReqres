const getIds = (obj) => obj.data.map((obj) => obj.id);

function saveIDsFromResponse(requestParams, response, context, ee, next) {
	context.vars.arrayOfUsers = getIds(JSON.parse(response.body));
	return next();
}

module.exports = {
	saveIDsFromResponse: saveIDsFromResponse
};
/*
Metoda getIds - mapuje nam na idki z jakiekolwiek obiektu
Metoda saveIDs…  bierze response.body parsuje nam do Json, zeby to nie było string, 
i przpisuje to tej pustej arrayki arrayOfUsers
cwiczenia:
sprawdzic saveIDs w console.log(context),
console.log(context.vars) itd zeby zobaczyc jak to dziala
*/