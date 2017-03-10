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
var len__17898__auto___43391 = arguments.length;
var i__17899__auto___43392 = (0);
while(true){
if((i__17899__auto___43392 < len__17898__auto___43391)){
args__17905__auto__.push((arguments[i__17899__auto___43392]));

var G__43393 = (i__17899__auto___43392 + (1));
i__17899__auto___43392 = G__43393;
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
var seq__43383_43394 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__43384_43395 = null;
var count__43385_43396 = (0);
var i__43386_43397 = (0);
while(true){
if((i__43386_43397 < count__43385_43396)){
var k_43398 = cljs.core._nth.call(null,chunk__43384_43395,i__43386_43397);
e.setAttribute(cljs.core.name.call(null,k_43398),cljs.core.get.call(null,attrs,k_43398));

var G__43399 = seq__43383_43394;
var G__43400 = chunk__43384_43395;
var G__43401 = count__43385_43396;
var G__43402 = (i__43386_43397 + (1));
seq__43383_43394 = G__43399;
chunk__43384_43395 = G__43400;
count__43385_43396 = G__43401;
i__43386_43397 = G__43402;
continue;
} else {
var temp__4425__auto___43403 = cljs.core.seq.call(null,seq__43383_43394);
if(temp__4425__auto___43403){
var seq__43383_43404__$1 = temp__4425__auto___43403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43383_43404__$1)){
var c__17643__auto___43405 = cljs.core.chunk_first.call(null,seq__43383_43404__$1);
var G__43406 = cljs.core.chunk_rest.call(null,seq__43383_43404__$1);
var G__43407 = c__17643__auto___43405;
var G__43408 = cljs.core.count.call(null,c__17643__auto___43405);
var G__43409 = (0);
seq__43383_43394 = G__43406;
chunk__43384_43395 = G__43407;
count__43385_43396 = G__43408;
i__43386_43397 = G__43409;
continue;
} else {
var k_43410 = cljs.core.first.call(null,seq__43383_43404__$1);
e.setAttribute(cljs.core.name.call(null,k_43410),cljs.core.get.call(null,attrs,k_43410));

var G__43411 = cljs.core.next.call(null,seq__43383_43404__$1);
var G__43412 = null;
var G__43413 = (0);
var G__43414 = (0);
seq__43383_43394 = G__43411;
chunk__43384_43395 = G__43412;
count__43385_43396 = G__43413;
i__43386_43397 = G__43414;
continue;
}
} else {
}
}
break;
}

