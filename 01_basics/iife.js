// Immediately Invoked Function Expression (IIFE)
//  function that runs the moment it is invoked or called in the JavaScript event loop
// used to create a local scope for variables to prevent them from polluting the global scope.

(function database(){   //named iife
    console.log("DB CONNECTED");
})();

( (username) =>{    // unnamed iife
    console.log(`DB two connected ${username}`);
} )("Chaitra");