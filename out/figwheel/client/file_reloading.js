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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24394_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24394_SHARP_));
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
var seq__24399 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24400 = null;
var count__24401 = (0);
var i__24402 = (0);
while(true){
if((i__24402 < count__24401)){
var n = cljs.core._nth.call(null,chunk__24400,i__24402);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24403 = seq__24399;
var G__24404 = chunk__24400;
var G__24405 = count__24401;
var G__24406 = (i__24402 + (1));
seq__24399 = G__24403;
chunk__24400 = G__24404;
count__24401 = G__24405;
i__24402 = G__24406;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24399);
if(temp__4425__auto__){
var seq__24399__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24399__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__24399__$1);
var G__24407 = cljs.core.chunk_rest.call(null,seq__24399__$1);
var G__24408 = c__17643__auto__;
var G__24409 = cljs.core.count.call(null,c__17643__auto__);
var G__24410 = (0);
seq__24399 = G__24407;
chunk__24400 = G__24408;
count__24401 = G__24409;
i__24402 = G__24410;
continue;
} else {
var n = cljs.core.first.call(null,seq__24399__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24411 = cljs.core.next.call(null,seq__24399__$1);
var G__24412 = null;
var G__24413 = (0);
var G__24414 = (0);
seq__24399 = G__24411;
chunk__24400 = G__24412;
count__24401 = G__24413;
i__24402 = G__24414;
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

var seq__24453_24460 = cljs.core.seq.call(null,deps);
var chunk__24454_24461 = null;
var count__24455_24462 = (0);
var i__24456_24463 = (0);
while(true){
if((i__24456_24463 < count__24455_24462)){
var dep_24464 = cljs.core._nth.call(null,chunk__24454_24461,i__24456_24463);
topo_sort_helper_STAR_.call(null,dep_24464,(depth + (1)),state);

var G__24465 = seq__24453_24460;
var G__24466 = chunk__24454_24461;
var G__24467 = count__24455_24462;
var G__24468 = (i__24456_24463 + (1));
seq__24453_24460 = G__24465;
chunk__24454_24461 = G__24466;
count__24455_24462 = G__24467;
i__24456_24463 = G__24468;
continue;
} else {
var temp__4425__auto___24469 = cljs.core.seq.call(null,seq__24453_24460);
if(temp__4425__auto___24469){
var seq__24453_24470__$1 = temp__4425__auto___24469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24453_24470__$1)){
var c__17643__auto___24471 = cljs.core.chunk_first.call(null,seq__24453_24470__$1);
var G__24472 = cljs.core.chunk_rest.call(null,seq__24453_24470__$1);
var G__24473 = c__17643__auto___24471;
var G__24474 = cljs.core.count.call(null,c__17643__auto___24471);
var G__24475 = (0);
seq__24453_24460 = G__24472;
chunk__24454_24461 = G__24473;
count__24455_24462 = G__24474;
i__24456_24463 = G__24475;
continue;
} else {
var dep_24476 = cljs.core.first.call(null,seq__24453_24470__$1);
topo_sort_helper_STAR_.call(null,dep_24476,(depth + (1)),state);

var G__24477 = cljs.core.next.call(null,seq__24453_24470__$1);
var G__24478 = null;
var G__24479 = (0);
var G__24480 = (0);
seq__24453_24460 = G__24477;
chunk__24454_24461 = G__24478;
count__24455_24462 = G__24479;
i__24456_24463 = G__24480;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24457){
var vec__24459 = p__24457;
var x = cljs.core.nth.call(null,vec__24459,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24459,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24459,x,xs,get_deps__$1){
return (function (p1__24415_SHARP_){
return clojure.set.difference.call(null,p1__24415_SHARP_,x);
});})(vec__24459,x,xs,get_deps__$1))
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
var seq__24493 = cljs.core.seq.call(null,provides);
var chunk__24494 = null;
var count__24495 = (0);
var i__24496 = (0);
while(true){
if((i__24496 < count__24495)){
var prov = cljs.core._nth.call(null,chunk__24494,i__24496);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24497_24505 = cljs.core.seq.call(null,requires);
var chunk__24498_24506 = null;
var count__24499_24507 = (0);
var i__24500_24508 = (0);
while(true){
if((i__24500_24508 < count__24499_24507)){
var req_24509 = cljs.core._nth.call(null,chunk__24498_24506,i__24500_24508);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24509,prov);

var G__24510 = seq__24497_24505;
var G__24511 = chunk__24498_24506;
var G__24512 = count__24499_24507;
var G__24513 = (i__24500_24508 + (1));
seq__24497_24505 = G__24510;
chunk__24498_24506 = G__24511;
count__24499_24507 = G__24512;
i__24500_24508 = G__24513;
continue;
} else {
var temp__4425__auto___24514 = cljs.core.seq.call(null,seq__24497_24505);
if(temp__4425__auto___24514){
var seq__24497_24515__$1 = temp__4425__auto___24514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24497_24515__$1)){
var c__17643__auto___24516 = cljs.core.chunk_first.call(null,seq__24497_24515__$1);
var G__24517 = cljs.core.chunk_rest.call(null,seq__24497_24515__$1);
var G__24518 = c__17643__auto___24516;
var G__24519 = cljs.core.count.call(null,c__17643__auto___24516);
var G__24520 = (0);
seq__24497_24505 = G__24517;
chunk__24498_24506 = G__24518;
count__24499_24507 = G__24519;
i__24500_24508 = G__24520;
continue;
} else {
var req_24521 = cljs.core.first.call(null,seq__24497_24515__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24521,prov);

var G__24522 = cljs.core.next.call(null,seq__24497_24515__$1);
var G__24523 = null;
var G__24524 = (0);
var G__24525 = (0);
seq__24497_24505 = G__24522;
chunk__24498_24506 = G__24523;
count__24499_24507 = G__24524;
i__24500_24508 = G__24525;
continue;
}
} else {
}
}
break;
}

var G__24526 = seq__24493;
var G__24527 = chunk__24494;
var G__24528 = count__24495;
var G__24529 = (i__24496 + (1));
seq__24493 = G__24526;
chunk__24494 = G__24527;
count__24495 = G__24528;
i__24496 = G__24529;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24493);
if(temp__4425__auto__){
var seq__24493__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24493__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__24493__$1);
var G__24530 = cljs.core.chunk_rest.call(null,seq__24493__$1);
var G__24531 = c__17643__auto__;
var G__24532 = cljs.core.count.call(null,c__17643__auto__);
var G__24533 = (0);
seq__24493 = G__24530;
chunk__24494 = G__24531;
count__24495 = G__24532;
i__24496 = G__24533;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24493__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24501_24534 = cljs.core.seq.call(null,requires);
var chunk__24502_24535 = null;
var count__24503_24536 = (0);
var i__24504_24537 = (0);
while(true){
if((i__24504_24537 < count__24503_24536)){
var req_24538 = cljs.core._nth.call(null,chunk__24502_24535,i__24504_24537);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24538,prov);

var G__24539 = seq__24501_24534;
var G__24540 = chunk__24502_24535;
var G__24541 = count__24503_24536;
var G__24542 = (i__24504_24537 + (1));
seq__24501_24534 = G__24539;
chunk__24502_24535 = G__24540;
count__24503_24536 = G__24541;
i__24504_24537 = G__24542;
continue;
} else {
var temp__4425__auto___24543__$1 = cljs.core.seq.call(null,seq__24501_24534);
if(temp__4425__auto___24543__$1){
var seq__24501_24544__$1 = temp__4425__auto___24543__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24501_24544__$1)){
var c__17643__auto___24545 = cljs.core.chunk_first.call(null,seq__24501_24544__$1);
var G__24546 = cljs.core.chunk_rest.call(null,seq__24501_24544__$1);
var G__24547 = c__17643__auto___24545;
var G__24548 = cljs.core.count.call(null,c__17643__auto___24545);
var G__24549 = (0);
seq__24501_24534 = G__24546;
chunk__24502_24535 = G__24547;
count__24503_24536 = G__24548;
i__24504_24537 = G__24549;
continue;
} else {
var req_24550 = cljs.core.first.call(null,seq__24501_24544__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24550,prov);

var G__24551 = cljs.core.next.call(null,seq__24501_24544__$1);
var G__24552 = null;
var G__24553 = (0);
var G__24554 = (0);
seq__24501_24534 = G__24551;
chunk__24502_24535 = G__24552;
count__24503_24536 = G__24553;
i__24504_24537 = G__24554;
continue;
}
} else {
}
}
break;
}

