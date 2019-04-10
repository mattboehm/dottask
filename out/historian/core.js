// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('historian.core');
goog.require('cljs.core');
/**
 * The great library... store your stuff here.
 */
historian.core.alexandria = (function (){var G__13169 = (function (){var G__13170 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13170) : cljs.core.atom.call(null,G__13170));
})();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13169) : cljs.core.atom.call(null,G__13169));
})();
historian.core.get_library_atom = (function historian$core$get_library_atom(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.alexandria) : cljs.core.deref.call(null,historian.core.alexandria));
});
/**
 * What will happen in the future...
 */
historian.core.nostradamus = (function (){var G__13172 = (function (){var G__13173 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13173) : cljs.core.atom.call(null,G__13173));
})();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13172) : cljs.core.atom.call(null,G__13172));
})();
historian.core.get_prophecy_atom = (function historian$core$get_prophecy_atom(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.nostradamus) : cljs.core.deref.call(null,historian.core.nostradamus));
});
/**
 * Who should we record?
 */
historian.core.overseer = (function (){var G__13174 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13174) : cljs.core.atom.call(null,G__13174));
})();
historian.core.register_atom_BANG_ = (function historian$core$register_atom_BANG_(var_args){
var args13175 = [];
var len__5729__auto___13178 = arguments.length;
var i__5730__auto___13179 = (0);
while(true){
if((i__5730__auto___13179 < len__5729__auto___13178)){
args13175.push((arguments[i__5730__auto___13179]));

var G__13180 = (i__5730__auto___13179 + (1));
i__5730__auto___13179 = G__13180;
continue;
} else {
}
break;
}

var G__13177 = args13175.length;
switch (G__13177) {
case 2:
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13175.length)].join('')));

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
var map__13184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.overseer) : cljs.core.deref.call(null,historian.core.overseer)),k);
var map__13184__$1 = ((((!((map__13184 == null)))?((((map__13184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13184):map__13184);
var atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13184__$1,cljs.core.cst$kw$atom);
var passive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13184__$1,cljs.core.cst$kw$passive_QMARK_);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),cljs.core.cst$kw$passive_QMARK_,passive_QMARK_,cljs.core.cst$kw$key,k,cljs.core.cst$kw$timestamp,goog.now()], null);
});
historian.core.take_snapshots = (function historian$core$take_snapshots(){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(historian.core.snapshot,cljs.core.keys((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.overseer) : cljs.core.deref.call(null,historian.core.overseer))));
});
/**
 * Check if any non-passive snapshot is different.
 */
historian.core.different_from_QMARK_ = (function historian$core$different_from_QMARK_(new$,old){
var clean_maps = (function (p1__13186_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$passive_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__13186_SHARP_))){
return null;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__13186_SHARP_,cljs.core.cst$kw$timestamp);
}
});
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clean_maps,old),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clean_maps,new$));
});
historian.core.different_from_last_QMARK_ = (function historian$core$different_from_last_QMARK_(new$){
return historian.core.different_from_QMARK_(new$,cljs.core.peek((function (){var G__13188 = historian.core.get_library_atom();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13188) : cljs.core.deref.call(null,G__13188));
})()));
});
historian.core.save_snapshots_BANG_ = (function historian$core$save_snapshots_BANG_(snaps){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(historian.core.get_library_atom(),cljs.core.conj,snaps);
});
historian.core.save_if_different_BANG_ = (function historian$core$save_if_different_BANG_(snaps){
if(cljs.core.truth_(historian.core.different_from_last_QMARK_(snaps))){
historian.core.save_snapshots_BANG_(snaps);

var G__13191 = historian.core.get_prophecy_atom();
var G__13192 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13191,G__13192) : cljs.core.reset_BANG_.call(null,G__13191,G__13192));
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
var _STAR_record_active_STAR_13202 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{var seq__13203 = cljs.core.seq(snaps);
var chunk__13204 = null;
var count__13205 = (0);
var i__13206 = (0);
while(true){
if((i__13206 < count__13205)){
var s = chunk__13204.cljs$core$IIndexed$_nth$arity$2(null,i__13206);
var G__13207_13211 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.overseer) : cljs.core.deref.call(null,historian.core.overseer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$atom], null));
var G__13208_13212 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(s);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13207_13211,G__13208_13212) : cljs.core.reset_BANG_.call(null,G__13207_13211,G__13208_13212));

