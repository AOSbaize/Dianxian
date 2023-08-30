let flag = UIComp('form_uAf2Yo16797488257040205').validate();
if (flag) {
    let code = UIComp('input_vUbaRQ16790390360930976').getValue();
    let name = UIComp('input_2zQFl516790390361370453').getValue();
    let password = UIComp('input_JWANao16799860073230818').getValue();
    password = md5(password);
    let disabled = UIComp('radio_35xvGj16790390362600312').getValue();
    let created_by = $tdp.App.$g.userCode.data;
    let roles =UIComp('radio_g27c6B16885217007430999').getValue();
    let permissions =UIComp('checkbox_lrUB1316790390365490490').getValue();
    UIComp('button_quqo3Z16790390366790841').dataQuery({
        "pwd":password
    });
}