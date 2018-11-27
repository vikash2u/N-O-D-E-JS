const app = require('express')();
const PORT = process.env.PORT = 3000;


app.listen(PORT, () => {
  console.log('Server is running at PORT', PORT);
});



/* Example 1
        http.createServer(function(request, response) {
        // your server code
        }).listen(process.env.PORT);
*/

/* Example 2
      http.createServer(function(request, response) {
        // your server code
        }).listen(process.env.PORT || 3000);
*/