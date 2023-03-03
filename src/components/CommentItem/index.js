// Write your code here

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {listDetails, back, onChangeStar, onRemeoveList} = props
  const {id, name, text, isFavorite} = listDetails

  const changeStar = () => {
    onChangeStar(id)
  }

  const onDelete = () => {
    onRemeoveList(id)
  }

  const star = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <h1>{name}</h1>
      <p>{text}</p>
      <p>{formatDistanceToNow(new Date())}</p>

      <div>
        <button type="button" onClick={changeStar}>
          <img src={star} alt="like" />
        </button>

        <button data-testid="delete" type="button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
