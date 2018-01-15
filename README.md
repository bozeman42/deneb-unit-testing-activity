# Node.js Unit Testing Activity (Peer)

Whoa! You can write code to run your code and prove it works they way you want? Yep, it is pretty cool. 

This assignment will give you some code. It will ask you to write the tests for that code. Install dependencies with `npm install` and run the tests using `npm test`.

## Steps

1. There are two modules `capitalize.js` and `evenOdd.js`. Take a look at these files and familiarize yourself with the project.

2. There are some tests written already. See if they are passing. If not, make them pass. You will need to research [TypeErrors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

3. Using `mocha` and `chai` node packages, write **unit tests** for both these modules. Make sure to tests all the possible cases. Try and break the code. If you write a test that breaks the code, feel free to update the code to make the tests pass.

4. Write a API to use these modules.

	```
	GET to /oddEven/:num
	```
	
	```
	POST to /capitalize
	
	with a body like {sentence: "capitalize this sentence!"}
	```

5. Write the server tests (a.k.a. **integration testing**) for these routes / the API using the [chai-http](http://chaijs.com/plugins/chai-http/) node package. You will need to install this package using `npm install chai-http --save-dev`.





