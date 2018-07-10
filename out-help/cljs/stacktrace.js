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
cljs.stacktrace.parse_stacktrace = (function (){var method_table__5584__auto__ = (function (){var G__17931 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17931) : cljs.core.atom.call(null,G__17931));
})();
var prefer_table__5585__auto__ = (function (){var G__17932 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17932) : cljs.core.atom.call(null,G__17932));
})();
var method_cache__5586__auto__ = (function (){var G__17933 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17933) : cljs.core.atom.call(null,G__17933));
})();
var cached_hierarchy__5587__auto__ = (function (){var G__17934 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17934) : cljs.core.atom.call(null,G__17934));
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
var vec__17944 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (xs){
return (function (p__17946,p__17947){
var vec__17948 = p__17946;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17948,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17948,(1),null);
var vec__17949 = p__17947;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17949,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17949,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(xs),(0),(-1))));
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17944,(0),null);
var vec__17945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17944,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17945,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17945,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17950 = file;
var G__17950__$1 = ((cljs.stacktrace.starts_with_QMARK_(file,"("))?clojure.string.replace(G__17950,"(",""):G__17950);
return G__17950__$1;
})(),cljs.stacktrace.parse_int((function (){var G__17951 = line;
var G__17951__$1 = ((cljs.stacktrace.ends_with_QMARK_(line,")"))?clojure.string.replace(G__17951,")",""):G__17951);
return G__17951__$1;
})()),cljs.stacktrace.parse_int((function (){var G__17952 = column;
var G__17952__$1 = ((cljs.stacktrace.ends_with_QMARK_(column,")"))?clojure.string.replace(G__17952,")",""):G__17952);
return G__17952__$1;
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__17953,file,p__17954){
var map__17959 = p__17953;
var map__17959__$1 = ((((!((map__17959 == null)))?((((map__17959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17959):map__17959);
var repl_env = map__17959__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17959__$1,cljs.core.cst$kw$host);
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17959__$1,cljs.core.cst$kw$host_DASH_port);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17959__$1,cljs.core.cst$kw$port);
var map__17960 = p__17954;
var map__17960__$1 = ((((!((map__17960 == null)))?((((map__17960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17960):map__17960);
var opts = map__17960__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17960__$1,cljs.core.cst$kw$asset_DASH_path);
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
var vec__17965 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17965,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17965,(1),null);
var vec__17966 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17966,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17966,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17966,(2),null);
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
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17969_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__17969_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__17968_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__17968_SHARP_,"    at eval"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__17967_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__17967_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__17972 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17972,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17972,(1),null);
var vec__17973 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17973,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17973,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17973,(2),null);
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
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17976_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__17976_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__17975_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__17975_SHARP_,"eval code"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__17974_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__17974_SHARP_,"Error");
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
var vec__17979 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17979,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17979,(1),null);
var vec__17980 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17980,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17980,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17980,(2),null);
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
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17983_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__17983_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__17982_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__17982_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__17981_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__17981_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rhino,(function (repl_env,st,err,p__17984){
var map__17985 = p__17984;
var map__17985__$1 = ((((!((map__17985 == null)))?((((map__17985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17985):map__17985);
var opts = map__17985__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17985__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__17985,map__17985__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__17993 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/:/);
var file_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17993,(0),null);
var line_fn_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17993,(1),null);
var file = clojure.string.replace(file_side,/\s+at\s+/,"");
var vec__17994 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line_fn_side,/\s+/);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17994,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17994,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),cljs.core.cst$kw$function,(cljs.core.truth_(function$)?clojure.string.replace(clojure.string.replace(function$,"(",""),")",""):null),cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__4659__auto__ = line;
if(cljs.core.truth_(and__4659__auto__)){
return !(clojure.string.blank_QMARK_(line));
} else {
return and__4659__auto__;
}
})())?cljs.stacktrace.parse_int(line):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__17985,map__17985__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nashorn,(function (repl_env,st,err,p__17995){
var map__17996 = p__17995;
var map__17996__$1 = ((((!((map__17996 == null)))?((((map__17996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17996):map__17996);
var opts = map__17996__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17996__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__17996,map__17996__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
var vec__18004 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18004,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18004,(1),null);
var vec__18005 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18005,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18005,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file_part.substring((1)),[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__4659__auto__ = line_part;
if(cljs.core.truth_(and__4659__auto__)){
return !(clojure.string.blank_QMARK_(line_part));
} else {
return and__4659__auto__;
}
})())?cljs.stacktrace.parse_int(line_part.substring((0),(cljs.core.count(line_part) - (1)))):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__17996,map__17996__$1,opts,output_dir))
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
return (function (p1__18006_SHARP_){
return (p1__18006_SHARP_ <= (column__$1 - (1)));
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
return (function (p1__18007_SHARP_,p2__18008_SHARP_){
return (p1__18007_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18007_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__18008_SHARP_) : p1__18007_SHARP_.call(null,p2__18008_SHARP_));
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
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__18009,sms,opts){
var map__18013 = p__18009;
var map__18013__$1 = ((((!((map__18013 == null)))?((((map__18013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18013):map__18013);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18013__$1,cljs.core.cst$kw$function);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18013__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18013__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18013__$1,cljs.core.cst$kw$column);
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__18015 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18015,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18015,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18015,(2),null);
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
var args18018 = [];
var len__5729__auto___18021 = arguments.length;
var i__5730__auto___18022 = (0);
while(true){
if((i__5730__auto___18022 < len__5729__auto___18021)){
args18018.push((arguments[i__5730__auto___18022]));

var G__18023 = (i__5730__auto___18022 + (1));
i__5730__auto___18022 = G__18023;
continue;
} else {
}
break;
}

var G__18020 = args18018.length;
switch (G__18020) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18018.length)].join('')));

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
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__18016_SHARP_){
return cljs.stacktrace.mapped_frame(p1__18016_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mapped_frames){
return (function (p1__18017_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18017_SHARP_,cljs.core.cst$kw$call);
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
var args18025 = [];
var len__5729__auto___18038 = arguments.length;
var i__5730__auto___18039 = (0);
while(true){
if((i__5730__auto___18039 < len__5729__auto___18038)){
args18025.push((arguments[i__5730__auto___18039]));

var G__18040 = (i__5730__auto___18039 + (1));
i__5730__auto___18039 = G__18040;
continue;
} else {
}
break;
}

var G__18027 = args18025.length;
switch (G__18027) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18025.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__5645__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_18028_18042 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_18029_18043 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_18028_18042,_STAR_print_fn_STAR_18029_18043,sb__5645__auto__){
return (function (x__5646__auto__){
return sb__5645__auto__.append(x__5646__auto__);
});})(_STAR_print_newline_STAR_18028_18042,_STAR_print_fn_STAR_18029_18043,sb__5645__auto__))
;

try{var seq__18030_18044 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__18031_18045 = null;
var count__18032_18046 = (0);
var i__18033_18047 = (0);
while(true){
if((i__18033_18047 < count__18032_18046)){
var map__18034_18048 = chunk__18031_18045.cljs$core$IIndexed$_nth$arity$2(null,i__18033_18047);
var map__18034_18049__$1 = ((((!((map__18034_18048 == null)))?((((map__18034_18048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18034_18048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18034_18048):map__18034_18048);
var function_18050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18034_18049__$1,cljs.core.cst$kw$function);
var file_18051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18034_18049__$1,cljs.core.cst$kw$file);
var line_18052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18034_18049__$1,cljs.core.cst$kw$line);
var column_18053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18034_18049__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\t",[cljs.core.str((cljs.core.truth_(function_18050)?[cljs.core.str(function_18050),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_18051),cljs.core.str((cljs.core.truth_(line_18052)?[cljs.core.str(":"),cljs.core.str(line_18052)].join(''):null)),cljs.core.str((cljs.core.truth_(column_18053)?[cljs.core.str(":"),cljs.core.str(column_18053)].join(''):null)),cljs.core.str(")")].join('')], 0));

var G__18054 = seq__18030_18044;
var G__18055 = chunk__18031_18045;
var G__18056 = count__18032_18046;
var G__18057 = (i__18033_18047 + (1));
seq__18030_18044 = G__18054;
chunk__18031_18045 = G__18055;
count__18032_18046 = G__18056;
i__18033_18047 = G__18057;
continue;
} else {
var temp__4425__auto___18058 = cljs.core.seq(seq__18030_18044);
if(temp__4425__auto___18058){
var seq__18030_18059__$1 = temp__4425__auto___18058;
if(cljs.core.chunked_seq_QMARK_(seq__18030_18059__$1)){
var c__5474__auto___18060 = cljs.core.chunk_first(seq__18030_18059__$1);
var G__18061 = cljs.core.chunk_rest(seq__18030_18059__$1);
var G__18062 = c__5474__auto___18060;
var G__18063 = cljs.core.count(c__5474__auto___18060);
var G__18064 = (0);
seq__18030_18044 = G__18061;
chunk__18031_18045 = G__18062;
count__18032_18046 = G__18063;
i__18033_18047 = G__18064;
continue;
} else {
var map__18036_18065 = cljs.core.first(seq__18030_18059__$1);
var map__18036_18066__$1 = ((((!((map__18036_18065 == null)))?((((map__18036_18065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18036_18065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18036_18065):map__18036_18065);
var function_18067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18036_18066__$1,cljs.core.cst$kw$function);
var file_18068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18036_18066__$1,cljs.core.cst$kw$file);
var line_18069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18036_18066__$1,cljs.core.cst$kw$line);
var column_18070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18036_18066__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\t",[cljs.core.str((cljs.core.truth_(function_18067)?[cljs.core.str(function_18067),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_18068),cljs.core.str((cljs.core.truth_(line_18069)?[cljs.core.str(":"),cljs.core.str(line_18069)].join(''):null)),cljs.core.str((cljs.core.truth_(column_18070)?[cljs.core.str(":"),cljs.core.str(column_18070)].join(''):null)),cljs.core.str(")")].join('')], 0));

var G__18071 = cljs.core.next(seq__18030_18059__$1);
var G__18072 = null;
var G__18073 = (0);
var G__18074 = (0);
seq__18030_18044 = G__18071;
chunk__18031_18045 = G__18072;
count__18032_18046 = G__18073;
i__18033_18047 = G__18074;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18029_18043;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18028_18042;
}
return [cljs.core.str(sb__5645__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;
