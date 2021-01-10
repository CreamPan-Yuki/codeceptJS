Feature('こっそり出勤');

Scenario('こっそり出勤', ({ I }) => {
    I.amOnPage('https://www.kinta.ne.jp/kinta2/web_sp/');
    I.fillField('txtCode', process.env.LOGIN_COMPANY_CODE);
    I.fillField('txtEmpCode', process.env.LOGIN_USERID);
    I.fillField('txtPw', process.env.LOGIN_PASSWORD);
    I.click('ログイン');

    I.see('メニュー');
    I.click('出勤');

    I.see('位置情報を取得します。');
    I.click('出勤');
    
    var pages = await browser.pages();
    var popupwin = pages[pages.length - 1];
    popupwin.click('ブロック');

    I.see('出勤登録が完了しました。');
});
