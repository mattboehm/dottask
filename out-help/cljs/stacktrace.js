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
cljs.stacktrace.parse_stacktrace = (function (){var method_table__5584__auto__ = (function (){var G__17901 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17901) : cljs.core.atom.call(null,G__17901));
})();
var prefer_table__5585__auto__ = (function (){var G__17902 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17902) : cljs.core.atom.call(null,G__17902));
})();
var method_cache__5586__auto__ = (function (){var G__17903 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17903) : cljs.core.atom.call(null,G__17903));
})();
var cached_hierarchy__5587__auto__ = (function (){var G__17904 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17904) : cljs.core.atom.call(null,G__17904));
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
var vec__17914 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (xs){
return (function (p__17916,p__17917){
var vec__17918 = p__17916;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17918,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17918,(1),null);
var vec__17919 = p__17917;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17919,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17919,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(xs),(0),(-1))));
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17914,(0),null);
var vec__17915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17914,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17915,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17915,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17920 = file;
var G__17920__$1 = ((cljs.stacktrace.starts_with_QMARK_(file,"("))?clojure.string.replace(G__17920,"(",""):G__17920);
return G__17920__$1;
})(),cljs.stacktrace.parse_int((function (){var G__17921 = line;
var G__17921__$1 = ((cljs.stacktrace.ends_with_QMARK_(line,")"))?clojure.string.replace(G__17921,")",""):G__17921);
return G__17921__$1;
})()),cljs.stacktrace.parse_int((function (){var G__17922 = column;
var G__17922__$1 = ((cljs.stacktrace.ends_with_QMARK_(column,")"))?clojure.string.replace(G__17922,")",""):G__17922);
return G__17922__$1;
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__17923,file,p__17924){
var map__17929 = p__17923;
var map__17929__$1 = ((((!((map__17929 == null)))?((((map__17929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17929):map__17929);
var repl_env = map__17929__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17929__$1,cljs.core.cst$kw$host);
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17929__$1,cljs.core.cst$kw$host_DASH_port);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17929__$1,cljs.core.cst$kw$port);
var map__17930 = p__17924;
var map__17930__$1 = ((((!((map__17930 == null)))?((((map__17930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17930):map__17930);
var opts = map__17930__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17930__$1,cljs.core.cst$kw$asset_DASH_path);
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
var vec__17935 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17935,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17935,(1),null);
var vec__17936 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17936,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17936,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17936,(2),null);
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
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17939_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__17939_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__17938_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__17938_SHARP_,"    at eval"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__17937_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__17937_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__17942 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17942,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17942,(1),null);
var vec__17943 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17943,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17943,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17943,(2),null);
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
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17946_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__17946_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__17945_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__17945_SHARP_,"eval code"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__17944_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__17944_SHARP_,"Error");
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
var vec__17949 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17949,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17949,(1),null);
var vec__17950 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17950,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17950,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17950,(2),null);
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
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17953_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__17953_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__17952_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__17952_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__17951_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__17951_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rhino,(function (repl_env,st,err,p__17954){
var map__17955 = p__17954;
var map__17955__$1 = ((((!((map__17955 == null)))?((((map__17955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17955):map__17955);
var opts = map__17955__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17955__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__17955,map__17955__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__17963 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/:/);
var file_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17963,(0),null);
var line_fn_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17963,(1),null);
var file = clojure.string.replace(file_side,/\s+at\s+/,"");
var vec__17964 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line_fn_side,/\s+/);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17964,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17964,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),cljs.core.cst$kw$function,(cljs.core.truth_(function$)?clojure.string.replace(clojure.string.replace(function$,"(",""),")",""):null),cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__4659__auto__ = line;
if(cljs.core.truth_(and__4659__auto__)){
return !(clojure.string.blank_QMARK_(line));
} else {
return and__4659__auto__;
}
})())?cljs.stacktrace.parse_int(line):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__17955,map__17955__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nashorn,(function (repl_env,st,err,p__17965){
var map__17966 = p__17965;
var map__17966__$1 = ((((!((map__17966 == null)))?((((map__17966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17966):map__17966);
var opts = map__17966__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17966__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__17966,map__17966__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
var vec__17974 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17974,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17974,(1),null);
var vec__17975 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17975,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17975,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file_part.substring((1)),[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__4659__auto__ = line_part;
if(cljs.core.truth_(and__4659__auto__)){
return !(clojure.string.blank_QMARK_(line_part));
} else {
return and__4659__auto__;
}
})())?cljs.stacktrace.parse_int(line_part.substring((0),(cljs.core.count(line_part) - (1)))):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__17966,map__17966__$1,opts,output_dir))
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
return (function (p1__17976_SHARP_){
return (p1__17976_SHARP_ <= (column__$1 - (1)));
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
return (function (p1__17977_SHARP_,p2__17978_SHARP_){
return (p1__17977_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17977_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__17978_SHARP_) : p1__17977_SHARP_.call(null,p2__17978_SHARP_));
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
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__17979,sms,opts){
var map__17983 = p__17979;
var map__17983__$1 = ((((!((map__17983 == null)))?((((map__17983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17983):map__17983);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17983__$1,cljs.core.cst$kw$function);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17983__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17983__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17983__$1,cljs.core.cst$kw$column);
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__17985 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17985,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17985,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17985,(2),null);
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
var args17988 = [];
var len__5729__auto___17991 = arguments.length;
var i__5730__auto___17992 = (0);
while(true){
if((i__5730__auto___17992 < len__5729__auto___17991)){
args17988.push((arguments[i__5730__auto___17992]));

var G__17993 = (i__5730__auto___17992 + (1));
i__5730__auto___17992 = G__17993;
continue;
} else {
}
break;
}

var G__17990 = args17988.length;
switch (G__17990) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17988.length)].join('')));

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
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__17986_SHARP_){
return cljs.stacktrace.mapped_frame(p1__17986_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mapped_frames){
return (function (p1__17987_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17987_SHARP_,cljs.core.cst$kw$call);
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
var args17995 = [];
var len__5729__auto___18008 = arguments.length;
var i__5730__auto___18009 = (0);
while(true){
if((i__5730__auto___18009 < len__5729__auto___18008)){
args17995.push((arguments[i__5730__auto___18009]));

var G__18010 = (i__5730__auto___18009 + (1));
i__5730__auto___18009 = G__18010;
continue;
} else {
}
break;
}

var G__17997 = args17995.length;
switch (G__17997) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17995.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__5645__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_17998_18012 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_17999_18013 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_17998_18012,_STAR_print_fn_STAR_17999_18013,sb__5645__auto__){
return (function (x__5646__auto__){
return sb__5645__auto__.append(x__5646__auto__);
});})(_STAR_print_newline_STAR_17998_18012,_STAR_print_fn_STAR_17999_18013,sb__5645__auto__))
;

try{var seq__18000_18014 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__18001_18015 = null;
var count__18002_18016 = (0);
var i__18003_18017 = (0);
while(true){
if((i__18003_18017 < count__18002_18016)){
var map__18004_18018 = chunk__18001_18015.cljs$core$IIndexed$_nth$arity$2(null,i__18003_18017);
var map__18004_18019__$1 = ((((!((map__18004_18018 == null)))?((((map__18004_18018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18004_18018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18004_18018):map__18004_18018);
var function_18020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18004_18019__$1,cljs.core.cst$kw$function);
var file_18021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18004_18019__$1,cljs.core.cst$kw$file);
var line_18022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18004_18019__$1,cljs.core.cst$kw$line);
var column_18023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18004_18019__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\t",[cljs.core.str((cljs.core.truth_(function_18020)?[cljs.core.str(function_18020),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_18021),cljs.core.str((cljs.core.truth_(line_18022)?[cljs.core.str(":"),cljs.core.str(line_18022)].join(''):null)),cljs.core.str((cljs.core.truth_(column_18023)?[cljs.core.str(":"),cljs.core.str(column_18023)].join(''):null)),cljs.core.str(")")].join('')], 0));

var G__18024 = seq__18000_18014;
var G__18025 = chunk__18001_18015;
var G__18026 = count__18002_18016;
var G__18027 = (i__18003_18017 + (1));
seq__18000_18014 = G__18024;
chunk__18001_18015 = G__18025;
count__18002_18016 = G__18026;
i__18003_18017 = G__18027;
continue;
} else {
var temp__4425__auto___18028 = cljs.core.seq(seq__18000_18014);
if(temp__4425__auto___18028){
var seq__18000_18029__$1 = temp__4425__auto___18028;
if(cljs.core.chunked_seq_QMARK_(seq__18000_18029__$1)){
var c__5474__auto___18030 = cljs.core.chunk_first(seq__18000_18029__$1);
var G__18031 = cljs.core.chunk_rest(seq__18000_18029__$1);
var G__18032 = c__5474__auto___18030;
var G__18033 = cljs.core.count(c__5474__auto___18030);
var G__18034 = (0);
seq__18000_18014 = G__18031;
chunk__18001_18015 = G__18032;
count__18002_18016 = G__18033;
i__18003_18017 = G__18034;
continue;
} else {
var map__18006_18035 = cljs.core.first(seq__18000_18029__$1);
var map__18006_18036__$1 = ((((!((map__18006_18035 == null)))?((((map__18006_18035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18006_18035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18006_18035):map__18006_18035);
var function_18037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18006_18036__$1,cljs.core.cst$kw$function);
var file_18038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18006_18036__$1,cljs.core.cst$kw$file);
var line_18039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18006_18036__$1,cljs.core.cst$kw$line);
var column_18040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18006_18036__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\t",[cljs.core.str((cljs.core.truth_(function_18037)?[cljs.core.str(function_18037),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_18038),cljs.core.str((cljs.core.truth_(line_18039)?[cljs.core.str(":"),cljs.core.str(line_18039)].join(''):null)),cljs.core.str((cljs.core.truth_(column_18040)?[cljs.core.str(":"),cljs.core.str(column_18040)].join(''):null)),cljs.core.str(")")].join('')], 0));

var G__18041 = cljs.core.next(seq__18000_18029__$1);
var G__18042 = null;
var G__18043 = (0);
var G__18044 = (0);
seq__18000_18014 = G__18041;
chunk__18001_18015 = G__18042;
count__18002_18016 = G__18043;
i__18003_18017 = G__18044;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17999_18013;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17998_18012;
}
return [cljs.core.str(sb__5645__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;
