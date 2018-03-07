// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('devtools.dirac');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.browser.repl');
goog.require('devtools.prefs');
goog.require('clojure.string');
goog.require('goog.labs.userAgent.browser');
devtools.dirac.available_QMARK_ = (function devtools$dirac$available_QMARK_(){
var and__4659__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__4659__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__4659__auto__;
}
});
if(typeof devtools.dirac._STAR_installed_QMARK__STAR_ !== 'undefined'){
} else {
devtools.dirac._STAR_installed_QMARK__STAR_ = false;
}
if(typeof devtools.dirac.api_version !== 'undefined'){
} else {
devtools.dirac.api_version = (2);
}
devtools.dirac.default_config = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$weasel_DASH_auto_DASH_reconnect,cljs.core.cst$kw$eval_DASH_time_DASH_limit,cljs.core.cst$kw$agent_DASH_verbose,cljs.core.cst$kw$agent_DASH_response_DASH_timeout,cljs.core.cst$kw$agent_DASH_host,cljs.core.cst$kw$weasel_DASH_verbose,cljs.core.cst$kw$weasel_DASH_pre_DASH_eval_DASH_delay,cljs.core.cst$kw$install_DASH_check_DASH_next_DASH_trial_DASH_waiting_DASH_time,cljs.core.cst$kw$install_DASH_check_DASH_eval_DASH_time_DASH_limit,cljs.core.cst$kw$agent_DASH_port,cljs.core.cst$kw$agent_DASH_auto_DASH_reconnect,cljs.core.cst$kw$install_DASH_check_DASH_total_DASH_time_DASH_limit],[false,(10000),false,(5000),"localhost",false,(100),(500),(300),"8231",true,(5000)]);
if(typeof devtools.dirac.static_config !== 'undefined'){
} else {
devtools.dirac.static_config = cljs.core.PersistentArrayMap.EMPTY;
}
devtools.dirac.console_tunnel = (function devtools$dirac$console_tunnel(var_args){
var args__5736__auto__ = [];
var len__5729__auto___17568 = arguments.length;
var i__5730__auto___17569 = (0);
while(true){
if((i__5730__auto___17569 < len__5729__auto___17568)){
args__5736__auto__.push((arguments[i__5730__auto___17569]));

var G__17570 = (i__5730__auto___17569 + (1));
i__5730__auto___17569 = G__17570;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return devtools.dirac.console_tunnel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

devtools.dirac.console_tunnel.cljs$core$IFn$_invoke$arity$variadic = (function (method,args){
return goog.object.get(console,method).apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
});

devtools.dirac.console_tunnel.cljs$lang$maxFixedArity = (1);

devtools.dirac.console_tunnel.cljs$lang$applyTo = (function (seq17566){
var G__17567 = cljs.core.first(seq17566);
var seq17566__$1 = cljs.core.next(seq17566);
return devtools.dirac.console_tunnel.cljs$core$IFn$_invoke$arity$variadic(G__17567,seq17566__$1);
});
devtools.dirac.dirac_msg_args = (function devtools$dirac$dirac_msg_args(name,args){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-MSG$~~",name], null),args);
});
devtools.dirac.dirac_log_args = (function devtools$dirac$dirac_log_args(request_id,kind,args){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-LOG$~~",request_id,kind], null),args);
});
devtools.dirac.call_dirac = (function devtools$dirac$call_dirac(var_args){
var args__5736__auto__ = [];
var len__5729__auto___17573 = arguments.length;
var i__5730__auto___17574 = (0);
while(true){
if((i__5730__auto___17574 < len__5729__auto___17573)){
args__5736__auto__.push((arguments[i__5730__auto___17574]));

var G__17575 = (i__5730__auto___17574 + (1));
i__5730__auto___17574 = G__17575;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return devtools.dirac.call_dirac.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

devtools.dirac.call_dirac.cljs$core$IFn$_invoke$arity$variadic = (function (name,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(devtools.dirac.console_tunnel,"log",devtools.dirac.dirac_msg_args(name,args));
});

devtools.dirac.call_dirac.cljs$lang$maxFixedArity = (1);

devtools.dirac.call_dirac.cljs$lang$applyTo = (function (seq17571){
var G__17572 = cljs.core.first(seq17571);
var seq17571__$1 = cljs.core.next(seq17571);
return devtools.dirac.call_dirac.cljs$core$IFn$_invoke$arity$variadic(G__17572,seq17571__$1);
});
devtools.dirac.log = (function devtools$dirac$log(var_args){
var args__5736__auto__ = [];
var len__5729__auto___17579 = arguments.length;
var i__5730__auto___17580 = (0);
while(true){
if((i__5730__auto___17580 < len__5729__auto___17579)){
args__5736__auto__.push((arguments[i__5730__auto___17580]));

var G__17581 = (i__5730__auto___17580 + (1));
i__5730__auto___17580 = G__17581;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return devtools.dirac.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

devtools.dirac.log.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(devtools.dirac.console_tunnel,"log",devtools.dirac.dirac_log_args(request_id,kind,args));
});

devtools.dirac.log.cljs$lang$maxFixedArity = (2);

devtools.dirac.log.cljs$lang$applyTo = (function (seq17576){
var G__17577 = cljs.core.first(seq17576);
var seq17576__$1 = cljs.core.next(seq17576);
var G__17578 = cljs.core.first(seq17576__$1);
var seq17576__$2 = cljs.core.next(seq17576__$1);
return devtools.dirac.log.cljs$core$IFn$_invoke$arity$variadic(G__17577,G__17578,seq17576__$2);
});
devtools.dirac.warn = (function devtools$dirac$warn(var_args){
var args__5736__auto__ = [];
var len__5729__auto___17585 = arguments.length;
var i__5730__auto___17586 = (0);
while(true){
if((i__5730__auto___17586 < len__5729__auto___17585)){
args__5736__auto__.push((arguments[i__5730__auto___17586]));

var G__17587 = (i__5730__auto___17586 + (1));
i__5730__auto___17586 = G__17587;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return devtools.dirac.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

devtools.dirac.warn.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(devtools.dirac.console_tunnel,"warn",devtools.dirac.dirac_log_args(request_id,kind,args));
});

devtools.dirac.warn.cljs$lang$maxFixedArity = (2);

devtools.dirac.warn.cljs$lang$applyTo = (function (seq17582){
var G__17583 = cljs.core.first(seq17582);
var seq17582__$1 = cljs.core.next(seq17582);
var G__17584 = cljs.core.first(seq17582__$1);
var seq17582__$2 = cljs.core.next(seq17582__$1);
return devtools.dirac.warn.cljs$core$IFn$_invoke$arity$variadic(G__17583,G__17584,seq17582__$2);
});
devtools.dirac.error = (function devtools$dirac$error(var_args){
var args__5736__auto__ = [];
var len__5729__auto___17591 = arguments.length;
var i__5730__auto___17592 = (0);
while(true){
if((i__5730__auto___17592 < len__5729__auto___17591)){
args__5736__auto__.push((arguments[i__5730__auto___17592]));

var G__17593 = (i__5730__auto___17592 + (1));
i__5730__auto___17592 = G__17593;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return devtools.dirac.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

devtools.dirac.error.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(devtools.dirac.console_tunnel,"error",devtools.dirac.dirac_log_args(request_id,kind,args));
});

devtools.dirac.error.cljs$lang$maxFixedArity = (2);

devtools.dirac.error.cljs$lang$applyTo = (function (seq17588){
var G__17589 = cljs.core.first(seq17588);
var seq17588__$1 = cljs.core.next(seq17588);
var G__17590 = cljs.core.first(seq17588__$1);
var seq17588__$2 = cljs.core.next(seq17588__$1);
return devtools.dirac.error.cljs$core$IFn$_invoke$arity$variadic(G__17589,G__17590,seq17588__$2);
});
devtools.dirac.group_STAR_ = (function devtools$dirac$group_STAR_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___17598 = arguments.length;
var i__5730__auto___17599 = (0);
while(true){
if((i__5730__auto___17599 < len__5729__auto___17598)){
args__5736__auto__.push((arguments[i__5730__auto___17599]));

var G__17600 = (i__5730__auto___17599 + (1));
i__5730__auto___17599 = G__17600;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((3) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((3)),(0))):null);
return devtools.dirac.group_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5737__auto__);
});

devtools.dirac.group_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (collapsed_QMARK_,request_id,kind,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(devtools.dirac.console_tunnel,(cljs.core.truth_(collapsed_QMARK_)?"groupCollapsed":"group"),devtools.dirac.dirac_log_args(request_id,kind,args));
});

devtools.dirac.group_STAR_.cljs$lang$maxFixedArity = (3);

devtools.dirac.group_STAR_.cljs$lang$applyTo = (function (seq17594){
var G__17595 = cljs.core.first(seq17594);
var seq17594__$1 = cljs.core.next(seq17594);
var G__17596 = cljs.core.first(seq17594__$1);
var seq17594__$2 = cljs.core.next(seq17594__$1);
var G__17597 = cljs.core.first(seq17594__$2);
var seq17594__$3 = cljs.core.next(seq17594__$2);
return devtools.dirac.group_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__17595,G__17596,G__17597,seq17594__$3);
});
devtools.dirac.group_collapsed = (function devtools$dirac$group_collapsed(var_args){
var args__5736__auto__ = [];
var len__5729__auto___17602 = arguments.length;
var i__5730__auto___17603 = (0);
while(true){
if((i__5730__auto___17603 < len__5729__auto___17602)){
args__5736__auto__.push((arguments[i__5730__auto___17603]));

var G__17604 = (i__5730__auto___17603 + (1));
i__5730__auto___17603 = G__17604;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return devtools.dirac.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

devtools.dirac.group_collapsed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(devtools.dirac.group_STAR_,true,args);
});

devtools.dirac.group_collapsed.cljs$lang$maxFixedArity = (0);

devtools.dirac.group_collapsed.cljs$lang$applyTo = (function (seq17601){
return devtools.dirac.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17601));
});
devtools.dirac.group = (function devtools$dirac$group(var_args){
var args__5736__auto__ = [];
var len__5729__auto___17606 = arguments.length;
var i__5730__auto___17607 = (0);
while(true){
if((i__5730__auto___17607 < len__5729__auto___17606)){
args__5736__auto__.push((arguments[i__5730__auto___17607]));

var G__17608 = (i__5730__auto___17607 + (1));
i__5730__auto___17607 = G__17608;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return devtools.dirac.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

devtools.dirac.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(devtools.dirac.group_STAR_,false,args);
});

devtools.dirac.group.cljs$lang$maxFixedArity = (0);

devtools.dirac.group.cljs$lang$applyTo = (function (seq17605){
return devtools.dirac.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17605));
});
devtools.dirac.group_end = (function devtools$dirac$group_end(){
return console.groupEnd();
});
devtools.dirac.detect_and_strip = (function devtools$dirac$detect_and_strip(prefix,text){
var prefix_len = cljs.core.count(prefix);
var s = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),prefix_len);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,prefix)){
return clojure.string.triml(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,prefix_len));
} else {
return null;
}
});
devtools.dirac.present_java_trace = (function devtools$dirac$present_java_trace(request_id,text){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/\n/);
var first_line = cljs.core.first(lines);
var rest_content = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.rest(lines));
if(cljs.core.empty_QMARK_(rest_content)){
return devtools.dirac.error.cljs$core$IFn$_invoke$arity$variadic(request_id,cljs.core.cst$kw$stderr,cljs.core.array_seq([first_line], 0));
} else {
devtools.dirac.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([request_id,cljs.core.cst$kw$stderr,"%c%s",devtools.prefs.pref(cljs.core.cst$kw$java_DASH_trace_DASH_header_DASH_style),first_line], 0));

devtools.dirac.log.cljs$core$IFn$_invoke$arity$variadic(request_id,cljs.core.cst$kw$stderr,cljs.core.array_seq([rest_content], 0));

return devtools.dirac.group_end();
}
});
devtools.dirac.build_effective_config = (function devtools$dirac$build_effective_config(default_config,static_config){
var static_keys = cljs.core.keys(default_config);
var _STAR_ = ((function (static_keys){
return (function (key){
var temp__4423__auto__ = devtools.prefs.pref(key);
if(cljs.core.truth_(temp__4423__auto__)){
var val = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val], null);
} else {
return null;
}
});})(static_keys))
;
var dynamic_config = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(_STAR_,static_keys));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default_config,static_config,dynamic_config], 0));
});
devtools.dirac.get_effective_config = (function devtools$dirac$get_effective_config(){
return cljs.core.clj__GT_js(devtools.dirac.build_effective_config(devtools.dirac.default_config,devtools.dirac.static_config));
});
goog.exportSymbol('devtools.dirac.get_effective_config', devtools.dirac.get_effective_config);
devtools.dirac.get_api_version = (function devtools$dirac$get_api_version(){
return devtools.dirac.api_version;
});
goog.exportSymbol('devtools.dirac.get_api_version', devtools.dirac.get_api_version);
/**
 * Called by our nREPL boilerplate when we capture REPL evaluation result.
 */
