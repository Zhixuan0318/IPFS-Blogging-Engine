(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76b04863"],{1:function(t,e){},2:function(t,e){},"21bb":function(t,e,a){"use strict";a("2dad")},2290:function(t,e,a){},"2dad":function(t,e,a){},3:function(t,e){},4:function(t,e){},"5ac9":function(t,e,a){t.exports=a.p+"static/img/unstoppable-domain-logo.3d538834.png"},7190:function(t,e,a){t.exports=a.p+"static/img/popup-building-illustration.eb8c071b.png"},"877d":function(t,e,a){"use strict";a("2290")},"9cae":function(t,e,a){"use strict";(function(t){var n,i=a("ade3"),o=a("1da1"),r=(a("96cf"),a("d3b7"),a("25f0"),a("ac1f"),a("466d"),a("a434"),a("b0c0"),a("e9c4"),a("ace4"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("4ab0")),s=a("7c5c"),c=a("6576"),l=a.n(c),p=a("8a5d"),d=a("b2c8"),u=a("bc3a"),m=a.n(u);e["a"]={name:"Home",components:{PulseLoader:p["a"],Footer:d["a"]},data:function(){return{blog_building:!1,building_success:!1,loading:!0,apiToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDIyNGI0RTg3ODA3QjBDRkU2ZURjMzk1QjMyMkE1OWYzQjJhQUJiODciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTIxMDIxMzcyMzQsIm5hbWUiOiJteS1maXJzdC13ZWJzdG9yYWdlLXRva2VuIn0.zL-mQkLtbxZPpL_LpU0XYnmFwP7Wam3mXphwLt8RT0c",blog_title:"",blog_des:"",thumbnail:"",banner:"",markdown:"",recommendations:[""],name:"",personal_title:"",avatar:"",bio:"",web3_api_key:"",pinata_api_key:"",pinata_secret_api_key:"",root_cid:"",usv:!1,buffer:"",image:"",blogimage:"",componentKey:!1}},computed:{markdownToHtml:function(){return s["marked"].parse(this.markdown.toString())}},watch:{blog_des:function(t,e){console.log("aefffffffff"),String(this.blog_des).match(/(\w+)/g).length>100?this.blog_des=e:this.blog_des=t},bio:function(t,e){console.log("aefffffffff"),String(this.bio).match(/(\w+)/g).length>50?this.bio=e:this.bio=t}},methods:(n={closeModal:function(){this.root_cid="",this.building_success=!1},test:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=new l.a({clientID:"50077f31-9c41-42bd-9121-93fe48e8942a",scope:"openid wallet email",redirectUri:"",postLogoutRedirectUri:""}),a.loginWithPopup().then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.usv=!0;case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("error"),console.log(a),t.usv=!0;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.log(t.$store.getter);case 3:case"end":return e.stop()}}),e)})))()},scrollMeTo:function(t){var e=this.$refs[t],a=e.offsetTop;window.scrollTo(0,a)},renderMachine:function(){this.$router.push("/render-machine")}},Object(i["a"])(n,"renderMachine",(function(){this.root_cid="",this.building_success=!1,this.$router.push("/render-machine")})),Object(i["a"])(n,"createAnotherBlog",(function(){this.root_cid="",this.building_success=!1;var t=this.$refs["porto"],e=t.offsetTop;window.scrollTo(0,e)})),Object(i["a"])(n,"myFunction",(function(){var t=document.getElementById("myInput");t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value);var e=document.getElementById("myTooltip");e.innerHTML="Copied"})),Object(i["a"])(n,"pushOneRec",(function(){this.recommendations.push("")})),Object(i["a"])(n,"sliceOneRec",(function(t){t>-1&&this.recommendations.splice(t,1)})),Object(i["a"])(n,"onThumbnailSelected",(function(t){var e=this,a=new FileReader;"undefined"!==typeof t&&(a.readAsDataURL(t.target.files[0]),a.onloadend=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.thumbnail=a.result;case 1:case"end":return t.stop()}}),t)}))))})),Object(i["a"])(n,"onBannerSelected",(function(t){var e=this,a=new FileReader;"undefined"!==typeof t&&(a.readAsDataURL(t.target.files[0]),a.onloadend=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.banner=a.result;case 1:case"end":return t.stop()}}),t)}))))})),Object(i["a"])(n,"onMarkdownSelected",(function(t){var e=this,a=new FileReader;"undefined"!==typeof t&&(a.readAsText(t.target.files[0]),a.onloadend=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.markdown=a.result;case 1:case"end":return t.stop()}}),t)}))))})),Object(i["a"])(n,"onAvatarSelected",(function(t){var e=this,a=new FileReader;"undefined"!==typeof t&&(a.readAsDataURL(t.target.files[0]),a.onloadend=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.avatar=a.result;case 1:case"end":return t.stop()}}),t)}))))})),Object(i["a"])(n,"convertToBuffer",(function(e){return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.abrupt("return",t.from(e));case 1:case"end":return a.stop()}}),a)})))()})),Object(i["a"])(n,"createBlog",(function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,i,o,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""==t.web3_api_key){e.next=27;break}return t.blog_building=!0,a=new r["a"]({token:t.web3_api_key}),n={},n.blog_title=t.blog_title,n.blog_des=t.blog_des,n.thumbnail=t.thumbnail,n.banner=t.banner,n.markdown=t.markdown,n.recommendations=t.recommendations,n.name=t.name,n.personal_title=t.personal_title,n.avatar=t.avatar,n.bio=t.bio,n.usv=t.usv,n.created_at=new Date,console.log(n),i=new Blob([JSON.stringify(n)],{type:"application/json"}),o=[new File([i],"hello.json")],e.next=21,a.put(o,{maxRetries:3});case 21:s=e.sent,""!=t.pinata_api_key&&""!=t.pinata_secret_api_key&&(c="https://api.pinata.cloud/pinning/pinJSONToIPFS",m.a.post(c,n,{headers:{pinata_api_key:t.pinata_api_key,pinata_secret_api_key:t.pinata_secret_api_key}}).then((function(t){console.log("response"),console.log(t)})).catch((function(t){}))),t.blog_building=!1,t.root_cid=s,t.building_success=!0;case 27:case"end":return e.stop()}}),e)})))()})),Object(i["a"])(n,"_arrayBufferToBase64",(function(t){for(var e="",a=new Uint8Array(t),n=a.byteLength,i=0;i<n;i++)e+=String.fromCharCode(a[i]);return window.btoa(e)})),n)}}).call(this,a("b639").Buffer)},a2d6:function(t,e,a){t.exports=a.p+"static/img/popup-copy-icon.d3de6e26.png"},b2c8:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hr"),a("p",{staticClass:"text-center",staticStyle:{"font-size":"20px","padding-top":"30px","padding-bottom":"40px"}},[t._v("Build and render with love ♥IFPS Blog Engine")])])}],o=a("2877"),r={},s=Object(o["a"])(r,n,i,!1,null,null,null);e["a"]=s.exports},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"app-container"},[n("p",{staticClass:"mt-4",staticStyle:{"font-size":"45px","font-weight":"bold"}},[t._v(" IPFS Blog Engine ")]),n("p",{staticStyle:{"font-size":"25px"}},[t._v("Create your own blog with markdown and store it as JSON on the decentralised storage network.")]),n("p",{staticStyle:{"font-size":"25px","margin-top":"-15px"}},[t._v("Wanna display it? Use the render machine and let the magic happens.")]),n("button",{staticClass:"btn btn-dark me-1 mt-3 mb-3",staticStyle:{"font-size":"20px"},on:{click:function(e){return t.scrollMeTo("porto")}}},[t._v("Start Creating Blog")]),n("button",{staticClass:"btn btn-outline-dark ms-1 mt-3 mb-3",staticStyle:{"font-size":"20px"},on:{click:t.renderMachine}},[t._v("Render Machine")]),t._m(0)]),n("hr",{staticClass:"m-5"}),n("div",{ref:"porto"}),n("div",{staticStyle:{"padding-right":"200px","padding-left":"200px"}},[n("p",{staticStyle:{"font-size":"30px"}},[t._v("Step 1 | Set up your blog")]),n("p",{staticStyle:{"font-size":"20px"}},[t._v("Blog title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.blog_title,expression:"blog_title"}],staticClass:"form-control border border-dark border-2",attrs:{type:"text"},domProps:{value:t.blog_title},on:{input:function(e){e.target.composing||(t.blog_title=e.target.value)}}}),n("p",{staticClass:"mt-3",staticStyle:{"font-size":"20px"}},[t._v("Blog description (100 words max)")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.blog_des,expression:"blog_des"}],staticClass:"form-control border border-dark border-2",attrs:{rows:"7"},domProps:{value:t.blog_des},on:{input:function(e){e.target.composing||(t.blog_des=e.target.value)}}}),n("p",{staticClass:"mt-3",staticStyle:{"font-size":"20px"}},[t._v("Upload Thumbnail Image (250px * 250px)")]),n("section",{attrs:{id:"panel-upload"}},[n("div",{staticClass:"content panel-upload--content",staticStyle:{height:"160px"}},[n("div",{staticClass:"panel-upload--dropzone"},[n("div",{staticClass:"dropzone-label"},[n("input",{ref:"thumbnail",attrs:{type:"file",accept:"image/png, image/jpeg"},on:{change:t.onThumbnailSelected}}),""==t.thumbnail?n("div",[n("button",{staticClass:"vue-button rounded",on:{click:function(e){return e.preventDefault(),t.$refs.thumbnail.click()}}},[t._v("Upload Image")]),n("p",{staticStyle:{"font-size":"20px"}},[t._v("Supports JPEG or PNG only")])]):n("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:t.thumbnail},on:{click:function(e){return t.$refs.thumbnail.click()}}})])])])]),n("p",{staticClass:"mt-3",staticStyle:{"font-size":"20px"}},[t._v("Upload banner image (1920px * 1080px)")]),n("section",{attrs:{id:"panel-upload"}},[n("div",{staticClass:"content panel-upload--content",staticStyle:{height:"160px"}},[n("div",{staticClass:"panel-upload--dropzone"},[n("div",{staticClass:"dropzone-label"},[n("input",{ref:"banner",attrs:{type:"file",accept:"image/png, image/jpeg"},on:{change:t.onBannerSelected}}),""==t.banner?n("div",[n("button",{staticClass:"vue-button rounded",on:{click:function(e){return e.preventDefault(),t.$refs.banner.click()}}},[t._v("Upload Image")]),n("p",{staticStyle:{"font-size":"20px"}},[t._v("Supports JPEG or PNG only")])]):n("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:t.banner},on:{click:function(e){return t.$refs.banner.click()}}})])])])]),n("p",{staticClass:"mt-3",staticStyle:{"font-size":"20px"}},[t._v("Upload blog (Markdown format)")]),n("input",{ref:"markdown",staticStyle:{display:"none"},attrs:{type:"file",accept:".md"},on:{change:t.onMarkdownSelected}}),""==t.markdown?n("section",{attrs:{id:"panel-upload"}},[n("div",{staticClass:"content panel-upload--content",staticStyle:{height:"160px"}},[n("div",{staticClass:"panel-upload--dropzone"},[n("div",{staticClass:"dropzone-label"},[n("button",{staticClass:"vue-button rounded",on:{click:function(e){return e.preventDefault(),t.$refs.markdown.click()}}},[t._v("Upload File")]),n("p",{staticStyle:{"font-size":"20px"}},[t._v("Only supports H2, H3, blockquote, link and list in .md file.")])])])])]):t._e(),n("div",{domProps:{innerHTML:t._s(t.markdownToHtml)},on:{click:function(e){return t.$refs.markdown.click()}}}),n("p",{staticClass:"mt-3",staticStyle:{"font-size":"20px"}},[t._v("Recommendations (Read more list)")]),t._l(t.recommendations,(function(e,a){return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.recommendations[a],expression:"recommendations[index]"}],staticClass:"form-control border border-dark border-2 d-inline mt-3",staticStyle:{width:"82%"},attrs:{type:"text"},domProps:{value:t.recommendations[a]},on:{input:function(e){e.target.composing||t.$set(t.recommendations,a,e.target.value)}}}),n("button",{staticClass:"btn btn-outline-dark el-icon-plus border border-dark border-2 ms-4",staticStyle:{"font-size":"16px"},on:{click:t.pushOneRec}}),a>0?n("button",{staticClass:"btn btn-outline-dark el-icon-minus border border-dark border-2 ms-2",staticStyle:{"font-size":"16px"},on:{click:function(e){return t.sliceOneRec(a)}}}):t._e()])}))],2),n("hr",{staticClass:"m-5"}),n("div",{staticStyle:{"padding-right":"200px","padding-left":"200px"}},[n("p",{staticStyle:{"font-size":"30px"}},[t._v("Step 2 | Set up your profile card")]),n("p",{staticStyle:{"font-size":"20px"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control border border-dark border-2",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("p",{staticClass:"mt-3",staticStyle:{"font-size":"20px"}},[t._v("Personal Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.personal_title,expression:"personal_title"}],staticClass:"form-control border border-dark border-2",attrs:{type:"text"},domProps:{value:t.personal_title},on:{input:function(e){e.target.composing||(t.personal_title=e.target.value)}}}),n("p",{staticClass:"mt-3",staticStyle:{"font-size":"20px"}},[t._v("Upload avatar (250px * 250px)")]),n("section",{attrs:{id:"panel-upload"}},[n("div",{staticClass:"content panel-upload--content",staticStyle:{height:"160px"}},[n("div",{staticClass:"panel-upload--dropzone"},[n("div",{staticClass:"dropzone-label"},[n("input",{ref:"avatar",attrs:{type:"file",accept:"image/png, image/jpeg"},on:{change:t.onAvatarSelected}}),""==t.avatar?n("div",[n("button",{staticClass:"vue-button rounded",on:{click:function(e){return e.preventDefault(),t.$refs.avatar.click()}}},[t._v("Upload Image")]),n("p",{staticStyle:{"font-size":"20px"}},[t._v("Supports JPEG or PNG only")])]):n("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:t.avatar},on:{click:function(e){return t.$refs.avatar.click()}}})])])])]),n("p",{staticClass:"mt-3",staticStyle:{"font-size":"20px"}},[t._v("UNS Verification (Login to verify yourself | Optional)")]),n("button",{staticClass:"btn btn-outline-dark border border-dark border-2",staticStyle:{width:"100%"},on:{click:t.test}},[n("img",{staticStyle:{width:"25px",height:"25px"},attrs:{src:a("5ac9")}}),t._v(" Unstoppable Domain Login")]),n("p",{staticClass:"mt-3",staticStyle:{"font-size":"20px"}},[t._v("Bio (50 words max)")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bio,expression:"bio"}],staticClass:"form-control border border-dark border-2",attrs:{rows:"7"},domProps:{value:t.bio},on:{input:function(e){e.target.composing||(t.bio=e.target.value)}}})]),n("hr",{staticClass:"m-5"}),n("div",{staticStyle:{"padding-right":"200px","padding-left":"200px"}},[n("p",{staticStyle:{"font-size":"30px"}},[t._v("Step 3 | Set up your decentralised storage")]),n("p",{staticStyle:{"font-size":"20px"}},[t._v("Web3.storage API Key")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.web3_api_key,expression:"web3_api_key"}],staticClass:"form-control border border-dark border-2",attrs:{type:"text"},domProps:{value:t.web3_api_key},on:{input:function(e){e.target.composing||(t.web3_api_key=e.target.value)}}}),n("p",{staticClass:"mt-3",staticStyle:{"font-size":"20px"}},[t._v("Pinata API Key (for additional pining | optional)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pinata_api_key,expression:"pinata_api_key"}],staticClass:"form-control border border-dark border-2",attrs:{type:"text"},domProps:{value:t.pinata_api_key},on:{input:function(e){e.target.composing||(t.pinata_api_key=e.target.value)}}}),n("p",{staticClass:"mt-3",staticStyle:{"font-size":"20px"}},[t._v("Pinata Secret API Key (required if using Pinata for additional pining)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pinata_secret_api_key,expression:"pinata_secret_api_key"}],staticClass:"form-control border border-dark border-2",attrs:{type:"text"},domProps:{value:t.pinata_secret_api_key},on:{input:function(e){e.target.composing||(t.pinata_secret_api_key=e.target.value)}}}),n("div",{staticClass:"text-center mt-5 mb-5"},[n("button",{staticClass:"btn btn-dark mt-2",staticStyle:{width:"80%","font-size":"20px"},on:{click:t.createBlog}},[t._v("Create my blog")])])]),t.blog_building?n("div",{staticClass:"custom-modal"},[n("div",{staticClass:"custom-modal-content"},[t._m(1),t._m(2),n("div",{staticClass:"custom-modal-footer text-center mt-5 mb-5"},[n("pulse-loader",{attrs:{loading:t.loading,color:"#000000",size:"12px"}})],1)])]):t._e(),t.building_success?n("div",{staticClass:"custom-modal"},[n("div",{staticClass:"custom-modal-content"},[n("div",{staticClass:"custom-modal-header",staticStyle:{height:"75px"}}),n("div",{staticClass:"custom-modal-body text-center"},[n("p",{staticStyle:{"font-size":"30px","font-weight":"bold"}},[t._v("Hooray! Your blog page is live now.")]),n("p",{staticStyle:{"font-size":"17px"}},[t._v("This is one time popup. Please copy and save the IPFS")]),n("p",{staticStyle:{"font-size":"17px","margin-top":"-10px"}},[t._v("CID below. Don't worry if you miss it, you can always")]),n("p",{staticStyle:{"font-size":"17px","margin-top":"-10px"}},[t._v("look for them in your Web3.storage or Pinata account.")]),n("div",{staticClass:"input-group mb-3 border border-dark border-2"},[n("input",{staticClass:"form-control",attrs:{id:"myInput",type:"text"},domProps:{value:t.root_cid}}),n("span",{staticClass:"input-group-text"},[n("div",{staticClass:"custom-tooltip",on:{click:t.myFunction}},[n("img",{staticStyle:{width:"25px",height:"25px"},attrs:{src:a("a2d6")}}),n("span",{staticClass:"tooltiptext",attrs:{id:"myTooltip"}},[t._v("Copy to")])])])]),n("div",{staticClass:"text-center mt-5 mb-5"},[n("div",[n("button",{staticClass:"btn btn-dark",staticStyle:{width:"60%","font-size":"20px"},on:{click:t.renderMachine}},[t._v("Render Machine")]),n("button",{staticClass:"btn btn-outline-dark mt-3",staticStyle:{width:"60%","font-size":"20px"},on:{click:t.createAnotherBlog}},[t._v("Create another blog")])])])])])]):t._e(),n("Footer")],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticStyle:{width:"50%",height:"50%"},attrs:{src:a("cab5")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-modal-header",staticStyle:{height:"75px"}},[n("span",{staticClass:"close"},[n("img",{staticStyle:{width:"30px",height:"30px"},attrs:{src:a("cdb2")}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-modal-body text-center"},[n("p",{staticStyle:{"font-size":"30px","font-weight":"bold"}},[t._v("Blog page building is in progress...")]),n("p",{staticStyle:{"font-size":"18px"}},[t._v("Reminder: Please do not refresh or close window")]),n("p",{staticStyle:{"font-size":"18px","margin-top":"-15px"}},[t._v("as this will interrupt the process. Just be patient~")]),n("img",{staticStyle:{width:"60%",height:"60%"},attrs:{src:a("7190")}})])}],o=a("9cae"),r=o["a"],s=(a("21bb"),a("877d"),a("2877")),c=Object(s["a"])(r,n,i,!1,null,"e34fa280",null);e["default"]=c.exports},cab5:function(t,e,a){t.exports=a.p+"static/img/doodle-machine.8c0ae1c3.png"},cdb2:function(t,e,a){t.exports=a.p+"static/img/popup-close-icon.4ead46b2.png"}}]);