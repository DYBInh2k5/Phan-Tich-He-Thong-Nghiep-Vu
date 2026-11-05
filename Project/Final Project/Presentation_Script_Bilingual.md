# KỊCH BẢN THUYẾT TRÌNH BẢO VỆ ĐỒ ÁN PHASE 1 (SONG NGỮ ANH - VIỆT)
## BSA PHASE 1 MID-TERM DEFENSE SCRIPT — GROUP 6 (20 SLIDES ĐỒNG BỘ 1:1)
**Doanh nghiệp nghiên cứu:** Công ty TNHH Phân phối OfficePro (OfficePro Distribution Co., Ltd.)  
**Kịch bản nghiệp vụ:** Scenario B — B2B Wholesale & Distribution (Văn phòng phẩm & Thiết bị văn phòng)  
**Khóa học:** Phân tích Hệ thống Nghiệp vụ (Business Systems Analysis - BSA) — Năm học 2026–2027, Học kỳ 1  
**Giảng viên hướng dẫn:** ThS. Nguyễn Thị Thanh Thanh  
**Phạm vi thẩm định:** **100% Pure Phase 1 (Sections 1, 2, và 3)** — Phân tích Nghiệp vụ Thuần túy (Bám sát 34 tiêu chí Quality Checklist & Bài mẫu Week 7)

---

### 👥 PHÂN CÔNG THUYẾT TRÌNH CÂN BẰNG 50/50 THEO THỨ TỰ SLIDE TRÊN MÀN HÌNH

| Diễn giả (Speaker) | Vai trò & Phân hệ Phụ trách | Số lượng Slide | Danh sách Slide chính xác trên màn hình |
| :--- | :--- | :---: | :--- |
| **Speaker 1: Võ Duy Bình**<br>*(MSSV: 22301500)* | **Team Leader / Lead BA & SA**<br>• Phân hệ: **Quản lý Bán hàng & Thu mua (Sales & Purchasing)**<br>• Phạm vi: Bối cảnh doanh nghiệp, Master Data 10 SKUs, Mạng lưới kho bãi, Quản trị RACI, 3 Nỗi đau vận hành định lượng, Mô hình quan hệ 5 quy trình, Các bước quy trình AS-IS, Phân tích 5-Whys, Chiến lược tái cấu trúc TO-BE, và Tổng kết Phase 1. | **10 Slides** | **Slide 1, 2, 3, 4, 5, 9, 10, 11, 14, 15**<br>*(Đồng tổng kết Slide 20)* |
| **Speaker 2: Phạm Nguyễn Gia Thuận**<br>*(MSSV: 22204631)* | **QA & Solution Configurator / Requirements Analyst**<br>• Phân hệ: **Quản lý Kho & Hóa đơn (Inventory & Invoicing)**<br>• Phạm vi: Ma trận Stakeholder Power/Interest, Nhu cầu thông tin liên phòng ban, Bằng chứng phỏng vấn đối soát giả định, Sơ đồ AS-IS Swimlane (BPMN SVG), Điểm nghẽn phòng ban, Sơ đồ TO-BE Swimlane (BPMN SVG có làn ERP), Bảng so sánh lợi ích, Danh mục MoSCoW 8 FRs kèm Verification Ideas, Ma trận RTM 6 cột, và Điều phối Q&A. | **10 Slides** | **Slide 6, 7, 8, 12, 13, 16, 17, 18, 19**<br>*(Điều phối Phản biện Q&A Slide 20)* |

---

# SLIDE 1: TRANG TIÊU ĐỀ & TỔNG QUAN HỒ SƠ ĐỒ ÁN
*(Tương ứng trên màn hình: BUSINESS SYSTEMS ANALYSIS (BSA) — Phase 1 Mid-Term Assessment: Business Requirements Document)*  
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 45 - 60 giây  

### 🇬🇧 English Script:
> "Good morning, Lecturer MSc. Nguyen Thi Thanh Thanh, and members of the Examination Board.  
> 
> My name is **Vo Duy Binh**, Team Leader and Lead Business Analyst of **Group 6**. Joining me today is my teammate, **Pham Nguyen Gia Thuan**, our QA and Requirements Analyst.  
> 
> Today, we are proud to present our **Phase 1 Business Systems Analysis Deliverable** for **Scenario B: B2B Wholesale & Distribution in Office Supplies and Stationery**, focusing on our enterprise case: **OfficePro Distribution Co., Ltd.**  
> 
> Following the official course syllabus and rubrics, our Phase 1 investigation strictly focuses on **Pure Business Analysis** across Sections 1, 2, and 3: investigating real-world wholesale operations, stakeholder information needs, manual AS-IS process bottlenecks, 5-Whys root cause analysis, TO-BE workflow re-engineering, prioritized MoSCoW functional requirements, and end-to-end traceability.  
> 
> We adhere rigorously to the foundational principle: **'Business-First, Technology-Second'**. Let us begin with our Enterprise Profile."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Kính chào Giảng viên ThS. Nguyễn Thị Thanh Thanh và quý thầy cô trong Hội đồng đánh giá.  
> 
> Em tên là **Võ Duy Bình**, Trưởng nhóm và Phụ trách Phân tích Nghiệp vụ của **Nhóm 6**. Đồng hành cùng em hôm nay là bạn **Phạm Nguyễn Gia Thuận**, đảm nhận vai trò QA và Phân tích Yêu cầu.  
> 
> Hôm nay, nhóm em xin phép báo cáo kết quả bảo vệ giữa kỳ **Phase 1: Phân tích Hệ thống Nghiệp vụ** cho **Kịch bản B: Bán buôn & Phân phối Văn phòng phẩm B2B**, đại diện cho doanh nghiệp: **Công ty TNHH Phân phối OfficePro**.  
> 
> Bám sát chuẩn mực đề cương môn học và 34 tiêu chí đánh giá chất lượng của cô, Phase 1 của nhóm tập trung 100% vào **Phân tích Nghiệp vụ Thuần túy (Pure Business Analysis)** thuộc Sections 1, 2 và 3: tìm hiểu mô hình vận hành thực tế, ma trận nhu cầu thông tin stakeholder, mô hình hóa điểm nghẽn quy trình AS-IS, phân tích nguyên nhân gốc rễ 5-Whys, tái thiết kế quy trình TO-BE, danh mục yêu cầu MoSCoW và ma trận truy vết RTM.  
> 
> Nhóm quán triệt sâu sắc phương châm cốt lõi: **'Nghiệp vụ đi trước, Công nghệ theo sau'**. Sau đây, em xin phép bắt đầu với Hồ sơ Doanh nghiệp."

---

# SLIDE 2: HỒ SƠ DOANH NGHIỆP & MÔ HÌNH BÁN BUÔN B2B
*(Tương ứng trên màn hình: Enterprise Profile & Wholesale Business Model — Hubs & Customer Tiers)*  
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 50 - 60 giây  

### 🇬🇧 English Script:
> "As displayed on Slide 2, **OfficePro Distribution Co., Ltd.** is an established regional B2B wholesale distributor operating in Southern Vietnam, serving over **250 active corporate clients**, educational institutions, and stationery retail sub-dealers.  
> 
> Our business model relies on high-volume procurement from major upstream manufacturers—such as Double A, IK Plus, Thien Long, Pilot, and HP Vietnam—and distributing these supplies to commercial organizations.  
> 
> Notice the customer tier breakdown on the right:  
> - **Tier 1 (Key Accounts):** Large commercial enterprises purchasing under annual framework contracts with negotiated contract pricing and **Net 30-day commercial credit terms**.  
> - **Tier 2:** Schools and educational institutions with massive seasonal procurement cycles in August and January.  
> - **Tier 3:** Local stationery sub-dealers ordering bi-weekly replenishment batches.  
> 
> Managing contracted discounts and Net 30 credit without automation is the operational heartbeat of OfficePro."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Như hiển thị trên Slide 2, **Công ty TNHH Phân phối OfficePro** là doanh nghiệp bán buôn B2B chuyên phân phối văn phòng phẩm tại khu vực miền Nam, phục vụ hơn **250 khách hàng doanh nghiệp**, trường học và đại lý bán lẻ.  
> 
> Mô hình vận hành của doanh nghiệp là thu mua số lượng lớn từ các nhà sản xuất uy tín như Double A, IK Plus, Thiên Long, Pilot và HP Việt Nam, sau đó phân phối lại cho các tổ chức thương mại.  
> 
> Quý Thầy Cô có thể quan sát cấu trúc 3 phân tầng khách hàng ở bên phải:  
> - **Tier 1 (Khách hàng Trọng điểm):** Các doanh nghiệp thương mại lớn, mua hàng theo hợp đồng nguyên tắc năm, được hưởng đơn giá hợp đồng ưu đãi và chính sách **công nợ thương mại Net 30 ngày**.  
> - **Tier 2 (Khối Giáo dục & Trường học):** Mua sắm tập trung theo mùa khai giảng vào tháng 8 và tháng 1.  
> - **Tier 3 (Đại lý Bán lẻ Cấp dưới):** Đặt hàng bổ sung định kỳ 2 tuần một lần.  
> 
> Việc kiểm soát giá hợp đồng và hạn mức nợ Net 30 thủ công chính là cội nguồn của mọi rắc rối vận hành tại OfficePro."

---

# SLIDE 3: DANH MỤC MASTER DATA 10 SKUS TRỌNG YẾU
*(Tương ứng trên màn hình: 10 Primary SKUs & Standard Pricelist Catalog — List vs. Contract Pricing)*  
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 45 - 55 giây  

