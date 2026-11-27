# 🏢 THÔNG TIN HỆ THỐNG ODOO ERP THỰC TẾ — NHÓM 6 (OFFICEPRO)
## TÀI LIỆU LƯU TRỮ TRUY CẬP, CẤU HÌNH & BẰNG CHỨNG KIỂM THỬ UAT (PHASE 2)

* **Học phần:** Phân tích Hệ thống Nghiệp vụ (Business Systems Analysis - BSA)
* **Giảng viên hướng dẫn:** ThS. Nguyễn Thị Thanh Thanh | Khoa Công nghệ Thông tin, Đại học Hoa Sen
* **Kịch bản phân công:** Scenario B — B2B Wholesale & Distribution (Office Supplies & Stationery)
* **Doanh nghiệp mô phỏng:** Công ty TNHH Phân phối Văn phòng phẩm OfficePro (`OfficePro Distribution Co., Ltd.`)
* **Thành viên thực hiện:**
  1. **Võ Duy Bình (MSSV: 22301500)** — Nhóm trưởng / Lead BA & Solutions Architect (Chủ tài khoản hệ thống)
  2. **Phạm Nguyễn Gia Thuận (MSSV: 22204631)** — QA Specialist & Solution Configurator

---

## 🌐 1. THÔNG TIN TRUY CẬP HỆ THỐNG ODOO CLOUD ĐANG HOẠT ĐỘNG

> [!IMPORTANT]
> **Đường dẫn Trang chủ Odoo của Doanh nghiệp:**  
> 🔗 **`https://edu-officeprodistribution.odoo.com/odoo`**  
> *(Tài khoản quản trị đăng nhập: Email của bạn Võ Duy Bình)*

### 📌 Các đường dẫn trực tiếp (Deep Links) vào từng phân hệ nghiệp vụ:

