// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('dottask.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('tubax.core');
goog.require('goog.events.EventType');
goog.require('historian.core');
goog.require('clojure.set');
goog.require('goog.events');
goog.require('devtools.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.html.SafeHtml');
dottask.core.ppi = (72);
dottask.core.colors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"white",cljs.core.cst$kw$hex,"#C9C9C9",cljs.core.cst$kw$shortcut,"w"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"red",cljs.core.cst$kw$hex,"#D1686E",cljs.core.cst$kw$shortcut,"r"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"orange",cljs.core.cst$kw$hex,"#D4B06A",cljs.core.cst$kw$shortcut,"o"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"yellow",cljs.core.cst$kw$hex,"#D4D36A",cljs.core.cst$kw$shortcut,"y"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"green",cljs.core.cst$kw$hex,"#5FAE57",cljs.core.cst$kw$shortcut,"g"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"blue",cljs.core.cst$kw$hex,"#4E638E",cljs.core.cst$kw$shortcut,"b"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"purple",cljs.core.cst$kw$hex,"#744B8E",cljs.core.cst$kw$shortcut,"v"], null)], null);
dottask.core.color_keycode_lookup = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$shortcut,dottask.core.colors),dottask.core.colors);
dottask.core.directions = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$up,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$label,"up",cljs.core.cst$kw$dot,"BT",cljs.core.cst$kw$coord,cljs.core.cst$kw$y,cljs.core.cst$kw$before,cljs.core._GT_], null),cljs.core.cst$kw$down,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$label,"down",cljs.core.cst$kw$dot,"TB",cljs.core.cst$kw$coord,cljs.core.cst$kw$y,cljs.core.cst$kw$before,cljs.core._LT_], null),cljs.core.cst$kw$left,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$label,"left",cljs.core.cst$kw$dot,"RL",cljs.core.cst$kw$coord,cljs.core.cst$kw$x,cljs.core.cst$kw$before,cljs.core._GT_], null),cljs.core.cst$kw$right,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$label,"right",cljs.core.cst$kw$dot,"LR",cljs.core.cst$kw$coord,cljs.core.cst$kw$x,cljs.core.cst$kw$before,cljs.core._LT_], null)], null);
dottask.core.debug = (function dottask$core$debug(result){
console.log("DEBUG",result);

return result;
});
dottask.core.prompt = (function dottask$core$prompt(message,val){
return prompt(message,val);
});
dottask.core.toggle = (function dottask$core$toggle(dict,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dict,key,cljs.core.not((key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(dict) : key.call(null,dict))));
});
dottask.core.toggler = (function dottask$core$toggler(state,key){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,dottask.core.toggle,key);
});
});
dottask.core.extent = (function dottask$core$extent(numbers){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,numbers),cljs.core.cst$kw$max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,numbers)], null);
});
dottask.core.map_vals = (function dottask$core$map_vals(func,hmap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5443__auto__ = (function dottask$core$map_vals_$_iter__12554(s__12555){
return (new cljs.core.LazySeq(null,(function (){
var s__12555__$1 = s__12555;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__12555__$1);
if(temp__4425__auto__){
var s__12555__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12555__$2)){
var c__5441__auto__ = cljs.core.chunk_first(s__12555__$2);
var size__5442__auto__ = cljs.core.count(c__5441__auto__);
var b__12557 = cljs.core.chunk_buffer(size__5442__auto__);
if((function (){var i__12556 = (0);
while(true){
if((i__12556 < size__5442__auto__)){
var vec__12562 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5441__auto__,i__12556);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12562,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12562,(1),null);
cljs.core.chunk_append(b__12557,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(v) : func.call(null,v))], null));

var G__12564 = (i__12556 + (1));
i__12556 = G__12564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12557),dottask$core$map_vals_$_iter__12554(cljs.core.chunk_rest(s__12555__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12557),null);
}
} else {
var vec__12563 = cljs.core.first(s__12555__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(v) : func.call(null,v))], null),dottask$core$map_vals_$_iter__12554(cljs.core.rest(s__12555__$2)));
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
dottask.core.hesc = (function dottask$core$hesc(text){
return goog.html.SafeHtml.htmlEscape(text).getTypedStringValue();
});
dottask.core.esc = (function dottask$core$esc(text){
var G__12566 = [cljs.core.str(text)].join('');
return goog.string.escapeString(G__12566);
});
dottask.core.coords = (function dottask$core$coords(evt){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,evt.clientX,cljs.core.cst$kw$y,evt.clientY], null);
});
dottask.core.compare_coords = (function dottask$core$compare_coords(this$,other,direction){
var coord = cljs.core.cst$kw$coord.cljs$core$IFn$_invoke$arity$1(direction);
var before = cljs.core.cst$kw$before.cljs$core$IFn$_invoke$arity$1(direction);
if(cljs.core.truth_((function (){var G__12569 = (coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(this$) : coord.call(null,this$));
var G__12570 = (coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(other) : coord.call(null,other));
return (before.cljs$core$IFn$_invoke$arity$2 ? before.cljs$core$IFn$_invoke$arity$2(G__12569,G__12570) : before.call(null,G__12569,G__12570));
})())){
return cljs.core.cst$kw$before;
} else {
return cljs.core.cst$kw$after;
}
});
dottask.core.invert_list_map = (function dottask$core$invert_list_map(hmap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,cljs.core.first(item)], null);
}),cljs.core.second(item));
}),hmap));
});
dottask.core.get_node = (function dottask$core$get_node(nodes,id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12571_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12571_SHARP_));
}),nodes));
});
dottask.core.show_help = (function dottask$core$show_help(){
var G__12573 = [cljs.core.str("Mouse:\n"),cljs.core.str("\tclick on card text: change text\n"),cljs.core.str("\tdouble-click on card: add box around card\n"),cljs.core.str("\tdrag from one card to another: link/unlink cards\n"),cljs.core.str("\t   hold down shift to set/change the label for the link\n"),cljs.core.str("\tdrag from one card to empty space above/below:\n"),cljs.core.str("\t   create card linked to/from start card\n"),cljs.core.str("\t   hold down shift to 'split' the card into 2\n"),cljs.core.str("\tdrag between cards and box titles: box/unbox cards\n"),cljs.core.str("Buttons:\n"),cljs.core.str("\tx: delete card/box\n"),cljs.core.str("\thandle at bottom right: resize card\n"),cljs.core.str("Keyboard Shortcuts:\n"),cljs.core.str("\tj/k: go to previous/next card\n"),cljs.core.str("\tEsc: de-select card\n"),cljs.core.str("\td: delete selected card\n"),cljs.core.str("\te: edit text of selected card\n"),cljs.core.str("\ti: put selected card inside a new box\n"),cljs.core.str("\t"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$shortcut,dottask.core.colors))),cljs.core.str(": change color of selected card to "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,dottask.core.colors))),cljs.core.str("\n"),cljs.core.str("\t</>: add card before/after\n"),cljs.core.str("\t-: link/unlink cards (first on source, then target)\n"),cljs.core.str("Saving: clicking save adds all the page state to the url hash. "),cljs.core.str("This can be bookmarked so that you can reload the page later "),cljs.core.str("and pick up where you left off.")].join('');
return alert(G__12573);
});
dottask.core.get_node_dim = (function dottask$core$get_node_dim(node,dim){
var G__12575 = (((dim instanceof cljs.core.Keyword))?dim.fqn:null);
switch (G__12575) {
case "width":
var or__4671__auto__ = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (2);
}

break;
case "height":
var or__4671__auto__ = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return 1.2;
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
var clusternode = goog.dom.getAncestorByClass(el,"cluster-node");
var cluster_id = (function (){var or__4671__auto__ = (cljs.core.truth_(cluster)?cluster.getAttribute("data-clusterid"):null);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
if(cljs.core.truth_(clusternode)){
return clusternode.getAttribute("data-nodeid");
} else {
return null;
}
}
})();
return cluster_id;
});
if(typeof dottask.core.app_state !== 'undefined'){
} else {
dottask.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$gclusters,cljs.core.cst$kw$selected_DASH_node_DASH_id,cljs.core.cst$kw$nodes,cljs.core.cst$kw$id_DASH_counter,cljs.core.cst$kw$svg,cljs.core.cst$kw$dot,cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,cljs.core.cst$kw$clusters,cljs.core.cst$kw$direction,cljs.core.cst$kw$deps,cljs.core.cst$kw$gnodes],[null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node1",cljs.core.cst$kw$text,"Drag things"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node2",cljs.core.cst$kw$text,"Make nodes"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node3",cljs.core.cst$kw$text,"Make links"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node4",cljs.core.cst$kw$text,"???"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"node5",cljs.core.cst$kw$text,"Profit!"], null)], null),(6),"",null,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$down,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node1","node2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node1","node3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node2","node4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node3","node4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node4","node5"], null)], null),null]));
}
if(typeof dottask.core.ui_state !== 'undefined'){
} else {
dottask.core.ui_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_,false,cljs.core.cst$kw$resize_DASH_points,null], null));
}
dottask.core.state_to_save = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id_DASH_counter,cljs.core.cst$kw$clusters,cljs.core.cst$kw$nodes,cljs.core.cst$kw$deps], null);
dottask.core.save_hash = (function dottask$core$save_hash(state){
return (window["location"]["hash"] = (function (){var G__12578 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(state,dottask.core.state_to_save)], 0));
return encodeURIComponent(G__12578);
})());
});
dottask.core.load_hash = (function dottask$core$load_hash(state){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([state,cljs.reader.read_string((function (){var G__12580 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest((window["location"]["hash"])));
return decodeURIComponent(G__12580);
})())], 0));
});
dottask.core.get_hidden_ids = (function dottask$core$get_hidden_ids(var_args){
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
case 2:
return dottask.core.get_hidden_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 6:
return dottask.core.get_hidden_ids.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12581.length)].join('')));

}
});