### 🇬🇧 English Script:
> "To ground our business analysis in realistic wholesale operations, Slide 3 defines our **Master Data catalog comprising 10 primary domain SKUs** (Table 1.1 in our report):  
> 
> - **Paper Products:** Our highest volume driver is `ST-001` (Double A A4 80gsm Ream), with standard list price at 85,000 VND, alongside IK Plus 70gsm (`ST-002`) at 75,000 VND.  
> - **Writing Instruments:** Thien Long TL-027 Ballpoint Pens (`ST-003`), Pilot G2 Gel Pens (`ST-004`), and Pentel EnerGel pens (`ST-005`).  
> - **Filing & Organization:** King Jim Lever Arch Files (`ST-006`) and Deli Clear Book Displays (`ST-007`).  
> - **Desk Accessories & Equipment:** Plus Staplers (`ST-008`), Deli Document Trays (`ST-009`), and Casio FX-580VN X Scientific Calculators (`ST-010`).  
> 
> Crucially, observe the **20% to 25% pricing divergence** between standard list prices and contracted rates—such as 65,000 VND for Double A paper under Tier-1 agreements. In the current AS-IS state, reps search personal Excel files manually, introducing a dangerous **5% to 8% pricing error rate**."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Nhằm đảm bảo tính thực tiễn cao cho đồ án, Slide 3 định nghĩa danh mục **Dữ liệu Chủ (Master Data) gồm 10 mã SKU trọng yếu** (Bảng 1.1 trong Báo cáo):  
> 
> - **Nhóm Giấy in ấn:** Mã chủ lực là `ST-001` (Giấy Double A A4 80gsm) giá niêm yết 85.000 VNĐ/ram, và IK Plus 70gsm (`ST-002`) giá 75.000 VNĐ/ram.  
> - **Nhóm Dụng cụ viết:** Bút bi Thiên Long TL-027 (`ST-003`), bút gel Pilot G2 (`ST-004`) và Pentel EnerGel (`ST-005`).  
> - **Nhóm Lưu trữ hồ sơ:** Bìa còng King Jim 7cm (`ST-006`) và Bìa lá Deli (`ST-007`).  
> - **Nhóm Thiết bị văn phòng:** Bấm kim Plus (`ST-008`), Kệ tài liệu Deli (`ST-009`) và Máy tính khoa học Casio FX-580VN X (`ST-010`).  
> 
> Điểm mấu chốt trên bảng này là sự chênh lệch **20% đến 25% giữa Giá niêm yết và Đơn giá Hợp đồng**—ví dụ Double A giảm còn 65.000 VNĐ cho khách Tier-1. Việc nhân viên tra cứu file Excel thủ công tạo ra **tỷ lệ sai giá 5% đến 8%**, gây thất thoát và tranh chấp hóa đơn lớn."

---

# SLIDE 4: MẠNG LƯỚI CƠ SỞ & RANH GIỚI PHẠM VI DỰ ÁN
*(Tương ứng trên màn hình: Facilities Network & Project Scope Boundaries — In-Scope vs. Out-of-Scope)*  
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 50 - 60 giây  

### 🇬🇧 English Script:
> "Slide 4 establishes our physical operational network and strict project boundaries:  
> 
> - **Operating Facilities:**  
>   - **Tan Binh Central Hub (2,500 m²):** Located in Tan Binh Industrial Park, HCMC. Houses 1,200 pallet positions (80% of total inventory), handling supplier receiving, cross-docking, and high-volume deliveries across HCMC.  
>   - **Bien Hoa Satellite Hub (800 m²):** Located in Bien Hoa Industrial Zone 2, Dong Nai. Stores 350 pallet positions, serving as a rapid replenishment depot for over 80 manufacturing plants in Dong Nai and Binh Duong.  
> 
> - **Strict Boundaries (Table 3.2):**  
>   - **In-Scope (Green Box):** Quote-to-cash workflow, contract pricing enforcement, multi-facility ATP reservation, Net 30 credit control, and safety-stock replenishment.  
>   - **Out-of-Scope (Red Box):** B2C e-commerce, 3PL GPS vehicle telematics, international customs clearance, and manufacturing assembly.  
> We maintain laser focus on core B2B wholesale distribution."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 4 xác định mạng lưới cơ sở vật lý và ranh giới phạm vi của dự án:  
> 
> - **Mạng lưới Cơ sở Hoạt động:**  
>   - **Kho Tổng Tân Bình (2.500 m²):** Đặt tại KCN Tân Bình, TP.HCM. Chứa 1.200 vị trí pallet (chiếm 80% trữ lượng), chuyên tiếp nhận xe tải lớn từ nhà máy, thực hiện cross-docking và giao hàng cho toàn khu vực TP.HCM.  
>   - **Kho Vệ tinh Biên Hòa (800 m²):** Đặt tại KCN Biên Hòa 2, Đồng Nai. Chứa 350 vị trí pallet, đóng vai trò trạm phản ứng nhanh cho hơn 80 nhà máy tại Đồng Nai và Bình Dương.  
> 
> - **Ranh giới Đồ án rõ ràng (theo Bảng 3.2):**  
>   - **Trong phạm vi (Hộp xanh):** Quy trình từ Báo giá đến Thu tiền, quản lý giá hợp đồng, giữ chỗ tồn kho liên kho (ATP), kiểm soát nợ Net 30 và đặt hàng tự động theo tồn an toàn.  
>   - **Ngoài phạm vi (Hộp đỏ):** Không làm bán lẻ B2C, không làm định vị GPS đội xe, không làm thủ tục hải quan và không làm gia công sản xuất.  
> Nhóm hoàn toàn tập trung vào giải quyết bài toán bán buôn B2B."

---

# SLIDE 5: MA TRẬN PHÂN CÔNG RACI NHÓM & QUẢN TRỊ DỰ ÁN
*(Tương ứng trên màn hình: Group RACI Assignment Matrix & Governance — Section 1 Deliverables)*  
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 45 - 50 giây  

### 🇬🇧 English Script:
> "To demonstrate disciplined academic governance, Slide 5 details our **Group RACI Assignment Matrix** (Table 0.1 in our report):  
> 
> - **Vo Duy Binh (Student ID: 22301500) — Team Leader / Lead BA & SA:**  
>   Accountable and Responsible (A/R) for **Sales Management** and **Purchasing Management** modules; enterprise context scoping, business problem framing, 5-Whys root cause analysis, and TO-BE re-engineering.  
> - **Pham Nguyen Gia Thuan (Student ID: 22204631) — QA & Solution Configurator:**  
>   Accountable and Responsible (A/R) for **Inventory Management** and **Invoicing/Accounting** modules; stakeholder power/interest mapping, information needs matrix, elicitation evidence verification, BPMN swimlanes, MoSCoW functional requirements, and RTM traceability.  
> 
> Each member holds primary ownership for two core functional modules, supported by mutual consultation (C) and cross-review sign-offs. I now pass the presentation to my teammate, Gia Thuan, to present Section 2."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Để thể hiện tính kỷ luật và sự phân công lao động khoa học, Slide 5 minh họa **Ma trận Quản trị Phân công RACI của nhóm** (Bảng 0.1 trong Báo cáo):  
> 
> - **Võ Duy Bình (MSSV: 22301500) — Trưởng nhóm / Lead BA & SA:**  
>   Chịu trách nhiệm chính (A/R) cho hai phân hệ **Quản lý Bán hàng (Sales)** và **Quản lý Thu mua (Purchasing)**; thiết lập bối cảnh, chẩn đoán vấn đề, phân tích nguyên nhân gốc rễ 5-Whys và chiến lược TO-BE.  
> - **Phạm Nguyễn Gia Thuận (MSSV: 22204631) — QA & Phân tích Yêu cầu:**  
>   Chịu trách nhiệm chính (A/R) cho hai phân hệ **Quản lý Kho (Inventory)** và **Hóa đơn/Kế toán (Invoicing)**; thiết lập ma trận Power/Interest, nhu cầu thông tin, bằng chứng phỏng vấn, sơ đồ BPMN Swimlane, danh mục MoSCoW và ma trận truy vết RTM.  
> 
> Mỗi thành viên nắm quyền giải trình trọn vẹn 2 module nghiệp vụ nòng cốt, phối hợp tư vấn chéo (C) và duyệt bài chặt chẽ. Sau đây, em xin nhường lời cho bạn Gia Thuận trình bày Phần 2."

---

# SLIDE 6: NHẬN DIỆN STAKEHOLDER & MA TRẬN POWER / INTEREST 2X2
*(Tương ứng trên màn hình: Stakeholder Identification & Power/Interest Grid — 4 Quadrants)*  
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 55 - 60 giây  

