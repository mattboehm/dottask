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
var len__5729__auto___18246 = arguments.length;
var i__5730__auto___18247 = (0);
while(true){
if((i__5730__auto___18247 < len__5729__auto___18246)){
args__5736__auto__.push((arguments[i__5730__auto___18247]));

var G__18248 = (i__5730__auto___18247 + (1));
i__5730__auto___18247 = G__18248;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__18242 = cljs.core.seq(features);
var chunk__18243 = null;
var count__18244 = (0);
var i__18245 = (0);
while(true){
if((i__18245 < count__18244)){
var feature = chunk__18243.cljs$core$IIndexed$_nth$arity$2(null,i__18245);
devtools.core.enable_single_feature_BANG_(feature);

var G__18249 = seq__18242;
var G__18250 = chunk__18243;
var G__18251 = count__18244;
var G__18252 = (i__18245 + (1));
seq__18242 = G__18249;
chunk__18243 = G__18250;
count__18244 = G__18251;
i__18245 = G__18252;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__18242);
if(temp__4425__auto__){
var seq__18242__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18242__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__18242__$1);
var G__18253 = cljs.core.chunk_rest(seq__18242__$1);
var G__18254 = c__5474__auto__;
var G__18255 = cljs.core.count(c__5474__auto__);
var G__18256 = (0);
seq__18242 = G__18253;
chunk__18243 = G__18254;
count__18244 = G__18255;
i__18245 = G__18256;
continue;
} else {
var feature = cljs.core.first(seq__18242__$1);
devtools.core.enable_single_feature_BANG_(feature);

var G__18257 = cljs.core.next(seq__18242__$1);
var G__18258 = null;
var G__18259 = (0);
var G__18260 = (0);
seq__18242 = G__18257;
chunk__18243 = G__18258;
count__18244 = G__18259;
i__18245 = G__18260;
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

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq18241){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18241));
});
devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___18266 = arguments.length;
var i__5730__auto___18267 = (0);
while(true){
if((i__5730__auto___18267 < len__5729__auto___18266)){
args__5736__auto__.push((arguments[i__5730__auto___18267]));

var G__18268 = (i__5730__auto___18267 + (1));
i__5730__auto___18267 = G__18268;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__18262 = cljs.core.seq(features);
var chunk__18263 = null;
var count__18264 = (0);
var i__18265 = (0);
while(true){
if((i__18265 < count__18264)){
var feature = chunk__18263.cljs$core$IIndexed$_nth$arity$2(null,i__18265);
devtools.core.disable_single_feature_BANG_(feature);

var G__18269 = seq__18262;
var G__18270 = chunk__18263;
var G__18271 = count__18264;
var G__18272 = (i__18265 + (1));
seq__18262 = G__18269;
chunk__18263 = G__18270;
count__18264 = G__18271;
i__18265 = G__18272;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__18262);
if(temp__4425__auto__){
var seq__18262__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18262__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__18262__$1);
var G__18273 = cljs.core.chunk_rest(seq__18262__$1);
var G__18274 = c__5474__auto__;
var G__18275 = cljs.core.count(c__5474__auto__);
var G__18276 = (0);
seq__18262 = G__18273;
chunk__18263 = G__18274;
count__18264 = G__18275;
i__18265 = G__18276;
continue;
} else {
var feature = cljs.core.first(seq__18262__$1);
devtools.core.disable_single_feature_BANG_(feature);

var G__18277 = cljs.core.next(seq__18262__$1);
var G__18278 = null;
var G__18279 = (0);
var G__18280 = (0);
seq__18262 = G__18277;
chunk__18263 = G__18278;
count__18264 = G__18279;
i__18265 = G__18280;
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

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq18261){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18261));
});
devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(feature){
var G__18282 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__18282) {
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
var len__5729__auto___18285 = arguments.length;
var i__5730__auto___18286 = (0);
while(true){
if((i__5730__auto___18286 < len__5729__auto___18285)){
args__5736__auto__.push((arguments[i__5730__auto___18286]));

var G__18287 = (i__5730__auto___18286 + (1));
i__5730__auto___18286 = G__18287;
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

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq18284){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18284));
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});
