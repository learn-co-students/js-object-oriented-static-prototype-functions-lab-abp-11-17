function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(ary) {
  return ary.map(function(data) {
    return new IcebreakerResponse(data);
  });
}
