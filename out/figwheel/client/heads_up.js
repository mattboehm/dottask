// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17905__auto__ = [];
var len__17898__auto___31974 = arguments.length;
var i__17899__auto___31975 = (0);
while(true){
if((i__17899__auto___31975 < len__17898__auto___31974)){
args__17905__auto__.push((arguments[i__17899__auto___31975]));

var G__31976 = (i__17899__auto___31975 + (1));
i__17899__auto___31975 = G__31976;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((2) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17906__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__31966_31977 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__31967_31978 = null;
var count__31968_31979 = (0);
var i__31969_31980 = (0);
while(true){
if((i__31969_31980 < count__31968_31979)){
var k_31981 = cljs.core._nth.call(null,chunk__31967_31978,i__31969_31980);
e.setAttribute(cljs.core.name.call(null,k_31981),cljs.core.get.call(null,attrs,k_31981));

var G__31982 = seq__31966_31977;
var G__31983 = chunk__31967_31978;
var G__31984 = count__31968_31979;
var G__31985 = (i__31969_31980 + (1));
seq__31966_31977 = G__31982;
chunk__31967_31978 = G__31983;
count__31968_31979 = G__31984;
i__31969_31980 = G__31985;
continue;
} else {
var temp__4425__auto___31986 = cljs.core.seq.call(null,seq__31966_31977);
if(temp__4425__auto___31986){
var seq__31966_31987__$1 = temp__4425__auto___31986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31966_31987__$1)){
var c__17643__auto___31988 = cljs.core.chunk_first.call(null,seq__31966_31987__$1);
var G__31989 = cljs.core.chunk_rest.call(null,seq__31966_31987__$1);
var G__31990 = c__17643__auto___31988;
var G__31991 = cljs.core.count.call(null,c__17643__auto___31988);
var G__31992 = (0);
seq__31966_31977 = G__31989;
chunk__31967_31978 = G__31990;
count__31968_31979 = G__31991;
i__31969_31980 = G__31992;
continue;
} else {
var k_31993 = cljs.core.first.call(null,seq__31966_31987__$1);
e.setAttribute(cljs.core.name.call(null,k_31993),cljs.core.get.call(null,attrs,k_31993));

var G__31994 = cljs.core.next.call(null,seq__31966_31987__$1);
var G__31995 = null;
var G__31996 = (0);
var G__31997 = (0);
seq__31966_31977 = G__31994;
chunk__31967_31978 = G__31995;
count__31968_31979 = G__31996;
i__31969_31980 = G__31997;
continue;
}
} else {
}
}
break;
}

var seq__31970_31998 = cljs.core.seq.call(null,children);
var chunk__31971_31999 = null;
var count__31972_32000 = (0);
var i__31973_32001 = (0);
while(true){
if((i__31973_32001 < count__31972_32000)){
var ch_32002 = cljs.core._nth.call(null,chunk__31971_31999,i__31973_32001);
e.appendChild(ch_32002);

var G__32003 = seq__31970_31998;
var G__32004 = chunk__31971_31999;
var G__32005 = count__31972_32000;
var G__32006 = (i__31973_32001 + (1));
seq__31970_31998 = G__32003;
chunk__31971_31999 = G__32004;
count__31972_32000 = G__32005;
i__31973_32001 = G__32006;
continue;
} else {
var temp__4425__auto___32007 = cljs.core.seq.call(null,seq__31970_31998);
if(temp__4425__auto___32007){
var seq__31970_32008__$1 = temp__4425__auto___32007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31970_32008__$1)){
var c__17643__auto___32009 = cljs.core.chunk_first.call(null,seq__31970_32008__$1);
var G__32010 = cljs.core.chunk_rest.call(null,seq__31970_32008__$1);
var G__32011 = c__17643__auto___32009;
var G__32012 = cljs.core.count.call(null,c__17643__auto___32009);
var G__32013 = (0);
seq__31970_31998 = G__32010;
chunk__31971_31999 = G__32011;
count__31972_32000 = G__32012;
i__31973_32001 = G__32013;
continue;
} else {
var ch_32014 = cljs.core.first.call(null,seq__31970_32008__$1);
e.appendChild(ch_32014);

var G__32015 = cljs.core.next.call(null,seq__31970_32008__$1);
var G__32016 = null;
var G__32017 = (0);
var G__32018 = (0);
seq__31970_31998 = G__32015;
chunk__31971_31999 = G__32016;
count__31972_32000 = G__32017;
i__31973_32001 = G__32018;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq31963){
var G__31964 = cljs.core.first.call(null,seq31963);
var seq31963__$1 = cljs.core.next.call(null,seq31963);
var G__31965 = cljs.core.first.call(null,seq31963__$1);
var seq31963__$2 = cljs.core.next.call(null,seq31963__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__31964,G__31965,seq31963__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17753__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17755__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17756__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17757__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17753__auto__,prefer_table__17754__auto__,method_cache__17755__auto__,cached_hierarchy__17756__auto__,hierarchy__17757__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17753__auto__,prefer_table__17754__auto__,method_cache__17755__auto__,cached_hierarchy__17756__auto__,hierarchy__17757__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17757__auto__,method_table__17753__auto__,prefer_table__17754__auto__,method_cache__17755__auto__,cached_hierarchy__17756__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_32019 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_32019.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_32019.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_32019.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_32019);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__32020,st_map){
var map__32025 = p__32020;
var map__32025__$1 = ((((!((map__32025 == null)))?((((map__32025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32025):map__32025);
var container_el = cljs.core.get.call(null,map__32025__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__32025,map__32025__$1,container_el){
return (function (p__32027){
var vec__32028 = p__32027;
var k = cljs.core.nth.call(null,vec__32028,(0),null);
var v = cljs.core.nth.call(null,vec__32028,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__32025,map__32025__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__32029,dom_str){
var map__32032 = p__32029;
var map__32032__$1 = ((((!((map__32032 == null)))?((((map__32032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32032):map__32032);
var c = map__32032__$1;
var content_area_el = cljs.core.get.call(null,map__32032__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__32034){
var map__32037 = p__32034;
var map__32037__$1 = ((((!((map__32037 == null)))?((((map__32037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32037):map__32037);
var content_area_el = cljs.core.get.call(null,map__32037__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20107__auto__){
return (function (){
var f__20108__auto__ = (function (){var switch__19995__auto__ = ((function (c__20107__auto__){
return (function (state_32080){
var state_val_32081 = (state_32080[(1)]);
if((state_val_32081 === (1))){
var inst_32065 = (state_32080[(7)]);
var inst_32065__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32066 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32067 = ["10px","10px","100%","68px","1.0"];
var inst_32068 = cljs.core.PersistentHashMap.fromArrays(inst_32066,inst_32067);
var inst_32069 = cljs.core.merge.call(null,inst_32068,style);
var inst_32070 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32065__$1,inst_32069);
var inst_32071 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32065__$1,msg);
var inst_32072 = cljs.core.async.timeout.call(null,(300));
var state_32080__$1 = (function (){var statearr_32082 = state_32080;
(statearr_32082[(8)] = inst_32070);

(statearr_32082[(7)] = inst_32065__$1);

(statearr_32082[(9)] = inst_32071);

return statearr_32082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32080__$1,(2),inst_32072);
} else {
if((state_val_32081 === (2))){
var inst_32065 = (state_32080[(7)]);
var inst_32074 = (state_32080[(2)]);
var inst_32075 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32076 = ["auto"];
var inst_32077 = cljs.core.PersistentHashMap.fromArrays(inst_32075,inst_32076);
var inst_32078 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32065,inst_32077);
var state_32080__$1 = (function (){var statearr_32083 = state_32080;
(statearr_32083[(10)] = inst_32074);

return statearr_32083;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32080__$1,inst_32078);
} else {
return null;
}
}
});})(c__20107__auto__))
;
return ((function (switch__19995__auto__,c__20107__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19996__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19996__auto____0 = (function (){
var statearr_32087 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32087[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19996__auto__);

(statearr_32087[(1)] = (1));

return statearr_32087;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19996__auto____1 = (function (state_32080){
while(true){
var ret_value__19997__auto__ = (function (){try{while(true){
var result__19998__auto__ = switch__19995__auto__.call(null,state_32080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19998__auto__;
}
break;
}
}catch (e32088){if((e32088 instanceof Object)){
var ex__19999__auto__ = e32088;
var statearr_32089_32091 = state_32080;
(statearr_32089_32091[(5)] = ex__19999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32092 = state_32080;
state_32080 = G__32092;
continue;
} else {
return ret_value__19997__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19996__auto__ = function(state_32080){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19996__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19996__auto____1.call(this,state_32080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19996__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19996__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19996__auto__;
})()
;})(switch__19995__auto__,c__20107__auto__))
})();
var state__20109__auto__ = (function (){var statearr_32090 = f__20108__auto__.call(null);
(statearr_32090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20107__auto__);

return statearr_32090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20109__auto__);
});})(c__20107__auto__))
);

return c__20107__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__32094 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__32094,(0),null);
var ln = cljs.core.nth.call(null,vec__32094,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__32097 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__32097,(0),null);
var file_line = cljs.core.nth.call(null,vec__32097,(1),null);
var file_column = cljs.core.nth.call(null,vec__32097,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__32097,file_name,file_line,file_column){
return (function (p1__32095_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__32095_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__32097,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16840__auto__ = file_line;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
var and__16828__auto__ = cause;
if(cljs.core.truth_(and__16828__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16828__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__32100 = figwheel.client.heads_up.ensure_container.call(null);
var map__32100__$1 = ((((!((map__32100 == null)))?((((map__32100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32100):map__32100);
var content_area_el = cljs.core.get.call(null,map__32100__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20107__auto__){
return (function (){
var f__20108__auto__ = (function (){var switch__19995__auto__ = ((function (c__20107__auto__){
return (function (state_32148){
var state_val_32149 = (state_32148[(1)]);
if((state_val_32149 === (1))){
var inst_32131 = (state_32148[(7)]);
var inst_32131__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32132 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32133 = ["0.0"];
var inst_32134 = cljs.core.PersistentHashMap.fromArrays(inst_32132,inst_32133);
var inst_32135 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32131__$1,inst_32134);
var inst_32136 = cljs.core.async.timeout.call(null,(300));
var state_32148__$1 = (function (){var statearr_32150 = state_32148;
(statearr_32150[(7)] = inst_32131__$1);

(statearr_32150[(8)] = inst_32135);

return statearr_32150;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32148__$1,(2),inst_32136);
} else {
if((state_val_32149 === (2))){
var inst_32131 = (state_32148[(7)]);
var inst_32138 = (state_32148[(2)]);
var inst_32139 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_32140 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_32141 = cljs.core.PersistentHashMap.fromArrays(inst_32139,inst_32140);
var inst_32142 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32131,inst_32141);
var inst_32143 = cljs.core.async.timeout.call(null,(200));
var state_32148__$1 = (function (){var statearr_32151 = state_32148;
(statearr_32151[(9)] = inst_32142);

(statearr_32151[(10)] = inst_32138);

return statearr_32151;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32148__$1,(3),inst_32143);
} else {
if((state_val_32149 === (3))){
var inst_32131 = (state_32148[(7)]);
var inst_32145 = (state_32148[(2)]);
var inst_32146 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32131,"");
var state_32148__$1 = (function (){var statearr_32152 = state_32148;
(statearr_32152[(11)] = inst_32145);

return statearr_32152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32148__$1,inst_32146);
} else {
return null;
}
}
}
});})(c__20107__auto__))
;
return ((function (switch__19995__auto__,c__20107__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19996__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19996__auto____0 = (function (){
var statearr_32156 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32156[(0)] = figwheel$client$heads_up$clear_$_state_machine__19996__auto__);

(statearr_32156[(1)] = (1));

return statearr_32156;
});
var figwheel$client$heads_up$clear_$_state_machine__19996__auto____1 = (function (state_32148){
while(true){
var ret_value__19997__auto__ = (function (){try{while(true){
var result__19998__auto__ = switch__19995__auto__.call(null,state_32148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19998__auto__;
}
break;
}
}catch (e32157){if((e32157 instanceof Object)){
var ex__19999__auto__ = e32157;
var statearr_32158_32160 = state_32148;
(statearr_32158_32160[(5)] = ex__19999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32161 = state_32148;
state_32148 = G__32161;
continue;
} else {
return ret_value__19997__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19996__auto__ = function(state_32148){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19996__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19996__auto____1.call(this,state_32148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19996__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19996__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19996__auto__;
})()
;})(switch__19995__auto__,c__20107__auto__))
})();
var state__20109__auto__ = (function (){var statearr_32159 = f__20108__auto__.call(null);
(statearr_32159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20107__auto__);

return statearr_32159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20109__auto__);
});})(c__20107__auto__))
);

return c__20107__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20107__auto__){
return (function (){
var f__20108__auto__ = (function (){var switch__19995__auto__ = ((function (c__20107__auto__){
return (function (state_32193){
var state_val_32194 = (state_32193[(1)]);
if((state_val_32194 === (1))){
var inst_32183 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_32193__$1 = state_32193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32193__$1,(2),inst_32183);
} else {
if((state_val_32194 === (2))){
var inst_32185 = (state_32193[(2)]);
var inst_32186 = cljs.core.async.timeout.call(null,(400));
var state_32193__$1 = (function (){var statearr_32195 = state_32193;
(statearr_32195[(7)] = inst_32185);

return statearr_32195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32193__$1,(3),inst_32186);
} else {
if((state_val_32194 === (3))){
var inst_32188 = (state_32193[(2)]);
var inst_32189 = figwheel.client.heads_up.clear.call(null);
var state_32193__$1 = (function (){var statearr_32196 = state_32193;
(statearr_32196[(8)] = inst_32188);

return statearr_32196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32193__$1,(4),inst_32189);
} else {
if((state_val_32194 === (4))){
var inst_32191 = (state_32193[(2)]);
var state_32193__$1 = state_32193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32193__$1,inst_32191);
} else {
return null;
}
}
}
}
});})(c__20107__auto__))
;
return ((function (switch__19995__auto__,c__20107__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19996__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19996__auto____0 = (function (){
var statearr_32200 = [null,null,null,null,null,null,null,null,null];
(statearr_32200[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19996__auto__);

(statearr_32200[(1)] = (1));

return statearr_32200;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19996__auto____1 = (function (state_32193){
while(true){
var ret_value__19997__auto__ = (function (){try{while(true){
var result__19998__auto__ = switch__19995__auto__.call(null,state_32193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19998__auto__;
}
break;
}
}catch (e32201){if((e32201 instanceof Object)){
var ex__19999__auto__ = e32201;
var statearr_32202_32204 = state_32193;
(statearr_32202_32204[(5)] = ex__19999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32205 = state_32193;
state_32193 = G__32205;
continue;
} else {
return ret_value__19997__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19996__auto__ = function(state_32193){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19996__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19996__auto____1.call(this,state_32193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19996__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19996__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19996__auto__;
})()
;})(switch__19995__auto__,c__20107__auto__))
})();
var state__20109__auto__ = (function (){var statearr_32203 = f__20108__auto__.call(null);
(statearr_32203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20107__auto__);

return statearr_32203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20109__auto__);
});})(c__20107__auto__))
);

return c__20107__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map