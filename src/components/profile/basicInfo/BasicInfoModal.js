import React from 'react';
import { Modal,Button,Form,Input } from 'antd';

const { TextArea } = Input;

const BasicInfoModal = ({visible,handleModalVisible}) => {

  const handleSubmit = (value) => {
    console.log(value)
  }
    return (
        <div>
             <Modal
                title="Edit BasicInfo"
                centered
                visible={visible}
                onOk={() => handleModalVisible(false)}
                onCancel={() => handleModalVisible(false)}
                footer={null}
                >
                  <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={handleSubmit}
                  autoComplete="off"
                >
                    <Form.Item
                      name="email"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='Email'/>
                    </Form.Item>
                    <Form.Item
                      name="mobile"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='Mobile'/>
                    </Form.Item>
                    <Form.Item
                      name="city"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='City'/>
                    </Form.Item>
                    <Form.Item
                      name="address"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='Address'/>
                    </Form.Item>
                    
                    <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save
                      </Button>
                    </Form.Item>
                  </Form>
                </Modal>
        </div>
    )
}

export default BasicInfoModal;
