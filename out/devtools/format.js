// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.prefs');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__5326__auto__ = (((value == null))?null:value);
var m__5327__auto__ = (devtools.format._header[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5327__auto__.call(null,value));
} else {
var m__5327__auto____$1 = (devtools.format._header["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__5327__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__5326__auto__ = (((value == null))?null:value);
var m__5327__auto__ = (devtools.format._has_body[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5327__auto__.call(null,value));
} else {
var m__5327__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__5327__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__5326__auto__ = (((value == null))?null:value);
var m__5327__auto__ = (devtools.format._body[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5327__auto__.call(null,value));
} else {
var m__5327__auto____$1 = (devtools.format._body["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__5327__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format._STAR_current_state_STAR_ = null;
devtools.format.get_current_state = (function devtools$format$get_current_state(){
return devtools.format._STAR_current_state_STAR_;
});
devtools.format.update_current_state_BANG_ = (function devtools$format$update_current_state_BANG_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___12070 = arguments.length;
var i__5730__auto___12071 = (0);
while(true){
if((i__5730__auto___12071 < len__5729__auto___12070)){
args__5736__auto__.push((arguments[i__5730__auto___12071]));

var G__12072 = (i__5730__auto___12071 + (1));
i__5730__auto___12071 = G__12072;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return devtools.format.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

devtools.format.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return devtools.format._STAR_current_state_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,devtools.format._STAR_current_state_STAR_,args);
});

devtools.format.update_current_state_BANG_.cljs$lang$maxFixedArity = (1);

devtools.format.update_current_state_BANG_.cljs$lang$applyTo = (function (seq12068){
var G__12069 = cljs.core.first(seq12068);
var seq12068__$1 = cljs.core.next(seq12068);
return devtools.format.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12069,seq12068__$1);
});
devtools.format.push_object_to_current_history_BANG_ = (function devtools$format$push_object_to_current_history_BANG_(object){
return devtools.format.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.array_seq([cljs.core.cst$kw$history,cljs.core.conj,object], 0));
});
devtools.format.get_current_history = (function devtools$format$get_current_history(){
return cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(devtools.format.get_current_state());
});
devtools.format.cljs_value_QMARK_ = (function devtools$format$cljs_value_QMARK_(value){
if(cljs.core.truth_(goog.isObject(value))){
var temp__4425__auto__ = goog.object.get(value,"constructor");
if(cljs.core.truth_(temp__4425__auto__)){
var o__11331__auto__ = temp__4425__auto__;
return goog.object.get(o__11331__auto__,"cljs$lang$type");
} else {
return null;
}
} else {
return null;
}
});
devtools.format.prevent_recursion_QMARK_ = (function devtools$format$prevent_recursion_QMARK_(){
return cljs.core.boolean$(cljs.core.cst$kw$prevent_DASH_recursion.cljs$core$IFn$_invoke$arity$1(devtools.format.get_current_state()));
});
devtools.format.set_prevent_recursion_BANG_ = (function devtools$format$set_prevent_recursion_BANG_(){
return devtools.format.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$kw$prevent_DASH_recursion,true], 0));
});
devtools.format.template = (function devtools$format$template(var_args){
var args__5736__auto__ = [];
var len__5729__auto___12080 = arguments.length;
var i__5730__auto___12081 = (0);
while(true){
if((i__5730__auto___12081 < len__5729__auto___12080)){
args__5736__auto__.push((arguments[i__5730__auto___12081]));

var G__12082 = (i__5730__auto___12081 + (1));
i__5730__auto___12081 = G__12082;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var resolve_pref = (function (pref_or_val){
if((pref_or_val instanceof cljs.core.Keyword)){
return devtools.prefs.pref(pref_or_val);
} else {
return pref_or_val;
}
});
var tag__$1 = resolve_pref(tag);
var style__$1 = resolve_pref(style);
var js_array = [tag__$1,((cljs.core.empty_QMARK_(style__$1))?{}:{"style": style__$1})];
var seq__12076_12083 = cljs.core.seq(children);
var chunk__12077_12084 = null;
var count__12078_12085 = (0);
var i__12079_12086 = (0);
while(true){
if((i__12079_12086 < count__12078_12085)){
var child_12087 = chunk__12077_12084.cljs$core$IIndexed$_nth$arity$2(null,i__12079_12086);
if(cljs.core.coll_QMARK_(child_12087)){
(js_array["push"]).apply(js_array,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(child_12087));
} else {
js_array.push(resolve_pref(child_12087));
}

var G__12088 = seq__12076_12083;
var G__12089 = chunk__12077_12084;
var G__12090 = count__12078_12085;
var G__12091 = (i__12079_12086 + (1));
seq__12076_12083 = G__12088;
chunk__12077_12084 = G__12089;
count__12078_12085 = G__12090;
i__12079_12086 = G__12091;
continue;
} else {
var temp__4425__auto___12092 = cljs.core.seq(seq__12076_12083);
if(temp__4425__auto___12092){
var seq__12076_12093__$1 = temp__4425__auto___12092;
if(cljs.core.chunked_seq_QMARK_(seq__12076_12093__$1)){
var c__5474__auto___12094 = cljs.core.chunk_first(seq__12076_12093__$1);
var G__12095 = cljs.core.chunk_rest(seq__12076_12093__$1);
var G__12096 = c__5474__auto___12094;
var G__12097 = cljs.core.count(c__5474__auto___12094);
var G__12098 = (0);
seq__12076_12083 = G__12095;
chunk__12077_12084 = G__12096;
count__12078_12085 = G__12097;
i__12079_12086 = G__12098;
continue;
} else {
var child_12099 = cljs.core.first(seq__12076_12093__$1);
if(cljs.core.coll_QMARK_(child_12099)){
(js_array["push"]).apply(js_array,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(child_12099));
} else {
js_array.push(resolve_pref(child_12099));
}

var G__12100 = cljs.core.next(seq__12076_12093__$1);
var G__12101 = null;
var G__12102 = (0);
var G__12103 = (0);
seq__12076_12083 = G__12100;
chunk__12077_12084 = G__12101;
count__12078_12085 = G__12102;
i__12079_12086 = G__12103;
continue;
}
} else {
}
}
break;
}

return js_array;
});

devtools.format.template.cljs$lang$maxFixedArity = (2);

devtools.format.template.cljs$lang$applyTo = (function (seq12073){
var G__12074 = cljs.core.first(seq12073);
var seq12073__$1 = cljs.core.next(seq12073);
var G__12075 = cljs.core.first(seq12073__$1);
var seq12073__$2 = cljs.core.next(seq12073__$1);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(G__12074,G__12075,seq12073__$2);
});
devtools.format.surrogate_QMARK_ = (function devtools$format$surrogate_QMARK_(value){
var and__4659__auto__ = !((value == null));
if(and__4659__auto__){
return (value[devtools.prefs.pref(cljs.core.cst$kw$surrogate_DASH_key)]);
} else {
return and__4659__auto__;
}
});
devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args12104 = [];
var len__5729__auto___12110 = arguments.length;
var i__5730__auto___12111 = (0);
while(true){
if((i__5730__auto___12111 < len__5729__auto___12110)){
args12104.push((arguments[i__5730__auto___12111]));

var G__12112 = (i__5730__auto___12111 + (1));
i__5730__auto___12111 = G__12112;
continue;
} else {
}
break;
}

var G__12106 = args12104.length;
switch (G__12106) {
case 2:
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12104.length)].join('')));

}
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$3(object,header,true);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,has_body){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$4(object,header,has_body,null);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,has_body,body_template){
var G__12107 = devtools.prefs.pref(cljs.core.cst$kw$surrogate_DASH_key);
var obj12109 = {"target":object,"header":header,"hasBody":has_body,"bodyTemplate":body_template};
(obj12109[G__12107] = true);

return obj12109;
});