### 🇬🇧 English Script:
> "Good morning, Lecturer and Examination Board. My name is **Pham Nguyen Gia Thuan**, QA and Requirements Analyst. I will present our **Stakeholder Analysis, Process Modeling, and Requirements Engineering**.  
> 
> In Slide 6, we categorize our organizational actors using the standard **Power / Interest Grid** (Figure 2.1 in our report):  
> - **Manage Closely (High Power, High Interest):** The Sales Manager and Business Owner (Managing Director Nguyen Van Thang). They hold executive control over pricing margins, discount approvals, and overall business survival.  
> - **Keep Satisfied (High Power, Low Interest):** The Chief Accountant (Tran Thi Mai). She enforces strict Net 30 debt clearance, VAT tax compliance, and accurate 3-way invoice matching.  
> - **Keep Informed (Low Power, High Interest):** Sales Representatives, Warehouse Supervisors, and Procurement Officers. They execute day-to-day operations and directly bear the pain of manual spreadsheets, receiving lags, and stockouts.  
> - **Monitor (Low Power, Low Interest):** External suppliers and stationery sub-dealers, requiring clear purchase orders and delivery notes.  
> 
> This classification guided our targeted elicitation interviews."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Kính chào Thầy Cô và Hội đồng đánh giá. Em là **Phạm Nguyễn Gia Thuận**, QA và Chuyên viên Phân tích Yêu cầu của Nhóm 6. Em xin phép tiếp nối với **Phân tích Stakeholder, Mô hình hóa Quy trình và Kỹ thuật Yêu cầu**.  
> 
> Tại Slide 6, nhóm phân loại các chủ thể liên quan dựa trên **Ma trận Quyền lực / Mức độ Quan tâm (Power/Interest Grid)** (Hình 2.1 trong Báo cáo):  
> - **Quản lý Chặt chẽ (High Power, High Interest):** Giám đốc Điều hành (Nguyễn Văn Thắng) và Trưởng phòng Kinh doanh. Nắm quyền kiểm soát biên lợi nhuận, duyệt chiết khấu và sự sống còn của doanh nghiệp.  
> - **Giữ Hài lòng (High Power, Low Interest):** Kế toán trưởng (Trần Thị Mai). Người giám sát thu hồi công nợ Net 30, tuân thủ thuế VAT và tính chính xác của hóa đơn.  
> - **Cập nhật Thường xuyên (Low Power, High Interest):** Nhân viên Kinh doanh, Trưởng kho và Nhân viên Thu mua. Những người trực tiếp vận hành hàng ngày và gánh chịu mọi phiền toái từ file Excel, trễ nhập hàng và sự cố thiếu hàng.  
> - **Theo dõi (Low Power, Low Interest):** Nhà cung cấp và các đại lý bán lẻ cấp dưới, cần đơn đặt hàng rõ ràng.  
> 
> Việc phân nhóm này giúp định hướng chính xác đối tượng phỏng vấn thu thập yêu cầu."

---

# SLIDE 7: MA TRẬN NHU CẦU THÔNG TIN LIÊN PHÒNG BAN
*(Tương ứng trên màn hình: Cross-Functional Information Needs Matrix — 4 Core Roles)*  
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 50 - 55 giây  

### 🇬🇧 English Script:
> "Slide 7 bridges organizational roles with operational decision-making through our **Cross-Functional Information Needs Matrix** (Table 2.2 in our report):  
> 
> - **B2B Sales Representative (`INF-SALES-01`):** Requires customer-specific contracted prices and active validity dates upon inquiry, to quote accurately without manual spreadsheet lookups. Also requires real-time Available-to-Promise (ATP) inventory across both warehouses before confirming orders.  
> - **Warehouse Operations Supervisor (`INF-WH-01`):** Requires advance visibility into scheduled supplier inbound shipments to plan dock labor, plus real-time picking queues for reserved orders.  
> - **Chief Accountant (`INF-ACCT-01`):** Requires automated customer debt aging (> 30 days overdue) to block risky orders, plus signed electronic proof-of-delivery for instant 3-way matching.  
> - **Procurement Officer (`INF-PROC-01`):** Requires real-time alerts when stock falls below safety reorder thresholds, paired with multi-vendor price comparison sheets.  
> 
> Every information need identified here maps directly to our requirements catalog."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 7 kết nối cơ cấu tổ chức với việc ra quyết định nghiệp vụ qua **Ma trận Nhu cầu Thông tin Liên phòng ban** (Bảng 2.2 trong Báo cáo):  
> 
> - **Nhân viên Kinh doanh (`INF-SALES-01`):** Cần truy cập tức thì bảng giá hợp đồng đã ký và tồn kho khả dụng (ATP) liên kho thời gian thực, để báo giá và chốt đơn chính xác mà không cần tra cứu Excel hay gọi điện thoại.  
> - **Quản lý Kho (`INF-WH-01`):** Cần nắm trước lịch xe hàng về từ nhà máy để bố trí nhân sự bốc dỡ, và danh sách đơn hàng đã giữ chỗ để nhặt hàng đúng đơn.  
> - **Kế toán trưởng (`INF-ACCT-01`):** Cần báo cáo tuổi nợ (> 30 ngày) để chặn đơn khách nợ xấu, và biên bản giao nhận điện tử để đối soát hóa đơn 3 bên tức thì.  
> - **Nhân viên Thu mua (`INF-PROC-01`):** Cần cảnh báo tự động khi tồn kho chạm ngưỡng an toàn và bảng ma trận so sánh giá giữa các nhà cung cấp.  
> 
> Các nhu cầu thông tin này là tiền đề trực tiếp để xây dựng danh mục yêu cầu chức năng."

---

# SLIDE 8: NHẬT KÝ BẰNG CHỨNG THU THẬP & ĐỐI SOÁT GIẢ ĐỊNH
*(Tương ứng trên màn hình: Elicitation Evidence Log & Interview Verification — Assumptions vs. Reality)*  
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 50 - 60 giây  

### 🇬🇧 English Script:
> "To guarantee academic rigor, Slide 8 presents our **Elicitation Evidence Log** (Table 2.1 in our report), contrasting baseline assumptions against verified interview evidence:  
> 
> - **Assumption 1 (Pricing Lookups):** We assumed reps search contract prices manually from Excel. ➔ **CONFIRMED:** Sales Manager verified reps copy-paste from personal Excel files, causing **5% to 8% pricing errors monthly**.  
> - **Assumption 2 (Stock Visibility):** We assumed warehouse has real-time inventory visibility. ➔ **REFUTED:** Interviews revealed a **24 to 48-hour delay** between physical receiving and paper ledger entry. Goods on the dock are invisible to sales!  
> - **Assumption 3 (Credit Checking):** We assumed accounting strictly blocks overdue clients. ➔ **REFUTED:** Credit checks are verbally bypassed; clients with debt > 30 days old continue ordering unchecked.  
> - **Assumption 4 (Procurement Reordering):** We assumed procurement reorders predictively. ➔ **REFUTED:** Reordering is purely reactive after bins are completely empty, requiring 2 to 3 days of manual email negotiations.  
> 
> Every finding is validated against real operational evidence."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Để đảm bảo tính khoa học và thực tế, Slide 8 trình bày **Nhật ký Bằng chứng Thu thập & Đối soát Giả định** (Bảng 2.1 trong Báo cáo), đối chiếu giữa giả định ban đầu và bằng chứng phỏng vấn thực tế:  
> 
> - **Giả định 1 (Tra giá hợp đồng):** Nhóm giả định kinh doanh tra giá Excel thủ công. ➔ **XÁC NHẬN:** Quản lý kinh doanh xác nhận nhân viên copy-paste từ file Excel cá nhân, gây **lỗi giá từ 5% đến 8% mỗi tháng**.  
> - **Giả định 2 (Minh bạch kho):** Nhóm giả định thủ kho nắm được hàng tồn real-time. ➔ **BÁC BỎ:** Thực tế có **độ trễ 24 đến 48 giờ** giữa lúc xe tải dỡ hàng đến khi vào sổ. Hàng nằm ở bãi đỗ nhưng kinh doanh không thấy để bán!  
> - **Giả định 3 (Khóa nợ quá hạn):** Nhóm giả định kế toán chặn nghiêm ngặt khách nợ quá hạn. ➔ **BÁC BỎ:** Thực tế quy định bị lách bằng cách xin duyệt miệng; khách nợ quá 30 ngày vẫn được chốt đơn mới.  
> - **Giả định 4 (Đặt hàng thu mua):** Nhóm giả định phòng thu mua dự báo đặt hàng trước. ➔ **BÁC BỎ:** Chỉ đặt hàng khi trên kệ đã cạn kiệt, đàm phán qua email mất 2 đến 3 ngày.  
> 
> Toàn bộ kết quả đều dựa trên đối soát thực địa khách quan."

---

# SLIDE 9: 3 VẤN ĐỀ VẬN HÀNH CỐT LÕI KÈM THIỆT HẠI ĐỊNH LƯỢNG
*(Tương ứng trên màn hình: Primary Operational Problems & Quantified Friction — Problems 01, 02, 03)*  
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 55 - 60 giây  

### 🇬🇧 English Script:
> "Returning to the business analysis, Slide 9 synthesizes our findings into **Three Primary Operational Problems with Quantified Friction** (Table 3.6 in our report):  
> 
> 1. **Problem 01: Contract Pricing Discrepancies (`PRB-01`):**  
>    Caused by sales reps maintaining disconnected personal Excel sheets. Introduces a **5% to 8% pricing error rate**, generating **50 million VND in monthly invoice disputes** and credit adjustments.  
> 2. **Problem 02: Post-Confirmation Stockout Emergencies (`PRB-03`):**  
>    Due to 24–48h receiving delays and lack of real-time ATP checks, reps confirm orders for stock that is missing or already reserved, causing **3 to 4 stockout emergencies weekly** and 2–3 day fulfillment delays.  
> 3. **Problem 03: Manual Paper 3-Way Reconciliation Bottleneck (`PRB-04`):**  
>    Accounting burns **15 to 20 hours weekly** manually matching handwritten delivery slips against sales orders, while accounts with debt overdue > 30 days continue accumulating bad debt.  
> 
> These quantified pains directly motivate our process re-engineering."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Tiếp tục mạch phân tích nghiệp vụ, Slide 9 tổng hợp thực trạng thành **3 Vấn đề Vận hành Cốt lõi kèm Thiệt hại Định lượng** (Bảng 3.6 trong Báo cáo):  
> 
> 1. **Vấn đề 1: Sai lệch Đơn giá Hợp đồng (`PRB-01`):**  
>    Do nhân viên kinh doanh lưu file Excel cá nhân riêng lẻ. Gây ra **tỷ lệ sai giá từ 5% đến 8%**, làm thiệt hại **50 triệu đồng mỗi tháng** do phải điều chỉnh hóa đơn và tranh chấp công nợ.  
> 2. **Vấn đề 2: Hết hàng sau khi Chốt đơn (`PRB-03`):**  
>    Do khâu nhập kho chậm 24-48 giờ và không kiểm tra tồn kho ATP trước khi xác nhận đơn, dẫn đến **3 đến 4 sự cố thiếu hàng mỗi tuần**, làm chậm giao hàng 2-3 ngày và vi phạm cam kết SLA.  
> 3. **Vấn đề 3: Gánh nặng Đối soát Hóa đơn Giấy (`PRB-04`):**  
>    Kế toán tiêu tốn **15 đến 20 giờ mỗi tuần** chỉ để ngồi dò từng dòng giữa phiếu giao hàng giấy than và đơn bán hàng, trong khi khách có nợ quá hạn trên 30 ngày vẫn được duyệt đơn mới.  
> 
> Những thiệt hại định lượng rõ ràng này chính là động lực thôi thúc nhóm tái thiết kế quy trình."

