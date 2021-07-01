import http from "../api/http";
import store from "../store/store";

export const wechatAuth = async (authUrl, device, allowShare) => {
  let shareConfig = {
    title: "xx一站式服务平台",
    desc: "xxxx",
    link: allowShare ? authUrl : window.location.origin,
    imgUrl: window.location.origin + "/share.png"
  };

  let authRes = await http.get("/pfront/wxauth/jsconfig", {
    params: {
      url: decodeURIComponent(device == "ios" ? window.entryUrl : authUrl)
    }
  });

  if (authRes && authRes.code == 101) {
    wx.config({
      //debug: true,
      appId: authRes.data.appId,
      timestamp: authRes.data.timestamp,
      nonceStr: authRes.data.nonceStr,
      signature: authRes.data.signature,
      jsApiList: ["updateAppMessageShareData", "updateTimelineShareData", "onMenuShareAppMessage", "onMenuShareTimeline"]
    });

    wx.ready(() => {
      wx.updateAppMessageShareData({
        title: shareConfig.title,
        desc: shareConfig.desc,
        link: shareConfig.link,
        imgUrl: shareConfig.imgUrl,
        success: function () {//设置成功
          //shareSuccessCallback();
        }
      });
      wx.updateTimelineShareData({
        title: shareConfig.title,
        link: shareConfig.link,
        imgUrl: shareConfig.imgUrl,
        success: function () {//设置成功
          //shareSuccessCallback();
        }
      });
      wx.onMenuShareTimeline({
        title: shareConfig.title,
        link: shareConfig.link,
        imgUrl: shareConfig.imgUrl,
        success: function () {
          shareSuccessCallback();
        }
      });
      wx.onMenuShareAppMessage({
        title: shareConfig.title,
        desc: shareConfig.desc,
        link: shareConfig.link,
        imgUrl: shareConfig.imgUrl,
        success: function () {
          shareSuccessCallback();
        }
      });
    });
  }
};

function shareSuccessCallback() {
  if (!store.state.user.uid) {
    return false;
  }
  store.state.cs.stream({
    eid: "share",
    tpc: "all",
    data: {
      uid: store.state.user.uid,
      truename: store.state.user.truename || ""
    }
  });
  http.get("/pfront/member/share_score", {
    params: {
      uid: store.state.user.uid
    }
  });
}