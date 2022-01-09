import React from 'react';
import { Modal,Button,Form,Input,Select } from 'antd';

const { Option } = Select;

const LanguageModal = ({visible,handleModalVisible}) => {

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
                    <div className='grid grid-cols-3'>
                        <div className='col-span-2 mx-2'>
                            <Form.Item
                                name="language"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                <Input placeholder='language'/>
                            </Form.Item>
                        </div>
                        <div className='col-span-1'>
                        <Form.Item>
                            <Select
                                placeholder="Select a person"
                                // onChange={onChange}
                            >
                                <Option value="jack">Basic</Option>
                                <Option value="lucy">Conversional</Option>
                                <Option value="tom">Fluent</Option>
                            </Select>,
                            </Form.Item>
                        </div>
                    </div>
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

export default LanguageModal;
