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
cljs.stacktrace.parse_stacktrace = (function (){var method_table__5584__auto__ = (function (){var G__11629 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11629) : cljs.core.atom.call(null,G__11629));
})();
var prefer_table__5585__auto__ = (function (){var G__11630 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11630) : cljs.core.atom.call(null,G__11630));
})();
var method_cache__5586__auto__ = (function (){var G__11631 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11631) : cljs.core.atom.call(null,G__11631));
})();
var cached_hierarchy__5587__auto__ = (function (){var G__11632 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11632) : cljs.core.atom.call(null,G__11632));
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
var vec__11642 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (xs){
return (function (p__11644,p__11645){
var vec__11646 = p__11644;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11646,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11646,(1),null);
var vec__11647 = p__11645;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11647,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11647,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(xs),(0),(-1))));
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11642,(0),null);
var vec__11643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11642,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11643,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11643,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11648 = file;
var G__11648__$1 = ((cljs.stacktrace.starts_with_QMARK_(file,"("))?clojure.string.replace(G__11648,"(",""):G__11648);
return G__11648__$1;
})(),cljs.stacktrace.parse_int((function (){var G__11649 = line;
var G__11649__$1 = ((cljs.stacktrace.ends_with_QMARK_(line,")"))?clojure.string.replace(G__11649,")",""):G__11649);
return G__11649__$1;
})()),cljs.stacktrace.parse_int((function (){var G__11650 = column;
var G__11650__$1 = ((cljs.stacktrace.ends_with_QMARK_(column,")"))?clojure.string.replace(G__11650,")",""):G__11650);
return G__11650__$1;
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__11651,file,p__11652){
var map__11657 = p__11651;
var map__11657__$1 = ((((!((map__11657 == null)))?((((map__11657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11657):map__11657);
var repl_env = map__11657__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11657__$1,cljs.core.cst$kw$host);
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11657__$1,cljs.core.cst$kw$host_DASH_port);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11657__$1,cljs.core.cst$kw$port);
var map__11658 = p__11652;
var map__11658__$1 = ((((!((map__11658 == null)))?((((map__11658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11658):map__11658);
var opts = map__11658__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11658__$1,cljs.core.cst$kw$asset_DASH_path);
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
var vec__11663 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11663,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11663,(1),null);
var vec__11664 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11664,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11664,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11664,(2),null);
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
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11667_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__11667_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__11666_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__11666_SHARP_,"    at eval"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__11665_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__11665_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__11670 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11670,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11670,(1),null);
var vec__11671 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11671,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11671,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11671,(2),null);
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
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11674_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__11674_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__11673_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__11673_SHARP_,"eval code"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__11672_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__11672_SHARP_,"Error");
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
var vec__11677 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11677,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11677,(1),null);
var vec__11678 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11678,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11678,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11678,(2),null);
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
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11681_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__11681_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__11680_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11680_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__11679_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__11679_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rhino,(function (repl_env,st,err,p__11682){
var map__11683 = p__11682;
var map__11683__$1 = ((((!((map__11683 == null)))?((((map__11683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11683):map__11683);
var opts = map__11683__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11683__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__11683,map__11683__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__11691 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/:/);
var file_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11691,(0),null);
var line_fn_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11691,(1),null);
var file = clojure.string.replace(file_side,/\s+at\s+/,"");
var vec__11692 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line_fn_side,/\s+/);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11692,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11692,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),cljs.core.cst$kw$function,(cljs.core.truth_(function$)?clojure.string.replace(clojure.string.replace(function$,"(",""),")",""):null),cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__4659__auto__ = line;
if(cljs.core.truth_(and__4659__auto__)){
return !(clojure.string.blank_QMARK_(line));
} else {
return and__4659__auto__;
}
})())?cljs.stacktrace.parse_int(line):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__11683,map__11683__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nashorn,(function (repl_env,st,err,p__11693){
var map__11694 = p__11693;
var map__11694__$1 = ((((!((map__11694 == null)))?((((map__11694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11694):map__11694);
var opts = map__11694__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11694__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__11694,map__11694__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
var vec__11702 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11702,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11702,(1),null);
var vec__11703 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11703,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11703,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file_part.substring((1)),[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__4659__auto__ = line_part;
if(cljs.core.truth_(and__4659__auto__)){
return !(clojure.string.blank_QMARK_(line_part));
} else {
return and__4659__auto__;
}
})())?cljs.stacktrace.parse_int(line_part.substring((0),(cljs.core.count(line_part) - (1)))):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__11694,map__11694__$1,opts,output_dir))
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
return (function (p1__11704_SHARP_){
return (p1__11704_SHARP_ <= (column__$1 - (1)));
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
return (function (p1__11705_SHARP_,p2__11706_SHARP_){
return (p1__11705_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11705_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__11706_SHARP_) : p1__11705_SHARP_.call(null,p2__11706_SHARP_));
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
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__11707,sms,opts){
var map__11711 = p__11707;
var map__11711__$1 = ((((!((map__11711 == null)))?((((map__11711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11711):map__11711);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11711__$1,cljs.core.cst$kw$function);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11711__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11711__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11711__$1,cljs.core.cst$kw$column);
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__11713 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11713,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11713,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11713,(2),null);
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
var args11716 = [];
var len__5729__auto___11719 = arguments.length;
var i__5730__auto___11720 = (0);
while(true){
if((i__5730__auto___11720 < len__5729__auto___11719)){
args11716.push((arguments[i__5730__auto___11720]));

var G__11721 = (i__5730__auto___11720 + (1));
i__5730__auto___11720 = G__11721;
continue;
} else {
}
break;
}

var G__11718 = args11716.length;
switch (G__11718) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11716.length)].join('')));

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
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__11714_SHARP_){
return cljs.stacktrace.mapped_frame(p1__11714_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mapped_frames){
return (function (p1__11715_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__11715_SHARP_,cljs.core.cst$kw$call);
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
var args11723 = [];
var len__5729__auto___11736 = arguments.length;
var i__5730__auto___11737 = (0);
while(true){
if((i__5730__auto___11737 < len__5729__auto___11736)){
args11723.push((arguments[i__5730__auto___11737]));

var G__11738 = (i__5730__auto___11737 + (1));
i__5730__auto___11737 = G__11738;
continue;
} else {
}
break;
}

var G__11725 = args11723.length;
switch (G__11725) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11723.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__5645__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_11726_11740 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11727_11741 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11726_11740,_STAR_print_fn_STAR_11727_11741,sb__5645__auto__){
return (function (x__5646__auto__){
return sb__5645__auto__.append(x__5646__auto__);
});})(_STAR_print_newline_STAR_11726_11740,_STAR_print_fn_STAR_11727_11741,sb__5645__auto__))
;

try{var seq__11728_11742 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__11729_11743 = null;
var count__11730_11744 = (0);
var i__11731_11745 = (0);
while(true){
if((i__11731_11745 < count__11730_11744)){
var map__11732_11746 = chunk__11729_11743.cljs$core$IIndexed$_nth$arity$2(null,i__11731_11745);
var map__11732_11747__$1 = ((((!((map__11732_11746 == null)))?((((map__11732_11746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11732_11746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11732_11746):map__11732_11746);
var function_11748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11732_11747__$1,cljs.core.cst$kw$function);
var file_11749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11732_11747__$1,cljs.core.cst$kw$file);
var line_11750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11732_11747__$1,cljs.core.cst$kw$line);
var column_11751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11732_11747__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\t",[cljs.core.str((cljs.core.truth_(function_11748)?[cljs.core.str(function_11748),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_11749),cljs.core.str((cljs.core.truth_(line_11750)?[cljs.core.str(":"),cljs.core.str(line_11750)].join(''):null)),cljs.core.str((cljs.core.truth_(column_11751)?[cljs.core.str(":"),cljs.core.str(column_11751)].join(''):null)),cljs.core.str(")")].join('')], 0));

var G__11752 = seq__11728_11742;
var G__11753 = chunk__11729_11743;
var G__11754 = count__11730_11744;
var G__11755 = (i__11731_11745 + (1));
seq__11728_11742 = G__11752;
chunk__11729_11743 = G__11753;
count__11730_11744 = G__11754;
i__11731_11745 = G__11755;
continue;
} else {
var temp__4425__auto___11756 = cljs.core.seq(seq__11728_11742);
if(temp__4425__auto___11756){
var seq__11728_11757__$1 = temp__4425__auto___11756;
if(cljs.core.chunked_seq_QMARK_(seq__11728_11757__$1)){
var c__5474__auto___11758 = cljs.core.chunk_first(seq__11728_11757__$1);
var G__11759 = cljs.core.chunk_rest(seq__11728_11757__$1);
var G__11760 = c__5474__auto___11758;
var G__11761 = cljs.core.count(c__5474__auto___11758);
var G__11762 = (0);
seq__11728_11742 = G__11759;
chunk__11729_11743 = G__11760;
count__11730_11744 = G__11761;
i__11731_11745 = G__11762;
continue;
} else {
var map__11734_11763 = cljs.core.first(seq__11728_11757__$1);
var map__11734_11764__$1 = ((((!((map__11734_11763 == null)))?((((map__11734_11763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11734_11763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11734_11763):map__11734_11763);
var function_11765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11734_11764__$1,cljs.core.cst$kw$function);
var file_11766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11734_11764__$1,cljs.core.cst$kw$file);
var line_11767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11734_11764__$1,cljs.core.cst$kw$line);
var column_11768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11734_11764__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\t",[cljs.core.str((cljs.core.truth_(function_11765)?[cljs.core.str(function_11765),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_11766),cljs.core.str((cljs.core.truth_(line_11767)?[cljs.core.str(":"),cljs.core.str(line_11767)].join(''):null)),cljs.core.str((cljs.core.truth_(column_11768)?[cljs.core.str(":"),cljs.core.str(column_11768)].join(''):null)),cljs.core.str(")")].join('')], 0));

var G__11769 = cljs.core.next(seq__11728_11757__$1);
var G__11770 = null;
var G__11771 = (0);
var G__11772 = (0);
seq__11728_11742 = G__11769;
chunk__11729_11743 = G__11770;
count__11730_11744 = G__11771;
i__11731_11745 = G__11772;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11727_11741;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11726_11740;
}
return [cljs.core.str(sb__5645__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;
