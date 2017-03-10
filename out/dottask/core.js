// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('dottask.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('reagent.core');
goog.require('tubax.core');
goog.require('goog.events.EventType');
goog.require('clojure.set');
goog.require('goog.events');
goog.require('devtools.core');
goog.require('clojure.string');
goog.require('cljs.reader');
dottask.core.ppi = (72);
dottask.core.debug = (function dottask$core$debug(result){
console.log("DEBUG",result);

return result;
});
dottask.core.prompt = (function dottask$core$prompt(message,val){
return prompt(message,val);
});
dottask.core.extent = (function dottask$core$extent(numbers){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,numbers),cljs.core.cst$kw$max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,numbers)], null);
});
dottask.core.get_node = (function dottask$core$get_node(nodes,id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12341_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12341_SHARP_));
}),nodes));
});
dottask.core.toggle_item = (function dottask$core$toggle_item(coll,item){
var len = cljs.core.count(coll);
var new_coll = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (len){
return (function (p1__12342_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12342_SHARP_,item);
});})(len))
,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,cljs.core.count(new_coll))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_coll,item);
} else {
return new_coll;
}
});
dottask.core.show_help = (function dottask$core$show_help(){
var G__12344 = [cljs.core.str("Mouse:\n"),cljs.core.str("\tclick on card text: change text\n"),cljs.core.str("\tdrag from one card to another: link/unlink cards\n"),cljs.core.str("\tdrag from one card to empty space above/below:"),cljs.core.str("\t   create card linked to/from start card\n"),cljs.core.str("\t   hold down shift to 'split' the card into 2\n"),cljs.core.str("Buttons:\n"),cljs.core.str("\tx: delete card\n"),cljs.core.str("\thandle at bottom right: resize card\n"),cljs.core.str("Keyboard Shortcuts:\n"),cljs.core.str("\tj/k: go to previous/next node\n"),cljs.core.str("\td: delete selected card\n"),cljs.core.str("\te: edit text of selected card\n"),cljs.core.str("\t</>: add card before/after\n"),cljs.core.str("\t-: link/unlink cards (first on source, then target)\n"),cljs.core.str("Saving: clicking save adds all the page state to the url hash. "),cljs.core.str("This can be bookmarked so that you can reload the page later "),cljs.core.str("and pick up where you left off.")].join('');
return alert(G__12344);
});
dottask.core.get_node_dim = (function dottask$core$get_node_dim(node,dim){
var G__12346 = (((dim instanceof cljs.core.Keyword))?dim.fqn:null);
switch (G__12346) {
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
if(typeof dottask.core.app_state !== 'undefined'){
} else {
dottask.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id_DASH_counter,(6),cljs.core.cst$kw$tags,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node1",cljs.core.cst$kw$text,"node 1"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node2",cljs.core.cst$kw$text,"node 2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node3",cljs.core.cst$kw$text,"node 3"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node4",cljs.core.cst$kw$text,"node 4"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node5",cljs.core.cst$kw$text,"node 5"], null)], null),cljs.core.cst$kw$selected_DASH_node_DASH_id,null,cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,null,cljs.core.cst$kw$deps,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node1","node3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node2","node3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node3","node5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node4","node5"], null)], null)], null));
}
dottask.core.status_list = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$todo,cljs.core.cst$kw$label,"TODO"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$progress,cljs.core.cst$kw$label,"In progress"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$done,cljs.core.cst$kw$label,"Done"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$blocked,cljs.core.cst$kw$label,"Blocked"], null)], null);
dottask.core.statuses = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,dottask.core.status_list),dottask.core.status_list);
dottask.core.state_to_save = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id_DASH_counter,cljs.core.cst$kw$tags,cljs.core.cst$kw$nodes,cljs.core.cst$kw$deps], null);
dottask.core.save_hash = (function dottask$core$save_hash(state){
return (window["location"]["hash"] = (function (){var G__12349 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(state,dottask.core.state_to_save)], 0));
return encodeURIComponent(G__12349);
})());
});
dottask.core.load_hash = (function dottask$core$load_hash(state){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([state,cljs.reader.read_string((function (){var G__12351 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest((window["location"]["hash"])));
return decodeURIComponent(G__12351);
})())], 0));
});
dottask.core.treeify = (function dottask$core$treeify(var_args){
var args12355 = [];
var len__5729__auto___12359 = arguments.length;
var i__5730__auto___12360 = (0);
while(true){
if((i__5730__auto___12360 < len__5729__auto___12359)){
args12355.push((arguments[i__5730__auto___12360]));

var G__12361 = (i__5730__auto___12360 + (1));
i__5730__auto___12360 = G__12361;
continue;
} else {
}
break;
}

var G__12357 = args12355.length;
switch (G__12357) {
case 1:
return dottask.core.treeify.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dottask.core.treeify.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12355.length)].join('')));

}
});

