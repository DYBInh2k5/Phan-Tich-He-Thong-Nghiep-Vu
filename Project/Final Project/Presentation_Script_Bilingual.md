# KỊCH BẢN THUYẾT TRÌNH BẢO VỆ ĐỒ ÁN PHASE 1 (SONG NGỮ ANH - VIỆT)
## BSA FINAL PROJECT DEFENSE SCRIPT — GROUP 6
**Enterprise Case:** OfficePro Distribution Co., Ltd.  
**Domain Scenario:** Scenario B — B2B Wholesale & Distribution (Office Supplies & Stationery)  
**Khóa học:** Business Systems Analysis (BSA) — Năm học 2026–2027, Học kỳ 1  
**Giảng viên hướng dẫn:** ThS. Nguyễn Thị Thanh Thanh  

---

### 👥 PHÂN CÔNG THUYẾT TRÌNH (SPEAKER ASSIGNMENT)
- **Speaker 1: Võ Duy Bình (MSSV: 22301500)** — Team Leader / Lead BA & SA  
  *Phụ trách các Slide:* 1, 2, 3, 5, 6, 7, 8 (Mở đầu, Bối cảnh doanh nghiệp, RACI, Vấn đề cốt lõi, Quy trình AS-IS, 5-Whys, Quy trình TO-BE).
- **Speaker 2: Phạm Nguyễn Gia Thuận (MSSV: 22204631)** — QA & Solution Configurator  
  *Phụ trách các Slide:* 4, 9, 10, 11, 12, 13, 14, 15, 16 (Phỏng vấn Stakeholder, Yêu cầu MoSCoW, Use Case, Business Rules & NFR, RTM, Kiến trúc Odoo, Kết quả UAT, Demo Luồng và Kết luận Q&A).

---

# SLIDE 1: TRANG TIÊU ĐỀ & TỔNG QUAN HỒ SƠ (TITLE & EXECUTIVE SUMMARY)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 45 - 60 giây  

### 🇬🇧 English Script:
> "Good morning, Lecturer MSc. Nguyen Thi Thanh Thanh, and members of the Examination Board.  
> 
> My name is **Vo Duy Binh**, the Team Leader and Lead Business Analyst of **Group 6**. Joining me today is my teammate, **Pham Nguyen Gia Thuan**, who serves as our QA and Solution Configurator.  
> 
> Today, we are proud to present our Phase 1 Business Requirements Document and Solution Architecture for **Scenario B: B2B Wholesale & Distribution in Office Supplies and Stationery**, representing our enterprise case: **OfficePro Distribution Co., Ltd.**  
> 
> In this project, we rigorously applied the **'Business-First → Technology-Second'** methodology. We investigated real operational friction in contract pricing, inventory visibility, and invoice matching, and engineered an integrated business solution that bridges real-world enterprise needs with modern ERP capabilities.  
> 
> Let us begin by walking you through our Enterprise Profile."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Kính chào Giảng viên ThS. Nguyễn Thị Thanh Thanh và Hội đồng đánh giá.  
> 
> Em tên là **Võ Duy Bình**, Trưởng nhóm và Phụ trách Phân tích Nghiệp vụ của **Nhóm 6**. Đồng hành cùng em hôm nay là bạn **Phạm Nguyễn Gia Thuận**, đảm nhận vai trò Đảm bảo Chất lượng (QA) và Cấu hình Giải pháp.  
> 
> Hôm nay, nhóm em xin phép trình bày Báo cáo Yêu cầu Nghiệp vụ (BRD) và Kiến trúc Giải pháp Phase 1 cho **Kịch bản B: Bán buôn & Phân phối Văn phòng phẩm B2B**, đại diện cho doanh nghiệp: **Công ty TNHH Phân phối OfficePro**.  
> 
> Đồ án này được thực hiện dựa trên phương pháp luận chuẩn mực **'Nghiệp vụ đi trước → Công nghệ theo sau'**. Nhóm em đã điều tra sâu các điểm nghẽn thực tế trong việc tra giá hợp đồng, theo dõi tồn kho và đối soát hóa đơn, từ đó thiết kế giải pháp tích hợp kết nối nhu cầu nghiệp vụ với hệ thống ERP hiện đại.  
> 
> Sau đây, em xin phép bắt đầu với phần Bối cảnh Doanh nghiệp."

---

# SLIDE 2: BỐI CẢNH DOANH NGHIỆP & DANH MỤC 10 SKUS (ENTERPRISE PROFILE & 10 SKUS)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 60 giây  

