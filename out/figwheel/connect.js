// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('dottask.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__44624__delegate = function (x){
if(cljs.core.truth_(dottask.core.render_BANG_)){
return cljs.core.apply.call(null,dottask.core.render_BANG_,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'dottask.core/render!' is missing");
}
};
var G__44624 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__44625__i = 0, G__44625__a = new Array(arguments.length -  0);
while (G__44625__i < G__44625__a.length) {G__44625__a[G__44625__i] = arguments[G__44625__i + 0]; ++G__44625__i;}
  x = new cljs.core.IndexedSeq(G__44625__a,0);
} 
return G__44624__delegate.call(this,x);};
G__44624.cljs$lang$maxFixedArity = 0;
G__44624.cljs$lang$applyTo = (function (arglist__44626){
var x = cljs.core.seq(arglist__44626);
return G__44624__delegate(x);
});
G__44624.cljs$core$IFn$_invoke$arity$variadic = G__44624__delegate;
return G__44624;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map