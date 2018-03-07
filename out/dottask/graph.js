// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('dottask.graph');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('dottask.help');
goog.require('goog.dom.classlist');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('tubax.core');
goog.require('goog.events.EventType');
goog.require('historian.core');
goog.require('goog.events');
goog.require('devtools.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.html.SafeHtml');
goog.require('dottask.core');
dottask.graph.ppi = (72);
if(typeof dottask.graph.app_state !== 'undefined'){
} else {
dottask.graph.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$gclusters,cljs.core.cst$kw$selected_DASH_node_DASH_id,cljs.core.cst$kw$nodes,cljs.core.cst$kw$id_DASH_counter,cljs.core.cst$kw$svg,cljs.core.cst$kw$dot,cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,cljs.core.cst$kw$clusters,cljs.core.cst$kw$direction,cljs.core.cst$kw$deps,cljs.core.cst$kw$gnodes],[null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node1",cljs.core.cst$kw$text,"Drag things"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node2",cljs.core.cst$kw$text,"Make nodes"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node3",cljs.core.cst$kw$text,"Make links"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node4",cljs.core.cst$kw$text,"???"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node5",cljs.core.cst$kw$text,"Profit!"], null)], null),(6),"",null,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$down,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node1","node2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node1","node3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node2","node4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node3","node4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node4","node5"], null)], null),null]));
}
if(typeof dottask.graph.ui_state !== 'undefined'){
} else {
dottask.graph.ui_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_,false,cljs.core.cst$kw$help_DASH_visible_QMARK_,false,cljs.core.cst$kw$resize_DASH_points,null,cljs.core.cst$kw$preview_DASH_points,null,cljs.core.cst$kw$edit_DASH_node_DASH_id,null], null));
}
dottask.graph.state_to_save = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id_DASH_counter,cljs.core.cst$kw$direction,cljs.core.cst$kw$clusters,cljs.core.cst$kw$nodes,cljs.core.cst$kw$deps], null);
dottask.graph.save_hash = (function dottask$graph$save_hash(state){
return (window["location"]["hash"] = (function (){var G__12546 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(state,dottask.graph.state_to_save)], 0));
return encodeURIComponent(G__12546);
})());
});
dottask.graph.load_hash = (function dottask$graph$load_hash(state){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([state,cljs.reader.read_string((function (){var G__12548 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest((window["location"]["hash"])));
return decodeURIComponent(G__12548);
})())], 0));
});
dottask.graph.get_hidden_ids = (function dottask$graph$get_hidden_ids(var_args){
var args12549 = [];
var len__5729__auto___12552 = arguments.length;
var i__5730__auto___12553 = (0);
while(true){
if((i__5730__auto___12553 < len__5729__auto___12552)){
args12549.push((arguments[i__5730__auto___12553]));

var G__12554 = (i__5730__auto___12553 + (1));
i__5730__auto___12553 = G__12554;
continue;
} else {
}
break;
}

var G__12551 = args12549.length;
switch (G__12551) {
case 2:
return dottask.graph.get_hidden_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 6:
return dottask.graph.get_hidden_ids.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12549.length)].join('')));

}
});

dottask.graph.get_hidden_ids.cljs$core$IFn$_invoke$arity$2 = (function (nodes,clusters){
return dottask.graph.get_hidden_ids.cljs$core$IFn$_invoke$arity$6(nodes,clusters,cljs.core.group_by(cljs.core.cst$kw$cluster_DASH_id,nodes),cljs.core.group_by(cljs.core.cst$kw$cluster_DASH_id,cljs.core.vals(clusters)),null,null);
});

dottask.graph.get_hidden_ids.cljs$core$IFn$_invoke$arity$6 = (function (nodes,clusters,nodes_by_cluster_id,clusters_by_cluster_id,cluster_id,collapsed_parent_id){
var collapsed_id = (function (){var or__4671__auto__ = collapsed_parent_id;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
if(cljs.core.truth_((function (){var and__4659__auto__ = cluster_id;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clusters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cluster_id,cljs.core.cst$kw$collapsed], null));
} else {
return and__4659__auto__;
}
})())){
return cluster_id;
} else {
return null;
}
}
})();
var hidden_children = (cljs.core.truth_(collapsed_id)?cljs.core.PersistentArrayMap.fromArray([collapsed_id,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes_by_cluster_id,cluster_id))], true, false):cljs.core.PersistentArrayMap.EMPTY);
var nested_maps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (collapsed_id,hidden_children){
return (function (child_cluster){
return dottask.graph.get_hidden_ids.cljs$core$IFn$_invoke$arity$6(nodes,clusters,nodes_by_cluster_id,clusters_by_cluster_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(child_cluster),collapsed_id);
});})(collapsed_id,hidden_children))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters_by_cluster_id,cluster_id));
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.concat,hidden_children,nested_maps);
return result;
});

dottask.graph.get_hidden_ids.cljs$lang$maxFixedArity = 6;
dottask.graph.fix_deps = (function dottask$graph$fix_deps(deps,hidden_ids){
var rename_lookup = dottask.core.invert_list_map(hidden_ids);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (rename_lookup){
return (function (p1__12557_SHARP_){
var and__4659__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__12557_SHARP_),cljs.core.second(p1__12557_SHARP_));
if(and__4659__auto__){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(hidden_ids,cljs.core.first(p1__12557_SHARP_));
} else {
return and__4659__auto__;
}
});})(rename_lookup))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (rename_lookup){
return (function (p1__12556_SHARP_){
return cljs.core.replace.cljs$core$IFn$_invoke$arity$2(rename_lookup,p1__12556_SHARP_);
});})(rename_lookup))
,deps))));
});
dottask.graph.node__GT_dot = (function dottask$graph$node__GT_dot(var_args){
var args12558 = [];
var len__5729__auto___12561 = arguments.length;
var i__5730__auto___12562 = (0);
while(true){
if((i__5730__auto___12562 < len__5729__auto___12561)){
args12558.push((arguments[i__5730__auto___12562]));

var G__12563 = (i__5730__auto___12562 + (1));
i__5730__auto___12562 = G__12563;
continue;
} else {
}
break;
}

var G__12560 = args12558.length;
switch (G__12560) {
case 1:
return dottask.graph.node__GT_dot.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dottask.graph.node__GT_dot.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12558.length)].join('')));

}
});

dottask.graph.node__GT_dot.cljs$core$IFn$_invoke$arity$1 = (function (node){
return dottask.graph.node__GT_dot.cljs$core$IFn$_invoke$arity$2(node,"");
});

dottask.graph.node__GT_dot.cljs$core$IFn$_invoke$arity$2 = (function (node,label){
return [cljs.core.str(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)),cljs.core.str("[label=\""),cljs.core.str(dottask.core.esc(label)),cljs.core.str("\" color=\""),cljs.core.str((function (){var or__4671__auto__ = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return "#666666";
}
})()),cljs.core.str("\" height=\""),cljs.core.str(dottask.core.get_node_dim(node,cljs.core.cst$kw$height)),cljs.core.str("\" width=\""),cljs.core.str(dottask.core.get_node_dim(node,cljs.core.cst$kw$width)),cljs.core.str("\"];")].join('');
});

