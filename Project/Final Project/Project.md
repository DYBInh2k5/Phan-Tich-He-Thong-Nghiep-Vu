
Group 6 – Office Supplies & Stationery, thì mình sẽ bám đúng brief để chia cho bạn thành “Group 6 phải làm gì từ tuần 1 → tuần 15”.

1. Group 6 đang làm case gì?

Scenario B: B2B Wholesale & Distribution
Domain: Office Supplies & Stationery

Tức là nhóm sẽ giả lập một doanh nghiệp bán buôn văn phòng phẩm, cung cấp hàng cho các khách hàng doanh nghiệp.

Đặc trưng mà brief giao cho Group 6 là:

Contract Pricing – giá bán theo hợp đồng.
Purchase Requisitions – yêu cầu mua hàng.
Customer Invoicing – lập hóa đơn cho khách hàng.
Master data quan trọng: Contract-based price agreements – thỏa thuận giá dựa trên hợp đồng.

Nói đơn giản:

Khách hàng doanh nghiệp → ký hợp đồng giá → đặt hàng → công ty kiểm tra hàng → mua bổ sung nếu thiếu → xuất kho → lập hóa đơn.

2. Group 6 sẽ phải làm những gì?

Toàn bộ project có thể hiểu thành 6 khối công việc lớn:

1. Hiểu doanh nghiệp
   ↓
2. Phỏng vấn Stakeholder
   ↓
3. Phân tích AS-IS
   ↓
4. Thiết kế TO-BE + Requirements
   ↓
5. Use Case + Odoo Prototype
   ↓
6. UAT + Demo + Bảo vệ

Brief yêu cầu mối liên hệ phải rõ:

Business Problem → Process/Pain Point → Business Need → Requirement → System Functionality → Validation.

3. PHASE 1 – BUSINESS ANALYSIS

Đây là phần 30% đầu tiên và cực kỳ quan trọng.

Đặc biệt:

Phase 1 chưa cần làm Odoo.

Brief nói rất rõ Phase 1 đánh giá pure Business Analysis, không yêu cầu screenshot/configuration/user manual Odoo.

Bước 1 – Xây dựng Enterprise Context

Nhóm phải xây dựng bối cảnh doanh nghiệp Group 6.

Ví dụ có thể đặt:

Company B – OfficePro Distribution

Doanh nghiệp bán buôn:

giấy văn phòng
bút
sổ
file hồ sơ
mực máy in
vật dụng văn phòng...

Khách hàng:

công ty
trường học
doanh nghiệp
đại lý
tổ chức...
Nhóm phải mô tả:

Business Model

Supplier
   ↓
Purchasing
   ↓
Warehouse
   ↓
Sales
   ↓
Corporate Customer
   ↓
Accounting

Sau đó xác định:

Business objectives
Departments
Stakeholders
Products
Customers
Suppliers
Business processes
4. Bước 2 – Chia RACI cho nhóm

Brief yêu cầu Domain Setup & Group RACI Assignment Matrix ở tuần 1–2.

Ví dụ nhóm 4 người:

Thành viên	Vai trò chính
Member 1	Business Analyst
Member 2	Project Manager
Member 3	Odoo/System Configurator
Member 4	Tester/UAT

Nhưng không có nghĩa mỗi người chỉ làm một phần.

Brief nói mỗi sinh viên vẫn phải tham gia:

Business analysis
Process modeling
Requirements
Use case
Prototype
Testing
Final presentation.
5. Bước 3 – Stakeholder Interview

Đây là phần rất quan trọng.

Nhóm phải sử dụng AI Stakeholder Agents trên Google AI Studio để thực hiện requirement-gathering interviews.

Với Group 6, có thể điều tra các stakeholder như:

Sales Representative

Quan tâm:

Khách hàng nào?
Giá bán theo hợp đồng thế nào?
Khi khách đặt hàng thì kiểm tra giá ra sao?
Làm sao biết khách còn hợp đồng?
Có được tự ý thay đổi giá không?
Sales Manager

Quan tâm:

Ai được duyệt giá?
Có nhiều mức giá không?
Hợp đồng nào đang hiệu lực?
Làm sao kiểm soát discount?
Purchasing Staff

Quan tâm:

