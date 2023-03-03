import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {name: '', text: '', commentList: []}

  addCommentSub = event => {
    event.preventDefault()

    const {name, text} = this.state

    const comDetails = {
      id: uuidv4(),
      name,
      text,
      isFavorite: false,
    }

    this.setState(prevValue => ({
      commentList: [...prevValue.commentList, comDetails],
    }))
  }

  onChangeStar = id => {
    this.setState(preValue => ({
      commentList: preValue.commentList.map(eachTwo => {
        if (eachTwo.id === id) {
          return {...eachTwo, isFavorite: !eachTwo.isFavorite}
        }
        return eachTwo
      }),
    }))
  }

  namefun = event => {
    this.setState({name: event.target.value})
  }

  CommentFun = event => {
    this.setState({text: event.target.value})
  }

  onRemeoveList = id => {
    const {commentList} = this.state
    const filterComments = commentList.filter(list => list.id !== id)
    this.setState({commentList: filterComments})
  }

  render() {
    const {name, text, commentList} = this.state

    return (
      <div className="container">
        <div className="two-containers">
          <form>
            <h1>Comments</h1>
            <p>Say Something about 4.0 Technologies</p>

            <input
              type="text"
              onChange={this.namefun}
              placeholder="Your Name"
            />
            <br />

            <textarea
              type="text"
              onChange={this.CommentFun}
              placeholder="Your Comment"
            >
              hi
            </textarea>
            <br />
            <button type="submit" onClick={this.addCommentSub}>
              Add Comment
            </button>
          </form>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr />

        <div>
          <ul>
            <p>{commentList.length}</p>
            <h1>comments</h1>
            {commentList.map(eachOne => (
              <CommentItem
                key={eachOne.id}
                listDetails={eachOne}
                back={initialContainerBackgroundClassNames}
                onChangeStar={this.onChangeStar}
                onRemeoveList={this.onRemeoveList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
