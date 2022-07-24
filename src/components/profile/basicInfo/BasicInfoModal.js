import React,{useEffect} from 'react';
import { Modal,Button,Form,Input } from 'antd';

const BasicInfoModal = ({visible,handleModalVisible,data,refreshHandler}) => {

  const [form] = Form.useForm();

  useEffect(() => {
   if(data){
    form.setFieldsValue({ email: data.email});
    form.setFieldsValue({ mobile: data.mobile});
    form.setFieldsValue({ city: data.city});
    form.setFieldsValue({address: data.address})
   }
  }, [data])

  const handleSubmit = (value) => {
    const payload = {
      email: value.email,
      mobile: value.mobile,
      city: value.city,
      address: value.address
    }

    try {
      profileService.updateIntro(payload);
      refreshHandler();
      handleModalVisible(false)
    } catch (error) {
      console.log(error);
    }
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
                  form={form}
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
