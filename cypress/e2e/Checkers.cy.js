/// <reference types="cypress"/>
it('GamesForTheBrain', function () {
cy.visit('https://gamesforthebrain.com/')
//navigate to checkers
cy.get('[href="/game/checkers/"]').click()
//start game - first move
cy.get('[name="space02"]').click()
cy.get('[name="space13"]').click()
cy.wait(2000)
//confirm of system move
cy.get(':nth-child(4) > [src="me1.gif"]')
//could not use should contain, or HTMl-
cy.get('#message').should('contain', 'Make a move.')
//second move
cy.get('[name="space11"]').click()
cy.get('[name="space02"]').click()
cy.wait(2000)
cy.get('#message').should('contain', 'Make a move.')
//third move
cy.get('[name="space20"]').click()
cy.get('[name="space11"]').click()
cy.wait(2000)
//fourth move
cy.get('[name="space62"]').click()
cy.get('[name="space73"]').click()
cy.wait(2000)
//fifth move
cy.get('[name="space71"]').click()
cy.get('[name="space62"]').click()
cy.wait(2000)
//sixth move with jump
cy.get('[name="space42"]').click()
cy.get('[name="space24"]').click()
cy.wait(2000)
cy.get('#message').should('contain', 'Complete the double jump')
cy.get('[name="space06"]').click()
cy.wait(2000)
})

