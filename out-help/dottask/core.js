// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('dottask.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('tubax.core');
goog.require('goog.events');
goog.require('devtools.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.html.SafeHtml');
dottask.core.colors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"white",cljs.core.cst$kw$hex,"#C9C9C9",cljs.core.cst$kw$shortcut,"w"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"red",cljs.core.cst$kw$hex,"#D1686E",cljs.core.cst$kw$shortcut,"r"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"orange",cljs.core.cst$kw$hex,"#D4B06A",cljs.core.cst$kw$shortcut,"o"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"yellow",cljs.core.cst$kw$hex,"#D4D36A",cljs.core.cst$kw$shortcut,"y"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"green",cljs.core.cst$kw$hex,"#5FAE57",cljs.core.cst$kw$shortcut,"g"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"blue",cljs.core.cst$kw$hex,"#4E638E",cljs.core.cst$kw$shortcut,"b"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"violet",cljs.core.cst$kw$hex,"#744B8E",cljs.core.cst$kw$shortcut,"v"], null)], null);
dottask.core.color_keycode_lookup = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$shortcut,dottask.core.colors),dottask.core.colors);
dottask.core.directions = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$up,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$label,"up",cljs.core.cst$kw$dot,"BT",cljs.core.cst$kw$coord,cljs.core.cst$kw$y,cljs.core.cst$kw$before,cljs.core._GT_,cljs.core.cst$kw$rotation,"0deg"], null),cljs.core.cst$kw$down,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$label,"down",cljs.core.cst$kw$dot,"TB",cljs.core.cst$kw$coord,cljs.core.cst$kw$y,cljs.core.cst$kw$before,cljs.core._LT_,cljs.core.cst$kw$rotation,"180deg"], null),cljs.core.cst$kw$left,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$label,"left",cljs.core.cst$kw$dot,"RL",cljs.core.cst$kw$coord,cljs.core.cst$kw$x,cljs.core.cst$kw$before,cljs.core._GT_,cljs.core.cst$kw$rotation,"270deg"], null),cljs.core.cst$kw$right,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$label,"right",cljs.core.cst$kw$dot,"LR",cljs.core.cst$kw$coord,cljs.core.cst$kw$x,cljs.core.cst$kw$before,cljs.core._LT_,cljs.core.cst$kw$rotation,"90deg"], null)], null);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5443__auto__ = (function dottask$core$map_vals_$_iter__19484(s__19485){
return (new cljs.core.LazySeq(null,(function (){
var s__19485__$1 = s__19485;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19485__$1);
if(temp__4425__auto__){
var s__19485__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19485__$2)){
var c__5441__auto__ = cljs.core.chunk_first(s__19485__$2);
var size__5442__auto__ = cljs.core.count(c__5441__auto__);
var b__19487 = cljs.core.chunk_buffer(size__5442__auto__);
if((function (){var i__19486 = (0);
while(true){
if((i__19486 < size__5442__auto__)){
var vec__19492 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5441__auto__,i__19486);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19492,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19492,(1),null);
cljs.core.chunk_append(b__19487,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(v) : func.call(null,v))], null));

var G__19494 = (i__19486 + (1));
i__19486 = G__19494;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19487),dottask$core$map_vals_$_iter__19484(cljs.core.chunk_rest(s__19485__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19487),null);
}
} else {
var vec__19493 = cljs.core.first(s__19485__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19493,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19493,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(v) : func.call(null,v))], null),dottask$core$map_vals_$_iter__19484(cljs.core.rest(s__19485__$2)));
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
dottask.core.vmap = (function dottask$core$vmap(var_args){
var args__5736__auto__ = [];
var len__5729__auto___19496 = arguments.length;
var i__5730__auto___19497 = (0);
while(true){
if((i__5730__auto___19497 < len__5729__auto___19496)){
args__5736__auto__.push((arguments[i__5730__auto___19497]));

var G__19498 = (i__5730__auto___19497 + (1));
i__5730__auto___19497 = G__19498;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return dottask.core.vmap.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

dottask.core.vmap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map,args));
});

