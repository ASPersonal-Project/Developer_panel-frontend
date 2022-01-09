import React from 'react';
import { Modal,Button,Form,Input,DatePicker,Select } from 'antd';


const {TextArea} = Input;
const { Option } = Select;

const ExperienceModal = ({visible,handleModalVisible}) => {

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
                      name="title"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='Title'/>
                    </Form.Item>
                    <Form.Item
                      name="companyName"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='Company Name'/>
                    </Form.Item>
                    <Form.Item>
                    <Select
                                placeholder="EmploymentType"
                                // onChange={onChange}
                            >
                                <Option value="jack">Full Time</Option>
                                <Option value="lucy">Part Time</Option>
                            </Select>
                    </Form.Item>
                    
                    <div className="grid grid-cols-2">
                        <div>
                            <Form.Item>
                            <DatePicker 
                            placeholder='Start Year'
                            // onChange={onChange} 
                            picker="year" />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item>
                            <DatePicker 
                            placeholder='End Year'
                            // onChange={onChange} 
                            picker="year" />
                            </Form.Item>
                        </div>
                    </div>
                       
                    
                    <Form.Item
                      name="location"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input placeholder='Location'/>
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

export default ExperienceModal;
