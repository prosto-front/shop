import { Button, Form, Input } from "antd"
import "./index.scss"
import { useEffect } from "react"
import { createComment, loadComments } from "../slices"
import { useAppDispatch, useAppSelector } from "../../../reduxHooks"
import { UserOutlined } from "@ant-design/icons"

type CommentForm = {
  userName: string
  text: string
}

export const ProductComments = ({ productId }: { productId: number }) => {
  const dispatch = useAppDispatch()
  const { comments } = useAppSelector((state) => state.product)
  const [form] = Form.useForm()

  const handleFinish = (values: CommentForm) => {
    const date = new Date().toLocaleString()

    dispatch(createComment({ ...values, productId, date }))

    form.resetFields()
  }

  useEffect(() => {
    dispatch(loadComments(productId))
  }, [productId])

  return (
    <div className="productPageComments">
      <h1>Комментарии</h1>
      <Form form={form} onFinish={handleFinish}>
        <Form.Item name="userName">
          <Input
            prefix={<UserOutlined style={{ fontSize: "15px" }} />}
            placeholder="Укажите имя"
          />
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