dottask.core.vmap.cljs$lang$maxFixedArity = (0);

dottask.core.vmap.cljs$lang$applyTo = (function (seq19495){
return dottask.core.vmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19495));
});
dottask.core.hesc = (function dottask$core$hesc(text){
return goog.html.SafeHtml.htmlEscape(text).getTypedStringValue();
});
/**
 * some things in js like nodelists and touchlists are not seqable
 */
dottask.core.arraylike_to_seq = (function dottask$core$arraylike_to_seq(arr){
var result_seq = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19499_SHARP_){
return arr.item(p1__19499_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(arr.length));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(result_seq);
});
dottask.core.esc = (function dottask$core$esc(text){
var G__19501 = [cljs.core.str(text)].join('');
return goog.string.escapeString(G__19501);
});
dottask.core.changed_touch = (function dottask$core$changed_touch(evt){
if(cljs.core.some_QMARK_(evt.changedTouches)){
return (evt.changedTouches[(0)]);
} else {
return null;
}
});
dottask.core.changed_touch_by_id = (function dottask$core$changed_touch_by_id(evt,id){
if(cljs.core.some_QMARK_(evt.changedTouches)){
return cljs.core.first(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,(function (p1__19502_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__19502_SHARP_.identifier,id);
})).call(null,dottask.core.arraylike_to_seq(evt.changedTouches)));
} else {
return null;
}
});
dottask.core.coords = (function dottask$core$coords(evt){
var base = ((typeof evt.clientX === 'number')?evt:dottask.core.changed_touch(evt));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,base.clientX,cljs.core.cst$kw$y,base.clientY], null);
});
dottask.core.compare_coords = (function dottask$core$compare_coords(this$,other,direction){
var coord = cljs.core.cst$kw$coord.cljs$core$IFn$_invoke$arity$1(direction);
var before = cljs.core.cst$kw$before.cljs$core$IFn$_invoke$arity$1(direction);
if(cljs.core.truth_((function (){var G__19505 = (coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(this$) : coord.call(null,this$));
var G__19506 = (coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(other) : coord.call(null,other));
return (before.cljs$core$IFn$_invoke$arity$2 ? before.cljs$core$IFn$_invoke$arity$2(G__19505,G__19506) : before.call(null,G__19505,G__19506));
})())){
return cljs.core.cst$kw$before;
} else {
return cljs.core.cst$kw$after;
}
});
dottask.core.coords_dist = (function dottask$core$coords_dist(this$,other){
var dx = (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(this$) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(other));
var dy = (cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(this$) - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(other));
var square = ((function (dx,dy){
return (function (p1__19507_SHARP_){
return (p1__19507_SHARP_ * p1__19507_SHARP_);
});})(dx,dy))
;
var G__19509 = (square(dx) + square(dy));
return Math.sqrt(G__19509);
});
dottask.core.bounding_rect = (function dottask$core$bounding_rect(points){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,dottask.core.extent(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$x,points)),cljs.core.cst$kw$y,dottask.core.extent(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$y,points))], null);
});
dottask.core.ranges_overlap_QMARK_ = (function dottask$core$ranges_overlap_QMARK_(range1,range2){
return ((function (){var x__5002__auto__ = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(range1);
var y__5003__auto__ = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(range2);
return ((x__5002__auto__ > y__5003__auto__) ? x__5002__auto__ : y__5003__auto__);
})() <= (function (){var x__5009__auto__ = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(range1);
var y__5010__auto__ = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(range2);
return ((x__5009__auto__ < y__5010__auto__) ? x__5009__auto__ : y__5010__auto__);
})());
});
dottask.core.rects_overlap_QMARK_ = (function dottask$core$rects_overlap_QMARK_(r1,r2){
var and__4659__auto__ = dottask.core.ranges_overlap_QMARK_(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(r1),cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(r2));
if(cljs.core.truth_(and__4659__auto__)){
return dottask.core.ranges_overlap_QMARK_(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(r1),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(r2));
} else {
return and__4659__auto__;
}
});
dottask.core.translate_rect = (function dottask$core$translate_rect(r,x,y){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min,(x + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$min], null))),cljs.core.cst$kw$max,(x + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$max], null)))], null),cljs.core.cst$kw$y,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min,(y + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,cljs.core.cst$kw$min], null))),cljs.core.cst$kw$max,(y + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,cljs.core.cst$kw$max], null)))], null)], null);
});
dottask.core.invert_list_map = (function dottask$core$invert_list_map(hmap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,cljs.core.first(item)], null);
}),cljs.core.second(item));
}),hmap));
});
dottask.core.get_node = (function dottask$core$get_node(nodes,id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19510_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__19510_SHARP_));
}),nodes));
});
dottask.core.get_node_dim = (function dottask$core$get_node_dim(node,dim){
var G__19512 = (((dim instanceof cljs.core.Keyword))?dim.fqn:null);
switch (G__19512) {
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
dottask.core.node_in_link_QMARK_ = (function dottask$core$node_in_link_QMARK_(node_id,link){
return cljs.core.contains_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(link,(0),(2))),node_id);
});
dottask.core.get_el = (function dottask$core$get_el(selector){
return document.querySelector(selector);
});
dottask.core.jump_to_anchor = (function dottask$core$jump_to_anchor(id){
var G__19516 = (function (){
return dottask.core.get_el([cljs.core.str("#"),cljs.core.str(id)].join('')).scrollIntoView();
});
var G__19517 = (1);
return setTimeout(G__19516,G__19517);
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
dottask.core.center = (function dottask$core$center(point){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$max], null))) / (2)),cljs.core.cst$kw$y,((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,cljs.core.cst$kw$max], null))) / (2))], null);
});
dottask.core.width = (function dottask$core$width(rect){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$max], null)) - cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$min], null)));
});
dottask.core.height = (function dottask$core$height(rect){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,cljs.core.cst$kw$max], null)) - cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y,cljs.core.cst$kw$min], null)));
});
dottask.core.rad__GT_deg = (function dottask$core$rad__GT_deg(rad){
return ((rad * (180)) / Math.PI);
});
dottask.core.get_angle = (function dottask$core$get_angle(start,end){
return dottask.core.rad__GT_deg((function (){var G__19520 = (cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(end) - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(start));
var G__19521 = (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(end) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(start));
return Math.atan2(G__19520,G__19521);
})());
});
dottask.core.polygon_points = (function dottask$core$polygon_points(var_args){
var args19522 = [];
var len__5729__auto___19525 = arguments.length;
var i__5730__auto___19526 = (0);
while(true){
if((i__5730__auto___19526 < len__5729__auto___19525)){
args19522.push((arguments[i__5730__auto___19526]));

var G__19527 = (i__5730__auto___19526 + (1));
i__5730__auto___19526 = G__19527;
continue;
} else {
}
break;
}

var G__19524 = args19522.length;
switch (G__19524) {
case 2:
return dottask.core.polygon_points.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dottask.core.polygon_points.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19522.length)].join('')));

}
});

