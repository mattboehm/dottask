// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('dottask.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('reagent.core');
goog.require('tubax.core');
goog.require('goog.events.EventType');
goog.require('historian.core');
goog.require('clojure.set');
goog.require('goog.events');
goog.require('devtools.core');
goog.require('clojure.string');
goog.require('cljs.reader');
dottask.core.ppi = (72);
dottask.core.colors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"white",cljs.core.cst$kw$hex,"#F5F5F5",cljs.core.cst$kw$shortcut,"w"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"magenta",cljs.core.cst$kw$hex,"#F5CCF5",cljs.core.cst$kw$shortcut,"m"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"red",cljs.core.cst$kw$hex,"#F5CCCC",cljs.core.cst$kw$shortcut,"r"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"yellow",cljs.core.cst$kw$hex,"#F5F5CC",cljs.core.cst$kw$shortcut,"y"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"green",cljs.core.cst$kw$hex,"#CCF5CC",cljs.core.cst$kw$shortcut,"g"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"cyan",cljs.core.cst$kw$hex,"#CCF5F5",cljs.core.cst$kw$shortcut,"c"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"blue",cljs.core.cst$kw$hex,"#CCCCF5",cljs.core.cst$kw$shortcut,"b"], null)], null);
dottask.core.color_keycode_lookup = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$shortcut,dottask.core.colors),dottask.core.colors);
dottask.core.debug = (function dottask$core$debug(result){
console.log("DEBUG",result);

return result;
});
dottask.core.prompt = (function dottask$core$prompt(message,val){
return prompt(message,val);
});
dottask.core.toggler = (function dottask$core$toggler(state,key){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,key,cljs.core.not((function (){var G__12545 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__12545) : key.call(null,G__12545));
})()));
});
});
dottask.core.extent = (function dottask$core$extent(numbers){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,numbers),cljs.core.cst$kw$max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,numbers)], null);
});
dottask.core.map_vals = (function dottask$core$map_vals(func,hmap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5443__auto__ = (function dottask$core$map_vals_$_iter__12556(s__12557){
return (new cljs.core.LazySeq(null,(function (){
var s__12557__$1 = s__12557;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__12557__$1);
if(temp__4425__auto__){
var s__12557__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12557__$2)){
var c__5441__auto__ = cljs.core.chunk_first(s__12557__$2);
var size__5442__auto__ = cljs.core.count(c__5441__auto__);
var b__12559 = cljs.core.chunk_buffer(size__5442__auto__);
if((function (){var i__12558 = (0);
while(true){
if((i__12558 < size__5442__auto__)){
var vec__12564 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5441__auto__,i__12558);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12564,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12564,(1),null);
cljs.core.chunk_append(b__12559,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(v) : func.call(null,v))], null));

var G__12566 = (i__12558 + (1));
i__12558 = G__12566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12559),dottask$core$map_vals_$_iter__12556(cljs.core.chunk_rest(s__12557__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12559),null);
}
} else {
var vec__12565 = cljs.core.first(s__12557__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12565,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12565,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(v) : func.call(null,v))], null),dottask$core$map_vals_$_iter__12556(cljs.core.rest(s__12557__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__(hmap);
})());
});
dottask.core.get_node = (function dottask$core$get_node(nodes,id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12567_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12567_SHARP_));
}),nodes));
});
dottask.core.toggle_item = (function dottask$core$toggle_item(coll,item){
var len = cljs.core.count(coll);
var new_coll = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (len){
return (function (p1__12568_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12568_SHARP_,item);
});})(len))
,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,cljs.core.count(new_coll))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_coll,item);
} else {
return new_coll;
}
});
dottask.core.show_help = (function dottask$core$show_help(){
var G__12570 = [cljs.core.str("Mouse:\n"),cljs.core.str("\tclick on blank space: add card\n"),cljs.core.str("\tclick on card text: change text\n"),cljs.core.str("\tdouble-click on card: add box around card\n"),cljs.core.str("\tdrag from one card to another: link/unlink cards\n"),cljs.core.str("\tdrag from one card to empty space above/below:\n"),cljs.core.str("\t   create card linked to/from start card\n"),cljs.core.str("\t   hold down shift to 'split' the card into 2\n"),cljs.core.str("\tdrag between cards and box titles: box/unbox cards\n"),cljs.core.str("Buttons:\n"),cljs.core.str("\tx: delete card/box\n"),cljs.core.str("\thandle at bottom right: resize card\n"),cljs.core.str("Keyboard Shortcuts:\n"),cljs.core.str("\tj/k: go to previous/next card\n"),cljs.core.str("\td: delete selected card\n"),cljs.core.str("\te: edit text of selected card\n"),cljs.core.str("\ti: put selected card inside a new box\n"),cljs.core.str("\t"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$shortcut,dottask.core.colors))),cljs.core.str(": change color of selected card to "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,dottask.core.colors))),cljs.core.str("\n"),cljs.core.str("\t</>: add card before/after\n"),cljs.core.str("\t-: link/unlink cards (first on source, then target)\n"),cljs.core.str("Saving: clicking save adds all the page state to the url hash. "),cljs.core.str("This can be bookmarked so that you can reload the page later "),cljs.core.str("and pick up where you left off.")].join('');
return alert(G__12570);
});
dottask.core.get_node_dim = (function dottask$core$get_node_dim(node,dim){
var G__12572 = (((dim instanceof cljs.core.Keyword))?dim.fqn:null);
switch (G__12572) {
case "width":
var or__4671__auto__ = cljs.core.cst$kw$moving_DASH_width.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__4671__auto____$1)){
return or__4671__auto____$1;
} else {
return (2);
}
}

