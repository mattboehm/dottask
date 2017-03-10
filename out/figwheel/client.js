// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__43625 = cljs.core._EQ_;
var expr__43626 = (function (){var or__16840__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__43625.call(null,"true",expr__43626))){
return true;
} else {
if(cljs.core.truth_(pred__43625.call(null,"false",expr__43626))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43626)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43628__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__43628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43629__i = 0, G__43629__a = new Array(arguments.length -  0);
while (G__43629__i < G__43629__a.length) {G__43629__a[G__43629__i] = arguments[G__43629__i + 0]; ++G__43629__i;}
  args = new cljs.core.IndexedSeq(G__43629__a,0);
} 
return G__43628__delegate.call(this,args);};
G__43628.cljs$lang$maxFixedArity = 0;
G__43628.cljs$lang$applyTo = (function (arglist__43630){
var args = cljs.core.seq(arglist__43630);
return G__43628__delegate(args);
});
G__43628.cljs$core$IFn$_invoke$arity$variadic = G__43628__delegate;
return G__43628;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43631){
var map__43634 = p__43631;
var map__43634__$1 = ((((!((map__43634 == null)))?((((map__43634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43634):map__43634);
var message = cljs.core.get.call(null,map__43634__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43634__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16840__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16828__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16828__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16828__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18865__auto___43796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___43796,ch){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___43796,ch){
return (function (state_43765){
var state_val_43766 = (state_43765[(1)]);
if((state_val_43766 === (7))){
var inst_43761 = (state_43765[(2)]);
var state_43765__$1 = state_43765;
var statearr_43767_43797 = state_43765__$1;
(statearr_43767_43797[(2)] = inst_43761);

(statearr_43767_43797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43766 === (1))){
var state_43765__$1 = state_43765;
var statearr_43768_43798 = state_43765__$1;
(statearr_43768_43798[(2)] = null);

(statearr_43768_43798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43766 === (4))){
var inst_43718 = (state_43765[(7)]);
var inst_43718__$1 = (state_43765[(2)]);
var state_43765__$1 = (function (){var statearr_43769 = state_43765;
(statearr_43769[(7)] = inst_43718__$1);

return statearr_43769;
})();
if(cljs.core.truth_(inst_43718__$1)){
var statearr_43770_43799 = state_43765__$1;
(statearr_43770_43799[(1)] = (5));

} else {
var statearr_43771_43800 = state_43765__$1;
(statearr_43771_43800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43766 === (15))){
var inst_43725 = (state_43765[(8)]);
var inst_43740 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43725);
var inst_43741 = cljs.core.first.call(null,inst_43740);
var inst_43742 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43741);
var inst_43743 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_43742)].join('');
var inst_43744 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43743);
var state_43765__$1 = state_43765;
var statearr_43772_43801 = state_43765__$1;
(statearr_43772_43801[(2)] = inst_43744);

(statearr_43772_43801[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43766 === (13))){
var inst_43749 = (state_43765[(2)]);
var state_43765__$1 = state_43765;
var statearr_43773_43802 = state_43765__$1;
(statearr_43773_43802[(2)] = inst_43749);

(statearr_43773_43802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43766 === (6))){
var state_43765__$1 = state_43765;
var statearr_43774_43803 = state_43765__$1;
(statearr_43774_43803[(2)] = null);

(statearr_43774_43803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43766 === (17))){
var inst_43747 = (state_43765[(2)]);
var state_43765__$1 = state_43765;
var statearr_43775_43804 = state_43765__$1;
(statearr_43775_43804[(2)] = inst_43747);

(statearr_43775_43804[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43766 === (3))){
var inst_43763 = (state_43765[(2)]);
var state_43765__$1 = state_43765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43765__$1,inst_43763);
} else {
if((state_val_43766 === (12))){
var inst_43724 = (state_43765[(9)]);
var inst_43738 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43724,opts);
var state_43765__$1 = state_43765;
if(cljs.core.truth_(inst_43738)){
var statearr_43776_43805 = state_43765__$1;
(statearr_43776_43805[(1)] = (15));

} else {
var statearr_43777_43806 = state_43765__$1;
(statearr_43777_43806[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43766 === (2))){
var state_43765__$1 = state_43765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43765__$1,(4),ch);
} else {
if((state_val_43766 === (11))){
var inst_43725 = (state_43765[(8)]);
var inst_43730 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43731 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43725);
var inst_43732 = cljs.core.async.timeout.call(null,(1000));
var inst_43733 = [inst_43731,inst_43732];
var inst_43734 = (new cljs.core.PersistentVector(null,2,(5),inst_43730,inst_43733,null));
var state_43765__$1 = state_43765;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43765__$1,(14),inst_43734);
} else {
if((state_val_43766 === (9))){
var inst_43725 = (state_43765[(8)]);
var inst_43751 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43752 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43725);
var inst_43753 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43752);
var inst_43754 = [cljs.core.str("Not loading: "),cljs.core.str(inst_43753)].join('');
var inst_43755 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43754);
var state_43765__$1 = (function (){var statearr_43778 = state_43765;
(statearr_43778[(10)] = inst_43751);

return statearr_43778;
})();
var statearr_43779_43807 = state_43765__$1;
(statearr_43779_43807[(2)] = inst_43755);

(statearr_43779_43807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43766 === (5))){
var inst_43718 = (state_43765[(7)]);
var inst_43720 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43721 = (new cljs.core.PersistentArrayMap(null,2,inst_43720,null));
var inst_43722 = (new cljs.core.PersistentHashSet(null,inst_43721,null));
var inst_43723 = figwheel.client.focus_msgs.call(null,inst_43722,inst_43718);
var inst_43724 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43723);
var inst_43725 = cljs.core.first.call(null,inst_43723);
var inst_43726 = figwheel.client.autoload_QMARK_.call(null);
var state_43765__$1 = (function (){var statearr_43780 = state_43765;
(statearr_43780[(9)] = inst_43724);

(statearr_43780[(8)] = inst_43725);

return statearr_43780;
})();
if(cljs.core.truth_(inst_43726)){
var statearr_43781_43808 = state_43765__$1;
(statearr_43781_43808[(1)] = (8));

} else {
var statearr_43782_43809 = state_43765__$1;
(statearr_43782_43809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43766 === (14))){
var inst_43736 = (state_43765[(2)]);
var state_43765__$1 = state_43765;
var statearr_43783_43810 = state_43765__$1;
(statearr_43783_43810[(2)] = inst_43736);

(statearr_43783_43810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43766 === (16))){
var state_43765__$1 = state_43765;
var statearr_43784_43811 = state_43765__$1;
(statearr_43784_43811[(2)] = null);

(statearr_43784_43811[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43766 === (10))){
var inst_43757 = (state_43765[(2)]);
var state_43765__$1 = (function (){var statearr_43785 = state_43765;
(statearr_43785[(11)] = inst_43757);

return statearr_43785;
})();
var statearr_43786_43812 = state_43765__$1;
(statearr_43786_43812[(2)] = null);

(statearr_43786_43812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43766 === (8))){
var inst_43724 = (state_43765[(9)]);
var inst_43728 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43724,opts);
var state_43765__$1 = state_43765;
if(cljs.core.truth_(inst_43728)){
var statearr_43787_43813 = state_43765__$1;
(statearr_43787_43813[(1)] = (11));

} else {
var statearr_43788_43814 = state_43765__$1;
(statearr_43788_43814[(1)] = (12));

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
});})(c__18865__auto___43796,ch))
;
return ((function (switch__18844__auto__,c__18865__auto___43796,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____0 = (function (){
var statearr_43792 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43792[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__);

(statearr_43792[(1)] = (1));

return statearr_43792;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____1 = (function (state_43765){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_43765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e43793){if((e43793 instanceof Object)){
var ex__18848__auto__ = e43793;
var statearr_43794_43815 = state_43765;
(statearr_43794_43815[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43816 = state_43765;
state_43765 = G__43816;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__ = function(state_43765){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____1.call(this,state_43765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___43796,ch))
})();
var state__18867__auto__ = (function (){var statearr_43795 = f__18866__auto__.call(null);
(statearr_43795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___43796);

return statearr_43795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___43796,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43817_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43817_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_43824 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43824){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_43822 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_43823 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_43822,_STAR_print_newline_STAR_43823,base_path_43824){
return (function() { 
var G__43825__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__43825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43826__i = 0, G__43826__a = new Array(arguments.length -  0);
while (G__43826__i < G__43826__a.length) {G__43826__a[G__43826__i] = arguments[G__43826__i + 0]; ++G__43826__i;}
  args = new cljs.core.IndexedSeq(G__43826__a,0);
} 
return G__43825__delegate.call(this,args);};
G__43825.cljs$lang$maxFixedArity = 0;
G__43825.cljs$lang$applyTo = (function (arglist__43827){
var args = cljs.core.seq(arglist__43827);
return G__43825__delegate(args);
});
G__43825.cljs$core$IFn$_invoke$arity$variadic = G__43825__delegate;
return G__43825;
})()
;})(_STAR_print_fn_STAR_43822,_STAR_print_newline_STAR_43823,base_path_43824))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43823;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43822;
}}catch (e43821){if((e43821 instanceof Error)){
var e = e43821;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43824], null));
} else {
var e = e43821;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_43824))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43828){
var map__43835 = p__43828;
var map__43835__$1 = ((((!((map__43835 == null)))?((((map__43835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43835):map__43835);
var opts = map__43835__$1;
var build_id = cljs.core.get.call(null,map__43835__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43835,map__43835__$1,opts,build_id){
return (function (p__43837){
var vec__43838 = p__43837;
var map__43839 = cljs.core.nth.call(null,vec__43838,(0),null);
var map__43839__$1 = ((((!((map__43839 == null)))?((((map__43839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43839):map__43839);
var msg = map__43839__$1;
var msg_name = cljs.core.get.call(null,map__43839__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__43838,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__43838,map__43839,map__43839__$1,msg,msg_name,_,map__43835,map__43835__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43838,map__43839,map__43839__$1,msg,msg_name,_,map__43835,map__43835__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43835,map__43835__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43845){
var vec__43846 = p__43845;
var map__43847 = cljs.core.nth.call(null,vec__43846,(0),null);
var map__43847__$1 = ((((!((map__43847 == null)))?((((map__43847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43847):map__43847);
var msg = map__43847__$1;
var msg_name = cljs.core.get.call(null,map__43847__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__43846,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43849){
var map__43859 = p__43849;
var map__43859__$1 = ((((!((map__43859 == null)))?((((map__43859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43859):map__43859);
var on_compile_warning = cljs.core.get.call(null,map__43859__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43859__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43859,map__43859__$1,on_compile_warning,on_compile_fail){
return (function (p__43861){
var vec__43862 = p__43861;
var map__43863 = cljs.core.nth.call(null,vec__43862,(0),null);
var map__43863__$1 = ((((!((map__43863 == null)))?((((map__43863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43863):map__43863);
var msg = map__43863__$1;
var msg_name = cljs.core.get.call(null,map__43863__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__43862,(1));
var pred__43865 = cljs.core._EQ_;
var expr__43866 = msg_name;
if(cljs.core.truth_(pred__43865.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43866))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43865.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43866))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43859,map__43859__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18865__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto__,msg_hist,msg_names,msg){
return (function (state_44082){
var state_val_44083 = (state_44082[(1)]);
if((state_val_44083 === (7))){
var inst_44006 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
if(cljs.core.truth_(inst_44006)){
var statearr_44084_44130 = state_44082__$1;
(statearr_44084_44130[(1)] = (8));

} else {
var statearr_44085_44131 = state_44082__$1;
(statearr_44085_44131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (20))){
var inst_44076 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44086_44132 = state_44082__$1;
(statearr_44086_44132[(2)] = inst_44076);

(statearr_44086_44132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (27))){
var inst_44072 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44087_44133 = state_44082__$1;
(statearr_44087_44133[(2)] = inst_44072);

(statearr_44087_44133[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (1))){
var inst_43999 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_44082__$1 = state_44082;
if(cljs.core.truth_(inst_43999)){
var statearr_44088_44134 = state_44082__$1;
(statearr_44088_44134[(1)] = (2));

} else {
var statearr_44089_44135 = state_44082__$1;
(statearr_44089_44135[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (24))){
var inst_44074 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44090_44136 = state_44082__$1;
(statearr_44090_44136[(2)] = inst_44074);

(statearr_44090_44136[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (4))){
var inst_44080 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44082__$1,inst_44080);
} else {
if((state_val_44083 === (15))){
var inst_44078 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44091_44137 = state_44082__$1;
(statearr_44091_44137[(2)] = inst_44078);

(statearr_44091_44137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (21))){
var inst_44037 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44092_44138 = state_44082__$1;
(statearr_44092_44138[(2)] = inst_44037);

(statearr_44092_44138[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (31))){
var inst_44061 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_44082__$1 = state_44082;
if(cljs.core.truth_(inst_44061)){
var statearr_44093_44139 = state_44082__$1;
(statearr_44093_44139[(1)] = (34));

} else {
var statearr_44094_44140 = state_44082__$1;
(statearr_44094_44140[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (32))){
var inst_44070 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44095_44141 = state_44082__$1;
(statearr_44095_44141[(2)] = inst_44070);

(statearr_44095_44141[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (33))){
var inst_44059 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44096_44142 = state_44082__$1;
(statearr_44096_44142[(2)] = inst_44059);

(statearr_44096_44142[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (13))){
var inst_44020 = figwheel.client.heads_up.clear.call(null);
var state_44082__$1 = state_44082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44082__$1,(16),inst_44020);
} else {
if((state_val_44083 === (22))){
var inst_44041 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44042 = figwheel.client.heads_up.append_message.call(null,inst_44041);
var state_44082__$1 = state_44082;
var statearr_44097_44143 = state_44082__$1;
(statearr_44097_44143[(2)] = inst_44042);

(statearr_44097_44143[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (36))){
var inst_44068 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44098_44144 = state_44082__$1;
(statearr_44098_44144[(2)] = inst_44068);

(statearr_44098_44144[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (29))){
var inst_44052 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44099_44145 = state_44082__$1;
(statearr_44099_44145[(2)] = inst_44052);

(statearr_44099_44145[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (6))){
var inst_44001 = (state_44082[(7)]);
var state_44082__$1 = state_44082;
var statearr_44100_44146 = state_44082__$1;
(statearr_44100_44146[(2)] = inst_44001);

(statearr_44100_44146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (28))){
var inst_44048 = (state_44082[(2)]);
var inst_44049 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44050 = figwheel.client.heads_up.display_warning.call(null,inst_44049);
var state_44082__$1 = (function (){var statearr_44101 = state_44082;
(statearr_44101[(8)] = inst_44048);

return statearr_44101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44082__$1,(29),inst_44050);
} else {
if((state_val_44083 === (25))){
var inst_44046 = figwheel.client.heads_up.clear.call(null);
var state_44082__$1 = state_44082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44082__$1,(28),inst_44046);
} else {
if((state_val_44083 === (34))){
var inst_44063 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44082__$1 = state_44082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44082__$1,(37),inst_44063);
} else {
if((state_val_44083 === (17))){
var inst_44028 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44102_44147 = state_44082__$1;
(statearr_44102_44147[(2)] = inst_44028);

(statearr_44102_44147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (3))){
var inst_44018 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_44082__$1 = state_44082;
if(cljs.core.truth_(inst_44018)){
var statearr_44103_44148 = state_44082__$1;
(statearr_44103_44148[(1)] = (13));

} else {
var statearr_44104_44149 = state_44082__$1;
(statearr_44104_44149[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (12))){
var inst_44014 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44105_44150 = state_44082__$1;
(statearr_44105_44150[(2)] = inst_44014);

(statearr_44105_44150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (2))){
var inst_44001 = (state_44082[(7)]);
var inst_44001__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_44082__$1 = (function (){var statearr_44106 = state_44082;
(statearr_44106[(7)] = inst_44001__$1);

return statearr_44106;
})();
if(cljs.core.truth_(inst_44001__$1)){
var statearr_44107_44151 = state_44082__$1;
(statearr_44107_44151[(1)] = (5));

} else {
var statearr_44108_44152 = state_44082__$1;
(statearr_44108_44152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (23))){
var inst_44044 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_44082__$1 = state_44082;
if(cljs.core.truth_(inst_44044)){
var statearr_44109_44153 = state_44082__$1;
(statearr_44109_44153[(1)] = (25));

} else {
var statearr_44110_44154 = state_44082__$1;
(statearr_44110_44154[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (35))){
var state_44082__$1 = state_44082;
var statearr_44111_44155 = state_44082__$1;
(statearr_44111_44155[(2)] = null);

(statearr_44111_44155[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (19))){
var inst_44039 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_44082__$1 = state_44082;
if(cljs.core.truth_(inst_44039)){
var statearr_44112_44156 = state_44082__$1;
(statearr_44112_44156[(1)] = (22));

} else {
var statearr_44113_44157 = state_44082__$1;
(statearr_44113_44157[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (11))){
var inst_44010 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44114_44158 = state_44082__$1;
(statearr_44114_44158[(2)] = inst_44010);

(statearr_44114_44158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (9))){
var inst_44012 = figwheel.client.heads_up.clear.call(null);
var state_44082__$1 = state_44082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44082__$1,(12),inst_44012);
} else {
if((state_val_44083 === (5))){
var inst_44003 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_44082__$1 = state_44082;
var statearr_44115_44159 = state_44082__$1;
(statearr_44115_44159[(2)] = inst_44003);

(statearr_44115_44159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (14))){
var inst_44030 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_44082__$1 = state_44082;
if(cljs.core.truth_(inst_44030)){
var statearr_44116_44160 = state_44082__$1;
(statearr_44116_44160[(1)] = (18));

} else {
var statearr_44117_44161 = state_44082__$1;
(statearr_44117_44161[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (26))){
var inst_44054 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_44082__$1 = state_44082;
if(cljs.core.truth_(inst_44054)){
var statearr_44118_44162 = state_44082__$1;
(statearr_44118_44162[(1)] = (30));

} else {
var statearr_44119_44163 = state_44082__$1;
(statearr_44119_44163[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (16))){
var inst_44022 = (state_44082[(2)]);
var inst_44023 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44024 = figwheel.client.format_messages.call(null,inst_44023);
var inst_44025 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44026 = figwheel.client.heads_up.display_error.call(null,inst_44024,inst_44025);
var state_44082__$1 = (function (){var statearr_44120 = state_44082;
(statearr_44120[(9)] = inst_44022);

return statearr_44120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44082__$1,(17),inst_44026);
} else {
if((state_val_44083 === (30))){
var inst_44056 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44057 = figwheel.client.heads_up.display_warning.call(null,inst_44056);
var state_44082__$1 = state_44082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44082__$1,(33),inst_44057);
} else {
if((state_val_44083 === (10))){
var inst_44016 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44121_44164 = state_44082__$1;
(statearr_44121_44164[(2)] = inst_44016);

(statearr_44121_44164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (18))){
var inst_44032 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44033 = figwheel.client.format_messages.call(null,inst_44032);
var inst_44034 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44035 = figwheel.client.heads_up.display_error.call(null,inst_44033,inst_44034);
var state_44082__$1 = state_44082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44082__$1,(21),inst_44035);
} else {
if((state_val_44083 === (37))){
var inst_44065 = (state_44082[(2)]);
var state_44082__$1 = state_44082;
var statearr_44122_44165 = state_44082__$1;
(statearr_44122_44165[(2)] = inst_44065);

(statearr_44122_44165[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44083 === (8))){
var inst_44008 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44082__$1 = state_44082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44082__$1,(11),inst_44008);
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
});})(c__18865__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18844__auto__,c__18865__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____0 = (function (){
var statearr_44126 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44126[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__);

(statearr_44126[(1)] = (1));

return statearr_44126;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____1 = (function (state_44082){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_44082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e44127){if((e44127 instanceof Object)){
var ex__18848__auto__ = e44127;
var statearr_44128_44166 = state_44082;
(statearr_44128_44166[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44167 = state_44082;
state_44082 = G__44167;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__ = function(state_44082){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____1.call(this,state_44082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__,msg_hist,msg_names,msg))
})();
var state__18867__auto__ = (function (){var statearr_44129 = f__18866__auto__.call(null);
(statearr_44129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_44129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto__,msg_hist,msg_names,msg))
);

return c__18865__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18865__auto___44230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___44230,ch){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___44230,ch){
return (function (state_44213){
var state_val_44214 = (state_44213[(1)]);
if((state_val_44214 === (1))){
var state_44213__$1 = state_44213;
var statearr_44215_44231 = state_44213__$1;
(statearr_44215_44231[(2)] = null);

(statearr_44215_44231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44214 === (2))){
var state_44213__$1 = state_44213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44213__$1,(4),ch);
} else {
if((state_val_44214 === (3))){
var inst_44211 = (state_44213[(2)]);
var state_44213__$1 = state_44213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44213__$1,inst_44211);
} else {
if((state_val_44214 === (4))){
var inst_44201 = (state_44213[(7)]);
var inst_44201__$1 = (state_44213[(2)]);
var state_44213__$1 = (function (){var statearr_44216 = state_44213;
(statearr_44216[(7)] = inst_44201__$1);

return statearr_44216;
})();
if(cljs.core.truth_(inst_44201__$1)){
var statearr_44217_44232 = state_44213__$1;
(statearr_44217_44232[(1)] = (5));

} else {
var statearr_44218_44233 = state_44213__$1;
(statearr_44218_44233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44214 === (5))){
var inst_44201 = (state_44213[(7)]);
var inst_44203 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_44201);
var state_44213__$1 = state_44213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44213__$1,(8),inst_44203);
} else {
if((state_val_44214 === (6))){
var state_44213__$1 = state_44213;
var statearr_44219_44234 = state_44213__$1;
(statearr_44219_44234[(2)] = null);

(statearr_44219_44234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44214 === (7))){
var inst_44209 = (state_44213[(2)]);
var state_44213__$1 = state_44213;
var statearr_44220_44235 = state_44213__$1;
(statearr_44220_44235[(2)] = inst_44209);

(statearr_44220_44235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44214 === (8))){
var inst_44205 = (state_44213[(2)]);
var state_44213__$1 = (function (){var statearr_44221 = state_44213;
(statearr_44221[(8)] = inst_44205);

return statearr_44221;
})();
var statearr_44222_44236 = state_44213__$1;
(statearr_44222_44236[(2)] = null);

(statearr_44222_44236[(1)] = (2));


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
});})(c__18865__auto___44230,ch))
;
return ((function (switch__18844__auto__,c__18865__auto___44230,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18845__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18845__auto____0 = (function (){
var statearr_44226 = [null,null,null,null,null,null,null,null,null];
(statearr_44226[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18845__auto__);

(statearr_44226[(1)] = (1));

return statearr_44226;
});
var figwheel$client$heads_up_plugin_$_state_machine__18845__auto____1 = (function (state_44213){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_44213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e44227){if((e44227 instanceof Object)){
var ex__18848__auto__ = e44227;
var statearr_44228_44237 = state_44213;
(statearr_44228_44237[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44238 = state_44213;
state_44213 = G__44238;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18845__auto__ = function(state_44213){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18845__auto____1.call(this,state_44213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18845__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18845__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___44230,ch))
})();
var state__18867__auto__ = (function (){var statearr_44229 = f__18866__auto__.call(null);
(statearr_44229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___44230);

return statearr_44229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___44230,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18865__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto__){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto__){
return (function (state_44259){
var state_val_44260 = (state_44259[(1)]);
if((state_val_44260 === (1))){
var inst_44254 = cljs.core.async.timeout.call(null,(3000));
var state_44259__$1 = state_44259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44259__$1,(2),inst_44254);
} else {
if((state_val_44260 === (2))){
var inst_44256 = (state_44259[(2)]);
var inst_44257 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44259__$1 = (function (){var statearr_44261 = state_44259;
(statearr_44261[(7)] = inst_44256);

return statearr_44261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44259__$1,inst_44257);
} else {
return null;
}
}
});})(c__18865__auto__))
;
return ((function (switch__18844__auto__,c__18865__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____0 = (function (){
var statearr_44265 = [null,null,null,null,null,null,null,null];
(statearr_44265[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__);

(statearr_44265[(1)] = (1));

return statearr_44265;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____1 = (function (state_44259){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_44259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e44266){if((e44266 instanceof Object)){
var ex__18848__auto__ = e44266;
var statearr_44267_44269 = state_44259;
(statearr_44267_44269[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44270 = state_44259;
state_44259 = G__44270;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__ = function(state_44259){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____1.call(this,state_44259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__))
})();
var state__18867__auto__ = (function (){var statearr_44268 = f__18866__auto__.call(null);
(statearr_44268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_44268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto__))
);

return c__18865__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44271){
var map__44278 = p__44271;
var map__44278__$1 = ((((!((map__44278 == null)))?((((map__44278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44278):map__44278);
var ed = map__44278__$1;
var formatted_exception = cljs.core.get.call(null,map__44278__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__44278__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44278__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__44280_44284 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__44281_44285 = null;
var count__44282_44286 = (0);
var i__44283_44287 = (0);
while(true){
if((i__44283_44287 < count__44282_44286)){
var msg_44288 = cljs.core._nth.call(null,chunk__44281_44285,i__44283_44287);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44288);

var G__44289 = seq__44280_44284;
var G__44290 = chunk__44281_44285;
var G__44291 = count__44282_44286;
var G__44292 = (i__44283_44287 + (1));
seq__44280_44284 = G__44289;
chunk__44281_44285 = G__44290;
count__44282_44286 = G__44291;
i__44283_44287 = G__44292;
continue;
} else {
var temp__4425__auto___44293 = cljs.core.seq.call(null,seq__44280_44284);
if(temp__4425__auto___44293){
var seq__44280_44294__$1 = temp__4425__auto___44293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44280_44294__$1)){
var c__17643__auto___44295 = cljs.core.chunk_first.call(null,seq__44280_44294__$1);
var G__44296 = cljs.core.chunk_rest.call(null,seq__44280_44294__$1);
var G__44297 = c__17643__auto___44295;
var G__44298 = cljs.core.count.call(null,c__17643__auto___44295);
var G__44299 = (0);
seq__44280_44284 = G__44296;
chunk__44281_44285 = G__44297;
count__44282_44286 = G__44298;
i__44283_44287 = G__44299;
continue;
} else {
var msg_44300 = cljs.core.first.call(null,seq__44280_44294__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44300);

var G__44301 = cljs.core.next.call(null,seq__44280_44294__$1);
var G__44302 = null;
var G__44303 = (0);
var G__44304 = (0);
seq__44280_44284 = G__44301;
chunk__44281_44285 = G__44302;
count__44282_44286 = G__44303;
i__44283_44287 = G__44304;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44305){
var map__44308 = p__44305;
var map__44308__$1 = ((((!((map__44308 == null)))?((((map__44308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44308):map__44308);
var w = map__44308__$1;
var message = cljs.core.get.call(null,map__44308__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16828__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16828__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16828__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__44316 = cljs.core.seq.call(null,plugins);
var chunk__44317 = null;
var count__44318 = (0);
var i__44319 = (0);
while(true){
if((i__44319 < count__44318)){
var vec__44320 = cljs.core._nth.call(null,chunk__44317,i__44319);
var k = cljs.core.nth.call(null,vec__44320,(0),null);
var plugin = cljs.core.nth.call(null,vec__44320,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44322 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44316,chunk__44317,count__44318,i__44319,pl_44322,vec__44320,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44322.call(null,msg_hist);
});})(seq__44316,chunk__44317,count__44318,i__44319,pl_44322,vec__44320,k,plugin))
);
} else {
}

var G__44323 = seq__44316;
var G__44324 = chunk__44317;
var G__44325 = count__44318;
var G__44326 = (i__44319 + (1));
seq__44316 = G__44323;
chunk__44317 = G__44324;
count__44318 = G__44325;
i__44319 = G__44326;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__44316);
if(temp__4425__auto__){
var seq__44316__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44316__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__44316__$1);
var G__44327 = cljs.core.chunk_rest.call(null,seq__44316__$1);
var G__44328 = c__17643__auto__;
var G__44329 = cljs.core.count.call(null,c__17643__auto__);
var G__44330 = (0);
seq__44316 = G__44327;
chunk__44317 = G__44328;
count__44318 = G__44329;
i__44319 = G__44330;
continue;
} else {
var vec__44321 = cljs.core.first.call(null,seq__44316__$1);
var k = cljs.core.nth.call(null,vec__44321,(0),null);
var plugin = cljs.core.nth.call(null,vec__44321,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44331 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44316,chunk__44317,count__44318,i__44319,pl_44331,vec__44321,k,plugin,seq__44316__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44331.call(null,msg_hist);
});})(seq__44316,chunk__44317,count__44318,i__44319,pl_44331,vec__44321,k,plugin,seq__44316__$1,temp__4425__auto__))
);
} else {
}

var G__44332 = cljs.core.next.call(null,seq__44316__$1);
var G__44333 = null;
var G__44334 = (0);
var G__44335 = (0);
seq__44316 = G__44332;
chunk__44317 = G__44333;
count__44318 = G__44334;
i__44319 = G__44335;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args44336 = [];
var len__17898__auto___44339 = arguments.length;
var i__17899__auto___44340 = (0);
while(true){
if((i__17899__auto___44340 < len__17898__auto___44339)){
args44336.push((arguments[i__17899__auto___44340]));

var G__44341 = (i__17899__auto___44340 + (1));
i__17899__auto___44340 = G__44341;
continue;
} else {
}
break;
}

var G__44338 = args44336.length;
switch (G__44338) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44336.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17905__auto__ = [];
var len__17898__auto___44347 = arguments.length;
var i__17899__auto___44348 = (0);
while(true){
if((i__17899__auto___44348 < len__17898__auto___44347)){
args__17905__auto__.push((arguments[i__17899__auto___44348]));

var G__44349 = (i__17899__auto___44348 + (1));
i__17899__auto___44348 = G__44349;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((0) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17906__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44344){
var map__44345 = p__44344;
var map__44345__$1 = ((((!((map__44345 == null)))?((((map__44345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44345):map__44345);
var opts = map__44345__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44343){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44343));
});

//# sourceMappingURL=client.js.map