dottask.core.treeify.cljs$core$IFn$_invoke$arity$1 = (function (edges){
var vec__12358 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.hash_set,edges);
var parents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12358,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12358,(1),null);
var roots = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(parents,children);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12358,parents,children,roots){
return (function (p1__12352_SHARP_){
return dottask.core.treeify.cljs$core$IFn$_invoke$arity$2(edges,p1__12352_SHARP_);
});})(vec__12358,parents,children,roots))
,roots);
});

dottask.core.treeify.cljs$core$IFn$_invoke$arity$2 = (function (edges,vertex){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$node,vertex,cljs.core.cst$kw$children,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12353_SHARP_){
return dottask.core.treeify.cljs$core$IFn$_invoke$arity$2(edges,p1__12353_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12354_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__12354_SHARP_),vertex);
}),edges)))], null);
});

dottask.core.treeify.cljs$lang$maxFixedArity = 2;
dottask.core.render_tag_tree = (function dottask$core$render_tag_tree(tree){
if(cljs.core.seq_QMARK_(tree)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(dottask$core$render_tag_tree,tree));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(tree)),"#")){
return [cljs.core.str(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(tree)),cljs.core.str(";")].join('');
} else {
return [cljs.core.str("subgraph cluster_"),cljs.core.str(clojure.string.replace(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(tree),/#/,"")),cljs.core.str("{label=\""),cljs.core.str(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(tree)),cljs.core.str("\";"),cljs.core.str(dottask$core$render_tag_tree(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(tree))),cljs.core.str("}")].join('');

}
}
});
dottask.core.to_dot = (function dottask$core$to_dot(nodes,deps,tags){
return [cljs.core.str("digraph G {\n"),cljs.core.str("dpi=72;"),cljs.core.str("node [label=\"\" shape=\"rect\"]\n"),cljs.core.str(((cljs.core.seq(tags))?dottask.core.render_tag_tree(dottask.core.treeify.cljs$core$IFn$_invoke$arity$1(tags)):null)),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12364_SHARP_){
return [cljs.core.str(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12364_SHARP_)),cljs.core.str("[height=\""),cljs.core.str(dottask.core.get_node_dim(p1__12364_SHARP_,cljs.core.cst$kw$height)),cljs.core.str("\" width=\""),cljs.core.str(dottask.core.get_node_dim(p1__12364_SHARP_,cljs.core.cst$kw$width)),cljs.core.str("\"];")].join('');
}),nodes),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12365_SHARP_){
return [cljs.core.str(cljs.core.first(p1__12365_SHARP_)),cljs.core.str("->"),cljs.core.str(cljs.core.second(p1__12365_SHARP_)),cljs.core.str(";")].join('');
}),deps))))),cljs.core.str("}")].join('');
});
dottask.core.parse_points = (function dottask$core$parse_points(pointstr){
return cljs.core.zipmap(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(dottask.core.extent,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12367_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,p1__12367_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12366_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__12366_SHARP_,/,/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(pointstr,/ /))))));
});
dottask.core.get_nodes = (function dottask$core$get_nodes(cljdot){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(node)))),cljs.core.cst$kw$points,dottask.core.parse_points(cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(node)))))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12368_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(p1__12368_SHARP_)),"node");
}),cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljdot)))));
});
dottask.core.dot__GT_svg = (function dottask$core$dot__GT_svg(dot){
return clojure.string.replace(Viz(dot,"svg"),/pt\"/,"px\"");
});
dottask.core.update_state = (function dottask$core$update_state(state){
var dot = dottask.core.to_dot(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(state));
var same_graph = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dot,cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(state));
var svg = ((same_graph)?cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(state):dottask.core.dot__GT_svg(dot));
var gdata = ((same_graph)?cljs.core.cst$kw$gdata.cljs$core$IFn$_invoke$arity$1(state):dottask.core.get_nodes(tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$1(svg)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$dot,dot,cljs.core.array_seq([cljs.core.cst$kw$svg,svg,cljs.core.cst$kw$gdata,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (dot,same_graph,svg,gdata){
return (function (p1__12369_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12369_SHARP_,cljs.core.cst$kw$node,dottask.core.get_node(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12369_SHARP_)));
});})(dot,same_graph,svg,gdata))
,gdata)], 0));
});
dottask.core.rerender_BANG_ = (function dottask$core$rerender_BANG_(updater){
return (function() { 
var G__12370__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,dottask.core.app_state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(dottask.core.update_state,updater)),args);
};
var G__12370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12371__i = 0, G__12371__a = new Array(arguments.length -  0);
while (G__12371__i < G__12371__a.length) {G__12371__a[G__12371__i] = arguments[G__12371__i + 0]; ++G__12371__i;}
  args = new cljs.core.IndexedSeq(G__12371__a,0);
} 
return G__12370__delegate.call(this,args);};
G__12370.cljs$lang$maxFixedArity = 0;
G__12370.cljs$lang$applyTo = (function (arglist__12372){
var args = cljs.core.seq(arglist__12372);
return G__12370__delegate(args);
});
G__12370.cljs$core$IFn$_invoke$arity$variadic = G__12370__delegate;
return G__12370;
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
return dottask.core.update_node(state,node_id,(function (p1__12373_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12373_SHARP_,cljs.core.cst$kw$text,text);
}));
});
dottask.core.resize_node = (function dottask$core$resize_node(state,node_id,width,height,evt_type){
var height_pt = (height / dottask.core.ppi);
var width_pt = (width / dottask.core.ppi);
var w = (function (){var G__12377 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mousemove,cljs.core.cst$kw$moving_DASH_width,cljs.core.cst$kw$mouseup,cljs.core.cst$kw$width], null);
return (evt_type.cljs$core$IFn$_invoke$arity$1 ? evt_type.cljs$core$IFn$_invoke$arity$1(G__12377) : evt_type.call(null,G__12377));
})();
var h = (function (){var G__12378 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mousemove,cljs.core.cst$kw$moving_DASH_height,cljs.core.cst$kw$mouseup,cljs.core.cst$kw$height], null);
return (evt_type.cljs$core$IFn$_invoke$arity$1 ? evt_type.cljs$core$IFn$_invoke$arity$1(G__12378) : evt_type.call(null,G__12378));
})();
return dottask.core.update_node(state,node_id,((function (height_pt,width_pt,w,h){
return (function (p1__12374_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__12374_SHARP_,cljs.core.cst$kw$moving_DASH_width,cljs.core.array_seq([cljs.core.cst$kw$moving_DASH_height], 0)),w,width_pt,cljs.core.array_seq([h,height_pt], 0));
});})(height_pt,width_pt,w,h))
);
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
dottask.core.change_node_status = (function dottask$core$change_node_status(state,node_id,status){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,node_id,status], null);

