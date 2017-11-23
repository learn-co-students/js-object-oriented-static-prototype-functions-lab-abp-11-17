function IcebreakerResponse(email) {
  this.email = email;
}

IcebreakerResponse.BatchCreate = emails => emails.map(email => new IcebreakerResponse(email));
