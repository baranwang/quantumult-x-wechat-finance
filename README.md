# Quantumult X 腾讯微证券猜涨跌

腾讯微证券自动猜涨跌，以当日午盘收盘数据猜测

```config
[task_local]
35 11 * * 1-5 https://raw.githubusercontent.com/baranwang/quantumult-x-wechat-finance/master/wechat_finance_guess.js, tag=腾讯微证券, img-url=https://raw.githubusercontent.com/baranwang/quantumult-x-wechat-finance/master/wechat_finance.png, enabled=true

[rewrite_local]
https://wzq\.tenpay\.com/resources/vtools/act_task_config_utf8\.json url script-request-header https://raw.githubusercontent.com/baranwang/quantumult-x-wechat-finance/master/wechat_finance_guess.js

[mitm]
hostname = wzq.tenpay.com
```
## 食用方法

微信公众号「腾讯自选股微信版|微证券」=> 「🔥好福利」=>「猜涨停赢红包」=>「猜涨停 领红包」，弹出获取 Cookie 成功提示后即可。后续会在午盘收盘后，以当日数据自动猜测涨跌