devtools.dirac.present_repl_result = (function devtools$dirac$present_repl_result(request_id,value){
devtools.dirac.log.cljs$core$IFn$_invoke$arity$variadic(request_id,"result",cljs.core.array_seq([value], 0));

return value;
});
goog.exportSymbol('devtools.dirac.present_repl_result', devtools.dirac.present_repl_result);
/**
 * Called by our nREPL boilerplate when we capture REPL evaluation exception.
 */
devtools.dirac.present_repl_exception = (function devtools$dirac$present_repl_exception(request_id,exception){
return devtools.dirac.error.cljs$core$IFn$_invoke$arity$variadic(request_id,"exception",cljs.core.array_seq([exception], 0));
});
goog.exportSymbol('devtools.dirac.present_repl_exception', devtools.dirac.present_repl_exception);
devtools.dirac.present_in_dirac_repl = (function devtools$dirac$present_in_dirac_repl(request_id,value){
try{return devtools.dirac.present_repl_result(request_id,value);
}catch (e17610){var e = e17610;
devtools.dirac.present_repl_exception(request_id,e);

throw e;
}});
goog.exportSymbol('devtools.dirac.present_in_dirac_repl', devtools.dirac.present_in_dirac_repl);
devtools.dirac.present_output = (function devtools$dirac$present_output(request_id,kind,text){
var G__17612 = kind;
switch (G__17612) {
case "java-trace":
return devtools.dirac.present_java_trace(request_id,text);

break;
default:
var temp__4423__auto__ = devtools.dirac.detect_and_strip("WARNING:",text);
if(cljs.core.truth_(temp__4423__auto__)){
var warning_msg = temp__4423__auto__;
return devtools.dirac.warn.cljs$core$IFn$_invoke$arity$variadic(request_id,"warning",cljs.core.array_seq([warning_msg], 0));
} else {
var temp__4423__auto____$1 = devtools.dirac.detect_and_strip("ERROR:",text);
if(cljs.core.truth_(temp__4423__auto____$1)){
var error_msg = temp__4423__auto____$1;
return devtools.dirac.error.cljs$core$IFn$_invoke$arity$variadic(request_id,"error",cljs.core.array_seq([error_msg], 0));
} else {
return devtools.dirac.log.cljs$core$IFn$_invoke$arity$variadic(request_id,kind,cljs.core.array_seq([text], 0));
}
}

}
});
goog.exportSymbol('devtools.dirac.present_output', devtools.dirac.present_output);
/**
 * This is a postprocessing function wrapping weasel javascript evaluation attempt.
 *   This structure is needed for building response to nREPL server (see dirac.implant.weasel in Dirac project)
 *   In our case weasel is running in the context of Dirac DevTools and could potentially have different version of cljs runtime.
 *   To be correct we have to do this post-processing in app's context to use the same cljs runtime as app evaluating the code.
 * 
 *   Also we have to be careful to not enter into infinite printing with cyclic data structures.
 *   We limit printing level and length.
 */
