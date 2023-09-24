export type Payment = {
  id: number
  stockName: string
  symbol: string
  suggestion: 'SHORT' | 'LONG'
}

export const data: Payment[] = [
  {
    id: 1,
    suggestion: 'SHORT',
    symbol: '^GDAXI',
    stockName: 'DAX (Deutscher Aktienindex)',
  },
  { id: 2, suggestion: 'LONG', symbol: 'AZN_L', stockName: 'AstraZeneca PLC' },
  { id: 3, suggestion: 'SHORT', symbol: 'BN_PA', stockName: 'Danone' },
  {
    id: 4,
    suggestion: 'SHORT',
    symbol: 'FME_DE',
    stockName: 'Fresenius Medical Care AG & Co. KGaA',
  },
  { id: 5, suggestion: 'SHORT', symbol: 'HO_PA', stockName: 'Vonovia SE' },
  {
    id: 6,
    suggestion: 'LONG',
    symbol: 'UBI_PA',
    stockName: 'Unione di Banche Italiane S.p.A.',
  },
  { id: 7, suggestion: 'LONG', symbol: 'VIV_PA', stockName: 'Vivendi SA' },
  {
    id: 8,
    suggestion: 'SHORT',
    symbol: '^GDAXI',
    stockName: 'DAX (Deutscher Aktienindex)',
  },
  { id: 9, suggestion: 'LONG', symbol: 'AZN_L', stockName: 'AstraZeneca PLC' },
  { id: 10, suggestion: 'SHORT', symbol: 'BN_PA', stockName: 'Danone' },
  {
    id: 11,
    suggestion: 'SHORT',
    symbol: 'CRM',
    stockName: 'Salesforce.com Inc.',
  },
  { id: 12, suggestion: 'SHORT', symbol: 'DDOG', stockName: 'Datadog Inc.' },
  {
    id: 13,
    suggestion: 'SHORT',
    symbol: 'DXC',
    stockName: 'DXC Technology Co.',
  },
  { id: 14, suggestion: 'SHORT', symbol: 'EBAY', stockName: 'eBay Inc.' },
  {
    id: 15,
    suggestion: 'SHORT',
    symbol: 'FIS',
    stockName: 'Fidelity National Information Services Inc.',
  },
  { id: 16, suggestion: 'LONG', symbol: 'GRMN', stockName: 'Garmin Ltd.' },
  {
    id: 17,
    suggestion: 'SHORT',
    symbol: 'HAWK',
    stockName: 'Blackhawk Network Holdings Inc.',
  },
  {
    id: 18,
    suggestion: 'SHORT',
    symbol: 'JNPR',
    stockName: 'Juniper Networks Inc.',
  },
  { id: 19, suggestion: 'SHORT', symbol: 'MRNA', stockName: 'Moderna Inc.' },
  {
    id: 20,
    suggestion: 'SHORT',
    symbol: 'MSFT',
    stockName: 'Microsoft Corporation',
  },
  { id: 21, suggestion: 'SHORT', symbol: 'NFLX', stockName: 'Netflix Inc.' },
  {
    id: 22,
    suggestion: 'SHORT',
    symbol: 'ORCL',
    stockName: 'Oracle Corporation',
  },
  {
    id: 23,
    suggestion: 'SHORT',
    symbol: 'QCOM',
    stockName: 'Qualcomm Incorporated',
  },
  {
    id: 24,
    suggestion: 'LONG',
    symbol: 'UNH',
    stockName: 'UnitedHealth Group Inc.',
  },
]