---

# SLIDE 10: MÔ HÌNH MỐI QUAN HỆ GIỮA 5 QUY TRÌNH NGHIỆP VỤ CỐT LÕI
*(Tương ứng trên màn hình: Five Core Business Processes Relationship Map — BP1 to BP5 Dependency)*  
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 50 - 55 giây  

### 🇬🇧 English Script:
> "Slide 10 presents our **Five Core Business Processes Relationship Map** (Figure 3.1 in our report), illustrating cross-process data dependencies:  
> 
> - At the center of our revenue engine is **BP1: Processing Corporate B2B Orders**, which coordinates quotation, credit validation, order confirmation, and billing.  
> - BP1 relies directly on four supporting satellite processes:  
>   - **BP2 (Contract Pricing Management):** Feeds approved customer-specific price agreements into BP1.  
>   - **BP3 (Checking Product Availability - ATP):** Validates real-time inventory levels across Tan Binh and Bien Hoa hubs, confirming stock reservations for BP1.  
>   - **BP4 (Receiving & Inbound Inspection):** Processes shipments from suppliers like Double A and Pilot, updating warehouse on-hand stock.  
>   - **BP5 (Reviewing Replenishment Needs & Purchasing):** Triggered when ATP stock drops below safety thresholds, issuing Purchase Orders to replenish inventory for future BP1 orders.  
> 
> Eliminating silos across these five processes is essential to wholesale efficiency."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 10 trình bày **Mô hình Mối quan hệ giữa 5 Quy trình Nghiệp vụ Cốt lõi** (Hình 3.1 trong Báo cáo), thể hiện luồng liên thông dữ liệu:  
> 
> - Trọng tâm tạo ra doanh thu là quy trình **BP1: Xử lý Đơn hàng B2B Doanh nghiệp**, điều phối từ báo giá, kiểm tra công nợ, xác nhận đơn đến xuất hóa đơn.  
> - Quy trình BP1 liên kết hữu cơ và nhận dữ liệu từ 4 quy trình vệ tinh xung quanh:  
>   - **BP2 (Quản lý Bảng giá Hợp đồng):** Lưu trữ bảng giá thỏa thuận và cung cấp đơn giá hợp đồng chuẩn cho BP1.  
>   - **BP3 (Kiểm tra Tồn kho Khả dụng ATP):** Xác minh số lượng hàng thực tế giữa kho Tân Bình và Biên Hòa để xác nhận giữ chỗ hàng cho BP1.  
>   - **BP4 (Nhận hàng & Kiểm hàng Đầu vào):** Tiếp nhận xe tải từ các nhà máy như Double A, Pilot, cập nhật hàng lên kệ để kho có hàng bán.  
>   - **BP5 (Đánh giá Nhu cầu Bổ sung & Thu mua):** Kích hoạt khi tồn kho ATP chạm mức tồn an toàn, phát hành đơn mua hàng PO để tái bổ sung hàng cho các đơn BP1 tiếp theo.  
> 
> Nhìn nhận 5 quy trình trong một thể thống nhất giúp chúng ta xóa bỏ hoàn toàn tư duy cục bộ phòng ban."

---

# SLIDE 11: MÔ TẢ CÁC BƯỚC QUY TRÌNH HIỆN TẠI AS-IS
*(Tương ứng trên màn hình: AS-IS Cross-Functional Business Process Map — Steps 1.0 to 5.0)*  
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 55 - 60 giây  

### 🇬🇧 English Script:
> "Slide 11 walks through the linear, fragmented reality of our **Current AS-IS Business Process Map** (Table 3.4 in our report):  
> 
> - **Step 1.0 (Customer Inquiry & Quotation):** Client sends an RFQ. Sales rep opens a personal, local Excel pricelist to look up prices, introducing that dangerous **5% to 8% pricing error rate**.  
> - **Step 2.0 (Verbal Stock Availability Check):** Sales rep calls the warehouse supervisor over the phone. The warehouse is unaware of pallets sitting in the receiving bay due to the **24–48 hour receiving lag**.  
> - **Step 3.0 (Manual Order Confirmation):** Rep confirms the order based on assumption. But two days later, physical picking reveals the bin is empty! **3 to 4 stockouts happen weekly**.  
> - **Step 4.0 (Emergency Procurement Reorder):** Rep sends an urgent email to Purchasing. Supplier negotiation takes 2 to 3 days, forcing fulfillment delays.  
> - **Step 5.0 (Delivery & Manual Invoicing):** Goods are delivered with a handwritten, carbon-copy slip. Accounting spends **15–20 hours weekly** cross-referencing lines to type VAT invoices, while overdue debtors bypass credit policies.  
> 
> Every single step relies on phone calls, personal spreadsheets, and carbon paper."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 11 mô tả chi tiết dòng chảy phân mảnh của **Quy trình Hiện trạng AS-IS** (theo Bảng 3.4 trong Báo cáo):  
> 
> - **Bước 1.0 (Tiếp nhận & Báo giá):** Khách hàng gửi yêu cầu mua hàng. Nhân viên kinh doanh mở file Excel cá nhân để tra giá, tạo ra **tỷ lệ sai giá 5% đến 8%**.  
> - **Bước 2.0 (Kiểm tra kho qua điện thoại):** Nhân viên gọi điện thoại cho thủ kho để hỏi hàng miệng. Thủ kho không biết hàng đã về bãi vì **độ trễ nhập kho 24-48 giờ**.  
> - **Bước 3.0 (Chốt đơn thủ công):** Nhân viên xác nhận đơn cho khách dựa trên phỏng đoán. Nhưng hai ngày sau khi đi nhặt hàng thì kệ trống không! Dẫn đến **3-4 sự cố thiếu hàng mỗi tuần**.  
> - **Bước 4.0 (Mua hàng khẩn cấp):** Kinh doanh gửi email hối thúc phòng mua hàng, mất 2-3 ngày đàm phán làm đơn hàng bị trễ hạn giao.  
> - **Bước 5.0 (Giao hàng & Xuất hóa đơn thủ công):** Giao hàng bằng phiếu giấy than. Kế toán thu gom chứng từ giấy, tốn **15-20 giờ mỗi tuần** ngồi dò từng dòng để gõ hóa đơn VAT, trong khi khách nợ quá hạn vẫn được duyệt đơn mới.  
> 
> Toàn bộ quy trình hiện tại phụ thuộc hoàn toàn vào điện thoại, file Excel cá nhân và chứng từ giấy."

---

# SLIDE 12: SƠ ĐỒ BPMN SWIMLANE HIỆN TRẠNG AS-IS
*(Tương ứng trên màn hình: AS-IS Cross-Functional Swimlane BPMN Diagram — Vector SVG Figure 3.1)*  
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 60 - 70 giây  

