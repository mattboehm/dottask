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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32637_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32637_SHARP_));
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
var seq__32642 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32643 = null;
var count__32644 = (0);
var i__32645 = (0);
while(true){
if((i__32645 < count__32644)){
var n = cljs.core._nth.call(null,chunk__32643,i__32645);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32646 = seq__32642;
var G__32647 = chunk__32643;
var G__32648 = count__32644;
var G__32649 = (i__32645 + (1));
seq__32642 = G__32646;
chunk__32643 = G__32647;
count__32644 = G__32648;
i__32645 = G__32649;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32642);
if(temp__4425__auto__){
var seq__32642__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32642__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__32642__$1);
var G__32650 = cljs.core.chunk_rest.call(null,seq__32642__$1);
var G__32651 = c__17643__auto__;
var G__32652 = cljs.core.count.call(null,c__17643__auto__);
var G__32653 = (0);
seq__32642 = G__32650;
chunk__32643 = G__32651;
count__32644 = G__32652;
i__32645 = G__32653;
continue;
} else {
var n = cljs.core.first.call(null,seq__32642__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32654 = cljs.core.next.call(null,seq__32642__$1);
var G__32655 = null;
var G__32656 = (0);
var G__32657 = (0);
seq__32642 = G__32654;
chunk__32643 = G__32655;
count__32644 = G__32656;
i__32645 = G__32657;
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

var seq__32696_32703 = cljs.core.seq.call(null,deps);
var chunk__32697_32704 = null;
var count__32698_32705 = (0);
var i__32699_32706 = (0);
while(true){
if((i__32699_32706 < count__32698_32705)){
var dep_32707 = cljs.core._nth.call(null,chunk__32697_32704,i__32699_32706);
topo_sort_helper_STAR_.call(null,dep_32707,(depth + (1)),state);

var G__32708 = seq__32696_32703;
var G__32709 = chunk__32697_32704;
var G__32710 = count__32698_32705;
var G__32711 = (i__32699_32706 + (1));
seq__32696_32703 = G__32708;
chunk__32697_32704 = G__32709;
count__32698_32705 = G__32710;
i__32699_32706 = G__32711;
continue;
} else {
var temp__4425__auto___32712 = cljs.core.seq.call(null,seq__32696_32703);
if(temp__4425__auto___32712){
var seq__32696_32713__$1 = temp__4425__auto___32712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32696_32713__$1)){
var c__17643__auto___32714 = cljs.core.chunk_first.call(null,seq__32696_32713__$1);
var G__32715 = cljs.core.chunk_rest.call(null,seq__32696_32713__$1);
var G__32716 = c__17643__auto___32714;
var G__32717 = cljs.core.count.call(null,c__17643__auto___32714);
var G__32718 = (0);
seq__32696_32703 = G__32715;
chunk__32697_32704 = G__32716;
count__32698_32705 = G__32717;
i__32699_32706 = G__32718;
continue;
} else {
var dep_32719 = cljs.core.first.call(null,seq__32696_32713__$1);
topo_sort_helper_STAR_.call(null,dep_32719,(depth + (1)),state);

var G__32720 = cljs.core.next.call(null,seq__32696_32713__$1);
var G__32721 = null;
var G__32722 = (0);
var G__32723 = (0);
seq__32696_32703 = G__32720;
chunk__32697_32704 = G__32721;
count__32698_32705 = G__32722;
i__32699_32706 = G__32723;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32700){
var vec__32702 = p__32700;
var x = cljs.core.nth.call(null,vec__32702,(0),null);
var xs = cljs.core.nthnext.call(null,vec__32702,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32702,x,xs,get_deps__$1){
return (function (p1__32658_SHARP_){
return clojure.set.difference.call(null,p1__32658_SHARP_,x);
});})(vec__32702,x,xs,get_deps__$1))
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
var seq__32736 = cljs.core.seq.call(null,provides);
var chunk__32737 = null;
var count__32738 = (0);
var i__32739 = (0);
while(true){
if((i__32739 < count__32738)){
var prov = cljs.core._nth.call(null,chunk__32737,i__32739);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32740_32748 = cljs.core.seq.call(null,requires);
var chunk__32741_32749 = null;
var count__32742_32750 = (0);
var i__32743_32751 = (0);
while(true){
if((i__32743_32751 < count__32742_32750)){
var req_32752 = cljs.core._nth.call(null,chunk__32741_32749,i__32743_32751);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32752,prov);

var G__32753 = seq__32740_32748;
var G__32754 = chunk__32741_32749;
var G__32755 = count__32742_32750;
var G__32756 = (i__32743_32751 + (1));
seq__32740_32748 = G__32753;
chunk__32741_32749 = G__32754;
count__32742_32750 = G__32755;
i__32743_32751 = G__32756;
continue;
} else {
var temp__4425__auto___32757 = cljs.core.seq.call(null,seq__32740_32748);
if(temp__4425__auto___32757){
var seq__32740_32758__$1 = temp__4425__auto___32757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32740_32758__$1)){
var c__17643__auto___32759 = cljs.core.chunk_first.call(null,seq__32740_32758__$1);
var G__32760 = cljs.core.chunk_rest.call(null,seq__32740_32758__$1);
var G__32761 = c__17643__auto___32759;
var G__32762 = cljs.core.count.call(null,c__17643__auto___32759);
var G__32763 = (0);
seq__32740_32748 = G__32760;
chunk__32741_32749 = G__32761;
count__32742_32750 = G__32762;
i__32743_32751 = G__32763;
continue;
} else {
var req_32764 = cljs.core.first.call(null,seq__32740_32758__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32764,prov);

var G__32765 = cljs.core.next.call(null,seq__32740_32758__$1);
var G__32766 = null;
var G__32767 = (0);
var G__32768 = (0);
seq__32740_32748 = G__32765;
chunk__32741_32749 = G__32766;
count__32742_32750 = G__32767;
i__32743_32751 = G__32768;
continue;
}
} else {
}
}
break;
}

var G__32769 = seq__32736;
var G__32770 = chunk__32737;
var G__32771 = count__32738;
var G__32772 = (i__32739 + (1));
seq__32736 = G__32769;
chunk__32737 = G__32770;
count__32738 = G__32771;
i__32739 = G__32772;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32736);
if(temp__4425__auto__){
var seq__32736__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32736__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__32736__$1);
var G__32773 = cljs.core.chunk_rest.call(null,seq__32736__$1);
var G__32774 = c__17643__auto__;
var G__32775 = cljs.core.count.call(null,c__17643__auto__);
var G__32776 = (0);
seq__32736 = G__32773;
chunk__32737 = G__32774;
count__32738 = G__32775;
i__32739 = G__32776;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32736__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32744_32777 = cljs.core.seq.call(null,requires);
var chunk__32745_32778 = null;
var count__32746_32779 = (0);
var i__32747_32780 = (0);
while(true){
if((i__32747_32780 < count__32746_32779)){
var req_32781 = cljs.core._nth.call(null,chunk__32745_32778,i__32747_32780);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32781,prov);

var G__32782 = seq__32744_32777;
var G__32783 = chunk__32745_32778;
var G__32784 = count__32746_32779;
var G__32785 = (i__32747_32780 + (1));
seq__32744_32777 = G__32782;
chunk__32745_32778 = G__32783;
count__32746_32779 = G__32784;
i__32747_32780 = G__32785;
continue;
} else {
var temp__4425__auto___32786__$1 = cljs.core.seq.call(null,seq__32744_32777);
if(temp__4425__auto___32786__$1){
var seq__32744_32787__$1 = temp__4425__auto___32786__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32744_32787__$1)){
var c__17643__auto___32788 = cljs.core.chunk_first.call(null,seq__32744_32787__$1);
var G__32789 = cljs.core.chunk_rest.call(null,seq__32744_32787__$1);
var G__32790 = c__17643__auto___32788;
var G__32791 = cljs.core.count.call(null,c__17643__auto___32788);
var G__32792 = (0);
seq__32744_32777 = G__32789;
chunk__32745_32778 = G__32790;
count__32746_32779 = G__32791;
i__32747_32780 = G__32792;
continue;
} else {
var req_32793 = cljs.core.first.call(null,seq__32744_32787__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32793,prov);

var G__32794 = cljs.core.next.call(null,seq__32744_32787__$1);
var G__32795 = null;
var G__32796 = (0);
var G__32797 = (0);
seq__32744_32777 = G__32794;
chunk__32745_32778 = G__32795;
count__32746_32779 = G__32796;
i__32747_32780 = G__32797;
continue;
}
} else {
}
}
break;
}

