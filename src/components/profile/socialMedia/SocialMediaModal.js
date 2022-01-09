import React from 'react';
import { Modal,Button,Form,Input } from 'antd';


const SocialMediaModal = ({visible,handleModalVisible}) => {

  const handleSubmit = (value) => {
    console.log(value)
  }
    return (
        <div>
             <Modal
                title="Edit SocialMedia"
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
                      name="git"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='Git Link'/>
                    </Form.Item>
                    <Form.Item
                      name="linkedin"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='Linkedin Link'/>
                    </Form.Item>
                    <Form.Item
                      name="facebook"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='Facebook Link'/>
                    </Form.Item>
                    <Form.Item
                      name="mediam"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='Mediam Link'/>
                    </Form.Item>
                    <Form.Item
                      name="twitter"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='Twitter Link'/>
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

export default SocialMediaModal;
