/// <reference types="Cypress" />
describe("Date picker via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
        cy.get("#datepicker").click()

    })
    it("Choose datepicker", () => {
        // let date = new Date()
        // date.setDate(date.getDate()) //get current day
        // cy.log(date.getDate())

        // let date1 = new Date()
        // date1.setDate(date.getDate() + 5)
        // cy.log(date1.getDate())

        let date = new Date()
        date.setDate(date.getDate() + 2)

        var futureYear = date.getFullYear()
        var futureMonth = date.toLocaleString("default", { month: "long" })
        var futrueDay = date.getDate()
        cy.log(`${futureMonth} ${futrueDay}, ${futureYear} `)

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDay => {
                if (!currentDay.text().includes(futureYear)) {
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDay => {
                    if (!currentDay.text().includes(futureMonth)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        }

        function selectFutureDay() {
            cy.get("[class='day']").contains(futrueDay).click()

        }
        selectMonthAndYear()
        selectFutureDay()
    });

});
