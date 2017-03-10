// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16840__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16840__auto__){
return or__16840__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16840__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__42246_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__42246_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__42251 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__42252 = null;
var count__42253 = (0);
var i__42254 = (0);
while(true){
if((i__42254 < count__42253)){
var n = cljs.core._nth.call(null,chunk__42252,i__42254);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42255 = seq__42251;
var G__42256 = chunk__42252;
var G__42257 = count__42253;
var G__42258 = (i__42254 + (1));
seq__42251 = G__42255;
chunk__42252 = G__42256;
count__42253 = G__42257;
i__42254 = G__42258;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__42251);
if(temp__4425__auto__){
var seq__42251__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42251__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__42251__$1);
var G__42259 = cljs.core.chunk_rest.call(null,seq__42251__$1);
var G__42260 = c__17643__auto__;
var G__42261 = cljs.core.count.call(null,c__17643__auto__);
var G__42262 = (0);
seq__42251 = G__42259;
chunk__42252 = G__42260;
count__42253 = G__42261;
i__42254 = G__42262;
continue;
} else {
var n = cljs.core.first.call(null,seq__42251__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42263 = cljs.core.next.call(null,seq__42251__$1);
var G__42264 = null;
var G__42265 = (0);
var G__42266 = (0);
seq__42251 = G__42263;
chunk__42252 = G__42264;
count__42253 = G__42265;
i__42254 = G__42266;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__42305_42312 = cljs.core.seq.call(null,deps);
var chunk__42306_42313 = null;
var count__42307_42314 = (0);
var i__42308_42315 = (0);
while(true){
if((i__42308_42315 < count__42307_42314)){
var dep_42316 = cljs.core._nth.call(null,chunk__42306_42313,i__42308_42315);
topo_sort_helper_STAR_.call(null,dep_42316,(depth + (1)),state);

var G__42317 = seq__42305_42312;
var G__42318 = chunk__42306_42313;
var G__42319 = count__42307_42314;
var G__42320 = (i__42308_42315 + (1));
seq__42305_42312 = G__42317;
chunk__42306_42313 = G__42318;
count__42307_42314 = G__42319;
i__42308_42315 = G__42320;
continue;
} else {
var temp__4425__auto___42321 = cljs.core.seq.call(null,seq__42305_42312);
if(temp__4425__auto___42321){
var seq__42305_42322__$1 = temp__4425__auto___42321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42305_42322__$1)){
var c__17643__auto___42323 = cljs.core.chunk_first.call(null,seq__42305_42322__$1);
var G__42324 = cljs.core.chunk_rest.call(null,seq__42305_42322__$1);
var G__42325 = c__17643__auto___42323;
var G__42326 = cljs.core.count.call(null,c__17643__auto___42323);
var G__42327 = (0);
seq__42305_42312 = G__42324;
chunk__42306_42313 = G__42325;
count__42307_42314 = G__42326;
i__42308_42315 = G__42327;
continue;
} else {
var dep_42328 = cljs.core.first.call(null,seq__42305_42322__$1);
topo_sort_helper_STAR_.call(null,dep_42328,(depth + (1)),state);

var G__42329 = cljs.core.next.call(null,seq__42305_42322__$1);
var G__42330 = null;
var G__42331 = (0);
var G__42332 = (0);
seq__42305_42312 = G__42329;
chunk__42306_42313 = G__42330;
count__42307_42314 = G__42331;
i__42308_42315 = G__42332;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__42309){
var vec__42311 = p__42309;
var x = cljs.core.nth.call(null,vec__42311,(0),null);
var xs = cljs.core.nthnext.call(null,vec__42311,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__42311,x,xs,get_deps__$1){
return (function (p1__42267_SHARP_){
return clojure.set.difference.call(null,p1__42267_SHARP_,x);
});})(vec__42311,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__42345 = cljs.core.seq.call(null,provides);
var chunk__42346 = null;
var count__42347 = (0);
var i__42348 = (0);
while(true){
if((i__42348 < count__42347)){
var prov = cljs.core._nth.call(null,chunk__42346,i__42348);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42349_42357 = cljs.core.seq.call(null,requires);
var chunk__42350_42358 = null;
var count__42351_42359 = (0);
var i__42352_42360 = (0);
while(true){
if((i__42352_42360 < count__42351_42359)){
var req_42361 = cljs.core._nth.call(null,chunk__42350_42358,i__42352_42360);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42361,prov);

var G__42362 = seq__42349_42357;
var G__42363 = chunk__42350_42358;
var G__42364 = count__42351_42359;
var G__42365 = (i__42352_42360 + (1));
seq__42349_42357 = G__42362;
chunk__42350_42358 = G__42363;
count__42351_42359 = G__42364;
i__42352_42360 = G__42365;
continue;
} else {
var temp__4425__auto___42366 = cljs.core.seq.call(null,seq__42349_42357);
if(temp__4425__auto___42366){
var seq__42349_42367__$1 = temp__4425__auto___42366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42349_42367__$1)){
var c__17643__auto___42368 = cljs.core.chunk_first.call(null,seq__42349_42367__$1);
var G__42369 = cljs.core.chunk_rest.call(null,seq__42349_42367__$1);
var G__42370 = c__17643__auto___42368;
var G__42371 = cljs.core.count.call(null,c__17643__auto___42368);
var G__42372 = (0);
seq__42349_42357 = G__42369;
chunk__42350_42358 = G__42370;
count__42351_42359 = G__42371;
i__42352_42360 = G__42372;
continue;
} else {
var req_42373 = cljs.core.first.call(null,seq__42349_42367__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42373,prov);

var G__42374 = cljs.core.next.call(null,seq__42349_42367__$1);
var G__42375 = null;
var G__42376 = (0);
var G__42377 = (0);
seq__42349_42357 = G__42374;
chunk__42350_42358 = G__42375;
count__42351_42359 = G__42376;
i__42352_42360 = G__42377;
continue;
}
} else {
}
}
break;
}

var G__42378 = seq__42345;
var G__42379 = chunk__42346;
var G__42380 = count__42347;
var G__42381 = (i__42348 + (1));
seq__42345 = G__42378;
chunk__42346 = G__42379;
count__42347 = G__42380;
i__42348 = G__42381;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__42345);
if(temp__4425__auto__){
var seq__42345__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42345__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__42345__$1);
var G__42382 = cljs.core.chunk_rest.call(null,seq__42345__$1);
var G__42383 = c__17643__auto__;
var G__42384 = cljs.core.count.call(null,c__17643__auto__);
var G__42385 = (0);
seq__42345 = G__42382;
chunk__42346 = G__42383;
count__42347 = G__42384;
i__42348 = G__42385;
continue;
} else {
var prov = cljs.core.first.call(null,seq__42345__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42353_42386 = cljs.core.seq.call(null,requires);
var chunk__42354_42387 = null;
var count__42355_42388 = (0);
var i__42356_42389 = (0);
while(true){
if((i__42356_42389 < count__42355_42388)){
var req_42390 = cljs.core._nth.call(null,chunk__42354_42387,i__42356_42389);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42390,prov);

var G__42391 = seq__42353_42386;
var G__42392 = chunk__42354_42387;
var G__42393 = count__42355_42388;
var G__42394 = (i__42356_42389 + (1));
seq__42353_42386 = G__42391;
chunk__42354_42387 = G__42392;
count__42355_42388 = G__42393;
i__42356_42389 = G__42394;
continue;
} else {
var temp__4425__auto___42395__$1 = cljs.core.seq.call(null,seq__42353_42386);
if(temp__4425__auto___42395__$1){
var seq__42353_42396__$1 = temp__4425__auto___42395__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42353_42396__$1)){
var c__17643__auto___42397 = cljs.core.chunk_first.call(null,seq__42353_42396__$1);
var G__42398 = cljs.core.chunk_rest.call(null,seq__42353_42396__$1);
var G__42399 = c__17643__auto___42397;
var G__42400 = cljs.core.count.call(null,c__17643__auto___42397);
var G__42401 = (0);
seq__42353_42386 = G__42398;
chunk__42354_42387 = G__42399;
count__42355_42388 = G__42400;
i__42356_42389 = G__42401;
continue;
} else {
var req_42402 = cljs.core.first.call(null,seq__42353_42396__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42402,prov);

var G__42403 = cljs.core.next.call(null,seq__42353_42396__$1);
var G__42404 = null;
var G__42405 = (0);
var G__42406 = (0);
seq__42353_42386 = G__42403;
chunk__42354_42387 = G__42404;
count__42355_42388 = G__42405;
i__42356_42389 = G__42406;
continue;
}
} else {
}
}
break;
}

