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
|   - Đáp ứng: FR-04 (Mua hàng tự động)            - sinh RFQ P00004 đặt đúng 230 ram từ NCC Double A Paper   |
|                                                                                                             |
|   [UC-ACC-01: Automated 3-Way Match]       --->  [Odoo Invoicing: Đối soát 3 bên tự động theo hàng thực giao]|
|   - Mục tiêu: Khớp SO - Giao hàng - Hóa đơn      - Chứng cứ: Nút "Create Invoice" chỉ cho phép xuất tiền    |
|   - Đáp ứng: FR-05 (Giảm 90% công kế toán)       - đúng bằng số lượng đã Delivered trên phiếu WH/OUT        |
+-------------------------------------------------------------------------------------------------------------+
```

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
1. Vào menu **Settings (Cài đặt)** $ightarrow$ Tìm mục **Companies** $ightarrow$ Click vào công ty **OfficePro Distribution Co., Ltd.**.
2. Đổi **Currency (Tiền tệ)** thành: **VND (₫)**.
3. Vào **Invoicing $ightarrow$ Configuration $ightarrow$ Settings** $ightarrow$ Kích hoạt gói kế toán **Vietnam - Accounting (Thông tư 200/133)**.

### Bước 0.3: Nạp Nhanh 10 SKU Master Data Bằng Tệp CSV 1-Chạm
Nhóm đã chuẩn bị sẵn tệp chuẩn: [`Project/Final Project/Odoo_Master_Data_Import_10_SKUs.csv`](file:///d:/HSU/2631Semester%201(2026-2027)/BA/Project/Final%20Project/Odoo_Master_Data_Import_10_SKUs.csv).
1. Vào menu **Inventory $ightarrow$ Products $ightarrow$ Products**.
2. Bấm vào nút **⚙️ Favorites (Yêu thích)** ở góc trên thanh tìm kiếm $ightarrow$ Chọn **Import records (Nhập bản ghi)**.
3. Bấm **Upload File** $ightarrow$ Chọn tệp `Odoo_Master_Data_Import_10_SKUs.csv`.
4. Bấm nút **Test (Kiểm tra)** $ightarrow$ Hệ thống báo màu xanh: *"Everything seems valid"*.
5. Bấm **Import** $ightarrow$ **10 sản phẩm trọng yếu từ `ST-001` đến `ST-010` được tạo tự động trong 2 giây!**

### Bước 0.4: Cấu hình Bảng giá Hợp đồng Khách hàng (Pricelist Rule cho `UC-SALES-01`)
1. Vào **Sales $ightarrow$ Configuration $ightarrow$ Settings** $ightarrow$ Tick bật tính năng **Pricelists (Bảng giá)** (chọn tùy chọn *"Advanced price rules (discounts, formulas)"*).
2. Vào **Sales $ightarrow$ Products $ightarrow$ Pricelists** $ightarrow$ Bấm **New** tạo bảng giá mới:
   * **Name:** `Bảng giá Hợp đồng 2026 — Tập đoàn ABC`
   * **Currency:** VND
   * **Add a line:** Chọn Sản phẩm `ST-001` (Giấy A4 Double A 70gsm) $ightarrow$ Đặt **Fixed Price (Giá cố định): 65,000 VND**.
3. Vào **Sales $ightarrow$ Orders $ightarrow$ Customers** $ightarrow$ Tạo khách hàng: **Tập đoàn ABC**.
   * Tab **Sales & Purchase** $ightarrow$ Gán **Pricelist:** `Bảng giá Hợp đồng 2026 — Tập đoàn ABC`.
   * **Payment Terms:** `30 Days (Net 30)`.

### Bước 0.5: Cấu hình Điểm đặt hàng an toàn Min/Max (Reordering Rule cho `UC-PURCH-01`)
1. Vào **Inventory $ightarrow$ Operations $ightarrow$ Replenishment (hoặc Products $ightarrow$ Reordering Rules)**.
2. Bấm **New**:
   * **Product:** `ST-001` (A4 Copy Paper Double A 70gsm)
   * **Min Quantity (Tồn tối thiểu):** `100`
   * **Max Quantity (Tồn tối đa):** `300`
   * **Preferred Route:** `Buy (Mua hàng)`
   * **Vendor:** `Double A International Paper Co., Ltd.` (Giá cung ứng: 52.000 VND).


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

## 3. HƯỚNG DẪN THAO TÁC CHI TIẾT TỪNG PHÂN HỆ (CLICK-BY-CLICK OPERATION MANUAL)

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
     * Vào **Operations** $rightarrow$ **Transfers** $rightarrow$ Mở phiếu xuất `WH/OUT/00001`.
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
     * Chọn SKU `ST-001` | Min Quantity: `100` | Max Quantity: `300` | Vendor: `Double A Paper Co., Ltd.`.
  2. **Kích hoạt Mua hàng Tự động (`UC-PURCH-01`):**
     * Khi kho xuất bán hàng làm tồn kho tụt xuống 70 ram (< Min 100).
     * Hệ thống tự động sinh một đơn nháp trong **Purchase** $rightarrow$ **Requests for Quotation**.
     * Mở đơn `P00004`: Số lượng mua được tự động tính đúng bằng:
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
     * Mở hóa đơn nháp: Số lượng tính tiền được hệ thống tự động khóa chặt đúng **50 ram** (bằng đúng số lượng thực giao trên Lệnh giao kho WH/OUT/00001, dù đơn đặt hàng ban đầu có thể khác).
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

## 4. KỊCH BẢN THỰC HÀNH LIVE DEMO 4 BƯỚC LIÊN THÔNG (DEMO WALKTHROUGH)

Khi đứng trước lớp hoặc giảng viên, bạn thực hiện đúng theo 4 kịch bản chuẩn sau:

---

### KỊCH BẢN 1: BÁN HÀNG B2B, KHÓA GIÁ HỢP ĐỒNG & TRA CỨU ATP
* **Use Case minh chứng:** `UC-SALES-01` (Apply Contract Pricelist) & `UC-SALES-02` (Query ATP Stock).
* **Yêu cầu chức năng tương ứng:** `FR-01`, `FR-02`, `FR-06`.

#### Thao tác từng bước trên Odoo:
1. Vào menu **Sales $ightarrow$ Orders $ightarrow$ Quotations $ightarrow$ Bấm nút "New"**.
2. **Chọn Khách hàng:** Chọn `Tập đoàn ABC`.
   * 👉 **Điểm nhấn thuyết minh:** Chỉ cho cô thấy trường **Pricelist** tự động nhảy sang `Bảng giá Hợp đồng 2026 — Tập đoàn ABC` mà nhân viên không cần chọn tay.
3. **Thêm Dòng Sản phẩm:** Bấm *Add a product* $ightarrow$ Chọn SKU `ST-001`.
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
   * 👉 **Điểm nhấn thuyết minh:** Ngay khi SO được xác nhận, ở góc trên bên phải màn hình xuất hiện một Smart Button **Delivery (1)** liên kết trực tiếp sang phiếu xuất kho `WH/OUT/00001`. Hàng lập tức được chuyển từ trạng thái *Available* sang *Reserved* (Giữ chỗ 50 ram), ngăn chặn các sale khác bán trùng hàng!

---

### KỊCH BẢN 3: XUẤT KHO LẤY HÀNG & TỰ ĐỘNG KÍCH HOẠT MUA HÀNG BÙ KHO (REORDER POINT)
* **Use Case minh chứng:** `UC-INV-02` (Bin-Guided Picking) & `UC-PURCH-01` (Trigger Automated PR).
* **Yêu cầu chức năng tương ứng:** `FR-04`, `FR-07`.

#### Thao tác từng bước trên Odoo:
1. Click vào Smart Button **Delivery (1)** trên Sales Order (mở phiếu `WH/OUT/00001`).
   * Bấm **Print $ightarrow$ Picking Operations**.
   * 👉 **Điểm nhấn thuyết minh:** Phiếu xuất kho in ra thể hiện rõ vị trí lấy hàng theo tọa độ ô kệ (`Aisle 02 / Bin 04`), giúp thủ kho không phải đi tìm kiếm thủ công (Đạt chuẩn `UC-INV-02` & `FR-07`).
2. Bấm nút **"Validate" (Xác nhận xuất kho)** $ightarrow$ Trạng thái chuyển sang **Done (Đã hoàn thành)**.
   * Tồn kho vật lý ban đầu: 120 ram.
   * Xuất kho bán: 50 ram.
   * **Tồn kho thực tế còn lại:** $120 - 50 = 70$ ram.
3. **Mở Module Purchase (Thu mua) để chứng minh tính năng tự động:**
   * Chuyển sang menu **Purchase $ightarrow$ Requests for Quotation (Yêu cầu báo giá)**.
   * 👉 **Điểm nhấn thuyết minh kinh điển (Show-stopper):** 
     *"Thưa cô, mức tồn kho tối thiểu (Min) chúng em cài đặt cho SKU ST-001 là 100 ram, mức tối đa (Max) là 300 ram. Khi tồn kho tụt xuống 70 ram (< 100), hệ thống Odoo đã tự động chạy quy tắc Reordering Rule và **tự động sinh ra đơn mua nháp P00004** gửi Nhà cung cấp Double A với số lượng chính xác là $300 - 70 = 230$ ram giấy mà không cần nhân viên gõ tay!"* (Chứng minh 100% hiện thực hóa `UC-PURCH-01` & `FR-04`).

---

### KỊCH BẢN 4: ĐỐI SOÁT TỰ ĐỘNG 3 BÊN & XUẤT HÓA ĐƠN ĐIỆN TỬ
* **Use Case minh chứng:** `UC-ACC-01` (Execute Automated 3-Way Reconciliation).
* **Yêu cầu chức năng tương ứng:** `FR-05`.

#### Thao tác từng bước trên Odoo:
1. Quay trở lại **Sales $ightarrow$ Orders $ightarrow$ S00001**.
2. Bấm nút **"Create Invoice" (Tạo hóa đơn)** $ightarrow$ Chọn *Regular Invoice*.
3. Mở Hóa đơn nháp **INV/2026/00001**:
   * Chỉ cho giảng viên thấy: Số lượng trên hóa đơn được lấy **chính xác tuyệt đối bằng 50 ram đã thực giao** (Delivered Quantity), đơn giá lấy từ Đơn bán ban đầu (65.000đ).
   * 👉 **Điểm nhấn thuyết minh:** *"Đây là cơ chế Đối soát tự động 3 bên (3-Way Matching) giữa Đơn bán hàng, Phiếu giao kho thực tế và Hóa đơn tài chính. Dung sai chênh lệch bằng 0%, kế toán không cần ngồi đối chiếu từng tờ giấy chứng từ, tiết kiệm 15–18 giờ làm việc mỗi tuần cho doanh nghiệp!"* (Đạt chuẩn `UC-ACC-01` & `FR-05`).
4. Bấm nút **"Confirm"** để phát hành hóa đơn chính thức.

---

## 5. KỊCH BẢN LỜI THOẠI MẪU KHI THUYẾT MINH TRƯỚC GIẢNG VIÊN (DEMO SCRIPT)

Bạn có thể đọc hoặc nói tự nhiên theo khung lời thoại này:

> *"Kính thưa ThS. Nguyễn Thị Thanh Thanh và các bạn,  
> Hôm nay Nhóm 6 xin trình diễn giải pháp ERP thực tế trên nền tảng Odoo Cloud của Công ty Phân phối Văn phòng phẩm OfficePro. Bài demo này hiện thực hóa trực tiếp các Use Case và Yêu cầu Chức năng FR mà nhóm đã phân tích ở Tuần 10.  
> 
> **Đầu tiên là Use Case UC-SALES-01:** Khi em tạo báo giá cho khách hàng hợp đồng Tập đoàn ABC, hệ thống tự động nhận diện bảng giá riêng và cố định đơn giá giấy Double A ST-001 ở mức 65.000đ thay vì 75.000đ giá lẻ. Nhân viên kinh doanh không thể tự ý sửa giá, triệt tiêu hoàn toàn 5–8% lỗi giá hợp đồng của Phase 1.  
> 
> **Tiếp theo là UC-SALES-02 & UC-ACC-02:** Hệ thống lập tức hiển thị tồn kho khả dụng ATP tại cả 2 kho Tân Bình và Biên Hòa, đồng thời kiểm tra nợ quá hạn Net 30 của khách. Khi bấm xác nhận đơn hàng S00001, Odoo tự động chuyển 50 ram giấy sang trạng thái giữ chỗ và sinh Lệnh giao kho WH/OUT/00001.  
> 
> **Điểm đột phá nhất nằm ở UC-PURCH-01:** Sau khi thủ kho xác nhận xuất 50 ram, tồn kho thực tế giảm xuống 70 ram — vi phạm ngưỡng tồn an toàn Min = 100. Ngay lập tức, phân hệ Thu mua đã tự động kích hoạt và sinh đơn mua nháp P00004 đặt đúng 230 ram từ Nhà cung cấp Double A để bù kho lên mức Max 300 ram mà không cần sự can thiệp thủ công.  
> 
> **Cuối cùng là UC-ACC-01:** Hóa đơn bán lẻ INV/2026/00001 được tạo tự động dựa trên số lượng đã giao thực tế, hoàn tất chuỗi đối soát 3 bên với dung sai 0%.  
> 
> Toàn bộ luồng nghiệp vụ Order-to-Cash và Procure-to-Pay đã vận hành liên thông hoàn hảo trên hệ thống thực tế. Xin cảm ơn cô và các bạn đã theo dõi!"*

---

## 6. BỘ CÂU HỎI PHẢN BIỆN DỰ KIẾN CỦA GIẢNG VIÊN & CÁCH TRẢ LỜI CHUẨN BA

* **Câu hỏi 1:** *"Tại sao trong Odoo nhóm không cấu hình cho khách hàng tự đặt hàng trên Website E-commerce?"*  
  * **Trả lời:** *"Dạ thưa cô, đây là mô hình phân phối B2B bán buôn văn phòng phẩm khối lượng lớn. Khách hàng doanh nghiệp mua theo hợp đồng khung nguyên tắc hàng năm với đơn giá cố định và điều khoản nợ Net 30, chứ không phải bán lẻ B2C quẹt thẻ online. Do đó, ranh giới hệ thống tập trung tối ưu phân hệ Sales, Inventory, Purchase và Invoicing để kiểm soát hợp đồng và đối soát chứng từ."*
* **Câu hỏi 2:** *"Nếu khách hàng yêu cầu giảm giá thêm 10% thì hệ thống Odoo xử lý Use Case UC-SALES-03 như thế nào?"*  
  * **Trả lời:** *"Dạ thưa cô, nhóm đã cấu hình quy tắc Discount Approval. Nếu nhân viên nhập chiết khấu > 5%, Odoo sẽ chặn nút xác nhận và yêu cầu quyền quản lý (Sales Manager) phê duyệt thì đơn hàng mới được giải phóng sang kho."*
* **Câu hỏi 3:** *"Làm sao đảm bảo đơn hàng không bị giao âm kho?"*  
  * **Trả lời:** *"Dạ thưa cô, Odoo kiểm soát bằng cơ chế Reservation (Giữ chỗ ATP). Nếu tồn khả dụng bằng 0, phiếu giao hàng sẽ ở trạng thái 'Waiting Another Operation' và không thể xuất kho cho đến khi phiếu nhập kho từ nhà cung cấp hoàn tất."*

---

*Tài liệu hướng dẫn được biên soạn bởi Nhóm trưởng: Võ Duy Bình (MSSV: 22301500) — Chuẩn bị sẵn sàng cho buổi thực hành Tuần 11.*
