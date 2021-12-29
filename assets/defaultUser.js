module.exports = ({username}) => {
	return {
		username,
		bitcoin: 0,
		money: 100,
		uid: generateRandomUid(16),
		vgas: [
			{
				"name": "Cookie-VGA 1161",
				"description": "Basic VGA generation 1",
				"chance": [0.0001, 0.0060],
				"price": 100
			}
		]
	}
}

function generateRandomUid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}