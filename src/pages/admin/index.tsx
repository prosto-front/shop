import { Button, Form, Input, message, Select } from "antd"
import { ProductType } from "../../types"
import { useAppDispatch } from "../../reduxHooks"
import { createProduct } from "../product/slices"

export const Admin = () => {
  const disaptch = useAppDispatch()
  const [form] = Form.useForm()

  const handleFinish = (values: ProductType) => {
    disaptch(createProduct(values))
    message.success("Товар добавлен!")
    form.resetFields()
  }

  return (
    <div style={{ marginLeft: 45 }}>
      <h1>Создание товара</h1>
      <Form
        onFinish={handleFinish}
        wrapperCol={{
          span: 8,
        }}
        layout="vertical"
      >
        <Form.Item
          name="brand"
          label="Брэнд"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="наименование"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="описание"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="price"
          label="цена"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="category"
          label="категория"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              { value: "laptop", label: "ноутбук" },
              { value: "monitor", label: "монитор" },
              { value: "phone", label: "телефон" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="img"
          label="ссылка на фото"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="rating" initialValue={1}>
          <Input type="hidden" />
        </Form.Item>
        <Form.Item name="quantity" initialValue={1}>
          <Input type="hidden" />
        </Form.Item>

        <Button htmlType="submit">добавить товар</Button>
      </Form>
    </div>
  )
}
