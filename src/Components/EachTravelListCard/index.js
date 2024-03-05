import './index.css'

const EachTravelListCard = props => {
  const {eachItem} = props
  return (
    <li>
      <img src={eachItem.image_url} alt={eachItem.name} />
      <h1>{eachItem.name}</h1>
      <p>{eachItem.description}</p>
    </li>
  )
}

export default EachTravelListCard