dottask.core.polygon_points.cljs$core$IFn$_invoke$arity$2 = (function (start,moves){
return dottask.core.polygon_points.cljs$core$IFn$_invoke$arity$3(start,moves,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null));
});

dottask.core.polygon_points.cljs$core$IFn$_invoke$arity$3 = (function (start,moves,so_far){
if(cljs.core.truth_(cljs.core.not_empty(moves))){
return dottask.core.polygon_points.cljs$core$IFn$_invoke$arity$3(start,cljs.core.rest(moves),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(so_far,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,cljs.core.last(so_far),cljs.core.first(moves)))));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join,","),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(so_far,start)));
}
});

dottask.core.polygon_points.cljs$lang$maxFixedArity = 3;
dottask.core.btn = (function dottask$core$btn(opts,contents){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"button"], null),opts], 0)),contents], null);
});
dottask.core.icon = (function dottask$core$icon(var_args){
var args19529 = [];
var len__5729__auto___19532 = arguments.length;
var i__5730__auto___19533 = (0);
while(true){
if((i__5730__auto___19533 < len__5729__auto___19532)){
args19529.push((arguments[i__5730__auto___19533]));

var G__19534 = (i__5730__auto___19533 + (1));
i__5730__auto___19533 = G__19534;
continue;
} else {
}
break;
}

var G__19531 = args19529.length;
switch (G__19531) {
case 2:
return dottask.core.icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dottask.core.icon.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19529.length)].join('')));

}
});

