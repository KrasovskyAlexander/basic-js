const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	let arr=[];
	if(!(Array.isArray(members))) return false;
	members.forEach(element => {
			if(typeof(element)==='string') {
				for(let i=0;i<element.length;i++){
					if(element[i]!=' ') {
						arr.push(element[i].toUpperCase());
						break;
					}
				}
			}
	});
	arr = arr.sort();
	return arr.join('');
};