dottask.core.get_hidden_ids.cljs$core$IFn$_invoke$arity$2 = (function (nodes,clusters){
return dottask.core.get_hidden_ids.cljs$core$IFn$_invoke$arity$6(nodes,clusters,cljs.core.group_by(cljs.core.cst$kw$cluster_DASH_id,nodes),cljs.core.group_by(cljs.core.cst$kw$cluster_DASH_id,cljs.core.vals(clusters)),null,null);
});

dottask.core.get_hidden_ids.cljs$core$IFn$_invoke$arity$6 = (function (nodes,clusters,nodes_by_cluster_id,clusters_by_cluster_id,cluster_id,collapsed_parent_id){
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
return dottask.core.get_hidden_ids.cljs$core$IFn$_invoke$arity$6(nodes,clusters,nodes_by_cluster_id,clusters_by_cluster_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(child_cluster),collapsed_id);
});})(collapsed_id,hidden_children))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters_by_cluster_id,cluster_id));
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.concat,hidden_children,nested_maps);
return result;
});

dottask.core.get_hidden_ids.cljs$lang$maxFixedArity = 6;
dottask.core.fix_deps = (function dottask$core$fix_deps(deps,hidden_ids){
var rename_lookup = dottask.core.invert_list_map(hidden_ids);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (rename_lookup){
return (function (p1__12589_SHARP_){
var and__4659__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__12589_SHARP_),cljs.core.second(p1__12589_SHARP_));
if(and__4659__auto__){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(hidden_ids,cljs.core.first(p1__12589_SHARP_));
} else {
return and__4659__auto__;
}
});})(rename_lookup))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (rename_lookup){
return (function (p1__12588_SHARP_){
return cljs.core.replace.cljs$core$IFn$_invoke$arity$2(rename_lookup,p1__12588_SHARP_);
});})(rename_lookup))
,deps))));
});
dottask.core.node__GT_dot = (function dottask$core$node__GT_dot(var_args){
var args12590 = [];
var len__5729__auto___12593 = arguments.length;
var i__5730__auto___12594 = (0);
while(true){
if((i__5730__auto___12594 < len__5729__auto___12593)){
args12590.push((arguments[i__5730__auto___12594]));

var G__12595 = (i__5730__auto___12594 + (1));
i__5730__auto___12594 = G__12595;
continue;
} else {
}
break;
}

var G__12592 = args12590.length;
switch (G__12592) {
case 1:
return dottask.core.node__GT_dot.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dottask.core.node__GT_dot.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12590.length)].join('')));

}
});

dottask.core.node__GT_dot.cljs$core$IFn$_invoke$arity$1 = (function (node){
return dottask.core.node__GT_dot.cljs$core$IFn$_invoke$arity$2(node,"");
});

dottask.core.node__GT_dot.cljs$core$IFn$_invoke$arity$2 = (function (node,label){
return [cljs.core.str(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)),cljs.core.str("[label=\""),cljs.core.str(dottask.core.esc(label)),cljs.core.str("\" color=\""),cljs.core.str((function (){var or__4671__auto__ = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return "#666666";
}
})()),cljs.core.str("\" height=\""),cljs.core.str(dottask.core.get_node_dim(node,cljs.core.cst$kw$height)),cljs.core.str("\" width=\""),cljs.core.str(dottask.core.get_node_dim(node,cljs.core.cst$kw$width)),cljs.core.str("\"];")].join('');
});

