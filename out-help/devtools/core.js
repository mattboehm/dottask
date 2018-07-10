// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.sanity_hints');
goog.require('devtools.dirac');
goog.require('devtools.custom_formatters');
goog.require('devtools.util');
goog.require('goog.userAgent');
devtools.core.known_features = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$custom_DASH_formatters,cljs.core.cst$kw$install_DASH_custom_DASH_formatters,cljs.core.cst$kw$dirac,cljs.core.cst$kw$install_DASH_dirac_DASH_support,cljs.core.cst$kw$sanity_DASH_hints,cljs.core.cst$kw$install_DASH_sanity_DASH_hints], null);
devtools.core.missing_feature_warning = (function devtools$core$missing_feature_warning(feature,known_features){
return [cljs.core.str("No such feature '"),cljs.core.str(feature),cljs.core.str("' is currently available in cljs-devtools. "),cljs.core.str("List of supported features:"),cljs.core.str(cljs.core.keys(known_features))].join('');
});
devtools.core.warn_feature_not_available = (function devtools$core$warn_feature_not_available(feature){
return console.warn([cljs.core.str("Feature '"),cljs.core.str(cljs.core.name(feature)),cljs.core.str("' cannot be installed. Unsupported browser "),cljs.core.str(goog.userAgent.getUserAgentString()),cljs.core.str(".")].join(''));
});
devtools.core.install_BANG_ = (function devtools$core$install_BANG_(){
devtools.util.display_banner("Installing cljs-devtools:",devtools.core.known_features);

if(cljs.core.truth_(devtools.prefs.pref(cljs.core.cst$kw$install_DASH_custom_DASH_formatters))){
if(cljs.core.truth_((devtools.custom_formatters.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.custom_formatters.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.custom_formatters.available_QMARK_.call(null)))){
devtools.custom_formatters.install_BANG_();
} else {
(devtools.core.warn_feature_not_available.cljs$core$IFn$_invoke$arity$1 ? devtools.core.warn_feature_not_available.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$custom_DASH_formatters) : devtools.core.warn_feature_not_available.call(null,cljs.core.cst$kw$custom_DASH_formatters));
}
} else {
}

if(cljs.core.truth_(devtools.prefs.pref(cljs.core.cst$kw$install_DASH_sanity_DASH_hints))){
if(cljs.core.truth_((devtools.sanity_hints.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.sanity_hints.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.sanity_hints.available_QMARK_.call(null)))){
devtools.sanity_hints.install_BANG_();
} else {
(devtools.core.warn_feature_not_available.cljs$core$IFn$_invoke$arity$1 ? devtools.core.warn_feature_not_available.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sanity_DASH_hints) : devtools.core.warn_feature_not_available.call(null,cljs.core.cst$kw$sanity_DASH_hints));
}
} else {
}

if(cljs.core.truth_(devtools.prefs.pref(cljs.core.cst$kw$install_DASH_dirac_DASH_support))){
if(cljs.core.truth_((devtools.dirac.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.dirac.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.dirac.available_QMARK_.call(null)))){
return devtools.dirac.install_BANG_();
} else {
return (devtools.core.warn_feature_not_available.cljs$core$IFn$_invoke$arity$1 ? devtools.core.warn_feature_not_available.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$dirac) : devtools.core.warn_feature_not_available.call(null,cljs.core.cst$kw$dirac));
}
} else {
return null;
}
});
devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.custom_formatters.uninstall_BANG_();

devtools.sanity_hints.uninstall_BANG_();