### 🇬🇧 English Script:
> "To formally visualize cross-functional handoffs, Slide 12 presents our **AS-IS Cross-Functional Swimlane BPMN 2.0 Diagram** (Figure 3.1 in our report), rendered in full vector precision:  
> 
> - As mandated by Section B of our Evaluation Checklist, the diagram models **4 distinct participant lanes**:  
>   1. **Customer Lane:** Submits RFQ inquiry, evaluates draft quote, and signs paper delivery slip upon truck arrival.  
>   2. **Sales Representative Lane:** Looks up local Excel pricelist (Friction: 5–8% rate error), calls warehouse verbally, and issues draft quotes.  
>   3. **Warehouse Operations Lane:** Inspects bins manually over the phone (Friction: 24–48h staging lag), picks and packs, and issues handwritten triple-copy slips.  
>   4. **Accounting & Finance Lane:** Verifies customer debt manually, cross-checks paper slips line-by-line (15–20h wasted weekly), and enters invoices into standalone software.  
> 
> - Notice the flow begins with a single **Start Event `(( START ))`** and features **3 explicit Decision Gateways** with clear **`[YES]`** and **`[NO]`** branch labels:  
>   - **Gateway 1 (Overdue Debt > 30 Days?):** If YES ➔ Diverts to **`End 3: Credit Locked (Order Blocked)`**. If NO ➔ Proceeds to price lookup.  
>   - **Gateway 2 (Customer Accepts Quote?):** If NO ➔ Diverts to **`End 1: Quote Declined`**. If YES ➔ Sales calls warehouse.  
>   - **Gateway 3 (Sufficient Physical Stock?):** If NO ➔ Diverts to **`End 2: Order Cancelled (Stockout Emergency)`**.  
> 
> - Only when all manual hurdles are cleared does the flow reach **`End 4: Order Fulfilled & Manually Invoiced`**.  
> This visual proves exactly why manual processes break down at multiple failure points."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Để mô hình hóa trực quan các điểm giao thoa giữa các phòng ban, Slide 12 trình bày **Sơ đồ BPMN Swimlane Liên chức năng Hiện trạng AS-IS** (Hình 3.1 trong Báo cáo), được vẽ bằng đồ họa vector BPMN 2.0 chuẩn chỉ:  
> 
> - Đúng theo Mục B của Bảng Tiêu chí Đánh giá, sơ đồ gồm **4 làn bơi trách nhiệm**:  
>   1. **Làn Khách hàng:** Gửi yêu cầu báo giá, xem xét báo giá thảo và ký nhận giấy than khi xe hàng đến.  
>   2. **Làn Nhân viên Kinh doanh:** Mở file Excel cá nhân (Điểm nghẽn: sai giá 5-8%), gọi điện thoại hỏi kho và lập báo giá tay.  
>   3. **Làn Thủ kho:** Đi bộ kiểm tra kệ hàng khi có điện thoại (Điểm nghẽn: trễ nhập kho 24-48 giờ), nhặt hàng và viết phiếu xuất kho giấy than 3 liên.  
>   4. **Làn Kế toán:** Kiểm tra nợ thủ công, đối soát từng dòng chứng từ giấy (tốn 15-20 giờ/tuần) và gõ hóa đơn vào phần mềm riêng lẻ.  
> 
> - Đặc biệt, sơ đồ khởi đầu bằng **1 Start Event duy nhất `(( START ))`** và có **3 Cổng Quyết định (Decision Gateways)** với nhãn rẽ **`[YES]`** và **`[NO]`** rõ ràng:  
>   - **Cổng 1 (Nợ quá hạn > 30 ngày?):** Nếu CÓ ➔ Dẫn thẳng về **`End 3: Khóa đơn do nợ quá hạn`**. Nếu KHÔNG ➔ Mới tiếp tục tra giá.  
>   - **Cổng 2 (Khách duyệt báo giá?):** Nếu KHÔNG ➔ Dẫn về **`End 1: Khách từ chối báo giá`**. Nếu CÓ ➔ Kinh doanh gọi điện cho kho.  
>   - **Cổng 3 (Còn tồn hàng trong Bin?):** Nếu KHÔNG ➔ Dẫn về **`End 2: Hủy đơn do hết hàng khẩn cấp`**.  
> 
> - Chỉ khi vượt qua toàn bộ các rào cản thủ công thì đơn hàng mới đến được **`End 4: Giao hàng thành công & Xuất hóa đơn thủ công`**.  
> Sơ đồ này cho thấy rõ tại sao quy trình hiện tại có quá nhiều điểm gãy đổ vận hành."

---

# SLIDE 13: ĐIỂM NGHẼN PHÒNG BAN & KHOẢNG CÁCH DỮ LIỆU
*(Tương ứng trên màn hình: Departmental Bottlenecks & Operational Gaps — 4 Silos)*  
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 50 - 55 giây  

### 🇬🇧 English Script:
> "Slide 13 drills deeper into the departmental silos and operational bottlenecks:  
> 
> - **Sales Silo:** Pricelists are maintained in separate personal Excel files per rep; the lack of a centralized contract repository causes widespread rate discrepancies.  
> - **Warehouse Receiving Lag:** Supplier shipments arrive, but paper receiving logs take **24 to 48 hours** to enter into spreadsheets, blinding sales reps to newly arrived inventory.  
> - **Procurement Blindspot:** Replenishment is triggered reactively only after warehouse bins run empty; multi-vendor RFQ negotiations consume 2 to 3 days over tedious email exchanges.  
> - **Accounting Reconciliation Bottleneck:** Accounting expends **15 to 20 hours weekly** cross-checking physical paper documents, while customer debt overdue > 30 days is not systematically blocked.  
> 
> The fundamental breakthrough requires shifting from **isolated departmental paper silos to an integrated, automated digital backbone**."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 13 bóc tách sâu hơn các điểm nghẽn tại từng phòng ban trong doanh nghiệp:  
> 
> - **Ốc đảo Kinh doanh:** Bảng giá hợp đồng bị cô lập trong file Excel của từng nhân viên; thiếu cơ sở dữ liệu giá tập trung gây sai sót giá tràn lan.  
> - **Độ trễ Nhập kho:** Hàng nhà cung cấp về nằm ở bãi đỗ **24 đến 48 giờ** mới được nhập vào sổ sách, khiến hàng mới hoàn toàn 'vô hình' với nhân viên bán hàng.  
> - **Điểm mù Thu mua:** Chỉ đặt hàng khi kệ trong kho đã cạn kiệt; đàm phán báo giá RFQ mất 2 đến 3 ngày qua email thủ công.  
> - **Nút thắt Kế toán:** Tốn **15 đến 20 tiếng mỗi tuần** để ngồi đối soát chứng từ giấy thủ công, trong khi các khoản nợ quá hạn trên 30 ngày không có công cụ chặn tự động.  
> 
> Mấu chốt của bài toán chuyển đổi là phải dịch chuyển từ **các ốc đảo giấy tờ rời rạc sang một trục kỹ thuật số tích hợp và tự động hóa**."

---

# SLIDE 14: PHÂN TÍCH NGUYÊN NHÂN GỐC RỄ 5-WHYS
*(Tương ứng trên màn hình: 5-Whys Root Cause Breakdown by Core Problem — Table 3.7)*  
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 60 giây  

### 🇬🇧 English Script:
> "To prevent jumping to superficial software features without diagnosing core business mechanisms, Group 6 executed a rigorous **5-Whys Root Cause Analysis** (Table 3.7 in our report):  
> 
> - **For Contract Pricing Errors (`PRB-01`):**  
>   1. *Why are prices wrong?* Reps copy-paste unit prices from personal Excel files.  
>   2. *Why personal Excel files?* Each rep manages separate price sheets for their accounts.  
>   3. *Why separate files?* Framework contracts are stored as scanned PDFs on shared drives.  
>   4. *Why scanned PDFs?* The enterprise lacks a central database mapping contracted SKUs to client accounts.  
>   5. **Root Cause:** **Lack of a centralized contract pricing engine that automatically enforces contracted unit prices upon customer selection.**  
> 
> - **For Post-Order Stockouts (`PRB-03`):**  
>   The 5-Whys isolated the root cause as the **lack of a real-time Available-to-Promise (ATP) inventory visibility engine connecting Sales and Multi-Hub Warehouses**.  
> 
> - **For Invoice Matching Overhead (`PRB-04`):**  
>   The root cause is the **lack of automated digital 3-way matching and systematic hard credit hold enforcement**.  
> 
> These root causes defined our exact TO-BE re-engineering blueprint."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Để tránh sa đà vào các tính năng phần mềm bề nổi khi chưa hiểu bản chất, Nhóm 6 đã áp dụng kỹ thuật **Phân tích 5-Whys (5 câu hỏi Tại sao)** theo Bảng 3.7:  
> 
> - **Với Lỗi Sai lệch Giá Hợp đồng (`PRB-01`):**  
>   1. *Tại sao giá bán bị sai?* Vì nhân viên copy-paste giá từ file Excel cá nhân.  
>   2. *Tại sao lại dùng file Excel cá nhân?* Vì mỗi nhân viên tự lưu bảng giá cho khách hàng của mình.  
>   3. *Tại sao lại lưu rời rạc?* Vì hợp đồng nguyên tắc được lưu dưới dạng file PDF scan trên ổ đĩa chung.  
>   4. *Tại sao lưu file scan?* Vì công ty chưa có cơ sở dữ liệu tập trung liên kết mã SKU theo hợp đồng khách hàng.  
>   5. **Nguyên nhân gốc rễ (Root Cause):** **Doanh nghiệp thiếu một Công cụ Quản lý Giá Hợp đồng tập trung để tự động áp đơn giá hợp đồng chuẩn khi chọn khách hàng.**  
> 
> - **Với Sự cố Hết hàng sau khi Chốt đơn (`PRB-03`):**  
>   Nguyên nhân gốc rễ là **thiếu cơ chế Tồn kho Khả dụng (ATP) thời gian thực kết nối giữa Bán hàng và Kho bãi Tân Bình - Biên Hòa**.  
> 
> - **Với Gánh nặng Đối soát Hóa đơn Kế toán (`PRB-04`):**  
>   Nguyên nhân gốc rễ là **thiếu cơ chế tự động đối soát 3 bên và thiếu hệ thống khóa công nợ quá hạn tự động**.  
> 
> Chính các nguyên nhân gốc rễ này đã định hình bản thiết kế quy trình TO-BE tương lai."

---

# SLIDE 15: CHIẾN LƯỢC TÁI CẤU TRÚC QUY TRÌNH TƯƠNG LAI TO-BE
*(Tương ứng trên màn hình: TO-BE Integrated Business Process Re-engineering — Four Automation Pillars)*  
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 55 - 60 giây  

