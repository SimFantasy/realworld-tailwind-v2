import React from 'react'
import cx from 'clsx'
import { useAuth } from '@/hooks'

const TabBar = ({ tabs, activeTab, setActiveTab }) => {
  const { isAuth } = useAuth()
  return (
    <div className='tabs'>
      {tabs
        ?.filter(tab => tab.auth === isAuth || tab.auth === 'any')
        .map((tab, index) => (
          <div
            key={index}
            className={cx('tab-item', { active: activeTab === `${tab.name}` })}
            onClick={() => setActiveTab(`${tab.name}`)}
          >
            {tab.title}
          </div>
        ))}
    </div>
  )
}

export default TabBar
