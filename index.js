

/**
 * Returns a count for the number of 
 * iteration in the array
 *
 * @param {Array} arr
 * @param {any} iter
 * @return {Number}
 * @api public
 */

module.exports = function(arr, iter) {
	var count = 0;
	for(var l = arr.length; l--;) {
		if(arr[l] === iter) ++count;
	}
	return count;
};