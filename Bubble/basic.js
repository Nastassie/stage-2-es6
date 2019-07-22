const assert = require('assert');
const {url} = require('url');
const path = require('path');

describe('Pop Bubble Game', () => {
    

    it('Lop-lop-lop', () => {
        browser.url('https://task1-bvckdxdkxw.now.sh/');
        browser.maximizeWindow();
        browser.pause(5000);
        const bubble = $$("div.bubble");
        quantity = bubble.length;
        
        for (i=0; i < quantity; i++) {
        bubble[i].click();
        }
        const expect = $("div#score");
       
        assert.equal(expect.getText(), quantity);
    });

        it('Lop-lop-lop-bonus', () => {
        browser.url('https://task1-bvckdxdkxw.now.sh/');
        browser.maximizeWindow();
        const expect = $("div#score");

        score = 0;
        for (; ; ) {
            
            $("div.bubble").waitForDisplayed(2000);
            const bubble = $("div.bubble");
                   bubble.click();
                   score += 1;
                   assert.equal(expect.getText(), score);
        }
        
    });
});