### 🇬🇧 English Script:
> "OfficePro Distribution Co., Ltd. is a specialized regional B2B wholesale distributor operating in Southern Vietnam, serving over **250 active corporate clients**, schools, and retail stationery sub-dealers.  
> 
> Operationally, our headquarters and sales office are located in District 3, Ho Chi Minh City. We manage a **central warehouse of 2,500 square meters in Tan Binh Industrial Park**, holding 80% of our inventory, supported by a regional transit depot in Bien Hoa to facilitate fast industrial deliveries.  
> 
> On the right, you can see our **Master Data catalog comprising 10 primary SKUs**. Our high-velocity anchor products include `ST-001` - Double A A4 Paper 70gsm, and `ST-002` - IK Plus Paper 80gsm, alongside writing instruments, filing supplies, staplers, and HP laser toners.  
> 
> Our key business model relies on **framework contract agreements**, where corporate accounts receive special discounted pricing—such as 65,000 VND for Double A paper instead of the 75,000 VND standard list price—supported by **Net 30 commercial payment terms**."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Công ty TNHH Phân phối OfficePro là doanh nghiệp bán buôn B2B chuyên phân phối văn phòng phẩm tại khu vực miền Nam, phục vụ hơn **250 khách hàng doanh nghiệp**, trường học và đại lý bán lẻ.  
> 
> Về mạng lưới cơ sở, trụ sở chính và phòng kinh doanh đặt tại Quận 3, TP.HCM. Doanh nghiệp vận hành một **kho trung tâm rộng 2.500 m² tại KCN Tân Bình** lưu trữ 80% lượng hàng, kết hợp kho trung chuyển tại Biên Hòa để đáp ứng giao hàng nhanh cho các khu công nghiệp.  
> 
> Phía bên phải là **Danh mục Master Data gồm 10 SKUs chủ lực**. Trong đó, mặt hàng có lưu chuyển nhanh nhất là `ST-001` - Giấy Double A A4 70gsm và `ST-002` - Giấy IK Plus 80gsm, cùng các dòng bút, bìa còng, bấm kim và mực in HP.  
> 
> Đặc trưng mô hình kinh doanh của chúng em dựa trên **hợp đồng nguyên tắc (Framework Agreements)**, trong đó khách hàng doanh nghiệp được áp dụng giá hợp đồng ưu đãi—ví dụ giấy Double A có giá 65.000 VNĐ thay vì giá niêm yết 75.000 VNĐ—kèm điều khoản thanh toán công nợ **Net 30 ngày**."

---

# SLIDE 3: MA TRẬN PHÂN CÔNG RACI (GROUP RACI GOVERNANCE MATRIX)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 45 giây  

### 🇬🇧 English Script:
> "To ensure rigorous academic governance and seamless execution, Group 6 established a clear **RACI Assignment Matrix**.  
> 
> As the Team Leader, I am **Accountable and Responsible** for the Sales and Purchasing core modules. My responsibilities focus on the B2B customer order journey, contract pricing rules, quotation approval workflows, reorder thresholds, and vendor purchase requisitions.  
> 
> My partner, **Pham Nguyen Gia Thuan**, is **Accountable and Responsible** for the Inventory and Accounting modules. He oversees multi-warehouse stock visibility, Available-to-Promise inventory tracking, automated 3-way invoice matching, Net 30 credit policy enforcement, and peer UAT quality validation.  
> 
> This governance structure ensures complete individual ownership while maintaining cohesive integration across the entire business lifecycle."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Nhằm đảm bảo tính chuẩn mực trong quản trị đồ án, Nhóm 6 đã xây dựng **Ma trận Phân công RACI** rất rõ ràng.  
> 
> Với vai trò Trưởng nhóm, em chịu trách nhiệm chính (**Accountable & Responsible**) cho hai phân hệ **Sales (Bán hàng)** và **Purchasing (Mua hàng)**. Phạm vi phụ trách bao gồm: luồng xử lý đơn hàng B2B, quy tắc giá hợp đồng, duyệt báo giá chiết khấu, hạn mức định mức mua hàng và đơn đặt hàng nhà cung cấp.  
> 
> Bạn **Phạm Nguyễn Gia Thuận** chịu trách nhiệm chính (**Accountable & Responsible**) cho hai phân hệ **Inventory (Kho bãi)** và **Accounting (Kế toán)**. Thuận phụ trách: theo dõi tồn kho đa kho, cơ chế tồn kho khả dụng ATP, tự động khớp hóa đơn 3 bên (3-Way Matching), kiểm soát nợ quá hạn Net 30 và kịch bản kiểm thử UAT.  
> 
> Cơ cấu phân vai này đảm bảo mỗi thành viên có trách nhiệm độc lập sâu sắc nhưng vẫn phối hợp nhịp nhàng trên toàn bộ chuỗi quy trình."

---

# SLIDE 4: PHÂN TÍCH STAKEHOLDER & NHẬT KÝ PHỎNG VẤN (STAKEHOLDER DYNAMICS & EVIDENCE LOG)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 50 giây  

### 🇬🇧 English Script:
> "Thank you, Binh. Good morning, Lecturer and Examination Board. I will now present our Stakeholder Analysis and Elicitation Evidence.  
> 
> Using the **Power/Interest Grid**, we categorized our business actors. Our **Sales Manager and Business Owner** fall into the *'Manage Closely'* quadrant, as they drive commercial pricing rules and revenue retention. The **Chief Accountant** sits in *'Keep Satisfied'*, strictly enforcing Net 30 debt limits and invoice accuracy. Warehouse and sales staff are *'Kept Informed'* with operational updates.  
> 
> On the right is our **Verified Elicitation Log**, captured during simulated stakeholder interviews:  
> - First, we **Confirmed** that sales reps manually copy-paste contract prices from disconnected personal Excel files.  
> - Second, we **Confirmed** that reps rely on informal morning Excel reports or phone calls to verify stock, causing frequent stockouts post-confirmation.  
> - Third, regarding the 30-day credit hold, we **Revised** our initial assumption: a credit policy exists on paper, but reps frequently obtain verbal overrides from managers to hit monthly sales quotas.  
> 
> These findings directly uncovered our core operational problems."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Cảm ơn Bình. Kính chào Giảng viên và Hội đồng. Sau đây em xin trình bày về phần Phân tích Bên liên quan và Nhật ký Bằng chứng Thu thập Yêu cầu.  
> 
> Dựa trên **Ma trận Quyền lực / Mức độ Quan tâm (Power/Interest Grid)**, nhóm em chia các đối tượng vào 4 nhóm. **Trưởng phòng Kinh doanh và Chủ doanh nghiệp** thuộc nhóm *'Quản lý chặt chẽ' (Manage Closely)* vì họ quyết định chính sách giá và doanh thu. **Kế toán trưởng** thuộc nhóm *'Làm hài lòng' (Keep Satisfied)* nhằm đảm bảo chặt chẽ hạn mức nợ Net 30 và tính chính xác của hóa đơn. Đội ngũ kho và nhân viên bán hàng thuộc nhóm *'Cần cập nhật thông tin'*.  
> 
> Phía bên phải là **Nhật ký Bằng chứng Phỏng vấn** được xác minh:  
> - Thứ nhất, chúng em đã **Xác nhận (Confirmed)** rằng nhân viên kinh doanh đang tra cứu và sao chép giá hợp đồng hoàn toàn thủ công từ các file Excel riêng lẻ.  
> - Thứ hai, chúng em đã **Xác nhận (Confirmed)** việc kiểm tra tồn kho bằng gọi điện thoại hoặc file Excel buổi sáng dẫn đến tình trạng hết hàng sau khi đã xác nhận đơn.  
> - Thứ ba, về quy định khóa nợ 30 ngày, chúng em đã **Hiệu chỉnh (Revised)**: Chính sách khóa nợ có trên giấy tờ, nhưng nhân viên bán hàng thường xin duyệt miệng qua mặt quy trình để chạy chỉ tiêu doanh số.  
> 
> Những bằng chứng thực tế này đã dẫn thẳng đến các vấn đề cốt lõi của doanh nghiệp."

