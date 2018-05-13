// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__5584__auto__ = (function (){var G__17903 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17903) : cljs.core.atom.call(null,G__17903));
})();
var prefer_table__5585__auto__ = (function (){var G__17904 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17904) : cljs.core.atom.call(null,G__17904));
})();
var method_cache__5586__auto__ = (function (){var G__17905 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17905) : cljs.core.atom.call(null,G__17905));
})();
var cached_hierarchy__5587__auto__ = (function (){var G__17906 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17906) : cljs.core.atom.call(null,G__17906));
})();
var hierarchy__5588__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.stacktrace","parse-stacktrace"),((function (method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__){
return (function (repl_env,st,err,opts){
return cljs.core.cst$kw$ua_DASH_product.cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__))
,cljs.core.cst$kw$default,hierarchy__5588__auto__,method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__4671__auto__ = cljs.core.cst$kw$output_DASH_dir.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return "out";
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not(cljs.core.re_find(/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(flc,/:/);
var vec__17916 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (xs){
return (function (p__17918,p__17919){
var vec__17920 = p__17918;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17920,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17920,(1),null);
var vec__17921 = p__17919;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17921,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17921,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(xs),(0),(-1))));
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17916,(0),null);
var vec__17917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17916,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17917,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17917,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17922 = file;
var G__17922__$1 = ((cljs.stacktrace.starts_with_QMARK_(file,"("))?clojure.string.replace(G__17922,"(",""):G__17922);
return G__17922__$1;
})(),cljs.stacktrace.parse_int((function (){var G__17923 = line;
var G__17923__$1 = ((cljs.stacktrace.ends_with_QMARK_(line,")"))?clojure.string.replace(G__17923,")",""):G__17923);
return G__17923__$1;
})()),cljs.stacktrace.parse_int((function (){var G__17924 = column;
var G__17924__$1 = ((cljs.stacktrace.ends_with_QMARK_(column,")"))?clojure.string.replace(G__17924,")",""):G__17924);
return G__17924__$1;
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__17925,file,p__17926){
var map__17931 = p__17925;
var map__17931__$1 = ((((!((map__17931 == null)))?((((map__17931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17931):map__17931);
var repl_env = map__17931__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,cljs.core.cst$kw$host);
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,cljs.core.cst$kw$host_DASH_port);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,cljs.core.cst$kw$port);
var map__17932 = p__17926;
var map__17932__$1 = ((((!((map__17932 == null)))?((((map__17932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17932):map__17932);
var opts = map__17932__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17932__$1,cljs.core.cst$kw$asset_DASH_path);
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex([cljs.core.str("http://"),cljs.core.str(host),cljs.core.str(":"),cljs.core.str((function (){var or__4671__auto__ = host_port;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return port;
}
})()),cljs.core.str("/")].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find(urlpat,file):cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$output_DASH_dir));
if(cljs.core.truth_(match)){
return clojure.string.replace(clojure.string.replace(file,urlpat,""),cljs.stacktrace.string__GT_regex([cljs.core.str("^"),cljs.core.str((function (){var or__4671__auto__ = (function (){var and__4659__auto__ = asset_path;
if(cljs.core.truth_(and__4659__auto__)){
return clojure.string.replace(asset_path,/^\//,"");
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.stacktrace.output_directory(opts);
}
})()),cljs.core.str("/")].join('')),"");
} else {
var temp__4423__auto__ = cljs.core.cst$kw$asset_DASH_root.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var asset_root = temp__4423__auto__;
return clojure.string.replace(file,asset_root,"");
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Could not relativize URL "),cljs.core.str(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$parse_DASH_stacktrace,cljs.core.cst$kw$reason,cljs.core.cst$kw$relativize_DASH_url], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(st_el,/\s+at\s+/,""),/\s+/);
var vec__17937 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17937,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17937,(1),null);
var vec__17938 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17938,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17938,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17938,(2),null);
if(cljs.core.truth_((function (){var and__4659__auto__ = file;
if(cljs.core.truth_(and__4659__auto__)){
var and__4659__auto____$1 = function$;
if(cljs.core.truth_(and__4659__auto____$1)){
var and__4659__auto____$2 = line;
if(cljs.core.truth_(and__4659__auto____$2)){
return column;
} else {
return and__4659__auto____$2;
}
} else {
return and__4659__auto____$1;
}
} else {
return and__4659__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chrome,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17941_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__17941_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__17940_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__17940_SHARP_,"    at eval"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__17939_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__17939_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__17944 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17944,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17944,(1),null);
var vec__17945 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17945,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17945,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17945,(2),null);
if(cljs.core.truth_((function (){var and__4659__auto__ = file;
if(cljs.core.truth_(and__4659__auto__)){
var and__4659__auto____$1 = function$;
if(cljs.core.truth_(and__4659__auto____$1)){
var and__4659__auto____$2 = line;
if(cljs.core.truth_(and__4659__auto____$2)){
return column;
} else {
return and__4659__auto____$2;
}
} else {
return and__4659__auto____$1;
}
} else {
return and__4659__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$safari,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17948_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__17948_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__17947_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__17947_SHARP_,"eval code"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__17946_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__17946_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_(f__$1))?null:((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
var f__$3 = clojure.string.replace(clojure.string.replace(f__$2,/</,""),(new RegExp("\\/")),"");
return f__$3;
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__17951 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17951,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17951,(1),null);
var vec__17952 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17952,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17952,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17952,(2),null);
if(cljs.core.truth_((function (){var and__4659__auto__ = file;
if(cljs.core.truth_(and__4659__auto__)){
var and__4659__auto____$1 = function$;
if(cljs.core.truth_(and__4659__auto____$1)){
var and__4659__auto____$2 = line;
if(cljs.core.truth_(and__4659__auto____$2)){
return column;
} else {
return and__4659__auto____$2;
}
} else {
return and__4659__auto____$1;
}
} else {
return and__4659__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$firefox,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17955_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__17955_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__17954_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__17954_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__17953_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__17953_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rhino,(function (repl_env,st,err,p__17956){
var map__17957 = p__17956;
var map__17957__$1 = ((((!((map__17957 == null)))?((((map__17957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17957):map__17957);
var opts = map__17957__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17957__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__17957,map__17957__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__17965 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/:/);
var file_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17965,(0),null);
var line_fn_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17965,(1),null);
var file = clojure.string.replace(file_side,/\s+at\s+/,"");
var vec__17966 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line_fn_side,/\s+/);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17966,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17966,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),cljs.core.cst$kw$function,(cljs.core.truth_(function$)?clojure.string.replace(clojure.string.replace(function$,"(",""),")",""):null),cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__4659__auto__ = line;
if(cljs.core.truth_(and__4659__auto__)){
return !(clojure.string.blank_QMARK_(line));
} else {
return and__4659__auto__;
}
})())?cljs.stacktrace.parse_int(line):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__17957,map__17957__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nashorn,(function (repl_env,st,err,p__17967){
var map__17968 = p__17967;
var map__17968__$1 = ((((!((map__17968 == null)))?((((map__17968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17968):map__17968);
var opts = map__17968__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17968__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__17968,map__17968__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
var vec__17976 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17976,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17976,(1),null);
var vec__17977 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17977,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17977,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file_part.substring((1)),[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__4659__auto__ = line_part;
if(cljs.core.truth_(and__4659__auto__)){
return !(clojure.string.blank_QMARK_(line_part));
} else {
return and__4659__auto__;
}
})())?cljs.stacktrace.parse_int(line_part.substring((0),(cljs.core.count(line_part) - (1)))):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__17968,map__17968__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.stacktrace.remove_ext(file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last((function (){var or__4671__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (source_map){
return (function (p1__17978_SHARP_){
return (p1__17978_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(columns)))));
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (source_map){
return (function (p1__17979_SHARP_,p2__17980_SHARP_){
return (p1__17979_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17979_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__17980_SHARP_) : p1__17979_SHARP_.call(null,p2__17980_SHARP_));
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(source_map,(line - (1)));
if(cljs.core.truth_(temp__4423__auto__)){
var columns = temp__4423__auto__;
return adjust(cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_best_column(columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$col,cljs.core.cst$kw$name], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__17981,sms,opts){
var map__17985 = p__17981;
var map__17985__$1 = ((((!((map__17985 == null)))?((((map__17985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17985):map__17985);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17985__$1,cljs.core.cst$kw$function);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17985__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17985__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17985__$1,cljs.core.cst$kw$column);
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__17987 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17987,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17987,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17987,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_(file,".js"))?[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file,(0),(cljs.core.count(file) - (3)))),cljs.core.str(".cljs")].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$function,function$,cljs.core.cst$kw$call,call,cljs.core.cst$kw$file,((no_source_file_QMARK_)?[cljs.core.str("NO_SOURCE_FILE"),cljs.core.str((cljs.core.truth_(file)?[cljs.core.str(" "),cljs.core.str(file)].join(''):null))].join(''):file_SINGLEQUOTE_),cljs.core.cst$kw$line,line_SINGLEQUOTE_,cljs.core.cst$kw$column,column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var args17990 = [];
var len__5729__auto___17993 = arguments.length;
var i__5730__auto___17994 = (0);
while(true){
if((i__5730__auto___17994 < len__5729__auto___17993)){
args17990.push((arguments[i__5730__auto___17994]));

var G__17995 = (i__5730__auto___17994 + (1));
i__5730__auto___17994 = G__17995;
continue;
} else {
}
break;
}

var G__17992 = args17990.length;
switch (G__17992) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17990.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$function],[cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(munged_fn_name,clojure.string.replace(cljs.core.munge(unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),cljs.core.array_seq([function$,call], 0));
});
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__17988_SHARP_){
return cljs.stacktrace.mapped_frame(p1__17988_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mapped_frames){
return (function (p1__17989_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17989_SHARP_,cljs.core.cst$kw$call);
});})(mapped_frames))
,mapped_frames),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.map.cljs$core$IFn$_invoke$arity$2(call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;
/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var args17997 = [];
var len__5729__auto___18010 = arguments.length;
var i__5730__auto___18011 = (0);
while(true){
if((i__5730__auto___18011 < len__5729__auto___18010)){
args17997.push((arguments[i__5730__auto___18011]));

var G__18012 = (i__5730__auto___18011 + (1));
i__5730__auto___18011 = G__18012;
continue;
} else {
}
break;
}

var G__17999 = args17997.length;
switch (G__17999) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17997.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__5645__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_18000_18014 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_18001_18015 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_18000_18014,_STAR_print_fn_STAR_18001_18015,sb__5645__auto__){
return (function (x__5646__auto__){
return sb__5645__auto__.append(x__5646__auto__);
});})(_STAR_print_newline_STAR_18000_18014,_STAR_print_fn_STAR_18001_18015,sb__5645__auto__))
;

try{var seq__18002_18016 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__18003_18017 = null;
var count__18004_18018 = (0);
var i__18005_18019 = (0);
while(true){
if((i__18005_18019 < count__18004_18018)){
var map__18006_18020 = chunk__18003_18017.cljs$core$IIndexed$_nth$arity$2(null,i__18005_18019);
var map__18006_18021__$1 = ((((!((map__18006_18020 == null)))?((((map__18006_18020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18006_18020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18006_18020):map__18006_18020);
var function_18022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18006_18021__$1,cljs.core.cst$kw$function);
var file_18023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18006_18021__$1,cljs.core.cst$kw$file);
var line_18024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18006_18021__$1,cljs.core.cst$kw$line);
var column_18025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18006_18021__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\t",[cljs.core.str((cljs.core.truth_(function_18022)?[cljs.core.str(function_18022),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_18023),cljs.core.str((cljs.core.truth_(line_18024)?[cljs.core.str(":"),cljs.core.str(line_18024)].join(''):null)),cljs.core.str((cljs.core.truth_(column_18025)?[cljs.core.str(":"),cljs.core.str(column_18025)].join(''):null)),cljs.core.str(")")].join('')], 0));

var G__18026 = seq__18002_18016;
var G__18027 = chunk__18003_18017;
var G__18028 = count__18004_18018;
var G__18029 = (i__18005_18019 + (1));
seq__18002_18016 = G__18026;
chunk__18003_18017 = G__18027;
count__18004_18018 = G__18028;
i__18005_18019 = G__18029;
continue;
} else {
var temp__4425__auto___18030 = cljs.core.seq(seq__18002_18016);
if(temp__4425__auto___18030){
var seq__18002_18031__$1 = temp__4425__auto___18030;
if(cljs.core.chunked_seq_QMARK_(seq__18002_18031__$1)){
var c__5474__auto___18032 = cljs.core.chunk_first(seq__18002_18031__$1);
var G__18033 = cljs.core.chunk_rest(seq__18002_18031__$1);
var G__18034 = c__5474__auto___18032;
var G__18035 = cljs.core.count(c__5474__auto___18032);
var G__18036 = (0);
seq__18002_18016 = G__18033;
chunk__18003_18017 = G__18034;
count__18004_18018 = G__18035;
i__18005_18019 = G__18036;
continue;
} else {
var map__18008_18037 = cljs.core.first(seq__18002_18031__$1);
var map__18008_18038__$1 = ((((!((map__18008_18037 == null)))?((((map__18008_18037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18008_18037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18008_18037):map__18008_18037);
var function_18039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18008_18038__$1,cljs.core.cst$kw$function);
var file_18040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18008_18038__$1,cljs.core.cst$kw$file);
var line_18041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18008_18038__$1,cljs.core.cst$kw$line);
var column_18042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18008_18038__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\t",[cljs.core.str((cljs.core.truth_(function_18039)?[cljs.core.str(function_18039),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_18040),cljs.core.str((cljs.core.truth_(line_18041)?[cljs.core.str(":"),cljs.core.str(line_18041)].join(''):null)),cljs.core.str((cljs.core.truth_(column_18042)?[cljs.core.str(":"),cljs.core.str(column_18042)].join(''):null)),cljs.core.str(")")].join('')], 0));

var G__18043 = cljs.core.next(seq__18002_18031__$1);
var G__18044 = null;
var G__18045 = (0);
var G__18046 = (0);
seq__18002_18016 = G__18043;
chunk__18003_18017 = G__18044;
count__18004_18018 = G__18045;
i__18005_18019 = G__18046;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18001_18015;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18000_18014;
}
return [cljs.core.str(sb__5645__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;
