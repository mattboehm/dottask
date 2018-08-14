// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('tubax.core');
goog.require('cljs.core');
tubax.core.new_document = (function tubax$core$new_document(){
return cljs.core.List.EMPTY;
});
tubax.core.add_node_document = (function tubax$core$add_node_document(node,document){
var keytag = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(node.name);
var att_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(node.attributes,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
var node_value = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,keytag,cljs.core.cst$kw$attributes,att_map,cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(document,node_value);
});
tubax.core.close_node_document = (function tubax$core$close_node_document(node,document){
if(!(cljs.core.empty_QMARK_(cljs.core.rest(document)))){
var current_node = cljs.core.first(document);
var father_node = cljs.core.first(cljs.core.rest(document));
var father_children = cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(father_node);
var new_father = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(father_node,cljs.core.cst$kw$content,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(father_children,current_node));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.rest(document)),new_father);
} else {
return document;
}
});
tubax.core.add_text = (function tubax$core$add_text(text,document){
if(!(cljs.core.empty_QMARK_(text))){
var current_node = cljs.core.first(document);
var node_children = cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(current_node);
var new_node_value = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_node,cljs.core.cst$kw$content,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_children,text));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(document),new_node_value);
} else {
return document;
}
});
tubax.core.format_document = (function tubax$core$format_document(document){
return cljs.core.first(document);
});
tubax.core.xml__GT_clj = (function tubax$core$xml__GT_clj(var_args){
var args17786 = [];
var len__5729__auto___17797 = arguments.length;
var i__5730__auto___17798 = (0);
while(true){
if((i__5730__auto___17798 < len__5729__auto___17797)){
args17786.push((arguments[i__5730__auto___17798]));

var G__17799 = (i__5730__auto___17798 + (1));
i__5730__auto___17798 = G__17799;
continue;
} else {
}
break;
}

var G__17788 = args17786.length;
switch (G__17788) {
case 1:
return tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17786.length)].join('')));

}
});

tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$1 = (function (source){
return tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$2(source,cljs.core.PersistentArrayMap.EMPTY);
});

tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$2 = (function (source,p__17789){
var map__17790 = p__17789;
var map__17790__$1 = ((((!((map__17790 == null)))?((((map__17790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17790):map__17790);
var strict = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17790__$1,cljs.core.cst$kw$strict,true);
var trim = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17790__$1,cljs.core.cst$kw$trim,true);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17790__$1,cljs.core.cst$kw$normalize,false);
var lowercase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17790__$1,cljs.core.cst$kw$lowercase,true);
var xmlns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17790__$1,cljs.core.cst$kw$xmlns);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17790__$1,cljs.core.cst$kw$position,true);
var strict_entities = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17790__$1,cljs.core.cst$kw$strict_DASH_entities,false);
var parser = sax.parser(strict,{"trim": trim, "normalize": normalize, "lowercase": lowercase, "xmlns": xmlns, "position": position, "strictEntities": strict_entities});
var document = (function (){var G__17792 = tubax.core.new_document();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17792) : cljs.core.atom.call(null,G__17792));
})();
var result = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
parser.onopentag = ((function (parser,document,result,map__17790,map__17790__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (p1__17781_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(document,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tubax.core.add_node_document,p1__17781_SHARP_));
});})(parser,document,result,map__17790,map__17790__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.onclosetag = ((function (parser,document,result,map__17790,map__17790__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (p1__17782_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(document,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tubax.core.close_node_document,p1__17782_SHARP_));
});})(parser,document,result,map__17790,map__17790__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.ontext = ((function (parser,document,result,map__17790,map__17790__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (p1__17783_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(document,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tubax.core.add_text,p1__17783_SHARP_));
});})(parser,document,result,map__17790,map__17790__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.oncdata = ((function (parser,document,result,map__17790,map__17790__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (p1__17784_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(document,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tubax.core.add_text,p1__17784_SHARP_));
});})(parser,document,result,map__17790,map__17790__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.onend = ((function (parser,document,result,map__17790,map__17790__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (){
if(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(result) : cljs.core.deref.call(null,result)) == null)){
var G__17793 = result;
var G__17794 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$success,tubax.core.format_document((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(document) : cljs.core.deref.call(null,document)))], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17793,G__17794) : cljs.core.reset_BANG_.call(null,G__17793,G__17794));
} else {
return null;
}
});})(parser,document,result,map__17790,map__17790__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.onerror = ((function (parser,document,result,map__17790,map__17790__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (p1__17785_SHARP_){
var G__17795 = result;
var G__17796 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,[cljs.core.str(p1__17785_SHARP_)].join('')], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17795,G__17796) : cljs.core.reset_BANG_.call(null,G__17795,G__17796));
});})(parser,document,result,map__17790,map__17790__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.write(source);

parser.close();

var or__4671__auto__ = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(result) : cljs.core.deref.call(null,result)));
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(result) : cljs.core.deref.call(null,result))))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

tubax.core.xml__GT_clj.cljs$lang$maxFixedArity = 2;