---

# SLIDE 5: VẤN ĐỀ NGHIỆP VỤ CỐT LÕI (PRIMARY OPERATIONAL PROBLEMS)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 60 giây  

### 🇬🇧 English Script:
> "Through our elicitation evidence, we isolated **three critical operational friction points**:  
> 
> **Problem 1: Contract Pricing Discrepancies.**  
> Because framework agreement prices are scattered across individual sales reps' personal Excel spreadsheets, manual copy-pasting creates a **5 to 8% error rate on client invoices**. This triggers billing disputes and incurs an estimated **50 million VND per month in invoice adjustments and credit notes**.  
> 
> **Problem 2: Post-Confirmation Stockouts.**  
> Sales confirms bulk corporate orders based on outdated morning stock sheets. Meanwhile, physical goods receiving takes **24 to 48 hours to be logged**. This information blindness causes **3 to 4 stockouts per week after orders are confirmed**, damaging client trust and leading to order cancellations.  
> 
> **Problem 3: Manual 3-Way Matching Overhead.**  
> The Accounting department expends **15 to 20 hours every week** manually reconciling paper Sales Orders, driver-signed Delivery Notes, and billing invoices. Furthermore, overdue accounts continue placing orders without automatic system blocks."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Từ các bằng chứng phỏng vấn, nhóm em đã xác định được **3 nỗi đau nghiệp vụ nghiêm trọng nhất**:  
> 
> **Vấn đề 1: Sai lệch Giá Hợp đồng (Tỷ lệ lỗi 5 - 8%).**  
> Do các bảng giá hợp đồng nguyên tắc bị phân tán trong các file Excel cá nhân của từng nhân viên, việc copy-paste thủ công gây ra tỷ lệ sai sót 5-8% trên hóa đơn. Điều này dẫn đến tranh chấp công nợ và gây thiệt hại khoảng **50 triệu VNĐ mỗi tháng tiền điều chỉnh hóa đơn**.  
> 
> **Vấn đề 2: Tình trạng Hết hàng sau khi đã Chốt đơn (3 - 4 đơn/tuần).**  
> Nhân viên bán hàng chốt đơn số lượng lớn dựa trên bảng tồn kho cũ buổi sáng. Trong khi đó, hàng nhập về mất **24 đến 48 giờ mới được nhập liệu**. Sự chậm trễ thông tin này gây ra 3-4 đơn hàng bị hủy mỗi tuần do kho thực tế không còn đủ hàng.  
> 
> **Vấn đề 3: Gánh nặng Đối soát Hóa đơn 3 Bên Thủ công (15 - 20 giờ/tuần).**  
> Phòng Kế toán phải tốn 15 đến 20 tiếng mỗi tuần để ngồi đối chiếu thủ công giữa đơn đặt hàng bằng giấy, biên bản giao hàng có chữ ký của tài xế và hóa đơn xuất ra. Ngoài ra, các khách hàng nợ quá hạn vẫn đặt được đơn mới do thiếu cơ chế khóa tự động."

---

# SLIDE 6: PHÂN TÍCH QUY TRÌNH HIỆN TẠI AS-IS (AS-IS BUSINESS PROCESS ANALYSIS)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 55 giây  

### 🇬🇧 English Script:
> "Slide 6 illustrates our **AS-IS Process Model**, capturing current operations as they truly exist, without sugarcoating manual flaws.  
> 
> The process begins when a corporate client emails an order inquiry.  
> - Step 1: The sales rep manually opens their personal Excel price list to find the customer's agreed rates.  
> - Step 2: The rep calls the Tan Binh warehouse clerk to verbally check inventory availability.  
> - Step 3: If verbally confirmed, the rep drafts a manual quote, waits for email approval, and prints a physical paper Sales Order.  
> - Step 4: Physical paper copies are walked to the warehouse for picking and to accounting for billing.  
> 
> As visualized in our transformation infographic, this workflow operates in **isolated departmental silos**, heavily burdened by physical paperwork, disconnected files, and communication lag."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 6 thể hiện **Mô hình Quy trình Hiện tại (AS-IS)** của OfficePro, phản ánh trung thực thực tế vận hành thủ công mà không che giấu các khiếm khuyết.  
> 
> Quy trình bắt đầu khi khách hàng doanh nghiệp gửi email yêu cầu đặt hàng:  
> - Bước 1: Nhân viên kinh doanh mở file Excel cá nhân để tra cứu đơn giá thỏa thuận của khách.  
> - Bước 2: Nhân viên gọi điện thoại cho thủ kho Tân Bình để hỏi miệng xem còn đủ hàng không.  
> - Bước 3: Nếu thủ kho báo còn, nhân viên soạn báo giá gửi khách duyệt, rồi in Đơn bán hàng (SO) ra giấy.  
> - Bước 4: Tờ đơn giấy này được chuyển tay xuống kho để bốc hàng và gửi qua kế toán để làm hóa đơn.  
> 
> Như sơ đồ Infographic minh họa, quy trình này đang vận hành theo **từng ốc đảo phòng ban riêng rẽ**, phụ thuộc hoàn toàn vào giấy tờ in ấn, file Excel rời rạc và độ trễ giao tiếp."

