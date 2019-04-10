// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('devtools.prefs');
goog.require('cljs.core');
goog.require('clojure.string');
devtools.prefs.signature_color = "rgba(100, 255, 100, 1);";
devtools.prefs.string_color = "rgba(255, 100, 100, 1);";
devtools.prefs.color_with_opacity = (function devtools$prefs$color_with_opacity(color,opacity){
return clojure.string.replace(color,"1);",[cljs.core.str(opacity),cljs.core.str(");")].join(''));
});
devtools.prefs.signature_background = devtools.prefs.color_with_opacity(devtools.prefs.signature_color,0.08);
devtools.prefs.body_border_color = devtools.prefs.color_with_opacity(devtools.prefs.signature_color,0.4);
devtools.prefs.string_background = devtools.prefs.color_with_opacity(devtools.prefs.string_color,0.08);
devtools.prefs.string_border_color = devtools.prefs.color_with_opacity(devtools.prefs.string_color,0.4);
devtools.prefs.default_prefs = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$max_DASH_number_DASH_body_DASH_items,cljs.core.cst$kw$symbol_DASH_style,cljs.core.cst$kw$nil_DASH_style,cljs.core.cst$kw$body_DASH_pre_DASH_handler,cljs.core.cst$kw$install_DASH_custom_DASH_formatters,cljs.core.cst$kw$java_DASH_trace_DASH_header_DASH_style,cljs.core.cst$kw$install_DASH_sanity_DASH_hints,cljs.core.cst$kw$line_DASH_index_DASH_separator,cljs.core.cst$kw$new_DASH_line_DASH_string_DASH_replacer,cljs.core.cst$kw$dirac_DASH_print_DASH_length,cljs.core.cst$kw$header_DASH_style,cljs.core.cst$kw$body_DASH_items_DASH_more_DASH_label,cljs.core.cst$kw$has_DASH_body_DASH_pre_DASH_handler,cljs.core.cst$kw$surrogate_DASH_key,cljs.core.cst$kw$string_DASH_abbreviation_DASH_marker,cljs.core.cst$kw$max_DASH_header_DASH_elements,cljs.core.cst$kw$dirac_DASH_print_DASH_level,cljs.core.cst$kw$li,cljs.core.cst$kw$sanity_DASH_hint_DASH_min_DASH_length,cljs.core.cst$kw$circular_DASH_reference_DASH_wrapper_DASH_style,cljs.core.cst$kw$header_DASH_pre_DASH_handler,cljs.core.cst$kw$expanded_DASH_string_DASH_style,cljs.core.cst$kw$standard_DASH_li_DASH_style,cljs.core.cst$kw$body_DASH_style,cljs.core.cst$kw$dq,cljs.core.cst$kw$nil_DASH_label,cljs.core.cst$kw$standard_DASH_ol_DASH_no_DASH_margin_DASH_style,cljs.core.cst$kw$standard_DASH_ol_DASH_style,cljs.core.cst$kw$file_DASH_reader,cljs.core.cst$kw$float_DASH_style,cljs.core.cst$kw$body_DASH_post_DASH_handler,cljs.core.cst$kw$more_DASH_marker,cljs.core.cst$kw$bool_DASH_style,cljs.core.cst$kw$seqables_DASH_always_DASH_expandable,cljs.core.cst$kw$string_DASH_style,cljs.core.cst$kw$circular_DASH_reference_DASH_label,cljs.core.cst$kw$min_DASH_sequable_DASH_count_DASH_for_DASH_expansion,cljs.core.cst$kw$integer_DASH_style,cljs.core.cst$kw$ol,cljs.core.cst$kw$spacer,cljs.core.cst$kw$standard_DASH_li_DASH_no_DASH_margin_DASH_style,cljs.core.cst$kw$string_DASH_postfix_DASH_limit,cljs.core.cst$kw$fn_DASH_style,cljs.core.cst$kw$item_DASH_style,cljs.core.cst$kw$index_DASH_style,cljs.core.cst$kw$install_DASH_dirac_DASH_support,cljs.core.cst$kw$has_DASH_body_DASH_post_DASH_handler,cljs.core.cst$kw$circular_DASH_reference_DASH_style,cljs.core.cst$kw$body_DASH_items_DASH_more_DASH_label_DASH_style,cljs.core.cst$kw$max_DASH_print_DASH_level,cljs.core.cst$kw$meta_DASH_wrapper_DASH_style,cljs.core.cst$kw$header_DASH_post_DASH_handelr,cljs.core.cst$kw$meta_DASH_body_DASH_style,cljs.core.cst$kw$string_DASH_prefix_DASH_limit,cljs.core.cst$kw$cljs_DASH_style,cljs.core.cst$kw$print_DASH_meta_DASH_data,cljs.core.cst$kw$body_DASH_line_DASH_max_DASH_print_DASH_level,cljs.core.cst$kw$keyword_DASH_style,cljs.core.cst$kw$span,cljs.core.cst$kw$meta_DASH_style],[(100),"color:#000000","color:#808080",null,true,"color:red",false,"","\u21B5",(10),"white-space: nowrap","more\u2026",null,"$$this-is-cljs-devtools-surrogate"," \u2026 ",(5),(1),"li",(128),"",null,[cljs.core.str("padding: 0px 12px 0px 12px;"),cljs.core.str("color:#C41A16;"),cljs.core.str("white-space: pre;"),cljs.core.str("border-top: 1px solid "),cljs.core.str(devtools.prefs.string_border_color),cljs.core.str(";"),cljs.core.str("border-radius:1px;"),cljs.core.str("margin: 0px 0px 2px 0px;"),cljs.core.str("background-color:"),cljs.core.str(devtools.prefs.string_background),cljs.core.str(";")].join(''),"margin-left:16px",[cljs.core.str("display:inline-block;"),cljs.core.str("padding: 0px;"),cljs.core.str("border-top: 1px solid "),cljs.core.str(devtools.prefs.body_border_color),cljs.core.str(";"),cljs.core.str("border-radius:1px;"),cljs.core.str("margin: 0px 0px 2px 0px;"),cljs.core.str("background-color:"),cljs.core.str(devtools.prefs.signature_background),cljs.core.str(";")].join(''),"\"","nil",[cljs.core.str("list-style-type:none;"),cljs.core.str("padding-left:0px;"),cljs.core.str("margin-top:0px;"),cljs.core.str("margin-bottom:0px;"),cljs.core.str("margin-left:0px")].join(''),[cljs.core.str("list-style-type:none;"),cljs.core.str("padding-left:0px;"),cljs.core.str("margin-top:0px;"),cljs.core.str("margin-bottom:0px;"),cljs.core.str("margin-left:0px")].join(''),null,"color:#1C88CF",null,"\u2026","color:#099",true,"color:#C41A16","\u221E",(3),"color:#1C00CF","ol"," ","margin-left:0px",(20),"color:#090",[cljs.core.str("display: inline-block;"),cljs.core.str("white-space: nowrap;"),cljs.core.str("border-left: 2px solid rgba(100, 100, 100, 0.2);"),cljs.core.str("padding: 0px 4px 0px 4px;"),cljs.core.str("margin: 1px 0px 0px 0px;")].join(''),[cljs.core.str("min-width: 50px;"),cljs.core.str("display: inline-block;"),cljs.core.str("text-align: right;"),cljs.core.str("vertical-align: top;"),cljs.core.str("background-color:#ddd;"),cljs.core.str("color:#000;"),cljs.core.str("opacity: 0.5;"),cljs.core.str("margin-right: 3px;"),cljs.core.str("padding: 0px 4px 0px 4px;"),cljs.core.str("margin: 1px 0px 0px 0px;"),cljs.core.str("-webkit-user-select: none;")].join(''),false,null,[cljs.core.str("background-color:#f88;"),cljs.core.str("color:#fff;"),cljs.core.str("opacity: 0.5;"),cljs.core.str("margin-right: 3px;"),cljs.core.str("padding: 0px 4px 0px 4px;"),cljs.core.str("border-radius:2px;"),cljs.core.str("-webkit-user-select: none;")].join(''),[cljs.core.str("background-color:#999;"),cljs.core.str("min-width: 50px;"),cljs.core.str("display: inline-block;"),cljs.core.str("color: #fff;"),cljs.core.str("cursor: pointer;"),cljs.core.str("line-height: 14px;"),cljs.core.str("font-size: 10px;"),cljs.core.str("border-radius:2px;"),cljs.core.str("padding: 0px 4px 0px 4px;"),cljs.core.str("margin: 1px 0px 0px 0px;"),cljs.core.str("-webkit-user-select: none;")].join(''),(2),[cljs.core.str("background-color:#efe;"),cljs.core.str("border:1px solid #ada;"),cljs.core.str("border-radius:2px;")].join(''),null,[cljs.core.str("border:1px solid #ada;"),cljs.core.str("position:relative;"),cljs.core.str("left:1px;"),cljs.core.str("top:-1px;"),cljs.core.str("margin-left:-1px;"),cljs.core.str("padding:1px;"),cljs.core.str("border-bottom-left-radius:2px;"),cljs.core.str("border-bottom-right-radius:2px;")].join(''),(20),[cljs.core.str("background-color:"),cljs.core.str(devtools.prefs.signature_background),cljs.core.str(";")].join(''),true,(3),"color:#881391","span",[cljs.core.str("background-color:#ada;"),cljs.core.str("color:#fff;"),cljs.core.str("padding:0px 2px 0px 4px;"),cljs.core.str("-webkit-user-select: none;")].join('')]);
devtools.prefs._STAR_prefs_STAR_ = devtools.prefs.default_prefs;
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
return devtools.prefs._STAR_prefs_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(devtools.prefs._STAR_prefs_STAR_) : key.call(null,devtools.prefs._STAR_prefs_STAR_));
});
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return devtools.prefs._STAR_prefs_STAR_ = new_prefs;
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devtools.prefs.get_prefs(),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([devtools.prefs.get_prefs(),m], 0)));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___11326 = arguments.length;
var i__5730__auto___11327 = (0);
while(true){
if((i__5730__auto___11327 < len__5729__auto___11326)){
args__5736__auto__.push((arguments[i__5730__auto___11327]));

var G__11328 = (i__5730__auto___11327 + (1));
i__5730__auto___11327 = G__11328;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,devtools.prefs.pref(key),args);
return devtools.prefs.set_pref_BANG_(key,new_val);
});

devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq11323){
var G__11324 = cljs.core.first(seq11323);
var seq11323__$1 = cljs.core.next(seq11323);
var G__11325 = cljs.core.first(seq11323__$1);
var seq11323__$2 = cljs.core.next(seq11323__$1);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11324,G__11325,seq11323__$2);
});