return dottask.core.update_node(state,node_id,(function (p1__12379_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12379_SHARP_,cljs.core.cst$kw$status,status);
}));
});
dottask.core.select_node = (function dottask$core$select_node(state,node_id){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$selected_DASH_node_DASH_id,node_id);
});
dottask.core.select_next_node = (function dottask$core$select_next_node(var_args){
var args12380 = [];
var len__5729__auto___12383 = arguments.length;
var i__5730__auto___12384 = (0);
while(true){
if((i__5730__auto___12384 < len__5729__auto___12383)){
args12380.push((arguments[i__5730__auto___12384]));

var G__12385 = (i__5730__auto___12384 + (1));
i__5730__auto___12384 = G__12385;
continue;
} else {
}
break;
}

var G__12382 = args12380.length;
switch (G__12382) {
case 1:
return dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12380.length)].join('')));

}
});

dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$2(state,(1));
});

dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$2 = (function (state,direction){
var gdata = cljs.core.cst$kw$gdata.cljs$core$IFn$_invoke$arity$1(state);
var positioned_nodes = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gdata){
return (function (node){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)],null));
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
var new_nodes = cljs.core.filterv((function (p1__12387_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12387_SHARP_));
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
var args12390 = [];
var len__5729__auto___12393 = arguments.length;
var i__5730__auto___12394 = (0);
while(true){
if((i__5730__auto___12394 < len__5729__auto___12393)){
args12390.push((arguments[i__5730__auto___12394]));

var G__12395 = (i__5730__auto___12394 + (1));
i__5730__auto___12394 = G__12395;
continue;
} else {
}
break;
}

var G__12392 = args12390.length;
switch (G__12392) {
case 3:
return dottask.core.add_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dottask.core.add_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12390.length)].join('')));

}
});

