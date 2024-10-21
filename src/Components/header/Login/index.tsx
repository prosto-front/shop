import { Button, Form, Input } from "antd"
import { useEffect, useState } from "react"
import { login, registration } from "./slices"
import { useAppDispatch, useAppSelector } from "../../../reduxHooks"
import { Link } from "react-router-dom"

type UserFormType = {
  name: string
  login: string
  phone: string
  password: string
}

export const Login = () => {
  const [openRegistration, setOpenRegistration] = useState(false)
  const { user, error } = useAppSelector((state) => state.user)

  useEffect(() => {
    if (error === "уже зарегистрирован") {
      setOpenRegistration(false)
      form.resetFields()
    }
  }, [error])


  const [form] = Form.useForm()

  const dispatch = useAppDispatch()

  const handleFinish = async (values: UserFormType) => {
    if (values.phone) {
      dispatch(registration(values))
      return
    }

    dispatch(login(values))
  }

  return (
    <div style={{ marginTop: 40 }}>
      <h2 style={{ marginBottom: 20, color: "red" }}>{error}</h2>
      {user ? (
        <>
          <h2 style={{ marginBottom: 20, color: "green" }}>
            {user.name} Вы вошли
          </h2>
          <Link to="/admin"> Перейти на страницу админ</Link>
        </>
      ) : (
        <>
          <Form form={form} onFinish={handleFinish}>
            <Form.Item
              name="login"
              rules={[
                {
                  required: true,
                  min: 5,
                  message: "должно быть мин 5 символов",
                },
              ]}
            >
              <Input placeholder="Введите логин" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  min: 5,
                  message: "должно быть мин 5 символов",
                },
              ]}
            >
              <Input placeholder="Введите пароль" />
            </Form.Item>
            {openRegistration && (
              <>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      min: 3,
                      message: "должно быть мин 3 символов",
                    },
                  ]}
                >
                  <Input placeholder="Укажите имя" />
                </Form.Item>
                <Form.Item name="phone">
                  <Input placeholder="Укажите телефон" />
                </Form.Item>
              </>
            )}

            <Button htmlType="submit">
              {openRegistration ? "Зарегистрироваться" : "Войти"}
            </Button>
          </Form>
          {!openRegistration && (
            <Button
              style={{ marginTop: 20 }}
              type="primary"
              onClick={() => setOpenRegistration(true)}
            >
              Зарегистрироваться
            </Button>
          )}
        </>
      )}
    </div>
  )
}