dottask.graph.node__GT_dot.cljs$lang$maxFixedArity = 2;
dottask.graph.cluster__GT_dot = (function dottask$graph$cluster__GT_dot(cluster_id,clusters,nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,labels_QMARK_){
var cluster = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,cluster_id);
var label = (cljs.core.truth_(labels_QMARK_)?cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cluster):" ");
if(cljs.core.truth_(cljs.core.cst$kw$collapsed.cljs$core$IFn$_invoke$arity$1(cluster))){
return dottask.graph.node__GT_dot.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cluster_id], null),label);
} else {
return [cljs.core.str("\nsubgraph "),cljs.core.str((function (){var or__4671__auto__ = cluster_id;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return "root";
}
})()),cljs.core.str("{\n"),cljs.core.str("label=\""),cljs.core.str(dottask.core.esc(label)),cljs.core.str("\";\n "),cljs.core.str("color=\"#666666\";\n "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cluster,label){
return (function (p1__12565_SHARP_){
return dottask$graph$cluster__GT_dot(p1__12565_SHARP_,clusters,nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,labels_QMARK_);
});})(cluster,label))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters_by_cluster_id,cluster_id))))),cljs.core.str("\n"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(";\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes_by_cluster_id,cluster_id)))),cljs.core.str("}\n")].join('');
}
});
dottask.graph.graph__GT_dot = (function dottask$graph$graph__GT_dot(nodes,deps,clusters,direction,labels_QMARK_){
var nodes_by_cluster_id = cljs.core.group_by(cljs.core.cst$kw$cluster_DASH_id,nodes);
var clusters_by_cluster_id = cljs.core.group_by(cljs.core.cst$kw$cluster_DASH_id,cljs.core.vals(clusters));
var hidden_ids = dottask.graph.get_hidden_ids.cljs$core$IFn$_invoke$arity$2(nodes,clusters);
var hidden_id_set = cljs.core.set(cljs.core.flatten(cljs.core.vals(hidden_ids)));
return [cljs.core.str("digraph \"\" {\n"),cljs.core.str("dpi="),cljs.core.str(dottask.graph.ppi),cljs.core.str(";\n"),cljs.core.str("rankdir="),cljs.core.str(cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(direction)),cljs.core.str(";\n"),cljs.core.str("node [label=\"\" shape=\"rect\" penwidth=\"4\"]\n"),cljs.core.str("edge [color=\"#555555\"]\n"),cljs.core.str(dottask.graph.cluster__GT_dot(null,clusters,nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,labels_QMARK_)),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set){
return (function (p1__12566_SHARP_){
return dottask.graph.node__GT_dot.cljs$core$IFn$_invoke$arity$2(p1__12566_SHARP_,(cljs.core.truth_(labels_QMARK_)?cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(p1__12566_SHARP_):""));
});})(nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set){
return (function (p1__12567_SHARP_){
return cljs.core.contains_QMARK_(hidden_id_set,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12567_SHARP_));
});})(nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set))
,nodes)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set){
return (function (p1__12568_SHARP_){
return [cljs.core.str(cljs.core.first(p1__12568_SHARP_)),cljs.core.str("->"),cljs.core.str(cljs.core.second(p1__12568_SHARP_)),cljs.core.str("[label=\""),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(p1__12568_SHARP_,(2),null)),cljs.core.str("\"];")].join('');
});})(nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set))
,dottask.graph.fix_deps(deps,hidden_ids)))))),cljs.core.str("}")].join('');
});
dottask.graph.get_points = (function dottask$graph$get_points(cljdotnode){
var points = cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljdotnode))));
return cljs.core.zipmap(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(dottask.core.extent,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (points){
return (function (p1__12570_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,p1__12570_SHARP_);
});})(points))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (points){
return (function (p1__12569_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__12569_SHARP_,/,/);
});})(points))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(points,/ /))))));
});
dottask.graph.get_cljdot_id = (function dottask$graph$get_cljdot_id(item){
return cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(item))));
});
dottask.graph.svg__GT_gdata = (function dottask$graph$svg__GT_gdata(svg){
var cljdot = tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$1(svg);
var items = cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljdot)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cljdot,items){
return (function (node){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,dottask.graph.get_cljdot_id(node),cljs.core.cst$kw$points,dottask.graph.get_points(node)], null);
});})(cljdot,items))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cljdot,items){
return (function (p1__12571_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(p1__12571_SHARP_)),"node");
});})(cljdot,items))
,items)),cljs.core.cst$kw$clusters,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cljdot,items){
return (function (cluster){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,dottask.graph.get_cljdot_id(cluster),cljs.core.cst$kw$points,dottask.graph.get_points(cluster)], null);
});})(cljdot,items))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cljdot,items){
return (function (p1__12572_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(p1__12572_SHARP_)),"cluster");
});})(cljdot,items))
,items))], null);
});
dottask.graph.dot__GT_svg = (function dottask$graph$dot__GT_svg(dot){
return clojure.string.replace(Viz(dot,"svg"),/pt\"/,"px\"");
});
dottask.graph.update_state = (function dottask$graph$update_state(state){
var dot = dottask.graph.graph__GT_dot(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state).call(null,dottask.core.directions),false);
var same_graph = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dot,cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(state));
var svg = ((same_graph)?cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(state):dottask.graph.dot__GT_svg(dot));
var gdata = ((same_graph)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$clusters,cljs.core.cst$kw$gclusters.cljs$core$IFn$_invoke$arity$1(state)], null):dottask.graph.svg__GT_gdata(svg));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$dot,dot,cljs.core.array_seq([cljs.core.cst$kw$svg,svg,cljs.core.cst$kw$gnodes,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (dot,same_graph,svg,gdata){
return (function (p1__12573_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__12573_SHARP_,cljs.core.cst$kw$node,dottask.core.get_node(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12573_SHARP_)),cljs.core.array_seq([cljs.core.cst$kw$cluster,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12573_SHARP_)], null))], 0));
});})(dot,same_graph,svg,gdata))
,cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(gdata)),cljs.core.cst$kw$gclusters,cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(gdata)], 0));
});
dottask.graph.rerender_BANG_ = (function dottask$graph$rerender_BANG_(updater){
return (function() { 
var G__12574__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,dottask.graph.app_state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(dottask.graph.update_state,updater)),args);
};
var G__12574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12575__i = 0, G__12575__a = new Array(arguments.length -  0);
while (G__12575__i < G__12575__a.length) {G__12575__a[G__12575__i] = arguments[G__12575__i + 0]; ++G__12575__i;}
  args = new cljs.core.IndexedSeq(G__12575__a,0);
} 
return G__12574__delegate.call(this,args);};
G__12574.cljs$lang$maxFixedArity = 0;
G__12574.cljs$lang$applyTo = (function (arglist__12576){
var args = cljs.core.seq(arglist__12576);
return G__12574__delegate(args);
});
G__12574.cljs$core$IFn$_invoke$arity$variadic = G__12574__delegate;
return G__12574;
})()
;
});
dottask.graph.set_direction = (function dottask$graph$set_direction(state,dirkey){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$direction,dirkey);
});
dottask.graph.update_node = (function dottask$graph$update_node(state,node_id,func){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$nodes,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),node_id)){
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(node) : func.call(null,node));
} else {
return node;
}
}),cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state)));
});
dottask.graph.rename_node = (function dottask$graph$rename_node(state,node_id,text){
return dottask.graph.update_node(state,node_id,(function (p1__12577_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12577_SHARP_,cljs.core.cst$kw$text,text);
}));
});
dottask.graph.resize_node = (function dottask$graph$resize_node(state,node_id,width,height){
var height_pt = (height / dottask.graph.ppi);
var width_pt = (width / dottask.graph.ppi);
return dottask.graph.update_node(state,node_id,((function (height_pt,width_pt){
return (function (p1__12578_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__12578_SHARP_,cljs.core.cst$kw$width,width_pt,cljs.core.array_seq([cljs.core.cst$kw$height,height_pt], 0));
});})(height_pt,width_pt))
);
});
dottask.graph.recolor_node = (function dottask$graph$recolor_node(state,node_id,color){
return dottask.graph.update_node(state,node_id,(function (p1__12579_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12579_SHARP_,cljs.core.cst$kw$color,color);
}));
});
dottask.graph.recluster_node = (function dottask$graph$recluster_node(state,node_id,cluster_id){
return dottask.graph.update_node(state,node_id,(function (p1__12580_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12580_SHARP_,cljs.core.cst$kw$cluster_DASH_id,cluster_id);
}));
});
dottask.graph.rename_prompt = (function dottask$graph$rename_prompt(state,node_id){
var node = dottask.core.get_node(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),node_id);
var new_name = dottask.core.prompt("Enter new name",cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(new_name)){
return dottask.graph.rename_node(state,node_id,new_name);
} else {
return state;
}
});
dottask.graph.select_node = (function dottask$graph$select_node(state,node_id){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$selected_DASH_node_DASH_id,node_id);
});
dottask.graph.get_next_node_id = (function dottask$graph$get_next_node_id(state,direction,current){
var gdata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cluster,cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1(state));
var positioned_nodes = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gdata){
return (function (node){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$y], null)))),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)],null));
});})(gdata))
,gdata));
var node_index = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (gdata,positioned_nodes){
return (function (idx,node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(node,(2)),idx], null);
});})(gdata,positioned_nodes))
,positioned_nodes)));
var old_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_index,current);
var new_index = (((current == null))?(0):cljs.core.mod((old_index + direction),cljs.core.count(positioned_nodes)));
var new_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(positioned_nodes,new_index);
var new_node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_node,(2));
return new_node_id;
});
dottask.graph.select_next_node = (function dottask$graph$select_next_node(var_args){
var args12581 = [];
var len__5729__auto___12584 = arguments.length;
var i__5730__auto___12585 = (0);
while(true){
if((i__5730__auto___12585 < len__5729__auto___12584)){
args12581.push((arguments[i__5730__auto___12585]));

var G__12586 = (i__5730__auto___12585 + (1));
i__5730__auto___12585 = G__12586;
continue;
} else {
}
break;
}

var G__12583 = args12581.length;
switch (G__12583) {
case 1:
return dottask.graph.select_next_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dottask.graph.select_next_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12581.length)].join('')));

}
});

dottask.graph.select_next_node.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dottask.graph.select_next_node.cljs$core$IFn$_invoke$arity$2(state,(1));
});

dottask.graph.select_next_node.cljs$core$IFn$_invoke$arity$2 = (function (state,direction){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$selected_DASH_node_DASH_id,dottask.graph.get_next_node_id(state,direction,cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state)));
});

dottask.graph.select_next_node.cljs$lang$maxFixedArity = 2;
dottask.graph.edit_next = (function dottask$graph$edit_next(ui_state,state,direction){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ui_state,cljs.core.cst$kw$edit_DASH_node_DASH_id,dottask.graph.get_next_node_id(state,direction,cljs.core.cst$kw$edit_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(ui_state)));
});
dottask.graph.delete_node = (function dottask$graph$delete_node(state,id){
var new_nodes = cljs.core.filterv((function (p1__12588_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12588_SHARP_));
}),cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state));
var new_deps = cljs.core.filterv(((function (new_nodes){
return (function (dep){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,id),dep);
});})(new_nodes))
,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state));
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,new_nodes,cljs.core.array_seq([cljs.core.cst$kw$deps,new_deps], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state))){
return dottask.graph.select_next_node.cljs$core$IFn$_invoke$arity$1(new_state);
} else {
return new_state;
}
});
dottask.graph.delete_nodes = (function dottask$graph$delete_nodes(state,ids){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(dottask.graph.delete_node,state,ids);
});
dottask.graph.delete_all = (function dottask$graph$delete_all(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([cljs.core.cst$kw$deps,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$clusters,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$selected_DASH_node_DASH_id,null], 0));
});
dottask.graph.add_node = (function dottask$graph$add_node(var_args){
var args12591 = [];
var len__5729__auto___12594 = arguments.length;
var i__5730__auto___12595 = (0);
while(true){
if((i__5730__auto___12595 < len__5729__auto___12594)){
args12591.push((arguments[i__5730__auto___12595]));

var G__12596 = (i__5730__auto___12595 + (1));
i__5730__auto___12595 = G__12596;
continue;
} else {
}
break;
}

var G__12593 = args12591.length;
switch (G__12593) {
case 3:
return dottask.graph.add_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dottask.graph.add_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return dottask.graph.add_node.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12591.length)].join('')));

}
});

