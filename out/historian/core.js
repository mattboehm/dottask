// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('historian.core');
goog.require('cljs.core');
/**
 * The great library... store your stuff here.
 */
historian.core.alexandria = (function (){var G__12370 = (function (){var G__12371 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12371) : cljs.core.atom.call(null,G__12371));
})();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12370) : cljs.core.atom.call(null,G__12370));
})();
historian.core.get_library_atom = (function historian$core$get_library_atom(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.alexandria) : cljs.core.deref.call(null,historian.core.alexandria));
});
/**
 * What will happen in the future...
 */
historian.core.nostradamus = (function (){var G__12373 = (function (){var G__12374 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12374) : cljs.core.atom.call(null,G__12374));
})();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12373) : cljs.core.atom.call(null,G__12373));
})();
historian.core.get_prophecy_atom = (function historian$core$get_prophecy_atom(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.nostradamus) : cljs.core.deref.call(null,historian.core.nostradamus));
});
/**
 * Who should we record?
 */
historian.core.overseer = (function (){var G__12375 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12375) : cljs.core.atom.call(null,G__12375));
})();
historian.core.register_atom_BANG_ = (function historian$core$register_atom_BANG_(var_args){
var args12376 = [];
var len__5729__auto___12379 = arguments.length;
var i__5730__auto___12380 = (0);
while(true){
if((i__5730__auto___12380 < len__5729__auto___12379)){
args12376.push((arguments[i__5730__auto___12380]));

var G__12381 = (i__5730__auto___12380 + (1));
i__5730__auto___12380 = G__12381;
continue;
} else {
}
break;
}

var G__12378 = args12376.length;
switch (G__12378) {
case 2:
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12376.length)].join('')));

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
var map__12385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.overseer) : cljs.core.deref.call(null,historian.core.overseer)),k);
var map__12385__$1 = ((((!((map__12385 == null)))?((((map__12385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12385):map__12385);
var atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12385__$1,cljs.core.cst$kw$atom);
var passive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12385__$1,cljs.core.cst$kw$passive_QMARK_);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),cljs.core.cst$kw$passive_QMARK_,passive_QMARK_,cljs.core.cst$kw$key,k,cljs.core.cst$kw$timestamp,goog.now()], null);
});
historian.core.take_snapshots = (function historian$core$take_snapshots(){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(historian.core.snapshot,cljs.core.keys((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.overseer) : cljs.core.deref.call(null,historian.core.overseer))));
});
/**
 * Check if any non-passive snapshot is different.
 */
historian.core.different_from_QMARK_ = (function historian$core$different_from_QMARK_(new$,old){
var clean_maps = (function (p1__12387_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$passive_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__12387_SHARP_))){
return null;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__12387_SHARP_,cljs.core.cst$kw$timestamp);
}
});
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clean_maps,old),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clean_maps,new$));
});
historian.core.different_from_last_QMARK_ = (function historian$core$different_from_last_QMARK_(new$){
return historian.core.different_from_QMARK_(new$,cljs.core.peek((function (){var G__12389 = historian.core.get_library_atom();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12389) : cljs.core.deref.call(null,G__12389));
})()));
});
historian.core.save_snapshots_BANG_ = (function historian$core$save_snapshots_BANG_(snaps){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(historian.core.get_library_atom(),cljs.core.conj,snaps);
});
historian.core.save_if_different_BANG_ = (function historian$core$save_if_different_BANG_(snaps){
if(cljs.core.truth_(historian.core.different_from_last_QMARK_(snaps))){
historian.core.save_snapshots_BANG_(snaps);

var G__12392 = historian.core.get_prophecy_atom();
var G__12393 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12392,G__12393) : cljs.core.reset_BANG_.call(null,G__12392,G__12393));
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
var _STAR_record_active_STAR_12403 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{var seq__12404 = cljs.core.seq(snaps);
var chunk__12405 = null;
var count__12406 = (0);
var i__12407 = (0);
while(true){
if((i__12407 < count__12406)){
var s = chunk__12405.cljs$core$IIndexed$_nth$arity$2(null,i__12407);
var G__12408_12412 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.overseer) : cljs.core.deref.call(null,historian.core.overseer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$atom], null));
var G__12409_12413 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(s);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12408_12412,G__12409_12413) : cljs.core.reset_BANG_.call(null,G__12408_12412,G__12409_12413));

