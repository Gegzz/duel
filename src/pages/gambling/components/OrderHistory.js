import { Table, Typography } from 'antd'

const historyDataSource = [
  {
    battleId: 2485752,
    currency: 'BTC',
    bet: 'LONG',
    ammount: 50,
    startPrice: 1.23324,
    endPrice: 1.23232,
    profit: 0
  },
  {
    battleId: 2485752,
    currency: 'BTC',
    bet: 'LONG',
    ammount: 50,
    startPrice: 1.23324,
    endPrice: 1.23232,
    profit: 0
  },
  {
    battleId: 2485752,
    currency: 'BTC',
    bet: 'LONG',
    ammount: 50,
    startPrice: 1.23324,
    endPrice: 1.23232,
    profit: 0
  },
  {
    battleId: 2485752,
    currency: 'BTC',
    bet: 'LONG',
    ammount: 50,
    startPrice: 1.23324,
    endPrice: 1.23232,
    profit: 0
  },
  {
    battleId: 2485752,
    currency: 'BTC',
    bet: 'LONG',
    ammount: 50,
    startPrice: 1.23324,
    endPrice: 1.23232,
    profit: 0
  }
]

const historyColumns = [
  {
    title: 'BATTLE ID',
    dataIndex: 'battleId',
    key: 'battleId'
  },
  {
    title: 'CURRENCY',
    dataIndex: 'currency',
    key: 'currency'
  },
  {
    title: 'BET',
    dataIndex: 'bet',
    key: 'bet',
    render: (bet) => (
      <span
        style={{
          color: bet === 'LONG' ? 'var(--green)' : 'var(--red)',
          fontWeight: 600
        }}>
        {bet}
      </span>
    )
  },
  {
    title: 'AMOUNT',
    dataIndex: 'amount',
    key: 'amount'
  },
  {
    title: 'START PRICE',
    dataIndex: 'startPrice',
    key: 'startPrice'
  },
  {
    title: 'END PRICE',
    dataIndex: 'endPrice',
    key: 'endPrice'
  },
  {
    title: 'PROFIT',
    dataIndex: 'profit',
    key: 'profit'
  }
]

const OrderHistory = () => (
  <Table
    dataSource={historyDataSource}
    columns={historyColumns}
    title={() => <Typography>Order history</Typography>}
  />
)

export { OrderHistory }