break;
case "height":
var or__4671__auto__ = cljs.core.cst$kw$moving_DASH_height.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__4671__auto____$1)){
return or__4671__auto____$1;
} else {
return 1.2;
}
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(dim)].join('')));

}
});
dottask.core.el__GT_nodeid = (function dottask$core$el__GT_nodeid(el){
var node = goog.dom.getAncestorByClass(el,"node-overlay");
var node_id = (cljs.core.truth_(node)?node.getAttribute("data-nodeid"):null);
return node_id;
});
dottask.core.el__GT_clusterid = (function dottask$core$el__GT_clusterid(el){
var cluster = goog.dom.getAncestorByClass(el,"cluster-overlay");
var cluster_id = (cljs.core.truth_(cluster)?cluster.getAttribute("data-clusterid"):null);
return cluster_id;
});
if(typeof dottask.core.app_state !== 'undefined'){
} else {
dottask.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$id_DASH_counter,(6),cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node1",cljs.core.cst$kw$text,"Drag things"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node2",cljs.core.cst$kw$text,"Make nodes"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node3",cljs.core.cst$kw$text,"Make links"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node4",cljs.core.cst$kw$text,"???"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node5",cljs.core.cst$kw$text,"Profit!"], null)], null),cljs.core.cst$kw$clusters,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$selected_DASH_node_DASH_id,null,cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,null,cljs.core.cst$kw$deps,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node1","node2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node1","node3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node2","node4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node3","node4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node4","node5"], null)], null),cljs.core.cst$kw$svg,"",cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_,false], null));
}
dottask.core.state_to_save = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id_DASH_counter,cljs.core.cst$kw$clusters,cljs.core.cst$kw$nodes,cljs.core.cst$kw$deps], null);
dottask.core.save_hash = (function dottask$core$save_hash(state){
return (window["location"]["hash"] = (function (){var G__12575 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(state,dottask.core.state_to_save)], 0));
return encodeURIComponent(G__12575);
})());
});
dottask.core.load_hash = (function dottask$core$load_hash(state){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([state,cljs.reader.read_string((function (){var G__12577 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest((window["location"]["hash"])));
return decodeURIComponent(G__12577);
})())], 0));
});
dottask.core.cluster__GT_dot = (function dottask$core$cluster__GT_dot(cluster_id,nodes_by_cluster_id,clusters_by_cluster_id){
return [cljs.core.str("\nsubgraph "),cljs.core.str((function (){var or__4671__auto__ = cluster_id;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return "root";
}
})()),cljs.core.str("{\n"),cljs.core.str("label=\" \";\n "),cljs.core.str("color=\"#666666\";\n "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12578_SHARP_){
return dottask$core$cluster__GT_dot(p1__12578_SHARP_,nodes_by_cluster_id,clusters_by_cluster_id);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters_by_cluster_id,cluster_id))))),cljs.core.str("\n"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(";\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes_by_cluster_id,cluster_id)))),cljs.core.str("}\n")].join('');
});
dottask.core.to_dot = (function dottask$core$to_dot(nodes,deps,clusters){
var nodes_by_cluster_id = cljs.core.group_by(cljs.core.cst$kw$cluster_DASH_id,nodes);
var clusters_by_cluster_id = cljs.core.group_by(cljs.core.cst$kw$cluster_DASH_id,cljs.core.vals(clusters));
return [cljs.core.str("digraph G {\n"),cljs.core.str("dpi=72;"),cljs.core.str("node [label=\"\" shape=\"rect\"]\n"),cljs.core.str("edge [color=\"#666666\"]\n"),cljs.core.str(dottask.core.cluster__GT_dot(null,nodes_by_cluster_id,clusters_by_cluster_id)),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (nodes_by_cluster_id,clusters_by_cluster_id){
return (function (p1__12579_SHARP_){
return [cljs.core.str(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12579_SHARP_)),cljs.core.str("[height=\""),cljs.core.str(dottask.core.get_node_dim(p1__12579_SHARP_,cljs.core.cst$kw$height)),cljs.core.str("\" width=\""),cljs.core.str(dottask.core.get_node_dim(p1__12579_SHARP_,cljs.core.cst$kw$width)),cljs.core.str("\"];")].join('');
});})(nodes_by_cluster_id,clusters_by_cluster_id))
,nodes),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (nodes_by_cluster_id,clusters_by_cluster_id){
return (function (p1__12580_SHARP_){
return [cljs.core.str(cljs.core.first(p1__12580_SHARP_)),cljs.core.str("->"),cljs.core.str(cljs.core.second(p1__12580_SHARP_)),cljs.core.str(";")].join('');
});})(nodes_by_cluster_id,clusters_by_cluster_id))
,deps))))),cljs.core.str("}")].join('');
});
dottask.core.get_points = (function dottask$core$get_points(cljdotnode){
var points = cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljdotnode))));
return cljs.core.zipmap(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(dottask.core.extent,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (points){
return (function (p1__12582_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,p1__12582_SHARP_);
});})(points))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (points){
return (function (p1__12581_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__12581_SHARP_,/,/);
});})(points))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(points,/ /))))));
});
dottask.core.get_cljdot_id = (function dottask$core$get_cljdot_id(item){
return cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(item))));
});
dottask.core.get_gdata = (function dottask$core$get_gdata(cljdot){
cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljdot)));

