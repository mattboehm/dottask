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
var pred__34016 = cljs.core._EQ_;
var expr__34017 = (function (){var or__16840__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34016.call(null,"true",expr__34017))){
return true;
} else {
if(cljs.core.truth_(pred__34016.call(null,"false",expr__34017))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34017)].join('')));
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
var G__34019__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34020__i = 0, G__34020__a = new Array(arguments.length -  0);
while (G__34020__i < G__34020__a.length) {G__34020__a[G__34020__i] = arguments[G__34020__i + 0]; ++G__34020__i;}
  args = new cljs.core.IndexedSeq(G__34020__a,0);
} 
return G__34019__delegate.call(this,args);};
G__34019.cljs$lang$maxFixedArity = 0;
G__34019.cljs$lang$applyTo = (function (arglist__34021){
var args = cljs.core.seq(arglist__34021);
return G__34019__delegate(args);
});
G__34019.cljs$core$IFn$_invoke$arity$variadic = G__34019__delegate;
return G__34019;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34022){
var map__34025 = p__34022;
var map__34025__$1 = ((((!((map__34025 == null)))?((((map__34025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34025):map__34025);
var message = cljs.core.get.call(null,map__34025__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34025__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__18865__auto___34187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___34187,ch){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___34187,ch){
return (function (state_34156){
var state_val_34157 = (state_34156[(1)]);
if((state_val_34157 === (7))){
var inst_34152 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34158_34188 = state_34156__$1;
(statearr_34158_34188[(2)] = inst_34152);

(statearr_34158_34188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (1))){
var state_34156__$1 = state_34156;
var statearr_34159_34189 = state_34156__$1;
(statearr_34159_34189[(2)] = null);

(statearr_34159_34189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (4))){
var inst_34109 = (state_34156[(7)]);
var inst_34109__$1 = (state_34156[(2)]);
var state_34156__$1 = (function (){var statearr_34160 = state_34156;
(statearr_34160[(7)] = inst_34109__$1);

return statearr_34160;
})();
if(cljs.core.truth_(inst_34109__$1)){
var statearr_34161_34190 = state_34156__$1;
(statearr_34161_34190[(1)] = (5));

} else {
var statearr_34162_34191 = state_34156__$1;
(statearr_34162_34191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (15))){
var inst_34116 = (state_34156[(8)]);
var inst_34131 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34116);
var inst_34132 = cljs.core.first.call(null,inst_34131);
var inst_34133 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34132);
var inst_34134 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34133)].join('');
var inst_34135 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34134);
var state_34156__$1 = state_34156;
var statearr_34163_34192 = state_34156__$1;
(statearr_34163_34192[(2)] = inst_34135);

(statearr_34163_34192[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (13))){
var inst_34140 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34164_34193 = state_34156__$1;
(statearr_34164_34193[(2)] = inst_34140);

(statearr_34164_34193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (6))){
var state_34156__$1 = state_34156;
var statearr_34165_34194 = state_34156__$1;
(statearr_34165_34194[(2)] = null);

(statearr_34165_34194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (17))){
var inst_34138 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34166_34195 = state_34156__$1;
(statearr_34166_34195[(2)] = inst_34138);

(statearr_34166_34195[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (3))){
var inst_34154 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34156__$1,inst_34154);
} else {
if((state_val_34157 === (12))){
var inst_34115 = (state_34156[(9)]);
var inst_34129 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34115,opts);
var state_34156__$1 = state_34156;
if(cljs.core.truth_(inst_34129)){
var statearr_34167_34196 = state_34156__$1;
(statearr_34167_34196[(1)] = (15));

} else {
var statearr_34168_34197 = state_34156__$1;
(statearr_34168_34197[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (2))){
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34156__$1,(4),ch);
} else {
if((state_val_34157 === (11))){
var inst_34116 = (state_34156[(8)]);
var inst_34121 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34122 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34116);
var inst_34123 = cljs.core.async.timeout.call(null,(1000));
var inst_34124 = [inst_34122,inst_34123];
var inst_34125 = (new cljs.core.PersistentVector(null,2,(5),inst_34121,inst_34124,null));
var state_34156__$1 = state_34156;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34156__$1,(14),inst_34125);
} else {
if((state_val_34157 === (9))){
var inst_34116 = (state_34156[(8)]);
var inst_34142 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34143 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34116);
var inst_34144 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34143);
var inst_34145 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34144)].join('');
var inst_34146 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34145);
var state_34156__$1 = (function (){var statearr_34169 = state_34156;
(statearr_34169[(10)] = inst_34142);

return statearr_34169;
})();
var statearr_34170_34198 = state_34156__$1;
(statearr_34170_34198[(2)] = inst_34146);

(statearr_34170_34198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (5))){
var inst_34109 = (state_34156[(7)]);
var inst_34111 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34112 = (new cljs.core.PersistentArrayMap(null,2,inst_34111,null));
var inst_34113 = (new cljs.core.PersistentHashSet(null,inst_34112,null));
var inst_34114 = figwheel.client.focus_msgs.call(null,inst_34113,inst_34109);
var inst_34115 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34114);
var inst_34116 = cljs.core.first.call(null,inst_34114);
var inst_34117 = figwheel.client.autoload_QMARK_.call(null);
var state_34156__$1 = (function (){var statearr_34171 = state_34156;
(statearr_34171[(8)] = inst_34116);

(statearr_34171[(9)] = inst_34115);

return statearr_34171;
})();
if(cljs.core.truth_(inst_34117)){
var statearr_34172_34199 = state_34156__$1;
(statearr_34172_34199[(1)] = (8));

} else {
var statearr_34173_34200 = state_34156__$1;
(statearr_34173_34200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (14))){
var inst_34127 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34174_34201 = state_34156__$1;
(statearr_34174_34201[(2)] = inst_34127);

(statearr_34174_34201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (16))){
var state_34156__$1 = state_34156;
var statearr_34175_34202 = state_34156__$1;
(statearr_34175_34202[(2)] = null);

(statearr_34175_34202[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (10))){
var inst_34148 = (state_34156[(2)]);
var state_34156__$1 = (function (){var statearr_34176 = state_34156;
(statearr_34176[(11)] = inst_34148);

return statearr_34176;
})();
var statearr_34177_34203 = state_34156__$1;
(statearr_34177_34203[(2)] = null);

(statearr_34177_34203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (8))){
var inst_34115 = (state_34156[(9)]);
var inst_34119 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34115,opts);
var state_34156__$1 = state_34156;
if(cljs.core.truth_(inst_34119)){
var statearr_34178_34204 = state_34156__$1;
(statearr_34178_34204[(1)] = (11));

} else {
var statearr_34179_34205 = state_34156__$1;
(statearr_34179_34205[(1)] = (12));

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
});})(c__18865__auto___34187,ch))
;
return ((function (switch__18844__auto__,c__18865__auto___34187,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____0 = (function (){
var statearr_34183 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34183[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__);

(statearr_34183[(1)] = (1));

return statearr_34183;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____1 = (function (state_34156){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_34156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e34184){if((e34184 instanceof Object)){
var ex__18848__auto__ = e34184;
var statearr_34185_34206 = state_34156;
(statearr_34185_34206[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34207 = state_34156;
state_34156 = G__34207;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__ = function(state_34156){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____1.call(this,state_34156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___34187,ch))
})();
var state__18867__auto__ = (function (){var statearr_34186 = f__18866__auto__.call(null);
(statearr_34186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___34187);

return statearr_34186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___34187,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34208_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34208_SHARP_));
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
var base_path_34215 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34215){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_34213 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_34214 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34213,_STAR_print_newline_STAR_34214,base_path_34215){
return (function() { 
var G__34216__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34217__i = 0, G__34217__a = new Array(arguments.length -  0);
while (G__34217__i < G__34217__a.length) {G__34217__a[G__34217__i] = arguments[G__34217__i + 0]; ++G__34217__i;}
  args = new cljs.core.IndexedSeq(G__34217__a,0);
} 
return G__34216__delegate.call(this,args);};
G__34216.cljs$lang$maxFixedArity = 0;
G__34216.cljs$lang$applyTo = (function (arglist__34218){
var args = cljs.core.seq(arglist__34218);
return G__34216__delegate(args);
});
G__34216.cljs$core$IFn$_invoke$arity$variadic = G__34216__delegate;
return G__34216;
})()
;})(_STAR_print_fn_STAR_34213,_STAR_print_newline_STAR_34214,base_path_34215))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34214;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34213;
}}catch (e34212){if((e34212 instanceof Error)){
var e = e34212;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34215], null));
} else {
var e = e34212;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34215))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34219){
var map__34226 = p__34219;
var map__34226__$1 = ((((!((map__34226 == null)))?((((map__34226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34226):map__34226);
var opts = map__34226__$1;
var build_id = cljs.core.get.call(null,map__34226__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34226,map__34226__$1,opts,build_id){
return (function (p__34228){
var vec__34229 = p__34228;
var map__34230 = cljs.core.nth.call(null,vec__34229,(0),null);
var map__34230__$1 = ((((!((map__34230 == null)))?((((map__34230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34230):map__34230);
var msg = map__34230__$1;
var msg_name = cljs.core.get.call(null,map__34230__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34229,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34229,map__34230,map__34230__$1,msg,msg_name,_,map__34226,map__34226__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34229,map__34230,map__34230__$1,msg,msg_name,_,map__34226,map__34226__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34226,map__34226__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34236){
var vec__34237 = p__34236;
var map__34238 = cljs.core.nth.call(null,vec__34237,(0),null);
var map__34238__$1 = ((((!((map__34238 == null)))?((((map__34238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34238):map__34238);
var msg = map__34238__$1;
var msg_name = cljs.core.get.call(null,map__34238__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34237,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34240){
var map__34250 = p__34240;
var map__34250__$1 = ((((!((map__34250 == null)))?((((map__34250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34250):map__34250);
var on_compile_warning = cljs.core.get.call(null,map__34250__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34250__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34250,map__34250__$1,on_compile_warning,on_compile_fail){
return (function (p__34252){
var vec__34253 = p__34252;
var map__34254 = cljs.core.nth.call(null,vec__34253,(0),null);
var map__34254__$1 = ((((!((map__34254 == null)))?((((map__34254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34254):map__34254);
var msg = map__34254__$1;
var msg_name = cljs.core.get.call(null,map__34254__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34253,(1));
var pred__34256 = cljs.core._EQ_;
var expr__34257 = msg_name;
if(cljs.core.truth_(pred__34256.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34257))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34256.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34257))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34250,map__34250__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18865__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto__,msg_hist,msg_names,msg){
return (function (state_34473){
var state_val_34474 = (state_34473[(1)]);
if((state_val_34474 === (7))){
var inst_34397 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
if(cljs.core.truth_(inst_34397)){
var statearr_34475_34521 = state_34473__$1;
(statearr_34475_34521[(1)] = (8));

} else {
var statearr_34476_34522 = state_34473__$1;
(statearr_34476_34522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (20))){
var inst_34467 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
var statearr_34477_34523 = state_34473__$1;
(statearr_34477_34523[(2)] = inst_34467);

(statearr_34477_34523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (27))){
var inst_34463 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
var statearr_34478_34524 = state_34473__$1;
(statearr_34478_34524[(2)] = inst_34463);

(statearr_34478_34524[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (1))){
var inst_34390 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34473__$1 = state_34473;
if(cljs.core.truth_(inst_34390)){
var statearr_34479_34525 = state_34473__$1;
(statearr_34479_34525[(1)] = (2));

} else {
var statearr_34480_34526 = state_34473__$1;
(statearr_34480_34526[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (24))){
var inst_34465 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
var statearr_34481_34527 = state_34473__$1;
(statearr_34481_34527[(2)] = inst_34465);

(statearr_34481_34527[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (4))){
var inst_34471 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34473__$1,inst_34471);
} else {
if((state_val_34474 === (15))){
var inst_34469 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
var statearr_34482_34528 = state_34473__$1;
(statearr_34482_34528[(2)] = inst_34469);

(statearr_34482_34528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (21))){
var inst_34428 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
var statearr_34483_34529 = state_34473__$1;
(statearr_34483_34529[(2)] = inst_34428);

(statearr_34483_34529[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (31))){
var inst_34452 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34473__$1 = state_34473;
if(cljs.core.truth_(inst_34452)){
var statearr_34484_34530 = state_34473__$1;
(statearr_34484_34530[(1)] = (34));

} else {
var statearr_34485_34531 = state_34473__$1;
(statearr_34485_34531[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (32))){
var inst_34461 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
var statearr_34486_34532 = state_34473__$1;
(statearr_34486_34532[(2)] = inst_34461);

(statearr_34486_34532[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (33))){
var inst_34450 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
var statearr_34487_34533 = state_34473__$1;
(statearr_34487_34533[(2)] = inst_34450);

(statearr_34487_34533[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (13))){
var inst_34411 = figwheel.client.heads_up.clear.call(null);
var state_34473__$1 = state_34473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34473__$1,(16),inst_34411);
} else {
if((state_val_34474 === (22))){
var inst_34432 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34433 = figwheel.client.heads_up.append_message.call(null,inst_34432);
var state_34473__$1 = state_34473;
var statearr_34488_34534 = state_34473__$1;
(statearr_34488_34534[(2)] = inst_34433);

(statearr_34488_34534[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (36))){
var inst_34459 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
var statearr_34489_34535 = state_34473__$1;
(statearr_34489_34535[(2)] = inst_34459);

(statearr_34489_34535[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (29))){
var inst_34443 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
var statearr_34490_34536 = state_34473__$1;
(statearr_34490_34536[(2)] = inst_34443);

(statearr_34490_34536[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (6))){
var inst_34392 = (state_34473[(7)]);
var state_34473__$1 = state_34473;
var statearr_34491_34537 = state_34473__$1;
(statearr_34491_34537[(2)] = inst_34392);

(statearr_34491_34537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (28))){
var inst_34439 = (state_34473[(2)]);
var inst_34440 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34441 = figwheel.client.heads_up.display_warning.call(null,inst_34440);
var state_34473__$1 = (function (){var statearr_34492 = state_34473;
(statearr_34492[(8)] = inst_34439);

return statearr_34492;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34473__$1,(29),inst_34441);
} else {
if((state_val_34474 === (25))){
var inst_34437 = figwheel.client.heads_up.clear.call(null);
var state_34473__$1 = state_34473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34473__$1,(28),inst_34437);
} else {
if((state_val_34474 === (34))){
var inst_34454 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34473__$1 = state_34473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34473__$1,(37),inst_34454);
} else {
if((state_val_34474 === (17))){
var inst_34419 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
var statearr_34493_34538 = state_34473__$1;
(statearr_34493_34538[(2)] = inst_34419);

(statearr_34493_34538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (3))){
var inst_34409 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34473__$1 = state_34473;
if(cljs.core.truth_(inst_34409)){
var statearr_34494_34539 = state_34473__$1;
(statearr_34494_34539[(1)] = (13));

} else {
var statearr_34495_34540 = state_34473__$1;
(statearr_34495_34540[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (12))){
var inst_34405 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
var statearr_34496_34541 = state_34473__$1;
(statearr_34496_34541[(2)] = inst_34405);

(statearr_34496_34541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (2))){
var inst_34392 = (state_34473[(7)]);
var inst_34392__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34473__$1 = (function (){var statearr_34497 = state_34473;
(statearr_34497[(7)] = inst_34392__$1);

return statearr_34497;
})();
if(cljs.core.truth_(inst_34392__$1)){
var statearr_34498_34542 = state_34473__$1;
(statearr_34498_34542[(1)] = (5));

} else {
var statearr_34499_34543 = state_34473__$1;
(statearr_34499_34543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (23))){
var inst_34435 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34473__$1 = state_34473;
if(cljs.core.truth_(inst_34435)){
var statearr_34500_34544 = state_34473__$1;
(statearr_34500_34544[(1)] = (25));

} else {
var statearr_34501_34545 = state_34473__$1;
(statearr_34501_34545[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (35))){
var state_34473__$1 = state_34473;
var statearr_34502_34546 = state_34473__$1;
(statearr_34502_34546[(2)] = null);

(statearr_34502_34546[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (19))){
var inst_34430 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34473__$1 = state_34473;
if(cljs.core.truth_(inst_34430)){
var statearr_34503_34547 = state_34473__$1;
(statearr_34503_34547[(1)] = (22));

} else {
var statearr_34504_34548 = state_34473__$1;
(statearr_34504_34548[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (11))){
var inst_34401 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
var statearr_34505_34549 = state_34473__$1;
(statearr_34505_34549[(2)] = inst_34401);

(statearr_34505_34549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (9))){
var inst_34403 = figwheel.client.heads_up.clear.call(null);
var state_34473__$1 = state_34473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34473__$1,(12),inst_34403);
} else {
if((state_val_34474 === (5))){
var inst_34394 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34473__$1 = state_34473;
var statearr_34506_34550 = state_34473__$1;
(statearr_34506_34550[(2)] = inst_34394);

(statearr_34506_34550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (14))){
var inst_34421 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34473__$1 = state_34473;
if(cljs.core.truth_(inst_34421)){
var statearr_34507_34551 = state_34473__$1;
(statearr_34507_34551[(1)] = (18));

} else {
var statearr_34508_34552 = state_34473__$1;
(statearr_34508_34552[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (26))){
var inst_34445 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34473__$1 = state_34473;
if(cljs.core.truth_(inst_34445)){
var statearr_34509_34553 = state_34473__$1;
(statearr_34509_34553[(1)] = (30));

} else {
var statearr_34510_34554 = state_34473__$1;
(statearr_34510_34554[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (16))){
var inst_34413 = (state_34473[(2)]);
var inst_34414 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34415 = figwheel.client.format_messages.call(null,inst_34414);
var inst_34416 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34417 = figwheel.client.heads_up.display_error.call(null,inst_34415,inst_34416);
var state_34473__$1 = (function (){var statearr_34511 = state_34473;
(statearr_34511[(9)] = inst_34413);

return statearr_34511;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34473__$1,(17),inst_34417);
} else {
if((state_val_34474 === (30))){
var inst_34447 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34448 = figwheel.client.heads_up.display_warning.call(null,inst_34447);
var state_34473__$1 = state_34473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34473__$1,(33),inst_34448);
} else {
if((state_val_34474 === (10))){
var inst_34407 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
var statearr_34512_34555 = state_34473__$1;
(statearr_34512_34555[(2)] = inst_34407);

(statearr_34512_34555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (18))){
var inst_34423 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34424 = figwheel.client.format_messages.call(null,inst_34423);
var inst_34425 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34426 = figwheel.client.heads_up.display_error.call(null,inst_34424,inst_34425);
var state_34473__$1 = state_34473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34473__$1,(21),inst_34426);
} else {
if((state_val_34474 === (37))){
var inst_34456 = (state_34473[(2)]);
var state_34473__$1 = state_34473;
var statearr_34513_34556 = state_34473__$1;
(statearr_34513_34556[(2)] = inst_34456);

(statearr_34513_34556[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34474 === (8))){
var inst_34399 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34473__$1 = state_34473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34473__$1,(11),inst_34399);
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
var statearr_34517 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34517[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__);

(statearr_34517[(1)] = (1));

return statearr_34517;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____1 = (function (state_34473){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_34473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e34518){if((e34518 instanceof Object)){
var ex__18848__auto__ = e34518;
var statearr_34519_34557 = state_34473;
(statearr_34519_34557[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34558 = state_34473;
state_34473 = G__34558;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__ = function(state_34473){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____1.call(this,state_34473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__,msg_hist,msg_names,msg))
})();
var state__18867__auto__ = (function (){var statearr_34520 = f__18866__auto__.call(null);
(statearr_34520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_34520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto__,msg_hist,msg_names,msg))
);

return c__18865__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18865__auto___34621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___34621,ch){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___34621,ch){
return (function (state_34604){
var state_val_34605 = (state_34604[(1)]);
if((state_val_34605 === (1))){
var state_34604__$1 = state_34604;
var statearr_34606_34622 = state_34604__$1;
(statearr_34606_34622[(2)] = null);

(statearr_34606_34622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (2))){
var state_34604__$1 = state_34604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34604__$1,(4),ch);
} else {
if((state_val_34605 === (3))){
var inst_34602 = (state_34604[(2)]);
var state_34604__$1 = state_34604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34604__$1,inst_34602);
} else {
if((state_val_34605 === (4))){
var inst_34592 = (state_34604[(7)]);
var inst_34592__$1 = (state_34604[(2)]);
var state_34604__$1 = (function (){var statearr_34607 = state_34604;
(statearr_34607[(7)] = inst_34592__$1);

return statearr_34607;
})();
if(cljs.core.truth_(inst_34592__$1)){
var statearr_34608_34623 = state_34604__$1;
(statearr_34608_34623[(1)] = (5));

} else {
var statearr_34609_34624 = state_34604__$1;
(statearr_34609_34624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (5))){
var inst_34592 = (state_34604[(7)]);
var inst_34594 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34592);
var state_34604__$1 = state_34604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34604__$1,(8),inst_34594);
} else {
if((state_val_34605 === (6))){
var state_34604__$1 = state_34604;
var statearr_34610_34625 = state_34604__$1;
(statearr_34610_34625[(2)] = null);

(statearr_34610_34625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (7))){
var inst_34600 = (state_34604[(2)]);
var state_34604__$1 = state_34604;
var statearr_34611_34626 = state_34604__$1;
(statearr_34611_34626[(2)] = inst_34600);

(statearr_34611_34626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (8))){
var inst_34596 = (state_34604[(2)]);
var state_34604__$1 = (function (){var statearr_34612 = state_34604;
(statearr_34612[(8)] = inst_34596);

return statearr_34612;
})();
var statearr_34613_34627 = state_34604__$1;
(statearr_34613_34627[(2)] = null);

(statearr_34613_34627[(1)] = (2));


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
});})(c__18865__auto___34621,ch))
;
return ((function (switch__18844__auto__,c__18865__auto___34621,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18845__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18845__auto____0 = (function (){
var statearr_34617 = [null,null,null,null,null,null,null,null,null];
(statearr_34617[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18845__auto__);

(statearr_34617[(1)] = (1));

return statearr_34617;
});
var figwheel$client$heads_up_plugin_$_state_machine__18845__auto____1 = (function (state_34604){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_34604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e34618){if((e34618 instanceof Object)){
var ex__18848__auto__ = e34618;
var statearr_34619_34628 = state_34604;
(statearr_34619_34628[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34629 = state_34604;
state_34604 = G__34629;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18845__auto__ = function(state_34604){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18845__auto____1.call(this,state_34604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18845__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18845__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___34621,ch))
})();
var state__18867__auto__ = (function (){var statearr_34620 = f__18866__auto__.call(null);
(statearr_34620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___34621);

return statearr_34620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___34621,ch))
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
return (function (state_34650){
var state_val_34651 = (state_34650[(1)]);
if((state_val_34651 === (1))){
var inst_34645 = cljs.core.async.timeout.call(null,(3000));
var state_34650__$1 = state_34650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34650__$1,(2),inst_34645);
} else {
if((state_val_34651 === (2))){
var inst_34647 = (state_34650[(2)]);
var inst_34648 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34650__$1 = (function (){var statearr_34652 = state_34650;
(statearr_34652[(7)] = inst_34647);

return statearr_34652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34650__$1,inst_34648);
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
var statearr_34656 = [null,null,null,null,null,null,null,null];
(statearr_34656[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__);

(statearr_34656[(1)] = (1));

return statearr_34656;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____1 = (function (state_34650){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_34650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e34657){if((e34657 instanceof Object)){
var ex__18848__auto__ = e34657;
var statearr_34658_34660 = state_34650;
(statearr_34658_34660[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34661 = state_34650;
state_34650 = G__34661;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__ = function(state_34650){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____1.call(this,state_34650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__))
})();
var state__18867__auto__ = (function (){var statearr_34659 = f__18866__auto__.call(null);
(statearr_34659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_34659;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34662){
var map__34669 = p__34662;
var map__34669__$1 = ((((!((map__34669 == null)))?((((map__34669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34669):map__34669);
var ed = map__34669__$1;
var formatted_exception = cljs.core.get.call(null,map__34669__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34669__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34669__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34671_34675 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34672_34676 = null;
var count__34673_34677 = (0);
var i__34674_34678 = (0);
while(true){
if((i__34674_34678 < count__34673_34677)){
var msg_34679 = cljs.core._nth.call(null,chunk__34672_34676,i__34674_34678);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34679);

var G__34680 = seq__34671_34675;
var G__34681 = chunk__34672_34676;
var G__34682 = count__34673_34677;
var G__34683 = (i__34674_34678 + (1));
seq__34671_34675 = G__34680;
chunk__34672_34676 = G__34681;
count__34673_34677 = G__34682;
i__34674_34678 = G__34683;
continue;
} else {
var temp__4425__auto___34684 = cljs.core.seq.call(null,seq__34671_34675);
if(temp__4425__auto___34684){
var seq__34671_34685__$1 = temp__4425__auto___34684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34671_34685__$1)){
var c__17643__auto___34686 = cljs.core.chunk_first.call(null,seq__34671_34685__$1);
var G__34687 = cljs.core.chunk_rest.call(null,seq__34671_34685__$1);
var G__34688 = c__17643__auto___34686;
var G__34689 = cljs.core.count.call(null,c__17643__auto___34686);
var G__34690 = (0);
seq__34671_34675 = G__34687;
chunk__34672_34676 = G__34688;
count__34673_34677 = G__34689;
i__34674_34678 = G__34690;
continue;
} else {
var msg_34691 = cljs.core.first.call(null,seq__34671_34685__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34691);

var G__34692 = cljs.core.next.call(null,seq__34671_34685__$1);
var G__34693 = null;
var G__34694 = (0);
var G__34695 = (0);
seq__34671_34675 = G__34692;
chunk__34672_34676 = G__34693;
count__34673_34677 = G__34694;
i__34674_34678 = G__34695;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34696){
var map__34699 = p__34696;
var map__34699__$1 = ((((!((map__34699 == null)))?((((map__34699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34699):map__34699);
var w = map__34699__$1;
var message = cljs.core.get.call(null,map__34699__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__34707 = cljs.core.seq.call(null,plugins);
var chunk__34708 = null;
var count__34709 = (0);
var i__34710 = (0);
while(true){
if((i__34710 < count__34709)){
var vec__34711 = cljs.core._nth.call(null,chunk__34708,i__34710);
var k = cljs.core.nth.call(null,vec__34711,(0),null);
var plugin = cljs.core.nth.call(null,vec__34711,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34713 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34707,chunk__34708,count__34709,i__34710,pl_34713,vec__34711,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34713.call(null,msg_hist);
});})(seq__34707,chunk__34708,count__34709,i__34710,pl_34713,vec__34711,k,plugin))
);
} else {
}

var G__34714 = seq__34707;
var G__34715 = chunk__34708;
var G__34716 = count__34709;
var G__34717 = (i__34710 + (1));
seq__34707 = G__34714;
chunk__34708 = G__34715;
count__34709 = G__34716;
i__34710 = G__34717;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34707);
if(temp__4425__auto__){
var seq__34707__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34707__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__34707__$1);
var G__34718 = cljs.core.chunk_rest.call(null,seq__34707__$1);
var G__34719 = c__17643__auto__;
var G__34720 = cljs.core.count.call(null,c__17643__auto__);
var G__34721 = (0);
seq__34707 = G__34718;
chunk__34708 = G__34719;
count__34709 = G__34720;
i__34710 = G__34721;
continue;
} else {
var vec__34712 = cljs.core.first.call(null,seq__34707__$1);
var k = cljs.core.nth.call(null,vec__34712,(0),null);
var plugin = cljs.core.nth.call(null,vec__34712,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34722 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34707,chunk__34708,count__34709,i__34710,pl_34722,vec__34712,k,plugin,seq__34707__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34722.call(null,msg_hist);
});})(seq__34707,chunk__34708,count__34709,i__34710,pl_34722,vec__34712,k,plugin,seq__34707__$1,temp__4425__auto__))
);
} else {
}

var G__34723 = cljs.core.next.call(null,seq__34707__$1);
var G__34724 = null;
var G__34725 = (0);
var G__34726 = (0);
seq__34707 = G__34723;
chunk__34708 = G__34724;
count__34709 = G__34725;
i__34710 = G__34726;
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
var args34727 = [];
var len__17898__auto___34730 = arguments.length;
var i__17899__auto___34731 = (0);
while(true){
if((i__17899__auto___34731 < len__17898__auto___34730)){
args34727.push((arguments[i__17899__auto___34731]));

var G__34732 = (i__17899__auto___34731 + (1));
i__17899__auto___34731 = G__34732;
continue;
} else {
}
break;
}

var G__34729 = args34727.length;
switch (G__34729) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34727.length)].join('')));

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
var len__17898__auto___34738 = arguments.length;
var i__17899__auto___34739 = (0);
while(true){
if((i__17899__auto___34739 < len__17898__auto___34738)){
args__17905__auto__.push((arguments[i__17899__auto___34739]));

var G__34740 = (i__17899__auto___34739 + (1));
i__17899__auto___34739 = G__34740;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((0) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17906__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34735){
var map__34736 = p__34735;
var map__34736__$1 = ((((!((map__34736 == null)))?((((map__34736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34736):map__34736);
var opts = map__34736__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34734){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34734));
});

//# sourceMappingURL=client.js.map