dottask.graph.add_node.cljs$core$IFn$_invoke$arity$3 = (function (state,befores,afters){
return dottask.graph.add_node.cljs$core$IFn$_invoke$arity$4(state,befores,afters,"");
});

dottask.graph.add_node.cljs$core$IFn$_invoke$arity$4 = (function (state,befores,afters,text){
return dottask.graph.add_node.cljs$core$IFn$_invoke$arity$5(state,befores,afters,text,false);
});

dottask.graph.add_node.cljs$core$IFn$_invoke$arity$5 = (function (state,befores,afters,text,return_id_QMARK_){
var new_node_id = [cljs.core.str("node"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join('');
var new_node = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,new_node_id,cljs.core.cst$kw$text,text], null);
var new_nodes = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),new_node);
var all_deps = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_node_id,new_node,new_nodes){
return (function (p1__12589_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__12589_SHARP_,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(new_node)],null));
});})(new_node_id,new_node,new_nodes))
,befores),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_node_id,new_node,new_nodes){
return (function (p1__12590_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(new_node),p1__12590_SHARP_],null));
});})(new_node_id,new_node,new_nodes))
,afters)], null));
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,new_nodes,cljs.core.array_seq([cljs.core.cst$kw$deps,all_deps,cljs.core.cst$kw$id_DASH_counter,(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state) + (1))], 0));
if(cljs.core.truth_(return_id_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_state,new_node_id], null);
} else {
return new_state;
}
});

dottask.graph.add_node.cljs$lang$maxFixedArity = 5;
dottask.graph.add_nodes = (function dottask$graph$add_nodes(state,labels){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12598_SHARP_,p2__12599_SHARP_){
return dottask.graph.add_node.cljs$core$IFn$_invoke$arity$4(p1__12598_SHARP_,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,p2__12599_SHARP_);
}),state,labels);
});
dottask.graph.inside_cluster_QMARK_ = (function dottask$graph$inside_cluster_QMARK_(clusters,child,parent_id){
if((cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(child) == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(child))){
return true;
} else {
return dottask$graph$inside_cluster_QMARK_(clusters,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(child)),parent_id);

}
}
});
dottask.graph.toggle_cluster_nesting = (function dottask$graph$toggle_cluster_nesting(state,child_id,parent_id){
if(cljs.core.truth_(dottask.graph.inside_cluster_QMARK_(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,parent_id], null)),child_id))){
return state;
} else {
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,child_id,cljs.core.cst$kw$cluster_DASH_id], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,child_id,cljs.core.cst$kw$cluster_DASH_id], null))))?null:parent_id));
}
});
dottask.graph.add_cluster = (function dottask$graph$add_cluster(var_args){
var args12605 = [];
var len__5729__auto___12608 = arguments.length;
var i__5730__auto___12609 = (0);
while(true){
if((i__5730__auto___12609 < len__5729__auto___12608)){
args12605.push((arguments[i__5730__auto___12609]));

var G__12610 = (i__5730__auto___12609 + (1));
i__5730__auto___12609 = G__12610;
continue;
} else {
}
break;
}

var G__12607 = args12605.length;
switch (G__12607) {
case 2:
return dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12605.length)].join('')));

}
});

dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$2 = (function (state,node_ids){
return dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$3(state,dottask.core.prompt("Enter a name for the box",""),node_ids);
});

dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$3 = (function (state,text,node_ids){
return dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$4(state,text,node_ids,false);
});

dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$4 = (function (state,text,node_ids,return_id_QMARK_){
var cluster_id = [cljs.core.str("cluster_"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join('');
var new_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cluster_id){
return (function (p1__12603_SHARP_,p2__12604_SHARP_){
return dottask.graph.recluster_node(p1__12603_SHARP_,p2__12604_SHARP_,cluster_id);
});})(cluster_id))
,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$clusters,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cluster_id,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cluster_id,cljs.core.cst$kw$text,text,cljs.core.cst$kw$collapsed,false], null)),cljs.core.array_seq([cljs.core.cst$kw$id_DASH_counter,(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state) + (1))], 0)),node_ids);
if(cljs.core.truth_(return_id_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_state,cluster_id], null);
} else {
return new_state;
}
});

dottask.graph.add_cluster.cljs$lang$maxFixedArity = 4;
dottask.graph.delete_cluster = (function dottask$graph$delete_cluster(var_args){
var args12614 = [];
var len__5729__auto___12617 = arguments.length;
var i__5730__auto___12618 = (0);
while(true){
if((i__5730__auto___12618 < len__5729__auto___12617)){
args12614.push((arguments[i__5730__auto___12618]));

var G__12619 = (i__5730__auto___12618 + (1));
i__5730__auto___12618 = G__12619;
continue;
} else {
}
break;
}

var G__12616 = args12614.length;
switch (G__12616) {
case 2:
return dottask.graph.delete_cluster.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dottask.graph.delete_cluster.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12614.length)].join('')));

}
});

dottask.graph.delete_cluster.cljs$core$IFn$_invoke$arity$2 = (function (state,id){
return dottask.graph.delete_cluster.cljs$core$IFn$_invoke$arity$3(state,id,false);
});

dottask.graph.delete_cluster.cljs$core$IFn$_invoke$arity$3 = (function (state,id,delete_contents_QMARK_){
var parent_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,id,cljs.core.cst$kw$cluster_DASH_id], null));
var wipe_id = ((function (parent_id){
return (function (p1__12612_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(p1__12612_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12612_SHARP_,cljs.core.cst$kw$cluster_DASH_id,parent_id);
} else {
return p1__12612_SHARP_;
}
});})(parent_id))
;
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(wipe_id,cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.array_seq([cljs.core.cst$kw$clusters,dottask.core.map_vals(wipe_id,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),id))], 0));
var nodes_to_delete = (cljs.core.truth_(delete_contents_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parent_id,wipe_id,new_state){
return (function (p1__12613_SHARP_){
return dottask.graph.inside_cluster_QMARK_(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),p1__12613_SHARP_,id);
});})(parent_id,wipe_id,new_state))
,cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state)):null);
return dottask.graph.delete_nodes(new_state,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,nodes_to_delete));
});

dottask.graph.delete_cluster.cljs$lang$maxFixedArity = 3;
dottask.graph.rename_cluster = (function dottask$graph$rename_cluster(state,cluster_id,name){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cluster_id,cljs.core.cst$kw$text], null),name);
});
dottask.graph.rename_cluster_prompt = (function dottask$graph$rename_cluster_prompt(state,cluster_id){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cluster_id], null)))){
var new_name = dottask.core.prompt("Enter new name",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cluster_id,cljs.core.cst$kw$text], null)));
if(cljs.core.truth_(new_name)){
return dottask.graph.rename_cluster(state,cluster_id,new_name);
} else {
return state;
}
} else {
return state;
}
});
dottask.graph.outer_cluster_prompt = (function dottask$graph$outer_cluster_prompt(state,inner_cluster_id){
return dottask.graph.toggle_cluster_nesting(dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.EMPTY),inner_cluster_id,[cljs.core.str("cluster_"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join(''));
});
dottask.graph.toggle_node_cluster = (function dottask$graph$toggle_node_cluster(state,node_id,cluster_id){
var new_cluster_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cluster_id,cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(dottask.core.get_node(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),node_id))))?"":cluster_id);
return dottask.graph.recluster_node(state,node_id,new_cluster_id);
});
dottask.graph.move_deps = (function dottask$graph$move_deps(var_args){
var args12621 = [];
var len__5729__auto___12624 = arguments.length;
var i__5730__auto___12625 = (0);
while(true){
if((i__5730__auto___12625 < len__5729__auto___12624)){
args12621.push((arguments[i__5730__auto___12625]));

var G__12626 = (i__5730__auto___12625 + (1));
i__5730__auto___12625 = G__12626;
continue;
} else {
}
break;
}

var G__12623 = args12621.length;
switch (G__12623) {
case 4:
return dottask.graph.move_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return dottask.graph.move_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12621.length)].join('')));

}
});

dottask.graph.move_deps.cljs$core$IFn$_invoke$arity$4 = (function (deps,old_node_id,new_node_id,dep_type){
return dottask.graph.move_deps.cljs$core$IFn$_invoke$arity$5(deps,old_node_id,new_node_id,(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dep_type,cljs.core.cst$kw$before)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dep_type,cljs.core.cst$kw$both)),(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dep_type,cljs.core.cst$kw$after)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dep_type,cljs.core.cst$kw$both)));
});

dottask.graph.move_deps.cljs$core$IFn$_invoke$arity$5 = (function (deps,old_node_id,new_node_id,move_befores,move_afters){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (dep){
if(cljs.core.truth_((function (){var and__4659__auto__ = move_befores;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(dep),old_node_id);
} else {
return and__4659__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(dep),new_node_id], null);
} else {
if(cljs.core.truth_((function (){var and__4659__auto__ = move_afters;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(dep),old_node_id);
} else {
return and__4659__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_node_id,cljs.core.second(dep)], null);
} else {
return dep;

}
}
}),deps);
});