var G__12414 = seq__12404;
var G__12415 = chunk__12405;
var G__12416 = count__12406;
var G__12417 = (i__12407 + (1));
seq__12404 = G__12414;
chunk__12405 = G__12415;
count__12406 = G__12416;
i__12407 = G__12417;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12404);
if(temp__4425__auto__){
var seq__12404__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12404__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__12404__$1);
var G__12418 = cljs.core.chunk_rest(seq__12404__$1);
var G__12419 = c__5474__auto__;
var G__12420 = cljs.core.count(c__5474__auto__);
var G__12421 = (0);
seq__12404 = G__12418;
chunk__12405 = G__12419;
count__12406 = G__12420;
i__12407 = G__12421;
continue;
} else {
var s = cljs.core.first(seq__12404__$1);
var G__12410_12422 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.overseer) : cljs.core.deref.call(null,historian.core.overseer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$atom], null));
var G__12411_12423 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(s);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12410_12422,G__12411_12423) : cljs.core.reset_BANG_.call(null,G__12410_12422,G__12411_12423));

var G__12424 = cljs.core.next(seq__12404__$1);
var G__12425 = null;
var G__12426 = (0);
var G__12427 = (0);
seq__12404 = G__12424;
chunk__12405 = G__12425;
count__12406 = G__12426;
i__12407 = G__12427;
continue;
}
} else {
return null;
}
}
break;
}
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_12403;
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
var args12428 = [];
var len__5729__auto___12431 = arguments.length;
var i__5730__auto___12432 = (0);
while(true){
if((i__5730__auto___12432 < len__5729__auto___12431)){
args12428.push((arguments[i__5730__auto___12432]));

var G__12433 = (i__5730__auto___12432 + (1));
i__5730__auto___12432 = G__12433;
continue;
} else {
}
break;
}

var G__12430 = args12428.length;
switch (G__12430) {
case 0:
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12428.length)].join('')));

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
var args12435 = [];
var len__5729__auto___12438 = arguments.length;
var i__5730__auto___12439 = (0);
while(true){
if((i__5730__auto___12439 < len__5729__auto___12438)){
args12435.push((arguments[i__5730__auto___12439]));

var G__12440 = (i__5730__auto___12439 + (1));
i__5730__auto___12439 = G__12440;
continue;
} else {
}
break;
}

var G__12437 = args12435.length;
switch (G__12437) {
case 2:
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12435.length)].join('')));

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
var seq__12446 = cljs.core.seq(ks);
var chunk__12447 = null;
var count__12448 = (0);
var i__12449 = (0);
while(true){
if((i__12449 < count__12448)){
var k = chunk__12447.cljs$core$IIndexed$_nth$arity$2(null,i__12449);
historian.core.stop_record_BANG_(k);

var G__12450 = seq__12446;
var G__12451 = chunk__12447;
var G__12452 = count__12448;
var G__12453 = (i__12449 + (1));
seq__12446 = G__12450;
chunk__12447 = G__12451;
count__12448 = G__12452;
i__12449 = G__12453;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12446);
if(temp__4425__auto__){
var seq__12446__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12446__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__12446__$1);
var G__12454 = cljs.core.chunk_rest(seq__12446__$1);
var G__12455 = c__5474__auto__;
var G__12456 = cljs.core.count(c__5474__auto__);
var G__12457 = (0);
seq__12446 = G__12454;
chunk__12447 = G__12455;
count__12448 = G__12456;
i__12449 = G__12457;
continue;
} else {
var k = cljs.core.first(seq__12446__$1);
historian.core.stop_record_BANG_(k);

var G__12458 = cljs.core.next(seq__12446__$1);
var G__12459 = null;
var G__12460 = (0);
var G__12461 = (0);
seq__12446 = G__12458;
chunk__12447 = G__12459;
count__12448 = G__12460;
i__12449 = G__12461;
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
return historian.core.can_undo_QMARK__STAR_((function (){var G__12463 = historian.core.get_library_atom();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12463) : cljs.core.deref.call(null,G__12463));
})());
});
/**
 * Can we redo?
 */
