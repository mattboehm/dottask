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
var pred__28064 = cljs.core._EQ_;
var expr__28065 = (function (){var or__16840__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28064.call(null,"true",expr__28065))){
return true;
} else {
if(cljs.core.truth_(pred__28064.call(null,"false",expr__28065))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28065)].join('')));
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
var G__28067__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28068__i = 0, G__28068__a = new Array(arguments.length -  0);
while (G__28068__i < G__28068__a.length) {G__28068__a[G__28068__i] = arguments[G__28068__i + 0]; ++G__28068__i;}
  args = new cljs.core.IndexedSeq(G__28068__a,0);
} 
return G__28067__delegate.call(this,args);};
G__28067.cljs$lang$maxFixedArity = 0;
G__28067.cljs$lang$applyTo = (function (arglist__28069){
var args = cljs.core.seq(arglist__28069);
return G__28067__delegate(args);
});
G__28067.cljs$core$IFn$_invoke$arity$variadic = G__28067__delegate;
return G__28067;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28070){
var map__28073 = p__28070;
var map__28073__$1 = ((((!((map__28073 == null)))?((((map__28073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28073):map__28073);
var message = cljs.core.get.call(null,map__28073__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28073__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__18865__auto___28235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___28235,ch){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___28235,ch){
return (function (state_28204){
var state_val_28205 = (state_28204[(1)]);
if((state_val_28205 === (7))){
var inst_28200 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
var statearr_28206_28236 = state_28204__$1;
(statearr_28206_28236[(2)] = inst_28200);

(statearr_28206_28236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (1))){
var state_28204__$1 = state_28204;
var statearr_28207_28237 = state_28204__$1;
(statearr_28207_28237[(2)] = null);

(statearr_28207_28237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (4))){
var inst_28157 = (state_28204[(7)]);
var inst_28157__$1 = (state_28204[(2)]);
var state_28204__$1 = (function (){var statearr_28208 = state_28204;
(statearr_28208[(7)] = inst_28157__$1);

return statearr_28208;
})();
if(cljs.core.truth_(inst_28157__$1)){
var statearr_28209_28238 = state_28204__$1;
(statearr_28209_28238[(1)] = (5));

} else {
var statearr_28210_28239 = state_28204__$1;
(statearr_28210_28239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (15))){
var inst_28164 = (state_28204[(8)]);
var inst_28179 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28164);
var inst_28180 = cljs.core.first.call(null,inst_28179);
var inst_28181 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28180);
var inst_28182 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28181)].join('');
var inst_28183 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28182);
var state_28204__$1 = state_28204;
var statearr_28211_28240 = state_28204__$1;
(statearr_28211_28240[(2)] = inst_28183);

(statearr_28211_28240[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (13))){
var inst_28188 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
var statearr_28212_28241 = state_28204__$1;
(statearr_28212_28241[(2)] = inst_28188);

(statearr_28212_28241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (6))){
var state_28204__$1 = state_28204;
var statearr_28213_28242 = state_28204__$1;
(statearr_28213_28242[(2)] = null);

(statearr_28213_28242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (17))){
var inst_28186 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
var statearr_28214_28243 = state_28204__$1;
(statearr_28214_28243[(2)] = inst_28186);

(statearr_28214_28243[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (3))){
var inst_28202 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28204__$1,inst_28202);
} else {
if((state_val_28205 === (12))){
var inst_28163 = (state_28204[(9)]);
var inst_28177 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28163,opts);
var state_28204__$1 = state_28204;
if(cljs.core.truth_(inst_28177)){
var statearr_28215_28244 = state_28204__$1;
(statearr_28215_28244[(1)] = (15));

} else {
var statearr_28216_28245 = state_28204__$1;
(statearr_28216_28245[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (2))){
var state_28204__$1 = state_28204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28204__$1,(4),ch);
} else {
if((state_val_28205 === (11))){
var inst_28164 = (state_28204[(8)]);
var inst_28169 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28170 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28164);
var inst_28171 = cljs.core.async.timeout.call(null,(1000));
var inst_28172 = [inst_28170,inst_28171];
var inst_28173 = (new cljs.core.PersistentVector(null,2,(5),inst_28169,inst_28172,null));
var state_28204__$1 = state_28204;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28204__$1,(14),inst_28173);
} else {
if((state_val_28205 === (9))){
var inst_28164 = (state_28204[(8)]);
var inst_28190 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28191 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28164);
var inst_28192 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28191);
var inst_28193 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28192)].join('');
var inst_28194 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28193);
var state_28204__$1 = (function (){var statearr_28217 = state_28204;
(statearr_28217[(10)] = inst_28190);

return statearr_28217;
})();
var statearr_28218_28246 = state_28204__$1;
(statearr_28218_28246[(2)] = inst_28194);

(statearr_28218_28246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (5))){
var inst_28157 = (state_28204[(7)]);
var inst_28159 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28160 = (new cljs.core.PersistentArrayMap(null,2,inst_28159,null));
var inst_28161 = (new cljs.core.PersistentHashSet(null,inst_28160,null));
var inst_28162 = figwheel.client.focus_msgs.call(null,inst_28161,inst_28157);
var inst_28163 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28162);
var inst_28164 = cljs.core.first.call(null,inst_28162);
var inst_28165 = figwheel.client.autoload_QMARK_.call(null);
var state_28204__$1 = (function (){var statearr_28219 = state_28204;
(statearr_28219[(9)] = inst_28163);

(statearr_28219[(8)] = inst_28164);

return statearr_28219;
})();
if(cljs.core.truth_(inst_28165)){
var statearr_28220_28247 = state_28204__$1;
(statearr_28220_28247[(1)] = (8));

} else {
var statearr_28221_28248 = state_28204__$1;
(statearr_28221_28248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (14))){
var inst_28175 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
var statearr_28222_28249 = state_28204__$1;
(statearr_28222_28249[(2)] = inst_28175);

(statearr_28222_28249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (16))){
var state_28204__$1 = state_28204;
var statearr_28223_28250 = state_28204__$1;
(statearr_28223_28250[(2)] = null);

(statearr_28223_28250[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (10))){
var inst_28196 = (state_28204[(2)]);
var state_28204__$1 = (function (){var statearr_28224 = state_28204;
(statearr_28224[(11)] = inst_28196);

return statearr_28224;
})();
var statearr_28225_28251 = state_28204__$1;
(statearr_28225_28251[(2)] = null);

(statearr_28225_28251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (8))){
var inst_28163 = (state_28204[(9)]);
var inst_28167 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28163,opts);
var state_28204__$1 = state_28204;
if(cljs.core.truth_(inst_28167)){
var statearr_28226_28252 = state_28204__$1;
(statearr_28226_28252[(1)] = (11));

} else {
var statearr_28227_28253 = state_28204__$1;
(statearr_28227_28253[(1)] = (12));

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
});})(c__18865__auto___28235,ch))
;
return ((function (switch__18844__auto__,c__18865__auto___28235,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____0 = (function (){
var statearr_28231 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28231[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__);

(statearr_28231[(1)] = (1));

return statearr_28231;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____1 = (function (state_28204){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_28204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e28232){if((e28232 instanceof Object)){
var ex__18848__auto__ = e28232;
var statearr_28233_28254 = state_28204;
(statearr_28233_28254[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28255 = state_28204;
state_28204 = G__28255;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__ = function(state_28204){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____1.call(this,state_28204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18845__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___28235,ch))
})();
var state__18867__auto__ = (function (){var statearr_28234 = f__18866__auto__.call(null);
(statearr_28234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___28235);

return statearr_28234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___28235,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28256_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28256_SHARP_));
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
var base_path_28263 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28263){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28261 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28262 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28261,_STAR_print_newline_STAR_28262,base_path_28263){
return (function() { 
var G__28264__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28265__i = 0, G__28265__a = new Array(arguments.length -  0);
while (G__28265__i < G__28265__a.length) {G__28265__a[G__28265__i] = arguments[G__28265__i + 0]; ++G__28265__i;}
  args = new cljs.core.IndexedSeq(G__28265__a,0);
} 
return G__28264__delegate.call(this,args);};
G__28264.cljs$lang$maxFixedArity = 0;
G__28264.cljs$lang$applyTo = (function (arglist__28266){
var args = cljs.core.seq(arglist__28266);
return G__28264__delegate(args);
});
G__28264.cljs$core$IFn$_invoke$arity$variadic = G__28264__delegate;
return G__28264;
})()
;})(_STAR_print_fn_STAR_28261,_STAR_print_newline_STAR_28262,base_path_28263))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28262;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28261;
}}catch (e28260){if((e28260 instanceof Error)){
var e = e28260;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28263], null));
} else {
var e = e28260;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28263))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28267){
var map__28274 = p__28267;
var map__28274__$1 = ((((!((map__28274 == null)))?((((map__28274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28274):map__28274);
var opts = map__28274__$1;
var build_id = cljs.core.get.call(null,map__28274__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28274,map__28274__$1,opts,build_id){
return (function (p__28276){
var vec__28277 = p__28276;
var map__28278 = cljs.core.nth.call(null,vec__28277,(0),null);
var map__28278__$1 = ((((!((map__28278 == null)))?((((map__28278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28278):map__28278);
var msg = map__28278__$1;
var msg_name = cljs.core.get.call(null,map__28278__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28277,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28277,map__28278,map__28278__$1,msg,msg_name,_,map__28274,map__28274__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28277,map__28278,map__28278__$1,msg,msg_name,_,map__28274,map__28274__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28274,map__28274__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28284){
var vec__28285 = p__28284;
var map__28286 = cljs.core.nth.call(null,vec__28285,(0),null);
var map__28286__$1 = ((((!((map__28286 == null)))?((((map__28286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28286):map__28286);
var msg = map__28286__$1;
var msg_name = cljs.core.get.call(null,map__28286__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28285,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28288){
var map__28298 = p__28288;
var map__28298__$1 = ((((!((map__28298 == null)))?((((map__28298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28298):map__28298);
var on_compile_warning = cljs.core.get.call(null,map__28298__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28298__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28298,map__28298__$1,on_compile_warning,on_compile_fail){
return (function (p__28300){
var vec__28301 = p__28300;
var map__28302 = cljs.core.nth.call(null,vec__28301,(0),null);
var map__28302__$1 = ((((!((map__28302 == null)))?((((map__28302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28302):map__28302);
var msg = map__28302__$1;
var msg_name = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28301,(1));
var pred__28304 = cljs.core._EQ_;
var expr__28305 = msg_name;
if(cljs.core.truth_(pred__28304.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28305))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28304.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28305))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28298,map__28298__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18865__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto__,msg_hist,msg_names,msg){
return (function (state_28521){
var state_val_28522 = (state_28521[(1)]);
if((state_val_28522 === (7))){
var inst_28445 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
if(cljs.core.truth_(inst_28445)){
var statearr_28523_28569 = state_28521__$1;
(statearr_28523_28569[(1)] = (8));

} else {
var statearr_28524_28570 = state_28521__$1;
(statearr_28524_28570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (20))){
var inst_28515 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
var statearr_28525_28571 = state_28521__$1;
(statearr_28525_28571[(2)] = inst_28515);

(statearr_28525_28571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (27))){
var inst_28511 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
var statearr_28526_28572 = state_28521__$1;
(statearr_28526_28572[(2)] = inst_28511);

(statearr_28526_28572[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (1))){
var inst_28438 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28521__$1 = state_28521;
if(cljs.core.truth_(inst_28438)){
var statearr_28527_28573 = state_28521__$1;
(statearr_28527_28573[(1)] = (2));

} else {
var statearr_28528_28574 = state_28521__$1;
(statearr_28528_28574[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (24))){
var inst_28513 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
var statearr_28529_28575 = state_28521__$1;
(statearr_28529_28575[(2)] = inst_28513);

(statearr_28529_28575[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (4))){
var inst_28519 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28521__$1,inst_28519);
} else {
if((state_val_28522 === (15))){
var inst_28517 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
var statearr_28530_28576 = state_28521__$1;
(statearr_28530_28576[(2)] = inst_28517);

(statearr_28530_28576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (21))){
var inst_28476 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
var statearr_28531_28577 = state_28521__$1;
(statearr_28531_28577[(2)] = inst_28476);

(statearr_28531_28577[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (31))){
var inst_28500 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28521__$1 = state_28521;
if(cljs.core.truth_(inst_28500)){
var statearr_28532_28578 = state_28521__$1;
(statearr_28532_28578[(1)] = (34));

} else {
var statearr_28533_28579 = state_28521__$1;
(statearr_28533_28579[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (32))){
var inst_28509 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
var statearr_28534_28580 = state_28521__$1;
(statearr_28534_28580[(2)] = inst_28509);

(statearr_28534_28580[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (33))){
var inst_28498 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
var statearr_28535_28581 = state_28521__$1;
(statearr_28535_28581[(2)] = inst_28498);

(statearr_28535_28581[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (13))){
var inst_28459 = figwheel.client.heads_up.clear.call(null);
var state_28521__$1 = state_28521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28521__$1,(16),inst_28459);
} else {
if((state_val_28522 === (22))){
var inst_28480 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28481 = figwheel.client.heads_up.append_message.call(null,inst_28480);
var state_28521__$1 = state_28521;
var statearr_28536_28582 = state_28521__$1;
(statearr_28536_28582[(2)] = inst_28481);

(statearr_28536_28582[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (36))){
var inst_28507 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
var statearr_28537_28583 = state_28521__$1;
(statearr_28537_28583[(2)] = inst_28507);

(statearr_28537_28583[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (29))){
var inst_28491 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
var statearr_28538_28584 = state_28521__$1;
(statearr_28538_28584[(2)] = inst_28491);

(statearr_28538_28584[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (6))){
var inst_28440 = (state_28521[(7)]);
var state_28521__$1 = state_28521;
var statearr_28539_28585 = state_28521__$1;
(statearr_28539_28585[(2)] = inst_28440);

(statearr_28539_28585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (28))){
var inst_28487 = (state_28521[(2)]);
var inst_28488 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28489 = figwheel.client.heads_up.display_warning.call(null,inst_28488);
var state_28521__$1 = (function (){var statearr_28540 = state_28521;
(statearr_28540[(8)] = inst_28487);

return statearr_28540;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28521__$1,(29),inst_28489);
} else {
if((state_val_28522 === (25))){
var inst_28485 = figwheel.client.heads_up.clear.call(null);
var state_28521__$1 = state_28521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28521__$1,(28),inst_28485);
} else {
if((state_val_28522 === (34))){
var inst_28502 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28521__$1 = state_28521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28521__$1,(37),inst_28502);
} else {
if((state_val_28522 === (17))){
var inst_28467 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
var statearr_28541_28586 = state_28521__$1;
(statearr_28541_28586[(2)] = inst_28467);

(statearr_28541_28586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (3))){
var inst_28457 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28521__$1 = state_28521;
if(cljs.core.truth_(inst_28457)){
var statearr_28542_28587 = state_28521__$1;
(statearr_28542_28587[(1)] = (13));

} else {
var statearr_28543_28588 = state_28521__$1;
(statearr_28543_28588[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (12))){
var inst_28453 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
var statearr_28544_28589 = state_28521__$1;
(statearr_28544_28589[(2)] = inst_28453);

(statearr_28544_28589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (2))){
var inst_28440 = (state_28521[(7)]);
var inst_28440__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28521__$1 = (function (){var statearr_28545 = state_28521;
(statearr_28545[(7)] = inst_28440__$1);

return statearr_28545;
})();
if(cljs.core.truth_(inst_28440__$1)){
var statearr_28546_28590 = state_28521__$1;
(statearr_28546_28590[(1)] = (5));

} else {
var statearr_28547_28591 = state_28521__$1;
(statearr_28547_28591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (23))){
var inst_28483 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28521__$1 = state_28521;
if(cljs.core.truth_(inst_28483)){
var statearr_28548_28592 = state_28521__$1;
(statearr_28548_28592[(1)] = (25));

} else {
var statearr_28549_28593 = state_28521__$1;
(statearr_28549_28593[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (35))){
var state_28521__$1 = state_28521;
var statearr_28550_28594 = state_28521__$1;
(statearr_28550_28594[(2)] = null);

(statearr_28550_28594[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (19))){
var inst_28478 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28521__$1 = state_28521;
if(cljs.core.truth_(inst_28478)){
var statearr_28551_28595 = state_28521__$1;
(statearr_28551_28595[(1)] = (22));

} else {
var statearr_28552_28596 = state_28521__$1;
(statearr_28552_28596[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (11))){
var inst_28449 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
var statearr_28553_28597 = state_28521__$1;
(statearr_28553_28597[(2)] = inst_28449);

(statearr_28553_28597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (9))){
var inst_28451 = figwheel.client.heads_up.clear.call(null);
var state_28521__$1 = state_28521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28521__$1,(12),inst_28451);
} else {
if((state_val_28522 === (5))){
var inst_28442 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28521__$1 = state_28521;
var statearr_28554_28598 = state_28521__$1;
(statearr_28554_28598[(2)] = inst_28442);

(statearr_28554_28598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (14))){
var inst_28469 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28521__$1 = state_28521;
if(cljs.core.truth_(inst_28469)){
var statearr_28555_28599 = state_28521__$1;
(statearr_28555_28599[(1)] = (18));

} else {
var statearr_28556_28600 = state_28521__$1;
(statearr_28556_28600[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (26))){
var inst_28493 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28521__$1 = state_28521;
if(cljs.core.truth_(inst_28493)){
var statearr_28557_28601 = state_28521__$1;
(statearr_28557_28601[(1)] = (30));

} else {
var statearr_28558_28602 = state_28521__$1;
(statearr_28558_28602[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (16))){
var inst_28461 = (state_28521[(2)]);
var inst_28462 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28463 = figwheel.client.format_messages.call(null,inst_28462);
var inst_28464 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28465 = figwheel.client.heads_up.display_error.call(null,inst_28463,inst_28464);
var state_28521__$1 = (function (){var statearr_28559 = state_28521;
(statearr_28559[(9)] = inst_28461);

return statearr_28559;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28521__$1,(17),inst_28465);
} else {
if((state_val_28522 === (30))){
var inst_28495 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28496 = figwheel.client.heads_up.display_warning.call(null,inst_28495);
var state_28521__$1 = state_28521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28521__$1,(33),inst_28496);
} else {
if((state_val_28522 === (10))){
var inst_28455 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
var statearr_28560_28603 = state_28521__$1;
(statearr_28560_28603[(2)] = inst_28455);

(statearr_28560_28603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (18))){
var inst_28471 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28472 = figwheel.client.format_messages.call(null,inst_28471);
var inst_28473 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28474 = figwheel.client.heads_up.display_error.call(null,inst_28472,inst_28473);
var state_28521__$1 = state_28521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28521__$1,(21),inst_28474);
} else {
if((state_val_28522 === (37))){
var inst_28504 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
var statearr_28561_28604 = state_28521__$1;
(statearr_28561_28604[(2)] = inst_28504);

(statearr_28561_28604[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28522 === (8))){
var inst_28447 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28521__$1 = state_28521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28521__$1,(11),inst_28447);
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
var statearr_28565 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28565[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__);

(statearr_28565[(1)] = (1));

return statearr_28565;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____1 = (function (state_28521){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_28521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e28566){if((e28566 instanceof Object)){
var ex__18848__auto__ = e28566;
var statearr_28567_28605 = state_28521;
(statearr_28567_28605[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28606 = state_28521;
state_28521 = G__28606;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__ = function(state_28521){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____1.call(this,state_28521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__,msg_hist,msg_names,msg))
})();
var state__18867__auto__ = (function (){var statearr_28568 = f__18866__auto__.call(null);
(statearr_28568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_28568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto__,msg_hist,msg_names,msg))
);

return c__18865__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18865__auto___28669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___28669,ch){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___28669,ch){
return (function (state_28652){
var state_val_28653 = (state_28652[(1)]);
if((state_val_28653 === (1))){
var state_28652__$1 = state_28652;
var statearr_28654_28670 = state_28652__$1;
(statearr_28654_28670[(2)] = null);

(statearr_28654_28670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28653 === (2))){
var state_28652__$1 = state_28652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28652__$1,(4),ch);
} else {
if((state_val_28653 === (3))){
var inst_28650 = (state_28652[(2)]);
var state_28652__$1 = state_28652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28652__$1,inst_28650);
} else {
if((state_val_28653 === (4))){
var inst_28640 = (state_28652[(7)]);
var inst_28640__$1 = (state_28652[(2)]);
var state_28652__$1 = (function (){var statearr_28655 = state_28652;
(statearr_28655[(7)] = inst_28640__$1);

return statearr_28655;
})();
if(cljs.core.truth_(inst_28640__$1)){
var statearr_28656_28671 = state_28652__$1;
(statearr_28656_28671[(1)] = (5));

} else {
var statearr_28657_28672 = state_28652__$1;
(statearr_28657_28672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28653 === (5))){
var inst_28640 = (state_28652[(7)]);
var inst_28642 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28640);
var state_28652__$1 = state_28652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28652__$1,(8),inst_28642);
} else {
if((state_val_28653 === (6))){
var state_28652__$1 = state_28652;
var statearr_28658_28673 = state_28652__$1;
(statearr_28658_28673[(2)] = null);

(statearr_28658_28673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28653 === (7))){
var inst_28648 = (state_28652[(2)]);
var state_28652__$1 = state_28652;
var statearr_28659_28674 = state_28652__$1;
(statearr_28659_28674[(2)] = inst_28648);

(statearr_28659_28674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28653 === (8))){
var inst_28644 = (state_28652[(2)]);
var state_28652__$1 = (function (){var statearr_28660 = state_28652;
(statearr_28660[(8)] = inst_28644);

return statearr_28660;
})();
var statearr_28661_28675 = state_28652__$1;
(statearr_28661_28675[(2)] = null);

(statearr_28661_28675[(1)] = (2));


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
});})(c__18865__auto___28669,ch))
;
return ((function (switch__18844__auto__,c__18865__auto___28669,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18845__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18845__auto____0 = (function (){
var statearr_28665 = [null,null,null,null,null,null,null,null,null];
(statearr_28665[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18845__auto__);

(statearr_28665[(1)] = (1));

return statearr_28665;
});
var figwheel$client$heads_up_plugin_$_state_machine__18845__auto____1 = (function (state_28652){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_28652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e28666){if((e28666 instanceof Object)){
var ex__18848__auto__ = e28666;
var statearr_28667_28676 = state_28652;
(statearr_28667_28676[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28677 = state_28652;
state_28652 = G__28677;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18845__auto__ = function(state_28652){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18845__auto____1.call(this,state_28652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18845__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18845__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___28669,ch))
})();
var state__18867__auto__ = (function (){var statearr_28668 = f__18866__auto__.call(null);
(statearr_28668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___28669);

return statearr_28668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___28669,ch))
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
return (function (state_28698){
var state_val_28699 = (state_28698[(1)]);
if((state_val_28699 === (1))){
var inst_28693 = cljs.core.async.timeout.call(null,(3000));
var state_28698__$1 = state_28698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28698__$1,(2),inst_28693);
} else {
if((state_val_28699 === (2))){
var inst_28695 = (state_28698[(2)]);
var inst_28696 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28698__$1 = (function (){var statearr_28700 = state_28698;
(statearr_28700[(7)] = inst_28695);

return statearr_28700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28698__$1,inst_28696);
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
var statearr_28704 = [null,null,null,null,null,null,null,null];
(statearr_28704[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__);

(statearr_28704[(1)] = (1));

return statearr_28704;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____1 = (function (state_28698){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_28698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e28705){if((e28705 instanceof Object)){
var ex__18848__auto__ = e28705;
var statearr_28706_28708 = state_28698;
(statearr_28706_28708[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28709 = state_28698;
state_28698 = G__28709;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__ = function(state_28698){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____1.call(this,state_28698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18845__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__))
})();
var state__18867__auto__ = (function (){var statearr_28707 = f__18866__auto__.call(null);
(statearr_28707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_28707;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28710){
var map__28717 = p__28710;
var map__28717__$1 = ((((!((map__28717 == null)))?((((map__28717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28717):map__28717);
var ed = map__28717__$1;
var formatted_exception = cljs.core.get.call(null,map__28717__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28717__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28717__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28719_28723 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28720_28724 = null;
var count__28721_28725 = (0);
var i__28722_28726 = (0);
while(true){
if((i__28722_28726 < count__28721_28725)){
var msg_28727 = cljs.core._nth.call(null,chunk__28720_28724,i__28722_28726);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28727);

var G__28728 = seq__28719_28723;
var G__28729 = chunk__28720_28724;
var G__28730 = count__28721_28725;
var G__28731 = (i__28722_28726 + (1));
seq__28719_28723 = G__28728;
chunk__28720_28724 = G__28729;
count__28721_28725 = G__28730;
i__28722_28726 = G__28731;
continue;
} else {
var temp__4425__auto___28732 = cljs.core.seq.call(null,seq__28719_28723);
if(temp__4425__auto___28732){
var seq__28719_28733__$1 = temp__4425__auto___28732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28719_28733__$1)){
var c__17643__auto___28734 = cljs.core.chunk_first.call(null,seq__28719_28733__$1);
var G__28735 = cljs.core.chunk_rest.call(null,seq__28719_28733__$1);
var G__28736 = c__17643__auto___28734;
var G__28737 = cljs.core.count.call(null,c__17643__auto___28734);
var G__28738 = (0);
seq__28719_28723 = G__28735;
chunk__28720_28724 = G__28736;
count__28721_28725 = G__28737;
i__28722_28726 = G__28738;
continue;
} else {
var msg_28739 = cljs.core.first.call(null,seq__28719_28733__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28739);

var G__28740 = cljs.core.next.call(null,seq__28719_28733__$1);
var G__28741 = null;
var G__28742 = (0);
var G__28743 = (0);
seq__28719_28723 = G__28740;
chunk__28720_28724 = G__28741;
count__28721_28725 = G__28742;
i__28722_28726 = G__28743;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28744){
var map__28747 = p__28744;
var map__28747__$1 = ((((!((map__28747 == null)))?((((map__28747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28747):map__28747);
var w = map__28747__$1;
var message = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28755 = cljs.core.seq.call(null,plugins);
var chunk__28756 = null;
var count__28757 = (0);
var i__28758 = (0);
while(true){
if((i__28758 < count__28757)){
var vec__28759 = cljs.core._nth.call(null,chunk__28756,i__28758);
var k = cljs.core.nth.call(null,vec__28759,(0),null);
var plugin = cljs.core.nth.call(null,vec__28759,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28761 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28755,chunk__28756,count__28757,i__28758,pl_28761,vec__28759,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28761.call(null,msg_hist);
});})(seq__28755,chunk__28756,count__28757,i__28758,pl_28761,vec__28759,k,plugin))
);
} else {
}

var G__28762 = seq__28755;
var G__28763 = chunk__28756;
var G__28764 = count__28757;
var G__28765 = (i__28758 + (1));
seq__28755 = G__28762;
chunk__28756 = G__28763;
count__28757 = G__28764;
i__28758 = G__28765;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28755);
if(temp__4425__auto__){
var seq__28755__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28755__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__28755__$1);
var G__28766 = cljs.core.chunk_rest.call(null,seq__28755__$1);
var G__28767 = c__17643__auto__;
var G__28768 = cljs.core.count.call(null,c__17643__auto__);
var G__28769 = (0);
seq__28755 = G__28766;
chunk__28756 = G__28767;
count__28757 = G__28768;
i__28758 = G__28769;
continue;
} else {
var vec__28760 = cljs.core.first.call(null,seq__28755__$1);
var k = cljs.core.nth.call(null,vec__28760,(0),null);
var plugin = cljs.core.nth.call(null,vec__28760,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28770 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28755,chunk__28756,count__28757,i__28758,pl_28770,vec__28760,k,plugin,seq__28755__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28770.call(null,msg_hist);
});})(seq__28755,chunk__28756,count__28757,i__28758,pl_28770,vec__28760,k,plugin,seq__28755__$1,temp__4425__auto__))
);
} else {
}

var G__28771 = cljs.core.next.call(null,seq__28755__$1);
var G__28772 = null;
var G__28773 = (0);
var G__28774 = (0);
seq__28755 = G__28771;
chunk__28756 = G__28772;
count__28757 = G__28773;
i__28758 = G__28774;
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
var args28775 = [];
var len__17898__auto___28778 = arguments.length;
var i__17899__auto___28779 = (0);
while(true){
if((i__17899__auto___28779 < len__17898__auto___28778)){
args28775.push((arguments[i__17899__auto___28779]));

var G__28780 = (i__17899__auto___28779 + (1));
i__17899__auto___28779 = G__28780;
continue;
} else {
}
break;
}

var G__28777 = args28775.length;
switch (G__28777) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28775.length)].join('')));

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
var len__17898__auto___28786 = arguments.length;
var i__17899__auto___28787 = (0);
while(true){
if((i__17899__auto___28787 < len__17898__auto___28786)){
args__17905__auto__.push((arguments[i__17899__auto___28787]));

var G__28788 = (i__17899__auto___28787 + (1));
i__17899__auto___28787 = G__28788;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((0) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17906__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28783){
var map__28784 = p__28783;
var map__28784__$1 = ((((!((map__28784 == null)))?((((map__28784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28784):map__28784);
var opts = map__28784__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28782){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28782));
});

//# sourceMappingURL=client.js.map