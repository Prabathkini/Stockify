export type Payment = {
  id: number
  stockName: string
  symbol: string
  suggestion: 'SELL' | 'BUY' | 'STABLE'
}

export const data: Payment[] = [
  {
      id: 1,
      suggestion: "BUY",
      symbol: "^FCHI",
      stockName: "CAC 40"
  },
  {
      id: 2,
      suggestion: "BUY",
      symbol: "^GDAXI",
      stockName: "DAX"
  },
  {
      id: 3,
      suggestion: "STABLE",
      symbol: "1COV_DE",
      stockName: "1&1 AG"
  },
  {
      id: 4,
      suggestion: "STABLE",
      symbol: "ACA_PA",
      stockName: "Crédit Agricole SA"
  },
  {
      id: 5,
      suggestion: "STABLE",
      symbol: "AC_PA",
      stockName: "Accor SA"
  },
  {
      id: 6,
      suggestion: "STABLE",
      symbol: "ADP_PA",
      stockName: "Airbus SE"
  },
  {
      id: 7,
      suggestion: "STABLE",
      symbol: "ADS_DE",
      stockName: "Adidas AG"
  },
  {
      id: 8,
      suggestion: "SELL",
      symbol: "AF_PA",
      stockName: "Air France-KLM SA"
  },
  {
      id: 9,
      suggestion: "STABLE",
      symbol: "AFX_DE",
      stockName: "Aareal Bank AG"
  },
  {
      id: 10,
      suggestion: "STABLE",
      symbol: "AI_PA",
      stockName: "Air Liquide SA"
  },
  {
      id: 11,
      suggestion: "STABLE",
      symbol: "AIR_PA",
      stockName: "Airbus SE"
  },
  {
      id: 12,
      suggestion: "STABLE",
      symbol: "AIXA_DE",
      stockName: "Aixtron SE"
  },
  {
      id: 13,
      suggestion: "STABLE",
      symbol: "ALO_PA",
      stockName: "Alstom SA"
  },
  {
      id: 14,
      suggestion: "STABLE",
      symbol: "ALV_DE",
      stockName: "Allianz SE"
  },
  {
      id: 15,
      suggestion: "STABLE",
      symbol: "ASML_AS",
      stockName: "ASML Holding NV"
  },
  {
      id: 16,
      suggestion: "STABLE",
      symbol: "ATO_PA",
      stockName: "Atos SE"
  }
]
    
      