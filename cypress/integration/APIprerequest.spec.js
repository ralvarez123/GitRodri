// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('API Testing 101', () => {
    //BaseURl Generica para las API de Fuera
    Cypress.config('baseUrl','https://restful-booker.herokuapp.com/');
    // Metodo para Consultar Mega Basico

    
    it ('POST - Auth', () =>{
        const item = {
            "username" : "admin",
            "password" : "password123"
        };
        cy.request('POST', '/auth', item);
       
        });
//or this second option you can add validations
    it ('POST - Auth', () =>{
    
    cy.request('POST', '/auth', {
            "username" : "admin",
            "password" : "password123"
        }).then((response) => {
            expect(response).to.have.property('status', 200);
        });
    });

    it('GET - Read Only ', () => {
    cy.request('GET', '/booking');
    });

    it('GET - Read Step One ', () => {
    //Get a Response and validate the status code
    cy.request('GET', '/booking').then((response) => {
    expect(response).to.have.property('status', 200);
    expect(response.body).to.not.be.null;
    //expect(response.body.data).to.have.length(24);
    });
    });
    it ('POST - Create booking', () =>{
    cy.request('POST', '/booking',{
        "firstname" : "Rodri",
        "lastname" : "Cypress",
        "totalprice" : 114,
        "depositpaid" : false,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "lunch"
    }).then((response) => {
        expect(response).to.have.property('status', 200);
        //expect(response.body).to.have.property(lastname, "Cypress");
    });
         
    });
    /* it.skip('PUT - Actualizar booking ', () => {
    cy.request('PUT', '/booking/12', {
            "firstname" : "Cypress",
            "lastname" : "RodriPUT",
            "totalprice" : 114,
            "depositpaid" : false,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "lunch"
        })
    }); */

    it.skip('PUT', function(){
        cy.request({
            method: 'PUT',
            url: 'https://restful-booker.herokuapp.com/booking/12',
            body: {
                "firstname" : "Cypress",
                "lastname" : "RodriPUT",
                "totalprice" : 114,
                "depositpaid" : false,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "lunch"
            },
            headers :{
                'Token': '24b9f996a786360'
            }
    })
});
    it.skip('DELETE - Borrar un booking', () => {
            cy.request('DELETE', '/booking/14')
            .then((response) => {
            // response.body is automatically serialized into JSON
            expect(response.body).to.have.empty;
            });
       

});

});