var G__42407 = cljs.core.next.call(null,seq__42345__$1);
var G__42408 = null;
var G__42409 = (0);
var G__42410 = (0);
seq__42345 = G__42407;
chunk__42346 = G__42408;
count__42347 = G__42409;
i__42348 = G__42410;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__42415_42419 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__42416_42420 = null;
var count__42417_42421 = (0);
var i__42418_42422 = (0);
while(true){
if((i__42418_42422 < count__42417_42421)){
var ns_42423 = cljs.core._nth.call(null,chunk__42416_42420,i__42418_42422);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42423);

var G__42424 = seq__42415_42419;
var G__42425 = chunk__42416_42420;
var G__42426 = count__42417_42421;
var G__42427 = (i__42418_42422 + (1));
seq__42415_42419 = G__42424;
chunk__42416_42420 = G__42425;
count__42417_42421 = G__42426;
i__42418_42422 = G__42427;
continue;
} else {
var temp__4425__auto___42428 = cljs.core.seq.call(null,seq__42415_42419);
if(temp__4425__auto___42428){
var seq__42415_42429__$1 = temp__4425__auto___42428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42415_42429__$1)){
var c__17643__auto___42430 = cljs.core.chunk_first.call(null,seq__42415_42429__$1);
var G__42431 = cljs.core.chunk_rest.call(null,seq__42415_42429__$1);
var G__42432 = c__17643__auto___42430;
var G__42433 = cljs.core.count.call(null,c__17643__auto___42430);
var G__42434 = (0);
seq__42415_42419 = G__42431;
chunk__42416_42420 = G__42432;
count__42417_42421 = G__42433;
i__42418_42422 = G__42434;
continue;
} else {
var ns_42435 = cljs.core.first.call(null,seq__42415_42429__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42435);

var G__42436 = cljs.core.next.call(null,seq__42415_42429__$1);
var G__42437 = null;
var G__42438 = (0);
var G__42439 = (0);
seq__42415_42419 = G__42436;
chunk__42416_42420 = G__42437;
count__42417_42421 = G__42438;
i__42418_42422 = G__42439;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16840__auto__ = goog.require__;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__42440__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42441__i = 0, G__42441__a = new Array(arguments.length -  0);
while (G__42441__i < G__42441__a.length) {G__42441__a[G__42441__i] = arguments[G__42441__i + 0]; ++G__42441__i;}
  args = new cljs.core.IndexedSeq(G__42441__a,0);
} 
return G__42440__delegate.call(this,args);};
G__42440.cljs$lang$maxFixedArity = 0;
G__42440.cljs$lang$applyTo = (function (arglist__42442){
var args = cljs.core.seq(arglist__42442);
return G__42440__delegate(args);
});
G__42440.cljs$core$IFn$_invoke$arity$variadic = G__42440__delegate;
return G__42440;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42444 = cljs.core._EQ_;
var expr__42445 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42444.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42445))){
var path_parts = ((function (pred__42444,expr__42445){
return (function (p1__42443_SHARP_){
return clojure.string.split.call(null,p1__42443_SHARP_,/[\/\\]/);
});})(pred__42444,expr__42445))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__42444,expr__42445){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e42447){if((e42447 instanceof Error)){
var e = e42447;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42447;

}
}})());
});
;})(path_parts,sep,root,pred__42444,expr__42445))
} else {
if(cljs.core.truth_(pred__42444.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42445))){
return ((function (pred__42444,expr__42445){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__42444,expr__42445){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__42444,expr__42445))
);

return deferred.addErrback(((function (deferred,pred__42444,expr__42445){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__42444,expr__42445))
);
});
;})(pred__42444,expr__42445))
} else {
return ((function (pred__42444,expr__42445){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42444,expr__42445))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42448,callback){
var map__42451 = p__42448;
var map__42451__$1 = ((((!((map__42451 == null)))?((((map__42451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42451):map__42451);
var file_msg = map__42451__$1;
var request_url = cljs.core.get.call(null,map__42451__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__42451,map__42451__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42451,map__42451__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18865__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto__){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto__){
return (function (state_42475){
var state_val_42476 = (state_42475[(1)]);
if((state_val_42476 === (7))){
var inst_42471 = (state_42475[(2)]);
var state_42475__$1 = state_42475;
var statearr_42477_42497 = state_42475__$1;
(statearr_42477_42497[(2)] = inst_42471);

(statearr_42477_42497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42476 === (1))){
var state_42475__$1 = state_42475;
var statearr_42478_42498 = state_42475__$1;
(statearr_42478_42498[(2)] = null);

(statearr_42478_42498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42476 === (4))){
var inst_42455 = (state_42475[(7)]);
var inst_42455__$1 = (state_42475[(2)]);
var state_42475__$1 = (function (){var statearr_42479 = state_42475;
(statearr_42479[(7)] = inst_42455__$1);

return statearr_42479;
})();
if(cljs.core.truth_(inst_42455__$1)){
var statearr_42480_42499 = state_42475__$1;
(statearr_42480_42499[(1)] = (5));

} else {
var statearr_42481_42500 = state_42475__$1;
(statearr_42481_42500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42476 === (6))){
var state_42475__$1 = state_42475;
var statearr_42482_42501 = state_42475__$1;
(statearr_42482_42501[(2)] = null);

(statearr_42482_42501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42476 === (3))){
var inst_42473 = (state_42475[(2)]);
var state_42475__$1 = state_42475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42475__$1,inst_42473);
} else {
if((state_val_42476 === (2))){
var state_42475__$1 = state_42475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42475__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42476 === (11))){
var inst_42467 = (state_42475[(2)]);
var state_42475__$1 = (function (){var statearr_42483 = state_42475;
(statearr_42483[(8)] = inst_42467);

return statearr_42483;
})();
var statearr_42484_42502 = state_42475__$1;
(statearr_42484_42502[(2)] = null);

(statearr_42484_42502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42476 === (9))){
var inst_42459 = (state_42475[(9)]);
var inst_42461 = (state_42475[(10)]);
var inst_42463 = inst_42461.call(null,inst_42459);
var state_42475__$1 = state_42475;
var statearr_42485_42503 = state_42475__$1;
(statearr_42485_42503[(2)] = inst_42463);

(statearr_42485_42503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42476 === (5))){
var inst_42455 = (state_42475[(7)]);
var inst_42457 = figwheel.client.file_reloading.blocking_load.call(null,inst_42455);
var state_42475__$1 = state_42475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42475__$1,(8),inst_42457);
} else {
if((state_val_42476 === (10))){
var inst_42459 = (state_42475[(9)]);
var inst_42465 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42459);
var state_42475__$1 = state_42475;
var statearr_42486_42504 = state_42475__$1;
(statearr_42486_42504[(2)] = inst_42465);

(statearr_42486_42504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42476 === (8))){
var inst_42455 = (state_42475[(7)]);
var inst_42461 = (state_42475[(10)]);
var inst_42459 = (state_42475[(2)]);
var inst_42460 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42461__$1 = cljs.core.get.call(null,inst_42460,inst_42455);
var state_42475__$1 = (function (){var statearr_42487 = state_42475;
(statearr_42487[(9)] = inst_42459);

(statearr_42487[(10)] = inst_42461__$1);

return statearr_42487;
})();
if(cljs.core.truth_(inst_42461__$1)){
var statearr_42488_42505 = state_42475__$1;
(statearr_42488_42505[(1)] = (9));

} else {
var statearr_42489_42506 = state_42475__$1;
(statearr_42489_42506[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18865__auto__))
;
return ((function (switch__18844__auto__,c__18865__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18845__auto__ = null;
var figwheel$client$file_reloading$state_machine__18845__auto____0 = (function (){
var statearr_42493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42493[(0)] = figwheel$client$file_reloading$state_machine__18845__auto__);

(statearr_42493[(1)] = (1));

return statearr_42493;
});
var figwheel$client$file_reloading$state_machine__18845__auto____1 = (function (state_42475){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_42475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e42494){if((e42494 instanceof Object)){
var ex__18848__auto__ = e42494;
var statearr_42495_42507 = state_42475;
(statearr_42495_42507[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42508 = state_42475;
state_42475 = G__42508;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18845__auto__ = function(state_42475){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18845__auto____1.call(this,state_42475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18845__auto____0;
figwheel$client$file_reloading$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18845__auto____1;
return figwheel$client$file_reloading$state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__))
})();
var state__18867__auto__ = (function (){var statearr_42496 = f__18866__auto__.call(null);
(statearr_42496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_42496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto__))
);

return c__18865__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42509,callback){
var map__42512 = p__42509;
var map__42512__$1 = ((((!((map__42512 == null)))?((((map__42512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42512):map__42512);
var file_msg = map__42512__$1;
var namespace = cljs.core.get.call(null,map__42512__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42512,map__42512__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42512,map__42512__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42514){
var map__42517 = p__42514;
var map__42517__$1 = ((((!((map__42517 == null)))?((((map__42517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42517):map__42517);
var file_msg = map__42517__$1;
var namespace = cljs.core.get.call(null,map__42517__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16828__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16828__auto__){
var or__16840__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
var or__16840__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16840__auto____$1)){
return or__16840__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16828__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42519,callback){
var map__42522 = p__42519;
var map__42522__$1 = ((((!((map__42522 == null)))?((((map__42522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42522):map__42522);
var file_msg = map__42522__$1;
var request_url = cljs.core.get.call(null,map__42522__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18865__auto___42610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___42610,out){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___42610,out){
return (function (state_42592){
var state_val_42593 = (state_42592[(1)]);
if((state_val_42593 === (1))){
var inst_42570 = cljs.core.nth.call(null,files,(0),null);
var inst_42571 = cljs.core.nthnext.call(null,files,(1));
var inst_42572 = files;
var state_42592__$1 = (function (){var statearr_42594 = state_42592;
(statearr_42594[(7)] = inst_42571);

(statearr_42594[(8)] = inst_42570);

(statearr_42594[(9)] = inst_42572);

return statearr_42594;
})();
var statearr_42595_42611 = state_42592__$1;
(statearr_42595_42611[(2)] = null);

(statearr_42595_42611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42593 === (2))){
var inst_42575 = (state_42592[(10)]);
var inst_42572 = (state_42592[(9)]);
var inst_42575__$1 = cljs.core.nth.call(null,inst_42572,(0),null);
var inst_42576 = cljs.core.nthnext.call(null,inst_42572,(1));
var inst_42577 = (inst_42575__$1 == null);
var inst_42578 = cljs.core.not.call(null,inst_42577);
var state_42592__$1 = (function (){var statearr_42596 = state_42592;
(statearr_42596[(10)] = inst_42575__$1);

(statearr_42596[(11)] = inst_42576);

return statearr_42596;
})();
if(inst_42578){
var statearr_42597_42612 = state_42592__$1;
(statearr_42597_42612[(1)] = (4));

} else {
var statearr_42598_42613 = state_42592__$1;
(statearr_42598_42613[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42593 === (3))){
var inst_42590 = (state_42592[(2)]);
var state_42592__$1 = state_42592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42592__$1,inst_42590);
} else {
if((state_val_42593 === (4))){
var inst_42575 = (state_42592[(10)]);
var inst_42580 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42575);
var state_42592__$1 = state_42592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42592__$1,(7),inst_42580);
} else {
if((state_val_42593 === (5))){
var inst_42586 = cljs.core.async.close_BANG_.call(null,out);
var state_42592__$1 = state_42592;
var statearr_42599_42614 = state_42592__$1;
(statearr_42599_42614[(2)] = inst_42586);

(statearr_42599_42614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42593 === (6))){
var inst_42588 = (state_42592[(2)]);
var state_42592__$1 = state_42592;
var statearr_42600_42615 = state_42592__$1;
(statearr_42600_42615[(2)] = inst_42588);

(statearr_42600_42615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42593 === (7))){
var inst_42576 = (state_42592[(11)]);
var inst_42582 = (state_42592[(2)]);
var inst_42583 = cljs.core.async.put_BANG_.call(null,out,inst_42582);
var inst_42572 = inst_42576;
var state_42592__$1 = (function (){var statearr_42601 = state_42592;
(statearr_42601[(9)] = inst_42572);

(statearr_42601[(12)] = inst_42583);

return statearr_42601;
})();
var statearr_42602_42616 = state_42592__$1;
(statearr_42602_42616[(2)] = null);

(statearr_42602_42616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18865__auto___42610,out))
;
return ((function (switch__18844__auto__,c__18865__auto___42610,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____0 = (function (){
var statearr_42606 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42606[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__);

(statearr_42606[(1)] = (1));

return statearr_42606;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____1 = (function (state_42592){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_42592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e42607){if((e42607 instanceof Object)){
var ex__18848__auto__ = e42607;
var statearr_42608_42617 = state_42592;
(statearr_42608_42617[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42618 = state_42592;
state_42592 = G__42618;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__ = function(state_42592){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____1.call(this,state_42592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___42610,out))
})();
var state__18867__auto__ = (function (){var statearr_42609 = f__18866__auto__.call(null);
(statearr_42609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___42610);

return statearr_42609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___42610,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42619,opts){
var map__42623 = p__42619;
var map__42623__$1 = ((((!((map__42623 == null)))?((((map__42623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42623):map__42623);
var eval_body__$1 = cljs.core.get.call(null,map__42623__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42623__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16828__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16828__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16828__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e42625){var e = e42625;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__42626_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42626_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__42631){
var vec__42632 = p__42631;
var k = cljs.core.nth.call(null,vec__42632,(0),null);
var v = cljs.core.nth.call(null,vec__42632,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42633){
var vec__42634 = p__42633;
var k = cljs.core.nth.call(null,vec__42634,(0),null);
var v = cljs.core.nth.call(null,vec__42634,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42638,p__42639){
var map__42886 = p__42638;
var map__42886__$1 = ((((!((map__42886 == null)))?((((map__42886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42886):map__42886);
var opts = map__42886__$1;
var before_jsload = cljs.core.get.call(null,map__42886__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42886__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42886__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42887 = p__42639;
var map__42887__$1 = ((((!((map__42887 == null)))?((((map__42887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42887):map__42887);
var msg = map__42887__$1;
var files = cljs.core.get.call(null,map__42887__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42887__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42887__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18865__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_43040){
var state_val_43041 = (state_43040[(1)]);
if((state_val_43041 === (7))){
var inst_42901 = (state_43040[(7)]);
var inst_42903 = (state_43040[(8)]);
var inst_42904 = (state_43040[(9)]);
var inst_42902 = (state_43040[(10)]);
var inst_42909 = cljs.core._nth.call(null,inst_42902,inst_42904);
var inst_42910 = figwheel.client.file_reloading.eval_body.call(null,inst_42909,opts);
var inst_42911 = (inst_42904 + (1));
var tmp43042 = inst_42901;
var tmp43043 = inst_42903;
var tmp43044 = inst_42902;
var inst_42901__$1 = tmp43042;
var inst_42902__$1 = tmp43044;
var inst_42903__$1 = tmp43043;
var inst_42904__$1 = inst_42911;
var state_43040__$1 = (function (){var statearr_43045 = state_43040;
(statearr_43045[(7)] = inst_42901__$1);

(statearr_43045[(8)] = inst_42903__$1);

(statearr_43045[(11)] = inst_42910);

(statearr_43045[(9)] = inst_42904__$1);

(statearr_43045[(10)] = inst_42902__$1);

return statearr_43045;
})();
var statearr_43046_43132 = state_43040__$1;
(statearr_43046_43132[(2)] = null);

(statearr_43046_43132[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (20))){
var inst_42944 = (state_43040[(12)]);
var inst_42952 = figwheel.client.file_reloading.sort_files.call(null,inst_42944);
var state_43040__$1 = state_43040;
var statearr_43047_43133 = state_43040__$1;
(statearr_43047_43133[(2)] = inst_42952);

(statearr_43047_43133[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (27))){
var state_43040__$1 = state_43040;
var statearr_43048_43134 = state_43040__$1;
(statearr_43048_43134[(2)] = null);

(statearr_43048_43134[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (1))){
var inst_42893 = (state_43040[(13)]);
var inst_42890 = before_jsload.call(null,files);
var inst_42891 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42892 = (function (){return ((function (inst_42893,inst_42890,inst_42891,state_val_43041,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42635_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42635_SHARP_);
});
;})(inst_42893,inst_42890,inst_42891,state_val_43041,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42893__$1 = cljs.core.filter.call(null,inst_42892,files);
var inst_42894 = cljs.core.not_empty.call(null,inst_42893__$1);
var state_43040__$1 = (function (){var statearr_43049 = state_43040;
(statearr_43049[(13)] = inst_42893__$1);

(statearr_43049[(14)] = inst_42891);

(statearr_43049[(15)] = inst_42890);

return statearr_43049;
})();
if(cljs.core.truth_(inst_42894)){
var statearr_43050_43135 = state_43040__$1;
(statearr_43050_43135[(1)] = (2));

} else {
var statearr_43051_43136 = state_43040__$1;
(statearr_43051_43136[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (24))){
var state_43040__$1 = state_43040;
var statearr_43052_43137 = state_43040__$1;
(statearr_43052_43137[(2)] = null);

(statearr_43052_43137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (39))){
var inst_42994 = (state_43040[(16)]);
var state_43040__$1 = state_43040;
var statearr_43053_43138 = state_43040__$1;
(statearr_43053_43138[(2)] = inst_42994);

(statearr_43053_43138[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (46))){
var inst_43035 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
var statearr_43054_43139 = state_43040__$1;
(statearr_43054_43139[(2)] = inst_43035);

(statearr_43054_43139[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (4))){
var inst_42938 = (state_43040[(2)]);
var inst_42939 = cljs.core.List.EMPTY;
var inst_42940 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42939);
var inst_42941 = (function (){return ((function (inst_42938,inst_42939,inst_42940,state_val_43041,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42636_SHARP_){
var and__16828__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42636_SHARP_);
if(cljs.core.truth_(and__16828__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42636_SHARP_));
} else {
return and__16828__auto__;
}
});
;})(inst_42938,inst_42939,inst_42940,state_val_43041,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42942 = cljs.core.filter.call(null,inst_42941,files);
var inst_42943 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42944 = cljs.core.concat.call(null,inst_42942,inst_42943);
var state_43040__$1 = (function (){var statearr_43055 = state_43040;
(statearr_43055[(12)] = inst_42944);

(statearr_43055[(17)] = inst_42938);

(statearr_43055[(18)] = inst_42940);

return statearr_43055;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_43056_43140 = state_43040__$1;
(statearr_43056_43140[(1)] = (16));

} else {
var statearr_43057_43141 = state_43040__$1;
(statearr_43057_43141[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (15))){
var inst_42928 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
var statearr_43058_43142 = state_43040__$1;
(statearr_43058_43142[(2)] = inst_42928);

(statearr_43058_43142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (21))){
var inst_42954 = (state_43040[(19)]);
var inst_42954__$1 = (state_43040[(2)]);
var inst_42955 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42954__$1);
var state_43040__$1 = (function (){var statearr_43059 = state_43040;
(statearr_43059[(19)] = inst_42954__$1);

return statearr_43059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43040__$1,(22),inst_42955);
} else {
if((state_val_43041 === (31))){
var inst_43038 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43040__$1,inst_43038);
} else {
if((state_val_43041 === (32))){
var inst_42994 = (state_43040[(16)]);
var inst_42999 = inst_42994.cljs$lang$protocol_mask$partition0$;
var inst_43000 = (inst_42999 & (64));
var inst_43001 = inst_42994.cljs$core$ISeq$;
var inst_43002 = (inst_43000) || (inst_43001);
var state_43040__$1 = state_43040;
if(cljs.core.truth_(inst_43002)){
var statearr_43060_43143 = state_43040__$1;
(statearr_43060_43143[(1)] = (35));

} else {
var statearr_43061_43144 = state_43040__$1;
(statearr_43061_43144[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (40))){
var inst_43015 = (state_43040[(20)]);
var inst_43014 = (state_43040[(2)]);
var inst_43015__$1 = cljs.core.get.call(null,inst_43014,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_43016 = cljs.core.get.call(null,inst_43014,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_43017 = cljs.core.not_empty.call(null,inst_43015__$1);
var state_43040__$1 = (function (){var statearr_43062 = state_43040;
(statearr_43062[(20)] = inst_43015__$1);

(statearr_43062[(21)] = inst_43016);

return statearr_43062;
})();
if(cljs.core.truth_(inst_43017)){
var statearr_43063_43145 = state_43040__$1;
(statearr_43063_43145[(1)] = (41));

} else {
var statearr_43064_43146 = state_43040__$1;
(statearr_43064_43146[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (33))){
var state_43040__$1 = state_43040;
var statearr_43065_43147 = state_43040__$1;
(statearr_43065_43147[(2)] = false);

(statearr_43065_43147[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (13))){
var inst_42914 = (state_43040[(22)]);
var inst_42918 = cljs.core.chunk_first.call(null,inst_42914);
var inst_42919 = cljs.core.chunk_rest.call(null,inst_42914);
var inst_42920 = cljs.core.count.call(null,inst_42918);
var inst_42901 = inst_42919;
var inst_42902 = inst_42918;
var inst_42903 = inst_42920;
var inst_42904 = (0);
var state_43040__$1 = (function (){var statearr_43066 = state_43040;
(statearr_43066[(7)] = inst_42901);

(statearr_43066[(8)] = inst_42903);

(statearr_43066[(9)] = inst_42904);

(statearr_43066[(10)] = inst_42902);

return statearr_43066;
})();
var statearr_43067_43148 = state_43040__$1;
(statearr_43067_43148[(2)] = null);

(statearr_43067_43148[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (22))){
var inst_42957 = (state_43040[(23)]);
var inst_42962 = (state_43040[(24)]);
var inst_42958 = (state_43040[(25)]);
var inst_42954 = (state_43040[(19)]);
var inst_42957__$1 = (state_43040[(2)]);
var inst_42958__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42957__$1);
var inst_42959 = (function (){var all_files = inst_42954;
var res_SINGLEQUOTE_ = inst_42957__$1;
var res = inst_42958__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42957,inst_42962,inst_42958,inst_42954,inst_42957__$1,inst_42958__$1,state_val_43041,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42637_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42637_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42957,inst_42962,inst_42958,inst_42954,inst_42957__$1,inst_42958__$1,state_val_43041,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42960 = cljs.core.filter.call(null,inst_42959,inst_42957__$1);
var inst_42961 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42962__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42961);
var inst_42963 = cljs.core.not_empty.call(null,inst_42962__$1);
var state_43040__$1 = (function (){var statearr_43068 = state_43040;
(statearr_43068[(23)] = inst_42957__$1);

(statearr_43068[(24)] = inst_42962__$1);

(statearr_43068[(26)] = inst_42960);

(statearr_43068[(25)] = inst_42958__$1);

return statearr_43068;
})();
if(cljs.core.truth_(inst_42963)){
var statearr_43069_43149 = state_43040__$1;
(statearr_43069_43149[(1)] = (23));

} else {
var statearr_43070_43150 = state_43040__$1;
(statearr_43070_43150[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (36))){
var state_43040__$1 = state_43040;
var statearr_43071_43151 = state_43040__$1;
(statearr_43071_43151[(2)] = false);

(statearr_43071_43151[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (41))){
var inst_43015 = (state_43040[(20)]);
var inst_43019 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_43020 = cljs.core.map.call(null,inst_43019,inst_43015);
var inst_43021 = cljs.core.pr_str.call(null,inst_43020);
var inst_43022 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_43021)].join('');
var inst_43023 = figwheel.client.utils.log.call(null,inst_43022);
var state_43040__$1 = state_43040;
var statearr_43072_43152 = state_43040__$1;
(statearr_43072_43152[(2)] = inst_43023);

(statearr_43072_43152[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (43))){
var inst_43016 = (state_43040[(21)]);
var inst_43026 = (state_43040[(2)]);
var inst_43027 = cljs.core.not_empty.call(null,inst_43016);
var state_43040__$1 = (function (){var statearr_43073 = state_43040;
(statearr_43073[(27)] = inst_43026);

return statearr_43073;
})();
if(cljs.core.truth_(inst_43027)){
var statearr_43074_43153 = state_43040__$1;
(statearr_43074_43153[(1)] = (44));

} else {
var statearr_43075_43154 = state_43040__$1;
(statearr_43075_43154[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (29))){
var inst_42994 = (state_43040[(16)]);
var inst_42957 = (state_43040[(23)]);
var inst_42962 = (state_43040[(24)]);
var inst_42960 = (state_43040[(26)]);
var inst_42958 = (state_43040[(25)]);
var inst_42954 = (state_43040[(19)]);
var inst_42990 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42993 = (function (){var all_files = inst_42954;
var res_SINGLEQUOTE_ = inst_42957;
var res = inst_42958;
var files_not_loaded = inst_42960;
var dependencies_that_loaded = inst_42962;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42994,inst_42957,inst_42962,inst_42960,inst_42958,inst_42954,inst_42990,state_val_43041,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42992){
var map__43076 = p__42992;
var map__43076__$1 = ((((!((map__43076 == null)))?((((map__43076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43076):map__43076);
var namespace = cljs.core.get.call(null,map__43076__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42994,inst_42957,inst_42962,inst_42960,inst_42958,inst_42954,inst_42990,state_val_43041,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42994__$1 = cljs.core.group_by.call(null,inst_42993,inst_42960);
var inst_42996 = (inst_42994__$1 == null);
var inst_42997 = cljs.core.not.call(null,inst_42996);
var state_43040__$1 = (function (){var statearr_43078 = state_43040;
(statearr_43078[(16)] = inst_42994__$1);

(statearr_43078[(28)] = inst_42990);

return statearr_43078;
})();
if(inst_42997){
var statearr_43079_43155 = state_43040__$1;
(statearr_43079_43155[(1)] = (32));

} else {
var statearr_43080_43156 = state_43040__$1;
(statearr_43080_43156[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (44))){
var inst_43016 = (state_43040[(21)]);
var inst_43029 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43016);
var inst_43030 = cljs.core.pr_str.call(null,inst_43029);
var inst_43031 = [cljs.core.str("not required: "),cljs.core.str(inst_43030)].join('');
var inst_43032 = figwheel.client.utils.log.call(null,inst_43031);
var state_43040__$1 = state_43040;
var statearr_43081_43157 = state_43040__$1;
(statearr_43081_43157[(2)] = inst_43032);

(statearr_43081_43157[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (6))){
var inst_42935 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
var statearr_43082_43158 = state_43040__$1;
(statearr_43082_43158[(2)] = inst_42935);

(statearr_43082_43158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (28))){
var inst_42960 = (state_43040[(26)]);
var inst_42987 = (state_43040[(2)]);
var inst_42988 = cljs.core.not_empty.call(null,inst_42960);
var state_43040__$1 = (function (){var statearr_43083 = state_43040;
(statearr_43083[(29)] = inst_42987);

return statearr_43083;
})();
if(cljs.core.truth_(inst_42988)){
var statearr_43084_43159 = state_43040__$1;
(statearr_43084_43159[(1)] = (29));

} else {
var statearr_43085_43160 = state_43040__$1;
(statearr_43085_43160[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (25))){
var inst_42958 = (state_43040[(25)]);
var inst_42974 = (state_43040[(2)]);
var inst_42975 = cljs.core.not_empty.call(null,inst_42958);
var state_43040__$1 = (function (){var statearr_43086 = state_43040;
(statearr_43086[(30)] = inst_42974);

return statearr_43086;
})();
if(cljs.core.truth_(inst_42975)){
var statearr_43087_43161 = state_43040__$1;
(statearr_43087_43161[(1)] = (26));

} else {
var statearr_43088_43162 = state_43040__$1;
(statearr_43088_43162[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (34))){
var inst_43009 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
if(cljs.core.truth_(inst_43009)){
var statearr_43089_43163 = state_43040__$1;
(statearr_43089_43163[(1)] = (38));

} else {
var statearr_43090_43164 = state_43040__$1;
(statearr_43090_43164[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (17))){
var state_43040__$1 = state_43040;
var statearr_43091_43165 = state_43040__$1;
(statearr_43091_43165[(2)] = recompile_dependents);

(statearr_43091_43165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (3))){
var state_43040__$1 = state_43040;
var statearr_43092_43166 = state_43040__$1;
(statearr_43092_43166[(2)] = null);

(statearr_43092_43166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (12))){
var inst_42931 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
var statearr_43093_43167 = state_43040__$1;
(statearr_43093_43167[(2)] = inst_42931);

(statearr_43093_43167[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (2))){
var inst_42893 = (state_43040[(13)]);
var inst_42900 = cljs.core.seq.call(null,inst_42893);
var inst_42901 = inst_42900;
var inst_42902 = null;
var inst_42903 = (0);
var inst_42904 = (0);
var state_43040__$1 = (function (){var statearr_43094 = state_43040;
(statearr_43094[(7)] = inst_42901);

(statearr_43094[(8)] = inst_42903);

(statearr_43094[(9)] = inst_42904);

(statearr_43094[(10)] = inst_42902);

return statearr_43094;
})();
var statearr_43095_43168 = state_43040__$1;
(statearr_43095_43168[(2)] = null);

(statearr_43095_43168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (23))){
var inst_42957 = (state_43040[(23)]);
var inst_42962 = (state_43040[(24)]);
var inst_42960 = (state_43040[(26)]);
var inst_42958 = (state_43040[(25)]);
var inst_42954 = (state_43040[(19)]);
var inst_42965 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42967 = (function (){var all_files = inst_42954;
var res_SINGLEQUOTE_ = inst_42957;
var res = inst_42958;
var files_not_loaded = inst_42960;
var dependencies_that_loaded = inst_42962;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42957,inst_42962,inst_42960,inst_42958,inst_42954,inst_42965,state_val_43041,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42966){
var map__43096 = p__42966;
var map__43096__$1 = ((((!((map__43096 == null)))?((((map__43096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43096):map__43096);
var request_url = cljs.core.get.call(null,map__43096__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42957,inst_42962,inst_42960,inst_42958,inst_42954,inst_42965,state_val_43041,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42968 = cljs.core.reverse.call(null,inst_42962);
var inst_42969 = cljs.core.map.call(null,inst_42967,inst_42968);
var inst_42970 = cljs.core.pr_str.call(null,inst_42969);
var inst_42971 = figwheel.client.utils.log.call(null,inst_42970);
var state_43040__$1 = (function (){var statearr_43098 = state_43040;
(statearr_43098[(31)] = inst_42965);

return statearr_43098;
})();
var statearr_43099_43169 = state_43040__$1;
(statearr_43099_43169[(2)] = inst_42971);

(statearr_43099_43169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (35))){
var state_43040__$1 = state_43040;
var statearr_43100_43170 = state_43040__$1;
(statearr_43100_43170[(2)] = true);

(statearr_43100_43170[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (19))){
var inst_42944 = (state_43040[(12)]);
var inst_42950 = figwheel.client.file_reloading.expand_files.call(null,inst_42944);
var state_43040__$1 = state_43040;
var statearr_43101_43171 = state_43040__$1;
(statearr_43101_43171[(2)] = inst_42950);

(statearr_43101_43171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (11))){
var state_43040__$1 = state_43040;
var statearr_43102_43172 = state_43040__$1;
(statearr_43102_43172[(2)] = null);

(statearr_43102_43172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (9))){
var inst_42933 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
var statearr_43103_43173 = state_43040__$1;
(statearr_43103_43173[(2)] = inst_42933);

(statearr_43103_43173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (5))){
var inst_42903 = (state_43040[(8)]);
var inst_42904 = (state_43040[(9)]);
var inst_42906 = (inst_42904 < inst_42903);
var inst_42907 = inst_42906;
var state_43040__$1 = state_43040;
if(cljs.core.truth_(inst_42907)){
var statearr_43104_43174 = state_43040__$1;
(statearr_43104_43174[(1)] = (7));

} else {
var statearr_43105_43175 = state_43040__$1;
(statearr_43105_43175[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (14))){
var inst_42914 = (state_43040[(22)]);
var inst_42923 = cljs.core.first.call(null,inst_42914);
var inst_42924 = figwheel.client.file_reloading.eval_body.call(null,inst_42923,opts);
var inst_42925 = cljs.core.next.call(null,inst_42914);
var inst_42901 = inst_42925;
var inst_42902 = null;
var inst_42903 = (0);
var inst_42904 = (0);
var state_43040__$1 = (function (){var statearr_43106 = state_43040;
(statearr_43106[(7)] = inst_42901);

(statearr_43106[(8)] = inst_42903);

(statearr_43106[(9)] = inst_42904);

(statearr_43106[(10)] = inst_42902);

(statearr_43106[(32)] = inst_42924);

return statearr_43106;
})();
var statearr_43107_43176 = state_43040__$1;
(statearr_43107_43176[(2)] = null);

(statearr_43107_43176[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (45))){
var state_43040__$1 = state_43040;
var statearr_43108_43177 = state_43040__$1;
(statearr_43108_43177[(2)] = null);

(statearr_43108_43177[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (26))){
var inst_42957 = (state_43040[(23)]);
var inst_42962 = (state_43040[(24)]);
var inst_42960 = (state_43040[(26)]);
var inst_42958 = (state_43040[(25)]);
var inst_42954 = (state_43040[(19)]);
var inst_42977 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42979 = (function (){var all_files = inst_42954;
var res_SINGLEQUOTE_ = inst_42957;
var res = inst_42958;
var files_not_loaded = inst_42960;
var dependencies_that_loaded = inst_42962;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42957,inst_42962,inst_42960,inst_42958,inst_42954,inst_42977,state_val_43041,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42978){
var map__43109 = p__42978;
var map__43109__$1 = ((((!((map__43109 == null)))?((((map__43109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43109):map__43109);
var namespace = cljs.core.get.call(null,map__43109__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__43109__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42957,inst_42962,inst_42960,inst_42958,inst_42954,inst_42977,state_val_43041,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42980 = cljs.core.map.call(null,inst_42979,inst_42958);
var inst_42981 = cljs.core.pr_str.call(null,inst_42980);
var inst_42982 = figwheel.client.utils.log.call(null,inst_42981);
var inst_42983 = (function (){var all_files = inst_42954;
var res_SINGLEQUOTE_ = inst_42957;
var res = inst_42958;
var files_not_loaded = inst_42960;
var dependencies_that_loaded = inst_42962;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42957,inst_42962,inst_42960,inst_42958,inst_42954,inst_42977,inst_42979,inst_42980,inst_42981,inst_42982,state_val_43041,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42957,inst_42962,inst_42960,inst_42958,inst_42954,inst_42977,inst_42979,inst_42980,inst_42981,inst_42982,state_val_43041,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42984 = setTimeout(inst_42983,(10));
var state_43040__$1 = (function (){var statearr_43111 = state_43040;
(statearr_43111[(33)] = inst_42977);

(statearr_43111[(34)] = inst_42982);

return statearr_43111;
})();
var statearr_43112_43178 = state_43040__$1;
(statearr_43112_43178[(2)] = inst_42984);

(statearr_43112_43178[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (16))){
var state_43040__$1 = state_43040;
var statearr_43113_43179 = state_43040__$1;
(statearr_43113_43179[(2)] = reload_dependents);

(statearr_43113_43179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (38))){
var inst_42994 = (state_43040[(16)]);
var inst_43011 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42994);
var state_43040__$1 = state_43040;
var statearr_43114_43180 = state_43040__$1;
(statearr_43114_43180[(2)] = inst_43011);

(statearr_43114_43180[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (30))){
var state_43040__$1 = state_43040;
var statearr_43115_43181 = state_43040__$1;
(statearr_43115_43181[(2)] = null);

(statearr_43115_43181[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (10))){
var inst_42914 = (state_43040[(22)]);
var inst_42916 = cljs.core.chunked_seq_QMARK_.call(null,inst_42914);
var state_43040__$1 = state_43040;
if(inst_42916){
var statearr_43116_43182 = state_43040__$1;
(statearr_43116_43182[(1)] = (13));

} else {
var statearr_43117_43183 = state_43040__$1;
(statearr_43117_43183[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (18))){
var inst_42948 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
if(cljs.core.truth_(inst_42948)){
var statearr_43118_43184 = state_43040__$1;
(statearr_43118_43184[(1)] = (19));

} else {
var statearr_43119_43185 = state_43040__$1;
(statearr_43119_43185[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (42))){
var state_43040__$1 = state_43040;
var statearr_43120_43186 = state_43040__$1;
(statearr_43120_43186[(2)] = null);

(statearr_43120_43186[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (37))){
var inst_43006 = (state_43040[(2)]);
var state_43040__$1 = state_43040;
var statearr_43121_43187 = state_43040__$1;
(statearr_43121_43187[(2)] = inst_43006);

(statearr_43121_43187[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43041 === (8))){
var inst_42901 = (state_43040[(7)]);
var inst_42914 = (state_43040[(22)]);
var inst_42914__$1 = cljs.core.seq.call(null,inst_42901);
var state_43040__$1 = (function (){var statearr_43122 = state_43040;
(statearr_43122[(22)] = inst_42914__$1);

return statearr_43122;
})();
if(inst_42914__$1){
var statearr_43123_43188 = state_43040__$1;
(statearr_43123_43188[(1)] = (10));

} else {
var statearr_43124_43189 = state_43040__$1;
(statearr_43124_43189[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18844__auto__,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____0 = (function (){
var statearr_43128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43128[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__);

(statearr_43128[(1)] = (1));

return statearr_43128;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____1 = (function (state_43040){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_43040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e43129){if((e43129 instanceof Object)){
var ex__18848__auto__ = e43129;
var statearr_43130_43190 = state_43040;
(statearr_43130_43190[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43191 = state_43040;
state_43040 = G__43191;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__ = function(state_43040){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____1.call(this,state_43040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18867__auto__ = (function (){var statearr_43131 = f__18866__auto__.call(null);
(statearr_43131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_43131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto__,map__42886,map__42886__$1,opts,before_jsload,on_jsload,reload_dependents,map__42887,map__42887__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18865__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__43194,link){
var map__43197 = p__43194;
var map__43197__$1 = ((((!((map__43197 == null)))?((((map__43197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43197):map__43197);
var file = cljs.core.get.call(null,map__43197__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__43197,map__43197__$1,file){
return (function (p1__43192_SHARP_,p2__43193_SHARP_){
if(cljs.core._EQ_.call(null,p1__43192_SHARP_,p2__43193_SHARP_)){
return p1__43192_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__43197,map__43197__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__43203){
var map__43204 = p__43203;
var map__43204__$1 = ((((!((map__43204 == null)))?((((map__43204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43204):map__43204);
var match_length = cljs.core.get.call(null,map__43204__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__43204__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__43199_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__43199_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args43206 = [];
var len__17898__auto___43209 = arguments.length;
var i__17899__auto___43210 = (0);
while(true){
if((i__17899__auto___43210 < len__17898__auto___43209)){
args43206.push((arguments[i__17899__auto___43210]));

var G__43211 = (i__17899__auto___43210 + (1));
i__17899__auto___43210 = G__43211;
continue;
} else {
}
break;
}

var G__43208 = args43206.length;
switch (G__43208) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43206.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__43213_SHARP_,p2__43214_SHARP_){
return cljs.core.assoc.call(null,p1__43213_SHARP_,cljs.core.get.call(null,p2__43214_SHARP_,key),p2__43214_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__43215){
var map__43218 = p__43215;
var map__43218__$1 = ((((!((map__43218 == null)))?((((map__43218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43218):map__43218);
var f_data = map__43218__$1;
var file = cljs.core.get.call(null,map__43218__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__43220,files_msg){
var map__43227 = p__43220;
var map__43227__$1 = ((((!((map__43227 == null)))?((((map__43227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43227):map__43227);
var opts = map__43227__$1;
var on_cssload = cljs.core.get.call(null,map__43227__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__43229_43233 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__43230_43234 = null;
var count__43231_43235 = (0);
var i__43232_43236 = (0);
while(true){
if((i__43232_43236 < count__43231_43235)){
var f_43237 = cljs.core._nth.call(null,chunk__43230_43234,i__43232_43236);
figwheel.client.file_reloading.reload_css_file.call(null,f_43237);

var G__43238 = seq__43229_43233;
var G__43239 = chunk__43230_43234;
var G__43240 = count__43231_43235;
var G__43241 = (i__43232_43236 + (1));
seq__43229_43233 = G__43238;
chunk__43230_43234 = G__43239;
count__43231_43235 = G__43240;
i__43232_43236 = G__43241;
continue;
} else {
var temp__4425__auto___43242 = cljs.core.seq.call(null,seq__43229_43233);
if(temp__4425__auto___43242){
var seq__43229_43243__$1 = temp__4425__auto___43242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43229_43243__$1)){
var c__17643__auto___43244 = cljs.core.chunk_first.call(null,seq__43229_43243__$1);
var G__43245 = cljs.core.chunk_rest.call(null,seq__43229_43243__$1);
var G__43246 = c__17643__auto___43244;
var G__43247 = cljs.core.count.call(null,c__17643__auto___43244);
var G__43248 = (0);
seq__43229_43233 = G__43245;
chunk__43230_43234 = G__43246;
count__43231_43235 = G__43247;
i__43232_43236 = G__43248;
continue;
} else {
var f_43249 = cljs.core.first.call(null,seq__43229_43243__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_43249);

var G__43250 = cljs.core.next.call(null,seq__43229_43243__$1);
var G__43251 = null;
var G__43252 = (0);
var G__43253 = (0);
seq__43229_43233 = G__43250;
chunk__43230_43234 = G__43251;
count__43231_43235 = G__43252;
i__43232_43236 = G__43253;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__43227,map__43227__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__43227,map__43227__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map