import React from 'react';
import { CoinDetail } from '../../types/coin';
import CoinItem from './CoinItem';

interface CoinListProps {
  coins: CoinDetail[];
}

const CoinList: React.FC<CoinListProps> = ({ coins }) => {
  return (
    <div className="space-y-3 mb-8" id="coinList">
      {coins.map((coin) => (
        <CoinItem key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default CoinList;
