import React from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Hyperlink } from '@openedx/paragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import Alert from '../Alert';

const ConfirmationAlert = (props) => {
  const { email } = props;

  const technicalSupportLink = (
    <Hyperlink
      destination={getConfig().PASSWORD_RESET_SUPPORT_LINK}
    >
      <FormattedMessage
        id="account.settings.editable.field.password.reset.button.confirmation.support.link"
        defaultMessage="hỗ trợ kỹ thuật"
        description="link text used in message: account.settings.editable.field.password.reset.button.confirmation 'Contact technical support.'"
      />
    </Hyperlink>
  );

  return (
    <Alert
      className="alert-warning mt-n2"
      icon={<FontAwesomeIcon className="mr-2" icon={faExclamationTriangle} />}
    >
      <FormattedMessage
        id="account.settings.editable.field.password.reset.button.confirmation"
        defaultMessage="Chúng tôi đã gửi tin nhắn đến {email}. Vui lòng nhấp vào liên kết trong tin nhắn để đặt lại mật khẩu. Nếu không nhận được tin nhắn, vui lòng liên hệ {technicalSupportLink}."
        description="The password reset button in account settings"
        values={{
          email,
          technicalSupportLink,
        }}
      />
    </Alert>
  );
};

ConfirmationAlert.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ConfirmationAlert;