dottask.core.node__GT_dot.cljs$lang$maxFixedArity = 2;
dottask.core.cluster__GT_dot = (function dottask$core$cluster__GT_dot(cluster_id,clusters,nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,labels_QMARK_){
var cluster = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,cluster_id);
var label = (cljs.core.truth_(labels_QMARK_)?cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cluster):" ");
if(cljs.core.truth_(cljs.core.cst$kw$collapsed.cljs$core$IFn$_invoke$arity$1(cluster))){
return dottask.core.node__GT_dot.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cluster_id], null),label);
} else {
return [cljs.core.str("\nsubgraph "),cljs.core.str((function (){var or__4671__auto__ = cluster_id;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return "root";
}
})()),cljs.core.str("{\n"),cljs.core.str("label=\""),cljs.core.str(dottask.core.esc(label)),cljs.core.str("\";\n "),cljs.core.str("color=\"#666666\";\n "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cluster,label){
return (function (p1__12597_SHARP_){
return dottask$core$cluster__GT_dot(p1__12597_SHARP_,clusters,nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,labels_QMARK_);
});})(cluster,label))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters_by_cluster_id,cluster_id))))),cljs.core.str("\n"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(";\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes_by_cluster_id,cluster_id)))),cljs.core.str("}\n")].join('');
}
});
dottask.core.graph__GT_dot = (function dottask$core$graph__GT_dot(nodes,deps,clusters,direction,labels_QMARK_){
var nodes_by_cluster_id = cljs.core.group_by(cljs.core.cst$kw$cluster_DASH_id,nodes);
var clusters_by_cluster_id = cljs.core.group_by(cljs.core.cst$kw$cluster_DASH_id,cljs.core.vals(clusters));
var hidden_ids = dottask.core.get_hidden_ids.cljs$core$IFn$_invoke$arity$2(nodes,clusters);
var hidden_id_set = cljs.core.set(cljs.core.flatten(cljs.core.vals(hidden_ids)));
return [cljs.core.str("digraph \"\" {\n"),cljs.core.str("dpi="),cljs.core.str(dottask.core.ppi),cljs.core.str(";\n"),cljs.core.str("rankdir="),cljs.core.str(cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(direction)),cljs.core.str(";\n"),cljs.core.str("node [label=\"\" shape=\"rect\" penwidth=\"4\"]\n"),cljs.core.str("edge [color=\"#555555\"]\n"),cljs.core.str(dottask.core.cluster__GT_dot(null,clusters,nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,labels_QMARK_)),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set){
return (function (p1__12598_SHARP_){
return dottask.core.node__GT_dot.cljs$core$IFn$_invoke$arity$2(p1__12598_SHARP_,(cljs.core.truth_(labels_QMARK_)?cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(p1__12598_SHARP_):""));
});})(nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set){
return (function (p1__12599_SHARP_){
return cljs.core.contains_QMARK_(hidden_id_set,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12599_SHARP_));
});})(nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set))
,nodes)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set){
return (function (p1__12600_SHARP_){
return [cljs.core.str(cljs.core.first(p1__12600_SHARP_)),cljs.core.str("->"),cljs.core.str(cljs.core.second(p1__12600_SHARP_)),cljs.core.str("[label=\""),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(p1__12600_SHARP_,(2),null)),cljs.core.str("\"];")].join('');
});})(nodes_by_cluster_id,clusters_by_cluster_id,hidden_ids,hidden_id_set))
,dottask.core.fix_deps(deps,hidden_ids)))))),cljs.core.str("}")].join('');
});
dottask.core.get_points = (function dottask$core$get_points(cljdotnode){
var points = cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljdotnode))));
return cljs.core.zipmap(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(dottask.core.extent,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (points){
return (function (p1__12602_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,p1__12602_SHARP_);
});})(points))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (points){
return (function (p1__12601_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__12601_SHARP_,/,/);
});})(points))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(points,/ /))))));
});
dottask.core.get_cljdot_id = (function dottask$core$get_cljdot_id(item){
return cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(item))));
});
dottask.core.svg__GT_gdata = (function dottask$core$svg__GT_gdata(svg){
var cljdot = tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$1(svg);
var items = cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljdot)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cljdot,items){
return (function (node){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,dottask.core.get_cljdot_id(node),cljs.core.cst$kw$points,dottask.core.get_points(node)], null);
});})(cljdot,items))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cljdot,items){
return (function (p1__12603_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(p1__12603_SHARP_)),"node");
});})(cljdot,items))
,items)),cljs.core.cst$kw$clusters,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cljdot,items){
return (function (cluster){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,dottask.core.get_cljdot_id(cluster),cljs.core.cst$kw$points,dottask.core.get_points(cluster)], null);
});})(cljdot,items))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cljdot,items){
return (function (p1__12604_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(p1__12604_SHARP_)),"cluster");
});})(cljdot,items))
,items))], null);
});
dottask.core.dot__GT_svg = (function dottask$core$dot__GT_svg(dot){
return clojure.string.replace(Viz(dot,"svg"),/pt\"/,"px\"");
});
dottask.core.update_state = (function dottask$core$update_state(state){
var dot = dottask.core.graph__GT_dot(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state).call(null,dottask.core.directions),false);
var same_graph = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dot,cljs.core.cst$kw$dot.cljs$core$IFn$_invoke$arity$1(state));
var svg = ((same_graph)?cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(state):dottask.core.dot__GT_svg(dot));
var gdata = ((same_graph)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$clusters,cljs.core.cst$kw$gclusters.cljs$core$IFn$_invoke$arity$1(state)], null):dottask.core.svg__GT_gdata(svg));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$dot,dot,cljs.core.array_seq([cljs.core.cst$kw$svg,svg,cljs.core.cst$kw$gnodes,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (dot,same_graph,svg,gdata){
return (function (p1__12605_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__12605_SHARP_,cljs.core.cst$kw$node,dottask.core.get_node(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12605_SHARP_)),cljs.core.array_seq([cljs.core.cst$kw$cluster,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12605_SHARP_)], null))], 0));
});})(dot,same_graph,svg,gdata))
,cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(gdata)),cljs.core.cst$kw$gclusters,cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(gdata)], 0));
});
dottask.core.rerender_BANG_ = (function dottask$core$rerender_BANG_(updater){
return (function() { 
var G__12606__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,dottask.core.app_state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(dottask.core.update_state,updater)),args);
};
var G__12606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12607__i = 0, G__12607__a = new Array(arguments.length -  0);
while (G__12607__i < G__12607__a.length) {G__12607__a[G__12607__i] = arguments[G__12607__i + 0]; ++G__12607__i;}
  args = new cljs.core.IndexedSeq(G__12607__a,0);
} 
return G__12606__delegate.call(this,args);};
G__12606.cljs$lang$maxFixedArity = 0;
G__12606.cljs$lang$applyTo = (function (arglist__12608){
var args = cljs.core.seq(arglist__12608);
return G__12606__delegate(args);
});
G__12606.cljs$core$IFn$_invoke$arity$variadic = G__12606__delegate;
return G__12606;
})()
;
});
dottask.core.set_direction = (function dottask$core$set_direction(state,dirkey){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$direction,dirkey);
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
return dottask.core.update_node(state,node_id,(function (p1__12609_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12609_SHARP_,cljs.core.cst$kw$text,text);
}));
});
dottask.core.resize_node = (function dottask$core$resize_node(state,node_id,width,height){
var height_pt = (height / dottask.core.ppi);
var width_pt = (width / dottask.core.ppi);
return dottask.core.update_node(state,node_id,((function (height_pt,width_pt){
return (function (p1__12610_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__12610_SHARP_,cljs.core.cst$kw$width,width_pt,cljs.core.array_seq([cljs.core.cst$kw$height,height_pt], 0));
});})(height_pt,width_pt))
);
});
dottask.core.recolor_node = (function dottask$core$recolor_node(state,node_id,color){
return dottask.core.update_node(state,node_id,(function (p1__12611_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12611_SHARP_,cljs.core.cst$kw$color,color);
}));
});
dottask.core.recluster_node = (function dottask$core$recluster_node(state,node_id,cluster_id){
return dottask.core.update_node(state,node_id,(function (p1__12612_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12612_SHARP_,cljs.core.cst$kw$cluster_DASH_id,cluster_id);
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
var args12613 = [];
var len__5729__auto___12616 = arguments.length;
var i__5730__auto___12617 = (0);
while(true){
if((i__5730__auto___12617 < len__5729__auto___12616)){
args12613.push((arguments[i__5730__auto___12617]));

var G__12618 = (i__5730__auto___12617 + (1));
i__5730__auto___12617 = G__12618;
continue;
} else {
}
break;
}

var G__12615 = args12613.length;
switch (G__12615) {
case 1:
return dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12613.length)].join('')));

}
});

dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$2(state,(1));
});

dottask.core.select_next_node.cljs$core$IFn$_invoke$arity$2 = (function (state,direction){
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
var old_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node_index,cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state));
var new_index = (((cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state) == null))?(0):cljs.core.mod((old_index + direction),cljs.core.count(positioned_nodes)));
var new_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(positioned_nodes,new_index);
var new_node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_node,(2));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$selected_DASH_node_DASH_id,new_node_id);
});

dottask.core.select_next_node.cljs$lang$maxFixedArity = 2;
dottask.core.delete_node = (function dottask$core$delete_node(state,id){
var new_nodes = cljs.core.filterv((function (p1__12620_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__12620_SHARP_));
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
dottask.core.delete_nodes = (function dottask$core$delete_nodes(state,ids){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(dottask.core.delete_node,state,ids);
});
dottask.core.delete_all = (function dottask$core$delete_all(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([cljs.core.cst$kw$deps,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$clusters,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$selected_DASH_node_DASH_id,null], 0));
});
dottask.core.add_node = (function dottask$core$add_node(var_args){
var args12623 = [];
var len__5729__auto___12626 = arguments.length;
var i__5730__auto___12627 = (0);
while(true){
if((i__5730__auto___12627 < len__5729__auto___12626)){
args12623.push((arguments[i__5730__auto___12627]));

var G__12628 = (i__5730__auto___12627 + (1));
i__5730__auto___12627 = G__12628;
continue;
} else {
}
break;
}

var G__12625 = args12623.length;
switch (G__12625) {
case 3:
return dottask.core.add_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dottask.core.add_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return dottask.core.add_node.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12623.length)].join('')));

}
});

dottask.core.add_node.cljs$core$IFn$_invoke$arity$3 = (function (state,befores,afters){
return dottask.core.add_node.cljs$core$IFn$_invoke$arity$4(state,befores,afters,"");
});

dottask.core.add_node.cljs$core$IFn$_invoke$arity$4 = (function (state,befores,afters,text){
return dottask.core.add_node.cljs$core$IFn$_invoke$arity$5(state,befores,afters,text,false);
});

dottask.core.add_node.cljs$core$IFn$_invoke$arity$5 = (function (state,befores,afters,text,return_id_QMARK_){
var new_node_id = [cljs.core.str("node"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join('');
var new_node = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,new_node_id,cljs.core.cst$kw$text,text], null);
var new_nodes = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state),new_node);
var all_deps = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_node_id,new_node,new_nodes){
return (function (p1__12621_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__12621_SHARP_,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(new_node)],null));
});})(new_node_id,new_node,new_nodes))
,befores),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_node_id,new_node,new_nodes){
return (function (p1__12622_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(new_node),p1__12622_SHARP_],null));
});})(new_node_id,new_node,new_nodes))
,afters)], null));
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,new_nodes,cljs.core.array_seq([cljs.core.cst$kw$deps,all_deps,cljs.core.cst$kw$id_DASH_counter,(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state) + (1))], 0));
if(cljs.core.truth_(return_id_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_state,new_node_id], null);
} else {
return new_state;
}
});

dottask.core.add_node.cljs$lang$maxFixedArity = 5;
dottask.core.add_nodes = (function dottask$core$add_nodes(state,labels){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12630_SHARP_,p2__12631_SHARP_){
return dottask.core.add_node.cljs$core$IFn$_invoke$arity$4(p1__12630_SHARP_,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,p2__12631_SHARP_);
}),state,labels);
});
dottask.core.inside_cluster_QMARK_ = (function dottask$core$inside_cluster_QMARK_(clusters,child,parent_id){
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
var args12637 = [];
var len__5729__auto___12640 = arguments.length;
var i__5730__auto___12641 = (0);
while(true){
if((i__5730__auto___12641 < len__5729__auto___12640)){
args12637.push((arguments[i__5730__auto___12641]));

var G__12642 = (i__5730__auto___12641 + (1));
i__5730__auto___12641 = G__12642;
continue;
} else {
}
break;
}

var G__12639 = args12637.length;
switch (G__12639) {
case 2:
return dottask.core.add_cluster.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dottask.core.add_cluster.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dottask.core.add_cluster.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12637.length)].join('')));

}
});

dottask.core.add_cluster.cljs$core$IFn$_invoke$arity$2 = (function (state,node_ids){
return dottask.core.add_cluster.cljs$core$IFn$_invoke$arity$3(state,dottask.core.prompt("Enter a name for the box",""),node_ids);
});

dottask.core.add_cluster.cljs$core$IFn$_invoke$arity$3 = (function (state,text,node_ids){
return dottask.core.add_cluster.cljs$core$IFn$_invoke$arity$4(state,text,node_ids,false);
});

dottask.core.add_cluster.cljs$core$IFn$_invoke$arity$4 = (function (state,text,node_ids,return_id_QMARK_){
var cluster_id = [cljs.core.str("cluster_"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join('');
var new_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cluster_id){
return (function (p1__12635_SHARP_,p2__12636_SHARP_){
return dottask.core.recluster_node(p1__12635_SHARP_,p2__12636_SHARP_,cluster_id);
});})(cluster_id))
,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$clusters,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cluster_id,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cluster_id,cljs.core.cst$kw$text,text,cljs.core.cst$kw$collapsed,false], null)),cljs.core.array_seq([cljs.core.cst$kw$id_DASH_counter,(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state) + (1))], 0)),node_ids);
if(cljs.core.truth_(return_id_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_state,cluster_id], null);
} else {
return new_state;
}
});

dottask.core.add_cluster.cljs$lang$maxFixedArity = 4;
dottask.core.delete_cluster = (function dottask$core$delete_cluster(var_args){
var args12646 = [];
var len__5729__auto___12649 = arguments.length;
var i__5730__auto___12650 = (0);
while(true){
if((i__5730__auto___12650 < len__5729__auto___12649)){
args12646.push((arguments[i__5730__auto___12650]));

var G__12651 = (i__5730__auto___12650 + (1));
i__5730__auto___12650 = G__12651;
continue;
} else {
}
break;
}

var G__12648 = args12646.length;
switch (G__12648) {
case 2:
return dottask.core.delete_cluster.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dottask.core.delete_cluster.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12646.length)].join('')));

}
});

dottask.core.delete_cluster.cljs$core$IFn$_invoke$arity$2 = (function (state,id){
return dottask.core.delete_cluster.cljs$core$IFn$_invoke$arity$3(state,id,false);
});

