// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('devtools.util');
goog.require('cljs.core');
goog.require('devtools.prefs');
devtools.util.feature_for_display = (function devtools$util$feature_for_display(known_features,feature){
var feature_installation_key = (feature.cljs$core$IFn$_invoke$arity$1 ? feature.cljs$core$IFn$_invoke$arity$1(known_features) : feature.call(null,known_features));
var enabled_QMARK_ = devtools.prefs.pref(feature_installation_key);
var color = (cljs.core.truth_(enabled_QMARK_)?"color:#0000ff":"color:#aaaaaa");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,cljs.core.name(feature)], null)], null);
});
devtools.util.feature_list_display = (function devtools$util$feature_list_display(known_features){
var features = cljs.core.keys(known_features);
var labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.util.feature_for_display,known_features),features);
var _STAR_ = ((function (features,labels){
return (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.first(accum)),cljs.core.str(" "),cljs.core.str(cljs.core.first(val))].join(''),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(accum),cljs.core.second(val))], null);
});})(features,labels))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,cljs.core.first(labels),cljs.core.rest(labels));
});
devtools.util.log_info = (function devtools$util$log_info(var_args){
var args__5736__auto__ = [];
var len__5729__auto___12827 = arguments.length;
var i__5730__auto___12828 = (0);
while(true){
if((i__5730__auto___12828 < len__5729__auto___12827)){
args__5736__auto__.push((arguments[i__5730__auto___12828]));

var G__12829 = (i__5730__auto___12828 + (1));
i__5730__auto___12828 = G__12829;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return devtools.util.log_info.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

devtools.util.log_info.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.info.apply(console,cljs.core.to_array(args));
});

devtools.util.log_info.cljs$lang$maxFixedArity = (0);

devtools.util.log_info.cljs$lang$applyTo = (function (seq12826){
return devtools.util.log_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12826));
});
devtools.util.display_banner = (function devtools$util$display_banner(prefix,known_features){
if(cljs.core.truth_(devtools.prefs.pref(cljs.core.cst$kw$dont_DASH_display_DASH_banner))){
return null;
} else {
var vec__12831 = devtools.util.feature_list_display(known_features);
var fmt_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12831,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12831,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(devtools.util.log_info,[cljs.core.str(prefix),cljs.core.str(" "),cljs.core.str(fmt_str)].join(''),params);
}
});
