const expect = chai.expect;

describe('IcebreakerResponse', () => {
  describe('.BatchCreate()', () => {
    it('accepts an array of emails and returns instances of IcebreakerResponses', () => {
      const emails = ['avi@flatironschool.com', 'grace@hopper.com', 'alan@xparc.com'];
      const icebreakerResponses = IcebreakerResponse.BatchCreate(emails);

      expect(icebreakerResponses[0].email).to.eql('avi@flatironschool.com');
      expect(icebreakerResponses[1].email).to.eql('grace@hopper.com');
      expect(icebreakerResponses[2].email).to.eql('alan@xparc.com');
    });
  });
});
