(this["webpackJsonproyxu.me"]=this["webpackJsonproyxu.me"]||[]).push([[0],{13:function(e,a,t){e.exports=t(30)},18:function(e,a,t){},21:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),o=(t(18),t(1)),i=t(2),s=t(4),m=t(3),u=t(8),d=t(11),h=t.n(d),g=(t(21),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#artwork"},"Artwork")),r.a.createElement("li",null,r.a.createElement("a",{href:"assets/Roy Xu Resume.pdf"},"Resume")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},e),r.a.createElement("h2",null,"Software Engineer | Designer | Wannabe Basketball Player "),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},a))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),p=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"\xa9 2020 Roy Xu. All rights reserved."),r.a.createElement("li",null,"Site made with ",r.a.createElement("a",{title:"Styleshout",href:"https://reactjs.org/"},"React.js")))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),f=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e="images/"+this.props.data.image;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:e,alt:"Roy Xu Profile Pic"})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null," Hi, I'm Roy \ud83d\udc4b "),r.a.createElement("p",null,"I graduated from Carnegie Mellon University in 2021, majoring in Information Systems and Human-Computer Interaction, with a minor in Computer Science. Currently, I'm a Software Engineer on GoDaddy\u2019s eCommerce team in the San Francisco Bay area."),r.a.createElement("p",null,"I have experience in full-stack web and mobile development, mostly React, Django, Ruby on Rails, and SwiftUI. I've also worked extensively with AWS Lambda and API Gateway in Node.js and TypeScript."),r.a.createElement("p",null,"In college, I collaborated with Professor",r.a.createElement("a",{href:"https://www.saramoussawi.com/home",target:"_blank",rel:"noopener noreferrer"}," ","Sara Moussawi"," "),"on researching users' behavior in crowdsourcing marketplaces and collaborative platforms. I also worked as a TA for",r.a.createElement("a",{href:"http://www.kosbie.net/cmu/fall-18/15-110/staff.html",target:"_blank",rel:"noopener noreferrer"}," ","15-110"),", Principles of Computing, under Professor",r.a.createElement("a",{href:"http://www.kosbie.net/cmu/",target:"_blank",rel:"noopener noreferrer"}," ","David Kosbie"," "),"and Professor",r.a.createElement("a",{href:"http://www.cs.cmu.edu/~mjs/",target:"_blank",rel:"noopener noreferrer"}," ","Mark Stehlik"),"."),r.a.createElement("p",null,"Bringing ideas to life excites me - it is my goal to build compelling and meaningful products at scale. In my free time, I'm working on Unibuy, an iOS app that digitizes the brick-and-mortar shopping experience for college students."),r.a.createElement("p",null,"When I'm not working, I love playing basketball and watching the lastest sci-fi movies and shows. I also love to draw things so check out my",r.a.createElement("a",{href:"https://www.royxuhan.com/",target:"_blank",rel:"noopener noreferrer"}," ","artwork"),". Feel free to",r.a.createElement("a",{href:"mailto:royxuhan@gmail.com",target:"_blank",rel:"noopener noreferrer"}," ","get in touch"," "),"- I'm always happy to chat :)."))))}}]),t}(n.Component),E=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return r.a.createElement("div",{key:e.title,className:"columns portfolio-item"},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("a",{href:e.url,title:e.title,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:e.title,src:a}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,e.title),r.a.createElement("p",null,e.date))),r.a.createElement("div",{className:"link-icon"},r.a.createElement("i",{className:"fa fa-link"})))))}));return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Projects"),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),t}(n.Component),v=t(12),w=["images//artwork/1.jpg","images//artwork/2.jpg","images//artwork/3.jpg","images//artwork/4.jpg","images//artwork/5.jpg","images//artwork/6.jpg","images//artwork/7.jpg","images//artwork/8.jpg","images//artwork/9.jpg","images//artwork/10.jpg","images//artwork/11.jpg","images//artwork/12.jpg","images//artwork/13.jpg","images//artwork/14.jpg","images//artwork/15.jpg"],k={duration:5e3,transitionDuration:500,infinite:!0,indicators:!0,arrows:!0,pauseOnHover:!0,onChange:function(e,a){console.log("slide transition from ".concat(e," to ").concat(a))}},b=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"artwork"},r.a.createElement("h1",null,"Artwork"),r.a.createElement("div",{className:"slide-container"},r.a.createElement(v.Slide,k,r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[0],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[1],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[2],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[3],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[4],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[5],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[6],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[7],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[8],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[9],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[10],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[11],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[12],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[13],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[14],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(w[15],")")}})))))}}]),t}(n.Component),y=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={resumeData:{}},u.a.initialize("UA-85418667-3"),u.a.pageview(window.location.pathname+window.location.search),n}return Object(i.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,{data:this.state.resumeData.main}),r.a.createElement(f,{data:this.state.resumeData.main}),r.a.createElement(E,{data:this.state.resumeData.portfolio}),r.a.createElement(b,{data:this.state.resumeData.artwok}),r.a.createElement(p,{data:this.state.resumeData.main}))}}]),t}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");N?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):j(e)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.1fd4f1c8.chunk.js.map