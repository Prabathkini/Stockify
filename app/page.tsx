import { cn } from '@/lib/utils'
import Image from 'next/image'
import chart from '@/public/charts/small-chart.svg'

interface stockCardProps {
  name: string
  symbol: string
  value: number
  change: number
  logo: string
  background: string
}

const stockCards: stockCardProps[] = [
  {
    name: 'Nvidia',
    symbol: 'NVDA',
    change: 5.63,
    value: 203.65,
    background: '#A6F7E2',
    logo: 'https://res.cloudinary.com/dkid2yrh2/image/upload/v1695507704/nvidia_1_paeyjh.png',
  },
  {
    name: 'Meta',
    symbol: 'META',
    change: -4.44,
    value: 151.74,
    background: '#B79BFF',
    logo: 'https://res.cloudinary.com/dkid2yrh2/image/upload/v1695507704/meta-1_1_aqwvy7.png',
  },
  {
    name: 'Tesla',
    symbol: 'TSLA',
    change: 17.63,
    value: 177.9,
    background: '#FFE5A5',
    logo: 'https://res.cloudinary.com/dkid2yrh2/image/upload/v1695507704/tesla-motors-1_1_smz3vj.png',
  },
  {
    name: 'Apple',
    symbol: 'AAPL',
    change: 21.41,
    value: 145.93,
    background: '#C7FFA5',
    logo: 'https://res.cloudinary.com/dkid2yrh2/image/upload/v1695507704/Frame_1215_wtxtfi.png',
  },
]

export default function Home() {
  return (
    <div className="px-6 py-2">
      <div className="p-4 bg-white w-full rounded-lg drop-shadow space-y-2  ">
        <h1 className="font-semibold">My Stocks</h1>
        <div className="flex gap-4 justify-evenly overflow-x-auto w-full flex-wrap">
          {stockCards.map((card) => (
            <div
              style={{ backgroundColor: `${card.background}` }}
              className="p-4 w-[280px] h-[156px] rounded-md flex-shrink-0 flex flex-col gap-4"
            >
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Image
                    src={card.logo}
                    width={240}
                    height={240}
                    alt={`${card.name} Logo`}
                    className="h-8 w-8"
                  />
                  <h4 className="font-medium">{card.name}</h4>
                </div>
                <div className="flex flex-col">
                  <h5 className="text-center">{card.symbol}</h5>

                  {card.change >= 0 ? (
                    <h5 className="text-green-500">{'+' + card.change}</h5>
                  ) : (
                    <h5 className="text-red-500">{card.change}</h5>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h5 className="text-zinc-500">Current Value</h5>
                  <h4 className="text-lg font-semibold">${card.value}</h4>
                </div>
                <div className="flex flex-col justify-center">
                  <Image src={chart} width={98} height={24} alt="Chart" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
