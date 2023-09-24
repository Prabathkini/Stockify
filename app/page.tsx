import { TabsDemo } from '@/components/market-tabs'
import StockCards from '@/components/stock-cards'

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <StockCards />
      <TabsDemo />
    </div>
  )
}
