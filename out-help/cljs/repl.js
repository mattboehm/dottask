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
var seq__17583_17597 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__17584_17598 = null;
var count__17585_17599 = (0);
var i__17586_17600 = (0);
while(true){
if((i__17586_17600 < count__17585_17599)){
var f_17601 = chunk__17584_17598.cljs$core$IIndexed$_nth$arity$2(null,i__17586_17600);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_17601], 0));

var G__17602 = seq__17583_17597;
var G__17603 = chunk__17584_17598;
var G__17604 = count__17585_17599;
var G__17605 = (i__17586_17600 + (1));
seq__17583_17597 = G__17602;
chunk__17584_17598 = G__17603;
count__17585_17599 = G__17604;
i__17586_17600 = G__17605;
continue;
} else {
var temp__4425__auto___17606 = cljs.core.seq(seq__17583_17597);
if(temp__4425__auto___17606){
var seq__17583_17607__$1 = temp__4425__auto___17606;
if(cljs.core.chunked_seq_QMARK_(seq__17583_17607__$1)){
var c__5474__auto___17608 = cljs.core.chunk_first(seq__17583_17607__$1);
var G__17609 = cljs.core.chunk_rest(seq__17583_17607__$1);
var G__17610 = c__5474__auto___17608;
var G__17611 = cljs.core.count(c__5474__auto___17608);
var G__17612 = (0);
seq__17583_17597 = G__17609;
chunk__17584_17598 = G__17610;
count__17585_17599 = G__17611;
i__17586_17600 = G__17612;
continue;
} else {
var f_17613 = cljs.core.first(seq__17583_17607__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_17613], 0));

var G__17614 = cljs.core.next(seq__17583_17607__$1);
var G__17615 = null;
var G__17616 = (0);
var G__17617 = (0);
seq__17583_17597 = G__17614;
chunk__17584_17598 = G__17615;
count__17585_17599 = G__17616;
i__17586_17600 = G__17617;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17618 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4671__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_17618], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_17618)))?cljs.core.second(arglists_17618):arglists_17618)], 0));
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
var seq__17587 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__17588 = null;
var count__17589 = (0);
var i__17590 = (0);
while(true){
if((i__17590 < count__17589)){
var vec__17591 = chunk__17588.cljs$core$IIndexed$_nth$arity$2(null,i__17590);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17591,(0),null);
var map__17592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17591,(1),null);
var map__17592__$1 = ((((!((map__17592 == null)))?((((map__17592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17592):map__17592);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17592__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17592__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__17619 = seq__17587;
var G__17620 = chunk__17588;
var G__17621 = count__17589;
var G__17622 = (i__17590 + (1));
seq__17587 = G__17619;
chunk__17588 = G__17620;
count__17589 = G__17621;
i__17590 = G__17622;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__17587);
if(temp__4425__auto__){
var seq__17587__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17587__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__17587__$1);
var G__17623 = cljs.core.chunk_rest(seq__17587__$1);
var G__17624 = c__5474__auto__;
var G__17625 = cljs.core.count(c__5474__auto__);
var G__17626 = (0);
seq__17587 = G__17623;
chunk__17588 = G__17624;
count__17589 = G__17625;
i__17590 = G__17626;
continue;
} else {
var vec__17594 = cljs.core.first(seq__17587__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17594,(0),null);
var map__17595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17594,(1),null);
var map__17595__$1 = ((((!((map__17595 == null)))?((((map__17595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17595):map__17595);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__17627 = cljs.core.next(seq__17587__$1);
var G__17628 = null;
var G__17629 = (0);
var G__17630 = (0);
seq__17587 = G__17627;
chunk__17588 = G__17628;
count__17589 = G__17629;
i__17590 = G__17630;
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
