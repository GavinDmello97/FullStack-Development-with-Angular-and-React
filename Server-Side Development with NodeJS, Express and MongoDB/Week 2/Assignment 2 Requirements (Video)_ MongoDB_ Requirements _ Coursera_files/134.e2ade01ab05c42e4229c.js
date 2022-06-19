(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{"4yiN":function(module,e,t){"use strict";t.r(e),t.d(e,"setupTypeScript",function(){return setupTypeScript}),t.d(e,"setupJavaScript",function(){return setupJavaScript}),t.d(e,"getJavaScriptWorker",function(){return getJavaScriptWorker}),t.d(e,"getTypeScriptWorker",function(){return getTypeScriptWorker});var n=t("Ozqw"),r=t("wh0V"),i,o;function setupTypeScript(e){o=setupMode(e,"typescript")}function setupJavaScript(e){i=setupMode(e,"javascript")}function getJavaScriptWorker(){return new Promise(function(e,t){if(!i)return t("JavaScript not registered!");e(i)})}function getTypeScriptWorker(){return new Promise(function(e,t){if(!o)return t("TypeScript not registered!");e(o)})}function setupMode(e,t){var i=new n.a(t,e),o=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i.getLanguageServiceWorker.apply(i,e)};return monaco.languages.registerCompletionItemProvider(t,new r.l(o)),monaco.languages.registerSignatureHelpProvider(t,new r.k(o)),monaco.languages.registerHoverProvider(t,new r.h(o)),monaco.languages.registerDocumentHighlightProvider(t,new r.f(o)),monaco.languages.registerDefinitionProvider(t,new r.b(o)),monaco.languages.registerReferenceProvider(t,new r.i(o)),monaco.languages.registerDocumentSymbolProvider(t,new r.g(o)),monaco.languages.registerDocumentRangeFormattingEditProvider(t,new r.d(o)),monaco.languages.registerOnTypeFormattingEditProvider(t,new r.e(o)),monaco.languages.registerCodeActionProvider(t,new r.a(o)),monaco.languages.registerRenameProvider(t,new r.j(o)),new r.c(e,t,o),o}},Ozqw:function(module,e,t){"use strict";t.d(e,"a",function(){return i});var n=function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r.throw(e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})},r=function(e,t){var _={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},n,r,i,o;return o={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function verb(e){return function(t){return step([e,t])}}function step(o){if(n)throw new TypeError("Generator is already executing.");for(;_;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return _.label++,{value:o[1],done:!1};case 5:_.label++,r=o[1],o=[0];continue;case 7:o=_.ops.pop(),_.trys.pop();continue;default:if(!(i=(i=_.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){_=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){_.label=o[1];break}if(6===o[0]&&_.label<i[1]){_.label=i[1],i=o;break}if(i&&_.label<i[2]){_.label=i[2],_.ops.push(o);break}i[2]&&_.ops.pop(),_.trys.pop();continue}o=t.call(e,_)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},i=function(){function WorkerManager(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(function(){return n._stopWorker()}),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(function(){return n._updateExtraLibs()})}return WorkerManager.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},WorkerManager.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},WorkerManager.prototype._updateExtraLibs=function(){return n(this,void 0,void 0,function(){var e,t;return r(this,function(n){switch(n.label){case 0:if(!this._worker)return[2];return e=++this._updateExtraLibsToken,[4,this._worker.getProxy()];case 1:if(t=n.sent(),this._updateExtraLibsToken!==e)return[2];return t.updateExtraLibs(this._defaults.getExtraLibs()),[2]}})})},WorkerManager.prototype._getClient=function(){var e=this;if(!this._client){this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs()}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then(function(t){if(e._worker)return e._worker.withSyncedResources(monaco.editor.getModels().filter(function(t){return t.getModeId()===e._modeId}).map(function(e){return e.uri}));return t})),this._client=t}return this._client},WorkerManager.prototype.getLanguageServiceWorker=function(){for(var e=this,t=[],n=0,r;n<arguments.length;n++)t[n]=arguments[n];return this._getClient().then(function(e){r=e}).then(function(_){if(e._worker)return e._worker.withSyncedResources(t)}).then(function(_){return r})},WorkerManager}()},wh0V:function(module,e,t){"use strict";t.d(e,"c",function(){return p}),t.d(e,"l",function(){return d}),t.d(e,"k",function(){return g}),t.d(e,"h",function(){return f}),t.d(e,"f",function(){return m}),t.d(e,"b",function(){return h}),t.d(e,"i",function(){return v}),t.d(e,"g",function(){return b}),t.d(e,"d",function(){return w}),t.d(e,"e",function(){return k}),t.d(e,"a",function(){return x}),t.d(e,"j",function(){return C});var n=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function __(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}),r,i=function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r.throw(e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})},o=function(e,t){var _={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},n,r,i,o;return o={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function verb(e){return function(t){return step([e,t])}}function step(o){if(n)throw new TypeError("Generator is already executing.");for(;_;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return _.label++,{value:o[1],done:!1};case 5:_.label++,r=o[1],o=[0];continue;case 7:o=_.ops.pop(),_.trys.pop();continue;default:if(!(i=(i=_.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){_=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){_.label=o[1];break}if(6===o[0]&&_.label<i[1]){_.label=i[1],i=o;break}if(i&&_.label<i[2]){_.label=i[2],_.ops.push(o);break}i[2]&&_.ops.pop(),_.trys.pop();continue}o=t.call(e,_)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},a=monaco.Uri,s=monaco.Range,u;function flattenDiagnosticMessageText(e,t,n){if(void 0===n&&(n=0),"string"==typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var i=0;i<n;i++)r+="  "}if(r+=e.messageText,n++,e.next)for(var o=0,a=e.next;o<a.length;o++){var s;r+=flattenDiagnosticMessageText(a[o],t,n)}return r}function displayPartsToString(e){if(e)return e.map(function(e){return e.text}).join("");return""}!function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(u||(u={}));var c=function(){function Adapter(e){this._worker=e}return Adapter.prototype._textSpanToRange=function(e,t){var n=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length),i,o,a,s;return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}},Adapter}(),l;!function(e){e[e.Warning=0]="Warning",e[e.Error=1]="Error",e[e.Suggestion=2]="Suggestion",e[e.Message=3]="Message"}(l||(l={}));var p=function(e){function DiagnosticsAdapter(t,n,r){var i=e.call(this,r)||this;i._defaults=t,i._selector=n,i._disposables=[],i._listener=Object.create(null);var o=function(e){if(e.getModeId()!==n)return;var t,r=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return i._doValidate(e)},500)});i._listener[e.uri.toString()]={dispose:function(){r.dispose(),clearTimeout(t)}},i._doValidate(e)},a=function(e){monaco.editor.setModelMarkers(e,i._selector,[]);var t=e.uri.toString();i._listener[t]&&(i._listener[t].dispose(),delete i._listener[t])};i._disposables.push(monaco.editor.onDidCreateModel(o)),i._disposables.push(monaco.editor.onWillDisposeModel(a)),i._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){a(e.model),o(e.model)})),i._disposables.push({dispose:function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];a(n)}}});var s=function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];a(n),o(n)}};return i._disposables.push(i._defaults.onDidChange(s)),i._disposables.push(i._defaults.onDidExtraLibsChange(s)),monaco.editor.getModels().forEach(o),i}return n(DiagnosticsAdapter,e),DiagnosticsAdapter.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},DiagnosticsAdapter.prototype._doValidate=function(e){return i(this,void 0,void 0,function(){var t,n,r,i,a,s,u,c,l=this;return o(this,function(o){switch(o.label){case 0:return[4,this._worker(e.uri)];case 1:if(t=o.sent(),e.isDisposed())return[2];return n=[],r=this._defaults.getDiagnosticsOptions(),i=r.noSyntaxValidation,a=r.noSemanticValidation,s=r.noSuggestionDiagnostics,i||n.push(t.getSyntacticDiagnostics(e.uri.toString())),a||n.push(t.getSemanticDiagnostics(e.uri.toString())),s||n.push(t.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(n)];case 2:if(!(u=o.sent())||e.isDisposed())return[2];return c=u.reduce(function(e,t){return t.concat(e)},[]).filter(function(e){return-1===(l._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)}).map(function(t){return l._convertDiagnostics(e,t)}),monaco.editor.setModelMarkers(e,this._selector,c),[2]}})})},DiagnosticsAdapter.prototype._convertDiagnostics=function(e,t){var n=t.start||0,r=t.length||1,i=e.getPositionAt(n),o=i.lineNumber,a=i.column,s=e.getPositionAt(n+r),u=s.lineNumber,c=s.column;return{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:o,startColumn:a,endLineNumber:u,endColumn:c,message:flattenDiagnosticMessageText(t.messageText,"\n"),code:t.code.toString(),tags:t.reportsUnnecessary?[monaco.MarkerTag.Unnecessary]:[],relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},DiagnosticsAdapter.prototype._convertRelatedInformation=function(e,t){if(!t)return;var n=[];return t.forEach(function(t){var r=e;if(t.file){var i=monaco.Uri.parse(t.file.fileName);r=monaco.editor.getModel(i)}if(!r)return;var o=t.start||0,a=t.length||1,s=r.getPositionAt(o),u=s.lineNumber,c=s.column,l=r.getPositionAt(o+a),p=l.lineNumber,d=l.column;n.push({resource:r.uri,startLineNumber:u,startColumn:c,endLineNumber:p,endColumn:d,message:flattenDiagnosticMessageText(t.messageText,"\n")})}),n},DiagnosticsAdapter.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case l.Error:return monaco.MarkerSeverity.Error;case l.Message:return monaco.MarkerSeverity.Info;case l.Warning:return monaco.MarkerSeverity.Warning;case l.Suggestion:return monaco.MarkerSeverity.Hint}return monaco.MarkerSeverity.Info},DiagnosticsAdapter}(c),d=function(e){function SuggestAdapter(){return null!==e&&e.apply(this,arguments)||this}return n(SuggestAdapter,e),Object.defineProperty(SuggestAdapter.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!0,configurable:!0}),SuggestAdapter.prototype.provideCompletionItems=function(e,t,n,r){return i(this,void 0,void 0,function(){var n,r,i,a,u,c,l;return o(this,function(o){switch(o.label){case 0:return n=e.getWordUntilPosition(t),r=new s(t.lineNumber,n.startColumn,t.lineNumber,n.endColumn),i=e.uri,a=e.getOffsetAt(t),[4,this._worker(i)];case 1:return[4,(u=o.sent()).getCompletionsAtPosition(i.toString(),a)];case 2:if(!(c=o.sent())||e.isDisposed())return[2];return[2,{suggestions:l=c.entries.map(function(n){var o=r;if(n.replacementSpan){var a=e.getPositionAt(n.replacementSpan.start),u=e.getPositionAt(n.replacementSpan.start+n.replacementSpan.length);o=new s(a.lineNumber,a.column,u.lineNumber,u.column)}return{uri:i,position:t,range:o,label:n.name,insertText:n.name,sortText:n.sortText,kind:SuggestAdapter.convertKind(n.kind)}})}]}})})},SuggestAdapter.prototype.resolveCompletionItem=function(e,t,n,r){return i(this,void 0,void 0,function(){var t,r,i,a,s,u;return o(this,function(o){switch(o.label){case 0:return r=(t=n).uri,i=t.position,a=e.getOffsetAt(i),[4,this._worker(r)];case 1:return[4,(s=o.sent()).getCompletionEntryDetails(r.toString(),a,t.label)];case 2:if(!(u=o.sent())||e.isDisposed())return[2,t];return[2,{uri:r,position:i,label:u.name,kind:SuggestAdapter.convertKind(u.kind),detail:displayPartsToString(u.displayParts),documentation:{value:displayPartsToString(u.documentation)}}]}})})},SuggestAdapter.convertKind=function(e){switch(e){case y.primitiveType:case y.keyword:return monaco.languages.CompletionItemKind.Keyword;case y.variable:case y.localVariable:return monaco.languages.CompletionItemKind.Variable;case y.memberVariable:case y.memberGetAccessor:case y.memberSetAccessor:return monaco.languages.CompletionItemKind.Field;case y.function:case y.memberFunction:case y.constructSignature:case y.callSignature:case y.indexSignature:return monaco.languages.CompletionItemKind.Function;case y.enum:return monaco.languages.CompletionItemKind.Enum;case y.module:return monaco.languages.CompletionItemKind.Module;case y.class:return monaco.languages.CompletionItemKind.Class;case y.interface:return monaco.languages.CompletionItemKind.Interface;case y.warning:return monaco.languages.CompletionItemKind.File}return monaco.languages.CompletionItemKind.Property},SuggestAdapter}(c),g=function(e){function SignatureHelpAdapter(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return n(SignatureHelpAdapter,e),SignatureHelpAdapter.prototype.provideSignatureHelp=function(e,t,n){return i(this,void 0,void 0,function(){var n,r,i,a,s;return o(this,function(o){switch(o.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,(i=o.sent()).getSignatureHelpItems(n.toString(),r)];case 2:if(!(a=o.sent())||e.isDisposed())return[2];return s={activeSignature:a.selectedItemIndex,activeParameter:a.argumentIndex,signatures:[]},a.items.forEach(function(e){var t={label:"",parameters:[]};t.documentation=displayPartsToString(e.documentation),t.label+=displayPartsToString(e.prefixDisplayParts),e.parameters.forEach(function(n,r,i){var o=displayPartsToString(n.displayParts),a={label:o,documentation:displayPartsToString(n.documentation)};t.label+=o,t.parameters.push(a),r<i.length-1&&(t.label+=displayPartsToString(e.separatorDisplayParts))}),t.label+=displayPartsToString(e.suffixDisplayParts),s.signatures.push(t)}),[2,{value:s,dispose:function(){}}]}})})},SignatureHelpAdapter}(c),f=function(e){function QuickInfoAdapter(){return null!==e&&e.apply(this,arguments)||this}return n(QuickInfoAdapter,e),QuickInfoAdapter.prototype.provideHover=function(e,t,n){return i(this,void 0,void 0,function(){var n,r,i,a,s,u,c;return o(this,function(o){switch(o.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,(i=o.sent()).getQuickInfoAtPosition(n.toString(),r)];case 2:if(!(a=o.sent())||e.isDisposed())return[2];return s=displayPartsToString(a.documentation),u=a.tags?a.tags.map(function(e){var t="*@"+e.name+"*";if(!e.text)return t;return t+(e.text.match(/\r\n|\n/g)?" \n"+e.text:" - "+e.text)}).join("  \n\n"):"",c=displayPartsToString(a.displayParts),[2,{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```js\n"+c+"\n```\n"},{value:s+(u?"\n\n"+u:"")}]}]}})})},QuickInfoAdapter}(c),m=function(e){function OccurrencesAdapter(){return null!==e&&e.apply(this,arguments)||this}return n(OccurrencesAdapter,e),OccurrencesAdapter.prototype.provideDocumentHighlights=function(e,t,n){return i(this,void 0,void 0,function(){var n,r,i,a,s=this;return o(this,function(o){switch(o.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,(i=o.sent()).getOccurrencesAtPosition(n.toString(),r)];case 2:if(!(a=o.sent())||e.isDisposed())return[2];return[2,a.map(function(t){return{range:s._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?monaco.languages.DocumentHighlightKind.Write:monaco.languages.DocumentHighlightKind.Text}})]}})})},OccurrencesAdapter}(c),h=function(e){function DefinitionAdapter(){return null!==e&&e.apply(this,arguments)||this}return n(DefinitionAdapter,e),DefinitionAdapter.prototype.provideDefinition=function(e,t,n){return i(this,void 0,void 0,function(){var n,r,i,s,u,c,l,p,d,g;return o(this,function(o){switch(o.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,(i=o.sent()).getDefinitionAtPosition(n.toString(),r)];case 2:if(!(s=o.sent())||e.isDisposed())return[2];for(u=[],c=0,l=s;c<l.length;c++)p=l[c],d=a.parse(p.fileName),(g=monaco.editor.getModel(d))&&u.push({uri:d,range:this._textSpanToRange(g,p.textSpan)});return[2,u]}})})},DefinitionAdapter}(c),v=function(e){function ReferenceAdapter(){return null!==e&&e.apply(this,arguments)||this}return n(ReferenceAdapter,e),ReferenceAdapter.prototype.provideReferences=function(e,t,n,r){return i(this,void 0,void 0,function(){var n,r,i,s,u,c,l,p,d,g;return o(this,function(o){switch(o.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,(i=o.sent()).getReferencesAtPosition(n.toString(),r)];case 2:if(!(s=o.sent())||e.isDisposed())return[2];for(u=[],c=0,l=s;c<l.length;c++)p=l[c],d=a.parse(p.fileName),(g=monaco.editor.getModel(d))&&u.push({uri:d,range:this._textSpanToRange(g,p.textSpan)});return[2,u]}})})},ReferenceAdapter}(c),b=function(e){function OutlineAdapter(){return null!==e&&e.apply(this,arguments)||this}return n(OutlineAdapter,e),OutlineAdapter.prototype.provideDocumentSymbols=function(e,t){return i(this,void 0,void 0,function(){var t,n,r,i,a,s=this;return o(this,function(o){switch(o.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return[4,(n=o.sent()).getNavigationBarItems(t.toString())];case 2:if(!(r=o.sent())||e.isDisposed())return[2];return i=function(t,n,r){var o={name:n.text,detail:"",kind:S[n.kind]||monaco.languages.SymbolKind.Variable,range:s._textSpanToRange(e,n.spans[0]),selectionRange:s._textSpanToRange(e,n.spans[0]),tags:[],containerName:r};if(n.childItems&&n.childItems.length>0)for(var a=0,u=n.childItems;a<u.length;a++){var c=u[a];i(t,c,o.name)}t.push(o)},a=[],r.forEach(function(e){return i(a,e)}),[2,a]}})})},OutlineAdapter}(c),y=function(){function Kind(){}return Kind.unknown="",Kind.keyword="keyword",Kind.script="script",Kind.module="module",Kind.class="class",Kind.interface="interface",Kind.type="type",Kind.enum="enum",Kind.variable="var",Kind.localVariable="local var",Kind.function="function",Kind.localFunction="local function",Kind.memberFunction="method",Kind.memberGetAccessor="getter",Kind.memberSetAccessor="setter",Kind.memberVariable="property",Kind.constructorImplementation="constructor",Kind.callSignature="call",Kind.indexSignature="index",Kind.constructSignature="construct",Kind.parameter="parameter",Kind.typeParameter="type parameter",Kind.primitiveType="primitive type",Kind.label="label",Kind.alias="alias",Kind.const="const",Kind.let="let",Kind.warning="warning",Kind}(),S=Object.create(null);S[y.module]=monaco.languages.SymbolKind.Module,S[y.class]=monaco.languages.SymbolKind.Class,S[y.enum]=monaco.languages.SymbolKind.Enum,S[y.interface]=monaco.languages.SymbolKind.Interface,S[y.memberFunction]=monaco.languages.SymbolKind.Method,S[y.memberVariable]=monaco.languages.SymbolKind.Property,S[y.memberGetAccessor]=monaco.languages.SymbolKind.Property,S[y.memberSetAccessor]=monaco.languages.SymbolKind.Property,S[y.variable]=monaco.languages.SymbolKind.Variable,S[y.const]=monaco.languages.SymbolKind.Variable,S[y.localVariable]=monaco.languages.SymbolKind.Variable,S[y.variable]=monaco.languages.SymbolKind.Variable,S[y.function]=monaco.languages.SymbolKind.Function,S[y.localFunction]=monaco.languages.SymbolKind.Function;var A=function(e){function FormatHelper(){return null!==e&&e.apply(this,arguments)||this}return n(FormatHelper,e),FormatHelper._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:u.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},FormatHelper.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},FormatHelper}(c),w=function(e){function FormatAdapter(){return null!==e&&e.apply(this,arguments)||this}return n(FormatAdapter,e),FormatAdapter.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){return i(this,void 0,void 0,function(){var r,i,a,s,u,c=this;return o(this,function(o){switch(o.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(r)];case 1:return[4,(s=o.sent()).getFormattingEditsForRange(r.toString(),i,a,A._convertOptions(n))];case 2:if(!(u=o.sent())||e.isDisposed())return[2];return[2,u.map(function(t){return c._convertTextChanges(e,t)})]}})})},FormatAdapter}(A),k=function(e){function FormatOnTypeAdapter(){return null!==e&&e.apply(this,arguments)||this}return n(FormatOnTypeAdapter,e),Object.defineProperty(FormatOnTypeAdapter.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!0,configurable:!0}),FormatOnTypeAdapter.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,a){return i(this,void 0,void 0,function(){var i,a,s,u,c=this;return o(this,function(o){switch(o.label){case 0:return i=e.uri,a=e.getOffsetAt(t),[4,this._worker(i)];case 1:return[4,(s=o.sent()).getFormattingEditsAfterKeystroke(i.toString(),a,n,A._convertOptions(r))];case 2:if(!(u=o.sent())||e.isDisposed())return[2];return[2,u.map(function(t){return c._convertTextChanges(e,t)})]}})})},FormatOnTypeAdapter}(A),x=function(e){function CodeActionAdaptor(){return null!==e&&e.apply(this,arguments)||this}return n(CodeActionAdaptor,e),CodeActionAdaptor.prototype.provideCodeActions=function(e,t,n,r){return i(this,void 0,void 0,function(){var r,i,a,s,u,c,l,p,d=this;return o(this,function(o){switch(o.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=A._convertOptions(e.getOptions()),u=n.markers.filter(function(e){return e.code}).map(function(e){return e.code}).map(Number),[4,this._worker(r)];case 1:return[4,(c=o.sent()).getCodeFixesAtPosition(r.toString(),i,a,u,s)];case 2:if(!(l=o.sent())||e.isDisposed())return[2];return[2,{actions:p=l.filter(function(e){return 0===e.changes.filter(function(e){return e.isNewFile}).length}).map(function(t){return d._tsCodeFixActionToMonacoCodeAction(e,n,t)}),dispose:function(){}}]}})})},CodeActionAdaptor.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,n){for(var r=[],i=0,o=n.changes;i<o.length;i++)for(var a,s=0,u=o[i].textChanges;s<u.length;s++){var c=u[s];r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,c.span),text:c.newText}})}var l;return{title:n.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"}},CodeActionAdaptor}(A),C=function(e){function RenameAdapter(){return null!==e&&e.apply(this,arguments)||this}return n(RenameAdapter,e),RenameAdapter.prototype.provideRenameEdits=function(e,t,n,r){return i(this,void 0,void 0,function(){var r,i,a,s,u,c,l,p,d,g;return o(this,function(o){switch(o.label){case 0:return r=e.uri,i=r.toString(),a=e.getOffsetAt(t),[4,this._worker(r)];case 1:return[4,(s=o.sent()).getRenameInfo(i,a,{allowRenameOfImportPath:!1})];case 2:if(!1===(u=o.sent()).canRename)return[2,{edits:[],rejectReason:u.localizedErrorMessage}];if(void 0!==u.fileToRename)throw new Error("Renaming files is not supported.");return[4,s.findRenameLocations(i,a,!1,!1,!1)];case 3:if(!(c=o.sent())||e.isDisposed())return[2];for(l=[],p=0,d=c;p<d.length;p++)g=d[p],l.push({resource:monaco.Uri.parse(g.fileName),edit:{range:this._textSpanToRange(e,g.textSpan),text:n}});return[2,{edits:l}]}})})},RenameAdapter}(c)}}]);
//# sourceMappingURL=134.e2ade01ab05c42e4229c.js.map