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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30308_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30308_SHARP_));
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
var seq__30313 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30314 = null;
var count__30315 = (0);
var i__30316 = (0);
while(true){
if((i__30316 < count__30315)){
var n = cljs.core._nth.call(null,chunk__30314,i__30316);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30317 = seq__30313;
var G__30318 = chunk__30314;
var G__30319 = count__30315;
var G__30320 = (i__30316 + (1));
seq__30313 = G__30317;
chunk__30314 = G__30318;
count__30315 = G__30319;
i__30316 = G__30320;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30313);
if(temp__4425__auto__){
var seq__30313__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30313__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__30313__$1);
var G__30321 = cljs.core.chunk_rest.call(null,seq__30313__$1);
var G__30322 = c__17643__auto__;
var G__30323 = cljs.core.count.call(null,c__17643__auto__);
var G__30324 = (0);
seq__30313 = G__30321;
chunk__30314 = G__30322;
count__30315 = G__30323;
i__30316 = G__30324;
continue;
} else {
var n = cljs.core.first.call(null,seq__30313__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30325 = cljs.core.next.call(null,seq__30313__$1);
var G__30326 = null;
var G__30327 = (0);
var G__30328 = (0);
seq__30313 = G__30325;
chunk__30314 = G__30326;
count__30315 = G__30327;
i__30316 = G__30328;
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

var seq__30367_30374 = cljs.core.seq.call(null,deps);
var chunk__30368_30375 = null;
var count__30369_30376 = (0);
var i__30370_30377 = (0);
while(true){
if((i__30370_30377 < count__30369_30376)){
var dep_30378 = cljs.core._nth.call(null,chunk__30368_30375,i__30370_30377);
topo_sort_helper_STAR_.call(null,dep_30378,(depth + (1)),state);

var G__30379 = seq__30367_30374;
var G__30380 = chunk__30368_30375;
var G__30381 = count__30369_30376;
var G__30382 = (i__30370_30377 + (1));
seq__30367_30374 = G__30379;
chunk__30368_30375 = G__30380;
count__30369_30376 = G__30381;
i__30370_30377 = G__30382;
continue;
} else {
var temp__4425__auto___30383 = cljs.core.seq.call(null,seq__30367_30374);
if(temp__4425__auto___30383){
var seq__30367_30384__$1 = temp__4425__auto___30383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30367_30384__$1)){
var c__17643__auto___30385 = cljs.core.chunk_first.call(null,seq__30367_30384__$1);
var G__30386 = cljs.core.chunk_rest.call(null,seq__30367_30384__$1);
var G__30387 = c__17643__auto___30385;
var G__30388 = cljs.core.count.call(null,c__17643__auto___30385);
var G__30389 = (0);
seq__30367_30374 = G__30386;
chunk__30368_30375 = G__30387;
count__30369_30376 = G__30388;
i__30370_30377 = G__30389;
continue;
} else {
var dep_30390 = cljs.core.first.call(null,seq__30367_30384__$1);
topo_sort_helper_STAR_.call(null,dep_30390,(depth + (1)),state);

var G__30391 = cljs.core.next.call(null,seq__30367_30384__$1);
var G__30392 = null;
var G__30393 = (0);
var G__30394 = (0);
seq__30367_30374 = G__30391;
chunk__30368_30375 = G__30392;
count__30369_30376 = G__30393;
i__30370_30377 = G__30394;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30371){
var vec__30373 = p__30371;
var x = cljs.core.nth.call(null,vec__30373,(0),null);
var xs = cljs.core.nthnext.call(null,vec__30373,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30373,x,xs,get_deps__$1){
return (function (p1__30329_SHARP_){
return clojure.set.difference.call(null,p1__30329_SHARP_,x);
});})(vec__30373,x,xs,get_deps__$1))
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
var seq__30407 = cljs.core.seq.call(null,provides);
var chunk__30408 = null;
var count__30409 = (0);
var i__30410 = (0);
while(true){
if((i__30410 < count__30409)){
var prov = cljs.core._nth.call(null,chunk__30408,i__30410);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30411_30419 = cljs.core.seq.call(null,requires);
var chunk__30412_30420 = null;
var count__30413_30421 = (0);
var i__30414_30422 = (0);
while(true){
if((i__30414_30422 < count__30413_30421)){
var req_30423 = cljs.core._nth.call(null,chunk__30412_30420,i__30414_30422);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30423,prov);

var G__30424 = seq__30411_30419;
var G__30425 = chunk__30412_30420;
var G__30426 = count__30413_30421;
var G__30427 = (i__30414_30422 + (1));
seq__30411_30419 = G__30424;
chunk__30412_30420 = G__30425;
count__30413_30421 = G__30426;
i__30414_30422 = G__30427;
continue;
} else {
var temp__4425__auto___30428 = cljs.core.seq.call(null,seq__30411_30419);
if(temp__4425__auto___30428){
var seq__30411_30429__$1 = temp__4425__auto___30428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30411_30429__$1)){
var c__17643__auto___30430 = cljs.core.chunk_first.call(null,seq__30411_30429__$1);
var G__30431 = cljs.core.chunk_rest.call(null,seq__30411_30429__$1);
var G__30432 = c__17643__auto___30430;
var G__30433 = cljs.core.count.call(null,c__17643__auto___30430);
var G__30434 = (0);
seq__30411_30419 = G__30431;
chunk__30412_30420 = G__30432;
count__30413_30421 = G__30433;
i__30414_30422 = G__30434;
continue;
} else {
var req_30435 = cljs.core.first.call(null,seq__30411_30429__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30435,prov);

var G__30436 = cljs.core.next.call(null,seq__30411_30429__$1);
var G__30437 = null;
var G__30438 = (0);
var G__30439 = (0);
seq__30411_30419 = G__30436;
chunk__30412_30420 = G__30437;
count__30413_30421 = G__30438;
i__30414_30422 = G__30439;
continue;
}
} else {
}
}
break;
}

var G__30440 = seq__30407;
var G__30441 = chunk__30408;
var G__30442 = count__30409;
var G__30443 = (i__30410 + (1));
seq__30407 = G__30440;
chunk__30408 = G__30441;
count__30409 = G__30442;
i__30410 = G__30443;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30407);
if(temp__4425__auto__){
var seq__30407__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30407__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__30407__$1);
var G__30444 = cljs.core.chunk_rest.call(null,seq__30407__$1);
var G__30445 = c__17643__auto__;
var G__30446 = cljs.core.count.call(null,c__17643__auto__);
var G__30447 = (0);
seq__30407 = G__30444;
chunk__30408 = G__30445;
count__30409 = G__30446;
i__30410 = G__30447;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30407__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30415_30448 = cljs.core.seq.call(null,requires);
var chunk__30416_30449 = null;
var count__30417_30450 = (0);
var i__30418_30451 = (0);
while(true){
if((i__30418_30451 < count__30417_30450)){
var req_30452 = cljs.core._nth.call(null,chunk__30416_30449,i__30418_30451);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30452,prov);

var G__30453 = seq__30415_30448;
var G__30454 = chunk__30416_30449;
var G__30455 = count__30417_30450;
var G__30456 = (i__30418_30451 + (1));
seq__30415_30448 = G__30453;
chunk__30416_30449 = G__30454;
count__30417_30450 = G__30455;
i__30418_30451 = G__30456;
continue;
} else {
var temp__4425__auto___30457__$1 = cljs.core.seq.call(null,seq__30415_30448);
if(temp__4425__auto___30457__$1){
var seq__30415_30458__$1 = temp__4425__auto___30457__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30415_30458__$1)){
var c__17643__auto___30459 = cljs.core.chunk_first.call(null,seq__30415_30458__$1);
var G__30460 = cljs.core.chunk_rest.call(null,seq__30415_30458__$1);
var G__30461 = c__17643__auto___30459;
var G__30462 = cljs.core.count.call(null,c__17643__auto___30459);
var G__30463 = (0);
seq__30415_30448 = G__30460;
chunk__30416_30449 = G__30461;
count__30417_30450 = G__30462;
i__30418_30451 = G__30463;
continue;
} else {
var req_30464 = cljs.core.first.call(null,seq__30415_30458__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30464,prov);

var G__30465 = cljs.core.next.call(null,seq__30415_30458__$1);
var G__30466 = null;
var G__30467 = (0);
var G__30468 = (0);
seq__30415_30448 = G__30465;
chunk__30416_30449 = G__30466;
count__30417_30450 = G__30467;
i__30418_30451 = G__30468;
continue;
}
} else {
}
}
break;
}

