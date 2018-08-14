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
var pred__32208 = cljs.core._EQ_;
var expr__32209 = (function (){var or__16840__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__32208.call(null,"true",expr__32209))){
return true;
} else {
if(cljs.core.truth_(pred__32208.call(null,"false",expr__32209))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32209)].join('')));
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
var G__32211__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32212__i = 0, G__32212__a = new Array(arguments.length -  0);
while (G__32212__i < G__32212__a.length) {G__32212__a[G__32212__i] = arguments[G__32212__i + 0]; ++G__32212__i;}
  args = new cljs.core.IndexedSeq(G__32212__a,0);
} 
return G__32211__delegate.call(this,args);};
G__32211.cljs$lang$maxFixedArity = 0;
G__32211.cljs$lang$applyTo = (function (arglist__32213){
var args = cljs.core.seq(arglist__32213);
return G__32211__delegate(args);
});
G__32211.cljs$core$IFn$_invoke$arity$variadic = G__32211__delegate;
return G__32211;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32214){
var map__32217 = p__32214;
var map__32217__$1 = ((((!((map__32217 == null)))?((((map__32217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32217):map__32217);
var message = cljs.core.get.call(null,map__32217__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32217__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20107__auto___32379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20107__auto___32379,ch){
return (function (){
var f__20108__auto__ = (function (){var switch__19995__auto__ = ((function (c__20107__auto___32379,ch){
return (function (state_32348){
var state_val_32349 = (state_32348[(1)]);
if((state_val_32349 === (7))){
var inst_32344 = (state_32348[(2)]);
var state_32348__$1 = state_32348;
var statearr_32350_32380 = state_32348__$1;
(statearr_32350_32380[(2)] = inst_32344);

(statearr_32350_32380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (1))){
var state_32348__$1 = state_32348;
var statearr_32351_32381 = state_32348__$1;
(statearr_32351_32381[(2)] = null);

(statearr_32351_32381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (4))){
var inst_32301 = (state_32348[(7)]);
var inst_32301__$1 = (state_32348[(2)]);
var state_32348__$1 = (function (){var statearr_32352 = state_32348;
(statearr_32352[(7)] = inst_32301__$1);

return statearr_32352;
})();
if(cljs.core.truth_(inst_32301__$1)){
var statearr_32353_32382 = state_32348__$1;
(statearr_32353_32382[(1)] = (5));

} else {
var statearr_32354_32383 = state_32348__$1;
(statearr_32354_32383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (15))){
var inst_32308 = (state_32348[(8)]);
var inst_32323 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32308);
var inst_32324 = cljs.core.first.call(null,inst_32323);
var inst_32325 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32324);
var inst_32326 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_32325)].join('');
var inst_32327 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32326);
var state_32348__$1 = state_32348;
var statearr_32355_32384 = state_32348__$1;
(statearr_32355_32384[(2)] = inst_32327);

(statearr_32355_32384[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (13))){
var inst_32332 = (state_32348[(2)]);
var state_32348__$1 = state_32348;
var statearr_32356_32385 = state_32348__$1;
(statearr_32356_32385[(2)] = inst_32332);

(statearr_32356_32385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (6))){
var state_32348__$1 = state_32348;
var statearr_32357_32386 = state_32348__$1;
(statearr_32357_32386[(2)] = null);

(statearr_32357_32386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (17))){
var inst_32330 = (state_32348[(2)]);
var state_32348__$1 = state_32348;
var statearr_32358_32387 = state_32348__$1;
(statearr_32358_32387[(2)] = inst_32330);

(statearr_32358_32387[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (3))){
var inst_32346 = (state_32348[(2)]);
var state_32348__$1 = state_32348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32348__$1,inst_32346);
} else {
if((state_val_32349 === (12))){
var inst_32307 = (state_32348[(9)]);
var inst_32321 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32307,opts);
var state_32348__$1 = state_32348;
if(cljs.core.truth_(inst_32321)){
var statearr_32359_32388 = state_32348__$1;
(statearr_32359_32388[(1)] = (15));

} else {
var statearr_32360_32389 = state_32348__$1;
(statearr_32360_32389[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (2))){
var state_32348__$1 = state_32348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32348__$1,(4),ch);
} else {
if((state_val_32349 === (11))){
var inst_32308 = (state_32348[(8)]);
var inst_32313 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32314 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32308);
var inst_32315 = cljs.core.async.timeout.call(null,(1000));
var inst_32316 = [inst_32314,inst_32315];
var inst_32317 = (new cljs.core.PersistentVector(null,2,(5),inst_32313,inst_32316,null));
var state_32348__$1 = state_32348;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32348__$1,(14),inst_32317);
} else {
if((state_val_32349 === (9))){
var inst_32308 = (state_32348[(8)]);
var inst_32334 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32335 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32308);
var inst_32336 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32335);
var inst_32337 = [cljs.core.str("Not loading: "),cljs.core.str(inst_32336)].join('');
var inst_32338 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32337);
var state_32348__$1 = (function (){var statearr_32361 = state_32348;
(statearr_32361[(10)] = inst_32334);

return statearr_32361;
})();
var statearr_32362_32390 = state_32348__$1;
(statearr_32362_32390[(2)] = inst_32338);

(statearr_32362_32390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (5))){
var inst_32301 = (state_32348[(7)]);
var inst_32303 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32304 = (new cljs.core.PersistentArrayMap(null,2,inst_32303,null));
var inst_32305 = (new cljs.core.PersistentHashSet(null,inst_32304,null));
var inst_32306 = figwheel.client.focus_msgs.call(null,inst_32305,inst_32301);
var inst_32307 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32306);
var inst_32308 = cljs.core.first.call(null,inst_32306);
var inst_32309 = figwheel.client.autoload_QMARK_.call(null);
var state_32348__$1 = (function (){var statearr_32363 = state_32348;
(statearr_32363[(8)] = inst_32308);

(statearr_32363[(9)] = inst_32307);

return statearr_32363;
})();
if(cljs.core.truth_(inst_32309)){
var statearr_32364_32391 = state_32348__$1;
(statearr_32364_32391[(1)] = (8));

} else {
var statearr_32365_32392 = state_32348__$1;
(statearr_32365_32392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (14))){
var inst_32319 = (state_32348[(2)]);
var state_32348__$1 = state_32348;
var statearr_32366_32393 = state_32348__$1;
(statearr_32366_32393[(2)] = inst_32319);

(statearr_32366_32393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (16))){
var state_32348__$1 = state_32348;
var statearr_32367_32394 = state_32348__$1;
(statearr_32367_32394[(2)] = null);

(statearr_32367_32394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (10))){
var inst_32340 = (state_32348[(2)]);
var state_32348__$1 = (function (){var statearr_32368 = state_32348;
(statearr_32368[(11)] = inst_32340);

return statearr_32368;
})();
var statearr_32369_32395 = state_32348__$1;
(statearr_32369_32395[(2)] = null);

(statearr_32369_32395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (8))){
var inst_32307 = (state_32348[(9)]);
var inst_32311 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32307,opts);
var state_32348__$1 = state_32348;
if(cljs.core.truth_(inst_32311)){
var statearr_32370_32396 = state_32348__$1;
(statearr_32370_32396[(1)] = (11));

} else {
var statearr_32371_32397 = state_32348__$1;
(statearr_32371_32397[(1)] = (12));

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
});})(c__20107__auto___32379,ch))
;
return ((function (switch__19995__auto__,c__20107__auto___32379,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19996__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19996__auto____0 = (function (){
var statearr_32375 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32375[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19996__auto__);

(statearr_32375[(1)] = (1));

return statearr_32375;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19996__auto____1 = (function (state_32348){
while(true){
var ret_value__19997__auto__ = (function (){try{while(true){
var result__19998__auto__ = switch__19995__auto__.call(null,state_32348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19998__auto__;
}
break;
}
}catch (e32376){if((e32376 instanceof Object)){
var ex__19999__auto__ = e32376;
var statearr_32377_32398 = state_32348;
(statearr_32377_32398[(5)] = ex__19999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32399 = state_32348;
state_32348 = G__32399;
continue;
} else {
return ret_value__19997__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19996__auto__ = function(state_32348){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19996__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19996__auto____1.call(this,state_32348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19996__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19996__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19996__auto__;
})()
;})(switch__19995__auto__,c__20107__auto___32379,ch))
})();
var state__20109__auto__ = (function (){var statearr_32378 = f__20108__auto__.call(null);
(statearr_32378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20107__auto___32379);

return statearr_32378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20109__auto__);
});})(c__20107__auto___32379,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32400_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32400_SHARP_));
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
var base_path_32407 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32407){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_32405 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_32406 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32405,_STAR_print_newline_STAR_32406,base_path_32407){
return (function() { 
var G__32408__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32408 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32409__i = 0, G__32409__a = new Array(arguments.length -  0);
while (G__32409__i < G__32409__a.length) {G__32409__a[G__32409__i] = arguments[G__32409__i + 0]; ++G__32409__i;}
  args = new cljs.core.IndexedSeq(G__32409__a,0);
} 
return G__32408__delegate.call(this,args);};
G__32408.cljs$lang$maxFixedArity = 0;
G__32408.cljs$lang$applyTo = (function (arglist__32410){
var args = cljs.core.seq(arglist__32410);
return G__32408__delegate(args);
});
G__32408.cljs$core$IFn$_invoke$arity$variadic = G__32408__delegate;
return G__32408;
})()
;})(_STAR_print_fn_STAR_32405,_STAR_print_newline_STAR_32406,base_path_32407))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32406;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32405;
}}catch (e32404){if((e32404 instanceof Error)){
var e = e32404;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32407], null));
} else {
var e = e32404;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32407))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32411){
var map__32418 = p__32411;
var map__32418__$1 = ((((!((map__32418 == null)))?((((map__32418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32418):map__32418);
var opts = map__32418__$1;
var build_id = cljs.core.get.call(null,map__32418__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32418,map__32418__$1,opts,build_id){
return (function (p__32420){
var vec__32421 = p__32420;
var map__32422 = cljs.core.nth.call(null,vec__32421,(0),null);
var map__32422__$1 = ((((!((map__32422 == null)))?((((map__32422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32422):map__32422);
var msg = map__32422__$1;
var msg_name = cljs.core.get.call(null,map__32422__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32421,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32421,map__32422,map__32422__$1,msg,msg_name,_,map__32418,map__32418__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32421,map__32422,map__32422__$1,msg,msg_name,_,map__32418,map__32418__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32418,map__32418__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32428){
var vec__32429 = p__32428;
var map__32430 = cljs.core.nth.call(null,vec__32429,(0),null);
var map__32430__$1 = ((((!((map__32430 == null)))?((((map__32430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32430):map__32430);
var msg = map__32430__$1;
var msg_name = cljs.core.get.call(null,map__32430__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32429,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32432){
var map__32442 = p__32432;
var map__32442__$1 = ((((!((map__32442 == null)))?((((map__32442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32442):map__32442);
var on_compile_warning = cljs.core.get.call(null,map__32442__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32442__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32442,map__32442__$1,on_compile_warning,on_compile_fail){
return (function (p__32444){
var vec__32445 = p__32444;
var map__32446 = cljs.core.nth.call(null,vec__32445,(0),null);
var map__32446__$1 = ((((!((map__32446 == null)))?((((map__32446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32446):map__32446);
var msg = map__32446__$1;
var msg_name = cljs.core.get.call(null,map__32446__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32445,(1));
var pred__32448 = cljs.core._EQ_;
var expr__32449 = msg_name;
if(cljs.core.truth_(pred__32448.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32449))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32448.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32449))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32442,map__32442__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20107__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20108__auto__ = (function (){var switch__19995__auto__ = ((function (c__20107__auto__,msg_hist,msg_names,msg){
return (function (state_32665){
var state_val_32666 = (state_32665[(1)]);
if((state_val_32666 === (7))){
var inst_32589 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
if(cljs.core.truth_(inst_32589)){
var statearr_32667_32713 = state_32665__$1;
(statearr_32667_32713[(1)] = (8));

} else {
var statearr_32668_32714 = state_32665__$1;
(statearr_32668_32714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (20))){
var inst_32659 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32669_32715 = state_32665__$1;
(statearr_32669_32715[(2)] = inst_32659);

(statearr_32669_32715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (27))){
var inst_32655 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32670_32716 = state_32665__$1;
(statearr_32670_32716[(2)] = inst_32655);

(statearr_32670_32716[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (1))){
var inst_32582 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32665__$1 = state_32665;
if(cljs.core.truth_(inst_32582)){
var statearr_32671_32717 = state_32665__$1;
(statearr_32671_32717[(1)] = (2));

} else {
var statearr_32672_32718 = state_32665__$1;
(statearr_32672_32718[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (24))){
var inst_32657 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32673_32719 = state_32665__$1;
(statearr_32673_32719[(2)] = inst_32657);

(statearr_32673_32719[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (4))){
var inst_32663 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32665__$1,inst_32663);
} else {
if((state_val_32666 === (15))){
var inst_32661 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32674_32720 = state_32665__$1;
(statearr_32674_32720[(2)] = inst_32661);

(statearr_32674_32720[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (21))){
var inst_32620 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32675_32721 = state_32665__$1;
(statearr_32675_32721[(2)] = inst_32620);

(statearr_32675_32721[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (31))){
var inst_32644 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32665__$1 = state_32665;
if(cljs.core.truth_(inst_32644)){
var statearr_32676_32722 = state_32665__$1;
(statearr_32676_32722[(1)] = (34));

} else {
var statearr_32677_32723 = state_32665__$1;
(statearr_32677_32723[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (32))){
var inst_32653 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32678_32724 = state_32665__$1;
(statearr_32678_32724[(2)] = inst_32653);

(statearr_32678_32724[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (33))){
var inst_32642 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32679_32725 = state_32665__$1;
(statearr_32679_32725[(2)] = inst_32642);

(statearr_32679_32725[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (13))){
var inst_32603 = figwheel.client.heads_up.clear.call(null);
var state_32665__$1 = state_32665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32665__$1,(16),inst_32603);
} else {
if((state_val_32666 === (22))){
var inst_32624 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32625 = figwheel.client.heads_up.append_message.call(null,inst_32624);
var state_32665__$1 = state_32665;
var statearr_32680_32726 = state_32665__$1;
(statearr_32680_32726[(2)] = inst_32625);

(statearr_32680_32726[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (36))){
var inst_32651 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32681_32727 = state_32665__$1;
(statearr_32681_32727[(2)] = inst_32651);

(statearr_32681_32727[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (29))){
var inst_32635 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32682_32728 = state_32665__$1;
(statearr_32682_32728[(2)] = inst_32635);

(statearr_32682_32728[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (6))){
var inst_32584 = (state_32665[(7)]);
var state_32665__$1 = state_32665;
var statearr_32683_32729 = state_32665__$1;
(statearr_32683_32729[(2)] = inst_32584);

(statearr_32683_32729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (28))){
var inst_32631 = (state_32665[(2)]);
var inst_32632 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32633 = figwheel.client.heads_up.display_warning.call(null,inst_32632);
var state_32665__$1 = (function (){var statearr_32684 = state_32665;
(statearr_32684[(8)] = inst_32631);

return statearr_32684;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32665__$1,(29),inst_32633);
} else {
if((state_val_32666 === (25))){
var inst_32629 = figwheel.client.heads_up.clear.call(null);
var state_32665__$1 = state_32665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32665__$1,(28),inst_32629);
} else {
if((state_val_32666 === (34))){
var inst_32646 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32665__$1 = state_32665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32665__$1,(37),inst_32646);
} else {
if((state_val_32666 === (17))){
var inst_32611 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32685_32730 = state_32665__$1;
(statearr_32685_32730[(2)] = inst_32611);

(statearr_32685_32730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (3))){
var inst_32601 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32665__$1 = state_32665;
if(cljs.core.truth_(inst_32601)){
var statearr_32686_32731 = state_32665__$1;
(statearr_32686_32731[(1)] = (13));

} else {
var statearr_32687_32732 = state_32665__$1;
(statearr_32687_32732[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (12))){
var inst_32597 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32688_32733 = state_32665__$1;
(statearr_32688_32733[(2)] = inst_32597);

(statearr_32688_32733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (2))){
var inst_32584 = (state_32665[(7)]);
var inst_32584__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32665__$1 = (function (){var statearr_32689 = state_32665;
(statearr_32689[(7)] = inst_32584__$1);

return statearr_32689;
})();
if(cljs.core.truth_(inst_32584__$1)){
var statearr_32690_32734 = state_32665__$1;
(statearr_32690_32734[(1)] = (5));

} else {
var statearr_32691_32735 = state_32665__$1;
(statearr_32691_32735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (23))){
var inst_32627 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32665__$1 = state_32665;
if(cljs.core.truth_(inst_32627)){
var statearr_32692_32736 = state_32665__$1;
(statearr_32692_32736[(1)] = (25));

} else {
var statearr_32693_32737 = state_32665__$1;
(statearr_32693_32737[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (35))){
var state_32665__$1 = state_32665;
var statearr_32694_32738 = state_32665__$1;
(statearr_32694_32738[(2)] = null);

(statearr_32694_32738[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (19))){
var inst_32622 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32665__$1 = state_32665;
if(cljs.core.truth_(inst_32622)){
var statearr_32695_32739 = state_32665__$1;
(statearr_32695_32739[(1)] = (22));

} else {
var statearr_32696_32740 = state_32665__$1;
(statearr_32696_32740[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (11))){
var inst_32593 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32697_32741 = state_32665__$1;
(statearr_32697_32741[(2)] = inst_32593);

(statearr_32697_32741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (9))){
var inst_32595 = figwheel.client.heads_up.clear.call(null);
var state_32665__$1 = state_32665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32665__$1,(12),inst_32595);
} else {
if((state_val_32666 === (5))){
var inst_32586 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32665__$1 = state_32665;
var statearr_32698_32742 = state_32665__$1;
(statearr_32698_32742[(2)] = inst_32586);

(statearr_32698_32742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (14))){
var inst_32613 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32665__$1 = state_32665;
if(cljs.core.truth_(inst_32613)){
var statearr_32699_32743 = state_32665__$1;
(statearr_32699_32743[(1)] = (18));

} else {
var statearr_32700_32744 = state_32665__$1;
(statearr_32700_32744[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (26))){
var inst_32637 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32665__$1 = state_32665;
if(cljs.core.truth_(inst_32637)){
var statearr_32701_32745 = state_32665__$1;
(statearr_32701_32745[(1)] = (30));

} else {
var statearr_32702_32746 = state_32665__$1;
(statearr_32702_32746[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (16))){
var inst_32605 = (state_32665[(2)]);
var inst_32606 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32607 = figwheel.client.format_messages.call(null,inst_32606);
var inst_32608 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32609 = figwheel.client.heads_up.display_error.call(null,inst_32607,inst_32608);
var state_32665__$1 = (function (){var statearr_32703 = state_32665;
(statearr_32703[(9)] = inst_32605);

return statearr_32703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32665__$1,(17),inst_32609);
} else {
if((state_val_32666 === (30))){
var inst_32639 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32640 = figwheel.client.heads_up.display_warning.call(null,inst_32639);
var state_32665__$1 = state_32665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32665__$1,(33),inst_32640);
} else {
if((state_val_32666 === (10))){
var inst_32599 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32704_32747 = state_32665__$1;
(statearr_32704_32747[(2)] = inst_32599);

(statearr_32704_32747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (18))){
var inst_32615 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32616 = figwheel.client.format_messages.call(null,inst_32615);
var inst_32617 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32618 = figwheel.client.heads_up.display_error.call(null,inst_32616,inst_32617);
var state_32665__$1 = state_32665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32665__$1,(21),inst_32618);
} else {
if((state_val_32666 === (37))){
var inst_32648 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32705_32748 = state_32665__$1;
(statearr_32705_32748[(2)] = inst_32648);

(statearr_32705_32748[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (8))){
var inst_32591 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32665__$1 = state_32665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32665__$1,(11),inst_32591);
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
});})(c__20107__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19995__auto__,c__20107__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19996__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19996__auto____0 = (function (){
var statearr_32709 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32709[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19996__auto__);

(statearr_32709[(1)] = (1));

return statearr_32709;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19996__auto____1 = (function (state_32665){
while(true){
var ret_value__19997__auto__ = (function (){try{while(true){
var result__19998__auto__ = switch__19995__auto__.call(null,state_32665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19998__auto__;
}
break;
}
}catch (e32710){if((e32710 instanceof Object)){
var ex__19999__auto__ = e32710;
var statearr_32711_32749 = state_32665;
(statearr_32711_32749[(5)] = ex__19999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32750 = state_32665;
state_32665 = G__32750;
continue;
} else {
return ret_value__19997__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19996__auto__ = function(state_32665){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19996__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19996__auto____1.call(this,state_32665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19996__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19996__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19996__auto__;
})()
;})(switch__19995__auto__,c__20107__auto__,msg_hist,msg_names,msg))
})();
var state__20109__auto__ = (function (){var statearr_32712 = f__20108__auto__.call(null);
(statearr_32712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20107__auto__);

return statearr_32712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20109__auto__);
});})(c__20107__auto__,msg_hist,msg_names,msg))
);

return c__20107__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20107__auto___32813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20107__auto___32813,ch){
return (function (){
var f__20108__auto__ = (function (){var switch__19995__auto__ = ((function (c__20107__auto___32813,ch){
return (function (state_32796){
var state_val_32797 = (state_32796[(1)]);
if((state_val_32797 === (1))){
var state_32796__$1 = state_32796;
var statearr_32798_32814 = state_32796__$1;
(statearr_32798_32814[(2)] = null);

(statearr_32798_32814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32797 === (2))){
var state_32796__$1 = state_32796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32796__$1,(4),ch);
} else {
if((state_val_32797 === (3))){
var inst_32794 = (state_32796[(2)]);
var state_32796__$1 = state_32796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32796__$1,inst_32794);
} else {
if((state_val_32797 === (4))){
var inst_32784 = (state_32796[(7)]);
var inst_32784__$1 = (state_32796[(2)]);
var state_32796__$1 = (function (){var statearr_32799 = state_32796;
(statearr_32799[(7)] = inst_32784__$1);

return statearr_32799;
})();
if(cljs.core.truth_(inst_32784__$1)){
var statearr_32800_32815 = state_32796__$1;
(statearr_32800_32815[(1)] = (5));

} else {
var statearr_32801_32816 = state_32796__$1;
(statearr_32801_32816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32797 === (5))){
var inst_32784 = (state_32796[(7)]);
var inst_32786 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32784);
var state_32796__$1 = state_32796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32796__$1,(8),inst_32786);
} else {
if((state_val_32797 === (6))){
var state_32796__$1 = state_32796;
var statearr_32802_32817 = state_32796__$1;
(statearr_32802_32817[(2)] = null);

(statearr_32802_32817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32797 === (7))){
var inst_32792 = (state_32796[(2)]);
var state_32796__$1 = state_32796;
var statearr_32803_32818 = state_32796__$1;
(statearr_32803_32818[(2)] = inst_32792);

(statearr_32803_32818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32797 === (8))){
var inst_32788 = (state_32796[(2)]);
var state_32796__$1 = (function (){var statearr_32804 = state_32796;
(statearr_32804[(8)] = inst_32788);

return statearr_32804;
})();
var statearr_32805_32819 = state_32796__$1;
(statearr_32805_32819[(2)] = null);

(statearr_32805_32819[(1)] = (2));


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
});})(c__20107__auto___32813,ch))
;
return ((function (switch__19995__auto__,c__20107__auto___32813,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19996__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19996__auto____0 = (function (){
var statearr_32809 = [null,null,null,null,null,null,null,null,null];
(statearr_32809[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19996__auto__);

(statearr_32809[(1)] = (1));

return statearr_32809;
});
var figwheel$client$heads_up_plugin_$_state_machine__19996__auto____1 = (function (state_32796){
while(true){
var ret_value__19997__auto__ = (function (){try{while(true){
var result__19998__auto__ = switch__19995__auto__.call(null,state_32796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19998__auto__;
}
break;
}
}catch (e32810){if((e32810 instanceof Object)){
var ex__19999__auto__ = e32810;
var statearr_32811_32820 = state_32796;
(statearr_32811_32820[(5)] = ex__19999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32821 = state_32796;
state_32796 = G__32821;
continue;
} else {
return ret_value__19997__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19996__auto__ = function(state_32796){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19996__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19996__auto____1.call(this,state_32796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19996__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19996__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19996__auto__;
})()
;})(switch__19995__auto__,c__20107__auto___32813,ch))
})();
var state__20109__auto__ = (function (){var statearr_32812 = f__20108__auto__.call(null);
(statearr_32812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20107__auto___32813);

return statearr_32812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20109__auto__);
});})(c__20107__auto___32813,ch))
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
var c__20107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20107__auto__){
return (function (){
var f__20108__auto__ = (function (){var switch__19995__auto__ = ((function (c__20107__auto__){
return (function (state_32842){
var state_val_32843 = (state_32842[(1)]);
if((state_val_32843 === (1))){
var inst_32837 = cljs.core.async.timeout.call(null,(3000));
var state_32842__$1 = state_32842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32842__$1,(2),inst_32837);
} else {
if((state_val_32843 === (2))){
var inst_32839 = (state_32842[(2)]);
var inst_32840 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32842__$1 = (function (){var statearr_32844 = state_32842;
(statearr_32844[(7)] = inst_32839);

return statearr_32844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32842__$1,inst_32840);
} else {
return null;
}
}
});})(c__20107__auto__))
;
return ((function (switch__19995__auto__,c__20107__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19996__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19996__auto____0 = (function (){
var statearr_32848 = [null,null,null,null,null,null,null,null];
(statearr_32848[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19996__auto__);

(statearr_32848[(1)] = (1));

return statearr_32848;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19996__auto____1 = (function (state_32842){
while(true){
var ret_value__19997__auto__ = (function (){try{while(true){
var result__19998__auto__ = switch__19995__auto__.call(null,state_32842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19998__auto__;
}
break;
}
}catch (e32849){if((e32849 instanceof Object)){
var ex__19999__auto__ = e32849;
var statearr_32850_32852 = state_32842;
(statearr_32850_32852[(5)] = ex__19999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32853 = state_32842;
state_32842 = G__32853;
continue;
} else {
return ret_value__19997__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19996__auto__ = function(state_32842){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19996__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19996__auto____1.call(this,state_32842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19996__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19996__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19996__auto__;
})()
;})(switch__19995__auto__,c__20107__auto__))
})();
var state__20109__auto__ = (function (){var statearr_32851 = f__20108__auto__.call(null);
(statearr_32851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20107__auto__);

return statearr_32851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20109__auto__);
});})(c__20107__auto__))
);

return c__20107__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32854){
var map__32861 = p__32854;
var map__32861__$1 = ((((!((map__32861 == null)))?((((map__32861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32861):map__32861);
var ed = map__32861__$1;
var formatted_exception = cljs.core.get.call(null,map__32861__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32861__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32861__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32863_32867 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32864_32868 = null;
var count__32865_32869 = (0);
var i__32866_32870 = (0);
while(true){
if((i__32866_32870 < count__32865_32869)){
var msg_32871 = cljs.core._nth.call(null,chunk__32864_32868,i__32866_32870);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32871);

var G__32872 = seq__32863_32867;
var G__32873 = chunk__32864_32868;
var G__32874 = count__32865_32869;
var G__32875 = (i__32866_32870 + (1));
seq__32863_32867 = G__32872;
chunk__32864_32868 = G__32873;
count__32865_32869 = G__32874;
i__32866_32870 = G__32875;
continue;
} else {
var temp__4425__auto___32876 = cljs.core.seq.call(null,seq__32863_32867);
if(temp__4425__auto___32876){
var seq__32863_32877__$1 = temp__4425__auto___32876;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32863_32877__$1)){
var c__17643__auto___32878 = cljs.core.chunk_first.call(null,seq__32863_32877__$1);
var G__32879 = cljs.core.chunk_rest.call(null,seq__32863_32877__$1);
var G__32880 = c__17643__auto___32878;
var G__32881 = cljs.core.count.call(null,c__17643__auto___32878);
var G__32882 = (0);
seq__32863_32867 = G__32879;
chunk__32864_32868 = G__32880;
count__32865_32869 = G__32881;
i__32866_32870 = G__32882;
continue;
} else {
var msg_32883 = cljs.core.first.call(null,seq__32863_32877__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32883);

var G__32884 = cljs.core.next.call(null,seq__32863_32877__$1);
var G__32885 = null;
var G__32886 = (0);
var G__32887 = (0);
seq__32863_32867 = G__32884;
chunk__32864_32868 = G__32885;
count__32865_32869 = G__32886;
i__32866_32870 = G__32887;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32888){
var map__32891 = p__32888;
var map__32891__$1 = ((((!((map__32891 == null)))?((((map__32891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32891):map__32891);
var w = map__32891__$1;
var message = cljs.core.get.call(null,map__32891__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__32899 = cljs.core.seq.call(null,plugins);
var chunk__32900 = null;
var count__32901 = (0);
var i__32902 = (0);
while(true){
if((i__32902 < count__32901)){
var vec__32903 = cljs.core._nth.call(null,chunk__32900,i__32902);
var k = cljs.core.nth.call(null,vec__32903,(0),null);
var plugin = cljs.core.nth.call(null,vec__32903,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32905 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32899,chunk__32900,count__32901,i__32902,pl_32905,vec__32903,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32905.call(null,msg_hist);
});})(seq__32899,chunk__32900,count__32901,i__32902,pl_32905,vec__32903,k,plugin))
);
} else {
}

var G__32906 = seq__32899;
var G__32907 = chunk__32900;
var G__32908 = count__32901;
var G__32909 = (i__32902 + (1));
seq__32899 = G__32906;
chunk__32900 = G__32907;
count__32901 = G__32908;
i__32902 = G__32909;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32899);
if(temp__4425__auto__){
var seq__32899__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32899__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__32899__$1);
var G__32910 = cljs.core.chunk_rest.call(null,seq__32899__$1);
var G__32911 = c__17643__auto__;
var G__32912 = cljs.core.count.call(null,c__17643__auto__);
var G__32913 = (0);
seq__32899 = G__32910;
chunk__32900 = G__32911;
count__32901 = G__32912;
i__32902 = G__32913;
continue;
} else {
var vec__32904 = cljs.core.first.call(null,seq__32899__$1);
var k = cljs.core.nth.call(null,vec__32904,(0),null);
var plugin = cljs.core.nth.call(null,vec__32904,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32914 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32899,chunk__32900,count__32901,i__32902,pl_32914,vec__32904,k,plugin,seq__32899__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32914.call(null,msg_hist);
});})(seq__32899,chunk__32900,count__32901,i__32902,pl_32914,vec__32904,k,plugin,seq__32899__$1,temp__4425__auto__))
);
} else {
}

var G__32915 = cljs.core.next.call(null,seq__32899__$1);
var G__32916 = null;
var G__32917 = (0);
var G__32918 = (0);
seq__32899 = G__32915;
chunk__32900 = G__32916;
count__32901 = G__32917;
i__32902 = G__32918;
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
var args32919 = [];
var len__17898__auto___32922 = arguments.length;
var i__17899__auto___32923 = (0);
while(true){
if((i__17899__auto___32923 < len__17898__auto___32922)){
args32919.push((arguments[i__17899__auto___32923]));

var G__32924 = (i__17899__auto___32923 + (1));
i__17899__auto___32923 = G__32924;
continue;
} else {
}
break;
}

var G__32921 = args32919.length;
switch (G__32921) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32919.length)].join('')));

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
var len__17898__auto___32930 = arguments.length;
var i__17899__auto___32931 = (0);
while(true){
if((i__17899__auto___32931 < len__17898__auto___32930)){
args__17905__auto__.push((arguments[i__17899__auto___32931]));

var G__32932 = (i__17899__auto___32931 + (1));
i__17899__auto___32931 = G__32932;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((0) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17906__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32927){
var map__32928 = p__32927;
var map__32928__$1 = ((((!((map__32928 == null)))?((((map__32928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32928):map__32928);
var opts = map__32928__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32926){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32926));
});

//# sourceMappingURL=client.js.map