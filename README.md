# Quantumult X 腾讯微证券猜涨跌

腾讯微证券自动猜涨跌，以当日午盘收盘数据猜测

```config
[task_local]
35 11 * * 1-5 https://raw.githubusercontent.com/baranwang/quantumult-x-wechat-finance/master/wechat_finance_guess.js, enabled=true

[rewrite_local]
https://wzq\.tenpay\.com/resources/vtools/act_task_config_utf8\.json url script-request-header https://raw.githubusercontent.com/baranwang/quantumult-x-wechat-finance/master/wechat_finance_guess.js

[mitm]
hostname = wzq.tenpay.com
```
