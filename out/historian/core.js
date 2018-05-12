// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('historian.core');
goog.require('cljs.core');
/**
 * The great library... store your stuff here.
 */
historian.core.alexandria = (function (){var G__12365 = (function (){var G__12366 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12366) : cljs.core.atom.call(null,G__12366));
})();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12365) : cljs.core.atom.call(null,G__12365));
})();
historian.core.get_library_atom = (function historian$core$get_library_atom(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.alexandria) : cljs.core.deref.call(null,historian.core.alexandria));
});
/**
 * What will happen in the future...
 */
historian.core.nostradamus = (function (){var G__12368 = (function (){var G__12369 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12369) : cljs.core.atom.call(null,G__12369));
})();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12368) : cljs.core.atom.call(null,G__12368));
})();
historian.core.get_prophecy_atom = (function historian$core$get_prophecy_atom(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.nostradamus) : cljs.core.deref.call(null,historian.core.nostradamus));
});
/**
 * Who should we record?
 */
historian.core.overseer = (function (){var G__12370 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12370) : cljs.core.atom.call(null,G__12370));
})();
historian.core.register_atom_BANG_ = (function historian$core$register_atom_BANG_(var_args){
var args12371 = [];
var len__5729__auto___12374 = arguments.length;
var i__5730__auto___12375 = (0);
while(true){
if((i__5730__auto___12375 < len__5729__auto___12374)){
args12371.push((arguments[i__5730__auto___12375]));

var G__12376 = (i__5730__auto___12375 + (1));
i__5730__auto___12375 = G__12376;
continue;
} else {
}
break;
}

var G__12373 = args12371.length;
switch (G__12373) {
case 2:
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12371.length)].join('')));

}
});

historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,k){
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$3(atom,k,null);
});

historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom,k,passive_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(historian.core.overseer,cljs.core.assoc,k,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$atom,atom,cljs.core.cst$kw$passive_QMARK_,passive_QMARK_], null));
});

historian.core.register_atom_BANG_.cljs$lang$maxFixedArity = 3;
historian.core.de_register_atom_BANG_ = (function historian$core$de_register_atom_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(historian.core.overseer,cljs.core.dissoc,k);
});
historian.core.snapshot = (function historian$core$snapshot(k){
var map__12380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.overseer) : cljs.core.deref.call(null,historian.core.overseer)),k);
var map__12380__$1 = ((((!((map__12380 == null)))?((((map__12380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12380):map__12380);
var atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12380__$1,cljs.core.cst$kw$atom);
var passive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12380__$1,cljs.core.cst$kw$passive_QMARK_);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),cljs.core.cst$kw$passive_QMARK_,passive_QMARK_,cljs.core.cst$kw$key,k,cljs.core.cst$kw$timestamp,goog.now()], null);
});
historian.core.take_snapshots = (function historian$core$take_snapshots(){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(historian.core.snapshot,cljs.core.keys((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.overseer) : cljs.core.deref.call(null,historian.core.overseer))));
});
/**
 * Check if any non-passive snapshot is different.
 */
historian.core.different_from_QMARK_ = (function historian$core$different_from_QMARK_(new$,old){
var clean_maps = (function (p1__12382_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$passive_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__12382_SHARP_))){
return null;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__12382_SHARP_,cljs.core.cst$kw$timestamp);
}
});
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clean_maps,old),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clean_maps,new$));
});
historian.core.different_from_last_QMARK_ = (function historian$core$different_from_last_QMARK_(new$){
return historian.core.different_from_QMARK_(new$,cljs.core.peek((function (){var G__12384 = historian.core.get_library_atom();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12384) : cljs.core.deref.call(null,G__12384));
})()));
});
historian.core.save_snapshots_BANG_ = (function historian$core$save_snapshots_BANG_(snaps){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(historian.core.get_library_atom(),cljs.core.conj,snaps);
});
historian.core.save_if_different_BANG_ = (function historian$core$save_if_different_BANG_(snaps){
if(cljs.core.truth_(historian.core.different_from_last_QMARK_(snaps))){
historian.core.save_snapshots_BANG_(snaps);

var G__12387 = historian.core.get_prophecy_atom();
var G__12388 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12387,G__12388) : cljs.core.reset_BANG_.call(null,G__12387,G__12388));
} else {
return null;
}
});
historian.core.save_prophecies_BANG_ = (function historian$core$save_prophecies_BANG_(snaps){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(historian.core.get_prophecy_atom(),cljs.core.conj,snaps);
});
historian.core._STAR_record_active_STAR_ = true;
/**
 * Restore all the atoms being watched to a previous/different state.
 */
