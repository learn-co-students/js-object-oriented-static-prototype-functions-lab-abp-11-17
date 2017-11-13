function IcebreakerResponse(email){
  this.email = email
}
IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(email){
    return new IcebreakerResponse(email)
  })
}
const emails = [
  ["avi@flatironschool.com"], ["grace@hopper.com"], ["alan@xparc.com"]
]
let IcebreakerResponses = IcebreakerResponse.BatchCreate(emails)
