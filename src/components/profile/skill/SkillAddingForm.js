import React from 'react';
import { Form, Input,Button } from 'antd';

const SkillAddingForm = ({title}) => {
    return (
        <div>
            <p>{title}</p>
                  <Form
                  name="basic"
                  initialValues={{ remember: true }}
                //   onFinish={handleSubmit}
                  autoComplete="off"
                >
                    <div className='grid grid-cols-3'>
                        <div className='col-span-2 mx-3'> 
                        <Form.Item
                      name="title"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                      <Input placeholder='Title'/>
                    </Form.Item>
                    </div>
                        <div className='col-span-1'>
                        <Form.Item>
                    <Button type="primary" htmlType="submit">
                        ADD
                      </Button>
                    </Form.Item>
                        </div>
                    </div>
                  </Form>
        </div>
    )
}

export default SkillAddingForm
