function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emailArray) {
  return emailArray.map(function(email) {
    return new IcebreakerResponse(email)
  })

}
