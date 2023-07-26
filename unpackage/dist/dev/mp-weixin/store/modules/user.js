"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_api_user = require("../../pages/api/user.js");
var user = {
  namespaced: true,
  state() {
    return {
      location: {},
      address: "\u8BF7\u9009\u62E9",
      userBase: {},
      pages: 0,
      page: 1,
      token: "",
      taskId: "",
      detailsData: {},
      taskType: 1,
      taskStatus: 0,
      detailType: 0,
      tabIndex: 0,
      reasonVal: "",
      reasonDesc: "",
      orderDistance: null,
      orderTime: null,
      filterOverTime: null,
      deliveryData: [],
      cancelData: [],
      alreadyData: [],
      isRedistribute: false,
      isFiltrate: false,
      taskDetailData: {},
      selectTaskData: [],
      payData: {},
      isBack: null,
      istabChange: null,
      isDelete: null,
      paymentMethod: null,
      isPickUp: false,
      isCollect: false,
      isSign: false,
      isDelivery: false,
      newType: null,
      cardData: null,
      timeData: null,
      isInput: false,
      isSearch: false,
      searchText: "",
      isSearchClear: false,
      isNew: false
    };
  },
  mutations: {
    setLocation(state, provider) {
      state.loacation = provider;
    },
    setAddress(state, provider) {
      state.address = provider;
    },
    setToken(state, provider) {
      state.token = provider;
    },
    setUserInfo(state, provider) {
      state.userBase = provider;
    },
    setlLacation(state, provider) {
      state.loacation = provider;
    },
    setPage(state, provider) {
      state.page = provider;
    },
    setPages(state, provider) {
      state.pages = provider;
    },
    setOrderDistance(state, provider) {
      state.orderDistance = provider;
    },
    setOrderTime(state, provider) {
      state.orderTime = provider;
    },
    setFilterOverTime(state, provider) {
      state.filterOverTime = provider;
    },
    setDeliveryData(state, provider) {
      state.deliveryData = provider;
    },
    setAlreadyData(state, provider) {
      state.alreadyData = provider;
    },
    setCancelData(state, provider) {
      state.cancelData = provider;
    },
    setTaskId(state, provider) {
      state.taskId = provider;
    },
    setTaskType(state, provider) {
      state.taskType = provider;
    },
    setTaskDetailData(state, provider) {
      state.taskDetailData = provider;
    },
    setReasonVal(state, provider) {
      state.reasonVal = provider;
    },
    setReasonDesc(state, provider) {
      state.reasonDesc = provider;
    },
    setRedistribute(state, provider) {
      state.isRedistribute = provider;
    },
    setSelectTaskData(state, provider) {
      state.selectTaskData = provider;
    },
    setIsFiltrate(state, provider) {
      state.isFiltrate = provider;
    },
    setTabIndex(state, provider) {
      state.tabIndex = provider;
    },
    setTaskStatus(state, provider) {
      state.taskStatus = provider;
    },
    setPayData(state, provider) {
      state.payData = provider;
    },
    setDetailsData(state, provider) {
      state.detailsData = provider;
    },
    setNewType(state, provider) {
      state.newType = provider;
    },
    setIstabChange(state, provider) {
      state.istabChange = provider;
    },
    setIsDelete(state, provider) {
      state.isDelete = provider;
    },
    setPaymentMethod(state, provider) {
      state.paymentMethod = provider;
    },
    setDetailType(state, provider) {
      state.detailType = provider;
    },
    setIsPickUp(state, provider) {
      state.isPickUp = provider;
    },
    setIsCollect(state, provider) {
      state.isCollect = provider;
    },
    setIsSign(state, provider) {
      state.isSign = provider;
    },
    setIsDelivery(state, provider) {
      state.isDelivery = provider;
    },
    setCardData(state, provider) {
      state.cardData = provider;
    },
    setTimeData(state, provider) {
      state.timeData = provider;
    },
    setIsInput(state, provider) {
      state.isInput = provider;
    },
    setIsSearch(state, provider) {
      state.isSearch = provider;
    },
    setSearchText(state, provider) {
      state.searchText = provider;
    },
    setSearchClear(state, provider) {
      state.isSearchClear = provider;
    },
    setIsNew(state, provider) {
      state.isNew = provider;
    }
  },
  actions: {
    async GetUsersInfo({ state, commit }, payload) {
      if (state.token !== "") {
        await pages_api_user.getUserInfo().then((res) => {
          common_vendor.index.setStorageSync("userInfo", res.data);
          commit("setUserInfo", res.data);
        });
      }
    }
  },
  getters: {}
};
exports.user = user;
