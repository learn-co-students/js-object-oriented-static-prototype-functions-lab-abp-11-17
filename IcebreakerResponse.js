function IcebreakerResponse(email){
  this.email = email
}


IcebreakerResponse.BatchCreate = function(emails){
  // emails = ["1@gmailc.om", "2@yahoo.com", "3@hotmail.com"]
  // let icebreakers = []
  //
  // emails.forEach(function(email){
  //   icebreakers.push(new IcebreakerResponse(email))
  // })
  //
  // return icebreakers

  return emails.map(function(email){
    return new IcebreakerResponse(email)
  })
} // [IceBreaker1, IceBreaker2]
