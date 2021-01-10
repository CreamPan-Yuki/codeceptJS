Feature('こっそり月締め');

Scenario('こっそり退勤して、時間外申請', async ({ I }) => {
    I.amOnPage('https://www.kinta.ne.jp/kinta2/web_sp/');
    I.fillField('txtCode', process.env.LOGIN_COMPANY_CODE);
    I.fillField('txtEmpCode', process.env.LOGIN_USERID);
    I.fillField('txtPw', process.env.LOGIN_PASSWORD);
    I.click('ログイン');

    I.see('メニュー');
    I.click('作業時間入力');

    for (let i = 1; i <= 31 ; i++) {
        var date = i
        if (date < 10) {
         date = "0" + date
        }
        var yyyymmdd = process.env.WORKING_HOURS_THIS_YEAR_MONTH + '-' +date

        I.fillField('#tdate_search', yyyymmdd);
        I.click('検索')
        
        var checkURL = await I.grabCurrentUrl()
        console.log(checkURL)
        if (checkURL == 'https://www.kinta.ne.jp/kinta2/web_sp/taskTime/search.aspx') {
            // var checkPopup = await I.grabPopupText()
            // console.log(checkPopup)
            // if (checkPopup != null) {
            //     // I.click('OK')
            // }
        } else {
        I.see('作業実績')
        inputWorkingHours(I)
        }
    }

    I.click('TOPへ')
    inputMonthClosing(I)
});

function inputWorkingHours(I) {
    I.click('#row1')
    I.see('プロジェクト')

    I.selectOption('selPj', process.env.WORKING_HOURS_PROJECT_CODE);
    I.click('確定')
    I.see('作業実績')

    I.click('登録')
    I.see('作業時間登録確認')

    I.click('確定')
    // I.click('OK')
    I.see('対象年月日')
}

function inputMonthClosing(I) {
    I.click('月締め申請')
    I.see('対象年月')

    I.selectOption('#tdate', process.env.MONTH_CLOSING_THIS_YEAR_MONTH + "-01");
    I.click('対象年月')
    I.click('検索')
    I.see('未申請')

    I.selectOption('cmbAuthorizer0', process.env.MONTH_CLOSING_AUTHOR1);
    
    I.click('登録')

    I.see('月締め申請を完了しました。')
}