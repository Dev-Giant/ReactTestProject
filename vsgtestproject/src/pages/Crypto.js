import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { getCryptoData } from '../redux/actions/crypto';

export const Crypto = () => {
  const listCrypto = useSelector(state => state.cryptos);
  const [tableData, setTableData] = useState([])
  const { cryptos } = listCrypto;

  const dispatch = useDispatch();

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'baseSymbol', headerName: 'BasedCoin', width: 200 },
    { field: 'quoteSymbol', headerName: 'QuotedCoin', width: 200 },
    { field: 'rank', headerName: 'Rank', width: 200 },
    { field: 'priceUsd', headerName: 'Price', width: 200 }
  ]

  useEffect(() => {
    dispatch(getCryptoData());
  }, [dispatch]);
  
  useEffect(() => {
   setTableData(cryptos)
  }, [cryptos]);

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}