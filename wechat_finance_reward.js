/*
腾讯微证券猜涨跌 - 自动领奖
配合自动猜涨跌食用
[task_local]
20 15 * * 1-5 https://raw.githubusercontent.com/baranwang/quantumult-x-wechat-finance/master/wechat_finance_reward.js, tag=腾讯微证券, img-url=https://raw.githubusercontent.com/baranwang/quantumult-x-wechat-finance/master/wechat_finance.png, enabled=true
*/

const notify = (title = '', desc = '') => $notify('腾讯微证券', title, desc);

$task
  .fetch({
    url:
      'https://wzq.tenpay.com/cgi-bin/guess_home.fcgi?channel=0&source=2&new_version=2',
    headers: {
      Cookie: $prefs.valueForKey('wechat_finance_cookieKey'),
    },
  })
  .then((res) => {
    const { retcode, retmsg, notice_info } = JSON.parse(res);
    if (retcode === '0') {
      notice_info.forEach((item) => {
        notify(item.msg, `获得 ${item.reward_value} 金币`);
      });
    } else {
      notify('⚠️', retmsg);
    }
  });
