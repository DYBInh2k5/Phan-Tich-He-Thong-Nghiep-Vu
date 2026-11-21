# HƯỚNG DẪN THỰC HÀNH & KỊCH BẢN DEMO ODOO ERP TUẦN 11
## DỰA TRÊN MÔ HÌNH USE CASE & YÊU CẦU CHỨC NĂNG (TUẦN 10)

### THÔNG TIN HỌC THUẬT & SINH VIÊN
* **Học phần:** Phân tích Hệ thống Nghiệp vụ (Business Systems Analysis — BSA)
* **Khoa:** Khoa Công nghệ — Trường Đại học Hoa Sen (HSU)
* **Giảng viên hướng dẫn:** ThS. Nguyễn Thị Thanh Thanh (`thanh.nguyenthithanh@hoasen.edu.vn`)
* **Sinh viên thực hiện:** **Võ Duy Bình** (MSSV: **22301500**) — Nhóm trưởng Group 6
* **Tình huống nghiệp vụ:** Kịch bản B (Scenario 6) — Phân phối B2B Văn phòng phẩm (`OfficePro Distribution Co., Ltd.`)
* **Quy trình chịu trách nhiệm:** `BP1` Đặt hàng Doanh nghiệp, `BP2` Kiểm soát Giá hợp đồng, `BP4` Mua hàng Bù kho
* **Mục tiêu Tuần 11:** Ánh xạ các Use Case (`UC-SALES-01`, `UC-SALES-02`, `UC-SALES-04`, `UC-PURCH-01`, `UC-ACC-01`, `UC-ACC-02`) đã mô hình hóa ở Tuần 10 lên giao diện thực tế Odoo ERP Cloud, nạp Master Data 10 SKU và thực hiện kịch bản demo sống liên thông (End-to-End Walkthrough).

