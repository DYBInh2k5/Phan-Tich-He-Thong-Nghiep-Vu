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

### Bước 0.1: Tạo Database Odoo Mới (Nếu bản cũ đã hết hạn)
1. Truy cập: **[odoo.com/trial](https://www.odoo.com/trial)**.
2. Chọn đúng **4 Phân hệ Nghiệp vụ**:
   * ✅ **Sales** (Bán hàng)
   * ✅ **Inventory** (Kho vận)
   * ✅ **Purchase** (Thu mua)
   * ✅ **Invoicing** (Hóa đơn & Kế toán)
3. Điền thông tin kích hoạt:
   * **Company Name:** `OfficePro Distribution Co., Ltd.`
   * **Phone / Email:** Sử dụng email sinh viên hoặc email cá nhân để nhận link kích hoạt.
   * **Company Size:** 5–20 employees | **Primary Interest:** Educational / Student.

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

## 3. KỊCH BẢN THỰC HÀNH LIVE DEMO 4 BƯỚC LIÊN THÔNG (DEMO WALKTHROUGH)

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

## 4. KỊCH BẢN LỜI THOẠI MẪU KHI THUYẾT MINH TRƯỚC GIẢNG VIÊN (DEMO SCRIPT)

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

## 5. BỘ CÂU HỎI PHẢN BIỆN DỰ KIẾN CỦA GIẢNG VIÊN & CÁCH TRẢ LỜI CHUẨN BA

* **Câu hỏi 1:** *"Tại sao trong Odoo nhóm không cấu hình cho khách hàng tự đặt hàng trên Website E-commerce?"*  
  * **Trả lời:** *"Dạ thưa cô, đây là mô hình phân phối B2B bán buôn văn phòng phẩm khối lượng lớn. Khách hàng doanh nghiệp mua theo hợp đồng khung nguyên tắc hàng năm với đơn giá cố định và điều khoản nợ Net 30, chứ không phải bán lẻ B2C quẹt thẻ online. Do đó, ranh giới hệ thống tập trung tối ưu phân hệ Sales, Inventory, Purchase và Invoicing để kiểm soát hợp đồng và đối soát chứng từ."*
* **Câu hỏi 2:** *"Nếu khách hàng yêu cầu giảm giá thêm 10% thì hệ thống Odoo xử lý Use Case UC-SALES-03 như thế nào?"*  
  * **Trả lời:** *"Dạ thưa cô, nhóm đã cấu hình quy tắc Discount Approval. Nếu nhân viên nhập chiết khấu > 5%, Odoo sẽ chặn nút xác nhận và yêu cầu quyền quản lý (Sales Manager) phê duyệt thì đơn hàng mới được giải phóng sang kho."*
* **Câu hỏi 3:** *"Làm sao đảm bảo đơn hàng không bị giao âm kho?"*  
  * **Trả lời:** *"Dạ thưa cô, Odoo kiểm soát bằng cơ chế Reservation (Giữ chỗ ATP). Nếu tồn khả dụng bằng 0, phiếu giao hàng sẽ ở trạng thái 'Waiting Another Operation' và không thể xuất kho cho đến khi phiếu nhập kho từ nhà cung cấp hoàn tất."*

---

*Tài liệu hướng dẫn được biên soạn bởi Nhóm trưởng: Võ Duy Bình (MSSV: 22301500) — Chuẩn bị sẵn sàng cho buổi thực hành Tuần 11.*