devtools.dirac.postprocess_successful_eval = (function devtools$dirac$postprocess_successful_eval(value){
var _STAR_print_level_STAR_17616 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_17617 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = devtools.prefs.pref(cljs.core.cst$kw$dirac_DASH_print_DASH_level);

cljs.core._STAR_print_length_STAR_ = devtools.prefs.pref(cljs.core.cst$kw$dirac_DASH_print_DASH_length);

try{return {"status": "success", "value": [cljs.core.str(value)].join('')};
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_17617;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_17616;
}});
goog.exportSymbol('devtools.dirac.postprocess_successful_eval', devtools.dirac.postprocess_successful_eval);
devtools.dirac.postprocess_unsuccessful_eval = (function devtools$dirac$postprocess_unsuccessful_eval(ex){

return {"status": "exception", "value": cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ex], 0)), "stacktrace": (cljs.core.truth_(ex.hasOwnProperty("stack"))?ex.stack:"No stacktrace available.")};
});
goog.exportSymbol('devtools.dirac.postprocess_unsuccessful_eval', devtools.dirac.postprocess_unsuccessful_eval);
devtools.dirac.installed_QMARK_ = (function devtools$dirac$installed_QMARK_(){
return devtools.dirac._STAR_installed_QMARK__STAR_;
});
goog.exportSymbol('devtools.dirac.installed_QMARK_', devtools.dirac.installed_QMARK_);
devtools.dirac.install_BANG_ = (function devtools$dirac$install_BANG_(){
if(cljs.core.truth_((function (){var and__4659__auto__ = cljs.core.not(devtools.dirac.installed_QMARK_());
if(and__4659__auto__){
return (devtools.dirac.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.dirac.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.dirac.available_QMARK_.call(null));
} else {
return and__4659__auto__;
}
})())){
clojure.browser.repl.bootstrap();

devtools.dirac._STAR_installed_QMARK__STAR_ = true;

return true;
} else {
return null;
}
});
goog.exportSymbol('devtools.dirac.install_BANG_', devtools.dirac.install_BANG_);
devtools.dirac.uninstall_BANG_ = (function devtools$dirac$uninstall_BANG_(){
if(cljs.core.truth_(devtools.dirac.installed_QMARK_())){
return devtools.dirac._STAR_installed_QMARK__STAR_ = false;
} else {
return null;
}
});
goog.exportSymbol('devtools.dirac.uninstall_BANG_', devtools.dirac.uninstall_BANG_);
