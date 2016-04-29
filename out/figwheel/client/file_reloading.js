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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26685_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26685_SHARP_));
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
var seq__26690 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26691 = null;
var count__26692 = (0);
var i__26693 = (0);
while(true){
if((i__26693 < count__26692)){
var n = cljs.core._nth.call(null,chunk__26691,i__26693);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26694 = seq__26690;
var G__26695 = chunk__26691;
var G__26696 = count__26692;
var G__26697 = (i__26693 + (1));
seq__26690 = G__26694;
chunk__26691 = G__26695;
count__26692 = G__26696;
i__26693 = G__26697;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26690);
if(temp__4425__auto__){
var seq__26690__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26690__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__26690__$1);
var G__26698 = cljs.core.chunk_rest.call(null,seq__26690__$1);
var G__26699 = c__17643__auto__;
var G__26700 = cljs.core.count.call(null,c__17643__auto__);
var G__26701 = (0);
seq__26690 = G__26698;
chunk__26691 = G__26699;
count__26692 = G__26700;
i__26693 = G__26701;
continue;
} else {
var n = cljs.core.first.call(null,seq__26690__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26702 = cljs.core.next.call(null,seq__26690__$1);
var G__26703 = null;
var G__26704 = (0);
var G__26705 = (0);
seq__26690 = G__26702;
chunk__26691 = G__26703;
count__26692 = G__26704;
i__26693 = G__26705;
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

var seq__26744_26751 = cljs.core.seq.call(null,deps);
var chunk__26745_26752 = null;
var count__26746_26753 = (0);
var i__26747_26754 = (0);
while(true){
if((i__26747_26754 < count__26746_26753)){
var dep_26755 = cljs.core._nth.call(null,chunk__26745_26752,i__26747_26754);
topo_sort_helper_STAR_.call(null,dep_26755,(depth + (1)),state);

var G__26756 = seq__26744_26751;
var G__26757 = chunk__26745_26752;
var G__26758 = count__26746_26753;
var G__26759 = (i__26747_26754 + (1));
seq__26744_26751 = G__26756;
chunk__26745_26752 = G__26757;
count__26746_26753 = G__26758;
i__26747_26754 = G__26759;
continue;
} else {
var temp__4425__auto___26760 = cljs.core.seq.call(null,seq__26744_26751);
if(temp__4425__auto___26760){
var seq__26744_26761__$1 = temp__4425__auto___26760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26744_26761__$1)){
var c__17643__auto___26762 = cljs.core.chunk_first.call(null,seq__26744_26761__$1);
var G__26763 = cljs.core.chunk_rest.call(null,seq__26744_26761__$1);
var G__26764 = c__17643__auto___26762;
var G__26765 = cljs.core.count.call(null,c__17643__auto___26762);
var G__26766 = (0);
seq__26744_26751 = G__26763;
chunk__26745_26752 = G__26764;
count__26746_26753 = G__26765;
i__26747_26754 = G__26766;
continue;
} else {
var dep_26767 = cljs.core.first.call(null,seq__26744_26761__$1);
topo_sort_helper_STAR_.call(null,dep_26767,(depth + (1)),state);

var G__26768 = cljs.core.next.call(null,seq__26744_26761__$1);
var G__26769 = null;
var G__26770 = (0);
var G__26771 = (0);
seq__26744_26751 = G__26768;
chunk__26745_26752 = G__26769;
count__26746_26753 = G__26770;
i__26747_26754 = G__26771;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26748){
var vec__26750 = p__26748;
var x = cljs.core.nth.call(null,vec__26750,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26750,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26750,x,xs,get_deps__$1){
return (function (p1__26706_SHARP_){
return clojure.set.difference.call(null,p1__26706_SHARP_,x);
});})(vec__26750,x,xs,get_deps__$1))
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
var seq__26784 = cljs.core.seq.call(null,provides);
var chunk__26785 = null;
var count__26786 = (0);
var i__26787 = (0);
while(true){
if((i__26787 < count__26786)){
var prov = cljs.core._nth.call(null,chunk__26785,i__26787);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26788_26796 = cljs.core.seq.call(null,requires);
var chunk__26789_26797 = null;
var count__26790_26798 = (0);
var i__26791_26799 = (0);
while(true){
if((i__26791_26799 < count__26790_26798)){
var req_26800 = cljs.core._nth.call(null,chunk__26789_26797,i__26791_26799);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26800,prov);

var G__26801 = seq__26788_26796;
var G__26802 = chunk__26789_26797;
var G__26803 = count__26790_26798;
var G__26804 = (i__26791_26799 + (1));
seq__26788_26796 = G__26801;
chunk__26789_26797 = G__26802;
count__26790_26798 = G__26803;
i__26791_26799 = G__26804;
continue;
} else {
var temp__4425__auto___26805 = cljs.core.seq.call(null,seq__26788_26796);
if(temp__4425__auto___26805){
var seq__26788_26806__$1 = temp__4425__auto___26805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26788_26806__$1)){
var c__17643__auto___26807 = cljs.core.chunk_first.call(null,seq__26788_26806__$1);
var G__26808 = cljs.core.chunk_rest.call(null,seq__26788_26806__$1);
var G__26809 = c__17643__auto___26807;
var G__26810 = cljs.core.count.call(null,c__17643__auto___26807);
var G__26811 = (0);
seq__26788_26796 = G__26808;
chunk__26789_26797 = G__26809;
count__26790_26798 = G__26810;
i__26791_26799 = G__26811;
continue;
} else {
var req_26812 = cljs.core.first.call(null,seq__26788_26806__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26812,prov);

var G__26813 = cljs.core.next.call(null,seq__26788_26806__$1);
var G__26814 = null;
var G__26815 = (0);
var G__26816 = (0);
seq__26788_26796 = G__26813;
chunk__26789_26797 = G__26814;
count__26790_26798 = G__26815;
i__26791_26799 = G__26816;
continue;
}
} else {
}
}
break;
}

var G__26817 = seq__26784;
var G__26818 = chunk__26785;
var G__26819 = count__26786;
var G__26820 = (i__26787 + (1));
seq__26784 = G__26817;
chunk__26785 = G__26818;
count__26786 = G__26819;
i__26787 = G__26820;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26784);
if(temp__4425__auto__){
var seq__26784__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26784__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__26784__$1);
var G__26821 = cljs.core.chunk_rest.call(null,seq__26784__$1);
var G__26822 = c__17643__auto__;
var G__26823 = cljs.core.count.call(null,c__17643__auto__);
var G__26824 = (0);
seq__26784 = G__26821;
chunk__26785 = G__26822;
count__26786 = G__26823;
i__26787 = G__26824;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26784__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26792_26825 = cljs.core.seq.call(null,requires);
var chunk__26793_26826 = null;
var count__26794_26827 = (0);
var i__26795_26828 = (0);
while(true){
if((i__26795_26828 < count__26794_26827)){
var req_26829 = cljs.core._nth.call(null,chunk__26793_26826,i__26795_26828);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26829,prov);

var G__26830 = seq__26792_26825;
var G__26831 = chunk__26793_26826;
var G__26832 = count__26794_26827;
var G__26833 = (i__26795_26828 + (1));
seq__26792_26825 = G__26830;
chunk__26793_26826 = G__26831;
count__26794_26827 = G__26832;
i__26795_26828 = G__26833;
continue;
} else {
var temp__4425__auto___26834__$1 = cljs.core.seq.call(null,seq__26792_26825);
if(temp__4425__auto___26834__$1){
var seq__26792_26835__$1 = temp__4425__auto___26834__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26792_26835__$1)){
var c__17643__auto___26836 = cljs.core.chunk_first.call(null,seq__26792_26835__$1);
var G__26837 = cljs.core.chunk_rest.call(null,seq__26792_26835__$1);
var G__26838 = c__17643__auto___26836;
var G__26839 = cljs.core.count.call(null,c__17643__auto___26836);
var G__26840 = (0);
seq__26792_26825 = G__26837;
chunk__26793_26826 = G__26838;
count__26794_26827 = G__26839;
i__26795_26828 = G__26840;
continue;
} else {
var req_26841 = cljs.core.first.call(null,seq__26792_26835__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26841,prov);

var G__26842 = cljs.core.next.call(null,seq__26792_26835__$1);
var G__26843 = null;
var G__26844 = (0);
var G__26845 = (0);
seq__26792_26825 = G__26842;
chunk__26793_26826 = G__26843;
count__26794_26827 = G__26844;
i__26795_26828 = G__26845;
continue;
}
} else {
}
}
break;
}