historian.core.restore_BANG_ = (function historian$core$restore_BANG_(snaps){
var _STAR_record_active_STAR_12398 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{var seq__12399 = cljs.core.seq(snaps);
var chunk__12400 = null;
var count__12401 = (0);
var i__12402 = (0);
while(true){
if((i__12402 < count__12401)){
var s = chunk__12400.cljs$core$IIndexed$_nth$arity$2(null,i__12402);
var G__12403_12407 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.overseer) : cljs.core.deref.call(null,historian.core.overseer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$atom], null));
var G__12404_12408 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(s);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12403_12407,G__12404_12408) : cljs.core.reset_BANG_.call(null,G__12403_12407,G__12404_12408));

var G__12409 = seq__12399;
var G__12410 = chunk__12400;
var G__12411 = count__12401;
var G__12412 = (i__12402 + (1));
seq__12399 = G__12409;
chunk__12400 = G__12410;
count__12401 = G__12411;
i__12402 = G__12412;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12399);
if(temp__4425__auto__){
var seq__12399__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12399__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__12399__$1);
var G__12413 = cljs.core.chunk_rest(seq__12399__$1);
var G__12414 = c__5474__auto__;
var G__12415 = cljs.core.count(c__5474__auto__);
var G__12416 = (0);
seq__12399 = G__12413;
chunk__12400 = G__12414;
count__12401 = G__12415;
i__12402 = G__12416;
continue;
} else {
var s = cljs.core.first(seq__12399__$1);
var G__12405_12417 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.overseer) : cljs.core.deref.call(null,historian.core.overseer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$atom], null));
var G__12406_12418 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(s);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12405_12417,G__12406_12418) : cljs.core.reset_BANG_.call(null,G__12405_12417,G__12406_12418));

var G__12419 = cljs.core.next(seq__12399__$1);
var G__12420 = null;
var G__12421 = (0);
var G__12422 = (0);
seq__12399 = G__12419;
chunk__12400 = G__12420;
count__12401 = G__12421;
i__12402 = G__12422;
continue;
}
} else {
return null;
}
}
break;
}
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_12398;
}});
historian.core.watch_BANG_ = (function historian$core$watch_BANG_(atm){
return cljs.core.add_watch(atm,cljs.core.cst$kw$historian$core_SLASH_historian_DASH_watch,(function (k,_,old_value,new_value){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_value,new_value)){
if(cljs.core.truth_(historian.core._STAR_record_active_STAR_)){
return historian.core.save_if_different_BANG_(historian.core.take_snapshots());
} else {
return null;
}
} else {
return null;
}
}));
});
historian.core.remove_watch_BANG_ = (function historian$core$remove_watch_BANG_(a){
return cljs.core.remove_watch(a,cljs.core.cst$kw$historian$core_SLASH_historian_DASH_watch);
});
historian.core.can_undo_QMARK__STAR_ = (function historian$core$can_undo_QMARK__STAR_(records){
if(cljs.core.next(records)){
return true;
} else {
return null;
}
});
historian.core.can_redo_QMARK__STAR_ = (function historian$core$can_redo_QMARK__STAR_(records){
if(cljs.core.truth_(cljs.core.first(records))){
return true;
} else {
return null;
}
});
/**
 * Trigger a record to history. The current state of at least one atom
 *   must be different from the previous one for the record to be
 *   included into history.
 */
historian.core.trigger_record_BANG_ = (function historian$core$trigger_record_BANG_(){
if(cljs.core.truth_(historian.core._STAR_record_active_STAR_)){
return historian.core.save_if_different_BANG_(historian.core.take_snapshots());
} else {
return null;
}
});
/**
 * Overwrite the last historic entry with a new one.
 */
historian.core.overwrite_record_BANG_ = (function historian$core$overwrite_record_BANG_(var_args){
var args12423 = [];
var len__5729__auto___12426 = arguments.length;
var i__5730__auto___12427 = (0);
while(true){
if((i__5730__auto___12427 < len__5729__auto___12426)){
args12423.push((arguments[i__5730__auto___12427]));

var G__12428 = (i__5730__auto___12427 + (1));
i__5730__auto___12427 = G__12428;
continue;
} else {
}
break;
}

var G__12425 = args12423.length;
switch (G__12425) {
case 0:
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12423.length)].join('')));

}
});

historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$1(historian.core.take_snapshots());
});

historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (snaps){
if(cljs.core.truth_(historian.core._STAR_record_active_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(historian.core.get_library_atom(),cljs.core.pop);

return historian.core.save_snapshots_BANG_(snaps);
} else {
return null;
}
});