devtools.format.surrogate.cljs$lang$maxFixedArity = 4;
devtools.format.get_target_object = (function devtools$format$get_target_object(value){
if(cljs.core.truth_(devtools.format.surrogate_QMARK_(value))){
return goog.object.get(value,"target");
} else {
return value;
}
});
devtools.format.positions = (function devtools$format$positions(pred,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return idx;
} else {
return null;
}
}),coll);
});
devtools.format.remove_positions = (function devtools$format$remove_positions(coll,indices){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
if(!(cljs.core.contains_QMARK_(indices,idx))){
return x;
} else {
return null;
}
}),coll);
});
devtools.format.is_circular_QMARK__BANG_ = (function devtools$format$is_circular_QMARK__BANG_(object){
var current_state = devtools.format.get_current_state();
if(cljs.core.truth_(cljs.core.cst$kw$entered_DASH_reference.cljs$core$IFn$_invoke$arity$1(current_state))){
devtools.format.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc,cljs.core.array_seq([cljs.core.cst$kw$entered_DASH_reference], 0));

return false;
} else {
var history = devtools.format.get_current_history();
return cljs.core.some(((function (history,current_state){
return (function (p1__12114_SHARP_){
return (p1__12114_SHARP_ === object);
});})(history,current_state))
,history);
}
});
devtools.format.circular_reference_template = (function devtools$format$circular_reference_template(content_group){
return devtools.format.template(cljs.core.cst$kw$span,cljs.core.cst$kw$circular_DASH_reference_DASH_wrapper_DASH_style).concat([devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$circular_DASH_reference_DASH_style,cljs.core.array_seq([[cljs.core.str(devtools.prefs.pref(cljs.core.cst$kw$circular_DASH_reference_DASH_label))].join('')], 0))],content_group);
});
devtools.format.reference = (function devtools$format$reference(object){
devtools.format.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$kw$entered_DASH_reference,true], 0));

