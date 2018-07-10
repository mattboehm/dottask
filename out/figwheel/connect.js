// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('dottask.graph');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__27020__delegate = function (x){
if(cljs.core.truth_(dottask.graph.render_BANG_)){
return cljs.core.apply.call(null,dottask.graph.render_BANG_,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'dottask.graph/render!' is missing");
}
};
var G__27020 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__27021__i = 0, G__27021__a = new Array(arguments.length -  0);
while (G__27021__i < G__27021__a.length) {G__27021__a[G__27021__i] = arguments[G__27021__i + 0]; ++G__27021__i;}
  x = new cljs.core.IndexedSeq(G__27021__a,0);
} 
return G__27020__delegate.call(this,x);};
G__27020.cljs$lang$maxFixedArity = 0;
G__27020.cljs$lang$applyTo = (function (arglist__27022){
var x = cljs.core.seq(arglist__27022);
return G__27020__delegate(x);
});
G__27020.cljs$core$IFn$_invoke$arity$variadic = G__27020__delegate;
return G__27020;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map