var G__32798 = cljs.core.next.call(null,seq__32736__$1);
var G__32799 = null;
var G__32800 = (0);
var G__32801 = (0);
seq__32736 = G__32798;
chunk__32737 = G__32799;
count__32738 = G__32800;
i__32739 = G__32801;
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
var seq__32806_32810 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32807_32811 = null;
var count__32808_32812 = (0);
var i__32809_32813 = (0);
while(true){
if((i__32809_32813 < count__32808_32812)){
var ns_32814 = cljs.core._nth.call(null,chunk__32807_32811,i__32809_32813);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32814);

var G__32815 = seq__32806_32810;
var G__32816 = chunk__32807_32811;
var G__32817 = count__32808_32812;
var G__32818 = (i__32809_32813 + (1));
seq__32806_32810 = G__32815;
chunk__32807_32811 = G__32816;
count__32808_32812 = G__32817;
i__32809_32813 = G__32818;
continue;
} else {
var temp__4425__auto___32819 = cljs.core.seq.call(null,seq__32806_32810);
if(temp__4425__auto___32819){
var seq__32806_32820__$1 = temp__4425__auto___32819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32806_32820__$1)){
var c__17643__auto___32821 = cljs.core.chunk_first.call(null,seq__32806_32820__$1);
var G__32822 = cljs.core.chunk_rest.call(null,seq__32806_32820__$1);
var G__32823 = c__17643__auto___32821;
var G__32824 = cljs.core.count.call(null,c__17643__auto___32821);
var G__32825 = (0);
seq__32806_32810 = G__32822;
chunk__32807_32811 = G__32823;
count__32808_32812 = G__32824;
i__32809_32813 = G__32825;
continue;
} else {
var ns_32826 = cljs.core.first.call(null,seq__32806_32820__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32826);

var G__32827 = cljs.core.next.call(null,seq__32806_32820__$1);
var G__32828 = null;
var G__32829 = (0);
var G__32830 = (0);
seq__32806_32810 = G__32827;
chunk__32807_32811 = G__32828;
count__32808_32812 = G__32829;
i__32809_32813 = G__32830;
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
var G__32831__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32832__i = 0, G__32832__a = new Array(arguments.length -  0);
while (G__32832__i < G__32832__a.length) {G__32832__a[G__32832__i] = arguments[G__32832__i + 0]; ++G__32832__i;}
  args = new cljs.core.IndexedSeq(G__32832__a,0);
} 
return G__32831__delegate.call(this,args);};
G__32831.cljs$lang$maxFixedArity = 0;
G__32831.cljs$lang$applyTo = (function (arglist__32833){
var args = cljs.core.seq(arglist__32833);
return G__32831__delegate(args);
});
G__32831.cljs$core$IFn$_invoke$arity$variadic = G__32831__delegate;
return G__32831;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32835 = cljs.core._EQ_;
var expr__32836 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32835.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32836))){
var path_parts = ((function (pred__32835,expr__32836){
return (function (p1__32834_SHARP_){
return clojure.string.split.call(null,p1__32834_SHARP_,/[\/\\]/);
});})(pred__32835,expr__32836))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__32835,expr__32836){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32838){if((e32838 instanceof Error)){
var e = e32838;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32838;

}
}})());
});
;})(path_parts,sep,root,pred__32835,expr__32836))
} else {
if(cljs.core.truth_(pred__32835.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32836))){
return ((function (pred__32835,expr__32836){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__32835,expr__32836){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__32835,expr__32836))
);

return deferred.addErrback(((function (deferred,pred__32835,expr__32836){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__32835,expr__32836))
);
});
;})(pred__32835,expr__32836))
} else {
return ((function (pred__32835,expr__32836){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32835,expr__32836))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32839,callback){
var map__32842 = p__32839;
var map__32842__$1 = ((((!((map__32842 == null)))?((((map__32842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32842):map__32842);
var file_msg = map__32842__$1;
var request_url = cljs.core.get.call(null,map__32842__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32842,map__32842__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32842,map__32842__$1,file_msg,request_url))
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
return (function (state_32866){
var state_val_32867 = (state_32866[(1)]);
if((state_val_32867 === (7))){
var inst_32862 = (state_32866[(2)]);
var state_32866__$1 = state_32866;
var statearr_32868_32888 = state_32866__$1;
(statearr_32868_32888[(2)] = inst_32862);

(statearr_32868_32888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (1))){
var state_32866__$1 = state_32866;
var statearr_32869_32889 = state_32866__$1;
(statearr_32869_32889[(2)] = null);

(statearr_32869_32889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (4))){
var inst_32846 = (state_32866[(7)]);
var inst_32846__$1 = (state_32866[(2)]);
var state_32866__$1 = (function (){var statearr_32870 = state_32866;
(statearr_32870[(7)] = inst_32846__$1);

return statearr_32870;
})();
if(cljs.core.truth_(inst_32846__$1)){
var statearr_32871_32890 = state_32866__$1;
(statearr_32871_32890[(1)] = (5));

} else {
var statearr_32872_32891 = state_32866__$1;
(statearr_32872_32891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (6))){
var state_32866__$1 = state_32866;
var statearr_32873_32892 = state_32866__$1;
(statearr_32873_32892[(2)] = null);

(statearr_32873_32892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (3))){
var inst_32864 = (state_32866[(2)]);
var state_32866__$1 = state_32866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32866__$1,inst_32864);
} else {
if((state_val_32867 === (2))){
var state_32866__$1 = state_32866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32866__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32867 === (11))){
var inst_32858 = (state_32866[(2)]);
var state_32866__$1 = (function (){var statearr_32874 = state_32866;
(statearr_32874[(8)] = inst_32858);

return statearr_32874;
})();
var statearr_32875_32893 = state_32866__$1;
(statearr_32875_32893[(2)] = null);

(statearr_32875_32893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (9))){
var inst_32850 = (state_32866[(9)]);
var inst_32852 = (state_32866[(10)]);
var inst_32854 = inst_32852.call(null,inst_32850);
var state_32866__$1 = state_32866;
var statearr_32876_32894 = state_32866__$1;
(statearr_32876_32894[(2)] = inst_32854);

(statearr_32876_32894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (5))){
var inst_32846 = (state_32866[(7)]);
var inst_32848 = figwheel.client.file_reloading.blocking_load.call(null,inst_32846);
var state_32866__$1 = state_32866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32866__$1,(8),inst_32848);
} else {
if((state_val_32867 === (10))){
var inst_32850 = (state_32866[(9)]);
var inst_32856 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32850);
var state_32866__$1 = state_32866;
var statearr_32877_32895 = state_32866__$1;
(statearr_32877_32895[(2)] = inst_32856);

(statearr_32877_32895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32867 === (8))){
var inst_32846 = (state_32866[(7)]);
var inst_32852 = (state_32866[(10)]);
var inst_32850 = (state_32866[(2)]);
var inst_32851 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32852__$1 = cljs.core.get.call(null,inst_32851,inst_32846);
var state_32866__$1 = (function (){var statearr_32878 = state_32866;
(statearr_32878[(9)] = inst_32850);

(statearr_32878[(10)] = inst_32852__$1);

return statearr_32878;
})();
if(cljs.core.truth_(inst_32852__$1)){
var statearr_32879_32896 = state_32866__$1;
(statearr_32879_32896[(1)] = (9));

} else {
var statearr_32880_32897 = state_32866__$1;
(statearr_32880_32897[(1)] = (10));

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
var statearr_32884 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32884[(0)] = figwheel$client$file_reloading$state_machine__18845__auto__);

(statearr_32884[(1)] = (1));

return statearr_32884;
});
var figwheel$client$file_reloading$state_machine__18845__auto____1 = (function (state_32866){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_32866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e32885){if((e32885 instanceof Object)){
var ex__18848__auto__ = e32885;
var statearr_32886_32898 = state_32866;
(statearr_32886_32898[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32899 = state_32866;
state_32866 = G__32899;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18845__auto__ = function(state_32866){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18845__auto____1.call(this,state_32866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18845__auto____0;
figwheel$client$file_reloading$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18845__auto____1;
return figwheel$client$file_reloading$state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__))
})();
var state__18867__auto__ = (function (){var statearr_32887 = f__18866__auto__.call(null);
(statearr_32887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_32887;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32900,callback){
var map__32903 = p__32900;
var map__32903__$1 = ((((!((map__32903 == null)))?((((map__32903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32903):map__32903);
var file_msg = map__32903__$1;
var namespace = cljs.core.get.call(null,map__32903__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32903,map__32903__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32903,map__32903__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32905){
var map__32908 = p__32905;
var map__32908__$1 = ((((!((map__32908 == null)))?((((map__32908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32908):map__32908);
var file_msg = map__32908__$1;
var namespace = cljs.core.get.call(null,map__32908__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32910,callback){
var map__32913 = p__32910;
var map__32913__$1 = ((((!((map__32913 == null)))?((((map__32913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32913):map__32913);
var file_msg = map__32913__$1;
var request_url = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32913__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__18865__auto___33001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___33001,out){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___33001,out){
return (function (state_32983){
var state_val_32984 = (state_32983[(1)]);
if((state_val_32984 === (1))){
var inst_32961 = cljs.core.nth.call(null,files,(0),null);
var inst_32962 = cljs.core.nthnext.call(null,files,(1));
var inst_32963 = files;
var state_32983__$1 = (function (){var statearr_32985 = state_32983;
(statearr_32985[(7)] = inst_32961);

(statearr_32985[(8)] = inst_32963);

(statearr_32985[(9)] = inst_32962);

return statearr_32985;
})();
var statearr_32986_33002 = state_32983__$1;
(statearr_32986_33002[(2)] = null);

(statearr_32986_33002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (2))){
var inst_32963 = (state_32983[(8)]);
var inst_32966 = (state_32983[(10)]);
var inst_32966__$1 = cljs.core.nth.call(null,inst_32963,(0),null);
var inst_32967 = cljs.core.nthnext.call(null,inst_32963,(1));
var inst_32968 = (inst_32966__$1 == null);
var inst_32969 = cljs.core.not.call(null,inst_32968);
var state_32983__$1 = (function (){var statearr_32987 = state_32983;
(statearr_32987[(11)] = inst_32967);

(statearr_32987[(10)] = inst_32966__$1);

return statearr_32987;
})();
if(inst_32969){
var statearr_32988_33003 = state_32983__$1;
(statearr_32988_33003[(1)] = (4));

} else {
var statearr_32989_33004 = state_32983__$1;
(statearr_32989_33004[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (3))){
var inst_32981 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32983__$1,inst_32981);
} else {
if((state_val_32984 === (4))){
var inst_32966 = (state_32983[(10)]);
var inst_32971 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32966);
var state_32983__$1 = state_32983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32983__$1,(7),inst_32971);
} else {
if((state_val_32984 === (5))){
var inst_32977 = cljs.core.async.close_BANG_.call(null,out);
var state_32983__$1 = state_32983;
var statearr_32990_33005 = state_32983__$1;
(statearr_32990_33005[(2)] = inst_32977);

(statearr_32990_33005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (6))){
var inst_32979 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
var statearr_32991_33006 = state_32983__$1;
(statearr_32991_33006[(2)] = inst_32979);

(statearr_32991_33006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (7))){
var inst_32967 = (state_32983[(11)]);
var inst_32973 = (state_32983[(2)]);
var inst_32974 = cljs.core.async.put_BANG_.call(null,out,inst_32973);
var inst_32963 = inst_32967;
var state_32983__$1 = (function (){var statearr_32992 = state_32983;
(statearr_32992[(8)] = inst_32963);

(statearr_32992[(12)] = inst_32974);

return statearr_32992;
})();
var statearr_32993_33007 = state_32983__$1;
(statearr_32993_33007[(2)] = null);

(statearr_32993_33007[(1)] = (2));


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
});})(c__18865__auto___33001,out))
;
return ((function (switch__18844__auto__,c__18865__auto___33001,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____0 = (function (){
var statearr_32997 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32997[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__);

(statearr_32997[(1)] = (1));

return statearr_32997;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____1 = (function (state_32983){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_32983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e32998){if((e32998 instanceof Object)){
var ex__18848__auto__ = e32998;
var statearr_32999_33008 = state_32983;
(statearr_32999_33008[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33009 = state_32983;
state_32983 = G__33009;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__ = function(state_32983){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____1.call(this,state_32983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___33001,out))
})();
var state__18867__auto__ = (function (){var statearr_33000 = f__18866__auto__.call(null);
(statearr_33000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___33001);

return statearr_33000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___33001,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33010,opts){
var map__33014 = p__33010;
var map__33014__$1 = ((((!((map__33014 == null)))?((((map__33014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33014):map__33014);
var eval_body__$1 = cljs.core.get.call(null,map__33014__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33014__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e33016){var e = e33016;
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
return (function (p1__33017_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33017_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__33022){
var vec__33023 = p__33022;
var k = cljs.core.nth.call(null,vec__33023,(0),null);
var v = cljs.core.nth.call(null,vec__33023,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33024){
var vec__33025 = p__33024;
var k = cljs.core.nth.call(null,vec__33025,(0),null);
var v = cljs.core.nth.call(null,vec__33025,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33029,p__33030){
var map__33277 = p__33029;
var map__33277__$1 = ((((!((map__33277 == null)))?((((map__33277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33277):map__33277);
var opts = map__33277__$1;
var before_jsload = cljs.core.get.call(null,map__33277__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33277__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33277__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33278 = p__33030;
var map__33278__$1 = ((((!((map__33278 == null)))?((((map__33278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33278):map__33278);
var msg = map__33278__$1;
var files = cljs.core.get.call(null,map__33278__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33278__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33278__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18865__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33431){
var state_val_33432 = (state_33431[(1)]);
if((state_val_33432 === (7))){
var inst_33292 = (state_33431[(7)]);
var inst_33295 = (state_33431[(8)]);
var inst_33294 = (state_33431[(9)]);
var inst_33293 = (state_33431[(10)]);
var inst_33300 = cljs.core._nth.call(null,inst_33293,inst_33295);
var inst_33301 = figwheel.client.file_reloading.eval_body.call(null,inst_33300,opts);
var inst_33302 = (inst_33295 + (1));
var tmp33433 = inst_33292;
var tmp33434 = inst_33294;
var tmp33435 = inst_33293;
var inst_33292__$1 = tmp33433;
var inst_33293__$1 = tmp33435;
var inst_33294__$1 = tmp33434;
var inst_33295__$1 = inst_33302;
var state_33431__$1 = (function (){var statearr_33436 = state_33431;
(statearr_33436[(7)] = inst_33292__$1);

(statearr_33436[(8)] = inst_33295__$1);

(statearr_33436[(9)] = inst_33294__$1);

(statearr_33436[(10)] = inst_33293__$1);

(statearr_33436[(11)] = inst_33301);

return statearr_33436;
})();
var statearr_33437_33523 = state_33431__$1;
(statearr_33437_33523[(2)] = null);

(statearr_33437_33523[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (20))){
var inst_33335 = (state_33431[(12)]);
var inst_33343 = figwheel.client.file_reloading.sort_files.call(null,inst_33335);
var state_33431__$1 = state_33431;
var statearr_33438_33524 = state_33431__$1;
(statearr_33438_33524[(2)] = inst_33343);

(statearr_33438_33524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (27))){
var state_33431__$1 = state_33431;
var statearr_33439_33525 = state_33431__$1;
(statearr_33439_33525[(2)] = null);

(statearr_33439_33525[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (1))){
var inst_33284 = (state_33431[(13)]);
var inst_33281 = before_jsload.call(null,files);
var inst_33282 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33283 = (function (){return ((function (inst_33284,inst_33281,inst_33282,state_val_33432,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33026_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33026_SHARP_);
});
;})(inst_33284,inst_33281,inst_33282,state_val_33432,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33284__$1 = cljs.core.filter.call(null,inst_33283,files);
var inst_33285 = cljs.core.not_empty.call(null,inst_33284__$1);
var state_33431__$1 = (function (){var statearr_33440 = state_33431;
(statearr_33440[(14)] = inst_33282);

(statearr_33440[(15)] = inst_33281);

(statearr_33440[(13)] = inst_33284__$1);

return statearr_33440;
})();
if(cljs.core.truth_(inst_33285)){
var statearr_33441_33526 = state_33431__$1;
(statearr_33441_33526[(1)] = (2));

} else {
var statearr_33442_33527 = state_33431__$1;
(statearr_33442_33527[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (24))){
var state_33431__$1 = state_33431;
var statearr_33443_33528 = state_33431__$1;
(statearr_33443_33528[(2)] = null);

(statearr_33443_33528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (39))){
var inst_33385 = (state_33431[(16)]);
var state_33431__$1 = state_33431;
var statearr_33444_33529 = state_33431__$1;
(statearr_33444_33529[(2)] = inst_33385);

(statearr_33444_33529[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (46))){
var inst_33426 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33445_33530 = state_33431__$1;
(statearr_33445_33530[(2)] = inst_33426);

(statearr_33445_33530[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (4))){
var inst_33329 = (state_33431[(2)]);
var inst_33330 = cljs.core.List.EMPTY;
var inst_33331 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33330);
var inst_33332 = (function (){return ((function (inst_33329,inst_33330,inst_33331,state_val_33432,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33027_SHARP_){
var and__16828__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33027_SHARP_);
if(cljs.core.truth_(and__16828__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33027_SHARP_));
} else {
return and__16828__auto__;
}
});
;})(inst_33329,inst_33330,inst_33331,state_val_33432,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33333 = cljs.core.filter.call(null,inst_33332,files);
var inst_33334 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33335 = cljs.core.concat.call(null,inst_33333,inst_33334);
var state_33431__$1 = (function (){var statearr_33446 = state_33431;
(statearr_33446[(12)] = inst_33335);

(statearr_33446[(17)] = inst_33331);

(statearr_33446[(18)] = inst_33329);

return statearr_33446;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33447_33531 = state_33431__$1;
(statearr_33447_33531[(1)] = (16));

} else {
var statearr_33448_33532 = state_33431__$1;
(statearr_33448_33532[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (15))){
var inst_33319 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33449_33533 = state_33431__$1;
(statearr_33449_33533[(2)] = inst_33319);

(statearr_33449_33533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (21))){
var inst_33345 = (state_33431[(19)]);
var inst_33345__$1 = (state_33431[(2)]);
var inst_33346 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33345__$1);
var state_33431__$1 = (function (){var statearr_33450 = state_33431;
(statearr_33450[(19)] = inst_33345__$1);

return statearr_33450;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33431__$1,(22),inst_33346);
} else {
if((state_val_33432 === (31))){
var inst_33429 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33431__$1,inst_33429);
} else {
if((state_val_33432 === (32))){
var inst_33385 = (state_33431[(16)]);
var inst_33390 = inst_33385.cljs$lang$protocol_mask$partition0$;
var inst_33391 = (inst_33390 & (64));
var inst_33392 = inst_33385.cljs$core$ISeq$;
var inst_33393 = (inst_33391) || (inst_33392);
var state_33431__$1 = state_33431;
if(cljs.core.truth_(inst_33393)){
var statearr_33451_33534 = state_33431__$1;
(statearr_33451_33534[(1)] = (35));

} else {
var statearr_33452_33535 = state_33431__$1;
(statearr_33452_33535[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (40))){
var inst_33406 = (state_33431[(20)]);
var inst_33405 = (state_33431[(2)]);
var inst_33406__$1 = cljs.core.get.call(null,inst_33405,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33407 = cljs.core.get.call(null,inst_33405,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33408 = cljs.core.not_empty.call(null,inst_33406__$1);
var state_33431__$1 = (function (){var statearr_33453 = state_33431;
(statearr_33453[(20)] = inst_33406__$1);

(statearr_33453[(21)] = inst_33407);

return statearr_33453;
})();
if(cljs.core.truth_(inst_33408)){
var statearr_33454_33536 = state_33431__$1;
(statearr_33454_33536[(1)] = (41));

} else {
var statearr_33455_33537 = state_33431__$1;
(statearr_33455_33537[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (33))){
var state_33431__$1 = state_33431;
var statearr_33456_33538 = state_33431__$1;
(statearr_33456_33538[(2)] = false);

(statearr_33456_33538[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (13))){
var inst_33305 = (state_33431[(22)]);
var inst_33309 = cljs.core.chunk_first.call(null,inst_33305);
var inst_33310 = cljs.core.chunk_rest.call(null,inst_33305);
var inst_33311 = cljs.core.count.call(null,inst_33309);
var inst_33292 = inst_33310;
var inst_33293 = inst_33309;
var inst_33294 = inst_33311;
var inst_33295 = (0);
var state_33431__$1 = (function (){var statearr_33457 = state_33431;
(statearr_33457[(7)] = inst_33292);

(statearr_33457[(8)] = inst_33295);

(statearr_33457[(9)] = inst_33294);

(statearr_33457[(10)] = inst_33293);

return statearr_33457;
})();
var statearr_33458_33539 = state_33431__$1;
(statearr_33458_33539[(2)] = null);

(statearr_33458_33539[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (22))){
var inst_33353 = (state_33431[(23)]);
var inst_33345 = (state_33431[(19)]);
var inst_33349 = (state_33431[(24)]);
var inst_33348 = (state_33431[(25)]);
var inst_33348__$1 = (state_33431[(2)]);
var inst_33349__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33348__$1);
var inst_33350 = (function (){var all_files = inst_33345;
var res_SINGLEQUOTE_ = inst_33348__$1;
var res = inst_33349__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33353,inst_33345,inst_33349,inst_33348,inst_33348__$1,inst_33349__$1,state_val_33432,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33028_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33028_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33353,inst_33345,inst_33349,inst_33348,inst_33348__$1,inst_33349__$1,state_val_33432,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33351 = cljs.core.filter.call(null,inst_33350,inst_33348__$1);
var inst_33352 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33353__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33352);
var inst_33354 = cljs.core.not_empty.call(null,inst_33353__$1);
var state_33431__$1 = (function (){var statearr_33459 = state_33431;
(statearr_33459[(23)] = inst_33353__$1);

(statearr_33459[(26)] = inst_33351);

(statearr_33459[(24)] = inst_33349__$1);

(statearr_33459[(25)] = inst_33348__$1);

return statearr_33459;
})();
if(cljs.core.truth_(inst_33354)){
var statearr_33460_33540 = state_33431__$1;
(statearr_33460_33540[(1)] = (23));

} else {
var statearr_33461_33541 = state_33431__$1;
(statearr_33461_33541[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (36))){
var state_33431__$1 = state_33431;
var statearr_33462_33542 = state_33431__$1;
(statearr_33462_33542[(2)] = false);

(statearr_33462_33542[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (41))){
var inst_33406 = (state_33431[(20)]);
var inst_33410 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33411 = cljs.core.map.call(null,inst_33410,inst_33406);
var inst_33412 = cljs.core.pr_str.call(null,inst_33411);
var inst_33413 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33412)].join('');
var inst_33414 = figwheel.client.utils.log.call(null,inst_33413);
var state_33431__$1 = state_33431;
var statearr_33463_33543 = state_33431__$1;
(statearr_33463_33543[(2)] = inst_33414);

(statearr_33463_33543[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (43))){
var inst_33407 = (state_33431[(21)]);
var inst_33417 = (state_33431[(2)]);
var inst_33418 = cljs.core.not_empty.call(null,inst_33407);
var state_33431__$1 = (function (){var statearr_33464 = state_33431;
(statearr_33464[(27)] = inst_33417);

return statearr_33464;
})();
if(cljs.core.truth_(inst_33418)){
var statearr_33465_33544 = state_33431__$1;
(statearr_33465_33544[(1)] = (44));

} else {
var statearr_33466_33545 = state_33431__$1;
(statearr_33466_33545[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (29))){
var inst_33353 = (state_33431[(23)]);
var inst_33351 = (state_33431[(26)]);
var inst_33385 = (state_33431[(16)]);
var inst_33345 = (state_33431[(19)]);
var inst_33349 = (state_33431[(24)]);
var inst_33348 = (state_33431[(25)]);
var inst_33381 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33384 = (function (){var all_files = inst_33345;
var res_SINGLEQUOTE_ = inst_33348;
var res = inst_33349;
var files_not_loaded = inst_33351;
var dependencies_that_loaded = inst_33353;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33353,inst_33351,inst_33385,inst_33345,inst_33349,inst_33348,inst_33381,state_val_33432,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33383){
var map__33467 = p__33383;
var map__33467__$1 = ((((!((map__33467 == null)))?((((map__33467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33467):map__33467);
var namespace = cljs.core.get.call(null,map__33467__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33353,inst_33351,inst_33385,inst_33345,inst_33349,inst_33348,inst_33381,state_val_33432,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33385__$1 = cljs.core.group_by.call(null,inst_33384,inst_33351);
var inst_33387 = (inst_33385__$1 == null);
var inst_33388 = cljs.core.not.call(null,inst_33387);
var state_33431__$1 = (function (){var statearr_33469 = state_33431;
(statearr_33469[(16)] = inst_33385__$1);

(statearr_33469[(28)] = inst_33381);

return statearr_33469;
})();
if(inst_33388){
var statearr_33470_33546 = state_33431__$1;
(statearr_33470_33546[(1)] = (32));

} else {
var statearr_33471_33547 = state_33431__$1;
(statearr_33471_33547[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (44))){
var inst_33407 = (state_33431[(21)]);
var inst_33420 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33407);
var inst_33421 = cljs.core.pr_str.call(null,inst_33420);
var inst_33422 = [cljs.core.str("not required: "),cljs.core.str(inst_33421)].join('');
var inst_33423 = figwheel.client.utils.log.call(null,inst_33422);
var state_33431__$1 = state_33431;
var statearr_33472_33548 = state_33431__$1;
(statearr_33472_33548[(2)] = inst_33423);

(statearr_33472_33548[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (6))){
var inst_33326 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33473_33549 = state_33431__$1;
(statearr_33473_33549[(2)] = inst_33326);

(statearr_33473_33549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (28))){
var inst_33351 = (state_33431[(26)]);
var inst_33378 = (state_33431[(2)]);
var inst_33379 = cljs.core.not_empty.call(null,inst_33351);
var state_33431__$1 = (function (){var statearr_33474 = state_33431;
(statearr_33474[(29)] = inst_33378);

return statearr_33474;
})();
if(cljs.core.truth_(inst_33379)){
var statearr_33475_33550 = state_33431__$1;
(statearr_33475_33550[(1)] = (29));

} else {
var statearr_33476_33551 = state_33431__$1;
(statearr_33476_33551[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (25))){
var inst_33349 = (state_33431[(24)]);
var inst_33365 = (state_33431[(2)]);
var inst_33366 = cljs.core.not_empty.call(null,inst_33349);
var state_33431__$1 = (function (){var statearr_33477 = state_33431;
(statearr_33477[(30)] = inst_33365);

return statearr_33477;
})();
if(cljs.core.truth_(inst_33366)){
var statearr_33478_33552 = state_33431__$1;
(statearr_33478_33552[(1)] = (26));

} else {
var statearr_33479_33553 = state_33431__$1;
(statearr_33479_33553[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (34))){
var inst_33400 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
if(cljs.core.truth_(inst_33400)){
var statearr_33480_33554 = state_33431__$1;
(statearr_33480_33554[(1)] = (38));

} else {
var statearr_33481_33555 = state_33431__$1;
(statearr_33481_33555[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (17))){
var state_33431__$1 = state_33431;
var statearr_33482_33556 = state_33431__$1;
(statearr_33482_33556[(2)] = recompile_dependents);

(statearr_33482_33556[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (3))){
var state_33431__$1 = state_33431;
var statearr_33483_33557 = state_33431__$1;
(statearr_33483_33557[(2)] = null);

(statearr_33483_33557[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (12))){
var inst_33322 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33484_33558 = state_33431__$1;
(statearr_33484_33558[(2)] = inst_33322);

(statearr_33484_33558[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (2))){
var inst_33284 = (state_33431[(13)]);
var inst_33291 = cljs.core.seq.call(null,inst_33284);
var inst_33292 = inst_33291;
var inst_33293 = null;
var inst_33294 = (0);
var inst_33295 = (0);
var state_33431__$1 = (function (){var statearr_33485 = state_33431;
(statearr_33485[(7)] = inst_33292);

(statearr_33485[(8)] = inst_33295);

(statearr_33485[(9)] = inst_33294);

(statearr_33485[(10)] = inst_33293);

return statearr_33485;
})();
var statearr_33486_33559 = state_33431__$1;
(statearr_33486_33559[(2)] = null);

(statearr_33486_33559[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (23))){
var inst_33353 = (state_33431[(23)]);
var inst_33351 = (state_33431[(26)]);
var inst_33345 = (state_33431[(19)]);
var inst_33349 = (state_33431[(24)]);
var inst_33348 = (state_33431[(25)]);
var inst_33356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33358 = (function (){var all_files = inst_33345;
var res_SINGLEQUOTE_ = inst_33348;
var res = inst_33349;
var files_not_loaded = inst_33351;
var dependencies_that_loaded = inst_33353;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33353,inst_33351,inst_33345,inst_33349,inst_33348,inst_33356,state_val_33432,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33357){
var map__33487 = p__33357;
var map__33487__$1 = ((((!((map__33487 == null)))?((((map__33487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33487):map__33487);
var request_url = cljs.core.get.call(null,map__33487__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33353,inst_33351,inst_33345,inst_33349,inst_33348,inst_33356,state_val_33432,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33359 = cljs.core.reverse.call(null,inst_33353);
var inst_33360 = cljs.core.map.call(null,inst_33358,inst_33359);
var inst_33361 = cljs.core.pr_str.call(null,inst_33360);
var inst_33362 = figwheel.client.utils.log.call(null,inst_33361);
var state_33431__$1 = (function (){var statearr_33489 = state_33431;
(statearr_33489[(31)] = inst_33356);

return statearr_33489;
})();
var statearr_33490_33560 = state_33431__$1;
(statearr_33490_33560[(2)] = inst_33362);

(statearr_33490_33560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (35))){
var state_33431__$1 = state_33431;
var statearr_33491_33561 = state_33431__$1;
(statearr_33491_33561[(2)] = true);

(statearr_33491_33561[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (19))){
var inst_33335 = (state_33431[(12)]);
var inst_33341 = figwheel.client.file_reloading.expand_files.call(null,inst_33335);
var state_33431__$1 = state_33431;
var statearr_33492_33562 = state_33431__$1;
(statearr_33492_33562[(2)] = inst_33341);

(statearr_33492_33562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (11))){
var state_33431__$1 = state_33431;
var statearr_33493_33563 = state_33431__$1;
(statearr_33493_33563[(2)] = null);

(statearr_33493_33563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (9))){
var inst_33324 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33494_33564 = state_33431__$1;
(statearr_33494_33564[(2)] = inst_33324);

(statearr_33494_33564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (5))){
var inst_33295 = (state_33431[(8)]);
var inst_33294 = (state_33431[(9)]);
var inst_33297 = (inst_33295 < inst_33294);
var inst_33298 = inst_33297;
var state_33431__$1 = state_33431;
if(cljs.core.truth_(inst_33298)){
var statearr_33495_33565 = state_33431__$1;
(statearr_33495_33565[(1)] = (7));

} else {
var statearr_33496_33566 = state_33431__$1;
(statearr_33496_33566[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (14))){
var inst_33305 = (state_33431[(22)]);
var inst_33314 = cljs.core.first.call(null,inst_33305);
var inst_33315 = figwheel.client.file_reloading.eval_body.call(null,inst_33314,opts);
var inst_33316 = cljs.core.next.call(null,inst_33305);
var inst_33292 = inst_33316;
var inst_33293 = null;
var inst_33294 = (0);
var inst_33295 = (0);
var state_33431__$1 = (function (){var statearr_33497 = state_33431;
(statearr_33497[(7)] = inst_33292);

(statearr_33497[(8)] = inst_33295);

(statearr_33497[(32)] = inst_33315);

(statearr_33497[(9)] = inst_33294);

(statearr_33497[(10)] = inst_33293);

return statearr_33497;
})();
var statearr_33498_33567 = state_33431__$1;
(statearr_33498_33567[(2)] = null);

(statearr_33498_33567[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (45))){
var state_33431__$1 = state_33431;
var statearr_33499_33568 = state_33431__$1;
(statearr_33499_33568[(2)] = null);

(statearr_33499_33568[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (26))){
var inst_33353 = (state_33431[(23)]);
var inst_33351 = (state_33431[(26)]);
var inst_33345 = (state_33431[(19)]);
var inst_33349 = (state_33431[(24)]);
var inst_33348 = (state_33431[(25)]);
var inst_33368 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33370 = (function (){var all_files = inst_33345;
var res_SINGLEQUOTE_ = inst_33348;
var res = inst_33349;
var files_not_loaded = inst_33351;
var dependencies_that_loaded = inst_33353;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33353,inst_33351,inst_33345,inst_33349,inst_33348,inst_33368,state_val_33432,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33369){
var map__33500 = p__33369;
var map__33500__$1 = ((((!((map__33500 == null)))?((((map__33500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33500):map__33500);
var namespace = cljs.core.get.call(null,map__33500__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33500__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33353,inst_33351,inst_33345,inst_33349,inst_33348,inst_33368,state_val_33432,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33371 = cljs.core.map.call(null,inst_33370,inst_33349);
var inst_33372 = cljs.core.pr_str.call(null,inst_33371);
var inst_33373 = figwheel.client.utils.log.call(null,inst_33372);
var inst_33374 = (function (){var all_files = inst_33345;
var res_SINGLEQUOTE_ = inst_33348;
var res = inst_33349;
var files_not_loaded = inst_33351;
var dependencies_that_loaded = inst_33353;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33353,inst_33351,inst_33345,inst_33349,inst_33348,inst_33368,inst_33370,inst_33371,inst_33372,inst_33373,state_val_33432,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33353,inst_33351,inst_33345,inst_33349,inst_33348,inst_33368,inst_33370,inst_33371,inst_33372,inst_33373,state_val_33432,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33375 = setTimeout(inst_33374,(10));
var state_33431__$1 = (function (){var statearr_33502 = state_33431;
(statearr_33502[(33)] = inst_33373);

(statearr_33502[(34)] = inst_33368);

return statearr_33502;
})();
var statearr_33503_33569 = state_33431__$1;
(statearr_33503_33569[(2)] = inst_33375);

(statearr_33503_33569[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (16))){
var state_33431__$1 = state_33431;
var statearr_33504_33570 = state_33431__$1;
(statearr_33504_33570[(2)] = reload_dependents);

(statearr_33504_33570[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (38))){
var inst_33385 = (state_33431[(16)]);
var inst_33402 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33385);
var state_33431__$1 = state_33431;
var statearr_33505_33571 = state_33431__$1;
(statearr_33505_33571[(2)] = inst_33402);

(statearr_33505_33571[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (30))){
var state_33431__$1 = state_33431;
var statearr_33506_33572 = state_33431__$1;
(statearr_33506_33572[(2)] = null);

(statearr_33506_33572[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (10))){
var inst_33305 = (state_33431[(22)]);
var inst_33307 = cljs.core.chunked_seq_QMARK_.call(null,inst_33305);
var state_33431__$1 = state_33431;
if(inst_33307){
var statearr_33507_33573 = state_33431__$1;
(statearr_33507_33573[(1)] = (13));

} else {
var statearr_33508_33574 = state_33431__$1;
(statearr_33508_33574[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (18))){
var inst_33339 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
if(cljs.core.truth_(inst_33339)){
var statearr_33509_33575 = state_33431__$1;
(statearr_33509_33575[(1)] = (19));

} else {
var statearr_33510_33576 = state_33431__$1;
(statearr_33510_33576[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (42))){
var state_33431__$1 = state_33431;
var statearr_33511_33577 = state_33431__$1;
(statearr_33511_33577[(2)] = null);

(statearr_33511_33577[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (37))){
var inst_33397 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33512_33578 = state_33431__$1;
(statearr_33512_33578[(2)] = inst_33397);

(statearr_33512_33578[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (8))){
var inst_33292 = (state_33431[(7)]);
var inst_33305 = (state_33431[(22)]);
var inst_33305__$1 = cljs.core.seq.call(null,inst_33292);
var state_33431__$1 = (function (){var statearr_33513 = state_33431;
(statearr_33513[(22)] = inst_33305__$1);

return statearr_33513;
})();
if(inst_33305__$1){
var statearr_33514_33579 = state_33431__$1;
(statearr_33514_33579[(1)] = (10));

} else {
var statearr_33515_33580 = state_33431__$1;
(statearr_33515_33580[(1)] = (11));

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
});})(c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18844__auto__,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____0 = (function (){
var statearr_33519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33519[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__);

(statearr_33519[(1)] = (1));

return statearr_33519;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____1 = (function (state_33431){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_33431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e33520){if((e33520 instanceof Object)){
var ex__18848__auto__ = e33520;
var statearr_33521_33581 = state_33431;
(statearr_33521_33581[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33582 = state_33431;
state_33431 = G__33582;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__ = function(state_33431){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____1.call(this,state_33431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18867__auto__ = (function (){var statearr_33522 = f__18866__auto__.call(null);
(statearr_33522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_33522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto__,map__33277,map__33277__$1,opts,before_jsload,on_jsload,reload_dependents,map__33278,map__33278__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18865__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33585,link){
var map__33588 = p__33585;
var map__33588__$1 = ((((!((map__33588 == null)))?((((map__33588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33588):map__33588);
var file = cljs.core.get.call(null,map__33588__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__33588,map__33588__$1,file){
return (function (p1__33583_SHARP_,p2__33584_SHARP_){
if(cljs.core._EQ_.call(null,p1__33583_SHARP_,p2__33584_SHARP_)){
return p1__33583_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__33588,map__33588__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33594){
var map__33595 = p__33594;
var map__33595__$1 = ((((!((map__33595 == null)))?((((map__33595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33595):map__33595);
var match_length = cljs.core.get.call(null,map__33595__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33595__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33590_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33590_SHARP_);
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
var args33597 = [];
var len__17898__auto___33600 = arguments.length;
var i__17899__auto___33601 = (0);
while(true){
if((i__17899__auto___33601 < len__17898__auto___33600)){
args33597.push((arguments[i__17899__auto___33601]));

var G__33602 = (i__17899__auto___33601 + (1));
i__17899__auto___33601 = G__33602;
continue;
} else {
}
break;
}

var G__33599 = args33597.length;
switch (G__33599) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33597.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33604_SHARP_,p2__33605_SHARP_){
return cljs.core.assoc.call(null,p1__33604_SHARP_,cljs.core.get.call(null,p2__33605_SHARP_,key),p2__33605_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33606){
var map__33609 = p__33606;
var map__33609__$1 = ((((!((map__33609 == null)))?((((map__33609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33609):map__33609);
var f_data = map__33609__$1;
var file = cljs.core.get.call(null,map__33609__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33611,files_msg){
var map__33618 = p__33611;
var map__33618__$1 = ((((!((map__33618 == null)))?((((map__33618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33618):map__33618);
var opts = map__33618__$1;
var on_cssload = cljs.core.get.call(null,map__33618__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33620_33624 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__33621_33625 = null;
var count__33622_33626 = (0);
var i__33623_33627 = (0);
while(true){
if((i__33623_33627 < count__33622_33626)){
var f_33628 = cljs.core._nth.call(null,chunk__33621_33625,i__33623_33627);
figwheel.client.file_reloading.reload_css_file.call(null,f_33628);

var G__33629 = seq__33620_33624;
var G__33630 = chunk__33621_33625;
var G__33631 = count__33622_33626;
var G__33632 = (i__33623_33627 + (1));
seq__33620_33624 = G__33629;
chunk__33621_33625 = G__33630;
count__33622_33626 = G__33631;
i__33623_33627 = G__33632;
continue;
} else {
var temp__4425__auto___33633 = cljs.core.seq.call(null,seq__33620_33624);
if(temp__4425__auto___33633){
var seq__33620_33634__$1 = temp__4425__auto___33633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33620_33634__$1)){
var c__17643__auto___33635 = cljs.core.chunk_first.call(null,seq__33620_33634__$1);
var G__33636 = cljs.core.chunk_rest.call(null,seq__33620_33634__$1);
var G__33637 = c__17643__auto___33635;
var G__33638 = cljs.core.count.call(null,c__17643__auto___33635);
var G__33639 = (0);
seq__33620_33624 = G__33636;
chunk__33621_33625 = G__33637;
count__33622_33626 = G__33638;
i__33623_33627 = G__33639;
continue;
} else {
var f_33640 = cljs.core.first.call(null,seq__33620_33634__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33640);

var G__33641 = cljs.core.next.call(null,seq__33620_33634__$1);
var G__33642 = null;
var G__33643 = (0);
var G__33644 = (0);
seq__33620_33624 = G__33641;
chunk__33621_33625 = G__33642;
count__33622_33626 = G__33643;
i__33623_33627 = G__33644;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__33618,map__33618__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__33618,map__33618__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map