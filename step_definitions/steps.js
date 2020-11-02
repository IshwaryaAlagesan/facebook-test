const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
  // TODO: replace with your own step
});
Given('I will go to facebook login page', () => {
  I.amOnPage('/');
  // TODO: replace with your own step
});
When('I enter valid username and pssword', () => {
  I.fillField('email','ishugopu16@gamil.com');
  I.fillField('pass','Ishudarlu16@');
  I.click("//label[@id='loginbutton']");
  I.wait(5)
  // TODO: replace with your own step
});
Then('I should see facebook home page', async() => {
  //I.acceptPopup();
  const popuptext = await I.grabPopupText();
  console.log(popuptext)
  I.see('News Feed') 
  // TODO: replace with your own step
});
When(/^I enter "(.+)" in search box$/, (name) => {
  I.fillField('q',name)
  // TODO: replace with your own step
});
When('I click search button', () => {
  I.click("//i[@class='_585_']")
  // TODO: replace with your own step
});
Then('I should see search result', () => {
  I.see('People')
  // TODO: replace with your own step
});
When(/^I click the valid search "(.+)"$/, (validname) => {
  I.click("//div[@class='_4xjz'][contains(text(),'People')]")
  I.wait(2)
  I.click("//a[@class='_32mo']//span[contains(text(),'" + validname + "')]")
  // TODO: replace with your own step
});
Then(/^I should see friend "(.+)"$/, (verify) => {
  I.see(verify)
 // TODO: replace with your own step
});




