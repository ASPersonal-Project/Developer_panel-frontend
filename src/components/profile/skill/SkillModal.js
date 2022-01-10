import React from 'react';
import { Modal,Button,Form,Input,DatePicker,Select } from 'antd';
import SkillAddingForm from './SkillAddingForm';

const { Option } = Select;

const SkillModal = ({visible,handleModalVisible}) => {

  const handleSubmit = (value) => {
    console.log(value)
  }
    return (
        <div>
             <Modal
                title="Edit Skills"
                centered
                visible={visible}
                onOk={() => handleModalVisible(false)}
                onCancel={() => handleModalVisible(false)}
                footer={null}
                >
                    <SkillAddingForm
                        title="Technical Skills"
                    />
                    <SkillAddingForm
                        title="Interpersonal Skills"
                    />
                </Modal>
        </div>
    )
}

export default SkillModal;
