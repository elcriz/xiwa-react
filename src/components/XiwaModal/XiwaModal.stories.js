import React from 'react';
import { XiwaModal } from './XiwaModal';
import { XiwaBox } from '../XiwaBox/XiwaBox';
import { XiwaButton } from '../XiwaButton/XiwaButton';

export default {
  title: 'Components/XiwaModal',
  component: XiwaModal,
};

export const Basic = args => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  return (
    <>
      <XiwaButton
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        Click to show modal
      </XiwaButton>
      <div style={{
        visibility: isModalVisible ? 'visible' : 'hidden',
      }}>
        <XiwaModal {...args}
          onClose={() => {
            setIsModalVisible(false);
          }}
          onConfirm={() => {
            setIsModalVisible(false);
          }}
        >
          <XiwaBox>
            This is the modal's content.
          </XiwaBox>
        </XiwaModal>
      </div>
    </>
  );
};
Basic.args = {
  heading: 'Example modal',
};