var items = cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljdot)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (items){
return (function (node){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,dottask.core.get_cljdot_id(node),cljs.core.cst$kw$points,dottask.core.get_points(node)], null);
});})(items))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (items){
return (function (p1__12583_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(p1__12583_SHARP_)),"node");
});})(items))
,items)),cljs.core.cst$kw$clusters,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (items){
return (function (cluster){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,dottask.core.get_cljdot_id(cluster),cljs.core.cst$kw$points,dottask.core.get_points(cluster)], null);
});})(items))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (items){
return (function (p1__12584_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(p1__12584_SHARP_)),"cluster");
});})(items))
,items))], null);
});
dottask.core.dot__GT_svg = (function dottask$core$dot__GT_svg(dot){
return clojure.string.replace(Viz(dot,"svg"),/pt\"/,"px\"");
});
dottask.core.update_state = (function dottask$core$update_state(state){
var dot = dottask.core.to_dot(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state));
var same_graph = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dot,cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(state));
var svg = ((same_graph)?cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(state):dottask.core.dot__GT_svg(dot));
var gdata = ((same_graph)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$clusters,cljs.core.cst$kw$gclusters.cljs$core$IFn$_invoke$arity$1(state)], null):dottask.core.get_gdata(tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$1(svg)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$dot,dot,cljs.core.array_seq([cljs.core.cst$kw$svg,svg,cljs.core.cst$kw$gnodes,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (dot,same_graph,svg,gdata){
return (function (p1__12585_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12585_SHARP_,cljs.core.cst$kw$node,dottask.core.get_node(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12585_SHARP_)));
});})(dot,same_graph,svg,gdata))
,cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(gdata)),cljs.core.cst$kw$gclusters,cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(gdata)], 0));
});
dottask.core.rerender_BANG_ = (function dottask$core$rerender_BANG_(updater){
return (function() { 
var G__12586__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,dottask.core.app_state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(dottask.core.update_state,updater)),args);
};
var G__12586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12587__i = 0, G__12587__a = new Array(arguments.length -  0);
while (G__12587__i < G__12587__a.length) {G__12587__a[G__12587__i] = arguments[G__12587__i + 0]; ++G__12587__i;}
  args = new cljs.core.IndexedSeq(G__12587__a,0);
} 
return G__12586__delegate.call(this,args);};
G__12586.cljs$lang$maxFixedArity = 0;
G__12586.cljs$lang$applyTo = (function (arglist__12588){
var args = cljs.core.seq(arglist__12588);
return G__12586__delegate(args);
});
G__12586.cljs$core$IFn$_invoke$arity$variadic = G__12586__delegate;
return G__12586;
})()
;
});
dottask.core.update_node = (function dottask$core$update_node(state,node_id,func){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$nodes,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),node_id)){
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(node) : func.call(null,node));
} else {
return node;
}
}),cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state)));
});
dottask.core.rename_node = (function dottask$core$rename_node(state,node_id,text){
return dottask.core.update_node(state,node_id,(function (p1__12589_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12589_SHARP_,cljs.core.cst$kw$text,text);
}));
});
dottask.core.resize_node = (function dottask$core$resize_node(state,node_id,width,height,evt_type){
var height_pt = (height / dottask.core.ppi);
var width_pt = (width / dottask.core.ppi);
var w = (function (){var G__12593 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mousemove,cljs.core.cst$kw$moving_DASH_width,cljs.core.cst$kw$mouseup,cljs.core.cst$kw$width], null);
return (evt_type.cljs$core$IFn$_invoke$arity$1 ? evt_type.cljs$core$IFn$_invoke$arity$1(G__12593) : evt_type.call(null,G__12593));
})();
var h = (function (){var G__12594 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mousemove,cljs.core.cst$kw$moving_DASH_height,cljs.core.cst$kw$mouseup,cljs.core.cst$kw$height], null);
return (evt_type.cljs$core$IFn$_invoke$arity$1 ? evt_type.cljs$core$IFn$_invoke$arity$1(G__12594) : evt_type.call(null,G__12594));
})();
return dottask.core.update_node(state,node_id,((function (height_pt,width_pt,w,h){
return (function (p1__12590_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__12590_SHARP_,cljs.core.cst$kw$moving_DASH_width,cljs.core.array_seq([cljs.core.cst$kw$moving_DASH_height], 0)),w,width_pt,cljs.core.array_seq([h,height_pt], 0));
});})(height_pt,width_pt,w,h))
);
});
dottask.core.recolor_node = (function dottask$core$recolor_node(state,node_id,color){
return dottask.core.update_node(state,node_id,(function (p1__12595_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12595_SHARP_,cljs.core.cst$kw$color,color);
}));
});
dottask.core.recluster_node = (function dottask$core$recluster_node(state,node_id,cluster_id){
return dottask.core.update_node(state,node_id,(function (p1__12596_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12596_SHARP_,cljs.core.cst$kw$cluster_DASH_id,cluster_id);
}));
});
dottask.core.rename_prompt = (function dottask$core$rename_prompt(state,node_id){
var node = dottask.core.get_node(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),node_id);
var new_name = dottask.core.prompt("Enter new name",cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(new_name)){
return dottask.core.rename_node(state,node_id,new_name);
} else {
return state;
}
});
dottask.core.select_node = (function dottask$core$select_node(state,node_id){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$selected_DASH_node_DASH_id,node_id);
});
dottask.core.select_next_node = (function dottask$core$select_next_node(var_args){
var args12597 = [];
var len__5729__auto___12600 = arguments.length;
var i__5730__auto___12601 = (0);
while(true){
if((i__5730__auto___12601 < len__5729__auto___12600)){
args12597.push((arguments[i__5730__auto___12601]));

var G__12602 = (i__5730__auto___12601 + (1));
i__5730__auto___12601 = G__12602;
continue;
} else {
}
break;
}

var G__12599 = args12597.length;
switch (G__12599) {
case 1:
return dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12597.length)].join('')));

}
});

dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$2(state,(1));
});

dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$2 = (function (state,direction){
var gdata = cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1(state);
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
var old_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_index,cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state));
var new_index = (((cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state) == null))?(0):cljs.core.mod((old_index + direction),cljs.core.count(positioned_nodes)));
var new_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(positioned_nodes,new_index);
var new_node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_node,(2));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$selected_DASH_node_DASH_id,new_node_id);
});

dottask.core.select_next_node.cljs$lang$maxFixedArity = 2;
dottask.core.delete_node = (function dottask$core$delete_node(state,id){
var new_nodes = cljs.core.filterv((function (p1__12604_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12604_SHARP_));
}),cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state));
var new_deps = cljs.core.filterv(((function (new_nodes){
return (function (dep){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,id),dep);
});})(new_nodes))
,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state));
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,new_nodes,cljs.core.array_seq([cljs.core.cst$kw$deps,new_deps], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state))){
return dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$1(new_state);
} else {
return new_state;
}
});
dottask.core.add_node = (function dottask$core$add_node(var_args){
var args12607 = [];
var len__5729__auto___12610 = arguments.length;
var i__5730__auto___12611 = (0);
while(true){
if((i__5730__auto___12611 < len__5729__auto___12610)){
args12607.push((arguments[i__5730__auto___12611]));

var G__12612 = (i__5730__auto___12611 + (1));
i__5730__auto___12611 = G__12612;
continue;
} else {
}
break;
}

var G__12609 = args12607.length;
switch (G__12609) {
case 3:
return dottask.core.add_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dottask.core.add_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12607.length)].join('')));

}
});

dottask.core.add_node.cljs$core$IFn$_invoke$arity$3 = (function (state,befores,afters){
return dottask.core.add_node.cljs$core$IFn$_invoke$arity$4(state,befores,afters,"");
});

dottask.core.add_node.cljs$core$IFn$_invoke$arity$4 = (function (state,befores,afters,text){
var new_node = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,[cljs.core.str("node"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join(''),cljs.core.cst$kw$text,text], null);
var new_nodes = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),new_node);
var all_deps = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_node,new_nodes){
return (function (p1__12605_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__12605_SHARP_,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(new_node)],null));
});})(new_node,new_nodes))
,befores),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_node,new_nodes){
return (function (p1__12606_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(new_node),p1__12606_SHARP_],null));
});})(new_node,new_nodes))
,afters)], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,new_nodes,cljs.core.array_seq([cljs.core.cst$kw$deps,all_deps,cljs.core.cst$kw$id_DASH_counter,(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state) + (1))], 0));
});

dottask.core.add_node.cljs$lang$maxFixedArity = 4;
dottask.core.inside_cluster_QMARK_ = (function dottask$core$inside_cluster_QMARK_(clusters,child,parent_id){
console.log("ddddd",clusters,child,parent_id);

if((cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(child) == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(child))){
return true;
} else {
return dottask$core$inside_cluster_QMARK_(clusters,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(child)),parent_id);

}
}
});
dottask.core.toggle_cluster_nesting = (function dottask$core$toggle_cluster_nesting(state,child_id,parent_id){
if(cljs.core.truth_(dottask.core.inside_cluster_QMARK_(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,parent_id], null)),child_id))){
return state;
} else {
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,child_id,cljs.core.cst$kw$cluster_DASH_id], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,child_id,cljs.core.cst$kw$cluster_DASH_id], null))))?null:parent_id));
}
});
dottask.core.add_cluster = (function dottask$core$add_cluster(var_args){
var args12619 = [];
var len__5729__auto___12622 = arguments.length;
var i__5730__auto___12623 = (0);
while(true){
if((i__5730__auto___12623 < len__5729__auto___12622)){
args12619.push((arguments[i__5730__auto___12623]));

var G__12624 = (i__5730__auto___12623 + (1));
i__5730__auto___12623 = G__12624;
continue;
} else {
}
break;
}

var G__12621 = args12619.length;
switch (G__12621) {
case 2:
return dottask.core.add_cluster.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dottask.core.add_cluster.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12619.length)].join('')));

}
});

dottask.core.add_cluster.cljs$core$IFn$_invoke$arity$2 = (function (state,node_ids){
return dottask.core.add_cluster.cljs$core$IFn$_invoke$arity$3(state,dottask.core.prompt("Enter a name for the box",""),node_ids);
});

dottask.core.add_cluster.cljs$core$IFn$_invoke$arity$3 = (function (state,text,node_ids){
var cluster_id = [cljs.core.str("cluster_"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join('');
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cluster_id){
return (function (p1__12617_SHARP_,p2__12618_SHARP_){
return dottask.core.recluster_node(p1__12617_SHARP_,p2__12618_SHARP_,cluster_id);
});})(cluster_id))
,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$clusters,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cluster_id,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cluster_id,cljs.core.cst$kw$text,text], null)),cljs.core.array_seq([cljs.core.cst$kw$id_DASH_counter,(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state) + (1))], 0)),node_ids);
});

