# ROUTE-GROUPS

## link: https://nextjs.org/docs/app/building-your-application/routing/route-groups

## 1. thế nào gọi là route group - (folder)

- app/(folder) => (floder) sẽ không gây ảnh hưởng tới đường dẫn URL
- app/(auth) / login (chứa page.tsx) => url: http://localhost:3099/login
- app/(auth) / logout (chứa page.tsx) => url: http://localhost:3099/logout
- app/(dahsboard) / dashboard (chứa page.tsx) => url: http://localhost:3099/dashboard
- app/(dahsboard) / dashboard (chứa page.tsx) / infomation (chứa page.tsx) => url: http://localhost:3099/dashboard/infomation

## 2. Mỗi route group đều chứa các file layout.tsx, loading.tsx, .... riêng

## 3. Problem

### Cách 1:

- Nếu project không có lading page hoặc ta muốn user khi vào url: "/" tự động chuyển qua "/login" thì ta xử lý logic trong file middleware.ts
- tài liệu: https://nextjs.org/docs/pages/building-your-application/routing/middleware

### Cách 2:

- vào thẳng file.tsx cần chuyển page code

```tsx
import React from "react";
import { redirect } from "next/navigation";
export default function PrivatePage() {
  // auto chuyen trang sang trang con mac dinh tren server
  redirect("/private/system");
}
```

-tài liệu: https://stackoverflow.com/questions/58173809/next-js-redirect-from-to-another-page
