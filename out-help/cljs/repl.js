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
var seq__17581_17595 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__17582_17596 = null;
var count__17583_17597 = (0);
var i__17584_17598 = (0);
while(true){
if((i__17584_17598 < count__17583_17597)){
var f_17599 = chunk__17582_17596.cljs$core$IIndexed$_nth$arity$2(null,i__17584_17598);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_17599], 0));

var G__17600 = seq__17581_17595;
var G__17601 = chunk__17582_17596;
var G__17602 = count__17583_17597;
var G__17603 = (i__17584_17598 + (1));
seq__17581_17595 = G__17600;
chunk__17582_17596 = G__17601;
count__17583_17597 = G__17602;
i__17584_17598 = G__17603;
continue;
} else {
var temp__4425__auto___17604 = cljs.core.seq(seq__17581_17595);
if(temp__4425__auto___17604){
var seq__17581_17605__$1 = temp__4425__auto___17604;
if(cljs.core.chunked_seq_QMARK_(seq__17581_17605__$1)){
var c__5474__auto___17606 = cljs.core.chunk_first(seq__17581_17605__$1);
var G__17607 = cljs.core.chunk_rest(seq__17581_17605__$1);
var G__17608 = c__5474__auto___17606;
var G__17609 = cljs.core.count(c__5474__auto___17606);
var G__17610 = (0);
seq__17581_17595 = G__17607;
chunk__17582_17596 = G__17608;
count__17583_17597 = G__17609;
i__17584_17598 = G__17610;
continue;
} else {
var f_17611 = cljs.core.first(seq__17581_17605__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_17611], 0));

var G__17612 = cljs.core.next(seq__17581_17605__$1);
var G__17613 = null;
var G__17614 = (0);
var G__17615 = (0);
seq__17581_17595 = G__17612;
chunk__17582_17596 = G__17613;
count__17583_17597 = G__17614;
i__17584_17598 = G__17615;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17616 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4671__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_17616], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_17616)))?cljs.core.second(arglists_17616):arglists_17616)], 0));
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
var seq__17585 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__17586 = null;
var count__17587 = (0);
var i__17588 = (0);
while(true){
if((i__17588 < count__17587)){
var vec__17589 = chunk__17586.cljs$core$IIndexed$_nth$arity$2(null,i__17588);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17589,(0),null);
var map__17590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17589,(1),null);
var map__17590__$1 = ((((!((map__17590 == null)))?((((map__17590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17590):map__17590);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17590__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17590__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__17617 = seq__17585;
var G__17618 = chunk__17586;
var G__17619 = count__17587;
var G__17620 = (i__17588 + (1));
seq__17585 = G__17617;
chunk__17586 = G__17618;
count__17587 = G__17619;
i__17588 = G__17620;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__17585);
if(temp__4425__auto__){
var seq__17585__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17585__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__17585__$1);
var G__17621 = cljs.core.chunk_rest(seq__17585__$1);
var G__17622 = c__5474__auto__;
var G__17623 = cljs.core.count(c__5474__auto__);
var G__17624 = (0);
seq__17585 = G__17621;
chunk__17586 = G__17622;
count__17587 = G__17623;
i__17588 = G__17624;
continue;
} else {
var vec__17592 = cljs.core.first(seq__17585__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17592,(0),null);
var map__17593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17592,(1),null);
var map__17593__$1 = ((((!((map__17593 == null)))?((((map__17593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17593):map__17593);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17593__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17593__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__17625 = cljs.core.next(seq__17585__$1);
var G__17626 = null;
var G__17627 = (0);
var G__17628 = (0);
seq__17585 = G__17625;
chunk__17586 = G__17626;
count__17587 = G__17627;
i__17588 = G__17628;
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
