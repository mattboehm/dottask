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
var seq__17611_17625 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__17612_17626 = null;
var count__17613_17627 = (0);
var i__17614_17628 = (0);
while(true){
if((i__17614_17628 < count__17613_17627)){
var f_17629 = chunk__17612_17626.cljs$core$IIndexed$_nth$arity$2(null,i__17614_17628);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_17629], 0));

var G__17630 = seq__17611_17625;
var G__17631 = chunk__17612_17626;
var G__17632 = count__17613_17627;
var G__17633 = (i__17614_17628 + (1));
seq__17611_17625 = G__17630;
chunk__17612_17626 = G__17631;
count__17613_17627 = G__17632;
i__17614_17628 = G__17633;
continue;
} else {
var temp__4425__auto___17634 = cljs.core.seq(seq__17611_17625);
if(temp__4425__auto___17634){
var seq__17611_17635__$1 = temp__4425__auto___17634;
if(cljs.core.chunked_seq_QMARK_(seq__17611_17635__$1)){
var c__5474__auto___17636 = cljs.core.chunk_first(seq__17611_17635__$1);
var G__17637 = cljs.core.chunk_rest(seq__17611_17635__$1);
var G__17638 = c__5474__auto___17636;
var G__17639 = cljs.core.count(c__5474__auto___17636);
var G__17640 = (0);
seq__17611_17625 = G__17637;
chunk__17612_17626 = G__17638;
count__17613_17627 = G__17639;
i__17614_17628 = G__17640;
continue;
} else {
var f_17641 = cljs.core.first(seq__17611_17635__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_17641], 0));

var G__17642 = cljs.core.next(seq__17611_17635__$1);
var G__17643 = null;
var G__17644 = (0);
var G__17645 = (0);
seq__17611_17625 = G__17642;
chunk__17612_17626 = G__17643;
count__17613_17627 = G__17644;
i__17614_17628 = G__17645;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17646 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4671__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_17646], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_17646)))?cljs.core.second(arglists_17646):arglists_17646)], 0));
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
var seq__17615 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__17616 = null;
var count__17617 = (0);
var i__17618 = (0);
while(true){
if((i__17618 < count__17617)){
var vec__17619 = chunk__17616.cljs$core$IIndexed$_nth$arity$2(null,i__17618);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17619,(0),null);
var map__17620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17619,(1),null);
var map__17620__$1 = ((((!((map__17620 == null)))?((((map__17620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17620):map__17620);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17620__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17620__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__17647 = seq__17615;
var G__17648 = chunk__17616;
var G__17649 = count__17617;
var G__17650 = (i__17618 + (1));
seq__17615 = G__17647;
chunk__17616 = G__17648;
count__17617 = G__17649;
i__17618 = G__17650;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__17615);
if(temp__4425__auto__){
var seq__17615__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17615__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__17615__$1);
var G__17651 = cljs.core.chunk_rest(seq__17615__$1);
var G__17652 = c__5474__auto__;
var G__17653 = cljs.core.count(c__5474__auto__);
var G__17654 = (0);
seq__17615 = G__17651;
chunk__17616 = G__17652;
count__17617 = G__17653;
i__17618 = G__17654;
continue;
} else {
var vec__17622 = cljs.core.first(seq__17615__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17622,(0),null);
var map__17623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17622,(1),null);
var map__17623__$1 = ((((!((map__17623 == null)))?((((map__17623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17623):map__17623);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17623__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17623__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__17655 = cljs.core.next(seq__17615__$1);
var G__17656 = null;
var G__17657 = (0);
var G__17658 = (0);
seq__17615 = G__17655;
chunk__17616 = G__17656;
count__17617 = G__17657;
i__17618 = G__17658;
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
