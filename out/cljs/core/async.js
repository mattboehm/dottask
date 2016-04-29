// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20738 = [];
var len__17898__auto___20744 = arguments.length;
var i__17899__auto___20745 = (0);
while(true){
if((i__17899__auto___20745 < len__17898__auto___20744)){
args20738.push((arguments[i__17899__auto___20745]));

var G__20746 = (i__17899__auto___20745 + (1));
i__17899__auto___20745 = G__20746;
continue;
} else {
}
break;
}

var G__20740 = args20738.length;
switch (G__20740) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20738.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20741 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20741 = (function (f,blockable,meta20742){
this.f = f;
this.blockable = blockable;
this.meta20742 = meta20742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20743,meta20742__$1){
var self__ = this;
var _20743__$1 = this;
return (new cljs.core.async.t_cljs$core$async20741(self__.f,self__.blockable,meta20742__$1));
});

cljs.core.async.t_cljs$core$async20741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20743){
var self__ = this;
var _20743__$1 = this;
return self__.meta20742;
});

cljs.core.async.t_cljs$core$async20741.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20741.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20742","meta20742",1880031389,null)], null);
});

cljs.core.async.t_cljs$core$async20741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20741";

cljs.core.async.t_cljs$core$async20741.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async20741");
});

cljs.core.async.__GT_t_cljs$core$async20741 = (function cljs$core$async$__GT_t_cljs$core$async20741(f__$1,blockable__$1,meta20742){
return (new cljs.core.async.t_cljs$core$async20741(f__$1,blockable__$1,meta20742));
});

}

return (new cljs.core.async.t_cljs$core$async20741(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20750 = [];
var len__17898__auto___20753 = arguments.length;
var i__17899__auto___20754 = (0);
while(true){
if((i__17899__auto___20754 < len__17898__auto___20753)){
args20750.push((arguments[i__17899__auto___20754]));

var G__20755 = (i__17899__auto___20754 + (1));
i__17899__auto___20754 = G__20755;
continue;
} else {
}
break;
}

var G__20752 = args20750.length;
switch (G__20752) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20750.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20757 = [];
var len__17898__auto___20760 = arguments.length;
var i__17899__auto___20761 = (0);
while(true){
if((i__17899__auto___20761 < len__17898__auto___20760)){
args20757.push((arguments[i__17899__auto___20761]));

var G__20762 = (i__17899__auto___20761 + (1));
i__17899__auto___20761 = G__20762;
continue;
} else {
}
break;
}

var G__20759 = args20757.length;
switch (G__20759) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20757.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20764 = [];
var len__17898__auto___20767 = arguments.length;
var i__17899__auto___20768 = (0);
while(true){
if((i__17899__auto___20768 < len__17898__auto___20767)){
args20764.push((arguments[i__17899__auto___20768]));

var G__20769 = (i__17899__auto___20768 + (1));
i__17899__auto___20768 = G__20769;
continue;
} else {
}
break;
}

var G__20766 = args20764.length;
switch (G__20766) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20764.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20771 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20771);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20771,ret){
return (function (){
return fn1.call(null,val_20771);
});})(val_20771,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20772 = [];
var len__17898__auto___20775 = arguments.length;
var i__17899__auto___20776 = (0);
while(true){
if((i__17899__auto___20776 < len__17898__auto___20775)){
args20772.push((arguments[i__17899__auto___20776]));

var G__20777 = (i__17899__auto___20776 + (1));
i__17899__auto___20776 = G__20777;
continue;
} else {
}
break;
}

var G__20774 = args20772.length;
switch (G__20774) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20772.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17743__auto___20779 = n;
var x_20780 = (0);
while(true){
if((x_20780 < n__17743__auto___20779)){
(a[x_20780] = (0));

var G__20781 = (x_20780 + (1));
x_20780 = G__20781;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20782 = (i + (1));
i = G__20782;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20786 = (function (alt_flag,flag,meta20787){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20787 = meta20787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20788,meta20787__$1){
var self__ = this;
var _20788__$1 = this;
return (new cljs.core.async.t_cljs$core$async20786(self__.alt_flag,self__.flag,meta20787__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20788){
var self__ = this;
var _20788__$1 = this;
return self__.meta20787;
});})(flag))
;

cljs.core.async.t_cljs$core$async20786.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20786.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20786.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20787","meta20787",161597576,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20786";

cljs.core.async.t_cljs$core$async20786.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async20786");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20786 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20786(alt_flag__$1,flag__$1,meta20787){
return (new cljs.core.async.t_cljs$core$async20786(alt_flag__$1,flag__$1,meta20787));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20786(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20792 = (function (alt_handler,flag,cb,meta20793){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20793 = meta20793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20794,meta20793__$1){
var self__ = this;
var _20794__$1 = this;
return (new cljs.core.async.t_cljs$core$async20792(self__.alt_handler,self__.flag,self__.cb,meta20793__$1));
});

cljs.core.async.t_cljs$core$async20792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20794){
var self__ = this;
var _20794__$1 = this;
return self__.meta20793;
});

cljs.core.async.t_cljs$core$async20792.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20792.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20792.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20792.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20793","meta20793",-1027875820,null)], null);
});

cljs.core.async.t_cljs$core$async20792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20792";

cljs.core.async.t_cljs$core$async20792.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async20792");
});

cljs.core.async.__GT_t_cljs$core$async20792 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20792(alt_handler__$1,flag__$1,cb__$1,meta20793){
return (new cljs.core.async.t_cljs$core$async20792(alt_handler__$1,flag__$1,cb__$1,meta20793));
});

}

