/*
Methods
update()
updateOne()
updateMany()
replaceOne()
*/

//The update() method modifies one or many documents (update parameters)
db.lights.update(
    { room: "Bedroom" },
    { status: "On" }
)

//UpdateOne
//The UpdateOne() method modifies ONE document (update parameters)
db.countries.update(
    { country: "Sweden" },
    { capital: "Stockholm" }
)

//UpdateMany
//The UpdateMany() method modifies multible documents (update parameters)
db.food.updateMany(
    { sold: { $lt: 10 } },
    { $set: { sold: 55 } }
)

//ReplaceOne
// Replaces the first matching document (replacement document)
// This example collection called countries contains 3 documents:
// { "_id" : 1, "country" : "Sweden" }
// { "_id" : 2, "country" : "Norway" }
// { "_id" : 3, "country" : "Spain" }
//The following operation replaces the document { country: "Spain" } with document { country: "Finland" }
db.countries.replaceOne(
    { country: "Spain" },
    { country: "Finland" }
)