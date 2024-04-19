describe('Contact Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4321/'); // Replace with the actual URL where the contact form is located
  });

  it('should display the title', () => {
    cy.get('h2').should('be.visible').and('have.text', 'Connect with our support Team!');
  });

  it('should display the subtitle', () => {
    cy.get('p').should('be.visible').and('contain.text', 'Fill out your information and an OSSTF representative will reach out to you. Have a simple question?');
  });

  it('Contact Entity is present', () => {
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="phoneNo"]').should('be.visible');
    cy.get('textarea[name="message"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });
  it(' Validate Name field', () => {
    cy.get('input[name="name"]').type('John');
   
  });

  it(' Validate Email field', () => {
    cy.get('input[name="email"]').type('ami@gmail.com');
    
  });

  it(' Validate Phone number field', () => {
    cy.get('input[name="phoneNo"]').type('123');
   
  });

  it('Validate Message field', () => {
    cy.get('textarea[name="message"]').clear();
   
  });

  it(' Check submit button color', () => {
    cy.get('button[type="submit"]').should('have.css', 'background-color', 'rgb(239, 68, 68)');
  });

  it('Submit the contact form with valid data', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('johndoe@example.com');
    cy.get('input[name="phoneNo"]').type('1234567890');
    cy.get('textarea[name="message"]').type('This is a test message.');
    cy.get('button[type="submit"]').click();
    cy.contains('Form submitted successfully!').should('be.visible');
  });
 
  it('should display validation errors when submitting an empty form', () => {
   
    cy.get('form').within(() => {
      cy.get('button[type="submit"]').click();
      cy.get('p.text-red-500').should('have.length', 4);
    });
  });

  it('should submit the form successfully with valid data', () => {
   
    cy.get('form').within(() => {
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.get('input[name="phoneNo"]').type('1234567890');
      cy.get('textarea[name="message"]').type('This is a test message.');
      cy.get('button[type="submit"]').click();
    });
    
    // Check for successful form submission
    cy.get('.text-green-800').should('contain.text', 'Form submitted successfully!'); // Assuming this message is displayed after successful submission
  });
});
