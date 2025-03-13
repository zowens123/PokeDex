// Define a function to select a random name from a list
function getRandomName(names) {
    // Select a random index from the list
    const randomIndex = Math.floor(Math.random() * names.length);
    
    // Return the random name
    return names[randomIndex];
}

// Example usage:
const names = ["zachCo", "bobCo", "cCo", "pendoCo", "afterpayCo", "frankCo", "googleCo", "friendsCo", "hudlCo", "pokeCo"];

// Call the function to get a random name
const randomName = getRandomName(names);
console.log(randomName);

var monthly_value = Math.floor(Math.random() * (450000 - 100000 + 1)) + 100000;
console.log(monthly_value);

(function(apiKey){
			(function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
			v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
				o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
				y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
				z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
	
				// Call this whenever information about your visitors becomes available
				// Please use Strings, Numbers, or Bools for value types.
			pendo.initialize({
					disableFeedback: true,

					visitor: {
						id:           'n12',   // Required if user is logged in
						email:        'test123@testtt.com', // Recommended if using Pendo Feedback, or NPS Email
						full_name:    'Zzzz33zz', // Recommended if using Pendo Feedback
						role:         'TSE', // Optional
						testArray: 	["nice", "golf", "slack"]
	
						// You can add any additional visitor level key-values here,
						// as long as it's not one of the above reserved names.
					},
	
					account: {
						id:           randomName, // Highly recommended
						name:         randomName,// Optional
						//is_paying:    true// Recommended if using Pendo Feedback
						monthly_value:  monthly_value // Recommended if using Pendo Feedback
						// planLevel:    // Optional
						// planPrice:    // Optional
						// creationDate: // Optional
	
						// You can add any additional account level key-values here,
						// as long as it's not one of the above reserved names.
					}
				});
})('032f0731-537c-474a-4569-c1b1d25d5ccf');
//032f0731-537c-474a-4569-c1b1d25d5ccf  Zach_Test
