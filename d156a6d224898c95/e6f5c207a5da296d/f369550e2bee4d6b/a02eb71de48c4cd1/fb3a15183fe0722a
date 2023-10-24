import { getGreeting } from '../support/app.po'

describe('bpd-web-ui', () => {
  beforeEach(() => cy.visit('/'))

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome bpd-web-ui')
  })
})
