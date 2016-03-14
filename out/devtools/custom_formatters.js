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
}catch (e12147){var _ = e12147;
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
var len__5729__auto___12149 = arguments.length;
var i__5730__auto___12150 = (0);
while(true){
if((i__5730__auto___12150 < len__5729__auto___12149)){
args__5736__auto__.push((arguments[i__5730__auto___12150]));

var G__12151 = (i__5730__auto___12150 + (1));
i__5730__auto___12150 = G__12151;
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

devtools.custom_formatters.log_exception_if_avail.cljs$lang$applyTo = (function (seq12148){
return devtools.custom_formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12148));
});
devtools.custom_formatters.monitor_api_calls = (function devtools$custom_formatters$monitor_api_calls(name,api_call){
return (function() { 
var G__12152__delegate = function (args){
if(cljs.core.not(devtools.custom_formatters._STAR_monitor_enabled_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
} else {
return devtools.custom_formatters.monitor_api_call_if_avail(name,api_call,args);
}
};
var G__12152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12153__i = 0, G__12153__a = new Array(arguments.length -  0);
while (G__12153__i < G__12153__a.length) {G__12153__a[G__12153__i] = arguments[G__12153__i + 0]; ++G__12153__i;}
  args = new cljs.core.IndexedSeq(G__12153__a,0);
} 
return G__12152__delegate.call(this,args);};
G__12152.cljs$lang$maxFixedArity = 0;
G__12152.cljs$lang$applyTo = (function (arglist__12154){
var args = cljs.core.seq(arglist__12154);
return G__12152__delegate(args);
});
G__12152.cljs$core$IFn$_invoke$arity$variadic = G__12152__delegate;
return G__12152;
})()
;
});
devtools.custom_formatters.sanitize = (function devtools$custom_formatters$sanitize(name,api_call){
return (function() { 
var G__12157__delegate = function (args){
if(cljs.core.not(devtools.custom_formatters._STAR_sanitizer_enabled_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
} else {
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
}catch (e12156){var e = e12156;
devtools.custom_formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(name),cljs.core.str(": "),cljs.core.str(e)].join('')], 0));

return null;
}}
};
var G__12157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12158__i = 0, G__12158__a = new Array(arguments.length -  0);
while (G__12158__i < G__12158__a.length) {G__12158__a[G__12158__i] = arguments[G__12158__i + 0]; ++G__12158__i;}
  args = new cljs.core.IndexedSeq(G__12158__a,0);
} 
return G__12157__delegate.call(this,args);};
G__12157.cljs$lang$maxFixedArity = 0;
G__12157.cljs$lang$applyTo = (function (arglist__12159){
var args = cljs.core.seq(arglist__12159);
return G__12157__delegate(args);
});
G__12157.cljs$core$IFn$_invoke$arity$variadic = G__12157__delegate;
return G__12157;
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
