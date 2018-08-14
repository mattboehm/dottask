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
var seq__17612_17626 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__17613_17627 = null;
var count__17614_17628 = (0);
var i__17615_17629 = (0);
while(true){
if((i__17615_17629 < count__17614_17628)){
var f_17630 = chunk__17613_17627.cljs$core$IIndexed$_nth$arity$2(null,i__17615_17629);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_17630], 0));

var G__17631 = seq__17612_17626;
var G__17632 = chunk__17613_17627;
var G__17633 = count__17614_17628;
var G__17634 = (i__17615_17629 + (1));
seq__17612_17626 = G__17631;
chunk__17613_17627 = G__17632;
count__17614_17628 = G__17633;
i__17615_17629 = G__17634;
continue;
} else {
var temp__4425__auto___17635 = cljs.core.seq(seq__17612_17626);
if(temp__4425__auto___17635){
var seq__17612_17636__$1 = temp__4425__auto___17635;
if(cljs.core.chunked_seq_QMARK_(seq__17612_17636__$1)){
var c__5474__auto___17637 = cljs.core.chunk_first(seq__17612_17636__$1);
var G__17638 = cljs.core.chunk_rest(seq__17612_17636__$1);
var G__17639 = c__5474__auto___17637;
var G__17640 = cljs.core.count(c__5474__auto___17637);
var G__17641 = (0);
seq__17612_17626 = G__17638;
chunk__17613_17627 = G__17639;
count__17614_17628 = G__17640;
i__17615_17629 = G__17641;
continue;
} else {
var f_17642 = cljs.core.first(seq__17612_17636__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_17642], 0));

var G__17643 = cljs.core.next(seq__17612_17636__$1);
var G__17644 = null;
var G__17645 = (0);
var G__17646 = (0);
seq__17612_17626 = G__17643;
chunk__17613_17627 = G__17644;
count__17614_17628 = G__17645;
i__17615_17629 = G__17646;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17647 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4671__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_17647], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_17647)))?cljs.core.second(arglists_17647):arglists_17647)], 0));
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
var seq__17616 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__17617 = null;
var count__17618 = (0);
var i__17619 = (0);
while(true){
if((i__17619 < count__17618)){
var vec__17620 = chunk__17617.cljs$core$IIndexed$_nth$arity$2(null,i__17619);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17620,(0),null);
var map__17621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17620,(1),null);
var map__17621__$1 = ((((!((map__17621 == null)))?((((map__17621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17621):map__17621);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17621__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17621__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__17648 = seq__17616;
var G__17649 = chunk__17617;
var G__17650 = count__17618;
var G__17651 = (i__17619 + (1));
seq__17616 = G__17648;
chunk__17617 = G__17649;
count__17618 = G__17650;
i__17619 = G__17651;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__17616);
if(temp__4425__auto__){
var seq__17616__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17616__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__17616__$1);
var G__17652 = cljs.core.chunk_rest(seq__17616__$1);
var G__17653 = c__5474__auto__;
var G__17654 = cljs.core.count(c__5474__auto__);
var G__17655 = (0);
seq__17616 = G__17652;
chunk__17617 = G__17653;
count__17618 = G__17654;
i__17619 = G__17655;
continue;
} else {
var vec__17623 = cljs.core.first(seq__17616__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17623,(0),null);
var map__17624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17623,(1),null);
var map__17624__$1 = ((((!((map__17624 == null)))?((((map__17624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17624):map__17624);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17624__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17624__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__17656 = cljs.core.next(seq__17616__$1);
var G__17657 = null;
var G__17658 = (0);
var G__17659 = (0);
seq__17616 = G__17656;
chunk__17617 = G__17657;
count__17618 = G__17658;
i__17619 = G__17659;
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
