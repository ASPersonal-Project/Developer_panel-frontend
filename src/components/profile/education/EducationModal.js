import React from 'react';
import { Modal,Button,Form,Input,DatePicker } from 'antd';

const {RangePicker} = DatePicker;
const {TextArea} = Input;

const EducationModal = ({visible,handleModalVisible}) => {

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
                      name="university"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='University'/>
                    </Form.Item>
                    <Form.Item
                      name="degree"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='Degree'/>
                    </Form.Item>
                    <Form.Item>
                    <RangePicker picker="year"/>
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
                        Save
                      </Button>
                    </Form.Item>
                  </Form>
                </Modal>
        </div>
    )
}

export default EducationModal;
