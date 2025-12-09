const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const todos=[
	{id:1, task: "Learn DevOps"},
	{id:2, task:"Build DOcker images"}
];

app.get("/todos", (req,res)=>{
	res.json(todos);
});

app.listen(port, () => console.log(`Todo Api running on port ${port}`));


