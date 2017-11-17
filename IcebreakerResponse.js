function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(data){
  return data.map(function(IcebreakerResponsesData){
    return new IcebreakerResponse(IcebreakerResponsesData)
  })

}
let iceBreakerResponse = IcebreakerResponse.BatchCreate(data)