Khi nào cần mua hàng?
Ai tạo Purchase Requisition?
Ai duyệt?
Chọn supplier như thế nào?
Warehouse Staff

Quan tâm:

Hàng còn bao nhiêu?
Đã nhận hàng chưa?
Đơn hàng nào cần xuất?
Stock có chính xác không?
Accountant

Quan tâm:

Khi nào lập invoice?
Khách đã thanh toán chưa?
Hóa đơn nào còn outstanding?
Customer

Quan tâm:

Giá theo hợp đồng
Số lượng
thời gian giao hàng
hóa đơn.
6. Bước 4 – Information Needs Matrix

Sau phỏng vấn phải xác định:

Ai cần thông tin gì, ở thời điểm nào và để làm quyết định gì?

Ví dụ:

Stakeholder	Information Needed	Purpose
Sales	Contract price	Báo giá khách
Sales	Product availability	Xác nhận đơn
Purchasing	Required quantity	Mua hàng
Warehouse	Incoming goods	Chuẩn bị nhận hàng
Accounting	Sales invoice	Thu tiền
Manager	Sales/order status	Theo dõi hoạt động

Brief yêu cầu Information Needs và Chat Transcript Log trong Phase 1.

7. Bước 5 – Phân tích AS-IS

Đây là:

Doanh nghiệp đang làm như thế nào hiện tại?

Ví dụ Group 6:

AS-IS Sales
Customer gửi yêu cầu
        ↓
Sales kiểm tra hợp đồng
        ↓
Tìm giá trong Email/Excel
        ↓
Kiểm tra tồn kho
        ↓
Tạo đơn hàng
        ↓
Thông báo Warehouse

Nhưng phát sinh vấn đề:

Giá hợp đồng nằm ở nhiều nguồn → Sales có thể sử dụng sai giá.

AS-IS Purchasing
Sales yêu cầu hàng
       ↓
Purchasing kiểm tra thiếu hàng
       ↓
Lập yêu cầu mua
       ↓
Xin báo giá Supplier
       ↓
Chọn Supplier
       ↓
Purchase Order
       ↓
Nhận hàng
AS-IS Inventory
Nhận hàng
 ↓
Warehouse kiểm tra
 ↓
Ghi nhận tồn kho
 ↓
Xuất hàng
 ↓
Cập nhật tồn
AS-IS Invoicing
Sales Order
   ↓
Delivery
   ↓
Accounting
   ↓
Create Invoice
   ↓
Customer Payment
8. Bước 6 – Tìm Pain Points

Sau khi vẽ AS-IS, nhóm phải tìm:

Điểm nào đang gây vấn đề?

Ví dụ Group 6:

Pain Point 1 – Contract Pricing

Giá hợp đồng được quản lý bằng:

Email
Excel
tài liệu riêng

→ Sales khó xác định giá chính xác.

Pain Point 2 – Purchase Requisition

Yêu cầu mua hàng được xử lý thủ công.

→ Purchasing mất thời gian.

Pain Point 3 – Inventory

Thông tin hàng tồn kho không cập nhật kịp thời.

→ Sales không chắc có thể đáp ứng đơn hàng.

Pain Point 4 – Invoicing

Accounting phải kiểm tra Sales Order thủ công.

→ mất thời gian lập hóa đơn.

Các vấn đề này phù hợp với nhóm vấn đề chung của Scenario B mà brief đưa ra: pricing không nhất quán, purchasing information phân tán, incoming goods chưa được cập nhật kịp thời và accounting mất thời gian theo dõi invoice/payment.

9. Bước 7 – Root Cause Analysis

Brief yêu cầu:

Fishbone
hoặc 5 Whys

ở tuần 5–9.

Ví dụ:

Problem

Sales áp dụng sai giá hợp đồng.

5 Whys:

Why 1:
Sales áp dụng sai giá
       ↓
Why 2:
Không có thông tin giá tập trung
       ↓
Why 3:
Giá nằm trong nhiều file/email
       ↓
Why 4:
Chưa có quy trình quản lý contract pricing thống nhất
       ↓
Why 5:
Thông tin Sales và Contract chưa được quản lý tập trung

→ Root Cause:

Lack of centralized contract-based pricing information.

10. Bước 8 – Thiết kế TO-BE

Bây giờ mới hỏi:

Sau khi cải tiến, doanh nghiệp nên hoạt động như thế nào?

Ví dụ:

Customer
   ↓
Sales Order
   ↓
System identifies customer contract
   ↓
Apply Contract Price
   ↓
Check Inventory
   ↓
Available?
 ↙       ↘
Yes       No
 ↓         ↓
Delivery   Purchase Requisition
 ↓         ↓
Invoice   Receive Goods
           ↓
        Inventory
           ↓
        Delivery

Đây chính là TO-BE Process.

11. Bước 9 – MoSCoW Requirements

Sau TO-BE, chuyển pain point thành requirements.

Ví dụ:

MUST HAVE

FR-01

System shall allow Sales to select a customer and retrieve the applicable contract-based price.

FR-02

System shall maintain customer-specific contract pricing.

FR-03

System shall provide current product inventory information.

FR-04

System shall allow Purchasing to create purchase orders based on approved purchase requirements.

FR-05

System shall generate customer invoices based on completed sales transactions.

SHOULD HAVE

Ví dụ:

cảnh báo contract sắp hết hạn
báo cáo đơn hàng theo customer
theo dõi purchase status
COULD HAVE

Ví dụ:

dashboard
notification
advanced analytics
12. PHASE 2 – SYSTEM ANALYSIS

Sau Phase 1 mới bước vào phần Odoo.

Brief yêu cầu:

Requirements → Use Cases → Solution → Prototype → Validation.

13. Bước 10 – Use Case Diagram

Group 6 sẽ phải xây dựng Use Case Diagram.

Ví dụ actors:

Customer
    |
    ↓
Sales Representative
    |
    ├── Manage Customer
    ├── Create Quotation
    ├── Create Sales Order
    ├── Check Contract Price
    └── Check Product Availability

Purchasing Staff
    |
    ├── Create Purchase Requisition
    ├── Request Vendor Quotation
    └── Create Purchase Order

Warehouse Staff
    |
    ├── Receive Goods
    ├── Update Inventory
    └── Deliver Products

Accountant
    |
    ├── Create Invoice
    ├── Record Payment
    └── Track Outstanding Invoice

Brief yêu cầu Enterprise Use Case Diagram và Detailed Use Case Specifications.

14. Bước 11 – Detailed Use Case

Không chỉ vẽ diagram.

Mỗi Use Case quan trọng phải mô tả:

Use Case ID
Name
Actor
Preconditions
Main Flow
Alternate Flow
Exception Flow
Postconditions
Business Rules

Ví dụ:

UC-01 – Create Sales Order with Contract Price

Actor:
Sales Representative

Precondition:
Customer exists
Contract is active

Main Flow:

1. Sales selects customer
2. System identifies active contract
3. Sales selects product
4. System retrieves contract price
5. Sales enters quantity
6. System checks inventory
7. Sales confirms order

Exception:
No active contract
→ System alerts Sales
15. Bước 12 – Business Rules

Ví dụ Group 6:

Rule	Business Rule
BR-01	Contract price applies only to eligible customers
BR-02	Expired contract cannot be used
BR-03	Sales cannot arbitrarily override contract price
BR-04	Purchase Order requires appropriate approval
BR-05	Invoice is generated based on completed sales transaction

Phần này cũng nằm trong yêu cầu Business Rules & Operational Constraints Matrix.

16. Bước 13 – Requirements Traceability Matrix

Đây là phần cực quan trọng để chứng minh nhóm làm BSA thật, chứ không phải "vọc Odoo". 😆

Ví dụ:

Business Problem	Requirement	Use Case	Odoo Function	UAT
Sai giá hợp đồng	FR-01	UC-01	Sales/Pricing	TC-01
Không biết tồn kho	FR-02	UC-02	Inventory	TC-02
Mua hàng thủ công	FR-03	UC-03	Purchase	TC-03
Lập invoice thủ công	FR-04	UC-04	Invoicing	TC-04

Brief yêu cầu end-to-end traceability giữa các project artifacts.

17. Bước 14 – Odoo Configuration

Đây là lúc mới cấu hình Odoo.

Brief giới hạn core functional scope tối đa 4 modules:

Sales
Purchase
Inventory
Invoicing/Accounting.

Với Group 6, mình sẽ tập trung vào:

