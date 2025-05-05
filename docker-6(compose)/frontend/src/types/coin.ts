export interface Coin {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  volume: number;
  marketCap: number;
  high: number;
  low: number;
  icon: string;
}

export interface CoinDetail extends Coin {
  chartData: number[];
}
