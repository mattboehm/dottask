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
var seq__18505_18519 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18506_18520 = null;
var count__18507_18521 = (0);
var i__18508_18522 = (0);
while(true){
if((i__18508_18522 < count__18507_18521)){
var f_18523 = chunk__18506_18520.cljs$core$IIndexed$_nth$arity$2(null,i__18508_18522);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_18523], 0));

var G__18524 = seq__18505_18519;
var G__18525 = chunk__18506_18520;
var G__18526 = count__18507_18521;
var G__18527 = (i__18508_18522 + (1));
seq__18505_18519 = G__18524;
chunk__18506_18520 = G__18525;
count__18507_18521 = G__18526;
i__18508_18522 = G__18527;
continue;
} else {
var temp__4425__auto___18528 = cljs.core.seq(seq__18505_18519);
if(temp__4425__auto___18528){
var seq__18505_18529__$1 = temp__4425__auto___18528;
if(cljs.core.chunked_seq_QMARK_(seq__18505_18529__$1)){
var c__5474__auto___18530 = cljs.core.chunk_first(seq__18505_18529__$1);
var G__18531 = cljs.core.chunk_rest(seq__18505_18529__$1);
var G__18532 = c__5474__auto___18530;
var G__18533 = cljs.core.count(c__5474__auto___18530);
var G__18534 = (0);
seq__18505_18519 = G__18531;
chunk__18506_18520 = G__18532;
count__18507_18521 = G__18533;
i__18508_18522 = G__18534;
continue;
} else {
var f_18535 = cljs.core.first(seq__18505_18529__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_18535], 0));

var G__18536 = cljs.core.next(seq__18505_18529__$1);
var G__18537 = null;
var G__18538 = (0);
var G__18539 = (0);
seq__18505_18519 = G__18536;
chunk__18506_18520 = G__18537;
count__18507_18521 = G__18538;
i__18508_18522 = G__18539;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18540 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4671__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_18540], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_18540)))?cljs.core.second(arglists_18540):arglists_18540)], 0));
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
var seq__18509 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18510 = null;
var count__18511 = (0);
var i__18512 = (0);
while(true){
if((i__18512 < count__18511)){
var vec__18513 = chunk__18510.cljs$core$IIndexed$_nth$arity$2(null,i__18512);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18513,(0),null);
var map__18514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18513,(1),null);
var map__18514__$1 = ((((!((map__18514 == null)))?((((map__18514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18514):map__18514);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18514__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18514__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__18541 = seq__18509;
var G__18542 = chunk__18510;
var G__18543 = count__18511;
var G__18544 = (i__18512 + (1));
seq__18509 = G__18541;
chunk__18510 = G__18542;
count__18511 = G__18543;
i__18512 = G__18544;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__18509);
if(temp__4425__auto__){
var seq__18509__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18509__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__18509__$1);
var G__18545 = cljs.core.chunk_rest(seq__18509__$1);
var G__18546 = c__5474__auto__;
var G__18547 = cljs.core.count(c__5474__auto__);
var G__18548 = (0);
seq__18509 = G__18545;
chunk__18510 = G__18546;
count__18511 = G__18547;
i__18512 = G__18548;
continue;
} else {
var vec__18516 = cljs.core.first(seq__18509__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18516,(0),null);
var map__18517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18516,(1),null);
var map__18517__$1 = ((((!((map__18517 == null)))?((((map__18517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18517):map__18517);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18517__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18517__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__18549 = cljs.core.next(seq__18509__$1);
var G__18550 = null;
var G__18551 = (0);
var G__18552 = (0);
seq__18509 = G__18549;
chunk__18510 = G__18550;
count__18511 = G__18551;
i__18512 = G__18552;
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
