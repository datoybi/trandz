/* eslint-disable */

describe("trendz를 테스트한다.", () => {
  const BASE_URL = "http://localhost:5000";

  beforeEach(() => {
    cy.visit("/");
    cy.intercept(
      {
        method: "GET", // Route all GET requests
        url: `${BASE_URL}/keywords`, // that have a URL that matches '/users/*'
      },
      [],
    ).as("getKeyword");
		   cy.intercept(
      {
        method: "GET", // Route all GET requests
        url: `${BASE_URL}/news`, // that have a URL that matches '/users/*'
      },
      [],
    ).as("getNews");
  });

  it("모든 데이터가 로딩된다.", () => {
  cy.request("GET", `${BASE_URL}/keywords`).then(response => {
    expect(response.status).to.eq(200);
  });

  cy.request("GET", `${BASE_URL}/news`).then(response => {
    expect(response.status).to.eq(200);
  });

  cy.request("GET", `${BASE_URL}/youtube`).then(response => {
    expect(response.status).to.eq(200);
  });

  cy.request("GET", `${BASE_URL}/music`).then(response => {
    expect(response.status).to.eq(200);
  });

  cy.request("GET", `${BASE_URL}/movie`).then(response => {
    expect(response.status).to.eq(200);
  });

  cy.request("GET", `${BASE_URL}/tv`).then(response => {
    expect(response.status).to.eq(200);
  });
  });

  it("네비게이션을 테스트한다.", () => {
    cy.wait("@getKeyword");
    cy.get('[data-cy="social-nav"]').click();
    // cy.get('[data-cy="social-wrapper"]').scrollIntoView();
    // cy.get('[data-cy="entertainment-wrapper"]').scrollTo("0%", "0%", { duration: 2000 });
    // cy.get('[data-cy="social-nav"]')
    //   .click()
    //   .then(() => {
    //     cy.wait(3000);
    //     cy.window().then($window => {
    //       expect($window.scrollY).to.be.closeTo(500, 100);
    //     });
    //   });

    // cy.get('[data-cy="entertainment-wrapper"]').scrollTo("0%", "0%", { ensureScrollable: false });
    // cy.get('[data-cy="entertainment-wrapper"]').scrollTo("top", { ensureScrollable: false });

    // cy.get('[data-cy="nav-entertainment"]').click();
    // // cy.get('[data-cy="entertainment-wrapper"]').scrollTo("top", { ensureScrollable: false });
    // cy.get('[data-cy="social-wrapper"]').scrollTo("top");
  });
});
