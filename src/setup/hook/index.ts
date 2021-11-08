import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/RootReducer';
import { AppDispatch } from '../redux/Store';

//useDispatch hook with types.
export const useAppDispatch = () => useDispatch<AppDispatch>();
//useSelector hook with types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;