### 🇬🇧 English Script:
> "Slide 15 presents our re-engineered **TO-BE Integrated Workflow**, designed on four core automation pillars:  
> 
> 1. **Automated Contract Pricelists (`FR-01`):** When a B2B client is selected in the system, contracted prices—such as 65,000 VND for `ST-001`—are retrieved automatically, completely eliminating human copy-paste errors.  
> 2. **Real-Time Available-to-Promise (ATP) Verification (`FR-02`):** Before confirming a Sales Order, the system instantly validates stock levels across Tan Binh and Bien Hoa warehouses, cutting post-confirmation stockouts by 95%. If stock is below safety thresholds, an automated draft Purchase Requisition is created for procurement (`FR-04`).  
> 3. **Automated Credit Control (`FR-03`):** The system automatically locks order confirmation for customer accounts with unpaid debt overdue > 30 days, requiring formal accounting clearance.  
> 4. **Automated 3-Way Matching (`FR-05`):** Upon delivery, digital receipt confirmations automatically generate VAT invoices and reconcile against the original Sales Order and Delivery Note with zero variance.  
> 
> Data flows continuously across functions without manual paper handoffs."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 15 trình bày **Quy trình Tương lai Tích hợp (TO-BE)** được tái cấu trúc dựa trên 4 trụ cột tự động hóa cốt lõi:  
> 
> 1. **Tự động áp Bảng giá Hợp đồng (`FR-01`):** Khi chọn khách hàng B2B, giá hợp đồng đã ký (như 65.000 VNĐ cho `ST-001`) tự động xuất hiện trên đơn, xóa bỏ 100% lỗi copy-paste thủ công.  
> 2. **Kiểm tra Tồn kho Khả dụng (ATP) Thời gian thực (`FR-02`):** Trước khi xác nhận đơn, hệ thống kiểm tra ngay tồn kho khả dụng giữa kho Tân Bình và Biên Hòa, giảm 95% sự cố thiếu hàng. Nếu tồn kho dưới ngưỡng an toàn, hệ thống tự sinh bản thảo Yêu cầu mua hàng (`FR-04`).  
> 3. **Tự động Kiểm soát Nợ quá hạn (`FR-03`):** Hệ thống tự động khóa xác nhận đơn với các tài khoản có nợ quá hạn trên 30 ngày, ngăn ngừa rủi ro nợ xấu.  
> 4. **Tự động Đối soát 3 Bên (`FR-05`):** Khi giao hàng hoàn tất, xác nhận giao nhận điện tử tự động liên kết với Đơn bán hàng và Phiếu xuất kho để phát hành hóa đơn VAT chuẩn xác mà không cần dò tay.  
> 
> Luồng dữ liệu vận hành liền mạch qua các phòng ban mà không còn phụ thuộc vào chứng từ giấy."

---

# SLIDE 16: SƠ ĐỒ BPMN SWIMLANE TƯƠNG LAI TO-BE
*(Tương ứng trên màn hình: TO-BE Cross-Functional Swimlane BPMN Diagram — Vector SVG Figure 3.2)*  
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 60 - 70 giây  

### 🇬🇧 English Script:
> "Slide 16 visualizes this digital transformation through our **TO-BE Cross-Functional Swimlane BPMN 2.0 Diagram** (Figure 3.2 in our report):  
> 
> - Most importantly, in full alignment with Section D of our Evaluation Checklist, the re-engineered process introduces a dedicated **`CENTRAL SYSTEM (ERP ENGINE)`** lane situated directly beneath the Customer:  
>   - **Customer Lane:** Submits digital RFQ, receives instant contract-locked quote, and signs digital proof-of-delivery (e-POD).  
>   - **Central System (ERP Engine) Lane:** Automates five mission-critical tasks:  
>     1. `FR-01`: Auto-fetches approved contract pricelists upon client selection.  
>     2. `FR-02`: Executes real-time multi-hub ATP stock checks and stock reservations.  
>     3. `FR-03`: Performs instant automated credit aging validation (> 30 days).  
>     4. `FR-04`: Auto-generates draft Purchase Requisitions when stock breaches safety thresholds.  
>     5. `FR-05`: Executes automated 3-way matching and generates electronic VAT invoices.  
>   - **Sales Representative Lane:** Enjoys one-click Sales Order creation with guaranteed price accuracy.  
>   - **Warehouse Operations Lane:** Picks against digital pick-lists, scans barcodes, and verifies dispatches instantly.  
>   - **Accounting Lane:** Reconciles transactions with zero manual paper handling and sends automated payment reminders on Day 25 of Net 30 terms.  
> 
> - Notice the **3 Decision Gateways**:  
>   - **Gateway 1 (Credit Hold Triggered?):** If YES ➔ **`End 3: Credit Locked (System Block)`**. If NO ➔ Proceeds.  
>   - **Gateway 2 (Customer Approves Locked Quote?):** If NO ➔ **`End 1: Quote Cancelled`**. If YES ➔ Sales confirms SO.  
>   - **Gateway 3 (ATP Stock Sufficient Across Hubs?):** If NO ➔ **`End 2: Backorder & Auto PR Created`**. If YES ➔ System auto-reserves stock and routes to warehouse picking.  
> 
> - The happy path concludes seamlessly at **`End 4: Order Fulfilled, e-Invoiced & Reconciled`**. Manual handoffs are 100% eliminated!"

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 16 trực quan hóa bước nhảy chuyển đổi số này qua **Sơ đồ BPMN Swimlane Liên chức năng Tương lai TO-BE** (Hình 3.2 trong Báo cáo):  
> 
> - Điểm cải tiến đắt giá nhất, bám sát Mục D của Checklist đánh giá, là việc bổ sung làn bơi **`CENTRAL SYSTEM (ERP ENGINE)`** nằm ngay dưới Khách hàng:  
>   - **Làn Khách hàng:** Gửi yêu cầu điện tử, nhận báo giá khóa giá hợp đồng chuẩn xác tức thì, và ký biên bản giao nhận điện tử (e-POD).  
>   - **Làn Hệ thống Trung tâm (ERP Engine):** Tự động hóa 5 tác vụ sống còn:  
>     1. `FR-01`: Tự động kéo giá hợp đồng khi chọn khách hàng.  
>     2. `FR-02`: Kiểm tra và giữ chỗ tồn kho khả dụng ATP thời gian thực giữa 2 kho.  
>     3. `FR-03`: Tự động kiểm tra nợ quá hạn > 30 ngày để khóa đơn.  
>     4. `FR-04`: Tự động tạo bản thảo Yêu cầu mua hàng khi tồn kho chạm đáy an toàn.  
>     5. `FR-05`: Tự động đối soát 3 bên và phát hành hóa đơn điện tử VAT.  
>   - **Làn Nhân viên Kinh doanh:** Chốt đơn 1-click với độ chính xác giá 100%.  
>   - **Làn Thủ kho:** Nhặt hàng theo danh sách điện tử, quét mã vạch và xuất kho không cần giấy than.  
>   - **Làn Kế toán:** Đối soát tức thì không tốn 1 tờ giấy, hệ thống tự gửi email nhắc nợ vào Ngày thứ 25 của chu kỳ Net 30.  
> 
> - Quan sát **3 Cổng Quyết định (Decision Gateways)**:  
>   - **Cổng 1 (Kích hoạt Khóa Nợ?):** Nếu CÓ ➔ Dẫn về **`End 3: Khóa đơn do nợ quá hạn`**. Nếu KHÔNG ➔ Tiếp tục.  
>   - **Cổng 2 (Khách duyệt báo giá chuẩn?):** Nếu KHÔNG ➔ Dẫn về **`End 1: Hủy báo giá`**. Nếu CÓ ➔ Kinh doanh chốt đơn.  
>   - **Cổng 3 (Tồn kho ATP đủ giữa 2 kho?):** Nếu KHÔNG ➔ Dẫn về **`End 2: Chờ hàng & Tự động tạo PR`**. Nếu ĐỦ ➔ Hệ thống tự giữ chỗ và chuyển sang nhặt hàng.  
> 
> - Luồng quy trình kết thúc hoàn hảo tại **`End 4: Giao hàng thành công, Hóa đơn điện tử & Đối soát tự động`**. Mọi khâu bàn giao giấy tờ thủ công đã bị triệt tiêu 100%!"

---

# SLIDE 17: BẢNG SO SÁNH HIỆU QUẢ VẬN HÀNH & LỢI ÍCH ĐỊNH LƯỢNG
*(Tương ứng trên màn hình: AS-IS vs. TO-BE Operational Comparison — Table 3.8 & Table 3.9)*  
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 50 - 55 giây  

### 🇬🇧 English Script:
> "Slide 17 directly contrasts the current AS-IS state against the proposed TO-BE state across five key operational dimensions (Table 3.8 and Table 3.9 in our report):  
> 
> - **Contract Pricing:** Moves from manual Excel lookups to automated system retrieval ➔ **Achieving 0% Pricing Error Rate** (saving 50M VND monthly).  
> - **Inventory Visibility:** Moves from phone calls and 48-hour receiving lags to real-time ATP visibility across both facilities ➔ **Cutting stockouts by 95%**.  
> - **Stock Replenishment:** Moves from reactive handwritten alerts to automated draft Purchase Requisitions ➔ **Ensuring zero stockouts on fast-movers like Double A paper**.  
> - **Credit Enforcement:** Moves from paper rules bypassed by verbal appeals to hard automated system credit holds ➔ **Enforcing 100% policy compliance**.  
> - **Invoice Reconciliation:** Moves from 15–20 hours of manual paper matching weekly to automated digital 3-way matching ➔ **Reducing accounting reconciliation overhead by 90%, from 20 hours to just 2 hours per week**.  
> 
> These metrics provide clear, quantifiable business justification for system implementation."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 17 đối chiếu trực diện giữa Hiện trạng AS-IS và Tương lai TO-BE trên 5 khía cạnh vận hành trọng yếu (theo Bảng 3.8 và Bảng 3.9 trong Báo cáo):  
> 
> - **Tra cứu Giá Hợp đồng:** Từ mở file Excel thủ công chuyển sang hệ thống tự động áp giá ➔ **Đưa tỷ lệ lỗi giá từ 5-8% về 0%** (tiết kiệm 50 triệu/tháng).  
> - **Minh bạch Tồn kho:** Từ gọi điện thoại và trễ nhập hàng 48 giờ chuyển sang hiển thị tồn kho ATP thời gian thực ➔ **Giảm 95% sự cố hết hàng sau khi chốt đơn**.  
> - **Bổ sung Hàng hóa:** Từ viết giấy ghi chú khi đã hết hàng chuyển sang tự động sinh bản thảo Purchase Requisition ➔ **Đảm bảo không bao giờ đứt gãy nguồn hàng giấy Double A**.  
> - **Kiểm soát Công nợ:** Từ quy định trên giấy dễ dàng xin duyệt miệng chuyển sang khóa đơn tự động trên hệ thống ➔ **Tuân thủ 100% chính sách tín dụng**.  
> - **Đối soát Hóa đơn:** Từ 15-20 giờ dò chứng từ giấy thủ công chuyển sang đối soát 3 bên tự động ➔ **Tiết kiệm 90% thời gian kế toán, giảm từ 20 giờ xuống còn 2 giờ/tuần**.  
> 
> Đây là các chỉ số định lượng chứng minh giá trị kinh tế rõ ràng của đồ án."

