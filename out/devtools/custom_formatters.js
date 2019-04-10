// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('devtools.custom_formatters');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.format');
goog.require('goog.labs.userAgent.browser');
devtools.custom_formatters._STAR_installed_STAR_ = false;
devtools.custom_formatters._STAR_sanitizer_enabled_STAR_ = true;
devtools.custom_formatters._STAR_monitor_enabled_STAR_ = false;
devtools.custom_formatters.formatter_key = "devtoolsFormatters";
devtools.custom_formatters.obsolete_formatter_key = "devtoolsFormatter";
devtools.custom_formatters.available_QMARK_ = (function devtools$custom_formatters$available_QMARK_(){
var and__4659__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__4659__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__4659__auto__;
}
});

/**
* @constructor
*/
devtools.custom_formatters.CLJSDevtoolsFormatter = (function (){
})

devtools.custom_formatters.CLJSDevtoolsFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

devtools.custom_formatters.CLJSDevtoolsFormatter.cljs$lang$type = true;

devtools.custom_formatters.CLJSDevtoolsFormatter.cljs$lang$ctorStr = "devtools.custom-formatters/CLJSDevtoolsFormatter";

devtools.custom_formatters.CLJSDevtoolsFormatter.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"devtools.custom-formatters/CLJSDevtoolsFormatter");
});

devtools.custom_formatters.__GT_CLJSDevtoolsFormatter = (function devtools$custom_formatters$__GT_CLJSDevtoolsFormatter(){
return (new devtools.custom_formatters.CLJSDevtoolsFormatter());
});

devtools.custom_formatters.find_fn_in_debug_ns = (function devtools$custom_formatters$find_fn_in_debug_ns(fn_name){
try{return (window["devtools"]["debug"][fn_name]);
}catch (e13004){var _ = e13004;
return null;
}});
devtools.custom_formatters.monitor_api_call_if_avail = (function devtools$custom_formatters$monitor_api_call_if_avail(name,api_call,args){
var temp__4423__auto__ = devtools.custom_formatters.find_fn_in_debug_ns("monitor_api_call");
if(cljs.core.truth_(temp__4423__auto__)){
var monitor_api_call = temp__4423__auto__;
return (monitor_api_call.cljs$core$IFn$_invoke$arity$3 ? monitor_api_call.cljs$core$IFn$_invoke$arity$3(name,api_call,args) : monitor_api_call.call(null,name,api_call,args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
}
});
devtools.custom_formatters.log_exception_if_avail = (function devtools$custom_formatters$log_exception_if_avail(var_args){
var args__5736__auto__ = [];
var len__5729__auto___13006 = arguments.length;
var i__5730__auto___13007 = (0);
while(true){
if((i__5730__auto___13007 < len__5729__auto___13006)){
args__5736__auto__.push((arguments[i__5730__auto___13007]));

var G__13008 = (i__5730__auto___13007 + (1));
i__5730__auto___13007 = G__13008;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return devtools.custom_formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

devtools.custom_formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__4423__auto__ = devtools.custom_formatters.find_fn_in_debug_ns("log_exception");
if(cljs.core.truth_(temp__4423__auto__)){
var log_exception = temp__4423__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(log_exception,args);
} else {
return null;
}
});

devtools.custom_formatters.log_exception_if_avail.cljs$lang$maxFixedArity = (0);

devtools.custom_formatters.log_exception_if_avail.cljs$lang$applyTo = (function (seq13005){
return devtools.custom_formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13005));
});
devtools.custom_formatters.monitor_api_calls = (function devtools$custom_formatters$monitor_api_calls(name,api_call){
return (function() { 
var G__13009__delegate = function (args){
if(cljs.core.not(devtools.custom_formatters._STAR_monitor_enabled_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
} else {
return devtools.custom_formatters.monitor_api_call_if_avail(name,api_call,args);
}
};
var G__13009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13010__i = 0, G__13010__a = new Array(arguments.length -  0);
while (G__13010__i < G__13010__a.length) {G__13010__a[G__13010__i] = arguments[G__13010__i + 0]; ++G__13010__i;}
  args = new cljs.core.IndexedSeq(G__13010__a,0);
} 
return G__13009__delegate.call(this,args);};
G__13009.cljs$lang$maxFixedArity = 0;
G__13009.cljs$lang$applyTo = (function (arglist__13011){
var args = cljs.core.seq(arglist__13011);
return G__13009__delegate(args);
});
G__13009.cljs$core$IFn$_invoke$arity$variadic = G__13009__delegate;
return G__13009;
})()
;
});
devtools.custom_formatters.sanitize = (function devtools$custom_formatters$sanitize(name,api_call){
return (function() { 
var G__13014__delegate = function (args){
if(cljs.core.not(devtools.custom_formatters._STAR_sanitizer_enabled_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
} else {
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
}catch (e13013){var e = e13013;
devtools.custom_formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(name),cljs.core.str(": "),cljs.core.str(e)].join('')], 0));

return null;
}}
};
var G__13014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13015__i = 0, G__13015__a = new Array(arguments.length -  0);
while (G__13015__i < G__13015__a.length) {G__13015__a[G__13015__i] = arguments[G__13015__i + 0]; ++G__13015__i;}
  args = new cljs.core.IndexedSeq(G__13015__a,0);
} 
return G__13014__delegate.call(this,args);};
G__13014.cljs$lang$maxFixedArity = 0;
G__13014.cljs$lang$applyTo = (function (arglist__13016){
var args = cljs.core.seq(arglist__13016);
return G__13014__delegate(args);
});
G__13014.cljs$core$IFn$_invoke$arity$variadic = G__13014__delegate;
return G__13014;
})()
;
});
devtools.custom_formatters.build_cljs_formatter = (function devtools$custom_formatters$build_cljs_formatter(){
var wrap = (function (name,api_call){
var monitor = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.custom_formatters.monitor_api_calls,name);
var sanitizer = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.custom_formatters.sanitize,name);
cljs.core.comp.cljs$core$IFn$_invoke$arity$2(monitor,sanitizer).call(null,api_call);

return api_call;
});
var formatter = (new devtools.custom_formatters.CLJSDevtoolsFormatter());
var define_BANG_ = ((function (wrap,formatter){
return (function (name,fn){
return (formatter[name] = wrap(name,fn));
});})(wrap,formatter))
;
define_BANG_("header",devtools.format.header_api_call);

