var config = {
  //订单自动关闭时间，默认60分钟，以分为单位，填0则不自动关闭订单
  'closeorder': '60', 
  
  //链接源，一般不需要修改
  'url': 'https://api.it120.cc/',

  //这里填写你自己的工厂个性域名，工厂后台首页可以看到
  'subDomain': 'formatTime',

  //版本标识，这里不需要修改
  'version': '2.2.0',

  //转发话术，首页分享出去的结尾标题说明
  'shareProfile': '清欢严选商城2.2.0',

  //严选模版秘钥，获取秘钥请联系丸子君QQ：1172007555
  'templatekey': 'KmnUwuUja66HTPNCGtyv3au7TDnDRQq0',

  //付费快递查询key,获取key请联系丸子君QQ：1172007555
  //如果不填则用工厂默认的快递查询接口，该快递查询接口不稳定
  'wuliukey': '',

  //关闭订单模版ID，这里填写你自己的模版消息ID
  'closeorderkey': 'wpWxZjgH7y_Pytl4smKFWPEKfd0lRdWlYG5aq8kGy94',

  //发货提醒模版ID，这里填写你自己的模版消息ID
  'deliveryorderkey': 'eWMrJV1hSmRAEX3EpzEF2lh_-yK7Rt8B8NawbHQ6KvY',

  //评价模版提醒ID，这里填写你自己的模版消息ID
  'assessorderkey': 'ZH2jCVMa88OMxki3C65hLL1WB0Cq4ZoOWAzMVd0kwUU',

  //已评价模版提醒ID，这里填写你自己的模版消息ID
  'successorderkey': 'lKBY11dSkxiii6GB833V-hFfHjbBYs0vFt_otqMKG_4'

}
module.exports = config
