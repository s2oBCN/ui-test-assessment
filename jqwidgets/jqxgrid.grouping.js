/*
jQWidgets v5.1.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(e){e.jqx.dataview.grouping=function(){this.loadgrouprecords=function(t,r,s,i,o,n,a,l,u){for(var d=t,p=this,g=new Array,h=0;h<p.groups.length;h++)g[h]=p.generatekey();var v=new Array,c=0,g=g,f=new Array,m=r,b=p.groups.length;this.loadedrecords=new Array,this.bounditems=new Array,this.loadedrecords=new Array,this.loadedrootgroups=new Array,this.loadedgroups=new Array,this.loadedgroupsByKey=new Array,this.sortedgroups=new Array;var x=null!=this.sortdata,w=x?this.sortdata:this.records;if(this.pageable){var y=new Array,I=0;w[r]||(e.each(w,function(e,t){y[r+e++]=this}),w=y)}if(this.virtualmode){for(var y=new Array,I=0,m=0;m<s-r;m++)w[m]?y[r+I++]=w[m]:w[r+I]&&(y[r+I]=w[r+I],I++);m=0,w=y}for(var _=r;_<s;_++){var q={};q=x?e.extend({},w[_].value):e.extend({},w[_]),id=q[p.uniqueId],(o>=l||id!=a[o][p.uniqueId]||n&&n[id])&&(u[u.length]=o);for(var j=new Array,T=0,h=0;h<b;h++){var G=q[z=p.groups[h]];null==G&&(G=""),j[T++]={value:G,hash:g[h]}}if(j.length!=b)break;for(var P=null,A="",C=0;C<j.length;C++){0;var H=j[C].value;if(A=A+"_"+j[C].hash+"_"+H,void 0==f[A]||null==f[A]){if(null==P)P={group:H,subItems:new Array,subGroups:new Array,level:0},v[c++]=P,P.uniqueid=p.generatekey(),p.loadedgroupsByKey[H]=P;else{var S={group:H,subItems:new Array,subGroups:new Array,parentItem:P,level:P.level+1};p.loadedgroupsByKey[P.uniqueid+"_"+H]=S,S.uniqueid=p.generatekey(),P.subGroups[P.subGroups.length++]=S,P=S}f[A]=P}else P=f[A]}null!=P?(void 0==q.uid&&(q.uid=this.getid(this.source.id,q,m)),x?(q.boundindex=w[_].index,this.recordsbyid["id"+q.uid]=w[_].value):(q.boundindex=m,this.recordsbyid["id"+q.uid]=w[_]),this.bounditems[q.boundindex]=q,this.sortedgroups[m]=q,q.uniqueid=p.generatekey(),q.parentItem=P,q.level=P.level+1,P.subItems[P.subItems.length++]=q):(void 0==q.uid&&(q.uid=this.getid(this.source.id,q,m)),x?(q.boundindex=w[_].index,this.recordsbyid["id"+q.uid]=w[_].value):(q.boundindex=m,this.recordsbyid["id"+q.uid]=w[_]),this.sortedgroups[m]=q,this.bounditems[q.boundindex]=q,q.uniqueid=p.generatekey()),o++,m++,0}var B=function(e,r,s){for(var i=0;i<r.subItems.length;i++)r.subItems[i].visibleindex=t+s,e.rows[s]=r.subItems[i],e.loadedrecords[s]=r.subItems[i],s++;return s},D=function(e,r,s){var i=1,o=e.grid.columns.records?e.grid.columns.records:e.grid.columns;if(1==e.aggregates)for(var n=0;n<o.length;n++)o[n].aggregates&&(i=Math.max(i,o[n].aggregates.length));for(subGroup in r.subGroups){var a=r.subGroups[subGroup];a.subGroups&&(e.loadedgroups[e.loadedgroups.length]=a,a.visibleindex=t+s,e.rows[s]=a,e.loadedrecords[s]=a,s++,a.subGroups.length>0?s=D(e,a,s):a.subItems.length>0&&(s=B(e,a,s)))}return r.subItems.length>0&&(s=B(e,r,s)),function(r){if(1==e.aggregates)for(var n=0;n<i;n++)!function(i){var n=r,a={},l=function(t){for(var r=0;r<o.length;r++)if(o[r].aggregates)for(var s=e.grid.getcolumnaggregateddata(o[r].datafield,o[r].aggregates,!0,t),n=0;n<o[r].aggregates.length;n++)if(o[r].aggregates[i]){var l=o[r],u=o[r].aggregates[i],d=u,p=(d=e.grid._getaggregatename(d))+":"+s[u];a[l.datafield]=p}};if(null!=n)if(a.level=n.level,a.visibleindex=t+s,a.uniqueid=e.generatekey(),e.rows[s]=a,e.loadedrecords[s++]=a,a.totalsrow=!0,r.subItems.length>0)n=r.subItems[r.subItems.length-1],a.parentItem=n.parentItem,a.parentItem.subItems&&(a.parentItem.subItems[a.parentItem.subItems.length]=a),u=[],(d=function(){for(var e=0;e<r.subItems.length;e++)r.subItems[e].totalsrow||(u[u.length]=r.subItems[e])})(r),l(u);else if(r.subGroups.length>0){n=r.subGroups[r.subGroups.length-1],a.level=n.level,a.parentItem=r,r.subGroups[r.subGroups.length]=a;var u=[],d=function(e){if(!e.totalsrow){for(t=0;t<e.subItems.length;t++)e.subItems[t].totalsrow||(u[u.length]=e.subItems[t]);for(var t=0;t<e.subGroups.length;t++)d(e.subGroups[t])}};d(r),l(u)}}(n)}(r),s},M=v.length;this.loadedgroups=new Array,this.rows=new Array;for(var d=0,m=0;m<M;m++){var z=v[m];this.loadedrootgroups[m]=z,this.loadedgroups[this.loadedgroups.length]=z,z.visibleindex=t+d,this.rows[d]=z,this.loadedrecords[d]=z,d=D(this,z,++d)}return d},this._updategroupsinpage=function(t,r,s,i,o,n,a){var l=new Array,u=[];if(this.groupable&&this.groups.length>0){for(var d=0,p=new Array,g=new Array,h=0;h<t.groups.length;h++)g[h]=t.generatekey();var v=0,c=new Array,f=0;a>this.totalrecords&&(a=this.totalrecords);for(var m=n;m<a;m++){var b=e.extend({},t.sortedgroups[m]);if(id=b[t.uniqueId],!t.pagesize||s>=t.pagesize*t.pagenum&&s<t.pagesize*(t.pagenum+1)){(i>=o||id!=l[i][t.uniqueId]||updated&&updated[id])&&(u[u.length]=i);for(var x=new Array,w=0,h=0;h<t.groups.length;h++){var y=b[H=t.groups[h]];null==y&&(y=""),x[w++]={value:y,hash:g[h]}}if(x.length!=t.groups.length)break;for(var I=null,_="",q=0;q<x.length;q++){0;var j=x[q].value;if(_=_+"_"+x[q].hash+"_"+j,void 0==p[_]||null==p[_]){if(null==I)I={group:j,subItems:new Array,subGroups:new Array,level:0},c[f++]=I,void 0!=(G=t.loadedgroupsByKey[j])&&(I.visibleindex=G.visibleindex,I.uniqueid=G.uniqueid);else{var T={group:j,subItems:new Array,subGroups:new Array,parentItem:I,level:I.level+1},G=t.loadedgroupsByKey[I.uniqueid+"_"+j];T.visibleindex=G.visibleindex,T.uniqueid=G.uniqueid,I.subGroups[I.subGroups.length++]=T,I=T}p[_]=I}else I=p[_]}null!=I&&(b.parentItem=I,b.level=I.level+1,I.subItems[I.subItems.length++]=b),i++}v++,s++}for(var P=function(t,r,s){for(var i=0;i<r.subItems.length;i++)l[s]=e.extend({},r.subItems[i]),s++;return s},A=function(e){var t=!1;for(subGroup in e.subGroups){var r=e.subGroups[subGroup];if(r.subGroups){if(r.subGroups.length>0&&A(r))return t=!0,!0;if(r.subItems.length>0)return t=!0,!0}}return e.subItems.length>0?(t=!0,!0):t},C=function(e,t,r){var s=1,i=e.grid.columns.records?e.grid.columns.records:e.grid.columns;if(1==e.aggregates)for(var o=0;o<i.length;o++)i[o].aggregates&&(s=Math.max(s,i[o].aggregates.length));var n=function(t){if(1==e.aggregates)for(var o=0;o<s;o++)!function(s){var o=t,n={},a=function(t){for(var r=0;r<i.length;r++)if(i[r].aggregates)for(var o=e.grid.getcolumnaggregateddata(i[r].datafield,i[r].aggregates,!0,t),a=0;a<i[r].aggregates.length;a++)if(i[r].aggregates[s]){var l=i[r],u=i[r].aggregates[s],d=u,p=(d=e.grid._getaggregatename(d))+":"+o[u];n[l.datafield]=p}};if(null!=o)if(n.level=o.level,n.visibleindex=r,n.uniqueid=e.generatekey(),l[r]=n,e.loadedrecords[r++]=n,n.totalsrow=!0,t.subItems.length>0)o=t.subItems[t.subItems.length-1],n.parentItem=o.parentItem,n.parentItem.subItems&&(n.parentItem.subItems[n.parentItem.subItems.length]=n),u=[],(d=function(){for(var e=0;e<t.subItems.length;e++)t.subItems[e].totalsrow||(u[u.length]=t.subItems[e])})(t),a(u);else if(t.subGroups.length>0){o=t.subGroups[t.subGroups.length-1],n.level=o.level,n.parentItem=t,t.subGroups[t.subGroups.length]=n;var u=[],d=function(e){if(!e.totalsrow){for(t=0;t<e.subItems.length;t++)e.subItems[t].totalsrow||(u[u.length]=e.subItems[t]);for(var t=0;t<e.subGroups.length;t++)d(e.subGroups[t])}};d(t),a(u)}}(o)};for(subGroup in t.subGroups){var a=t.subGroups[subGroup];a.subGroups&&A(a)&&(l[r]=a,r++,a.subGroups.length>0?r=C(e,a,r):a.subItems.length>0&&(r=P(0,a,r)),n(a))}return t.subItems.length>0&&(r=P(0,t,r)),n(t),r},v=0;v<c.length;v++){var H=c[v];A(H)&&(l[d]=H,d=C(this,H,++d))}}return l}},e.extend(e.jqx._jqxGrid.prototype,{_initgroupsheader:function(){if(this.groupsheader.css("visibility","hidden"),this._groupsheader()){this.groupsheader.css("visibility","inherit");var t=this,r=this.gridlocalization.groupsheaderstring;this.groupsheaderdiv=this.groupsheaderdiv||e('<div style="width: 100%; position: relative;"></div>'),this.groupsheaderdiv.height(this.groupsheaderheight),this.groupsheaderdiv.css("top",0),this.groupsheader.append(this.groupsheaderdiv),this.groupheadersbounds=new Array;var s=this.groups.length;this.groupsheaderdiv.children().remove(),this.groupsheaderdiv[0].innerHTML="";var i=new Array;if(s>0)e.each(this.groups,function(r){var o=this,n=t._getColumnText(this).label,a=t._rendergroupcolumn(n,o);if(a.addClass(t.toThemeProperty("jqx-grid-group-column")),t.groupsheaderdiv.append(a),t.closeablegroups){var l=e(a.find(".jqx-icon-close"));t.isTouchDevice()&&!0!==t.touchmode?t.addHandler(l,"touchstart",function(){return t.removegroupat(r),!1}):t.addHandler(l,"click",function(){return t.removegroupat(r),!1})}if(t.sortable&&t.addHandler(a,"click",function(){var e=t.getcolumn(o);return null!=e&&t._togglesort(e),!1}),i[i.length]=a,t._handlegroupstocolumnsdragdrop(this,a),r<s-1){var u=a.height(),d=e('<div style="float: left; position: relative;"></div>');t.rtl&&d.css("float","right"),d.width(t.groupindentwidth/3),d.height(1),d.css("top",u/2),d.addClass(t.toThemeProperty("jqx-grid-group-column-line")),t.groupsheaderdiv.append(d)}});else{var o=e('<div style="position: relative;">'+r+"</div>");this.groupsheaderdiv.append(o),this.rtl&&o.addClass(this.toThemeProperty("jqx-rtl"))}this._groupheaders=i,this._updategroupheadersbounds()}},_updategroupheadersbounds:function(){var t=this,r=this.groupsheaderdiv.children().outerHeight(),s=(this.groupsheader.height()-r)/2;this.groupsheaderdiv.css("top",s),this.rtl?(this.groupsheaderdiv.css("left",""),this.groupsheaderdiv.css("right",s)):(this.groupsheaderdiv.css("left",s),this.groupsheaderdiv.css("right","")),this.rtl&&this._groupheaders.reverse(),e.each(this._groupheaders,function(e){var r=this.coord();t.groupheadersbounds[e]={left:r.left,top:r.top,width:this.outerWidth(),height:this.outerHeight(),index:e}})},addgroup:function(e){if(e){var t=this;t.groups!==t.dataview.groups&&(t.dataview.groups=t.groups),t.groups[t.groups.length]=e,t.refreshgroups(),this._raiseEvent(12,{type:"Add",index:t.groups[t.groups.length],groups:t.groups})}},insertgroup:function(e,t){if(void 0!=e&&null!=e&&e>=0&&e<=this.groups.length&&t){var r=this;r.groups!==r.dataview.groups&&(r.dataview.groups=r.groups),r.groups.splice(e,0,t.toString()),r.refreshgroups(),this._raiseEvent(12,{type:"Insert",index:e,groups:r.groups})}},refreshgroups:function(){this._refreshdataview(),this._render(!0,!0,!0,!1),this._postrender("group")},_insertaftergroup:function(e,t){var r=this._getGroupIndexByDataField(e);this.insertgroup(r+1,t)},_insertbeforegroup:function(e,t){var r=this._getGroupIndexByDataField(e);this.insertgroup(r,t)},removegroupat:function(e){if(e>=0&&null!=e&&void 0!=e){var t=this;return t.groups!==t.dataview.groups&&(t.dataview.groups=t.groups),t.groups.splice(e,1),t.refreshgroups(),t.virtualmode&&t.updatebounddata(),this._raiseEvent(12,{type:"Remove",index:e,groups:t.groups}),!0}return!1},cleargroups:function(){var e=this;return e.groups=[],e.dataview.groups=e.groups,e.refreshgroups(),this._raiseEvent(12,{type:"Clear",index:-1,groups:e.groups}),!0},removegroup:function(e){if(null==e)return!1;var t=this.groups.indexOf(e.toString());return this.removegroupat(t)},getrootgroupscount:function(){return this.dataview.loadedrootgroups.length},collapsegroup:function(e){if(e>=0&&-1===e.toString().indexOf("."))return this._setrootgroupstate(e,!1);var t=e.toString().split("."),r=null;this.groupsVisibility||(this.groupsVisibility=new Array);for(var s=0;s<t.length;s++){var e=parseInt(t[s]);if(0==s){r=this.dataview.loadedrootgroups[e];this.groupsVisibility[r.group]=null}else{var i=r.subGroups[e];i&&(r=i,s==t.length-1&&(this._setgroupstate(r,!1,!0),this.groupsVisibility[r.group]=null))}}},expandgroup:function(e){if(e>=0&&-1===e.toString().indexOf("."))return this._setrootgroupstate(e,!0);for(var t=e.toString().split("."),r=null,s=0;s<t.length;s++){var e=parseInt(t[s]);if(0==s){r=this.dataview.loadedrootgroups[e];this._setrootgroupstate(e,!0),this.groupsVisibility||(this.groupsVisibility=new Array),this.groupsVisibility[r.group]=r}else{var i=r.subGroups[e];i&&(r=i,this._setgroupstate(r,!0,!0),this.groupsVisibility||(this.groupsVisibility=new Array),this.groupsVisibility[r.group]=r)}}},collapseallgroups:function(e){this._setbatchgroupstate(!1,e)},expandallgroups:function(e){this._setbatchgroupstate(!0,e)},isgroupexpanded:function(e){var t=this.dataview.loadedrootgroups[e];return null==t?null:this.expandedgroups[t.uniqueid].expanded},getgroup:function(t){var r=this.dataview.loadedrootgroups[t];if(null==r)return null;var s=this.expandedgroups[r.uniqueid].expanded,i=r.group,o=r.level,n=new Array;this._getsubgroups(n,r);var a=this,l={group:i,level:o,expanded:s,subgroups:n};if(r.subItems){var u=new Array;e.each(r.subItems,function(){var e=this.boundindex;u[u.length]=a.getrowdata(e)}),u.length>0&&(l.subrows=u)}return l},getrootgroups:function(){for(var e=this.dataview.loadedrootgroups.length,t=new Array,r=0;r<e;r++)t[r]=this.getgroup(r);return t},_getsubgroups:function(t,r){var s=this;for(obj in r.subGroups){var i=r.subGroups[obj],o=s.expandedgroups[i.uniqueid].expanded,n=i.group,a=i.level;if(t[t.length]={group:n,level:a,expanded:o},i.subItems){var l=new Array;e.each(i.subItems,function(){var e=this.boundindex;l[l.length]=s.getrowdata(e)}),t[t.length-1].subrows=l}if(i.subGroups){var u=new Array;s._getsubgroups(u,i)}}return t},_setbatchgroupstate:function(e,t){var r=this;for(obj in this.dataview.loadedrootgroups)r._setrootgroupstate(obj,e,!1,!0);if(0==t)return r._requiresupdate=!0,r._renderrows(r.virtualsizeinfo),!0;var s=this.vScrollBar[0].style.visibility;return this.rendergridcontent(!0,!1),(s!=this.vScrollBar[0].style.visibility||this._hiddencolumns)&&(this._updatecolumnwidths(),this._updatecellwidths(),this._renderrows(this.virtualsizeinfo)),!0},_setrootgroupstate:function(e,t,r,s){if(void 0==e||null==e||e<0)return!1;if(!this.groupable||0==this.groups.length)return!1;var i=void 0==r||r;if(e>=0&&e<this.dataview.loadedrootgroups.length){var o=this.dataview.loadedrootgroups[e];if(this.pageable){for(var n=new Array,a=0;a<this.dataview.rows.length;a++)null!=this.dataview.rows[a].group&&0===this.dataview.rows[a].level&&n.push(this.dataview.rows[a]);if(!(o=n[e]))return}return this._setgroupstate(o,t,i,s)}return!1},_togglegroupstate:function(e,t){if(null==e||void 0==e)return!1;var r=this.vScrollInstance.value,s=this.expandedgroups[e.uniqueid];s=!(s=void 0!=s&&s.expanded),this.groupsVisibility||(this.groupsVisibility=new Array),this.groupsVisibility[e.group]=s?e:null;var i=this._setgroupstate(e,s,t);return this._newmax=null,0!==r&&"hidden"!==this.vScrollBar.css("visibility")&&(r<=this.vScrollInstance.max?this.vScrollInstance.setPosition(r):this.vScrollInstance.setPosition(this.vScrollInstance.max)),i},_setgroupstate:function(e,t,r,s){if(null==e||void 0==e)return!1;var i=!1;this.editable&&this.editcell&&this.endcelledit(this.editcell.row,this.editcell.column,!1,!1);var o=this.expandedgroups[e.uniqueid];if(void 0==o&&(o={expanded:!1},i=!0),o.expanded!=t&&(i=!0),i){if(this.expandedgroups[e.uniqueid]={expanded:t,group:e},this._setsubgroupsvisibility(this,e,!t,s),r){var n=this.vScrollBar[0].style.visibility;this.rendergridcontent(!0,!1),(n!=this.vScrollBar[0].style.visibility||this._hiddencolumns)&&(this._updatecolumnwidths(),this._updatecellwidths(),this._renderrows(this.virtualsizeinfo))}return void 0!=this.suspendgroupevents&&0!=this.suspendgroupevents||(t?this._raiseEvent(4,{group:e.group,parentgroup:e.parentItem?e.parentItem.group:null,level:e.level,visibleindex:e.visibleindex}):this._raiseEvent(5,{group:e.group,parentgroup:e.parentItem?e.parentItem.group:null,level:e.level,visibleindex:e.visibleindex})),!0}return!1},_setgroupitemsvisibility:function(e,t,r){for(var s=0;s<t.subItems.length;s++)e._setrowvisibility(t.subItems[s].visibleindex,r,!1)},_setsubgroupsvisibility:function(e,t,r,s){if(null!=t.parentItem){if(this.hiddens[t.parentItem.visibleindex])return}else if(null==t.parentItem&&this.hiddens[t.visibleindex])return;for(subGroup in t.subGroups){var i=t.subGroups[subGroup];r||e._setrowvisibility(i.visibleindex,r,!1);var o=!r;s?this.expandedgroups[i.uniqueid]={expanded:o,group:i}:o=void 0!=e.expandedgroups[i.uniqueid]&&e.expandedgroups[i.uniqueid].expanded,i.subGroups&&(i.subGroups.length>0?e._setsubgroupsvisibility(e,i,!o||r,s):i.subItems.length>0&&e._setgroupitemsvisibility(e,i,!o||r)),r&&e._setrowvisibility(i.visibleindex,r,!1)}t.subItems&&t.subItems.length>0&&e._setgroupitemsvisibility(e,t,r)},_handlecolumnsdragdrop:function(){var t=this,r=-1,s=!1;if(t.groupable){var i="mousemove.grouping"+this.element.id,o=(this.element.id,"mouseup.grouping"+this.element.id),n=!1;this.isTouchDevice()&&!0!==this.touchmode&&(n=!0,i=e.jqx.mobile.getTouchEventName("touchmove")+".grouping"+this.element.id,e.jqx.mobile.getTouchEventName("touchstart")+".grouping"+this.element.id,o=e.jqx.mobile.getTouchEventName("touchend")+".grouping"+this.element.id),this.removeHandler(e(document),i),this.addHandler(e(document),i,function(i){if(!t.showgroupsheader)return!0;if(null!=t.dragcolumn){var o=parseInt(i.pageX),a=parseInt(i.pageY);if(n){var l=t.getTouches(i)[0];o=parseInt(l.pageX),a=parseInt(l.pageY)}var u=t.host.coord(),d=parseInt(u.left),p=parseInt(u.top);void 0!=t.dragmousedownoffset&&null!=t.dragmousedownoffset||(t.dragmousedownoffset={left:0,top:0});var g=parseInt(o)-parseInt(t.dragmousedownoffset.left),h=parseInt(a)-parseInt(t.dragmousedownoffset.top);if(t.dragcolumn.css({left:g+"px",top:h+"px"}),s=!1,o>=d&&o<=d+t.host.width()&&a>=p&&a<=p+t.host.height()&&(s=!0),r=-1,s){t.dragcolumnicon.removeClass(t.toThemeProperty("jqx-grid-dragcancel-icon")),t.dragcolumnicon.addClass(t.toThemeProperty("jqx-grid-drag-icon"));var v=t.groupsheader.coord(),c=v.top+t.groupsheader.height(),f=e.data(t.dragcolumn[0],"datarecord");if(f)m=t.groups.indexOf(f.toString());else var m=-1;var b=-1==m||t.groups.length>1&&m>-1;null!=t.dropline&&(a>=v.top&&a<=c?b&&(r=t._handlegroupdroplines(o)):t.dropline.fadeOut("slow"))}else null!=t.dropline&&t.dropline.fadeOut("slow"),t.dragcolumnicon.removeClass(t.toThemeProperty("jqx-grid-drag-icon")),t.dragcolumnicon.addClass(t.toThemeProperty("jqx-grid-dragcancel-icon"));if(n)return i.preventDefault(),i.stopPropagation(),!1}}),this.removeHandler(e(document),o),this.addHandler(e(document),o,function(i){if(!t.showgroupsheader)return!0;t.__drag=!1,e(document.body).removeClass("jqx-disableselect");parseInt(i.pageX);var o=parseInt(i.pageY);if(n){var a=t.getTouches(i)[0];parseInt(a.pageX),o=parseInt(a.pageY)}var l=t.host.coord(),u=(parseInt(l.left),parseInt(l.top)),d=t.groupsheader.height();if(t.showtoolbar&&(u+=t.toolbarheight),t.dragstarted=!1,t.dragmousedown=null,null!=t.dragcolumn){var p=e.data(t.dragcolumn[0],"datarecord");if(t.dragcolumn.remove(),t.dragcolumn=null,null!=p){if(!t.getcolumn(p).groupable)return void(null!=t.dropline&&(t.dropline.remove(),t.dropline=null));if(s)if(-1!=r){var g=r.index,h=t.groups[g];(v=t._getGroupIndexByDataField(p))!=g&&(void 0!=v&&v>=0&&t.groups.splice(v,1),"before"==r.position?t.rtl?t._insertaftergroup(h,p):t._insertbeforegroup(h,p):t.rtl?t._insertbeforegroup(h,p):t._insertaftergroup(h,p))}else if(0==t.groups.length)o>u&&o<=u+d&&t.addgroup(p);else if(o>u+d){var v=t._getGroupIndexByDataField(p);t.removegroupat(v)}null!=t.dropline&&(t.dropline.remove(),t.dropline=null)}}})}},_getGroupIndexByDataField:function(e){for(var t=0;t<this.groups.length;t++)if(this.groups[t]==e)return t;return-1},_isColumnInGroups:function(e){for(var t=0;t<this.groups.length;t++)if(this.groups[t]==e)return!0;return!1},_handlegroupdroplines:function(t){var r=this,s=-1;return e.each(r.groupheadersbounds,function(e){if(t<=this.left+this.width/2){var i=this.left-3;return e>0&&(i=this.left-1-r.groupindentwidth/6),r.dropline.css("left",i),r.dropline.css("top",this.top),r.dropline.height(this.height),r.dropline.fadeIn("slow"),s={index:e,position:"before"},r.rtl&&(s={index:r.groupheadersbounds.length-1-e,position:"before"}),!1}t>=this.left+this.width/2&&(r.dropline.css("left",1+this.left+this.width),r.dropline.css("top",this.top),r.dropline.height(this.height),r.dropline.fadeIn("slow"),s={index:e,position:"after"},r.rtl&&(s={index:r.groupheadersbounds.length-1-e,position:"after"}))}),s},_handlegroupstocolumnsdragdrop:function(t,r){this.dragmousedown=null,this.dragmousedownoffset=null,this.dragstarted=!1,this.dragcolumn=null;var s,i=this,o="mousedown",n="mousemove",a=!1;this.isTouchDevice()&&!0!==this.touchmode&&(a=!0,o=e.jqx.mobile.getTouchEventName("touchstart"),n=e.jqx.mobile.getTouchEventName("touchmove")),this.addHandler(r,"dragstart",function(e){return!1}),this.addHandler(r,o,function(t){if(!i.showgroupsheader)return!0;var r=t.pageX,s=t.pageY;if(i.__drag=!0,i.dragmousedown={left:r,top:s},a){var o=i.getTouches(t)[0];r=o.pageX,s=o.pageY,i.dragmousedown={left:r,top:s},t.preventDefault&&t.preventDefault()}var n=e(t.target).coord();i.dragmousedownoffset={left:parseInt(r)-parseInt(n.left),top:parseInt(s-n.top)}}),this.addHandler(r,n,function(o){if(!i.showgroupsheader)return!0;if(i.dragmousedown){if(s={left:o.pageX,top:o.pageY},a){var n=i.getTouches(o)[0];s={left:n.pageX,top:n.pageY}}if(!i.dragstarted&&null==i.dragcolumn){var l=Math.abs(s.left-i.dragmousedown.left),u=Math.abs(s.top-i.dragmousedown.top);(l>3||u>3)&&(i._createdragcolumn(r,s,!0),e(document.body).addClass("jqx-disableselect"),e.data(i.dragcolumn[0],"datarecord",t),o.preventDefault&&o.preventDefault())}}})},_createdragcolumn:function(t,r,s){var i=this,o=r;i.dragcolumn=e("<div></div>");var n=t.clone();i.dragcolumn.css("z-index",999999),n.css("border-width","1px"),n.css("opacity","0.4");var a=e(n.find("."+i.toThemeProperty("jqx-grid-column-menubutton")));a.length>0&&a.css("display","none");var l=e(n.find(".jqx-icon-close"));l.length>0&&l.css("display","none"),i.dragcolumnicon=e('<div style="z-index: 9999; position: absolute; left: 100%; top: 50%; margin-left: -18px; margin-top: -7px;"></div>'),i.dragcolumnicon.addClass(i.toThemeProperty("jqx-grid-drag-icon")),i.dragcolumn.css("float","left"),i.dragcolumn.css("position","absolute");i.host.coord();n.width(t.width()+16),i.dragcolumn.append(n),i.dragcolumn.height(t.height()),i.dragcolumn.width(n.width()),i.dragcolumn.append(i.dragcolumnicon),e(document.body).append(i.dragcolumn),n.css("margin-left",0),n.css("left",0),n.css("top",0),i.dragcolumn.css("left",o.left+i.dragmousedown.left),i.dragcolumn.css("top",o.top+i.dragmousedown.top),void 0!=s&&s&&(i.dropline=e('<div style="display: none; position: absolute;"></div>'),i.dropline.width(2),i.dropline.addClass(i.toThemeProperty("jqx-grid-group-drag-line")),e(document.body).append(i.dropline))},iscolumngroupable:function(e){return this._getcolumnproperty(e,"groupable")},_handlecolumnstogroupsdragdrop:function(t,r){this.dragmousedown=null,this.dragmousedownoffset=null,this.dragstarted=!1,this.dragcolumn=null;var s=this,i=!1;this.isTouchDevice()&&!0!==this.touchmode&&(i=!0);var o="mousedown.drag",n="mousemove.drag";i?(o=e.jqx.mobile.getTouchEventName("touchstart")+".drag",n=e.jqx.mobile.getTouchEventName("touchmove")+".drag"):this.addHandler(r,"dragstart",function(e){return!1}),this.addHandler(r,o,function(o){if(!s.showgroupsheader)return!0;if(s.__drag=!0,s._isColumnInGroups(t.displayfield))return r.css("cursor"),!0;if(0==t.groupable)return!0;var n=o.pageX,a=o.pageY;if(i){var l=s.getTouches(o)[0];n=l.pageX,a=l.pageY}s.dragmousedown={left:n,top:a},i&&o.preventDefault&&o.preventDefault();var u=e(o.target).coord();s.dragmousedownoffset={left:parseInt(n)-parseInt(u.left),top:parseInt(a-u.top)}}),this.addHandler(r,n,function(o){if(!s.showgroupsheader)return!0;if(s._isColumnInGroups(t.displayfield))return r.css("cursor"),!0;if(s.dragmousedown){var a=o.pageX,l=o.pageY;if(i){var u=s.getTouches(o)[0];a=u.pageX,l=u.pageY}if(n={left:a,top:l},!s.dragstarted&&null==s.dragcolumn){var d=Math.abs(n.left-s.dragmousedown.left),p=Math.abs(n.top-s.dragmousedown.top);(d>3||p>3)&&(s._createdragcolumn(r,n,!0),e.data(s.dragcolumn[0],"datarecord",t.displayfield),o.preventDefault&&o.preventDefault())}}})},_rendergroupcolumn:function(t,r){var s=e('<div style="float: left; position: relative;"></div>');if(this.rtl&&s.css("float","right"),null!=this.groupcolumnrenderer&&(s[0].innerHTML=this.groupcolumnrenderer(t),s.addClass(this.toThemeProperty("jqx-grid-group-column")),s.addClass(this.toThemeProperty("jqx-fill-state-normal"))),this.closeablegroups){""==s[0].innerHTML&&(s[0].innerHTML='<a style="float: left;" href="#">'+t+"</a>"),this.rtl&&(s[0].innerHTML='<a style="float: right;" href="#">'+t+"</a>");var i=this.rtl?"left":"right",o='<div style="float: '+i+'; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -18px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-icon-close")+'"></div></div>';if(e.jqx.browser.msie&&e.jqx.browser.version<8&&(o='<div style="float: left; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -18px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-icon-close")+'"></div></div>'),this.rtl){o='<div style="float: '+i+'; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-icon-close")+'"></div></div>';e.jqx.browser.msie&&e.jqx.browser.version<8&&(o='<div style="float: left; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-icon-close")+'"></div></div>')}s[0].innerHTML+=o}else""==s[0].innerHTML&&(s[0].innerHTML='<a href="#">'+t+"</a>");if(this.sortable){var n=e('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -16px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortascbutton")+'"></div></div>'),a=e('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -16px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortdescbutton")+'"></div></div>');if(this.closeablegroups)var n=e('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -32px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortascbutton")+'"></div></div>'),a=e('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -32px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortdescbutton")+'"></div></div>');if(this.rtl){var n=e('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-left: 0px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortascbutton")+'"></div></div>'),a=e('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-left: 0px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortdescbutton")+'"></div></div>');if(this.closeablegroups)var n=e('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-left: 16px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortascbutton")+'"></div></div>'),a=e('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-left: 16px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortdescbutton")+'"></div></div>')}n.css("display","none"),a.css("display","none"),e.jqx.browser.msie&&e.jqx.browser.version<8&&(n.css("float","left"),a.css("float","left")),s.append(n),s.append(a),e.data(document.body,"groupsortelements"+r,{sortasc:n,sortdesc:a})}return s.addClass(this.toThemeProperty("jqx-fill-state-normal")),s.addClass(this.toThemeProperty("jqx-grid-group-column")),s},_rendergroup:function(t,r,s,i,o,n,a){var l=r,u=r.cells[s.level];this.rtl&&(u=r.cells[r.cells.length-1-s.level]);var d=this._findgroupstate(s.uniqueid);if(s.bounddata.subGroups.length>0||s.bounddata.subItems.length>0){var p=this.rtl?"-rtl":"",g=this.toThemeProperty("jqx-icon-arrow-right");p&&(g=this.toThemeProperty("jqx-icon-arrow-left")),u.className+=d?" "+this.toThemeProperty("jqx-grid-group-expand"+p)+" "+this.toThemeProperty("jqx-icon-arrow-down"):" "+this.toThemeProperty("jqx-grid-group-collapse"+p)+" "+g}var h=this._getColumnText(this.groups[s.level]).label,v=this.groupindentwidth,c=a-(A=this.rowdetails&&this.showrowdetailscolumn?(1+t)*v:t*v),f=s.level+1;this.rtl&&(f=0);for(var m=l.cells[f],b=2;void 0!=m&&"none"==m.style.display&&b<l.cells.length-1;)m=l.cells[f+b-1],b++;var x=e(m);if(m){if(m.style.width=parseInt(c)+"px",-1!=m.className.indexOf("jqx-grid-cell-filter")&&x.removeClass(this.toThemeProperty("jqx-grid-cell-filter")),-1!=m.className.indexOf("jqx-grid-cell-sort")&&x.removeClass(this.toThemeProperty("jqx-grid-cell-sort")),-1!=m.className.indexOf("jqx-grid-cell-pinned")&&x.removeClass(this.toThemeProperty("jqx-grid-cell-pinned")),null!=this.groupsrenderer){var w={group:s.group,level:s.level,parent:s.bounddata.parentItem,subGroups:s.bounddata.subGroups,subItems:s.bounddata.subItems,groupcolumn:this._getColumnText(this.groups[s.level]).column},y=this.groupsrenderer(h+": "+s.group,s.group,d,w);if(y)m.innerHTML=y;else{q=s.bounddata.subItems.length>0?s.bounddata.subItems.length:s.bounddata.subGroups.length;if(this.showgroupaggregates){j=s.bounddata.subItems.length>0?s.bounddata.subItems:s.bounddata.subGroups;q=0;for(T=0;T<j.length;T++)j[T].totalsrow||q++}m.innerHTML='<div class="'+this.toThemeProperty("jqx-grid-groups-row")+'" style="position: absolute;"><span>'+h+': </span><span class="'+this.toThemeProperty("jqx-grid-groups-row-details")+'">'+s.group+" ("+q+")</span></div>"}}else{var I=this._getcolumnbydatafield(this.groups[s.level]),_=s.group;if(null==I)throw new Error("jqxGrid: Unable to find '"+this.groups[s.level]+"' group in the Grid's columns collection.");I.cellsformat&&e.jqx.dataFormat&&(e.jqx.dataFormat.isDate(_)?_=e.jqx.dataFormat.formatdate(_,I.cellsformat,this.gridlocalization):e.jqx.dataFormat.isNumber(_)&&(_=e.jqx.dataFormat.formatnumber(_,I.cellsformat,this.gridlocalization)));var q=s.bounddata.subItems.length>0?s.bounddata.subItems.length:s.bounddata.subGroups.length;if(this.showgroupaggregates){var j=s.bounddata.subItems.length>0?s.bounddata.subItems:s.bounddata.subGroups;q=0;for(var T=0;T<j.length;T++)j[T].totalsrow||q++}m.innerHTML='<div class="'+this.toThemeProperty("jqx-grid-groups-row")+'" style="position: absolute;"><span>'+h+': </span><span class="'+this.toThemeProperty("jqx-grid-groups-row-details")+'">'+_+" ("+q+")</span></div>"}if(this.rtl){I||(I=this._getcolumnbydatafield(this.groups[s.level]));var G="hidden"==this.hScrollBar.css("visibility")?0:this.hScrollInstance.max-this.hScrollInstance.value,P="hidden"==this.vScrollBar.css("visibility")?0:this.scrollbarsize+6,A=this.rowdetails&&this.showrowdetailscolumn?(2+s.level)*v:(1+s.level)*v;m.style.width=a+parseInt(G)-A-P+"px",x.addClass(this.toThemeProperty("jqx-rtl"));var C=e(r.cells[r.cells.length-1]).css("z-index");x.css("z-index",C);var H=x.find("div"),c=H.width();H.css("left","100%");var S=null!=this.columns.records[r.cells.length-2-s.level]&&this.columns.records[r.cells.length-2-s.level].pinned;if(this.table.width()<a&&(a=this.table.width(),"hidden"!=this.vScrollBar.css("visibility")&&(a+=this.vScrollBar.outerWidth())),I.pinned||S)this.rowdetails&&this.showrowdetailscolumn&&(a+=30),H.css("margin-left",-c),m.style.width=a+G-A-P+"px";else{G="hidden"==this.hScrollBar.css("visibility")?0:this.hScrollInstance.max;m.style.width=a+G-A-P+"px";c=H.width();H.css("margin-left",-c)}}}}})}(jqxBaseFramework);

