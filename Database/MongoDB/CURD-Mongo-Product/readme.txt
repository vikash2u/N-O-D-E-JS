https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb


Organizing our application:

We will be working with a design pattern called MVC. Its a neat way of separating parts of our app 
and grouping them based on their functionality and role. M stands for models, this will include all
 the code for our database models (which in this case will be Products). Then comes the V which 
 stands for the views or the layout. We will not cover the views in this tutorial as we are 
 designing an API. The remaining part now is the C, which stands for controllers which is the 
 logic of how the app handles the incoming requests and outgoing responses. There will be one 
 more thing, called Routes, Routes are our guide, they tell the client (browser/mobile app) to 
 go to which Controller once a specific url/path is requested.