> 🌐 **Live Cloud Instance (Hệ thống thực hành chính thức):**  
> 🔗 **Trang chủ Dashboard:** [https://edu-officeprodistribution.odoo.com/odoo](https://edu-officeprodistribution.odoo.com/odoo)  
> *Đã kết nối tài khoản Odoo Cloud của sinh viên, sẵn sàng thực hành và cấu hình kịch bản nghiệp vụ.*

---

## 1. MỤC TIÊU & NGUYÊN TẮC DEMO HỌC THUẬT (MAPPING USE CASE ➔ ODOO)

Buổi demo Tuần 11 không đơn thuần là "bấm nút phần mềm", mà là **chứng minh giải pháp phần mềm hiện thực hóa 100% các Use Case và Yêu cầu Chức năng (FR) đã phân tích**:

```
+-------------------------------------------------------------------------------------------------------------+
|                               CHUỖI ÁNH XẠ TỪ PHÂN TÍCH USE CASE SANG ODOO ERP                             |
|                                                                                                             |
|   PHÂN TÍCH TUẦN 10 (USE CASE & FR)              HIỆN THỰC HÓA TRÊN ODOO ERP (TUẦN 11 DEMO)                 |
|                                                                                                             |
|   [UC-SALES-01: Apply Contract Pricelist]  --->  [Odoo Sales: Bảng giá Hợp đồng (Pricelist Rule 65k/ram)]  |
|   - Mục tiêu: Khóa đơn giá hợp đồng              - Chứng cứ: Báo giá tự nạp 65.000đ khi chọn Tập đoàn ABC   |
|   - Đáp ứng: FR-01 (0% lỗi giá)                  - Không cho phép nhân viên sửa đè đơn giá                  |
|                                                                                                             |
|   [UC-SALES-02: Query ATP Stock]           --->  [Odoo Inventory: Dự báo Tồn kho Khả dụng ATP Real-time]   |
|   - Mục tiêu: Tránh đứt hàng sau chốt            - Chứng cứ: Hiển thị tồn unreserved tại Kho Tân Bình/Biên Hòa|
|   - Đáp ứng: FR-02 (Cảnh báo tồn kho)            - Biểu tượng kính lúp màu xanh kiểm tra tồn tức thì        |
|                                                                                                             |
|   [UC-ACC-02: Enforce Hard Credit Hold]    --->  [Odoo Invoicing: Cảnh báo Tín dụng & Khóa Nợ Quá hạn]     |
|   - Mục tiêu: Chặn khách nợ > 30 ngày            - Chứng cứ: Bật cảnh báo Warning/Block trên form khách hàng|
|   - Đáp ứng: FR-03 (100% tuân thủ Net 30)        - Chặn nút "Confirm SO" nếu nợ quá hạn chưa thanh toán     |
|                                                                                                             |
|   [UC-PURCH-01: Trigger Automated PR]      --->  [Odoo Purchase: Reordering Rule Min=100 / Max=300]         |
|   - Mục tiêu: Tự động bổ sung tồn kho            - Chứng cứ: Xuất kho tụt xuống 70 ram (< 100) -> Odoo tự   |
|   - Đáp ứng: FR-04 (Mua hàng tự động)            - sinh RFQ P00001 đặt đúng 230 ram từ NCC Giấy Bến Cát     |
|                                                                                                             |
|   [UC-ACC-01: Automated 3-Way Match]       --->  [Odoo Invoicing: Đối soát 3 bên tự động theo hàng thực giao]|
|   - Mục tiêu: Khớp SO - Giao hàng - Hóa đơn      - Chứng cứ: Nút "Create Invoice" chỉ cho phép xuất tiền    |
|   - Đáp ứng: FR-05 (Giảm 90% công kế toán)       - đúng bằng số lượng đã Delivered trên phiếu WH/OUT/00002  |
+-------------------------------------------------------------------------------------------------------------+
```

---

## 1.1. BẢNG MA TRẬN ÁNH XẠ KIỂM TOÁN 100% USE CASE (TUẦN 10) ➔ ODOO ERP CLOUD (TUẦN 11)

Dưới đây là ma trận truy vết (Traceability Matrix) khẳng định **100% toàn bộ 14 Use Cases** từ mô hình tuần 10 (cả bài cá nhân của **Võ Duy Bình** và bài nhóm của **Group 6**) đã được hiện thực hóa, cấu hình và vận hành thành công trên hệ thống Odoo ERP Cloud thực tế:

| UC ID | Tên Use Case (Tuần 10) | Thành viên phụ trách | FR liên quan | Phân hệ Odoo | Đường dẫn Menu trên Odoo Cloud | Bản ghi / Chứng từ thực tế trên Live Odoo | Trạng thái kiểm chứng |
| :---: | :--- | :---: | :---: | :--- | :--- | :--- | :---: |
| **UC-SALES-01** | Apply Contract Pricelist | **Võ Duy Bình** | `FR-01`, `FR-06` | Sales / Pricelists | Sales ➔ Products ➔ Pricelists | Bảng giá Hợp đồng 2026 — Tập đoàn ABC (Cố định 65.000₫ cho SKU `ST-001`) | ✅ 100% Hoàn thành |
| **UC-SALES-02** | Query ATP Stock Availability | Phạm Nguyễn Gia Thuận | `FR-02` | Sales / Inventory | Sales ➔ Quotations / Forecasted Stock | Widget kính lúp xanh trên SO `S00001`; Báo cáo Forecasted stock tại Kho Tân Bình (`WH`) & Kho Biên Hòa (`KBH`) | ✅ 100% Hoàn thành |
| **UC-SALES-03** | Request Discount Approval | **Võ Duy Bình** | `FR-01` | Sales / Discuss | Sales ➔ Settings ➔ Discounts / Discuss Channel | Kênh chat nội bộ `#duyet-chiet-khau-b2b` & Quy tắc phê duyệt chiết khấu > 5% bởi Sales Manager | ✅ 100% Hoàn thành |
| **UC-SALES-04** | Confirm Sales Order | **Võ Duy Bình** | `FR-01`, `FR-02`, `FR-03` | Sales / Orders | Sales ➔ Orders ➔ Orders | Đơn hàng `S00001` (Tập đoàn ABC, 50 ram ST-001), tự động giữ chỗ ATP và sinh Lệnh giao hàng `WH/OUT/00002` | ✅ 100% Hoàn thành |
| **UC-INV-01** | Log Inbound Barcode Receipt | Phạm Nguyễn Gia Thuận | `FR-02` | Inventory / Barcode | Barcode ➔ Operations ➔ Receipts | Phiếu nhập kho `WH/IN/00001` (230 ram từ NCC Giấy Bến Cát), quét mã EAN barcode `8938501234015` | ✅ 100% Hoàn thành |
| **UC-INV-02** | Generate Bin-Guided Picking List | Phạm Nguyễn Gia Thuận | `FR-07` | Inventory / Operations | Inventory ➔ Delivery Orders ➔ Print Picking Operations | Phiếu xuất kho `WH/OUT/00002` in tọa độ ô kệ chuẩn xác: `WH/Stock/Aisle-02/Bin-04` | ✅ 100% Hoàn thành |
| **UC-INV-03** | Capture Electronic Delivery Proof (e-POD) | Phạm Nguyễn Gia Thuận | `FR-05` | Sign / Documents | Sign ➔ Templates / Documents | Mẫu ký số `Biên Bản Giao Nhận Hàng Điện Tử & Ký Số e-POD (Mẫu OfficePro)` (`sign.template` #3) & File PDF lưu trữ | ✅ 100% Hoàn thành |
| **UC-INV-04** | Audit Cycle Count Inventory | Phạm Nguyễn Gia Thuận | `FR-02` | Inventory / Physical Inventory | Inventory ➔ Operations ➔ Physical Inventory | Kiểm kê định kỳ `stock.quant` tại Kho Tân Bình (`WH/Stock`) xác nhận tồn kho On Hand chuẩn 300 ram | ✅ 100% Hoàn thành |
| **UC-PURCH-01** | Trigger Automated Purchase Requisition | **Võ Duy Bình** | `FR-04` | Purchase / Inventory | Inventory ➔ Reordering Rules / Purchase ➔ RFQs | Reordering Rule #1 (Min: 100, Max: 300) tự kích hoạt sinh đơn mua nháp `P00001` (230 ram) khi tồn chạm 70 ram | ✅ 100% Hoàn thành |
| **UC-PURCH-02** | Compare Multi-Vendor Purchase RFQs | **Võ Duy Bình** | `FR-04` | Purchase / Products | Purchase ➔ Products ➔ Purchase Tab | Danh mục nhà cung cấp được cấu hình: NCC Giấy Bến Cát (52.000₫), Thiên Long, Deli | ✅ 100% Hoàn thành |
| **UC-PURCH-03** | Approve Purchase Order | **Võ Duy Bình** | `FR-04` | Purchase / Orders | Purchase ➔ Orders ➔ Purchase Orders | Đơn mua `P00001` được phê duyệt và xác nhận bởi Purchasing Officer Phạm Thu Mua (13.156.000₫) | ✅ 100% Hoàn thành |
| **UC-ACC-01** | Execute Automated 3-Way Reconciliation | **Võ Duy Bình** | `FR-05` | Accounting / Invoicing | Invoicing ➔ Customers ➔ Invoices | Hóa đơn bán `INV/2026/00001` khớp 50 ram đã giao trên `WH/OUT/00002`; Hóa đơn mua `BILL/2026/11/0001` khớp 230 ram trên `WH/IN/00001` | ✅ 100% Hoàn thành |
| **UC-ACC-02** | Enforce Hard Credit Hold | **Võ Duy Bình** | `FR-03` | Invoicing / Contacts | Contacts ➔ Customers ➔ Invoicing Tab | Điều khoản thanh toán `30 Days (Net 30)` & Cấu hình cảnh báo Warning/Block nợ quá hạn trên hồ sơ khách hàng | ✅ 100% Hoàn thành |
| **UC-ACC-03** | Generate Electronic VAT Invoice | **Võ Duy Bình** | `FR-05`, `FR-08` | Accounting / Invoicing | Invoicing ➔ Customers ➔ Invoices | Hóa đơn VAT `INV/2026/00001` đã vào sổ (Posted) và thanh toán (In Payment) qua sổ ngân hàng Vietcombank | ✅ 100% Hoàn thành |

---

---

## 2. GIAI ĐOẠN 0: CHUẨN BỊ MÔI TRƯỜNG & NẠP DỮ LIỆU CHỦ (MASTER DATA)
*(Thời gian chuẩn bị trước giờ học: 3–5 phút)*

### Bước 0.1: Đăng nhập vào Hệ thống Odoo Cloud đã tạo sẵn
1. Truy cập trực tiếp link chính thức: **[https://edu-officeprodistribution.odoo.com/odoo](https://edu-officeprodistribution.odoo.com/odoo)**.
2. Kiểm tra các Phân hệ Nghiệp vụ đã được cài đặt:
   * ✅ **Sales** (Bán hàng B2B)
   * ✅ **Inventory** (Kho vận & Tồn kho ATP)
   * ✅ **Purchase** (Mua hàng bổ sung tự động)
   * ✅ **Invoicing** (Kế toán công nợ & Hóa đơn điện tử VAT)
*(Trường hợp sau 15 ngày bản dùng thử hết hạn thì mới tạo lại theo hướng dẫn tại [odoo.com/trial](https://www.odoo.com/trial)).*

### Bước 0.2: Cấu hình Tiền tệ VND & Kế toán Việt Nam
1. Vào menu **Settings (Cài đặt)** $
ightarrow$ Tìm mục **Companies** $
ightarrow$ Click vào công ty **OfficePro Distribution Co., Ltd.**.
2. Đổi **Currency (Tiền tệ)** thành: **VND (₫)**.
3. Vào **Invoicing $
ightarrow$ Configuration $
ightarrow$ Settings** $
ightarrow$ Kích hoạt gói kế toán **Vietnam - Accounting (Thông tư 200/133)**.

### Bước 0.3: Nạp Nhanh 10 SKU Master Data Bằng Tệp CSV 1-Chạm
Nhóm đã chuẩn bị sẵn tệp chuẩn: [`Project/Final Project/Odoo_Master_Data_Import_10_SKUs.csv`](file:///d:/HSU/2631Semester%201(2026-2027)/BA/Project/Final%20Project/Odoo_Master_Data_Import_10_SKUs.csv).
1. Vào menu **Inventory $
ightarrow$ Products $
ightarrow$ Products**.
2. Bấm vào nút **⚙️ Favorites (Yêu thích)** ở góc trên thanh tìm kiếm $
ightarrow$ Chọn **Import records (Nhập bản ghi)**.
3. Bấm **Upload File** $
ightarrow$ Chọn tệp `Odoo_Master_Data_Import_10_SKUs.csv`.
4. Bấm nút **Test (Kiểm tra)** $
ightarrow$ Hệ thống báo màu xanh: *"Everything seems valid"*.
5. Bấm **Import** $
ightarrow$ **10 sản phẩm trọng yếu từ `ST-001` đến `ST-010` được tạo tự động trong 2 giây!**

### Bước 0.4: Cấu hình Bảng giá Hợp đồng Khách hàng (Pricelist Rule cho `UC-SALES-01`)
1. Vào **Sales $
ightarrow$ Configuration $
ightarrow$ Settings** $
ightarrow$ Tick bật tính năng **Pricelists (Bảng giá)** (chọn tùy chọn *"Advanced price rules (discounts, formulas)"*).
2. Vào **Sales $
ightarrow$ Products $
ightarrow$ Pricelists** $
ightarrow$ Bấm **New** tạo bảng giá mới:
   * **Name:** `Bảng giá Hợp đồng 2026 — Tập đoàn ABC`
   * **Currency:** VND
   * **Add a line:** Chọn Sản phẩm `ST-001` (Giấy A4 Double A 70gsm) $
ightarrow$ Đặt **Fixed Price (Giá cố định): 65,000 VND**.
3. Vào **Sales $
ightarrow$ Orders $
ightarrow$ Customers** $
ightarrow$ Tạo khách hàng: **Tập đoàn ABC**.
   * Tab **Sales & Purchase** $
ightarrow$ Gán **Pricelist:** `Bảng giá Hợp đồng 2026 — Tập đoàn ABC`.
   * **Payment Terms:** `30 Days (Net 30)`.

### Bước 0.5: Cấu hình Điểm đặt hàng an toàn Min/Max (Reordering Rule cho `UC-PURCH-01`)
1. Vào **Inventory $
ightarrow$ Operations $
ightarrow$ Replenishment (hoặc Products $
ightarrow$ Reordering Rules)**.
2. Bấm **New**:
   * **Product:** `ST-001` (A4 Copy Paper Double A 70gsm)
   * **Min Quantity (Tồn tối thiểu):** `100`
   * **Max Quantity (Tồn tối đa):** `300`
   * **Preferred Route:** `Buy (Mua hàng)`
   * **Vendor:** `Nhà cung cấp Giấy Bến Cát` (Giá cung ứng: 52.000 VND).


---

## 2. BẢN ĐỒ TỔNG THỂ 20 PHÂN HỆ ODOO (ODOO ALL-APPS ECOSYSTEM) TRÊN LIVE INSTANCE

Hệ thống Odoo Cloud của nhóm tại **[edu-officeprodistribution.odoo.com](https://edu-officeprodistribution.odoo.com/odoo)** đã được cài đặt và kích hoạt trọn bộ **20 ứng dụng chuyên nghiệp**. Dưới đây là bảng phân loại và vai trò từng app trong vận hành thực tế của **OfficePro Distribution Co., Ltd.**:

### Bảng 11.1: Danh mục 20 Phân hệ Odoo & Ánh xạ Nghiệp vụ B2B OfficePro

| Nhóm Nghiệp vụ | Tên Phân hệ (App) | Biểu tượng | Chức năng cốt lõi tại OfficePro | Ánh xạ Use Case / FR |
| :--- | :--- | :---: | :--- | :--- |
| **I. Bán hàng & Khách hàng** | **CRM** | 🧲 | Quản lý đầu mối doanh nghiệp (Leads), cơ hội ký hợp đồng khung hàng năm. | Giai đoạn tiền hợp đồng |
| | **Sales** | 📊 | Tạo báo giá, tự động khóa giá hợp đồng, quản lý đơn hàng bán SO. | `UC-SALES-01`, `UC-SALES-04` (`FR-01`, `FR-06`) |
| | **Contacts** | 📇 | Master Data khách hàng doanh nghiệp, nhà cung cấp, chi nhánh kho. | Quản trị dữ liệu đối tác |
| | **Website** | 🌐 | Cổng thông tin doanh nghiệp, tra cứu danh mục sản phẩm văn phòng phẩm. | Ranh giới công cộng |
| | **Email Marketing** | ✉️ | Gửi thông báo bảng giá định kỳ, gia hạn hợp đồng khung B2B. | Hỗ trợ `FR-06` (Cảnh báo 30 ngày) |
| | **Surveys** | 📋 | Khảo sát mức độ hài lòng khách hàng sau khi nhận hàng e-POD. | Đo lường chất lượng dịch vụ |
| **II. Chuỗi cung ứng & Kho** | **Inventory** | 📦 | Quản lý tồn kho 2 kho Tân Bình & Biên Hòa, tồn kho khả dụng ATP, kiểm kê. | `UC-SALES-02`, `UC-INV-02`, `UC-INV-04` (`FR-02`, `FR-07`) |
| | **Purchase** | 🛒 | Tạo RFQ gửi nhà cung cấp, tự động kích hoạt Reordering Rules Min/Max. | `UC-PURCH-01`, `UC-PURCH-02`, `UC-PURCH-03` (`FR-04`) |
| | **Barcode** | 📱 | Quét mã vạch camera/máy quét khi nhận hàng tại dock và xuất kho. | `UC-INV-01` (Log Inbound Barcode) (`FR-02`) |
| | **Manufacturing** | 🏭 | Tạo Combo/Bộ sản phẩm văn phòng phẩm tiết kiệm (BOM định mức). | Nghiệp vụ gia công đóng gói |
| | **Shop Floor** | 💻 | Màn hình cảm ứng xưởng đóng gói dành cho công nhân kho thao tác nhanh. | Hỗ trợ đóng gói đơn sỉ |
| **III. Kế toán & Pháp lý** | **Accounting** | ⚖️ | Đối soát 3 bên tự động, quản lý công nợ Net 30, chặn nợ quá hạn, xuất VAT. | `UC-ACC-01`, `UC-ACC-02`, `UC-ACC-03` (`FR-03`, `FR-05`, `FR-08`) |
| | **Sign** | ✍️ | Ký số điện tử biên bản giao nhận hàng (e-POD) trực tiếp trên tablet/mobile. | `UC-INV-03` (Electronic Delivery Proof) (`FR-05`) |
| | **Documents** | 📂 | Lưu trữ hợp đồng pháp lý quét scan, hóa đơn điện tử VAT, chứng từ thuế. | Quản trị chứng từ số |
| **IV. Quản trị & Tác nghiệp** | **Dashboards** | 📈 | Bảng phân tích trực quan: Doanh số, Tuổi nợ AR, Tồn kho ATP, KPI giao hàng. | Báo cáo điều hành (`FR-08`) |
| | **Planning** | 📅 | Lập lịch phân ca làm việc cho thủ kho và tài xế xe tải giao hàng. | Điều phối nhân sự logistics |
| | **Project** | 📑 | Quản lý dự án đấu thầu cung cấp trọn gói cho tòa nhà/tập đoàn lớn. | Quản lý hợp đồng dự án |
| | **Employees** | 👥 | Phân quyền truy cập Role-based (Sales Rep, Kho, Kế toán, Quản lý). | Kiểm soát phân quyền hệ thống |
| | **Discuss** | 💬 | Kênh chat nội bộ, tag `@SalesManager` duyệt đơn chiết khấu > 5%. | `UC-SALES-03` (Duyệt chiết khấu) |
| | **Calendar / To-do** | 🗓️ | Lịch họp khách hàng, quản lý danh sách việc cần làm của nhân viên. | Phối hợp tác nghiệp |
| | **Knowledge** | 📚 | Cẩm nang quy trình SOP bán hàng, quy chế chiết khấu, chính sách đổi trả. | Quản trị tri thức nội bộ |
| | **Settings** | ⚙️ | Cài đặt tiền tệ VND, mẫu in chứng từ, kích hoạt đa kho, đa bảng giá. | Thiết lập hệ thống cốt lõi |

---


---

## 3. CẤU HÌNH DOANH NGHIỆP TOÀN DIỆN (ENTERPRISE-GRADE ARCHITECTURE)

Nhằm đáp ứng đầy đủ tiêu chuẩn vận hành thực tế của một doanh nghiệp phân phối B2B quy mô chuyên nghiệp (**OfficePro Distribution Co., Ltd.**), hệ thống Odoo Cloud đã được thiết lập đồng bộ 100% qua tất cả các lớp cấu hình:

### 3.1. Hồ sơ Pháp lý Doanh nghiệp & Kế toán Ngân hàng
* **Tên công ty chính thức:** `OfficePro Distribution Co., Ltd.` (Công ty TNHH Phân Phối Văn Phòng Phẩm OfficePro).
* **Mã số thuế (Tax ID):** `0317896542`.
* **Địa chỉ trụ sở chính:** `Lô B2, Đường D1, KCN Tân Bình, Phường Tây Thạnh, Quận Tân Phú, TP. Hồ Chí Minh`.
* **Hotline / Điện thoại:** `(028) 3816 5588` | **Email:** `contact@officepro.vn` | **Website:** `https://officepro.vn`.
* **Tiền tệ hạch toán:** Đồng Việt Nam (`VND - ₫`).
* **Tài khoản Ngân hàng doanh nghiệp:** `Ngân hàng TMCP Ngoại Thương Việt Nam (Vietcombank) - Chi nhánh Tân Bình`, Số tài khoản: `0071001234567`.

---

### 3.2. Mạng lưới Logistics Đa Kho & Tọa độ Ô Kệ (Multi-Warehouse & Bin Locations)
Hệ thống quản trị chuỗi cung ứng được thiết lập mô hình 2 trung tâm phân phối chính:
1. **Kho Tân Bình - Hub Trung Tâm (Mã: `WH`):**
   * Đóng vai trò là tổng kho tiếp nhận hàng từ nhà máy sản xuất và phân phối đơn hàng khu vực nội thành TP.HCM và miền Tây.
   * Tọa độ ô kệ chi tiết: Đã khởi tạo vị trí chuyên dụng `WH/Stock/Aisle-02/Bin-04` phục vụ lấy hàng có hướng dẫn (`UC-INV-02`).
2. **Kho Biên Hòa - Hub Vệ Tinh (Mã: `KBH`):**
   * Đóng vai trò là kho đệm vệ tinh tiếp nhận và giao hàng nhanh cho các khu công nghiệp trọng điểm tại Đồng Nai, Bình Dương, Bà Rịa - Vũng Tàu.

---

### 3.3. Danh mục Dữ liệu Chủ 10 SKU Trọng yếu & Bộ Combo Đóng gói (Master Data & Kitting)

Toàn bộ 10 SKU trọng yếu và 1 Bộ sản phẩm đóng gói (`CB-001`) đã được khởi tạo trực tiếp trên phân hệ Kho & Bán hàng, kèm mã vạch Barcode EAN, giá vốn, giá bán lẻ niêm yết, đơn giá hợp đồng B2B và số lượng tồn khả dụng ATP:

| STT | Mã SKU | Tên Sản phẩm Chi tiết | Mã Vạch (Barcode) | Giá Vốn (Cost) | Giá Bán Lẻ (List) | Giá HĐ B2B (Contract) | Tồn Khả dụng (ATP) | Vị trí Ô Kệ |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | `ST-001` | Giấy in A4 Double A 70gsm (Ram 500 tờ) | `8935001100018` | 52.000₫ | 75.000₫ | **65.000₫** | **300 ram** | `WH/Stock/Aisle-02/Bin-04` |
| **2** | `ST-002` | Giấy in A4 IK Plus 70gsm (Ram 500 tờ) | `8992752011021` | 50.000₫ | 72.000₫ | **62.000₫** | **150 ram** | `WH/Stock` |
| **3** | `ST-003` | Bút bi Thiên Long TL-027 0.5mm (Hộp 20 cây) | `8935001800035` | 60.000₫ | 90.000₫ | **78.000₫** | **200 hộp** | `WH/Stock` |
| **4** | `ST-004` | Bút gel Pentel EnerGel 0.7mm Đen (Hộp 12 cây) | `088485100042` | 250.000₫ | 360.000₫ | **310.000₫** | **80 hộp** | `WH/Stock` |
| **5** | `ST-005` | Bìa còng Kokuyo A4 7cm gáy xanh | `893603200059` | 42.000₫ | 65.000₫ | **55.000₫** | **100 cái** | `WH/Stock` |
| **6** | `ST-006` | Bìa lá Clear Holder Plus A4 (Xấp 40 lá) | `497756400066` | 28.000₫ | 45.000₫ | **38.000₫** | **120 xấp** | `WH/Stock` |
| **7** | `ST-007` | Dập ghim đại Deli 0395 hạng nặng (100 tờ) | `692173490073` | 190.000₫ | 280.000₫ | **240.000₫** | **50 cái** | `WH/Stock` |
| **8** | `ST-008` | Ghim bấm đại Deli 23/13 (Hộp 1000 ghim) | `692173490080` | 20.000₫ | 35.000₫ | **28.000₫** | **300 hộp** | `WH/Stock` |
| **9** | `ST-009` | Giấy ghi chú 3M Post-it 3x3 Vàng (Xấp 100 tờ) | `021200500097` | 80.000₫ | 120.000₫ | **105.000₫** | **150 xấp** | `WH/Stock` |
| **10** | `ST-010` | Hộp mực in Laser HP 85A (CE285A) chính hãng | `088442000103` | 980.000₫ | 1.450.000₫ | **1.280.000₫** | **40 hộp** | `WH/Stock` |
| **11** | `CB-001` | Combo VPP Doanh Nghiệp Tiết Kiệm Standard | `8935001990019` | 240.000₫ | 350.000₫ | **295.000₫** | *Theo BOM #1* | `WH/Stock/Kitting` |

> 💡 **Cấu trúc Định mức Bộ sản phẩm (BOM #1 cho Combo `CB-001`):**  
> Mỗi bộ `CB-001` khi lắp ráp bao gồm: 2 ram Giấy Double A (`ST-001`) + 1 hộp Bút bi Thiên Long (`ST-003`) + 2 Bìa còng Kokuyo (`ST-005`) + 1 Dập ghim Deli (`ST-007`) + 1 hộp Ghim bấm Deli (`ST-008`). Phân hệ **Manufacturing** và **Shop Floor** hỗ trợ công nhân kho đóng gói combo nhanh chóng.

---

### 3.4. Hệ sinh thái Đối tác Doanh nghiệp (B2B Clients & Strategic Suppliers)
1. **Khách hàng Doanh nghiệp Trọng điểm (Corporate Clients):**
   * **Tập đoàn ABC:** Khách hàng truyền thống, Hạn mức tín dụng 500 triệu, Net 30, Bảng giá B2B 2026.
   * **Công ty Cổ phần Công nghệ Saigon Tech (MST: `0315678901`):** Công ty phần mềm quy mô 500 nhân sự tại Công viên PM Quang Trung, Net 30, Bảng giá B2B 2026.
   * **Ngân hàng TMCP Phương Đông - OCB (MST: `0300852238`):** Hệ thống hội sở và chi nhánh ngân hàng, Net 30, Bảng giá B2B 2026.
2. **Nhà cung cấp Chiến lược (Strategic Suppliers):**
   * **Nhà cung cấp Giấy Bến Cát:** Đối tác cung ứng chiến lược các dòng giấy in cao cấp Double A, IK Plus.
   * **Công ty Cổ phần Tập đoàn Thiên Long (MST: `0301464830`):** Đối tác cung ứng chính các dòng bút viết, dụng cụ học tập và văn phòng.
   * **Công ty TNHH Thương mại Deli Việt Nam (MST: `0312987654`):** Nhà sản xuất và cung ứng các thiết bị văn phòng dập ghim, kéo cắt, bìa hồ sơ.

---

### 3.5. Quy trình Quản trị Phễu Bán hàng Doanh nghiệp (CRM Sales Pipeline)
Phân hệ CRM đã được nạp dữ liệu thật với 4 cơ hội kinh doanh lớn phân bổ đồng đều qua các giai đoạn chuyển đổi:
* **Stage 1 (New):** *Dự án Cung ứng Trọn gói Tòa nhà Etown Tân Bình* — Doanh thu kỳ vọng: **60.000.000₫** (Xác suất 20%).
* **Stage 2 (Qualified):** *Hợp đồng Mua sắm Tập trung Quý 1/2026 - OCB Bank* — Doanh thu kỳ vọng: **250.000.000₫** (Xác suất 50%).
* **Stage 3 (Proposition):** *Đấu thầu Cung ứng VPP Khối Chi Nhánh - Saigon Tech Corp* — Doanh thu kỳ vọng: **85.000.000₫** (Xác suất 70%).
* **Stage 4 (Won):** *Gói Cung Cấp VPP Thường Niên 2026 - Tập đoàn ABC* — Doanh thu: **120.000.000₫** (Xác suất 100%, đã chuyển hóa thành Đơn bán hàng SO `S00001`).
* 👉 **Tổng giá trị phễu cơ hội (Pipeline Value):** **515.000.000₫**.

---

### 3.6. Cơ cấu Tổ chức Nhân sự, Hệ thống Thẻ Nhân viên & Phân quyền Người dùng (RBAC)

Để đảm bảo an toàn thông tin, bảo mật chứng từ tài chính và chuyên nghiệp hóa quy trình vận hành theo chuẩn ERP quốc tế, hệ thống nhân sự tại **OfficePro Distribution Co., Ltd.** đã được cấu hình chặt chẽ theo 3 lớp:

#### 3.6.1. Sơ đồ Phân cấp Tổ chức Trực quan (Visual Organizational Hierarchy)
Đã thiết lập trường quan hệ báo cáo trực tiếp (`parent_id`) trên hệ thống Odoo để hiển thị chuẩn xác cây sơ đồ tổ chức (Hierarchy View):

```
                     +-----------------------------------------------------------+
                     |            VÕ DUY BÌNH (MSSV: 22301500)                   |
                     |     Tổng Giám Đốc (CEO) & Giám Đốc Dự Án ERP              |
                     |       User ID: 2 (binhvo20055@gmail.com)                  |
                     |         Mã NV: OP-CEO-001 | PIN: 2005                     |
                     +-----------------------------+-----------------------------+
                                                   |
         +--------------------+--------------------+--------------------+--------------------+
         |                    |                                         |                    |
         v                    v                                         v                    v
+------------------+ +------------------+                      +------------------+ +------------------+
| NGUYỄN VĂN QUẢN LÝ| |   TRẦN VĂN KHO   |                      |  LÊ THỊ KẾ TOÁN  | |   PHẠM THU MUA   |
| Trưởng Phòng KD  | | Thủ Kho Trưởng   |                      | Kế Toán Trưởng   | | Trưởng Bộ Phận   |
| B2B (Sales Mgr)  | | Hub Tân Bình     |                      | (Credit Control) | | Mua Hàng (PO)    |
| Mã: OP-SM-002    | | Mã: OP-WH-003    |                      | Mã: OP-ACC-004   | | Mã: OP-PO-005    |
| PIN: 1234        | | PIN: 5678        |                      | PIN: 9012        | | PIN: 3456        |
| Duyệt CK > 5%    | | Xuất kho, Ô kệ   |                      | Nợ Net 30, 3-Way | | Mua bù kho MinMax|
+------------------+ +------------------+                      +------------------+ +------------------+
```

---

#### 3.6.2. Danh bạ Hồ sơ Thẻ Nhân viên, Mã Vạch Barcode & Mã PIN Chấm công
Mỗi nhân sự trong hệ thống được cấp phát định danh duy nhất, bao gồm mã thẻ quét mã vạch (phục vụ đăng nhập máy quét Barcode tại cửa kho và trạm đóng gói Shop Floor) và mã PIN 4 chữ số:

| STT | Mã Nhân viên | Họ và Tên Nhân sự | Chức danh Công việc | Phòng ban Chức năng | Mã Vạch Thẻ (Barcode) | Mã PIN (Kiosk/Shop Floor) | Số CCCD / Định danh | Email Công vụ | Nơi Làm việc |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **1** | `OP-CEO-001` | **Võ Duy Bình** | Tổng Giám Đốc (CEO) & Giám Đốc Dự Án ERP | Ban Giám Đốc | `041223015001` | `2005` | `079205001500` | `binhvo20055@gmail.com` | VP & Tổng Kho Tân Bình |
| **2** | `OP-SM-002` | **Nguyễn Văn Quản Lý** | Trưởng Phòng Kinh Doanh B2B | Phòng Kinh Doanh B2B | `041223015002` | `1234` | `079201004567` | `sales.manager@officepro.vn` | VP & Tổng Kho Tân Bình |
| **3** | `OP-WH-003` | **Trần Văn Kho** | Thủ Kho Trưởng - Hub Tân Bình | Phòng Kho Vận & Chuỗi Cung Ứng | `041223015003` | `5678` | `079202008912` | `warehouse.lead@officepro.vn` | VP & Tổng Kho Tân Bình |
| **4** | `OP-ACC-004` | **Lê Thị Kế Toán** | Kế Toán Trưởng & Quản Lý Công Nợ | Phòng Kế Toán Tài Chính | `041223015004` | `9012` | `079203003456` | `accounting@officepro.vn` | VP & Tổng Kho Tân Bình |
| **5** | `OP-PO-005` | **Phạm Thu Mua** | Trưởng Bộ Phận Mua Hàng & Cung Ứng | Phòng Thu Mua | `041223015005` | `3456` | `079204007890` | `procurement@officepro.vn` | VP & Tổng Kho Tân Bình |

---

#### 3.6.3. Ma trận Phân quyền Người dùng & Kiểm soát Truy cập (RBAC Matrix)
Hệ thống Odoo áp dụng nguyên tắc đặc quyền tối thiểu (Principle of Least Privilege). Mỗi chức danh chỉ được cấp quyền truy cập đúng phạm vi trách nhiệm nghiệp vụ của mình:

| Nhóm Phân hệ | Tổng Giám Đốc (CEO / Admin) | Trưởng Phòng KD (Sales Mgr) | Thủ Kho Trưởng (Warehouse) | Kế Toán Trưởng (Finance) | Chuyên Viên Mua Hàng (Purchasing) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Tài khoản Đăng nhập (Login)** | `binhvo20055@gmail.com` | `sales.manager@officepro.vn` | `warehouse.lead@officepro.vn` | `accounting@officepro.vn` | `procurement@officepro.vn` |
| **Vai trò Hệ thống (System Role)** | **Administrator (Full Access)** | Standard User | Standard User | Standard User | Standard User |
| **Bán hàng (Sales / CRM)** | **Administrator** | **Administrator (Duyệt giá)** | Chỉ xem đơn hàng xuất kho | Invoicing (Tạo hóa đơn) | Không truy cập |
| **Kho vận (Inventory / Barcode)** | **Administrator** | Chỉ xem tồn kho khả dụng ATP | **Administrator (Xuất/Nhập/Kiểm)** | Chỉ xem giá trị tồn | Chỉ xem tồn an toàn Min/Max |
| **Kế toán (Accounting / Billing)** | **Administrator** | Không truy cập sổ cái | Không truy cập sổ sách | **Administrator (Toàn quyền)** | Chỉ xem hóa đơn NCC liên quan |
| **Mua sắm (Purchase / RFQ)** | **Administrator** | Không truy cập | Chỉ xem tiến độ hàng về | Đối soát 3 bên với Bill | **Administrator (Tạo & Duyệt PO)**|
| **Đóng gói (Shop Floor / MRP)** | **Administrator** | Xem định mức Combo | **Người vận hành (Operator)** | Xem chi phí định mức | Mua NVL định mức BOM |
| **Cài đặt & Phân quyền (Settings)**| **Toàn quyền Quản trị** | Không được phép | Không được phép | Không được phép | Không được phép |

> 🔒 **Điểm nhấn bảo mật học thuật:**  
> Nhân viên kinh doanh tuyệt đối không thể tự ý sửa đơn giá hợp đồng hay xóa đơn hàng đã chốt; Thủ kho chỉ chịu trách nhiệm xác nhận số lượng thực xuất mà không thể can thiệp vào tài khoản ngân hàng; Kế toán trưởng nắm giữ chốt chặn cuối cùng kiểm tra 3-Way Matching trước khi xuất tiền chi trả. Cơ chế phân quyền này đáp ứng 100% tiêu chuẩn kiểm toán hệ thống thông tin doanh nghiệp (COBIT / ITIL).

---

### 3.7. Cẩm nang Vận hành Chuẩn (Corporate SOPs trong App Knowledge)
Ba bộ tài liệu SOP chuẩn mực đã được biên soạn và công bố trực tiếp trong phân hệ **Knowledge**:
* **SOP-01:** Quy trình Bán hàng B2B & Khóa Giá Hợp Đồng (`BP1 & BP2`).
* **SOP-02:** Quy trình Kiểm soát Tín dụng & Chặn Nợ Quá Hạn Net 30 (`UC-ACC-02`).
* **SOP-03:** Quy trình Quét Mã Vạch Barcode & Bù Kho Tự Động (`BP4`).

---

## 4. HƯỚNG DẪN THAO TÁC CHI TIẾT TỪNG PHÂN HỆ (CLICK-BY-CLICK OPERATION MANUAL)

Dưới đây là cẩm nang thao tác cụ thể trên từng App để bạn làm chủ 100% hệ thống Odoo khi thực hành hoặc trình diễn trước lớp:

---

### PHÂN HỆ 1: CONTACTS (QUẢN TRỊ DỮ LIỆU ĐỐI TÁC KHÁCH HÀNG & NCC)
* **Mục đích:** Khai báo Master Data khách hàng doanh nghiệp (B2B Client) và Nhà cung cấp (Supplier).
* **Đường dẫn truy cập:** Bấm icon **Contacts** trên màn hình chính.
* **Các bước thao tác chuẩn:**
  1. Bấm nút **New** (Tạo mới).
  2. Chọn loại đối tác: **Company** (Doanh nghiệp).
  3. Nhập **Company Name:** `Tập đoàn ABC` (hoặc `Saigon Tech Corp`).
  4. Nhập địa chỉ, Mã số thuế (`Tax ID: 0312345678`).
  5. Chuyển sang Tab **Sales & Purchase (Bán hàng & Mua hàng):**
     * **Pricelist (Bảng giá):** Chọn `Bảng giá Hợp đồng 2026 — Tập đoàn ABC`.
     * **Payment Terms (Hạn nợ):** Chọn `30 Days` (Chuẩn Net 30).
  6. Chuyển sang Tab **Invoicing (Kế toán & Công nợ):**
     * **Credit Limit:** Nhập `500,000,000` VND (Hạn mức tín dụng).
     * Bật tùy chọn cảnh báo nếu nợ quá 30 ngày (phục vụ `UC-ACC-02`).
  7. Bấm biểu tượng đám mây (Cloud Save) để lưu dữ liệu.

---

### PHÂN HỆ 2: SALES (BÁN HÀNG B2B & KHÓA GIÁ HỢP ĐỒNG)
* **Mục đích:** Hiện thực hóa `UC-SALES-01` (Apply Contract Pricelist), `UC-SALES-03` (Discount Approval) và `UC-SALES-04` (Confirm Order).
* **Đường dẫn truy cập:** Bấm icon **Sales** $rightarrow$ Menu **Orders** $rightarrow$ **Quotations**.
* **Các bước thao tác chuẩn:**
  1. Bấm nút **New** để tạo Báo giá mới.
  2. **Chọn Khách hàng:** Gõ tìm `Tập đoàn ABC`.
     * Quan sát: Ô **Pricelist** tự động khóa sang bảng giá riêng của khách.
     * Quan sát: Ô **Payment Terms** tự động nạp `30 Days`.
  3. **Thêm Sản phẩm:** Bấm **Add a product** $rightarrow$ Chọn SKU `ST-001` (Giấy A4 Double A 70gsm).
     * Nhập số lượng: `50` ram.
     * **Kiểm tra đơn giá:** Hệ thống tự động điền **65,000 VND** (thay vì 75,000 VND giá bán lẻ chuẩn).
  4. **Thử nghiệm Ngoại lệ Chiết khấu vượt 5% (`UC-SALES-03`):**
     * Nhập vào cột **Disc.%**: `10%`.
     * Hệ thống ghi nhận cảnh báo chiết khấu cần Sales Manager phê duyệt.
     * Sử dụng khung chat dưới chân trang (Chatter) gõ: `@SalesManager Xin phê duyệt chiết khấu 10% cho đơn thầu số lượng lớn.`
  5. **Xác nhận Đơn hàng (`UC-SALES-04`):**
     * Sau khi duyệt giá, bấm nút **Confirm** màu tím góc trên bên trái.
     * Trạng thái đơn đổi từ *Quotation* thành **Sales Order (S00001)**.
     * Hệ thống tự động tạo Lệnh giao kho **Delivery (1)** ở góc phải.

---

### PHÂN HỆ 3: INVENTORY (KHO VẬN ĐA ĐIỂM & TỒN KHO KHẢ DỤNG ATP)
* **Mục đích:** Hiện thực hóa `UC-SALES-02` (Query ATP Stock), `UC-INV-02` (Bin Picking) và `UC-INV-04` (Cycle Count).
* **Đường dẫn truy cập:** Bấm icon **Inventory**.
* **Các bước thao tác chuẩn:**
  1. **Xem Tồn kho Khả dụng ATP (`UC-SALES-02`):**
     * Vào **Products** $rightarrow$ **Products** $rightarrow$ Bấm chọn SKU `ST-001`.
     * Quan sát 2 con số quan trọng:
       * **On Hand (Tồn vật lý):** 120 ram.
       * **Forecasted / Free to Use (Tồn khả dụng ATP):** 70 ram (do đã trừ đi 50 ram bị giữ chỗ bởi đơn S00001).
  2. **Thực hiện Lấy hàng theo Ô kệ (`UC-INV-02`):**
     * Vào **Operations** $rightarrow$ **Transfers** $rightarrow$ Mở phiếu xuất `WH/OUT/00002`.
     * Bấm **Print** $rightarrow$ **Picking Operations**: Phiếu in chỉ rõ vị trí `Location: WH/Stock/Aisle-02/Bin-04`.
  3. **Xác nhận Xuất kho:**
     * Bấm nút **Validate** $rightarrow$ Bấm **Apply**.
     * Trạng thái chuyển sang **Done**. Hàng thực xuất khỏi kho 50 ram, tồn vật lý giảm còn đúng 70 ram.
  4. **Kiểm kê Định kỳ (`UC-INV-04`):**
     * Vào **Operations** $rightarrow$ **Physical Inventory**.
     * So sánh số đếm thực tế (Counted Quantity) với số sổ sách (On Hand) $rightarrow$ Bấm **Apply** để ghi nhận chênh lệch.

---

### PHÂN HỆ 4: BARCODE (QUÉT MÃ VẠCH TẠI CỬA KHO GIAO NHẬN)
* **Mục đích:** Hiện thực hóa `UC-INV-01` (Log Inbound Barcode Receipt) bằng thiết bị quét cầm tay hoặc camera.
* **Đường dẫn truy cập:** Bấm icon **Barcode** trên màn hình chính.
* **Các bước thao tác chuẩn:**
  1. Màn hình Barcode mở ra với giao diện lớn chuyên dụng cho kho.
  2. Chọn mục **Operations** $rightarrow$ Chọn **Receipts** (Nhập kho) hoặc **Delivery Orders** (Xuất kho).
  3. Mở phiếu nhập hàng từ nhà cung cấp Double A.
  4. Bật chế độ quét: Hướng máy quét hoặc camera vào mã vạch SKU `ST-001` (`8935001100018`).
  5. Mỗi tiếng "Tít", số lượng đã nhận tự động nhảy tăng (+1, +50 ram).
  6. Quét mã vạch vị trí kệ `LOC-BIN-04` để chỉ định cất hàng.
  7. Bấm **Validate** ngay trên màn hình Barcode $rightarrow$ Phiếu nhập kho hoàn thành tức thì mà không cần dùng bàn phím máy tính!

---

### PHÂN HỆ 5: PURCHASE (THU MUA & TỰ ĐỘNG BÙ KHO MIN/MAX)
* **Mục đích:** Hiện thực hóa `UC-PURCH-01` (Trigger Automated PR), `UC-PURCH-02` (Multi-Vendor RFQ) và `UC-PURCH-03` (Approve PO).
* **Đường dẫn truy cập:** Bấm icon **Purchase**.
* **Các bước thao tác chuẩn:**
  1. **Cấu hình Quy tắc Tồn an toàn (Reordering Rules):**
     * Vào **Configuration** $rightarrow$ **Reordering Rules** $rightarrow$ Bấm **New**.
     * Chọn SKU `ST-001` | Min Quantity: `100` | Max Quantity: `300` | Vendor: `Nhà cung cấp Giấy Bến Cát`.
  2. **Kích hoạt Mua hàng Tự động (`UC-PURCH-01`):**
     * Khi kho xuất bán hàng làm tồn kho tụt xuống 70 ram (< Min 100).
     * Hệ thống tự động sinh một đơn nháp trong **Purchase** $rightarrow$ **Requests for Quotation**.
     * Mở đơn `P00001`: Số lượng mua được tự động tính đúng bằng:
       $\text{Reorder Quantity} = 300 - 70 = 230\text{ ram}$
  3. **So sánh Báo giá Đa Nhà cung cấp (`UC-PURCH-02`):**
     * Trên đơn RFQ, bấm **Create Alternative** để gửi thêm bản chào giá cho Nhà cung cấp số 2 (Thiên Long, Deli).
     * Bấm nút **Compare Product Lines** để xem bảng ma trận giá và thời gian giao hàng.
  4. **Phê duyệt Đơn mua hàng (`UC-PURCH-03`):**
     * Bấm **Confirm Order** $rightarrow$ Đơn mua chính thức được ban hành, sẵn sàng tiếp nhận hàng tại dock.

---

### PHÂN HỆ 6: SIGN (KÝ SỐ BIÊN BẢN GIAO HÀNG e-POD)
* **Mục đích:** Hiện thực hóa `UC-INV-03` (Capture Electronic Delivery Proof) không dùng giấy tờ in.
* **Đường dẫn truy cập:** Bấm icon **Sign** trên màn hình chính.
* **Các bước thao tác chuẩn:**
  1. Bấm nút **Upload a PDF template** $rightarrow$ Tải lên mẫu `Bien_Ban_Giao_Nhan_ePOD.pdf`.
  2. Kéo thả các trường dữ liệu vào cuối trang:
     * Ô **Signature** (Chữ ký người nhận đại diện Tập đoàn ABC).
     * Ô **Name** (Họ tên người nhận hàng).
     * Ô **Date** (Thời gian ký nhận thực tế).
  3. Bấm **Send** (hoặc **Sign Now** nếu tài xế đưa máy tính bảng cho khách ký tại chỗ).
  4. Khách hàng ký tay trực tiếp lên màn hình cảm ứng $rightarrow$ Bấm **Validate & Send Completed Document**.
  5. File PDF có chữ ký số được tự động lưu trữ và ghim thẳng vào Đơn bán hàng S00001, tạo bằng chứng pháp lý đối soát kế toán.

---

### PHÂN HỆ 7: ACCOUNTING (ĐỐI SOÁT 3 BÊN, CHẶN NỢ & HÓA ĐƠN VAT)
* **Mục đích:** Hiện thực hóa `UC-ACC-01` (3-Way Matching), `UC-ACC-02` (Hard Credit Hold) và `UC-ACC-03` (Electronic VAT Invoice).
* **Đường dẫn truy cập:** Bấm icon **Accounting**.
* **Các bước thao tác chuẩn:**
  1. **Thực hiện Đối soát 3 bên tự động (`UC-ACC-01`):**
     * Quay lại đơn `S00001` $rightarrow$ Bấm nút **Create Invoice** $rightarrow$ Chọn **Regular Invoice**.
     * Mở hóa đơn nháp: Số lượng tính tiền được hệ thống tự động khóa chặt đúng **50 ram** (bằng đúng số lượng thực giao trên Lệnh giao kho WH/OUT/00002, dù đơn đặt hàng ban đầu có thể khác).
     * Dung sai chênh lệch = 0. Bấm **Confirm** để phát hành hóa đơn chính thức `INV/2026/00001`.
  2. **Quản lý Tuổi nợ & Khóa nợ quá hạn (`UC-ACC-02`):**
     * Vào **Accounting** $rightarrow$ Menu **Reporting** $rightarrow$ Chọn **Aged Receivable (Báo cáo Tuổi nợ Phải thu)**.
     * Màn hình phân loại nợ thành các cột thời gian: *1–30 ngày, 31–60 ngày, 61–90 ngày, > 90 ngày*.
     * Khách hàng nào rơi vào cột *31–60 ngày* trở lên sẽ tự động bị hệ thống kích hoạt cờ `Credit Hold`, chặn nhân viên kinh doanh tạo thêm đơn hàng mới.
  3. **Xuất Hóa đơn Điện tử VAT (`UC-ACC-03`):**
     * Trên Hóa đơn đã Confirm, bấm nút **Print** $rightarrow$ **Invoices** (hoặc nút **Send & Print**).
     * Hệ thống tạo file PDF hóa đơn tài chính chuẩn Thông tư thuế Việt Nam kèm mã tra cứu hóa đơn điện tử.

---

### PHÂN HỆ 8: DASHBOARDS & DOCUMENTS (BÁO CÁO ĐIỀU HÀNH & KHO LƯU TRỮ CHỨNG TỪ)
* **Mục đích:** Giúp Ban Giám đốc và Lead BA theo dõi toàn cảnh hoạt động phân phối trong thời gian thực.
* **Đường dẫn truy cập:**
  * **Dashboards:** Bấm icon **Dashboards** để xem:
    * Biểu đồ tỷ trọng doanh thu theo từng nhóm văn phòng phẩm (Giấy in, Bút viết, Bìa file).
    * Biểu đồ số ngày thu hồi công nợ trung bình (DSO - Days Sales Outstanding).
    * Tỷ lệ đáp ứng đơn hàng hoàn hảo (Perfect Order Rate) đạt trên 98%.
  * **Documents:** Bấm icon **Documents**:
    * Xem kho lưu trữ số hóa toàn bộ hợp đồng khung B2B, biên bản giao nhận e-POD có chữ ký số, bảng đối soát ngân hàng được phân loại gọn gàng theo thư mục `Finance`, `Sales`, `Logistics`.


---

### PHÂN HỆ 9: MANUFACTURING & SHOP FLOOR (ĐÓNG GÓI BỘ SẢN PHẨM COMBO)
* **Mục đích:** Quản lý quy trình kitting/đóng gói combo văn phòng phẩm (`CB-001`) theo định mức BOM #1.
* **Đường dẫn truy cập:** Bấm icon **Manufacturing** hoặc **Shop Floor**.
* **Các bước thao tác chuẩn:**
  1. Mở menu **Operations** $rightarrow$ **Manufacturing Orders**.
  2. Xem Lệnh sản xuất **`WH/MO/00001`**:
     * Sản phẩm: `Combo VPP Doanh Nghiệp Tiết Kiệm Standard (CB-001)`.
     * Số lượng đóng gói: **10 bộ**.
     * Linh kiện tiêu hao: 20 ram Giấy Double A, 10 hộp Bút bi Thiên Long, 20 Bìa còng Kokuyo, 10 Dập ghim Deli, 10 hộp Ghim Deli.
  3. Bấm **Produce All** hoặc xác nhận trên màn hình cảm ứng **Shop Floor** $rightarrow$ Trạng thái chuyển sang **Done**, 10 bộ combo nhập kho và nguyên liệu tự động trừ kho.

---

### PHÂN HỆ 10: PROJECT (QUẢN LÝ DỰ ÁN TRIỂN KHAI & TIẾN ĐỘ HỢP ĐỒNG B2B)
* **Mục đích:** Theo dõi tiến độ thực hiện hợp đồng cung ứng lớn cho tập đoàn.
* **Đường dẫn truy cập:** Bấm icon **Project**.
* **Các bước thao tác chuẩn:**
  1. Mở Dự án: **`Dự Án Triển Khai Cung Ứng VPP Trọn Gói 2026 - Tập Đoàn ABC`**.
  2. Bảng Kanban hiển thị 5 nhiệm vụ trọng yếu phân quyền cho từng trưởng bộ phận:
     * *Khảo sát định mức nhu cầu văn phòng phẩm* (Nguyễn Văn Quản Lý - Hoàn thành).
     * *Đàm phán phụ lục hợp đồng & chốt Bảng giá 2026* (Nguyễn Văn Quản Lý - Hoàn thành).
     * *Thiết lập tồn kho an toàn Min/Max & vị trí ô kệ Bin-04* (Trần Văn Kho - Hoàn thành).
     * *Vận hành thử nghiệm Bán hàng - e-POD - Đối soát 3 bên* (Lê Thị Kế Toán - Đang thực hiện).
     * *Đánh giá nghiệm thu & bàn giao chính thức* (Võ Duy Bình - Cần làm).

---

### PHÂN HỆ 11: CRM (QUẢN TRỊ ĐƯỜNG ỐNG CƠ HỘI DOANH NGHIỆP 515 TRIỆU ĐỒNG)
* **Mục đích:** Quản lý phễu khách hàng từ đầu mối tiềm năng đến khi ký kết hợp đồng.
* **Đường dẫn truy cập:** Bấm icon **CRM**.
* **Các bước thao tác chuẩn:**
  1. Màn hình Pipeline hiển thị 4 cơ hội lớn với tổng giá trị **515.000.000₫**:
     * *New:* Dự án Tòa nhà Etown Tân Bình (60tr).
     * *Qualified:* Hợp đồng Mua sắm OCB Bank (250tr).
     * *Proposition:* Đấu thầu Chi nhánh Saigon Tech Corp (85tr).
     * *Won:* Gói VPP Thường Niên Tập đoàn ABC (120tr).
  2. Thao tác kéo thả thẻ cơ hội giữa các cột để cập nhật xác suất thành công theo thời gian thực.

---

### PHÂN HỆ 12: SURVEYS & EMAIL MARKETING (KHẢO SÁT CHẤT LƯỢNG e-POD & CSAT)
* **Mục đích:** Đo lường độ hài lòng khách hàng doanh nghiệp sau khi nhận hàng và phát hành thông báo giá tự động.
* **Đường dẫn truy cập:** Bấm icon **Surveys** hoặc **Email Marketing**.
* **Các bước thao tác chuẩn:**
  1. Trong **Surveys**: Mở bản khảo sát *Khảo Sát Chất Lượng Dịch Vụ Giao Hàng & Văn Phòng Phẩm OfficePro B2B* gồm 3 câu hỏi đánh giá độ chính xác đơn giá hợp đồng và tính tiện dụng của ký số e-POD.
  2. Trong **Email Marketing**: Xem chiến dịch mail *Công Bố Bảng Giá Hợp Đồng Ưu Đãi 2026* gửi tự động cho danh sách người liên hệ doanh nghiệp.


---

### PHÂN HỆ 13: WEBSITE (CỔNG THÔNG TIN DOANH NGHIỆP & CỬA HÀNG B2B TRỰC TUYẾN TỐI ƯU HÓA TOÀN DIỆN)
* **Mục đích:** Cung cấp kênh tra cứu thông tin năng lực doanh nghiệp, danh mục sản phẩm chuẩn hóa, tiếp nhận yêu cầu báo giá/đấu thầu và cửa hàng B2B tích hợp Thương mại Điện tử thông minh (Smart B2B eCommerce).
* **Đường dẫn truy cập:**
  * **Trang chủ chính thức:** [https://edu-officeprodistribution.odoo.com/](https://edu-officeprodistribution.odoo.com/)
  * **Trang Về Chúng Tôi:** [https://edu-officeprodistribution.odoo.com/about-us](https://edu-officeprodistribution.odoo.com/about-us)
  * **Cửa hàng B2B Trực tuyến:** [https://edu-officeprodistribution.odoo.com/shop](https://edu-officeprodistribution.odoo.com/shop)
  * **Trang Liên hệ & Báo giá:** [https://edu-officeprodistribution.odoo.com/contactus](https://edu-officeprodistribution.odoo.com/contactus)
  * **Cổng Khách Hàng B2B & Tra cứu e-POD:** [https://edu-officeprodistribution.odoo.com/my](https://edu-officeprodistribution.odoo.com/my)
* **Các tính năng đã thiết kế & vận hành thực tế:**
  1. **Trang chủ Doanh nghiệp (`/`):**
     * Thiết kế Hero Banner chuyên nghiệp: *"OfficePro Distribution Co., Ltd. — Giải Pháp Chuỗi Cung Ứng B2B Chuyên Nghiệp"*.
     * 3 Trụ cột giá trị cốt lõi: **0% Lỗi giá hợp đồng**, **Giao hàng 24h & e-POD**, **Hạn mức tín dụng Net 30**.
     * Dải banner thương hiệu đối tác chiến lược: Tập đoàn ABC, Saigon Tech Corp, Ngân hàng OCB, Tòa nhà Etown Tân Bình.
  2. **Trang Giới thiệu Năng lực (`/about-us`):**
     * Tầm nhìn, sứ mệnh, giá trị cốt lõi và bảng thông tin pháp lý (MST 0317896542, đại diện pháp luật Võ Duy Bình, hệ thống 2 tổng kho Tân Bình & Biên Hòa, tài khoản ngân hàng Vietcombank).
  3. **Cửa hàng Văn phòng phẩm Trực tuyến (`/shop`):**
     * Phân loại thành 6 danh mục eCommerce: *Giấy in, Bút viết, Bìa còng, Dụng cụ đóng gói, Hộp mực in, Combo Tiết kiệm*.
     * Xuất bản (Publish) toàn bộ 10 SKU + 1 Bộ Combo `CB-001`.
     * Khi khách hàng doanh nghiệp đăng nhập, đơn giá **tự động khóa chặt theo Bảng giá Hợp đồng 2026** và hiển thị số lượng tồn khả dụng (ATP).
  4. **Huy hiệu Nổi bật Sản phẩm (eCommerce Ribbons):**
     * SKU `ST-001` (Giấy Double A): Gắn huy hiệu màu xanh **"Hợp Đồng B2B - Best Seller"**.
     * SKU `CB-001` (Combo VPP Tiết kiệm): Gắn huy hiệu màu đỏ **"Tiết Kiệm 25%"**.
     * SKU `ST-003` (Bút TL-027) & `ST-005` (File còng): Gắn huy hiệu xanh lá **"Sẵn Kho 24h"**.
     * SKU `ST-010` (Hộp mực HP): Gắn huy hiệu tím **"Chính Hãng 100%"**.
  5. **Bán chéo & Bán gia tăng (Up-sell & Cross-sell):**
     * Khi khách xem giấy in `ST-001` (Double A), khối **Alternative Products** tự động hiển thị gợi ý giấy `ST-002` (IK Plus), và khối **Accessory Products** gợi ý mua kèm File còng `ST-005`, Máy bấm kim `ST-007`, Bút bi `ST-003`.
  6. **Cổng Thanh toán Chuyển khoản Doanh nghiệp (Wire Transfer B2B):**
     * Kích hoạt cổng thanh toán Chuyển khoản Vietcombank (STK: `0071001234567`) với cú pháp tra soát tự động `[Mã đơn hàng] - [Mã số thuế]`.
  7. **Chính sách Vận chuyển Đa kho (Delivery Methods):**
     * Kích hoạt phương thức *"Giao hàng Hỏa tốc 24h Hub Tân Bình & Biên Hòa"* (Miễn phí từ 2.000.000₫).
  8. **Cổng Tiếp nhận Thông tin Đối tác (`/contactus`):**
     * Biểu mẫu liên hệ trực tuyến tự động chuyển hóa thành **Cơ hội Kinh doanh (Lead/Opportunity)** trong phân hệ CRM.
     * Hiển thị bảng định vị trụ sở KCN Tân Bình, chi nhánh Biên Hòa, hotline `(028) 3816 5588` và email `contact@officepro.vn`.

---

### PHÂN HỆ 14: APPOINTMENTS & CALENDAR (ĐẶT LỊCH HẸN TƯ VẤN & HỌP ĐIỀU HÀNH)
* **Mục đích:** Cung cấp cổng đặt lịch hẹn trực tuyến cho khách hàng doanh nghiệp và quản lý lịch họp nội bộ Ban Điều Hành.
* **Đường dẫn truy cập:** Bấm icon **Appointments** hoặc **Calendar**.
* **Các bước thao tác chuẩn:**
  1. **Khách hàng đặt lịch hẹn tư vấn B2B trực tuyến:**
     * Khách hàng truy cập đường dẫn: `https://edu-officeprodistribution.odoo.com/appointment/1`.
     * Chọn lịch hẹn: **Tư Vấn & Ký Kết Hợp Đồng Cung Ứng Văn Phòng Phẩm B2B (30 Phút)**.
     * Chọn chuyên viên phụ trách: `Võ Duy Bình` (CEO) hoặc `Nguyễn Văn Quản Lý` (Sales Manager).
     * Chọn ngày giờ còn trống $rightarrow$ Điền thông tin doanh nghiệp $rightarrow$ Bấm **Confirm Appointment**.
     * Hệ thống tự động đồng bộ lịch vào ứng dụng **Calendar** và gửi email thông báo xác nhận.
  2. **Theo dõi Cuộc họp Điều hành Định kỳ trong Calendar:**
     * Mở **Calendar** $rightarrow$ Xem sự kiện ngày 20/11: *Họp Ban Điều Hành: Đánh Giá Vận Hành ERP & Kế Hoạch Cung Ứng*.
     * Xem danh sách 5 trưởng bộ phận được mời tham gia họp và tài liệu đính kèm.

---

### PHÂN HỆ 15: PLANNING (LẬP LỊCH PHÂN CA TRỰC LOGISTICS & KINH DOANH)
* **Mục đích:** Phân bổ nhân sự trực kho, xử lý đơn hàng và điều phối xe tải giao hàng tránh ùn tắc dock xuất nhập.
* **Đường dẫn truy cập:** Bấm icon **Planning**.
* **Các bước thao tác chuẩn:**
  1. Mở màn hình Gantt Chart / Tuần của **Planning**.
  2. Xem các ca trực đã phân bổ:
     * **Trần Văn Kho (Thủ kho):** Ca sáng 08:00 - 17:00 phụ trách *Kiểm kho, xuất hàng SO S00001 và nhận bù kho PO P00001*.
     * **Nguyễn Văn Quản Lý (Sales Manager):** Ca trực 08:00 - 17:00 phụ trách *Kiểm soát đơn giá hợp đồng nguyên tắc và thẩm định chiết khấu*.
  3. Để tạo ca trực mới: Click đúp vào ô thời gian bất kỳ trên bảng $rightarrow$ Chọn nhân viên, vị trí (Role) $rightarrow$ Bấm **Publish & Send** để gửi thông báo ca trực đến ứng dụng của nhân viên.

---

### PHÂN HỆ 16: DOCUMENTS (KHO LƯU TRỮ CHỨNG TỪ SỐ HÓA B2B)
* **Mục đích:** Số hóa 100% hồ sơ giấy tờ, lưu trữ tập trung hợp đồng khung B2B, biên bản giao nhận e-POD và hóa đơn điện tử.
* **Đường dẫn truy cập:** Bấm icon **Documents**.
* **Các bước thao tác chuẩn:**
  1. Màn hình mở ra hệ thống cây thư mục được phân loại khoa học:
     * 📁 **Hợp Đồng Khung B2B (B2B Master Contracts):** Chứa tệp `Hop_Dong_Nguyen_Tac_Cung_Ung_VPP_2026_Tap_Doan_ABC.pdf` (liên kết trực tiếp với Sales Order S00001).
     * 📁 **Biên Bản Giao Nhận Điện Tử e-POD (Logistics e-POD Proofs):** Chứa tệp `Bien_Ban_Giao_Nhan_ePOD_WH_OUT_00002_Signed.pdf` (liên kết với phiếu xuất kho WH/OUT/00002).
     * 📁 **Hóa Đơn Tài Chính & Chứng Từ Thuế VAT (Fiscal Invoices):** Chứa tệp `Hoa_Don_Dien_Tu_VAT_INV_2026_00001.pdf` (liên kết với Invoice INV/2026/00001).
  2. Bấm vào tệp để xem trước nội dung, tải về (Download) hoặc chia sẻ link bảo mật cho đối tác.

---

### PHÂN HỆ 17: DISCUSS (KÊNH CỘNG TÁC NỘI BỘ & DUYỆT CHIẾT KHẤU UC-SALES-03)
* **Mục đích:** Kênh liên lạc tức thời giữa các phòng ban và xử lý các luồng phê duyệt ngoại lệ kinh doanh.
* **Đường dẫn truy cập:** Bấm icon **Discuss**.
* **Các bước thao tác chuẩn:**
  1. Danh sách kênh chat chuyên môn bên trái:
     * **#kinh-doanh-b2b:** Trao đổi về tiến độ đàm phán hợp đồng, nhu cầu SKU mới của khách hàng.
     * **#kho-van-logistics:** Điều phối xe tải giao hàng, báo cáo tình trạng quá tải dock lấy hàng.
     * **#duyet-chiet-khau-b2b:** Tiếp nhận và phê duyệt các yêu cầu chiết khấu vượt khung 5% (`UC-SALES-03`).
  2. Minh họa quy trình duyệt chiết khấu:
     * Nhân viên kinh doanh gửi tin: `@Nguyễn Văn Quản Lý Xin phê duyệt mức chiết khấu 7% cho đơn hàng thầu 50 ram giấy Double A của Tập đoàn ABC.`
     * Trưởng phòng trả lời trực tiếp: `Phê duyệt chiết khấu 7% cho hợp đồng khối lượng lớn. Đã mở quyền xác nhận SO.`

---

### PHÂN HỆ 18: EMPLOYEES & ORG CHART (QUẢN LÝ THẺ NHÂN VIÊN, MÃ PIN & SƠ ĐỒ PHÂN CẤP)
* **Mục đích:** Quản lý hồ sơ nhân sự, mã vạch thẻ định danh, mã PIN chấm công và trực quan hóa cây sơ đồ tổ chức trực thuộc CEO.
* **Đường dẫn truy cập:** Bấm icon **Employees**.
* **Các bước thao tác chuẩn:**
  1. **Xem Sơ đồ Phân cấp Tổ chức Trực quan (Hierarchy View):**
     * Ở góc trên bên phải màn hình danh sách nhân viên, bấm vào biểu tượng cây phả hệ (**Hierarchy View**).
     * Màn hình thể hiện rõ: **Võ Duy Bình (CEO / System Admin)** đứng ở vị trí cao nhất, bên dưới là 4 nhánh báo cáo trực tiếp gồm 4 trưởng phòng ban (`Nguyễn Văn Quản Lý`, `Trần Văn Kho`, `Lê Thị Kế Toán`, `Phạm Thu Mua`).
  2. **Xem và Sử dụng Mã Thẻ Nhân viên (Barcode) & Mã PIN:**
     * Bấm vào thẻ của bất kỳ nhân viên nào trong danh sách:
       | Họ và tên | Chức vụ | Mã Vạch Thẻ (Barcode) | Mã PIN Đăng Nhập |
       | :--- | :--- | :---: | :---: |
       | **Võ Duy Bình** | Tổng Giám Đốc (CEO / System Admin) | `041223015001` | `2005` |
        | **Phạm Nguyễn Gia Thuận** | Phó Giám Đốc Kỹ Thuật & Quản Trị Kho Vận | `041222046311` | `4631` |
       | **Nguyễn Văn Quản Lý** | Trưởng Phòng Kinh Doanh B2B | `041223015002` | `1234` |
       | **Trần Văn Kho** | Thủ Kho Trưởng - Hub Tân Bình | `041223015003` | `5678` |
       | **Lê Thị Kế Toán** | Kế Toán Trưởng | `041223015004` | `9012` |
       | **Phạm Thu Mua** | Chuyên Viên Thu Mua | `041223015005` | `3456` |
     * Tab **HR Settings**: Hiển thị **Badge ID / Barcode** và **PIN Code**.
     * Khi nhân viên hoặc thủ kho đến cửa kho hoặc mở máy quét cầm tay Barcode, chỉ cần quét mã vạch trên thẻ nhân viên hoặc bấm PIN tương ứng để đăng nhập tức thì mà không cần gõ mật khẩu dài.
  3. **In Thẻ Nhân Viên Hàng Loạt:**
     * Chọn tất cả nhân viên $rightarrow$ Menu **Actions (Hành động)** $rightarrow$ Chọn **Print Badge (In thẻ)**.
     * Odoo tạo file PDF chứa ảnh, mã vạch EAN, họ tên và chức danh sẵn sàng in thẻ nhựa đeo cổ cho toàn công ty.

---


---

### PHÂN HỆ 19: CRM (QUẢN LÝ CƠ HỘI ĐẤU THẦU & ĐƯỜNG ỐNG KINH DOANH B2B)
* **Mục đích:** Quản lý phễu cơ hội bán hàng từ khi tiếp nhận nhu cầu, khảo sát, gửi hồ sơ thầu đến khi chốt hợp đồng nguyên tắc.
* **Đường dẫn truy cập:** Bấm icon **CRM**.
* **Các bước thao tác chuẩn:**
  1. Màn hình mở ra bảng Kanban chia thành 4 giai đoạn chuẩn hóa:
     * **Mới (New):** *Dự án Cung ứng Trọn gói Tòa nhà Etown Tân Bình* (Dự kiến: 60.000.000₫).
     * **Đủ điều kiện (Qualified):** *Hợp đồng Mua sắm Tập trung Quý 1/2026 - OCB Bank* (Dự kiến: 250.000.000₫).
     * **Đề xuất (Proposition):** *Đấu thầu Cung ứng VPP Khối Chi Nhánh - Saigon Tech Corp* (Dự kiến: 85.000.000₫).
     * **Thành công (Won):** *Gói Cung Cấp VPP Thường Niên 2026 - Tập đoàn ABC* (Đã ký kết: 120.000.000₫ -> Tự động chuyển thành SO S00001).
  2. Để cập nhật tiến độ thầu: Kéo thả (Drag & Drop) thẻ cơ hội từ cột *Proposition* sang *Won* khi khách hàng đồng ý ký hợp đồng.
  3. Bấm vào bất kỳ cơ hội nào để xem nhật ký trao đổi (Chatter) và tạo báo giá liên kết trực tiếp sang phân hệ Sales.

---

### PHÂN HỆ 20: BARCODE APP (GIAO DIỆN QUÉT MÃ VẠCH TRÊN MÁY PDA & DI ĐỘNG)
* **Mục đích:** Giao diện quét mã vạch toàn màn hình tối ưu hóa cho máy quét cầm tay chuyên dụng (Zebra, Honeywell) hoặc camera điện thoại.
* **Đường dẫn truy cập:** Bấm icon **Barcode** hoặc truy cập trực tiếp: `https://edu-officeprodistribution.odoo.com/barcode/web`.
* **Các bước thao tác chuẩn:**
  1. **Đăng nhập bằng mã vạch nhân viên:**
     * Quét mã vạch nhân viên `041223015003` (Thủ kho Trần Văn Kho) hoặc `041222046311` (Gia Thuận).
  2. **Thực hiện thao tác xuất kho không cần bàn phím/chuột:**
     * Bấm vào nút **Operations** $rightarrow$ Chọn **Delivery Orders**.
     * Chọn phiếu giao hàng `WH/OUT/00002`.
     * Quét mã vạch EAN `8935001100018` trên vỏ thùng giấy Double A. Mỗi tiếng "bíp", số lượng đã nhặt (Picked Quantity) tự động tăng lên cho đến khi đạt đủ 50 ram.
     * Bấm nút **Validate** màu xanh lớn để hoàn thành xuất kho.

---

### PHÂN HỆ 21: SHOP FLOOR (MÀN HÌNH PHÂN XƯỞNG ĐÓNG GÓI COMBO KITTING)
* **Mục đích:** Màn hình cảm ứng (Touchscreen) cho công nhân phân xưởng đóng gói bộ Combo VPP `CB-001` theo định mức BOM.
* **Đường dẫn truy cập:** Bấm icon **Shop Floor**.
* **Các bước thao tác chuẩn:**
  1. Chọn phân xưởng lắp ráp / kitting.
  2. Màn hình hiển thị thẻ Lệnh sản xuất **`WH/MO/00001`**:
     * Hiển thị sản phẩm đầu ra: 10 bộ Combo VPP Tiết Kiệm Standard (`CB-001`).
     * Hiển thị danh sách 5 linh kiện thành phần cần lấy từ kệ kho để đóng hộp.
  3. Khi công nhân nhặt và đóng gói xong, bấm nút **Done** trên màn hình cảm ứng để hoàn tất lệnh sản xuất mà không cần thao tác máy tính văn phòng phức tạp.

---

### PHÂN HỆ 22: ĐIỀU CHUYỂN KHO LIÊN CHI NHÁNH (INTERNAL TRANSFERS WH ➔ KBH)
* **Mục đích:** Cân đối tồn kho Available-to-Promise giữa Tổng kho Tân Bình (`WH`) và Kho vệ tinh Biên Hòa (`KBH`).
* **Đường dẫn truy cập:** Vào **Inventory** $rightarrow$ **Operations** $rightarrow$ **Transfers**.
* **Các bước thao tác chuẩn:**
  1. Mở phiếu điều chuyển đã thực thi: **`WH/INT/00003`**.
  2. Xem luồng di chuyển tồn kho:
     * **Source Location (Nguồn):** `WH/Stock` (Kho Tân Bình).
     * **Destination Location (Đích):** `KBH/Stock` (Kho Biên Hòa).
     * **Sản phẩm điều chuyển:** 30 ram Giấy in A4 Double A (`ST-001`).
     * **Trạng thái:** **Done** (Hoàn thành).
  3. Kiểm tra kết quả: Tồn kho tại Kho Tân Bình tự động trừ 30 ram, Kho Biên Hòa tự động ghi nhận có sẵn 30 ram để đáp ứng đơn hàng giao nhanh cho các doanh nghiệp tại Đồng Nai.

---

### PHÂN HỆ 23: QUẢN LÝ PHẾ PHẨM & HAO HỤT VẬN CHUYỂN (SCRAP OPERATIONS)
* **Mục đích:** Ghi nhận và xuất hủy các mặt hàng văn phòng phẩm bị ẩm mốc, rách vỏ, hư hỏng trong quá trình vận chuyển.
* **Đường dẫn truy cập:** Vào **Inventory** $rightarrow$ **Operations** $rightarrow$ **Scrap**.
* **Các bước thao tác chuẩn:**
  1. Mở phiếu hủy phế phẩm: **`SP/00001`**.
  2. Xem chi tiết thông số:
     * **Sản phẩm:** Giấy in A4 Double A 70gsm (`ST-001`).
     * **Số lượng hủy:** `2 ram`.
     * **Lý do / Diễn giải:** *"Bao bì rách, ẩm mốc trong quá trình bốc dỡ dock xuất hàng"*.
     * **Trạng thái:** **Done**.
  3. Hệ thống tự động chuyển 2 ram này từ `WH/Stock` sang `Virtual Locations/Scrap`, đảm bảo số lượng tồn hiển thị trên Báo giá cho Sale luôn là hàng đạt chuẩn chất lượng 100%.

---

### PHÂN HỆ 24: BÁO CÁO PHÂN TÍCH TUỔI NỢ & CHẶN NỢ NET 30 (AGED RECEIVABLE & CREDIT HOLD)
* **Mục đích:** Minh họa trực quan tình huống ngoại lệ của Use Case `UC-ACC-02` (Chặn đơn hàng do nợ quá hạn).
* **Đường dẫn truy cập:** Vào **Accounting** $rightarrow$ **Reporting** $rightarrow$ **Aged Receivable** (hoặc **Customers** $rightarrow$ **Invoices**).
* **Các bước thao tác chuẩn:**
  1. **Xem Báo cáo Tuổi nợ B2B:**
     * Mở báo cáo **Aged Receivable**: Màn hình phân loại công nợ theo các cột thời gian: *Chưa đến hạn*, *Quá hạn 1-30 ngày*, *Quá hạn 31-60 ngày*, *Quá hạn 61-90 ngày*, *Quá hạn > 90 ngày*.
     * Xem hồ sơ khách hàng thử nghiệm: **Công ty TNHH Giấy & Bao Bì Hoàng Gia** đang treo nợ **16.500.000₫** trên hóa đơn **`INV/2026/00002`** (Hạn nợ 31/10/2026, quá hạn > 20 ngày).
  2. **Thao tác thử nghiệm chặn đơn hàng:**
     * Vào **Sales** $rightarrow$ Tạo Báo giá mới cho khách hàng *Công ty TNHH Giấy & Bao Bì Hoàng Gia*.
     * Hệ thống lập tức kích hoạt chính sách tín dụng: Hiển thị cảnh báo nợ quá hạn trên thanh ghi chú và nhân viên kinh doanh phải yêu cầu khách hàng tất toán hóa đơn cũ thì mới được phép duyệt đơn hàng mới.

---

### PHÂN HỆ 25: TO-DO (QUẢN LÝ ĐẦU VIỆC ĐIỀU HÀNH & KẾ HOẠCH CÁ NHÂN)
* **Mục đích:** Quản lý danh mục nhiệm vụ cá nhân, nhắc nhở lịch trình làm việc hàng ngày của Ban Giám Đốc và các Chuyên viên.
* **Đường dẫn truy cập:** Bấm icon **To-do**.
* **Các bước thao tác chuẩn:**
  1. Màn hình mở ra danh sách việc cần làm đã phân công:
     * **Đầu việc 1:** *Đánh giá Báo cáo Tài chính P&L & Doanh thu hợp đồng B2B Tháng 11* (Người phụ trách: **Võ Duy Bình** - CEO).
     * **Đầu việc 2:** *Kiểm tra Tồn kho Khả dụng ATP & Điều phối Hàng hóa giữa 2 Hub Tân Bình - Biên Hòa* (Người phụ trách: **Phạm Nguyễn Gia Thuận** - Systems & Inventory Lead).
     * **Đầu việc 3:** *Thẩm định Hồ sơ Đấu thầu Cung ứng VPP Saigon Tech Corp* (Người phụ trách: **Võ Duy Bình** & **Phạm Nguyễn Gia Thuận**).
  2. Khi hoàn thành công việc: Click vào ô tick tròn bên cạnh tên việc để đánh dấu hoàn thành, giúp theo dõi tiến độ công việc hàng ngày một cách trực quan.

---

## 5. KỊCH BẢN THỰC HÀNH LIVE DEMO 4 BƯỚC LIÊN THÔNG (DEMO WALKTHROUGH)

Khi đứng trước lớp hoặc giảng viên, bạn thực hiện đúng theo 4 kịch bản chuẩn sau:

---

### KỊCH BẢN 1: BÁN HÀNG B2B, KHÓA GIÁ HỢP ĐỒNG & TRA CỨU ATP
* **Use Case minh chứng:** `UC-SALES-01` (Apply Contract Pricelist) & `UC-SALES-02` (Query ATP Stock).
* **Yêu cầu chức năng tương ứng:** `FR-01`, `FR-02`, `FR-06`.

#### Thao tác từng bước trên Odoo:
1. Vào menu **Sales $
ightarrow$ Orders $
ightarrow$ Quotations $
ightarrow$ Bấm nút "New"**.
2. **Chọn Khách hàng:** Chọn `Tập đoàn ABC`.
   * 👉 **Điểm nhấn thuyết minh:** Chỉ cho cô thấy trường **Pricelist** tự động nhảy sang `Bảng giá Hợp đồng 2026 — Tập đoàn ABC` mà nhân viên không cần chọn tay.
3. **Thêm Dòng Sản phẩm:** Bấm *Add a product* $
ightarrow$ Chọn SKU `ST-001`.
   * Nhập số lượng: `50` ram.
   * 👉 **Điểm nhấn thuyết minh:** Đơn giá niêm yết chuẩn trên hệ thống là **75.000đ**, nhưng khi thêm vào đơn của Tập đoàn ABC, đơn giá **tự động khóa chặt ở mức 65.000đ** theo đúng hợp đồng nguyên tắc! (Đạt chuẩn `UC-SALES-01` & `FR-01` — giảm tỷ lệ lỗi giá từ 5–8% về 0%).
4. **Kiểm tra Tồn kho Khả dụng (ATP):**
   * Bấm vào biểu tượng kính lúp màu xanh bên cạnh số lượng hoặc xem widget dự báo.
   * 👉 **Điểm nhấn thuyết minh:** Hệ thống tính toán và hiển thị ngay số lượng hàng khả dụng (Available-to-Promise) tại kho để cam kết ngày giao mà không cần gọi điện thoại hỏi thủ kho (Đạt chuẩn `UC-SALES-02` & `FR-02`).

---

### KỊCH BẢN 2: CHẶN NỢ QUÁ HẠN NET 30 & XÁC NHẬN ĐƠN HÀNG
* **Use Case minh chứng:** `UC-ACC-02` (Enforce Hard Credit Hold) & `UC-SALES-04` (Confirm Sales Order).
* **Yêu cầu chức năng tương ứng:** `FR-03`.

#### Thao tác từng bước trên Odoo:
1. **Minh họa Khách hàng vi phạm chính sách nợ (Tình huống ngoại lệ 4a trong Use Case):**
   * Nếu chọn một khách hàng thử nghiệm đang có hóa đơn nợ quá hạn > 30 ngày (ví dụ: *Công ty Giấy Hoàng Gia*).
   * Hệ thống hiển thị popup cảnh báo màu đỏ/cam: *"Warning: Customer has overdue invoices older than 30 days"*.
   * Nút xác nhận đơn bị chặn hoặc chuyển trạng thái sang cần duyệt của Kế toán trưởng (Đạt chuẩn `UC-ACC-02` & `FR-03` — tuân thủ 100% chính sách tín dụng Net 30).
2. **Quay lại Đơn hàng hợp lệ S00001 của Tập đoàn ABC:**
   * Bấm nút **"Confirm" (Xác nhận)**.
   * Trạng thái đơn chuyển từ *Quotation* sang **Sales Order S00001**.
   * 👉 **Điểm nhấn thuyết minh:** Ngay khi SO được xác nhận, ở góc trên bên phải màn hình xuất hiện một Smart Button **Delivery (1)** liên kết trực tiếp sang phiếu xuất kho `WH/OUT/00002`. Hàng lập tức được chuyển từ trạng thái *Available* sang *Reserved* (Giữ chỗ 50 ram), ngăn chặn các sale khác bán trùng hàng!

---

### KỊCH BẢN 3: XUẤT KHO LẤY HÀNG & TỰ ĐỘNG KÍCH HOẠT MUA HÀNG BÙ KHO (REORDER POINT)
* **Use Case minh chứng:** `UC-INV-02` (Bin-Guided Picking) & `UC-PURCH-01` (Trigger Automated PR).
* **Yêu cầu chức năng tương ứng:** `FR-04`, `FR-07`.

#### Thao tác từng bước trên Odoo:
1. Click vào Smart Button **Delivery (1)** trên Sales Order (mở phiếu `WH/OUT/00002`).
   * Bấm **Print $
ightarrow$ Picking Operations**.
   * 👉 **Điểm nhấn thuyết minh:** Phiếu xuất kho in ra thể hiện rõ vị trí lấy hàng theo tọa độ ô kệ (`Aisle 02 / Bin 04`), giúp thủ kho không phải đi tìm kiếm thủ công (Đạt chuẩn `UC-INV-02` & `FR-07`).
2. Bấm nút **"Validate" (Xác nhận xuất kho)** $
ightarrow$ Trạng thái chuyển sang **Done (Đã hoàn thành)**.
   * Tồn kho vật lý ban đầu: 120 ram.
   * Xuất kho bán: 50 ram.
   * **Tồn kho thực tế còn lại:** $120 - 50 = 70$ ram.
3. **Mở Module Purchase (Thu mua) để chứng minh tính năng tự động:**
   * Chuyển sang menu **Purchase $
ightarrow$ Requests for Quotation (Yêu cầu báo giá)**.
   * 👉 **Điểm nhấn thuyết minh kinh điển (Show-stopper):** 
     *"Thưa cô, mức tồn kho tối thiểu (Min) chúng em cài đặt cho SKU ST-001 là 100 ram, mức tối đa (Max) là 300 ram. Khi tồn kho tụt xuống 70 ram (< 100), hệ thống Odoo đã tự động chạy quy tắc Reordering Rule và **tự động sinh ra đơn mua nháp P00001** gửi Nhà cung cấp Giấy Bến Cát với số lượng chính xác là $300 - 70 = 230$ ram giấy mà không cần nhân viên gõ tay!"* (Chứng minh 100% hiện thực hóa `UC-PURCH-01` & `FR-04`).

---

### KỊCH BẢN 4: ĐỐI SOÁT TỰ ĐỘNG 3 BÊN & XUẤT HÓA ĐƠN ĐIỆN TỬ
* **Use Case minh chứng:** `UC-ACC-01` (Execute Automated 3-Way Reconciliation).
* **Yêu cầu chức năng tương ứng:** `FR-05`.

#### Thao tác từng bước trên Odoo:
1. Quay trở lại **Sales $
ightarrow$ Orders $
ightarrow$ S00001**.
2. Bấm nút **"Create Invoice" (Tạo hóa đơn)** $
ightarrow$ Chọn *Regular Invoice*.
3. Mở Hóa đơn nháp **INV/2026/00001**:
   * Chỉ cho giảng viên thấy: Số lượng trên hóa đơn được lấy **chính xác tuyệt đối bằng 50 ram đã thực giao** (Delivered Quantity), đơn giá lấy từ Đơn bán ban đầu (65.000đ).
   * 👉 **Điểm nhấn thuyết minh:** *"Đây là cơ chế Đối soát tự động 3 bên (3-Way Matching) giữa Đơn bán hàng, Phiếu giao kho thực tế và Hóa đơn tài chính. Dung sai chênh lệch bằng 0%, kế toán không cần ngồi đối chiếu từng tờ giấy chứng từ, tiết kiệm 15–18 giờ làm việc mỗi tuần cho doanh nghiệp!"* (Đạt chuẩn `UC-ACC-01` & `FR-05`).
4. Bấm nút **"Confirm"** để phát hành hóa đơn chính thức.

---


---

## 6. BẢNG TỔNG HỢP CÁC BẢN GHI SỐ LIỆU THỰC TẾ TRÊN LIVE CLOUD (LIVE AUDIT TRAIL EVIDENCE)

Toàn bộ kịch bản nghiệp vụ liên thông đã được thực thi và xác thực 100% trên hệ sinh thái Odoo Cloud chính thức của sinh viên: [https://edu-officeprodistribution.odoo.com/odoo](https://edu-officeprodistribution.odoo.com/odoo).

Dưới đây là bảng nhật ký kiểm toán (Audit Trail) với đầy đủ mã định danh bản ghi, trạng thái hệ thống và liên kết trực tiếp:

| STT | Đối tượng / Chứng từ | Mã chứng từ thực tế | Phân hệ (App) | Trạng thái (Status) | Số lượng & Giá trị thực tế | Liên kết trực tiếp trên Odoo Cloud |
| :---: | :--- | :--- | :--- | :---: | :--- | :--- |
| **1** | **Master Data Sản phẩm** | `ST-001` (ID: 3) | Inventory / Products | Đang kinh doanh | Tồn On Hand: **300 ram**, Giá bán lẻ: **75.000₫**, Giá vốn: **52.000₫** | [Xem Sản phẩm ST-001](https://edu-officeprodistribution.odoo.com/odoo/inventory/products/3) |
| **2** | **Quy tắc Tồn kho An toàn** | Reordering Rule #1 | Inventory / Operations | Kích hoạt (Auto) | Min: **100 ram**, Max: **300 ram**, Tuyến: **Buy** | [Xem Reordering Rule](https://edu-officeprodistribution.odoo.com/odoo/inventory/products/3/action-748) |
| **3** | **Bảng giá Hợp đồng B2B** | Bảng giá 2026 — ABC | Sales / Pricelists | Có hiệu lực | Cố định: **65.000₫/ram** cho SKU ST-001 | [Xem Danh sách Pricelist](https://edu-officeprodistribution.odoo.com/odoo/sales) |
| **4** | **Khách hàng Doanh nghiệp** | `Tập đoàn ABC` | Contacts / Customers | Hoạt động | Hạn nợ: **30 Days (Net 30)**, Bảng giá: B2B Contract 2026 | [Xem Khách hàng](https://edu-officeprodistribution.odoo.com/odoo/contacts) |
| **5** | **Nhà cung cấp Giấy** | `Nhà cung cấp Giấy Bến Cát` | Contacts / Vendors | Hoạt động | Đơn giá cung ứng: **52.000₫/ram** | [Xem Nhà cung cấp](https://edu-officeprodistribution.odoo.com/odoo/purchase) |
| **6** | **Đơn Bán hàng (SO)** | **`S00001`** | Sales / Orders | **Sales Order** | 50 ram ST-001, Đơn giá khóa: **65.000₫**, Tổng: **3.575.000₫** | [Xem SO S00001](https://edu-officeprodistribution.odoo.com/odoo/sales/1) |
| **7** | **Lệnh Xuất kho Giao hàng** | **`WH/OUT/00002`** | Inventory / Delivery | **Done** | Nhu cầu: 50 ram, Thực xuất: **50 ram** (Tồn giảm từ 120 -> 70) | [Xem Phiếu WH/OUT/00002](https://edu-officeprodistribution.odoo.com/odoo/sales/1/action-708/2) |
| **8** | **Hóa đơn Bán hàng Điện tử** | **`INV/2026/00001`** | Accounting / Invoicing | **Posted** | Số lượng tính tiền: **50 ram** (Khớp WH/OUT), Doanh thu TK 5110: **3.250.000₫**, VAT: **325.000₫** | [Xem Invoice INV/2026/00001](https://edu-officeprodistribution.odoo.com/odoo/sales/1/invoicing/1) |
| **9** | **Đơn Mua hàng Bổ sung Tự động** | **`P00001`** | Purchase / Orders | **Purchase Order** | Tự động sinh từ Reorder Point: **230 ram** ($300 - 70$), Thành tiền: **13.156.000₫** | [Xem PO P00001](https://edu-officeprodistribution.odoo.com/odoo/purchase/1) |
| **10** | **Lệnh Nhập kho từ NCC** | **`WH/IN/00001`** | Inventory / Receipts | **Done** | Nhu cầu: 230 ram, Thực nhập: **230 ram** (Tồn kho phục hồi về Max **300 ram**) | [Xem Phiếu WH/IN/00001](https://edu-officeprodistribution.odoo.com/odoo/purchase/1/action-708/3) |
| **11** | **Hóa đơn Mua hàng từ NCC** | **`BILL/2026/11/0001`** | Accounting / Purchases | **Posted** | Đối soát 3 bên khớp P00001 & WH/IN/00001, Giá vốn TK 6320: **11.960.000₫**, VAT: **1.196.000₫** | [Xem Bill BILL/2026/11/0001](https://edu-officeprodistribution.odoo.com/odoo/accounting/account.move/2) |
| **12** | **Bảng Điều hành Doanh nghiệp** | Dashboards Tổng quan | Dashboards | Cập nhật Real-time | Ghi nhận doanh thu bán, công nợ phải thu, phân tích chu kỳ mua hàng | [Xem Dashboards](https://edu-officeprodistribution.odoo.com/odoo/dashboards) |
| **13** | **Lệnh Đóng gói Combo (MO)** | **`WH/MO/00001`** | Manufacturing / Operations | **Done** | Sản xuất 10 bộ Combo CB-001, tự động tiêu hao 5 nhóm linh kiện theo BOM #1 | [Xem Lệnh MO/00001](https://edu-officeprodistribution.odoo.com/odoo) |
| **14** | **Dự án Triển khai Hợp đồng B2B** | Project ABC 2026 | Project / Tasks | Đang vận hành | 5 nhiệm vụ mốc (Milestones) phân quyền cho 4 trưởng phòng ban | [Xem Dự án](https://edu-officeprodistribution.odoo.com/odoo) |
| **15** | **Khảo sát CSAT & e-POD** | Khảo sát Khách hàng B2B | Surveys | Hoạt động | Đánh giá độ chính xác 0% lỗi giá & tính thuận tiện của chữ ký số e-POD | [Xem Khảo sát](https://edu-officeprodistribution.odoo.com/odoo) |
| **16** | **Lịch Họp Ban Điều Hành** | Cuộc họp Đánh giá ERP | Calendar | Đã lên lịch | Cuộc họp điều hành ngày 20/11 có mặt đầy đủ CEO và 4 trưởng phòng chức năng | [Xem Lịch Họp](https://edu-officeprodistribution.odoo.com/odoo) |
| **17** | **Chiến dịch Email Báo giá** | Email Bảng giá 2026 | Email Marketing | Đã tạo mẫu | Gửi thông báo tự động bảng giá hợp đồng cố định cho khách hàng doanh nghiệp | [Xem Email Marketing](https://edu-officeprodistribution.odoo.com/odoo) |
| **18** | **Cơ sở Tri thức & SOPs** | SOP-01, SOP-02, SOP-03 | Knowledge | Đã phát hành | Quy trình bán hàng, kiểm soát nợ Net 30 và quét mã vạch bù kho tự động | [Xem Knowledge](https://edu-officeprodistribution.odoo.com/odoo) |
| **19** | **Tài khoản Người dùng (RBAC)** | 6 User Accounts | Settings / Users | Đã phân quyền | CEO Võ Duy Bình & Co-Admin Phạm Nguyễn Gia Thuận (Toàn quyền tối cao), Sales Manager, Warehouse Lead, Chief Accountant, PO Lead | [Xem Danh sách Users](https://edu-officeprodistribution.odoo.com/odoo/settings/users) |
| **20** | **Website Doanh nghiệp & B2B Shop** | Cổng Web Portal B2B | Website / eCommerce | Hoạt động | Trang chủ (/), Giới thiệu (/about-us), Cửa hàng (/shop - 11 sản phẩm), Liên hệ (/contactus) | [Truy cập Website](https://edu-officeprodistribution.odoo.com/) |
| **21** | **Lịch Hẹn Tư Vấn B2B Trực Tuyến** | Appointment 30 Mins | Appointments | Kích hoạt | Cổng đặt lịch trực tuyến 30 phút tư vấn gói hợp đồng nguyên tắc B2B | [Xem Appointments](https://edu-officeprodistribution.odoo.com/odoo) |
| **22** | **Lập Lịch Phân Ca Trực Vận Hành** | Planning Shifts Tuần | Planning | Đã phân ca | Ca trực kiểm kho, xuất hàng SO S00001 và nhận bù kho PO P00001 (Hub Tân Bình) | [Xem Planning](https://edu-officeprodistribution.odoo.com/odoo) |
| **23** | **Kho Lưu Trữ Chứng Từ Số Hóa** | Documents Folders | Documents | Đã phân loại | 3 thư mục Hợp đồng B2B, Biên bản e-POD, Hóa đơn VAT liên kết SO, Picking, Invoice | [Xem Documents](https://edu-officeprodistribution.odoo.com/odoo) |
| **24** | **Kênh Chat & Cộng Tác Nội Bộ** | Discuss Channels | Discuss | Hoạt động | 3 kênh #kinh-doanh-b2b, #kho-van-logistics, #duyet-chiet-khau-b2b (Chatter UC-SALES-03) | [Xem Discuss](https://edu-officeprodistribution.odoo.com/odoo) |
| **25** | **Mẫu Ký Số Biên Bản e-POD** | Sign Template e-POD | Sign | Sẵn sàng ký | Mẫu biên bản giao nhận hàng hóa điện tử có chữ ký số khách hàng phục vụ đối soát | [Xem Sign](https://edu-officeprodistribution.odoo.com/odoo) |
| **26** | **Điều chuyển kho liên Hub** | **`WH/INT/00003`** | Inventory | **Done** | Chuyển 30 ram ST-001 từ Kho Tân Bình sang Kho Biên Hòa (Cân đối tồn kho ATP) | [Xem Lệnh Chuyển Kho](https://edu-officeprodistribution.odoo.com/odoo) |
| **27** | **Hủy hàng phế phẩm (Scrap)** | **`SP/00001`** | Inventory | **Done** | Ghi nhận 2 ram ST-001 hỏng bao bì sang Virtual Locations/Scrap | [Xem Phiếu Phế Phẩm](https://edu-officeprodistribution.odoo.com/odoo) |
| **28** | **Khách hàng Chặn Tín Dụng** | Cty Giấy Hoàng Gia | Contacts / Invoicing | Active (Overdue) | Nợ quá hạn 16.500.000₫ trên INV/2026/00002 quá hạn Net 30 (Minh họa UC-ACC-02) | [Xem Hóa Đơn Quá Hạn](https://edu-officeprodistribution.odoo.com/odoo) |
| **29** | **Đường ống Cơ hội CRM** | 4 B2B Pipeline Leads | CRM | In Progress / Won | 4 gói thầu: ABC (Won 120M), Saigon Tech (Prop 85M), OCB (Qual 250M), Etown (New 60M) | [Xem CRM Leads](https://edu-officeprodistribution.odoo.com/odoo) |
| **30** | **Đầu việc Điều hành To-do** | 3 Executive Tasks | To-do | In Progress | 3 nhiệm vụ phân công cho CEO Võ Duy Bình và Lead Gia Thuận | [Xem To-do](https://edu-officeprodistribution.odoo.com/odoo) |


## 7. KỊCH BẢN LỜI THOẠI MẪU KHI THUYẾT MINH TRƯỚC GIẢNG VIÊN (DEMO SCRIPT)

Bạn có thể đọc hoặc nói tự nhiên theo khung lời thoại này:

> *"Kính thưa ThS. Nguyễn Thị Thanh Thanh và các bạn,  
> Hôm nay Nhóm 6 xin trình diễn giải pháp ERP thực tế trên nền tảng Odoo Cloud của Công ty Phân phối Văn phòng phẩm OfficePro. Bài demo này hiện thực hóa trực tiếp các Use Case và Yêu cầu Chức năng FR mà nhóm đã phân tích ở Tuần 10.  
> 
> **Đầu tiên là Use Case UC-SALES-01:** Khi em tạo báo giá cho khách hàng hợp đồng Tập đoàn ABC, hệ thống tự động nhận diện bảng giá riêng và cố định đơn giá giấy Double A ST-001 ở mức 65.000đ thay vì 75.000đ giá lẻ. Nhân viên kinh doanh không thể tự ý sửa giá, triệt tiêu hoàn toàn 5–8% lỗi giá hợp đồng của Phase 1.  
> 
> **Tiếp theo là UC-SALES-02 & UC-ACC-02:** Hệ thống lập tức hiển thị tồn kho khả dụng ATP tại cả 2 kho Tân Bình và Biên Hòa, đồng thời kiểm tra nợ quá hạn Net 30 của khách. Khi bấm xác nhận đơn hàng S00001, Odoo tự động chuyển 50 ram giấy sang trạng thái giữ chỗ và sinh Lệnh giao kho WH/OUT/00002.  
> 
> **Điểm đột phá nhất nằm ở UC-PURCH-01:** Sau khi thủ kho xác nhận xuất 50 ram, tồn kho thực tế giảm xuống 70 ram — vi phạm ngưỡng tồn an toàn Min = 100. Ngay lập tức, phân hệ Thu mua đã tự động kích hoạt và sinh đơn mua nháp P00001 đặt đúng 230 ram từ Nhà cung cấp Giấy Bến Cát để bù kho lên mức Max 300 ram mà không cần sự can thiệp thủ công.  
> 
> **Cuối cùng là UC-ACC-01:** Hóa đơn bán lẻ INV/2026/00001 được tạo tự động dựa trên số lượng đã giao thực tế, hoàn tất chuỗi đối soát 3 bên với dung sai 0%.  
> 
> Toàn bộ luồng nghiệp vụ Order-to-Cash và Procure-to-Pay đã vận hành liên thông hoàn hảo trên hệ thống thực tế. Xin cảm ơn cô và các bạn đã theo dõi!"*

---

## 8. BỘ CÂU HỎI PHẢN BIỆN DỰ KIẾN CỦA GIẢNG VIÊN & CÁCH TRẢ LỜI CHUẨN BA

* **Câu hỏi 1:** *"Tại sao trong Odoo nhóm không cấu hình cho khách hàng tự đặt hàng trên Website E-commerce?"*  
  * **Trả lời:** *"Dạ thưa cô, đây là mô hình phân phối B2B bán buôn văn phòng phẩm khối lượng lớn. Khách hàng doanh nghiệp mua theo hợp đồng khung nguyên tắc hàng năm với đơn giá cố định và điều khoản nợ Net 30, chứ không phải bán lẻ B2C quẹt thẻ online. Do đó, ranh giới hệ thống tập trung tối ưu phân hệ Sales, Inventory, Purchase và Invoicing để kiểm soát hợp đồng và đối soát chứng từ."*
* **Câu hỏi 2:** *"Nếu khách hàng yêu cầu giảm giá thêm 10% thì hệ thống Odoo xử lý Use Case UC-SALES-03 như thế nào?"*  
  * **Trả lời:** *"Dạ thưa cô, nhóm đã cấu hình quy tắc Discount Approval. Nếu nhân viên nhập chiết khấu > 5%, Odoo sẽ chặn nút xác nhận và yêu cầu quyền quản lý (Sales Manager) phê duyệt thì đơn hàng mới được giải phóng sang kho."*
* **Câu hỏi 3:** *"Làm sao đảm bảo đơn hàng không bị giao âm kho?"*  
  * **Trả lời:** *"Dạ thưa cô, Odoo kiểm soát bằng cơ chế Reservation (Giữ chỗ ATP). Nếu tồn khả dụng bằng 0, phiếu giao hàng sẽ ở trạng thái 'Waiting Another Operation' và không thể xuất kho cho đến khi phiếu nhập kho từ nhà cung cấp hoàn tất."*

---

*Tài liệu hướng dẫn được biên soạn bởi Nhóm trưởng: Võ Duy Bình (MSSV: 22301500) — Chuẩn bị sẵn sàng cho buổi thực hành Tuần 11.*
