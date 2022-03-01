import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./Login.module.css";
import Link from "next/link";

interface LoginProp {
  changeState: () => void;
}

const Login = ({ changeState }: LoginProp) => {
  return (
    <div className={styles.login} data-testid="login">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot
          </a>
        </Form.Item>

        <Form.Item>
          <Link href="/ChoicePage" passHref>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.login_form_button}
            >
              Log in
            </Button>
          </Link>
          Or <a onClick={changeState}>register now!</a>{" "}
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
