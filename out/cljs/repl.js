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
var seq__11216_11230 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__11217_11231 = null;
var count__11218_11232 = (0);
var i__11219_11233 = (0);
while(true){
if((i__11219_11233 < count__11218_11232)){
var f_11234 = chunk__11217_11231.cljs$core$IIndexed$_nth$arity$2(null,i__11219_11233);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_11234], 0));

var G__11235 = seq__11216_11230;
var G__11236 = chunk__11217_11231;
var G__11237 = count__11218_11232;
var G__11238 = (i__11219_11233 + (1));
seq__11216_11230 = G__11235;
chunk__11217_11231 = G__11236;
count__11218_11232 = G__11237;
i__11219_11233 = G__11238;
continue;
} else {
var temp__4425__auto___11239 = cljs.core.seq(seq__11216_11230);
if(temp__4425__auto___11239){
var seq__11216_11240__$1 = temp__4425__auto___11239;
if(cljs.core.chunked_seq_QMARK_(seq__11216_11240__$1)){
var c__5474__auto___11241 = cljs.core.chunk_first(seq__11216_11240__$1);
var G__11242 = cljs.core.chunk_rest(seq__11216_11240__$1);
var G__11243 = c__5474__auto___11241;
var G__11244 = cljs.core.count(c__5474__auto___11241);
var G__11245 = (0);
seq__11216_11230 = G__11242;
chunk__11217_11231 = G__11243;
count__11218_11232 = G__11244;
i__11219_11233 = G__11245;
continue;
} else {
var f_11246 = cljs.core.first(seq__11216_11240__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_11246], 0));

var G__11247 = cljs.core.next(seq__11216_11240__$1);
var G__11248 = null;
var G__11249 = (0);
var G__11250 = (0);
seq__11216_11230 = G__11247;
chunk__11217_11231 = G__11248;
count__11218_11232 = G__11249;
i__11219_11233 = G__11250;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11251 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4671__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_11251], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_11251)))?cljs.core.second(arglists_11251):arglists_11251)], 0));
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
var seq__11220 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__11221 = null;
var count__11222 = (0);
var i__11223 = (0);
while(true){
if((i__11223 < count__11222)){
var vec__11224 = chunk__11221.cljs$core$IIndexed$_nth$arity$2(null,i__11223);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11224,(0),null);
var map__11225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11224,(1),null);
var map__11225__$1 = ((((!((map__11225 == null)))?((((map__11225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11225):map__11225);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11225__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11225__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__11252 = seq__11220;
var G__11253 = chunk__11221;
var G__11254 = count__11222;
var G__11255 = (i__11223 + (1));
seq__11220 = G__11252;
chunk__11221 = G__11253;
count__11222 = G__11254;
i__11223 = G__11255;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11220);
if(temp__4425__auto__){
var seq__11220__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11220__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__11220__$1);
var G__11256 = cljs.core.chunk_rest(seq__11220__$1);
var G__11257 = c__5474__auto__;
var G__11258 = cljs.core.count(c__5474__auto__);
var G__11259 = (0);
seq__11220 = G__11256;
chunk__11221 = G__11257;
count__11222 = G__11258;
i__11223 = G__11259;
continue;
} else {
var vec__11227 = cljs.core.first(seq__11220__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11227,(0),null);
var map__11228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11227,(1),null);
var map__11228__$1 = ((((!((map__11228 == null)))?((((map__11228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11228):map__11228);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11228__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11228__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__11260 = cljs.core.next(seq__11220__$1);
var G__11261 = null;
var G__11262 = (0);
var G__11263 = (0);
seq__11220 = G__11260;
chunk__11221 = G__11261;
count__11222 = G__11262;
i__11223 = G__11263;
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
