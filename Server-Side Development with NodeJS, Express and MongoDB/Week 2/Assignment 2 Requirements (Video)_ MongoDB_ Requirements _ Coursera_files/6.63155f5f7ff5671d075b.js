(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+Nyl":function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("q1tI"),o=t.n(s),a=t("763+"),i=t("6/Gu"),c=t("8Hdl"),u=t("AeFk"),l=t("Xc4M"),d;function ForumsList(e){var t=Object(a.a)(),n={"h2.category-title":{margin:0}};return Object(u.d)(i.a,{css:n,container:!0,item:!0,xs:12,className:"rc-ForumsList","data-e2e":e.className},Object(u.d)(i.a,{item:!0,xs:12,component:l.a,css:Object(u.c)(d||(d=r()(["\n          padding: ",";\n          border-bottom: 0px;\n        "])),t.spacing(16,0,16,24))},e.title&&Object(u.d)(c.a,{variant:"h4bold",className:"category-title",component:"h2"},e.title)),Object(u.d)(i.a,{item:!0,xs:12,component:l.a},Object(u.d)("div",null,e.children)))}e.a=ForumsList},"0YDA":function(module,exports,e){var t=e("OiCW"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},"2OBf":function(module,e,t){"use strict";var n=t("lSNA"),r=t.n(n),s=t("VbXa"),o=t.n(s),a=t("AeFk"),i=t("8Hdl"),c=t("oEqI"),u=t("F/us"),l=t.n(u),d=t("17x9"),p=t.n(d),b=t("q1tI"),m=t.n(b),f=t("Jrms"),h=t("Fmrb"),g=t.n(h),j=t("8cuT"),O=t("jJ30"),y=t("qiY+"),v=t("6H8r"),F=t.n(v);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var S=function(e){function DiscussionsModerators(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).onDisplayMiniProfile=function(e){if(e===t.openMiniProfile)return;void 0!==t.openMiniProfile&&t.openMiniProfile.hide({}),t.openMiniProfile=e},t}o()(DiscussionsModerators,e);var t=DiscussionsModerators.prototype;return t.componentWillMount=function componentWillMount(){var e=this.props.courseId;this.props.staffSocialProfiles.length||this.context.executeAction(O.b,{courseId:e})},t.render=function render(){var e=this,t;if(!this.props.staffSocialProfiles)return null;if(!this.props.staffSocialProfiles.find(function(e){return e.courseRole===y.a.MENTOR||e.courseRole===y.a.TEACHING_STAFF||e.courseRole===y.a.COURSE_ASSISTANT}))return null;var n,r={"ul.moderator-list li.staff-profile-container .rc-ProfileImage .c-profile-initials":_objectSpread({},this.props.theme.typography.body1),".moderator-list":{display:"flex",flexFlow:"row",flexWrap:"wrap",".staff-profile-container":{position:"relative"}}};return Object(a.d)("div",{css:r,className:"rc-DiscussionsModerators card-no-action cozy"},Object(a.d)(i.a,{variant:"h3bold"},g()("Moderators")),Object(a.d)("ul",{className:"moderator-list"},this.props.staffSocialProfiles.map(function(t){return Object(a.d)("li",{className:"staff-profile-container",key:t.id},Object(a.d)(f.h,{onDisplayMiniProfile:e.onDisplayMiniProfile,externalUserId:t.externalUserId,fullName:t.fullName,profileImageUrl:t.photoUrl,courseRole:t.courseRole,helperStatus:t.helperStatus}))})))},DiscussionsModerators}(m.a.Component);S.propTypes={staffSocialProfiles:p.a.arrayOf(p.a.object),courseId:p.a.string,theme:p.a.object},S.contextTypes={executeAction:p.a.func.isRequired},e.a=Object(u.compose)(Object(j.a)(["CourseStore","ClassmatesProfileStore"],function(e){var t=e.CourseStore,n=e.ClassmatesProfileStore;return{courseId:t.getCourseId(),staffSocialProfiles:n.getStaffProfiles()}}))(Object(c.a)(S))},"3rqT":function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("VbXa"),o=t.n(s),a=t("AeFk"),i=t("6/Gu"),c=t("oEqI"),u=t("F/us"),l=t.n(u),d=t("w/1P"),p=t.n(d),b=t("17x9"),m=t.n(b),f=t("q1tI"),h=t.n(f),g=t("wqhG"),j=t("w+y7"),O=t("pYbF"),y=t("VlQa"),v=t("Ak00"),F=t("cnYm"),S=t("Jrms"),k=t("+LJP"),A=t("0YDA"),x=t.n(A),w,P=function(e){function DiscussionsMainColumn(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).onSubmitSearch=function(e){t.context.router.push({pathname:Object(S.o)(),query:{q:e}})},t}var t;return o()(DiscussionsMainColumn,e),DiscussionsMainColumn.prototype.render=function render(){var e=this.props,t=e.className,n=e.isForumsListActive,s=e.query,o=e.theme;return Object(a.d)(i.a,{container:!0,item:!0,xs:12,className:p()("rc-DiscussionsMainColumn",t)},n&&Object(a.d)(i.a,{item:!0,xs:12},Object(a.d)(F.a,null)),Object(a.d)(i.a,{item:!0,xs:12},Object(a.d)(y.a,null,Object(a.d)(g.a,{query:s,onSubmit:this.onSubmitSearch}))),n?Object(a.d)(i.a,{container:!0,item:!0,xs:12,role:"tabpanel",id:"panel-forums"},Object(a.d)(i.a,{item:!0,xs:12,css:Object(a.c)(w||(w=r()(["\n                margin: ",";\n              "])),o.spacing(0,0,24,0))},Object(a.d)(j.a,null)),Object(a.d)(i.a,{xs:12,item:!0},Object(a.d)(O.a,null)),Object(a.d)(i.a,{item:!0,id:"panel-all-threads"})):Object(a.d)(i.a,{xs:12,container:!0,item:!0,role:"tabpanel",id:"panel-all-threads"},Object(a.d)(v.a,null)))},DiscussionsMainColumn}(h.a.Component);P.contextTypes={router:m.a.object.isRequired},e.a=Object(u.compose)(Object(k.a)(function(e){return{isForumsListActive:e.isActive({pathname:Object(S.q)()},!0),query:e.location.query.q&&decodeURIComponent(e.location.query.q)}}))(Object(c.a)(P))},"5Zqe":function(module,exports,e){var t=e("fAEL"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},"6H8r":function(module,exports,e){var t=e("hljP"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},Ak00:function(module,e,t){"use strict";var n=t("lSNA"),r=t.n(n),s=t("VbXa"),o=t.n(s),a=t("AeFk"),i=t("6/Gu"),c=t("F/us"),u=t.n(c),l=t("17x9"),d=t.n(l),p=t("q1tI"),b=t.n(p),m=t("Jrms"),f=t("15pW"),h=t("BVC1"),g=t("+LJP"),j=t("BZ+2"),O=t("QOs0"),y=t("zUbo"),v=t.n(y);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var F=function(e){function LandingPageThreadsViewWrapper(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).styles=function(){return{width:"100%","div.rc-LandingPageThreadsViewWrapper":{maxWidth:"unset","div.forum-info.caption-text.color-secondary-text":_objectSpread(_objectSpread({},t.props.theme.typography.body1),{},{position:"relative",left:"-33px"}),"div.headline-1-text.question-title.color-primary-text.question-title-bold":_objectSpread({},t.props.theme.typography.h3bold),"& .rc-ThreadBadge.bgcolor-accent-brown-light":_objectSpread(_objectSpread({},t.props.theme.typography.h4bold),{},{backgroundColor:t.props.theme.palette.purple[50],color:t.props.theme.palette.purple[700]}),"& li.rc-ThreadsListEntry .cif-stack.pin-container":{height:"24px",width:"24px",margin:t.props.theme.spacing(0,8,0,0),position:"relative",top:"24px","& .cif-circle.cif-stack-2x.pin-background":{"&:before":{content:"none"},backgroundColor:t.props.theme.palette.yellow[500],borderRadius:"100%",height:"24px",width:"24px"},"& .cif-pin.cif-stack-lg.pin-icon":{margin:0,position:"relative",top:"-7px"}},"& .rc-Metadata.entry-metadata.caption-text.color-secondary-text":_objectSpread({},t.props.theme.typography.body2),"& .rc-ProfileName.nostyle.pii-hide":_objectSpread(_objectSpread({},t.props.theme.typography.h4bold),{},{color:t.props.theme.palette.blue[600]}),"& .ThreadListEntry button.c-new-thread-button.secondary":_objectSpread({},t.props.theme),".rc-DiscussionsBody, .rc-DiscussionsSearchResults":{width:"100%"},".rc-LandingPageSearchResultsSummary":{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:t.props.theme.palette.blue[50]}}}},t}var t;return o()(LandingPageThreadsViewWrapper,e),LandingPageThreadsViewWrapper.prototype.render=function render(){if(!this.props.currentForum)return null;var e=h.a.join(f.d.learnRoot,this.props.courseSlug,this.props.currentForum.link);return Object(a.d)(i.a,{container:!0,item:!0,xs:12,className:"rc-LandingPageThreadsViewWrapper"},Object(a.d)(O.a,{id:this.props.currentForum.forumId}),Object(a.d)(m.b,{backLink:e}))},LandingPageThreadsViewWrapper}(b.a.Component);F.propTypes={search:d.a.string,currentForum:d.a.instanceOf(j.a),courseSlug:d.a.string},e.a=Object(c.compose)(Object(m.n)({fields:["link"]}),Object(g.a)(m.u))(F)},CeQc:function(module,exports,e){},E4en:function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("AeFk"),o=t("q1tI"),a=t.n(o),i=t("Fmrb"),c=t.n(i),u=t("Jrms"),l=t("ukFQ"),d=t.n(l),p=t("763+"),b=t("8Hdl"),m;function DiscussionsLandingPageHeader(){var e=Object(p.a)();return Object(s.d)("div",{className:"rc-DiscussionsLandingPageHeader "},Object(s.d)("div",{css:Object(s.c)(m||(m=r()(["\n          padding: ",";\n        "])),e.spacing(24,0,8,0))},Object(s.d)(b.a,{variant:"h1semibold"},c()("Forums"))),Object(s.d)("div",{className:"flex-1 align-self-end session-switcher-container"},Object(s.d)(u.j,null)))}e.a=DiscussionsLandingPageHeader},FwM0:function(module,e,t){"use strict";var n=t("AeFk"),r=t("w/1P"),s=t.n(r),o=t("q1tI"),a=t.n(o),i=t("M/fd"),c=t("2OBf"),u=t("kj8t");e.a=function(e){var t=e.className;return Object(n.d)("div",{className:s()("rc-DiscussionsSideColumn",t)},Object(n.d)(i.a,null),Object(n.d)(c.a,null),Object(n.d)(u.a,null))}},G0pw:function(module,exports,e){var t=e("Y1MS"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},ImTR:function(module,exports,e){},J2Ji:function(module,exports,e){var t=e("cI4F"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},"M/fd":function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("AeFk"),o=t("F/us"),a=t.n(o),i=t("q1tI"),c=t.n(i),u=t("7GkZ"),l=t("h4VP"),d=t("Fmrb"),p=t.n(d),b=t("8cuT"),m=t("Jrms"),f=t("G0pw"),h=t.n(f),g=t("763+"),j=t("8Hdl"),O=t("Xc4M"),y;function DiscussionsDescription(e){var t=Object(g.a)(),n=Object(s.d)("p",null,p()("Welcome to the discussion forums!\n            Ask questions, debate ideas, and find classmates who share your goals.\n            Browse popular threads below or other forums in the sidebar."));if(e.courseForums&&e.courseForums.length){var o=e.courseForums.find(function(e){return e.forumType.typeName===m.t.rootForumType});o&&!l.b.isEmpty(o.description)&&(n=Object(s.d)(u.a,{cml:o.description,isCdsEnabled:!0}))}return Object(s.d)(O.a,{className:"rc-DiscussionsDescription",css:Object(s.c)(y||(y=r()(["\n        padding: ",";\n      "])),t.spacing(24))},Object(s.d)(j.a,{variant:"h3bold"},p()("Description")),Object(s.d)(j.a,{component:"div",className:"description"},n))}e.a=Object(o.compose)(Object(b.a)(["CourseStore"],function(e,t){var n=e.CourseStore;return{courseId:n.getCourseId(),courseSlug:n.getCourseSlug()}}),Object(m.n)())(DiscussionsDescription)},OiCW:function(module,exports,e){},QOs0:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),s=t("AeFk"),o=t("6/Gu"),a=t("8Hdl"),i=t("ZJgU"),c=t("F/us"),u=t.n(c),l=t("17x9"),d=t.n(l),p=t("q1tI"),b=t.n(p),m=t("q5zD"),f=t("Fmrb"),h=t.n(f),g=t("kvW3"),j=t("8cuT"),O=t("+LJP"),y=t("Jrms"),v=t("5Zqe"),F=t.n(v),S=function(e){function LandingPageSearchResultsSummary(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).cancelSearchResults=function(){t.context.router.push({pathname:t.context.router.location.pathname,params:t.context.router.params,query:{}})},t}var t;return r()(LandingPageSearchResultsSummary,e),LandingPageSearchResultsSummary.prototype.render=function render(){var e=this.props,t=e.numResults,n=e.query,r=e.loadingState;if(!n)return null;return Object(s.d)(o.a,{container:!0,item:!0,xs:12,className:"rc-LandingPageSearchResultsSummary "},Object(s.d)(a.a,{className:"search-results","aria-live":"polite",id:"landing-page-search-results"},r===y.s.DONE?Object(s.d)(g.a,{message:h()("{numResults} {numResults, plural,\n              =1 {search result} =0 {0 search results} other {search results}} for {query}"),numResults:t,query:Object(s.d)("strong",null,n)}):Object(s.d)(g.b,{message:h()("Loading search results...")})),Object(s.d)(i.a,{type:"button",onClick:this.cancelSearchResults,variant:"ghost","data-e2e":"cancel-search-button"},Object(s.d)(m.a,{name:"close",className:"color-secondary-text"})))},LandingPageSearchResultsSummary}(b.a.Component);S.propTypes={id:d.a.string,query:d.a.string,numResults:d.a.number,loadingState:d.a.oneOf(Object.keys(y.s))},S.contextTypes={router:d.a.object.isRequired},e.a=Object(c.compose)(Object(O.a)(function(e){return{query:e.location.query.q&&decodeURIComponent(e.location.query.q)}}),Object(j.a)(["DiscussionsSearchStore"],function(e,t){var n=e.DiscussionsSearchStore;return{numResults:n.getNumResults({forumId:t.id,query:t.query}),loadingState:n.loadingState}}))(S)},Qa8o:function(module,exports,e){var t=e("pTrC"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},VlQa:function(module,e,t){"use strict";var n=t("lSNA"),r=t.n(n),s=t("VbXa"),o=t.n(s),a=t("AeFk"),i=t("TmOg"),c=t("F/us"),u=t.n(c),l=t("17x9"),d=t.n(l),p=t("q1tI"),b=t.n(p),m=t("w/1P"),f=t.n(m),h=t("6/Gu"),g=t("oEqI"),j=t("eJMc"),O=t.n(j),y=t("Fmrb"),v=t.n(y),F=t("+LJP"),S=t("Jrms");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var k=function(e){function TabList(){for(var t,n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))||this).tabsStyles=function(){var e;return e={".discussionsLandingPageTabs":{borderBottom:"1px solid ".concat(t.props.theme.palette.gray[300]),justifyContent:"space-between"}},r()(e,t.props.theme.breakpoints.down("xs"),{".discussionsLandingPageTabs":{flexDirection:"column-reverse"}}),r()(e,"ul.tabs li.colored-tab a.selected",_objectSpread({borderBottom:"4px solid ".concat(t.props.theme.palette.blue[600]),borderLeft:"none",paddingBottom:"13px",color:t.props.theme.palette.blue[600]},t.props.theme.typography.h3bold)),r()(e,"ul.tabs li.colored-tab a:hover",{borderLeft:"none"}),r()(e,"ul.tabs li.colored-tab a",_objectSpread({borderBottom:"4px solid transparent",borderLeft:"none",paddingBottom:"13px"},t.props.theme.typography.body1)),e},t}var t;return o()(TabList,e),TabList.prototype.render=function render(){return Object(a.d)(h.a,{container:!0,item:!0,xs:12,css:this.tabsStyles()},Object(a.d)(h.a,{container:!0,className:"discussionsLandingPageTabs"},Object(a.d)(h.a,{item:!0},Object(a.d)("ul",{className:"tabs horizontal-box",role:"tablist"},this.props.children)),Object(a.d)(h.a,{item:!0,alignContent:"flex-end"},this.props.searchEl)))},TabList}(b.a.Component);k.propTypes={searchEl:d.a.node,children:d.a.node};var A=Object(i.a)(Object(g.a)(k)),x=function(e){function DiscussionsLandingPageTabs(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).onTabEnter=function(e){t.props.updateLocation(e["data-link"])},t.renderTabs=function(e){return e.map(function(e){return t.renderTab(e)})},t.renderTab=function(e){var t=e.title,n=e.pathname,r=e.query,s=e.isActive,o=e.key,i={query:r,pathname:n},c=o.toLowerCase().replace(/ /gi,"-");return Object(a.d)("li",{id:"tab-".concat(c),role:"tab","aria-controls":"panel-".concat(c),"aria-selected":s,className:f()("colored-tab",{selected:s}),"data-link":i,key:o},Object(a.d)(O.a,{className:s?"selected":void 0,component:O.a,to:i},t))},t}var t;return o()(DiscussionsLandingPageTabs,e),DiscussionsLandingPageTabs.prototype.render=function render(){var e=[{title:v()("Forums"),pathname:Object(S.q)(),query:"",isActive:this.props.isBaseForumsActive,key:"Forums"},{title:v()("All Threads"),pathname:Object(S.o)(),query:this.props.query,isActive:!this.props.isBaseForumsActive,key:"All Threads"}];return Object(a.d)("div",{className:"rc-DiscussionsLandingPageTabs"},Object(a.d)(A,{onEnter:this.onTabEnter,searchEl:this.props.children},this.renderTabs(e)))},DiscussionsLandingPageTabs}(b.a.Component);x.propTypes={isBaseForumsActive:d.a.bool,query:d.a.object,children:d.a.node,updateLocation:d.a.func},e.a=Object(c.compose)(Object(F.a)(function(e){return{isBaseForumsActive:e.isActive({pathname:Object(S.q)()},!0),query:e.location.query,updateLocation:e.push}}))(x)},VqA0:function(module,exports,e){},XHH3:function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("AeFk"),o=t("q1tI"),a=t.n(o),i=t("eJMc"),c=t.n(i),u=t("763+"),l=t("6/Gu"),d=t("8Hdl"),p=t("akFg"),b=t("kmRs"),m=t("wd/R"),f=t.n(m),h=t("kvW3"),g=t("7GkZ"),j=t("h4VP"),O=t("Fmrb"),y=t.n(O),v=t("zXDh"),F=t("Yx2m"),S=t.n(F),k,A,x,w;function ForumsLabel(e){var t=e.discussionsLink,n=e.title,o=e.description,a=e.lastAnsweredAt,i=e.forumQuestionCount,m=Object(u.a)(),O="number"==typeof i,F=!!a,S=1===i?y()("thread"):y()("threads"),P=o.definition.value,D=P.startsWith("<co-content>")&&P.endsWith("</co-content>"),q=!j.b.isEmpty(o)&&D,L=Object(v.isUserRightToLeft)(),T="Forum: ".concat(n,"\n                       ").concat(q?j.b.getInnerText(o):"","\n                       ").concat(F?"Last Post: ".concat(f()(a).fromNow()):"","\n                       ").concat(O?"".concat(i," ").concat(S):"");return Object(s.d)(c.a,{className:"rc-ForumsLabel nostyle",to:t,"aria-label":T},Object(s.d)("div",null,Object(s.d)(l.a,{container:!0,xs:12},Object(s.d)(l.a,{item:!0,xs:7,css:Object(s.c)(k||(k=r()(["\n              margin-bottom: ",";\n            "])),m.spacing(16))},Object(s.d)(d.a,{variant:"h2semibold",component:"p",css:Object(s.c)(A||(A=r()(["\n                padding: 0;\n              "])))},n),!j.b.isEmpty(o)&&Object(s.d)(g.a,{cml:o,isCdsEnabled:!0}),F&&Object(s.d)(d.a,{variant:"body2",color:"supportText",component:"span"},Object(s.d)(h.b,{message:y()("Last post {timeAgo}"),timeAgo:f()(a).fromNow()}))),O&&Object(s.d)(l.a,{container:!0,item:!0,xs:5,spacing:8,css:Object(s.c)(x||(x=r()(["\n                justify-content: flex-end;\n                align-items: center;\n              "])))},Object(s.d)(l.a,{item:!0},Object(s.d)(d.a,{className:"threads-count"},"".concat(i," ").concat(S))),Object(s.d)(l.a,{item:!0,css:Object(s.c)(w||(w=r()(["\n                  display: flex;\n                  align-items: center;\n                "])))},L?Object(s.d)(p.a,{size:"small"}):Object(s.d)(b.a,{size:"small"}))))))}e.a=ForumsLabel},Xc4M:function(module,e,t){"use strict";t.d(e,"a",function(){return ContentBlock});var n=t("q1tI"),r=t.n(n),s=t("763+"),o=t("AeFk");function ContentBlock(e){var t=e.children,n=e.className,r=Object(s.a)(),a={border:"1px solid ".concat(r.palette.gray[300])};return Object(o.d)("section",{className:n,css:a},t)}},Y1MS:function(module,exports,e){},Yx2m:function(module,exports,e){var t=e("pvv1"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},cI4F:function(module,exports,e){},cnYm:function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("VbXa"),o=t.n(s),a=t("AeFk"),i=t("F/us"),c=t.n(i),u=t("q1tI"),l=t.n(u),d=t("BVC1"),p=t("+Nyl"),b=t("XHH3"),m=t("Fmrb"),f=t.n(m),h=t("q5zD"),g=t("Ys1X"),j=t("Jrms"),O=t("Qa8o"),y=t.n(O),v=t("8Hdl"),F,S,k=function(e){function DiscussionsGroupForums(){return e.apply(this,arguments)||this}var t;return o()(DiscussionsGroupForums,e),DiscussionsGroupForums.prototype.render=function render(){var e=this.props,t=e.groupForums,n=e.groupForumStatistics,s=e.courseSlug;if(!t||!t.length)return null;var o=t.map(function(e){var t=n.find(function(t){return t.id===e.id});return{id:e.id,discussionsLink:d.a.join(Object(g.c)(s),e.link),title:e.title,description:e.description,lastAnsweredAt:t&&t.lastAnsweredAt,forumQuestionCount:t&&t.forumQuestionCount}});return Object(a.d)(p.a,{className:"rc-DiscussionsGroupForums",title:Object(a.d)(v.a,null,Object(a.d)(h.a,{name:"lock"}),f()("Private Group Forums"))},Object(a.d)(v.a,{component:"div",css:Object(a.c)(F||(F=r()(["\n            padding: 24px;\n          "])))},Object(a.d)("ul",{css:Object(a.c)(S||(S=r()(["\n              padding: 0;\n              margin: 0;\n              list-style-type: none;\n            "])))},o.map(function(e){return Object(a.d)("li",{key:e.id},Object(a.d)(b.a,{discussionsLink:e.discussionsLink,title:e.title,description:e.description,lastAnsweredAt:e.lastAnsweredAt,forumQuestionCount:e.forumQuestionCount}))}))))},DiscussionsGroupForums}(l.a.Component);e.a=c.a.compose(Object(j.n)({fields:["link","title","description","parentForumId"]}))(k)},fAEL:function(module,exports,e){},gI1s:function(module,e,t){"use strict";t.r(e),t.d(e,"DiscussionsLandingPage",function(){return F});var n=t("lSNA"),r=t.n(n),s=t("VbXa"),o=t.n(s),a=t("AeFk"),i=t("q1tI"),c=t.n(i),u=t("F/us"),l=t.n(u),d=t("+LJP"),p=t("Jrms"),b=t("E4en"),m=t("3rqT"),f=t("FwM0"),h=t("quSr"),g=t("6/Gu"),j=t("oEqI"),O=t("Fmrb"),y=t.n(O),v=t("zXDh"),F=function(e){o()(DiscussionsLandingPage,e);var t=DiscussionsLandingPage.prototype;function DiscussionsLandingPage(t){var n;(n=e.call(this,t)||this).layoutCss={},n.layoutStyle=function(e){var t;return t={},r()(t,n.props.theme.breakpoints.up("sm"),{".mainColumn":{padding:e?n.props.theme.spacing(0,0,0,32):n.props.theme.spacing(0,32,0,0)},".mainColumn .rc-DiscussionsLandingPage":{margin:0}}),r()(t,n.props.theme.breakpoints.down("sm"),{".mainColumn":{padding:n.props.theme.spacing(0)}}),t};var s=Object(v.isRightToLeft)(y.a.getLocale());return n.layoutCss=n.layoutStyle(s),n}return t.componentDidMount=function componentDidMount(){var e=this.props,t=e.addToHelper,n=e.userId,r=e.courseId,s=e.maybeAddHelpers,o;t&&s({variables:{helperId:"".concat(n,"~").concat(r)}})},t.render=function render(){var e=this.props.addToHelper;return Object(a.d)(g.a,{css:this.layoutCss,container:!0,item:!0,xs:12,className:"rc-DiscussionsLandingPage",spacing:24},e&&Object(a.d)(g.a,{item:!0,xs:12},Object(a.d)(h.a,null)),Object(a.d)(g.a,{item:!0,xs:12},Object(a.d)(b.a,null)),Object(a.d)(g.a,{item:!0,xs:12},Object(a.d)(p.e,null)),Object(a.d)(g.a,{container:!0,item:!0,xs:12,justifyContent:"space-between"},Object(a.d)(g.a,{item:!0,className:"mainColumn",xs:12,md:9,spacing:32},Object(a.d)(m.a,null)),Object(a.d)(g.a,{item:!0,xs:12,md:3},Object(a.d)(f.a,null))))},DiscussionsLandingPage}(c.a.Component);e.default=Object(u.compose)(Object(p.n)(),Object(d.a)(function(e){var t;return{addToHelper:"true"===e.location.query.addToHelper}}),p.v)(Object(j.a)(F))},hljP:function(module,exports,e){},kj8t:function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("AeFk"),o=t("763+"),a=t("6/Gu"),i=t("q1tI"),c=t.n(i),u=t("zXDh"),l=t("9A5E"),d=t("Fmrb"),p=t.n(d),b=t("fAYU"),m=t("Xc4M"),f=t("KXbA"),h,g;function DiscussionsGuidelines(){var e=Object(o.a)(),t=Object(u.isRightToLeft)(p.a.getLocale())?"".concat(u.supportPageLocale.ar,"/"):"",n="https://learner.coursera.help/hc/".concat(t,"articles/208280036");return Object(s.d)(b.a,{component:l.a,trackingName:"DiscussionsGuidelines",href:n,target:"_blank"},Object(s.d)(a.a,{container:!0,item:!0,component:m.a,spacing:8,css:Object(s.c)(h||(h=r()(["\n          padding: ",";\n          align-content: center;\n        "])),e.spacing(16))},Object(s.d)(a.a,{item:!0},"".concat(p()("Forum guidelines")," ")),Object(s.d)(a.a,{item:!0},Object(s.d)(f.a,{size:"small",css:Object(s.c)(g||(g=r()(["\n              display: flex;\n            "])))}))))}e.a=DiscussionsGuidelines},nK3u:function(module,exports,e){var t=e("VqA0"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},pTrC:function(module,exports,e){},pYbF:function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("AeFk"),o=t("F/us"),a=t.n(o),i=t("q1tI"),c=t.n(i),u=t("BVC1"),l=t("+Nyl"),d=t("XHH3"),p=t("Jrms"),b=t("u5mk"),m=t("Fmrb"),f=t.n(m),h=t("nK3u"),g=t.n(h),j=t("763+"),O,y;function DiscussionsWeekForums(e){var t=e.courseForums.filter(function(e){return e.forumType.typeName===p.t.weekForumType}).map(function(t){var n=e.courseForumStatistics.find(function(e){return e.courseForumId===t.id});return Object.assign({},t,{discussionsLink:u.a.join(Object(p.r)(e.courseSlug),t.link),lastAnsweredAt:n&&n.lastAnsweredAt,forumQuestionCount:n&&(null==n?void 0:n.forumQuestionCount)})}),n=Object(j.a)();return Object(s.d)(l.a,{className:"rc-DiscussionsWeekForums",title:e.customLabelsV2?"":f()("Week Forums")},Object(s.d)("ul",{css:Object(s.c)(O||(O=r()(["\n          list-style: none;\n          margin: 0;\n          padding: 0;\n        "])))},t.map(function(e){return Object(s.d)("li",{key:e.id,css:Object(s.c)(y||(y=r()(["\n              border-bottom: 1px solid ",";\n              padding: ",";\n              &:hover {\n                background-color: ",";\n              }\n            "])),n.palette.gray[300],n.spacing(24),n.palette.blue[50])},Object(s.d)(d.a,{discussionsLink:e.discussionsLink,title:e.title,description:e.description,lastAnsweredAt:e.lastAnsweredAt,forumQuestionCount:e.forumQuestionCount}))})))}e.a=Object(o.compose)(Object(p.n)(),b.a)(DiscussionsWeekForums)},pvv1:function(module,exports,e){},"q+d/":function(module,exports,e){},quSr:function(module,e,t){"use strict";t.d(e,"a",function(){return l});var n=t("VbXa"),r=t.n(n),s=t("AeFk"),o=t("q1tI"),a=t.n(o),i=t("JOyW"),c=t("lS+i"),u=t.n(c),l=function(e){function DiscussionsNotification(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).state={isVisible:!0},t}r()(DiscussionsNotification,e);var t=DiscussionsNotification.prototype;return t.handleDismiss=function handleDismiss(){this.setState({isVisible:!1})},t.render=function render(){var e=this,t;return this.state.isVisible&&Object(s.d)("div",{className:"rc-WelcomeNotifications"},Object(s.d)(i.a,{trackingName:"subscribed_to_digest_notification",type:"info",message:u()("You have been successfully subscribed to the digest."),isDismissible:!0,onDismiss:function onDismiss(){return e.handleDismiss()}}))},DiscussionsNotification}(a.a.Component)},ukFQ:function(module,exports,e){var t=e("ImTR"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},"w+y7":function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("AeFk"),o=t("F/us"),a=t.n(o),i=t("q1tI"),c=t.n(i),u=t("BVC1"),l=t("+Nyl"),d=t("XHH3"),p=t("Jrms"),b=t("Fmrb"),m=t.n(b),f=t("J2Ji"),h=t.n(f),g=t("763+"),j,O;function DiscussionsCourseForums(e){var t=e.courseForums,n=e.mentorForums,o=e.courseForumStatistics,a=e.courseSlug,i=t.find(function(e){return e.forumType.typeName===p.t.rootForumType}),c=Object(g.a)(),b=n.filter(function(e){return!e.parentForumId}),f=t.filter(function(e){return e.parentForumId===i.id&&e.forumType.typeName===p.t.customForumType}),h=b.concat(f).map(function(e){var t=o.find(function(t){return t.courseForumId===e.id});return Object.assign(e,{discussionsLink:u.a.join(Object(p.r)(a),e.link),lastAnsweredAt:t&&t.lastAnsweredAt,forumQuestionCount:t&&t.forumQuestionCount})});if(0===h.length)return null;return Object(s.d)(l.a,{title:m()("Discussion Forums"),className:"rc-DiscussionsCourseForums"},Object(s.d)("ul",{css:Object(s.c)(j||(j=r()(["\n          list-style: none;\n          margin: 0;\n          padding: 0;\n        "])))},h.map(function(e){return Object(s.d)("li",{key:e.id,css:Object(s.c)(O||(O=r()(["\n              border-bottom: 1px solid ",";\n              padding: ",";\n              &:hover {\n                background-color: ",";\n              }\n            "])),c.palette.gray[300],c.spacing(24),c.palette.blue[50])},Object(s.d)(d.a,{discussionsLink:e.discussionsLink,title:e.title,description:e.description,lastAnsweredAt:e.lastAnsweredAt,forumQuestionCount:e.forumQuestionCount}))})))}e.a=Object(o.compose)(Object(p.n)({fields:["link","title","description","lastAnsweredAt","forumQuestionCount","parentForumId"]}))(DiscussionsCourseForums)},wqhG:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),s=t("AeFk"),o=t("ZJgU"),a=t("17x9"),i=t.n(a),c=t("q1tI"),u=t.n(c),l=t("kcfJ"),d=t("Fmrb"),p=t.n(d),b=t("zFBb"),m=t.n(b),f=function(e){function LandingPageSearchBox(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).state={query:t.props.query||""},t.onChange=function(e){t.setState({query:e.target.value})},t.onSubmit=function(){t.props.onSubmit(t.state.query)},t.checkForEnter=function(e){"Enter"===e.key&&t.onSubmit()},t}r()(LandingPageSearchBox,e);var t=LandingPageSearchBox.prototype;return t.componentWillReceiveProps=function componentWillReceiveProps(e){e.query!==this.props.query&&this.setState({query:e.query||""})},t.render=function render(){var e=this.state.query;return Object(s.d)("div",{className:"rc-LandingPageSearchBox"},Object(s.d)("div",{className:"search-bar"},Object(s.d)("div",{className:"input-area"},Object(s.d)(l.a,{trackingName:"search_box",placeholder:p()("Search"),className:"search-input",value:e,onChange:this.onChange,onKeyPress:this.checkForEnter,"aria-label":p()("Search Input")})),Object(s.d)(o.a,{type:"button",variant:"ghost",className:"search-button",onClick:this.onSubmit,"aria-label":p()("submit search")},Object(s.d)("i",{className:"cif-search","aria-hidden":"true"}))))},LandingPageSearchBox}(u.a.Component);f.propTypes={onSubmit:i.a.func.isRequired,query:i.a.string},e.a=f},zFBb:function(module,exports,e){var t=e("q+d/"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},zUbo:function(module,exports,e){var t=e("CeQc"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)}}]);
//# sourceMappingURL=6.63155f5f7ff5671d075b.js.map