---

# SLIDE 18: DANH MỤC YÊU CẦU CHỨC NĂNG MOSCOW & TIÊU CHÍ NGHIỆM THU
*(Tương ứng trên màn hình: MoSCoW Prioritized Functional Requirements Catalog — 5 BRs ➔ 8 FRs with Verification Ideas)*  
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 60 - 70 giây  

### 🇬🇧 English Script:
> "To conclude our Phase 1 Requirements Engineering, Slide 18 frames our prioritized **MoSCoW Functional Requirements Catalog** (spanning `FR-01` through `FR-08`), mapping directly from our 5 Business Requirements:  
> 
> - **MUST HAVE Requirements (Core Baseline):**  
>   - `FR-01` (Sales): The system SHALL automatically populate approved customer contract pricelists upon client selection.  
>     *(Verification Idea: Auto-populate contract rate for Double A `ST-001` at 65,000 VND vs 85,000 VND retail list price).*  
>   - `FR-02` (Inventory): The system SHALL display real-time ATP stock levels across Tan Binh and Bien Hoa hubs.  
>     *(Verification Idea: Simulate multi-hub ATP reservation across Tan Binh & Bien Hoa with 0 stockout errors).*  
>   - `FR-03` (Invoicing): The system SHALL enforce an automatic Credit Hold on orders for customer accounts with debt overdue > 30 days.  
>     *(Verification Idea: System blocks order confirmation when customer ledger shows invoice overdue > 30 days).*  
>   - `FR-04` (Purchasing): The system SHALL generate draft Purchase Requisitions when stock drops below safety reorder points.  
>     *(Verification Idea: Auto-generate draft PR when `ST-001` drops below safety reorder threshold of 50 reams).*  
>   - `FR-05` (Invoicing): The system SHALL execute automated 3-way matching between Sales Orders, Delivery Notes, and Invoices.  
>     *(Verification Idea: Automated 3-way match tolerance check with zero VND variance).*  
> 
> - **SHOULD HAVE & COULD HAVE Requirements:**  
>   - `FR-06` (Sales): 30-day advance alerts for contract expiry. *(Verification: Automated email alert 30 days prior).*  
>   - `FR-07` (Purchasing): Multi-vendor RFQ price comparison matrix. *(Verification: Side-by-side comparison matrix for Double A paper).*  
>   - `FR-08` (Executive): Accounts Receivable aging debt analysis dashboards. *(Verification: Real-time AR aging dashboard categorized by 0-30, 31-60, 61-90, >90 days).*  
> 
> Crucially, every single requirement complies with IEEE 830, begins with **'The system SHALL...'**, and includes an explicit **Verification Idea** to guarantee 100% testability in Phase 2!"

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Để hoàn tất việc đặc tả yêu cầu trong Phase 1, Slide 18 trình bày **Danh mục Yêu cầu Chức năng Ưu tiên theo Khung MoSCoW** (từ `FR-01` đến `FR-08`) được phát triển từ 5 Yêu cầu Nghiệp vụ cốt lõi:  
> 
> - **Nhóm BẮT BUỘC PHẢI CÓ (Must Have):**  
>   - `FR-01` (Bán hàng): Hệ thống PHẢI tự động áp bảng giá hợp đồng khi chọn khách hàng B2B.  
>     *(Ý tưởng Kiểm thử: Kiểm tra hệ thống tự điền giá hợp đồng 65.000 VNĐ cho giấy Double A `ST-001` thay vì giá niêm yết 85.000 VNĐ).*  
>   - `FR-02` (Kho bãi): Hệ thống PHẢI hiển thị tồn kho khả dụng (ATP) thời gian thực giữa kho Tân Bình và Biên Hòa.  
>     *(Ý tưởng Kiểm thử: Giả lập giữ chỗ tồn kho ATP liên kho với tỷ lệ lỗi thiếu hàng bằng 0).*  
>   - `FR-03` (Kế toán): Hệ thống PHẢI tự động khóa đơn hàng đối với các khách có nợ quá hạn > 30 ngày.  
>     *(Ý tưởng Kiểm thử: Thử tạo đơn cho khách có nợ quá 30 ngày, hệ thống lập tức chặn không cho xác nhận).*  
>   - `FR-04` (Thu mua): Hệ thống PHẢI tự động tạo bản thảo Yêu cầu mua hàng khi tồn kho xuống dưới định mức an toàn.  
>     *(Ý tưởng Kiểm thử: Khi tồn kho `ST-001` xuống dưới 50 ram, hệ thống tự động sinh PR bản thảo).*  
>   - `FR-05` (Kế toán): Hệ thống PHẢI tự động đối soát 3 bên giữa Đơn bán hàng, Phiếu xuất kho và Hóa đơn.  
>     *(Ý tưởng Kiểm thử: Kiểm tra sai lệch số liệu đối soát 3 bên bằng đúng 0 VNĐ).*  
> 
> - **Nhóm NÊN CÓ & CÓ THỂ CÓ (Should Have & Could Have):**  
>   - `FR-06` (Bán hàng): Cảnh báo trước 30 ngày khi hợp đồng nguyên tắc sắp hết hạn.  
>   - `FR-07` (Thu mua): Bảng ma trận so sánh báo giá RFQ giữa 3 nhà cung cấp.  
>   - `FR-08` (Ban Giám đốc): Dashboard báo cáo phân tích tuổi nợ công nợ phải thu theo các dải 0-30, 31-60, 61-90, >90 ngày.  
> 
> Toàn bộ yêu cầu đều tuân thủ chuẩn IEEE 830, bắt đầu bằng **'Hệ thống PHẢI...'** và có **Ý tưởng Kiểm thử (Verification Idea)** rõ ràng để phục vụ nghiệm thu Phase 2!"

---

# SLIDE 19: MA TRẬN TRUY XUẤT YÊU CẦU ĐẦU-CUỐI RTM
*(Tương ứng trên màn hình: End-to-End Requirements Traceability Matrix (RTM) — 6-Column End-to-End Chain)*  
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 55 - 60 giây  

### 🇬🇧 English Script:
> "Slide 19 establishes our **End-to-End Requirements Traceability Matrix (RTM)**, proving 100% bidirectional traceability across all analysis artifacts through our **6-Column Chain** (Table 4.4 in our report):  
> 
> `Evidence ID ➔ AS-IS Observation ➔ Problem / Need ➔ BR ID ➔ Functional Requirement (FR) ➔ Proposed TO-BE Change`  
> 
> - Sales interview evidence `EVD-W2-SALES-01` (5–8% pricing errors) maps to `INF-SALES-01`, `BR-01`, `FR-01`, and the TO-BE automated contract pricing engine.  
> - Receiving delay evidence `EVD-W2-WH-02` (24–48h staging lag) maps to `INF-WH-01`, `BR-02`, `FR-02`, and real-time multi-hub ATP reservation.  
> - Debt overdue evidence `EVD-W3-ACCT-03` (> 30 days overdue) maps to `INF-ACCT-01`, `BR-03`, `FR-03`, and hard automated credit holds.  
> - Stockout evidence `EVD-W3-PROC-04` (3–4 stockouts/week) maps to `INF-PROC-01`, `BR-04`, `FR-04`, and automated replenishment reorder points.  
> - Invoice reconciliation evidence `EVD-W3-ACCT-05` (15–20 hours wasted) maps to `INF-ACCT-02`, `BR-05`, `FR-05`, and automated 3-way matching.  
> 
> This matrix proves our Golden Rule of Traceability: **'Traceability is not just ID matching: it proves that every system feature addresses a real business need discovered during stakeholder elicitation.'** There are zero orphan requirements, and zero unaddressed business pains!"

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 19 trình bày **Ma trận Truy xuất Yêu cầu Nghiệp vụ Đầu-cuối (RTM)**, minh chứng tính truy vết hai chiều 100% qua **Chuỗi 6 Cột khép kín** (Bảng 4.4 trong Báo cáo):  
> 
> `Mã Bằng chứng ➔ Quan sát AS-IS ➔ Vấn đề / Nhu cầu ➔ Mã BR ➔ Yêu cầu Chức năng (FR) ➔ Thay đổi TO-BE`  
> 
> - Bằng chứng phỏng vấn kinh doanh `EVD-W2-SALES-01` (lỗi giá 5-8%) liên kết tới `INF-SALES-01`, `BR-01`, `FR-01`, và công cụ tự động áp giá hợp đồng TO-BE.  
> - Bằng chứng trễ nhập kho `EVD-W2-WH-02` (trễ 24-48 giờ) liên kết tới `INF-WH-01`, `BR-02`, `FR-02`, và cơ chế giữ chỗ tồn kho ATP liên kho.  
> - Bằng chứng nợ xấu `EVD-W3-ACCT-03` (nợ quá 30 ngày) liên kết tới `INF-ACCT-01`, `BR-03`, `FR-03`, và cơ chế khóa nợ tự động trên hệ thống.  
> - Bằng chứng sự cố hết hàng `EVD-W3-PROC-04` (3-4 lần/tuần) liên kết tới `INF-PROC-01`, `BR-04`, `FR-04`, và điểm đặt hàng lại tự động.  
> - Bằng chứng gánh nặng đối soát `EVD-W3-ACCT-05` (mất 15-20 giờ) liên kết tới `INF-ACCT-02`, `BR-05`, `FR-05`, và tính năng đối soát 3 bên tự động.  
> 
> Ma trận RTM này minh chứng Nguyên tắc Vàng về Tính Truy xuất: **'Tính truy xuất không chỉ là so khớp các mã định danh: nó chứng minh rằng mọi tính năng hệ thống đều giải quyết một nhu cầu nghiệp vụ thực tế được khám phá từ phỏng vấn stakeholder.'** Không có yêu cầu mồ côi và không bỏ sót bất kỳ nỗi đau nào!"