define_BANG_("hasBody",devtools.format.has_body_api_call);

define_BANG_("body",devtools.format.body_api_call);

return formatter;
});
devtools.custom_formatters.is_ours_QMARK_ = (function devtools$custom_formatters$is_ours_QMARK_(o){
return (o instanceof devtools.custom_formatters.CLJSDevtoolsFormatter);
});
devtools.custom_formatters.get_formatters_safe = (function devtools$custom_formatters$get_formatters_safe(){
var formatters = (window[devtools.custom_formatters.formatter_key]);
if(cljs.core.array_QMARK_(formatters)){
return formatters;
} else {
return [];
}
});
devtools.custom_formatters.present_QMARK_ = (function devtools$custom_formatters$present_QMARK_(){
var formatters = devtools.custom_formatters.get_formatters_safe();
return cljs.core.boolean$(cljs.core.some(devtools.custom_formatters.is_ours_QMARK_,formatters));
});
devtools.custom_formatters.install_our_formatter_BANG_ = (function devtools$custom_formatters$install_our_formatter_BANG_(formatter){
var formatters = devtools.custom_formatters.get_formatters_safe().slice();
formatters.push(formatter);

(window[devtools.custom_formatters.formatter_key] = formatters);

if(cljs.core.truth_(devtools.prefs.pref(cljs.core.cst$kw$legacy_DASH_formatter))){
return (window[devtools.custom_formatters.obsolete_formatter_key] = formatter);
} else {
return null;
}
});
devtools.custom_formatters.uninstall_our_formatters_BANG_ = (function devtools$custom_formatters$uninstall_our_formatters_BANG_(){
var new_formatters = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(devtools.custom_formatters.is_ours_QMARK_,cljs.core.vec(devtools.custom_formatters.get_formatters_safe()));
var new_formatters_js = ((cljs.core.empty_QMARK_(new_formatters))?null:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new_formatters));
return (window[devtools.custom_formatters.formatter_key] = new_formatters_js);
});
devtools.custom_formatters.install_BANG_ = (function devtools$custom_formatters$install_BANG_(){
if(cljs.core.truth_((function (){var and__4659__auto__ = cljs.core.not(devtools.custom_formatters._STAR_installed_STAR_);
if(and__4659__auto__){
return (devtools.custom_formatters.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.custom_formatters.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.custom_formatters.available_QMARK_.call(null));
} else {
return and__4659__auto__;
}
})())){
devtools.custom_formatters._STAR_installed_STAR_ = true;

devtools.custom_formatters.install_our_formatter_BANG_(devtools.custom_formatters.build_cljs_formatter());

return true;
} else {
return null;
}
});
devtools.custom_formatters.uninstall_BANG_ = (function devtools$custom_formatters$uninstall_BANG_(){
if(cljs.core.truth_(devtools.custom_formatters._STAR_installed_STAR_)){
devtools.custom_formatters._STAR_installed_STAR_ = false;

return devtools.custom_formatters.uninstall_our_formatters_BANG_();
} else {
return null;
}
});
