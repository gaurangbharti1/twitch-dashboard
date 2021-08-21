import React, { useEffect } from 'react'
import styles from '../../styles/StreamerGrid.module.css'
import Image from 'next/image'

const StreamerGrid = ({ channels }) => {
  
 const renderGridItem = channel => (
    <div key={channel.id} className={styles.gridItem}>
      <Image layout="fill" src={channel.thumbnail_url} />
      <div className={styles.gridItemContent}>
        <p>{channel.display_name}</p>
        {channel.is_live && <p>live!</p>}
        {!channel.is_live && <p>offline</p>}
      </div>
    </div>
  )

useEffect(() => {
  console.log('CHANNELS: ', channels)
}, [channels])

return (
  <div>
  <h2>{`Twitch Dashboard`}</h2>
  {channels.map(renderGridItem)}
  </div>
  )
}

export default StreamerGrid