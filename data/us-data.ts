export type Payment = {
  id: number
  stockName: string
  symbol: string
  suggestion: 'SELL' | 'BUY'
}

export const data: Payment[] = [
  {
    id: 1,
    suggestion: 'SELL',
    symbol: '^GDAXI',
    stockName: 'DAX (Deutscher Aktienindex)',
  },
  { id: 2, suggestion: 'BUY', symbol: 'AZN_L', stockName: 'AstraZeneca PLC' },
  { id: 3, suggestion: 'SELL', symbol: 'BN_PA', stockName: 'Danone' },
  {
    id: 4,
    suggestion: 'SELL',
    symbol: 'FME_DE',
    stockName: 'Fresenius Medical Care AG & Co. KGaA',
  },
  { id: 5, suggestion: 'SELL', symbol: 'HO_PA', stockName: 'Vonovia SE' },
  {
    id: 6,
    suggestion: 'BUY',
    symbol: 'UBI_PA',
    stockName: 'Unione di Banche Italiane S.p.A.',
  },
  { id: 7, suggestion: 'BUY', symbol: 'VIV_PA', stockName: 'Vivendi SA' },
  {
    id: 8,
    suggestion: 'SELL',
    symbol: '^GDAXI',
    stockName: 'DAX (Deutscher Aktienindex)',
  },
  { id: 9, suggestion: 'BUY', symbol: 'AZN_L', stockName: 'AstraZeneca PLC' },
  { id: 10, suggestion: 'SELL', symbol: 'BN_PA', stockName: 'Danone' },
  {
    id: 11,
    suggestion: 'SELL',
    symbol: 'CRM',
    stockName: 'Salesforce.com Inc.',
  },
  { id: 12, suggestion: 'SELL', symbol: 'DDOG', stockName: 'Datadog Inc.' },
  {
    id: 13,
    suggestion: 'SELL',
    symbol: 'DXC',
    stockName: 'DXC Technology Co.',
  },
  { id: 14, suggestion: 'SELL', symbol: 'EBAY', stockName: 'eBay Inc.' },
  {
    id: 15,
    suggestion: 'SELL',
    symbol: 'FIS',
    stockName: 'Fidelity National Information Services Inc.',
  },
  { id: 16, suggestion: 'BUY', symbol: 'GRMN', stockName: 'Garmin Ltd.' },
  {
    id: 17,
    suggestion: 'SELL',
    symbol: 'HAWK',
    stockName: 'Blackhawk Network Holdings Inc.',
  },
  {
    id: 18,
    suggestion: 'SELL',
    symbol: 'JNPR',
    stockName: 'Juniper Networks Inc.',
  },
  { id: 19, suggestion: 'SELL', symbol: 'MRNA', stockName: 'Moderna Inc.' },
  {
    id: 20,
    suggestion: 'SELL',
    symbol: 'MSFT',
    stockName: 'Microsoft Corporation',
  },
  { id: 21, suggestion: 'SELL', symbol: 'NFLX', stockName: 'Netflix Inc.' },
  {
    id: 22,
    suggestion: 'SELL',
    symbol: 'ORCL',
    stockName: 'Oracle Corporation',
  },
  {
    id: 23,
    suggestion: 'SELL',
    symbol: 'QCOM',
    stockName: 'Qualcomm Incorporated',
  },
  {
    id: 24,
    suggestion: 'BUY',
    symbol: 'UNH',
    stockName: 'UnitedHealth Group Inc.',
  },
]