return (new cljs.core.async.t_cljs$core$async20792(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20795_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20795_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20796_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20796_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16840__auto__ = wport;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20797 = (i + (1));
i = G__20797;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16840__auto__ = ret;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16828__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16828__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16828__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17905__auto__ = [];
var len__17898__auto___20803 = arguments.length;
var i__17899__auto___20804 = (0);
while(true){
if((i__17899__auto___20804 < len__17898__auto___20803)){
args__17905__auto__.push((arguments[i__17899__auto___20804]));

var G__20805 = (i__17899__auto___20804 + (1));
i__17899__auto___20804 = G__20805;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((1) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17906__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20800){
var map__20801 = p__20800;
var map__20801__$1 = ((((!((map__20801 == null)))?((((map__20801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20801):map__20801);
var opts = map__20801__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20798){
var G__20799 = cljs.core.first.call(null,seq20798);
var seq20798__$1 = cljs.core.next.call(null,seq20798);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20799,seq20798__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20806 = [];
var len__17898__auto___20856 = arguments.length;
var i__17899__auto___20857 = (0);
while(true){
if((i__17899__auto___20857 < len__17898__auto___20856)){
args20806.push((arguments[i__17899__auto___20857]));

var G__20858 = (i__17899__auto___20857 + (1));
i__17899__auto___20857 = G__20858;
continue;
} else {
}
break;
}

var G__20808 = args20806.length;
switch (G__20808) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20806.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18865__auto___20860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___20860){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___20860){
return (function (state_20832){
var state_val_20833 = (state_20832[(1)]);
if((state_val_20833 === (7))){
var inst_20828 = (state_20832[(2)]);
var state_20832__$1 = state_20832;
var statearr_20834_20861 = state_20832__$1;
(statearr_20834_20861[(2)] = inst_20828);

(statearr_20834_20861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20833 === (1))){
var state_20832__$1 = state_20832;
var statearr_20835_20862 = state_20832__$1;
(statearr_20835_20862[(2)] = null);

(statearr_20835_20862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20833 === (4))){
var inst_20811 = (state_20832[(7)]);
var inst_20811__$1 = (state_20832[(2)]);
var inst_20812 = (inst_20811__$1 == null);
var state_20832__$1 = (function (){var statearr_20836 = state_20832;
(statearr_20836[(7)] = inst_20811__$1);

return statearr_20836;
})();
if(cljs.core.truth_(inst_20812)){
var statearr_20837_20863 = state_20832__$1;
(statearr_20837_20863[(1)] = (5));

} else {
var statearr_20838_20864 = state_20832__$1;
(statearr_20838_20864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20833 === (13))){
var state_20832__$1 = state_20832;
var statearr_20839_20865 = state_20832__$1;
(statearr_20839_20865[(2)] = null);

(statearr_20839_20865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20833 === (6))){
var inst_20811 = (state_20832[(7)]);
var state_20832__$1 = state_20832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20832__$1,(11),to,inst_20811);
} else {
if((state_val_20833 === (3))){
var inst_20830 = (state_20832[(2)]);
var state_20832__$1 = state_20832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20832__$1,inst_20830);
} else {
if((state_val_20833 === (12))){
var state_20832__$1 = state_20832;
var statearr_20840_20866 = state_20832__$1;
(statearr_20840_20866[(2)] = null);

(statearr_20840_20866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20833 === (2))){
var state_20832__$1 = state_20832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20832__$1,(4),from);
} else {
if((state_val_20833 === (11))){
var inst_20821 = (state_20832[(2)]);
var state_20832__$1 = state_20832;
if(cljs.core.truth_(inst_20821)){
var statearr_20841_20867 = state_20832__$1;
(statearr_20841_20867[(1)] = (12));

} else {
var statearr_20842_20868 = state_20832__$1;
(statearr_20842_20868[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20833 === (9))){
var state_20832__$1 = state_20832;
var statearr_20843_20869 = state_20832__$1;
(statearr_20843_20869[(2)] = null);

(statearr_20843_20869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20833 === (5))){
var state_20832__$1 = state_20832;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20844_20870 = state_20832__$1;
(statearr_20844_20870[(1)] = (8));

} else {
var statearr_20845_20871 = state_20832__$1;
(statearr_20845_20871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20833 === (14))){
var inst_20826 = (state_20832[(2)]);
var state_20832__$1 = state_20832;
var statearr_20846_20872 = state_20832__$1;
(statearr_20846_20872[(2)] = inst_20826);

(statearr_20846_20872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20833 === (10))){
var inst_20818 = (state_20832[(2)]);
var state_20832__$1 = state_20832;
var statearr_20847_20873 = state_20832__$1;
(statearr_20847_20873[(2)] = inst_20818);

(statearr_20847_20873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20833 === (8))){
var inst_20815 = cljs.core.async.close_BANG_.call(null,to);
var state_20832__$1 = state_20832;
var statearr_20848_20874 = state_20832__$1;
(statearr_20848_20874[(2)] = inst_20815);

(statearr_20848_20874[(1)] = (10));


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
});})(c__18865__auto___20860))
;
return ((function (switch__18844__auto__,c__18865__auto___20860){
return (function() {
var cljs$core$async$state_machine__18845__auto__ = null;
var cljs$core$async$state_machine__18845__auto____0 = (function (){
var statearr_20852 = [null,null,null,null,null,null,null,null];
(statearr_20852[(0)] = cljs$core$async$state_machine__18845__auto__);

(statearr_20852[(1)] = (1));

return statearr_20852;
});
var cljs$core$async$state_machine__18845__auto____1 = (function (state_20832){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_20832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e20853){if((e20853 instanceof Object)){
var ex__18848__auto__ = e20853;
var statearr_20854_20875 = state_20832;
(statearr_20854_20875[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20876 = state_20832;
state_20832 = G__20876;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$state_machine__18845__auto__ = function(state_20832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18845__auto____1.call(this,state_20832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18845__auto____0;
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18845__auto____1;
return cljs$core$async$state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___20860))
})();
var state__18867__auto__ = (function (){var statearr_20855 = f__18866__auto__.call(null);
(statearr_20855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___20860);

return statearr_20855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___20860))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21060){
var vec__21061 = p__21060;
var v = cljs.core.nth.call(null,vec__21061,(0),null);
var p = cljs.core.nth.call(null,vec__21061,(1),null);
var job = vec__21061;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18865__auto___21243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___21243,res,vec__21061,v,p,job,jobs,results){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___21243,res,vec__21061,v,p,job,jobs,results){
return (function (state_21066){
var state_val_21067 = (state_21066[(1)]);
if((state_val_21067 === (1))){
var state_21066__$1 = state_21066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21066__$1,(2),res,v);
} else {
if((state_val_21067 === (2))){
var inst_21063 = (state_21066[(2)]);
var inst_21064 = cljs.core.async.close_BANG_.call(null,res);
var state_21066__$1 = (function (){var statearr_21068 = state_21066;
(statearr_21068[(7)] = inst_21063);

return statearr_21068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21066__$1,inst_21064);
} else {
return null;
}
}
});})(c__18865__auto___21243,res,vec__21061,v,p,job,jobs,results))
;
return ((function (switch__18844__auto__,c__18865__auto___21243,res,vec__21061,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____0 = (function (){
var statearr_21072 = [null,null,null,null,null,null,null,null];
(statearr_21072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__);

(statearr_21072[(1)] = (1));

return statearr_21072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____1 = (function (state_21066){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_21066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e21073){if((e21073 instanceof Object)){
var ex__18848__auto__ = e21073;
var statearr_21074_21244 = state_21066;
(statearr_21074_21244[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21245 = state_21066;
state_21066 = G__21245;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__ = function(state_21066){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____1.call(this,state_21066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___21243,res,vec__21061,v,p,job,jobs,results))
})();
var state__18867__auto__ = (function (){var statearr_21075 = f__18866__auto__.call(null);
(statearr_21075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___21243);

return statearr_21075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___21243,res,vec__21061,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21076){
var vec__21077 = p__21076;
var v = cljs.core.nth.call(null,vec__21077,(0),null);
var p = cljs.core.nth.call(null,vec__21077,(1),null);
var job = vec__21077;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17743__auto___21246 = n;
var __21247 = (0);
while(true){
if((__21247 < n__17743__auto___21246)){
var G__21078_21248 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21078_21248) {
case "compute":
var c__18865__auto___21250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21247,c__18865__auto___21250,G__21078_21248,n__17743__auto___21246,jobs,results,process,async){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (__21247,c__18865__auto___21250,G__21078_21248,n__17743__auto___21246,jobs,results,process,async){
return (function (state_21091){
var state_val_21092 = (state_21091[(1)]);
if((state_val_21092 === (1))){
var state_21091__$1 = state_21091;
var statearr_21093_21251 = state_21091__$1;
(statearr_21093_21251[(2)] = null);

(statearr_21093_21251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21092 === (2))){
var state_21091__$1 = state_21091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21091__$1,(4),jobs);
} else {
if((state_val_21092 === (3))){
var inst_21089 = (state_21091[(2)]);
var state_21091__$1 = state_21091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21091__$1,inst_21089);
} else {
if((state_val_21092 === (4))){
var inst_21081 = (state_21091[(2)]);
var inst_21082 = process.call(null,inst_21081);
var state_21091__$1 = state_21091;
if(cljs.core.truth_(inst_21082)){
var statearr_21094_21252 = state_21091__$1;
(statearr_21094_21252[(1)] = (5));

} else {
var statearr_21095_21253 = state_21091__$1;
(statearr_21095_21253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21092 === (5))){
var state_21091__$1 = state_21091;
var statearr_21096_21254 = state_21091__$1;
(statearr_21096_21254[(2)] = null);

(statearr_21096_21254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21092 === (6))){
var state_21091__$1 = state_21091;
var statearr_21097_21255 = state_21091__$1;
(statearr_21097_21255[(2)] = null);

(statearr_21097_21255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21092 === (7))){
var inst_21087 = (state_21091[(2)]);
var state_21091__$1 = state_21091;
var statearr_21098_21256 = state_21091__$1;
(statearr_21098_21256[(2)] = inst_21087);

(statearr_21098_21256[(1)] = (3));


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
});})(__21247,c__18865__auto___21250,G__21078_21248,n__17743__auto___21246,jobs,results,process,async))
;
return ((function (__21247,switch__18844__auto__,c__18865__auto___21250,G__21078_21248,n__17743__auto___21246,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____0 = (function (){
var statearr_21102 = [null,null,null,null,null,null,null];
(statearr_21102[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__);

(statearr_21102[(1)] = (1));

return statearr_21102;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____1 = (function (state_21091){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_21091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e21103){if((e21103 instanceof Object)){
var ex__18848__auto__ = e21103;
var statearr_21104_21257 = state_21091;
(statearr_21104_21257[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21258 = state_21091;
state_21091 = G__21258;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__ = function(state_21091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____1.call(this,state_21091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__;
})()
;})(__21247,switch__18844__auto__,c__18865__auto___21250,G__21078_21248,n__17743__auto___21246,jobs,results,process,async))
})();
var state__18867__auto__ = (function (){var statearr_21105 = f__18866__auto__.call(null);
(statearr_21105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___21250);

return statearr_21105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(__21247,c__18865__auto___21250,G__21078_21248,n__17743__auto___21246,jobs,results,process,async))
);


break;
case "async":
var c__18865__auto___21259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21247,c__18865__auto___21259,G__21078_21248,n__17743__auto___21246,jobs,results,process,async){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (__21247,c__18865__auto___21259,G__21078_21248,n__17743__auto___21246,jobs,results,process,async){
return (function (state_21118){
var state_val_21119 = (state_21118[(1)]);
if((state_val_21119 === (1))){
var state_21118__$1 = state_21118;
var statearr_21120_21260 = state_21118__$1;
(statearr_21120_21260[(2)] = null);

(statearr_21120_21260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21119 === (2))){
var state_21118__$1 = state_21118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21118__$1,(4),jobs);
} else {
if((state_val_21119 === (3))){
var inst_21116 = (state_21118[(2)]);
var state_21118__$1 = state_21118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21118__$1,inst_21116);
} else {
if((state_val_21119 === (4))){
var inst_21108 = (state_21118[(2)]);
var inst_21109 = async.call(null,inst_21108);
var state_21118__$1 = state_21118;
if(cljs.core.truth_(inst_21109)){
var statearr_21121_21261 = state_21118__$1;
(statearr_21121_21261[(1)] = (5));

} else {
var statearr_21122_21262 = state_21118__$1;
(statearr_21122_21262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21119 === (5))){
var state_21118__$1 = state_21118;
var statearr_21123_21263 = state_21118__$1;
(statearr_21123_21263[(2)] = null);

(statearr_21123_21263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21119 === (6))){
var state_21118__$1 = state_21118;
var statearr_21124_21264 = state_21118__$1;
(statearr_21124_21264[(2)] = null);

(statearr_21124_21264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21119 === (7))){
var inst_21114 = (state_21118[(2)]);
var state_21118__$1 = state_21118;
var statearr_21125_21265 = state_21118__$1;
(statearr_21125_21265[(2)] = inst_21114);

(statearr_21125_21265[(1)] = (3));


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
});})(__21247,c__18865__auto___21259,G__21078_21248,n__17743__auto___21246,jobs,results,process,async))
;
return ((function (__21247,switch__18844__auto__,c__18865__auto___21259,G__21078_21248,n__17743__auto___21246,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____0 = (function (){
var statearr_21129 = [null,null,null,null,null,null,null];
(statearr_21129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__);

(statearr_21129[(1)] = (1));

return statearr_21129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____1 = (function (state_21118){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_21118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e21130){if((e21130 instanceof Object)){
var ex__18848__auto__ = e21130;
var statearr_21131_21266 = state_21118;
(statearr_21131_21266[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21267 = state_21118;
state_21118 = G__21267;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__ = function(state_21118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____1.call(this,state_21118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__;
})()
;})(__21247,switch__18844__auto__,c__18865__auto___21259,G__21078_21248,n__17743__auto___21246,jobs,results,process,async))
})();
var state__18867__auto__ = (function (){var statearr_21132 = f__18866__auto__.call(null);
(statearr_21132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___21259);

return statearr_21132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(__21247,c__18865__auto___21259,G__21078_21248,n__17743__auto___21246,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21268 = (__21247 + (1));
__21247 = G__21268;
continue;
} else {
}
break;
}

var c__18865__auto___21269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___21269,jobs,results,process,async){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___21269,jobs,results,process,async){
return (function (state_21154){
var state_val_21155 = (state_21154[(1)]);
if((state_val_21155 === (1))){
var state_21154__$1 = state_21154;
var statearr_21156_21270 = state_21154__$1;
(statearr_21156_21270[(2)] = null);

(statearr_21156_21270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21155 === (2))){
var state_21154__$1 = state_21154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21154__$1,(4),from);
} else {
if((state_val_21155 === (3))){
var inst_21152 = (state_21154[(2)]);
var state_21154__$1 = state_21154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21154__$1,inst_21152);
} else {
if((state_val_21155 === (4))){
var inst_21135 = (state_21154[(7)]);
var inst_21135__$1 = (state_21154[(2)]);
var inst_21136 = (inst_21135__$1 == null);
var state_21154__$1 = (function (){var statearr_21157 = state_21154;
(statearr_21157[(7)] = inst_21135__$1);

return statearr_21157;
})();
if(cljs.core.truth_(inst_21136)){
var statearr_21158_21271 = state_21154__$1;
(statearr_21158_21271[(1)] = (5));

} else {
var statearr_21159_21272 = state_21154__$1;
(statearr_21159_21272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21155 === (5))){
var inst_21138 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21154__$1 = state_21154;
var statearr_21160_21273 = state_21154__$1;
(statearr_21160_21273[(2)] = inst_21138);

(statearr_21160_21273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21155 === (6))){
var inst_21140 = (state_21154[(8)]);
var inst_21135 = (state_21154[(7)]);
var inst_21140__$1 = cljs.core.async.chan.call(null,(1));
var inst_21141 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21142 = [inst_21135,inst_21140__$1];
var inst_21143 = (new cljs.core.PersistentVector(null,2,(5),inst_21141,inst_21142,null));
var state_21154__$1 = (function (){var statearr_21161 = state_21154;
(statearr_21161[(8)] = inst_21140__$1);

return statearr_21161;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21154__$1,(8),jobs,inst_21143);
} else {
if((state_val_21155 === (7))){
var inst_21150 = (state_21154[(2)]);
var state_21154__$1 = state_21154;
var statearr_21162_21274 = state_21154__$1;
(statearr_21162_21274[(2)] = inst_21150);

(statearr_21162_21274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21155 === (8))){
var inst_21140 = (state_21154[(8)]);
var inst_21145 = (state_21154[(2)]);
var state_21154__$1 = (function (){var statearr_21163 = state_21154;
(statearr_21163[(9)] = inst_21145);

return statearr_21163;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21154__$1,(9),results,inst_21140);
} else {
if((state_val_21155 === (9))){
var inst_21147 = (state_21154[(2)]);
var state_21154__$1 = (function (){var statearr_21164 = state_21154;
(statearr_21164[(10)] = inst_21147);

return statearr_21164;
})();
var statearr_21165_21275 = state_21154__$1;
(statearr_21165_21275[(2)] = null);

(statearr_21165_21275[(1)] = (2));


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
});})(c__18865__auto___21269,jobs,results,process,async))
;
return ((function (switch__18844__auto__,c__18865__auto___21269,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____0 = (function (){
var statearr_21169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21169[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__);

(statearr_21169[(1)] = (1));

return statearr_21169;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____1 = (function (state_21154){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_21154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e21170){if((e21170 instanceof Object)){
var ex__18848__auto__ = e21170;
var statearr_21171_21276 = state_21154;
(statearr_21171_21276[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21277 = state_21154;
state_21154 = G__21277;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__ = function(state_21154){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____1.call(this,state_21154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___21269,jobs,results,process,async))
})();
var state__18867__auto__ = (function (){var statearr_21172 = f__18866__auto__.call(null);
(statearr_21172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___21269);

return statearr_21172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___21269,jobs,results,process,async))
);


var c__18865__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto__,jobs,results,process,async){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto__,jobs,results,process,async){
return (function (state_21210){
var state_val_21211 = (state_21210[(1)]);
if((state_val_21211 === (7))){
var inst_21206 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
var statearr_21212_21278 = state_21210__$1;
(statearr_21212_21278[(2)] = inst_21206);

(statearr_21212_21278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (20))){
var state_21210__$1 = state_21210;
var statearr_21213_21279 = state_21210__$1;
(statearr_21213_21279[(2)] = null);

(statearr_21213_21279[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (1))){
var state_21210__$1 = state_21210;
var statearr_21214_21280 = state_21210__$1;
(statearr_21214_21280[(2)] = null);

(statearr_21214_21280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (4))){
var inst_21175 = (state_21210[(7)]);
var inst_21175__$1 = (state_21210[(2)]);
var inst_21176 = (inst_21175__$1 == null);
var state_21210__$1 = (function (){var statearr_21215 = state_21210;
(statearr_21215[(7)] = inst_21175__$1);

return statearr_21215;
})();
if(cljs.core.truth_(inst_21176)){
var statearr_21216_21281 = state_21210__$1;
(statearr_21216_21281[(1)] = (5));

} else {
var statearr_21217_21282 = state_21210__$1;
(statearr_21217_21282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (15))){
var inst_21188 = (state_21210[(8)]);
var state_21210__$1 = state_21210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21210__$1,(18),to,inst_21188);
} else {
if((state_val_21211 === (21))){
var inst_21201 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
var statearr_21218_21283 = state_21210__$1;
(statearr_21218_21283[(2)] = inst_21201);

(statearr_21218_21283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (13))){
var inst_21203 = (state_21210[(2)]);
var state_21210__$1 = (function (){var statearr_21219 = state_21210;
(statearr_21219[(9)] = inst_21203);

return statearr_21219;
})();
var statearr_21220_21284 = state_21210__$1;
(statearr_21220_21284[(2)] = null);

(statearr_21220_21284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (6))){
var inst_21175 = (state_21210[(7)]);
var state_21210__$1 = state_21210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21210__$1,(11),inst_21175);
} else {
if((state_val_21211 === (17))){
var inst_21196 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
if(cljs.core.truth_(inst_21196)){
var statearr_21221_21285 = state_21210__$1;
(statearr_21221_21285[(1)] = (19));

} else {
var statearr_21222_21286 = state_21210__$1;
(statearr_21222_21286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (3))){
var inst_21208 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21210__$1,inst_21208);
} else {
if((state_val_21211 === (12))){
var inst_21185 = (state_21210[(10)]);
var state_21210__$1 = state_21210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21210__$1,(14),inst_21185);
} else {
if((state_val_21211 === (2))){
var state_21210__$1 = state_21210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21210__$1,(4),results);
} else {
if((state_val_21211 === (19))){
var state_21210__$1 = state_21210;
var statearr_21223_21287 = state_21210__$1;
(statearr_21223_21287[(2)] = null);

(statearr_21223_21287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (11))){
var inst_21185 = (state_21210[(2)]);
var state_21210__$1 = (function (){var statearr_21224 = state_21210;
(statearr_21224[(10)] = inst_21185);

return statearr_21224;
})();
var statearr_21225_21288 = state_21210__$1;
(statearr_21225_21288[(2)] = null);

(statearr_21225_21288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (9))){
var state_21210__$1 = state_21210;
var statearr_21226_21289 = state_21210__$1;
(statearr_21226_21289[(2)] = null);

(statearr_21226_21289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (5))){
var state_21210__$1 = state_21210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21227_21290 = state_21210__$1;
(statearr_21227_21290[(1)] = (8));

} else {
var statearr_21228_21291 = state_21210__$1;
(statearr_21228_21291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (14))){
var inst_21190 = (state_21210[(11)]);
var inst_21188 = (state_21210[(8)]);
var inst_21188__$1 = (state_21210[(2)]);
var inst_21189 = (inst_21188__$1 == null);
var inst_21190__$1 = cljs.core.not.call(null,inst_21189);
var state_21210__$1 = (function (){var statearr_21229 = state_21210;
(statearr_21229[(11)] = inst_21190__$1);

(statearr_21229[(8)] = inst_21188__$1);

return statearr_21229;
})();
if(inst_21190__$1){
var statearr_21230_21292 = state_21210__$1;
(statearr_21230_21292[(1)] = (15));

} else {
var statearr_21231_21293 = state_21210__$1;
(statearr_21231_21293[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (16))){
var inst_21190 = (state_21210[(11)]);
var state_21210__$1 = state_21210;
var statearr_21232_21294 = state_21210__$1;
(statearr_21232_21294[(2)] = inst_21190);

(statearr_21232_21294[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (10))){
var inst_21182 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
var statearr_21233_21295 = state_21210__$1;
(statearr_21233_21295[(2)] = inst_21182);

(statearr_21233_21295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (18))){
var inst_21193 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
var statearr_21234_21296 = state_21210__$1;
(statearr_21234_21296[(2)] = inst_21193);

(statearr_21234_21296[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (8))){
var inst_21179 = cljs.core.async.close_BANG_.call(null,to);
var state_21210__$1 = state_21210;
var statearr_21235_21297 = state_21210__$1;
(statearr_21235_21297[(2)] = inst_21179);

(statearr_21235_21297[(1)] = (10));


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
}
}
}
}
});})(c__18865__auto__,jobs,results,process,async))
;
return ((function (switch__18844__auto__,c__18865__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____0 = (function (){
var statearr_21239 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21239[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__);

(statearr_21239[(1)] = (1));

return statearr_21239;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____1 = (function (state_21210){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_21210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e21240){if((e21240 instanceof Object)){
var ex__18848__auto__ = e21240;
var statearr_21241_21298 = state_21210;
(statearr_21241_21298[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21299 = state_21210;
state_21210 = G__21299;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__ = function(state_21210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____1.call(this,state_21210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18845__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__,jobs,results,process,async))
})();
var state__18867__auto__ = (function (){var statearr_21242 = f__18866__auto__.call(null);
(statearr_21242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_21242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto__,jobs,results,process,async))
);

return c__18865__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21300 = [];
var len__17898__auto___21303 = arguments.length;
var i__17899__auto___21304 = (0);
while(true){
if((i__17899__auto___21304 < len__17898__auto___21303)){
args21300.push((arguments[i__17899__auto___21304]));

var G__21305 = (i__17899__auto___21304 + (1));
i__17899__auto___21304 = G__21305;
continue;
} else {
}
break;
}

var G__21302 = args21300.length;
switch (G__21302) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21300.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21307 = [];
var len__17898__auto___21310 = arguments.length;
var i__17899__auto___21311 = (0);
while(true){
if((i__17899__auto___21311 < len__17898__auto___21310)){
args21307.push((arguments[i__17899__auto___21311]));

var G__21312 = (i__17899__auto___21311 + (1));
i__17899__auto___21311 = G__21312;
continue;
} else {
}
break;
}

var G__21309 = args21307.length;
switch (G__21309) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21307.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21314 = [];
var len__17898__auto___21367 = arguments.length;
var i__17899__auto___21368 = (0);
while(true){
if((i__17899__auto___21368 < len__17898__auto___21367)){
args21314.push((arguments[i__17899__auto___21368]));

var G__21369 = (i__17899__auto___21368 + (1));
i__17899__auto___21368 = G__21369;
continue;
} else {
}
break;
}

var G__21316 = args21314.length;
switch (G__21316) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21314.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18865__auto___21371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___21371,tc,fc){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___21371,tc,fc){
return (function (state_21342){
var state_val_21343 = (state_21342[(1)]);
if((state_val_21343 === (7))){
var inst_21338 = (state_21342[(2)]);
var state_21342__$1 = state_21342;
var statearr_21344_21372 = state_21342__$1;
(statearr_21344_21372[(2)] = inst_21338);

(statearr_21344_21372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21343 === (1))){
var state_21342__$1 = state_21342;
var statearr_21345_21373 = state_21342__$1;
(statearr_21345_21373[(2)] = null);

(statearr_21345_21373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21343 === (4))){
var inst_21319 = (state_21342[(7)]);
var inst_21319__$1 = (state_21342[(2)]);
var inst_21320 = (inst_21319__$1 == null);
var state_21342__$1 = (function (){var statearr_21346 = state_21342;
(statearr_21346[(7)] = inst_21319__$1);

return statearr_21346;
})();
if(cljs.core.truth_(inst_21320)){
var statearr_21347_21374 = state_21342__$1;
(statearr_21347_21374[(1)] = (5));

} else {
var statearr_21348_21375 = state_21342__$1;
(statearr_21348_21375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21343 === (13))){
var state_21342__$1 = state_21342;
var statearr_21349_21376 = state_21342__$1;
(statearr_21349_21376[(2)] = null);

(statearr_21349_21376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21343 === (6))){
var inst_21319 = (state_21342[(7)]);
var inst_21325 = p.call(null,inst_21319);
var state_21342__$1 = state_21342;
if(cljs.core.truth_(inst_21325)){
var statearr_21350_21377 = state_21342__$1;
(statearr_21350_21377[(1)] = (9));

} else {
var statearr_21351_21378 = state_21342__$1;
(statearr_21351_21378[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21343 === (3))){
var inst_21340 = (state_21342[(2)]);
var state_21342__$1 = state_21342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21342__$1,inst_21340);
} else {
if((state_val_21343 === (12))){
var state_21342__$1 = state_21342;
var statearr_21352_21379 = state_21342__$1;
(statearr_21352_21379[(2)] = null);

(statearr_21352_21379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21343 === (2))){
var state_21342__$1 = state_21342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21342__$1,(4),ch);
} else {
if((state_val_21343 === (11))){
var inst_21319 = (state_21342[(7)]);
var inst_21329 = (state_21342[(2)]);
var state_21342__$1 = state_21342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21342__$1,(8),inst_21329,inst_21319);
} else {
if((state_val_21343 === (9))){
var state_21342__$1 = state_21342;
var statearr_21353_21380 = state_21342__$1;
(statearr_21353_21380[(2)] = tc);

(statearr_21353_21380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21343 === (5))){
var inst_21322 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21323 = cljs.core.async.close_BANG_.call(null,fc);
var state_21342__$1 = (function (){var statearr_21354 = state_21342;
(statearr_21354[(8)] = inst_21322);

return statearr_21354;
})();
var statearr_21355_21381 = state_21342__$1;
(statearr_21355_21381[(2)] = inst_21323);

(statearr_21355_21381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21343 === (14))){
var inst_21336 = (state_21342[(2)]);
var state_21342__$1 = state_21342;
var statearr_21356_21382 = state_21342__$1;
(statearr_21356_21382[(2)] = inst_21336);

(statearr_21356_21382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21343 === (10))){
var state_21342__$1 = state_21342;
var statearr_21357_21383 = state_21342__$1;
(statearr_21357_21383[(2)] = fc);

(statearr_21357_21383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21343 === (8))){
var inst_21331 = (state_21342[(2)]);
var state_21342__$1 = state_21342;
if(cljs.core.truth_(inst_21331)){
var statearr_21358_21384 = state_21342__$1;
(statearr_21358_21384[(1)] = (12));

} else {
var statearr_21359_21385 = state_21342__$1;
(statearr_21359_21385[(1)] = (13));

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
});})(c__18865__auto___21371,tc,fc))
;
return ((function (switch__18844__auto__,c__18865__auto___21371,tc,fc){
return (function() {
var cljs$core$async$state_machine__18845__auto__ = null;
var cljs$core$async$state_machine__18845__auto____0 = (function (){
var statearr_21363 = [null,null,null,null,null,null,null,null,null];
(statearr_21363[(0)] = cljs$core$async$state_machine__18845__auto__);

(statearr_21363[(1)] = (1));

return statearr_21363;
});
var cljs$core$async$state_machine__18845__auto____1 = (function (state_21342){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_21342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e21364){if((e21364 instanceof Object)){
var ex__18848__auto__ = e21364;
var statearr_21365_21386 = state_21342;
(statearr_21365_21386[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21387 = state_21342;
state_21342 = G__21387;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$state_machine__18845__auto__ = function(state_21342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18845__auto____1.call(this,state_21342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18845__auto____0;
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18845__auto____1;
return cljs$core$async$state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___21371,tc,fc))
})();
var state__18867__auto__ = (function (){var statearr_21366 = f__18866__auto__.call(null);
(statearr_21366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___21371);

return statearr_21366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___21371,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18865__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto__){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto__){
return (function (state_21451){
var state_val_21452 = (state_21451[(1)]);
if((state_val_21452 === (7))){
var inst_21447 = (state_21451[(2)]);
var state_21451__$1 = state_21451;
var statearr_21453_21474 = state_21451__$1;
(statearr_21453_21474[(2)] = inst_21447);

(statearr_21453_21474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21452 === (1))){
var inst_21431 = init;
var state_21451__$1 = (function (){var statearr_21454 = state_21451;
(statearr_21454[(7)] = inst_21431);

return statearr_21454;
})();
var statearr_21455_21475 = state_21451__$1;
(statearr_21455_21475[(2)] = null);

(statearr_21455_21475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21452 === (4))){
var inst_21434 = (state_21451[(8)]);
var inst_21434__$1 = (state_21451[(2)]);
var inst_21435 = (inst_21434__$1 == null);
var state_21451__$1 = (function (){var statearr_21456 = state_21451;
(statearr_21456[(8)] = inst_21434__$1);

return statearr_21456;
})();
if(cljs.core.truth_(inst_21435)){
var statearr_21457_21476 = state_21451__$1;
(statearr_21457_21476[(1)] = (5));

} else {
var statearr_21458_21477 = state_21451__$1;
(statearr_21458_21477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21452 === (6))){
var inst_21431 = (state_21451[(7)]);
var inst_21434 = (state_21451[(8)]);
var inst_21438 = (state_21451[(9)]);
var inst_21438__$1 = f.call(null,inst_21431,inst_21434);
var inst_21439 = cljs.core.reduced_QMARK_.call(null,inst_21438__$1);
var state_21451__$1 = (function (){var statearr_21459 = state_21451;
(statearr_21459[(9)] = inst_21438__$1);

return statearr_21459;
})();
if(inst_21439){
var statearr_21460_21478 = state_21451__$1;
(statearr_21460_21478[(1)] = (8));

} else {
var statearr_21461_21479 = state_21451__$1;
(statearr_21461_21479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21452 === (3))){
var inst_21449 = (state_21451[(2)]);
var state_21451__$1 = state_21451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21451__$1,inst_21449);
} else {
if((state_val_21452 === (2))){
var state_21451__$1 = state_21451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21451__$1,(4),ch);
} else {
if((state_val_21452 === (9))){
var inst_21438 = (state_21451[(9)]);
var inst_21431 = inst_21438;
var state_21451__$1 = (function (){var statearr_21462 = state_21451;
(statearr_21462[(7)] = inst_21431);

return statearr_21462;
})();
var statearr_21463_21480 = state_21451__$1;
(statearr_21463_21480[(2)] = null);

(statearr_21463_21480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21452 === (5))){
var inst_21431 = (state_21451[(7)]);
var state_21451__$1 = state_21451;
var statearr_21464_21481 = state_21451__$1;
(statearr_21464_21481[(2)] = inst_21431);

(statearr_21464_21481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21452 === (10))){
var inst_21445 = (state_21451[(2)]);
var state_21451__$1 = state_21451;
var statearr_21465_21482 = state_21451__$1;
(statearr_21465_21482[(2)] = inst_21445);

(statearr_21465_21482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21452 === (8))){
var inst_21438 = (state_21451[(9)]);
var inst_21441 = cljs.core.deref.call(null,inst_21438);
var state_21451__$1 = state_21451;
var statearr_21466_21483 = state_21451__$1;
(statearr_21466_21483[(2)] = inst_21441);

(statearr_21466_21483[(1)] = (10));


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
});})(c__18865__auto__))
;
return ((function (switch__18844__auto__,c__18865__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18845__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18845__auto____0 = (function (){
var statearr_21470 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21470[(0)] = cljs$core$async$reduce_$_state_machine__18845__auto__);

(statearr_21470[(1)] = (1));

return statearr_21470;
});
var cljs$core$async$reduce_$_state_machine__18845__auto____1 = (function (state_21451){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_21451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e21471){if((e21471 instanceof Object)){
var ex__18848__auto__ = e21471;
var statearr_21472_21484 = state_21451;
(statearr_21472_21484[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21485 = state_21451;
state_21451 = G__21485;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18845__auto__ = function(state_21451){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18845__auto____1.call(this,state_21451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18845__auto____0;
cljs$core$async$reduce_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18845__auto____1;
return cljs$core$async$reduce_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__))
})();
var state__18867__auto__ = (function (){var statearr_21473 = f__18866__auto__.call(null);
(statearr_21473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_21473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto__))
);

return c__18865__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21486 = [];
var len__17898__auto___21538 = arguments.length;
var i__17899__auto___21539 = (0);
while(true){
if((i__17899__auto___21539 < len__17898__auto___21538)){
args21486.push((arguments[i__17899__auto___21539]));

var G__21540 = (i__17899__auto___21539 + (1));
i__17899__auto___21539 = G__21540;
continue;
} else {
}
break;
}

var G__21488 = args21486.length;
switch (G__21488) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21486.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18865__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto__){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto__){
return (function (state_21513){
var state_val_21514 = (state_21513[(1)]);
if((state_val_21514 === (7))){
var inst_21495 = (state_21513[(2)]);
var state_21513__$1 = state_21513;
var statearr_21515_21542 = state_21513__$1;
(statearr_21515_21542[(2)] = inst_21495);

(statearr_21515_21542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (1))){
var inst_21489 = cljs.core.seq.call(null,coll);
var inst_21490 = inst_21489;
var state_21513__$1 = (function (){var statearr_21516 = state_21513;
(statearr_21516[(7)] = inst_21490);

return statearr_21516;
})();
var statearr_21517_21543 = state_21513__$1;
(statearr_21517_21543[(2)] = null);

(statearr_21517_21543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (4))){
var inst_21490 = (state_21513[(7)]);
var inst_21493 = cljs.core.first.call(null,inst_21490);
var state_21513__$1 = state_21513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21513__$1,(7),ch,inst_21493);
} else {
if((state_val_21514 === (13))){
var inst_21507 = (state_21513[(2)]);
var state_21513__$1 = state_21513;
var statearr_21518_21544 = state_21513__$1;
(statearr_21518_21544[(2)] = inst_21507);

(statearr_21518_21544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (6))){
var inst_21498 = (state_21513[(2)]);
var state_21513__$1 = state_21513;
if(cljs.core.truth_(inst_21498)){
var statearr_21519_21545 = state_21513__$1;
(statearr_21519_21545[(1)] = (8));

} else {
var statearr_21520_21546 = state_21513__$1;
(statearr_21520_21546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (3))){
var inst_21511 = (state_21513[(2)]);
var state_21513__$1 = state_21513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21513__$1,inst_21511);
} else {
if((state_val_21514 === (12))){
var state_21513__$1 = state_21513;
var statearr_21521_21547 = state_21513__$1;
(statearr_21521_21547[(2)] = null);

(statearr_21521_21547[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (2))){
var inst_21490 = (state_21513[(7)]);
var state_21513__$1 = state_21513;
if(cljs.core.truth_(inst_21490)){
var statearr_21522_21548 = state_21513__$1;
(statearr_21522_21548[(1)] = (4));

} else {
var statearr_21523_21549 = state_21513__$1;
(statearr_21523_21549[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (11))){
var inst_21504 = cljs.core.async.close_BANG_.call(null,ch);
var state_21513__$1 = state_21513;
var statearr_21524_21550 = state_21513__$1;
(statearr_21524_21550[(2)] = inst_21504);

(statearr_21524_21550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (9))){
var state_21513__$1 = state_21513;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21525_21551 = state_21513__$1;
(statearr_21525_21551[(1)] = (11));

} else {
var statearr_21526_21552 = state_21513__$1;
(statearr_21526_21552[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (5))){
var inst_21490 = (state_21513[(7)]);
var state_21513__$1 = state_21513;
var statearr_21527_21553 = state_21513__$1;
(statearr_21527_21553[(2)] = inst_21490);

(statearr_21527_21553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (10))){
var inst_21509 = (state_21513[(2)]);
var state_21513__$1 = state_21513;
var statearr_21528_21554 = state_21513__$1;
(statearr_21528_21554[(2)] = inst_21509);

(statearr_21528_21554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (8))){
var inst_21490 = (state_21513[(7)]);
var inst_21500 = cljs.core.next.call(null,inst_21490);
var inst_21490__$1 = inst_21500;
var state_21513__$1 = (function (){var statearr_21529 = state_21513;
(statearr_21529[(7)] = inst_21490__$1);

return statearr_21529;
})();
var statearr_21530_21555 = state_21513__$1;
(statearr_21530_21555[(2)] = null);

(statearr_21530_21555[(1)] = (2));


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
});})(c__18865__auto__))
;
return ((function (switch__18844__auto__,c__18865__auto__){
return (function() {
var cljs$core$async$state_machine__18845__auto__ = null;
var cljs$core$async$state_machine__18845__auto____0 = (function (){
var statearr_21534 = [null,null,null,null,null,null,null,null];
(statearr_21534[(0)] = cljs$core$async$state_machine__18845__auto__);

(statearr_21534[(1)] = (1));

return statearr_21534;
});
var cljs$core$async$state_machine__18845__auto____1 = (function (state_21513){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_21513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e21535){if((e21535 instanceof Object)){
var ex__18848__auto__ = e21535;
var statearr_21536_21556 = state_21513;
(statearr_21536_21556[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21557 = state_21513;
state_21513 = G__21557;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$state_machine__18845__auto__ = function(state_21513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18845__auto____1.call(this,state_21513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18845__auto____0;
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18845__auto____1;
return cljs$core$async$state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__))
})();
var state__18867__auto__ = (function (){var statearr_21537 = f__18866__auto__.call(null);
(statearr_21537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_21537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto__))
);

return c__18865__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17495__auto__ = (((_ == null))?null:_);
var m__17496__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,_);
} else {
var m__17496__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17496__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m);
} else {
var m__17496__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21779 = (function (mult,ch,cs,meta21780){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21780 = meta21780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21781,meta21780__$1){
var self__ = this;
var _21781__$1 = this;
return (new cljs.core.async.t_cljs$core$async21779(self__.mult,self__.ch,self__.cs,meta21780__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21781){
var self__ = this;
var _21781__$1 = this;
return self__.meta21780;
});})(cs))
;

cljs.core.async.t_cljs$core$async21779.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21779.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21779.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21779.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21779.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21779.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21779.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21780","meta21780",56776718,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21779.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21779";

cljs.core.async.t_cljs$core$async21779.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21779");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21779 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21779(mult__$1,ch__$1,cs__$1,meta21780){
return (new cljs.core.async.t_cljs$core$async21779(mult__$1,ch__$1,cs__$1,meta21780));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21779(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18865__auto___22000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___22000,cs,m,dchan,dctr,done){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___22000,cs,m,dchan,dctr,done){
return (function (state_21912){
var state_val_21913 = (state_21912[(1)]);
if((state_val_21913 === (7))){
var inst_21908 = (state_21912[(2)]);
var state_21912__$1 = state_21912;
var statearr_21914_22001 = state_21912__$1;
(statearr_21914_22001[(2)] = inst_21908);

(statearr_21914_22001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (20))){
var inst_21813 = (state_21912[(7)]);
var inst_21823 = cljs.core.first.call(null,inst_21813);
var inst_21824 = cljs.core.nth.call(null,inst_21823,(0),null);
var inst_21825 = cljs.core.nth.call(null,inst_21823,(1),null);
var state_21912__$1 = (function (){var statearr_21915 = state_21912;
(statearr_21915[(8)] = inst_21824);

return statearr_21915;
})();
if(cljs.core.truth_(inst_21825)){
var statearr_21916_22002 = state_21912__$1;
(statearr_21916_22002[(1)] = (22));

} else {
var statearr_21917_22003 = state_21912__$1;
(statearr_21917_22003[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (27))){
var inst_21784 = (state_21912[(9)]);
var inst_21860 = (state_21912[(10)]);
var inst_21853 = (state_21912[(11)]);
var inst_21855 = (state_21912[(12)]);
var inst_21860__$1 = cljs.core._nth.call(null,inst_21853,inst_21855);
var inst_21861 = cljs.core.async.put_BANG_.call(null,inst_21860__$1,inst_21784,done);
var state_21912__$1 = (function (){var statearr_21918 = state_21912;
(statearr_21918[(10)] = inst_21860__$1);

return statearr_21918;
})();
if(cljs.core.truth_(inst_21861)){
var statearr_21919_22004 = state_21912__$1;
(statearr_21919_22004[(1)] = (30));

} else {
var statearr_21920_22005 = state_21912__$1;
(statearr_21920_22005[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (1))){
var state_21912__$1 = state_21912;
var statearr_21921_22006 = state_21912__$1;
(statearr_21921_22006[(2)] = null);

(statearr_21921_22006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (24))){
var inst_21813 = (state_21912[(7)]);
var inst_21830 = (state_21912[(2)]);
var inst_21831 = cljs.core.next.call(null,inst_21813);
var inst_21793 = inst_21831;
var inst_21794 = null;
var inst_21795 = (0);
var inst_21796 = (0);
var state_21912__$1 = (function (){var statearr_21922 = state_21912;
(statearr_21922[(13)] = inst_21795);

(statearr_21922[(14)] = inst_21794);

(statearr_21922[(15)] = inst_21793);

(statearr_21922[(16)] = inst_21830);

(statearr_21922[(17)] = inst_21796);

return statearr_21922;
})();
var statearr_21923_22007 = state_21912__$1;
(statearr_21923_22007[(2)] = null);

(statearr_21923_22007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (39))){
var state_21912__$1 = state_21912;
var statearr_21927_22008 = state_21912__$1;
(statearr_21927_22008[(2)] = null);

(statearr_21927_22008[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (4))){
var inst_21784 = (state_21912[(9)]);
var inst_21784__$1 = (state_21912[(2)]);
var inst_21785 = (inst_21784__$1 == null);
var state_21912__$1 = (function (){var statearr_21928 = state_21912;
(statearr_21928[(9)] = inst_21784__$1);

return statearr_21928;
})();
if(cljs.core.truth_(inst_21785)){
var statearr_21929_22009 = state_21912__$1;
(statearr_21929_22009[(1)] = (5));

} else {
var statearr_21930_22010 = state_21912__$1;
(statearr_21930_22010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (15))){
var inst_21795 = (state_21912[(13)]);
var inst_21794 = (state_21912[(14)]);
var inst_21793 = (state_21912[(15)]);
var inst_21796 = (state_21912[(17)]);
var inst_21809 = (state_21912[(2)]);
var inst_21810 = (inst_21796 + (1));
var tmp21924 = inst_21795;
var tmp21925 = inst_21794;
var tmp21926 = inst_21793;
var inst_21793__$1 = tmp21926;
var inst_21794__$1 = tmp21925;
var inst_21795__$1 = tmp21924;
var inst_21796__$1 = inst_21810;
var state_21912__$1 = (function (){var statearr_21931 = state_21912;
(statearr_21931[(13)] = inst_21795__$1);

(statearr_21931[(14)] = inst_21794__$1);

(statearr_21931[(15)] = inst_21793__$1);

(statearr_21931[(17)] = inst_21796__$1);

(statearr_21931[(18)] = inst_21809);

return statearr_21931;
})();
var statearr_21932_22011 = state_21912__$1;
(statearr_21932_22011[(2)] = null);

(statearr_21932_22011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (21))){
var inst_21834 = (state_21912[(2)]);
var state_21912__$1 = state_21912;
var statearr_21936_22012 = state_21912__$1;
(statearr_21936_22012[(2)] = inst_21834);

(statearr_21936_22012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (31))){
var inst_21860 = (state_21912[(10)]);
var inst_21864 = done.call(null,null);
var inst_21865 = cljs.core.async.untap_STAR_.call(null,m,inst_21860);
var state_21912__$1 = (function (){var statearr_21937 = state_21912;
(statearr_21937[(19)] = inst_21864);

return statearr_21937;
})();
var statearr_21938_22013 = state_21912__$1;
(statearr_21938_22013[(2)] = inst_21865);

(statearr_21938_22013[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (32))){
var inst_21853 = (state_21912[(11)]);
var inst_21855 = (state_21912[(12)]);
var inst_21852 = (state_21912[(20)]);
var inst_21854 = (state_21912[(21)]);
var inst_21867 = (state_21912[(2)]);
var inst_21868 = (inst_21855 + (1));
var tmp21933 = inst_21853;
var tmp21934 = inst_21852;
var tmp21935 = inst_21854;
var inst_21852__$1 = tmp21934;
var inst_21853__$1 = tmp21933;
var inst_21854__$1 = tmp21935;
var inst_21855__$1 = inst_21868;
var state_21912__$1 = (function (){var statearr_21939 = state_21912;
(statearr_21939[(11)] = inst_21853__$1);

(statearr_21939[(22)] = inst_21867);

(statearr_21939[(12)] = inst_21855__$1);

(statearr_21939[(20)] = inst_21852__$1);

(statearr_21939[(21)] = inst_21854__$1);

return statearr_21939;
})();
var statearr_21940_22014 = state_21912__$1;
(statearr_21940_22014[(2)] = null);

(statearr_21940_22014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (40))){
var inst_21880 = (state_21912[(23)]);
var inst_21884 = done.call(null,null);
var inst_21885 = cljs.core.async.untap_STAR_.call(null,m,inst_21880);
var state_21912__$1 = (function (){var statearr_21941 = state_21912;
(statearr_21941[(24)] = inst_21884);

return statearr_21941;
})();
var statearr_21942_22015 = state_21912__$1;
(statearr_21942_22015[(2)] = inst_21885);

(statearr_21942_22015[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (33))){
var inst_21871 = (state_21912[(25)]);
var inst_21873 = cljs.core.chunked_seq_QMARK_.call(null,inst_21871);
var state_21912__$1 = state_21912;
if(inst_21873){
var statearr_21943_22016 = state_21912__$1;
(statearr_21943_22016[(1)] = (36));

} else {
var statearr_21944_22017 = state_21912__$1;
(statearr_21944_22017[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (13))){
var inst_21803 = (state_21912[(26)]);
var inst_21806 = cljs.core.async.close_BANG_.call(null,inst_21803);
var state_21912__$1 = state_21912;
var statearr_21945_22018 = state_21912__$1;
(statearr_21945_22018[(2)] = inst_21806);

(statearr_21945_22018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (22))){
var inst_21824 = (state_21912[(8)]);
var inst_21827 = cljs.core.async.close_BANG_.call(null,inst_21824);
var state_21912__$1 = state_21912;
var statearr_21946_22019 = state_21912__$1;
(statearr_21946_22019[(2)] = inst_21827);

(statearr_21946_22019[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (36))){
var inst_21871 = (state_21912[(25)]);
var inst_21875 = cljs.core.chunk_first.call(null,inst_21871);
var inst_21876 = cljs.core.chunk_rest.call(null,inst_21871);
var inst_21877 = cljs.core.count.call(null,inst_21875);
var inst_21852 = inst_21876;
var inst_21853 = inst_21875;
var inst_21854 = inst_21877;
var inst_21855 = (0);
var state_21912__$1 = (function (){var statearr_21947 = state_21912;
(statearr_21947[(11)] = inst_21853);

(statearr_21947[(12)] = inst_21855);

(statearr_21947[(20)] = inst_21852);

(statearr_21947[(21)] = inst_21854);

return statearr_21947;
})();
var statearr_21948_22020 = state_21912__$1;
(statearr_21948_22020[(2)] = null);

(statearr_21948_22020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (41))){
var inst_21871 = (state_21912[(25)]);
var inst_21887 = (state_21912[(2)]);
var inst_21888 = cljs.core.next.call(null,inst_21871);
var inst_21852 = inst_21888;
var inst_21853 = null;
var inst_21854 = (0);
var inst_21855 = (0);
var state_21912__$1 = (function (){var statearr_21949 = state_21912;
(statearr_21949[(11)] = inst_21853);

(statearr_21949[(12)] = inst_21855);

(statearr_21949[(20)] = inst_21852);

(statearr_21949[(21)] = inst_21854);

(statearr_21949[(27)] = inst_21887);

return statearr_21949;
})();
var statearr_21950_22021 = state_21912__$1;
(statearr_21950_22021[(2)] = null);

(statearr_21950_22021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (43))){
var state_21912__$1 = state_21912;
var statearr_21951_22022 = state_21912__$1;
(statearr_21951_22022[(2)] = null);

(statearr_21951_22022[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (29))){
var inst_21896 = (state_21912[(2)]);
var state_21912__$1 = state_21912;
var statearr_21952_22023 = state_21912__$1;
(statearr_21952_22023[(2)] = inst_21896);

(statearr_21952_22023[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (44))){
var inst_21905 = (state_21912[(2)]);
var state_21912__$1 = (function (){var statearr_21953 = state_21912;
(statearr_21953[(28)] = inst_21905);

return statearr_21953;
})();
var statearr_21954_22024 = state_21912__$1;
(statearr_21954_22024[(2)] = null);

(statearr_21954_22024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (6))){
var inst_21844 = (state_21912[(29)]);
var inst_21843 = cljs.core.deref.call(null,cs);
var inst_21844__$1 = cljs.core.keys.call(null,inst_21843);
var inst_21845 = cljs.core.count.call(null,inst_21844__$1);
var inst_21846 = cljs.core.reset_BANG_.call(null,dctr,inst_21845);
var inst_21851 = cljs.core.seq.call(null,inst_21844__$1);
var inst_21852 = inst_21851;
var inst_21853 = null;
var inst_21854 = (0);
var inst_21855 = (0);
var state_21912__$1 = (function (){var statearr_21955 = state_21912;
(statearr_21955[(30)] = inst_21846);

(statearr_21955[(11)] = inst_21853);

(statearr_21955[(29)] = inst_21844__$1);

(statearr_21955[(12)] = inst_21855);

(statearr_21955[(20)] = inst_21852);

(statearr_21955[(21)] = inst_21854);

return statearr_21955;
})();
var statearr_21956_22025 = state_21912__$1;
(statearr_21956_22025[(2)] = null);

(statearr_21956_22025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (28))){
var inst_21871 = (state_21912[(25)]);
var inst_21852 = (state_21912[(20)]);
var inst_21871__$1 = cljs.core.seq.call(null,inst_21852);
var state_21912__$1 = (function (){var statearr_21957 = state_21912;
(statearr_21957[(25)] = inst_21871__$1);

return statearr_21957;
})();
if(inst_21871__$1){
var statearr_21958_22026 = state_21912__$1;
(statearr_21958_22026[(1)] = (33));

} else {
var statearr_21959_22027 = state_21912__$1;
(statearr_21959_22027[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (25))){
var inst_21855 = (state_21912[(12)]);
var inst_21854 = (state_21912[(21)]);
var inst_21857 = (inst_21855 < inst_21854);
var inst_21858 = inst_21857;
var state_21912__$1 = state_21912;
if(cljs.core.truth_(inst_21858)){
var statearr_21960_22028 = state_21912__$1;
(statearr_21960_22028[(1)] = (27));

} else {
var statearr_21961_22029 = state_21912__$1;
(statearr_21961_22029[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (34))){
var state_21912__$1 = state_21912;
var statearr_21962_22030 = state_21912__$1;
(statearr_21962_22030[(2)] = null);

(statearr_21962_22030[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (17))){
var state_21912__$1 = state_21912;
var statearr_21963_22031 = state_21912__$1;
(statearr_21963_22031[(2)] = null);

(statearr_21963_22031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (3))){
var inst_21910 = (state_21912[(2)]);
var state_21912__$1 = state_21912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21912__$1,inst_21910);
} else {
if((state_val_21913 === (12))){
var inst_21839 = (state_21912[(2)]);
var state_21912__$1 = state_21912;
var statearr_21964_22032 = state_21912__$1;
(statearr_21964_22032[(2)] = inst_21839);

(statearr_21964_22032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (2))){
var state_21912__$1 = state_21912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21912__$1,(4),ch);
} else {
if((state_val_21913 === (23))){
var state_21912__$1 = state_21912;
var statearr_21965_22033 = state_21912__$1;
(statearr_21965_22033[(2)] = null);

(statearr_21965_22033[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (35))){
var inst_21894 = (state_21912[(2)]);
var state_21912__$1 = state_21912;
var statearr_21966_22034 = state_21912__$1;
(statearr_21966_22034[(2)] = inst_21894);

(statearr_21966_22034[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (19))){
var inst_21813 = (state_21912[(7)]);
var inst_21817 = cljs.core.chunk_first.call(null,inst_21813);
var inst_21818 = cljs.core.chunk_rest.call(null,inst_21813);
var inst_21819 = cljs.core.count.call(null,inst_21817);
var inst_21793 = inst_21818;
var inst_21794 = inst_21817;
var inst_21795 = inst_21819;
var inst_21796 = (0);
var state_21912__$1 = (function (){var statearr_21967 = state_21912;
(statearr_21967[(13)] = inst_21795);

(statearr_21967[(14)] = inst_21794);

(statearr_21967[(15)] = inst_21793);

(statearr_21967[(17)] = inst_21796);

return statearr_21967;
})();
var statearr_21968_22035 = state_21912__$1;
(statearr_21968_22035[(2)] = null);

(statearr_21968_22035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (11))){
var inst_21813 = (state_21912[(7)]);
var inst_21793 = (state_21912[(15)]);
var inst_21813__$1 = cljs.core.seq.call(null,inst_21793);
var state_21912__$1 = (function (){var statearr_21969 = state_21912;
(statearr_21969[(7)] = inst_21813__$1);

return statearr_21969;
})();
if(inst_21813__$1){
var statearr_21970_22036 = state_21912__$1;
(statearr_21970_22036[(1)] = (16));

} else {
var statearr_21971_22037 = state_21912__$1;
(statearr_21971_22037[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (9))){
var inst_21841 = (state_21912[(2)]);
var state_21912__$1 = state_21912;
var statearr_21972_22038 = state_21912__$1;
(statearr_21972_22038[(2)] = inst_21841);

(statearr_21972_22038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (5))){
var inst_21791 = cljs.core.deref.call(null,cs);
var inst_21792 = cljs.core.seq.call(null,inst_21791);
var inst_21793 = inst_21792;
var inst_21794 = null;
var inst_21795 = (0);
var inst_21796 = (0);
var state_21912__$1 = (function (){var statearr_21973 = state_21912;
(statearr_21973[(13)] = inst_21795);

(statearr_21973[(14)] = inst_21794);

(statearr_21973[(15)] = inst_21793);

(statearr_21973[(17)] = inst_21796);

return statearr_21973;
})();
var statearr_21974_22039 = state_21912__$1;
(statearr_21974_22039[(2)] = null);

(statearr_21974_22039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (14))){
var state_21912__$1 = state_21912;
var statearr_21975_22040 = state_21912__$1;
(statearr_21975_22040[(2)] = null);

(statearr_21975_22040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (45))){
var inst_21902 = (state_21912[(2)]);
var state_21912__$1 = state_21912;
var statearr_21976_22041 = state_21912__$1;
(statearr_21976_22041[(2)] = inst_21902);

(statearr_21976_22041[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (26))){
var inst_21844 = (state_21912[(29)]);
var inst_21898 = (state_21912[(2)]);
var inst_21899 = cljs.core.seq.call(null,inst_21844);
var state_21912__$1 = (function (){var statearr_21977 = state_21912;
(statearr_21977[(31)] = inst_21898);

return statearr_21977;
})();
if(inst_21899){
var statearr_21978_22042 = state_21912__$1;
(statearr_21978_22042[(1)] = (42));

} else {
var statearr_21979_22043 = state_21912__$1;
(statearr_21979_22043[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (16))){
var inst_21813 = (state_21912[(7)]);
var inst_21815 = cljs.core.chunked_seq_QMARK_.call(null,inst_21813);
var state_21912__$1 = state_21912;
if(inst_21815){
var statearr_21980_22044 = state_21912__$1;
(statearr_21980_22044[(1)] = (19));

} else {
var statearr_21981_22045 = state_21912__$1;
(statearr_21981_22045[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (38))){
var inst_21891 = (state_21912[(2)]);
var state_21912__$1 = state_21912;
var statearr_21982_22046 = state_21912__$1;
(statearr_21982_22046[(2)] = inst_21891);

(statearr_21982_22046[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (30))){
var state_21912__$1 = state_21912;
var statearr_21983_22047 = state_21912__$1;
(statearr_21983_22047[(2)] = null);

(statearr_21983_22047[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (10))){
var inst_21794 = (state_21912[(14)]);
var inst_21796 = (state_21912[(17)]);
var inst_21802 = cljs.core._nth.call(null,inst_21794,inst_21796);
var inst_21803 = cljs.core.nth.call(null,inst_21802,(0),null);
var inst_21804 = cljs.core.nth.call(null,inst_21802,(1),null);
var state_21912__$1 = (function (){var statearr_21984 = state_21912;
(statearr_21984[(26)] = inst_21803);

return statearr_21984;
})();
if(cljs.core.truth_(inst_21804)){
var statearr_21985_22048 = state_21912__$1;
(statearr_21985_22048[(1)] = (13));

} else {
var statearr_21986_22049 = state_21912__$1;
(statearr_21986_22049[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (18))){
var inst_21837 = (state_21912[(2)]);
var state_21912__$1 = state_21912;
var statearr_21987_22050 = state_21912__$1;
(statearr_21987_22050[(2)] = inst_21837);

(statearr_21987_22050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (42))){
var state_21912__$1 = state_21912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21912__$1,(45),dchan);
} else {
if((state_val_21913 === (37))){
var inst_21880 = (state_21912[(23)]);
var inst_21784 = (state_21912[(9)]);
var inst_21871 = (state_21912[(25)]);
var inst_21880__$1 = cljs.core.first.call(null,inst_21871);
var inst_21881 = cljs.core.async.put_BANG_.call(null,inst_21880__$1,inst_21784,done);
var state_21912__$1 = (function (){var statearr_21988 = state_21912;
(statearr_21988[(23)] = inst_21880__$1);

return statearr_21988;
})();
if(cljs.core.truth_(inst_21881)){
var statearr_21989_22051 = state_21912__$1;
(statearr_21989_22051[(1)] = (39));

} else {
var statearr_21990_22052 = state_21912__$1;
(statearr_21990_22052[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (8))){
var inst_21795 = (state_21912[(13)]);
var inst_21796 = (state_21912[(17)]);
var inst_21798 = (inst_21796 < inst_21795);
var inst_21799 = inst_21798;
var state_21912__$1 = state_21912;
if(cljs.core.truth_(inst_21799)){
var statearr_21991_22053 = state_21912__$1;
(statearr_21991_22053[(1)] = (10));

} else {
var statearr_21992_22054 = state_21912__$1;
(statearr_21992_22054[(1)] = (11));

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
});})(c__18865__auto___22000,cs,m,dchan,dctr,done))
;
return ((function (switch__18844__auto__,c__18865__auto___22000,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18845__auto__ = null;
var cljs$core$async$mult_$_state_machine__18845__auto____0 = (function (){
var statearr_21996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21996[(0)] = cljs$core$async$mult_$_state_machine__18845__auto__);

(statearr_21996[(1)] = (1));

return statearr_21996;
});
var cljs$core$async$mult_$_state_machine__18845__auto____1 = (function (state_21912){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_21912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e21997){if((e21997 instanceof Object)){
var ex__18848__auto__ = e21997;
var statearr_21998_22055 = state_21912;
(statearr_21998_22055[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22056 = state_21912;
state_21912 = G__22056;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18845__auto__ = function(state_21912){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18845__auto____1.call(this,state_21912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18845__auto____0;
cljs$core$async$mult_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18845__auto____1;
return cljs$core$async$mult_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___22000,cs,m,dchan,dctr,done))
})();
var state__18867__auto__ = (function (){var statearr_21999 = f__18866__auto__.call(null);
(statearr_21999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___22000);

return statearr_21999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___22000,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22057 = [];
var len__17898__auto___22060 = arguments.length;
var i__17899__auto___22061 = (0);
while(true){
if((i__17899__auto___22061 < len__17898__auto___22060)){
args22057.push((arguments[i__17899__auto___22061]));

var G__22062 = (i__17899__auto___22061 + (1));
i__17899__auto___22061 = G__22062;
continue;
} else {
}
break;
}

var G__22059 = args22057.length;
switch (G__22059) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22057.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m);
} else {
var m__17496__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,state_map);
} else {
var m__17496__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,mode);
} else {
var m__17496__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17905__auto__ = [];
var len__17898__auto___22074 = arguments.length;
var i__17899__auto___22075 = (0);
while(true){
if((i__17899__auto___22075 < len__17898__auto___22074)){
args__17905__auto__.push((arguments[i__17899__auto___22075]));

var G__22076 = (i__17899__auto___22075 + (1));
i__17899__auto___22075 = G__22076;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((3) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17906__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22068){
var map__22069 = p__22068;
var map__22069__$1 = ((((!((map__22069 == null)))?((((map__22069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22069):map__22069);
var opts = map__22069__$1;
var statearr_22071_22077 = state;
(statearr_22071_22077[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22069,map__22069__$1,opts){
return (function (val){
var statearr_22072_22078 = state;
(statearr_22072_22078[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22069,map__22069__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22073_22079 = state;
(statearr_22073_22079[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22064){
var G__22065 = cljs.core.first.call(null,seq22064);
var seq22064__$1 = cljs.core.next.call(null,seq22064);
var G__22066 = cljs.core.first.call(null,seq22064__$1);
var seq22064__$2 = cljs.core.next.call(null,seq22064__$1);
var G__22067 = cljs.core.first.call(null,seq22064__$2);
var seq22064__$3 = cljs.core.next.call(null,seq22064__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22065,G__22066,G__22067,seq22064__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22243 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22244){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22244 = meta22244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22245,meta22244__$1){
var self__ = this;
var _22245__$1 = this;
return (new cljs.core.async.t_cljs$core$async22243(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22244__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22245){
var self__ = this;
var _22245__$1 = this;
return self__.meta22244;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22243.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22243.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22244","meta22244",-188399662,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22243";

cljs.core.async.t_cljs$core$async22243.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async22243");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22243 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22243(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22244){
return (new cljs.core.async.t_cljs$core$async22243(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22244));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22243(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18865__auto___22406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___22406,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___22406,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22343){
var state_val_22344 = (state_22343[(1)]);
if((state_val_22344 === (7))){
var inst_22261 = (state_22343[(2)]);
var state_22343__$1 = state_22343;
var statearr_22345_22407 = state_22343__$1;
(statearr_22345_22407[(2)] = inst_22261);

(statearr_22345_22407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (20))){
var inst_22273 = (state_22343[(7)]);
var state_22343__$1 = state_22343;
var statearr_22346_22408 = state_22343__$1;
(statearr_22346_22408[(2)] = inst_22273);

(statearr_22346_22408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (27))){
var state_22343__$1 = state_22343;
var statearr_22347_22409 = state_22343__$1;
(statearr_22347_22409[(2)] = null);

(statearr_22347_22409[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (1))){
var inst_22249 = (state_22343[(8)]);
var inst_22249__$1 = calc_state.call(null);
var inst_22251 = (inst_22249__$1 == null);
var inst_22252 = cljs.core.not.call(null,inst_22251);
var state_22343__$1 = (function (){var statearr_22348 = state_22343;
(statearr_22348[(8)] = inst_22249__$1);

return statearr_22348;
})();
if(inst_22252){
var statearr_22349_22410 = state_22343__$1;
(statearr_22349_22410[(1)] = (2));

} else {
var statearr_22350_22411 = state_22343__$1;
(statearr_22350_22411[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (24))){
var inst_22303 = (state_22343[(9)]);
var inst_22296 = (state_22343[(10)]);
var inst_22317 = (state_22343[(11)]);
var inst_22317__$1 = inst_22296.call(null,inst_22303);
var state_22343__$1 = (function (){var statearr_22351 = state_22343;
(statearr_22351[(11)] = inst_22317__$1);

return statearr_22351;
})();
if(cljs.core.truth_(inst_22317__$1)){
var statearr_22352_22412 = state_22343__$1;
(statearr_22352_22412[(1)] = (29));

} else {
var statearr_22353_22413 = state_22343__$1;
(statearr_22353_22413[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (4))){
var inst_22264 = (state_22343[(2)]);
var state_22343__$1 = state_22343;
if(cljs.core.truth_(inst_22264)){
var statearr_22354_22414 = state_22343__$1;
(statearr_22354_22414[(1)] = (8));

} else {
var statearr_22355_22415 = state_22343__$1;
(statearr_22355_22415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (15))){
var inst_22290 = (state_22343[(2)]);
var state_22343__$1 = state_22343;
if(cljs.core.truth_(inst_22290)){
var statearr_22356_22416 = state_22343__$1;
(statearr_22356_22416[(1)] = (19));

} else {
var statearr_22357_22417 = state_22343__$1;
(statearr_22357_22417[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (21))){
var inst_22295 = (state_22343[(12)]);
var inst_22295__$1 = (state_22343[(2)]);
var inst_22296 = cljs.core.get.call(null,inst_22295__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22297 = cljs.core.get.call(null,inst_22295__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22298 = cljs.core.get.call(null,inst_22295__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22343__$1 = (function (){var statearr_22358 = state_22343;
(statearr_22358[(13)] = inst_22297);

(statearr_22358[(10)] = inst_22296);

(statearr_22358[(12)] = inst_22295__$1);

return statearr_22358;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22343__$1,(22),inst_22298);
} else {
if((state_val_22344 === (31))){
var inst_22325 = (state_22343[(2)]);
var state_22343__$1 = state_22343;
if(cljs.core.truth_(inst_22325)){
var statearr_22359_22418 = state_22343__$1;
(statearr_22359_22418[(1)] = (32));

} else {
var statearr_22360_22419 = state_22343__$1;
(statearr_22360_22419[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (32))){
var inst_22302 = (state_22343[(14)]);
var state_22343__$1 = state_22343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22343__$1,(35),out,inst_22302);
} else {
if((state_val_22344 === (33))){
var inst_22295 = (state_22343[(12)]);
var inst_22273 = inst_22295;
var state_22343__$1 = (function (){var statearr_22361 = state_22343;
(statearr_22361[(7)] = inst_22273);

return statearr_22361;
})();
var statearr_22362_22420 = state_22343__$1;
(statearr_22362_22420[(2)] = null);

(statearr_22362_22420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (13))){
var inst_22273 = (state_22343[(7)]);
var inst_22280 = inst_22273.cljs$lang$protocol_mask$partition0$;
var inst_22281 = (inst_22280 & (64));
var inst_22282 = inst_22273.cljs$core$ISeq$;
var inst_22283 = (inst_22281) || (inst_22282);
var state_22343__$1 = state_22343;
if(cljs.core.truth_(inst_22283)){
var statearr_22363_22421 = state_22343__$1;
(statearr_22363_22421[(1)] = (16));

} else {
var statearr_22364_22422 = state_22343__$1;
(statearr_22364_22422[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (22))){
var inst_22302 = (state_22343[(14)]);
var inst_22303 = (state_22343[(9)]);
var inst_22301 = (state_22343[(2)]);
var inst_22302__$1 = cljs.core.nth.call(null,inst_22301,(0),null);
var inst_22303__$1 = cljs.core.nth.call(null,inst_22301,(1),null);
var inst_22304 = (inst_22302__$1 == null);
var inst_22305 = cljs.core._EQ_.call(null,inst_22303__$1,change);
var inst_22306 = (inst_22304) || (inst_22305);
var state_22343__$1 = (function (){var statearr_22365 = state_22343;
(statearr_22365[(14)] = inst_22302__$1);

(statearr_22365[(9)] = inst_22303__$1);

return statearr_22365;
})();
if(cljs.core.truth_(inst_22306)){
var statearr_22366_22423 = state_22343__$1;
(statearr_22366_22423[(1)] = (23));

} else {
var statearr_22367_22424 = state_22343__$1;
(statearr_22367_22424[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (36))){
var inst_22295 = (state_22343[(12)]);
var inst_22273 = inst_22295;
var state_22343__$1 = (function (){var statearr_22368 = state_22343;
(statearr_22368[(7)] = inst_22273);

return statearr_22368;
})();
var statearr_22369_22425 = state_22343__$1;
(statearr_22369_22425[(2)] = null);

(statearr_22369_22425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (29))){
var inst_22317 = (state_22343[(11)]);
var state_22343__$1 = state_22343;
var statearr_22370_22426 = state_22343__$1;
(statearr_22370_22426[(2)] = inst_22317);

(statearr_22370_22426[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (6))){
var state_22343__$1 = state_22343;
var statearr_22371_22427 = state_22343__$1;
(statearr_22371_22427[(2)] = false);

(statearr_22371_22427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (28))){
var inst_22313 = (state_22343[(2)]);
var inst_22314 = calc_state.call(null);
var inst_22273 = inst_22314;
var state_22343__$1 = (function (){var statearr_22372 = state_22343;
(statearr_22372[(7)] = inst_22273);

(statearr_22372[(15)] = inst_22313);

return statearr_22372;
})();
var statearr_22373_22428 = state_22343__$1;
(statearr_22373_22428[(2)] = null);

(statearr_22373_22428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (25))){
var inst_22339 = (state_22343[(2)]);
var state_22343__$1 = state_22343;
var statearr_22374_22429 = state_22343__$1;
(statearr_22374_22429[(2)] = inst_22339);

(statearr_22374_22429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (34))){
var inst_22337 = (state_22343[(2)]);
var state_22343__$1 = state_22343;
var statearr_22375_22430 = state_22343__$1;
(statearr_22375_22430[(2)] = inst_22337);

(statearr_22375_22430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (17))){
var state_22343__$1 = state_22343;
var statearr_22376_22431 = state_22343__$1;
(statearr_22376_22431[(2)] = false);

(statearr_22376_22431[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (3))){
var state_22343__$1 = state_22343;
var statearr_22377_22432 = state_22343__$1;
(statearr_22377_22432[(2)] = false);

(statearr_22377_22432[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (12))){
var inst_22341 = (state_22343[(2)]);
var state_22343__$1 = state_22343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22343__$1,inst_22341);
} else {
if((state_val_22344 === (2))){
var inst_22249 = (state_22343[(8)]);
var inst_22254 = inst_22249.cljs$lang$protocol_mask$partition0$;
var inst_22255 = (inst_22254 & (64));
var inst_22256 = inst_22249.cljs$core$ISeq$;
var inst_22257 = (inst_22255) || (inst_22256);
var state_22343__$1 = state_22343;
if(cljs.core.truth_(inst_22257)){
var statearr_22378_22433 = state_22343__$1;
(statearr_22378_22433[(1)] = (5));

} else {
var statearr_22379_22434 = state_22343__$1;
(statearr_22379_22434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (23))){
var inst_22302 = (state_22343[(14)]);
var inst_22308 = (inst_22302 == null);
var state_22343__$1 = state_22343;
if(cljs.core.truth_(inst_22308)){
var statearr_22380_22435 = state_22343__$1;
(statearr_22380_22435[(1)] = (26));

} else {
var statearr_22381_22436 = state_22343__$1;
(statearr_22381_22436[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (35))){
var inst_22328 = (state_22343[(2)]);
var state_22343__$1 = state_22343;
if(cljs.core.truth_(inst_22328)){
var statearr_22382_22437 = state_22343__$1;
(statearr_22382_22437[(1)] = (36));

} else {
var statearr_22383_22438 = state_22343__$1;
(statearr_22383_22438[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (19))){
var inst_22273 = (state_22343[(7)]);
var inst_22292 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22273);
var state_22343__$1 = state_22343;
var statearr_22384_22439 = state_22343__$1;
(statearr_22384_22439[(2)] = inst_22292);

(statearr_22384_22439[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (11))){
var inst_22273 = (state_22343[(7)]);
var inst_22277 = (inst_22273 == null);
var inst_22278 = cljs.core.not.call(null,inst_22277);
var state_22343__$1 = state_22343;
if(inst_22278){
var statearr_22385_22440 = state_22343__$1;
(statearr_22385_22440[(1)] = (13));

} else {
var statearr_22386_22441 = state_22343__$1;
(statearr_22386_22441[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (9))){
var inst_22249 = (state_22343[(8)]);
var state_22343__$1 = state_22343;
var statearr_22387_22442 = state_22343__$1;
(statearr_22387_22442[(2)] = inst_22249);

(statearr_22387_22442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (5))){
var state_22343__$1 = state_22343;
var statearr_22388_22443 = state_22343__$1;
(statearr_22388_22443[(2)] = true);

(statearr_22388_22443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (14))){
var state_22343__$1 = state_22343;
var statearr_22389_22444 = state_22343__$1;
(statearr_22389_22444[(2)] = false);

(statearr_22389_22444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (26))){
var inst_22303 = (state_22343[(9)]);
var inst_22310 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22303);
var state_22343__$1 = state_22343;
var statearr_22390_22445 = state_22343__$1;
(statearr_22390_22445[(2)] = inst_22310);

(statearr_22390_22445[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (16))){
var state_22343__$1 = state_22343;
var statearr_22391_22446 = state_22343__$1;
(statearr_22391_22446[(2)] = true);

(statearr_22391_22446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (38))){
var inst_22333 = (state_22343[(2)]);
var state_22343__$1 = state_22343;
var statearr_22392_22447 = state_22343__$1;
(statearr_22392_22447[(2)] = inst_22333);

(statearr_22392_22447[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (30))){
var inst_22303 = (state_22343[(9)]);
var inst_22297 = (state_22343[(13)]);
var inst_22296 = (state_22343[(10)]);
var inst_22320 = cljs.core.empty_QMARK_.call(null,inst_22296);
var inst_22321 = inst_22297.call(null,inst_22303);
var inst_22322 = cljs.core.not.call(null,inst_22321);
var inst_22323 = (inst_22320) && (inst_22322);
var state_22343__$1 = state_22343;
var statearr_22393_22448 = state_22343__$1;
(statearr_22393_22448[(2)] = inst_22323);

(statearr_22393_22448[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (10))){
var inst_22249 = (state_22343[(8)]);
var inst_22269 = (state_22343[(2)]);
var inst_22270 = cljs.core.get.call(null,inst_22269,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22271 = cljs.core.get.call(null,inst_22269,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22272 = cljs.core.get.call(null,inst_22269,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22273 = inst_22249;
var state_22343__$1 = (function (){var statearr_22394 = state_22343;
(statearr_22394[(16)] = inst_22271);

(statearr_22394[(17)] = inst_22270);

(statearr_22394[(7)] = inst_22273);

(statearr_22394[(18)] = inst_22272);

return statearr_22394;
})();
var statearr_22395_22449 = state_22343__$1;
(statearr_22395_22449[(2)] = null);

(statearr_22395_22449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (18))){
var inst_22287 = (state_22343[(2)]);
var state_22343__$1 = state_22343;
var statearr_22396_22450 = state_22343__$1;
(statearr_22396_22450[(2)] = inst_22287);

(statearr_22396_22450[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (37))){
var state_22343__$1 = state_22343;
var statearr_22397_22451 = state_22343__$1;
(statearr_22397_22451[(2)] = null);

(statearr_22397_22451[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22344 === (8))){
var inst_22249 = (state_22343[(8)]);
var inst_22266 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22249);
var state_22343__$1 = state_22343;
var statearr_22398_22452 = state_22343__$1;
(statearr_22398_22452[(2)] = inst_22266);

(statearr_22398_22452[(1)] = (10));


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
});})(c__18865__auto___22406,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18844__auto__,c__18865__auto___22406,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18845__auto__ = null;
var cljs$core$async$mix_$_state_machine__18845__auto____0 = (function (){
var statearr_22402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22402[(0)] = cljs$core$async$mix_$_state_machine__18845__auto__);

(statearr_22402[(1)] = (1));

return statearr_22402;
});
var cljs$core$async$mix_$_state_machine__18845__auto____1 = (function (state_22343){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_22343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e22403){if((e22403 instanceof Object)){
var ex__18848__auto__ = e22403;
var statearr_22404_22453 = state_22343;
(statearr_22404_22453[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22454 = state_22343;
state_22343 = G__22454;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18845__auto__ = function(state_22343){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18845__auto____1.call(this,state_22343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18845__auto____0;
cljs$core$async$mix_$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18845__auto____1;
return cljs$core$async$mix_$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___22406,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18867__auto__ = (function (){var statearr_22405 = f__18866__auto__.call(null);
(statearr_22405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___22406);

return statearr_22405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___22406,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17496__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p,v,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22455 = [];
var len__17898__auto___22458 = arguments.length;
var i__17899__auto___22459 = (0);
while(true){
if((i__17899__auto___22459 < len__17898__auto___22458)){
args22455.push((arguments[i__17899__auto___22459]));

var G__22460 = (i__17899__auto___22459 + (1));
i__17899__auto___22459 = G__22460;
continue;
} else {
}
break;
}

var G__22457 = args22455.length;
switch (G__22457) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22455.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p);
} else {
var m__17496__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p,v);
} else {
var m__17496__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22463 = [];
var len__17898__auto___22588 = arguments.length;
var i__17899__auto___22589 = (0);
while(true){
if((i__17899__auto___22589 < len__17898__auto___22588)){
args22463.push((arguments[i__17899__auto___22589]));

var G__22590 = (i__17899__auto___22589 + (1));
i__17899__auto___22589 = G__22590;
continue;
} else {
}
break;
}

var G__22465 = args22463.length;
switch (G__22465) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22463.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16840__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16840__auto__,mults){
return (function (p1__22462_SHARP_){
if(cljs.core.truth_(p1__22462_SHARP_.call(null,topic))){
return p1__22462_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22462_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16840__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22466 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22467){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22467 = meta22467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22468,meta22467__$1){
var self__ = this;
var _22468__$1 = this;
return (new cljs.core.async.t_cljs$core$async22466(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22467__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22468){
var self__ = this;
var _22468__$1 = this;
return self__.meta22467;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22466.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22467","meta22467",-2006042641,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22466";

cljs.core.async.t_cljs$core$async22466.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async22466");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22466 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22466(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22467){
return (new cljs.core.async.t_cljs$core$async22466(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22467));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22466(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18865__auto___22592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___22592,mults,ensure_mult,p){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___22592,mults,ensure_mult,p){
return (function (state_22540){
var state_val_22541 = (state_22540[(1)]);
if((state_val_22541 === (7))){
var inst_22536 = (state_22540[(2)]);
var state_22540__$1 = state_22540;
var statearr_22542_22593 = state_22540__$1;
(statearr_22542_22593[(2)] = inst_22536);

(statearr_22542_22593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (20))){
var state_22540__$1 = state_22540;
var statearr_22543_22594 = state_22540__$1;
(statearr_22543_22594[(2)] = null);

(statearr_22543_22594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (1))){
var state_22540__$1 = state_22540;
var statearr_22544_22595 = state_22540__$1;
(statearr_22544_22595[(2)] = null);

(statearr_22544_22595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (24))){
var inst_22519 = (state_22540[(7)]);
var inst_22528 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22519);
var state_22540__$1 = state_22540;
var statearr_22545_22596 = state_22540__$1;
(statearr_22545_22596[(2)] = inst_22528);

(statearr_22545_22596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (4))){
var inst_22471 = (state_22540[(8)]);
var inst_22471__$1 = (state_22540[(2)]);
var inst_22472 = (inst_22471__$1 == null);
var state_22540__$1 = (function (){var statearr_22546 = state_22540;
(statearr_22546[(8)] = inst_22471__$1);

return statearr_22546;
})();
if(cljs.core.truth_(inst_22472)){
var statearr_22547_22597 = state_22540__$1;
(statearr_22547_22597[(1)] = (5));

} else {
var statearr_22548_22598 = state_22540__$1;
(statearr_22548_22598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (15))){
var inst_22513 = (state_22540[(2)]);
var state_22540__$1 = state_22540;
var statearr_22549_22599 = state_22540__$1;
(statearr_22549_22599[(2)] = inst_22513);

(statearr_22549_22599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (21))){
var inst_22533 = (state_22540[(2)]);
var state_22540__$1 = (function (){var statearr_22550 = state_22540;
(statearr_22550[(9)] = inst_22533);

return statearr_22550;
})();
var statearr_22551_22600 = state_22540__$1;
(statearr_22551_22600[(2)] = null);

(statearr_22551_22600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (13))){
var inst_22495 = (state_22540[(10)]);
var inst_22497 = cljs.core.chunked_seq_QMARK_.call(null,inst_22495);
var state_22540__$1 = state_22540;
if(inst_22497){
var statearr_22552_22601 = state_22540__$1;
(statearr_22552_22601[(1)] = (16));

} else {
var statearr_22553_22602 = state_22540__$1;
(statearr_22553_22602[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (22))){
var inst_22525 = (state_22540[(2)]);
var state_22540__$1 = state_22540;
if(cljs.core.truth_(inst_22525)){
var statearr_22554_22603 = state_22540__$1;
(statearr_22554_22603[(1)] = (23));

} else {
var statearr_22555_22604 = state_22540__$1;
(statearr_22555_22604[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (6))){
var inst_22471 = (state_22540[(8)]);
var inst_22519 = (state_22540[(7)]);
var inst_22521 = (state_22540[(11)]);
var inst_22519__$1 = topic_fn.call(null,inst_22471);
var inst_22520 = cljs.core.deref.call(null,mults);
var inst_22521__$1 = cljs.core.get.call(null,inst_22520,inst_22519__$1);
var state_22540__$1 = (function (){var statearr_22556 = state_22540;
(statearr_22556[(7)] = inst_22519__$1);

(statearr_22556[(11)] = inst_22521__$1);

return statearr_22556;
})();
if(cljs.core.truth_(inst_22521__$1)){
var statearr_22557_22605 = state_22540__$1;
(statearr_22557_22605[(1)] = (19));

} else {
var statearr_22558_22606 = state_22540__$1;
(statearr_22558_22606[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (25))){
var inst_22530 = (state_22540[(2)]);
var state_22540__$1 = state_22540;
var statearr_22559_22607 = state_22540__$1;
(statearr_22559_22607[(2)] = inst_22530);

(statearr_22559_22607[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (17))){
var inst_22495 = (state_22540[(10)]);
var inst_22504 = cljs.core.first.call(null,inst_22495);
var inst_22505 = cljs.core.async.muxch_STAR_.call(null,inst_22504);
var inst_22506 = cljs.core.async.close_BANG_.call(null,inst_22505);
var inst_22507 = cljs.core.next.call(null,inst_22495);
var inst_22481 = inst_22507;
var inst_22482 = null;
var inst_22483 = (0);
var inst_22484 = (0);
var state_22540__$1 = (function (){var statearr_22560 = state_22540;
(statearr_22560[(12)] = inst_22481);

(statearr_22560[(13)] = inst_22506);

(statearr_22560[(14)] = inst_22482);

(statearr_22560[(15)] = inst_22483);

(statearr_22560[(16)] = inst_22484);

return statearr_22560;
})();
var statearr_22561_22608 = state_22540__$1;
(statearr_22561_22608[(2)] = null);

(statearr_22561_22608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (3))){
var inst_22538 = (state_22540[(2)]);
var state_22540__$1 = state_22540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22540__$1,inst_22538);
} else {
if((state_val_22541 === (12))){
var inst_22515 = (state_22540[(2)]);
var state_22540__$1 = state_22540;
var statearr_22562_22609 = state_22540__$1;
(statearr_22562_22609[(2)] = inst_22515);

(statearr_22562_22609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (2))){
var state_22540__$1 = state_22540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22540__$1,(4),ch);
} else {
if((state_val_22541 === (23))){
var state_22540__$1 = state_22540;
var statearr_22563_22610 = state_22540__$1;
(statearr_22563_22610[(2)] = null);

(statearr_22563_22610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (19))){
var inst_22471 = (state_22540[(8)]);
var inst_22521 = (state_22540[(11)]);
var inst_22523 = cljs.core.async.muxch_STAR_.call(null,inst_22521);
var state_22540__$1 = state_22540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22540__$1,(22),inst_22523,inst_22471);
} else {
if((state_val_22541 === (11))){
var inst_22481 = (state_22540[(12)]);
var inst_22495 = (state_22540[(10)]);
var inst_22495__$1 = cljs.core.seq.call(null,inst_22481);
var state_22540__$1 = (function (){var statearr_22564 = state_22540;
(statearr_22564[(10)] = inst_22495__$1);

return statearr_22564;
})();
if(inst_22495__$1){
var statearr_22565_22611 = state_22540__$1;
(statearr_22565_22611[(1)] = (13));

} else {
var statearr_22566_22612 = state_22540__$1;
(statearr_22566_22612[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (9))){
var inst_22517 = (state_22540[(2)]);
var state_22540__$1 = state_22540;
var statearr_22567_22613 = state_22540__$1;
(statearr_22567_22613[(2)] = inst_22517);

(statearr_22567_22613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (5))){
var inst_22478 = cljs.core.deref.call(null,mults);
var inst_22479 = cljs.core.vals.call(null,inst_22478);
var inst_22480 = cljs.core.seq.call(null,inst_22479);
var inst_22481 = inst_22480;
var inst_22482 = null;
var inst_22483 = (0);
var inst_22484 = (0);
var state_22540__$1 = (function (){var statearr_22568 = state_22540;
(statearr_22568[(12)] = inst_22481);

(statearr_22568[(14)] = inst_22482);

(statearr_22568[(15)] = inst_22483);

(statearr_22568[(16)] = inst_22484);

return statearr_22568;
})();
var statearr_22569_22614 = state_22540__$1;
(statearr_22569_22614[(2)] = null);

(statearr_22569_22614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (14))){
var state_22540__$1 = state_22540;
var statearr_22573_22615 = state_22540__$1;
(statearr_22573_22615[(2)] = null);

(statearr_22573_22615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (16))){
var inst_22495 = (state_22540[(10)]);
var inst_22499 = cljs.core.chunk_first.call(null,inst_22495);
var inst_22500 = cljs.core.chunk_rest.call(null,inst_22495);
var inst_22501 = cljs.core.count.call(null,inst_22499);
var inst_22481 = inst_22500;
var inst_22482 = inst_22499;
var inst_22483 = inst_22501;
var inst_22484 = (0);
var state_22540__$1 = (function (){var statearr_22574 = state_22540;
(statearr_22574[(12)] = inst_22481);

(statearr_22574[(14)] = inst_22482);

(statearr_22574[(15)] = inst_22483);

(statearr_22574[(16)] = inst_22484);

return statearr_22574;
})();
var statearr_22575_22616 = state_22540__$1;
(statearr_22575_22616[(2)] = null);

(statearr_22575_22616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (10))){
var inst_22481 = (state_22540[(12)]);
var inst_22482 = (state_22540[(14)]);
var inst_22483 = (state_22540[(15)]);
var inst_22484 = (state_22540[(16)]);
var inst_22489 = cljs.core._nth.call(null,inst_22482,inst_22484);
var inst_22490 = cljs.core.async.muxch_STAR_.call(null,inst_22489);
var inst_22491 = cljs.core.async.close_BANG_.call(null,inst_22490);
var inst_22492 = (inst_22484 + (1));
var tmp22570 = inst_22481;
var tmp22571 = inst_22482;
var tmp22572 = inst_22483;
var inst_22481__$1 = tmp22570;
var inst_22482__$1 = tmp22571;
var inst_22483__$1 = tmp22572;
var inst_22484__$1 = inst_22492;
var state_22540__$1 = (function (){var statearr_22576 = state_22540;
(statearr_22576[(12)] = inst_22481__$1);

(statearr_22576[(14)] = inst_22482__$1);

(statearr_22576[(15)] = inst_22483__$1);

(statearr_22576[(17)] = inst_22491);

(statearr_22576[(16)] = inst_22484__$1);

return statearr_22576;
})();
var statearr_22577_22617 = state_22540__$1;
(statearr_22577_22617[(2)] = null);

(statearr_22577_22617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (18))){
var inst_22510 = (state_22540[(2)]);
var state_22540__$1 = state_22540;
var statearr_22578_22618 = state_22540__$1;
(statearr_22578_22618[(2)] = inst_22510);

(statearr_22578_22618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (8))){
var inst_22483 = (state_22540[(15)]);
var inst_22484 = (state_22540[(16)]);
var inst_22486 = (inst_22484 < inst_22483);
var inst_22487 = inst_22486;
var state_22540__$1 = state_22540;
if(cljs.core.truth_(inst_22487)){
var statearr_22579_22619 = state_22540__$1;
(statearr_22579_22619[(1)] = (10));

} else {
var statearr_22580_22620 = state_22540__$1;
(statearr_22580_22620[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__18865__auto___22592,mults,ensure_mult,p))
;
return ((function (switch__18844__auto__,c__18865__auto___22592,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18845__auto__ = null;
var cljs$core$async$state_machine__18845__auto____0 = (function (){
var statearr_22584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22584[(0)] = cljs$core$async$state_machine__18845__auto__);

(statearr_22584[(1)] = (1));

return statearr_22584;
});
var cljs$core$async$state_machine__18845__auto____1 = (function (state_22540){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_22540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e22585){if((e22585 instanceof Object)){
var ex__18848__auto__ = e22585;
var statearr_22586_22621 = state_22540;
(statearr_22586_22621[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22622 = state_22540;
state_22540 = G__22622;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$state_machine__18845__auto__ = function(state_22540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18845__auto____1.call(this,state_22540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18845__auto____0;
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18845__auto____1;
return cljs$core$async$state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___22592,mults,ensure_mult,p))
})();
var state__18867__auto__ = (function (){var statearr_22587 = f__18866__auto__.call(null);
(statearr_22587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___22592);

return statearr_22587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___22592,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22623 = [];
var len__17898__auto___22626 = arguments.length;
var i__17899__auto___22627 = (0);
while(true){
if((i__17899__auto___22627 < len__17898__auto___22626)){
args22623.push((arguments[i__17899__auto___22627]));

var G__22628 = (i__17899__auto___22627 + (1));
i__17899__auto___22627 = G__22628;
continue;
} else {
}
break;
}

var G__22625 = args22623.length;
switch (G__22625) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22623.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22630 = [];
var len__17898__auto___22633 = arguments.length;
var i__17899__auto___22634 = (0);
while(true){
if((i__17899__auto___22634 < len__17898__auto___22633)){
args22630.push((arguments[i__17899__auto___22634]));

var G__22635 = (i__17899__auto___22634 + (1));
i__17899__auto___22634 = G__22635;
continue;
} else {
}
break;
}

var G__22632 = args22630.length;
switch (G__22632) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22630.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22637 = [];
var len__17898__auto___22708 = arguments.length;
var i__17899__auto___22709 = (0);
while(true){
if((i__17899__auto___22709 < len__17898__auto___22708)){
args22637.push((arguments[i__17899__auto___22709]));

var G__22710 = (i__17899__auto___22709 + (1));
i__17899__auto___22709 = G__22710;
continue;
} else {
}
break;
}

var G__22639 = args22637.length;
switch (G__22639) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22637.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18865__auto___22712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___22712,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___22712,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22678){
var state_val_22679 = (state_22678[(1)]);
if((state_val_22679 === (7))){
var state_22678__$1 = state_22678;
var statearr_22680_22713 = state_22678__$1;
(statearr_22680_22713[(2)] = null);

(statearr_22680_22713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22679 === (1))){
var state_22678__$1 = state_22678;
var statearr_22681_22714 = state_22678__$1;
(statearr_22681_22714[(2)] = null);

(statearr_22681_22714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22679 === (4))){
var inst_22642 = (state_22678[(7)]);
var inst_22644 = (inst_22642 < cnt);
var state_22678__$1 = state_22678;
if(cljs.core.truth_(inst_22644)){
var statearr_22682_22715 = state_22678__$1;
(statearr_22682_22715[(1)] = (6));

} else {
var statearr_22683_22716 = state_22678__$1;
(statearr_22683_22716[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22679 === (15))){
var inst_22674 = (state_22678[(2)]);
var state_22678__$1 = state_22678;
var statearr_22684_22717 = state_22678__$1;
(statearr_22684_22717[(2)] = inst_22674);

(statearr_22684_22717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22679 === (13))){
var inst_22667 = cljs.core.async.close_BANG_.call(null,out);
var state_22678__$1 = state_22678;
var statearr_22685_22718 = state_22678__$1;
(statearr_22685_22718[(2)] = inst_22667);

(statearr_22685_22718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22679 === (6))){
var state_22678__$1 = state_22678;
var statearr_22686_22719 = state_22678__$1;
(statearr_22686_22719[(2)] = null);

(statearr_22686_22719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22679 === (3))){
var inst_22676 = (state_22678[(2)]);
var state_22678__$1 = state_22678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22678__$1,inst_22676);
} else {
if((state_val_22679 === (12))){
var inst_22664 = (state_22678[(8)]);
var inst_22664__$1 = (state_22678[(2)]);
var inst_22665 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22664__$1);
var state_22678__$1 = (function (){var statearr_22687 = state_22678;
(statearr_22687[(8)] = inst_22664__$1);

return statearr_22687;
})();
if(cljs.core.truth_(inst_22665)){
var statearr_22688_22720 = state_22678__$1;
(statearr_22688_22720[(1)] = (13));

} else {
var statearr_22689_22721 = state_22678__$1;
(statearr_22689_22721[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22679 === (2))){
var inst_22641 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22642 = (0);
var state_22678__$1 = (function (){var statearr_22690 = state_22678;
(statearr_22690[(7)] = inst_22642);

(statearr_22690[(9)] = inst_22641);

return statearr_22690;
})();
var statearr_22691_22722 = state_22678__$1;
(statearr_22691_22722[(2)] = null);

(statearr_22691_22722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22679 === (11))){
var inst_22642 = (state_22678[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22678,(10),Object,null,(9));
var inst_22651 = chs__$1.call(null,inst_22642);
var inst_22652 = done.call(null,inst_22642);
var inst_22653 = cljs.core.async.take_BANG_.call(null,inst_22651,inst_22652);
var state_22678__$1 = state_22678;
var statearr_22692_22723 = state_22678__$1;
(statearr_22692_22723[(2)] = inst_22653);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22678__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22679 === (9))){
var inst_22642 = (state_22678[(7)]);
var inst_22655 = (state_22678[(2)]);
var inst_22656 = (inst_22642 + (1));
var inst_22642__$1 = inst_22656;
var state_22678__$1 = (function (){var statearr_22693 = state_22678;
(statearr_22693[(10)] = inst_22655);

(statearr_22693[(7)] = inst_22642__$1);

return statearr_22693;
})();
var statearr_22694_22724 = state_22678__$1;
(statearr_22694_22724[(2)] = null);

(statearr_22694_22724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22679 === (5))){
var inst_22662 = (state_22678[(2)]);
var state_22678__$1 = (function (){var statearr_22695 = state_22678;
(statearr_22695[(11)] = inst_22662);

return statearr_22695;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22678__$1,(12),dchan);
} else {
if((state_val_22679 === (14))){
var inst_22664 = (state_22678[(8)]);
var inst_22669 = cljs.core.apply.call(null,f,inst_22664);
var state_22678__$1 = state_22678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22678__$1,(16),out,inst_22669);
} else {
if((state_val_22679 === (16))){
var inst_22671 = (state_22678[(2)]);
var state_22678__$1 = (function (){var statearr_22696 = state_22678;
(statearr_22696[(12)] = inst_22671);

return statearr_22696;
})();
var statearr_22697_22725 = state_22678__$1;
(statearr_22697_22725[(2)] = null);

(statearr_22697_22725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22679 === (10))){
var inst_22646 = (state_22678[(2)]);
var inst_22647 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22678__$1 = (function (){var statearr_22698 = state_22678;
(statearr_22698[(13)] = inst_22646);

return statearr_22698;
})();
var statearr_22699_22726 = state_22678__$1;
(statearr_22699_22726[(2)] = inst_22647);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22678__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22679 === (8))){
var inst_22660 = (state_22678[(2)]);
var state_22678__$1 = state_22678;
var statearr_22700_22727 = state_22678__$1;
(statearr_22700_22727[(2)] = inst_22660);

(statearr_22700_22727[(1)] = (5));


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
});})(c__18865__auto___22712,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18844__auto__,c__18865__auto___22712,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18845__auto__ = null;
var cljs$core$async$state_machine__18845__auto____0 = (function (){
var statearr_22704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22704[(0)] = cljs$core$async$state_machine__18845__auto__);

(statearr_22704[(1)] = (1));

return statearr_22704;
});
var cljs$core$async$state_machine__18845__auto____1 = (function (state_22678){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_22678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e22705){if((e22705 instanceof Object)){
var ex__18848__auto__ = e22705;
var statearr_22706_22728 = state_22678;
(statearr_22706_22728[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22729 = state_22678;
state_22678 = G__22729;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$state_machine__18845__auto__ = function(state_22678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18845__auto____1.call(this,state_22678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18845__auto____0;
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18845__auto____1;
return cljs$core$async$state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___22712,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18867__auto__ = (function (){var statearr_22707 = f__18866__auto__.call(null);
(statearr_22707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___22712);

return statearr_22707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___22712,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22731 = [];
var len__17898__auto___22787 = arguments.length;
var i__17899__auto___22788 = (0);
while(true){
if((i__17899__auto___22788 < len__17898__auto___22787)){
args22731.push((arguments[i__17899__auto___22788]));

var G__22789 = (i__17899__auto___22788 + (1));
i__17899__auto___22788 = G__22789;
continue;
} else {
}
break;
}

var G__22733 = args22731.length;
switch (G__22733) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22731.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18865__auto___22791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___22791,out){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___22791,out){
return (function (state_22763){
var state_val_22764 = (state_22763[(1)]);
if((state_val_22764 === (7))){
var inst_22742 = (state_22763[(7)]);
var inst_22743 = (state_22763[(8)]);
var inst_22742__$1 = (state_22763[(2)]);
var inst_22743__$1 = cljs.core.nth.call(null,inst_22742__$1,(0),null);
var inst_22744 = cljs.core.nth.call(null,inst_22742__$1,(1),null);
var inst_22745 = (inst_22743__$1 == null);
var state_22763__$1 = (function (){var statearr_22765 = state_22763;
(statearr_22765[(9)] = inst_22744);

(statearr_22765[(7)] = inst_22742__$1);

(statearr_22765[(8)] = inst_22743__$1);

return statearr_22765;
})();
if(cljs.core.truth_(inst_22745)){
var statearr_22766_22792 = state_22763__$1;
(statearr_22766_22792[(1)] = (8));

} else {
var statearr_22767_22793 = state_22763__$1;
(statearr_22767_22793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22764 === (1))){
var inst_22734 = cljs.core.vec.call(null,chs);
var inst_22735 = inst_22734;
var state_22763__$1 = (function (){var statearr_22768 = state_22763;
(statearr_22768[(10)] = inst_22735);

return statearr_22768;
})();
var statearr_22769_22794 = state_22763__$1;
(statearr_22769_22794[(2)] = null);

(statearr_22769_22794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22764 === (4))){
var inst_22735 = (state_22763[(10)]);
var state_22763__$1 = state_22763;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22763__$1,(7),inst_22735);
} else {
if((state_val_22764 === (6))){
var inst_22759 = (state_22763[(2)]);
var state_22763__$1 = state_22763;
var statearr_22770_22795 = state_22763__$1;
(statearr_22770_22795[(2)] = inst_22759);

(statearr_22770_22795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22764 === (3))){
var inst_22761 = (state_22763[(2)]);
var state_22763__$1 = state_22763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22763__$1,inst_22761);
} else {
if((state_val_22764 === (2))){
var inst_22735 = (state_22763[(10)]);
var inst_22737 = cljs.core.count.call(null,inst_22735);
var inst_22738 = (inst_22737 > (0));
var state_22763__$1 = state_22763;
if(cljs.core.truth_(inst_22738)){
var statearr_22772_22796 = state_22763__$1;
(statearr_22772_22796[(1)] = (4));

} else {
var statearr_22773_22797 = state_22763__$1;
(statearr_22773_22797[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22764 === (11))){
var inst_22735 = (state_22763[(10)]);
var inst_22752 = (state_22763[(2)]);
var tmp22771 = inst_22735;
var inst_22735__$1 = tmp22771;
var state_22763__$1 = (function (){var statearr_22774 = state_22763;
(statearr_22774[(11)] = inst_22752);

(statearr_22774[(10)] = inst_22735__$1);

return statearr_22774;
})();
var statearr_22775_22798 = state_22763__$1;
(statearr_22775_22798[(2)] = null);

(statearr_22775_22798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22764 === (9))){
var inst_22743 = (state_22763[(8)]);
var state_22763__$1 = state_22763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22763__$1,(11),out,inst_22743);
} else {
if((state_val_22764 === (5))){
var inst_22757 = cljs.core.async.close_BANG_.call(null,out);
var state_22763__$1 = state_22763;
var statearr_22776_22799 = state_22763__$1;
(statearr_22776_22799[(2)] = inst_22757);

(statearr_22776_22799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22764 === (10))){
var inst_22755 = (state_22763[(2)]);
var state_22763__$1 = state_22763;
var statearr_22777_22800 = state_22763__$1;
(statearr_22777_22800[(2)] = inst_22755);

(statearr_22777_22800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22764 === (8))){
var inst_22744 = (state_22763[(9)]);
var inst_22742 = (state_22763[(7)]);
var inst_22743 = (state_22763[(8)]);
var inst_22735 = (state_22763[(10)]);
var inst_22747 = (function (){var cs = inst_22735;
var vec__22740 = inst_22742;
var v = inst_22743;
var c = inst_22744;
return ((function (cs,vec__22740,v,c,inst_22744,inst_22742,inst_22743,inst_22735,state_val_22764,c__18865__auto___22791,out){
return (function (p1__22730_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22730_SHARP_);
});
;})(cs,vec__22740,v,c,inst_22744,inst_22742,inst_22743,inst_22735,state_val_22764,c__18865__auto___22791,out))
})();
var inst_22748 = cljs.core.filterv.call(null,inst_22747,inst_22735);
var inst_22735__$1 = inst_22748;
var state_22763__$1 = (function (){var statearr_22778 = state_22763;
(statearr_22778[(10)] = inst_22735__$1);

return statearr_22778;
})();
var statearr_22779_22801 = state_22763__$1;
(statearr_22779_22801[(2)] = null);

(statearr_22779_22801[(1)] = (2));


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
});})(c__18865__auto___22791,out))
;
return ((function (switch__18844__auto__,c__18865__auto___22791,out){
return (function() {
var cljs$core$async$state_machine__18845__auto__ = null;
var cljs$core$async$state_machine__18845__auto____0 = (function (){
var statearr_22783 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22783[(0)] = cljs$core$async$state_machine__18845__auto__);

(statearr_22783[(1)] = (1));

return statearr_22783;
});
var cljs$core$async$state_machine__18845__auto____1 = (function (state_22763){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_22763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e22784){if((e22784 instanceof Object)){
var ex__18848__auto__ = e22784;
var statearr_22785_22802 = state_22763;
(statearr_22785_22802[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22803 = state_22763;
state_22763 = G__22803;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$state_machine__18845__auto__ = function(state_22763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18845__auto____1.call(this,state_22763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18845__auto____0;
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18845__auto____1;
return cljs$core$async$state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___22791,out))
})();
var state__18867__auto__ = (function (){var statearr_22786 = f__18866__auto__.call(null);
(statearr_22786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___22791);

return statearr_22786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___22791,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22804 = [];
var len__17898__auto___22853 = arguments.length;
var i__17899__auto___22854 = (0);
while(true){
if((i__17899__auto___22854 < len__17898__auto___22853)){
args22804.push((arguments[i__17899__auto___22854]));

var G__22855 = (i__17899__auto___22854 + (1));
i__17899__auto___22854 = G__22855;
continue;
} else {
}
break;
}

var G__22806 = args22804.length;
switch (G__22806) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22804.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18865__auto___22857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___22857,out){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___22857,out){
return (function (state_22830){
var state_val_22831 = (state_22830[(1)]);
if((state_val_22831 === (7))){
var inst_22812 = (state_22830[(7)]);
var inst_22812__$1 = (state_22830[(2)]);
var inst_22813 = (inst_22812__$1 == null);
var inst_22814 = cljs.core.not.call(null,inst_22813);
var state_22830__$1 = (function (){var statearr_22832 = state_22830;
(statearr_22832[(7)] = inst_22812__$1);

return statearr_22832;
})();
if(inst_22814){
var statearr_22833_22858 = state_22830__$1;
(statearr_22833_22858[(1)] = (8));

} else {
var statearr_22834_22859 = state_22830__$1;
(statearr_22834_22859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (1))){
var inst_22807 = (0);
var state_22830__$1 = (function (){var statearr_22835 = state_22830;
(statearr_22835[(8)] = inst_22807);

return statearr_22835;
})();
var statearr_22836_22860 = state_22830__$1;
(statearr_22836_22860[(2)] = null);

(statearr_22836_22860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (4))){
var state_22830__$1 = state_22830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22830__$1,(7),ch);
} else {
if((state_val_22831 === (6))){
var inst_22825 = (state_22830[(2)]);
var state_22830__$1 = state_22830;
var statearr_22837_22861 = state_22830__$1;
(statearr_22837_22861[(2)] = inst_22825);

(statearr_22837_22861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (3))){
var inst_22827 = (state_22830[(2)]);
var inst_22828 = cljs.core.async.close_BANG_.call(null,out);
var state_22830__$1 = (function (){var statearr_22838 = state_22830;
(statearr_22838[(9)] = inst_22827);

return statearr_22838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22830__$1,inst_22828);
} else {
if((state_val_22831 === (2))){
var inst_22807 = (state_22830[(8)]);
var inst_22809 = (inst_22807 < n);
var state_22830__$1 = state_22830;
if(cljs.core.truth_(inst_22809)){
var statearr_22839_22862 = state_22830__$1;
(statearr_22839_22862[(1)] = (4));

} else {
var statearr_22840_22863 = state_22830__$1;
(statearr_22840_22863[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (11))){
var inst_22807 = (state_22830[(8)]);
var inst_22817 = (state_22830[(2)]);
var inst_22818 = (inst_22807 + (1));
var inst_22807__$1 = inst_22818;
var state_22830__$1 = (function (){var statearr_22841 = state_22830;
(statearr_22841[(10)] = inst_22817);

(statearr_22841[(8)] = inst_22807__$1);

return statearr_22841;
})();
var statearr_22842_22864 = state_22830__$1;
(statearr_22842_22864[(2)] = null);

(statearr_22842_22864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (9))){
var state_22830__$1 = state_22830;
var statearr_22843_22865 = state_22830__$1;
(statearr_22843_22865[(2)] = null);

(statearr_22843_22865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (5))){
var state_22830__$1 = state_22830;
var statearr_22844_22866 = state_22830__$1;
(statearr_22844_22866[(2)] = null);

(statearr_22844_22866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (10))){
var inst_22822 = (state_22830[(2)]);
var state_22830__$1 = state_22830;
var statearr_22845_22867 = state_22830__$1;
(statearr_22845_22867[(2)] = inst_22822);

(statearr_22845_22867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22831 === (8))){
var inst_22812 = (state_22830[(7)]);
var state_22830__$1 = state_22830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22830__$1,(11),out,inst_22812);
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
});})(c__18865__auto___22857,out))
;
return ((function (switch__18844__auto__,c__18865__auto___22857,out){
return (function() {
var cljs$core$async$state_machine__18845__auto__ = null;
var cljs$core$async$state_machine__18845__auto____0 = (function (){
var statearr_22849 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22849[(0)] = cljs$core$async$state_machine__18845__auto__);

(statearr_22849[(1)] = (1));

return statearr_22849;
});
var cljs$core$async$state_machine__18845__auto____1 = (function (state_22830){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_22830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e22850){if((e22850 instanceof Object)){
var ex__18848__auto__ = e22850;
var statearr_22851_22868 = state_22830;
(statearr_22851_22868[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22869 = state_22830;
state_22830 = G__22869;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$state_machine__18845__auto__ = function(state_22830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18845__auto____1.call(this,state_22830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18845__auto____0;
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18845__auto____1;
return cljs$core$async$state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___22857,out))
})();
var state__18867__auto__ = (function (){var statearr_22852 = f__18866__auto__.call(null);
(statearr_22852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___22857);

return statearr_22852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___22857,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22877 = (function (map_LT_,f,ch,meta22878){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22878 = meta22878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22879,meta22878__$1){
var self__ = this;
var _22879__$1 = this;
return (new cljs.core.async.t_cljs$core$async22877(self__.map_LT_,self__.f,self__.ch,meta22878__$1));
});

cljs.core.async.t_cljs$core$async22877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22879){
var self__ = this;
var _22879__$1 = this;
return self__.meta22878;
});

cljs.core.async.t_cljs$core$async22877.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22877.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22877.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22877.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22877.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22880 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22880 = (function (map_LT_,f,ch,meta22878,_,fn1,meta22881){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22878 = meta22878;
this._ = _;
this.fn1 = fn1;
this.meta22881 = meta22881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22882,meta22881__$1){
var self__ = this;
var _22882__$1 = this;
return (new cljs.core.async.t_cljs$core$async22880(self__.map_LT_,self__.f,self__.ch,self__.meta22878,self__._,self__.fn1,meta22881__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22880.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22882){
var self__ = this;
var _22882__$1 = this;
return self__.meta22881;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22880.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22880.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22880.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22880.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22870_SHARP_){
return f1.call(null,(((p1__22870_SHARP_ == null))?null:self__.f.call(null,p1__22870_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22880.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22878","meta22878",-511624117,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22877","cljs.core.async/t_cljs$core$async22877",-1126784651,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22881","meta22881",776231834,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22880.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22880";

cljs.core.async.t_cljs$core$async22880.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async22880");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22880 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22880(map_LT___$1,f__$1,ch__$1,meta22878__$1,___$2,fn1__$1,meta22881){
return (new cljs.core.async.t_cljs$core$async22880(map_LT___$1,f__$1,ch__$1,meta22878__$1,___$2,fn1__$1,meta22881));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22880(self__.map_LT_,self__.f,self__.ch,self__.meta22878,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16828__auto__ = ret;
if(cljs.core.truth_(and__16828__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16828__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22877.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22877.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22877.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22878","meta22878",-511624117,null)], null);
});

cljs.core.async.t_cljs$core$async22877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22877";

cljs.core.async.t_cljs$core$async22877.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async22877");
});

cljs.core.async.__GT_t_cljs$core$async22877 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22877(map_LT___$1,f__$1,ch__$1,meta22878){
return (new cljs.core.async.t_cljs$core$async22877(map_LT___$1,f__$1,ch__$1,meta22878));
});

}

return (new cljs.core.async.t_cljs$core$async22877(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22886 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22886 = (function (map_GT_,f,ch,meta22887){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22887 = meta22887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22888,meta22887__$1){
var self__ = this;
var _22888__$1 = this;
return (new cljs.core.async.t_cljs$core$async22886(self__.map_GT_,self__.f,self__.ch,meta22887__$1));
});

cljs.core.async.t_cljs$core$async22886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22888){
var self__ = this;
var _22888__$1 = this;
return self__.meta22887;
});

cljs.core.async.t_cljs$core$async22886.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22886.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22886.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22886.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22886.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22886.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22887","meta22887",1595146720,null)], null);
});

cljs.core.async.t_cljs$core$async22886.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22886";

cljs.core.async.t_cljs$core$async22886.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async22886");
});

cljs.core.async.__GT_t_cljs$core$async22886 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22886(map_GT___$1,f__$1,ch__$1,meta22887){
return (new cljs.core.async.t_cljs$core$async22886(map_GT___$1,f__$1,ch__$1,meta22887));
});

}

return (new cljs.core.async.t_cljs$core$async22886(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22892 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22892 = (function (filter_GT_,p,ch,meta22893){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22893 = meta22893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22894,meta22893__$1){
var self__ = this;
var _22894__$1 = this;
return (new cljs.core.async.t_cljs$core$async22892(self__.filter_GT_,self__.p,self__.ch,meta22893__$1));
});

cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22894){
var self__ = this;
var _22894__$1 = this;
return self__.meta22893;
});

cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22893","meta22893",-257260551,null)], null);
});

cljs.core.async.t_cljs$core$async22892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22892";

cljs.core.async.t_cljs$core$async22892.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async22892");
});

cljs.core.async.__GT_t_cljs$core$async22892 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22892(filter_GT___$1,p__$1,ch__$1,meta22893){
return (new cljs.core.async.t_cljs$core$async22892(filter_GT___$1,p__$1,ch__$1,meta22893));
});

}

return (new cljs.core.async.t_cljs$core$async22892(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22895 = [];
var len__17898__auto___22939 = arguments.length;
var i__17899__auto___22940 = (0);
while(true){
if((i__17899__auto___22940 < len__17898__auto___22939)){
args22895.push((arguments[i__17899__auto___22940]));

var G__22941 = (i__17899__auto___22940 + (1));
i__17899__auto___22940 = G__22941;
continue;
} else {
}
break;
}

var G__22897 = args22895.length;
switch (G__22897) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22895.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18865__auto___22943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___22943,out){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___22943,out){
return (function (state_22918){
var state_val_22919 = (state_22918[(1)]);
if((state_val_22919 === (7))){
var inst_22914 = (state_22918[(2)]);
var state_22918__$1 = state_22918;
var statearr_22920_22944 = state_22918__$1;
(statearr_22920_22944[(2)] = inst_22914);

(statearr_22920_22944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22919 === (1))){
var state_22918__$1 = state_22918;
var statearr_22921_22945 = state_22918__$1;
(statearr_22921_22945[(2)] = null);

(statearr_22921_22945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22919 === (4))){
var inst_22900 = (state_22918[(7)]);
var inst_22900__$1 = (state_22918[(2)]);
var inst_22901 = (inst_22900__$1 == null);
var state_22918__$1 = (function (){var statearr_22922 = state_22918;
(statearr_22922[(7)] = inst_22900__$1);

return statearr_22922;
})();
if(cljs.core.truth_(inst_22901)){
var statearr_22923_22946 = state_22918__$1;
(statearr_22923_22946[(1)] = (5));

} else {
var statearr_22924_22947 = state_22918__$1;
(statearr_22924_22947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22919 === (6))){
var inst_22900 = (state_22918[(7)]);
var inst_22905 = p.call(null,inst_22900);
var state_22918__$1 = state_22918;
if(cljs.core.truth_(inst_22905)){
var statearr_22925_22948 = state_22918__$1;
(statearr_22925_22948[(1)] = (8));

} else {
var statearr_22926_22949 = state_22918__$1;
(statearr_22926_22949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22919 === (3))){
var inst_22916 = (state_22918[(2)]);
var state_22918__$1 = state_22918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22918__$1,inst_22916);
} else {
if((state_val_22919 === (2))){
var state_22918__$1 = state_22918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22918__$1,(4),ch);
} else {
if((state_val_22919 === (11))){
var inst_22908 = (state_22918[(2)]);
var state_22918__$1 = state_22918;
var statearr_22927_22950 = state_22918__$1;
(statearr_22927_22950[(2)] = inst_22908);

(statearr_22927_22950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22919 === (9))){
var state_22918__$1 = state_22918;
var statearr_22928_22951 = state_22918__$1;
(statearr_22928_22951[(2)] = null);

(statearr_22928_22951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22919 === (5))){
var inst_22903 = cljs.core.async.close_BANG_.call(null,out);
var state_22918__$1 = state_22918;
var statearr_22929_22952 = state_22918__$1;
(statearr_22929_22952[(2)] = inst_22903);

(statearr_22929_22952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22919 === (10))){
var inst_22911 = (state_22918[(2)]);
var state_22918__$1 = (function (){var statearr_22930 = state_22918;
(statearr_22930[(8)] = inst_22911);

return statearr_22930;
})();
var statearr_22931_22953 = state_22918__$1;
(statearr_22931_22953[(2)] = null);

(statearr_22931_22953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22919 === (8))){
var inst_22900 = (state_22918[(7)]);
var state_22918__$1 = state_22918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22918__$1,(11),out,inst_22900);
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
});})(c__18865__auto___22943,out))
;
return ((function (switch__18844__auto__,c__18865__auto___22943,out){
return (function() {
var cljs$core$async$state_machine__18845__auto__ = null;
var cljs$core$async$state_machine__18845__auto____0 = (function (){
var statearr_22935 = [null,null,null,null,null,null,null,null,null];
(statearr_22935[(0)] = cljs$core$async$state_machine__18845__auto__);

(statearr_22935[(1)] = (1));

return statearr_22935;
});
var cljs$core$async$state_machine__18845__auto____1 = (function (state_22918){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_22918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e22936){if((e22936 instanceof Object)){
var ex__18848__auto__ = e22936;
var statearr_22937_22954 = state_22918;
(statearr_22937_22954[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22955 = state_22918;
state_22918 = G__22955;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$state_machine__18845__auto__ = function(state_22918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18845__auto____1.call(this,state_22918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18845__auto____0;
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18845__auto____1;
return cljs$core$async$state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___22943,out))
})();
var state__18867__auto__ = (function (){var statearr_22938 = f__18866__auto__.call(null);
(statearr_22938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___22943);

return statearr_22938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___22943,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22956 = [];
var len__17898__auto___22959 = arguments.length;
var i__17899__auto___22960 = (0);
while(true){
if((i__17899__auto___22960 < len__17898__auto___22959)){
args22956.push((arguments[i__17899__auto___22960]));

var G__22961 = (i__17899__auto___22960 + (1));
i__17899__auto___22960 = G__22961;
continue;
} else {
}
break;
}

var G__22958 = args22956.length;
switch (G__22958) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22956.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18865__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto__){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto__){
return (function (state_23128){
var state_val_23129 = (state_23128[(1)]);
if((state_val_23129 === (7))){
var inst_23124 = (state_23128[(2)]);
var state_23128__$1 = state_23128;
var statearr_23130_23171 = state_23128__$1;
(statearr_23130_23171[(2)] = inst_23124);

(statearr_23130_23171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (20))){
var inst_23094 = (state_23128[(7)]);
var inst_23105 = (state_23128[(2)]);
var inst_23106 = cljs.core.next.call(null,inst_23094);
var inst_23080 = inst_23106;
var inst_23081 = null;
var inst_23082 = (0);
var inst_23083 = (0);
var state_23128__$1 = (function (){var statearr_23131 = state_23128;
(statearr_23131[(8)] = inst_23081);

(statearr_23131[(9)] = inst_23080);

(statearr_23131[(10)] = inst_23082);

(statearr_23131[(11)] = inst_23083);

(statearr_23131[(12)] = inst_23105);

return statearr_23131;
})();
var statearr_23132_23172 = state_23128__$1;
(statearr_23132_23172[(2)] = null);

(statearr_23132_23172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (1))){
var state_23128__$1 = state_23128;
var statearr_23133_23173 = state_23128__$1;
(statearr_23133_23173[(2)] = null);

(statearr_23133_23173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (4))){
var inst_23069 = (state_23128[(13)]);
var inst_23069__$1 = (state_23128[(2)]);
var inst_23070 = (inst_23069__$1 == null);
var state_23128__$1 = (function (){var statearr_23134 = state_23128;
(statearr_23134[(13)] = inst_23069__$1);

return statearr_23134;
})();
if(cljs.core.truth_(inst_23070)){
var statearr_23135_23174 = state_23128__$1;
(statearr_23135_23174[(1)] = (5));

} else {
var statearr_23136_23175 = state_23128__$1;
(statearr_23136_23175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (15))){
var state_23128__$1 = state_23128;
var statearr_23140_23176 = state_23128__$1;
(statearr_23140_23176[(2)] = null);

(statearr_23140_23176[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (21))){
var state_23128__$1 = state_23128;
var statearr_23141_23177 = state_23128__$1;
(statearr_23141_23177[(2)] = null);

(statearr_23141_23177[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (13))){
var inst_23081 = (state_23128[(8)]);
var inst_23080 = (state_23128[(9)]);
var inst_23082 = (state_23128[(10)]);
var inst_23083 = (state_23128[(11)]);
var inst_23090 = (state_23128[(2)]);
var inst_23091 = (inst_23083 + (1));
var tmp23137 = inst_23081;
var tmp23138 = inst_23080;
var tmp23139 = inst_23082;
var inst_23080__$1 = tmp23138;
var inst_23081__$1 = tmp23137;
var inst_23082__$1 = tmp23139;
var inst_23083__$1 = inst_23091;
var state_23128__$1 = (function (){var statearr_23142 = state_23128;
(statearr_23142[(8)] = inst_23081__$1);

(statearr_23142[(9)] = inst_23080__$1);

(statearr_23142[(10)] = inst_23082__$1);

(statearr_23142[(14)] = inst_23090);

(statearr_23142[(11)] = inst_23083__$1);

return statearr_23142;
})();
var statearr_23143_23178 = state_23128__$1;
(statearr_23143_23178[(2)] = null);

(statearr_23143_23178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (22))){
var state_23128__$1 = state_23128;
var statearr_23144_23179 = state_23128__$1;
(statearr_23144_23179[(2)] = null);

(statearr_23144_23179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (6))){
var inst_23069 = (state_23128[(13)]);
var inst_23078 = f.call(null,inst_23069);
var inst_23079 = cljs.core.seq.call(null,inst_23078);
var inst_23080 = inst_23079;
var inst_23081 = null;
var inst_23082 = (0);
var inst_23083 = (0);
var state_23128__$1 = (function (){var statearr_23145 = state_23128;
(statearr_23145[(8)] = inst_23081);

(statearr_23145[(9)] = inst_23080);

(statearr_23145[(10)] = inst_23082);

(statearr_23145[(11)] = inst_23083);

return statearr_23145;
})();
var statearr_23146_23180 = state_23128__$1;
(statearr_23146_23180[(2)] = null);

(statearr_23146_23180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (17))){
var inst_23094 = (state_23128[(7)]);
var inst_23098 = cljs.core.chunk_first.call(null,inst_23094);
var inst_23099 = cljs.core.chunk_rest.call(null,inst_23094);
var inst_23100 = cljs.core.count.call(null,inst_23098);
var inst_23080 = inst_23099;
var inst_23081 = inst_23098;
var inst_23082 = inst_23100;
var inst_23083 = (0);
var state_23128__$1 = (function (){var statearr_23147 = state_23128;
(statearr_23147[(8)] = inst_23081);

(statearr_23147[(9)] = inst_23080);

(statearr_23147[(10)] = inst_23082);

(statearr_23147[(11)] = inst_23083);

return statearr_23147;
})();
var statearr_23148_23181 = state_23128__$1;
(statearr_23148_23181[(2)] = null);

(statearr_23148_23181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (3))){
var inst_23126 = (state_23128[(2)]);
var state_23128__$1 = state_23128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23128__$1,inst_23126);
} else {
if((state_val_23129 === (12))){
var inst_23114 = (state_23128[(2)]);
var state_23128__$1 = state_23128;
var statearr_23149_23182 = state_23128__$1;
(statearr_23149_23182[(2)] = inst_23114);

(statearr_23149_23182[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (2))){
var state_23128__$1 = state_23128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23128__$1,(4),in$);
} else {
if((state_val_23129 === (23))){
var inst_23122 = (state_23128[(2)]);
var state_23128__$1 = state_23128;
var statearr_23150_23183 = state_23128__$1;
(statearr_23150_23183[(2)] = inst_23122);

(statearr_23150_23183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (19))){
var inst_23109 = (state_23128[(2)]);
var state_23128__$1 = state_23128;
var statearr_23151_23184 = state_23128__$1;
(statearr_23151_23184[(2)] = inst_23109);

(statearr_23151_23184[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (11))){
var inst_23094 = (state_23128[(7)]);
var inst_23080 = (state_23128[(9)]);
var inst_23094__$1 = cljs.core.seq.call(null,inst_23080);
var state_23128__$1 = (function (){var statearr_23152 = state_23128;
(statearr_23152[(7)] = inst_23094__$1);

return statearr_23152;
})();
if(inst_23094__$1){
var statearr_23153_23185 = state_23128__$1;
(statearr_23153_23185[(1)] = (14));

} else {
var statearr_23154_23186 = state_23128__$1;
(statearr_23154_23186[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (9))){
var inst_23116 = (state_23128[(2)]);
var inst_23117 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23128__$1 = (function (){var statearr_23155 = state_23128;
(statearr_23155[(15)] = inst_23116);

return statearr_23155;
})();
if(cljs.core.truth_(inst_23117)){
var statearr_23156_23187 = state_23128__$1;
(statearr_23156_23187[(1)] = (21));

} else {
var statearr_23157_23188 = state_23128__$1;
(statearr_23157_23188[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (5))){
var inst_23072 = cljs.core.async.close_BANG_.call(null,out);
var state_23128__$1 = state_23128;
var statearr_23158_23189 = state_23128__$1;
(statearr_23158_23189[(2)] = inst_23072);

(statearr_23158_23189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (14))){
var inst_23094 = (state_23128[(7)]);
var inst_23096 = cljs.core.chunked_seq_QMARK_.call(null,inst_23094);
var state_23128__$1 = state_23128;
if(inst_23096){
var statearr_23159_23190 = state_23128__$1;
(statearr_23159_23190[(1)] = (17));

} else {
var statearr_23160_23191 = state_23128__$1;
(statearr_23160_23191[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (16))){
var inst_23112 = (state_23128[(2)]);
var state_23128__$1 = state_23128;
var statearr_23161_23192 = state_23128__$1;
(statearr_23161_23192[(2)] = inst_23112);

(statearr_23161_23192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23129 === (10))){
var inst_23081 = (state_23128[(8)]);
var inst_23083 = (state_23128[(11)]);
var inst_23088 = cljs.core._nth.call(null,inst_23081,inst_23083);
var state_23128__$1 = state_23128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23128__$1,(13),out,inst_23088);
} else {
if((state_val_23129 === (18))){
var inst_23094 = (state_23128[(7)]);
var inst_23103 = cljs.core.first.call(null,inst_23094);
var state_23128__$1 = state_23128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23128__$1,(20),out,inst_23103);
} else {
if((state_val_23129 === (8))){
var inst_23082 = (state_23128[(10)]);
var inst_23083 = (state_23128[(11)]);
var inst_23085 = (inst_23083 < inst_23082);
var inst_23086 = inst_23085;
var state_23128__$1 = state_23128;
if(cljs.core.truth_(inst_23086)){
var statearr_23162_23193 = state_23128__$1;
(statearr_23162_23193[(1)] = (10));

} else {
var statearr_23163_23194 = state_23128__$1;
(statearr_23163_23194[(1)] = (11));

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
}
}
}
}
}
}
});})(c__18865__auto__))
;
return ((function (switch__18844__auto__,c__18865__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18845__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18845__auto____0 = (function (){
var statearr_23167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23167[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18845__auto__);

(statearr_23167[(1)] = (1));

return statearr_23167;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18845__auto____1 = (function (state_23128){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_23128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e23168){if((e23168 instanceof Object)){
var ex__18848__auto__ = e23168;
var statearr_23169_23195 = state_23128;
(statearr_23169_23195[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23196 = state_23128;
state_23128 = G__23196;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18845__auto__ = function(state_23128){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18845__auto____1.call(this,state_23128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18845__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18845__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto__))
})();
var state__18867__auto__ = (function (){var statearr_23170 = f__18866__auto__.call(null);
(statearr_23170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto__);

return statearr_23170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto__))
);

return c__18865__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23197 = [];
var len__17898__auto___23200 = arguments.length;
var i__17899__auto___23201 = (0);
while(true){
if((i__17899__auto___23201 < len__17898__auto___23200)){
args23197.push((arguments[i__17899__auto___23201]));

var G__23202 = (i__17899__auto___23201 + (1));
i__17899__auto___23201 = G__23202;
continue;
} else {
}
break;
}

var G__23199 = args23197.length;
switch (G__23199) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23197.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23204 = [];
var len__17898__auto___23207 = arguments.length;
var i__17899__auto___23208 = (0);
while(true){
if((i__17899__auto___23208 < len__17898__auto___23207)){
args23204.push((arguments[i__17899__auto___23208]));

var G__23209 = (i__17899__auto___23208 + (1));
i__17899__auto___23208 = G__23209;
continue;
} else {
}
break;
}

var G__23206 = args23204.length;
switch (G__23206) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23204.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23211 = [];
var len__17898__auto___23262 = arguments.length;
var i__17899__auto___23263 = (0);
while(true){
if((i__17899__auto___23263 < len__17898__auto___23262)){
args23211.push((arguments[i__17899__auto___23263]));

var G__23264 = (i__17899__auto___23263 + (1));
i__17899__auto___23263 = G__23264;
continue;
} else {
}
break;
}

var G__23213 = args23211.length;
switch (G__23213) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23211.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18865__auto___23266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___23266,out){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___23266,out){
return (function (state_23237){
var state_val_23238 = (state_23237[(1)]);
if((state_val_23238 === (7))){
var inst_23232 = (state_23237[(2)]);
var state_23237__$1 = state_23237;
var statearr_23239_23267 = state_23237__$1;
(statearr_23239_23267[(2)] = inst_23232);

(statearr_23239_23267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23238 === (1))){
var inst_23214 = null;
var state_23237__$1 = (function (){var statearr_23240 = state_23237;
(statearr_23240[(7)] = inst_23214);

return statearr_23240;
})();
var statearr_23241_23268 = state_23237__$1;
(statearr_23241_23268[(2)] = null);

(statearr_23241_23268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23238 === (4))){
var inst_23217 = (state_23237[(8)]);
var inst_23217__$1 = (state_23237[(2)]);
var inst_23218 = (inst_23217__$1 == null);
var inst_23219 = cljs.core.not.call(null,inst_23218);
var state_23237__$1 = (function (){var statearr_23242 = state_23237;
(statearr_23242[(8)] = inst_23217__$1);

return statearr_23242;
})();
if(inst_23219){
var statearr_23243_23269 = state_23237__$1;
(statearr_23243_23269[(1)] = (5));

} else {
var statearr_23244_23270 = state_23237__$1;
(statearr_23244_23270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23238 === (6))){
var state_23237__$1 = state_23237;
var statearr_23245_23271 = state_23237__$1;
(statearr_23245_23271[(2)] = null);

(statearr_23245_23271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23238 === (3))){
var inst_23234 = (state_23237[(2)]);
var inst_23235 = cljs.core.async.close_BANG_.call(null,out);
var state_23237__$1 = (function (){var statearr_23246 = state_23237;
(statearr_23246[(9)] = inst_23234);

return statearr_23246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23237__$1,inst_23235);
} else {
if((state_val_23238 === (2))){
var state_23237__$1 = state_23237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23237__$1,(4),ch);
} else {
if((state_val_23238 === (11))){
var inst_23217 = (state_23237[(8)]);
var inst_23226 = (state_23237[(2)]);
var inst_23214 = inst_23217;
var state_23237__$1 = (function (){var statearr_23247 = state_23237;
(statearr_23247[(10)] = inst_23226);

(statearr_23247[(7)] = inst_23214);

return statearr_23247;
})();
var statearr_23248_23272 = state_23237__$1;
(statearr_23248_23272[(2)] = null);

(statearr_23248_23272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23238 === (9))){
var inst_23217 = (state_23237[(8)]);
var state_23237__$1 = state_23237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23237__$1,(11),out,inst_23217);
} else {
if((state_val_23238 === (5))){
var inst_23217 = (state_23237[(8)]);
var inst_23214 = (state_23237[(7)]);
var inst_23221 = cljs.core._EQ_.call(null,inst_23217,inst_23214);
var state_23237__$1 = state_23237;
if(inst_23221){
var statearr_23250_23273 = state_23237__$1;
(statearr_23250_23273[(1)] = (8));

} else {
var statearr_23251_23274 = state_23237__$1;
(statearr_23251_23274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23238 === (10))){
var inst_23229 = (state_23237[(2)]);
var state_23237__$1 = state_23237;
var statearr_23252_23275 = state_23237__$1;
(statearr_23252_23275[(2)] = inst_23229);

(statearr_23252_23275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23238 === (8))){
var inst_23214 = (state_23237[(7)]);
var tmp23249 = inst_23214;
var inst_23214__$1 = tmp23249;
var state_23237__$1 = (function (){var statearr_23253 = state_23237;
(statearr_23253[(7)] = inst_23214__$1);

return statearr_23253;
})();
var statearr_23254_23276 = state_23237__$1;
(statearr_23254_23276[(2)] = null);

(statearr_23254_23276[(1)] = (2));


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
});})(c__18865__auto___23266,out))
;
return ((function (switch__18844__auto__,c__18865__auto___23266,out){
return (function() {
var cljs$core$async$state_machine__18845__auto__ = null;
var cljs$core$async$state_machine__18845__auto____0 = (function (){
var statearr_23258 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23258[(0)] = cljs$core$async$state_machine__18845__auto__);

(statearr_23258[(1)] = (1));

return statearr_23258;
});
var cljs$core$async$state_machine__18845__auto____1 = (function (state_23237){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_23237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e23259){if((e23259 instanceof Object)){
var ex__18848__auto__ = e23259;
var statearr_23260_23277 = state_23237;
(statearr_23260_23277[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23278 = state_23237;
state_23237 = G__23278;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$state_machine__18845__auto__ = function(state_23237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18845__auto____1.call(this,state_23237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18845__auto____0;
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18845__auto____1;
return cljs$core$async$state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___23266,out))
})();
var state__18867__auto__ = (function (){var statearr_23261 = f__18866__auto__.call(null);
(statearr_23261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___23266);

return statearr_23261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___23266,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23279 = [];
var len__17898__auto___23349 = arguments.length;
var i__17899__auto___23350 = (0);
while(true){
if((i__17899__auto___23350 < len__17898__auto___23349)){
args23279.push((arguments[i__17899__auto___23350]));

var G__23351 = (i__17899__auto___23350 + (1));
i__17899__auto___23350 = G__23351;
continue;
} else {
}
break;
}

var G__23281 = args23279.length;
switch (G__23281) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23279.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18865__auto___23353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___23353,out){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___23353,out){
return (function (state_23319){
var state_val_23320 = (state_23319[(1)]);
if((state_val_23320 === (7))){
var inst_23315 = (state_23319[(2)]);
var state_23319__$1 = state_23319;
var statearr_23321_23354 = state_23319__$1;
(statearr_23321_23354[(2)] = inst_23315);

(statearr_23321_23354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (1))){
var inst_23282 = (new Array(n));
var inst_23283 = inst_23282;
var inst_23284 = (0);
var state_23319__$1 = (function (){var statearr_23322 = state_23319;
(statearr_23322[(7)] = inst_23284);

(statearr_23322[(8)] = inst_23283);

return statearr_23322;
})();
var statearr_23323_23355 = state_23319__$1;
(statearr_23323_23355[(2)] = null);

(statearr_23323_23355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (4))){
var inst_23287 = (state_23319[(9)]);
var inst_23287__$1 = (state_23319[(2)]);
var inst_23288 = (inst_23287__$1 == null);
var inst_23289 = cljs.core.not.call(null,inst_23288);
var state_23319__$1 = (function (){var statearr_23324 = state_23319;
(statearr_23324[(9)] = inst_23287__$1);

return statearr_23324;
})();
if(inst_23289){
var statearr_23325_23356 = state_23319__$1;
(statearr_23325_23356[(1)] = (5));

} else {
var statearr_23326_23357 = state_23319__$1;
(statearr_23326_23357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (15))){
var inst_23309 = (state_23319[(2)]);
var state_23319__$1 = state_23319;
var statearr_23327_23358 = state_23319__$1;
(statearr_23327_23358[(2)] = inst_23309);

(statearr_23327_23358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (13))){
var state_23319__$1 = state_23319;
var statearr_23328_23359 = state_23319__$1;
(statearr_23328_23359[(2)] = null);

(statearr_23328_23359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (6))){
var inst_23284 = (state_23319[(7)]);
var inst_23305 = (inst_23284 > (0));
var state_23319__$1 = state_23319;
if(cljs.core.truth_(inst_23305)){
var statearr_23329_23360 = state_23319__$1;
(statearr_23329_23360[(1)] = (12));

} else {
var statearr_23330_23361 = state_23319__$1;
(statearr_23330_23361[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (3))){
var inst_23317 = (state_23319[(2)]);
var state_23319__$1 = state_23319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23319__$1,inst_23317);
} else {
if((state_val_23320 === (12))){
var inst_23283 = (state_23319[(8)]);
var inst_23307 = cljs.core.vec.call(null,inst_23283);
var state_23319__$1 = state_23319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23319__$1,(15),out,inst_23307);
} else {
if((state_val_23320 === (2))){
var state_23319__$1 = state_23319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23319__$1,(4),ch);
} else {
if((state_val_23320 === (11))){
var inst_23299 = (state_23319[(2)]);
var inst_23300 = (new Array(n));
var inst_23283 = inst_23300;
var inst_23284 = (0);
var state_23319__$1 = (function (){var statearr_23331 = state_23319;
(statearr_23331[(7)] = inst_23284);

(statearr_23331[(10)] = inst_23299);

(statearr_23331[(8)] = inst_23283);

return statearr_23331;
})();
var statearr_23332_23362 = state_23319__$1;
(statearr_23332_23362[(2)] = null);

(statearr_23332_23362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (9))){
var inst_23283 = (state_23319[(8)]);
var inst_23297 = cljs.core.vec.call(null,inst_23283);
var state_23319__$1 = state_23319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23319__$1,(11),out,inst_23297);
} else {
if((state_val_23320 === (5))){
var inst_23292 = (state_23319[(11)]);
var inst_23284 = (state_23319[(7)]);
var inst_23283 = (state_23319[(8)]);
var inst_23287 = (state_23319[(9)]);
var inst_23291 = (inst_23283[inst_23284] = inst_23287);
var inst_23292__$1 = (inst_23284 + (1));
var inst_23293 = (inst_23292__$1 < n);
var state_23319__$1 = (function (){var statearr_23333 = state_23319;
(statearr_23333[(11)] = inst_23292__$1);

(statearr_23333[(12)] = inst_23291);

return statearr_23333;
})();
if(cljs.core.truth_(inst_23293)){
var statearr_23334_23363 = state_23319__$1;
(statearr_23334_23363[(1)] = (8));

} else {
var statearr_23335_23364 = state_23319__$1;
(statearr_23335_23364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (14))){
var inst_23312 = (state_23319[(2)]);
var inst_23313 = cljs.core.async.close_BANG_.call(null,out);
var state_23319__$1 = (function (){var statearr_23337 = state_23319;
(statearr_23337[(13)] = inst_23312);

return statearr_23337;
})();
var statearr_23338_23365 = state_23319__$1;
(statearr_23338_23365[(2)] = inst_23313);

(statearr_23338_23365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (10))){
var inst_23303 = (state_23319[(2)]);
var state_23319__$1 = state_23319;
var statearr_23339_23366 = state_23319__$1;
(statearr_23339_23366[(2)] = inst_23303);

(statearr_23339_23366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23320 === (8))){
var inst_23292 = (state_23319[(11)]);
var inst_23283 = (state_23319[(8)]);
var tmp23336 = inst_23283;
var inst_23283__$1 = tmp23336;
var inst_23284 = inst_23292;
var state_23319__$1 = (function (){var statearr_23340 = state_23319;
(statearr_23340[(7)] = inst_23284);

(statearr_23340[(8)] = inst_23283__$1);

return statearr_23340;
})();
var statearr_23341_23367 = state_23319__$1;
(statearr_23341_23367[(2)] = null);

(statearr_23341_23367[(1)] = (2));


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
});})(c__18865__auto___23353,out))
;
return ((function (switch__18844__auto__,c__18865__auto___23353,out){
return (function() {
var cljs$core$async$state_machine__18845__auto__ = null;
var cljs$core$async$state_machine__18845__auto____0 = (function (){
var statearr_23345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23345[(0)] = cljs$core$async$state_machine__18845__auto__);

(statearr_23345[(1)] = (1));

return statearr_23345;
});
var cljs$core$async$state_machine__18845__auto____1 = (function (state_23319){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_23319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e23346){if((e23346 instanceof Object)){
var ex__18848__auto__ = e23346;
var statearr_23347_23368 = state_23319;
(statearr_23347_23368[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23369 = state_23319;
state_23319 = G__23369;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$state_machine__18845__auto__ = function(state_23319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18845__auto____1.call(this,state_23319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18845__auto____0;
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18845__auto____1;
return cljs$core$async$state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___23353,out))
})();
var state__18867__auto__ = (function (){var statearr_23348 = f__18866__auto__.call(null);
(statearr_23348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___23353);

return statearr_23348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___23353,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23370 = [];
var len__17898__auto___23444 = arguments.length;
var i__17899__auto___23445 = (0);
while(true){
if((i__17899__auto___23445 < len__17898__auto___23444)){
args23370.push((arguments[i__17899__auto___23445]));

var G__23446 = (i__17899__auto___23445 + (1));
i__17899__auto___23445 = G__23446;
continue;
} else {
}
break;
}

var G__23372 = args23370.length;
switch (G__23372) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23370.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18865__auto___23448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18865__auto___23448,out){
return (function (){
var f__18866__auto__ = (function (){var switch__18844__auto__ = ((function (c__18865__auto___23448,out){
return (function (state_23414){
var state_val_23415 = (state_23414[(1)]);
if((state_val_23415 === (7))){
var inst_23410 = (state_23414[(2)]);
var state_23414__$1 = state_23414;
var statearr_23416_23449 = state_23414__$1;
(statearr_23416_23449[(2)] = inst_23410);

(statearr_23416_23449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (1))){
var inst_23373 = [];
var inst_23374 = inst_23373;
var inst_23375 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23414__$1 = (function (){var statearr_23417 = state_23414;
(statearr_23417[(7)] = inst_23375);

(statearr_23417[(8)] = inst_23374);

return statearr_23417;
})();
var statearr_23418_23450 = state_23414__$1;
(statearr_23418_23450[(2)] = null);

(statearr_23418_23450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (4))){
var inst_23378 = (state_23414[(9)]);
var inst_23378__$1 = (state_23414[(2)]);
var inst_23379 = (inst_23378__$1 == null);
var inst_23380 = cljs.core.not.call(null,inst_23379);
var state_23414__$1 = (function (){var statearr_23419 = state_23414;
(statearr_23419[(9)] = inst_23378__$1);

return statearr_23419;
})();
if(inst_23380){
var statearr_23420_23451 = state_23414__$1;
(statearr_23420_23451[(1)] = (5));

} else {
var statearr_23421_23452 = state_23414__$1;
(statearr_23421_23452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (15))){
var inst_23404 = (state_23414[(2)]);
var state_23414__$1 = state_23414;
var statearr_23422_23453 = state_23414__$1;
(statearr_23422_23453[(2)] = inst_23404);

(statearr_23422_23453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (13))){
var state_23414__$1 = state_23414;
var statearr_23423_23454 = state_23414__$1;
(statearr_23423_23454[(2)] = null);

(statearr_23423_23454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (6))){
var inst_23374 = (state_23414[(8)]);
var inst_23399 = inst_23374.length;
var inst_23400 = (inst_23399 > (0));
var state_23414__$1 = state_23414;
if(cljs.core.truth_(inst_23400)){
var statearr_23424_23455 = state_23414__$1;
(statearr_23424_23455[(1)] = (12));

} else {
var statearr_23425_23456 = state_23414__$1;
(statearr_23425_23456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (3))){
var inst_23412 = (state_23414[(2)]);
var state_23414__$1 = state_23414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23414__$1,inst_23412);
} else {
if((state_val_23415 === (12))){
var inst_23374 = (state_23414[(8)]);
var inst_23402 = cljs.core.vec.call(null,inst_23374);
var state_23414__$1 = state_23414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23414__$1,(15),out,inst_23402);
} else {
if((state_val_23415 === (2))){
var state_23414__$1 = state_23414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23414__$1,(4),ch);
} else {
if((state_val_23415 === (11))){
var inst_23382 = (state_23414[(10)]);
var inst_23378 = (state_23414[(9)]);
var inst_23392 = (state_23414[(2)]);
var inst_23393 = [];
var inst_23394 = inst_23393.push(inst_23378);
var inst_23374 = inst_23393;
var inst_23375 = inst_23382;
var state_23414__$1 = (function (){var statearr_23426 = state_23414;
(statearr_23426[(11)] = inst_23392);

(statearr_23426[(7)] = inst_23375);

(statearr_23426[(12)] = inst_23394);

(statearr_23426[(8)] = inst_23374);

return statearr_23426;
})();
var statearr_23427_23457 = state_23414__$1;
(statearr_23427_23457[(2)] = null);

(statearr_23427_23457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (9))){
var inst_23374 = (state_23414[(8)]);
var inst_23390 = cljs.core.vec.call(null,inst_23374);
var state_23414__$1 = state_23414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23414__$1,(11),out,inst_23390);
} else {
if((state_val_23415 === (5))){
var inst_23375 = (state_23414[(7)]);
var inst_23382 = (state_23414[(10)]);
var inst_23378 = (state_23414[(9)]);
var inst_23382__$1 = f.call(null,inst_23378);
var inst_23383 = cljs.core._EQ_.call(null,inst_23382__$1,inst_23375);
var inst_23384 = cljs.core.keyword_identical_QMARK_.call(null,inst_23375,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23385 = (inst_23383) || (inst_23384);
var state_23414__$1 = (function (){var statearr_23428 = state_23414;
(statearr_23428[(10)] = inst_23382__$1);

return statearr_23428;
})();
if(cljs.core.truth_(inst_23385)){
var statearr_23429_23458 = state_23414__$1;
(statearr_23429_23458[(1)] = (8));

} else {
var statearr_23430_23459 = state_23414__$1;
(statearr_23430_23459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (14))){
var inst_23407 = (state_23414[(2)]);
var inst_23408 = cljs.core.async.close_BANG_.call(null,out);
var state_23414__$1 = (function (){var statearr_23432 = state_23414;
(statearr_23432[(13)] = inst_23407);

return statearr_23432;
})();
var statearr_23433_23460 = state_23414__$1;
(statearr_23433_23460[(2)] = inst_23408);

(statearr_23433_23460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (10))){
var inst_23397 = (state_23414[(2)]);
var state_23414__$1 = state_23414;
var statearr_23434_23461 = state_23414__$1;
(statearr_23434_23461[(2)] = inst_23397);

(statearr_23434_23461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23415 === (8))){
var inst_23382 = (state_23414[(10)]);
var inst_23374 = (state_23414[(8)]);
var inst_23378 = (state_23414[(9)]);
var inst_23387 = inst_23374.push(inst_23378);
var tmp23431 = inst_23374;
var inst_23374__$1 = tmp23431;
var inst_23375 = inst_23382;
var state_23414__$1 = (function (){var statearr_23435 = state_23414;
(statearr_23435[(7)] = inst_23375);

(statearr_23435[(14)] = inst_23387);

(statearr_23435[(8)] = inst_23374__$1);

return statearr_23435;
})();
var statearr_23436_23462 = state_23414__$1;
(statearr_23436_23462[(2)] = null);

(statearr_23436_23462[(1)] = (2));


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
});})(c__18865__auto___23448,out))
;
return ((function (switch__18844__auto__,c__18865__auto___23448,out){
return (function() {
var cljs$core$async$state_machine__18845__auto__ = null;
var cljs$core$async$state_machine__18845__auto____0 = (function (){
var statearr_23440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23440[(0)] = cljs$core$async$state_machine__18845__auto__);

(statearr_23440[(1)] = (1));

return statearr_23440;
});
var cljs$core$async$state_machine__18845__auto____1 = (function (state_23414){
while(true){
var ret_value__18846__auto__ = (function (){try{while(true){
var result__18847__auto__ = switch__18844__auto__.call(null,state_23414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18847__auto__;
}
break;
}
}catch (e23441){if((e23441 instanceof Object)){
var ex__18848__auto__ = e23441;
var statearr_23442_23463 = state_23414;
(statearr_23442_23463[(5)] = ex__18848__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18846__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23464 = state_23414;
state_23414 = G__23464;
continue;
} else {
return ret_value__18846__auto__;
}
break;
}
});
cljs$core$async$state_machine__18845__auto__ = function(state_23414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18845__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18845__auto____1.call(this,state_23414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18845__auto____0;
cljs$core$async$state_machine__18845__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18845__auto____1;
return cljs$core$async$state_machine__18845__auto__;
})()
;})(switch__18844__auto__,c__18865__auto___23448,out))
})();
var state__18867__auto__ = (function (){var statearr_23443 = f__18866__auto__.call(null);
(statearr_23443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18865__auto___23448);

return statearr_23443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18867__auto__);
});})(c__18865__auto___23448,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map