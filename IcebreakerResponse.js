function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function (email){
  return email.map(function (question) {
    return new IcebreakerResponse (question)
  })
}