return ["object",{"object": object, "config": devtools.format.get_current_state()}];
});
devtools.format.index_template = (function devtools$format$index_template(value){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$index_DASH_style,cljs.core.array_seq([value,cljs.core.cst$kw$line_DASH_index_DASH_separator], 0));
});
devtools.format.number_template = (function devtools$format$number_template(value){
if(cljs.core.integer_QMARK_(value)){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$integer_DASH_style,cljs.core.array_seq([value], 0));
} else {
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$float_DASH_style,cljs.core.array_seq([value], 0));
}
});
devtools.format.build_header;
devtools.format.meta_template = (function devtools$format$meta_template(value){
var header_template = devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$meta_DASH_style,cljs.core.array_seq(["meta"], 0));
var body_template = devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$meta_DASH_body_DASH_style,cljs.core.array_seq([(devtools.format.build_header.cljs$core$IFn$_invoke$arity$1 ? devtools.format.build_header.cljs$core$IFn$_invoke$arity$1(value) : devtools.format.build_header.call(null,value))], 0));
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$meta_DASH_reference_DASH_style,cljs.core.array_seq([devtools.format.reference(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$4(value,header_template,true,body_template))], 0));
});
devtools.format.abbreviate_long_string = (function devtools$format$abbreviate_long_string(string){
return [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2(devtools.prefs.pref(cljs.core.cst$kw$string_DASH_prefix_DASH_limit),string))),cljs.core.str(devtools.prefs.pref(cljs.core.cst$kw$string_DASH_abbreviation_DASH_marker)),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_last(devtools.prefs.pref(cljs.core.cst$kw$string_DASH_postfix_DASH_limit),string)))].join('');
});
devtools.format.string_template = (function devtools$format$string_template(source_string){
var dq = devtools.prefs.pref(cljs.core.cst$kw$dq);
var re_nl = (new RegExp("\n","g"));
var inline_string = source_string.replace(re_nl,devtools.prefs.pref(cljs.core.cst$kw$new_DASH_line_DASH_string_DASH_replacer));
var max_inline_string_size = (devtools.prefs.pref(cljs.core.cst$kw$string_DASH_prefix_DASH_limit) + devtools.prefs.pref(cljs.core.cst$kw$string_DASH_postfix_DASH_limit));
if((cljs.core.count(inline_string) <= max_inline_string_size)){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$string_DASH_style,cljs.core.array_seq([[cljs.core.str(dq),cljs.core.str(inline_string),cljs.core.str(dq)].join('')], 0));
} else {
var abbreviated_string_template = devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$string_DASH_style,cljs.core.array_seq([[cljs.core.str(dq),cljs.core.str(devtools.format.abbreviate_long_string(inline_string)),cljs.core.str(dq)].join('')], 0));
var string_with_nl_markers = source_string.replace(re_nl,[cljs.core.str(devtools.prefs.pref(cljs.core.cst$kw$new_DASH_line_DASH_string_DASH_replacer)),cljs.core.str("\n")].join(''));
var body_template = devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$expanded_DASH_string_DASH_style,cljs.core.array_seq([string_with_nl_markers], 0));
return devtools.format.reference(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$4(source_string,abbreviated_string_template,true,body_template));
}
});
devtools.format.bool_QMARK_ = (function devtools$format$bool_QMARK_(value){
return (value === true) || (value === false);
});
devtools.format.atomic_template = (function devtools$format$atomic_template(value){
if((value == null)){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$nil_DASH_style,cljs.core.array_seq([cljs.core.cst$kw$nil_DASH_label], 0));
} else {
if(cljs.core.truth_(devtools.format.bool_QMARK_(value))){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$bool_DASH_style,cljs.core.array_seq([value], 0));
} else {
if(typeof value === 'string'){
return devtools.format.string_template(value);
} else {
if(typeof value === 'number'){
return devtools.format.number_template(value);
} else {
if((value instanceof cljs.core.Keyword)){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$keyword_DASH_style,cljs.core.array_seq([[cljs.core.str(value)].join('')], 0));
} else {
if((value instanceof cljs.core.Symbol)){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$symbol_DASH_style,cljs.core.array_seq([[cljs.core.str(value)].join('')], 0));
} else {
return null;
}
}
}
}
}
}
});
devtools.format.abbreviated_QMARK_ = (function devtools$format$abbreviated_QMARK_(template){
return cljs.core.some((function (p1__12115_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.pref(cljs.core.cst$kw$more_DASH_marker),p1__12115_SHARP_);
}),template);
});
devtools.format.seq_count_is_greater_or_equal_QMARK_ = (function devtools$format$seq_count_is_greater_or_equal_QMARK_(seq,limit){
var chunk = cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,seq);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(chunk),limit);
});
devtools.format.expandable_QMARK_ = (function devtools$format$expandable_QMARK_(obj){
var and__4659__auto__ = devtools.prefs.pref(cljs.core.cst$kw$seqables_DASH_always_DASH_expandable);
if(cljs.core.truth_(and__4659__auto__)){
var and__4659__auto____$1 = cljs.core.seqable_QMARK_(obj);
if(and__4659__auto____$1){
return devtools.format.seq_count_is_greater_or_equal_QMARK_(obj,devtools.prefs.pref(cljs.core.cst$kw$min_DASH_sequable_DASH_count_DASH_for_DASH_expansion));
} else {
return and__4659__auto____$1;
}
} else {
return and__4659__auto__;
}
});

