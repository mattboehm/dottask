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
var len__5729__auto___18376 = arguments.length;
var i__5730__auto___18377 = (0);
while(true){
if((i__5730__auto___18377 < len__5729__auto___18376)){
args__5736__auto__.push((arguments[i__5730__auto___18377]));

var G__18378 = (i__5730__auto___18377 + (1));
i__5730__auto___18377 = G__18378;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__18372 = cljs.core.seq(features);
var chunk__18373 = null;
var count__18374 = (0);
var i__18375 = (0);
while(true){
if((i__18375 < count__18374)){
var feature = chunk__18373.cljs$core$IIndexed$_nth$arity$2(null,i__18375);
devtools.core.enable_single_feature_BANG_(feature);

var G__18379 = seq__18372;
var G__18380 = chunk__18373;
var G__18381 = count__18374;
var G__18382 = (i__18375 + (1));
seq__18372 = G__18379;
chunk__18373 = G__18380;
count__18374 = G__18381;
i__18375 = G__18382;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__18372);
if(temp__4425__auto__){
var seq__18372__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18372__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__18372__$1);
var G__18383 = cljs.core.chunk_rest(seq__18372__$1);
var G__18384 = c__5474__auto__;
var G__18385 = cljs.core.count(c__5474__auto__);
var G__18386 = (0);
seq__18372 = G__18383;
chunk__18373 = G__18384;
count__18374 = G__18385;
i__18375 = G__18386;
continue;
} else {
var feature = cljs.core.first(seq__18372__$1);
devtools.core.enable_single_feature_BANG_(feature);

var G__18387 = cljs.core.next(seq__18372__$1);
var G__18388 = null;
var G__18389 = (0);
var G__18390 = (0);
seq__18372 = G__18387;
chunk__18373 = G__18388;
count__18374 = G__18389;
i__18375 = G__18390;
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

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq18371){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18371));
});
devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___18396 = arguments.length;
var i__5730__auto___18397 = (0);
while(true){
if((i__5730__auto___18397 < len__5729__auto___18396)){
args__5736__auto__.push((arguments[i__5730__auto___18397]));

var G__18398 = (i__5730__auto___18397 + (1));
i__5730__auto___18397 = G__18398;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__18392 = cljs.core.seq(features);
var chunk__18393 = null;
var count__18394 = (0);
var i__18395 = (0);
while(true){
if((i__18395 < count__18394)){
var feature = chunk__18393.cljs$core$IIndexed$_nth$arity$2(null,i__18395);
devtools.core.disable_single_feature_BANG_(feature);

var G__18399 = seq__18392;
var G__18400 = chunk__18393;
var G__18401 = count__18394;
var G__18402 = (i__18395 + (1));
seq__18392 = G__18399;
chunk__18393 = G__18400;
count__18394 = G__18401;
i__18395 = G__18402;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__18392);
if(temp__4425__auto__){
var seq__18392__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18392__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__18392__$1);
var G__18403 = cljs.core.chunk_rest(seq__18392__$1);
var G__18404 = c__5474__auto__;
var G__18405 = cljs.core.count(c__5474__auto__);
var G__18406 = (0);
seq__18392 = G__18403;
chunk__18393 = G__18404;
count__18394 = G__18405;
i__18395 = G__18406;
continue;
} else {
var feature = cljs.core.first(seq__18392__$1);
devtools.core.disable_single_feature_BANG_(feature);

var G__18407 = cljs.core.next(seq__18392__$1);
var G__18408 = null;
var G__18409 = (0);
var G__18410 = (0);
seq__18392 = G__18407;
chunk__18393 = G__18408;
count__18394 = G__18409;
i__18395 = G__18410;
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

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq18391){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18391));
});
devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(feature){
var G__18412 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__18412) {
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
var len__5729__auto___18415 = arguments.length;
var i__5730__auto___18416 = (0);
while(true){
if((i__5730__auto___18416 < len__5729__auto___18415)){
args__5736__auto__.push((arguments[i__5730__auto___18416]));

var G__18417 = (i__5730__auto___18416 + (1));
i__5730__auto___18416 = G__18417;
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

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq18414){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18414));
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});
