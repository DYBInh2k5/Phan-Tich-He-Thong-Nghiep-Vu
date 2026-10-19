Use the business problem and information need identified in Activity 1.

Tasks

1.Write 1–2 Business Requirements.

2.Write 3–4 Functional Requirements that support those needs.

3.Link each requirement to the relevant process.

4.Check that every FR is clear and testable.

5.Identify candidate Odoo applications without finalizing the solution.

Requirements Table

| ID    | Requirement | Related Problem / Need | Related Process |
| ----- | ----------- | ---------------------- | --------------- |
| BR-01 |             |                        |                 |
| BR-02 |             |                        |                 |
| FR-01 |             |                        |                 |
| FR-02 |             |                        |                 |
| FR-03 |             |                        |                 |
| FR-04 |             |                        |                 |

Example

BR-01: The business needs Sales Staff to verify product availability before confirming customer orders.

FR-01: The system shall display the available quantity of each selected product during sales order preparation.

FR-02: The system shall warn Sales Staff when the requested quantity exceeds the available quantity.

Do not copy the example blindly. Requirements must be based on your group's selected process and evidence.

---

================================================================================
              GROUP 6 DELIVERABLE — WEEK 6: REQUIREMENTS SPECIFICATION
================================================================================

# GROUP 6 — BUSINESS REQUIREMENTS & FUNCTIONAL REQUIREMENTS SPECIFICATION
## ACTIVITY 2 DELIVERABLE — BSA ACADEMIC YEAR 2026–2027 (SEMESTER 1)

* **Course:** Business Systems Analysis (BSA) — Faculty of Technology, Hoa Sen University
* **Instructor:** MSc. Nguyen Thi Thanh Thanh
* **Assigned Business Scenario:** Scenario 6 (Scenario B) — Office Supplies & Stationery
* **Enterprise Case:** Công ty TNHH Phân phối Văn phòng phẩm OfficePro (`OfficePro Distribution Co., Ltd.`)
* **Target Deliverable Filename:** `W6_Requirements_Group6.pdf`
* **Moodle Submission Responsible:** Group Leader

### 👥 Group Members & Contribution Distribution
1. **Võ Duy Bình (Student ID: 22301500)** — **Group Leader / Lead Business Analyst & Solutions Architect**  
   *Contribution (50%):* Dẫn dắt phân tích vấn đề nghiệp vụ bảng giá hợp đồng, xây dựng `BR-01`, `FR-01`, `FR-02`, thiết kế ma trận truy xuất nguồn gốc hai chiều và đề xuất cấu hình Odoo Sales Pricelists.
2. **Phạm Nguyễn Gia Thuận (Student ID: 22204631)** — **QA Specialist & Solution Configurator**  
   *Contribution (50%):* Phân tích kiểm tra khả năng đáp ứng tồn kho (ATP), xây dựng `BR-02`, `FR-03`, `FR-04`, thực hiện kiểm thử tính rõ ràng và đo lường (Testability) của các yêu cầu chức năng.

---

## 1. CONTEXT INPUT FROM ACTIVITY 1 (BUSINESS PROBLEM & INFORMATION NEED)

Theo kết quả đã thực hiện tại **Activity 1 (Group Worksheet)** dựa trên chứng cứ thực tế thu thập từ Tuần 2 và Tuần 4:

* **Selected Core Business Processes:**  
  * `BP1. Processing Corporate Orders` (Xử lý đơn hàng doanh nghiệp)  
  * `BP2. Verifying Contract Prices` (Xác minh giá theo hợp đồng khung)  
  * `BP3. Checking Product Availability` (Kiểm tra tồn kho khả dụng ATP)
* **Empirical AS-IS Evidence:**  
  * Phỏng vấn Trưởng phòng Sales (`EVD-W2-SALES-01`): *"Mỗi nhân viên tự lưu một file Excel giá riêng (`BangGia_KhachHang_2026.xlsx`). Khi hợp đồng ký mới hoặc điều chỉnh đơn giá giấy Double A, thông tin cập nhật chậm trễ 1-2 tuần khiến nhân viên báo giá cũ."*  
  * Dữ liệu mô phỏng đối soát hóa đơn (`EVD-W4-SIM-02`): **5% đến 8% hóa đơn B2B bị khách hàng khiếu nại sai đơn giá thỏa thuận**, gây ách tắc thu hồi công nợ trung bình ~50.000.000 VNĐ/tháng và làm kế toán mất 15–20 giờ/tuần đối soát thủ công.  
  * Phỏng vấn Thủ kho Tân Bình (`EVD-W2-WH-02`): Hàng về cầu cảng mất 24–48 giờ mới nhập kho xong trên sổ sách, Sales không biết tồn thực tế nên xảy ra 3–4 đơn hàng bị hủy/tuần sau khi đã chốt với khách.
