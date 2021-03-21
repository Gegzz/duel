import { Table, Typography } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import Shield from '../../../assets/shield'

const dataSource = [
  {
    key: '1',
    ranking: 1,
    username: 'Long username',
    winningStreak: 40
  },
  {
    key: '2',
    ranking: 2,
    username: 'short username',
    winningStreak: 39
  },
  {
    key: '3',
    ranking: 3,
    username: 'short username',
    winningStreak: 39
  },
  {
    key: '4',
    ranking: 4,
    username: 'short username',
    winningStreak: 39
  },
  {
    key: '4',
    ranking: 4,
    username: 'short username',
    winningStreak: 39
  },
  {
    key: '4',
    ranking: 4,
    username: 'short username',
    winningStreak: 39
  }
]

const columns = [
  {
    title: 'Ranking',
    dataIndex: 'ranking',
    key: 'ranking',
    render: (ranking) => (
      <Avatar style={{ backgroundColor: 'transparent', width: 48 }}>
        <Shield number={ranking} />
      </Avatar>
    ),
    width: 20
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    width: 20
  },
  {
    title: 'Winning Streak',
    dataIndex: 'winningStreak',
    key: 'winningStreak',
    width: 20
  }
]

const Left = ({ winningStreaks }) => (
  <Table
    dataSource={winningStreaks}
    columns={columns}
    title={() => (
      // <Button
      //   size="large"
      //   type="primary"
      //   style={{
      //     backgroundColor: consts.colors.primary,
      //     borderColor: consts.colors.primary
      //   }}>
      //   Winning Streak
      // </Button>
      <Typography className="tab-title">Winning Streak</Typography>
    )}
    pagination={false}
    size="small"
  />
)

export { Left as WinningStreak }