---

# SLIDE 20: TỔNG KẾT PHASE 1, BÀN GIAO PHASE 2 & BẢO VỆ PHẢN BIỆN
*(Tương ứng trên màn hình: Phase 1 Summary, Handover to Phase 2 & Q&A)*  
**Người trình bày:** Võ Duy Bình & Phạm Nguyễn Gia Thuận  
**Thời lượng dự kiến:** 50 - 60 giây  

### 🇬🇧 English Script:
> *(Vo Duy Binh concluding Phase 1):*  
> "In conclusion, Group 6 has successfully completed all deliverables mandated for **Phase 1 Business Systems Analysis**:  
> - We established an authentic **Enterprise Baseline**: covering our wholesale business model, 10 primary SKUs, multi-facility network, and RACI governance.  
> - We executed rigorous **Stakeholder Elicitation**: completing the Information Needs Matrix and verified interview evidence log.  
> - We diagnosed core **Operational Friction**: dissecting pricing errors, stockouts, and billing lag using the 5-Whys methodology.  
> - We engineered our **TO-BE Re-engineering Architecture & MoSCoW Catalog**: delivering requirements `FR-01` to `FR-08` backed by full RTM traceability.  
> 
> *(Pham Nguyen Gia Thuan opening Q&A):*  
> As we hand over these requirements into Phase 2—where Use Case specifications, ERP configuration, and peer UAT test execution will take place—we sincerely thank MSc. Nguyen Thi Thanh Thanh and the Examination Board for your valuable guidance.  
> We now warmly welcome all questions and feedback from the Board!"

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> *(Võ Duy Bình tổng kết Phase 1):*  
> "Để tổng kết, Nhóm 6 đã hoàn thành xuất sắc và đầy đủ 100% mục tiêu của **Phase 1: Phân tích Hệ thống Nghiệp vụ**:  
> - Thiết lập **Bối cảnh Doanh nghiệp Chuẩn mực**: với mô hình bán buôn B2B, danh mục 10 SKUs Master Data, mạng lưới kho bãi và ma trận quản trị RACI.  
> - Thực hiện **Thu thập Yêu cầu Chặt chẽ**: hoàn thành Ma trận Nhu cầu Thông tin và Nhật ký Bằng chứng Phỏng vấn xác minh.  
> - Chuẩn đoán thấu đáo **Nút thắt Vận hành**: bóc tách lỗi giá, thiếu hàng và đối soát qua kỹ thuật 5-Whys.  
> - Thiết kế **Quy trình Tương lai TO-BE & Khung MoSCoW**: hoàn thiện danh mục `FR-01` đến `FR-08` đi kèm ma trận truy vết RTM chặt chẽ.  
> 
> *(Phạm Nguyễn Gia Thuận kết thúc & mở Q&A):*  
> Bàn giao trọn vẹn kết quả này sang Phase 2—nơi nhóm sẽ thực hiện đặc tả Use Case chi tiết, cấu hình ERP và kiểm thử UAT chéo—nhóm em xin chân thành cảm ơn Giảng viên ThS. Nguyễn Thị Thanh Thanh và Hội đồng đánh giá đã lắng nghe.  
> Chúng em rất sẵn lòng đón nhận các câu hỏi phản biện từ Hội đồng!"

---

## 🎯 BỘ CÂU HỎI PHẢN BIỆN CHUYÊN SÂU DỰ PHÒNG CHO PHASE 1 (DEFENSE Q&A PREPARATION)

### ❓ Câu 1: Tại sao trong Phase 1 nhóm chưa trình diễn cấu hình Odoo hay kịch bản UAT?
- **Trả lời (EN):** *"According to the course guidelines, Phase 1 evaluates pure Business Analysis capabilities—investigating business problems, stakeholder information needs, AS-IS/TO-BE processes, requirements framing, and RTM traceability. Odoo ERP configuration, Use Case specifications, and UAT execution are strictly scoped for Phase 2 (Weeks 10 to 13). We followed the 'Business-First, Technology-Second' principle to ensure our requirements are grounded in real operational needs before configuring software."*
- **Trả lời (VN):** *"Thưa cô, theo đúng đề bài và thang điểm hướng dẫn, Phase 1 đánh giá năng lực Phân tích Nghiệp vụ Thuần túy (Pure Business Analysis) gồm bài toán kinh doanh, nhu cầu thông tin stakeholder, quy trình AS-IS/TO-BE, danh mục yêu cầu MoSCoW và ma trận RTM. Việc cấu hình Odoo, viết đặc tả Use Case và kiểm thử UAT thuộc về phạm vi Phase 2 (Tuần 10 đến 13). Nhóm tuân thủ chặt chẽ nguyên lý 'Nghiệp vụ đi trước, Công nghệ theo sau' để tránh việc vội vàng triển khai phần mềm khi chưa hiểu thấu nỗi đau doanh nghiệp."*

### ❓ Câu 2: Tại sao Bảng giá Hợp đồng (`FR-01`) lại là yêu cầu Bắt buộc (Must-Have) quan trọng nhất?
- **Trả lời (EN):** *"In B2B Wholesale, commercial relationships are governed by legal framework contracts. In the AS-IS state, reps made 5–8% copy-paste errors from personal Excel files, directly causing 50 million VND in monthly invoice disputes and credit notes. Automating contract pricelists upon client selection eliminates our largest revenue leak immediately."*
- **Trả lời (VN):** *"Trong mô hình Bán buôn B2B, giao dịch gắn liền với hợp đồng nguyên tắc pháp lý. Ở hiện trạng AS-IS, việc copy-paste thủ công từ file Excel cá nhân gây lỗi giá 5-8% trên hóa đơn, làm thiệt hại 50 triệu đồng mỗi tháng tiền tranh chấp công nợ. Việc tự động áp giá hợp đồng (`FR-01`) giải quyết trực tiếp tổn thất tài chính lớn nhất của doanh nghiệp."*

### ❓ Câu 3: Tồn kho Khả dụng ATP (Available-to-Promise) khác gì với Tồn kho thực tế (On-Hand)?
- **Trả lời (EN):** *"On-hand inventory is the physical quantity currently present in the warehouse. ATP inventory represents physical stock minus quantities already reserved for other confirmed Sales Orders, plus incoming shipments from confirmed supplier POs. Real-time ATP prevents sales reps from double-selling the same batch of Double A paper to two different corporate clients."*
- **Trả lời (VN):** *"Tồn kho On-Hand là số lượng hàng vật lý thực tế đang nằm trên kệ kho. Còn Tồn kho Khả dụng ATP bằng Tồn kho vật lý trừ đi số lượng đã được giữ chỗ cho các đơn bán hàng đã xác nhận khác, cộng lượng hàng sắp về từ các đơn PO đã duyệt. Chỉ số ATP thời gian thực ngăn chặn triệt để tình trạng nhân viên bán trùng một lô giấy Double A cho hai khách hàng khác nhau."*

### ❓ Câu 4: Phân tích 5-Whys giúp nhóm như thế nào trong việc tìm ra giải pháp cho gánh nặng Kế toán?
- **Trả lời (EN):** *"Initially, one might assume accounting needs faster data entry tools. However, the 5-Whys revealed the true root cause: signed paper delivery slips are disconnected from sales orders, forcing manual line-by-line reconciliation. The solution is not faster typing, but automated 3-way matching between digital Sales Orders, warehouse delivery logs, and VAT invoices, cutting 15–20 hours weekly down to 2 hours."*
- **Trả lời (VN):** *"Ban đầu, nếu nhìn bề nổi sẽ tưởng là kế toán cần phần mềm nhập liệu nhanh hơn. Nhưng qua kỹ thuật 5-Whys, nhóm phát hiện nguyên nhân gốc rễ là do biên bản giao hàng giấy bị ngắt kết nối với đơn bán hàng, buộc kế toán phải ngồi dò từng dòng bằng mắt. Giải pháp đúng đắn không phải là gõ nhanh hơn, mà là tự động đối soát 3 bên giữa Đơn bán hàng điện tử, Phiếu xuất kho và Hóa đơn VAT, giúp giảm từ 20 giờ xuống còn 2 giờ/tuần."*

### ❓ Câu 5: Ý nghĩa của Ma trận Truy xuất Yêu cầu (RTM) ở Slide 19 đối với quản lý dự án là gì?
- **Trả lời (EN):** *"The Requirements Traceability Matrix (RTM) establishes bidirectional traceability from field evidence to business requirements, functional requirements, and process activities. It guarantees zero orphan requirements—ensuring every feature delivers business value—and zero unaddressed business pains, serving as our baseline for Phase 2 Use Cases and UAT test case coverage."*
- **Trả lời (VN):** *"Thưa cô, Ma trận RTM thiết lập mối liên kết hai chiều chặt chẽ từ bằng chứng phỏng vấn đến yêu cầu nghiệp vụ, yêu cầu chức năng và quy trình hoạt động. RTM đảm bảo hai nguyên tắc vàng trong BSA: Không có yêu cầu 'mồ côi' (tính năng dư thừa không mang lại giá trị) và Không bỏ sót nỗi đau nghiệp vụ nào. Đây chính là kim chỉ nam để nhóm phát triển các Use Case và bộ kịch bản kiểm thử UAT trong Phase 2."*
