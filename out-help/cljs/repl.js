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
var seq__11196_11210 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__11197_11211 = null;
var count__11198_11212 = (0);
var i__11199_11213 = (0);
while(true){
if((i__11199_11213 < count__11198_11212)){
var f_11214 = chunk__11197_11211.cljs$core$IIndexed$_nth$arity$2(null,i__11199_11213);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_11214], 0));

var G__11215 = seq__11196_11210;
var G__11216 = chunk__11197_11211;
var G__11217 = count__11198_11212;
var G__11218 = (i__11199_11213 + (1));
seq__11196_11210 = G__11215;
chunk__11197_11211 = G__11216;
count__11198_11212 = G__11217;
i__11199_11213 = G__11218;
continue;
} else {
var temp__4425__auto___11219 = cljs.core.seq(seq__11196_11210);
if(temp__4425__auto___11219){
var seq__11196_11220__$1 = temp__4425__auto___11219;
if(cljs.core.chunked_seq_QMARK_(seq__11196_11220__$1)){
var c__5474__auto___11221 = cljs.core.chunk_first(seq__11196_11220__$1);
var G__11222 = cljs.core.chunk_rest(seq__11196_11220__$1);
var G__11223 = c__5474__auto___11221;
var G__11224 = cljs.core.count(c__5474__auto___11221);
var G__11225 = (0);
seq__11196_11210 = G__11222;
chunk__11197_11211 = G__11223;
count__11198_11212 = G__11224;
i__11199_11213 = G__11225;
continue;
} else {
var f_11226 = cljs.core.first(seq__11196_11220__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_11226], 0));

var G__11227 = cljs.core.next(seq__11196_11220__$1);
var G__11228 = null;
var G__11229 = (0);
var G__11230 = (0);
seq__11196_11210 = G__11227;
chunk__11197_11211 = G__11228;
count__11198_11212 = G__11229;
i__11199_11213 = G__11230;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11231 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4671__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_11231], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_11231)))?cljs.core.second(arglists_11231):arglists_11231)], 0));
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
var seq__11200 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__11201 = null;
var count__11202 = (0);
var i__11203 = (0);
while(true){
if((i__11203 < count__11202)){
var vec__11204 = chunk__11201.cljs$core$IIndexed$_nth$arity$2(null,i__11203);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11204,(0),null);
var map__11205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11204,(1),null);
var map__11205__$1 = ((((!((map__11205 == null)))?((((map__11205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11205):map__11205);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11205__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11205__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__11232 = seq__11200;
var G__11233 = chunk__11201;
var G__11234 = count__11202;
var G__11235 = (i__11203 + (1));
seq__11200 = G__11232;
chunk__11201 = G__11233;
count__11202 = G__11234;
i__11203 = G__11235;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11200);
if(temp__4425__auto__){
var seq__11200__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11200__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__11200__$1);
var G__11236 = cljs.core.chunk_rest(seq__11200__$1);
var G__11237 = c__5474__auto__;
var G__11238 = cljs.core.count(c__5474__auto__);
var G__11239 = (0);
seq__11200 = G__11236;
chunk__11201 = G__11237;
count__11202 = G__11238;
i__11203 = G__11239;
continue;
} else {
var vec__11207 = cljs.core.first(seq__11200__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11207,(0),null);
var map__11208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11207,(1),null);
var map__11208__$1 = ((((!((map__11208 == null)))?((((map__11208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11208):map__11208);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11208__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11208__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__11240 = cljs.core.next(seq__11200__$1);
var G__11241 = null;
var G__11242 = (0);
var G__11243 = (0);
seq__11200 = G__11240;
chunk__11201 = G__11241;
count__11202 = G__11242;
i__11203 = G__11243;
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