* **Core Business Problem:** Doanh nghiệp thiếu cơ chế quản lý và áp dụng bảng giá hợp đồng tập trung tự động, đồng thời thiếu khả năng hiển thị tồn kho khả dụng thời gian thực, dẫn đến sai sót giá trên hóa đơn, tranh chấp thanh toán và hủy đơn hàng sau xác nhận.
* **Stakeholder Information Need:**  
  * Nhân viên kinh doanh cần **đơn giá hợp đồng có hiệu lực và chính sách chiết khấu theo số lượng chính xác, tự động liên kết với từng mã khách hàng** ngay tại màn hình lập báo giá/đơn hàng.  
  * Nhân viên kinh doanh cần **số lượng tồn kho khả dụng (Available-to-Promise - ATP) theo thời gian thực** trên toàn bộ hệ thống kho trước khi xác nhận đơn hàng với khách.

---

## 2. OFFICIAL REQUIREMENTS TABLE (TASK 1, 2, 3)

Tuân thủ nghiêm ngặt nguyên tắc:
* **Business Requirements (BR):** Diễn đạt nhu cầu năng lực hoặc kết quả kinh doanh cần đạt được, giải quyết trực tiếp nỗi đau vận hành, hoàn toàn trung lập với công nghệ (không nêu tên phần mềm Odoo).
* **Functional Requirements (FR):** Diễn đạt hành vi cụ thể mà hệ thống phải thực hiện, tuân thủ đúng cú pháp chuẩn hóa:  
  $$\mathbf{The\ system\ shall\ +\ specific\ action\ +\ object\ +\ condition/context}$$

| ID | Requirement Statement | Related Problem / Need | Related Process |
| :---: | :--- | :--- | :---: |
| **`BR-01`** | **The business needs corporate sales order pricing to be automatically determined from active framework agreements to eliminate billing discrepancies and accelerate customer cash collections.** | Solves the 5–8% monthly invoice pricing discrepancy rate and delayed Net 30 trade debt collections (~50,000,000 VND/month). | `BP1. Processing Corporate Orders`<br>`BP2. Verifying Contract Prices` |
| **`BR-02`** | **The business needs sales confirmation to be strictly verified against real-time Available-to-Promise (ATP) inventory levels across multi-warehouse locations to prevent post-confirmation order cancellations.** | Solves the visibility lag of incoming inventory and eliminates 3–4 post-confirmation stockout cancellations per week. | `BP1. Processing Corporate Orders`<br>`BP3. Checking Product Availability` |
| **`FR-01`** | **The system shall automatically retrieve and populate the contract unit price for each selected product line based on the corporate customer's active pricelist during sales quote and order creation.** | Supports `BR-01`: Replaces manual lookup and copy-pasting from disconnected personal Excel sheets with automated master data lookup. | `BP2. Verifying Contract Prices` |
| **`FR-02`** | **The system shall block order confirmation and require authorized managerial override whenever a requested unit price is discounted by more than 5% below the contract baseline price.** | Supports `BR-01`: Eliminates informal verbal discount approvals and enforces commercial profit margin governance. | `BP1. Processing Corporate Orders` |
| **`FR-03`** | **The system shall display the real-time Available-to-Promise (ATP) stock quantity of each product line, calculated from on-hand inventory minus reserved orders across warehouses, during order preparation.** | Supports `BR-02`: Provides instant stock visibility to Sales Staff without requiring phone calls or Zalo messages to the warehouse keeper. | `BP3. Checking Product Availability` |
| **`FR-04`** | **The system shall flag an order line and display an immediate visual stockout warning whenever the requested order quantity exceeds the real-time ATP quantity.** | Supports `BR-02`: Prevents sales reps from confirming unfulfillable orders and promising unrealistic delivery dates to clients. | `BP1. Processing Corporate Orders`<br>`BP3. Checking Product Availability` |

---

## 3. CHECKING FR CLARITY & TESTABILITY (TASK 4)

Để đảm bảo các yêu cầu chức năng (FR) có thể kiểm thử được (Testable) trong giai đoạn UAT (User Acceptance Testing) và không mang tính cảm tính mơ hồ, nhóm Group 6 thiết lập tiêu chí kiểm định và kịch bản nghiệm thu cụ thể:

| Requirement ID | Syntax & Behavioral Quality Check | Verification Method & Test Case Scenario | Pass/Fail Criteria |
| :---: | :--- | :--- | :--- |
| **`FR-01`** | **Clear & Specific:** Chỉ rõ hành vi tự động điền đơn giá dựa trên bảng giá hợp đồng của khách hàng. | **Test Case TC-FR01:** Tạo Báo giá mới cho khách `Saigon Tech Corp` (đã ký HĐ áp bảng giá B2B VIP), thêm sản phẩm `ST-001` (Giấy Double A A4 80gsm). | **PASS:** Ô đơn giá tự động hiển thị đúng `65.000 VNĐ` (giá hợp đồng), thay vì `72.000 VNĐ` (giá niêm yết bán lẻ). |
| **`FR-02`** | **Clear & Specific:** Xác định rõ ngưỡng chặn (5%) và hành động bắt buộc (Managerial Override). | **Test Case TC-FR02:** Nhân viên Sales sửa thủ công đơn giá `ST-001` xuống `61.000 VNĐ` (chiết khấu 6,15% > 5%) rồi bấm `Xác nhận đơn hàng`. | **PASS:** Hệ thống lập tức khóa đơn, chuyển trạng thái sang `Chờ duyệt giá`, gửi thông báo đến Trưởng phòng Sales và chặn xuất kho. |
| **`FR-03`** | **Clear & Specific:** Định nghĩa công thức tính toán tường minh: $\text{ATP} = \text{Tồn thực tế (On-hand)} - \text{Đã giữ trước (Reserved)}$. | **Test Case TC-FR03:** Kho Tân Bình có 1.000 ram giấy `ST-001`, trong đó 400 ram đã được giữ cho đơn hàng `SO-001`. Sales mở màn hình tạo đơn mới `SO-002`. | **PASS:** Hệ thống hiển thị số lượng khả dụng ATP chính xác là `600 ram` trên dòng sản phẩm. |
| **`FR-04`** | **Clear & Specific:** Mô tả phản ứng cảnh báo thị giác tức thời (Visual Warning Flag) khi số lượng vượt ngưỡng. | **Test Case TC-FR04:** Sales nhập số lượng đặt hàng `700 ram` cho sản phẩm có ATP = `600 ram`. | **PASS:** Dòng sản phẩm đổi màu đỏ/cam, xuất hiện biểu tượng cảnh báo thiếu `100 ram` và hiển thị chi tiết dự báo tồn kho. |

---

## 4. CANDIDATE ODOO APPLICATIONS WITHOUT FINALIZING THE SOLUTION (TASK 5)

Theo định hướng kiến trúc hệ thống của môn học Business Systems Analysis, nhóm xác định các phân hệ ứng dụng Odoo tiềm năng (Candidate Odoo Apps) có khả năng đáp ứng trọn vẹn các yêu cầu nghiệp vụ trên ở giai đoạn sau của dự án (Phase 2) mà không ép buộc giải pháp kỹ thuật quá sớm:

1. **Candidate App 1: Odoo Sales (with Advanced Pricelists Engine)**
   * *Business Capability Mapping:* Hỗ trợ trực tiếp cho `BR-01`, `FR-01`, và `FR-02`.
   * *Odoo Architectural Features:*
     * Cơ chế bảng giá nâng cao (**Advanced Pricelists**): Cho phép cấu hình quy tắc tính giá theo hợp đồng khung (Fixed Price, Discount %, Formula) gắn riêng vào hồ sơ đối tác B2B (`res.partner`).
     * Quy tắc phân quyền phê duyệt hạn mức (**Approval Matrix**): Tự động chặn xác nhận đơn hàng khi nhân viên tự ý giảm giá vượt quá hạn mức 5% được cấp phép.
2. **Candidate App 2: Odoo Inventory (with Multi-Warehouses & Real-Time ATP Forecast Engine)**
   * *Business Capability Mapping:* Hỗ trợ trực tiếp cho `BR-02`, `FR-03`, và `FR-04`.
   * *Odoo Architectural Features:*
     * Quản lý đa kho vận (**Multi-Warehouses**): Đồng bộ hóa dữ liệu tồn kho tức thời giữa Kho Tân Bình (Hub trung tâm) và Kho Biên Hòa (Hub dự phòng).
     * Công cụ tính toán tồn khả dụng (**Forecasted Inventory & ATP**): Tự động tính toán số lượng tồn thực tế trừ đi các lệnh xuất kho đang chờ, hiển thị cảnh báo widget stockout ngay trên dòng đơn bán hàng.
3. **Candidate App 3: Odoo Invoicing (with Automated 3-Way Reconciliation Engine)**
   * *Business Capability Mapping:* Mở rộng hỗ trợ chuỗi giá trị từ `BR-01` sang khâu thanh toán và ghi nhận doanh thu.
   * *Odoo Architectural Features:*
     * Cơ chế đối soát 3 chiều (**3-Way Matching Policy**): Tự động so khớp số lượng trên Đơn bán hàng (SO), Phiếu giao hàng đã ký (Delivery Slip) và Hóa đơn điện tử VAT, ngăn chặn triệt để tình trạng xuất hóa đơn sai giá hoặc sai số lượng giao thực tế.