var G__13213 = seq__13203;
var G__13214 = chunk__13204;
var G__13215 = count__13205;
var G__13216 = (i__13206 + (1));
seq__13203 = G__13213;
chunk__13204 = G__13214;
count__13205 = G__13215;
i__13206 = G__13216;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13203);
if(temp__4425__auto__){
var seq__13203__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13203__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__13203__$1);
var G__13217 = cljs.core.chunk_rest(seq__13203__$1);
var G__13218 = c__5474__auto__;
var G__13219 = cljs.core.count(c__5474__auto__);
var G__13220 = (0);
seq__13203 = G__13217;
chunk__13204 = G__13218;
count__13205 = G__13219;
i__13206 = G__13220;
continue;
} else {
var s = cljs.core.first(seq__13203__$1);
var G__13209_13221 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(historian.core.overseer) : cljs.core.deref.call(null,historian.core.overseer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$atom], null));
var G__13210_13222 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(s);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13209_13221,G__13210_13222) : cljs.core.reset_BANG_.call(null,G__13209_13221,G__13210_13222));

var G__13223 = cljs.core.next(seq__13203__$1);
var G__13224 = null;
var G__13225 = (0);
var G__13226 = (0);
seq__13203 = G__13223;
chunk__13204 = G__13224;
count__13205 = G__13225;
i__13206 = G__13226;
continue;
}
} else {
return null;
}
}
break;
}
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_13202;
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
var args13227 = [];
var len__5729__auto___13230 = arguments.length;
var i__5730__auto___13231 = (0);
while(true){
if((i__5730__auto___13231 < len__5729__auto___13230)){
args13227.push((arguments[i__5730__auto___13231]));

var G__13232 = (i__5730__auto___13231 + (1));
i__5730__auto___13231 = G__13232;
continue;
} else {
}
break;
}

var G__13229 = args13227.length;
switch (G__13229) {
case 0:
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13227.length)].join('')));

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
var args13234 = [];
var len__5729__auto___13237 = arguments.length;
var i__5730__auto___13238 = (0);
while(true){
if((i__5730__auto___13238 < len__5729__auto___13237)){
args13234.push((arguments[i__5730__auto___13238]));

var G__13239 = (i__5730__auto___13238 + (1));
i__5730__auto___13238 = G__13239;
continue;
} else {
}
break;
}

var G__13236 = args13234.length;
switch (G__13236) {
case 2:
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13234.length)].join('')));

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
var seq__13245 = cljs.core.seq(ks);
var chunk__13246 = null;
var count__13247 = (0);
var i__13248 = (0);
while(true){
if((i__13248 < count__13247)){
var k = chunk__13246.cljs$core$IIndexed$_nth$arity$2(null,i__13248);
historian.core.stop_record_BANG_(k);

var G__13249 = seq__13245;
var G__13250 = chunk__13246;
var G__13251 = count__13247;
var G__13252 = (i__13248 + (1));
seq__13245 = G__13249;
chunk__13246 = G__13250;
count__13247 = G__13251;
i__13248 = G__13252;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13245);
if(temp__4425__auto__){
var seq__13245__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13245__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__13245__$1);
var G__13253 = cljs.core.chunk_rest(seq__13245__$1);
var G__13254 = c__5474__auto__;
var G__13255 = cljs.core.count(c__5474__auto__);
var G__13256 = (0);
seq__13245 = G__13253;
chunk__13246 = G__13254;
count__13247 = G__13255;
i__13248 = G__13256;
continue;
} else {
var k = cljs.core.first(seq__13245__$1);
historian.core.stop_record_BANG_(k);

var G__13257 = cljs.core.next(seq__13245__$1);
var G__13258 = null;
var G__13259 = (0);
var G__13260 = (0);
seq__13245 = G__13257;
chunk__13246 = G__13258;
count__13247 = G__13259;
i__13248 = G__13260;
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
return historian.core.can_undo_QMARK__STAR_((function (){var G__13262 = historian.core.get_library_atom();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13262) : cljs.core.deref.call(null,G__13262));
})());
});
/**
 * Can we redo?
 */
