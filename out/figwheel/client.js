// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26293 = cljs.core._EQ_;
var expr__26294 = (function (){var or__16840__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26293.call(null,"true",expr__26294))){
return true;
} else {
if(cljs.core.truth_(pred__26293.call(null,"false",expr__26294))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26294)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26296__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26296 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26297__i = 0, G__26297__a = new Array(arguments.length -  0);
while (G__26297__i < G__26297__a.length) {G__26297__a[G__26297__i] = arguments[G__26297__i + 0]; ++G__26297__i;}
  args = new cljs.core.IndexedSeq(G__26297__a,0);
} 
return G__26296__delegate.call(this,args);};
G__26296.cljs$lang$maxFixedArity = 0;
G__26296.cljs$lang$applyTo = (function (arglist__26298){
var args = cljs.core.seq(arglist__26298);
return G__26296__delegate(args);
});
G__26296.cljs$core$IFn$_invoke$arity$variadic = G__26296__delegate;
return G__26296;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26299){
var map__26302 = p__26299;
var map__26302__$1 = ((((!((map__26302 == null)))?((((map__26302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26302):map__26302);
var message = cljs.core.get.call(null,map__26302__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26302__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16840__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16828__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16828__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16828__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19123__auto___26464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19123__auto___26464,ch){
return (function (){
var f__19124__auto__ = (function (){var switch__19102__auto__ = ((function (c__19123__auto___26464,ch){
return (function (state_26433){
var state_val_26434 = (state_26433[(1)]);
if((state_val_26434 === (7))){
var inst_26429 = (state_26433[(2)]);
var state_26433__$1 = state_26433;
var statearr_26435_26465 = state_26433__$1;
(statearr_26435_26465[(2)] = inst_26429);

(statearr_26435_26465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (1))){
var state_26433__$1 = state_26433;
var statearr_26436_26466 = state_26433__$1;
(statearr_26436_26466[(2)] = null);

(statearr_26436_26466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (4))){
var inst_26386 = (state_26433[(7)]);
var inst_26386__$1 = (state_26433[(2)]);
var state_26433__$1 = (function (){var statearr_26437 = state_26433;
(statearr_26437[(7)] = inst_26386__$1);

return statearr_26437;
})();
if(cljs.core.truth_(inst_26386__$1)){
var statearr_26438_26467 = state_26433__$1;
(statearr_26438_26467[(1)] = (5));

} else {
var statearr_26439_26468 = state_26433__$1;
(statearr_26439_26468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (15))){
var inst_26393 = (state_26433[(8)]);
var inst_26408 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26393);
var inst_26409 = cljs.core.first.call(null,inst_26408);
var inst_26410 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26409);
var inst_26411 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26410)].join('');
var inst_26412 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26411);
var state_26433__$1 = state_26433;
var statearr_26440_26469 = state_26433__$1;
(statearr_26440_26469[(2)] = inst_26412);

(statearr_26440_26469[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (13))){
var inst_26417 = (state_26433[(2)]);
var state_26433__$1 = state_26433;
var statearr_26441_26470 = state_26433__$1;
(statearr_26441_26470[(2)] = inst_26417);

(statearr_26441_26470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (6))){
var state_26433__$1 = state_26433;
var statearr_26442_26471 = state_26433__$1;
(statearr_26442_26471[(2)] = null);

(statearr_26442_26471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (17))){
var inst_26415 = (state_26433[(2)]);
var state_26433__$1 = state_26433;
var statearr_26443_26472 = state_26433__$1;
(statearr_26443_26472[(2)] = inst_26415);

(statearr_26443_26472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (3))){
var inst_26431 = (state_26433[(2)]);
var state_26433__$1 = state_26433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26433__$1,inst_26431);
} else {
if((state_val_26434 === (12))){
var inst_26392 = (state_26433[(9)]);
var inst_26406 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26392,opts);
var state_26433__$1 = state_26433;
if(cljs.core.truth_(inst_26406)){
var statearr_26444_26473 = state_26433__$1;
(statearr_26444_26473[(1)] = (15));

} else {
var statearr_26445_26474 = state_26433__$1;
(statearr_26445_26474[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (2))){
var state_26433__$1 = state_26433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26433__$1,(4),ch);
} else {
if((state_val_26434 === (11))){
var inst_26393 = (state_26433[(8)]);
var inst_26398 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26399 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26393);
var inst_26400 = cljs.core.async.timeout.call(null,(1000));
var inst_26401 = [inst_26399,inst_26400];
var inst_26402 = (new cljs.core.PersistentVector(null,2,(5),inst_26398,inst_26401,null));
var state_26433__$1 = state_26433;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26433__$1,(14),inst_26402);
} else {
if((state_val_26434 === (9))){
var inst_26393 = (state_26433[(8)]);
var inst_26419 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26420 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26393);
var inst_26421 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26420);
var inst_26422 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26421)].join('');
var inst_26423 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26422);
var state_26433__$1 = (function (){var statearr_26446 = state_26433;
(statearr_26446[(10)] = inst_26419);

return statearr_26446;
})();
var statearr_26447_26475 = state_26433__$1;
(statearr_26447_26475[(2)] = inst_26423);

(statearr_26447_26475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (5))){
var inst_26386 = (state_26433[(7)]);
var inst_26388 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26389 = (new cljs.core.PersistentArrayMap(null,2,inst_26388,null));
var inst_26390 = (new cljs.core.PersistentHashSet(null,inst_26389,null));
var inst_26391 = figwheel.client.focus_msgs.call(null,inst_26390,inst_26386);
var inst_26392 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26391);
var inst_26393 = cljs.core.first.call(null,inst_26391);
var inst_26394 = figwheel.client.autoload_QMARK_.call(null);
var state_26433__$1 = (function (){var statearr_26448 = state_26433;
(statearr_26448[(8)] = inst_26393);

(statearr_26448[(9)] = inst_26392);

return statearr_26448;
})();
if(cljs.core.truth_(inst_26394)){
var statearr_26449_26476 = state_26433__$1;
(statearr_26449_26476[(1)] = (8));

} else {
var statearr_26450_26477 = state_26433__$1;
(statearr_26450_26477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (14))){
var inst_26404 = (state_26433[(2)]);
var state_26433__$1 = state_26433;
var statearr_26451_26478 = state_26433__$1;
(statearr_26451_26478[(2)] = inst_26404);

(statearr_26451_26478[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (16))){
var state_26433__$1 = state_26433;
var statearr_26452_26479 = state_26433__$1;
(statearr_26452_26479[(2)] = null);

(statearr_26452_26479[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (10))){
var inst_26425 = (state_26433[(2)]);
var state_26433__$1 = (function (){var statearr_26453 = state_26433;
(statearr_26453[(11)] = inst_26425);

return statearr_26453;
})();
var statearr_26454_26480 = state_26433__$1;
(statearr_26454_26480[(2)] = null);

(statearr_26454_26480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (8))){
var inst_26392 = (state_26433[(9)]);
var inst_26396 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26392,opts);
var state_26433__$1 = state_26433;
if(cljs.core.truth_(inst_26396)){
var statearr_26455_26481 = state_26433__$1;
(statearr_26455_26481[(1)] = (11));

} else {
var statearr_26456_26482 = state_26433__$1;
(statearr_26456_26482[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19123__auto___26464,ch))
;
return ((function (switch__19102__auto__,c__19123__auto___26464,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19103__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19103__auto____0 = (function (){
var statearr_26460 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26460[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19103__auto__);

(statearr_26460[(1)] = (1));

return statearr_26460;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19103__auto____1 = (function (state_26433){
while(true){
var ret_value__19104__auto__ = (function (){try{while(true){
var result__19105__auto__ = switch__19102__auto__.call(null,state_26433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19105__auto__;
}
break;
}
}catch (e26461){if((e26461 instanceof Object)){
var ex__19106__auto__ = e26461;
var statearr_26462_26483 = state_26433;
(statearr_26462_26483[(5)] = ex__19106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26484 = state_26433;
state_26433 = G__26484;
continue;
} else {
return ret_value__19104__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19103__auto__ = function(state_26433){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19103__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19103__auto____1.call(this,state_26433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19103__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19103__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19103__auto__;
})()
;})(switch__19102__auto__,c__19123__auto___26464,ch))
})();
var state__19125__auto__ = (function (){var statearr_26463 = f__19124__auto__.call(null);
(statearr_26463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19123__auto___26464);

return statearr_26463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19125__auto__);
});})(c__19123__auto___26464,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26485_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26485_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26492 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26492){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26490 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26491 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26490,_STAR_print_newline_STAR_26491,base_path_26492){
return (function() { 
var G__26493__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26494__i = 0, G__26494__a = new Array(arguments.length -  0);
while (G__26494__i < G__26494__a.length) {G__26494__a[G__26494__i] = arguments[G__26494__i + 0]; ++G__26494__i;}
  args = new cljs.core.IndexedSeq(G__26494__a,0);
} 
return G__26493__delegate.call(this,args);};
G__26493.cljs$lang$maxFixedArity = 0;
G__26493.cljs$lang$applyTo = (function (arglist__26495){
var args = cljs.core.seq(arglist__26495);
return G__26493__delegate(args);
});
G__26493.cljs$core$IFn$_invoke$arity$variadic = G__26493__delegate;
return G__26493;
})()
;})(_STAR_print_fn_STAR_26490,_STAR_print_newline_STAR_26491,base_path_26492))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26491;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26490;
}}catch (e26489){if((e26489 instanceof Error)){
var e = e26489;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26492], null));
} else {
var e = e26489;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26492))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26496){
var map__26503 = p__26496;
var map__26503__$1 = ((((!((map__26503 == null)))?((((map__26503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26503):map__26503);
var opts = map__26503__$1;
var build_id = cljs.core.get.call(null,map__26503__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26503,map__26503__$1,opts,build_id){
return (function (p__26505){
var vec__26506 = p__26505;
var map__26507 = cljs.core.nth.call(null,vec__26506,(0),null);
var map__26507__$1 = ((((!((map__26507 == null)))?((((map__26507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26507):map__26507);
var msg = map__26507__$1;
var msg_name = cljs.core.get.call(null,map__26507__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26506,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26506,map__26507,map__26507__$1,msg,msg_name,_,map__26503,map__26503__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26506,map__26507,map__26507__$1,msg,msg_name,_,map__26503,map__26503__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26503,map__26503__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26513){
var vec__26514 = p__26513;
var map__26515 = cljs.core.nth.call(null,vec__26514,(0),null);
var map__26515__$1 = ((((!((map__26515 == null)))?((((map__26515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26515):map__26515);
var msg = map__26515__$1;
var msg_name = cljs.core.get.call(null,map__26515__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26514,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26517){
var map__26527 = p__26517;
var map__26527__$1 = ((((!((map__26527 == null)))?((((map__26527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26527):map__26527);
var on_compile_warning = cljs.core.get.call(null,map__26527__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26527__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26527,map__26527__$1,on_compile_warning,on_compile_fail){
return (function (p__26529){
var vec__26530 = p__26529;
var map__26531 = cljs.core.nth.call(null,vec__26530,(0),null);
var map__26531__$1 = ((((!((map__26531 == null)))?((((map__26531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26531):map__26531);
var msg = map__26531__$1;
var msg_name = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26530,(1));
var pred__26533 = cljs.core._EQ_;
var expr__26534 = msg_name;
if(cljs.core.truth_(pred__26533.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26534))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26533.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26534))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26527,map__26527__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19123__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19124__auto__ = (function (){var switch__19102__auto__ = ((function (c__19123__auto__,msg_hist,msg_names,msg){
return (function (state_26750){
var state_val_26751 = (state_26750[(1)]);
if((state_val_26751 === (7))){
var inst_26674 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
if(cljs.core.truth_(inst_26674)){
var statearr_26752_26798 = state_26750__$1;
(statearr_26752_26798[(1)] = (8));

} else {
var statearr_26753_26799 = state_26750__$1;
(statearr_26753_26799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (20))){
var inst_26744 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26754_26800 = state_26750__$1;
(statearr_26754_26800[(2)] = inst_26744);

(statearr_26754_26800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (27))){
var inst_26740 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26755_26801 = state_26750__$1;
(statearr_26755_26801[(2)] = inst_26740);

(statearr_26755_26801[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (1))){
var inst_26667 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26750__$1 = state_26750;
if(cljs.core.truth_(inst_26667)){
var statearr_26756_26802 = state_26750__$1;
(statearr_26756_26802[(1)] = (2));

} else {
var statearr_26757_26803 = state_26750__$1;
(statearr_26757_26803[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (24))){
var inst_26742 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26758_26804 = state_26750__$1;
(statearr_26758_26804[(2)] = inst_26742);

(statearr_26758_26804[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (4))){
var inst_26748 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26750__$1,inst_26748);
} else {
if((state_val_26751 === (15))){
var inst_26746 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26759_26805 = state_26750__$1;
(statearr_26759_26805[(2)] = inst_26746);

(statearr_26759_26805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (21))){
var inst_26705 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26760_26806 = state_26750__$1;
(statearr_26760_26806[(2)] = inst_26705);

(statearr_26760_26806[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (31))){
var inst_26729 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26750__$1 = state_26750;
if(cljs.core.truth_(inst_26729)){
var statearr_26761_26807 = state_26750__$1;
(statearr_26761_26807[(1)] = (34));

} else {
var statearr_26762_26808 = state_26750__$1;
(statearr_26762_26808[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (32))){
var inst_26738 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26763_26809 = state_26750__$1;
(statearr_26763_26809[(2)] = inst_26738);

(statearr_26763_26809[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (33))){
var inst_26727 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26764_26810 = state_26750__$1;
(statearr_26764_26810[(2)] = inst_26727);

(statearr_26764_26810[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (13))){
var inst_26688 = figwheel.client.heads_up.clear.call(null);
var state_26750__$1 = state_26750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26750__$1,(16),inst_26688);
} else {
if((state_val_26751 === (22))){
var inst_26709 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26710 = figwheel.client.heads_up.append_message.call(null,inst_26709);
var state_26750__$1 = state_26750;
var statearr_26765_26811 = state_26750__$1;
(statearr_26765_26811[(2)] = inst_26710);

(statearr_26765_26811[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (36))){
var inst_26736 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26766_26812 = state_26750__$1;
(statearr_26766_26812[(2)] = inst_26736);

(statearr_26766_26812[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (29))){
var inst_26720 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26767_26813 = state_26750__$1;
(statearr_26767_26813[(2)] = inst_26720);

(statearr_26767_26813[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (6))){
var inst_26669 = (state_26750[(7)]);
var state_26750__$1 = state_26750;
var statearr_26768_26814 = state_26750__$1;
(statearr_26768_26814[(2)] = inst_26669);

(statearr_26768_26814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (28))){
var inst_26716 = (state_26750[(2)]);
var inst_26717 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26718 = figwheel.client.heads_up.display_warning.call(null,inst_26717);
var state_26750__$1 = (function (){var statearr_26769 = state_26750;
(statearr_26769[(8)] = inst_26716);

return statearr_26769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26750__$1,(29),inst_26718);
} else {
if((state_val_26751 === (25))){
var inst_26714 = figwheel.client.heads_up.clear.call(null);
var state_26750__$1 = state_26750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26750__$1,(28),inst_26714);
} else {
if((state_val_26751 === (34))){
var inst_26731 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26750__$1 = state_26750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26750__$1,(37),inst_26731);
} else {
if((state_val_26751 === (17))){
var inst_26696 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26770_26815 = state_26750__$1;
(statearr_26770_26815[(2)] = inst_26696);

(statearr_26770_26815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (3))){
var inst_26686 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26750__$1 = state_26750;
if(cljs.core.truth_(inst_26686)){
var statearr_26771_26816 = state_26750__$1;
(statearr_26771_26816[(1)] = (13));

} else {
var statearr_26772_26817 = state_26750__$1;
(statearr_26772_26817[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (12))){
var inst_26682 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26773_26818 = state_26750__$1;
(statearr_26773_26818[(2)] = inst_26682);

(statearr_26773_26818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (2))){
var inst_26669 = (state_26750[(7)]);
var inst_26669__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26750__$1 = (function (){var statearr_26774 = state_26750;
(statearr_26774[(7)] = inst_26669__$1);

return statearr_26774;
})();
if(cljs.core.truth_(inst_26669__$1)){
var statearr_26775_26819 = state_26750__$1;
(statearr_26775_26819[(1)] = (5));

} else {
var statearr_26776_26820 = state_26750__$1;
(statearr_26776_26820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (23))){
var inst_26712 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26750__$1 = state_26750;
if(cljs.core.truth_(inst_26712)){
var statearr_26777_26821 = state_26750__$1;
(statearr_26777_26821[(1)] = (25));

} else {
var statearr_26778_26822 = state_26750__$1;
(statearr_26778_26822[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (35))){
var state_26750__$1 = state_26750;
var statearr_26779_26823 = state_26750__$1;
(statearr_26779_26823[(2)] = null);

(statearr_26779_26823[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (19))){
var inst_26707 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26750__$1 = state_26750;
if(cljs.core.truth_(inst_26707)){
var statearr_26780_26824 = state_26750__$1;
(statearr_26780_26824[(1)] = (22));

} else {
var statearr_26781_26825 = state_26750__$1;
(statearr_26781_26825[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (11))){
var inst_26678 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26782_26826 = state_26750__$1;
(statearr_26782_26826[(2)] = inst_26678);

(statearr_26782_26826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (9))){
var inst_26680 = figwheel.client.heads_up.clear.call(null);
var state_26750__$1 = state_26750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26750__$1,(12),inst_26680);
} else {
if((state_val_26751 === (5))){
var inst_26671 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26750__$1 = state_26750;
var statearr_26783_26827 = state_26750__$1;
(statearr_26783_26827[(2)] = inst_26671);

(statearr_26783_26827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (14))){
var inst_26698 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26750__$1 = state_26750;
if(cljs.core.truth_(inst_26698)){
var statearr_26784_26828 = state_26750__$1;
(statearr_26784_26828[(1)] = (18));

} else {
var statearr_26785_26829 = state_26750__$1;
(statearr_26785_26829[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (26))){
var inst_26722 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26750__$1 = state_26750;
if(cljs.core.truth_(inst_26722)){
var statearr_26786_26830 = state_26750__$1;
(statearr_26786_26830[(1)] = (30));

} else {
var statearr_26787_26831 = state_26750__$1;
(statearr_26787_26831[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (16))){
var inst_26690 = (state_26750[(2)]);
var inst_26691 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26692 = figwheel.client.format_messages.call(null,inst_26691);
var inst_26693 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26694 = figwheel.client.heads_up.display_error.call(null,inst_26692,inst_26693);
var state_26750__$1 = (function (){var statearr_26788 = state_26750;
(statearr_26788[(9)] = inst_26690);

return statearr_26788;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26750__$1,(17),inst_26694);
} else {
if((state_val_26751 === (30))){
var inst_26724 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26725 = figwheel.client.heads_up.display_warning.call(null,inst_26724);
var state_26750__$1 = state_26750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26750__$1,(33),inst_26725);
} else {
if((state_val_26751 === (10))){
var inst_26684 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26789_26832 = state_26750__$1;
(statearr_26789_26832[(2)] = inst_26684);

(statearr_26789_26832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (18))){
var inst_26700 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26701 = figwheel.client.format_messages.call(null,inst_26700);
var inst_26702 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26703 = figwheel.client.heads_up.display_error.call(null,inst_26701,inst_26702);
var state_26750__$1 = state_26750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26750__$1,(21),inst_26703);
} else {
if((state_val_26751 === (37))){
var inst_26733 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26790_26833 = state_26750__$1;
(statearr_26790_26833[(2)] = inst_26733);

(statearr_26790_26833[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (8))){
var inst_26676 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26750__$1 = state_26750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26750__$1,(11),inst_26676);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19123__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19102__auto__,c__19123__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19103__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19103__auto____0 = (function (){
var statearr_26794 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26794[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19103__auto__);

(statearr_26794[(1)] = (1));

return statearr_26794;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19103__auto____1 = (function (state_26750){
while(true){
var ret_value__19104__auto__ = (function (){try{while(true){
var result__19105__auto__ = switch__19102__auto__.call(null,state_26750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19105__auto__;
}
break;
}
}catch (e26795){if((e26795 instanceof Object)){
var ex__19106__auto__ = e26795;
var statearr_26796_26834 = state_26750;
(statearr_26796_26834[(5)] = ex__19106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26835 = state_26750;
state_26750 = G__26835;
continue;
} else {
return ret_value__19104__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19103__auto__ = function(state_26750){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19103__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19103__auto____1.call(this,state_26750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19103__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19103__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19103__auto__;
})()
;})(switch__19102__auto__,c__19123__auto__,msg_hist,msg_names,msg))
})();
var state__19125__auto__ = (function (){var statearr_26797 = f__19124__auto__.call(null);
(statearr_26797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19123__auto__);

return statearr_26797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19125__auto__);
});})(c__19123__auto__,msg_hist,msg_names,msg))
);

return c__19123__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19123__auto___26898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19123__auto___26898,ch){
return (function (){
var f__19124__auto__ = (function (){var switch__19102__auto__ = ((function (c__19123__auto___26898,ch){
return (function (state_26881){
var state_val_26882 = (state_26881[(1)]);
if((state_val_26882 === (1))){
var state_26881__$1 = state_26881;
var statearr_26883_26899 = state_26881__$1;
(statearr_26883_26899[(2)] = null);

(statearr_26883_26899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26882 === (2))){
var state_26881__$1 = state_26881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26881__$1,(4),ch);
} else {
if((state_val_26882 === (3))){
var inst_26879 = (state_26881[(2)]);
var state_26881__$1 = state_26881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26881__$1,inst_26879);
} else {
if((state_val_26882 === (4))){
var inst_26869 = (state_26881[(7)]);
var inst_26869__$1 = (state_26881[(2)]);
var state_26881__$1 = (function (){var statearr_26884 = state_26881;
(statearr_26884[(7)] = inst_26869__$1);

return statearr_26884;
})();
if(cljs.core.truth_(inst_26869__$1)){
var statearr_26885_26900 = state_26881__$1;
(statearr_26885_26900[(1)] = (5));

} else {
var statearr_26886_26901 = state_26881__$1;
(statearr_26886_26901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26882 === (5))){
var inst_26869 = (state_26881[(7)]);
var inst_26871 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26869);
var state_26881__$1 = state_26881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26881__$1,(8),inst_26871);
} else {
if((state_val_26882 === (6))){
var state_26881__$1 = state_26881;
var statearr_26887_26902 = state_26881__$1;
(statearr_26887_26902[(2)] = null);

(statearr_26887_26902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26882 === (7))){
var inst_26877 = (state_26881[(2)]);
var state_26881__$1 = state_26881;
var statearr_26888_26903 = state_26881__$1;
(statearr_26888_26903[(2)] = inst_26877);

(statearr_26888_26903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26882 === (8))){
var inst_26873 = (state_26881[(2)]);
var state_26881__$1 = (function (){var statearr_26889 = state_26881;
(statearr_26889[(8)] = inst_26873);

return statearr_26889;
})();
var statearr_26890_26904 = state_26881__$1;
(statearr_26890_26904[(2)] = null);

(statearr_26890_26904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19123__auto___26898,ch))
;
return ((function (switch__19102__auto__,c__19123__auto___26898,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19103__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19103__auto____0 = (function (){
var statearr_26894 = [null,null,null,null,null,null,null,null,null];
(statearr_26894[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19103__auto__);

(statearr_26894[(1)] = (1));

return statearr_26894;
});
var figwheel$client$heads_up_plugin_$_state_machine__19103__auto____1 = (function (state_26881){
while(true){
var ret_value__19104__auto__ = (function (){try{while(true){
var result__19105__auto__ = switch__19102__auto__.call(null,state_26881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19105__auto__;
}
break;
}
}catch (e26895){if((e26895 instanceof Object)){
var ex__19106__auto__ = e26895;
var statearr_26896_26905 = state_26881;
(statearr_26896_26905[(5)] = ex__19106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26906 = state_26881;
state_26881 = G__26906;
continue;
} else {
return ret_value__19104__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19103__auto__ = function(state_26881){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19103__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19103__auto____1.call(this,state_26881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19103__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19103__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19103__auto__;
})()
;})(switch__19102__auto__,c__19123__auto___26898,ch))
})();
var state__19125__auto__ = (function (){var statearr_26897 = f__19124__auto__.call(null);
(statearr_26897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19123__auto___26898);

return statearr_26897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19125__auto__);
});})(c__19123__auto___26898,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19123__auto__){
return (function (){
var f__19124__auto__ = (function (){var switch__19102__auto__ = ((function (c__19123__auto__){
return (function (state_26927){
var state_val_26928 = (state_26927[(1)]);
if((state_val_26928 === (1))){
var inst_26922 = cljs.core.async.timeout.call(null,(3000));
var state_26927__$1 = state_26927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26927__$1,(2),inst_26922);
} else {
if((state_val_26928 === (2))){
var inst_26924 = (state_26927[(2)]);
var inst_26925 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26927__$1 = (function (){var statearr_26929 = state_26927;
(statearr_26929[(7)] = inst_26924);

return statearr_26929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26927__$1,inst_26925);
} else {
return null;
}
}
});})(c__19123__auto__))
;
return ((function (switch__19102__auto__,c__19123__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19103__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19103__auto____0 = (function (){
var statearr_26933 = [null,null,null,null,null,null,null,null];
(statearr_26933[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19103__auto__);

(statearr_26933[(1)] = (1));

return statearr_26933;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19103__auto____1 = (function (state_26927){
while(true){
var ret_value__19104__auto__ = (function (){try{while(true){
var result__19105__auto__ = switch__19102__auto__.call(null,state_26927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19105__auto__;
}
break;
}
}catch (e26934){if((e26934 instanceof Object)){
var ex__19106__auto__ = e26934;
var statearr_26935_26937 = state_26927;
(statearr_26935_26937[(5)] = ex__19106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26938 = state_26927;
state_26927 = G__26938;
continue;
} else {
return ret_value__19104__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19103__auto__ = function(state_26927){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19103__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19103__auto____1.call(this,state_26927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19103__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19103__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19103__auto__;
})()
;})(switch__19102__auto__,c__19123__auto__))
})();
var state__19125__auto__ = (function (){var statearr_26936 = f__19124__auto__.call(null);
(statearr_26936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19123__auto__);

return statearr_26936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19125__auto__);
});})(c__19123__auto__))
);

return c__19123__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26939){
var map__26946 = p__26939;
var map__26946__$1 = ((((!((map__26946 == null)))?((((map__26946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26946):map__26946);
var ed = map__26946__$1;
var formatted_exception = cljs.core.get.call(null,map__26946__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26946__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26946__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26948_26952 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26949_26953 = null;
var count__26950_26954 = (0);
var i__26951_26955 = (0);
while(true){
if((i__26951_26955 < count__26950_26954)){
var msg_26956 = cljs.core._nth.call(null,chunk__26949_26953,i__26951_26955);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26956);

var G__26957 = seq__26948_26952;
var G__26958 = chunk__26949_26953;
var G__26959 = count__26950_26954;
var G__26960 = (i__26951_26955 + (1));
seq__26948_26952 = G__26957;
chunk__26949_26953 = G__26958;
count__26950_26954 = G__26959;
i__26951_26955 = G__26960;
continue;
} else {
var temp__4425__auto___26961 = cljs.core.seq.call(null,seq__26948_26952);
if(temp__4425__auto___26961){
var seq__26948_26962__$1 = temp__4425__auto___26961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26948_26962__$1)){
var c__17643__auto___26963 = cljs.core.chunk_first.call(null,seq__26948_26962__$1);
var G__26964 = cljs.core.chunk_rest.call(null,seq__26948_26962__$1);
var G__26965 = c__17643__auto___26963;
var G__26966 = cljs.core.count.call(null,c__17643__auto___26963);
var G__26967 = (0);
seq__26948_26952 = G__26964;
chunk__26949_26953 = G__26965;
count__26950_26954 = G__26966;
i__26951_26955 = G__26967;
continue;
} else {
var msg_26968 = cljs.core.first.call(null,seq__26948_26962__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26968);

var G__26969 = cljs.core.next.call(null,seq__26948_26962__$1);
var G__26970 = null;
var G__26971 = (0);
var G__26972 = (0);
seq__26948_26952 = G__26969;
chunk__26949_26953 = G__26970;
count__26950_26954 = G__26971;
i__26951_26955 = G__26972;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26973){
var map__26976 = p__26973;
var map__26976__$1 = ((((!((map__26976 == null)))?((((map__26976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26976):map__26976);
var w = map__26976__$1;
var message = cljs.core.get.call(null,map__26976__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16828__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16828__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16828__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26984 = cljs.core.seq.call(null,plugins);
var chunk__26985 = null;
var count__26986 = (0);
var i__26987 = (0);
while(true){
if((i__26987 < count__26986)){
var vec__26988 = cljs.core._nth.call(null,chunk__26985,i__26987);
var k = cljs.core.nth.call(null,vec__26988,(0),null);
var plugin = cljs.core.nth.call(null,vec__26988,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26990 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26984,chunk__26985,count__26986,i__26987,pl_26990,vec__26988,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26990.call(null,msg_hist);
});})(seq__26984,chunk__26985,count__26986,i__26987,pl_26990,vec__26988,k,plugin))
);
} else {
}

var G__26991 = seq__26984;
var G__26992 = chunk__26985;
var G__26993 = count__26986;
var G__26994 = (i__26987 + (1));
seq__26984 = G__26991;
chunk__26985 = G__26992;
count__26986 = G__26993;
i__26987 = G__26994;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26984);
if(temp__4425__auto__){
var seq__26984__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26984__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__26984__$1);
var G__26995 = cljs.core.chunk_rest.call(null,seq__26984__$1);
var G__26996 = c__17643__auto__;
var G__26997 = cljs.core.count.call(null,c__17643__auto__);
var G__26998 = (0);
seq__26984 = G__26995;
chunk__26985 = G__26996;
count__26986 = G__26997;
i__26987 = G__26998;
continue;
} else {
var vec__26989 = cljs.core.first.call(null,seq__26984__$1);
var k = cljs.core.nth.call(null,vec__26989,(0),null);
var plugin = cljs.core.nth.call(null,vec__26989,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26999 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26984,chunk__26985,count__26986,i__26987,pl_26999,vec__26989,k,plugin,seq__26984__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26999.call(null,msg_hist);
});})(seq__26984,chunk__26985,count__26986,i__26987,pl_26999,vec__26989,k,plugin,seq__26984__$1,temp__4425__auto__))
);
} else {
}

var G__27000 = cljs.core.next.call(null,seq__26984__$1);
var G__27001 = null;
var G__27002 = (0);
var G__27003 = (0);
seq__26984 = G__27000;
chunk__26985 = G__27001;
count__26986 = G__27002;
i__26987 = G__27003;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27004 = [];
var len__17898__auto___27007 = arguments.length;
var i__17899__auto___27008 = (0);
while(true){
if((i__17899__auto___27008 < len__17898__auto___27007)){
args27004.push((arguments[i__17899__auto___27008]));

var G__27009 = (i__17899__auto___27008 + (1));
i__17899__auto___27008 = G__27009;
continue;
} else {
}
break;
}

var G__27006 = args27004.length;
switch (G__27006) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27004.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17905__auto__ = [];
var len__17898__auto___27015 = arguments.length;
var i__17899__auto___27016 = (0);
while(true){
if((i__17899__auto___27016 < len__17898__auto___27015)){
args__17905__auto__.push((arguments[i__17899__auto___27016]));

var G__27017 = (i__17899__auto___27016 + (1));
i__17899__auto___27016 = G__27017;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((0) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17906__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27012){
var map__27013 = p__27012;
var map__27013__$1 = ((((!((map__27013 == null)))?((((map__27013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27013):map__27013);
var opts = map__27013__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27011){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27011));
});

//# sourceMappingURL=client.js.map