historian.core.can_redo_QMARK_ = (function historian$core$can_redo_QMARK_(){
return historian.core.can_redo_QMARK__STAR_((function (){var G__12465 = historian.core.get_prophecy_atom();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12465) : cljs.core.deref.call(null,G__12465));
})());
});
historian.core.undo_BANG_ = (function historian$core$undo_BANG_(){
var alex = (function (){var G__12469 = historian.core.get_library_atom();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12469) : cljs.core.deref.call(null,G__12469));
})();
if(cljs.core.truth_(historian.core.can_undo_QMARK__STAR_(alex))){
historian.core.save_prophecies_BANG_(cljs.core.peek(alex));

return historian.core.restore_BANG_(cljs.core.peek((function (){var G__12470 = historian.core.get_library_atom();
var G__12471 = cljs.core.pop(alex);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12470,G__12471) : cljs.core.reset_BANG_.call(null,G__12470,G__12471));
})()));
} else {
return null;
}
});
historian.core.redo_BANG_ = (function historian$core$redo_BANG_(){
var nos = (function (){var G__12475 = historian.core.get_prophecy_atom();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12475) : cljs.core.deref.call(null,G__12475));
})();
if(cljs.core.truth_(historian.core.can_redo_QMARK__STAR_(nos))){
historian.core.save_snapshots_BANG_(cljs.core.peek(nos));

var G__12476_12478 = historian.core.get_prophecy_atom();
var G__12477_12479 = cljs.core.pop(nos);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12476_12478,G__12477_12479) : cljs.core.reset_BANG_.call(null,G__12476_12478,G__12477_12479));

return historian.core.restore_BANG_(cljs.core.peek(nos));
} else {
return null;
}
});
historian.core.clear_history_BANG_ = (function historian$core$clear_history_BANG_(){
var G__12484_12488 = historian.core.get_library_atom();
var G__12485_12489 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12484_12488,G__12485_12489) : cljs.core.reset_BANG_.call(null,G__12484_12488,G__12485_12489));

var G__12486 = historian.core.get_prophecy_atom();
var G__12487 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12486,G__12487) : cljs.core.reset_BANG_.call(null,G__12486,G__12487));
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
var len__5729__auto___12495 = arguments.length;
var i__5730__auto___12496 = (0);
while(true){
if((i__5730__auto___12496 < len__5729__auto___12495)){
args__5736__auto__.push((arguments[i__5730__auto___12496]));

var G__12497 = (i__5730__auto___12496 + (1));
i__5730__auto___12496 = G__12497;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,content){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$before_DASH_snaps__12490__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_take_DASH_snapshots)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_off_DASH_the_DASH_record),content)))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$after_DASH_snaps__12491__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_take_DASH_snapshots)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_different_DASH_from_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$after_DASH_snaps__12491__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$before_DASH_snaps__12490__auto__)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_overwrite_DASH_record_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$before_DASH_snaps__12490__auto__))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_trigger_DASH_record_BANG_)))))], 0)))))], 0)))))], 0))));
});

historian.core.with_single_before_and_after.cljs$lang$maxFixedArity = (2);

historian.core.with_single_before_and_after.cljs$lang$applyTo = (function (seq12492){
var G__12493 = cljs.core.first(seq12492);
var seq12492__$1 = cljs.core.next(seq12492);
var G__12494 = cljs.core.first(seq12492__$1);
var seq12492__$2 = cljs.core.next(seq12492__$1);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic(G__12493,G__12494,seq12492__$2);
});

return historian.core.with_single_before_and_after.cljs$lang$macro = true;
})()
);