dottask.core.add_cluster.cljs$lang$maxFixedArity = 3;
dottask.core.delete_cluster = (function dottask$core$delete_cluster(state,id){
var wipe_id = (function (p1__12626_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(p1__12626_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12626_SHARP_,cljs.core.cst$kw$cluster_DASH_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,id,cljs.core.cst$kw$cluster_DASH_id], null)));
} else {
return p1__12626_SHARP_;
}
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(wipe_id,cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.array_seq([cljs.core.cst$kw$clusters,dottask.core.map_vals(wipe_id,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),id))], 0));
});
dottask.core.rename_cluster = (function dottask$core$rename_cluster(state,cluster_id,name){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cluster_id,cljs.core.cst$kw$text], null),name);
});
dottask.core.rename_cluster_prompt = (function dottask$core$rename_cluster_prompt(state,cluster_id){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cluster_id], null)))){
var new_name = dottask.core.prompt("Enter new name",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cluster_id,cljs.core.cst$kw$text], null)));
if(cljs.core.truth_(new_name)){
return dottask.core.rename_cluster(state,cluster_id,new_name);
} else {
return state;
}
} else {
return state;
}
});
dottask.core.outer_cluster_prompt = (function dottask$core$outer_cluster_prompt(state,inner_cluster_id){
return dottask.core.toggle_cluster_nesting(dottask.core.add_cluster.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentVector.EMPTY),inner_cluster_id,[cljs.core.str("cluster_"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join(''));
});
dottask.core.toggle_node_cluster = (function dottask$core$toggle_node_cluster(state,node_id,cluster_id){
var new_cluster_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cluster_id,cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(dottask.core.get_node(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),node_id))))?"":cluster_id);
return dottask.core.recluster_node(state,node_id,new_cluster_id);
});
dottask.core.add_nodes = (function dottask$core$add_nodes(state,labels){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12627_SHARP_,p2__12628_SHARP_){
return dottask.core.add_node.cljs$core$IFn$_invoke$arity$4(p1__12627_SHARP_,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,p2__12628_SHARP_);
}),state,labels);
});
dottask.core.move_deps = (function dottask$core$move_deps(var_args){
var args12629 = [];
var len__5729__auto___12632 = arguments.length;
var i__5730__auto___12633 = (0);
while(true){
if((i__5730__auto___12633 < len__5729__auto___12632)){
args12629.push((arguments[i__5730__auto___12633]));

var G__12634 = (i__5730__auto___12633 + (1));
i__5730__auto___12633 = G__12634;
continue;
} else {
}
break;
}

var G__12631 = args12629.length;
switch (G__12631) {
case 4:
return dottask.core.move_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return dottask.core.move_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12629.length)].join('')));

}
});

dottask.core.move_deps.cljs$core$IFn$_invoke$arity$4 = (function (deps,old_node_id,new_node_id,dep_type){
return dottask.core.move_deps.cljs$core$IFn$_invoke$arity$5(deps,old_node_id,new_node_id,(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dep_type,cljs.core.cst$kw$before)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dep_type,cljs.core.cst$kw$both)),(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dep_type,cljs.core.cst$kw$after)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dep_type,cljs.core.cst$kw$both)));
});

