import React from 'react'
import './screenSwitch.css'

const Tabs = ({ surname2, chart, capture }) => (
  <div className="tab-container">
    <TabHeader>
      <SwitchClickable active text={chart} />
      <MarginSpace />
      <SwitchClickable text={surname2} />
    </TabHeader>
    <img alt="" className="capture" src={capture} />
  </div>
)

const TabHeader = ({ children }) => <div className="tab-header-container">{children}</div>

const SwitchClickable = ({ text, active }) => (
  <div className={active ? 'switch-active' : 'switch'}>{text}</div>
)

const MarginSpace = () => <div style={{ marginRight: 8 }} />

export { Tabs }