dottask.graph.move_deps.cljs$lang$maxFixedArity = 5;
dottask.graph.split_node = (function dottask$graph$split_node(state,node_id,new_node_pos){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state);
var node = dottask.core.get_node(nodes,node_id);
var new_node_id = [cljs.core.str("node"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join('');
var new_node = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,new_node_id,cljs.core.cst$kw$cluster_DASH_id,cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$text,""], null);
var new_nodes = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes,new_node);
var new_deps = dottask.graph.move_deps.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),node_id,new_node_id,new_node_pos);
var final_deps = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_deps,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_node_pos,cljs.core.cst$kw$before))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_node_id,node_id], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id,new_node_id], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,new_nodes,cljs.core.array_seq([cljs.core.cst$kw$deps,final_deps,cljs.core.cst$kw$id_DASH_counter,(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state) + (1))], 0));
});
dottask.graph.add_or_split_node = (function dottask$graph$add_or_split_node(state,node_id,position,split_QMARK_){
if(cljs.core.truth_(split_QMARK_)){
return dottask.graph.split_node(state,node_id,position);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$before)){
return dottask.graph.add_node.cljs$core$IFn$_invoke$arity$3(state,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id], null));
} else {
return dottask.graph.add_node.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id], null),cljs.core.PersistentVector.EMPTY);
}
}
});
dottask.graph.find_dep = (function dottask$graph$find_dep(state,dep){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12628_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),p1__12628_SHARP_),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),dep));
}),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state)));
});
dottask.graph.toggle_dep = (function dottask$graph$toggle_dep(state,dep){
var found = dottask.graph.find_dep(state,dep);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$deps], null),((function (found){
return (function (deps){
if(cljs.core.truth_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(dep,(2),null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (found){
return (function (p1__12629_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12629_SHARP_,found);
});})(found))
,deps),dep);
} else {
if(cljs.core.truth_(found)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (found){
return (function (p1__12630_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12630_SHARP_,found);
});})(found))
,deps);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(deps,dep);
}
}
});})(found))
);
});
dottask.graph.toggle_dep_clear = (function dottask$graph$toggle_dep_clear(state,dep){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dottask.graph.toggle_dep(state,dep),cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,null);
});
dottask.graph.on_toggle_dep_click = (function dottask$graph$on_toggle_dep_click(state,node_id,label){
var last_clicked_id = cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state);
if((last_clicked_id == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,node_id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_clicked_id,node_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,null);
} else {
return dottask.graph.toggle_dep_clear(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_clicked_id,node_id,label], null));
}
}
});
dottask.graph.node_mouseup = (function dottask$graph$node_mouseup(src_node_id,src_coords,direction,shift_key,move_key){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.graph.ui_state,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$preview_DASH_points,null);
}));

if(cljs.core.truth_(move_key)){
goog.events.unlistenByKey(move_key);
} else {
}

var node_id = dottask.core.el__GT_nodeid(document.elementFromPoint(e.clientX,e.clientY));
var cluster_id = dottask.core.el__GT_clusterid(document.elementFromPoint(e.clientX,e.clientY));
var tgt_coords = dottask.core.coords(e);
if(cljs.core.truth_((function (){var and__4659__auto__ = node_id;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_id,cluster_id);
} else {
return and__4659__auto__;
}
})())){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_id,src_node_id)){
return dottask.graph.rerender_BANG_(dottask.graph.toggle_dep_clear).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_node_id,node_id,(cljs.core.truth_(shift_key)?dottask.core.prompt("Enter link text:",""):null)], null));
} else {
return null;
}
} else {
if(cljs.core.truth_(cluster_id)){
return dottask.graph.rerender_BANG_(dottask.graph.toggle_node_cluster).call(null,src_node_id,cluster_id);
} else {
return dottask.graph.rerender_BANG_(dottask.graph.add_or_split_node).call(null,src_node_id,dottask.core.compare_coords(tgt_coords,src_coords,(direction.cljs$core$IFn$_invoke$arity$1 ? direction.cljs$core$IFn$_invoke$arity$1(dottask.core.directions) : direction.call(null,dottask.core.directions))),shift_key);

}
}
});
});
dottask.graph.cluster_mouseup = (function dottask$graph$cluster_mouseup(src_cluster_id,shift_key){
return (function (e){
var node_id = dottask.core.el__GT_nodeid(document.elementFromPoint(e.clientX,e.clientY));
var cluster_id = dottask.core.el__GT_clusterid(document.elementFromPoint(e.clientX,e.clientY));
if(cljs.core.truth_(node_id)){
return dottask.graph.rerender_BANG_(dottask.graph.toggle_node_cluster).call(null,node_id,src_cluster_id);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cluster_id,src_cluster_id)){
if(cljs.core.truth_(cluster_id)){
return dottask.graph.rerender_BANG_(dottask.graph.toggle_cluster_nesting).call(null,src_cluster_id,cluster_id);
} else {
return dottask.graph.rerender_BANG_(dottask.graph.outer_cluster_prompt).call(null,src_cluster_id);
}
} else {
return null;
}
}
});
});
dottask.graph.resize_mouse = (function dottask$graph$resize_mouse(target,move_key){
return (function (e){
var node = goog.dom.getAncestorByClass(target,"node-overlay");
var container = goog.dom.getAncestorByClass(target,"dotgraph");
var bounds = node.getBoundingClientRect();
var ctop = container.getBoundingClientRect().top;
var width = (function (){var x__5002__auto__ = (e.clientX - bounds.left);
var y__5003__auto__ = (35);
return ((x__5002__auto__ > y__5003__auto__) ? x__5002__auto__ : y__5003__auto__);
})();
var height = (function (){var x__5002__auto__ = (e.clientY - bounds.top);
var y__5003__auto__ = (35);
return ((x__5002__auto__ > y__5003__auto__) ? x__5002__auto__ : y__5003__auto__);
})();
var node_id = dottask.core.el__GT_nodeid(target);
if(cljs.core.truth_(move_key)){
goog.events.unlistenByKey(move_key);

dottask.graph.rerender_BANG_(dottask.graph.resize_node).call(null,node_id,width,height);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.graph.ui_state,((function (node,container,bounds,ctop,width,height,node_id){
return (function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$resize_DASH_points,null,cljs.core.array_seq([cljs.core.cst$kw$resize_DASH_label,""], 0));
});})(node,container,bounds,ctop,width,height,node_id))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.graph.ui_state,((function (node,container,bounds,ctop,width,height,node_id){
return (function (state){
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$x,cljs.core.cst$kw$max], null),(width + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$y,cljs.core.cst$kw$max], null),(height + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null))));
});})(node,container,bounds,ctop,width,height,node_id))
);
}
});
});
dottask.graph.graph_coords = (function dottask$graph$graph_coords(target,e){
var container = goog.dom.getAncestorByClass(target,"dotgraph");
var bounds = container.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - bounds.left),cljs.core.cst$kw$y,(e.clientY - bounds.top)], null);
});
dottask.graph.link_preview = (function dottask$graph$link_preview(target){
return (function (e){
var node_id = dottask.core.el__GT_nodeid(e.target);
var cluster_id = dottask.core.el__GT_clusterid(e.target);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.graph.ui_state,((function (node_id,cluster_id){
return (function (state){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preview_DASH_points,cljs.core.cst$kw$end], null),dottask.graph.graph_coords(target,e)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preview_DASH_points,cljs.core.cst$kw$end_DASH_node_DASH_id], null),node_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preview_DASH_points,cljs.core.cst$kw$end_DASH_cluster_DASH_id], null),cluster_id);
});})(node_id,cluster_id))
);
});
});
dottask.graph.help_mouseup = (function dottask$graph$help_mouseup(e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dottask.graph.ui_state,cljs.core.assoc,cljs.core.cst$kw$help_DASH_drag,false);

var help_node = (function (){var G__12635 = e.target;
var G__12636 = ((function (G__12635){
return (function (p1__12631_SHARP_){
var and__4659__auto__ = p1__12631_SHARP_.hasAttribute;
if(cljs.core.truth_(and__4659__auto__)){
return p1__12631_SHARP_.hasAttribute("data-help-link");
} else {
return and__4659__auto__;
}
});})(G__12635))
;
var G__12637 = true;
return goog.dom.getAncestor(G__12635,G__12636,G__12637);
})();
if(cljs.core.truth_(help_node)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dottask.graph.ui_state,cljs.core.assoc,cljs.core.cst$kw$help_DASH_visible_QMARK_,true);

return dottask.core.jump_to_anchor(help_node.getAttribute("data-help-link"));
} else {
return null;
}
});
dottask.graph.help_mousedown = (function dottask$graph$help_mousedown(e){
console.log("down");

goog.events.listenOnce(window,goog.events.EventType.MOUSEUP,dottask.graph.help_mouseup);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dottask.graph.ui_state,cljs.core.assoc,cljs.core.cst$kw$help_DASH_drag,true);
});
dottask.graph.node_mousedown = (function dottask$graph$node_mousedown(e,direction){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(0))){
var target = e.target;
var node_id = dottask.core.el__GT_nodeid(target);
var gnode = dottask.core.get_node(cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.app_state) : cljs.core.deref.call(null,dottask.graph.app_state))),node_id);
if(cljs.core.truth_((function (){var G__12654 = e.target;
var G__12655 = "node-resize";
return goog.dom.classlist.contains(G__12654,G__12655);
})())){
var move_key = (function (){var G__12656 = window;
var G__12657 = goog.events.EventType.MOUSEMOVE;
var G__12658 = dottask.graph.resize_mouse(e.target,null);
return goog.events.listen(G__12656,G__12657,G__12658);
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.graph.ui_state,((function (move_key,target,node_id,gnode){
return (function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(gnode),cljs.core.array_seq([cljs.core.cst$kw$resize_DASH_label,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(gnode,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$node,cljs.core.cst$kw$text], null))], 0));
});})(move_key,target,node_id,gnode))
);