var G__30469 = cljs.core.next.call(null,seq__30407__$1);
var G__30470 = null;
var G__30471 = (0);
var G__30472 = (0);
seq__30407 = G__30469;
chunk__30408 = G__30470;
count__30409 = G__30471;
i__30410 = G__30472;
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
var seq__30477_30481 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30478_30482 = null;
var count__30479_30483 = (0);
var i__30480_30484 = (0);
while(true){
if((i__30480_30484 < count__30479_30483)){
var ns_30485 = cljs.core._nth.call(null,chunk__30478_30482,i__30480_30484);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30485);

var G__30486 = seq__30477_30481;
var G__30487 = chunk__30478_30482;
var G__30488 = count__30479_30483;
var G__30489 = (i__30480_30484 + (1));
seq__30477_30481 = G__30486;
chunk__30478_30482 = G__30487;
count__30479_30483 = G__30488;
i__30480_30484 = G__30489;
continue;
} else {
var temp__4425__auto___30490 = cljs.core.seq.call(null,seq__30477_30481);
if(temp__4425__auto___30490){
var seq__30477_30491__$1 = temp__4425__auto___30490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30477_30491__$1)){
var c__17643__auto___30492 = cljs.core.chunk_first.call(null,seq__30477_30491__$1);
var G__30493 = cljs.core.chunk_rest.call(null,seq__30477_30491__$1);
var G__30494 = c__17643__auto___30492;
var G__30495 = cljs.core.count.call(null,c__17643__auto___30492);
var G__30496 = (0);
seq__30477_30481 = G__30493;
chunk__30478_30482 = G__30494;
count__30479_30483 = G__30495;
i__30480_30484 = G__30496;
continue;
} else {
var ns_30497 = cljs.core.first.call(null,seq__30477_30491__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30497);

var G__30498 = cljs.core.next.call(null,seq__30477_30491__$1);
var G__30499 = null;
var G__30500 = (0);
var G__30501 = (0);
seq__30477_30481 = G__30498;
chunk__30478_30482 = G__30499;
count__30479_30483 = G__30500;
i__30480_30484 = G__30501;
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
var G__30502__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30503__i = 0, G__30503__a = new Array(arguments.length -  0);
while (G__30503__i < G__30503__a.length) {G__30503__a[G__30503__i] = arguments[G__30503__i + 0]; ++G__30503__i;}
  args = new cljs.core.IndexedSeq(G__30503__a,0);
} 
return G__30502__delegate.call(this,args);};
G__30502.cljs$lang$maxFixedArity = 0;
G__30502.cljs$lang$applyTo = (function (arglist__30504){
var args = cljs.core.seq(arglist__30504);
return G__30502__delegate(args);
});
G__30502.cljs$core$IFn$_invoke$arity$variadic = G__30502__delegate;
return G__30502;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30506 = cljs.core._EQ_;
var expr__30507 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30506.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30507))){
var path_parts = ((function (pred__30506,expr__30507){
return (function (p1__30505_SHARP_){
return clojure.string.split.call(null,p1__30505_SHARP_,/[\/\\]/);
});})(pred__30506,expr__30507))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30506,expr__30507){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30509){if((e30509 instanceof Error)){
var e = e30509;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30509;

}
}})());
});
;})(path_parts,sep,root,pred__30506,expr__30507))
} else {
if(cljs.core.truth_(pred__30506.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30507))){
return ((function (pred__30506,expr__30507){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30506,expr__30507){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30506,expr__30507))
);

return deferred.addErrback(((function (deferred,pred__30506,expr__30507){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30506,expr__30507))
);
});
;})(pred__30506,expr__30507))
} else {
return ((function (pred__30506,expr__30507){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30506,expr__30507))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30510,callback){
var map__30513 = p__30510;
var map__30513__$1 = ((((!((map__30513 == null)))?((((map__30513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30513):map__30513);
var file_msg = map__30513__$1;
var request_url = cljs.core.get.call(null,map__30513__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30513,map__30513__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30513,map__30513__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20107__auto__){
return (function (){
var f__20108__auto__ = (function (){var switch__19995__auto__ = ((function (c__20107__auto__){
return (function (state_30537){
var state_val_30538 = (state_30537[(1)]);
if((state_val_30538 === (7))){
var inst_30533 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
var statearr_30539_30559 = state_30537__$1;
(statearr_30539_30559[(2)] = inst_30533);

(statearr_30539_30559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (1))){
var state_30537__$1 = state_30537;
var statearr_30540_30560 = state_30537__$1;
(statearr_30540_30560[(2)] = null);

(statearr_30540_30560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (4))){
var inst_30517 = (state_30537[(7)]);
var inst_30517__$1 = (state_30537[(2)]);
var state_30537__$1 = (function (){var statearr_30541 = state_30537;
(statearr_30541[(7)] = inst_30517__$1);

return statearr_30541;
})();
if(cljs.core.truth_(inst_30517__$1)){
var statearr_30542_30561 = state_30537__$1;
(statearr_30542_30561[(1)] = (5));

} else {
var statearr_30543_30562 = state_30537__$1;
(statearr_30543_30562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (6))){
var state_30537__$1 = state_30537;
var statearr_30544_30563 = state_30537__$1;
(statearr_30544_30563[(2)] = null);

(statearr_30544_30563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (3))){
var inst_30535 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30537__$1,inst_30535);
} else {
if((state_val_30538 === (2))){
var state_30537__$1 = state_30537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30537__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30538 === (11))){
var inst_30529 = (state_30537[(2)]);
var state_30537__$1 = (function (){var statearr_30545 = state_30537;
(statearr_30545[(8)] = inst_30529);

return statearr_30545;
})();
var statearr_30546_30564 = state_30537__$1;
(statearr_30546_30564[(2)] = null);

(statearr_30546_30564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (9))){
var inst_30523 = (state_30537[(9)]);
var inst_30521 = (state_30537[(10)]);
var inst_30525 = inst_30523.call(null,inst_30521);
var state_30537__$1 = state_30537;
var statearr_30547_30565 = state_30537__$1;
(statearr_30547_30565[(2)] = inst_30525);

(statearr_30547_30565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (5))){
var inst_30517 = (state_30537[(7)]);
var inst_30519 = figwheel.client.file_reloading.blocking_load.call(null,inst_30517);
var state_30537__$1 = state_30537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30537__$1,(8),inst_30519);
} else {
if((state_val_30538 === (10))){
var inst_30521 = (state_30537[(10)]);
var inst_30527 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30521);
var state_30537__$1 = state_30537;
var statearr_30548_30566 = state_30537__$1;
(statearr_30548_30566[(2)] = inst_30527);

(statearr_30548_30566[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (8))){
var inst_30517 = (state_30537[(7)]);
var inst_30523 = (state_30537[(9)]);
var inst_30521 = (state_30537[(2)]);
var inst_30522 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30523__$1 = cljs.core.get.call(null,inst_30522,inst_30517);
var state_30537__$1 = (function (){var statearr_30549 = state_30537;
(statearr_30549[(9)] = inst_30523__$1);

(statearr_30549[(10)] = inst_30521);

return statearr_30549;
})();
if(cljs.core.truth_(inst_30523__$1)){
var statearr_30550_30567 = state_30537__$1;
(statearr_30550_30567[(1)] = (9));

} else {
var statearr_30551_30568 = state_30537__$1;
(statearr_30551_30568[(1)] = (10));

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
});})(c__20107__auto__))
;
return ((function (switch__19995__auto__,c__20107__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19996__auto__ = null;
var figwheel$client$file_reloading$state_machine__19996__auto____0 = (function (){
var statearr_30555 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30555[(0)] = figwheel$client$file_reloading$state_machine__19996__auto__);

(statearr_30555[(1)] = (1));

return statearr_30555;
});
var figwheel$client$file_reloading$state_machine__19996__auto____1 = (function (state_30537){
while(true){
var ret_value__19997__auto__ = (function (){try{while(true){
var result__19998__auto__ = switch__19995__auto__.call(null,state_30537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19998__auto__;
}
break;
}
}catch (e30556){if((e30556 instanceof Object)){
var ex__19999__auto__ = e30556;
var statearr_30557_30569 = state_30537;
(statearr_30557_30569[(5)] = ex__19999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30570 = state_30537;
state_30537 = G__30570;
continue;
} else {
return ret_value__19997__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19996__auto__ = function(state_30537){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19996__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19996__auto____1.call(this,state_30537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19996__auto____0;
figwheel$client$file_reloading$state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19996__auto____1;
return figwheel$client$file_reloading$state_machine__19996__auto__;
})()
;})(switch__19995__auto__,c__20107__auto__))
})();
var state__20109__auto__ = (function (){var statearr_30558 = f__20108__auto__.call(null);
(statearr_30558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20107__auto__);

return statearr_30558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20109__auto__);
});})(c__20107__auto__))
);

return c__20107__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30571,callback){
var map__30574 = p__30571;
var map__30574__$1 = ((((!((map__30574 == null)))?((((map__30574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30574):map__30574);
var file_msg = map__30574__$1;
var namespace = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30574,map__30574__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30574,map__30574__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30576){
var map__30579 = p__30576;
var map__30579__$1 = ((((!((map__30579 == null)))?((((map__30579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30579):map__30579);
var file_msg = map__30579__$1;
var namespace = cljs.core.get.call(null,map__30579__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30581,callback){
var map__30584 = p__30581;
var map__30584__$1 = ((((!((map__30584 == null)))?((((map__30584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30584):map__30584);
var file_msg = map__30584__$1;
var request_url = cljs.core.get.call(null,map__30584__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30584__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20107__auto___30672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20107__auto___30672,out){
return (function (){
var f__20108__auto__ = (function (){var switch__19995__auto__ = ((function (c__20107__auto___30672,out){
return (function (state_30654){
var state_val_30655 = (state_30654[(1)]);
if((state_val_30655 === (1))){
var inst_30632 = cljs.core.nth.call(null,files,(0),null);
var inst_30633 = cljs.core.nthnext.call(null,files,(1));
var inst_30634 = files;
var state_30654__$1 = (function (){var statearr_30656 = state_30654;
(statearr_30656[(7)] = inst_30632);

(statearr_30656[(8)] = inst_30633);

(statearr_30656[(9)] = inst_30634);

return statearr_30656;
})();
var statearr_30657_30673 = state_30654__$1;
(statearr_30657_30673[(2)] = null);

(statearr_30657_30673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30655 === (2))){
var inst_30637 = (state_30654[(10)]);
var inst_30634 = (state_30654[(9)]);
var inst_30637__$1 = cljs.core.nth.call(null,inst_30634,(0),null);
var inst_30638 = cljs.core.nthnext.call(null,inst_30634,(1));
var inst_30639 = (inst_30637__$1 == null);
var inst_30640 = cljs.core.not.call(null,inst_30639);
var state_30654__$1 = (function (){var statearr_30658 = state_30654;
(statearr_30658[(10)] = inst_30637__$1);

(statearr_30658[(11)] = inst_30638);

return statearr_30658;
})();
if(inst_30640){
var statearr_30659_30674 = state_30654__$1;
(statearr_30659_30674[(1)] = (4));

} else {
var statearr_30660_30675 = state_30654__$1;
(statearr_30660_30675[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30655 === (3))){
var inst_30652 = (state_30654[(2)]);
var state_30654__$1 = state_30654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30654__$1,inst_30652);
} else {
if((state_val_30655 === (4))){
var inst_30637 = (state_30654[(10)]);
var inst_30642 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30637);
var state_30654__$1 = state_30654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30654__$1,(7),inst_30642);
} else {
if((state_val_30655 === (5))){
var inst_30648 = cljs.core.async.close_BANG_.call(null,out);
var state_30654__$1 = state_30654;
var statearr_30661_30676 = state_30654__$1;
(statearr_30661_30676[(2)] = inst_30648);

(statearr_30661_30676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30655 === (6))){
var inst_30650 = (state_30654[(2)]);
var state_30654__$1 = state_30654;
var statearr_30662_30677 = state_30654__$1;
(statearr_30662_30677[(2)] = inst_30650);

(statearr_30662_30677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30655 === (7))){
var inst_30638 = (state_30654[(11)]);
var inst_30644 = (state_30654[(2)]);
var inst_30645 = cljs.core.async.put_BANG_.call(null,out,inst_30644);
var inst_30634 = inst_30638;
var state_30654__$1 = (function (){var statearr_30663 = state_30654;
(statearr_30663[(12)] = inst_30645);

(statearr_30663[(9)] = inst_30634);

return statearr_30663;
})();
var statearr_30664_30678 = state_30654__$1;
(statearr_30664_30678[(2)] = null);

(statearr_30664_30678[(1)] = (2));


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
});})(c__20107__auto___30672,out))
;
return ((function (switch__19995__auto__,c__20107__auto___30672,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19996__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19996__auto____0 = (function (){
var statearr_30668 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30668[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19996__auto__);

(statearr_30668[(1)] = (1));

return statearr_30668;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19996__auto____1 = (function (state_30654){
while(true){
var ret_value__19997__auto__ = (function (){try{while(true){
var result__19998__auto__ = switch__19995__auto__.call(null,state_30654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19998__auto__;
}
break;
}
}catch (e30669){if((e30669 instanceof Object)){
var ex__19999__auto__ = e30669;
var statearr_30670_30679 = state_30654;
(statearr_30670_30679[(5)] = ex__19999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30680 = state_30654;
state_30654 = G__30680;
continue;
} else {
return ret_value__19997__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19996__auto__ = function(state_30654){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19996__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19996__auto____1.call(this,state_30654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19996__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19996__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19996__auto__;
})()
;})(switch__19995__auto__,c__20107__auto___30672,out))
})();
var state__20109__auto__ = (function (){var statearr_30671 = f__20108__auto__.call(null);
(statearr_30671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20107__auto___30672);

return statearr_30671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20109__auto__);
});})(c__20107__auto___30672,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30681,opts){
var map__30685 = p__30681;
var map__30685__$1 = ((((!((map__30685 == null)))?((((map__30685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30685):map__30685);
var eval_body__$1 = cljs.core.get.call(null,map__30685__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30685__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30687){var e = e30687;
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
return (function (p1__30688_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30688_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30693){
var vec__30694 = p__30693;
var k = cljs.core.nth.call(null,vec__30694,(0),null);
var v = cljs.core.nth.call(null,vec__30694,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30695){
var vec__30696 = p__30695;
var k = cljs.core.nth.call(null,vec__30696,(0),null);
var v = cljs.core.nth.call(null,vec__30696,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30700,p__30701){
var map__30948 = p__30700;
var map__30948__$1 = ((((!((map__30948 == null)))?((((map__30948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30948):map__30948);
var opts = map__30948__$1;
var before_jsload = cljs.core.get.call(null,map__30948__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30948__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30948__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30949 = p__30701;
var map__30949__$1 = ((((!((map__30949 == null)))?((((map__30949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30949):map__30949);
var msg = map__30949__$1;
var files = cljs.core.get.call(null,map__30949__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30949__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30949__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20108__auto__ = (function (){var switch__19995__auto__ = ((function (c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31102){
var state_val_31103 = (state_31102[(1)]);
if((state_val_31103 === (7))){
var inst_30966 = (state_31102[(7)]);
var inst_30963 = (state_31102[(8)]);
var inst_30964 = (state_31102[(9)]);
var inst_30965 = (state_31102[(10)]);
var inst_30971 = cljs.core._nth.call(null,inst_30964,inst_30966);
var inst_30972 = figwheel.client.file_reloading.eval_body.call(null,inst_30971,opts);
var inst_30973 = (inst_30966 + (1));
var tmp31104 = inst_30963;
var tmp31105 = inst_30964;
var tmp31106 = inst_30965;
var inst_30963__$1 = tmp31104;
var inst_30964__$1 = tmp31105;
var inst_30965__$1 = tmp31106;
var inst_30966__$1 = inst_30973;
var state_31102__$1 = (function (){var statearr_31107 = state_31102;
(statearr_31107[(7)] = inst_30966__$1);

(statearr_31107[(8)] = inst_30963__$1);

(statearr_31107[(9)] = inst_30964__$1);

(statearr_31107[(11)] = inst_30972);

(statearr_31107[(10)] = inst_30965__$1);

return statearr_31107;
})();
var statearr_31108_31194 = state_31102__$1;
(statearr_31108_31194[(2)] = null);

(statearr_31108_31194[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (20))){
var inst_31006 = (state_31102[(12)]);
var inst_31014 = figwheel.client.file_reloading.sort_files.call(null,inst_31006);
var state_31102__$1 = state_31102;
var statearr_31109_31195 = state_31102__$1;
(statearr_31109_31195[(2)] = inst_31014);

(statearr_31109_31195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (27))){
var state_31102__$1 = state_31102;
var statearr_31110_31196 = state_31102__$1;
(statearr_31110_31196[(2)] = null);

(statearr_31110_31196[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (1))){
var inst_30955 = (state_31102[(13)]);
var inst_30952 = before_jsload.call(null,files);
var inst_30953 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30954 = (function (){return ((function (inst_30955,inst_30952,inst_30953,state_val_31103,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30697_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30697_SHARP_);
});
;})(inst_30955,inst_30952,inst_30953,state_val_31103,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30955__$1 = cljs.core.filter.call(null,inst_30954,files);
var inst_30956 = cljs.core.not_empty.call(null,inst_30955__$1);
var state_31102__$1 = (function (){var statearr_31111 = state_31102;
(statearr_31111[(14)] = inst_30952);

(statearr_31111[(13)] = inst_30955__$1);

(statearr_31111[(15)] = inst_30953);

return statearr_31111;
})();
if(cljs.core.truth_(inst_30956)){
var statearr_31112_31197 = state_31102__$1;
(statearr_31112_31197[(1)] = (2));

} else {
var statearr_31113_31198 = state_31102__$1;
(statearr_31113_31198[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (24))){
var state_31102__$1 = state_31102;
var statearr_31114_31199 = state_31102__$1;
(statearr_31114_31199[(2)] = null);

(statearr_31114_31199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (39))){
var inst_31056 = (state_31102[(16)]);
var state_31102__$1 = state_31102;
var statearr_31115_31200 = state_31102__$1;
(statearr_31115_31200[(2)] = inst_31056);

(statearr_31115_31200[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (46))){
var inst_31097 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
var statearr_31116_31201 = state_31102__$1;
(statearr_31116_31201[(2)] = inst_31097);

(statearr_31116_31201[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (4))){
var inst_31000 = (state_31102[(2)]);
var inst_31001 = cljs.core.List.EMPTY;
var inst_31002 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31001);
var inst_31003 = (function (){return ((function (inst_31000,inst_31001,inst_31002,state_val_31103,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30698_SHARP_){
var and__16828__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30698_SHARP_);
if(cljs.core.truth_(and__16828__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30698_SHARP_));
} else {
return and__16828__auto__;
}
});
;})(inst_31000,inst_31001,inst_31002,state_val_31103,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31004 = cljs.core.filter.call(null,inst_31003,files);
var inst_31005 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31006 = cljs.core.concat.call(null,inst_31004,inst_31005);
var state_31102__$1 = (function (){var statearr_31117 = state_31102;
(statearr_31117[(17)] = inst_31002);

(statearr_31117[(18)] = inst_31000);

(statearr_31117[(12)] = inst_31006);

return statearr_31117;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31118_31202 = state_31102__$1;
(statearr_31118_31202[(1)] = (16));

} else {
var statearr_31119_31203 = state_31102__$1;
(statearr_31119_31203[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (15))){
var inst_30990 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
var statearr_31120_31204 = state_31102__$1;
(statearr_31120_31204[(2)] = inst_30990);

(statearr_31120_31204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (21))){
var inst_31016 = (state_31102[(19)]);
var inst_31016__$1 = (state_31102[(2)]);
var inst_31017 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31016__$1);
var state_31102__$1 = (function (){var statearr_31121 = state_31102;
(statearr_31121[(19)] = inst_31016__$1);

return statearr_31121;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31102__$1,(22),inst_31017);
} else {
if((state_val_31103 === (31))){
var inst_31100 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31102__$1,inst_31100);
} else {
if((state_val_31103 === (32))){
var inst_31056 = (state_31102[(16)]);
var inst_31061 = inst_31056.cljs$lang$protocol_mask$partition0$;
var inst_31062 = (inst_31061 & (64));
var inst_31063 = inst_31056.cljs$core$ISeq$;
var inst_31064 = (inst_31062) || (inst_31063);
var state_31102__$1 = state_31102;
if(cljs.core.truth_(inst_31064)){
var statearr_31122_31205 = state_31102__$1;
(statearr_31122_31205[(1)] = (35));

} else {
var statearr_31123_31206 = state_31102__$1;
(statearr_31123_31206[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (40))){
var inst_31077 = (state_31102[(20)]);
var inst_31076 = (state_31102[(2)]);
var inst_31077__$1 = cljs.core.get.call(null,inst_31076,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31078 = cljs.core.get.call(null,inst_31076,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31079 = cljs.core.not_empty.call(null,inst_31077__$1);
var state_31102__$1 = (function (){var statearr_31124 = state_31102;
(statearr_31124[(21)] = inst_31078);

(statearr_31124[(20)] = inst_31077__$1);

return statearr_31124;
})();
if(cljs.core.truth_(inst_31079)){
var statearr_31125_31207 = state_31102__$1;
(statearr_31125_31207[(1)] = (41));

} else {
var statearr_31126_31208 = state_31102__$1;
(statearr_31126_31208[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (33))){
var state_31102__$1 = state_31102;
var statearr_31127_31209 = state_31102__$1;
(statearr_31127_31209[(2)] = false);

(statearr_31127_31209[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (13))){
var inst_30976 = (state_31102[(22)]);
var inst_30980 = cljs.core.chunk_first.call(null,inst_30976);
var inst_30981 = cljs.core.chunk_rest.call(null,inst_30976);
var inst_30982 = cljs.core.count.call(null,inst_30980);
var inst_30963 = inst_30981;
var inst_30964 = inst_30980;
var inst_30965 = inst_30982;
var inst_30966 = (0);
var state_31102__$1 = (function (){var statearr_31128 = state_31102;
(statearr_31128[(7)] = inst_30966);

(statearr_31128[(8)] = inst_30963);

(statearr_31128[(9)] = inst_30964);

(statearr_31128[(10)] = inst_30965);

return statearr_31128;
})();
var statearr_31129_31210 = state_31102__$1;
(statearr_31129_31210[(2)] = null);

(statearr_31129_31210[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (22))){
var inst_31024 = (state_31102[(23)]);
var inst_31020 = (state_31102[(24)]);
var inst_31016 = (state_31102[(19)]);
var inst_31019 = (state_31102[(25)]);
var inst_31019__$1 = (state_31102[(2)]);
var inst_31020__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31019__$1);
var inst_31021 = (function (){var all_files = inst_31016;
var res_SINGLEQUOTE_ = inst_31019__$1;
var res = inst_31020__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31024,inst_31020,inst_31016,inst_31019,inst_31019__$1,inst_31020__$1,state_val_31103,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30699_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30699_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31024,inst_31020,inst_31016,inst_31019,inst_31019__$1,inst_31020__$1,state_val_31103,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31022 = cljs.core.filter.call(null,inst_31021,inst_31019__$1);
var inst_31023 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31024__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31023);
var inst_31025 = cljs.core.not_empty.call(null,inst_31024__$1);
var state_31102__$1 = (function (){var statearr_31130 = state_31102;
(statearr_31130[(23)] = inst_31024__$1);

(statearr_31130[(26)] = inst_31022);

(statearr_31130[(24)] = inst_31020__$1);

(statearr_31130[(25)] = inst_31019__$1);

return statearr_31130;
})();
if(cljs.core.truth_(inst_31025)){
var statearr_31131_31211 = state_31102__$1;
(statearr_31131_31211[(1)] = (23));

} else {
var statearr_31132_31212 = state_31102__$1;
(statearr_31132_31212[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (36))){
var state_31102__$1 = state_31102;
var statearr_31133_31213 = state_31102__$1;
(statearr_31133_31213[(2)] = false);

(statearr_31133_31213[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (41))){
var inst_31077 = (state_31102[(20)]);
var inst_31081 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31082 = cljs.core.map.call(null,inst_31081,inst_31077);
var inst_31083 = cljs.core.pr_str.call(null,inst_31082);
var inst_31084 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31083)].join('');
var inst_31085 = figwheel.client.utils.log.call(null,inst_31084);
var state_31102__$1 = state_31102;
var statearr_31134_31214 = state_31102__$1;
(statearr_31134_31214[(2)] = inst_31085);

(statearr_31134_31214[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (43))){
var inst_31078 = (state_31102[(21)]);
var inst_31088 = (state_31102[(2)]);
var inst_31089 = cljs.core.not_empty.call(null,inst_31078);
var state_31102__$1 = (function (){var statearr_31135 = state_31102;
(statearr_31135[(27)] = inst_31088);

return statearr_31135;
})();
if(cljs.core.truth_(inst_31089)){
var statearr_31136_31215 = state_31102__$1;
(statearr_31136_31215[(1)] = (44));

} else {
var statearr_31137_31216 = state_31102__$1;
(statearr_31137_31216[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (29))){
var inst_31024 = (state_31102[(23)]);
var inst_31056 = (state_31102[(16)]);
var inst_31022 = (state_31102[(26)]);
var inst_31020 = (state_31102[(24)]);
var inst_31016 = (state_31102[(19)]);
var inst_31019 = (state_31102[(25)]);
var inst_31052 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31055 = (function (){var all_files = inst_31016;
var res_SINGLEQUOTE_ = inst_31019;
var res = inst_31020;
var files_not_loaded = inst_31022;
var dependencies_that_loaded = inst_31024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31024,inst_31056,inst_31022,inst_31020,inst_31016,inst_31019,inst_31052,state_val_31103,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31054){
var map__31138 = p__31054;
var map__31138__$1 = ((((!((map__31138 == null)))?((((map__31138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31138):map__31138);
var namespace = cljs.core.get.call(null,map__31138__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31024,inst_31056,inst_31022,inst_31020,inst_31016,inst_31019,inst_31052,state_val_31103,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31056__$1 = cljs.core.group_by.call(null,inst_31055,inst_31022);
var inst_31058 = (inst_31056__$1 == null);
var inst_31059 = cljs.core.not.call(null,inst_31058);
var state_31102__$1 = (function (){var statearr_31140 = state_31102;
(statearr_31140[(28)] = inst_31052);

(statearr_31140[(16)] = inst_31056__$1);

return statearr_31140;
})();
if(inst_31059){
var statearr_31141_31217 = state_31102__$1;
(statearr_31141_31217[(1)] = (32));

} else {
var statearr_31142_31218 = state_31102__$1;
(statearr_31142_31218[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (44))){
var inst_31078 = (state_31102[(21)]);
var inst_31091 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31078);
var inst_31092 = cljs.core.pr_str.call(null,inst_31091);
var inst_31093 = [cljs.core.str("not required: "),cljs.core.str(inst_31092)].join('');
var inst_31094 = figwheel.client.utils.log.call(null,inst_31093);
var state_31102__$1 = state_31102;
var statearr_31143_31219 = state_31102__$1;
(statearr_31143_31219[(2)] = inst_31094);

(statearr_31143_31219[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (6))){
var inst_30997 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
var statearr_31144_31220 = state_31102__$1;
(statearr_31144_31220[(2)] = inst_30997);

(statearr_31144_31220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (28))){
var inst_31022 = (state_31102[(26)]);
var inst_31049 = (state_31102[(2)]);
var inst_31050 = cljs.core.not_empty.call(null,inst_31022);
var state_31102__$1 = (function (){var statearr_31145 = state_31102;
(statearr_31145[(29)] = inst_31049);

return statearr_31145;
})();
if(cljs.core.truth_(inst_31050)){
var statearr_31146_31221 = state_31102__$1;
(statearr_31146_31221[(1)] = (29));

} else {
var statearr_31147_31222 = state_31102__$1;
(statearr_31147_31222[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (25))){
var inst_31020 = (state_31102[(24)]);
var inst_31036 = (state_31102[(2)]);
var inst_31037 = cljs.core.not_empty.call(null,inst_31020);
var state_31102__$1 = (function (){var statearr_31148 = state_31102;
(statearr_31148[(30)] = inst_31036);

return statearr_31148;
})();
if(cljs.core.truth_(inst_31037)){
var statearr_31149_31223 = state_31102__$1;
(statearr_31149_31223[(1)] = (26));

} else {
var statearr_31150_31224 = state_31102__$1;
(statearr_31150_31224[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (34))){
var inst_31071 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
if(cljs.core.truth_(inst_31071)){
var statearr_31151_31225 = state_31102__$1;
(statearr_31151_31225[(1)] = (38));

} else {
var statearr_31152_31226 = state_31102__$1;
(statearr_31152_31226[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (17))){
var state_31102__$1 = state_31102;
var statearr_31153_31227 = state_31102__$1;
(statearr_31153_31227[(2)] = recompile_dependents);

(statearr_31153_31227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (3))){
var state_31102__$1 = state_31102;
var statearr_31154_31228 = state_31102__$1;
(statearr_31154_31228[(2)] = null);

(statearr_31154_31228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (12))){
var inst_30993 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
var statearr_31155_31229 = state_31102__$1;
(statearr_31155_31229[(2)] = inst_30993);

(statearr_31155_31229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (2))){
var inst_30955 = (state_31102[(13)]);
var inst_30962 = cljs.core.seq.call(null,inst_30955);
var inst_30963 = inst_30962;
var inst_30964 = null;
var inst_30965 = (0);
var inst_30966 = (0);
var state_31102__$1 = (function (){var statearr_31156 = state_31102;
(statearr_31156[(7)] = inst_30966);

(statearr_31156[(8)] = inst_30963);

(statearr_31156[(9)] = inst_30964);

(statearr_31156[(10)] = inst_30965);

return statearr_31156;
})();
var statearr_31157_31230 = state_31102__$1;
(statearr_31157_31230[(2)] = null);

(statearr_31157_31230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (23))){
var inst_31024 = (state_31102[(23)]);
var inst_31022 = (state_31102[(26)]);
var inst_31020 = (state_31102[(24)]);
var inst_31016 = (state_31102[(19)]);
var inst_31019 = (state_31102[(25)]);
var inst_31027 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31029 = (function (){var all_files = inst_31016;
var res_SINGLEQUOTE_ = inst_31019;
var res = inst_31020;
var files_not_loaded = inst_31022;
var dependencies_that_loaded = inst_31024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31024,inst_31022,inst_31020,inst_31016,inst_31019,inst_31027,state_val_31103,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31028){
var map__31158 = p__31028;
var map__31158__$1 = ((((!((map__31158 == null)))?((((map__31158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31158):map__31158);
var request_url = cljs.core.get.call(null,map__31158__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31024,inst_31022,inst_31020,inst_31016,inst_31019,inst_31027,state_val_31103,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31030 = cljs.core.reverse.call(null,inst_31024);
var inst_31031 = cljs.core.map.call(null,inst_31029,inst_31030);
var inst_31032 = cljs.core.pr_str.call(null,inst_31031);
var inst_31033 = figwheel.client.utils.log.call(null,inst_31032);
var state_31102__$1 = (function (){var statearr_31160 = state_31102;
(statearr_31160[(31)] = inst_31027);

return statearr_31160;
})();
var statearr_31161_31231 = state_31102__$1;
(statearr_31161_31231[(2)] = inst_31033);

(statearr_31161_31231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (35))){
var state_31102__$1 = state_31102;
var statearr_31162_31232 = state_31102__$1;
(statearr_31162_31232[(2)] = true);

(statearr_31162_31232[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (19))){
var inst_31006 = (state_31102[(12)]);
var inst_31012 = figwheel.client.file_reloading.expand_files.call(null,inst_31006);
var state_31102__$1 = state_31102;
var statearr_31163_31233 = state_31102__$1;
(statearr_31163_31233[(2)] = inst_31012);

(statearr_31163_31233[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (11))){
var state_31102__$1 = state_31102;
var statearr_31164_31234 = state_31102__$1;
(statearr_31164_31234[(2)] = null);

(statearr_31164_31234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (9))){
var inst_30995 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
var statearr_31165_31235 = state_31102__$1;
(statearr_31165_31235[(2)] = inst_30995);

(statearr_31165_31235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (5))){
var inst_30966 = (state_31102[(7)]);
var inst_30965 = (state_31102[(10)]);
var inst_30968 = (inst_30966 < inst_30965);
var inst_30969 = inst_30968;
var state_31102__$1 = state_31102;
if(cljs.core.truth_(inst_30969)){
var statearr_31166_31236 = state_31102__$1;
(statearr_31166_31236[(1)] = (7));

} else {
var statearr_31167_31237 = state_31102__$1;
(statearr_31167_31237[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (14))){
var inst_30976 = (state_31102[(22)]);
var inst_30985 = cljs.core.first.call(null,inst_30976);
var inst_30986 = figwheel.client.file_reloading.eval_body.call(null,inst_30985,opts);
var inst_30987 = cljs.core.next.call(null,inst_30976);
var inst_30963 = inst_30987;
var inst_30964 = null;
var inst_30965 = (0);
var inst_30966 = (0);
var state_31102__$1 = (function (){var statearr_31168 = state_31102;
(statearr_31168[(7)] = inst_30966);

(statearr_31168[(8)] = inst_30963);

(statearr_31168[(9)] = inst_30964);

(statearr_31168[(10)] = inst_30965);

(statearr_31168[(32)] = inst_30986);

return statearr_31168;
})();
var statearr_31169_31238 = state_31102__$1;
(statearr_31169_31238[(2)] = null);

(statearr_31169_31238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (45))){
var state_31102__$1 = state_31102;
var statearr_31170_31239 = state_31102__$1;
(statearr_31170_31239[(2)] = null);

(statearr_31170_31239[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (26))){
var inst_31024 = (state_31102[(23)]);
var inst_31022 = (state_31102[(26)]);
var inst_31020 = (state_31102[(24)]);
var inst_31016 = (state_31102[(19)]);
var inst_31019 = (state_31102[(25)]);
var inst_31039 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31041 = (function (){var all_files = inst_31016;
var res_SINGLEQUOTE_ = inst_31019;
var res = inst_31020;
var files_not_loaded = inst_31022;
var dependencies_that_loaded = inst_31024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31024,inst_31022,inst_31020,inst_31016,inst_31019,inst_31039,state_val_31103,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31040){
var map__31171 = p__31040;
var map__31171__$1 = ((((!((map__31171 == null)))?((((map__31171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31171):map__31171);
var namespace = cljs.core.get.call(null,map__31171__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31171__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31024,inst_31022,inst_31020,inst_31016,inst_31019,inst_31039,state_val_31103,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31042 = cljs.core.map.call(null,inst_31041,inst_31020);
var inst_31043 = cljs.core.pr_str.call(null,inst_31042);
var inst_31044 = figwheel.client.utils.log.call(null,inst_31043);
var inst_31045 = (function (){var all_files = inst_31016;
var res_SINGLEQUOTE_ = inst_31019;
var res = inst_31020;
var files_not_loaded = inst_31022;
var dependencies_that_loaded = inst_31024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31024,inst_31022,inst_31020,inst_31016,inst_31019,inst_31039,inst_31041,inst_31042,inst_31043,inst_31044,state_val_31103,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31024,inst_31022,inst_31020,inst_31016,inst_31019,inst_31039,inst_31041,inst_31042,inst_31043,inst_31044,state_val_31103,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31046 = setTimeout(inst_31045,(10));
var state_31102__$1 = (function (){var statearr_31173 = state_31102;
(statearr_31173[(33)] = inst_31044);

(statearr_31173[(34)] = inst_31039);

return statearr_31173;
})();
var statearr_31174_31240 = state_31102__$1;
(statearr_31174_31240[(2)] = inst_31046);

(statearr_31174_31240[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (16))){
var state_31102__$1 = state_31102;
var statearr_31175_31241 = state_31102__$1;
(statearr_31175_31241[(2)] = reload_dependents);

(statearr_31175_31241[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (38))){
var inst_31056 = (state_31102[(16)]);
var inst_31073 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31056);
var state_31102__$1 = state_31102;
var statearr_31176_31242 = state_31102__$1;
(statearr_31176_31242[(2)] = inst_31073);

(statearr_31176_31242[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (30))){
var state_31102__$1 = state_31102;
var statearr_31177_31243 = state_31102__$1;
(statearr_31177_31243[(2)] = null);

(statearr_31177_31243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (10))){
var inst_30976 = (state_31102[(22)]);
var inst_30978 = cljs.core.chunked_seq_QMARK_.call(null,inst_30976);
var state_31102__$1 = state_31102;
if(inst_30978){
var statearr_31178_31244 = state_31102__$1;
(statearr_31178_31244[(1)] = (13));

} else {
var statearr_31179_31245 = state_31102__$1;
(statearr_31179_31245[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (18))){
var inst_31010 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
if(cljs.core.truth_(inst_31010)){
var statearr_31180_31246 = state_31102__$1;
(statearr_31180_31246[(1)] = (19));

} else {
var statearr_31181_31247 = state_31102__$1;
(statearr_31181_31247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (42))){
var state_31102__$1 = state_31102;
var statearr_31182_31248 = state_31102__$1;
(statearr_31182_31248[(2)] = null);

(statearr_31182_31248[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (37))){
var inst_31068 = (state_31102[(2)]);
var state_31102__$1 = state_31102;
var statearr_31183_31249 = state_31102__$1;
(statearr_31183_31249[(2)] = inst_31068);

(statearr_31183_31249[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31103 === (8))){
var inst_30963 = (state_31102[(8)]);
var inst_30976 = (state_31102[(22)]);
var inst_30976__$1 = cljs.core.seq.call(null,inst_30963);
var state_31102__$1 = (function (){var statearr_31184 = state_31102;
(statearr_31184[(22)] = inst_30976__$1);

return statearr_31184;
})();
if(inst_30976__$1){
var statearr_31185_31250 = state_31102__$1;
(statearr_31185_31250[(1)] = (10));

} else {
var statearr_31186_31251 = state_31102__$1;
(statearr_31186_31251[(1)] = (11));

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
});})(c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19995__auto__,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19996__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19996__auto____0 = (function (){
var statearr_31190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31190[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19996__auto__);

(statearr_31190[(1)] = (1));

return statearr_31190;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19996__auto____1 = (function (state_31102){
while(true){
var ret_value__19997__auto__ = (function (){try{while(true){
var result__19998__auto__ = switch__19995__auto__.call(null,state_31102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19998__auto__;
}
break;
}
}catch (e31191){if((e31191 instanceof Object)){
var ex__19999__auto__ = e31191;
var statearr_31192_31252 = state_31102;
(statearr_31192_31252[(5)] = ex__19999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31253 = state_31102;
state_31102 = G__31253;
continue;
} else {
return ret_value__19997__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19996__auto__ = function(state_31102){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19996__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19996__auto____1.call(this,state_31102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19996__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19996__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19996__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19996__auto__;
})()
;})(switch__19995__auto__,c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20109__auto__ = (function (){var statearr_31193 = f__20108__auto__.call(null);
(statearr_31193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20107__auto__);

return statearr_31193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20109__auto__);
});})(c__20107__auto__,map__30948,map__30948__$1,opts,before_jsload,on_jsload,reload_dependents,map__30949,map__30949__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20107__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31256,link){
var map__31259 = p__31256;
var map__31259__$1 = ((((!((map__31259 == null)))?((((map__31259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31259):map__31259);
var file = cljs.core.get.call(null,map__31259__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__31259,map__31259__$1,file){
return (function (p1__31254_SHARP_,p2__31255_SHARP_){
if(cljs.core._EQ_.call(null,p1__31254_SHARP_,p2__31255_SHARP_)){
return p1__31254_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__31259,map__31259__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31265){
var map__31266 = p__31265;
var map__31266__$1 = ((((!((map__31266 == null)))?((((map__31266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31266):map__31266);
var match_length = cljs.core.get.call(null,map__31266__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31266__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31261_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31261_SHARP_);
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
var args31268 = [];
var len__17898__auto___31271 = arguments.length;
var i__17899__auto___31272 = (0);
while(true){
if((i__17899__auto___31272 < len__17898__auto___31271)){
args31268.push((arguments[i__17899__auto___31272]));

var G__31273 = (i__17899__auto___31272 + (1));
i__17899__auto___31272 = G__31273;
continue;
} else {
}
break;
}

var G__31270 = args31268.length;
switch (G__31270) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31268.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31275_SHARP_,p2__31276_SHARP_){
return cljs.core.assoc.call(null,p1__31275_SHARP_,cljs.core.get.call(null,p2__31276_SHARP_,key),p2__31276_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31277){
var map__31280 = p__31277;
var map__31280__$1 = ((((!((map__31280 == null)))?((((map__31280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31280):map__31280);
var f_data = map__31280__$1;
var file = cljs.core.get.call(null,map__31280__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31282,files_msg){
var map__31289 = p__31282;
var map__31289__$1 = ((((!((map__31289 == null)))?((((map__31289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31289):map__31289);
var opts = map__31289__$1;
var on_cssload = cljs.core.get.call(null,map__31289__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31291_31295 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31292_31296 = null;
var count__31293_31297 = (0);
var i__31294_31298 = (0);
while(true){
if((i__31294_31298 < count__31293_31297)){
var f_31299 = cljs.core._nth.call(null,chunk__31292_31296,i__31294_31298);
figwheel.client.file_reloading.reload_css_file.call(null,f_31299);

var G__31300 = seq__31291_31295;
var G__31301 = chunk__31292_31296;
var G__31302 = count__31293_31297;
var G__31303 = (i__31294_31298 + (1));
seq__31291_31295 = G__31300;
chunk__31292_31296 = G__31301;
count__31293_31297 = G__31302;
i__31294_31298 = G__31303;
continue;
} else {
var temp__4425__auto___31304 = cljs.core.seq.call(null,seq__31291_31295);
if(temp__4425__auto___31304){
var seq__31291_31305__$1 = temp__4425__auto___31304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31291_31305__$1)){
var c__17643__auto___31306 = cljs.core.chunk_first.call(null,seq__31291_31305__$1);
var G__31307 = cljs.core.chunk_rest.call(null,seq__31291_31305__$1);
var G__31308 = c__17643__auto___31306;
var G__31309 = cljs.core.count.call(null,c__17643__auto___31306);
var G__31310 = (0);
seq__31291_31295 = G__31307;
chunk__31292_31296 = G__31308;
count__31293_31297 = G__31309;
i__31294_31298 = G__31310;
continue;
} else {
var f_31311 = cljs.core.first.call(null,seq__31291_31305__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31311);

var G__31312 = cljs.core.next.call(null,seq__31291_31305__$1);
var G__31313 = null;
var G__31314 = (0);
var G__31315 = (0);
seq__31291_31295 = G__31312;
chunk__31292_31296 = G__31313;
count__31293_31297 = G__31314;
i__31294_31298 = G__31315;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31289,map__31289__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31289,map__31289__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map