var G__26846 = cljs.core.next.call(null,seq__26784__$1);
var G__26847 = null;
var G__26848 = (0);
var G__26849 = (0);
seq__26784 = G__26846;
chunk__26785 = G__26847;
count__26786 = G__26848;
i__26787 = G__26849;
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
var seq__26854_26858 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26855_26859 = null;
var count__26856_26860 = (0);
var i__26857_26861 = (0);
while(true){
if((i__26857_26861 < count__26856_26860)){
var ns_26862 = cljs.core._nth.call(null,chunk__26855_26859,i__26857_26861);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26862);

var G__26863 = seq__26854_26858;
var G__26864 = chunk__26855_26859;
var G__26865 = count__26856_26860;
var G__26866 = (i__26857_26861 + (1));
seq__26854_26858 = G__26863;
chunk__26855_26859 = G__26864;
count__26856_26860 = G__26865;
i__26857_26861 = G__26866;
continue;
} else {
var temp__4425__auto___26867 = cljs.core.seq.call(null,seq__26854_26858);
if(temp__4425__auto___26867){
var seq__26854_26868__$1 = temp__4425__auto___26867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26854_26868__$1)){
var c__17643__auto___26869 = cljs.core.chunk_first.call(null,seq__26854_26868__$1);
var G__26870 = cljs.core.chunk_rest.call(null,seq__26854_26868__$1);
var G__26871 = c__17643__auto___26869;
var G__26872 = cljs.core.count.call(null,c__17643__auto___26869);
var G__26873 = (0);
seq__26854_26858 = G__26870;
chunk__26855_26859 = G__26871;
count__26856_26860 = G__26872;
i__26857_26861 = G__26873;
continue;
} else {
var ns_26874 = cljs.core.first.call(null,seq__26854_26868__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26874);

var G__26875 = cljs.core.next.call(null,seq__26854_26868__$1);
var G__26876 = null;
var G__26877 = (0);
var G__26878 = (0);
seq__26854_26858 = G__26875;
chunk__26855_26859 = G__26876;
count__26856_26860 = G__26877;
i__26857_26861 = G__26878;
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
var G__26879__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26880__i = 0, G__26880__a = new Array(arguments.length -  0);
while (G__26880__i < G__26880__a.length) {G__26880__a[G__26880__i] = arguments[G__26880__i + 0]; ++G__26880__i;}
  args = new cljs.core.IndexedSeq(G__26880__a,0);
} 
return G__26879__delegate.call(this,args);};
G__26879.cljs$lang$maxFixedArity = 0;
G__26879.cljs$lang$applyTo = (function (arglist__26881){
var args = cljs.core.seq(arglist__26881);
return G__26879__delegate(args);
});
G__26879.cljs$core$IFn$_invoke$arity$variadic = G__26879__delegate;
return G__26879;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26883 = cljs.core._EQ_;
var expr__26884 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26883.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26884))){
var path_parts = ((function (pred__26883,expr__26884){
return (function (p1__26882_SHARP_){
return clojure.string.split.call(null,p1__26882_SHARP_,/[\/\\]/);
});})(pred__26883,expr__26884))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26883,expr__26884){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26886){if((e26886 instanceof Error)){
var e = e26886;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26886;

}
}})());
});
;})(path_parts,sep,root,pred__26883,expr__26884))
} else {
if(cljs.core.truth_(pred__26883.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26884))){
return ((function (pred__26883,expr__26884){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26883,expr__26884){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26883,expr__26884))
);

return deferred.addErrback(((function (deferred,pred__26883,expr__26884){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26883,expr__26884))
);
});
;})(pred__26883,expr__26884))
} else {
return ((function (pred__26883,expr__26884){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26883,expr__26884))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26887,callback){
var map__26890 = p__26887;
var map__26890__$1 = ((((!((map__26890 == null)))?((((map__26890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26890):map__26890);
var file_msg = map__26890__$1;
var request_url = cljs.core.get.call(null,map__26890__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26890,map__26890__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26890,map__26890__$1,file_msg,request_url))
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
return (function (state_26914){
var state_val_26915 = (state_26914[(1)]);
if((state_val_26915 === (7))){
var inst_26910 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26916_26936 = state_26914__$1;
(statearr_26916_26936[(2)] = inst_26910);

(statearr_26916_26936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (1))){
var state_26914__$1 = state_26914;
var statearr_26917_26937 = state_26914__$1;
(statearr_26917_26937[(2)] = null);

(statearr_26917_26937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (4))){
var inst_26894 = (state_26914[(7)]);
var inst_26894__$1 = (state_26914[(2)]);
var state_26914__$1 = (function (){var statearr_26918 = state_26914;
(statearr_26918[(7)] = inst_26894__$1);

return statearr_26918;
})();
if(cljs.core.truth_(inst_26894__$1)){
var statearr_26919_26938 = state_26914__$1;
(statearr_26919_26938[(1)] = (5));

} else {
var statearr_26920_26939 = state_26914__$1;
(statearr_26920_26939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (6))){
var state_26914__$1 = state_26914;
var statearr_26921_26940 = state_26914__$1;
(statearr_26921_26940[(2)] = null);

(statearr_26921_26940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (3))){
var inst_26912 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26914__$1,inst_26912);
} else {
if((state_val_26915 === (2))){
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26914__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26915 === (11))){
var inst_26906 = (state_26914[(2)]);
var state_26914__$1 = (function (){var statearr_26922 = state_26914;
(statearr_26922[(8)] = inst_26906);

return statearr_26922;
})();
var statearr_26923_26941 = state_26914__$1;
(statearr_26923_26941[(2)] = null);

(statearr_26923_26941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (9))){
var inst_26898 = (state_26914[(9)]);
var inst_26900 = (state_26914[(10)]);
var inst_26902 = inst_26900.call(null,inst_26898);
var state_26914__$1 = state_26914;
var statearr_26924_26942 = state_26914__$1;
(statearr_26924_26942[(2)] = inst_26902);

(statearr_26924_26942[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (5))){
var inst_26894 = (state_26914[(7)]);
var inst_26896 = figwheel.client.file_reloading.blocking_load.call(null,inst_26894);
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26914__$1,(8),inst_26896);
} else {
if((state_val_26915 === (10))){
var inst_26898 = (state_26914[(9)]);
var inst_26904 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26898);
var state_26914__$1 = state_26914;
var statearr_26925_26943 = state_26914__$1;
(statearr_26925_26943[(2)] = inst_26904);

(statearr_26925_26943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (8))){
var inst_26894 = (state_26914[(7)]);
var inst_26900 = (state_26914[(10)]);
var inst_26898 = (state_26914[(2)]);
var inst_26899 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26900__$1 = cljs.core.get.call(null,inst_26899,inst_26894);
var state_26914__$1 = (function (){var statearr_26926 = state_26914;
(statearr_26926[(9)] = inst_26898);

(statearr_26926[(10)] = inst_26900__$1);

return statearr_26926;
})();
if(cljs.core.truth_(inst_26900__$1)){
var statearr_26927_26944 = state_26914__$1;
(statearr_26927_26944[(1)] = (9));

} else {
var statearr_26928_26945 = state_26914__$1;
(statearr_26928_26945[(1)] = (10));

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
var statearr_26932 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26932[(0)] = figwheel$client$file_reloading$state_machine__18845__auto__);

(statearr_26932[(1)] = (1));

return statearr_26932;
});
var figwheel$client$file_reloading$state_machine__18845__auto____1 = (function (state_26914){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_26914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e26933){if((e26933 instanceof Object)){
var ex__18848__auto__ = e26933;
var statearr_26934_26946 = state_26914;
(statearr_26934_26946[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26947 = state_26914;
state_26914 = G__26947;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18845__auto__ = function(state_26914){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18845__auto____1.call(this,state_26914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18845__auto____0;
figwheel$client$file_reloading$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18845__auto____1;
return figwheel$client$file_reloading$state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__))
})();
var state__18867__auto__ = (function (){var statearr_26935 = f__18866__auto__.call(null);
(statearr_26935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_26935;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26948,callback){
var map__26951 = p__26948;
var map__26951__$1 = ((((!((map__26951 == null)))?((((map__26951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26951):map__26951);
var file_msg = map__26951__$1;
var namespace = cljs.core.get.call(null,map__26951__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26951,map__26951__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26951,map__26951__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26953){
var map__26956 = p__26953;
var map__26956__$1 = ((((!((map__26956 == null)))?((((map__26956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26956):map__26956);
var file_msg = map__26956__$1;
var namespace = cljs.core.get.call(null,map__26956__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26958,callback){
var map__26961 = p__26958;
var map__26961__$1 = ((((!((map__26961 == null)))?((((map__26961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26961):map__26961);
var file_msg = map__26961__$1;
var request_url = cljs.core.get.call(null,map__26961__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26961__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__18865__auto___27049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___27049,out){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___27049,out){
return (function (state_27031){
var state_val_27032 = (state_27031[(1)]);
if((state_val_27032 === (1))){
var inst_27009 = cljs.core.nth.call(null,files,(0),null);
var inst_27010 = cljs.core.nthnext.call(null,files,(1));
var inst_27011 = files;
var state_27031__$1 = (function (){var statearr_27033 = state_27031;
(statearr_27033[(7)] = inst_27010);

(statearr_27033[(8)] = inst_27011);

(statearr_27033[(9)] = inst_27009);

return statearr_27033;
})();
var statearr_27034_27050 = state_27031__$1;
(statearr_27034_27050[(2)] = null);

(statearr_27034_27050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27032 === (2))){
var inst_27011 = (state_27031[(8)]);
var inst_27014 = (state_27031[(10)]);
var inst_27014__$1 = cljs.core.nth.call(null,inst_27011,(0),null);
var inst_27015 = cljs.core.nthnext.call(null,inst_27011,(1));
var inst_27016 = (inst_27014__$1 == null);
var inst_27017 = cljs.core.not.call(null,inst_27016);
var state_27031__$1 = (function (){var statearr_27035 = state_27031;
(statearr_27035[(11)] = inst_27015);

(statearr_27035[(10)] = inst_27014__$1);

return statearr_27035;
})();
if(inst_27017){
var statearr_27036_27051 = state_27031__$1;
(statearr_27036_27051[(1)] = (4));

} else {
var statearr_27037_27052 = state_27031__$1;
(statearr_27037_27052[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27032 === (3))){
var inst_27029 = (state_27031[(2)]);
var state_27031__$1 = state_27031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27031__$1,inst_27029);
} else {
if((state_val_27032 === (4))){
var inst_27014 = (state_27031[(10)]);
var inst_27019 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27014);
var state_27031__$1 = state_27031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27031__$1,(7),inst_27019);
} else {
if((state_val_27032 === (5))){
var inst_27025 = cljs.core.async.close_BANG_.call(null,out);
var state_27031__$1 = state_27031;
var statearr_27038_27053 = state_27031__$1;
(statearr_27038_27053[(2)] = inst_27025);

(statearr_27038_27053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27032 === (6))){
var inst_27027 = (state_27031[(2)]);
var state_27031__$1 = state_27031;
var statearr_27039_27054 = state_27031__$1;
(statearr_27039_27054[(2)] = inst_27027);

(statearr_27039_27054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27032 === (7))){
var inst_27015 = (state_27031[(11)]);
var inst_27021 = (state_27031[(2)]);
var inst_27022 = cljs.core.async.put_BANG_.call(null,out,inst_27021);
var inst_27011 = inst_27015;
var state_27031__$1 = (function (){var statearr_27040 = state_27031;
(statearr_27040[(8)] = inst_27011);

(statearr_27040[(12)] = inst_27022);

return statearr_27040;
})();
var statearr_27041_27055 = state_27031__$1;
(statearr_27041_27055[(2)] = null);

(statearr_27041_27055[(1)] = (2));


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
});})(c__18865__auto___27049,out))
;
return ((function (switch__18844__auto__,c__18865__auto___27049,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____0 = (function (){
var statearr_27045 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27045[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__);

(statearr_27045[(1)] = (1));

return statearr_27045;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____1 = (function (state_27031){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_27031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e27046){if((e27046 instanceof Object)){
var ex__18848__auto__ = e27046;
var statearr_27047_27056 = state_27031;
(statearr_27047_27056[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27057 = state_27031;
state_27031 = G__27057;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__ = function(state_27031){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____1.call(this,state_27031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___27049,out))
})();
var state__18867__auto__ = (function (){var statearr_27048 = f__18866__auto__.call(null);
(statearr_27048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___27049);

return statearr_27048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___27049,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27058,opts){
var map__27062 = p__27058;
var map__27062__$1 = ((((!((map__27062 == null)))?((((map__27062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27062):map__27062);
var eval_body__$1 = cljs.core.get.call(null,map__27062__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27062__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27064){var e = e27064;
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
return (function (p1__27065_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27065_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27070){
var vec__27071 = p__27070;
var k = cljs.core.nth.call(null,vec__27071,(0),null);
var v = cljs.core.nth.call(null,vec__27071,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27072){
var vec__27073 = p__27072;
var k = cljs.core.nth.call(null,vec__27073,(0),null);
var v = cljs.core.nth.call(null,vec__27073,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27077,p__27078){
var map__27325 = p__27077;
var map__27325__$1 = ((((!((map__27325 == null)))?((((map__27325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27325):map__27325);
var opts = map__27325__$1;
var before_jsload = cljs.core.get.call(null,map__27325__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27325__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27325__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27326 = p__27078;
var map__27326__$1 = ((((!((map__27326 == null)))?((((map__27326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27326):map__27326);
var msg = map__27326__$1;
var files = cljs.core.get.call(null,map__27326__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27326__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27326__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18865__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27479){
var state_val_27480 = (state_27479[(1)]);
if((state_val_27480 === (7))){
var inst_27341 = (state_27479[(7)]);
var inst_27343 = (state_27479[(8)]);
var inst_27340 = (state_27479[(9)]);
var inst_27342 = (state_27479[(10)]);
var inst_27348 = cljs.core._nth.call(null,inst_27341,inst_27343);
var inst_27349 = figwheel.client.file_reloading.eval_body.call(null,inst_27348,opts);
var inst_27350 = (inst_27343 + (1));
var tmp27481 = inst_27341;
var tmp27482 = inst_27340;
var tmp27483 = inst_27342;
var inst_27340__$1 = tmp27482;
var inst_27341__$1 = tmp27481;
var inst_27342__$1 = tmp27483;
var inst_27343__$1 = inst_27350;
var state_27479__$1 = (function (){var statearr_27484 = state_27479;
(statearr_27484[(7)] = inst_27341__$1);

(statearr_27484[(8)] = inst_27343__$1);

(statearr_27484[(9)] = inst_27340__$1);

(statearr_27484[(10)] = inst_27342__$1);

(statearr_27484[(11)] = inst_27349);

return statearr_27484;
})();
var statearr_27485_27571 = state_27479__$1;
(statearr_27485_27571[(2)] = null);

(statearr_27485_27571[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (20))){
var inst_27383 = (state_27479[(12)]);
var inst_27391 = figwheel.client.file_reloading.sort_files.call(null,inst_27383);
var state_27479__$1 = state_27479;
var statearr_27486_27572 = state_27479__$1;
(statearr_27486_27572[(2)] = inst_27391);

(statearr_27486_27572[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (27))){
var state_27479__$1 = state_27479;
var statearr_27487_27573 = state_27479__$1;
(statearr_27487_27573[(2)] = null);

(statearr_27487_27573[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (1))){
var inst_27332 = (state_27479[(13)]);
var inst_27329 = before_jsload.call(null,files);
var inst_27330 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27331 = (function (){return ((function (inst_27332,inst_27329,inst_27330,state_val_27480,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27074_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27074_SHARP_);
});
;})(inst_27332,inst_27329,inst_27330,state_val_27480,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27332__$1 = cljs.core.filter.call(null,inst_27331,files);
var inst_27333 = cljs.core.not_empty.call(null,inst_27332__$1);
var state_27479__$1 = (function (){var statearr_27488 = state_27479;
(statearr_27488[(14)] = inst_27330);

(statearr_27488[(15)] = inst_27329);

(statearr_27488[(13)] = inst_27332__$1);

return statearr_27488;
})();
if(cljs.core.truth_(inst_27333)){
var statearr_27489_27574 = state_27479__$1;
(statearr_27489_27574[(1)] = (2));

} else {
var statearr_27490_27575 = state_27479__$1;
(statearr_27490_27575[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (24))){
var state_27479__$1 = state_27479;
var statearr_27491_27576 = state_27479__$1;
(statearr_27491_27576[(2)] = null);

(statearr_27491_27576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (39))){
var inst_27433 = (state_27479[(16)]);
var state_27479__$1 = state_27479;
var statearr_27492_27577 = state_27479__$1;
(statearr_27492_27577[(2)] = inst_27433);

(statearr_27492_27577[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (46))){
var inst_27474 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27493_27578 = state_27479__$1;
(statearr_27493_27578[(2)] = inst_27474);

(statearr_27493_27578[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (4))){
var inst_27377 = (state_27479[(2)]);
var inst_27378 = cljs.core.List.EMPTY;
var inst_27379 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27378);
var inst_27380 = (function (){return ((function (inst_27377,inst_27378,inst_27379,state_val_27480,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27075_SHARP_){
var and__16828__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27075_SHARP_);
if(cljs.core.truth_(and__16828__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27075_SHARP_));
} else {
return and__16828__auto__;
}
});
;})(inst_27377,inst_27378,inst_27379,state_val_27480,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27381 = cljs.core.filter.call(null,inst_27380,files);
var inst_27382 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27383 = cljs.core.concat.call(null,inst_27381,inst_27382);
var state_27479__$1 = (function (){var statearr_27494 = state_27479;
(statearr_27494[(12)] = inst_27383);

(statearr_27494[(17)] = inst_27379);

(statearr_27494[(18)] = inst_27377);

return statearr_27494;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27495_27579 = state_27479__$1;
(statearr_27495_27579[(1)] = (16));

} else {
var statearr_27496_27580 = state_27479__$1;
(statearr_27496_27580[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (15))){
var inst_27367 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27497_27581 = state_27479__$1;
(statearr_27497_27581[(2)] = inst_27367);

(statearr_27497_27581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (21))){
var inst_27393 = (state_27479[(19)]);
var inst_27393__$1 = (state_27479[(2)]);
var inst_27394 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27393__$1);
var state_27479__$1 = (function (){var statearr_27498 = state_27479;
(statearr_27498[(19)] = inst_27393__$1);

return statearr_27498;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27479__$1,(22),inst_27394);
} else {
if((state_val_27480 === (31))){
var inst_27477 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27479__$1,inst_27477);
} else {
if((state_val_27480 === (32))){
var inst_27433 = (state_27479[(16)]);
var inst_27438 = inst_27433.cljs$lang$protocol_mask$partition0$;
var inst_27439 = (inst_27438 & (64));
var inst_27440 = inst_27433.cljs$core$ISeq$;
var inst_27441 = (inst_27439) || (inst_27440);
var state_27479__$1 = state_27479;
if(cljs.core.truth_(inst_27441)){
var statearr_27499_27582 = state_27479__$1;
(statearr_27499_27582[(1)] = (35));

} else {
var statearr_27500_27583 = state_27479__$1;
(statearr_27500_27583[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (40))){
var inst_27454 = (state_27479[(20)]);
var inst_27453 = (state_27479[(2)]);
var inst_27454__$1 = cljs.core.get.call(null,inst_27453,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27455 = cljs.core.get.call(null,inst_27453,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27456 = cljs.core.not_empty.call(null,inst_27454__$1);
var state_27479__$1 = (function (){var statearr_27501 = state_27479;
(statearr_27501[(21)] = inst_27455);

(statearr_27501[(20)] = inst_27454__$1);

return statearr_27501;
})();
if(cljs.core.truth_(inst_27456)){
var statearr_27502_27584 = state_27479__$1;
(statearr_27502_27584[(1)] = (41));

} else {
var statearr_27503_27585 = state_27479__$1;
(statearr_27503_27585[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (33))){
var state_27479__$1 = state_27479;
var statearr_27504_27586 = state_27479__$1;
(statearr_27504_27586[(2)] = false);

(statearr_27504_27586[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (13))){
var inst_27353 = (state_27479[(22)]);
var inst_27357 = cljs.core.chunk_first.call(null,inst_27353);
var inst_27358 = cljs.core.chunk_rest.call(null,inst_27353);
var inst_27359 = cljs.core.count.call(null,inst_27357);
var inst_27340 = inst_27358;
var inst_27341 = inst_27357;
var inst_27342 = inst_27359;
var inst_27343 = (0);
var state_27479__$1 = (function (){var statearr_27505 = state_27479;
(statearr_27505[(7)] = inst_27341);

(statearr_27505[(8)] = inst_27343);

(statearr_27505[(9)] = inst_27340);

(statearr_27505[(10)] = inst_27342);

return statearr_27505;
})();
var statearr_27506_27587 = state_27479__$1;
(statearr_27506_27587[(2)] = null);

(statearr_27506_27587[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (22))){
var inst_27397 = (state_27479[(23)]);
var inst_27396 = (state_27479[(24)]);
var inst_27393 = (state_27479[(19)]);
var inst_27401 = (state_27479[(25)]);
var inst_27396__$1 = (state_27479[(2)]);
var inst_27397__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27396__$1);
var inst_27398 = (function (){var all_files = inst_27393;
var res_SINGLEQUOTE_ = inst_27396__$1;
var res = inst_27397__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27397,inst_27396,inst_27393,inst_27401,inst_27396__$1,inst_27397__$1,state_val_27480,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27076_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27076_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27397,inst_27396,inst_27393,inst_27401,inst_27396__$1,inst_27397__$1,state_val_27480,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27399 = cljs.core.filter.call(null,inst_27398,inst_27396__$1);
var inst_27400 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27401__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27400);
var inst_27402 = cljs.core.not_empty.call(null,inst_27401__$1);
var state_27479__$1 = (function (){var statearr_27507 = state_27479;
(statearr_27507[(23)] = inst_27397__$1);

(statearr_27507[(24)] = inst_27396__$1);

(statearr_27507[(26)] = inst_27399);

(statearr_27507[(25)] = inst_27401__$1);

return statearr_27507;
})();
if(cljs.core.truth_(inst_27402)){
var statearr_27508_27588 = state_27479__$1;
(statearr_27508_27588[(1)] = (23));

} else {
var statearr_27509_27589 = state_27479__$1;
(statearr_27509_27589[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (36))){
var state_27479__$1 = state_27479;
var statearr_27510_27590 = state_27479__$1;
(statearr_27510_27590[(2)] = false);

(statearr_27510_27590[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (41))){
var inst_27454 = (state_27479[(20)]);
var inst_27458 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27459 = cljs.core.map.call(null,inst_27458,inst_27454);
var inst_27460 = cljs.core.pr_str.call(null,inst_27459);
var inst_27461 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27460)].join('');
var inst_27462 = figwheel.client.utils.log.call(null,inst_27461);
var state_27479__$1 = state_27479;
var statearr_27511_27591 = state_27479__$1;
(statearr_27511_27591[(2)] = inst_27462);

(statearr_27511_27591[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (43))){
var inst_27455 = (state_27479[(21)]);
var inst_27465 = (state_27479[(2)]);
var inst_27466 = cljs.core.not_empty.call(null,inst_27455);
var state_27479__$1 = (function (){var statearr_27512 = state_27479;
(statearr_27512[(27)] = inst_27465);

return statearr_27512;
})();
if(cljs.core.truth_(inst_27466)){
var statearr_27513_27592 = state_27479__$1;
(statearr_27513_27592[(1)] = (44));

} else {
var statearr_27514_27593 = state_27479__$1;
(statearr_27514_27593[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (29))){
var inst_27397 = (state_27479[(23)]);
var inst_27396 = (state_27479[(24)]);
var inst_27433 = (state_27479[(16)]);
var inst_27393 = (state_27479[(19)]);
var inst_27399 = (state_27479[(26)]);
var inst_27401 = (state_27479[(25)]);
var inst_27429 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27432 = (function (){var all_files = inst_27393;
var res_SINGLEQUOTE_ = inst_27396;
var res = inst_27397;
var files_not_loaded = inst_27399;
var dependencies_that_loaded = inst_27401;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27397,inst_27396,inst_27433,inst_27393,inst_27399,inst_27401,inst_27429,state_val_27480,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27431){
var map__27515 = p__27431;
var map__27515__$1 = ((((!((map__27515 == null)))?((((map__27515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27515):map__27515);
var namespace = cljs.core.get.call(null,map__27515__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27397,inst_27396,inst_27433,inst_27393,inst_27399,inst_27401,inst_27429,state_val_27480,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27433__$1 = cljs.core.group_by.call(null,inst_27432,inst_27399);
var inst_27435 = (inst_27433__$1 == null);
var inst_27436 = cljs.core.not.call(null,inst_27435);
var state_27479__$1 = (function (){var statearr_27517 = state_27479;
(statearr_27517[(16)] = inst_27433__$1);

(statearr_27517[(28)] = inst_27429);

return statearr_27517;
})();
if(inst_27436){
var statearr_27518_27594 = state_27479__$1;
(statearr_27518_27594[(1)] = (32));

} else {
var statearr_27519_27595 = state_27479__$1;
(statearr_27519_27595[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (44))){
var inst_27455 = (state_27479[(21)]);
var inst_27468 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27455);
var inst_27469 = cljs.core.pr_str.call(null,inst_27468);
var inst_27470 = [cljs.core.str("not required: "),cljs.core.str(inst_27469)].join('');
var inst_27471 = figwheel.client.utils.log.call(null,inst_27470);
var state_27479__$1 = state_27479;
var statearr_27520_27596 = state_27479__$1;
(statearr_27520_27596[(2)] = inst_27471);

(statearr_27520_27596[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (6))){
var inst_27374 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27521_27597 = state_27479__$1;
(statearr_27521_27597[(2)] = inst_27374);

(statearr_27521_27597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (28))){
var inst_27399 = (state_27479[(26)]);
var inst_27426 = (state_27479[(2)]);
var inst_27427 = cljs.core.not_empty.call(null,inst_27399);
var state_27479__$1 = (function (){var statearr_27522 = state_27479;
(statearr_27522[(29)] = inst_27426);

return statearr_27522;
})();
if(cljs.core.truth_(inst_27427)){
var statearr_27523_27598 = state_27479__$1;
(statearr_27523_27598[(1)] = (29));

} else {
var statearr_27524_27599 = state_27479__$1;
(statearr_27524_27599[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (25))){
var inst_27397 = (state_27479[(23)]);
var inst_27413 = (state_27479[(2)]);
var inst_27414 = cljs.core.not_empty.call(null,inst_27397);
var state_27479__$1 = (function (){var statearr_27525 = state_27479;
(statearr_27525[(30)] = inst_27413);

return statearr_27525;
})();
if(cljs.core.truth_(inst_27414)){
var statearr_27526_27600 = state_27479__$1;
(statearr_27526_27600[(1)] = (26));

} else {
var statearr_27527_27601 = state_27479__$1;
(statearr_27527_27601[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (34))){
var inst_27448 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
if(cljs.core.truth_(inst_27448)){
var statearr_27528_27602 = state_27479__$1;
(statearr_27528_27602[(1)] = (38));

} else {
var statearr_27529_27603 = state_27479__$1;
(statearr_27529_27603[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (17))){
var state_27479__$1 = state_27479;
var statearr_27530_27604 = state_27479__$1;
(statearr_27530_27604[(2)] = recompile_dependents);

(statearr_27530_27604[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (3))){
var state_27479__$1 = state_27479;
var statearr_27531_27605 = state_27479__$1;
(statearr_27531_27605[(2)] = null);

(statearr_27531_27605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (12))){
var inst_27370 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27532_27606 = state_27479__$1;
(statearr_27532_27606[(2)] = inst_27370);

(statearr_27532_27606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (2))){
var inst_27332 = (state_27479[(13)]);
var inst_27339 = cljs.core.seq.call(null,inst_27332);
var inst_27340 = inst_27339;
var inst_27341 = null;
var inst_27342 = (0);
var inst_27343 = (0);
var state_27479__$1 = (function (){var statearr_27533 = state_27479;
(statearr_27533[(7)] = inst_27341);

(statearr_27533[(8)] = inst_27343);

(statearr_27533[(9)] = inst_27340);

(statearr_27533[(10)] = inst_27342);

return statearr_27533;
})();
var statearr_27534_27607 = state_27479__$1;
(statearr_27534_27607[(2)] = null);

(statearr_27534_27607[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (23))){
var inst_27397 = (state_27479[(23)]);
var inst_27396 = (state_27479[(24)]);
var inst_27393 = (state_27479[(19)]);
var inst_27399 = (state_27479[(26)]);
var inst_27401 = (state_27479[(25)]);
var inst_27404 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27406 = (function (){var all_files = inst_27393;
var res_SINGLEQUOTE_ = inst_27396;
var res = inst_27397;
var files_not_loaded = inst_27399;
var dependencies_that_loaded = inst_27401;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27397,inst_27396,inst_27393,inst_27399,inst_27401,inst_27404,state_val_27480,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27405){
var map__27535 = p__27405;
var map__27535__$1 = ((((!((map__27535 == null)))?((((map__27535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27535):map__27535);
var request_url = cljs.core.get.call(null,map__27535__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27397,inst_27396,inst_27393,inst_27399,inst_27401,inst_27404,state_val_27480,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27407 = cljs.core.reverse.call(null,inst_27401);
var inst_27408 = cljs.core.map.call(null,inst_27406,inst_27407);
var inst_27409 = cljs.core.pr_str.call(null,inst_27408);
var inst_27410 = figwheel.client.utils.log.call(null,inst_27409);
var state_27479__$1 = (function (){var statearr_27537 = state_27479;
(statearr_27537[(31)] = inst_27404);

return statearr_27537;
})();
var statearr_27538_27608 = state_27479__$1;
(statearr_27538_27608[(2)] = inst_27410);

(statearr_27538_27608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (35))){
var state_27479__$1 = state_27479;
var statearr_27539_27609 = state_27479__$1;
(statearr_27539_27609[(2)] = true);

(statearr_27539_27609[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (19))){
var inst_27383 = (state_27479[(12)]);
var inst_27389 = figwheel.client.file_reloading.expand_files.call(null,inst_27383);
var state_27479__$1 = state_27479;
var statearr_27540_27610 = state_27479__$1;
(statearr_27540_27610[(2)] = inst_27389);

(statearr_27540_27610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (11))){
var state_27479__$1 = state_27479;
var statearr_27541_27611 = state_27479__$1;
(statearr_27541_27611[(2)] = null);

(statearr_27541_27611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (9))){
var inst_27372 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27542_27612 = state_27479__$1;
(statearr_27542_27612[(2)] = inst_27372);

(statearr_27542_27612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (5))){
var inst_27343 = (state_27479[(8)]);
var inst_27342 = (state_27479[(10)]);
var inst_27345 = (inst_27343 < inst_27342);
var inst_27346 = inst_27345;
var state_27479__$1 = state_27479;
if(cljs.core.truth_(inst_27346)){
var statearr_27543_27613 = state_27479__$1;
(statearr_27543_27613[(1)] = (7));

} else {
var statearr_27544_27614 = state_27479__$1;
(statearr_27544_27614[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (14))){
var inst_27353 = (state_27479[(22)]);
var inst_27362 = cljs.core.first.call(null,inst_27353);
var inst_27363 = figwheel.client.file_reloading.eval_body.call(null,inst_27362,opts);
var inst_27364 = cljs.core.next.call(null,inst_27353);
var inst_27340 = inst_27364;
var inst_27341 = null;
var inst_27342 = (0);
var inst_27343 = (0);
var state_27479__$1 = (function (){var statearr_27545 = state_27479;
(statearr_27545[(7)] = inst_27341);

(statearr_27545[(32)] = inst_27363);

(statearr_27545[(8)] = inst_27343);

(statearr_27545[(9)] = inst_27340);

(statearr_27545[(10)] = inst_27342);

return statearr_27545;
})();
var statearr_27546_27615 = state_27479__$1;
(statearr_27546_27615[(2)] = null);

(statearr_27546_27615[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (45))){
var state_27479__$1 = state_27479;
var statearr_27547_27616 = state_27479__$1;
(statearr_27547_27616[(2)] = null);

(statearr_27547_27616[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (26))){
var inst_27397 = (state_27479[(23)]);
var inst_27396 = (state_27479[(24)]);
var inst_27393 = (state_27479[(19)]);
var inst_27399 = (state_27479[(26)]);
var inst_27401 = (state_27479[(25)]);
var inst_27416 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27418 = (function (){var all_files = inst_27393;
var res_SINGLEQUOTE_ = inst_27396;
var res = inst_27397;
var files_not_loaded = inst_27399;
var dependencies_that_loaded = inst_27401;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27397,inst_27396,inst_27393,inst_27399,inst_27401,inst_27416,state_val_27480,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27417){
var map__27548 = p__27417;
var map__27548__$1 = ((((!((map__27548 == null)))?((((map__27548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27548):map__27548);
var namespace = cljs.core.get.call(null,map__27548__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27548__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27397,inst_27396,inst_27393,inst_27399,inst_27401,inst_27416,state_val_27480,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27419 = cljs.core.map.call(null,inst_27418,inst_27397);
var inst_27420 = cljs.core.pr_str.call(null,inst_27419);
var inst_27421 = figwheel.client.utils.log.call(null,inst_27420);
var inst_27422 = (function (){var all_files = inst_27393;
var res_SINGLEQUOTE_ = inst_27396;
var res = inst_27397;
var files_not_loaded = inst_27399;
var dependencies_that_loaded = inst_27401;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27397,inst_27396,inst_27393,inst_27399,inst_27401,inst_27416,inst_27418,inst_27419,inst_27420,inst_27421,state_val_27480,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27397,inst_27396,inst_27393,inst_27399,inst_27401,inst_27416,inst_27418,inst_27419,inst_27420,inst_27421,state_val_27480,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27423 = setTimeout(inst_27422,(10));
var state_27479__$1 = (function (){var statearr_27550 = state_27479;
(statearr_27550[(33)] = inst_27416);

(statearr_27550[(34)] = inst_27421);

return statearr_27550;
})();
var statearr_27551_27617 = state_27479__$1;
(statearr_27551_27617[(2)] = inst_27423);

(statearr_27551_27617[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (16))){
var state_27479__$1 = state_27479;
var statearr_27552_27618 = state_27479__$1;
(statearr_27552_27618[(2)] = reload_dependents);

(statearr_27552_27618[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (38))){
var inst_27433 = (state_27479[(16)]);
var inst_27450 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27433);
var state_27479__$1 = state_27479;
var statearr_27553_27619 = state_27479__$1;
(statearr_27553_27619[(2)] = inst_27450);

(statearr_27553_27619[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (30))){
var state_27479__$1 = state_27479;
var statearr_27554_27620 = state_27479__$1;
(statearr_27554_27620[(2)] = null);

(statearr_27554_27620[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (10))){
var inst_27353 = (state_27479[(22)]);
var inst_27355 = cljs.core.chunked_seq_QMARK_.call(null,inst_27353);
var state_27479__$1 = state_27479;
if(inst_27355){
var statearr_27555_27621 = state_27479__$1;
(statearr_27555_27621[(1)] = (13));

} else {
var statearr_27556_27622 = state_27479__$1;
(statearr_27556_27622[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (18))){
var inst_27387 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
if(cljs.core.truth_(inst_27387)){
var statearr_27557_27623 = state_27479__$1;
(statearr_27557_27623[(1)] = (19));

} else {
var statearr_27558_27624 = state_27479__$1;
(statearr_27558_27624[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (42))){
var state_27479__$1 = state_27479;
var statearr_27559_27625 = state_27479__$1;
(statearr_27559_27625[(2)] = null);

(statearr_27559_27625[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (37))){
var inst_27445 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27560_27626 = state_27479__$1;
(statearr_27560_27626[(2)] = inst_27445);

(statearr_27560_27626[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (8))){
var inst_27353 = (state_27479[(22)]);
var inst_27340 = (state_27479[(9)]);
var inst_27353__$1 = cljs.core.seq.call(null,inst_27340);
var state_27479__$1 = (function (){var statearr_27561 = state_27479;
(statearr_27561[(22)] = inst_27353__$1);

return statearr_27561;
})();
if(inst_27353__$1){
var statearr_27562_27627 = state_27479__$1;
(statearr_27562_27627[(1)] = (10));

} else {
var statearr_27563_27628 = state_27479__$1;
(statearr_27563_27628[(1)] = (11));

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
});})(c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18844__auto__,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____0 = (function (){
var statearr_27567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27567[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__);

(statearr_27567[(1)] = (1));

return statearr_27567;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____1 = (function (state_27479){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_27479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e27568){if((e27568 instanceof Object)){
var ex__18848__auto__ = e27568;
var statearr_27569_27629 = state_27479;
(statearr_27569_27629[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27630 = state_27479;
state_27479 = G__27630;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__ = function(state_27479){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____1.call(this,state_27479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18867__auto__ = (function (){var statearr_27570 = f__18866__auto__.call(null);
(statearr_27570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_27570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto__,map__27325,map__27325__$1,opts,before_jsload,on_jsload,reload_dependents,map__27326,map__27326__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18865__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27633,link){
var map__27636 = p__27633;
var map__27636__$1 = ((((!((map__27636 == null)))?((((map__27636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27636):map__27636);
var file = cljs.core.get.call(null,map__27636__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27636,map__27636__$1,file){
return (function (p1__27631_SHARP_,p2__27632_SHARP_){
if(cljs.core._EQ_.call(null,p1__27631_SHARP_,p2__27632_SHARP_)){
return p1__27631_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27636,map__27636__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27642){
var map__27643 = p__27642;
var map__27643__$1 = ((((!((map__27643 == null)))?((((map__27643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27643):map__27643);
var match_length = cljs.core.get.call(null,map__27643__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27643__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27638_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27638_SHARP_);
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
var args27645 = [];
var len__17898__auto___27648 = arguments.length;
var i__17899__auto___27649 = (0);
while(true){
if((i__17899__auto___27649 < len__17898__auto___27648)){
args27645.push((arguments[i__17899__auto___27649]));

var G__27650 = (i__17899__auto___27649 + (1));
i__17899__auto___27649 = G__27650;
continue;
} else {
}
break;
}

var G__27647 = args27645.length;
switch (G__27647) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27645.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27652_SHARP_,p2__27653_SHARP_){
return cljs.core.assoc.call(null,p1__27652_SHARP_,cljs.core.get.call(null,p2__27653_SHARP_,key),p2__27653_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27654){
var map__27657 = p__27654;
var map__27657__$1 = ((((!((map__27657 == null)))?((((map__27657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27657):map__27657);
var f_data = map__27657__$1;
var file = cljs.core.get.call(null,map__27657__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27659,files_msg){
var map__27666 = p__27659;
var map__27666__$1 = ((((!((map__27666 == null)))?((((map__27666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27666):map__27666);
var opts = map__27666__$1;
var on_cssload = cljs.core.get.call(null,map__27666__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27668_27672 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27669_27673 = null;
var count__27670_27674 = (0);
var i__27671_27675 = (0);
while(true){
if((i__27671_27675 < count__27670_27674)){
var f_27676 = cljs.core._nth.call(null,chunk__27669_27673,i__27671_27675);
figwheel.client.file_reloading.reload_css_file.call(null,f_27676);

var G__27677 = seq__27668_27672;
var G__27678 = chunk__27669_27673;
var G__27679 = count__27670_27674;
var G__27680 = (i__27671_27675 + (1));
seq__27668_27672 = G__27677;
chunk__27669_27673 = G__27678;
count__27670_27674 = G__27679;
i__27671_27675 = G__27680;
continue;
} else {
var temp__4425__auto___27681 = cljs.core.seq.call(null,seq__27668_27672);
if(temp__4425__auto___27681){
var seq__27668_27682__$1 = temp__4425__auto___27681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27668_27682__$1)){
var c__17643__auto___27683 = cljs.core.chunk_first.call(null,seq__27668_27682__$1);
var G__27684 = cljs.core.chunk_rest.call(null,seq__27668_27682__$1);
var G__27685 = c__17643__auto___27683;
var G__27686 = cljs.core.count.call(null,c__17643__auto___27683);
var G__27687 = (0);
seq__27668_27672 = G__27684;
chunk__27669_27673 = G__27685;
count__27670_27674 = G__27686;
i__27671_27675 = G__27687;
continue;
} else {
var f_27688 = cljs.core.first.call(null,seq__27668_27682__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27688);

var G__27689 = cljs.core.next.call(null,seq__27668_27682__$1);
var G__27690 = null;
var G__27691 = (0);
var G__27692 = (0);
seq__27668_27672 = G__27689;
chunk__27669_27673 = G__27690;
count__27670_27674 = G__27691;
i__27671_27675 = G__27692;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27666,map__27666__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27666,map__27666__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map