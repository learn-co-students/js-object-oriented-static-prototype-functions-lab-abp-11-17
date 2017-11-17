function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(){
    return new IcebreakerResponse(emails)
  })
}

//build a function on an IcebreakerResponse class
//that can create many instances of icebreaker responses
//using the prototype style of javascript classes.

//attach a function directly onto the object IcebreakerResponse called BatchCreate
//that can take in an array of emails and for each email
//it should instantiate an IcebreakerResponse with that email.
