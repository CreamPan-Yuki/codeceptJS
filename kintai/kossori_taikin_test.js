Feature('こっそり退勤');

Scenario('こっそり退勤して、時間外申請', ({ I }) => {
    I.amOnPage('https://www.kinta.ne.jp/kinta2/web_sp/');
    I.fillField('txtCode', process.env.LOGIN_COMPANY_CODE);
    I.fillField('txtEmpCode', process.env.LOGIN_USERID);
    I.fillField('txtPw', process.env.LOGIN_PASSWORD);
    I.click('ログイン');

    I.see('メニュー');
    I.click('退勤');

    I.see('位置情報を取得します。');
    // I.fillField('clockTime', '19:28');

    I.click('退勤');
    
    var pages = browser.pages();
    var popupwin = pages[pages.length - 1];
    popupwin.click('ブロック');

    I.see('退勤登録が完了しました。');

    I.see('メニュー');
    I.click('申請');
    I.click('新規申請');
    I.click('次へ');

    I.fillField('start_time', process.env.OFF_HOURS_START_TIME);
    I.fillField('end_time', process.env.OFF_HOURS_END_TIME);
    I.fillField('txtremark', process.env.OFF_HOURS_REASON);
    I.selectOption('cmbAuthorizer1', process.env.OFF_HOURS_AUTHOR2);
    
    I.click('登録');

    var pages = browser.pages();
    var popupwin = pages[pages.length - 1];
    popupwin.click('OK');

    I.see('以下の内容で登録しました。');
});
