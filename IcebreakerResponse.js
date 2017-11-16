function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(data){
  return data.map(function(item){
    return new IcebreakerResponse(item)
  })
}
