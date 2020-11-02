Feature('facebooknamesearch');

Scenario('Facebook', (I) => {
    I.amOnPage('/');
    I.click("//button[@title='Accept All']");
    I.fillField('email','ishugopu16@gmail.com');
    I.fillField('pass',"Ishudarlu16@");
    I.click("//button[@id='u_0_b']")
    I.wait(3)
    I.fillField('q','Gopinathan Kasi')
    I.click("//i[@class='_585_']")
    I.click("//div[@class='_4xjz'][contains(text(),'People')]")
    I.wait(2)

    I.click("//a[@class='_32mo']//span[contains(text(),'Gopinathan Kasi')]")
    I.see('friend')
    I.wait(5)
    // pause()
});