var G__12659 = window;
var G__12660 = goog.events.EventType.MOUSEUP;
var G__12661 = dottask.graph.resize_mouse(target,move_key);
return goog.events.listenOnce(G__12659,G__12660,G__12661);
} else {
var move_key = (function (){var G__12662 = window;
var G__12663 = goog.events.EventType.MOUSEMOVE;
var G__12664 = dottask.graph.link_preview(e.target);
return goog.events.listen(G__12662,G__12663,G__12664);
})();
var start_point = dottask.graph.graph_coords(target,e);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.graph.ui_state,((function (move_key,start_point,target,node_id,gnode){
return (function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$preview_DASH_points,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$start,start_point,cljs.core.cst$kw$end,start_point,cljs.core.cst$kw$start_DASH_node_DASH_id,node_id,cljs.core.cst$kw$end_DASH_node_DASH_id,node_id], null));
});})(move_key,start_point,target,node_id,gnode))
);

var G__12665 = window;
var G__12666 = [goog.events.EventType.MOUSEUP,goog.events.EventType.TOUCHEND];
var G__12667 = dottask.graph.node_mouseup((function (){var G__12668 = e.target;
var G__12669 = "node-overlay";
return goog.dom.getAncestorByClass(G__12668,G__12669);
})().getAttribute("data-nodeid"),dottask.core.coords(e),direction,e.shiftKey,move_key);
return goog.events.listenOnce(G__12665,G__12666,G__12667);
}
} else {
return null;
}
});
dottask.graph.cluster_mousedown = (function dottask$graph$cluster_mousedown(e){
var G__12675 = window;
var G__12676 = [goog.events.EventType.MOUSEUP,goog.events.EventType.TOUCHEND];
var G__12677 = dottask.graph.cluster_mouseup((function (){var G__12678 = e.target;
var G__12679 = "cluster-overlay";
return goog.dom.getAncestorByClass(G__12678,G__12679);
})().getAttribute("data-clusterid"),e.shiftKey);
return goog.events.listenOnce(G__12675,G__12676,G__12677);
});
dottask.graph.edit_node_BANG_ = (function dottask$graph$edit_node_BANG_(node_id){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.graph.ui_state,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$edit_DASH_node_DASH_id,node_id);
}));

var textbox = document.querySelector(".edit-overlay textarea");
var G__12682_12684 = ((function (textbox){
return (function (){
return textbox.focus();
});})(textbox))
;
setTimeout(G__12682_12684);

var G__12683 = ((function (textbox){
return (function (){
return textbox.select();
});})(textbox))
;
return setTimeout(G__12683);
});
dottask.graph.edit_done_BANG_ = (function dottask$graph$edit_done_BANG_(var_args){
var args12685 = [];
var len__5729__auto___12688 = arguments.length;
var i__5730__auto___12689 = (0);
while(true){
if((i__5730__auto___12689 < len__5729__auto___12688)){
args12685.push((arguments[i__5730__auto___12689]));

var G__12690 = (i__5730__auto___12689 + (1));
i__5730__auto___12689 = G__12690;
continue;
} else {
}
break;
}

var G__12687 = args12685.length;
switch (G__12687) {
case 2:
return dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12685.length)].join('')));

}
});

dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (node_id,text){
return dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$3(node_id,text,null);
});

dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (node_id,text,select_id){
dottask.graph.edit_node_BANG_(select_id);

return dottask.graph.rerender_BANG_(dottask.graph.rename_node).call(null,node_id,text);
});

dottask.graph.edit_done_BANG_.cljs$lang$maxFixedArity = 3;
dottask.graph.add_and_name_node_BANG_ = (function dottask$graph$add_and_name_node_BANG_(state,befores,afters){
var vec__12693 = dottask.graph.add_node.cljs$core$IFn$_invoke$arity$5(state,befores,afters,"",true);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12693,(0),null);
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12693,(1),null);
dottask.graph.edit_node_BANG_(new_id);

return new_state;
});
dottask.graph.modal = (function dottask$graph$modal(is_visible_QMARK_,close_BANG_,options,contents){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (e){
if(cljs.core.truth_((function (){var G__12696 = e.target;
var G__12697 = "modal-backdrop";
return goog.dom.classlist.contains(G__12696,G__12697);
})())){
return (close_BANG_.cljs$core$IFn$_invoke$arity$0 ? close_BANG_.cljs$core$IFn$_invoke$arity$0() : close_BANG_.call(null));
} else {
return null;
}
}),cljs.core.cst$kw$class,[cljs.core.str("modal-backdrop"),cljs.core.str((cljs.core.truth_((is_visible_QMARK_.cljs$core$IFn$_invoke$arity$0 ? is_visible_QMARK_.cljs$core$IFn$_invoke$arity$0() : is_visible_QMARK_.call(null)))?"":" hidden"))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("modal "),cljs.core.str(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$2(options,""))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"x-button",cljs.core.cst$kw$on_DASH_click,close_BANG_], null),"\u00D7"], null),contents], null)], null);
});
dottask.graph.keyed_modal = (function dottask$graph$keyed_modal(state,modal_key,options,contents){
return dottask.graph.modal((function (){
var G__12699 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return (modal_key.cljs$core$IFn$_invoke$arity$1 ? modal_key.cljs$core$IFn$_invoke$arity$1(G__12699) : modal_key.call(null,G__12699));
}),dottask.core.toggler(state,modal_key),options,contents);
});
dottask.graph.text_area = (function dottask$graph$text_area(value,attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rows,(20),cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)),cljs.core.cst$kw$on_DASH_change,(function (p1__12700_SHARP_){
var G__12703 = value;
var G__12704 = p1__12700_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12703,G__12704) : cljs.core.reset_BANG_.call(null,G__12703,G__12704));
})], null),attrs], 0))], null);
});
dottask.graph.icon = (function dottask$graph$icon(var_args){
var args12705 = [];
var len__5729__auto___12708 = arguments.length;
var i__5730__auto___12709 = (0);
while(true){
if((i__5730__auto___12709 < len__5729__auto___12708)){
args12705.push((arguments[i__5730__auto___12709]));

var G__12710 = (i__5730__auto___12709 + (1));
i__5730__auto___12709 = G__12710;
continue;
} else {
}
break;
}

var G__12707 = args12705.length;
switch (G__12707) {
case 2:
return dottask.graph.icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dottask.graph.icon.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12705.length)].join('')));

}
});

dottask.graph.icon.cljs$core$IFn$_invoke$arity$2 = (function (name,size){
return dottask.graph.icon.cljs$core$IFn$_invoke$arity$3(name,size,cljs.core.PersistentArrayMap.EMPTY);
});

dottask.graph.icon.cljs$core$IFn$_invoke$arity$3 = (function (name,size,style){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,size,cljs.core.cst$kw$height,size], null),style], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#"),cljs.core.str(name)].join('')], null)], null)], null);
});

dottask.graph.icon.cljs$lang$maxFixedArity = 3;
dottask.graph.btn = (function dottask$graph$btn(opts,contents){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"button"], null),opts], 0)),contents], null);
});
dottask.graph.parse_line = (function dottask$graph$parse_line(index,line){
var clean = clojure.string.triml(line);
var indentation = (cljs.core.count(line) - cljs.core.count(clean));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$idx,index,cljs.core.cst$kw$orig,line,cljs.core.cst$kw$clean,clean,cljs.core.cst$kw$indent,indentation], null);
});
dottask.graph.add_parents = (function dottask$graph$add_parents(var_args){
var args12712 = [];
var len__5729__auto___12717 = arguments.length;
var i__5730__auto___12718 = (0);
while(true){
if((i__5730__auto___12718 < len__5729__auto___12717)){
args12712.push((arguments[i__5730__auto___12718]));

var G__12719 = (i__5730__auto___12718 + (1));
i__5730__auto___12718 = G__12719;
continue;
} else {
}
break;
}

var G__12714 = args12712.length;
switch (G__12714) {
case 1:
return dottask.graph.add_parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return dottask.graph.add_parents.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12712.length)].join('')));

}
});

dottask.graph.add_parents.cljs$core$IFn$_invoke$arity$1 = (function (parsed_lines){
var line = cljs.core.first(parsed_lines);
return dottask.graph.add_parents.cljs$core$IFn$_invoke$arity$3(cljs.core.rest(parsed_lines),cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(line),cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(line)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null));
});

dottask.graph.add_parents.cljs$core$IFn$_invoke$arity$3 = (function (parsed_lines,indent_parents,result){
if(cljs.core.empty_QMARK_(parsed_lines)){
return result;
} else {
var line = cljs.core.first(parsed_lines);
var indent = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(line);
var parent = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (line,indent){
return (function (p__12715){
var vec__12716 = p__12715;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12716,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12716,(1),null);
return (k < indent);
});})(line,indent))
,indent_parents)));
return dottask.graph.add_parents.cljs$core$IFn$_invoke$arity$3(cljs.core.rest(parsed_lines),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(indent_parents,indent,cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(line)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(line,cljs.core.cst$kw$parent,parent)));
}
});

