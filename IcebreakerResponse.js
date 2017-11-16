function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  let returns = []
  emails.forEach(function(email){
    returns.push(new IcebreakerResponse(email))
  })




  return returns
  new IcebreakerResponse(email)
}

let icebreaker = IcebreakerResponse.BatchCreate(email)