dottask.core.move_deps.cljs$core$IFn$_invoke$arity$5 = (function (deps,old_node_id,new_node_id,move_befores,move_afters){
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

dottask.core.move_deps.cljs$lang$maxFixedArity = 5;
dottask.core.split_node = (function dottask$core$split_node(state,node_id,new_node_pos){
var new_node_id = [cljs.core.str("node"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join('');
var new_node = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,new_node_id,cljs.core.cst$kw$text,""], null);
var new_nodes = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),new_node);
var new_deps = dottask.core.move_deps.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),node_id,new_node_id,new_node_pos);
var final_deps = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_deps,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_node_pos,cljs.core.cst$kw$before))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_node_id,node_id], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id,new_node_id], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,new_nodes,cljs.core.array_seq([cljs.core.cst$kw$deps,final_deps,cljs.core.cst$kw$id_DASH_counter,(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state) + (1))], 0));
});
dottask.core.add_or_split_node = (function dottask$core$add_or_split_node(state,node_id,position,split_QMARK_){
if(cljs.core.truth_(split_QMARK_)){
return dottask.core.split_node(state,node_id,position);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$before)){
return dottask.core.add_node.cljs$core$IFn$_invoke$arity$3(state,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id], null));
} else {
return dottask.core.add_node.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_id], null),cljs.core.PersistentVector.EMPTY);
}
}
});
dottask.core.toggle_dep = (function dottask$core$toggle_dep(state,dep){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$deps], null),(function (p1__12636_SHARP_){
return cljs.core.vec(dottask.core.toggle_item(p1__12636_SHARP_,dep));
}));
});
dottask.core.toggle_dep_clear = (function dottask$core$toggle_dep_clear(state,dep){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dottask.core.toggle_dep(state,dep),cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,null);
});
dottask.core.on_toggle_dep_click = (function dottask$core$on_toggle_dep_click(state,node_id){
var last_clicked_id = cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state);
if((last_clicked_id == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,node_id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_clicked_id,node_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,null);
} else {
return dottask.core.toggle_dep_clear(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_clicked_id,node_id], null));
}
}
});
dottask.core.link_mouseup = (function dottask$core$link_mouseup(src_node_id,src_y,shift_key){
return (function (e){
var node_id = dottask.core.el__GT_nodeid(document.elementFromPoint(e.clientX,e.clientY));
var cluster_id = dottask.core.el__GT_clusterid(document.elementFromPoint(e.clientX,e.clientY));
if(cljs.core.truth_(node_id)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_id,src_node_id)){
return dottask.core.rerender_BANG_(dottask.core.toggle_dep_clear).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_node_id,node_id], null));
} else {
return null;
}
} else {
if(cljs.core.truth_(cluster_id)){
return dottask.core.rerender_BANG_(dottask.core.toggle_node_cluster).call(null,src_node_id,cluster_id);
} else {
return dottask.core.rerender_BANG_(dottask.core.add_or_split_node).call(null,src_node_id,(((e.clientY < src_y))?cljs.core.cst$kw$before:cljs.core.cst$kw$after),shift_key);
}
}
});
});
dottask.core.cluster_mouseup = (function dottask$core$cluster_mouseup(src_cluster_id,shift_key){
return (function (e){
var node_id = dottask.core.el__GT_nodeid(document.elementFromPoint(e.clientX,e.clientY));
var cluster_id = dottask.core.el__GT_clusterid(document.elementFromPoint(e.clientX,e.clientY));
if(cljs.core.truth_(node_id)){
return dottask.core.rerender_BANG_(dottask.core.toggle_node_cluster).call(null,node_id,src_cluster_id);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cluster_id,src_cluster_id)){
if(cljs.core.truth_(cluster_id)){
return dottask.core.rerender_BANG_(dottask.core.toggle_cluster_nesting).call(null,src_cluster_id,cluster_id);
} else {
return dottask.core.rerender_BANG_(dottask.core.outer_cluster_prompt).call(null,src_cluster_id);
}
} else {
return null;
}
}
});
});
dottask.core.resize_mouse = (function dottask$core$resize_mouse(target,evt_type,move_key){
return (function (e){
var node = goog.dom.getAncestorByClass(target,"node-overlay");
var container = goog.dom.getAncestorByClass(target,"dotgraph");
var bounds = node.getBoundingClientRect();
var ctop = container.getBoundingClientRect().top;
var width = (e.clientX - bounds.left);
var height = (e.clientY - bounds.top);
var node_id = dottask.core.el__GT_nodeid(target);
if(cljs.core.truth_((function (){var and__4659__auto__ = (width > (30));
if(and__4659__auto__){
var and__4659__auto____$1 = (height > (30));
if(and__4659__auto____$1){
return move_key;
} else {
return and__4659__auto____$1;
}
} else {
return and__4659__auto__;
}
})())){
dottask.core.rerender_BANG_(dottask.core.resize_node).call(null,node_id,width,height,evt_type);
} else {
}

if(cljs.core.truth_(move_key)){
return goog.events.unlistenByKey(move_key);
} else {
return null;
}
});
});
dottask.core.node_mousedown = (function dottask$core$node_mousedown(e){
if(cljs.core.truth_((function (){var G__12650 = e.target;
var G__12651 = "node-resize";
return goog.dom.classlist.contains(G__12650,G__12651);
})())){
var move_key = (function (){var G__12652 = window;
var G__12653 = goog.events.EventType.MOUSEMOVE;
var G__12654 = dottask.core.resize_mouse(e.target,cljs.core.cst$kw$mousemove,null);
return goog.events.listen(G__12652,G__12653,G__12654);
})();
var G__12655 = window;
var G__12656 = goog.events.EventType.MOUSEUP;
var G__12657 = dottask.core.resize_mouse(e.target,cljs.core.cst$kw$mouseup,move_key);
return goog.events.listenOnce(G__12655,G__12656,G__12657);
} else {
var G__12658 = window;
var G__12659 = [goog.events.EventType.MOUSEUP,goog.events.EventType.TOUCHEND];
var G__12660 = dottask.core.link_mouseup((function (){var G__12661 = e.target;
var G__12662 = "node-overlay";
return goog.dom.getAncestorByClass(G__12661,G__12662);
})().getAttribute("data-nodeid"),e.clientY,e.shiftKey);
return goog.events.listenOnce(G__12658,G__12659,G__12660);
}
});
dottask.core.cluster_mousedown = (function dottask$core$cluster_mousedown(e){
var G__12668 = window;
var G__12669 = [goog.events.EventType.MOUSEUP,goog.events.EventType.TOUCHEND];
var G__12670 = dottask.core.cluster_mouseup((function (){var G__12671 = e.target;
var G__12672 = "cluster-overlay";
return goog.dom.getAncestorByClass(G__12671,G__12672);
})().getAttribute("data-clusterid"),e.shiftKey);
return goog.events.listenOnce(G__12668,G__12669,G__12670);
});
dottask.core.modal = (function dottask$core$modal(is_visible_QMARK_,close_BANG_,options,contents){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (e){
if(cljs.core.truth_((function (){var G__12675 = e.target;
var G__12676 = "modal-backdrop";
return goog.dom.classlist.contains(G__12675,G__12676);
})())){
return (close_BANG_.cljs$core$IFn$_invoke$arity$0 ? close_BANG_.cljs$core$IFn$_invoke$arity$0() : close_BANG_.call(null));
} else {
return null;
}
}),cljs.core.cst$kw$class,[cljs.core.str("modal-backdrop"),cljs.core.str((cljs.core.truth_((is_visible_QMARK_.cljs$core$IFn$_invoke$arity$0 ? is_visible_QMARK_.cljs$core$IFn$_invoke$arity$0() : is_visible_QMARK_.call(null)))?"":" hidden"))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("modal "),cljs.core.str(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$2(options,""))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"x-button",cljs.core.cst$kw$on_DASH_click,close_BANG_], null),"\u00D7"], null),contents], null)], null);
});
dottask.core.keyed_modal = (function dottask$core$keyed_modal(state,modal_key,options,contents){
return dottask.core.modal((function (){
var G__12678 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return (modal_key.cljs$core$IFn$_invoke$arity$1 ? modal_key.cljs$core$IFn$_invoke$arity$1(G__12678) : modal_key.call(null,G__12678));
}),dottask.core.toggler(state,modal_key),options,contents);
});
dottask.core.textarea = (function dottask$core$textarea(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rows,(20),cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)),cljs.core.cst$kw$on_DASH_change,(function (p1__12679_SHARP_){
var G__12682 = value;
var G__12683 = p1__12679_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12682,G__12683) : cljs.core.reset_BANG_.call(null,G__12682,G__12683));
})], null)], null);
});
dottask.core.bulk_add_modal = (function dottask$core$bulk_add_modal(){
var bulk_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return dottask.core.keyed_modal(dottask.core.app_state,cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bulk-modal"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"modal-title"], null),"Bulk Add"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Add a line of text for each node you want created"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.textarea,bulk_text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"modal-buttons"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$float,"right"], null),cljs.core.cst$kw$on_DASH_click,((function (bulk_text){
return (function (){
var lines = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,clojure.string.split_lines((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bulk_text) : cljs.core.deref.call(null,bulk_text))));
console.log("fooooom",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bulk_text) : cljs.core.deref.call(null,bulk_text)),lines);

dottask.core.rerender_BANG_(dottask.core.add_nodes).call(null,lines);

return dottask.core.toggler(dottask.core.app_state,cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_).call(null);
});})(bulk_text))
], null),"Add nodes"], null)], null)], null));
});
dottask.core.graph = (function dottask$core$graph(state){
var vec__12688 = cljs.core.re_find(/translate\((\d+) (\d+)\)/,cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(state));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(0),null);
var x_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(1),null);
var y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(2),null);
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_key_DASH_press,((function (vec__12688,_,x_offset,y_offset){
return (function (p1__12684_SHARP_){
return console.log(p1__12684_SHARP_);
});})(vec__12688,_,x_offset,y_offset))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__12688,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.add_node).call(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});})(vec__12688,_,x_offset,y_offset))
], null),"Add card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,dottask.core.toggler(dottask.core.app_state,cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_)], null),"Bulk add"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__12688,_,x_offset,y_offset){
return (function (){
return dottask.core.save_hash((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.app_state) : cljs.core.deref.call(null,dottask.core.app_state)));
});})(vec__12688,_,x_offset,y_offset))
], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,historian.core.undo_BANG_], null),"Undo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,historian.core.redo_BANG_], null),"Redo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__12688,_,x_offset,y_offset){
return (function (){
return dottask.core.show_help();
});})(vec__12688,_,x_offset,y_offset))
], null),"Help"], null),dottask.core.bulk_add_modal(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"dotgraph",cljs.core.cst$kw$on_DASH_click,((function (vec__12688,_,x_offset,y_offset){
return (function (p1__12685_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12685_SHARP_.target.nodeName,"polygon")){
return dottask.core.rerender_BANG_(dottask.core.add_node).call(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});})(vec__12688,_,x_offset,y_offset))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"graph-overlay"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12688,_,x_offset,y_offset){
return (function (node){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$class,[cljs.core.str("node-overlay"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state)))?" selected":null))].join(''),cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$on_DASH_click,((function (vec__12688,_,x_offset,y_offset){
return (function (){
var _STAR_record_active_STAR_12689 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{return dottask.core.rerender_BANG_(dottask.core.select_node).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node));
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_12689;
}});})(vec__12688,_,x_offset,y_offset))
,cljs.core.cst$kw$on_DASH_double_DASH_click,((function (vec__12688,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.add_cluster).call(null,dottask.core.prompt("Enter title for box:",""),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)], null));
});})(vec__12688,_,x_offset,y_offset))
,cljs.core.cst$kw$data_DASH_nodeid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$on_DASH_mouse_DASH_down,dottask.core.node_mousedown,cljs.core.cst$kw$on_DASH_touch_DASH_start,dottask.core.node_mousedown,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$left,[cljs.core.str((parseInt(x_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$top,[cljs.core.str((parseInt(y_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,[cljs.core.str((dottask.core.get_node_dim(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$width) * dottask.core.ppi)),cljs.core.str("px")].join(''),cljs.core.cst$kw$height,[cljs.core.str((dottask.core.get_node_dim(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$height) * dottask.core.ppi)),cljs.core.str("px")].join(''),cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node),"")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"color-picker"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12688,_,x_offset,y_offset){
return (function (color){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(color)),cljs.core.str(" (shortcut "),cljs.core.str(cljs.core.cst$kw$shortcut.cljs$core$IFn$_invoke$arity$1(color)),cljs.core.str(")")].join(''),cljs.core.cst$kw$class,"color-swatch",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$hex.cljs$core$IFn$_invoke$arity$1(color)], null),cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(color),cljs.core.cst$kw$on_DASH_click,((function (vec__12688,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.recolor_node).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$hex.cljs$core$IFn$_invoke$arity$1(color));
});})(vec__12688,_,x_offset,y_offset))
], null)], null);
});})(vec__12688,_,x_offset,y_offset))
,dottask.core.colors)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"delete",cljs.core.cst$kw$title,"Delete",cljs.core.cst$kw$on_DASH_click,((function (vec__12688,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.delete_node).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node));
});})(vec__12688,_,x_offset,y_offset))
], null),"\u00D7"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"task-text",cljs.core.cst$kw$title,"Click to Change",cljs.core.cst$kw$on_DASH_click,((function (vec__12688,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.rename_prompt).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node));
});})(vec__12688,_,x_offset,y_offset))
], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$node,cljs.core.cst$kw$text], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$right,"0",cljs.core.cst$kw$bottom,"0",cljs.core.cst$kw$width,"12px",cljs.core.cst$kw$height,"12px",cljs.core.cst$kw$cursor,"nwse-resize",cljs.core.cst$kw$border_DASH_bottom,"double #888",cljs.core.cst$kw$border_DASH_right,"double #888"], null),cljs.core.cst$kw$class,"draggable node-resize"], null),""], null)], null);
});})(vec__12688,_,x_offset,y_offset))
,cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12688,_,x_offset,y_offset){
return (function (cluster){
var top = (((1) + parseInt(y_offset)) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cluster,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)));
var left = (((1) + parseInt(x_offset)) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cluster,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)));
var right = (((-1) + parseInt(x_offset)) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cluster,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$max], null)));
var width = (right - left);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$class,"cluster-overlay",cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster),cljs.core.cst$kw$data_DASH_clusterid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster),cljs.core.cst$kw$on_DASH_mouse_DASH_down,dottask.core.cluster_mousedown,cljs.core.cst$kw$on_DASH_touch_DASH_start,dottask.core.cluster_mousedown,cljs.core.cst$kw$on_DASH_click,((function (top,left,right,width,vec__12688,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.rename_cluster_prompt).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster));
});})(top,left,right,width,vec__12688,_,x_offset,y_offset))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"rgba(255, 255, 255, 0.75)",cljs.core.cst$kw$left,[cljs.core.str(left),cljs.core.str("px")].join(''),cljs.core.cst$kw$top,[cljs.core.str(top),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,[cljs.core.str(width),cljs.core.str("px")].join(''),cljs.core.cst$kw$height,"18px",cljs.core.cst$kw$padding_DASH_top,"1px",cljs.core.cst$kw$text_DASH_align,"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"delete",cljs.core.cst$kw$title,"Delete",cljs.core.cst$kw$on_DASH_click,((function (top,left,right,width,vec__12688,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.delete_cluster).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster));
});})(top,left,right,width,vec__12688,_,x_offset,y_offset))
], null),"\u00D7"], null),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster)))], null);
});})(vec__12688,_,x_offset,y_offset))
,cljs.core.cst$kw$gclusters.cljs$core$IFn$_invoke$arity$1(state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(state)], null)], null)], null)], null)], null);
});
React.initializeTouchEvents(true);
document.onkeydown = (function (evt){
console.log("KEYDOWN",evt,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.body,evt.target));

var shift = evt.shiftKey;
var selected = cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.app_state) : cljs.core.deref.call(null,dottask.core.app_state)));
var keycode = evt.which;
var keychar = clojure.string.lower_case(cljs.core.char$(keycode));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dottask.core.color_keycode_lookup,keychar);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.body,evt.target)){
var G__12690_12693 = keycode;
switch (G__12690_12693) {
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
dottask.core.rerender_BANG_(dottask.core.delete_node).call(null,selected);

break;
case (69):
dottask.core.rerender_BANG_(dottask.core.rename_prompt).call(null,selected);

break;
case (73):
dottask.core.rerender_BANG_(dottask.core.add_cluster).call(null,dottask.core.prompt("Enter title for box:",""),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected], null));