Sales
Customers
Products
Sales Orders
Contract pricing
Purchase
Vendors
Purchase requisition/process
Purchase Orders
Inventory
Products
Stock
Receipts
Deliveries
Invoicing
Customer Invoice
Payment
Outstanding invoice
18. Bước 15 – Master Data

Mỗi group phải có 5–10 realistic SKUs/products.

Group 6 có thể dùng:

SKU	Product
ST-001	A4 Copy Paper 70gsm
ST-002	A4 Copy Paper 80gsm
ST-003	Blue Ballpoint Pen
ST-004	Black Ballpoint Pen
ST-005	A4 File Folder
ST-006	A5 Notebook
ST-007	Stapler
ST-008	Staple 24/6
ST-009	Printer Ink Black
ST-010	Whiteboard Marker

Như vậy vừa đủ 10 SKU, khá đẹp cho demo.

19. Bước 16 – UAT

Sau khi cấu hình Odoo, nhóm phải kiểm thử.

Ví dụ:

UAT-01 – Contract Pricing

Scenario:

Customer A có hợp đồng giá.

→ Sales tạo Sales Order.

→ System áp dụng contract price.

Expected Result:

Giá bán đúng theo hợp đồng.

Result:

PASS / FAIL.

UAT-02 – Inventory

Customer đặt 100 hộp giấy.

→ Kiểm tra inventory.

→ Inventory không đủ.

→ Purchase process được kích hoạt.

UAT-03 – Purchase

Purchase Order được tạo.

→ Supplier giao hàng.

→ Warehouse nhận.

→ Inventory tăng.

UAT-04 – Invoice

Sales Order hoàn thành.

→ Accounting tạo invoice.

→ Customer payment được ghi nhận.

Brief yêu cầu peer UAT, executed test log và Pass/Fail + screenshots.

20. Cuối cùng – Presentation & Live Demo

Tuần 14–15:

Nhóm phải:

Presentation

Trình bày:

Company
 ↓
Business Problem
 ↓
Stakeholders
 ↓
AS-IS
 ↓
Pain Points
 ↓
Root Cause
 ↓
TO-BE
 ↓
Requirements
 ↓
Use Cases
 ↓
Solution
 ↓
Odoo
 ↓
UAT
 ↓
Result
Live Demo

Mình khuyên Group 6 demo một workflow end-to-end, thay vì click lung tung khắp Odoo:

Customer
   ↓
Sales Order
   ↓
Contract Price
   ↓
Inventory Check
   ↓
Purchase Order (nếu thiếu)
   ↓
Receive Goods
   ↓
Delivery
   ↓
Customer Invoice
   ↓
Payment

Đây là cách demo rất đẹp vì nó thể hiện đúng chuỗi Sales → Purchase → Inventory → Invoicing.

🧭 Tóm lại Group 6 phải nộp gì?
Giai đoạn	Công việc	Output
Week 1–2	Domain + RACI	Enterprise Context + RACI
Week 3–4	AI Stakeholder Interview	Interview + Information Needs
Week 5–7	AS-IS / TO-BE	BPMN + Pain Points
Week 5–7	Root Cause	Fishbone / 5 Whys
Week 8–9	Requirements	MoSCoW + FR
Week 10	Use Case	Use Case Diagram + Specifications
Week 11	Alignment	RTM + Peer Review
Week 12	Odoo	Configuration + 5–10 SKUs + UAT cases
Week 13	Testing	UAT Log + Pass/Fail + Screenshots
Week 14–15	Defense	Slides + Live Odoo Demo

Các mốc và deliverables này được quy định trực tiếp trong brief.

🎯 Quan trọng nhất

Đừng bắt đầu bằng Odoo.

Sai cách:

"Odoo có module gì → mình bật hết lên."

Đúng cách:

Doanh nghiệp có vấn đề gì → quy trình đang đau ở đâu → cần gì → requirement gì → Odoo có chức năng nào đáp ứng → kiểm thử nó.

Đây chính là triết lý cốt lõi của project.

Nếu làm Group 6 với mình, mình đề xuất chúng ta đi từng bước từ Section 1 của BRD, xây luôn Company + Business Context + Stakeholders + RACI + Problem Statement trước, rồi mới sang interview và BPMN.