| Phân hệ / Nghiệp vụ | Đường dẫn truy cập trực tiếp trên Odoo | Chức năng chính |
| :--- | :--- | :--- |
| **🏠 Bàn làm việc chính (Home Dashboard)** | [`/odoo`](https://edu-officeprodistribution.odoo.com/odoo) | Tổng quan hệ thống ERP, danh sách 25 Apps đã cài đặt. |
| **📦 Danh mục Tồn kho (Inventory Products)** | [`/odoo/inventory/products`](https://edu-officeprodistribution.odoo.com/odoo/inventory/products) | Quản lý Master Data 10 SKUs (`ST-001`–`ST-010`) + Combo `CB-001`, tồn kho On Hand và Forecasted. |
| **📄 Chi tiết Sản phẩm `ST-001` (Double A / Paper One)** | [`/odoo/inventory/products/1`](https://edu-officeprodistribution.odoo.com/odoo/inventory/products/1) | Xem giá niêm yết 75.000₫, giá vốn 52.000₫, mã vạch EAN-13, vị trí lưu kho Aisle-02/Bin-04. |
| **🏷️ Bảng giá Hợp đồng B2B (`Net 30`)** | [`/odoo/sales/pricelists/2`](https://edu-officeprodistribution.odoo.com/odoo/sales/pricelists/2) | Quy tắc giá hợp đồng cố định chiết khấu 10% theo hợp đồng khung (`CTR-2026-001`). |
| **👥 Hồ sơ Khách hàng B2B (Tập đoàn ABC / Saigon Tech)** | [`/odoo/sales/customers`](https://edu-officeprodistribution.odoo.com/odoo/sales/customers) | Khách B2B gắn liền Bảng giá Hợp đồng và hạn nợ Net 30 (`30 Days`), hạn mức tín dụng 50 triệu. |
| **📑 Báo giá & Đơn bán hàng B2B (`S00001`)** | [`/odoo/sales/1`](https://edu-officeprodistribution.odoo.com/odoo/sales/1) | Đơn bán hàng `S00001` (50 Ream ST-001, 3.575.000 ₫) tự động áp dụng giá hợp đồng. |
| **🚚 Phiếu xuất kho giao hàng (`WH/OUT/00002`)** | [`/odoo/inventory`](https://edu-officeprodistribution.odoo.com/odoo/inventory) | Phiếu xuất kho đã hoàn thành (Done), tự động trừ tồn kho On Hand tại Aisle-02/Bin-04. |
| **🧾 Hóa đơn VAT điện tử (`INV/2026/00001`)** | [`/odoo/invoicing`](https://edu-officeprodistribution.odoo.com/odoo/invoicing) | Hóa đơn GTGT chính thức ghi sổ (Status: In Payment via Vietcombank), đối chiếu 3 bên 3-Way Matching. |
| **🛒 Đơn mua hàng tự động bù kho (`P00001`)** | [`/odoo/purchase`](https://edu-officeprodistribution.odoo.com/odoo/purchase) | Đơn mua 230 ream ST-001 từ NCC Giấy Bến Cát kích hoạt từ Reordering Rule `RR/ST-001/01`. |
| **📥 Phiếu nhập kho mua hàng (`WH/IN/00001`)** | [`/odoo/inventory`](https://edu-officeprodistribution.odoo.com/odoo/inventory) | Phiếu nhập kho hàng mua 230 ream từ NCC Giấy Bến Cát (Status: Done). |
| **🧾 Hóa đơn NCC đầu vào (`BILL/2026/11/0001`)** | [`/odoo/accounting`](https://edu-officeprodistribution.odoo.com/odoo/accounting) | Hóa đơn mua hàng NCC (Status: In Payment, Nợ 156 / Có 331). |
| **⚙️ Lệnh sản xuất đóng gói Combo (`WH/MO/00001`)** | [`/odoo/manufacturing`](https://edu-officeprodistribution.odoo.com/odoo/manufacturing) | Lệnh đóng gói 10 Combo `CB-001` từ linh kiện `ST-001`, `ST-003`, `ST-004` (Status: Done). |
| **🚫 Báo giá bị cảnh báo nợ (`S00003`)** | [`/odoo/sales`](https://edu-officeprodistribution.odoo.com/odoo/sales) | Báo giá cho Cty Hoàng Gia bị Credit Hold do vượt hạn mức công nợ 50 triệu. |

---

## 🛠️ 2. DỮ LIỆU ĐÃ CẤU HÌNH TRÊN HỆ THỐNG (MASTER DATA & WORKFLOW)

### 2.1. Phân hệ đã kích hoạt
1. 🛒 **Sales (Bán hàng):** Kích hoạt tính năng *Pricelists (Advanced price rules)* và *Discounts*.
2. 📦 **Inventory (Kho vận):** Quản lý tồn kho vật lý (Storable Products), tự động sinh Phiếu giao hàng (Delivery Orders).
3. 💳 **Invoicing (Kế toán & Hóa đơn):** Tự động phát hành Hóa đơn VAT điện tử, kiểm soát hạn mức thanh toán Net 30 ngày.

### 2.2. Dữ liệu Master Data chuẩn đã thiết lập
- **Doanh nghiệp:** OfficePro Distribution Co., Ltd. (Quận 3, TP. Hồ Chí Minh).
- **Tiền tệ:** `VND` (Đồng Việt Nam - `₫`).
- **Sản phẩm chủ lực (Flagship SKU):**
  - Tên: `A4 Copy Paper Double A 70gsm`
  - Mã tham chiếu nội bộ (SKU): `ST-001`
  - Loại sản phẩm: Goods (Track Inventory / Storable)
  - Giá niêm yết bán lẻ: `75,000 VND / Ream`
  - Giá vốn mua vào: `52,000 VND / Ream`
  - Thuế suất: VAT `10%`
- **Bảng giá Hợp đồng B2B:**
  - Tên bảng giá: `B2B Corporate Contract Pricelist (Net 30)`
  - Quy tắc giá hợp đồng: Cố định **`65,000 VND`** cho `ST-001` (ưu đãi hơn 13.3% so với giá niêm yết).
- **Khách hàng B2B:**
  - Tên khách hàng: `Corporate Account A - Saigon Tech Corp`
  - Bảng giá gán mặc định: `B2B Corporate Contract Pricelist (Net 30)`
  - Điều khoản thanh toán: `30 Days` (Net 30).

---

## 🧪 3. KẾT QUẢ VẬN HÀNH KIỂM THỬ UAT (TEST RESULTS)

| Mã kiểm thử | Kịch bản kiểm thử nghiệp vụ | Kết quả kỳ vọng | Kết quả thực tế trên Odoo | Đánh giá |
| :---: | :--- | :--- | :--- | :---: |
| **`TC-01`** | **Tự động áp dụng Giá hợp đồng**<br>Tạo báo giá cho Saigon Tech Corp với SKU `ST-001`. | Đơn giá tự động nhảy thành 65.000₫ thay vì 75.000₫. | Hệ thống tự động nhận diện bảng giá hợp đồng và hiển thị đúng 65.000₫, tính VAT 10% và Margin 20%. | **PASS (100%)** |
| **`TC-02`** | **Cảnh báo Tồn kho thời gian thực (ATP)**<br>Bấm vào biểu tượng dự báo tồn kho trên dòng đơn hàng. | Hiển thị cảnh báo lượng hàng có thể cam kết bán (ATP). | Hiển thị chi tiết: `Forecasted Stock: 0 Available on 10/18/2026`, cảnh báo hết hàng chính xác. | **PASS (100%)** |
| **`TC-03`** | **Tự động sinh Phiếu giao hàng kho (Delivery)**<br>Xác nhận Báo giá thành Đơn bán hàng chính thức (Sales Order). | Tự động sinh chứng từ xuất kho tương ứng trong Inventory. | Đơn hàng `S00001` được xác nhận; tự động phát sinh phiếu xuất kho `WH/OUT/00002` (Status: Done) hoàn tất xuất 50 ream. | **PASS (100%)** |
| **`TC-04`** | **Xuất Hóa đơn GTGT khớp 3 bên (3-Way Matching)**<br>Tạo và xác nhận hóa đơn từ Đơn bán hàng. | Phát hành hóa đơn VAT điện tử, liên kết chính xác SO và DO. | Hóa đơn `INV/2026/00001` được phát hành, chuyển trạng thái `In Payment` qua Vietcombank, liên kết 1-1 với đơn bán `S00001` và phiếu xuất `WH/OUT/00002`. | **PASS (100%)** |
| **`TC-05`** | **Ghi nhận công nợ đúng điều khoản Net 30**<br>Kiểm tra thời hạn thanh toán trên hóa đơn. | Hạn nợ tự động tính 30 ngày kể từ ngày xuất hóa đơn. | Hóa đơn hiển thị điều khoản `30 Days`, ghi nhận công nợ theo đúng hợp đồng B2B. | **PASS (100%)** |

---

## 📸 4. BỘ 10 ẢNH MÀN HÌNH CHỨNG TỪ THỰC TẾ (SCREENSHOT REPOSITORY)

Tất cả các file ảnh độ phân giải cao được lưu trữ tại:  
📂 Đường dẫn cục bộ: `Project/Final Project/assets/odoo/`

1. **`odoo_00_home_dashboard.png`** — Giao diện chính Odoo Home của doanh nghiệp OfficePro Distribution Co., Ltd. (25 Ứng dụng).
2. **`odoo_01_product_ST001_configured.png`** — Màn hình cấu hình chi tiết sản phẩm `ST-001` (A4 Double A 70gsm).
3. **`odoo_02_products_catalog_inventory.png`** — Danh mục 10 Master SKUs trong phân hệ quản lý kho vận Inventory.
4. **`odoo_03_contract_pricelist_rule.png`** — Cấu hình Bảng giá Hợp đồng B2B với mức giá cố định chiết khấu 10%.
5. **`odoo_04_b2b_customer_contract_profile.png`** — Hồ sơ Khách hàng doanh nghiệp gắn Bảng giá hợp đồng & Net 30.
6. **`odoo_05_quotation_contract_price_applied.png`** — Báo giá B2B `S00001` áp dụng tự động giá hợp đồng.
7. **`odoo_06_atp_inventory_forecast_warning.png`** — Cảnh báo tồn kho thời gian thực Available-to-Promise (ATP).
8. **`odoo_07_confirmed_sales_order_delivery_link.png`** — Đơn bán hàng chính thức (Sales Order `S00001`) liên kết điều phối kho vận.
9. **`odoo_08_warehouse_delivery_order_waiting.png`** — Phiếu xuất kho `WH/OUT/00002` (Done) hoàn tất giao hàng 50 ream.
10. **`odoo_09_customer_vat_invoice_posted_3way_match.png`** — Hóa đơn GTGT điện tử `INV/2026/00001` khớp 3 bên (Status: In Payment via Vietcombank).
11. **`odoo_purchase_order_p00001.png`** — Đơn mua hàng `P00001` tự động kích hoạt bù tồn kho an toàn từ Reordering Rule.

---

## 🎯 5. HƯỚNG DẪN DÀNH CHO NHÓM 6 KHI BƯỚC VÀO PHẦN BẢO VỆ CUỐI KỲ (FINAL DEFENSE)

1. **Khi viết Báo cáo Kiểm thử UAT & BRD:**  
   - Bảng kiểm thử UAT và chuỗi 20 giao dịch audit trail đã được tích hợp đầy đủ vào Section 6 của BRD Report.
   - Các ảnh chụp từ Mục 4 đã được chèn vào báo cáo và slide để làm minh chứng đạt chuẩn 100% Pass.
2. **Khi Trình bày Demo trực tiếp trước Giảng viên:**  
   - Đăng nhập vào đường dẫn: `https://edu-officeprodistribution.odoo.com/odoo`
   - Nhóm trưởng **Võ Duy Bình** mở đơn `S00001` trình diễn việc Odoo tự động loại bỏ lỗi giá 5–8% nhờ Bảng giá Hợp đồng.
   - Thành viên **Phạm Nguyễn Gia Thuận** mở phiếu xuất kho `WH/OUT/00002` và Hóa đơn `INV/2026/00001` trình diễn quy trình đối soát 3 bên tự động giúp tiết kiệm 15–20 giờ làm việc thủ công mỗi tuần của kế toán.