var G__24555 = cljs.core.next.call(null,seq__24493__$1);
var G__24556 = null;
var G__24557 = (0);
var G__24558 = (0);
seq__24493 = G__24555;
chunk__24494 = G__24556;
count__24495 = G__24557;
i__24496 = G__24558;
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
var seq__24563_24567 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24564_24568 = null;
var count__24565_24569 = (0);
var i__24566_24570 = (0);
while(true){
if((i__24566_24570 < count__24565_24569)){
var ns_24571 = cljs.core._nth.call(null,chunk__24564_24568,i__24566_24570);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24571);

var G__24572 = seq__24563_24567;
var G__24573 = chunk__24564_24568;
var G__24574 = count__24565_24569;
var G__24575 = (i__24566_24570 + (1));
seq__24563_24567 = G__24572;
chunk__24564_24568 = G__24573;
count__24565_24569 = G__24574;
i__24566_24570 = G__24575;
continue;
} else {
var temp__4425__auto___24576 = cljs.core.seq.call(null,seq__24563_24567);
if(temp__4425__auto___24576){
var seq__24563_24577__$1 = temp__4425__auto___24576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24563_24577__$1)){
var c__17643__auto___24578 = cljs.core.chunk_first.call(null,seq__24563_24577__$1);
var G__24579 = cljs.core.chunk_rest.call(null,seq__24563_24577__$1);
var G__24580 = c__17643__auto___24578;
var G__24581 = cljs.core.count.call(null,c__17643__auto___24578);
var G__24582 = (0);
seq__24563_24567 = G__24579;
chunk__24564_24568 = G__24580;
count__24565_24569 = G__24581;
i__24566_24570 = G__24582;
continue;
} else {
var ns_24583 = cljs.core.first.call(null,seq__24563_24577__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24583);

var G__24584 = cljs.core.next.call(null,seq__24563_24577__$1);
var G__24585 = null;
var G__24586 = (0);
var G__24587 = (0);
seq__24563_24567 = G__24584;
chunk__24564_24568 = G__24585;
count__24565_24569 = G__24586;
i__24566_24570 = G__24587;
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
var G__24588__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24589__i = 0, G__24589__a = new Array(arguments.length -  0);
while (G__24589__i < G__24589__a.length) {G__24589__a[G__24589__i] = arguments[G__24589__i + 0]; ++G__24589__i;}
  args = new cljs.core.IndexedSeq(G__24589__a,0);
} 
return G__24588__delegate.call(this,args);};
G__24588.cljs$lang$maxFixedArity = 0;
G__24588.cljs$lang$applyTo = (function (arglist__24590){
var args = cljs.core.seq(arglist__24590);
return G__24588__delegate(args);
});
G__24588.cljs$core$IFn$_invoke$arity$variadic = G__24588__delegate;
return G__24588;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24592 = cljs.core._EQ_;
var expr__24593 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24592.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24593))){
var path_parts = ((function (pred__24592,expr__24593){
return (function (p1__24591_SHARP_){
return clojure.string.split.call(null,p1__24591_SHARP_,/[\/\\]/);
});})(pred__24592,expr__24593))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24592,expr__24593){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24595){if((e24595 instanceof Error)){
var e = e24595;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24595;

}
}})());
});
;})(path_parts,sep,root,pred__24592,expr__24593))
} else {
if(cljs.core.truth_(pred__24592.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24593))){
return ((function (pred__24592,expr__24593){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24592,expr__24593){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24592,expr__24593))
);

return deferred.addErrback(((function (deferred,pred__24592,expr__24593){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24592,expr__24593))
);
});
;})(pred__24592,expr__24593))
} else {
return ((function (pred__24592,expr__24593){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24592,expr__24593))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24596,callback){
var map__24599 = p__24596;
var map__24599__$1 = ((((!((map__24599 == null)))?((((map__24599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24599):map__24599);
var file_msg = map__24599__$1;
var request_url = cljs.core.get.call(null,map__24599__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24599,map__24599__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24599,map__24599__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19123__auto__){
return (function (){
var f__19124__auto__ = (function (){var switch__19102__auto__ = ((function (c__19123__auto__){
return (function (state_24623){
var state_val_24624 = (state_24623[(1)]);
if((state_val_24624 === (7))){
var inst_24619 = (state_24623[(2)]);
var state_24623__$1 = state_24623;
var statearr_24625_24645 = state_24623__$1;
(statearr_24625_24645[(2)] = inst_24619);

(statearr_24625_24645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24624 === (1))){
var state_24623__$1 = state_24623;
var statearr_24626_24646 = state_24623__$1;
(statearr_24626_24646[(2)] = null);

(statearr_24626_24646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24624 === (4))){
var inst_24603 = (state_24623[(7)]);
var inst_24603__$1 = (state_24623[(2)]);
var state_24623__$1 = (function (){var statearr_24627 = state_24623;
(statearr_24627[(7)] = inst_24603__$1);

return statearr_24627;
})();
if(cljs.core.truth_(inst_24603__$1)){
var statearr_24628_24647 = state_24623__$1;
(statearr_24628_24647[(1)] = (5));

} else {
var statearr_24629_24648 = state_24623__$1;
(statearr_24629_24648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24624 === (6))){
var state_24623__$1 = state_24623;
var statearr_24630_24649 = state_24623__$1;
(statearr_24630_24649[(2)] = null);

(statearr_24630_24649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24624 === (3))){
var inst_24621 = (state_24623[(2)]);
var state_24623__$1 = state_24623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24623__$1,inst_24621);
} else {
if((state_val_24624 === (2))){
var state_24623__$1 = state_24623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24623__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24624 === (11))){
var inst_24615 = (state_24623[(2)]);
var state_24623__$1 = (function (){var statearr_24631 = state_24623;
(statearr_24631[(8)] = inst_24615);

return statearr_24631;
})();
var statearr_24632_24650 = state_24623__$1;
(statearr_24632_24650[(2)] = null);

(statearr_24632_24650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24624 === (9))){
var inst_24609 = (state_24623[(9)]);
var inst_24607 = (state_24623[(10)]);
var inst_24611 = inst_24609.call(null,inst_24607);
var state_24623__$1 = state_24623;
var statearr_24633_24651 = state_24623__$1;
(statearr_24633_24651[(2)] = inst_24611);

(statearr_24633_24651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24624 === (5))){
var inst_24603 = (state_24623[(7)]);
var inst_24605 = figwheel.client.file_reloading.blocking_load.call(null,inst_24603);
var state_24623__$1 = state_24623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24623__$1,(8),inst_24605);
} else {
if((state_val_24624 === (10))){
var inst_24607 = (state_24623[(10)]);
var inst_24613 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24607);
var state_24623__$1 = state_24623;
var statearr_24634_24652 = state_24623__$1;
(statearr_24634_24652[(2)] = inst_24613);

(statearr_24634_24652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24624 === (8))){
var inst_24609 = (state_24623[(9)]);
var inst_24603 = (state_24623[(7)]);
var inst_24607 = (state_24623[(2)]);
var inst_24608 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24609__$1 = cljs.core.get.call(null,inst_24608,inst_24603);
var state_24623__$1 = (function (){var statearr_24635 = state_24623;
(statearr_24635[(9)] = inst_24609__$1);

(statearr_24635[(10)] = inst_24607);

return statearr_24635;
})();
if(cljs.core.truth_(inst_24609__$1)){
var statearr_24636_24653 = state_24623__$1;
(statearr_24636_24653[(1)] = (9));

} else {
var statearr_24637_24654 = state_24623__$1;
(statearr_24637_24654[(1)] = (10));

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
});})(c__19123__auto__))
;
return ((function (switch__19102__auto__,c__19123__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19103__auto__ = null;
var figwheel$client$file_reloading$state_machine__19103__auto____0 = (function (){
var statearr_24641 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24641[(0)] = figwheel$client$file_reloading$state_machine__19103__auto__);

(statearr_24641[(1)] = (1));

return statearr_24641;
});
var figwheel$client$file_reloading$state_machine__19103__auto____1 = (function (state_24623){
while(true){
var ret_value__19104__auto__ = (function (){try{while(true){
var result__19105__auto__ = switch__19102__auto__.call(null,state_24623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19105__auto__;
}
break;
}
}catch (e24642){if((e24642 instanceof Object)){
var ex__19106__auto__ = e24642;
var statearr_24643_24655 = state_24623;
(statearr_24643_24655[(5)] = ex__19106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24656 = state_24623;
state_24623 = G__24656;
continue;
} else {
return ret_value__19104__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19103__auto__ = function(state_24623){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19103__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19103__auto____1.call(this,state_24623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19103__auto____0;
figwheel$client$file_reloading$state_machine__19103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19103__auto____1;
return figwheel$client$file_reloading$state_machine__19103__auto__;
})()
;})(switch__19102__auto__,c__19123__auto__))
})();
var state__19125__auto__ = (function (){var statearr_24644 = f__19124__auto__.call(null);
(statearr_24644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19123__auto__);

return statearr_24644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19125__auto__);
});})(c__19123__auto__))
);

return c__19123__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24657,callback){
var map__24660 = p__24657;
var map__24660__$1 = ((((!((map__24660 == null)))?((((map__24660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24660):map__24660);
var file_msg = map__24660__$1;
var namespace = cljs.core.get.call(null,map__24660__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24660,map__24660__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24660,map__24660__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24662){
var map__24665 = p__24662;
var map__24665__$1 = ((((!((map__24665 == null)))?((((map__24665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24665):map__24665);
var file_msg = map__24665__$1;
var namespace = cljs.core.get.call(null,map__24665__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24667,callback){
var map__24670 = p__24667;
var map__24670__$1 = ((((!((map__24670 == null)))?((((map__24670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24670):map__24670);
var file_msg = map__24670__$1;
var request_url = cljs.core.get.call(null,map__24670__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24670__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19123__auto___24758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19123__auto___24758,out){
return (function (){
var f__19124__auto__ = (function (){var switch__19102__auto__ = ((function (c__19123__auto___24758,out){
return (function (state_24740){
var state_val_24741 = (state_24740[(1)]);
if((state_val_24741 === (1))){
var inst_24718 = cljs.core.nth.call(null,files,(0),null);
var inst_24719 = cljs.core.nthnext.call(null,files,(1));
var inst_24720 = files;
var state_24740__$1 = (function (){var statearr_24742 = state_24740;
(statearr_24742[(7)] = inst_24720);

(statearr_24742[(8)] = inst_24718);

(statearr_24742[(9)] = inst_24719);

return statearr_24742;
})();
var statearr_24743_24759 = state_24740__$1;
(statearr_24743_24759[(2)] = null);

(statearr_24743_24759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (2))){
var inst_24720 = (state_24740[(7)]);
var inst_24723 = (state_24740[(10)]);
var inst_24723__$1 = cljs.core.nth.call(null,inst_24720,(0),null);
var inst_24724 = cljs.core.nthnext.call(null,inst_24720,(1));
var inst_24725 = (inst_24723__$1 == null);
var inst_24726 = cljs.core.not.call(null,inst_24725);
var state_24740__$1 = (function (){var statearr_24744 = state_24740;
(statearr_24744[(11)] = inst_24724);

(statearr_24744[(10)] = inst_24723__$1);

return statearr_24744;
})();
if(inst_24726){
var statearr_24745_24760 = state_24740__$1;
(statearr_24745_24760[(1)] = (4));

} else {
var statearr_24746_24761 = state_24740__$1;
(statearr_24746_24761[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (3))){
var inst_24738 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24740__$1,inst_24738);
} else {
if((state_val_24741 === (4))){
var inst_24723 = (state_24740[(10)]);
var inst_24728 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24723);
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24740__$1,(7),inst_24728);
} else {
if((state_val_24741 === (5))){
var inst_24734 = cljs.core.async.close_BANG_.call(null,out);
var state_24740__$1 = state_24740;
var statearr_24747_24762 = state_24740__$1;
(statearr_24747_24762[(2)] = inst_24734);

(statearr_24747_24762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (6))){
var inst_24736 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24748_24763 = state_24740__$1;
(statearr_24748_24763[(2)] = inst_24736);

(statearr_24748_24763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (7))){
var inst_24724 = (state_24740[(11)]);
var inst_24730 = (state_24740[(2)]);
var inst_24731 = cljs.core.async.put_BANG_.call(null,out,inst_24730);
var inst_24720 = inst_24724;
var state_24740__$1 = (function (){var statearr_24749 = state_24740;
(statearr_24749[(7)] = inst_24720);

(statearr_24749[(12)] = inst_24731);

return statearr_24749;
})();
var statearr_24750_24764 = state_24740__$1;
(statearr_24750_24764[(2)] = null);

(statearr_24750_24764[(1)] = (2));


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
});})(c__19123__auto___24758,out))
;
return ((function (switch__19102__auto__,c__19123__auto___24758,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19103__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19103__auto____0 = (function (){
var statearr_24754 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24754[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19103__auto__);

(statearr_24754[(1)] = (1));

return statearr_24754;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19103__auto____1 = (function (state_24740){
while(true){
var ret_value__19104__auto__ = (function (){try{while(true){
var result__19105__auto__ = switch__19102__auto__.call(null,state_24740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19105__auto__;
}
break;
}
}catch (e24755){if((e24755 instanceof Object)){
var ex__19106__auto__ = e24755;
var statearr_24756_24765 = state_24740;
(statearr_24756_24765[(5)] = ex__19106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24766 = state_24740;
state_24740 = G__24766;
continue;
} else {
return ret_value__19104__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19103__auto__ = function(state_24740){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19103__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19103__auto____1.call(this,state_24740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19103__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19103__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19103__auto__;
})()
;})(switch__19102__auto__,c__19123__auto___24758,out))
})();
var state__19125__auto__ = (function (){var statearr_24757 = f__19124__auto__.call(null);
(statearr_24757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19123__auto___24758);

return statearr_24757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19125__auto__);
});})(c__19123__auto___24758,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24767,opts){
var map__24771 = p__24767;
var map__24771__$1 = ((((!((map__24771 == null)))?((((map__24771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24771):map__24771);
var eval_body__$1 = cljs.core.get.call(null,map__24771__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24771__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e24773){var e = e24773;
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
return (function (p1__24774_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24774_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__24779){
var vec__24780 = p__24779;
var k = cljs.core.nth.call(null,vec__24780,(0),null);
var v = cljs.core.nth.call(null,vec__24780,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24781){
var vec__24782 = p__24781;
var k = cljs.core.nth.call(null,vec__24782,(0),null);
var v = cljs.core.nth.call(null,vec__24782,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24786,p__24787){
var map__25034 = p__24786;
var map__25034__$1 = ((((!((map__25034 == null)))?((((map__25034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25034):map__25034);
var opts = map__25034__$1;
var before_jsload = cljs.core.get.call(null,map__25034__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25034__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25034__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25035 = p__24787;
var map__25035__$1 = ((((!((map__25035 == null)))?((((map__25035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25035):map__25035);
var msg = map__25035__$1;
var files = cljs.core.get.call(null,map__25035__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25035__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25035__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19123__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19124__auto__ = (function (){var switch__19102__auto__ = ((function (c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25188){
var state_val_25189 = (state_25188[(1)]);
if((state_val_25189 === (7))){
var inst_25049 = (state_25188[(7)]);
var inst_25051 = (state_25188[(8)]);
var inst_25052 = (state_25188[(9)]);
var inst_25050 = (state_25188[(10)]);
var inst_25057 = cljs.core._nth.call(null,inst_25050,inst_25052);
var inst_25058 = figwheel.client.file_reloading.eval_body.call(null,inst_25057,opts);
var inst_25059 = (inst_25052 + (1));
var tmp25190 = inst_25049;
var tmp25191 = inst_25051;
var tmp25192 = inst_25050;
var inst_25049__$1 = tmp25190;
var inst_25050__$1 = tmp25192;
var inst_25051__$1 = tmp25191;
var inst_25052__$1 = inst_25059;
var state_25188__$1 = (function (){var statearr_25193 = state_25188;
(statearr_25193[(7)] = inst_25049__$1);

(statearr_25193[(8)] = inst_25051__$1);

(statearr_25193[(9)] = inst_25052__$1);

(statearr_25193[(10)] = inst_25050__$1);

(statearr_25193[(11)] = inst_25058);

return statearr_25193;
})();
var statearr_25194_25280 = state_25188__$1;
(statearr_25194_25280[(2)] = null);

(statearr_25194_25280[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (20))){
var inst_25092 = (state_25188[(12)]);
var inst_25100 = figwheel.client.file_reloading.sort_files.call(null,inst_25092);
var state_25188__$1 = state_25188;
var statearr_25195_25281 = state_25188__$1;
(statearr_25195_25281[(2)] = inst_25100);

(statearr_25195_25281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (27))){
var state_25188__$1 = state_25188;
var statearr_25196_25282 = state_25188__$1;
(statearr_25196_25282[(2)] = null);

(statearr_25196_25282[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (1))){
var inst_25041 = (state_25188[(13)]);
var inst_25038 = before_jsload.call(null,files);
var inst_25039 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25040 = (function (){return ((function (inst_25041,inst_25038,inst_25039,state_val_25189,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24783_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24783_SHARP_);
});
;})(inst_25041,inst_25038,inst_25039,state_val_25189,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25041__$1 = cljs.core.filter.call(null,inst_25040,files);
var inst_25042 = cljs.core.not_empty.call(null,inst_25041__$1);
var state_25188__$1 = (function (){var statearr_25197 = state_25188;
(statearr_25197[(13)] = inst_25041__$1);

(statearr_25197[(14)] = inst_25039);

(statearr_25197[(15)] = inst_25038);

return statearr_25197;
})();
if(cljs.core.truth_(inst_25042)){
var statearr_25198_25283 = state_25188__$1;
(statearr_25198_25283[(1)] = (2));

} else {
var statearr_25199_25284 = state_25188__$1;
(statearr_25199_25284[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (24))){
var state_25188__$1 = state_25188;
var statearr_25200_25285 = state_25188__$1;
(statearr_25200_25285[(2)] = null);

(statearr_25200_25285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (39))){
var inst_25142 = (state_25188[(16)]);
var state_25188__$1 = state_25188;
var statearr_25201_25286 = state_25188__$1;
(statearr_25201_25286[(2)] = inst_25142);

(statearr_25201_25286[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (46))){
var inst_25183 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
var statearr_25202_25287 = state_25188__$1;
(statearr_25202_25287[(2)] = inst_25183);

(statearr_25202_25287[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (4))){
var inst_25086 = (state_25188[(2)]);
var inst_25087 = cljs.core.List.EMPTY;
var inst_25088 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25087);
var inst_25089 = (function (){return ((function (inst_25086,inst_25087,inst_25088,state_val_25189,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24784_SHARP_){
var and__16828__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24784_SHARP_);
if(cljs.core.truth_(and__16828__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24784_SHARP_));
} else {
return and__16828__auto__;
}
});
;})(inst_25086,inst_25087,inst_25088,state_val_25189,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25090 = cljs.core.filter.call(null,inst_25089,files);
var inst_25091 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25092 = cljs.core.concat.call(null,inst_25090,inst_25091);
var state_25188__$1 = (function (){var statearr_25203 = state_25188;
(statearr_25203[(12)] = inst_25092);

(statearr_25203[(17)] = inst_25086);

(statearr_25203[(18)] = inst_25088);

return statearr_25203;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25204_25288 = state_25188__$1;
(statearr_25204_25288[(1)] = (16));

} else {
var statearr_25205_25289 = state_25188__$1;
(statearr_25205_25289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (15))){
var inst_25076 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
var statearr_25206_25290 = state_25188__$1;
(statearr_25206_25290[(2)] = inst_25076);

(statearr_25206_25290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (21))){
var inst_25102 = (state_25188[(19)]);
var inst_25102__$1 = (state_25188[(2)]);
var inst_25103 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25102__$1);
var state_25188__$1 = (function (){var statearr_25207 = state_25188;
(statearr_25207[(19)] = inst_25102__$1);

return statearr_25207;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25188__$1,(22),inst_25103);
} else {
if((state_val_25189 === (31))){
var inst_25186 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25188__$1,inst_25186);
} else {
if((state_val_25189 === (32))){
var inst_25142 = (state_25188[(16)]);
var inst_25147 = inst_25142.cljs$lang$protocol_mask$partition0$;
var inst_25148 = (inst_25147 & (64));
var inst_25149 = inst_25142.cljs$core$ISeq$;
var inst_25150 = (inst_25148) || (inst_25149);
var state_25188__$1 = state_25188;
if(cljs.core.truth_(inst_25150)){
var statearr_25208_25291 = state_25188__$1;
(statearr_25208_25291[(1)] = (35));

} else {
var statearr_25209_25292 = state_25188__$1;
(statearr_25209_25292[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (40))){
var inst_25163 = (state_25188[(20)]);
var inst_25162 = (state_25188[(2)]);
var inst_25163__$1 = cljs.core.get.call(null,inst_25162,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25164 = cljs.core.get.call(null,inst_25162,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25165 = cljs.core.not_empty.call(null,inst_25163__$1);
var state_25188__$1 = (function (){var statearr_25210 = state_25188;
(statearr_25210[(21)] = inst_25164);

(statearr_25210[(20)] = inst_25163__$1);

return statearr_25210;
})();
if(cljs.core.truth_(inst_25165)){
var statearr_25211_25293 = state_25188__$1;
(statearr_25211_25293[(1)] = (41));

} else {
var statearr_25212_25294 = state_25188__$1;
(statearr_25212_25294[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (33))){
var state_25188__$1 = state_25188;
var statearr_25213_25295 = state_25188__$1;
(statearr_25213_25295[(2)] = false);

(statearr_25213_25295[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (13))){
var inst_25062 = (state_25188[(22)]);
var inst_25066 = cljs.core.chunk_first.call(null,inst_25062);
var inst_25067 = cljs.core.chunk_rest.call(null,inst_25062);
var inst_25068 = cljs.core.count.call(null,inst_25066);
var inst_25049 = inst_25067;
var inst_25050 = inst_25066;
var inst_25051 = inst_25068;
var inst_25052 = (0);
var state_25188__$1 = (function (){var statearr_25214 = state_25188;
(statearr_25214[(7)] = inst_25049);

(statearr_25214[(8)] = inst_25051);

(statearr_25214[(9)] = inst_25052);

(statearr_25214[(10)] = inst_25050);

return statearr_25214;
})();
var statearr_25215_25296 = state_25188__$1;
(statearr_25215_25296[(2)] = null);

(statearr_25215_25296[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (22))){
var inst_25106 = (state_25188[(23)]);
var inst_25110 = (state_25188[(24)]);
var inst_25105 = (state_25188[(25)]);
var inst_25102 = (state_25188[(19)]);
var inst_25105__$1 = (state_25188[(2)]);
var inst_25106__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25105__$1);
var inst_25107 = (function (){var all_files = inst_25102;
var res_SINGLEQUOTE_ = inst_25105__$1;
var res = inst_25106__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25106,inst_25110,inst_25105,inst_25102,inst_25105__$1,inst_25106__$1,state_val_25189,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24785_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24785_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25106,inst_25110,inst_25105,inst_25102,inst_25105__$1,inst_25106__$1,state_val_25189,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25108 = cljs.core.filter.call(null,inst_25107,inst_25105__$1);
var inst_25109 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25110__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25109);
var inst_25111 = cljs.core.not_empty.call(null,inst_25110__$1);
var state_25188__$1 = (function (){var statearr_25216 = state_25188;
(statearr_25216[(23)] = inst_25106__$1);

(statearr_25216[(24)] = inst_25110__$1);

(statearr_25216[(26)] = inst_25108);

(statearr_25216[(25)] = inst_25105__$1);

return statearr_25216;
})();
if(cljs.core.truth_(inst_25111)){
var statearr_25217_25297 = state_25188__$1;
(statearr_25217_25297[(1)] = (23));

} else {
var statearr_25218_25298 = state_25188__$1;
(statearr_25218_25298[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (36))){
var state_25188__$1 = state_25188;
var statearr_25219_25299 = state_25188__$1;
(statearr_25219_25299[(2)] = false);

(statearr_25219_25299[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (41))){
var inst_25163 = (state_25188[(20)]);
var inst_25167 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25168 = cljs.core.map.call(null,inst_25167,inst_25163);
var inst_25169 = cljs.core.pr_str.call(null,inst_25168);
var inst_25170 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25169)].join('');
var inst_25171 = figwheel.client.utils.log.call(null,inst_25170);
var state_25188__$1 = state_25188;
var statearr_25220_25300 = state_25188__$1;
(statearr_25220_25300[(2)] = inst_25171);

(statearr_25220_25300[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (43))){
var inst_25164 = (state_25188[(21)]);
var inst_25174 = (state_25188[(2)]);
var inst_25175 = cljs.core.not_empty.call(null,inst_25164);
var state_25188__$1 = (function (){var statearr_25221 = state_25188;
(statearr_25221[(27)] = inst_25174);

return statearr_25221;
})();
if(cljs.core.truth_(inst_25175)){
var statearr_25222_25301 = state_25188__$1;
(statearr_25222_25301[(1)] = (44));

} else {
var statearr_25223_25302 = state_25188__$1;
(statearr_25223_25302[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (29))){
var inst_25106 = (state_25188[(23)]);
var inst_25110 = (state_25188[(24)]);
var inst_25108 = (state_25188[(26)]);
var inst_25142 = (state_25188[(16)]);
var inst_25105 = (state_25188[(25)]);
var inst_25102 = (state_25188[(19)]);
var inst_25138 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25141 = (function (){var all_files = inst_25102;
var res_SINGLEQUOTE_ = inst_25105;
var res = inst_25106;
var files_not_loaded = inst_25108;
var dependencies_that_loaded = inst_25110;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25106,inst_25110,inst_25108,inst_25142,inst_25105,inst_25102,inst_25138,state_val_25189,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25140){
var map__25224 = p__25140;
var map__25224__$1 = ((((!((map__25224 == null)))?((((map__25224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25224):map__25224);
var namespace = cljs.core.get.call(null,map__25224__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25106,inst_25110,inst_25108,inst_25142,inst_25105,inst_25102,inst_25138,state_val_25189,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25142__$1 = cljs.core.group_by.call(null,inst_25141,inst_25108);
var inst_25144 = (inst_25142__$1 == null);
var inst_25145 = cljs.core.not.call(null,inst_25144);
var state_25188__$1 = (function (){var statearr_25226 = state_25188;
(statearr_25226[(28)] = inst_25138);

(statearr_25226[(16)] = inst_25142__$1);

return statearr_25226;
})();
if(inst_25145){
var statearr_25227_25303 = state_25188__$1;
(statearr_25227_25303[(1)] = (32));

} else {
var statearr_25228_25304 = state_25188__$1;
(statearr_25228_25304[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (44))){
var inst_25164 = (state_25188[(21)]);
var inst_25177 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25164);
var inst_25178 = cljs.core.pr_str.call(null,inst_25177);
var inst_25179 = [cljs.core.str("not required: "),cljs.core.str(inst_25178)].join('');
var inst_25180 = figwheel.client.utils.log.call(null,inst_25179);
var state_25188__$1 = state_25188;
var statearr_25229_25305 = state_25188__$1;
(statearr_25229_25305[(2)] = inst_25180);

(statearr_25229_25305[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (6))){
var inst_25083 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
var statearr_25230_25306 = state_25188__$1;
(statearr_25230_25306[(2)] = inst_25083);

(statearr_25230_25306[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (28))){
var inst_25108 = (state_25188[(26)]);
var inst_25135 = (state_25188[(2)]);
var inst_25136 = cljs.core.not_empty.call(null,inst_25108);
var state_25188__$1 = (function (){var statearr_25231 = state_25188;
(statearr_25231[(29)] = inst_25135);

return statearr_25231;
})();
if(cljs.core.truth_(inst_25136)){
var statearr_25232_25307 = state_25188__$1;
(statearr_25232_25307[(1)] = (29));

} else {
var statearr_25233_25308 = state_25188__$1;
(statearr_25233_25308[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (25))){
var inst_25106 = (state_25188[(23)]);
var inst_25122 = (state_25188[(2)]);
var inst_25123 = cljs.core.not_empty.call(null,inst_25106);
var state_25188__$1 = (function (){var statearr_25234 = state_25188;
(statearr_25234[(30)] = inst_25122);

return statearr_25234;
})();
if(cljs.core.truth_(inst_25123)){
var statearr_25235_25309 = state_25188__$1;
(statearr_25235_25309[(1)] = (26));

} else {
var statearr_25236_25310 = state_25188__$1;
(statearr_25236_25310[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (34))){
var inst_25157 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
if(cljs.core.truth_(inst_25157)){
var statearr_25237_25311 = state_25188__$1;
(statearr_25237_25311[(1)] = (38));

} else {
var statearr_25238_25312 = state_25188__$1;
(statearr_25238_25312[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (17))){
var state_25188__$1 = state_25188;
var statearr_25239_25313 = state_25188__$1;
(statearr_25239_25313[(2)] = recompile_dependents);

(statearr_25239_25313[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (3))){
var state_25188__$1 = state_25188;
var statearr_25240_25314 = state_25188__$1;
(statearr_25240_25314[(2)] = null);

(statearr_25240_25314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (12))){
var inst_25079 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
var statearr_25241_25315 = state_25188__$1;
(statearr_25241_25315[(2)] = inst_25079);

(statearr_25241_25315[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (2))){
var inst_25041 = (state_25188[(13)]);
var inst_25048 = cljs.core.seq.call(null,inst_25041);
var inst_25049 = inst_25048;
var inst_25050 = null;
var inst_25051 = (0);
var inst_25052 = (0);
var state_25188__$1 = (function (){var statearr_25242 = state_25188;
(statearr_25242[(7)] = inst_25049);

(statearr_25242[(8)] = inst_25051);

(statearr_25242[(9)] = inst_25052);

(statearr_25242[(10)] = inst_25050);

return statearr_25242;
})();
var statearr_25243_25316 = state_25188__$1;
(statearr_25243_25316[(2)] = null);

(statearr_25243_25316[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (23))){
var inst_25106 = (state_25188[(23)]);
var inst_25110 = (state_25188[(24)]);
var inst_25108 = (state_25188[(26)]);
var inst_25105 = (state_25188[(25)]);
var inst_25102 = (state_25188[(19)]);
var inst_25113 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25115 = (function (){var all_files = inst_25102;
var res_SINGLEQUOTE_ = inst_25105;
var res = inst_25106;
var files_not_loaded = inst_25108;
var dependencies_that_loaded = inst_25110;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25106,inst_25110,inst_25108,inst_25105,inst_25102,inst_25113,state_val_25189,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25114){
var map__25244 = p__25114;
var map__25244__$1 = ((((!((map__25244 == null)))?((((map__25244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25244):map__25244);
var request_url = cljs.core.get.call(null,map__25244__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25106,inst_25110,inst_25108,inst_25105,inst_25102,inst_25113,state_val_25189,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25116 = cljs.core.reverse.call(null,inst_25110);
var inst_25117 = cljs.core.map.call(null,inst_25115,inst_25116);
var inst_25118 = cljs.core.pr_str.call(null,inst_25117);
var inst_25119 = figwheel.client.utils.log.call(null,inst_25118);
var state_25188__$1 = (function (){var statearr_25246 = state_25188;
(statearr_25246[(31)] = inst_25113);

return statearr_25246;
})();
var statearr_25247_25317 = state_25188__$1;
(statearr_25247_25317[(2)] = inst_25119);

(statearr_25247_25317[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (35))){
var state_25188__$1 = state_25188;
var statearr_25248_25318 = state_25188__$1;
(statearr_25248_25318[(2)] = true);

(statearr_25248_25318[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (19))){
var inst_25092 = (state_25188[(12)]);
var inst_25098 = figwheel.client.file_reloading.expand_files.call(null,inst_25092);
var state_25188__$1 = state_25188;
var statearr_25249_25319 = state_25188__$1;
(statearr_25249_25319[(2)] = inst_25098);

(statearr_25249_25319[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (11))){
var state_25188__$1 = state_25188;
var statearr_25250_25320 = state_25188__$1;
(statearr_25250_25320[(2)] = null);

(statearr_25250_25320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (9))){
var inst_25081 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
var statearr_25251_25321 = state_25188__$1;
(statearr_25251_25321[(2)] = inst_25081);

(statearr_25251_25321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (5))){
var inst_25051 = (state_25188[(8)]);
var inst_25052 = (state_25188[(9)]);
var inst_25054 = (inst_25052 < inst_25051);
var inst_25055 = inst_25054;
var state_25188__$1 = state_25188;
if(cljs.core.truth_(inst_25055)){
var statearr_25252_25322 = state_25188__$1;
(statearr_25252_25322[(1)] = (7));

} else {
var statearr_25253_25323 = state_25188__$1;
(statearr_25253_25323[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (14))){
var inst_25062 = (state_25188[(22)]);
var inst_25071 = cljs.core.first.call(null,inst_25062);
var inst_25072 = figwheel.client.file_reloading.eval_body.call(null,inst_25071,opts);
var inst_25073 = cljs.core.next.call(null,inst_25062);
var inst_25049 = inst_25073;
var inst_25050 = null;
var inst_25051 = (0);
var inst_25052 = (0);
var state_25188__$1 = (function (){var statearr_25254 = state_25188;
(statearr_25254[(7)] = inst_25049);

(statearr_25254[(8)] = inst_25051);

(statearr_25254[(32)] = inst_25072);

(statearr_25254[(9)] = inst_25052);

(statearr_25254[(10)] = inst_25050);

return statearr_25254;
})();
var statearr_25255_25324 = state_25188__$1;
(statearr_25255_25324[(2)] = null);

(statearr_25255_25324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (45))){
var state_25188__$1 = state_25188;
var statearr_25256_25325 = state_25188__$1;
(statearr_25256_25325[(2)] = null);

(statearr_25256_25325[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (26))){
var inst_25106 = (state_25188[(23)]);
var inst_25110 = (state_25188[(24)]);
var inst_25108 = (state_25188[(26)]);
var inst_25105 = (state_25188[(25)]);
var inst_25102 = (state_25188[(19)]);
var inst_25125 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25127 = (function (){var all_files = inst_25102;
var res_SINGLEQUOTE_ = inst_25105;
var res = inst_25106;
var files_not_loaded = inst_25108;
var dependencies_that_loaded = inst_25110;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25106,inst_25110,inst_25108,inst_25105,inst_25102,inst_25125,state_val_25189,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25126){
var map__25257 = p__25126;
var map__25257__$1 = ((((!((map__25257 == null)))?((((map__25257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25257):map__25257);
var namespace = cljs.core.get.call(null,map__25257__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25257__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25106,inst_25110,inst_25108,inst_25105,inst_25102,inst_25125,state_val_25189,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25128 = cljs.core.map.call(null,inst_25127,inst_25106);
var inst_25129 = cljs.core.pr_str.call(null,inst_25128);
var inst_25130 = figwheel.client.utils.log.call(null,inst_25129);
var inst_25131 = (function (){var all_files = inst_25102;
var res_SINGLEQUOTE_ = inst_25105;
var res = inst_25106;
var files_not_loaded = inst_25108;
var dependencies_that_loaded = inst_25110;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25106,inst_25110,inst_25108,inst_25105,inst_25102,inst_25125,inst_25127,inst_25128,inst_25129,inst_25130,state_val_25189,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25106,inst_25110,inst_25108,inst_25105,inst_25102,inst_25125,inst_25127,inst_25128,inst_25129,inst_25130,state_val_25189,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25132 = setTimeout(inst_25131,(10));
var state_25188__$1 = (function (){var statearr_25259 = state_25188;
(statearr_25259[(33)] = inst_25125);

(statearr_25259[(34)] = inst_25130);

return statearr_25259;
})();
var statearr_25260_25326 = state_25188__$1;
(statearr_25260_25326[(2)] = inst_25132);

(statearr_25260_25326[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (16))){
var state_25188__$1 = state_25188;
var statearr_25261_25327 = state_25188__$1;
(statearr_25261_25327[(2)] = reload_dependents);

(statearr_25261_25327[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (38))){
var inst_25142 = (state_25188[(16)]);
var inst_25159 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25142);
var state_25188__$1 = state_25188;
var statearr_25262_25328 = state_25188__$1;
(statearr_25262_25328[(2)] = inst_25159);

(statearr_25262_25328[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (30))){
var state_25188__$1 = state_25188;
var statearr_25263_25329 = state_25188__$1;
(statearr_25263_25329[(2)] = null);

(statearr_25263_25329[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (10))){
var inst_25062 = (state_25188[(22)]);
var inst_25064 = cljs.core.chunked_seq_QMARK_.call(null,inst_25062);
var state_25188__$1 = state_25188;
if(inst_25064){
var statearr_25264_25330 = state_25188__$1;
(statearr_25264_25330[(1)] = (13));

} else {
var statearr_25265_25331 = state_25188__$1;
(statearr_25265_25331[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (18))){
var inst_25096 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
if(cljs.core.truth_(inst_25096)){
var statearr_25266_25332 = state_25188__$1;
(statearr_25266_25332[(1)] = (19));

} else {
var statearr_25267_25333 = state_25188__$1;
(statearr_25267_25333[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (42))){
var state_25188__$1 = state_25188;
var statearr_25268_25334 = state_25188__$1;
(statearr_25268_25334[(2)] = null);

(statearr_25268_25334[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (37))){
var inst_25154 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
var statearr_25269_25335 = state_25188__$1;
(statearr_25269_25335[(2)] = inst_25154);

(statearr_25269_25335[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (8))){
var inst_25049 = (state_25188[(7)]);
var inst_25062 = (state_25188[(22)]);
var inst_25062__$1 = cljs.core.seq.call(null,inst_25049);
var state_25188__$1 = (function (){var statearr_25270 = state_25188;
(statearr_25270[(22)] = inst_25062__$1);

return statearr_25270;
})();
if(inst_25062__$1){
var statearr_25271_25336 = state_25188__$1;
(statearr_25271_25336[(1)] = (10));

} else {
var statearr_25272_25337 = state_25188__$1;
(statearr_25272_25337[(1)] = (11));

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
});})(c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19102__auto__,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19103__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19103__auto____0 = (function (){
var statearr_25276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25276[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19103__auto__);

(statearr_25276[(1)] = (1));

return statearr_25276;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19103__auto____1 = (function (state_25188){
while(true){
var ret_value__19104__auto__ = (function (){try{while(true){
var result__19105__auto__ = switch__19102__auto__.call(null,state_25188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19105__auto__;
}
break;
}
}catch (e25277){if((e25277 instanceof Object)){
var ex__19106__auto__ = e25277;
var statearr_25278_25338 = state_25188;
(statearr_25278_25338[(5)] = ex__19106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25339 = state_25188;
state_25188 = G__25339;
continue;
} else {
return ret_value__19104__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19103__auto__ = function(state_25188){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19103__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19103__auto____1.call(this,state_25188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19103__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19103__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19103__auto__;
})()
;})(switch__19102__auto__,c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19125__auto__ = (function (){var statearr_25279 = f__19124__auto__.call(null);
(statearr_25279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19123__auto__);

return statearr_25279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19125__auto__);
});})(c__19123__auto__,map__25034,map__25034__$1,opts,before_jsload,on_jsload,reload_dependents,map__25035,map__25035__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19123__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25342,link){
var map__25345 = p__25342;
var map__25345__$1 = ((((!((map__25345 == null)))?((((map__25345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25345):map__25345);
var file = cljs.core.get.call(null,map__25345__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25345,map__25345__$1,file){
return (function (p1__25340_SHARP_,p2__25341_SHARP_){
if(cljs.core._EQ_.call(null,p1__25340_SHARP_,p2__25341_SHARP_)){
return p1__25340_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25345,map__25345__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25351){
var map__25352 = p__25351;
var map__25352__$1 = ((((!((map__25352 == null)))?((((map__25352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25352):map__25352);
var match_length = cljs.core.get.call(null,map__25352__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25352__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25347_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25347_SHARP_);
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
var args25354 = [];
var len__17898__auto___25357 = arguments.length;
var i__17899__auto___25358 = (0);
while(true){
if((i__17899__auto___25358 < len__17898__auto___25357)){
args25354.push((arguments[i__17899__auto___25358]));

var G__25359 = (i__17899__auto___25358 + (1));
i__17899__auto___25358 = G__25359;
continue;
} else {
}
break;
}

var G__25356 = args25354.length;
switch (G__25356) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25354.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25361_SHARP_,p2__25362_SHARP_){
return cljs.core.assoc.call(null,p1__25361_SHARP_,cljs.core.get.call(null,p2__25362_SHARP_,key),p2__25362_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25363){
var map__25366 = p__25363;
var map__25366__$1 = ((((!((map__25366 == null)))?((((map__25366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25366):map__25366);
var f_data = map__25366__$1;
var file = cljs.core.get.call(null,map__25366__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25368,files_msg){
var map__25375 = p__25368;
var map__25375__$1 = ((((!((map__25375 == null)))?((((map__25375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25375):map__25375);
var opts = map__25375__$1;
var on_cssload = cljs.core.get.call(null,map__25375__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25377_25381 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25378_25382 = null;
var count__25379_25383 = (0);
var i__25380_25384 = (0);
while(true){
if((i__25380_25384 < count__25379_25383)){
var f_25385 = cljs.core._nth.call(null,chunk__25378_25382,i__25380_25384);
figwheel.client.file_reloading.reload_css_file.call(null,f_25385);

var G__25386 = seq__25377_25381;
var G__25387 = chunk__25378_25382;
var G__25388 = count__25379_25383;
var G__25389 = (i__25380_25384 + (1));
seq__25377_25381 = G__25386;
chunk__25378_25382 = G__25387;
count__25379_25383 = G__25388;
i__25380_25384 = G__25389;
continue;
} else {
var temp__4425__auto___25390 = cljs.core.seq.call(null,seq__25377_25381);
if(temp__4425__auto___25390){
var seq__25377_25391__$1 = temp__4425__auto___25390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25377_25391__$1)){
var c__17643__auto___25392 = cljs.core.chunk_first.call(null,seq__25377_25391__$1);
var G__25393 = cljs.core.chunk_rest.call(null,seq__25377_25391__$1);
var G__25394 = c__17643__auto___25392;
var G__25395 = cljs.core.count.call(null,c__17643__auto___25392);
var G__25396 = (0);
seq__25377_25381 = G__25393;
chunk__25378_25382 = G__25394;
count__25379_25383 = G__25395;
i__25380_25384 = G__25396;
continue;
} else {
var f_25397 = cljs.core.first.call(null,seq__25377_25391__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25397);

var G__25398 = cljs.core.next.call(null,seq__25377_25391__$1);
var G__25399 = null;
var G__25400 = (0);
var G__25401 = (0);
seq__25377_25381 = G__25398;
chunk__25378_25382 = G__25399;
count__25379_25383 = G__25400;
i__25380_25384 = G__25401;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25375,map__25375__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25375,map__25375__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map