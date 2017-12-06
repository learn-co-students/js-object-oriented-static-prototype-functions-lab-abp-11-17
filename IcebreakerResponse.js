function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(response){
    return new IcebreakerResponse(response)
    }
  )
}