dottask.graph.add_parents.cljs$lang$maxFixedArity = 3;
dottask.graph.mark_parents = (function dottask$graph$mark_parents(parsed){
var pars = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parent,parsed));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pars){
return (function (line){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(line,cljs.core.cst$kw$is_DASH_parent_QMARK_,cljs.core.contains_QMARK_(pars,cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(line)));
});})(pars))
,parsed);
});
dottask.graph.parse_bulk_add = (function dottask$graph$parse_bulk_add(text){
var lines = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,clojure.string.split_lines(text));
var parsed = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(dottask.graph.parse_line,lines);
return dottask.graph.mark_parents(dottask.graph.add_parents.cljs$core$IFn$_invoke$arity$1(parsed));
});
dottask.graph.add_lines = (function dottask$graph$add_lines(var_args){
var args12721 = [];
var len__5729__auto___12725 = arguments.length;
var i__5730__auto___12726 = (0);
while(true){
if((i__5730__auto___12726 < len__5729__auto___12725)){
args12721.push((arguments[i__5730__auto___12726]));

var G__12727 = (i__5730__auto___12726 + (1));
i__5730__auto___12726 = G__12727;
continue;
} else {
}
break;
}

var G__12723 = args12721.length;
switch (G__12723) {
case 3:
return dottask.graph.add_lines.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dottask.graph.add_lines.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12721.length)].join('')));

}
});

dottask.graph.add_lines.cljs$core$IFn$_invoke$arity$3 = (function (state,lines,mode){
return dottask.graph.add_lines.cljs$core$IFn$_invoke$arity$4(state,lines,mode,cljs.core.PersistentArrayMap.EMPTY);
});

dottask.graph.add_lines.cljs$core$IFn$_invoke$arity$4 = (function (state,lines,mode,id_lookup){
var line = cljs.core.first(lines);
if((line == null)){
return state;
} else {
var text = cljs.core.cst$kw$clean.cljs$core$IFn$_invoke$arity$1(line);
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_lookup,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(line));
var vec__12724 = (cljs.core.truth_((function (){var and__4659__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"cluster");
if(and__4659__auto__){
return cljs.core.cst$kw$is_DASH_parent_QMARK_.cljs$core$IFn$_invoke$arity$1(line);
} else {
return and__4659__auto__;
}
})())?dottask.graph.add_cluster.cljs$core$IFn$_invoke$arity$4(state,text,cljs.core.PersistentVector.EMPTY,true):dottask.graph.add_node.cljs$core$IFn$_invoke$arity$5(state,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,text,true));
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12724,(0),null);
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12724,(1),null);
var final_state = (cljs.core.truth_((function (){var and__4659__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"cluster");
if(and__4659__auto__){
return parent_id;
} else {
return and__4659__auto__;
}
})())?(cljs.core.truth_(cljs.core.cst$kw$is_DASH_parent_QMARK_.cljs$core$IFn$_invoke$arity$1(line))?dottask.graph.toggle_cluster_nesting(new_state,new_id,parent_id):dottask.graph.recluster_node(new_state,new_id,parent_id)):(cljs.core.truth_((function (){var and__4659__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"link");
if(and__4659__auto__){
return parent_id;
} else {
return and__4659__auto__;
}
})())?dottask.graph.toggle_dep(new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,new_id], null)):new_state
));
return dottask.graph.add_lines.cljs$core$IFn$_invoke$arity$4(final_state,cljs.core.rest(lines),mode,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(id_lookup,cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(line),new_id));
}
});

