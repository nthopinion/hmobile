(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/logo.b2dc1699.svg"},171:function(e,t,a){e.exports=a(335)},176:function(e,t,a){},205:function(e,t){},335:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(37),s=a.n(c);a(176),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(345),r=a(349),o=a(160),u=a(15),m=a(16),d=a(19),h=a(17),p=a(18),f=a(7),v=(a(52),a(150)),b=a.n(v),g=window.location.origin.replace(/^http/,"ws");g.indexOf("localhost")>-1&&(g="localhost:4200");var E=b()(g),j=a(25),O=a.n(j),y=a(91),C=a.n(y),S=(a(112),function(){function e(){Object(u.a)(this,e),this.events={}}return Object(m.a)(e,[{key:"emit",value:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return this.events[e]&&this.events[e].forEach(function(e){return e.apply(void 0,a)}),this}},{key:"on",value:function(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],this}},{key:"off",value:function(e,t){if(e&&O.a.isFunction(t)){var a=this.events[e],n=a.findIndex(function(e){return e===t});a.splice(n,1)}else this.events[e]=[];return this}}]),e}()),w=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"start",value:function(){var e=this;return navigator.mediaDevices.getUserMedia({video:{facingMode:"user",height:{min:360,ideal:720,max:1080}},audio:!0}).then(function(t){e.stream=t,e.emit("stream",t)}).catch(function(e){return console.log(e)}),this}},{key:"toggle",value:function(e,t){var a=arguments.length;return this.stream&&this.stream["get".concat(e,"Tracks")]().forEach(function(e){var n=2===a?t:!e.enabled;O.a.set(e,"enabled",n)}),this}},{key:"stop",value:function(){return this.stream&&this.stream.getTracks().forEach(function(e){return e.stop()}),this}}]),t}(S),k={iceServers:[{urls:["stun:stun.l.google.com:19302"]}]},D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this))).pc=new RTCPeerConnection(k),a.pc.onicecandidate=function(e){return E.emit("call",{to:a.friendID,candidate:e.candidate})},a.pc.onaddstream=function(e){return a.emit("peerStream",e.stream)},a.mediaDevice=new w,a.friendID=e,a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"start",value:function(e,t){var a=this;return this.mediaDevice.on("stream",function(t){a.pc.addStream(t),a.emit("localStream",t),e?E.emit("request",{to:a.friendID}):a.createOffer()}).start(t),this}},{key:"stop",value:function(e){return e&&E.emit("end",{to:this.friendID}),this.mediaDevice.stop(),this.pc.close(),this.pc=null,this.off(),this}},{key:"createOffer",value:function(){return this.pc.createOffer().then(this.getDescription.bind(this)).catch(function(e){return console.log(e)}),this}},{key:"createAnswer",value:function(){return this.pc.createAnswer().then(this.getDescription.bind(this)).catch(function(e){return console.log(e)}),this}},{key:"getDescription",value:function(e){return this.pc.setLocalDescription(e),E.emit("call",{to:this.friendID,sdp:e}),this}},{key:"setRemoteDescription",value:function(e){var t=new RTCSessionDescription(e);return this.pc.setRemoteDescription(t),this}},{key:"addIceCandidate",value:function(e){if(e){var t=new RTCIceCandidate(e);this.pc.addIceCandidate(t)}return this}}]),t}(S),M=a(343),I=a(348),N=a(149),T="physician",A=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"callWithVideo",value:function(e){var t=this,a={audio:!0};return a.video=e,function(){return t.props.startCall(!0,T,a)}}},{key:"render",value:function(){var e=this.props.clientId;return document.title="".concat(e," - VideoCall"),i.a.createElement("div",{className:"container main-window"},i.a.createElement("div",null),i.a.createElement("div",{className:"callAction_btn"},i.a.createElement(M.a,{placeholder:"Who are you looking for",value:T,onChange:function(e){return T=e.target.value}}),i.a.createElement("div",null,i.a.createElement(I.a,{basic:!0,color:"green",className:"btn-action fa fa-video-camera",onClick:this.callWithVideo(!0)},"Call",i.a.createElement("span",{className:"btn_span"}),i.a.createElement(N.a,{name:"microphone"}),i.a.createElement(N.a,{name:"camera"})))))}}]),t}(n.Component),F=a(158),V=a(4),W=a.n(V),_=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={Video:!0,Audio:!0},a.btns=[{type:"Video",icon:"fa-video-camera"},{type:"Audio",icon:"fa-microphone"}],a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setMediaStream()}},{key:"componentWillReceiveProps",value:function(e){if(!this.props.config&&e.config){var t=e.config,a=e.mediaDevice;O.a.forEach(t,function(e,t){return a.toggle(O.a.capitalize(t),e)}),this.setState({Video:t.video,Audio:t.audio})}}},{key:"componentDidUpdate",value:function(){this.setMediaStream()}},{key:"setMediaStream",value:function(){var e=this.props,t=e.peerSrc,a=e.localSrc;this.peerVideo&&t&&(this.peerVideo.srcObject=t),this.localVideo&&a&&(this.localVideo.srcObject=a)}},{key:"toggleMediaDevice",value:function(e){this.setState(Object(F.a)({},e,!this.state[e])),this.props.mediaDevice.toggle(e)}},{key:"renderControlButtons",value:function(){var e=this;return this.btns.map(function(t){return i.a.createElement(I.a,{key:"btn".concat(t.type),className:(a=t.icon,n=t.type,W()("btn-action fa ".concat(a),{disable:!e.state[n]})),onClick:function(){return e.toggleMediaDevice(t.type)}},t.type);var a,n})}},{key:"render",value:function(){var e=this,t=this.props.status;return i.a.createElement("div",{className:W()("call-window",t)},i.a.createElement("video",{id:"peerVideo",ref:function(t){return e.peerVideo=t},autoPlay:!0,className:"video_Main"}),i.a.createElement("video",{id:"localVideo",ref:function(t){return e.localVideo=t},autoPlay:!0,muted:!0,className:"video_Main"}),i.a.createElement("div",{className:"video-control"},this.renderControlButtons(),i.a.createElement(I.a,{className:"btn-action hangup fa fa-phone",onClick:function(){return e.props.endCall(!0)}},"End Call")))}}]),t}(n.Component),R=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"acceptWithVideo",value:function(e){var t=this,a={audio:!0,video:e};return function(){return t.props.startCall(!1,t.props.callFrom,a)}}},{key:"render",value:function(){return i.a.createElement("div",{className:W()("call-modal",this.props.status)},i.a.createElement("p",null,i.a.createElement("span",{className:"caller"},this.props.callFrom)," is calling ..."),i.a.createElement(I.a,{basic:!0,color:"green",className:"btn-action fa fa-video-camera",onClick:this.acceptWithVideo(!0)},"Accept Call",i.a.createElement("span",{className:"btn_span"}),i.a.createElement(N.a,{name:"microphone"}),i.a.createElement(N.a,{name:"camera"})),i.a.createElement(I.a,{basic:!0,color:"violet",className:"btn-action hangup fa fa-phone",onClick:this.props.rejectCall},"Reject Call"))}}]),t}(n.Component),x=a(346),H=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={seconds:0,mins:0,hours:0,secondsUI:"00",minsUI:"00:",hoursUI:"00:"},a.startTimer=a.startTimer.bind(Object(f.a)(Object(f.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.startTimer()}},{key:"startTimer",value:function(){var e=this;this.timex=setTimeout(function(){var t=e.state.seconds,a=e.state.mins,n=e.state.hours;++t>59&&(t=0,++a>59&&(a=0,++n<10&&e.setState({hoursUI:n+":"})),a<10?e.setState({minsUI:"0"+a+":"}):e.setState({minsUI:a+":"})),t<10?e.setState({secondsUI:"0"+t}):e.setState({secondsUI:t}),e.setState({seconds:t,mins:a,hours:n}),console.log("hours",n,"mins",a,"seconds",t),e.startTimer()},1e3)}},{key:"render",value:function(){return console.log("time"),i.a.createElement(x.a.Content,null,i.a.createElement(N.a,{name:"clock outline"}),i.a.createElement("div",{id:"timer"},i.a.createElement("span",{id:"hours"},this.state.hoursUI),i.a.createElement("span",{id:"mins"},this.state.minsUI),i.a.createElement("span",{id:"seconds"},this.state.secondsUI)))}}]),t}(n.Component),U=a(336),P=a(347),B=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return console.log("chat"),i.a.createElement("div",null,i.a.createElement("div",{className:"chat_history"},this.props.messages.map(function(t){return console.log(t),i.a.createElement("div",{className:t.sendBy===e.props.clientId?"message_me":"message_other"},function(t){return 0===t.message.indexOf("data:image")?i.a.createElement(U.a,{src:t.message}):i.a.createElement(P.a,{color:t.sendBy===e.props.clientId?"green":"orange"},t.message.indexOf("text/csv")>-1||t.message.indexOf("octet-stream")>-1||t.message.indexOf("data:application")>-1?i.a.createElement("a",{href:t.message,target:"_blank",download:t.filename},i.a.createElement(N.a,{name:"download"})," ",t.filename):t.message)}(t),i.a.createElement("span",{color:"grey"},C()(t.timestamp).fromNow()))})),i.a.createElement("div",null,i.a.createElement(M.a,{type:"text",placeholder:"...",action:!0},i.a.createElement("input",{onChange:this.props.onMessageChange,value:this.props.message}),i.a.createElement(I.a,{color:"facebook",type:"submit",onClick:this.props.onSubmit},i.a.createElement(N.a,{name:"rocketchat"}),"Chat")),i.a.createElement("div",{className:"ui middle aligned aligned grid container upload_files"},i.a.createElement("div",{className:"ui fluid segment"},i.a.createElement("input",{type:"file",onChange:function(t){return e.props.fileEvent(t.target.files)},className:"inputfile",id:"embedpollfileinput"}),i.a.createElement("label",{for:"embedpollfileinput",className:"ui green right floated button"},i.a.createElement("i",{className:"ui upload icon"}),"Upload image")))))}}]),t}(n.Component),J=a(350),G=a(148),q=a(344),z=a(325),K={patient:"0x8Bc8f2CA3d78fe01A7E4bfb118761c751438b854",physician:"0x8Bc8f2CA3d78fe01A7E4bfb118761c751438b854"},L=function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).addMessage=function(e){console.log(e),a.setState({messages:Object(o.a)(a.state.messages).concat([e])}),console.log(a.state.messages)},a.state={message:"",messages:[],clientId:"",callWindow:"",callModal:"",callFrom:"",localSrc:null,peerSrc:null},a.onMessageChange=a.onMessageChange.bind(Object(f.a)(Object(f.a)(a))),a.addMessage=a.addMessage.bind(Object(f.a)(Object(f.a)(a))),a.onSubmit=a.onSubmit.bind(Object(f.a)(Object(f.a)(a))),a.pc={},a.config=null,a.startCallHandler=a.startCall.bind(Object(f.a)(Object(f.a)(a))),a.endCallHandler=a.endCall.bind(Object(f.a)(Object(f.a)(a))),a.rejectCallHandler=a.rejectCall.bind(Object(f.a)(Object(f.a)(a))),a.startTimer=a.startTimer.bind(Object(f.a)(Object(f.a)(a))),a.onSubmitPay=a.onSubmitPay.bind(Object(f.a)(Object(f.a)(a))),a.postData=a.postData.bind(Object(f.a)(Object(f.a)(a))),a.fileEvent=a.fileEvent.bind(Object(f.a)(Object(f.a)(a)));var n=Object(f.a)(Object(f.a)(a));return E.on("RECEIVE_MESSAGE",function(e){console.log("RECEIVE_MESSAGE",e),n.addMessage(e),n.state.showTimer||n.startTimer()}).on("init",function(e){return a.setState({clientId:e.id})}).on("request",function(e){return a.setState({callModal:"active",callFrom:e.from})}).on("call",function(e){e.sdp?(a.pc.setRemoteDescription(e.sdp),"offer"===e.sdp.type&&a.pc.createAnswer()):a.pc.addIceCandidate(e.candidate),n.state.showTimer||n.startTimer()}).on("end",a.endCall.bind(Object(f.a)(Object(f.a)(a)),!1)).emit("init"),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"startCall",value:function(e,t,a){var n=this;this.config=a,this.pc=new D(t).on("localStream",function(t){var a={callWindow:"active",localSrc:t};e||(a.callModal=""),n.setState(a)}).on("peerStream",function(e){return n.setState({peerSrc:e})}).start(e,a)}},{key:"rejectCall",value:function(){E.emit("end",{to:this.state.callFrom}),this.setState({callModal:""})}},{key:"endCall",value:function(e){O.a.isFunction(this.pc.stop)&&this.pc.stop(e),this.pc={},this.config=null,this.setState({callWindow:"",localSrc:null,peerSrc:null})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"onSubmit",value:function(){E.emit("SEND_MESSAGE",{message:this.state.message,sendBy:this.state.clientId,timestamp:new Date}),this.setState({message:""})}},{key:"onSubmitPay",value:function(){var e=this;if("patient"===this.state.clientId){var t=K[this.state.clientId],a=K[this.state.callFrom];this.postData("https://healthmarketplaceapi20181117074811.azurewebsites.net/api/TransactionHeaders",{physicianKey:a,patientKey:t,timeElapsed:new Date-this.state.startTime,transactionDate:new Date}).then(function(e){return console.log(JSON.stringify(e)),JSON.stringify(e)}).then(function(t){e.setState({showTimer:!1})}).catch(function(t){e.setState({showTimer:!1,showErrorMsg:!0,errorMsg:"We cannot process your payment. Please contact us"})})}}},{key:"postData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json; charset=utf-8"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(t)}).then(function(e){return e.json()})}},{key:"startTimer",value:function(){console.log("showTimer"),this.setState({showTimer:!0,startTime:new Date})}},{key:"fileEvent",value:function(e){var t=this;console.log(e);var a=e[0],n=new FileReader;n.onload=function(e){E.emit("SEND_MESSAGE",{message:e.target.result,sendBy:t.state.clientId,filename:a.name,timestamp:new Date})},n.readAsDataURL(a)}},{key:"render",value:function(){var e="patient"===this.state.clientId;return console.log(e,this.state.clientId),i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"App"},i.a.createElement(J.a,{celled:"internally",className:"App"},i.a.createElement(J.a.Row,null,i.a.createElement(J.a.Column,{tablet:3,computer:3,mobile:16},i.a.createElement(x.a,{className:"card_c_"},i.a.createElement(x.a.Content,{header:"About you"}),i.a.createElement(x.a.Content,null,"You're a",i.a.createElement(G.a,{as:"a",className:"txt_label"},this.state.clientId)),i.a.createElement(x.a.Content,{extra:!0},i.a.createElement(N.a,{name:"user"}),"Visit ",Math.round(100*Math.random())," times")),i.a.createElement(x.a,{className:"card_c_"},i.a.createElement(x.a.Content,{header:"Current Session"}),this.state.showTimer&&i.a.createElement(H,null),e&&i.a.createElement(x.a.Content,null,i.a.createElement(z,{value:this.state.callFrom}),i.a.createElement(q.a,{horizontal:!0},"Or"),i.a.createElement(I.a,{icon:!0,labelPosition:"left",color:"green",onClick:this.onSubmitPay},"Pay Now",i.a.createElement(N.a,{name:"money"}))))),i.a.createElement(J.a.Column,{tablet:8,computer:8,mobile:16},e&&i.a.createElement(A,{clientId:this.state.clientId,startCall:this.startCallHandler}),!this.state.callFrom&&!e&&i.a.createElement(P.a,{success:!0,header:"You don't have a patient right now. Please wait.",content:"We will show the prompt as soon as we found the match"}),this.state.showErrorMsg&&i.a.createElement(P.a,{error:!0,header:this.state.errorMsg}),"active"===this.state.callWindow&&i.a.createElement(_,{status:this.state.callWindow,localSrc:this.state.localSrc,peerSrc:this.state.peerSrc,config:this.config,mediaDevice:this.pc.mediaDevice,endCall:this.endCallHandler}),this.state.callFrom&&"active"===this.state.callModal&&i.a.createElement(R,{status:this.state.callModal,startCall:this.startCallHandler,rejectCall:this.rejectCallHandler,callFrom:this.state.callFrom})),i.a.createElement(J.a.Column,{tablet:5,computer:5,mobile:16},i.a.createElement(B,{clientId:this.state.clientId,message:this.state.message,messages:this.state.messages,onMessageChange:this.onMessageChange,onSubmit:this.onSubmit,fileEvent:this.fileEvent}))))))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={},a.playRef=i.a.createRef(),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.on("stream",function(t){console.log(t),e.playRef.current.src=t})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},"Preview",i.a.createElement("img",{id:"play",ref:this.playRef,width:"500"}))}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={clientId:"",callWindow:"",callModal:"",callFrom:"",localSrc:null,peerSrc:null},a.pc={},a.config=null,a.startCallHandler=a.startCall.bind(Object(f.a)(Object(f.a)(a))),a.endCallHandler=a.endCall.bind(Object(f.a)(Object(f.a)(a))),a.rejectCallHandler=a.rejectCall.bind(Object(f.a)(Object(f.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.on("init",function(t){return e.setState({clientId:t.id})}).on("request",function(t){return e.setState({callModal:"active",callFrom:t.from})}).on("call",function(t){t.sdp?(e.pc.setRemoteDescription(t.sdp),"offer"===t.sdp.type&&e.pc.createAnswer()):e.pc.addIceCandidate(t.candidate)}).on("end",this.endCall.bind(this,!1)).emit("init")}},{key:"startCall",value:function(e,t,a){var n=this;this.config=a,this.pc=new D(t).on("localStream",function(t){var a={callWindow:"active",localSrc:t};e||(a.callModal=""),n.setState(a)}).on("peerStream",function(e){return n.setState({peerSrc:e})}).start(e,a)}},{key:"rejectCall",value:function(){E.emit("end",{to:this.state.callFrom}),this.setState({callModal:""})}},{key:"endCall",value:function(e){O.a.isFunction(this.pc.stop)&&this.pc.stop(e),this.pc={},this.config=null,this.setState({callWindow:"",localSrc:null,peerSrc:null})}},{key:"render",value:function(){return console.log("Test"),i.a.createElement("div",null,i.a.createElement(A,{clientId:this.state.clientId,startCall:this.startCallHandler}),i.a.createElement(_,{status:this.state.callWindow,localSrc:this.state.localSrc,peerSrc:this.state.peerSrc,config:this.config,mediaDevice:this.pc.mediaDevice,endCall:this.endCallHandler}),i.a.createElement(R,{status:this.state.callModal,startCall:this.startCallHandler,rejectCall:this.rejectCallHandler,callFrom:this.state.callFrom}))}}]),t}(n.Component),Q=(a(331),i.a.createElement(l.a,null,i.a.createElement("div",null,i.a.createElement(r.a,{exact:!0,path:"/",component:L}),i.a.createElement(r.a,{path:"/preview",component:Y}),i.a.createElement(r.a,{path:"/test",component:$}))));s.a.render(Q,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},52:function(e,t,a){}},[[171,2,1]]]);
//# sourceMappingURL=main.e77a602c.chunk.js.map