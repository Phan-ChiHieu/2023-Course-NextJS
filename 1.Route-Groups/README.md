# When to use Server and Client Components ?

## Use Server:

- Tìm nạp dữ liệu. (Fetch data.)
- Truy cập tài nguyên phụ trợ (trực tiếp)
- Giữ thông tin nhạy cảm trên máy chủ (mã thông báo truy cập, khóa API, v.v.) Keep sensitive information on the server (access tokens, API keys, etc)
- Giữ phần phụ thuộc lớn trên máy chủ/Giảm JavaScript phía máy khách

## Use Client:

- Thêm trình xử lý tương tác và sự kiện ( onClick(), onChange(), v.v.)
- Sử dụng hiệu ứng trạng thái và vòng đời ( useState(), useReducer(), useEffect(), v.v.) (Add interactivity and event listeners)
- Sử dụng API chỉ dành cho trình duyệt (Use State and Lifecycle Effects)
- Sử dụng móc tùy chỉnh phụ thuộc vào trạng thái, hiệu ứng hoặc API chỉ dành cho trình duyệt (Use custom hooks that depend on state, effects, or browser-only APIs)
- Sử dụng các thành phần Lớp React
