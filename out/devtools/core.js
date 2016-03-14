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
var len__5729__auto___12167 = arguments.length;
var i__5730__auto___12168 = (0);
while(true){
if((i__5730__auto___12168 < len__5729__auto___12167)){
args__5736__auto__.push((arguments[i__5730__auto___12168]));

var G__12169 = (i__5730__auto___12168 + (1));
i__5730__auto___12168 = G__12169;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__12163 = cljs.core.seq(features);
var chunk__12164 = null;
var count__12165 = (0);
var i__12166 = (0);
while(true){
if((i__12166 < count__12165)){
var feature = chunk__12164.cljs$core$IIndexed$_nth$arity$2(null,i__12166);
devtools.core.enable_single_feature_BANG_(feature);

var G__12170 = seq__12163;
var G__12171 = chunk__12164;
var G__12172 = count__12165;
var G__12173 = (i__12166 + (1));
seq__12163 = G__12170;
chunk__12164 = G__12171;
count__12165 = G__12172;
i__12166 = G__12173;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12163);
if(temp__4425__auto__){
var seq__12163__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12163__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__12163__$1);
var G__12174 = cljs.core.chunk_rest(seq__12163__$1);
var G__12175 = c__5474__auto__;
var G__12176 = cljs.core.count(c__5474__auto__);
var G__12177 = (0);
seq__12163 = G__12174;
chunk__12164 = G__12175;
count__12165 = G__12176;
i__12166 = G__12177;
continue;
} else {
var feature = cljs.core.first(seq__12163__$1);
devtools.core.enable_single_feature_BANG_(feature);

var G__12178 = cljs.core.next(seq__12163__$1);
var G__12179 = null;
var G__12180 = (0);
var G__12181 = (0);
seq__12163 = G__12178;
chunk__12164 = G__12179;
count__12165 = G__12180;
i__12166 = G__12181;
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

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq12162){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12162));
});
devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___12187 = arguments.length;
var i__5730__auto___12188 = (0);
while(true){
if((i__5730__auto___12188 < len__5729__auto___12187)){
args__5736__auto__.push((arguments[i__5730__auto___12188]));

var G__12189 = (i__5730__auto___12188 + (1));
i__5730__auto___12188 = G__12189;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__12183 = cljs.core.seq(features);
var chunk__12184 = null;
var count__12185 = (0);
var i__12186 = (0);
while(true){
if((i__12186 < count__12185)){
var feature = chunk__12184.cljs$core$IIndexed$_nth$arity$2(null,i__12186);
devtools.core.disable_single_feature_BANG_(feature);

var G__12190 = seq__12183;
var G__12191 = chunk__12184;
var G__12192 = count__12185;
var G__12193 = (i__12186 + (1));
seq__12183 = G__12190;
chunk__12184 = G__12191;
count__12185 = G__12192;
i__12186 = G__12193;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12183);
if(temp__4425__auto__){
var seq__12183__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12183__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__12183__$1);
var G__12194 = cljs.core.chunk_rest(seq__12183__$1);
var G__12195 = c__5474__auto__;
var G__12196 = cljs.core.count(c__5474__auto__);
var G__12197 = (0);
seq__12183 = G__12194;
chunk__12184 = G__12195;
count__12185 = G__12196;
i__12186 = G__12197;
continue;
} else {
var feature = cljs.core.first(seq__12183__$1);
devtools.core.disable_single_feature_BANG_(feature);

var G__12198 = cljs.core.next(seq__12183__$1);
var G__12199 = null;
var G__12200 = (0);
var G__12201 = (0);
seq__12183 = G__12198;
chunk__12184 = G__12199;
count__12185 = G__12200;
i__12186 = G__12201;
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

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq12182){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12182));
});
devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(feature){
var G__12203 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__12203) {
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
var len__5729__auto___12206 = arguments.length;
var i__5730__auto___12207 = (0);
while(true){
if((i__5730__auto___12207 < len__5729__auto___12206)){
args__5736__auto__.push((arguments[i__5730__auto___12207]));

var G__12208 = (i__5730__auto___12207 + (1));
i__5730__auto___12207 = G__12208;
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

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq12205){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12205));
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});
