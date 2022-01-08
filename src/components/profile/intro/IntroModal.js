import React from 'react';
import { Modal,Button,Form,Input } from 'antd';

const { TextArea } = Input;

const IntroModal = ({visible,handleModalVisible}) => {
    return (
        <div>
             <Modal
                title="Edit Intro"
                centered
                visible={visible}
                onOk={() => handleModalVisible(false)}
                onCancel={() => handleModalVisible(false)}
                footer={[
                    <Button key="back">
                      Save
                    </Button>
                  ]}
                >
                <Form
      name="basic"
    //   labelCol={{ span: 8 }}
    //   wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
    //   onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder='Full Name'/>
      </Form.Item>
      <Form.Item
        name="headline"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder='Headline'/>
      </Form.Item>
      <Form.Item
        name="description"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <TextArea
        //   value={value}
        //   onChange={this.onChange}
          placeholder="About"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Form.Item>
    </Form>
                </Modal>
        </div>
    )
}

export default IntroModal