/**
* @constructor
 * @implements {devtools.format.Object}
 * @implements {cljs.core.IWriter}
*/
devtools.format.TemplateWriter = (function (group){
this.group = group;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devtools.format.TemplateWriter.prototype.merge = (function (a){
var self__ = this;
var _ = this;
return self__.group.push.apply(self__.group,a);
});

devtools.format.TemplateWriter.prototype.get_group = (function (){
var self__ = this;
var _ = this;
return self__.group;
});

devtools.format.TemplateWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return self__.group.push(o);
});

devtools.format.TemplateWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

devtools.format.TemplateWriter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$group], null);
});

devtools.format.TemplateWriter.cljs$lang$type = true;

devtools.format.TemplateWriter.cljs$lang$ctorStr = "devtools.format/TemplateWriter";

devtools.format.TemplateWriter.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"devtools.format/TemplateWriter");
});

devtools.format.__GT_TemplateWriter = (function devtools$format$__GT_TemplateWriter(group){
return (new devtools.format.TemplateWriter(group));
});

devtools.format.make_template_writer = (function devtools$format$make_template_writer(){
return (new devtools.format.TemplateWriter([]));
});
devtools.format.wrap_group_in_reference_if_needed = (function devtools$format$wrap_group_in_reference_if_needed(group,obj){
if(cljs.core.truth_((function (){var or__4671__auto__ = devtools.format.expandable_QMARK_(obj);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return devtools.format.abbreviated_QMARK_(group);
}
})())){
return [devtools.format.reference(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$2(obj,devtools.format.template(cljs.core.cst$kw$span,cljs.core.cst$kw$header_DASH_style).concat(group)))];
} else {
return group;
}
});
devtools.format.wrap_group_in_circular_warning_if_needed = (function devtools$format$wrap_group_in_circular_warning_if_needed(group,circular_QMARK_){
if(cljs.core.truth_(circular_QMARK_)){
return [devtools.format.circular_reference_template(group)];
} else {
return group;
}
});
devtools.format.detect_edge_case_and_patch_it = (function devtools$format$detect_edge_case_and_patch_it(group,obj){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(group),(5))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((group[(0)]),"#object[")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((group[(4)]),"\"]"))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(group),(5))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((group[(0)]),"#object[")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((group[(4)]),"]"))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(group),(3))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((group[(0)]),"#object[")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((group[(2)]),"]")))){
devtools.format.set_prevent_recursion_BANG_();

return [devtools.format.reference(obj)];
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(group),(3))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((group[(0)]),"#<")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(obj)].join(''),(group[(1)]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((group[(2)]),">"))){
devtools.format.set_prevent_recursion_BANG_();

return [(group[(0)]),devtools.format.reference(obj),(group[(2)])];
} else {
return group;

}
}
});
devtools.format.alt_printer_impl = (function devtools$format$alt_printer_impl(obj,writer,opts){
var _STAR_current_state_STAR_12119 = devtools.format._STAR_current_state_STAR_;
devtools.format._STAR_current_state_STAR_ = devtools.format.get_current_state();

try{if((function (){var and__4659__auto__ = cljs.core.not(cljs.core.cst$kw$entered_DASH_reference.cljs$core$IFn$_invoke$arity$1(devtools.format._STAR_current_state_STAR_));
if(and__4659__auto__){
if(!((obj == null))){
if((false) || (obj.devtools$format$IDevtoolsFormat$)){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,obj);
}
} else {
return and__4659__auto__;
}
})()){
return cljs.core._write(writer,devtools.format.reference(obj));
} else {
var circular_QMARK_ = devtools.format.is_circular_QMARK__BANG_(obj);
devtools.format.push_object_to_current_history_BANG_(obj);

var temp__4423__auto__ = devtools.format.atomic_template(obj);
if(cljs.core.truth_(temp__4423__auto__)){
var tmpl = temp__4423__auto__;
return cljs.core._write(writer,tmpl);
} else {
var inner_writer = devtools.format.make_template_writer();
var default_impl = cljs.core.cst$kw$fallback_DASH_impl.cljs$core$IFn$_invoke$arity$1(opts);
var inner_opts = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_print_level_STAR_,(1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$print_DASH_length,(0)):opts);
(default_impl.cljs$core$IFn$_invoke$arity$3 ? default_impl.cljs$core$IFn$_invoke$arity$3(obj,inner_writer,inner_opts) : default_impl.call(null,obj,inner_writer,inner_opts));

var final_group = devtools.format.wrap_group_in_circular_warning_if_needed(devtools.format.wrap_group_in_reference_if_needed(devtools.format.detect_edge_case_and_patch_it(inner_writer.get_group(),obj),obj),circular_QMARK_);
return writer.merge(final_group);
}
}
}finally {devtools.format._STAR_current_state_STAR_ = _STAR_current_state_STAR_12119;
}});
devtools.format.managed_pr_str = (function devtools$format$managed_pr_str(value,style,print_level){
var tmpl = devtools.format.template(cljs.core.cst$kw$span,style);
var writer = (new devtools.format.TemplateWriter(tmpl));
var _STAR_print_level_STAR_12123_12124 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = print_level;

try{cljs.core.pr_seq_writer(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$alt_DASH_impl,devtools.format.alt_printer_impl,cljs.core.cst$kw$print_DASH_length,devtools.prefs.pref(cljs.core.cst$kw$max_DASH_header_DASH_elements),cljs.core.cst$kw$more_DASH_marker,devtools.prefs.pref(cljs.core.cst$kw$more_DASH_marker)], null));
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_12123_12124;
}
return tmpl;
});
devtools.format.build_header = (function devtools$format$build_header(value){
var value_template = devtools.format.managed_pr_str(value,cljs.core.cst$kw$header_DASH_style,(devtools.prefs.pref(cljs.core.cst$kw$max_DASH_print_DASH_level) + (1)));
var temp__4423__auto__ = (cljs.core.truth_(devtools.prefs.pref(cljs.core.cst$kw$print_DASH_meta_DASH_data))?cljs.core.meta(value):null);
if(cljs.core.truth_(temp__4423__auto__)){
var meta_data = temp__4423__auto__;
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$meta_DASH_wrapper_DASH_style,cljs.core.array_seq([value_template,devtools.format.meta_template(meta_data)], 0));
} else {
return value_template;
}
});
devtools.format.build_header_wrapped = (function devtools$format$build_header_wrapped(value){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$cljs_DASH_style,cljs.core.array_seq([devtools.format.build_header(value)], 0));
});
devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args12126 = [];
var len__5729__auto___12129 = arguments.length;
var i__5730__auto___12130 = (0);
while(true){
if((i__5730__auto___12130 < len__5729__auto___12129)){
args12126.push((arguments[i__5730__auto___12130]));

var G__12131 = (i__5730__auto___12130 + (1));
i__5730__auto___12130 = G__12131;
continue;
} else {
}
break;
}