historian.core.overwrite_record_BANG_.cljs$lang$maxFixedArity = 1;
/**
 * The library atom (where all records are kept to enable 'undo') will
 *   be replaced by the new-atom. Useful if you've already done some
 *   modifications to the new-atom (like added some watchers). Depending
 *   on where you use this function, you might want to fire a
 *   `trigger-record!' just after.
 *   
 *   Usually, one would also want to use `replace-prophecy!' in order to
 *   replace the 'redo' atom.
 */
historian.core.replace_library_BANG_ = (function historian$core$replace_library_BANG_(new_atom){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(historian.core.alexandria,new_atom) : cljs.core.reset_BANG_.call(null,historian.core.alexandria,new_atom));
});
/**
 * The prophecy atom (where all records are kept to enable 'redo')
 *   will be replaced by the new-atom. Useful if you've already done some
 *   modifications to the new-atom (like added some watchers).
 * 
 *   Usually used with `replace-library'.
 */
historian.core.replace_prophecy_BANG_ = (function historian$core$replace_prophecy_BANG_(new_atom){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(historian.core.nostradamus,new_atom) : cljs.core.reset_BANG_.call(null,historian.core.nostradamus,new_atom));
});
/**
 * Add the atom to the overseer watch. When any of the atom under its
 *   watch is modified, it triggers a save of every atom to history (if
 *   any of the atom is different form the last historic state). Return
 *   the atom.
 *   
 *   If `passive?' is true, the atom will NOT trigger any new save and
 *   will only be saved when another atom under watch is modified.
 */
historian.core.record_BANG_ = (function historian$core$record_BANG_(var_args){
var args12430 = [];
var len__5729__auto___12433 = arguments.length;
var i__5730__auto___12434 = (0);
while(true){
if((i__5730__auto___12434 < len__5729__auto___12433)){
args12430.push((arguments[i__5730__auto___12434]));

var G__12435 = (i__5730__auto___12434 + (1));
i__5730__auto___12434 = G__12435;
continue;
} else {
}
break;
}

var G__12432 = args12430.length;
switch (G__12432) {
case 2:
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12430.length)].join('')));

}
});

historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atm,k){
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$3(atm,k,null);
});

historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atm,k,passive_QMARK_){
historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$3(atm,k,passive_QMARK_);

if(cljs.core.truth_(passive_QMARK_)){
} else {
historian.core.watch_BANG_(atm);
}

historian.core.trigger_record_BANG_();

return atm;
});

historian.core.record_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Remove the atom associated to this key from the overseer watch.
 *   This atom will no longer be watched, nor its state saved to
 *   history.
 */
historian.core.stop_record_BANG_ = (function historian$core$stop_record_BANG_(k){
historian.core.remove_watch_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.overseer) : cljs.core.deref.call(null,historian.core.overseer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$atom], null)));

return historian.core.de_register_atom_BANG_(k);
});
/**
 * Remove all the atoms from the overseer watch. The atoms will no
 *   longer be watched, nor any of their state saved to history.
 */
historian.core.stop_all_records_BANG_ = (function historian$core$stop_all_records_BANG_(){
var ks = cljs.core.keys((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.overseer) : cljs.core.deref.call(null,historian.core.overseer)));
var seq__12441 = cljs.core.seq(ks);
var chunk__12442 = null;
var count__12443 = (0);
var i__12444 = (0);
while(true){
if((i__12444 < count__12443)){
var k = chunk__12442.cljs$core$IIndexed$_nth$arity$2(null,i__12444);
historian.core.stop_record_BANG_(k);

var G__12445 = seq__12441;
var G__12446 = chunk__12442;
var G__12447 = count__12443;
var G__12448 = (i__12444 + (1));
seq__12441 = G__12445;
chunk__12442 = G__12446;
count__12443 = G__12447;
i__12444 = G__12448;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12441);
if(temp__4425__auto__){
var seq__12441__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12441__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__12441__$1);
var G__12449 = cljs.core.chunk_rest(seq__12441__$1);
var G__12450 = c__5474__auto__;
var G__12451 = cljs.core.count(c__5474__auto__);
var G__12452 = (0);
seq__12441 = G__12449;
chunk__12442 = G__12450;
count__12443 = G__12451;
i__12444 = G__12452;
continue;
} else {
var k = cljs.core.first(seq__12441__$1);
historian.core.stop_record_BANG_(k);

var G__12453 = cljs.core.next(seq__12441__$1);
var G__12454 = null;
var G__12455 = (0);
var G__12456 = (0);
seq__12441 = G__12453;
chunk__12442 = G__12454;
count__12443 = G__12455;
i__12444 = G__12456;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Do we have enough history to undo?
 */
historian.core.can_undo_QMARK_ = (function historian$core$can_undo_QMARK_(){
return historian.core.can_undo_QMARK__STAR_((function (){var G__12458 = historian.core.get_library_atom();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12458) : cljs.core.deref.call(null,G__12458));
})());
});
/**
 * Can we redo?
 */
