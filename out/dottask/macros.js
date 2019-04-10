// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('dottask.macros');
goog.require('cljs.core');
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
dottask.macros.let_QMARK_ = (function dottask$macros$let_QMARK_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___13163 = arguments.length;
var i__5730__auto___13164 = (0);
while(true){
if((i__5730__auto___13164 < len__5729__auto___13163)){
args__5736__auto__.push((arguments[i__5730__auto___13164]));

var G__13165 = (i__5730__auto___13164 + (1));
i__5730__auto___13164 = G__13165;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((3) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((3)),(0))):null);
return dottask.macros.let_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5737__auto__);
});

dottask.macros.let_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var newbindings = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,bind){
if(cljs.core.even_QMARK_(idx)){
return bind;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dottask$macros_SLASH_x)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$log),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_console),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"LET"),cljs.core._conj(cljs.core.List.EMPTY,idx),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dottask$macros_SLASH_x)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dottask$macros_SLASH_x)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,bind))));
}
}));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,bindings),cljs.core.array_seq([body], 0))));
});

dottask.macros.let_QMARK_.cljs$lang$maxFixedArity = (3);

dottask.macros.let_QMARK_.cljs$lang$applyTo = (function (seq13159){
var G__13160 = cljs.core.first(seq13159);
var seq13159__$1 = cljs.core.next(seq13159);
var G__13161 = cljs.core.first(seq13159__$1);
var seq13159__$2 = cljs.core.next(seq13159__$1);
var G__13162 = cljs.core.first(seq13159__$2);
var seq13159__$3 = cljs.core.next(seq13159__$2);
return dottask.macros.let_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__13160,G__13161,G__13162,seq13159__$3);
});

dottask.macros.let_QMARK_.cljs$lang$macro = true;
