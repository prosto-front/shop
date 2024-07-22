import { Button, Form, Input } from "antd"
import "./index.scss"
import { useEffect } from "react"
import { createComment, loadComments } from "../slices"
import { useDispatch, useSelector } from "react-redux"

export const ProductComments = ({ productId }) => {
  const [form] = Form.useForm()

  const dispatch = useDispatch()
  const { comments } = useSelector((state) => state.product)

  const handleFinish = (values) => {
    const date = new Date().toLocaleString()

    dispatch(createComment({ ...values, productId, date }))

    form.resetFields()
  }

  useEffect(() => {
    if (productId) {
      dispatch(loadComments(productId))
    }
  }, [productId])

  return (
    <div className="productPageComments">
      <h1>Комментарии</h1>
      <Form form={form} onFinish={handleFinish}>
        <Form.Item name="userName">
          <Input placeholder="Укажите имя" />
        </Form.Item>
        <Form.Item name="text">
          <Input.TextArea placeholder="Комментарий" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Добавить
        </Button>
      </Form>

      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="productCommentsBlock">
            <span>{comment.userName}</span>
            <span>{comment.date}</span>
            <div>{comment.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