---

## 5. REQUIREMENTS TRACEABILITY MATRIX (GROUP TRACEABILITY TABLE)

Nhóm Group 6 thiết lập ma trận truy xuất nguồn gốc hai chiều hoàn chỉnh kết nối từ nguồn chứng cứ khảo sát ban đầu đến yêu cầu hệ thống và giải pháp ứng dụng đề xuất:

$$\text{Evidence} \longrightarrow \text{AS-IS Observation} \longrightarrow \text{Business Problem} \longrightarrow \text{Information Need} \longrightarrow \text{BR} \longrightarrow \text{FR} \longrightarrow \text{Candidate Odoo App}$$

| Traceability Dimension | Detail / Specification |
| :--- | :--- |
| **Evidence ID / Source** | **`EVD-W2-SALES-01`** (Biên bản phỏng vấn Trưởng phòng Kinh doanh Tuần 2) & **`EVD-W4-SIM-02`** (Kết quả mô phỏng đối soát hóa đơn Tuần 4). |
| **AS-IS Observation** | Nhân viên kinh doanh lưu giữ các bảng giá Excel cá nhân không đồng bộ (`BangGia_KhachHang_2026.xlsx`) và tra cứu thủ công hợp đồng scan PDF trên ổ đĩa mạng. |
| **Business Problem** | Thiếu cơ chế kiểm soát giá hợp đồng tập trung khiến 5% đến 8% hóa đơn hàng tháng bị sai đơn giá, gây tranh chấp thanh toán và tồn đọng công nợ ~50 triệu đồng/tháng. |
| **Affected Stakeholders** | B2B Sales Representatives, Sales Manager, AR Accountant, B2B Corporate Clients. |
| **Information Need** | Đơn giá hợp đồng có hiệu lực pháp lý và chính sách chiết khấu bậc thang theo số lượng được tự động áp dụng chính xác cho từng khách hàng tại thời điểm lập đơn. |
| **Business Requirement** | **`BR-01`**: Doanh nghiệp cần đơn giá bán hàng B2B được tự động xác định từ hợp đồng khung có hiệu lực để triệt tiêu sai lệch hóa đơn và thu hồi nợ đúng hạn. |
| **Functional Requirements** | **`FR-01`** (Tự động tải đơn giá hợp đồng theo bảng giá khách hàng) & **`FR-02`** (Khóa đơn hàng và yêu cầu cấp quản lý phê duyệt nếu chiết khấu > 5%). |
| **Related Business Process** | `BP1. Processing Corporate Orders` & `BP2. Verifying Contract Prices`. |
| **Candidate Odoo Application** | **Odoo Sales** (*Advanced Pricelist & Approval Rules*). |

---

## 6. PEER REVIEW CHECKLIST & SELF-AUDIT QUALITY VERIFICATION

Thực hiện kiểm tra chéo chất lượng yêu cầu nghiệp vụ theo tiêu chuẩn bài học Tuần 6 (Slide 27, 33):

### Business Requirement Quality Check (Slide 33):
* [x] **Identifiable Need:** `BR-01` và `BR-02` trực tiếp giải quyết vấn đề sai sót giá 5–8% và sự cố hủy 3–4 đơn hàng/tuần do thiếu tồn kho.
* [x] **Outcome-Focused:** Mô tả năng lực và kết quả kinh doanh cần đạt được (loại bỏ sai lệch hóa đơn, rút ngắn chu kỳ thu tiền, ngăn chặn hủy đơn).
* [x] **Solution-Neutral:** Không hề đề cập hay ép buộc "Doanh nghiệp phải cài đặt phần mềm Odoo".
* [x] **Clear & Understandable:** Ngôn ngữ trong sáng, chuẩn mực, các bên liên quan đều hiểu thống nhất một nghĩa.

### Functional Requirement Quality Check (Slide 33):
* [x] **Specific System Behavior:** Mỗi FR mô tả duy nhất một hành vi xử lý cụ thể của hệ thống.
* [x] **Testable:** 100% các FR đều có tiêu chí nghiệm thu rõ ràng (Pass/Fail) và kịch bản thử nghiệm UAT lượng hóa.
* [x] **Traceable Linkage:** Từng FR đều liên kết chặt chẽ với một BR cha và một quy trình nghiệp vụ cụ thể (`BP1`, `BP2`, `BP3`).
* [x] **In-Scope:** Hoàn toàn thuộc phạm vi của Scenario 6 (Phân phối văn phòng phẩm B2B cho doanh nghiệp).
* [x] **No Premature Implementation:** Phát biểu theo cú pháp `The system shall...`, không can thiệp sâu vào cấu trúc bảng cơ sở dữ liệu hay mã nguồn.
