// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('devtools.sanity_hints');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('cljs.stacktrace');
goog.require('goog.labs.userAgent.browser');
devtools.sanity_hints.available_QMARK_ = (function devtools$sanity_hints$available_QMARK_(){
return true;
});
if(typeof devtools.sanity_hints._STAR_installed_QMARK__STAR_ !== 'undefined'){
} else {
devtools.sanity_hints._STAR_installed_QMARK__STAR_ = false;
}
if(typeof devtools.sanity_hints._STAR_original_global_error_handler_STAR_ !== 'undefined'){
} else {
devtools.sanity_hints._STAR_original_global_error_handler_STAR_ = null;
}
if(typeof devtools.sanity_hints._STAR_original_type_error_prototype_to_string_STAR_ !== 'undefined'){
} else {
devtools.sanity_hints._STAR_original_type_error_prototype_to_string_STAR_ = null;
}
if(typeof devtools.sanity_hints._STAR_processed_errors_STAR_ !== 'undefined'){
} else {
devtools.sanity_hints._STAR_processed_errors_STAR_ = ((typeof WeakSet !== 'undefined')?(new WeakSet()):null);
}
devtools.sanity_hints.empty_as_nil = (function devtools$sanity_hints$empty_as_nil(str){
if(cljs.core.empty_QMARK_(str)){
return null;
} else {
return str;
}
});
devtools.sanity_hints.ajax_reader = (function devtools$sanity_hints$ajax_reader(url){
var xhr = (new XMLHttpRequest());
xhr.open("GET",url,false);

xhr.send();

return devtools.sanity_hints.empty_as_nil(xhr.responseText);
});
devtools.sanity_hints.retrieve_javascript_source = (function devtools$sanity_hints$retrieve_javascript_source(where){
var reader = (function (){var or__4671__auto__ = devtools.prefs.pref(cljs.core.cst$kw$file_DASH_reader);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return devtools.sanity_hints.ajax_reader;
}
})();
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(where) : reader.call(null,where));
});
devtools.sanity_hints.get_line = (function devtools$sanity_hints$get_line(lines,line_number){
return (lines[(line_number - (1))]);
});
devtools.sanity_hints.extend_content = (function devtools$sanity_hints$extend_content(content,lines,line_number,min_length){
if(((cljs.core.count(content) > min_length)) || (!((line_number > (0))))){
return content;
} else {
var prev_line_number = (line_number - (1));
var prev_line = devtools.sanity_hints.get_line(lines,prev_line_number);
var new_content = [cljs.core.str(prev_line),cljs.core.str("\n"),cljs.core.str(content)].join('');
return devtools$sanity_hints$extend_content(new_content,lines,prev_line_number,min_length);
}
});
devtools.sanity_hints.mark_call_closed_at_column = (function devtools$sanity_hints$mark_call_closed_at_column(line,column){
var n = (column - (1));
var prefix = line.substring((0),n);
var postfix = line.substring(n);
return [cljs.core.str(prefix),cljs.core.str(" <<< \u2622 NULL \u2622 <<< "),cljs.core.str(postfix)].join('');
});
devtools.sanity_hints.mark_null_call_site_location = (function devtools$sanity_hints$mark_null_call_site_location(file,line_number,column){
var content = devtools.sanity_hints.retrieve_javascript_source(file);
var lines = content.split("\n");
var line = devtools.sanity_hints.get_line(lines,line_number);
var marked_line = devtools.sanity_hints.mark_call_closed_at_column(line,column);
var min_length = (function (){var or__4671__auto__ = devtools.prefs.pref(cljs.core.cst$kw$sanity_DASH_hint_DASH_min_DASH_length);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (128);
}
})();
return devtools.sanity_hints.extend_content(marked_line,lines,line_number,min_length);
});
devtools.sanity_hints.make_sense_of_the_error = (function devtools$sanity_hints$make_sense_of_the_error(message,file,line_number,column){
if(cljs.core.truth_(cljs.core.re_matches(/Cannot read property 'call' of.*/,message))){
return devtools.sanity_hints.mark_null_call_site_location(file,line_number,column);
} else {
return null;

}
});
devtools.sanity_hints.error_object_sense = (function devtools$sanity_hints$error_object_sense(error){
try{var native_stack_trace = error.stack;
var stack_trace = (function (){var G__12613 = cljs.core.PersistentArrayMap.EMPTY;
var G__12614 = native_stack_trace;
var G__12615 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ua_DASH_product,cljs.core.cst$kw$chrome], null);
var G__12616 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$asset_DASH_root,""], null);
return (cljs.stacktrace.parse_stacktrace.cljs$core$IFn$_invoke$arity$4 ? cljs.stacktrace.parse_stacktrace.cljs$core$IFn$_invoke$arity$4(G__12613,G__12614,G__12615,G__12616) : cljs.stacktrace.parse_stacktrace.call(null,G__12613,G__12614,G__12615,G__12616));
})();
var top_item = cljs.core.second(stack_trace);
var map__12612 = top_item;
var map__12612__$1 = ((((!((map__12612 == null)))?((((map__12612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12612):map__12612);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12612__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12612__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12612__$1,cljs.core.cst$kw$column);
return devtools.sanity_hints.make_sense_of_the_error(error.message,file,line,column);
}catch (e12611){var _e = e12611;
return false;
}});
devtools.sanity_hints.type_error_to_string = (function devtools$sanity_hints$type_error_to_string(){
var self = this;
if(cljs.core.truth_(devtools.sanity_hints._STAR_processed_errors_STAR_)){
if(cljs.core.truth_(devtools.sanity_hints._STAR_processed_errors_STAR_.has(self))){
} else {
devtools.sanity_hints._STAR_processed_errors_STAR_.add(self);

var temp__4425__auto___12618 = devtools.sanity_hints.error_object_sense(self);
if(cljs.core.truth_(temp__4425__auto___12618)){
var sense_12619 = temp__4425__auto___12618;
self.message = [cljs.core.str(self.message),cljs.core.str(", a sanity hint:\n"),cljs.core.str(sense_12619)].join('');
} else {
}
}
} else {
}

return devtools.sanity_hints._STAR_original_type_error_prototype_to_string_STAR_.call(self);
});
devtools.sanity_hints.global_error_handler = (function devtools$sanity_hints$global_error_handler(message,url,line,column,error){
var res = (cljs.core.truth_(devtools.sanity_hints._STAR_original_global_error_handler_STAR_)?(devtools.sanity_hints._STAR_original_global_error_handler_STAR_.cljs$core$IFn$_invoke$arity$5 ? devtools.sanity_hints._STAR_original_global_error_handler_STAR_.cljs$core$IFn$_invoke$arity$5(message,url,line,column,error) : devtools.sanity_hints._STAR_original_global_error_handler_STAR_.call(null,message,url,line,column,error)):null);
if(cljs.core.not(res)){
var temp__4425__auto__ = devtools.sanity_hints.error_object_sense(error);
if(cljs.core.truth_(temp__4425__auto__)){
var sense = temp__4425__auto__;
console.info("A sanity hint for incoming uncaught error:\n",sense);

return false;
} else {
return null;
}
} else {
return true;
}
});
devtools.sanity_hints.install_type_error_enhancer = (function devtools$sanity_hints$install_type_error_enhancer(){
devtools.sanity_hints._STAR_original_global_error_handler_STAR_ = window.onerror;

window.onerror = devtools.sanity_hints.global_error_handler;

var prototype = TypeError.prototype;
devtools.sanity_hints._STAR_original_type_error_prototype_to_string_STAR_ = prototype.toString;

return prototype.toString = devtools.sanity_hints.type_error_to_string;
});
devtools.sanity_hints.install_BANG_ = (function devtools$sanity_hints$install_BANG_(){
if(cljs.core.truth_((function (){var and__4659__auto__ = cljs.core.not(devtools.sanity_hints._STAR_installed_QMARK__STAR_);
if(and__4659__auto__){
return (devtools.sanity_hints.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.sanity_hints.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.sanity_hints.available_QMARK_.call(null));
} else {
return and__4659__auto__;
}
})())){
devtools.sanity_hints._STAR_installed_QMARK__STAR_ = true;

devtools.sanity_hints.install_type_error_enhancer();

return true;
} else {
return null;
}
});
devtools.sanity_hints.uninstall_BANG_ = (function devtools$sanity_hints$uninstall_BANG_(){
if(cljs.core.truth_(devtools.sanity_hints._STAR_installed_QMARK__STAR_)){
devtools.sanity_hints._STAR_installed_QMARK__STAR_ = false;

if(cljs.core.truth_(devtools.sanity_hints._STAR_original_type_error_prototype_to_string_STAR_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$_STAR_original_DASH_type_DASH_error_DASH_prototype_DASH_to_DASH_string_STAR_], 0)))].join('')));
}

window.onerror = devtools.sanity_hints._STAR_original_global_error_handler_STAR_;

var prototype = TypeError.prototype;
return prototype.toString = devtools.sanity_hints._STAR_original_type_error_prototype_to_string_STAR_;
} else {
return null;
}
});