dottask.graph.add_lines.cljs$lang$maxFixedArity = 4;
dottask.graph.bulk_add_modal = (function dottask$graph$bulk_add_modal(){
var bulk_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var mode = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return ((function (bulk_text,mode){
return (function (){
return dottask.graph.keyed_modal(dottask.graph.ui_state,cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bulk-modal"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"modal-title"], null),"Bulk Add"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Add a line of text for each node you want created ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.a_link,"bulk-add","help",((function (bulk_text,mode){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dottask.graph.ui_state,cljs.core.assoc,cljs.core.cst$kw$help_DASH_visible_QMARK_,true);
});})(bulk_text,mode))
], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mode) : cljs.core.deref.call(null,mode)),cljs.core.cst$kw$on_DASH_change,((function (bulk_text,mode){
return (function (p1__12729_SHARP_){
var G__12732 = mode;
var G__12733 = p1__12729_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12732,G__12733) : cljs.core.reset_BANG_.call(null,G__12732,G__12733));
});})(bulk_text,mode))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"ignore"], null),"ignore"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"link"], null),"link"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"cluster"], null),"cluster"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.text_area,bulk_text,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"modal-buttons"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$float,"right"], null),cljs.core.cst$kw$on_DASH_click,((function (bulk_text,mode){
return (function (){
var parsed = dottask.graph.parse_bulk_add((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bulk_text) : cljs.core.deref.call(null,bulk_text)));
dottask.core.toggler(dottask.graph.ui_state,cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_).call(null);

return dottask.graph.rerender_BANG_(((function (parsed,bulk_text,mode){
return (function (state){
return dottask.graph.add_lines.cljs$core$IFn$_invoke$arity$3(state,parsed,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mode) : cljs.core.deref.call(null,mode)));
});})(parsed,bulk_text,mode))
).call(null);
});})(bulk_text,mode))
], null),"Add nodes"], null)], null)], null));
});
;})(bulk_text,mode))
});
dottask.graph.graph = (function dottask$graph$graph(state){
var vec__12745 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,cljs.core.re_find(/translate\((\d+) (\d+)\)/,cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(state)));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12745,(0),null);
var x_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12745,(1),null);
var y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12745,(2),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$help_DASH_drag.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state))))?" help-drag":null),cljs.core.cst$kw$on_DASH_key_DASH_press,((function (vec__12745,_,x_offset,y_offset){
return (function (p1__12734_SHARP_){
return console.log(p1__12734_SHARP_);
});})(vec__12745,_,x_offset,y_offset))
], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"button-bar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.btn,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Add node",cljs.core.cst$kw$data_DASH_help_DASH_link,"add-card",cljs.core.cst$kw$on_DASH_click,((function (vec__12745,_,x_offset,y_offset){
return (function (){
return dottask.graph.rerender_BANG_(dottask.graph.add_node).call(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});})(vec__12745,_,x_offset,y_offset))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.icon,"plus","30px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.btn,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Bulk add",cljs.core.cst$kw$data_DASH_help_DASH_link,"bulk-add",cljs.core.cst$kw$on_DASH_click,dottask.core.toggler(dottask.graph.ui_state,cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.icon,"list-alt","30px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.btn,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Delete all",cljs.core.cst$kw$data_DASH_help_DASH_link,"delete-all",cljs.core.cst$kw$on_DASH_click,((function (vec__12745,_,x_offset,y_offset){
return (function (){
return dottask.graph.rerender_BANG_(dottask.graph.delete_all).call(null);
});})(vec__12745,_,x_offset,y_offset))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.icon,"trash","30px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.btn,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Save",cljs.core.cst$kw$data_DASH_help_DASH_link,"saving",cljs.core.cst$kw$on_DASH_click,((function (vec__12745,_,x_offset,y_offset){
return (function (){
return dottask.graph.save_hash(state);
});})(vec__12745,_,x_offset,y_offset))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.icon,"save","30px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.btn,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Undo",cljs.core.cst$kw$data_DASH_help_DASH_link,"undo-button",cljs.core.cst$kw$on_DASH_click,historian.core.undo_BANG_,cljs.core.cst$kw$style,(cljs.core.truth_(historian.core.can_undo_QMARK_())?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cursor,"default",cljs.core.cst$kw$opacity,"0.3"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.icon,"undo","30px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.btn,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Redo",cljs.core.cst$kw$data_DASH_help_DASH_link,"undo-button",cljs.core.cst$kw$on_DASH_click,historian.core.redo_BANG_,cljs.core.cst$kw$style,(cljs.core.truth_(historian.core.can_redo_QMARK_())?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cursor,"default",cljs.core.cst$kw$opacity,"0.3"], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.icon,"undo","30px",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(-1, 1)"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Change arrow direction",cljs.core.cst$kw$class,"direction-button",cljs.core.cst$kw$data_DASH_help_DASH_link,"arrow-dir"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"hidden-select",cljs.core.cst$kw$value,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state).call(null,dottask.core.directions)),cljs.core.cst$kw$on_DASH_change,((function (vec__12745,_,x_offset,y_offset){
return (function (p1__12735_SHARP_){
return dottask.graph.rerender_BANG_(dottask.graph.set_direction).call(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__12735_SHARP_.target.value));
});})(vec__12745,_,x_offset,y_offset))
], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12745,_,x_offset,y_offset){
return (function (p__12746){
var vec__12747 = p__12746;
var dirkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12747,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12747,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,dirkey,cljs.core.cst$kw$value,dirkey,cljs.core.cst$kw$on_DASH_click,((function (vec__12747,dirkey,dir,vec__12745,_,x_offset,y_offset){
return (function (){
return dottask.graph.rerender_BANG_(dottask.graph.set_direction).call(null,dirkey);
});})(vec__12747,dirkey,dir,vec__12745,_,x_offset,y_offset))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.icon,"plus","16px"], null),cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(dir)], null);
});})(vec__12745,_,x_offset,y_offset))
,dottask.core.directions)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.icon,"arrow-circle-up","30px",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,[cljs.core.str("rotate("),cljs.core.str(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state).call(null,dottask.core.directions))),cljs.core.str(")")].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.btn,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Export to dot format",cljs.core.cst$kw$data_DASH_help_DASH_link,"export-dot",cljs.core.cst$kw$on_DASH_click,((function (vec__12745,_,x_offset,y_offset){
return (function (){
var w = window.open();
return w.document.write([cljs.core.str("<pre>"),cljs.core.str(dottask.core.hesc(dottask.graph.graph__GT_dot(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state).call(null,dottask.core.directions),true))),cljs.core.str("</pre>")].join(''));
});})(vec__12745,_,x_offset,y_offset))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.icon,"file-code","30px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.btn,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Help. Try dragging from me to highlighted elements!",cljs.core.cst$kw$on_DASH_mouse_DASH_down,dottask.graph.help_mousedown,cljs.core.cst$kw$on_DASH_click,dottask.core.toggler(dottask.graph.ui_state,cljs.core.cst$kw$help_DASH_visible_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.icon,"question","30px"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str("help-window"),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$help_DASH_visible_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state))))?null:" hidden"))].join(''),cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$box_DASH_shadow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$padding,cljs.core.cst$kw$right,cljs.core.cst$kw$position,cljs.core.cst$kw$border,cljs.core.cst$kw$height],["0 0 8px 2px #666","#f6f6f6","35%","99999","10px","0px","fixed","1px solid #666","100%"])], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$text_DASH_align,"right",cljs.core.cst$kw$padding_DASH_right,"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"./help.html",cljs.core.cst$kw$target,"_blank",cljs.core.cst$kw$on_DASH_click,dottask.core.toggler(dottask.graph.ui_state,cljs.core.cst$kw$help_DASH_visible_QMARK_)], null),"Pop out"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"javascript:",cljs.core.cst$kw$on_DASH_click,dottask.core.toggler(dottask.graph.ui_state,cljs.core.cst$kw$help_DASH_visible_QMARK_)], null),"Close"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$overflow_DASH_y,"auto",cljs.core.cst$kw$height,"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.help.page,dottask.help.dottask_help], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.bulk_add_modal], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("dotgraph"),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$edit_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state))))?" editing":null))].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"graph-overlay"], null),(cljs.core.truth_(cljs.core.cst$kw$resize_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state))))?(function (){var points = cljs.core.cst$kw$resize_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state)));
var x = (x_offset + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)));
var y = (y_offset + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)));
var width = dottask.core.width(points);
var height = dottask.core.height(points);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"resize-overlay",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$left,[cljs.core.str(x),cljs.core.str("px")].join(''),cljs.core.cst$kw$top,[cljs.core.str(y),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,[cljs.core.str(width),cljs.core.str("px")].join(''),cljs.core.cst$kw$height,[cljs.core.str(height),cljs.core.str("px")].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"task-text"], null),cljs.core.cst$kw$resize_DASH_label.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state)))], null)], null);
})():null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12745,_,x_offset,y_offset){
return (function (node){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$class,[cljs.core.str("node-overlay"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state)))?" selected":null)),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$cluster.cljs$core$IFn$_invoke$arity$1(node))?" cluster-node":null))].join(''),cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(cljs.core.cst$kw$cluster.cljs$core$IFn$_invoke$arity$1(node))?((function (vec__12745,_,x_offset,y_offset){
return (function (){
return dottask.graph.rerender_BANG_(((function (vec__12745,_,x_offset,y_offset){
return (function (state__$1){
return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$collapsed], null),false);
});})(vec__12745,_,x_offset,y_offset))
).call(null);
});})(vec__12745,_,x_offset,y_offset))
:null),cljs.core.cst$kw$on_DASH_double_DASH_click,((function (vec__12745,_,x_offset,y_offset){
return (function (){
return dottask.graph.rerender_BANG_(dottask.graph.add_cluster).call(null,dottask.core.prompt("Enter title for box:",""),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)], null));
});})(vec__12745,_,x_offset,y_offset))
,cljs.core.cst$kw$data_DASH_nodeid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$on_DASH_mouse_DASH_down,(cljs.core.truth_(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node))?((function (vec__12745,_,x_offset,y_offset){
return (function (p1__12736_SHARP_){
return dottask.graph.node_mousedown(p1__12736_SHARP_,cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state));
});})(vec__12745,_,x_offset,y_offset))
:null),cljs.core.cst$kw$on_DASH_touch_DASH_start,(cljs.core.truth_(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node))?((function (vec__12745,_,x_offset,y_offset){
return (function (p1__12737_SHARP_){
return dottask.graph.node_mousedown(p1__12737_SHARP_,cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state));
});})(vec__12745,_,x_offset,y_offset))
:null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$left,[cljs.core.str((x_offset + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$top,[cljs.core.str((y_offset + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,[cljs.core.str((dottask.core.get_node_dim(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$width) * dottask.graph.ppi)),cljs.core.str("px")].join(''),cljs.core.cst$kw$height,[cljs.core.str((dottask.core.get_node_dim(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$height) * dottask.graph.ppi)),cljs.core.str("px")].join(''),cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node),"")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"node-sidebar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"delete",cljs.core.cst$kw$title,"Delete",cljs.core.cst$kw$data_DASH_help_DASH_link,"delete-card",cljs.core.cst$kw$on_DASH_click,((function (vec__12745,_,x_offset,y_offset){
return (function (){
if(cljs.core.truth_(cljs.core.cst$kw$cluster.cljs$core$IFn$_invoke$arity$1(node))){
return dottask.graph.rerender_BANG_(dottask.graph.delete_cluster).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),true);
} else {
return dottask.graph.rerender_BANG_(dottask.graph.delete_node).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node));
}
});})(vec__12745,_,x_offset,y_offset))
], null),"\u00D7"], null),(cljs.core.truth_(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"color-picker",cljs.core.cst$kw$data_DASH_help_DASH_link,"card-color"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12745,_,x_offset,y_offset){
return (function (color){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(color)),cljs.core.str(" (shortcut "),cljs.core.str(cljs.core.cst$kw$shortcut.cljs$core$IFn$_invoke$arity$1(color)),cljs.core.str(")")].join(''),cljs.core.cst$kw$class,"color-swatch",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$hex.cljs$core$IFn$_invoke$arity$1(color)], null),cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(color),cljs.core.cst$kw$on_DASH_click,((function (vec__12745,_,x_offset,y_offset){
return (function (){
return dottask.graph.rerender_BANG_(dottask.graph.recolor_node).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$hex.cljs$core$IFn$_invoke$arity$1(color));
});})(vec__12745,_,x_offset,y_offset))
], null)], null);
});})(vec__12745,_,x_offset,y_offset))
,dottask.core.colors)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"task-text",cljs.core.cst$kw$data_DASH_help_DASH_link,"card-text",cljs.core.cst$kw$title,"Click to Change",cljs.core.cst$kw$on_DASH_click,((function (vec__12745,_,x_offset,y_offset){
return (function (e){
dottask.graph.edit_node_BANG_(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node));

return false;
});})(vec__12745,_,x_offset,y_offset))
], null),(function (){var or__4671__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$node,cljs.core.cst$kw$text], null));
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cluster,cljs.core.cst$kw$text], null));
}
})()], null),(cljs.core.truth_(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"draggable node-resize",cljs.core.cst$kw$data_DASH_help_DASH_link,"card-resize"], null),""], null):null)], null);
});})(vec__12745,_,x_offset,y_offset))
,cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12745,_,x_offset,y_offset){
return (function (cluster){
var top = (((1) + y_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cluster,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)));
var left = (((1) + x_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cluster,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)));
var right = (((-1) + x_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cluster,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$max], null)));
var width = (right - left);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$class,"cluster-overlay",cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster),cljs.core.cst$kw$data_DASH_clusterid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster),cljs.core.cst$kw$on_DASH_mouse_DASH_down,dottask.graph.cluster_mousedown,cljs.core.cst$kw$on_DASH_touch_DASH_start,dottask.graph.cluster_mousedown,cljs.core.cst$kw$on_DASH_click,((function (top,left,right,width,vec__12745,_,x_offset,y_offset){
return (function (){
return dottask.graph.rerender_BANG_(dottask.graph.rename_cluster_prompt).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster));
});})(top,left,right,width,vec__12745,_,x_offset,y_offset))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$left,[cljs.core.str(left),cljs.core.str("px")].join(''),cljs.core.cst$kw$top,[cljs.core.str(top),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,[cljs.core.str(width),cljs.core.str("px")].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"collapse",cljs.core.cst$kw$title,"Collapse",cljs.core.cst$kw$on_DASH_click,((function (top,left,right,width,vec__12745,_,x_offset,y_offset){
return (function (e){
dottask.graph.rerender_BANG_(((function (top,left,right,width,vec__12745,_,x_offset,y_offset){
return (function (state__$1){
return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster),cljs.core.cst$kw$collapsed], null),true);
});})(top,left,right,width,vec__12745,_,x_offset,y_offset))
).call(null);

return false;
});})(top,left,right,width,vec__12745,_,x_offset,y_offset))
], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"delete",cljs.core.cst$kw$title,"Delete",cljs.core.cst$kw$on_DASH_click,((function (top,left,right,width,vec__12745,_,x_offset,y_offset){
return (function (e){
dottask.graph.rerender_BANG_(dottask.graph.delete_cluster).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster));

return false;
});})(top,left,right,width,vec__12745,_,x_offset,y_offset))
], null),"\u00D7"], null),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster)))], null);
});})(vec__12745,_,x_offset,y_offset))
,cljs.core.cst$kw$gclusters.cljs$core$IFn$_invoke$arity$1(state))], null),(cljs.core.truth_(cljs.core.cst$kw$preview_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state))))?(function (){var map__12748 = cljs.core.cst$kw$preview_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state)));
var map__12748__$1 = ((((!((map__12748 == null)))?((((map__12748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12748):map__12748);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12748__$1,cljs.core.cst$kw$end);
var start_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12748__$1,cljs.core.cst$kw$start_DASH_node_DASH_id);
var end_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12748__$1,cljs.core.cst$kw$end_DASH_node_DASH_id);
var end_cluster_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12748__$1,cljs.core.cst$kw$end_DASH_cluster_DASH_id);
var start_node = dottask.core.get_node(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),start_id);
var icon = (function (){var or__4671__auto__ = (cljs.core.truth_((function (){var and__4659__auto__ = end_id;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(end_id,start_id);
} else {
return and__4659__auto__;
}
})())?(cljs.core.truth_(dottask.graph.find_dep(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_id,end_id], null)))?"#minus":"#plus"):null);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
if(cljs.core.truth_(end_cluster_id)){
if(cljs.core.truth_(dottask.graph.inside_cluster_QMARK_(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),start_node,end_cluster_id))){
return "#minus";
} else {
return "#plus";
}
} else {
return null;
}
}
})();
if(cljs.core.truth_(icon)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"link-preview-icon",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,[cljs.core.str((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(end) - (5))),cljs.core.str("px")].join(''),cljs.core.cst$kw$left,[cljs.core.str(((13) + cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(end))),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,"18px",cljs.core.cst$kw$height,"18px",cljs.core.cst$kw$fill,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(icon,"#plus"))?"green":"red")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#plus",cljs.core.cst$kw$style,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(icon,"#plus"))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null):cljs.core.PersistentArrayMap.EMPTY)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#minus",cljs.core.cst$kw$style,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(icon,"#minus"))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null):cljs.core.PersistentArrayMap.EMPTY)], null)], null)], null);
} else {
return null;
}
})():null),(cljs.core.truth_(cljs.core.cst$kw$preview_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"link-preview"], null),(function (){var points = cljs.core.cst$kw$preview_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state)));
var map__12750 = cljs.core.cst$kw$preview_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state)));
var map__12750__$1 = ((((!((map__12750 == null)))?((((map__12750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12750):map__12750);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12750__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12750__$1,cljs.core.cst$kw$end);
var start_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12750__$1,cljs.core.cst$kw$start_DASH_node_DASH_id);
var end_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12750__$1,cljs.core.cst$kw$end_DASH_node_DASH_id);
var end_cluster_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12750__$1,cljs.core.cst$kw$end_DASH_cluster_DASH_id);
var rise = (cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(end) - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(start));
var run = (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(end) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(start));
var color = "#666";
var point_backwards_QMARK_ = (cljs.core.not((function (){var or__4671__auto__ = end_id;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return end_cluster_id;
}
})())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$before,dottask.core.compare_coords(end,start,cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state).call(null,dottask.core.directions))));
var arrow_point = ((point_backwards_QMARK_)?start:end);
var angle = (dottask.core.get_angle(start,end) + ((point_backwards_QMARK_)?(180):(0)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"edge pv-line"], null),(cljs.core.truth_((function (){var or__4671__auto__ = end_id;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return end_cluster_id;
}
})())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x,(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(end) - (72)),cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(end) - (43)),cljs.core.cst$kw$width,(144),cljs.core.cst$kw$height,(86),cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$stroke_DASH_width,(2),cljs.core.cst$kw$stroke_DASH_dasharray,"8,4",cljs.core.cst$kw$fill,"none"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$x1,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(start),cljs.core.cst$kw$y1,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(start),cljs.core.cst$kw$x2,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(end),cljs.core.cst$kw$y2,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(end)], null)], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start_id,end_id))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fill,color,cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$points,dottask.core.polygon_points.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(arrow_point),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(arrow_point)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-10),-3.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(7)], null)], null)),cljs.core.cst$kw$transform,[cljs.core.str("rotate("),cljs.core.str(angle),cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(arrow_point)),cljs.core.str(" "),cljs.core.str(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(arrow_point)),cljs.core.str(")")].join('')], null)], null):null)], null);
})()], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(state)], null)], null)], null),(function (){var edit_id = cljs.core.cst$kw$edit_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.ui_state) : cljs.core.deref.call(null,dottask.graph.ui_state)));
var gnode = dottask.core.get_node(cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1(state),edit_id);
var node_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(gnode)));
var width = dottask.core.width(cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(gnode));
var height = dottask.core.height(cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(gnode));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"edit-overlay",cljs.core.cst$kw$on_DASH_click,((function (edit_id,gnode,node_text,width,height,vec__12745,_,x_offset,y_offset){
return (function (e){
return dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$2(edit_id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(node_text) : cljs.core.deref.call(null,node_text)));
});})(edit_id,gnode,node_text,width,height,vec__12745,_,x_offset,y_offset))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.text_area,node_text,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_click,((function (edit_id,gnode,node_text,width,height,vec__12745,_,x_offset,y_offset){
return (function (e){
return false;
});})(edit_id,gnode,node_text,width,height,vec__12745,_,x_offset,y_offset))
,cljs.core.cst$kw$on_DASH_key_DASH_down,((function (edit_id,gnode,node_text,width,height,vec__12745,_,x_offset,y_offset){
return (function (e){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(27),null,(13),null], null), null),e.which)){
return dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$2(edit_id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(node_text) : cljs.core.deref.call(null,node_text)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),e.which)){
dottask.graph.edit_done_BANG_.cljs$core$IFn$_invoke$arity$3(edit_id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(node_text) : cljs.core.deref.call(null,node_text)),dottask.graph.get_next_node_id(state,(cljs.core.truth_(e.shiftKey)?(-1):(1)),edit_id));