break;
case (74):
var _STAR_record_active_STAR_12691_12695 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{dottask.core.rerender_BANG_(dottask.core.select_next_node).call(null,(1));
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_12691_12695;
}
break;
case (75):
var _STAR_record_active_STAR_12692_12696 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{dottask.core.rerender_BANG_(dottask.core.select_next_node).call(null,(-1));
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_12692_12696;
}
break;
case (78):
dottask.core.rerender_BANG_(dottask.core.add_node).call(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,dottask.core.prompt("Enter title for node:",""));

break;
case (188):
if(cljs.core.truth_(shift)){
dottask.core.rerender_BANG_(dottask.core.add_node).call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected], null),dottask.core.prompt("Enter title for node:",""));
} else {
}

break;
case (190):
if(cljs.core.truth_(shift)){
dottask.core.rerender_BANG_(dottask.core.add_node).call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected], null),cljs.core.PersistentVector.EMPTY,dottask.core.prompt("Enter Title:",""));
} else {
}

break;
case (189):
dottask.core.rerender_BANG_(dottask.core.on_toggle_dep_click).call(null,selected);

break;
default:

}

if(cljs.core.truth_(color)){
return dottask.core.rerender_BANG_(dottask.core.recolor_node).call(null,selected,cljs.core.cst$kw$hex.cljs$core$IFn$_invoke$arity$1(color));
} else {
return null;
}
} else {
return null;
}
});
dottask.core.render_BANG_ = (function dottask$core$render_BANG_(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.graph,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.app_state) : cljs.core.deref.call(null,dottask.core.app_state))], null),document.getElementById("app"));
});
if(typeof dottask.core.on_page_load !== 'undefined'){
} else {
dottask.core.on_page_load = (function (){
devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$sanity_DASH_hints], 0));

devtools.core.install_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.core.app_state,dottask.core.load_hash);
})()
;
}
cljs.core.add_watch(dottask.core.app_state,cljs.core.cst$kw$on_DASH_change,(function (_,___$1,___$2,___$3){
return dottask.core.render_BANG_();
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.core.app_state,dottask.core.update_state);
historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.core.app_state,cljs.core.cst$kw$app_DASH_state);