dottask.core.delete_cluster.cljs$core$IFn$_invoke$arity$3 = (function (state,id,delete_contents_QMARK_){
var parent_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,id,cljs.core.cst$kw$cluster_DASH_id], null));
var wipe_id = ((function (parent_id){
return (function (p1__12644_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(p1__12644_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12644_SHARP_,cljs.core.cst$kw$cluster_DASH_id,parent_id);
} else {
return p1__12644_SHARP_;
}
});})(parent_id))
;
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(wipe_id,cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.array_seq([cljs.core.cst$kw$clusters,dottask.core.map_vals(wipe_id,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),id))], 0));
var nodes_to_delete = (cljs.core.truth_(delete_contents_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parent_id,wipe_id,new_state){
return (function (p1__12645_SHARP_){
return dottask.core.inside_cluster_QMARK_(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),p1__12645_SHARP_,id);
});})(parent_id,wipe_id,new_state))
,cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state)):null);
return dottask.core.delete_nodes(new_state,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,nodes_to_delete));
});

dottask.core.delete_cluster.cljs$lang$maxFixedArity = 3;
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
dottask.core.move_deps = (function dottask$core$move_deps(var_args){
var args12653 = [];
var len__5729__auto___12656 = arguments.length;
var i__5730__auto___12657 = (0);
while(true){
if((i__5730__auto___12657 < len__5729__auto___12656)){
args12653.push((arguments[i__5730__auto___12657]));

var G__12658 = (i__5730__auto___12657 + (1));
i__5730__auto___12657 = G__12658;
continue;
} else {
}
break;
}

var G__12655 = args12653.length;
switch (G__12655) {
case 4:
return dottask.core.move_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return dottask.core.move_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12653.length)].join('')));

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
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state);
var node = dottask.core.get_node(nodes,node_id);
var new_node_id = [cljs.core.str("node"),cljs.core.str(cljs.core.cst$kw$id_DASH_counter.cljs$core$IFn$_invoke$arity$1(state))].join('');
var new_node = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,new_node_id,cljs.core.cst$kw$cluster_DASH_id,cljs.core.cst$kw$cluster_DASH_id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$text,""], null);
var new_nodes = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes,new_node);
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
var found = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12660_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),p1__12660_SHARP_),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),dep));
}),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(state)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$deps], null),((function (found){
return (function (deps){
if(cljs.core.truth_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(dep,(2),null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (found){
return (function (p1__12661_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12661_SHARP_,found);
});})(found))
,deps),dep);
} else {
if(cljs.core.truth_(found)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (found){
return (function (p1__12662_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__12662_SHARP_,found);
});})(found))
,deps);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(deps,dep);
}
}
});})(found))
);
});
dottask.core.toggle_dep_clear = (function dottask$core$toggle_dep_clear(state,dep){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dottask.core.toggle_dep(state,dep),cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,null);
});
dottask.core.on_toggle_dep_click = (function dottask$core$on_toggle_dep_click(state,node_id,label){
var last_clicked_id = cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state);
if((last_clicked_id == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,node_id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_clicked_id,node_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$toggle_DASH_link_DASH_node_DASH_id,null);
} else {
return dottask.core.toggle_dep_clear(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_clicked_id,node_id,label], null));
}
}
});
dottask.core.node_mouseup = (function dottask$core$node_mouseup(src_node_id,src_coords,direction,shift_key){
return (function (e){
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
return dottask.core.rerender_BANG_(dottask.core.toggle_dep_clear).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [src_node_id,node_id,(cljs.core.truth_(shift_key)?dottask.core.prompt("Enter link text:",""):null)], null));
} else {
return null;
}
} else {
if(cljs.core.truth_(cluster_id)){
return dottask.core.rerender_BANG_(dottask.core.toggle_node_cluster).call(null,src_node_id,cluster_id);
} else {
return dottask.core.rerender_BANG_(dottask.core.add_or_split_node).call(null,src_node_id,dottask.core.compare_coords(tgt_coords,src_coords,(direction.cljs$core$IFn$_invoke$arity$1 ? direction.cljs$core$IFn$_invoke$arity$1(dottask.core.directions) : direction.call(null,dottask.core.directions))),shift_key);

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
dottask.core.resize_mouse = (function dottask$core$resize_mouse(target,move_key){
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

dottask.core.rerender_BANG_(dottask.core.resize_node).call(null,node_id,width,height);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.core.ui_state,((function (node,container,bounds,ctop,width,height,node_id){
return (function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$resize_DASH_points,null,cljs.core.array_seq([cljs.core.cst$kw$resize_DASH_label,""], 0));
});})(node,container,bounds,ctop,width,height,node_id))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.core.ui_state,((function (node,container,bounds,ctop,width,height,node_id){
return (function (state){
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$x,cljs.core.cst$kw$max], null),(width + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$y,cljs.core.cst$kw$max], null),(height + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null))));
});})(node,container,bounds,ctop,width,height,node_id))
);
}
});
});
dottask.core.node_mousedown = (function dottask$core$node_mousedown(e,direction){
if(cljs.core.truth_((function (){var G__12676 = e.target;
var G__12677 = "node-resize";
return goog.dom.classlist.contains(G__12676,G__12677);
})())){
var target = e.target;
var node_id = dottask.core.el__GT_nodeid(target);
var gnode = dottask.core.get_node(cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.app_state) : cljs.core.deref.call(null,dottask.core.app_state))),node_id);
var move_key = (function (){var G__12678 = window;
var G__12679 = goog.events.EventType.MOUSEMOVE;
var G__12680 = dottask.core.resize_mouse(e.target,null);
return goog.events.listen(G__12678,G__12679,G__12680);
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.core.ui_state,((function (target,node_id,gnode,move_key){
return (function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(gnode),cljs.core.array_seq([cljs.core.cst$kw$resize_DASH_label,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(gnode,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$node,cljs.core.cst$kw$text], null))], 0));
});})(target,node_id,gnode,move_key))
);