---

# SLIDE 7: PHÂN TÍCH NGUYÊN NHÂN CỐT LÕI 5-WHYS (5-WHYS ROOT CAUSE BREAKDOWN)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 60 giây  

### 🇬🇧 English Script:
> "To prevent jumping prematurely into software assumptions, we conducted a rigorous **5-Whys Root Cause Analysis** across our primary friction points:  
> 
> Looking at our **Contract Pricing Errors**:  
> 1. *Why are prices wrong?* Reps copy-paste unit prices from personal Excel files.  
> 2. *Why personal Excel files?* Because each rep maintains separate price sheets for their assigned accounts.  
> 3. *Why separate files?* Because signed framework contracts are stored as static scanned PDFs on shared network drives.  
> 4. *Why scanned PDFs?* Because the company lacks a centralized database mapping contracted SKUs directly to accounts.  
> 5. **Root Cause:** **The enterprise lacks an integrated ERP contract pricing engine that automatically enforces contracted unit prices upon customer selection.**  
> 
> Similar root cause chains revealed the lack of a real-time Available-to-Promise inventory visibility engine and the absence of an automated 3-way matching financial rule. This leads directly to our TO-BE re-engineering."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Để tránh việc vội vàng kết luận giải pháp phần mềm khi chưa hiểu rõ gốc rễ, nhóm em đã thực hiện kỹ thuật **Phân tích 5-Whys (5 câu hỏi Tại sao)**:  
> 
> Điển hình ở lỗi **Sai lệch Giá Hợp đồng**:  
> 1. *Tại sao giá bán bị sai?* Vì nhân viên copy-paste giá từ file Excel cá nhân.  
> 2. *Tại sao lại dùng file Excel cá nhân?* Vì mỗi nhân viên tự quản lý danh sách giá cho tập khách hàng của mình.  
> 3. *Tại sao lại lưu rời rạc?* Vì hợp đồng nguyên tắc được lưu dưới dạng file PDF scan trên ổ đĩa chung.  
> 4. *Tại sao lưu PDF scan?* Vì công ty chưa có cơ sở dữ liệu tập trung liên kết mã SKU theo từng hợp đồng khách hàng.  
> 5. **Nguyên nhân gốc rễ (Root Cause):** **Doanh nghiệp thiếu một Công cụ Quản lý Giá Hợp đồng tập trung trong hệ thống ERP để tự động áp giá chuẩn khi chọn khách hàng.**  
> 
> Tương tự, nguyên nhân gốc rễ của việc hết hàng là do thiếu cơ chế Tồn kho Khả dụng (ATP) thời gian thực, và gánh nặng kế toán là do thiếu cơ chế tự động khớp 3 bên. Điều này mở đường cho quy trình TO-BE tương lai."

---

# SLIDE 8: THIẾT KẾ QUY TRÌNH TƯƠNG LAI TO-BE (TO-BE INTEGRATED PROCESS RE-ENGINEERING)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 60 giây  

### 🇬🇧 English Script:
> "Slide 8 showcases our re-engineered **TO-BE Integrated Workflow**, designed on four core automation principles:  
> 
> 1. **Automated Contract Pricelists:** When a B2B client is selected in the system, contracted prices—such as 65,000 VND for `ST-001`—are retrieved automatically, completely eliminating the 5–8% error rate.  
> 2. **Real-Time Available-to-Promise (ATP) Check:** Before confirming a Sales Order, the system instantly validates stock levels across Tan Binh and Bien Hoa warehouses, cutting post-confirmation stockouts by 95%. If stock is below threshold, an automated Purchase Requisition draft is created.  
> 3. **Automated Credit Control:** The system automatically locks order confirmation for accounts with debt overdue > 30 days.  
> 4. **Automated 3-Way Matching:** Upon delivery, digital receipt logs automatically generate VAT invoices and reconcile against the original PO, saving 90% of accounting manual hours.  
> 
> Now, my teammate Thuan will guide you through our Requirements, Use Cases, and System Validation."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 8 trình bày **Quy trình Tương lai Tích hợp (TO-BE)** được tái cấu trúc dựa trên 4 nguyên tắc tự động hóa cốt lõi:  
> 
> 1. **Tự động áp Bảng giá Hợp đồng:** Khi chọn khách hàng B2B trên hệ thống, giá hợp đồng (như 65.000đ cho `ST-001`) tự động xuất hiện, xóa bỏ hoàn toàn 5-8% lỗi nhập liệu.  
> 2. **Kiểm tra Tồn kho Khả dụng (ATP) Thời gian thực:** Trước khi xác nhận đơn, hệ thống kiểm tra ngay tồn kho khả dụng giữa kho Tân Bình và kho Biên Hòa, giảm 95% tình trạng thiếu hàng. Nếu hàng dưới định mức, hệ thống tự sinh bản thảo Mua hàng (Purchase Requisition).  
> 3. **Tự động Kiểm soát Nợ quá hạn:** Hệ thống tự động khóa xác nhận đơn với các tài khoản có nợ quá hạn trên 30 ngày.  
> 4. **Tự động Đối soát 3 Bên:** Khi giao hàng hoàn tất, phiếu xuất kho điện tử tự động liên kết để xuất hóa đơn VAT và khớp 3 bên với đơn đặt hàng ban đầu, tiết kiệm 90% thời gian kế toán.  
> 
> Sau đây, bạn Thuận sẽ tiếp tục trình bày về Yêu cầu Chức năng, Use Case và Kiểm thử Hệ thống."

