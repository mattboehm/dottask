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
var seq__17451_17465 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__17452_17466 = null;
var count__17453_17467 = (0);
var i__17454_17468 = (0);
while(true){
if((i__17454_17468 < count__17453_17467)){
var f_17469 = chunk__17452_17466.cljs$core$IIndexed$_nth$arity$2(null,i__17454_17468);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_17469], 0));

var G__17470 = seq__17451_17465;
var G__17471 = chunk__17452_17466;
var G__17472 = count__17453_17467;
var G__17473 = (i__17454_17468 + (1));
seq__17451_17465 = G__17470;
chunk__17452_17466 = G__17471;
count__17453_17467 = G__17472;
i__17454_17468 = G__17473;
continue;
} else {
var temp__4425__auto___17474 = cljs.core.seq(seq__17451_17465);
if(temp__4425__auto___17474){
var seq__17451_17475__$1 = temp__4425__auto___17474;
if(cljs.core.chunked_seq_QMARK_(seq__17451_17475__$1)){
var c__5474__auto___17476 = cljs.core.chunk_first(seq__17451_17475__$1);
var G__17477 = cljs.core.chunk_rest(seq__17451_17475__$1);
var G__17478 = c__5474__auto___17476;
var G__17479 = cljs.core.count(c__5474__auto___17476);
var G__17480 = (0);
seq__17451_17465 = G__17477;
chunk__17452_17466 = G__17478;
count__17453_17467 = G__17479;
i__17454_17468 = G__17480;
continue;
} else {
var f_17481 = cljs.core.first(seq__17451_17475__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_17481], 0));

var G__17482 = cljs.core.next(seq__17451_17475__$1);
var G__17483 = null;
var G__17484 = (0);
var G__17485 = (0);
seq__17451_17465 = G__17482;
chunk__17452_17466 = G__17483;
count__17453_17467 = G__17484;
i__17454_17468 = G__17485;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17486 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4671__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_17486], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_17486)))?cljs.core.second(arglists_17486):arglists_17486)], 0));
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
var seq__17455 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__17456 = null;
var count__17457 = (0);
var i__17458 = (0);
while(true){
if((i__17458 < count__17457)){
var vec__17459 = chunk__17456.cljs$core$IIndexed$_nth$arity$2(null,i__17458);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17459,(0),null);
var map__17460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17459,(1),null);
var map__17460__$1 = ((((!((map__17460 == null)))?((((map__17460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17460):map__17460);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17460__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17460__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__17487 = seq__17455;
var G__17488 = chunk__17456;
var G__17489 = count__17457;
var G__17490 = (i__17458 + (1));
seq__17455 = G__17487;
chunk__17456 = G__17488;
count__17457 = G__17489;
i__17458 = G__17490;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__17455);
if(temp__4425__auto__){
var seq__17455__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17455__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__17455__$1);
var G__17491 = cljs.core.chunk_rest(seq__17455__$1);
var G__17492 = c__5474__auto__;
var G__17493 = cljs.core.count(c__5474__auto__);
var G__17494 = (0);
seq__17455 = G__17491;
chunk__17456 = G__17492;
count__17457 = G__17493;
i__17458 = G__17494;
continue;
} else {
var vec__17462 = cljs.core.first(seq__17455__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17462,(0),null);
var map__17463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17462,(1),null);
var map__17463__$1 = ((((!((map__17463 == null)))?((((map__17463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17463):map__17463);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17463__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17463__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__17495 = cljs.core.next(seq__17455__$1);
var G__17496 = null;
var G__17497 = (0);
var G__17498 = (0);
seq__17455 = G__17495;
chunk__17456 = G__17496;
count__17457 = G__17497;
i__17458 = G__17498;
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
