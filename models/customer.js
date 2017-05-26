var mongoose=require("mongoose");
var customerSchema=mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	mobile:{
		type:String,
		required:false
	}
});
var Customer=module.exports=mongoose.model("Customer",customerSchema,"customer");
/*module.exports.getCustomers=function(callback){
	return Customer.find(callback)

}*/
 /*module.exports.createCustomers =function(customerObj,callback){
 	return Customer.create(customerObj,callback)

  }*/
  module.exports.getCustomerById =function(customerObj,callback){
 	return Customer.create(customerObj,callback)

  }

 module.exports.editCustomer=function(userId,customerObj,callback){

return Customer.update({_id:userId},
                       {$set:{
                       	 name:customerObj.name,
                       	 email:customerObj.email,
                       	 mobile:customerObj.mobile
                       }},callback)
  }
  /*module.exports.deleteCustomer =function(userId,callback){
 	return Customer.remove({_id:userId},callback)

  }*/
