// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4425__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__11013_11027 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__11014_11028 = null;
var count__11015_11029 = (0);
var i__11016_11030 = (0);
while(true){
if((i__11016_11030 < count__11015_11029)){
var f_11031 = chunk__11014_11028.cljs$core$IIndexed$_nth$arity$2(null,i__11016_11030);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_11031], 0));

var G__11032 = seq__11013_11027;
var G__11033 = chunk__11014_11028;
var G__11034 = count__11015_11029;
var G__11035 = (i__11016_11030 + (1));
seq__11013_11027 = G__11032;
chunk__11014_11028 = G__11033;
count__11015_11029 = G__11034;
i__11016_11030 = G__11035;
continue;
} else {
var temp__4425__auto___11036 = cljs.core.seq(seq__11013_11027);
if(temp__4425__auto___11036){
var seq__11013_11037__$1 = temp__4425__auto___11036;
if(cljs.core.chunked_seq_QMARK_(seq__11013_11037__$1)){
var c__5474__auto___11038 = cljs.core.chunk_first(seq__11013_11037__$1);
var G__11039 = cljs.core.chunk_rest(seq__11013_11037__$1);
var G__11040 = c__5474__auto___11038;
var G__11041 = cljs.core.count(c__5474__auto___11038);
var G__11042 = (0);
seq__11013_11027 = G__11039;
chunk__11014_11028 = G__11040;
count__11015_11029 = G__11041;
i__11016_11030 = G__11042;
continue;
} else {
var f_11043 = cljs.core.first(seq__11013_11037__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_11043], 0));

var G__11044 = cljs.core.next(seq__11013_11037__$1);
var G__11045 = null;
var G__11046 = (0);
var G__11047 = (0);
seq__11013_11027 = G__11044;
chunk__11014_11028 = G__11045;
count__11015_11029 = G__11046;
i__11016_11030 = G__11047;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11048 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4671__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_11048], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_11048)))?cljs.core.second(arglists_11048):arglists_11048)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__11017 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__11018 = null;
var count__11019 = (0);
var i__11020 = (0);
while(true){
if((i__11020 < count__11019)){
var vec__11021 = chunk__11018.cljs$core$IIndexed$_nth$arity$2(null,i__11020);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11021,(0),null);
var map__11022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11021,(1),null);
var map__11022__$1 = ((((!((map__11022 == null)))?((((map__11022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11022):map__11022);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11022__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11022__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__11049 = seq__11017;
var G__11050 = chunk__11018;
var G__11051 = count__11019;
var G__11052 = (i__11020 + (1));
seq__11017 = G__11049;
chunk__11018 = G__11050;
count__11019 = G__11051;
i__11020 = G__11052;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11017);
if(temp__4425__auto__){
var seq__11017__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11017__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__11017__$1);
var G__11053 = cljs.core.chunk_rest(seq__11017__$1);
var G__11054 = c__5474__auto__;
var G__11055 = cljs.core.count(c__5474__auto__);
var G__11056 = (0);
seq__11017 = G__11053;
chunk__11018 = G__11054;
count__11019 = G__11055;
i__11020 = G__11056;
continue;
} else {
var vec__11024 = cljs.core.first(seq__11017__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11024,(0),null);
var map__11025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11024,(1),null);
var map__11025__$1 = ((((!((map__11025 == null)))?((((map__11025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11025):map__11025);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11025__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11025__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__11057 = cljs.core.next(seq__11017__$1);
var G__11058 = null;
var G__11059 = (0);
var G__11060 = (0);
seq__11017 = G__11057;
chunk__11018 = G__11058;
count__11019 = G__11059;
i__11020 = G__11060;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
