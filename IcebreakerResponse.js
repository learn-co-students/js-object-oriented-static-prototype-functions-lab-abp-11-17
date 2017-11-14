function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate= function(theBatch){
  return theBatch.map(function(emailsFromBatch){
    return new IcebreakerResponse(emailsFromBatch);
  });
  
}