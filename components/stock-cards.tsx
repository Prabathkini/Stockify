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
export default function StockCards() {
  return (
    <div className="p-4 bg-white dark:bg-muted w-full rounded-lg drop-shadow space-y-2  ">
      <h1 className="font-semibold">My Stocks</h1>
      <div className="flex gap-4   overflow-x-auto w-full flex-wrap">
        {stockCards.map((card) => (
          <div
            key={card.symbol}
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
                <h4 className="font-medium dark:text-card">{card.name}</h4>
              </div>
              <div className="flex flex-col">
                <h5 className="text-center dark:text-card">{card.symbol}</h5>

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
                <h4 className="text-lg font-semibold dark:text-card">${card.value}</h4>
              </div>
              <div className="flex flex-col justify-center">
                <svg
                  width="79"
                  height="25"
                  viewBox="0 0 79 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="invert"
                >
                  <path
                    d="M2.50438 6.59999H1L1 25L79 25V19L76.7434 14.4402L75.8469 16.6802H74.7959L72.6938 14.4402L71.2224 16.6802L66.808 16.6804L64.4958 14.4403L63.2345 11.0797L61.3988 12.7602L59.744 14.4402L59.2272 17L58.1761 16.6802H56.8856L54.4786 8.84021L53.7264 11.0802L52.5229 8.84021L51.6203 12.7602L49.2133 6.04021L47.8594 8.84021H45.3019L42.594 3.24022L40.9392 6.04021L38.7599 4.36L36.1045 8.83999L34.3972 0.999999L33.1616 8.83999L24.9196 12.2L23.8666 9.95998H22.8135L20.4065 6.59999H17.9995L17.0969 9.95998L13.4863 3.23999L11.982 12.2L11.2298 8.83999H9.57496L8.07058 0.999999L6.5662 7.71999L5.81401 4.36H3.85832L2.50438 6.59999Z"
                    fill="url(#paint0_linear_0_44)"
                    fill-opacity="0.16"
                  />
                  <path
                    d="M1 6.59999H2.50438L3.85832 4.36H5.81401L6.5662 7.71999L8.07058 0.999999L9.57496 8.83999H11.2298L11.982 12.2L13.4863 3.23999L17.0969 9.95998L17.9995 6.59999H20.4065L22.8135 9.95998H23.8666L24.9196 12.2L33.1616 8.83999L34.3972 0.999999L36.1045 8.83999L38.7599 4.36L40.9392 6.04021L42.594 3.24022L45.3019 8.84021H47.8594L49.2133 6.04021L51.6203 12.7602L52.5229 8.84021L53.7264 11.0802L54.4786 8.84021L56.8856 16.6802H58.1761L59.2272 17L59.744 14.4402L61.3988 12.7602L63.2345 11.0797L64.4958 14.4403L66.808 16.6804L71.2224 16.6802L72.6938 14.4402L74.7959 16.6802H75.8469L76.7434 14.4402L78.5 19"
                    stroke="white"
                    stroke-linecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_44"
                      x1="40"
                      y1="25"
                      x2="40"
                      y2="0.999999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0" />
                      <stop offset="0.809892" stop-color="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