var G__12681 = window;
var G__12682 = goog.events.EventType.MOUSEUP;
var G__12683 = dottask.core.resize_mouse(target,move_key);
return goog.events.listenOnce(G__12681,G__12682,G__12683);
} else {
var G__12684 = window;
var G__12685 = [goog.events.EventType.MOUSEUP,goog.events.EventType.TOUCHEND];
var G__12686 = dottask.core.node_mouseup((function (){var G__12687 = e.target;
var G__12688 = "node-overlay";
return goog.dom.getAncestorByClass(G__12687,G__12688);
})().getAttribute("data-nodeid"),dottask.core.coords(e),direction,e.shiftKey);
return goog.events.listenOnce(G__12684,G__12685,G__12686);
}
});
dottask.core.cluster_mousedown = (function dottask$core$cluster_mousedown(e){
var G__12694 = window;
var G__12695 = [goog.events.EventType.MOUSEUP,goog.events.EventType.TOUCHEND];
var G__12696 = dottask.core.cluster_mouseup((function (){var G__12697 = e.target;
var G__12698 = "cluster-overlay";
return goog.dom.getAncestorByClass(G__12697,G__12698);
})().getAttribute("data-clusterid"),e.shiftKey);
return goog.events.listenOnce(G__12694,G__12695,G__12696);
});
dottask.core.modal = (function dottask$core$modal(is_visible_QMARK_,close_BANG_,options,contents){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (e){
if(cljs.core.truth_((function (){var G__12701 = e.target;
var G__12702 = "modal-backdrop";
return goog.dom.classlist.contains(G__12701,G__12702);
})())){
return (close_BANG_.cljs$core$IFn$_invoke$arity$0 ? close_BANG_.cljs$core$IFn$_invoke$arity$0() : close_BANG_.call(null));
} else {
return null;
}
}),cljs.core.cst$kw$class,[cljs.core.str("modal-backdrop"),cljs.core.str((cljs.core.truth_((is_visible_QMARK_.cljs$core$IFn$_invoke$arity$0 ? is_visible_QMARK_.cljs$core$IFn$_invoke$arity$0() : is_visible_QMARK_.call(null)))?"":" hidden"))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("modal "),cljs.core.str(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$2(options,""))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"x-button",cljs.core.cst$kw$on_DASH_click,close_BANG_], null),"\u00D7"], null),contents], null)], null);
});
dottask.core.keyed_modal = (function dottask$core$keyed_modal(state,modal_key,options,contents){
return dottask.core.modal((function (){
var G__12704 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return (modal_key.cljs$core$IFn$_invoke$arity$1 ? modal_key.cljs$core$IFn$_invoke$arity$1(G__12704) : modal_key.call(null,G__12704));
}),dottask.core.toggler(state,modal_key),options,contents);
});
dottask.core.textarea = (function dottask$core$textarea(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rows,(20),cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)),cljs.core.cst$kw$on_DASH_change,(function (p1__12705_SHARP_){
var G__12708 = value;
var G__12709 = p1__12705_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12708,G__12709) : cljs.core.reset_BANG_.call(null,G__12708,G__12709));
})], null)], null);
});
dottask.core.parse_line = (function dottask$core$parse_line(index,line){
var clean = clojure.string.triml(line);
var indentation = (cljs.core.count(line) - cljs.core.count(clean));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$idx,index,cljs.core.cst$kw$orig,line,cljs.core.cst$kw$clean,clean,cljs.core.cst$kw$indent,indentation], null);
});
dottask.core.add_parents = (function dottask$core$add_parents(var_args){
var args12710 = [];
var len__5729__auto___12715 = arguments.length;
var i__5730__auto___12716 = (0);
while(true){
if((i__5730__auto___12716 < len__5729__auto___12715)){
args12710.push((arguments[i__5730__auto___12716]));

var G__12717 = (i__5730__auto___12716 + (1));
i__5730__auto___12716 = G__12717;
continue;
} else {
}
break;
}

var G__12712 = args12710.length;
switch (G__12712) {
case 1:
return dottask.core.add_parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return dottask.core.add_parents.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12710.length)].join('')));

}
});

dottask.core.add_parents.cljs$core$IFn$_invoke$arity$1 = (function (parsed_lines){
var line = cljs.core.first(parsed_lines);
return dottask.core.add_parents.cljs$core$IFn$_invoke$arity$3(cljs.core.rest(parsed_lines),cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(line),cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(line)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null));
});

dottask.core.add_parents.cljs$core$IFn$_invoke$arity$3 = (function (parsed_lines,indent_parents,result){
if(cljs.core.empty_QMARK_(parsed_lines)){
return result;
} else {
var line = cljs.core.first(parsed_lines);
var indent = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(line);
var parent = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (line,indent){
return (function (p__12713){
var vec__12714 = p__12713;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12714,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12714,(1),null);
return (k < indent);
});})(line,indent))
,indent_parents)));
return dottask.core.add_parents.cljs$core$IFn$_invoke$arity$3(cljs.core.rest(parsed_lines),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(indent_parents,indent,cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(line)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(line,cljs.core.cst$kw$parent,parent)));
}
});

dottask.core.add_parents.cljs$lang$maxFixedArity = 3;
dottask.core.mark_parents = (function dottask$core$mark_parents(parsed){
var pars = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parent,parsed));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pars){
return (function (line){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(line,cljs.core.cst$kw$is_DASH_parent_QMARK_,cljs.core.contains_QMARK_(pars,cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(line)));
});})(pars))
,parsed);
});
dottask.core.parse_bulk_add = (function dottask$core$parse_bulk_add(text){
var lines = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,clojure.string.split_lines(text));
var parsed = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(dottask.core.parse_line,lines);
return dottask.core.mark_parents(dottask.core.add_parents.cljs$core$IFn$_invoke$arity$1(parsed));
});
dottask.core.add_lines = (function dottask$core$add_lines(var_args){
var args12719 = [];
var len__5729__auto___12723 = arguments.length;
var i__5730__auto___12724 = (0);
while(true){
if((i__5730__auto___12724 < len__5729__auto___12723)){
args12719.push((arguments[i__5730__auto___12724]));

var G__12725 = (i__5730__auto___12724 + (1));
i__5730__auto___12724 = G__12725;
continue;
} else {
}
break;
}

var G__12721 = args12719.length;
switch (G__12721) {
case 3:
return dottask.core.add_lines.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dottask.core.add_lines.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12719.length)].join('')));

}
});

dottask.core.add_lines.cljs$core$IFn$_invoke$arity$3 = (function (state,lines,mode){
return dottask.core.add_lines.cljs$core$IFn$_invoke$arity$4(state,lines,mode,cljs.core.PersistentArrayMap.EMPTY);
});

dottask.core.add_lines.cljs$core$IFn$_invoke$arity$4 = (function (state,lines,mode,id_lookup){
var line = cljs.core.first(lines);
if((line == null)){
return state;
} else {
var text = cljs.core.cst$kw$clean.cljs$core$IFn$_invoke$arity$1(line);
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_lookup,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(line));
var vec__12722 = (cljs.core.truth_((function (){var and__4659__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"cluster");
if(and__4659__auto__){
return cljs.core.cst$kw$is_DASH_parent_QMARK_.cljs$core$IFn$_invoke$arity$1(line);
} else {
return and__4659__auto__;
}
})())?dottask.core.add_cluster.cljs$core$IFn$_invoke$arity$4(state,text,cljs.core.PersistentVector.EMPTY,true):dottask.core.add_node.cljs$core$IFn$_invoke$arity$5(state,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,text,true));
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12722,(0),null);
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12722,(1),null);
var final_state = (cljs.core.truth_((function (){var and__4659__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"cluster");
if(and__4659__auto__){
return parent_id;
} else {
return and__4659__auto__;
}
})())?(cljs.core.truth_(cljs.core.cst$kw$is_DASH_parent_QMARK_.cljs$core$IFn$_invoke$arity$1(line))?dottask.core.toggle_cluster_nesting(new_state,new_id,parent_id):dottask.core.recluster_node(new_state,new_id,parent_id)):(cljs.core.truth_((function (){var and__4659__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"link");
if(and__4659__auto__){
return parent_id;
} else {
return and__4659__auto__;
}
})())?dottask.core.toggle_dep(new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,new_id], null)):new_state
));
return dottask.core.add_lines.cljs$core$IFn$_invoke$arity$4(final_state,cljs.core.rest(lines),mode,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(id_lookup,cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(line),new_id));
}
});