var G__12128 = args12126.length;
switch (G__12128) {
case 1:
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12126.length)].join('')));

}
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$1 = (function (lines){
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$2(lines,true);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$2 = (function (lines,margin_QMARK_){
var ol_style = (cljs.core.truth_(margin_QMARK_)?cljs.core.cst$kw$standard_DASH_ol_DASH_style:cljs.core.cst$kw$standard_DASH_ol_DASH_no_DASH_margin_DASH_style);
var li_style = (cljs.core.truth_(margin_QMARK_)?cljs.core.cst$kw$standard_DASH_li_DASH_style:cljs.core.cst$kw$standard_DASH_li_DASH_no_DASH_margin_DASH_style);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$ol,ol_style,cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ol_style,li_style){
return (function (p1__12125_SHARP_){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$li,li_style,cljs.core.array_seq([p1__12125_SHARP_], 0));
});})(ol_style,li_style))
,lines)], 0));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = 2;
devtools.format.body_line_template = (function devtools$format$body_line_template(index,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.format.index_template(index),devtools.format.managed_pr_str(value,cljs.core.cst$kw$item_DASH_style,(devtools.prefs.pref(cljs.core.cst$kw$body_DASH_line_DASH_max_DASH_print_DASH_level) + (1)))], null);
});
devtools.format.prepare_body_lines = (function devtools$format$prepare_body_lines(data,starting_index){
var work = data;
var index = starting_index;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(work)){
return lines;
} else {
var G__12133 = cljs.core.rest(work);
var G__12134 = (index + (1));
var G__12135 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,devtools.format.body_line_template(index,cljs.core.first(work)));
work = G__12133;
index = G__12134;
lines = G__12135;
continue;
}
break;
}
});
devtools.format.body_lines_templates = (function devtools$format$body_lines_templates(value,starting_index){
var seq = cljs.core.seq(value);
var max_number_body_items = devtools.prefs.pref(cljs.core.cst$kw$max_DASH_number_DASH_body_DASH_items);
var chunk = cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_number_body_items,seq);
var rest = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(max_number_body_items,seq);
var lines = devtools.format.prepare_body_lines(chunk,starting_index);
var continue_QMARK_ = !(cljs.core.empty_QMARK_(cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),rest)));
if(!(continue_QMARK_)){
return lines;
} else {
var more_label_template = devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$body_DASH_items_DASH_more_DASH_label_DASH_style,cljs.core.array_seq([devtools.prefs.pref(cljs.core.cst$kw$body_DASH_items_DASH_more_DASH_label)], 0));
var surrogate_object = devtools.format.surrogate.cljs$core$IFn$_invoke$arity$2(rest,more_label_template);
(surrogate_object["startingIndex"] = (starting_index + max_number_body_items));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,devtools.format.reference(surrogate_object));
}
});
devtools.format.build_body = (function devtools$format$build_body(value,starting_index){
var is_body_QMARK_ = (starting_index === (0));
var result = devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$2(devtools.format.body_lines_templates(value,starting_index),is_body_QMARK_);
if(is_body_QMARK_){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$span,cljs.core.cst$kw$body_DASH_style,cljs.core.array_seq([result], 0));
} else {
return result;
}
});
devtools.format.build_surrogate_body = (function devtools$format$build_surrogate_body(value){
var temp__4423__auto__ = (value["bodyTemplate"]);
if(cljs.core.truth_(temp__4423__auto__)){
var body_template = temp__4423__auto__;
return body_template;
} else {
var target = (value["target"]);
if(cljs.core.seqable_QMARK_(target)){
var starting_index = (function (){var or__4671__auto__ = (value["startingIndex"]);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (0);
}
})();
return devtools.format.build_body(target,starting_index);
} else {
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$ol,cljs.core.cst$kw$standard_DASH_ol_DASH_style,cljs.core.array_seq([devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$li,cljs.core.cst$kw$standard_DASH_li_DASH_style,cljs.core.array_seq([devtools.format.reference(target)], 0))], 0));
}
}
});
devtools.format.want_value_QMARK__STAR_ = (function devtools$format$want_value_QMARK__STAR_(value){
if(cljs.core.truth_(devtools.format.prevent_recursion_QMARK_())){
return false;
} else {
var or__4671__auto__ = devtools.format.cljs_value_QMARK_(value);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return devtools.format.surrogate_QMARK_(value);
}
}
});
devtools.format.header_STAR_ = (function devtools$format$header_STAR_(value){
if(cljs.core.truth_(devtools.format.surrogate_QMARK_(value))){
return (value["header"]);
} else {
if(((!((value == null)))?(((false) || (value.devtools$format$IDevtoolsFormat$))?true:(((!value.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,value):false)):cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,value))){
return devtools.format._header(value);
} else {
return devtools.format.build_header_wrapped(value);

}
}
});
devtools.format.has_body_STAR_ = (function devtools$format$has_body_STAR_(value){
if(cljs.core.truth_(devtools.format.surrogate_QMARK_(value))){
return (value["hasBody"]);
} else {
if(((!((value == null)))?(((false) || (value.devtools$format$IDevtoolsFormat$))?true:(((!value.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,value):false)):cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,value))){
return devtools.format._has_body(value);
} else {
return false;

}
}
});
devtools.format.body_STAR_ = (function devtools$format$body_STAR_(value){
if(cljs.core.truth_(devtools.format.surrogate_QMARK_(value))){
return devtools.format.build_surrogate_body(value);
} else {
if(((!((value == null)))?(((false) || (value.devtools$format$IDevtoolsFormat$))?true:(((!value.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,value):false)):cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,value))){
return devtools.format._body(value);
} else {
return null;
}
}
});
devtools.format.config_wrapper = (function devtools$format$config_wrapper(raw_fn){
return (function (value,config){
var _STAR_current_state_STAR_12143 = devtools.format._STAR_current_state_STAR_;
devtools.format._STAR_current_state_STAR_ = (function (){var or__4671__auto__ = config;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();

try{return (raw_fn.cljs$core$IFn$_invoke$arity$1 ? raw_fn.cljs$core$IFn$_invoke$arity$1(value) : raw_fn.call(null,value));
}finally {devtools.format._STAR_current_state_STAR_ = _STAR_current_state_STAR_12143;
}});
});
devtools.format.want_value_QMARK_ = devtools.format.config_wrapper(devtools.format.want_value_QMARK__STAR_);
devtools.format.header = devtools.format.config_wrapper(devtools.format.header_STAR_);
devtools.format.has_body = devtools.format.config_wrapper(devtools.format.has_body_STAR_);
devtools.format.body = devtools.format.config_wrapper(devtools.format.body_STAR_);
devtools.format.build_api_call = (function devtools$format$build_api_call(raw_fn,pre_handler_key,post_handler_key){

return (function (value,config){
var pre_handler = (function (){var or__4671__auto__ = devtools.prefs.pref(pre_handler_key);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.identity;
}
})();
var post_handler = (function (){var or__4671__auto__ = devtools.prefs.pref(post_handler_key);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.identity;
}
})();
var preprocessed_value = (pre_handler.cljs$core$IFn$_invoke$arity$1 ? pre_handler.cljs$core$IFn$_invoke$arity$1(value) : pre_handler.call(null,value));
var result = (cljs.core.truth_((devtools.format.want_value_QMARK_.cljs$core$IFn$_invoke$arity$2 ? devtools.format.want_value_QMARK_.cljs$core$IFn$_invoke$arity$2(preprocessed_value,config) : devtools.format.want_value_QMARK_.call(null,preprocessed_value,config)))?(raw_fn.cljs$core$IFn$_invoke$arity$2 ? raw_fn.cljs$core$IFn$_invoke$arity$2(preprocessed_value,config) : raw_fn.call(null,preprocessed_value,config)):null);
return (post_handler.cljs$core$IFn$_invoke$arity$1 ? post_handler.cljs$core$IFn$_invoke$arity$1(result) : post_handler.call(null,result));
});
});
devtools.format.header_api_call = devtools.format.build_api_call(devtools.format.header,cljs.core.cst$kw$header_DASH_pre_DASH_handler,cljs.core.cst$kw$header_DASH_post_DASH_handler);
devtools.format.has_body_api_call = devtools.format.build_api_call(devtools.format.has_body,cljs.core.cst$kw$has_DASH_body_DASH_pre_DASH_handler,cljs.core.cst$kw$has_DASH_body_DASH_post_DASH_handler);
devtools.format.body_api_call = devtools.format.build_api_call(devtools.format.body,cljs.core.cst$kw$body_DASH_pre_DASH_handler,cljs.core.cst$kw$body_DASH_post_DASH_handler);
