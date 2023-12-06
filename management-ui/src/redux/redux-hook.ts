import { createSelector } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//Selector
export const popupSelector = (state: RootState) => state.popup.status;
export const connectorSelector = (state: RootState) => state.connector;
export const appSelector = (state: RootState) => state.app;
export const consumerSelector = (state: RootState) => state.consumer;