dottask.core.add_node.cljs$core$IFn$_invoke$arity$3 = (function (state,befores,afters){
return dottask.core.add_node.cljs$core$IFn$_invoke$arity$4(state,befores,afters,"");
});

dottask.core.add_node.cljs$core$IFn$_invoke$arity$4 = (function (state,befores,afters,text){
var new_node = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,[cljs.core.str("node"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join(''),cljs.core.cst$kw$text,text], null);
var new_nodes = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),new_node);
var all_deps = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_node,new_nodes){
return (function (p1__12388_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__12388_SHARP_,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(new_node)],null));
});})(new_node,new_nodes))
,befores),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_node,new_nodes){
return (function (p1__12389_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(new_node),p1__12389_SHARP_],null));
});})(new_node,new_nodes))
,afters)], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,new_nodes,cljs.core.array_seq([cljs.core.cst$kw$deps,all_deps,cljs.core.cst$kw$id_DASH_counter,(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state) + (1))], 0));
});

dottask.core.add_node.cljs$lang$maxFixedArity = 4;
dottask.core.move_deps = (function dottask$core$move_deps(var_args){
var args12397 = [];
var len__5729__auto___12400 = arguments.length;
var i__5730__auto___12401 = (0);
while(true){
if((i__5730__auto___12401 < len__5729__auto___12400)){
args12397.push((arguments[i__5730__auto___12401]));

var G__12402 = (i__5730__auto___12401 + (1));
i__5730__auto___12401 = G__12402;
continue;
} else {
}
break;
}

var G__12399 = args12397.length;
switch (G__12399) {
case 4:
return dottask.core.move_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return dottask.core.move_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12397.length)].join('')));

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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$deps], null),(function (p1__12404_SHARP_){
return cljs.core.vec(dottask.core.toggle_item(p1__12404_SHARP_,dep));
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
dottask.core.el__GT_nodeid = (function dottask$core$el__GT_nodeid(el){
var node = goog.dom.getAncestorByClass(el,"node-overlay");
var node_id = (cljs.core.truth_(node)?node.getAttribute("data-nodeid"):null);
return node_id;
});
dottask.core.link_mouseup = (function dottask$core$link_mouseup(src_node_id,src_y,shift_key){
return (function (e){
var node_id = dottask.core.el__GT_nodeid(e.target);
if(cljs.core.truth_(node_id)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_id,src_node_id)){
return dottask.core.rerender_BANG_(dottask.core.toggle_dep_clear).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_node_id,node_id], null));
} else {
return null;
}
} else {
return dottask.core.rerender_BANG_(dottask.core.add_or_split_node).call(null,src_node_id,(((e.clientY < src_y))?cljs.core.cst$kw$before:cljs.core.cst$kw$after),shift_key);
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
if(((width > (30))) && ((height > (30)))){
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
if(cljs.core.truth_((function (){var G__12420 = e.target;
var G__12421 = "node-resize";
return goog.dom.classlist.contains(G__12420,G__12421);
})())){
var move_key = (function (){var G__12422 = window;
var G__12423 = goog.events.EventType.MOUSEMOVE;
var G__12424 = dottask.core.resize_mouse(e.target,cljs.core.cst$kw$mousemove,null);
return goog.events.listen(G__12422,G__12423,G__12424);
})();
var G__12425 = window;
var G__12426 = goog.events.EventType.MOUSEUP;
var G__12427 = dottask.core.resize_mouse(e.target,cljs.core.cst$kw$mouseup,move_key);
return goog.events.listenOnce(G__12425,G__12426,G__12427);
} else {
var G__12430 = window;
var G__12431 = goog.events.EventType.MOUSEUP;
var G__12432 = dottask.core.link_mouseup((function (){var G__12433 = e.target;
var G__12434 = "node-overlay";
return goog.dom.getAncestorByClass(G__12433,G__12434);
})().getAttribute("data-nodeid"),e.clientY,e.shiftKey);
return goog.events.listenOnce(G__12430,G__12431,G__12432);
}
});
dottask.core.get_toggle_link_button_text = (function dottask$core$get_toggle_link_button_text(state,node_id){
var last_clicked_id = cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state);
if((last_clicked_id == null)){
return "+--";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_clicked_id,node_id)){
return "x--";
} else {
return "-->";

}
}
});
dottask.core.graph = (function dottask$core$graph(state){
var vec__12439 = cljs.core.re_find(/translate\((\d+) (\d+)\)/,cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(state));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12439,(0),null);
var x_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12439,(1),null);
var y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12439,(2),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_key_DASH_press,((function (vec__12439,_,x_offset,y_offset){
return (function (p1__12435_SHARP_){
return console.log(p1__12435_SHARP_);
});})(vec__12439,_,x_offset,y_offset))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__12439,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.add_node).call(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});})(vec__12439,_,x_offset,y_offset))
], null),"Add card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__12439,_,x_offset,y_offset){
return (function (){
return dottask.core.save_hash((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.app_state) : cljs.core.deref.call(null,dottask.core.app_state)));
});})(vec__12439,_,x_offset,y_offset))
], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__12439,_,x_offset,y_offset){
return (function (){
return dottask.core.show_help();
});})(vec__12439,_,x_offset,y_offset))
], null),"Help"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"dotgraph"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"graph-overlay"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12439,_,x_offset,y_offset){
return (function (node){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$class,[cljs.core.str("node-overlay "),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$node,cljs.core.cst$kw$status], null)))].join(''),(1))),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state)))?" selected":null))].join(''),cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$on_DASH_click,((function (vec__12439,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.select_node).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node));
});})(vec__12439,_,x_offset,y_offset))
,cljs.core.cst$kw$data_DASH_nodeid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$on_DASH_mouse_DASH_down,dottask.core.node_mousedown,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$left,[cljs.core.str((parseInt(x_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$top,[cljs.core.str((parseInt(y_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,[cljs.core.str((dottask.core.get_node_dim(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$width) * dottask.core.ppi)),cljs.core.str("px")].join(''),cljs.core.cst$kw$height,[cljs.core.str((dottask.core.get_node_dim(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$height) * dottask.core.ppi)),cljs.core.str("px")].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"add-before",cljs.core.cst$kw$title,"Add Before",cljs.core.cst$kw$on_DASH_click,((function (vec__12439,_,x_offset,y_offset){
return (function (evt){
return dottask.core.rerender_BANG_(dottask.core.add_or_split_node).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$before,evt.shiftKey);
});})(vec__12439,_,x_offset,y_offset))
], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"delete",cljs.core.cst$kw$title,"Delete",cljs.core.cst$kw$on_DASH_click,((function (vec__12439,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.delete_node).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node));
});})(vec__12439,_,x_offset,y_offset))
], null),"\u00D7"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Add/Remove Link",cljs.core.cst$kw$on_DASH_click,((function (vec__12439,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.on_toggle_dep_click).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node));
});})(vec__12439,_,x_offset,y_offset))
], null),dottask.core.get_toggle_link_button_text(state,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"add-after",cljs.core.cst$kw$title,"Add After",cljs.core.cst$kw$on_DASH_click,((function (vec__12439,_,x_offset,y_offset){
return (function (p1__12436_SHARP_){
if(cljs.core.truth_(p1__12436_SHARP_.shiftKey)){
return dottask.core.rerender_BANG_(dottask.core.split_node).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$after);
} else {
return dottask.core.rerender_BANG_(dottask.core.add_node).call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)], null),cljs.core.PersistentVector.EMPTY);
}
});})(vec__12439,_,x_offset,y_offset))
], null),"+"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"status-picker",cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$node,cljs.core.cst$kw$status], null)),cljs.core.cst$kw$on_DASH_change,((function (vec__12439,_,x_offset,y_offset){
return (function (p1__12437_SHARP_){
return dottask.core.rerender_BANG_(dottask.core.change_node_status).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__12437_SHARP_.target.value));
});})(vec__12439,_,x_offset,y_offset))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null),""], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12439,_,x_offset,y_offset){
return (function (status){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(status),cljs.core.cst$kw$value,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(status)], null),cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(status)], null);
});})(vec__12439,_,x_offset,y_offset))
,dottask.core.status_list)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"task-text",cljs.core.cst$kw$title,"Click to Change",cljs.core.cst$kw$on_DASH_click,((function (vec__12439,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.rename_prompt).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node));
});})(vec__12439,_,x_offset,y_offset))
], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$node,cljs.core.cst$kw$text], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$right,"0",cljs.core.cst$kw$bottom,"0",cljs.core.cst$kw$width,"12px",cljs.core.cst$kw$height,"12px",cljs.core.cst$kw$cursor,"nwse-resize",cljs.core.cst$kw$border_DASH_bottom,"double #888",cljs.core.cst$kw$border_DASH_right,"double #888"], null),cljs.core.cst$kw$class,"draggable node-resize"], null),""], null)], null);
});})(vec__12439,_,x_offset,y_offset))
,cljs.core.cst$kw$gdata.cljs$core$IFn$_invoke$arity$1(state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(state)], null)], null)], null)], null)], null);
});
document.onkeydown = (function (evt){
console.log("KEYDOWN",evt,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.body,evt.target));

var shift = evt.shiftKey;
var selected = cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.app_state) : cljs.core.deref.call(null,dottask.core.app_state)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.body,evt.target)){
var G__12440 = evt.which;
switch (G__12440) {
case (68):
return dottask.core.rerender_BANG_(dottask.core.delete_node).call(null,selected);

break;
case (69):
return dottask.core.rerender_BANG_(dottask.core.rename_prompt).call(null,selected);

break;
case (74):
return dottask.core.rerender_BANG_(dottask.core.select_next_node).call(null,(1));

break;
case (75):
return dottask.core.rerender_BANG_(dottask.core.select_next_node).call(null,(-1));

break;
case (78):
return dottask.core.rerender_BANG_(dottask.core.add_node).call(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,dottask.core.prompt("Enter Title:",""));

break;
case (188):
if(cljs.core.truth_(shift)){
return dottask.core.rerender_BANG_(dottask.core.add_node).call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected], null),dottask.core.prompt("Enter Title:",""));
} else {
return null;
}

break;
case (190):
if(cljs.core.truth_(shift)){
return dottask.core.rerender_BANG_(dottask.core.add_node).call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected], null),cljs.core.PersistentVector.EMPTY,dottask.core.prompt("Enter Title:",""));
} else {
return null;
}

break;
case (189):
return dottask.core.rerender_BANG_(dottask.core.on_toggle_dep_click).call(null,selected);

break;
default:
return "";

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
