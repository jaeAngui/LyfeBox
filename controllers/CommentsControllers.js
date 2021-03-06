const { Comments } = require('../models/comments')

const GetAllComments = async (req, res) => {
  try {
    const comments = await Comments.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    let commentsId = parseInt(req.params.comments_id)
    await Tips.destroy({ where: { id: commentsId } })
    res.send({
      msg: `Tip ${commentsId} Deleted`
    })
  } catch (error) {
    throw error
  }
}
const CreateComment = async (req, res) => {
  try {
    const comment = await Comments.create({
      comment: req.body.comment
    })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllComments,
  DeleteComment,
  CreateComment
}
