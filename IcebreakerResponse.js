function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(data){
  return data.map(function(mail){
    return new IcebreakerResponse(mail)
  })
}
