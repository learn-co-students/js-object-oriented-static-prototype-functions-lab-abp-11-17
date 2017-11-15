function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(email){
    new IcebreakerResponse(email);
  })
}
/*IcebreakerResponse.BatchCreate = function(emails){
  let icebreakers = [];

  emails.forEach(function(email){
    icebreakers.push(new IcebreakerResponse(email))
  })

  return icebreakers;
}*/


/*IcebreakerResponse.BatchCreate = function(data) {
  return data.map(function(IcebreakerResponseEmail){
    return new IcebreakerResponse()
  })
}*/
