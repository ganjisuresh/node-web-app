var express=require("express");
 var app=express();
var router=express.Router();
var mongoose=require("mongoose");
var Customer=require("./models/customer");
var bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect("mongodb://localhost/techmindsdb",function(){
	console.log("Sucessfully connected to database")
})
 router.get("/",function(request,response){
 	response.json({name:"ganjisuresh"})
 })
 router.get("/customer",function(request,response){
 	Customer.getCustomers(function(err,customerData){
     if(err){
       throw err;
     }
     response.json(customerData);

 	})

 })
 router.post("/customers",function(request,response){
    var customerObj=request.body;
    Customer.createCustomer(customerObj,function(err,data){
    	if(err){
    		throw err;
    	}
    //	console.log(data)
    	response.json(data)

    })
 })

 router.put("/customer/:id",function(request,response){
    var userId=request.params.id;
    var customerObj=request.body;
    Customer.editCustomer(userId,customerObj,function(err,data){
        if(err){
            throw err;
        }
        response.json(data)
    })

 })
 router.put("/editCustomer/:id",function(request,response){
    var userId=request.params.id;
    var customerObj=request.body;
    
    Customer.getCustomerById(userId,function(err,data){
        if(err){
            throw err;
        }
        

   
    console.log(newObj);
    var bodyObj={
        name:customerObj.name || dataFromDB.name,
        email:customerObj.email || dataFromDB.email,
        mobile:customerObj.mobile || dataFromDB.mobile
    }
    customer.editCustomer(userId,bodyObj,function(err,data){
        if(err){
            throw err;
        }
        response.json(data)
    })
});

 })
 router.delete("/customer/:id",function(request,response){
       var userId=request.params.id;
       Customer.deleteCustomer(userId,function(err,data){

        if(err){
            throw err;
        }
        response.json(data)
       })

 })
 router.get("/customer/:id",function(request,response){
    var userId=request.params.id;
    
    Customer.getCustomerById(userId,function(err,data){
        if(err){
            throw err;
        }
        response.json(data)
    })

 })

 app.use("/api",router);
 var PORT=process.env.PORT || 4001;
 app.listen(PORT,function(){
 	console.log("server Listeing to port"+PORT)
 })