return devtools.dirac.uninstall_BANG_();
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_(new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs();
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_(pref,val);
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(feature,val){
var temp__4423__auto__ = (feature.cljs$core$IFn$_invoke$arity$1 ? feature.cljs$core$IFn$_invoke$arity$1(devtools.core.known_features) : feature.call(null,devtools.core.known_features));
if(cljs.core.truth_(temp__4423__auto__)){
var feature_installation_key = temp__4423__auto__;
return devtools.core.set_pref_BANG_(feature_installation_key,val);
} else {
return console.warn((devtools.core.missing_feature_warning.cljs$core$IFn$_invoke$arity$2 ? devtools.core.missing_feature_warning.cljs$core$IFn$_invoke$arity$2(feature,devtools.core.known_features) : devtools.core.missing_feature_warning.call(null,feature,devtools.core.known_features)));
}
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(feature){
return devtools.core.set_single_feature_BANG_(feature,true);
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(feature){
return devtools.core.set_single_feature_BANG_(feature,false);
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___18406 = arguments.length;
var i__5730__auto___18407 = (0);
while(true){
if((i__5730__auto___18407 < len__5729__auto___18406)){
args__5736__auto__.push((arguments[i__5730__auto___18407]));

var G__18408 = (i__5730__auto___18407 + (1));
i__5730__auto___18407 = G__18408;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__18402 = cljs.core.seq(features);
var chunk__18403 = null;
var count__18404 = (0);
var i__18405 = (0);
while(true){
if((i__18405 < count__18404)){
var feature = chunk__18403.cljs$core$IIndexed$_nth$arity$2(null,i__18405);
devtools.core.enable_single_feature_BANG_(feature);

var G__18409 = seq__18402;
var G__18410 = chunk__18403;
var G__18411 = count__18404;
var G__18412 = (i__18405 + (1));
seq__18402 = G__18409;
chunk__18403 = G__18410;
count__18404 = G__18411;
i__18405 = G__18412;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__18402);
if(temp__4425__auto__){
var seq__18402__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18402__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__18402__$1);
var G__18413 = cljs.core.chunk_rest(seq__18402__$1);
var G__18414 = c__5474__auto__;
var G__18415 = cljs.core.count(c__5474__auto__);
var G__18416 = (0);
seq__18402 = G__18413;
chunk__18403 = G__18414;
count__18404 = G__18415;
i__18405 = G__18416;
continue;
} else {
var feature = cljs.core.first(seq__18402__$1);
devtools.core.enable_single_feature_BANG_(feature);

var G__18417 = cljs.core.next(seq__18402__$1);
var G__18418 = null;
var G__18419 = (0);
var G__18420 = (0);
seq__18402 = G__18417;
chunk__18403 = G__18418;
count__18404 = G__18419;
i__18405 = G__18420;
continue;
}
} else {
return null;
}
}
break;
}
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq18401){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18401));
});
devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___18426 = arguments.length;
var i__5730__auto___18427 = (0);
while(true){
if((i__5730__auto___18427 < len__5729__auto___18426)){
args__5736__auto__.push((arguments[i__5730__auto___18427]));

var G__18428 = (i__5730__auto___18427 + (1));
i__5730__auto___18427 = G__18428;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__18422 = cljs.core.seq(features);
var chunk__18423 = null;
var count__18424 = (0);
var i__18425 = (0);
while(true){
if((i__18425 < count__18424)){
var feature = chunk__18423.cljs$core$IIndexed$_nth$arity$2(null,i__18425);
devtools.core.disable_single_feature_BANG_(feature);

var G__18429 = seq__18422;
var G__18430 = chunk__18423;
var G__18431 = count__18424;
var G__18432 = (i__18425 + (1));
seq__18422 = G__18429;
chunk__18423 = G__18430;
count__18424 = G__18431;
i__18425 = G__18432;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__18422);
if(temp__4425__auto__){
var seq__18422__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18422__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__18422__$1);
var G__18433 = cljs.core.chunk_rest(seq__18422__$1);
var G__18434 = c__5474__auto__;
var G__18435 = cljs.core.count(c__5474__auto__);
var G__18436 = (0);
seq__18422 = G__18433;
chunk__18423 = G__18434;
count__18424 = G__18435;
i__18425 = G__18436;
continue;
} else {
var feature = cljs.core.first(seq__18422__$1);
devtools.core.disable_single_feature_BANG_(feature);

var G__18437 = cljs.core.next(seq__18422__$1);
var G__18438 = null;
var G__18439 = (0);
var G__18440 = (0);
seq__18422 = G__18437;
chunk__18423 = G__18438;
count__18424 = G__18439;
i__18425 = G__18440;
continue;
}
} else {
return null;
}
}
break;
}
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq18421){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18421));
});
devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(feature){
var G__18442 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__18442) {
case "custom-formatters":
return (devtools.custom_formatters.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.custom_formatters.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.custom_formatters.available_QMARK_.call(null));

break;
case "dirac":
return (devtools.dirac.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.dirac.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.dirac.available_QMARK_.call(null));

break;
case "sanity-hints":
return (devtools.sanity_hints.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.sanity_hints.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.sanity_hints.available_QMARK_.call(null));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___18445 = arguments.length;
var i__5730__auto___18446 = (0);
while(true){
if((i__5730__auto___18446 < len__5729__auto___18445)){
args__5736__auto__.push((arguments[i__5730__auto___18446]));

var G__18447 = (i__5730__auto___18446 + (1));
i__5730__auto___18446 = G__18447;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
return cljs.core.every_QMARK_(devtools.core.single_feature_available_QMARK_,features);
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq18444){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18444));
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});
