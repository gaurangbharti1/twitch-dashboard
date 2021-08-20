import React from 'react'

const StreamerGrid = ({channels}) => {
  return (
    <div>
      <p>Test</p>
    </div>
  )
  


const renderGridItem = channel => (
  <div key={channel.id} className={styles.gridItems}>
    <image layout = "fill" src = {channel.thumbnail_url} />
    <div className={styles.gridItemContent}>
    <p>{channel.display_name}</p>
    {channel.is_live && <p>Live now!</p>}
    {!channel.is_live && <p> Offline </p>}
  </div>
</div>
)

return (
  <div>
  <h2>{`Twitch Dashboard`}</h2>
  {channels.map(renderGridItem)}
  </div>

)
}

export default StreamerGrid