historian.core.can_redo_QMARK_ = (function historian$core$can_redo_QMARK_(){
return historian.core.can_redo_QMARK__STAR_((function (){var G__12460 = historian.core.get_prophecy_atom();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12460) : cljs.core.deref.call(null,G__12460));
})());
});
historian.core.undo_BANG_ = (function historian$core$undo_BANG_(){
var alex = (function (){var G__12464 = historian.core.get_library_atom();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12464) : cljs.core.deref.call(null,G__12464));
})();
if(cljs.core.truth_(historian.core.can_undo_QMARK__STAR_(alex))){
historian.core.save_prophecies_BANG_(cljs.core.peek(alex));

return historian.core.restore_BANG_(cljs.core.peek((function (){var G__12465 = historian.core.get_library_atom();
var G__12466 = cljs.core.pop(alex);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12465,G__12466) : cljs.core.reset_BANG_.call(null,G__12465,G__12466));
})()));
} else {
return null;
}
});
historian.core.redo_BANG_ = (function historian$core$redo_BANG_(){
var nos = (function (){var G__12470 = historian.core.get_prophecy_atom();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12470) : cljs.core.deref.call(null,G__12470));
})();
if(cljs.core.truth_(historian.core.can_redo_QMARK__STAR_(nos))){
historian.core.save_snapshots_BANG_(cljs.core.peek(nos));

var G__12471_12473 = historian.core.get_prophecy_atom();
var G__12472_12474 = cljs.core.pop(nos);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12471_12473,G__12472_12474) : cljs.core.reset_BANG_.call(null,G__12471_12473,G__12472_12474));

return historian.core.restore_BANG_(cljs.core.peek(nos));
} else {
return null;
}
});
historian.core.clear_history_BANG_ = (function historian$core$clear_history_BANG_(){
var G__12479_12483 = historian.core.get_library_atom();
var G__12480_12484 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12479_12483,G__12480_12484) : cljs.core.reset_BANG_.call(null,G__12479_12483,G__12480_12484));

var G__12481 = historian.core.get_prophecy_atom();
var G__12482 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12481,G__12482) : cljs.core.reset_BANG_.call(null,G__12481,G__12482));
});
cljs.core.cst$kw$clj.cljs$core$IFn$_invoke$arity$1((function (){
/**
 * Deactivate the watches write to history and execute the body. If
 *   any non-passive atom is modified, replace the last history with a
 *   snapshot taken just before executing the body and then take another
 *   snapshot.
 */
historian.core.with_single_before_and_after = (function historian$core$with_single_before_and_after(var_args){
var args__5736__auto__ = [];
var len__5729__auto___12490 = arguments.length;
var i__5730__auto___12491 = (0);
while(true){
if((i__5730__auto___12491 < len__5729__auto___12490)){
args__5736__auto__.push((arguments[i__5730__auto___12491]));

var G__12492 = (i__5730__auto___12491 + (1));
i__5730__auto___12491 = G__12492;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,content){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$before_DASH_snaps__12485__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_take_DASH_snapshots)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_off_DASH_the_DASH_record),content)))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$after_DASH_snaps__12486__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_take_DASH_snapshots)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_different_DASH_from_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$after_DASH_snaps__12486__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$before_DASH_snaps__12485__auto__)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_overwrite_DASH_record_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$before_DASH_snaps__12485__auto__))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_trigger_DASH_record_BANG_)))))], 0)))))], 0)))))], 0))));
});

historian.core.with_single_before_and_after.cljs$lang$maxFixedArity = (2);

historian.core.with_single_before_and_after.cljs$lang$applyTo = (function (seq12487){
var G__12488 = cljs.core.first(seq12487);
var seq12487__$1 = cljs.core.next(seq12487);
var G__12489 = cljs.core.first(seq12487__$1);
var seq12487__$2 = cljs.core.next(seq12487__$1);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic(G__12488,G__12489,seq12487__$2);
});

return historian.core.with_single_before_and_after.cljs$lang$macro = true;
})()
);