---

# SLIDE 9: DANH MỤC YÊU CẦU CHỨC NĂNG MOSCOW (MOSCOW FUNCTIONAL REQUIREMENTS)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 50 giây  

### 🇬🇧 English Script:
> "Thank you, Binh. To transform our TO-BE workflow into actionable engineering specifications, we classified our requirements using the **MoSCoW Prioritization Framework**:  
> 
> - **Must Have:**  
>   - `FR-01`: Automated retrieval of customer contract pricelists upon client selection.  
>   - `FR-02`: Real-time Available-to-Promise stock visibility across Tan Binh and Bien Hoa.  
>   - `FR-03`: Hard automated credit hold enforcement for debts overdue > 30 days.  
>   - `FR-04`: Automated draft purchase requisition generation triggered by minimum stock thresholds.  
>   - `FR-05`: Automated 3-way invoice matching between SO, Delivery Note, and Billing invoice.  
> - **Should Have:** Includes `FR-06` for 30-day contract expiration notices and `FR-07` for multi-supplier RFQ comparison tables.  
> - **Could Have:** Features executive Accounts Receivable debt aging dashboards (`FR-08`).  
> 
> Every requirement is tied directly to a measured operational objective."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Cảm ơn Bình. Để chuyển hóa quy trình TO-BE thành đặc tả hệ thống cụ thể, nhóm em đã phân loại yêu cầu theo **Khung ưu tiên MoSCoW**:  
> 
> - **Bắt buộc phải có (Must Have):**  
>   - `FR-01`: Tự động tra xuất bảng giá hợp đồng khi chọn khách hàng B2B.  
>   - `FR-02`: Hiển thị tồn kho khả dụng (ATP) thời gian thực giữa kho Tân Bình và Biên Hòa.  
>   - `FR-03`: Tự động khóa đơn hàng đối với các khách có nợ quá hạn > 30 ngày.  
>   - `FR-04`: Tự động tạo bản thảo Yêu cầu mua hàng khi tồn kho dưới mức tối thiểu.  
>   - `FR-05`: Tự động đối soát hóa đơn 3 bên giữa Đơn bán hàng, Phiếu xuất kho và Hóa đơn.  
> - **Nên có (Should Have):** Gồm `FR-06` cảnh báo hợp đồng sắp hết hạn trước 30 ngày và `FR-07` bảng so sánh báo giá nhiều nhà cung cấp.  
> - **Có thể có (Could Have):** Dashboard theo dõi tuổi nợ công nợ (`FR-08`).  
> 
> Toàn bộ các yêu cầu này đều gắn chặt với các mục tiêu kinh doanh đã đặt ra."

---

# SLIDE 10: ĐẶC TẢ CHI TIẾT USE CASE (USE CASE SPECIFICATIONS)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 60 giây  

### 🇬🇧 English Script:
> "Slide 10 details two primary enterprise Use Cases: `UC-SALES-01` and `UC-PURCH-01`.  
> 
> In **`UC-SALES-01`: Create Sales Order with Contract Price**:  
> - **Primary Actor:** B2B Sales Representative.  
> - **Preconditions:** Client account is active with a registered framework agreement.  
> - **Main Success Flow:** The rep creates a Sales Order and selects the corporate client. The system immediately loads the contracted pricelist. When adding SKU `ST-001`, the unit price automatically populates as 65,000 VND instead of 75,000 VND. The system validates ATP stock, and the order is confirmed.  
> - **Exception Flow:** If the client has overdue debt exceeding 30 days, the system blocks confirmation, locks status to *'Credit Hold'*, and routes an alert to Accounting.  
> 
> In **`UC-PURCH-01`**, when stock drops below 100 reams, the system automatically drafts a Purchase Requisition, allowing procurement to issue RFQs and POs without manual delays."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 10 trình bày hai Use Case nghiệp vụ cốt lõi: `UC-SALES-01` và `UC-PURCH-01`.  
> 
> Với **`UC-SALES-01`: Tạo Đơn bán hàng với Giá Hợp đồng**:  
> - **Tác nhân chính:** Nhân viên kinh doanh B2B.  
> - **Điều kiện tiên quyết:** Khách hàng đã có tài khoản và hợp đồng nguyên tắc còn hiệu lực.  
> - **Luồng chính:** Nhân viên tạo đơn và chọn khách hàng doanh nghiệp. Hệ thống tự động áp bảng giá hợp đồng. Khi chọn sản phẩm `ST-001`, đơn giá tự động nhảy thành 65.000 VNĐ thay vì 75.000 VNĐ. Hệ thống kiểm tra tồn kho ATP và đơn hàng được xác nhận.  
> - **Luồng ngoại lệ:** Nếu khách có nợ quá hạn > 30 ngày, hệ thống chặn xác nhận, khóa đơn ở trạng thái *'Credit Hold'* và gửi thông báo cho Kế toán.  
> 
> Với **`UC-PURCH-01`**, khi tồn kho giảm dưới 100 ram, hệ thống tự tạo bản thảo Mua hàng, giúp bộ phận thu mua xử lý báo giá và gửi PO nhà cung cấp ngay lập tức."

---

