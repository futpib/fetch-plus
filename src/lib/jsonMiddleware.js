/**
 * @copyright © 2015, Rick Wong. All rights reserved.
 */

export const before = (request) => {
	request.options.headers["Content-Type"] = "application/json; charset=utf-8";
};

export const after = (response) => {
	return response.json();
};

// Export using middleware notation.
export default (request) => {
	before(request);
	return after;
};