dottask.core.icon.cljs$core$IFn$_invoke$arity$2 = (function (name,size){
return dottask.core.icon.cljs$core$IFn$_invoke$arity$3(name,size,cljs.core.PersistentArrayMap.EMPTY);
});

dottask.core.icon.cljs$core$IFn$_invoke$arity$3 = (function (name,size,style){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,size,cljs.core.cst$kw$height,size], null),style], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#"),cljs.core.str(name)].join('')], null)], null)], null);
});

dottask.core.icon.cljs$lang$maxFixedArity = 3;
dottask.core.modal = (function dottask$core$modal(is_visible_QMARK_,close_BANG_,options,contents){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (e){
if(cljs.core.truth_((function (){var G__19538 = e.target;
var G__19539 = "modal-backdrop";
return goog.dom.classlist.contains(G__19538,G__19539);
})())){
return (close_BANG_.cljs$core$IFn$_invoke$arity$0 ? close_BANG_.cljs$core$IFn$_invoke$arity$0() : close_BANG_.call(null));
} else {
return null;
}
}),cljs.core.cst$kw$class,[cljs.core.str("modal-backdrop"),cljs.core.str((cljs.core.truth_((is_visible_QMARK_.cljs$core$IFn$_invoke$arity$0 ? is_visible_QMARK_.cljs$core$IFn$_invoke$arity$0() : is_visible_QMARK_.call(null)))?"":" hidden"))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("modal "),cljs.core.str(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$2(options,""))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"x-button",cljs.core.cst$kw$on_DASH_click,close_BANG_], null),"\u00D7"], null),contents], null)], null);
});
dottask.core.keyed_modal = (function dottask$core$keyed_modal(state,modal_key,options,contents){
return dottask.core.modal((function (){
var G__19541 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return (modal_key.cljs$core$IFn$_invoke$arity$1 ? modal_key.cljs$core$IFn$_invoke$arity$1(G__19541) : modal_key.call(null,G__19541));
}),dottask.core.toggler(state,modal_key),options,contents);
});
dottask.core.text_area = (function dottask$core$text_area(value,attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rows,(20),cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)),cljs.core.cst$kw$on_DASH_change,(function (p1__19542_SHARP_){
var G__19545 = value;
var G__19546 = p1__19542_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19545,G__19546) : cljs.core.reset_BANG_.call(null,G__19545,G__19546));
})], null),attrs], 0))], null);
});
dottask.core.a_link = (function dottask$core$a_link(var_args){
var args19547 = [];
var len__5729__auto___19550 = arguments.length;
var i__5730__auto___19551 = (0);
while(true){
if((i__5730__auto___19551 < len__5729__auto___19550)){
args19547.push((arguments[i__5730__auto___19551]));

var G__19552 = (i__5730__auto___19551 + (1));
i__5730__auto___19551 = G__19552;
continue;
} else {
}
break;
}

var G__19549 = args19547.length;
switch (G__19549) {
case 2:
return dottask.core.a_link.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dottask.core.a_link.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19547.length)].join('')));

}
});

dottask.core.a_link.cljs$core$IFn$_invoke$arity$2 = (function (id,text){
return dottask.core.a_link.cljs$core$IFn$_invoke$arity$3(id,text,null);
});

dottask.core.a_link.cljs$core$IFn$_invoke$arity$3 = (function (id,text,func){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"javascript:",cljs.core.cst$kw$on_DASH_click,(function (){
if(cljs.core.truth_(func)){
(func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
} else {
}

return dottask.core.jump_to_anchor(id);
})], null),text], null);
});

dottask.core.a_link.cljs$lang$maxFixedArity = 3;
