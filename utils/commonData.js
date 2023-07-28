//订单状态
export const orderStatus = [
  {
    value: 1,
    label: '待上门'
  },
  {
    value: 2,
    label: '待完工'
  }, {
    value: 3,
    label: '已完成'
  },
  {
    value: 4,
    label: '已取消'
  }, {
    value: 5,
    label: '被退单'
  },
]
// 订单筛选状态
export const DeliveryData = [
  {
    value: 1,
    label: "待上门",
  },
  {
    value: 2,
    label: "待完工",
  },
  {
    value: 3,
    label: "已完成",
  },
  {
    value: '',
    label: "全部",
  },
];

// 取消原因数据
export const cancelData = [
  {
    value: 1,
    label: "服务地址有误",
  },
  {
    value: 2,
    label: "看错地址，无法服务",
  },
  {
    value: 3,
    label: "价格太低，不想服务了",
  },
  {
    value: 4,
    label: "临时有事，无法服务",
  },
  {
    value: 5,
    label: "产品维修复杂，无法服务",
  },
];



// 付款方式数据
export const SignData = [
  {
    value: 1,
    label: "本人",
  },
  {
    value: 2,
    label: "代收",
  },
];
// 签收人数据
export const PayMethodData = [
  {
    value: 1,
    label: "寄付",
  },
  {
    value: 2,
    label: "到付",
  },
];
// 物品名称数据
export const GoodsData = [
  {
    value: 1,
    label: "生活用品",
  },
  {
    value: 2,
    label: "文件",
  },
  {
    value: 3,
    label: "数码产品",
  },
  {
    value: 4,
    label: "食品",
  },
  {
    value: 5,
    label: "服饰",
  },
  {
    value: 6,
    label: "其他",
  },
];

// 支付方式
export const PayWayData = [
  {
    value: 1,
    label: "微信支付",
  },
  {
    value: 2,
    label: "支付宝支付",
  },
];

// 派件tab数据
export const PickUpData = [
  {
    value: 1,
    label: "待派件",
  },
  {
    value: 2,
    label: "已签收",
  },
];
// 历史取派tab数据
export const HistoryTabData = [
  {
    value: 1,
    label: "取件",
  },
  {
    value: 2,
    label: "派件",
  },
];
// 首页取派tab数据
export const tabBars = [
  {
    name: "待取件",
  },
  {
    name: "待派件",
  },
];
// 消息公告数据
export const newItemData = [
  {
    id: 1,
    title: "物流保通保畅：民航保障货运航班环比增长9.7%",
    created: "2022-09-15 06:16",
    isRead: 0,
    firstContent:
      "最新数据显示，9月14日，全国货运物流有序运行，民航保障货运航班环比增长9.7%。",
    content:
      "国务院物流保通保畅工作领导小组办公室监测汇总数据显示，9月14日，国家铁路货运继续保持高位运行，运输货物1094.7万吨，环比下降0.23%；全国高速公路货车通行739.05万辆，环比增长1.64%；监测港口完成货物吞吐量2374.5万吨，环比下降27.9%，完成集装箱吞吐量53.1万标箱，环比下降33.9%；民航保障货运航班653班（其中国际货运航班452班，国内货运航班201班），环比增长9.7%；邮政快递揽收量约3.27亿件，环比增长0.6%；投递量约2.97亿件，环比增长2.4%。",
  },
  {
    id: 2,
    title: "神领物流全新2.0版本上线，基于1.0版本在业务及功能层面进行了升级迭代",
    created: "2022-04-02 20:23",
    isRead: 1,
    firstContent: null,
    content:
      "神领物流2.0版本-快递员端终于在2022年上半年完美上线线，其中取件/派件流程模块作出了很多新颖的调整，请大家多多关注支持！",
  },
];