var seq__43387_43415 = cljs.core.seq.call(null,children);
var chunk__43388_43416 = null;
var count__43389_43417 = (0);
var i__43390_43418 = (0);
while(true){
if((i__43390_43418 < count__43389_43417)){
var ch_43419 = cljs.core._nth.call(null,chunk__43388_43416,i__43390_43418);
e.appendChild(ch_43419);

var G__43420 = seq__43387_43415;
var G__43421 = chunk__43388_43416;
var G__43422 = count__43389_43417;
var G__43423 = (i__43390_43418 + (1));
seq__43387_43415 = G__43420;
chunk__43388_43416 = G__43421;
count__43389_43417 = G__43422;
i__43390_43418 = G__43423;
continue;
} else {
var temp__4425__auto___43424 = cljs.core.seq.call(null,seq__43387_43415);
if(temp__4425__auto___43424){
var seq__43387_43425__$1 = temp__4425__auto___43424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43387_43425__$1)){
var c__17643__auto___43426 = cljs.core.chunk_first.call(null,seq__43387_43425__$1);
var G__43427 = cljs.core.chunk_rest.call(null,seq__43387_43425__$1);
var G__43428 = c__17643__auto___43426;
var G__43429 = cljs.core.count.call(null,c__17643__auto___43426);
var G__43430 = (0);
seq__43387_43415 = G__43427;
chunk__43388_43416 = G__43428;
count__43389_43417 = G__43429;
i__43390_43418 = G__43430;
continue;
} else {
var ch_43431 = cljs.core.first.call(null,seq__43387_43425__$1);
e.appendChild(ch_43431);

var G__43432 = cljs.core.next.call(null,seq__43387_43425__$1);
var G__43433 = null;
var G__43434 = (0);
var G__43435 = (0);
seq__43387_43415 = G__43432;
chunk__43388_43416 = G__43433;
count__43389_43417 = G__43434;
i__43390_43418 = G__43435;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq43380){
var G__43381 = cljs.core.first.call(null,seq43380);
var seq43380__$1 = cljs.core.next.call(null,seq43380);
var G__43382 = cljs.core.first.call(null,seq43380__$1);
var seq43380__$2 = cljs.core.next.call(null,seq43380__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__43381,G__43382,seq43380__$2);
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
var el_43436 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_43436.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_43436.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_43436.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_43436);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__43437,st_map){
var map__43442 = p__43437;
var map__43442__$1 = ((((!((map__43442 == null)))?((((map__43442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43442):map__43442);
var container_el = cljs.core.get.call(null,map__43442__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__43442,map__43442__$1,container_el){
return (function (p__43444){
var vec__43445 = p__43444;
var k = cljs.core.nth.call(null,vec__43445,(0),null);
var v = cljs.core.nth.call(null,vec__43445,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__43442,map__43442__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__43446,dom_str){
var map__43449 = p__43446;
var map__43449__$1 = ((((!((map__43449 == null)))?((((map__43449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43449):map__43449);
var c = map__43449__$1;
var content_area_el = cljs.core.get.call(null,map__43449__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__43451){
var map__43454 = p__43451;
var map__43454__$1 = ((((!((map__43454 == null)))?((((map__43454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43454):map__43454);
var content_area_el = cljs.core.get.call(null,map__43454__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18865__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto__){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto__){
return (function (state_43497){
var state_val_43498 = (state_43497[(1)]);
if((state_val_43498 === (1))){
var inst_43482 = (state_43497[(7)]);
var inst_43482__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_43483 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_43484 = ["10px","10px","100%","68px","1.0"];
var inst_43485 = cljs.core.PersistentHashMap.fromArrays(inst_43483,inst_43484);
var inst_43486 = cljs.core.merge.call(null,inst_43485,style);
var inst_43487 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_43482__$1,inst_43486);
var inst_43488 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_43482__$1,msg);
var inst_43489 = cljs.core.async.timeout.call(null,(300));
var state_43497__$1 = (function (){var statearr_43499 = state_43497;
(statearr_43499[(8)] = inst_43488);

(statearr_43499[(9)] = inst_43487);

(statearr_43499[(7)] = inst_43482__$1);

return statearr_43499;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43497__$1,(2),inst_43489);
} else {
if((state_val_43498 === (2))){
var inst_43482 = (state_43497[(7)]);
var inst_43491 = (state_43497[(2)]);
var inst_43492 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_43493 = ["auto"];
var inst_43494 = cljs.core.PersistentHashMap.fromArrays(inst_43492,inst_43493);
var inst_43495 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_43482,inst_43494);
var state_43497__$1 = (function (){var statearr_43500 = state_43497;
(statearr_43500[(10)] = inst_43491);

return statearr_43500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43497__$1,inst_43495);
} else {
return null;
}
}
});})(c__18865__auto__))
;
return ((function (switch__18844__auto__,c__18865__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18845__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18845__auto____0 = (function (){
var statearr_43504 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43504[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18845__auto__);

(statearr_43504[(1)] = (1));

return statearr_43504;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18845__auto____1 = (function (state_43497){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_43497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e43505){if((e43505 instanceof Object)){
var ex__18848__auto__ = e43505;
var statearr_43506_43508 = state_43497;
(statearr_43506_43508[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43509 = state_43497;
state_43497 = G__43509;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18845__auto__ = function(state_43497){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18845__auto____1.call(this,state_43497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18845__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18845__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__))
})();
var state__18867__auto__ = (function (){var statearr_43507 = f__18866__auto__.call(null);
(statearr_43507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_43507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto__))
);

return c__18865__auto__;
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
var vec__43511 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__43511,(0),null);
var ln = cljs.core.nth.call(null,vec__43511,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__43514 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__43514,(0),null);
var file_line = cljs.core.nth.call(null,vec__43514,(1),null);
var file_column = cljs.core.nth.call(null,vec__43514,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__43514,file_name,file_line,file_column){
return (function (p1__43512_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__43512_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__43514,file_name,file_line,file_column))
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
var map__43517 = figwheel.client.heads_up.ensure_container.call(null);
var map__43517__$1 = ((((!((map__43517 == null)))?((((map__43517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43517):map__43517);
var content_area_el = cljs.core.get.call(null,map__43517__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18865__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto__){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto__){
return (function (state_43565){
var state_val_43566 = (state_43565[(1)]);
if((state_val_43566 === (1))){
var inst_43548 = (state_43565[(7)]);
var inst_43548__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_43549 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_43550 = ["0.0"];
var inst_43551 = cljs.core.PersistentHashMap.fromArrays(inst_43549,inst_43550);
var inst_43552 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_43548__$1,inst_43551);
var inst_43553 = cljs.core.async.timeout.call(null,(300));
var state_43565__$1 = (function (){var statearr_43567 = state_43565;
(statearr_43567[(7)] = inst_43548__$1);

(statearr_43567[(8)] = inst_43552);

return statearr_43567;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43565__$1,(2),inst_43553);
} else {
if((state_val_43566 === (2))){
var inst_43548 = (state_43565[(7)]);
var inst_43555 = (state_43565[(2)]);
var inst_43556 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_43557 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_43558 = cljs.core.PersistentHashMap.fromArrays(inst_43556,inst_43557);
var inst_43559 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_43548,inst_43558);
var inst_43560 = cljs.core.async.timeout.call(null,(200));
var state_43565__$1 = (function (){var statearr_43568 = state_43565;
(statearr_43568[(9)] = inst_43555);

(statearr_43568[(10)] = inst_43559);

return statearr_43568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43565__$1,(3),inst_43560);
} else {
if((state_val_43566 === (3))){
var inst_43548 = (state_43565[(7)]);
var inst_43562 = (state_43565[(2)]);
var inst_43563 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_43548,"");
var state_43565__$1 = (function (){var statearr_43569 = state_43565;
(statearr_43569[(11)] = inst_43562);

return statearr_43569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43565__$1,inst_43563);
} else {
return null;
}
}
}
});})(c__18865__auto__))
;
return ((function (switch__18844__auto__,c__18865__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18845__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18845__auto____0 = (function (){
var statearr_43573 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43573[(0)] = figwheel$client$heads_up$clear_$_state_machine__18845__auto__);

(statearr_43573[(1)] = (1));

return statearr_43573;
});
var figwheel$client$heads_up$clear_$_state_machine__18845__auto____1 = (function (state_43565){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_43565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e43574){if((e43574 instanceof Object)){
var ex__18848__auto__ = e43574;
var statearr_43575_43577 = state_43565;
(statearr_43575_43577[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43578 = state_43565;
state_43565 = G__43578;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18845__auto__ = function(state_43565){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18845__auto____1.call(this,state_43565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18845__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18845__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__))
})();
var state__18867__auto__ = (function (){var statearr_43576 = f__18866__auto__.call(null);
(statearr_43576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_43576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto__))
);

return c__18865__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18865__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto__){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto__){
return (function (state_43610){
var state_val_43611 = (state_43610[(1)]);
if((state_val_43611 === (1))){
var inst_43600 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_43610__$1 = state_43610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43610__$1,(2),inst_43600);
} else {
if((state_val_43611 === (2))){
var inst_43602 = (state_43610[(2)]);
var inst_43603 = cljs.core.async.timeout.call(null,(400));
var state_43610__$1 = (function (){var statearr_43612 = state_43610;
(statearr_43612[(7)] = inst_43602);

return statearr_43612;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43610__$1,(3),inst_43603);
} else {
if((state_val_43611 === (3))){
var inst_43605 = (state_43610[(2)]);
var inst_43606 = figwheel.client.heads_up.clear.call(null);
var state_43610__$1 = (function (){var statearr_43613 = state_43610;
(statearr_43613[(8)] = inst_43605);

return statearr_43613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43610__$1,(4),inst_43606);
} else {
if((state_val_43611 === (4))){
var inst_43608 = (state_43610[(2)]);
var state_43610__$1 = state_43610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43610__$1,inst_43608);
} else {
return null;
}
}
}
}
});})(c__18865__auto__))
;
return ((function (switch__18844__auto__,c__18865__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18845__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18845__auto____0 = (function (){
var statearr_43617 = [null,null,null,null,null,null,null,null,null];
(statearr_43617[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18845__auto__);

(statearr_43617[(1)] = (1));

return statearr_43617;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18845__auto____1 = (function (state_43610){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_43610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e43618){if((e43618 instanceof Object)){
var ex__18848__auto__ = e43618;
var statearr_43619_43621 = state_43610;
(statearr_43619_43621[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43622 = state_43610;
state_43610 = G__43622;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18845__auto__ = function(state_43610){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18845__auto____1.call(this,state_43610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18845__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18845__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__))
})();
var state__18867__auto__ = (function (){var statearr_43620 = f__18866__auto__.call(null);
(statearr_43620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_43620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto__))
);

return c__18865__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map