import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'account.settings.field.name.checkbox.certificate.select': {
    id: 'account.settings.field.name.certificate.select',
    defaultMessage: 'Nếu được chọn, tên này sẽ xuất hiện trên chứng chỉ và hồ sơ công khai của bạn.',
    description: 'Label for checkbox describing that the selected name will appear on the user‘s certificates.',
  },
  'account.settings.field.name.modal.certificate.title': {
    id: 'account.settings.field.name.modal.certificate.title',
    defaultMessage: 'Chọn tên ưu tiên cho chứng chỉ và hồ sơ công khai',
    description: 'Title instructing the user to choose a preferred name.',
  },
  'account.settings.field.name.modal.certificate.select': {
    id: 'account.settings.field.name.modal.certificate.select',
    defaultMessage: 'Chọn một tên',
    description: 'Label instructing the user to select a name.',
  },
  'account.settings.field.name.modal.certificate.option.full': {
    id: 'account.settings.field.name.modal.certificate.option.full',
    defaultMessage: 'Họ và tên',
    description: 'Option representing the user’s full name.',
  },
  'account.settings.field.name.modal.certificate.option.verified': {
    id: 'account.settings.field.name.modal.certificate.option.verified',
    defaultMessage: 'Tên đã xác minh',
    description: 'Option representing the user’s verified name.',
  },
  'account.settings.field.name.modal.certificate.button.choose': {
    id: 'account.settings.field.name.modal.certificate.button.choose',
    defaultMessage: 'Chọn tên',
    description: 'Button to confirm the user’s name choice.',
  },
});

export default messages;