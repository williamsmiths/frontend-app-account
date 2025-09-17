import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'account.settings.name.change.title.id': {
    id: 'account.settings.name.change.title.id',
    defaultMessage: 'Việc thay đổi tên này yêu cầu xác minh danh tính',
    description: 'Inform the user that changing their name requires identity verification',
  },
  'account.settings.name.change.title.begin': {
    id: 'account.settings.name.change.title.begin',
    defaultMessage: 'Trước khi bắt đầu',
    description: 'Title before beginning the ID verification process',
  },
  'account.settings.name.change.warning.one': {
    id: 'account.settings.name.change.warning.one',
    defaultMessage: 'Cảnh báo: Hành động này sẽ cập nhật tên hiển thị trên tất cả các chứng chỉ bạn đã nhận trong quá khứ, cũng như các chứng chỉ bạn đang hoặc sẽ nhận trong tương lai.',
    description: 'Warning informing the user that a name change will update the name on all of their certificates.',
  },
  'account.settings.name.change.warning.two': {
    id: 'account.settings.name.change.warning.two',
    defaultMessage: 'Hành động này không thể hoàn tác nếu không xác minh danh tính của bạn.',
    description: 'Warning informing the user that a name change cannot be undone without ID verification.',
  },
  'account.settings.name.change.id.name.label': {
    id: 'account.settings.name.change.id.name.label',
    defaultMessage: 'Nhập tên của bạn đúng như trên giấy tờ tùy thân.',
    description: 'Form label instructing the user to enter the name on their ID.',
  },
  'account.settings.name.change.id.name.placeholder': {
    id: 'account.settings.name.change.id.name.placeholder',
    defaultMessage: 'Nhập tên trên giấy tờ tùy thân có ảnh của bạn',
    description: 'Form label instructing the user to enter the name on their ID.',
  },
  'account.settings.name.change.error.valid.name': {
    id: 'account.settings.name.change.error.valid.name',
    defaultMessage: 'Vui lòng nhập tên hợp lệ.',
    description: 'Error that appears when the user doesn’t enter a valid name.',
  },
  'account.settings.name.change.error.general': {
    id: 'account.settings.name.change.error.general',
    defaultMessage: 'Đã xảy ra lỗi kỹ thuật. Vui lòng thử lại.',
    description: 'Generic error message.',
  },
  'account.settings.name.change.continue': {
    id: 'account.settings.name.change.continue',
    defaultMessage: 'Tiếp tục',
    description: 'Continue button.',
  },
  'account.settings.name.change.cancel': {
    id: 'account.settings.name.change.cancel',
    defaultMessage: 'Hủy',
    description: 'Cancel button.',
  },
});

export default messages;