# SLIDE 11: QUY TẮC NGHIỆP VỤ & YÊU CẦU PHI CHỨC NĂNG (BUSINESS RULES & NFR)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 50 giây  

### 🇬🇧 English Script:
> "System integrity relies on clear governance. We defined explicit **Business Rules (BR)** and **Non-Functional Requirements (NFR)**:  
> 
> - **`BR-01`:** Contract unit prices are locked. Any manual price discount greater than 5% requires formal managerial approval in the system.  
> - **`BR-02`:** Strict credit lock policy: Orders for customers with unpaid balances over 30 days are automatically blocked from delivery.  
> - **`BR-03`:** Automated replenishment rule: A reorder trigger activates when ATP stock for `ST-001` drops below 100 reams.  
> - **`BR-04`:** 3-way matching tolerance is set to a strict 0.5% variance between PO and supplier bills.  
> 
> For **NFRs**, we enforce **Role-Based Access Control (`NFR-01`)** ensuring strict segregation of duties; **Performance (`NFR-02`)** guaranteeing ATP lookups execute under 1.0 second with 50 concurrent users; and full **Audit Integrity (`NFR-04`)**."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Để đảm bảo tính toàn vẹn hệ thống, nhóm em thiết lập các **Quy tắc Nghiệp vụ (BR)** và **Yêu cầu Phi chức năng (NFR)** chặt chẽ:  
> 
> - **`BR-01`:** Khóa giá hợp đồng. Bất kỳ mức chiết khấu nào vượt quá 5% bắt buộc phải có phê duyệt điện tử từ Trưởng phòng Kinh doanh.  
> - **`BR-02`:** Chính sách khóa công nợ nghiêm ngặt: Khách hàng nợ quá hạn 30 ngày bị tự động chặn xác nhận đơn xuất kho.  
> - **`BR-03`:** Định mức tồn kho tối thiểu: Hệ thống tự động báo mua khi hàng `ST-001` giảm dưới 100 ram.  
> - **`BR-04`:** Dung sai đối soát hóa đơn 3 bên được cố định ở mức 0.5% giữa đơn PO và hóa đơn thanh toán.  
> 
> Về **NFR**, hệ thống đảm bảo **Phân quyền người dùng RBAC (`NFR-01`)** để tách bạch trách nhiệm; **Tốc độ xử lý (`NFR-02`)** dưới 1.0 giây cho việc tra tồn kho ATP với 50 người dùng đồng thời; và **Nhật ký kiểm toán (`NFR-04`)** ghi lại toàn bộ lịch sử sửa đổi."

---

# SLIDE 12: MA TRẬN TRUY XUẤT YÊU CẦU RTM (REQUIREMENTS TRACEABILITY MATRIX)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 45 giây  

### 🇬🇧 English Script:
> "Slide 12 presents our **Requirements Traceability Matrix (RTM)**, demonstrating full end-to-end alignment from business problems to test validation:  
> 
> - *Problem:* 5–8% Contract Price Errors ➔ mapped to `FR-01` ➔ supported by `UC-01` ➔ executed in Odoo Sales ➔ validated by `TC-01` ➔ **Target: 0% Pricing Errors**.  
> - *Problem:* Post-Confirmation Stockouts ➔ mapped to `FR-02` ➔ supported by `UC-02` ➔ executed in Odoo Inventory ➔ validated by `TC-02` ➔ **Target: 95% Stockout Reduction**.  
> - *Problem:* Fast-Mover Depletion ➔ mapped to `FR-04` ➔ supported by `UC-03` ➔ executed in Odoo Purchase ➔ validated by `TC-03` ➔ **Target: Automated PO Drafts**.  
> - *Problem:* Manual 3-Way Match Overhead ➔ mapped to `FR-05` ➔ supported by `UC-04` ➔ executed in Odoo Invoicing ➔ validated by `TC-04` ➔ **Target: Reconcile Time Saved from 20h to 2h/week**.  
> 
> This matrix proves that not a single software feature is built without a corresponding business justification."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 12 là **Ma trận Truy xuất Yêu cầu (RTM)**, chứng minh tính liên kết 100% từ Nỗi đau doanh nghiệp đến Kết quả kiểm thử:  
> 
> - *Vấn đề:* Lỗi giá hợp đồng 5-8% ➔ gắn với `FR-01` ➔ hiện thực qua `UC-01` ➔ phân hệ Odoo Sales ➔ kiểm thử qua `TC-01` ➔ **Mục tiêu: Triệt tiêu 100% lỗi giá**.  
> - *Vấn đề:* Hết hàng sau chốt đơn ➔ gắn với `FR-02` ➔ hiện thực qua `UC-02` ➔ phân hệ Odoo Inventory ➔ kiểm thử qua `TC-02` ➔ **Mục tiêu: Giảm 95% đơn thiếu hàng**.  
> - *Vấn đề:* Chậm mua hàng giấy in ➔ gắn với `FR-04` ➔ hiện thực qua `UC-03` ➔ phân hệ Odoo Purchase ➔ kiểm thử qua `TC-03` ➔ **Mục tiêu: Tự động hóa bản thảo PO**.  
> - *Vấn đề:* Đối soát thủ công tốn thời gian ➔ gắn với `FR-05` ➔ hiện thực qua `UC-04` ➔ phân hệ Odoo Invoicing ➔ kiểm thử qua `TC-04` ➔ **Mục tiêu: Giảm giờ đối soát từ 20h xuống 2h/tuần**.  
> 
> Ma trận này là bằng chứng khẳng định không có bất kỳ tính năng công nghệ nào được đưa vào mà thiếu lý do nghiệp vụ thực tế."

---

# SLIDE 13: CẤU HÌNH PHÂN HỆ ODOO ERP (ODOO ERP ARCHITECTURE & SETUP)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 45 giây  

