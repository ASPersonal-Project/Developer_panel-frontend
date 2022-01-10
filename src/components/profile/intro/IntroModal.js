import React,{useEffect, useState} from 'react';
import { Modal,Button,Form,Input } from 'antd';
import profileService from '../../../services/profileService';


const { TextArea } = Input;

const IntroModal = ({visible,handleModalVisible,data,fetchHandler}) => {
  const [form] = Form.useForm();

  useEffect(() => {
   if(data){
    form.setFieldsValue({ name: data.full_name});
    form.setFieldsValue({ jobPosition: data.headline});
    form.setFieldsValue({ description: data.description});
   }
  }, [data])

  const handleSubmit = (value) => {
    console.log(value)
    const payload = {
      full_name: value.name,
      job_position: value.jobPosition,
      description: value.description
    }
    try {
      profileService.updateIntro(payload);
      fetchHandler();
    } catch (error) {
      console.log(error);
    }
  }
    return (
        <div>
             <Modal
                title="Edit Intro"
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
                  form={form}
                >
                    <Form.Item
                      name="name"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='Full Name'/>
                    </Form.Item>
                    <Form.Item
                      name="jobPosition"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='Job Position'/>
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
                    <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Modal>
        </div>
    )
}

export default IntroModal