return false;
} else {
return null;
}
}
});})(edit_id,gnode,node_text,width,height,vec__12745,_,x_offset,y_offset))
,cljs.core.cst$kw$rows,(20),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$top,[cljs.core.str((((8) + y_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(gnode,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$left,[cljs.core.str((((8) + x_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(gnode,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,[cljs.core.str((width - (20))),cljs.core.str("px")].join(''),cljs.core.cst$kw$height,[cljs.core.str((height - (22))),cljs.core.str("px")].join('')], null)], null)], null)], null);
})()], null)], null);
});
React.initializeTouchEvents(true);
document.onkeydown = (function dottask$graph$on_key_press(evt){
var shift = evt.shiftKey;
var selected = cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.app_state) : cljs.core.deref.call(null,dottask.graph.app_state)));
var keycode = evt.which;
var keychar = clojure.string.lower_case(cljs.core.char$(keycode));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dottask.core.color_keycode_lookup,keychar);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.body,evt.target)){
var G__12755_12758 = keycode;
switch (G__12755_12758) {
case (27):
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dottask.graph.app_state,cljs.core.assoc,cljs.core.cst$kw$selected_DASH_node_DASH_id,null);

break;
case (37):
if(cljs.core.truth_(shift)){
historian.core.undo_BANG_();
} else {
}

break;
case (39):
if(cljs.core.truth_(shift)){
historian.core.redo_BANG_();
} else {
}

break;
case (68):
dottask.graph.rerender_BANG_(dottask.graph.delete_node).call(null,selected);

break;
case (69):
dottask.graph.edit_node_BANG_(selected);

break;
case (73):
dottask.graph.rerender_BANG_(dottask.graph.add_cluster).call(null,dottask.core.prompt("Enter title for box:",""),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected], null));

break;
case (74):
var _STAR_record_active_STAR_12756_12760 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{dottask.graph.rerender_BANG_(dottask.graph.select_next_node).call(null,(1));
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_12756_12760;
}
break;
case (75):
var _STAR_record_active_STAR_12757_12761 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{dottask.graph.rerender_BANG_(dottask.graph.select_next_node).call(null,(-1));
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_12757_12761;
}
break;
case (78):
dottask.graph.rerender_BANG_(dottask.graph.add_node).call(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,dottask.core.prompt("Enter title for node:",""));

break;
case (188):
if(cljs.core.truth_(shift)){
dottask.graph.rerender_BANG_(dottask.graph.add_and_name_node_BANG_).call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected], null));
} else {
}

break;
case (190):
if(cljs.core.truth_(shift)){
dottask.graph.rerender_BANG_(dottask.graph.add_and_name_node_BANG_).call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected], null),cljs.core.PersistentVector.EMPTY);
} else {
}

break;
case (189):
dottask.graph.rerender_BANG_(dottask.graph.on_toggle_dep_click).call(null,selected,(cljs.core.truth_(shift)?dottask.core.prompt("Enter link text:",""):null));

break;
default:

}

if(cljs.core.truth_(color)){
return dottask.graph.rerender_BANG_(dottask.graph.recolor_node).call(null,selected,cljs.core.cst$kw$hex.cljs$core$IFn$_invoke$arity$1(color));
} else {
return null;
}
} else {
return null;
}
});
dottask.graph.render_BANG_ = (function dottask$graph$render_BANG_(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.graph.graph,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.graph.app_state) : cljs.core.deref.call(null,dottask.graph.app_state))], null),document.getElementById("app"));
});
if(typeof dottask.graph.on_page_load !== 'undefined'){
} else {
dottask.graph.on_page_load = (function (){
devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$sanity_DASH_hints], 0));

devtools.core.install_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.graph.app_state,dottask.graph.load_hash);
})()
;
}
cljs.core.add_watch(dottask.graph.app_state,cljs.core.cst$kw$on_DASH_change,(function (_,___$1,___$2,___$3){
return dottask.graph.render_BANG_();
}));
cljs.core.add_watch(dottask.graph.ui_state,cljs.core.cst$kw$on_DASH_change,(function (_,___$1,___$2,___$3){
return dottask.graph.render_BANG_();
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.graph.app_state,dottask.graph.update_state);
historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.graph.app_state,cljs.core.cst$kw$app_DASH_state);