dottask.core.add_lines.cljs$lang$maxFixedArity = 4;
dottask.core.bulk_add_modal = (function dottask$core$bulk_add_modal(){
var bulk_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var mode = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return ((function (bulk_text,mode){
return (function (){
return dottask.core.keyed_modal(dottask.core.ui_state,cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bulk-modal"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"modal-title"], null),"Bulk Add"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Add a line of text for each node you want created"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mode) : cljs.core.deref.call(null,mode)),cljs.core.cst$kw$on_DASH_change,((function (bulk_text,mode){
return (function (p1__12727_SHARP_){
var G__12730 = mode;
var G__12731 = p1__12727_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12730,G__12731) : cljs.core.reset_BANG_.call(null,G__12730,G__12731));
});})(bulk_text,mode))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"ignore"], null),"ignore"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"link"], null),"link"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"cluster"], null),"cluster"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.textarea,bulk_text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"modal-buttons"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$float,"right"], null),cljs.core.cst$kw$on_DASH_click,((function (bulk_text,mode){
return (function (){
var parsed = dottask.core.parse_bulk_add((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(bulk_text) : cljs.core.deref.call(null,bulk_text)));
dottask.core.toggler(dottask.core.ui_state,cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_).call(null);

return dottask.core.rerender_BANG_(((function (parsed,bulk_text,mode){
return (function (state){
return dottask.core.add_lines.cljs$core$IFn$_invoke$arity$3(state,parsed,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mode) : cljs.core.deref.call(null,mode)));
});})(parsed,bulk_text,mode))
).call(null);
});})(bulk_text,mode))
], null),"Add nodes"], null)], null)], null));
});
;})(bulk_text,mode))
});
dottask.core.graph = (function dottask$core$graph(state){
var vec__12739 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,cljs.core.re_find(/translate\((\d+) (\d+)\)/,cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(state)));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12739,(0),null);
var x_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12739,(1),null);
var y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12739,(2),null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_key_DASH_press,((function (vec__12739,_,x_offset,y_offset){
return (function (p1__12732_SHARP_){
return console.log(p1__12732_SHARP_);
});})(vec__12739,_,x_offset,y_offset))
], null),"Arrow Direction: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state).call(null,dottask.core.directions)),cljs.core.cst$kw$on_DASH_change,((function (vec__12739,_,x_offset,y_offset){
return (function (p1__12733_SHARP_){
return dottask.core.rerender_BANG_(dottask.core.set_direction).call(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__12733_SHARP_.target.value));
});})(vec__12739,_,x_offset,y_offset))
], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12739,_,x_offset,y_offset){
return (function (p__12740){
var vec__12741 = p__12740;
var dirkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12741,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12741,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,dirkey,cljs.core.cst$kw$value,dirkey,cljs.core.cst$kw$on_DASH_click,((function (vec__12741,dirkey,dir,vec__12739,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.set_direction).call(null,dirkey);
});})(vec__12741,dirkey,dir,vec__12739,_,x_offset,y_offset))
], null),cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(dir)], null);
});})(vec__12739,_,x_offset,y_offset))
,dottask.core.directions)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__12739,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.add_node).call(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});})(vec__12739,_,x_offset,y_offset))
], null),"Add card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,dottask.core.toggler(dottask.core.ui_state,cljs.core.cst$kw$bulk_DASH_add_DASH_modal_DASH_visible_QMARK_)], null),"Bulk add"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__12739,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.delete_all).call(null);
});})(vec__12739,_,x_offset,y_offset))
], null),"Delete all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__12739,_,x_offset,y_offset){
return (function (){
return dottask.core.save_hash((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.app_state) : cljs.core.deref.call(null,dottask.core.app_state)));
});})(vec__12739,_,x_offset,y_offset))
], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,historian.core.undo_BANG_], null),"Undo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,historian.core.redo_BANG_], null),"Redo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__12739,_,x_offset,y_offset){
return (function (){
var w = window.open();
return w.document.write([cljs.core.str("<pre>"),cljs.core.str(dottask.core.hesc(dottask.core.graph__GT_dot(cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.app_state) : cljs.core.deref.call(null,dottask.core.app_state))),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.app_state) : cljs.core.deref.call(null,dottask.core.app_state))),cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.app_state) : cljs.core.deref.call(null,dottask.core.app_state))),cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.app_state) : cljs.core.deref.call(null,dottask.core.app_state))).call(null,dottask.core.directions),true))),cljs.core.str("</pre>")].join(''));
});})(vec__12739,_,x_offset,y_offset))
], null),"Show dot"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__12739,_,x_offset,y_offset){
return (function (){
return dottask.core.show_help();
});})(vec__12739,_,x_offset,y_offset))
], null),"Help"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dottask.core.bulk_add_modal], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"dotgraph"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"graph-overlay"], null),(cljs.core.truth_(cljs.core.cst$kw$resize_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.ui_state) : cljs.core.deref.call(null,dottask.core.ui_state))))?(function (){var xmin = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.ui_state) : cljs.core.deref.call(null,dottask.core.ui_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null));
var xmax = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.ui_state) : cljs.core.deref.call(null,dottask.core.ui_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$x,cljs.core.cst$kw$max], null));
var ymin = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.ui_state) : cljs.core.deref.call(null,dottask.core.ui_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null));
var ymax = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.ui_state) : cljs.core.deref.call(null,dottask.core.ui_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_points,cljs.core.cst$kw$y,cljs.core.cst$kw$max], null));
var x = (x_offset + xmin);
var y = (y_offset + ymin);
var width = (xmax - xmin);
var height = (ymax - ymin);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"resize-overlay",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$left,[cljs.core.str(x),cljs.core.str("px")].join(''),cljs.core.cst$kw$top,[cljs.core.str(y),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,[cljs.core.str(width),cljs.core.str("px")].join(''),cljs.core.cst$kw$height,[cljs.core.str(height),cljs.core.str("px")].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"task-text"], null),cljs.core.cst$kw$resize_DASH_label.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.ui_state) : cljs.core.deref.call(null,dottask.core.ui_state)))], null)], null);
})():null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12739,_,x_offset,y_offset){
return (function (node){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$class,[cljs.core.str("node-overlay"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1(state)))?" selected":null)),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$cluster.cljs$core$IFn$_invoke$arity$1(node))?" cluster-node":null))].join(''),cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(cljs.core.cst$kw$cluster.cljs$core$IFn$_invoke$arity$1(node))?((function (vec__12739,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(((function (vec__12739,_,x_offset,y_offset){
return (function (state__$1){
return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$collapsed], null),false);
});})(vec__12739,_,x_offset,y_offset))
).call(null);
});})(vec__12739,_,x_offset,y_offset))
:null),cljs.core.cst$kw$on_DASH_double_DASH_click,((function (vec__12739,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.add_cluster).call(null,dottask.core.prompt("Enter title for box:",""),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node)], null));
});})(vec__12739,_,x_offset,y_offset))
,cljs.core.cst$kw$data_DASH_nodeid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$on_DASH_mouse_DASH_down,(cljs.core.truth_(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node))?((function (vec__12739,_,x_offset,y_offset){
return (function (p1__12734_SHARP_){
return dottask.core.node_mousedown(p1__12734_SHARP_,cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state));
});})(vec__12739,_,x_offset,y_offset))
:null),cljs.core.cst$kw$on_DASH_touch_DASH_start,(cljs.core.truth_(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node))?((function (vec__12739,_,x_offset,y_offset){
return (function (p1__12735_SHARP_){
return dottask.core.node_mousedown(p1__12735_SHARP_,cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(state));
});})(vec__12739,_,x_offset,y_offset))
:null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$left,[cljs.core.str((x_offset + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$top,[cljs.core.str((y_offset + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,[cljs.core.str((dottask.core.get_node_dim(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$width) * dottask.core.ppi)),cljs.core.str("px")].join(''),cljs.core.cst$kw$height,[cljs.core.str((dottask.core.get_node_dim(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$height) * dottask.core.ppi)),cljs.core.str("px")].join(''),cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node),"")], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"node-sidebar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"delete",cljs.core.cst$kw$title,"Delete",cljs.core.cst$kw$on_DASH_click,((function (vec__12739,_,x_offset,y_offset){
return (function (){
if(cljs.core.truth_(cljs.core.cst$kw$cluster.cljs$core$IFn$_invoke$arity$1(node))){
return dottask.core.rerender_BANG_(dottask.core.delete_cluster).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),true);
} else {
return dottask.core.rerender_BANG_(dottask.core.delete_node).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node));
}
});})(vec__12739,_,x_offset,y_offset))
], null),"\u00D7"], null),(cljs.core.truth_(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"color-picker"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12739,_,x_offset,y_offset){
return (function (color){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(color)),cljs.core.str(" (shortcut "),cljs.core.str(cljs.core.cst$kw$shortcut.cljs$core$IFn$_invoke$arity$1(color)),cljs.core.str(")")].join(''),cljs.core.cst$kw$class,"color-swatch",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$hex.cljs$core$IFn$_invoke$arity$1(color)], null),cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(color),cljs.core.cst$kw$on_DASH_click,((function (vec__12739,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.recolor_node).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$hex.cljs$core$IFn$_invoke$arity$1(color));
});})(vec__12739,_,x_offset,y_offset))
], null)], null);
});})(vec__12739,_,x_offset,y_offset))
,dottask.core.colors)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"task-text",cljs.core.cst$kw$title,"Click to Change",cljs.core.cst$kw$on_DASH_click,((function (vec__12739,_,x_offset,y_offset){
return (function (e){
dottask.core.rerender_BANG_((cljs.core.truth_(cljs.core.cst$kw$cluster.cljs$core$IFn$_invoke$arity$1(node))?dottask.core.rename_cluster_prompt:dottask.core.rename_prompt)).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(node));

return false;
});})(vec__12739,_,x_offset,y_offset))
], null),(function (){var or__4671__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$node,cljs.core.cst$kw$text], null));
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cluster,cljs.core.cst$kw$text], null));
}
})()], null),(cljs.core.truth_(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(node))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"draggable node-resize"], null),""], null):null)], null);
});})(vec__12739,_,x_offset,y_offset))
,cljs.core.cst$kw$gnodes.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12739,_,x_offset,y_offset){
return (function (cluster){
var top = (((1) + y_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cluster,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)));
var left = (((1) + x_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cluster,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)));
var right = (((-1) + x_offset) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cluster,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,cljs.core.cst$kw$x,cljs.core.cst$kw$max], null)));
var width = (right - left);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$class,"cluster-overlay",cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster),cljs.core.cst$kw$data_DASH_clusterid,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster),cljs.core.cst$kw$on_DASH_mouse_DASH_down,dottask.core.cluster_mousedown,cljs.core.cst$kw$on_DASH_touch_DASH_start,dottask.core.cluster_mousedown,cljs.core.cst$kw$on_DASH_click,((function (top,left,right,width,vec__12739,_,x_offset,y_offset){
return (function (){
return dottask.core.rerender_BANG_(dottask.core.rename_cluster_prompt).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster));
});})(top,left,right,width,vec__12739,_,x_offset,y_offset))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$left,[cljs.core.str(left),cljs.core.str("px")].join(''),cljs.core.cst$kw$top,[cljs.core.str(top),cljs.core.str("px")].join(''),cljs.core.cst$kw$width,[cljs.core.str(width),cljs.core.str("px")].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"collapse",cljs.core.cst$kw$title,"Collapse",cljs.core.cst$kw$on_DASH_click,((function (top,left,right,width,vec__12739,_,x_offset,y_offset){
return (function (e){
dottask.core.rerender_BANG_(((function (top,left,right,width,vec__12739,_,x_offset,y_offset){
return (function (state__$1){
return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clusters,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster),cljs.core.cst$kw$collapsed], null),true);
});})(top,left,right,width,vec__12739,_,x_offset,y_offset))
).call(null);

return false;
});})(top,left,right,width,vec__12739,_,x_offset,y_offset))
], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"delete",cljs.core.cst$kw$title,"Delete",cljs.core.cst$kw$on_DASH_click,((function (top,left,right,width,vec__12739,_,x_offset,y_offset){
return (function (e){
dottask.core.rerender_BANG_(dottask.core.delete_cluster).call(null,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster));

return false;
});})(top,left,right,width,vec__12739,_,x_offset,y_offset))
], null),"\u00D7"], null),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cluster)))], null);
});})(vec__12739,_,x_offset,y_offset))
,cljs.core.cst$kw$gclusters.cljs$core$IFn$_invoke$arity$1(state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(state)], null)], null)], null)], null)], null);
});
React.initializeTouchEvents(true);
document.onkeydown = (function (evt){
var shift = evt.shiftKey;
var selected = cljs.core.cst$kw$selected_DASH_node_DASH_id.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dottask.core.app_state) : cljs.core.deref.call(null,dottask.core.app_state)));
var keycode = evt.which;
var keychar = clojure.string.lower_case(cljs.core.char$(keycode));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dottask.core.color_keycode_lookup,keychar);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.body,evt.target)){
var G__12742_12745 = keycode;
switch (G__12742_12745) {
case (27):
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dottask.core.app_state,cljs.core.assoc,cljs.core.cst$kw$selected_DASH_node_DASH_id,null);

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
dottask.core.rerender_BANG_(dottask.core.delete_node).call(null,selected);

break;
case (69):
dottask.core.rerender_BANG_(dottask.core.rename_prompt).call(null,selected);

break;
case (73):
dottask.core.rerender_BANG_(dottask.core.add_cluster).call(null,dottask.core.prompt("Enter title for box:",""),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected], null));

break;
case (74):
var _STAR_record_active_STAR_12743_12747 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{dottask.core.rerender_BANG_(dottask.core.select_next_node).call(null,(1));
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_12743_12747;
}
break;
case (75):
var _STAR_record_active_STAR_12744_12748 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{dottask.core.rerender_BANG_(dottask.core.select_next_node).call(null,(-1));
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_12744_12748;
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
dottask.core.rerender_BANG_(dottask.core.on_toggle_dep_click).call(null,selected,(cljs.core.truth_(shift)?dottask.core.prompt("Enter link text:",""):null));

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
cljs.core.add_watch(dottask.core.ui_state,cljs.core.cst$kw$on_DASH_change,(function (_,___$1,___$2,___$3){
return dottask.core.render_BANG_();
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.core.app_state,dottask.core.update_state);
historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2(dottask.core.app_state,cljs.core.cst$kw$app_DASH_state);
