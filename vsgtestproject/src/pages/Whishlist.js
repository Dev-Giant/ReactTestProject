import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { getCryptoData } from '../redux/actions/crypto';

export const Whishlist = () => {
  const listCrypto = useSelector(state => state.cryptos);
  const { cryptos, loading, error } = listCrypto;

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCryptoData());
  }, [dispatch]);
  
  console.log(cryptos);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid {...cryptos} />
    </div>
  );
}