import { SettingOutlined, SettingFilled } from '@ant-design/icons'
import { Switch } from 'antd'

const Theme = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }}>
    <SettingOutlined style={{ fontSize: 24 }} />
    <Switch style={{ backgroundColor: 'var(--green)' }} />
    <SettingFilled style={{ fontSize: 24 }} />
  </div>
)

export { Theme }
