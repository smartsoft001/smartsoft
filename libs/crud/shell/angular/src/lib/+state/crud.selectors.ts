import {createFeatureSelector, createSelector} from "@ngrx/store";

export const getCrudState = (entity) => createFeatureSelector<any, any>(entity);

export const getCrudSelected = (entity) => createSelector(
    getCrudState(entity),
    (state) => state.selected
);

export const getCrudList = (entity) => createSelector(
    getCrudState(entity),
    (state) => state.list
);

export const getCrudTotalCount = (entity) => createSelector(
    getCrudState(entity),
    (state) => state.totalCount
);

export const getCrudLinks = (entity) => createSelector(
    getCrudState(entity),
    (state) => state.links
);

export const getCrudLoaded = (entity) => createSelector(
    getCrudState(entity),
    (state) => state.loaded
);

export const getCrudError = (entity) => createSelector(
    getCrudState(entity),
    (state) => state.error
);