historian.core.can_redo_QMARK_ = (function historian$core$can_redo_QMARK_(){
return historian.core.can_redo_QMARK__STAR_((function (){var G__13264 = historian.core.get_prophecy_atom();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13264) : cljs.core.deref.call(null,G__13264));
})());
});
historian.core.undo_BANG_ = (function historian$core$undo_BANG_(){
var alex = (function (){var G__13268 = historian.core.get_library_atom();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13268) : cljs.core.deref.call(null,G__13268));
})();
if(cljs.core.truth_(historian.core.can_undo_QMARK__STAR_(alex))){
historian.core.save_prophecies_BANG_(cljs.core.peek(alex));

return historian.core.restore_BANG_(cljs.core.peek((function (){var G__13269 = historian.core.get_library_atom();
var G__13270 = cljs.core.pop(alex);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13269,G__13270) : cljs.core.reset_BANG_.call(null,G__13269,G__13270));
})()));
} else {
return null;
}
});
historian.core.redo_BANG_ = (function historian$core$redo_BANG_(){
var nos = (function (){var G__13274 = historian.core.get_prophecy_atom();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13274) : cljs.core.deref.call(null,G__13274));
})();
if(cljs.core.truth_(historian.core.can_redo_QMARK__STAR_(nos))){
historian.core.save_snapshots_BANG_(cljs.core.peek(nos));

var G__13275_13277 = historian.core.get_prophecy_atom();
var G__13276_13278 = cljs.core.pop(nos);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13275_13277,G__13276_13278) : cljs.core.reset_BANG_.call(null,G__13275_13277,G__13276_13278));

return historian.core.restore_BANG_(cljs.core.peek(nos));
} else {
return null;
}
});
historian.core.clear_history_BANG_ = (function historian$core$clear_history_BANG_(){
var G__13283_13287 = historian.core.get_library_atom();
var G__13284_13288 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13283_13287,G__13284_13288) : cljs.core.reset_BANG_.call(null,G__13283_13287,G__13284_13288));

var G__13285 = historian.core.get_prophecy_atom();
var G__13286 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13285,G__13286) : cljs.core.reset_BANG_.call(null,G__13285,G__13286));
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
var len__5729__auto___13294 = arguments.length;
var i__5730__auto___13295 = (0);
while(true){
if((i__5730__auto___13295 < len__5729__auto___13294)){
args__5736__auto__.push((arguments[i__5730__auto___13295]));

var G__13296 = (i__5730__auto___13295 + (1));
i__5730__auto___13295 = G__13296;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,content){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$before_DASH_snaps__13289__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_take_DASH_snapshots)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_off_DASH_the_DASH_record),content)))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$after_DASH_snaps__13290__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_take_DASH_snapshots)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_different_DASH_from_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$after_DASH_snaps__13290__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$before_DASH_snaps__13289__auto__)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_overwrite_DASH_record_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$before_DASH_snaps__13289__auto__))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_trigger_DASH_record_BANG_)))))], 0)))))], 0)))))], 0))));
});

historian.core.with_single_before_and_after.cljs$lang$maxFixedArity = (2);

historian.core.with_single_before_and_after.cljs$lang$applyTo = (function (seq13291){
var G__13292 = cljs.core.first(seq13291);
var seq13291__$1 = cljs.core.next(seq13291);
var G__13293 = cljs.core.first(seq13291__$1);
var seq13291__$2 = cljs.core.next(seq13291__$1);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic(G__13292,G__13293,seq13291__$2);
});

return historian.core.with_single_before_and_after.cljs$lang$macro = true;
})()
);
