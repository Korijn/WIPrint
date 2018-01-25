define(["TFS/WorkItemTracking/RestClient","VSS/Context","VSS/Controls/Dialogs"],function(e,n,t){return function(e){function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=5)}([function(n,t){n.exports=e},,,,,function(e,n,t){var i,s;i=[t,n,t(6),t(0),t(7)],void 0!==(s=function(e,n,t,i,s){"use strict";function c(e){x&&$("#selected-"+x.name.sanitize()).removeClass("selected"),x=L.filter(function(n){return n.name===e})[0],$("#selected-"+e.sanitize()).addClass("selected")}function l(e){z&&$("#all-"+z.name.sanitize()).removeClass("selected"),z=y.filter(function(n){return n.name===e})[0],$("#all-"+e.sanitize()).addClass("selected")}function a(e){var n=L.slice();u(),z=null,x=null,k.then(function(t){t.setValue(m,n,{scopeType:"user"}).then(function(){o(e)})})}function o(e){if(b)var n=s.show(s.ModalDialog,{title:"Unsaved Changes",content:$("<p/>").addClass("confirmation-text").html("Do you want to save changes for <b>"+h.name+"</b>?"),buttons:{Save:function(){a(e),n.close()},No:function(){u(),z=null,x=null,o(e),n.close()},Cancel:function(){n.close()}}});else h&&$("#type-"+h.name.sanitize()).removeClass("selected"),h=O.filter(function(n){return n.name===e})[0],$("#type-"+e.sanitize()).addClass("selected"),m="wiprint-"+h.name.sanitize(),$("#allList").html(""),y.splice(0,y.length),$("#selectedList").html(""),L.splice(0,L.length),k.then(function(e){e.getValue(m,{scopeType:"user"}).then(function(e){e&&e.length>0?(e.forEach(function(e){null!==e&&L.push(e)}),p()):$("#selectedList").append('<li class="ms-ListItem"><span class="ms-ListItem-secondaryText">No Saved Data</span></li>')}).then(function(){h.fieldInstances.filter(function(e){for(var n=0,t=L.length;n<t;n++)if(e.referenceName===L[n].referenceName)return!1;return!0}).forEach(function(e){y.push(e)}),f()})})}function r(){b||(b=!0,$("#save").prop("disabled",!1),$("#cancel").prop("disabled",!1))}function u(){b=!1,$("#save").prop("disabled",!0),$("#cancel").prop("disabled",!0),z=null,x=null}function f(){$("#allList").html(""),y.sort(function(e,n){return e.name>n.name?1:-1}).forEach(function(e){$("#allList").append('<li id="all-'+e.name.sanitize()+'" class="ms-ListItem"><span class="ms-ListItem-secondaryText">'+e.name+"</span></li>"),$("#all-"+e.name.sanitize()).click(function(n){l(e.name)}).dblclick(function(e){$("#push").click()})})}function p(){$("#selectedList").html(""),L.forEach(function(e){$("#selectedList").append('<li id="selected-'+e.name.sanitize()+'" class="ms-ListItem"><span class="ms-ListItem-secondaryText">'+e.name+"</span></li>"),$("#selected-"+e.name.sanitize()).click(function(n){c(e.name)}).dblclick(function(e){$("#pop").click()})})}function d(e){var n=e.parent();n.scrollTop(e.offset().top-n.offset().top+n.scrollTop()-296)}Object.defineProperty(n,"__esModule",{value:!0});var m,h,x,z,g=t.getDefaultWebContext(),k=VSS.getService(VSS.ServiceIds.ExtensionData),v=i.getClient(),y=[],L=[],O=[],b=!1;u(),v.getWorkItemTypes(g.project.name).then(function(e){e.forEach(function(e){O.push(e),$("#typesList").append('<li id="type-'+e.name.sanitize()+'" class="ms-ListItem">'+(e.color?'<span class="ms-ListItem-image" style="background-color: #'+e.color+'"></span>':"")+'<span class="ms-ListItem-primaryText">'+e.name+'</span><span class="ms-ListItem-secondaryText">'+e.description+"</span></li>"),$("#type-"+e.name.sanitize()).click(function(n){o(e.name)})})}),$("#save").click(function(e){return a(h.name)}),$("#cancel").click(function(e){u(),o(h.name)}),$("#push").click(function(e){if(z){var n=y.indexOf(z),t=-1===L.indexOf(x)?L.length-1:L.indexOf(x);y.splice(n,1),L.splice(t+1,0,z),f(),y.length>0?($("#all-"+y[y[n]?n:n-1].name.sanitize()).click(),d($("#all-"+y[y[n]?n:n-1].name.sanitize()))):z=null,p(),$("#selected-"+L[L[t+1]?t+1:t].name.sanitize()).click(),d($("#selected-"+L[L[t+1]?t+1:t].name.sanitize())),r()}}),$("#pop").click(function(e){if(x){var n=L.indexOf(x);L.splice(n,1),y.push(x),p(),f(),$("#all-"+y[y.indexOf(x)].name.sanitize()).click(),d($("#all-"+y[y.indexOf(x)].name.sanitize())),L.length>0?($("#selected-"+L[L[n]?n:n-1].name.sanitize()).click(),d($("#selected-"+L[L[n]?n:n-1].name.sanitize()))):x=null,r()}}),$("#top").click(function(e){x&&L.indexOf(x)>0&&(L.splice(L.indexOf(x),1),L.unshift(x),p(),$("#selected-"+L[0].name.sanitize()).click(),d($("#selected-"+L[0].name.sanitize())),r())}),$("#bottom").click(function(e){x&&L.indexOf(x)<L.length&&(L.splice(L.indexOf(x),1),L.push(x),p(),$("#selected-"+L[L.length-1].name.sanitize()).click(),d($("#selected-"+L[L.length-1].name.sanitize())),r())}),$("#up").click(function(e){if(x&&L.indexOf(x)>0){var n=L.indexOf(x);L.splice(n,1),L.splice(n-1,0,x),p(),$("#selected-"+L[n-1].name.sanitize()).click(),d($("#selected-"+L[n-1].name.sanitize())),r()}}),$("#down").click(function(e){if(x&&L.indexOf(x)<L.length){var n=L.indexOf(x);L.splice(n,1),L.splice(n+1,0,x),p(),$("#selected-"+L[L[n+1]?n+1:n].name.sanitize()).click(),d($("#selected-"+L[L[n+1]?n+1:n].name.sanitize())),r()}}),String.prototype.sanitize=function(){return this.replace(/\s/g,"-").replace(/[^a-z0-9\-]/gi,"")}}.apply(n,i))&&(e.exports=s)},function(e,t){e.exports=n},function(e,n){e.exports=t}])});
//# sourceMappingURL=wiprint-admin.js.map