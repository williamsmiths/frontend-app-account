import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'id.verification.next': {
    id: 'id.verification.next',
    defaultMessage: 'Tiếp theo',
    description: 'Next button.',
  },
  'id.verification.support': {
    id: 'id.verification.support',
    defaultMessage: 'hỗ trợ',
    description: 'Website support.',
  },
  'id.verification.example.card.alt': {
    id: 'id.verification.example.card.alt',
    defaultMessage: 'Ví dụ về thẻ nhận dạng hợp lệ có đầy đủ họ tên và ảnh.',
    description: 'Alt text for an example identification card.',
  },
  'id.verification.requirements.title': {
    id: 'id.verification.requirements.title',
    defaultMessage: 'Yêu cầu xác minh ảnh',
    description: 'Title for the Photo Verification Requirements page.',
  },
  'id.verification.requirements.description': {
    id: 'id.verification.requirements.description',
    defaultMessage: 'Để hoàn tất xác minh ảnh, bạn cần có những thứ sau:',
    description: 'Description for the Photo Verification Requirements page.',
  },
  'id.verification.requirements.card.device.title': {
    id: 'id.verification.requirements.card.device.title',
    defaultMessage: 'Thiết bị có camera',
    description: 'Title for the Device with Camera card.',
  },
  'id.verification.requirements.card.device.allow': {
    id: 'id.verification.requirements.card.device.allow',
    defaultMessage: 'Cho phép',
    description: 'Bold text emphasizing that the user needs to click "allow" in order to enable the camera.',
  },
  'id.verification.requirements.card.id.title': {
    id: 'id.verification.requirements.card.id.title',
    defaultMessage: 'Thẻ nhận dạng có ảnh',
    description: 'Title for the Photo Identification requirement card.',
  },
  'id.verification.requirements.card.id.text': {
    id: 'id.verification.requirements.card.id.text',
    defaultMessage: 'Bạn cần một thẻ nhận dạng hợp lệ có đầy đủ họ tên và ảnh, chẳng hạn như bằng lái xe hoặc hộ chiếu.',
    description: 'Text that explains that the user needs a photo ID.',
  },
  'id.verification.privacy.title': {
    id: 'id.verification.privacy.title',
    defaultMessage: 'Thông tin bảo mật',
    description: 'Title for Privacy Information.',
  },
  'id.verification.privacy.need.photo.question': {
    id: 'id.verification.privacy.need.photo.question',
    defaultMessage: 'Tại sao {siteName} cần ảnh của tôi?',
    description: 'Question about why the platform needs a verification photo.',
  },
  'id.verification.privacy.need.photo.answer': {
    id: 'id.verification.privacy.need.photo.answer',
    defaultMessage: 'Chúng tôi sử dụng ảnh xác minh của bạn để xác nhận danh tính và đảm bảo tính hợp lệ của chứng chỉ.',
    description: 'Answering why the platform needs a verification photo.',
  },
  'id.verification.privacy.do.with.photo.question': {
    id: 'id.verification.privacy.do.with.photo.question',
    defaultMessage: '{siteName} làm gì với ảnh này?',
    description: 'Question about what the platform does with the verification photo.',
  },
  'id.verification.privacy.do.with.photo.answer': {
    id: 'id.verification.privacy.do.with.photo.answer',
    defaultMessage: 'Chúng tôi mã hóa an toàn ảnh của bạn và gửi đến dịch vụ ủy quyền để xem xét. Ảnh và thông tin của bạn sẽ không được lưu hoặc hiển thị ở bất kỳ đâu trên {siteName} sau khi quá trình xác minh hoàn tất.',
    description: 'Answering what the platform does with the verification photo.',
  },
  'id.verification.access.blocked.title': {
    id: 'id.verification.access.blocked.title',
    defaultMessage: 'Xác minh danh tính',
    description: 'Title for text that displays when a user is blocked from ID verification.',
  },
  'id.verification.access.blocked.enrollment': {
    id: 'id.verification.access.blocked.enrollment',
    defaultMessage: 'Hiện tại bạn chưa đăng ký khóa học nào yêu cầu xác minh danh tính.',
    description: 'Text that displays when user is trying to verify while not enrolled in a course that requires ID verification.',
  },
  'id.verification.access.blocked.pending': {
    id: 'id.verification.access.blocked.pending',
    defaultMessage: 'Bạn đã gửi thông tin xác minh. Bạn sẽ thấy thông báo trên bảng điều khiển khi quá trình xác minh hoàn tất (thường trong vòng 5 ngày).',
    description: 'Text that displays when user has a pending or approved request.',
  },
  'id.verification.photo.take': {
    id: 'id.verification.photo.take',
    defaultMessage: 'Chụp ảnh',
    description: 'Button to take photo.',
  },
  'id.verification.photo.retake': {
    id: 'id.verification.photo.retake',
    defaultMessage: 'Chụp lại ảnh?',
    description: 'Button to retake photo.',
  },
  'id.verification.photo.enable.detection': {
    id: 'id.verification.photo.enable.detection',
    defaultMessage: 'Bật nhận diện khuôn mặt',
    description: 'Text label for the checkbox to enable face detection.',
  },
  'id.verification.photo.enable.detection.portrait.help.text': {
    id: 'id.verification.photo.enable.detection.portrait.help.text',
    defaultMessage: 'Nếu được chọn, một hộp sẽ xuất hiện xung quanh khuôn mặt của bạn. Khuôn mặt nhìn thấy rõ nếu hộp màu xanh lam. Nếu khuôn mặt không ở vị trí tốt hoặc không nhận diện được, hộp sẽ màu đỏ.',
    description: 'Help text that appears for enabling face detection on the portrait photo panel.',
  },
  'id.verification.photo.enable.detection.id.help.text': {
    id: 'id.verification.photo.enable.detection.id.help.text',
    defaultMessage: 'Nếu được chọn, một hộp sẽ xuất hiện xung quanh khuôn mặt trên thẻ ID của bạn. Khuôn mặt nhìn thấy rõ nếu hộp màu xanh lam. Nếu không ở vị trí tốt hoặc không nhận diện được, hộp sẽ màu đỏ.',
    description: 'Help text that appears for enabling face detection on the portrait photo panel.',
  },
  'id.verification.photo.feedback.correct': {
    id: 'id.verification.photo.feedback.correct',
    defaultMessage: 'Khuôn mặt đang ở vị trí tốt.',
    description: "Text for screen reader when user's face is in a good position.",
  },
  'id.verification.photo.feedback.two.faces': {
    id: 'id.verification.photo.feedback.two.faces',
    defaultMessage: 'Phát hiện nhiều hơn một khuôn mặt.',
    description: 'Text for screen reader when more than one face detected.',
  },
  'id.verification.photo.feedback.no.faces': {
    id: 'id.verification.photo.feedback.no.faces',
    defaultMessage: 'Không phát hiện khuôn mặt.',
    description: 'Text for screen reader when no face detected.',
  },
  'id.verification.photo.feedback.top.left': {
    id: 'id.verification.photo.feedback.top.left',
    defaultMessage: 'Vị trí không đúng. Trên bên trái.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.top.center': {
    id: 'id.verification.photo.feedback.top.center',
    defaultMessage: 'Vị trí không đúng. Trên giữa.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.top.right': {
    id: 'id.verification.photo.feedback.top.right',
    defaultMessage: 'Vị trí không đúng. Trên bên phải.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.center.left': {
    id: 'id.verification.photo.feedback.center.left',
    defaultMessage: 'Vị trí không đúng. Giữa bên trái.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.center.center': {
    id: 'id.verification.photo.feedback.center.center',
    defaultMessage: 'Vị trí không đúng. Quá gần camera.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.center.right': {
    id: 'id.verification.photo.feedback.center.right',
    defaultMessage: 'Vị trí không đúng. Giữa bên phải.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.bottom.left': {
    id: 'id.verification.photo.feedback.bottom.left',
    defaultMessage: 'Vị trí không đúng. Dưới bên trái.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.bottom.center': {
    id: 'id.verification.photo.feedback.bottom.center',
    defaultMessage: 'Vị trí không đúng. Dưới giữa.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.bottom.right': {
    id: 'id.verification.photo.feedback.bottom.right',
    defaultMessage: 'Vị trí không đúng. Dưới bên phải.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.camera.access.title': {
    id: 'id.verification.camera.access.title',
    defaultMessage: 'Quyền truy cập camera',
    description: 'Title for the Camera Access page.',
  },
  'id.verification.camera.access.title.success': {
    id: 'id.verification.camera.access.title.success',
    defaultMessage: 'Đã bật quyền truy cập camera',
    description: 'Title for the Camera Access page when camera is enabled.',
  },
  'id.verification.camera.access.title.failed': {
    id: 'id.verification.camera.access.title.failed',
    defaultMessage: 'Truy cập camera thất bại',
    description: 'Title for the Camera Access page when camera access is denied or unavailable.',
  },
  'id.verification.camera.access.click.allow': {
    id: 'id.verification.camera.access.click.allow',
    defaultMessage: 'Vui lòng nhớ nhấp vào "Cho phép"',
    description: 'Instruction to allow camera access.',
  },
  'id.verification.camera.access.enable': {
    id: 'id.verification.camera.access.enable',
    defaultMessage: 'Bật camera',
    description: 'Text to enable camera.',
  },
  'id.verification.camera.access.problems': {
    id: 'id.verification.camera.access.problems',
    defaultMessage: 'Bạn gặp sự cố?',
    description: 'Text for when the user is having problems enabling camera access.',
  },
  'id.verification.camera.access.skip': {
    id: 'id.verification.camera.access.skip',
    defaultMessage: 'Bỏ qua và tải lên tệp ảnh thay thế',
    description: 'Text to skip camera access and enable image uploading.',
  },
  'id.verification.camera.access.success': {
    id: 'id.verification.camera.access.success',
    defaultMessage: 'Camera của bạn đang hoạt động và sẵn sàng.',
    description: 'Text to confirm that camera is working.',
  },
  'id.verification.camera.access.failure': {
    id: 'id.verification.camera.access.failure',
    defaultMessage: 'Có vẻ như chúng tôi không thể truy cập camera của bạn. Bạn sẽ cần tải lên tệp ảnh của bạn và ảnh ID.',
    description: 'Text indicating that the camera could not be accessed and image upload will be enabled.',
  },
  'id.verification.camera.access.failure.temporary': {
    id: 'id.verification.camera.access.failure.temporary',
    defaultMessage: 'Có vẻ như chúng tôi không thể truy cập camera của bạn. Vui lòng xác minh rằng webcam đã kết nối và bạn đã cho phép trình duyệt truy cập.',
    description: 'Text indicating that the camera could not be accessed.',
  },
  'id.verification.camera.access.failure.temporary.chrome': {
    id: 'id.verification.camera.access.failure.temporary.chrome',
    defaultMessage: 'Để bật quyền truy cập camera trong Chrome:',
    description: 'Description for the directions on enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.chrome.step1': {
    id: 'id.verification.camera.access.failure.temporary.chrome.step1',
    defaultMessage: 'Mở Chrome.',
    description: 'Text for step one of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.chrome.step2': {
    id: 'id.verification.camera.access.failure.temporary.chrome.step2',
    defaultMessage: 'Điều hướng đến Thêm > Cài đặt.',
    description: 'Text for step two of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.chrome.step2.windows': {
    id: 'id.verification.camera.access.failure.temporary.chrome.step2.windows',
    defaultMessage: 'Đối với Windows: Alt+F, Alt+E, hoặc F10 tiếp theo là phím cách',
    description: 'Text for Windows keyboard shortcut in chrome.',
  },
  'id.verification.camera.access.failure.temporary.chrome.step2.mac': {
    id: 'id.verification.camera.access.failure.temporary.chrome.step2.mac',
    defaultMessage: 'Đối với Mac: Command+,',
    description: 'Text for Mac keyboard shortcut in chrome.',
  },
  'id.verification.camera.access.failure.temporary.chrome.step3': {
    id: 'id.verification.camera.access.failure.temporary.chrome.step3',
    defaultMessage: 'Trong tab "Quyền riêng tư và bảo mật", chọn "Cài đặt trang web" rồi chọn "Camera".',
    description: 'Text for step three of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.chrome.step4': {
    id: 'id.verification.camera.access.failure.temporary.chrome.step4',
    defaultMessage: 'Trong mục "Bị chặn", tìm "edx.org" và chọn nó.',
    description: 'Text for step four of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.chrome.step5': {
    id: 'id.verification.camera.access.failure.temporary.chrome.step5',
    defaultMessage: 'Trong phần "Quyền", cập nhật quyền camera thành "Cho phép".',
    description: 'Text for step five of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.ie11': {
    id: 'id.verification.camera.access.failure.temporary.ie11',
    defaultMessage: 'Để bật quyền truy cập camera trong Internet Explorer:',
    description: 'Description for the directions on enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.ie11.step1': {
    id: 'id.verification.camera.access.failure.temporary.ie11.step1',
    defaultMessage: 'Mở Trình quản lý cài đặt Flash Player bằng cách điều hướng đến Cài đặt Windows > Bảng điều khiển > Flash Player.',
    description: 'Text for step one of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.ie11.step2': {
    id: 'id.verification.camera.access.failure.temporary.ie11.step2',
    defaultMessage: 'Chọn tab "Camera và Mic", sau đó chọn nút "Cài đặt Camera và Microphone theo Trang web".',
    description: 'Text for step two of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.ie11.step3': {
    id: 'id.verification.camera.access.failure.temporary.ie11.step3',
    defaultMessage: 'Chọn "edx.org" từ danh sách trang web và thay đổi quyền bằng cách chọn "Cho phép" trong menu thả xuống.',
    description: 'Text for step three of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox': {
    id: 'id.verification.camera.access.failure.temporary.firefox',
    defaultMessage: 'Để bật quyền truy cập camera trong Firefox:',
    description: 'Description for the directions on enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox.step1': {
    id: 'id.verification.camera.access.failure.temporary.firefox.step1',
    defaultMessage: 'Mở Firefox.',
    description: 'Text for step one of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox.step2': {
    id: 'id.verification.camera.access.failure.temporary.firefox.step2',
    defaultMessage: 'Nhập "about:preferences" vào thanh URL.',
    description: 'Text for step two of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox.step3': {
    id: 'id.verification.camera.access.failure.temporary.firefox.step3',
    defaultMessage: 'Chọn tab "Quyền riêng tư & Bảo mật" và điều hướng đến phần "Quyền".',
    description: 'Text for step three of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox.step4': {
    id: 'id.verification.camera.access.failure.temporary.firefox.step4',
    defaultMessage: 'Bên cạnh "Camera", chọn nút "Cài đặt…".',
    description: 'Text for step four of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox.step5': {
    id: 'id.verification.camera.access.failure.temporary.firefox.step5',
    defaultMessage: 'Trong thanh tìm kiếm, nhập "edx.org".',
    description: 'Text for step five of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox.step6': {
    id: 'id.verification.camera.access.failure.temporary.firefox.step6',
    defaultMessage: 'Trong cột trạng thái cho "edx.org", chọn "Cho phép" từ menu thả xuống.',
    description: 'Text for step six of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox.step7': {
    id: 'id.verification.camera.access.failure.temporary.firefox.step7',
    defaultMessage: 'Chọn "Lưu thay đổi".',
    description: 'Text for step seven of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.safari': {
    id: 'id.verification.camera.access.failure.temporary.safari',
    defaultMessage: 'Để bật quyền truy cập camera trong Safari:',
    description: 'Description for the directions on enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.safari.step1': {
    id: 'id.verification.camera.access.failure.temporary.safari.step1',
    defaultMessage: 'Mở Safari.',
    description: 'Text for step one of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.safari.step2': {
    id: 'id.verification.camera.access.failure.temporary.safari.step2',
    defaultMessage: 'Nhấp vào menu ứng dụng Safari, sau đó chọn "Tùy chọn". Bạn cũng có thể dùng phím tắt Command+,.',
    description: 'Text for step two of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.safari.step3': {
    id: 'id.verification.camera.access.failure.temporary.safari.step3',
    defaultMessage: 'Chọn tab "Trang web" rồi chọn "Camera".',
    description: 'Text for step three of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.safari.step4': {
    id: 'id.verification.camera.access.failure.temporary.safari.step4',
    defaultMessage: 'Chọn "edx.org" và thay đổi quyền camera thành "Cho phép".',
    description: 'Text for step four of enabling camera access.',
  },
  'id.verification.camera.access.failure.unsupported': {
    id: 'id.verification.camera.access.failure.unsupported',
    defaultMessage: 'Có vẻ như trình duyệt của bạn không hỗ trợ truy cập camera.',
    description: "Text indicating that the user's browser does not support camera access.",
  },
  'id.verification.camera.access.failure.unsupported.chrome.explanation': {
    id: 'id.verification.camera.access.failure.unsupported.chrome.explanation',
    defaultMessage: 'Trình duyệt Chrome hiện không hỗ trợ truy cập camera trên thiết bị iOS như iPhone và iPad.',
    description: "Explanation for why certain web browsers, like Chrome, do not support accessing the user's camera.",
  },
  'id.verification.camera.access.failure.unsupported.instructions': {
    id: 'id.verification.camera.access.failure.unsupported.instructions',
    defaultMessage: 'Vui lòng sử dụng trình duyệt khác để hoàn tất xác minh danh tính.',
    description: 'Instructions for the user to user another web browser to complete the process.',
  },
  'id.verification.photo.tips.title': {
    id: 'id.verification.photo.tips.title',
    defaultMessage: 'Mẹo chụp ảnh hữu ích',
    description: 'Title for the Photo Tips page.',
  },
  'id.verification.photo.tips.description': {
    id: 'id.verification.photo.tips.description',
    defaultMessage: 'Tiếp theo, chúng tôi cần bạn chụp một bức ảnh khuôn mặt. Vui lòng xem qua các mẹo hữu ích bên dưới.',
    description: 'Description for the photo tips page.',
  },
  'id.verification.photo.tips.list.title': {
    id: 'id.verification.photo.tips.list.title',
    defaultMessage: 'Mẹo chụp ảnh',
    description: 'Title for the list of photo tips.',
  },
  'id.verification.photo.tips.list.description': {
    id: 'id.verification.photo.tips.list.description',
    defaultMessage: 'Để chụp ảnh thành công, hãy đảm bảo rằng:',
    description: 'Description for the list of photo tips.',
  },
  'id.verification.photo.tips.list.well.lit': {
    id: 'id.verification.photo.tips.list.well.lit',
    defaultMessage: 'Khuôn mặt của bạn được chiếu sáng tốt.',
    description: "Tip to make sure the user's face is well lit.",
  },
  'id.verification.photo.tips.list.inside.frame': {
    id: 'id.verification.photo.tips.list.inside.frame',
    defaultMessage: 'Toàn bộ khuôn mặt của bạn nằm trong khung ảnh.',
    description: "Tip to make sure the user's face fits inside the frame.",
  },
  'id.verification.portrait.photo.title.camera': {
    id: 'id.verification.portrait.photo.title.camera',
    defaultMessage: 'Chụp ảnh bản thân',
    description: 'Title for the Portrait Photo page if camera access is enabled.',
  },
  'id.verification.portrait.photo.instructions.camera': {
    id: 'id.verification.portrait.photo.instructions.camera',
    defaultMessage: 'Khi khuôn mặt của bạn đã vào đúng vị trí, hãy sử dụng nút Chụp ảnh bên dưới để chụp.',
    description: 'Instructions to use the camera to take a portrait photo..',
  },
  'id.verification.camera.help.sight.question': {
    id: 'id.verification.camera.help.sight.question',
    defaultMessage: 'Nếu tôi không thể nhìn thấy hình ảnh camera hoặc không thể xác định mặt nào đang hiển thị thì sao?',
    description: 'Question on what to do if the user cannot see the camera image or photo during verification.',
  },
  'id.verification.camera.help.sight.answer.portrait': {
    id: 'id.verification.camera.help.sight.answer.portrait',
    defaultMessage: 'Bạn có thể hoàn thành quy trình chụp ảnh mà không cần hỗ trợ, nhưng có thể cần vài lần thử để đặt camera đúng vị trí. Vị trí tối ưu thường cách camera khoảng 30-45 cm, với đầu ở trung tâm màn hình. Nếu ảnh bị từ chối, hãy thử thay đổi góc chiếu sáng.',
    description: 'Confirming what to do if the camera image of the portrait cannot be seen during verification.',
  },
  'id.verification.camera.help.sight.answer.id': {
    id: 'id.verification.camera.help.sight.answer.id',
    defaultMessage: 'Bạn có thể hoàn thành quy trình chụp ảnh mà không cần hỗ trợ, nhưng có thể cần vài lần thử. Vị trí tối ưu thường cách camera khoảng 20-30 cm, với thẻ ID ở trung tâm. Nếu ảnh bị từ chối, hãy thử thay đổi góc chiếu sáng. Lý do từ chối phổ biến nhất là không đọc được chữ trên thẻ ID.',
    description: 'Confirming what to do if the camera image of the ID cannot be seen during verification.',
  },
  'id.verification.camera.help.difficulty.question.portrait': {
    id: 'id.verification.camera.help.difficulty.question.portrait',
    defaultMessage: 'Nếu tôi khó giữ đầu đúng vị trí so với camera thì sao?',
    description: 'Question on what to do if the user has difficulty holding their head relative to the camera.',
  },
  'id.verification.camera.help.difficulty.question.id': {
    id: 'id.verification.camera.help.difficulty.question.id',
    defaultMessage: 'Nếu tôi khó giữ thẻ ID đúng vị trí so với camera thì sao?',
    description: 'Question on what to do if the user has difficulty holding their ID relative to the camera.',
  },
  'id.verification.camera.help.difficulty.answer': {
    id: 'id.verification.camera.help.difficulty.answer',
    defaultMessage: 'Nếu bạn cần hỗ trợ để chụp ảnh, hãy liên hệ bộ phận hỗ trợ {siteName} để được tư vấn thêm.',
    description: 'Confirming what to do if the user has difficult holding their head relative to the camera.',
  },
  'id.verification.id.photo.unclear.question': {
    id: 'id.verification.id.photo.unclear.question',
    defaultMessage: 'Ảnh thẻ ID của bạn không rõ hoặc quá mờ?',
    description: "Question on what to do if the user\'s ID image is unclear",
  },
  'id.verification.id.tips.title': {
    id: 'id.verification.id.tips.title',
    defaultMessage: 'Mẹo chụp thẻ nhận dạng hữu ích',
    description: 'Title for the ID Tips page.',
  },
  'id.verification.id.tips.description': {
    id: 'id.verification.id.tips.description',
    defaultMessage: 'Tiếp theo, chúng tôi cần bạn chụp ảnh thẻ nhận dạng hợp lệ có đầy đủ họ tên và ảnh, như bằng lái xe hoặc hộ chiếu. Vui lòng chuẩn bị sẵn thẻ ID.',
    description: 'Description for the ID Tips page.',
  },
  'id.verification.id.tips.list.well.lit': {
    id: 'id.verification.id.tips.list.well.lit',
    defaultMessage: 'Thẻ nhận dạng của bạn được chiếu sáng tốt.',
    description: 'Tip to ensure ID is well lit.',
  },
  'id.verification.id.tips.list.clear': {
    id: 'id.verification.id.tips.list.clear',
    defaultMessage: 'Đảm bảo rằng bạn có thể nhìn thấy ảnh và đọc rõ tên của mình.',
    description: 'Tip to ensure ID and name can be seen clearly.',
  },
  'id.verification.id.photo.title.camera': {
    id: 'id.verification.id.photo.title.camera',
    defaultMessage: 'Chụp ảnh thẻ nhận dạng của bạn',
    description: 'Title for the ID Photo page if camera access is enabled.',
  },
  'id.verification.id.photo.title.upload': {
    id: 'id.verification.id.photo.title.upload',
    defaultMessage: 'Tải lên ảnh thẻ nhận dạng của bạn',
    description: 'Title for the ID Photo page if camera access is disabled.',
  },
  'id.verification.id.photo.preview.alt': {
    id: 'id.verification.id.photo.preview.alt',
    defaultMessage: 'Xem trước ảnh ID.',
    description: 'Alt text for the ID photo preview.',
  },
  'id.verification.id.photo.instructions.camera': {
    id: 'id.verification.id.photo.instructions.camera',
    defaultMessage: 'Khi thẻ ID của bạn đã vào đúng vị trí, hãy sử dụng nút Chụp ảnh bên dưới. Vui lòng dùng hộ chiếu, bằng lái xe hoặc thẻ nhận dạng khác có đầy đủ họ tên và ảnh.',
    description: 'Instructions to use the camera to take an ID photo.',
  },
  'id.verification.id.photo.instructions.upload': {
    id: 'id.verification.id.photo.instructions.upload',
    defaultMessage: 'Vui lòng tải lên ảnh thẻ nhận dạng của bạn. Đảm bảo toàn bộ thẻ ID nằm trong khung và được chiếu sáng tốt. Kích thước tệp phải dưới 10 MB. Định dạng hỗ trợ: ',
    description: 'Instructions for ID photo upload.',
  },
  'id.verification.id.photo.instructions.upload.error.invalidFileType': {
    id: 'id.verification.id.photo.instructions.upload.error.invalidFileType',
    defaultMessage: 'Tệp bạn đã chọn không phải là loại ảnh được hỗ trợ. Vui lòng chọn từ các định dạng sau: ',
    description: 'Error message for file upload that is not a supported image type.',
  },
  'id.verification.id.photo.instructions.upload.error.fileTooLarge': {
    id: 'id.verification.id.photo.instructions.upload.error.fileTooLarge',
    defaultMessage: 'Tệp bạn đã chọn quá lớn. Vui lòng thử lại với tệp nhỏ hơn 10MB.',
    description: 'Error message for file upload that is larger than 10MB.',
  },
  'id.verification.name.check.title': {
    id: 'id.verification.name.check.title',
    defaultMessage: 'Kiểm tra lại tên của bạn',
    description: 'Title for the page where a user double-checks that their name is correct.',
  },
  'id.verification.name.check.instructions': {
    id: 'id.verification.name.check.instructions',
    defaultMessage: 'Tên bên dưới có khớp với tên trên ảnh ID của bạn không? Nếu không, hãy cập nhật tên bên dưới để khớp với ảnh ID.',
    description: 'Text to instruct the user to check that the name displayed on the page matches what is on their photo ID.',
  },
  'id.verification.name.check.mismatch.information': {
    id: 'id.verification.name.check.mismatch.information',
    defaultMessage: 'Nếu tên bên dưới không khớp với ảnh ID của bạn, yêu cầu xác minh danh tính sẽ bị từ chối.',
    description: 'Text to inform the user that if the name displayed on the page does not match what is on their photo ID, identity verification will be denied.',
  },
  'id.verification.name.error': {
    id: 'id.verification.name.error',
    defaultMessage: 'Vui lòng nhập tên của bạn như trên ảnh ID.',
    description: 'Error that shows when the user needs to update their name to match the name on their ID.',
  },
  'id.verification.account.name.warning.prefix': {
    id: 'id.verification.account.name.warning.prefix',
    defaultMessage: 'Lưu ý:',
    description: 'Prefix to the warning that any change to the account name will be saved to the account.',
  },
  'id.verification.account.name.settings': {
    id: 'id.verification.account.name.settings',
    defaultMessage: 'Cài đặt tài khoản',
    description: 'Link to Account Settings.',
  },
  'id.verification.name.label': {
    id: 'id.verification.name.label',
    defaultMessage: 'Tên',
    description: 'Label for name input.',
  },
  'id.verification.account.name.photo.alt': {
    id: 'id.verification.account.name.photo.alt',
    defaultMessage: 'Ảnh ID của bạn sẽ được gửi đi.',
    description: "Alt text for the photo of the user's ID.",
  },
  'id.verification.review.title': {
    id: 'id.verification.review.title',
    defaultMessage: 'Xem lại ảnh của bạn',
    description: 'Title for the review your photos page.',
  },
  'id.verification.review.description': {
    id: 'id.verification.review.description',
    defaultMessage: 'Hãy đảm bảo chúng tôi có thể xác minh danh tính của bạn bằng các ảnh và thông tin bạn đã cung cấp.',
    description: 'Description for the review your photos page.',
  },
  'id.verification.review.portrait.label': {
    id: 'id.verification.review.portrait.label',
    defaultMessage: 'Ảnh chân dung của bạn',
    description: 'Label for the portrait card.',
  },
  'id.verification.review.portrait.alt': {
    id: 'id.verification.review.portrait.alt',
    defaultMessage: 'Ảnh khuôn mặt của bạn sẽ được gửi đi.',
    description: 'Alt text for the portrait photo.',
  },
  'id.verification.review.portrait.retake': {
    id: 'id.verification.review.portrait.retake',
    defaultMessage: 'Chụp lại ảnh chân dung',
    description: 'Button to retake the portrait photo.',
  },
  'id.verification.review.id.label': {
    id: 'id.verification.review.id.label',
    defaultMessage: 'Thẻ nhận dạng của bạn',
    description: 'Label for the Photo ID card.',
  },
  'id.verification.review.id.alt': {
    id: 'id.verification.review.id.alt',
    defaultMessage: 'Ảnh thẻ nhận dạng của bạn sẽ được gửi đi.',
    description: 'Alt text for the ID photo.',
  },
  'id.verification.review.id.retake': {
    id: 'id.verification.review.id.retake',
    defaultMessage: 'Chụp lại ảnh ID',
    description: 'Button to retake the ID photo.',
  },
  'id.verification.review.confirm': {
    id: 'id.verification.review.confirm',
    defaultMessage: 'Gửi',
    description: 'Button to confirm all information is correct and submit.',
  },
  'id.verification.submission.alert.error.face': {
    id: 'id.verification.submission.alert.error.face',
    defaultMessage: 'Yêu cầu ảnh khuôn mặt của bạn. Vui lòng chụp lại ảnh chân dung.',
    description: "Error message displayed when the user's portrait photo is missing.",
  },
  'id.verification.submission.alert.error.id': {
    id: 'id.verification.submission.alert.error.id',
    defaultMessage: 'Yêu cầu ảnh thẻ ID của bạn. Vui lòng chụp lại ảnh ID.',
    description: "Error message displayed when the user's ID photo is missing.",
  },
  'id.verification.submission.alert.error.name': {
    id: 'id.verification.submission.alert.error.name',
    defaultMessage: 'Yêu cầu tên tài khoản hợp lệ. Vui lòng cập nhật tên tài khoản để khớp với tên trên ID của bạn.',
    description: "Error message displayed when the user's account name is missing.",
  },
  'id.verification.submission.alert.error.unsupported': {
    id: 'id.verification.submission.alert.error.unsupported',
    defaultMessage: 'Một hoặc nhiều tệp bạn đã tải lên có định dạng không được hỗ trợ. Vui lòng chọn từ các định dạng sau: ',
    description: 'Error message displayed when the user uploads an unsupported file type.',
  },
  'id.verification.review.error': {
    id: 'id.verification.review.error',
    defaultMessage: 'Trang hỗ trợ {siteName}',
    description: 'Text linking to the platform support page.',
  },
  'id.verification.submitted.title': {
    id: 'id.verification.submitted.title',
    defaultMessage: 'Đang xác minh danh tính',
    description: 'Title for the submitted page.',
  },
  'id.verification.submitted.text': {
    id: 'id.verification.submitted.text',
    defaultMessage: 'Chúng tôi đã nhận được thông tin của bạn và đang xác minh danh tính. Bạn sẽ được thông báo khi quá trình xác minh hoàn tất (thường trong vòng 5 ngày). Trong thời gian chờ đợi, bạn vẫn có thể truy cập tất cả nội dung khóa học.',
    description: 'Text confirming that ID verification request has been received.',
  },
  'id.verification.return.dashboard': {
    id: 'id.verification.return.dashboard',
    defaultMessage: 'Quay lại bảng điều khiển',
    description: 'Button to return to the dashboard.',
  },
  'id.verification.return.course': {
    id: 'id.verification.return.course',
    defaultMessage: 'Quay lại khóa học',
    description: 'Return to the course which ID verification was accessed from.',
  },
  'id.verification.return.generic': {
    id: 'id.verification.return.generic',
    defaultMessage: 'Quay lại',
    description: "Button to return to the user's original location.",
  },
  'id.verification.photo.upload.help.title': {
    id: 'id.verification.photo.upload.help.title',
    defaultMessage: 'Tải lên ảnh thay thế',
    description: 'Title for section that allows switching to photo upload mode.',
  },
  'id.verification.photo.camera.help.title': {
    id: 'id.verification.photo.camera.help.title',
    defaultMessage: 'Sử dụng camera thay thế',
    description: 'Title for section that allows switching to camera mode.',
  },
  'id.verification.photo.upload.help.text': {
    id: 'id.verification.photo.upload.help.text',
    defaultMessage: 'Nếu bạn gặp sự cố khi chụp ảnh ở trên, bạn có thể muốn tải lên ảnh thay thế. Để tải lên ảnh, hãy nhấp vào nút bên dưới.',
    description: 'Help text for switching to upload mode.',
  },
  'id.verification.photo.camera.help.text': {
    id: 'id.verification.photo.camera.help.text',
    defaultMessage: 'Nếu bạn gặp sự cố khi tải lên ảnh ở trên, bạn có thể muốn sử dụng camera thay thế. Để sử dụng camera, hãy nhấp vào nút bên dưới.',
    description: 'Help text for switching to camera mode.',
  },
  'id.verification.photo.upload.help.button': {
    id: 'id.verification.upload.help.button',
    defaultMessage: 'Chuyển sang chế độ tải lên',
    description: 'Button used to switch to upload mode.',
  },
  'id.verification.photo.camera.help.button': {
    id: 'id.verification.camera.help.button',
    defaultMessage: 'Chuyển sang chế độ camera',
    description: 'Button used to switch to camera mode.',
  },
});

export default messages;
