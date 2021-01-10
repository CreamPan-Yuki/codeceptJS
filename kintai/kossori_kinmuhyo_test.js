Feature('こっそり勤務表を確認');

Scenario('こっそり勤務表を確認', ({ I }) => {
    I.amOnPage('https://www.kinta.ne.jp/kinta2/web_sp/');
    I.fillField('txtCode', process.env.LOGIN_COMPANY_CODE);
    I.fillField('txtEmpCode', process.env.LOGIN_USERID);
    I.fillField('txtPw', process.env.LOGIN_PASSWORD);
    I.click('ログイン');

    I.see('メニュー');
    I.click('勤務表');

    I.see('対象年月');
    I.click('検索');
    
    I.see('勤務表');
    I.wait(10);
});
