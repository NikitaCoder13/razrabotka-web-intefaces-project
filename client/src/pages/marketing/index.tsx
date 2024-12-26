import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Layout,
  Menu,
  Row,
  Typography,
} from "antd";
import { Link } from "react-router-dom";
import "./index.css";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Marketing = () => {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        {/* <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Главная</Menu.Item>
          <Menu.Item key="2">О нас</Menu.Item>
          <Menu.Item key="3">Контакты</Menu.Item>
        </Menu> */}
      </Header>
      <Content style={{ padding: "50px", backgroundColor: "#0d1633" }}>
        <div
          className="hero"
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          <Title level={1} style={{ fontSize: "48px", color: "#1890ff" }}>
            Employees
          </Title>
          <Paragraph style={{ fontSize: "20px" }}>
            Сделайте учет сотрудников простым и приятным!
          </Paragraph>
          <Link to="/register">
            <Button
              type="primary"
              size="large"
              style={{
                borderRadius: "25px",
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                justifySelf: "center",
              }}
            >
              Начать бесплатно
            </Button>
          </Link>
        </div>
        <Row gutter={16} justify="center">
          <Col span={8}>
            <Card
              title="1. Управление пользователями"
              bordered={false}
              hoverable
            >
              Позволяет администраторам добавлять, редактировать и удалять
              пользователей, а также просматривать список зарегистрированных
              пользователей.
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="2. Авторизация и аутентификация"
              bordered={false}
              hoverable
            >
              Обеспечивает безопасность сайта через уникальные учетные данные
              для входа и регистрацию новых пользователей.
            </Card>
          </Col>
          <Col span={8}>
            <Card title="3. Аналитика и отчеты" bordered={false} hoverable>
              Позволяет администраторам просматривать статистику использования
              сайта и данные о пользователях через графики и отчеты.
            </Card>
          </Col>
        </Row>
        <Row gutter={16} justify="center" align="middle">
          <Col span={8}>
            <Card style={{ marginTop: "50px", textAlign: "center" }}>
              <Title level={3}>Свяжитесь с нами</Title>
              <Form
                layout="vertical"
                style={{ maxWidth: "400px", margin: "0 auto" }}
              >
                <Form.Item label="Ваше имя">
                  <Input placeholder="Введите ваше имя" />
                </Form.Item>
                <Form.Item label="Ваш email">
                  <Input placeholder="Введите ваш email" />
                </Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Отправить
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>{" "}
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#001529",
          color: "#fff",
        }}
      >
        ©2024 Employees
      </Footer>
    </Layout>
  );
};

export default Marketing;
