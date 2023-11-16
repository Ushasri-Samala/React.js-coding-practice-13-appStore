// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemDetails, updateTabItem, isActive} = props
  const {tabId, displayText} = tabItemDetails

  const onClickTabItem = () => {
    updateTabItem(tabId)
  }

  const activeTabBtn = isActive ? 'active-tab-btn' : ''

  return (
    <li className="each-tab-item">
      <button
        type="button"
        className={`button ${activeTabBtn}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