### 🇬🇧 English Script:
> "To prove solution viability, we architected our enterprise setup within **Odoo ERP** across four tightly integrated modules:  
> - **Odoo Sales:** Configured with advanced customer pricelists, quotations, B2B commercial terms, and credit check hooks.  
> - **Odoo Purchase:** Configured with supplier vendor catalogs, automated replenishment schedulers, and RFQ comparison.  
> - **Odoo Inventory:** Configured with multi-warehouse topology—Tan Binh Central Warehouse and Bien Hoa Depot—supporting real-time ATP stock indicators and bin routing.  
> - **Odoo Invoicing:** Configured with automated 3-way matching rules, VAT electronic invoicing, and Net 30 debt ledgers.  
> 
> As shown on the live dashboard mockup, management gains real-time visibility across active contracts, incoming purchase requisitions, and accounts receivable aging."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Để chứng minh tính khả thi của giải pháp, nhóm em đã thiết lập kiến trúc trên **Odoo ERP** bao gồm 4 phân hệ liên kết chặt chẽ:  
> - **Odoo Sales:** Cấu hình Bảng giá hợp đồng nâng cao cho khách B2B, báo giá và cơ chế chặn đơn nợ quá hạn.  
> - **Odoo Purchase:** Quản lý danh mục nhà cung cấp, quy tắc mua hàng tự động và so sánh báo giá RFQ.  
> - **Odoo Inventory:** Thiết lập cấu trúc đa kho giữa Kho Tân Bình và Kho Biên Hòa, hiển thị chỉ số tồn kho ATP thời gian thực.  
> - **Odoo Invoicing:** Thiết lập quy tắc đối soát hóa đơn 3 bên tự động, hóa đơn VAT và quản lý công nợ Net 30.  
> 
> Như giao diện Dashboard hiển thị, ban giám đốc có cái nhìn thời gian thực về hợp đồng hiệu lực, đơn mua hàng bổ sung và tiến độ thu hồi công nợ."

---

# SLIDE 14: KẾT QUẢ KIỂM THỬ UAT (PEER UAT TESTING RESULTS)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 45 giây  

### 🇬🇧 English Script:
> "Slide 14 documents our **Peer UAT Test Execution Results**, where Binh acted as the Business Analyst and I verified system execution:  
> - **`TC-01` (Contract Pricing):** Selecting corporate client A for SKU `ST-001` immediately pulled the contracted 65,000 VND unit price. ➔ **Status: PASS**.  
> - **`TC-02` (ATP Inventory Shortage):** Ordering 500 reams when physical stock was 200 immediately triggered a real-time ATP shortage warning to the rep. ➔ **Status: PASS**.  
> - **`TC-03` (Automated Reorder):** When inventory fell below 100 reams, the system automatically generated a draft Purchase Requisition for Double A paper. ➔ **Status: PASS**.  
> - **`TC-04` (Credit Hold):** Attempting to confirm an order for a client overdue > 30 days automatically locked the order in Credit Hold status. ➔ **Status: PASS**.  
> 
> All four core test scenarios achieved 100% pass rates."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 14 ghi nhận **Kết quả Kiểm thử Người dùng (UAT)** do hai bạn trực tiếp thực hiện chéo giữa vai trò BA và Tester:  
> - **`TC-01` (Giá Hợp đồng):** Chọn khách hàng A với mã `ST-001`, hệ thống lập tức tự động áp giá 65.000 VNĐ. ➔ **Kết quả: PASS**.  
> - **`TC-02` (Cảnh báo Tồn kho ATP):** Đặt 500 ram khi kho chỉ còn 200 ram, hệ thống hiển thị ngay cảnh báo thiếu hàng khả dụng. ➔ **Kết quả: PASS**.  
> - **`TC-03` (Tự động Mua hàng):** Khi kho giảm dưới 100 ram, hệ thống tự động sinh bản thảo Purchase Requisition mua thêm giấy. ➔ **Kết quả: PASS**.  
> - **`TC-04` (Khóa Nợ quá hạn):** Xác nhận đơn cho khách nợ quá 30 ngày, hệ thống tự động khóa đơn ở trạng thái Credit Hold. ➔ **Kết quả: PASS**.  
> 
> Cả 4 kịch bản kiểm thử đều đạt tỷ lệ thành công 100%."

---

# SLIDE 15: KỊCH BẢN DEMO LUỒNG TỔNG THỂ (LIVE DEMO WORKFLOW)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 45 giây  

### 🇬🇧 English Script:
> "Slide 15 illustrates our **End-to-End Live Workflow Demonstration sequence**:  
> 
> 1. In Step 1, Sales enters a quotation, and the system automatically applies the 65,000 VND contract price.  
> 2. In Step 2, the system verifies real-time ATP stock availability across our warehouses.  
> 3. In Step 3, automated reorder logic triggers a draft Purchase Requisition and Vendor PO for supplier replenishment.  
> 4. In Step 4, warehouse staff receive incoming stock and execute bin location picking.  
> 5. Finally, in Step 5, the delivery note generates a customer VAT invoice with automated 3-way matching.  
> 
> This demonstrates a seamless, uninterrupted flow of digital data connecting Sales, Warehouse, Procurement, and Financial Accounting."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 15 thể hiện **Trình tự Kịch bản Thuyết minh Demo Thực tế**:  
> 
> 1. Bước 1: Nhân viên tạo báo giá, hệ thống tự động áp giá hợp đồng 65.000 VNĐ.  
> 2. Bước 2: Hệ thống kiểm tra tức thì tồn kho khả dụng ATP giữa các kho.  
> 3. Bước 3: Định mức tối thiểu tự động kích hoạt tạo đơn Yêu cầu mua hàng và gửi PO nhà cung cấp.  
> 4. Bước 4: Thủ kho xác nhận nhập hàng và tiến hành nhặt hàng theo vị trí giá kệ.  
> 5. Bước 5: Phiếu xuất kho tự động sinh hóa đơn VAT và đối soát 3 bên hoàn tất.  
> 
> Đây là minh chứng cho dòng dữ liệu liền mạch, không đứt đoạn kết nối giữa Bán hàng, Kho vận, Mua hàng và Kế toán."

---

# SLIDE 16: TỔNG KẾT, GIÁ TRỊ DOANH NGHIỆP & PHẦN Q&A (CONCLUSION & ORAL DEFENSE Q&A)
**Người trình bày:** Võ Duy Bình & Phạm Nguyễn Gia Thuận  
**Thời lượng dự kiến:** 45 giây  

### 🇬🇧 English Script:
> *(Võ Duy Bình tổng kết):*  
> "In conclusion, our Phase 1 Business Systems Analysis delivers clear, quantified business ROI for OfficePro Distribution:  
> - **100% Pricing Errors Eliminated:** Saving 50 million VND monthly in billing reconciliations.  
> - **95% Stockouts Prevented:** Protecting corporate accounts and delivery reliability.  
> - **90% Administrative Time Saved:** Reducing invoice matching from 20 hours to just 2 hours weekly.  
> - **Complete Traceability:** Linking every business problem directly to verified software capability.  
> 
> *(Phạm Nguyễn Gia Thuận kết thúc):*  
> Thank you very much, MSc. Nguyen Thi Thanh Thanh and the Examination Board, for your time and guidance.  
> We are now ready and welcome any questions from the Board!"

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> *(Võ Duy Bình tổng kết):*  
> "Tóm lại, đồ án Phân tích Hệ thống Phase 1 mang lại giá trị ROI định lượng rất rõ ràng cho OfficePro:  
> - **Xóa bỏ 100% lỗi giá hợp đồng:** Tiết kiệm 50 triệu đồng mỗi tháng chi phí xử lý khiếu nại.  
> - **Ngăn chặn 95% sự cố thiếu hàng sau chốt đơn:** Giữ vững uy tín và khách hàng doanh nghiệp.  
> - **Tiết kiệm 90% thời gian giấy tờ:** Giảm thời gian đối soát kế toán từ 20 giờ xuống còn 2 giờ/tuần.  
> - **Tính truy vết hoàn chỉnh:** Mọi vấn đề nghiệp vụ đều được giải quyết bằng tính năng cụ thể.  
> 
> *(Phạm Nguyễn Gia Thuận kết thúc):*  
> Nhóm 6 xin chân thành cảm ơn cô Nguyễn Thị Thanh Thanh và Hội đồng đã lắng nghe.  
> Chúng em rất sẵn lòng đón nhận các câu hỏi phản biện từ Hội đồng!"

---

## 🎯 BỘ CÂU HỎI PHẢN BIỆN DỰ PHÒNG TỪ GIẢNG VIÊN (ANTICIPATED Q&A)

### ❓ Câu 1: Tại sao nhóm lại chọn Bảng giá Hợp đồng (Contract Pricelists) làm tính năng Must-Have quan trọng nhất?
- **Trả lời (EN):** *"Because in B2B Wholesale, price agreements are established through legal framework contracts. In the AS-IS state, reps made 5-8% pricing errors because they copied prices from static Excel files, resulting in 50M VND in monthly billing dispute adjustments. Automating contract pricelists directly eliminates our primary business leak."*
- **Trả lời (VN):** *"Vì trong bán buôn B2B, giá bán được cam kết qua hợp đồng nguyên tắc pháp lý. Ở quy trình AS-IS, việc copy từ file Excel gây sai sót 5-8% trên hóa đơn, làm mất 50 triệu/tháng tiền tranh chấp. Tự động hóa giá hợp đồng sẽ giải quyết trực tiếp tổn thất lớn nhất của doanh nghiệp."*

### ❓ Câu 2: Tồn kho ATP (Available-to-Promise) khác gì với Tồn kho thực tế (On-Hand)?
- **Trả lời (EN):** *"On-hand inventory is the physical quantity currently inside the warehouse. ATP inventory equals physical stock minus quantities already reserved for other confirmed orders, plus incoming shipments from confirmed POs. ATP prevents sales reps from selling the same batch of paper to two different corporate clients."*
- **Trả lời (VN):** *"Tồn kho On-Hand là số lượng vật lý thực tế đang nằm trên kệ. Còn Tồn kho ATP bằng Tồn kho thực tế trừ đi số lượng đã được giữ chỗ cho các đơn khác, cộng lượng hàng sắp về từ PO đã duyệt. ATP giúp ngăn chặn việc nhân viên bán cùng một lô giấy cho hai khách hàng khác nhau."*

### ❓ Câu 3: Làm thế nào để nhóm ngăn chặn việc nhân viên bán hàng tự ý chiết khấu vượt thẩm quyền?
- **Trả lời (EN):** *"We enforced Business Rule BR-01 in Odoo ERP: Contract prices are locked by default. If a sales rep enters a manual discount exceeding 5%, the system automatically flags the quotation and blocks order confirmation until electronic approval is granted by the Sales Manager."*
- **Trả lời (VN):** *"Nhóm áp dụng Quy tắc BR-01 trên Odoo: Giá hợp đồng bị khóa mặc định. Nếu nhân viên tự ý giảm giá trên 5%, hệ thống sẽ tự động giữ đơn ở trạng thái chờ duyệt và chỉ cho phép chốt đơn khi Trưởng phòng Kinh doanh bấm duyệt điện tử."*
