# KỊCH BẢN THUYẾT TRÌNH BẢO VỆ ĐỒ ÁN PHASE 1 (SONG NGỮ ANH - VIỆT)
## BSA PHASE 1 MID-TERM DEFENSE SCRIPT — GROUP 6 (20 SLIDES TRỌN VẸN)
**Enterprise Case:** OfficePro Distribution Co., Ltd.  
**Domain Scenario:** Scenario B — B2B Wholesale & Distribution (Office Supplies & Stationery)  
**Khóa học:** Business Systems Analysis (BSA) — Năm học 2026–2027, Học kỳ 1  
**Giảng viên hướng dẫn:** ThS. Nguyễn Thị Thanh Thanh  
**Phạm vi đánh giá:** **100% Pure Phase 1 (Tuần 1–9: Sections 1, 2, và 3)** — Phân tích Nghiệp vụ Thuần túy (Không lấn sân Phase 2)

---

### 👥 PHÂN CÔNG THUYẾT TRÌNH CÂN BẰNG 50/50 THEO MODULE PHÂN TÍCH

| Diễn giả (Speaker) | Vai trò & Module phụ trách | Số lượng Slide | Danh sách Slide cụ thể |
| :--- | :--- | :---: | :--- |
| **Speaker 1: Võ Duy Bình**<br>*(MSSV: 22301500)* | **Team Leader / Lead BA & SA**<br>• Phụ trách Module: **Sales & Purchasing**<br>• Phạm vi: Hồ sơ doanh nghiệp, Ranh giới hệ thống, Mô hình mối quan hệ 5 quy trình, Phân tích 5-Whys, Tái cấu trúc TO-BE, Tổng kết Phase 1. | **10 Slides** | **Slide 1, 2, 3, 4, 5, 9, 10, 11, 14, 15**<br>*(Đồng tổng kết Slide 20)* |
| **Speaker 2: Phạm Nguyễn Gia Thuận**<br>*(MSSV: 22204631)* | **QA & Solution Configurator / Requirements Analyst**<br>• Phụ trách Module: **Inventory & Invoicing**<br>• Phạm vi: Stakeholder Grid, Nhu cầu thông tin, Bằng chứng phỏng vấn, BPMN Swimlane AS-IS & TO-BE, Điểm nghẽn, So sánh AS-IS/TO-BE, MoSCoW FR-01–08, Ma trận RTM. | **10 Slides** | **Slide 6, 7, 8, 12, 13, 16, 17, 18, 19**<br>*(Điều phối Phản biện Q&A Slide 20)* |

---

# SLIDE 1: TRANG TIÊU ĐỀ & TỔNG QUAN HỒ SƠ ĐỒ ÁN (TITLE & EXECUTIVE SUMMARY)
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
> Bám sát chuẩn mực đề cương môn học, Phase 1 của nhóm tập trung 100% vào **Phân tích Nghiệp vụ Thuần túy (Pure Business Analysis)** thuộc Sections 1, 2 và 3: tìm hiểu mô hình vận hành thực tế, ma trận nhu cầu thông tin stakeholder, mô hình hóa điểm nghẽn quy trình AS-IS, phân tích nguyên nhân gốc rễ 5-Whys, tái thiết kế quy trình TO-BE, danh mục yêu cầu MoSCoW và ma trận truy vết RTM.  
> 
> Nhóm quán triệt sâu sắc phương châm: **'Nghiệp vụ đi trước, Công nghệ theo sau'**. Sau đây, em xin phép bắt đầu với Hồ sơ Doanh nghiệp."

---

# SLIDE 2: BỐI CẢNH DOANH NGHIỆP & MÔ HÌNH B2B (ENTERPRISE PROFILE & BUSINESS MODEL)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 50 - 60 giây  

### 🇬🇧 English Script:
> "OfficePro Distribution Co., Ltd. is an established regional B2B wholesale distributor operating in Southern Vietnam, serving over **250 active corporate clients**, educational institutions, and stationery retail sub-dealers.  
> 
> Our business model relies on high-volume procurement from major upstream manufacturers—such as Double A, IK Plus, Thien Long, Pilot, and HP Vietnam—and distributing these supplies to commercial organizations.  
> 
> Key characteristics of our wholesale operations include:  
> - First, **annual framework contract agreements**, where high-volume corporate clients lock in special contracted prices rather than paying retail list prices.  
> - Second, **commercial credit terms**, where verified corporate accounts receive **Net 30-day payment privileges**.  
> - And third, our customer base spans three clear tiers: Corporate Enterprise Accounts, Educational Institutions with seasonal academic cycles, and local Stationery Sub-Dealers purchasing frequent replenishment batches."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Công ty TNHH Phân phối OfficePro là doanh nghiệp bán buôn B2B chuyên phân phối văn phòng phẩm tại khu vực miền Nam, phục vụ hơn **250 khách hàng doanh nghiệp**, trường học và đại lý bán lẻ.  
> 
> Mô hình vận hành của doanh nghiệp là thu mua số lượng lớn từ các nhà sản xuất uy tín như Double A, IK Plus, Thiên Long, Pilot và HP Việt Nam, sau đó phân phối lại cho các tổ chức thương mại.  
> 
> Đặc trưng nghiệp vụ bán buôn của OfficePro bao gồm:  
> - Thứ nhất, vận hành dựa trên **hợp đồng nguyên tắc (Framework Agreements)** thường niên, giúp khách hàng doanh nghiệp được áp dụng đơn giá hợp đồng ưu đãi thay vì giá bán lẻ niêm yết.  
> - Thứ hai, chính sách **công nợ thương mại Net 30 ngày** dành cho các khách hàng doanh nghiệp đủ điều kiện tín dụng.  
> - Thứ ba, tệp khách hàng được phân tầng rõ rệt: Doanh nghiệp thương mại lớn, Khối trường học với mùa vụ nhập học, và các Đại lý văn phòng phẩm cấp dưới đặt hàng định kỳ."

---

# SLIDE 3: DANH MỤC MASTER DATA 10 SKUS (10 PRIMARY SKUS & PRICELIST CATALOG)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 45 - 55 giây  

### 🇬🇧 English Script:
> "To ground our business analysis in realistic wholesale operations, Slide 3 defines our **Master Data catalog comprising 10 primary domain SKUs**.  
> 
> These items represent our highest-velocity commercial inventory, grouped into four core categories:  
> - **Paper Products:** Featuring our primary volume driver, `ST-001` (Double A A4 80gsm Ream), with standard retail pricing at 85,000 VND, alongside IK Plus 70gsm at 75,000 VND.  
> - **Writing Instruments:** Including Thien Long TL-027 Ballpoint Pens sold in boxes of 20, Pilot G2 Gel Pens, and Pentel EnerGel pens.  
> - **Filing & Organization:** Such as King Jim A4 7cm Lever Arch Files and Deli Clear Book Displays.  
> - **Desk Accessories & Equipment:** Covering Plus Staplers, Deli Multi-tier Document Trays, and Casio FX-580VN X Scientific Calculators.  
> 
> Notice the critical distinction highlighted in our catalog: for every SKU, we maintain both a **Standard Retail/Wholesale List Price** and a pre-negotiated **Contract Rate**—such as 65,000 VND for Double A paper under Tier-1 corporate agreements. Managing this pricing divergence without errors is the operational heartbeat of OfficePro."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Nhằm đảm bảo tính thực tiễn cao cho đồ án, Slide 3 định nghĩa danh mục **Dữ liệu Chủ (Master Data) gồm 10 mã SKU trọng yếu**.  
> 
> Đây là các mặt hàng có tốc độ lưu chuyển nhanh nhất trong ngành văn phòng phẩm, phân chia thành 4 nhóm chính:  
> - **Nhóm Giấy in:** Tiêu biểu là mã chủ lực `ST-001` (Giấy Double A A4 80gsm) giá niêm yết 85.000 VNĐ/ram, và IK Plus 70gsm giá 75.000 VNĐ/ram.  
> - **Nhóm Dụng cụ Viết:** Bút bi Thiên Long TL-027 (hộp 20 cây), bút gel Pilot G2 và Pentel EnerGel.  
> - **Nhóm Lưu trữ Hồ sơ:** Bìa còng King Jim 7cm và Bìa lá Deli.  
> - **Nhóm Thiết bị Văn phòng:** Bấm kim Plus, Kệ tài liệu Deli và Máy tính khoa học Casio FX-580VN X.  
> 
> Điểm cốt lõi trên bảng giá này là mỗi SKU đều có hai mức giá: **Giá niêm yết (List Price)** và **Đơn giá Hợp đồng (Contract Rate)**—ví dụ Double A chỉ còn 65.000 VNĐ/ram cho khách doanh nghiệp lớn. Việc kiểm soát sự chênh lệch giá này một cách chính xác chính là bài toán sống còn trong vận hành của OfficePro."

---

# SLIDE 4: MẠNG LƯỚI CƠ SỞ & RANH GIỚI DỰ ÁN (FACILITIES NETWORK & SCOPE BOUNDARIES)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 50 - 60 giây  

### 🇬🇧 English Script:
> "Slide 4 establishes our physical operational footprint and strict project boundaries:  
> 
> - **Tan Binh Central Hub (2,500 m²):** Located in Tan Binh Industrial Park, Ho Chi Minh City. This is our corporate headquarters and central fulfillment warehouse, managing 1,200 pallet positions, full-truckload receiving, cross-docking, and high-volume deliveries across HCMC.  
> - **Bien Hoa Satellite Hub (800 m²):** Located in Bien Hoa Industrial Zone 2, Dong Nai. It operates as a regional cross-dock and quick-dispatch satellite serving over 80 manufacturing plants in Dong Nai and Binh Duong industrial corridors.  
> 
> To ensure high academic rigor and prevent scope creep, our Phase 1 project scope is strictly bounded:  
> - **In-Scope:** The core wholesale quote-to-cash workflow, framework contract pricing, multi-warehouse stock reservation, and Net 30 commercial credit enforcement.  
> - **Out-of-Scope:** E-commerce retail storefronts, third-party logistics fleet tracking, cross-border international customs, and manufacturing assembly. We remain laser-focused on core B2B wholesale distribution."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 4 xác định mạng lưới cơ sở vật lý và ranh giới phạm vi của dự án:  
> 
> - **Kho Tổng Tân Bình (2.500 m²):** Đặt tại KCN Tân Bình, TP.HCM. Đây là trụ sở chính và trung tâm phân phối chủ lực với 1.200 vị trí pallet, tiếp nhận các xe tải lớn từ nhà máy, thực hiện cross-docking và giao hàng cho toàn khu vực TP.HCM.  
> - **Kho Vệ tinh Biên Hòa (800 m²):** Đặt tại KCN Biên Hòa 2, Đồng Nai. Đóng vai trò trạm trung chuyển khu vực phục vụ hơn 80 nhà máy sản xuất tại các hành lang công nghiệp Đồng Nai và Bình Dương.  
> 
> Để đảm bảo tính tập trung và tránh lan man phạm vi, đồ án xác định rõ:  
> - **Phạm vi Thực hiện (In-Scope):** Luồng phân phối bán buôn từ báo giá đến thu tiền (Quote-to-Cash), quản lý giá hợp đồng nguyên tắc, giữ chỗ tồn kho liên kho và kiểm soát công nợ Net 30.  
> - **Phạm vi Ngoài đề tài (Out-of-Scope):** Bán lẻ thương mại điện tử B2C, định vị đội xe vận tải 3PL, thủ tục hải quan xuất nhập khẩu quốc tế và gia công sản xuất. Nhóm hoàn toàn tập trung vào năng lực lõi của B2B Wholesale."

---

# SLIDE 5: MA TRẬN PHÂN CÔNG RACI NHÓM (GROUP RACI GOVERNANCE MATRIX)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 45 - 50 giây  

### 🇬🇧 English Script:
> "To demonstrate disciplined academic collaboration, Slide 5 details our **Group RACI Governance Matrix**:  
> 
> - **Võ Duy Bình (Student ID: 22301500) — Team Leader / Lead BA & SA:**  
>   Responsible and Accountable for **Sales Management** and **Purchasing Management** modules; enterprise context scoping, business problem framing, 5-Whys root cause analysis, and TO-BE re-engineering.  
> - **Phạm Nguyễn Gia Thuận (Student ID: 22204631) — QA & Solution Configurator:**  
>   Responsible and Accountable for **Inventory Management** and **Invoicing/Accounting** modules; stakeholder power/interest mapping, information needs matrix, interview evidence logs, BPMN swimlanes, MoSCoW functional requirements, and requirements traceability.  
> 
> Each member holds primary ownership for two core functional modules, supported by peer cross-consultation and review sign-offs across all sections."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Để thể hiện tính kỷ luật và sự phân công lao động khoa học, Slide 5 minh họa **Ma trận Quản trị Phân công RACI của nhóm**:  
> 
> - **Võ Duy Bình (MSSV: 22301500) — Trưởng nhóm / Phụ trách Phân tích & Kiến trúc:**  
>   Chịu trách nhiệm chính (R) và Giải trình (A) cho hai phân hệ **Quản lý Bán hàng (Sales)** và **Quản lý Mua hàng (Purchasing)**; thiết lập bối cảnh doanh nghiệp, chẩn đoán vấn đề, phân tích nguyên nhân gốc rễ 5-Whys và tái thiết kế TO-BE.  
> - **Phạm Nguyễn Gia Thuận (MSSV: 22204631) — QA & Cấu hình Giải pháp / Chuyên viên Yêu cầu:**  
>   Chịu trách nhiệm chính (R) và Giải trình (A) cho hai phân hệ **Quản lý Kho (Inventory)** và **Hóa đơn/Kế toán (Invoicing)**; thiết lập ma trận Power/Interest, nhu cầu thông tin, nhật ký bằng chứng phỏng vấn, sơ đồ BPMN Swimlane, danh mục yêu cầu MoSCoW và ma trận truy vết RTM.  
> 
> Mỗi thành viên nắm quyền sở hữu trọn vẹn 2 module nghiệp vụ nòng cốt, phối hợp tư vấn chéo (C) và thông báo (I) liên tục để đảm bảo tính nhất quán của đồ án."

---

# SLIDE 6: PHÂN TÍCH STAKEHOLDER & POWER/INTEREST GRID (STAKEHOLDER IDENTIFICATION & POWER/INTEREST)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 55 - 60 giây  

### 🇬🇧 English Script:
> "Good morning, Lecturer and Examination Board. My name is **Pham Nguyen Gia Thuan**, and I will walk you through our **Stakeholder Analysis and Process Modeling**.  
> 
> In Slide 6, we categorize our key organizational actors using the standard **Power/Interest Matrix**:  
> - **Manage Closely (High Power, High Interest):** The Managing Director (Nguyen Van Thang) and Chief Accountant (Tran Thi Mai). They hold veto power over commercial credit policy, financial solvency, and overall operational efficiency.  
> - **Keep Satisfied (High Power, Low Interest):** Downstream Wholesale Corporate Clients and Key Accounts. They possess strong market leverage and demand flawless invoice billing and strict contractual pricing adherence.  
> - **Keep Informed (Low Power, High Interest):** Sales Representatives, Warehouse Supervisors (Tan Binh & Bien Hoa), and Procurement Officers. They execute day-to-day operations and suffer directly from manual bottlenecks.  
> - **Monitor (Low Power, Low Interest):** Junior warehouse packers and delivery drivers, who require clear, simple picking lists and electronic delivery proof.  
> 
> This classification ensures our elicitation targeted the right stakeholders with appropriate interview depth."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Kính chào Thầy Cô và Hội đồng đánh giá. Em là **Phạm Nguyễn Gia Thuận**, em xin phép tiếp nối phần trình bày với **Phân tích Stakeholder và Mô hình hóa Quy trình**.  
> 
> Tại Slide 6, nhóm phân loại các chủ thể liên quan trong doanh nghiệp dựa trên **Ma trận Quyền lực / Mức độ Quan tâm (Power/Interest Grid)**:  
> - **Quản lý Chặt chẽ (High Power, High Interest):** Giám đốc Điều hành (Ông Nguyễn Văn Thắng) và Kế toán trưởng (Bà Trần Thị Mai). Đây là các nhân sự có quyền quyết định cao nhất về chính sách công nợ, hiệu quả tài chính và dòng tiền doanh nghiệp.  
> - **Giữ Hài lòng (High Power, Low Interest):** Khách hàng B2B Doanh nghiệp lớn. Họ có sức mua lớn, có quyền lựa chọn nhà phân phối khác và luôn đòi hỏi tính chính xác tuyệt đối của hóa đơn và giá hợp đồng.  
> - **Cập nhật Thường xuyên (Low Power, High Interest):** Nhân viên Kinh doanh, Trưởng kho (Tân Bình & Biên Hòa) và Nhân viên Mua hàng. Đây là những người trực tiếp vận hành hàng ngày và gánh chịu mọi phiền toái từ các điểm nghẽn thủ công.  
> - **Theo dõi (Low Power, Low Interest):** Nhân viên đóng gói và tài xế giao nhận, những người cần phiếu xuất kho rõ ràng và biên bản giao hàng đơn giản.  
> 
> Việc phân nhóm này định hướng chính xác đối tượng phỏng vấn sâu cho nhóm."

---

# SLIDE 7: MA TRẬN NHU CẦU THÔNG TIN LIÊN PHÒNG BAN (CROSS-FUNCTIONAL INFORMATION NEEDS MATRIX)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 50 - 55 giây  

### 🇬🇧 English Script:
> "Slide 7 bridges organizational hierarchy with operational data needs through our **Information Needs Matrix**:  
> 
> - **Sales Representatives (`INF-SALES-01`):** Urgently require instant, verified access to approved customer contract pricelists and real-time Available-to-Promise (ATP) stock, rather than relying on stale spreadsheets.  
> - **Warehouse Supervisors (`INF-WH-01`):** Require real-time visibility into advance inbound supplier shipments and outgoing reserved orders to optimize floor staging and bin allocation.  
> - **Chief Accountant (`INF-ACCT-01`):** Needs automated customer credit aging status (> 30 days overdue) and electronic delivery receipts for instant 3-way matching.  
> - **Procurement Officers (`INF-PROC-01`):** Need automated reorder triggers when stock hits minimum safety levels, paired with multi-supplier RFQ comparison sheets.  
> 
> Identifying these explicit data requirements directly shaped our functional requirements catalog."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 7 kết nối cơ cấu tổ chức với nhu cầu dữ liệu vận hành thông qua **Ma trận Nhu cầu Thông tin Liên phòng ban**:  
> 
> - **Nhân viên Kinh doanh (`INF-SALES-01`):** Cần truy cập tức thì bảng giá hợp đồng đã ký và chỉ số Tồn kho Khả dụng (ATP) thời gian thực, thay vì dựa vào các file Excel phân tán dễ sai sót.  
> - **Quản lý Kho (`INF-WH-01`):** Cần nắm rõ lịch hàng về từ nhà cung cấp và danh sách các đơn hàng đã được giữ chỗ để điều phối nhân sự bốc dỡ và tối ưu diện tích kệ.  
> - **Kế toán trưởng (`INF-ACCT-01`):** Cần thông tin tuổi nợ khách hàng (đặc biệt nợ quá hạn > 30 ngày) và phiếu giao hàng điện tử để đối soát hóa đơn 3 bên tức thì.  
> - **Nhân viên Mua hàng (`INF-PROC-01`):** Cần cảnh báo đặt hàng tự động khi tồn kho chạm ngưỡng an toàn, đi kèm bảng so sánh báo giá RFQ từ nhiều nhà cung cấp.  
> 
> Các nhu cầu thông tin cốt lõi này chính là nền tảng để nhóm xây dựng các yêu cầu chức năng sau này."

---

# SLIDE 8: NHẬT KÝ BẰNG CHỨNG THU THẬP YÊU CẦU (ELICITATION EVIDENCE LOG & VERIFICATION)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 50 - 60 giây  

### 🇬🇧 English Script:
> "To guarantee that our findings are grounded in authentic business evidence rather than hypothetical guesswork, Slide 8 logs our **Verified Elicitation Evidence**:  
> 
> - Through semi-structured interviews with Sales Supervisor Le Thi Mai (`EVD-W2-SALES-01`), we verified that pricing errors occur in **5% to 8% of all monthly orders**, generating over **50 million VND in disputed credit notes** due to personal Excel lookups.  
> - In our field observation at Tan Binh Warehouse (`EVD-W2-WH-02`), we documented a **24 to 48-hour data lag** between physical truck unloading and paper ledger entry. This causes sales reps to report stockouts even when goods are physically sitting on the receiving dock!  
> - In our interview with Chief Accountant Tran Thi Mai (`EVD-W3-ACCT-03`), we recorded that accounting spends **15 to 20 hours per week** manually cross-referencing physical paper delivery notes against sales orders.  
> 
> Every problem we address is backed by verified field interviews and real-world numbers."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Để đảm bảo kết quả phân tích xuất phát từ bằng chứng thực địa chứ không phải phỏng đoán lý thuyết, Slide 8 trình bày **Nhật ký Bằng chứng Thu thập Yêu cầu**:  
> 
> - Qua phỏng vấn sâu với Giám sát Kinh doanh Lê Thị Mai (`EVD-W2-SALES-01`), nhóm xác minh tỷ lệ sai giá hợp đồng chiếm **5% đến 8% tổng số đơn hàng**, gây thiệt hại hơn **50 triệu đồng mỗi tháng** do phải phát hành hóa đơn điều chỉnh vì tra cứu Excel thủ công.  
> - Qua quan sát thực tế tại Kho Tân Bình (`EVD-W2-WH-02`), nhóm ghi nhận **độ trễ từ 24 đến 48 giờ** từ lúc xe tải dỡ hàng xuống bãi đến khi nhân viên nhập sổ sách. Điều này khiến kinh doanh tưởng hết hàng dù hàng thực tế đã nằm trong kho!  
> - Qua làm việc với Kế toán trưởng Trần Thị Mai (`EVD-W3-ACCT-03`), nhóm ghi nhận phòng kế toán phải tốn **15 đến 20 giờ mỗi tuần** chỉ để ngồi dò từng dòng giữa phiếu giao hàng giấy và đơn bán hàng.  
> 
> Mọi vấn đề nhóm giải quyết đều có bằng chứng phỏng vấn và số liệu thực tế chứng minh."

---

# SLIDE 9: VẤN ĐỀ NGHIỆP VỤ CỐT LÕI & THIỆT HẠI ĐỊNH LƯỢNG (PRIMARY OPERATIONAL PROBLEMS)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 55 - 60 giây  

### 🇬🇧 English Script:
> "Returning to the business analysis, Slide 9 synthesizes our findings into **Three Primary Operational Friction Points**:  
> 
> 1. **Contract Pricing Discrepancies:** Sales reps maintain separate, disconnected Excel files. Outdated files lead to a **5% to 8% pricing error rate**, creating billing disputes, delayed cash collection, and damaged client trust.  
> 2. **Post-Order Confirmation Stockouts:** Because warehouse receiving takes 24–48 hours to record and there is no real-time Available-to-Promise check, reps frequently confirm orders for goods that are already reserved or out of stock, suffering **3 to 4 emergency stockouts every single week**.  
> 3. **Manual Paper 3-Way Matching Lag:** Invoices are manually typed and matched against handwritten, carbon-copy delivery slips, burning **15 to 20 hours of accounting labor weekly**, while overdue debtors with debts exceeding 30 days continue to place new orders unchecked.  
> 
> These quantified pains directly motivate our process re-engineering."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Quay trở lại với mạch phân tích nghiệp vụ, Slide 9 tổng hợp thực trạng thành **3 Vấn đề Vận hành Cốt lõi kèm Thiệt hại Định lượng**:  
> 
> 1. **Sai lệch Đơn giá Hợp đồng:** Nhân viên kinh doanh lưu bảng giá riêng lẻ trên file Excel. Việc dùng file cũ gây ra **tỷ lệ lỗi giá từ 5% đến 8%**, dẫn đến tranh chấp hóa đơn, thu hồi công nợ chậm và mất uy tín với khách hàng.  
> 2. **Hết hàng sau khi Chốt đơn (Post-Order Stockouts):** Do khâu nhập kho chậm 24-48 giờ và thiếu cơ chế kiểm tra tồn kho khả dụng thời gian thực, nhân viên chốt đơn nhưng kho không có hàng giao, dẫn đến **3 đến 4 sự cố đứt hàng mỗi tuần**, buộc phải hủy đơn hoặc mua ngoài với giá cao.  
> 3. **Gánh nặng Đối soát Hóa đơn Giấy:** Kế toán phải đối soát thủ công giữa đơn đặt hàng và biên bản giao hàng bằng giấy than, tiêu tốn **15 đến 20 giờ làm việc mỗi tuần**, đồng thời khách hàng có nợ quá hạn trên 30 ngày vẫn tiếp tục được duyệt đơn bán hàng mới.  
> 
> Những thiệt hại định lượng rõ ràng này chính là động lực thôi thúc nhóm tái thiết kế quy trình."

---

# SLIDE 10: MÔ HÌNH MỐI QUAN HỆ GIỮA 5 QUY TRÌNH NGHIỆP VỤ CỐT LÕI (PROCESS RELATIONSHIP MAP)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 50 - 55 giây  

### 🇬🇧 English Script:
> "Slide 10 presents our **Five Core Business Processes Relationship Map**, illustrating the inter-process dependency model:  
> 
> - At the heart of our commercial revenue engine is **BP1: Processing Corporate B2B Orders**, which coordinates customer inquiry, quotation, credit validation, order confirmation, and invoice issuance.  
> - BP1 does not exist in a vacuum; it relies directly on four supporting satellite processes:  
>   - **BP2 (Contract Pricing Management):** Maintains approved customer framework pricelists and feeds negotiated rates directly into BP1.  
>   - **BP3 (Checking Product Availability - ATP):** Validates real-time inventory levels across Tan Binh and Bien Hoa hubs, feeding confirmed stock reserves back into BP1.  
>   - **BP4 (Receiving & Inbound Inspection):** Processes incoming shipments from manufacturers like Double A and Pilot, updating warehouse on-hand stock and preventing receiving backlogs.  
>   - **BP5 (Reviewing Replenishment Needs & Purchasing):** Triggered when ATP stock drops below safety thresholds, issuing Purchase Orders to suppliers to replenish inventory for future BP1 orders.  
> 
> Understanding these cross-process connections is essential to eliminating departmental silos."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 10 trình bày **Mô hình Mối quan hệ giữa 5 Quy trình Nghiệp vụ Cốt lõi (Activity 2)** trong doanh nghiệp:  
> 
> - Trọng tâm tạo ra doanh thu là quy trình **BP1: Xử lý Đơn hàng B2B Doanh nghiệp**, điều phối từ tiếp nhận yêu cầu, lập báo giá, kiểm tra công nợ, xác nhận đơn đến xuất hóa đơn.  
> - Quy trình BP1 liên kết hữu cơ và nhận dữ liệu từ 4 quy trình vệ tinh xung quanh:  
>   - **BP2 (Quản lý Bảng giá Hợp đồng):** Lưu trữ bảng giá thỏa thuận và cung cấp đơn giá hợp đồng chuẩn cho BP1.  
>   - **BP3 (Kiểm tra Tồn kho Khả dụng ATP):** Xác minh số lượng hàng thực tế giữa kho Tân Bình và Biên Hòa để xác nhận giữ chỗ hàng cho BP1.  
>   - **BP4 (Nhận hàng & Kiểm hàng Đầu vào):** Tiếp nhận xe tải từ các nhà sản xuất như Double A, Pilot, cập nhật hàng lên kệ để BP3 và BP1 có hàng bán.  
>   - **BP5 (Đánh giá Nhu cầu Bổ sung & Thu mua):** Kích hoạt khi tồn kho ATP chạm mức tồn an toàn, phát hành đơn mua hàng PO để tái bổ sung hàng cho các đơn BP1 tiếp theo.  
> 
> Nhìn nhận 5 quy trình trong một thể thống nhất giúp chúng ta thấy rõ luồng dữ liệu liên thông và xóa bỏ tư duy cục bộ phòng ban."

---

# SLIDE 11: MÔ HÌNH QUY TRÌNH HIỆN TẠI AS-IS (AS-IS CROSS-FUNCTIONAL BUSINESS PROCESS MAP)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 55 - 60 giây  

### 🇬🇧 English Script:
> "Slide 11 walks through the linear, fragmented reality of our **Current AS-IS Business Process Map**:  
> 
> - **Step 1.0 (Inquiry):** Corporate client submits an RFQ. The sales rep opens a personal, local Excel pricelist to look up prices, introducing that dangerous **5% to 8% pricing error rate**.  
> - **Step 2.0 (Stock Check):** The sales rep picks up the phone to call the warehouse supervisor to verbally check stock. The warehouse is unaware of pallets sitting in the receiving dock due to the **24–48 hour receiving lag**.  
> - **Step 3.0 (Order Confirmation):** Rep confirms the order based on guesswork. But two days later, physical picking reveals the bin is empty! **3 to 4 stockouts happen weekly**.  
> - **Step 4.0 (Emergency PO):** Rep sends an urgent email to Purchasing. Supplier negotiation takes 2 to 3 days, forcing delivery delays to the client.  
> - **Step 5.0 (Delivery & Billing):** Goods are delivered with a physical paper slip. Accounting manually collects carbon copies, spending **15–20 hours weekly** cross-referencing lines to type VAT invoices, while overdue debtors bypass credit policies.  
> 
> Every step relies on phone calls, personal spreadsheets, and paper slips."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 11 mô tả chi tiết dòng chảy phân mảnh của **Quy trình Hiện trạng AS-IS**:  
> 
> - **Bước 1.0 (Báo giá):** Khách hàng gửi yêu cầu mua hàng. Nhân viên kinh doanh mở file Excel cá nhân để tra giá, tạo ra **tỷ lệ sai giá 5% đến 8%**.  
> - **Bước 2.0 (Kiểm tra kho):** Nhân viên gọi điện thoại cho thủ kho để hỏi hàng miệng. Thủ kho không biết hàng đã về bãi vì **độ trễ nhập kho 24-48 giờ**.  
> - **Bước 3.0 (Chốt đơn):** Nhân viên xác nhận đơn cho khách dựa trên phỏng đoán. Nhưng hai ngày sau khi đi nhặt hàng thì kệ trống không! Dẫn đến **3-4 sự cố thiếu hàng mỗi tuần**.  
> - **Bước 4.0 (Mua hàng khẩn cấp):** Kinh doanh hối thúc phòng mua hàng gửi email hỏi giá nhà cung cấp, mất 2-3 ngày đàm phán, làm đơn hàng bị trễ hạn giao.  
> - **Bước 5.0 (Giao hàng & Xuất hóa đơn):** Giao hàng bằng phiếu giấy than. Kế toán thu gom chứng từ giấy, tốn **15-20 giờ mỗi tuần** ngồi dò từng dòng để gõ hóa đơn VAT, trong khi khách nợ quá hạn vẫn được duyệt đơn mới.  
> 
> Toàn bộ quy trình hiện tại phụ thuộc hoàn toàn vào điện thoại, file Excel cá nhân và chứng từ giấy."

---

# SLIDE 12: SƠ ĐỒ BPMN SWIMLANE LIÊN CHỨC NĂNG HIỆN TRẠNG AS-IS (AS-IS SWIMLANE BPMN DIAGRAM)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 55 - 60 giây  

### 🇬🇧 English Script:
> "To formally visualize cross-functional handoffs, Slide 12 illustrates our **AS-IS Cross-Functional Swimlane BPMN Diagram** across five distinct participant lanes:  
> 
> - **Customer Lane:** Submits RFQ inquiries via Zalo or email, receives draft quotes, and physically signs hardcopy delivery notes upon truck arrival.  
> - **Sales Representative Lane:** Manually references personal spreadsheets (Friction Point: 5–8% rate error), places verbal phone calls to warehouse, and manually keys draft quotes.  
> - **Warehouse Operations Lane:** Performs manual visual bin inspections, experiences 24–48h inbound staging blindspots, and issues handwritten, triple-copy delivery slips.  
> - **Accounting & Finance Lane:** Manually enters invoices into standalone software, manually cross-checks paper receipts (15–20 hours wasted weekly), and frequently bypasses credit checks via verbal sales appeals.  
> - **Procurement Lane:** Reacts only when warehouse shelves run dry; negotiates via manual emails with 2–3 day turnaround delays.  
> 
> The red friction badges on this diagram pinpoint exactly where information breakdown and operational lag occur."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Để mô hình hóa chuẩn xác các điểm bàn giao giữa các phòng ban, Slide 12 trình bày **Sơ đồ BPMN Swimlane Liên chức năng Hiện trạng AS-IS** qua 5 làn bơi trách nhiệm:  
> 
> - **Làn Khách hàng:** Gửi hỏi giá qua Zalo/Email, nhận báo giá thảo và ký nhận tay vào biên bản giao hàng giấy khi xe tải đến.  
> - **Làn Nhân viên Kinh doanh:** Mở bảng tính Excel cá nhân (Điểm nghẽn: 5-8% sai giá), gọi điện thoại hỏi tồn kho và soạn báo giá thủ công.  
> - **Làn Thủ kho:** Đi bộ kiểm tra trực quan kệ hàng, gặp độ trễ nhập hàng 24-48 giờ khiến không thấy hàng mới về, và viết phiếu xuất kho bằng giấy than 3 liên.  
> - **Làn Kế toán:** Nhập hóa đơn thủ công vào phần mềm kế toán độc lập, đối soát chứng từ giấy bằng mắt (tốn 15-20 giờ/tuần), và dễ dàng bỏ qua rào cản nợ quá hạn khi kinh doanh nài nỉ xin duyệt.  
> - **Làn Thu mua:** Hoàn toàn bị động, chỉ đặt hàng khi kho báo hết sạch; gửi email hỏi giá nhà cung cấp mất 2-3 ngày.  
> 
> Các nhãn đỏ cảnh báo trên sơ đồ chỉ rõ chính xác các điểm đứt gãy thông tin và lãng phí thời gian trong hiện trạng."

---

# SLIDE 13: ĐIỂM NGHẼN PHÒNG BAN & KHOẢNG CÁCH VẬN HÀNH (DEPARTMENTAL BOTTLENECKS & OPERATIONAL GAPS)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 50 - 55 giây  

### 🇬🇧 English Script:
> "Slide 13 drills deeper into the specific departmental silos and operational bottlenecks:  
> 
> - **Sales Department Silo:** Framework pricelists are isolated in individual sales reps' spreadsheets; the lack of a centralized pricing repository causes widespread rate discrepancies.  
> - **Warehouse Staging Blindspot:** Incoming supplier shipments sit in receiving bays for 24–48 hours before physical ledger recording, rendering newly arrived inventory completely invisible to sales reps.  
> - **Procurement Reactive Trap:** Replenishment is triggered reactively only after warehouse bins run empty; multi-vendor RFQ negotiations consume 2 to 3 days over tedious email exchanges.  
> - **Finance Reconciliation Bottleneck:** Accounting expends 15 to 20 hours weekly cross-checking physical paper documents, while customer debt overdue > 30 days is not systematically blocked.  
> 
> As visualized in our enterprise transformation concept, the fundamental leap requires shifting from **isolated departmental paper silos to an integrated, automated digital backbone**."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 13 bóc tách sâu hơn các điểm nghẽn tại từng phòng ban trong doanh nghiệp:  
> 
> - **Ốc đảo Kinh doanh:** Bảng giá hợp đồng bị cô lập trong file Excel của từng nhân viên; thiếu cơ sở dữ liệu giá tập trung gây sai sót giá tràn lan.  
> - **Điểm mù Kho bãi:** Hàng nhà cung cấp về nằm ở bãi đỗ 24-48 giờ mới được nhập vào sổ sách, khiến hàng mới hoàn toàn 'vô hình' với nhân viên bán hàng.  
> - **Cái bẫy Bị động ở Phòng Thu mua:** Chỉ đặt hàng khi kệ trong kho đã cạn kiệt; đàm phán báo giá RFQ mất 2-3 ngày qua email qua lại thủ công.  
> - **Nút thắt Kế toán:** Tốn 15 đến 20 tiếng mỗi tuần để ngồi đối soát chứng từ giấy thủ công, trong khi các khoản nợ quá hạn trên 30 ngày không có công cụ chặn tự động.  
> 
> Mấu chốt của bài toán chuyển đổi là phải dịch chuyển từ **các ốc đảo giấy tờ rời rạc sang một trục kỹ thuật số tích hợp và tự động hóa**."

---

# SLIDE 14: PHÂN TÍCH NGUYÊN NHÂN CỐT LÕI 5-WHYS (5-WHYS ROOT CAUSE BREAKDOWN)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 60 giây  

### 🇬🇧 English Script:
> "To prevent rushing into superficial software features without diagnosing core business mechanisms, Group 6 executed a rigorous **5-Whys Root Cause Analysis** for each operational problem:  
> 
> - **For Contract Pricing Errors:**  
>   1. *Why are prices wrong?* Reps copy-paste unit prices from personal Excel files.  
>   2. *Why personal Excel files?* Each rep manages separate price sheets for their assigned accounts.  
>   3. *Why separate files?* Framework contracts are stored as scanned PDFs on shared drives.  
>   4. *Why scanned PDFs?* The enterprise lacks a central database mapping contracted SKUs to client accounts.  
>   5. **Root Cause:** **Lack of a centralized contract-based pricing engine that automatically enforces contracted unit prices upon customer selection.**  
> 
> - **For Post-Order Stockouts:**  
>   The 5-Whys isolated the root cause as the **lack of a real-time Available-to-Promise (ATP) inventory visibility engine connecting Sales and Warehouse hubs**.  
> 
> - **For Invoice Matching Overhead:**  
>   The root cause is the **lack of automated digital 3-way matching and systematic hard credit hold enforcement**.  
> 
> These root causes defined our exact TO-BE re-engineering blueprint."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Để tránh sa đà vào các tính năng phần mềm bề nổi khi chưa hiểu bản chất, Nhóm 6 đã áp dụng kỹ thuật **Phân tích 5-Whys (5 câu hỏi Tại sao)** cho từng vấn đề:  
> 
> - **Với Lỗi Sai lệch Giá Hợp đồng:**  
>   1. *Tại sao giá bán bị sai?* Vì nhân viên copy-paste giá từ file Excel cá nhân.  
>   2. *Tại sao lại dùng file Excel cá nhân?* Vì mỗi nhân viên tự lưu bảng giá cho khách hàng của mình.  
>   3. *Tại sao lại lưu rời rạc?* Vì hợp đồng nguyên tắc được lưu dưới dạng file PDF scan trên ổ đĩa chung.  
>   4. *Tại sao lưu file scan?* Vì công ty chưa có cơ sở dữ liệu tập trung liên kết mã SKU theo hợp đồng khách hàng.  
>   5. **Nguyên nhân gốc rễ (Root Cause):** **Doanh nghiệp thiếu một Công cụ Quản lý Giá Hợp đồng tập trung để tự động áp đơn giá hợp đồng chuẩn khi chọn khách hàng.**  
> 
> - **Với Sự cố Hết hàng sau khi Chốt đơn:**  
>   Nguyên nhân gốc rễ là **thiếu cơ chế Tồn kho Khả dụng (ATP) thời gian thực kết nối giữa Bán hàng và Kho bãi Tân Bình - Biên Hòa**.  
> 
> - **Với Gánh nặng Đối soát Hóa đơn Kế toán:**  
>   Nguyên nhân gốc rễ là **thiếu cơ chế tự động đối soát 3 bên và thiếu hệ thống khóa công nợ quá hạn tự động**.  
> 
> Chính các nguyên nhân gốc rễ này đã định hình bản thiết kế quy trình TO-BE tương lai."

---

# SLIDE 15: TÁI CẤU TRÚC QUY TRÌNH TƯƠNG LAI TO-BE (TO-BE INTEGRATED PROCESS RE-ENGINEERING)
**Người trình bày:** Võ Duy Bình (Speaker 1)  
**Thời lượng dự kiến:** 55 - 60 giây  

### 🇬🇧 English Script:
> "Slide 15 presents our re-engineered **TO-BE Integrated Workflow**, designed on four core automation pillars:  
> 
> 1. **Automated Contract Pricelists:** When a B2B client is selected in the system, contracted prices—such as 65,000 VND for `ST-001`—are retrieved automatically, completely eliminating human copy-paste errors.  
> 2. **Real-Time Available-to-Promise (ATP) Verification:** Before confirming a Sales Order, the system instantly validates stock levels across Tan Binh and Bien Hoa warehouses, cutting post-confirmation stockouts by 95%. If stock is below safety thresholds, an automated draft Purchase Requisition is created for procurement.  
> 3. **Automated Credit Control:** The system automatically locks order confirmation for customer accounts with unpaid debt overdue > 30 days, requiring formal accounting clearance.  
> 4. **Automated 3-Way Matching:** Upon delivery, digital receipt confirmations automatically generate VAT invoices and reconcile against the original Sales Order and Delivery Note.  
> 
> Data flows continuously across functions without manual paper handoffs."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 15 trình bày **Quy trình Tương lai Tích hợp (TO-BE)** được tái cấu trúc dựa trên 4 trụ cột tự động hóa cốt lõi:  
> 
> 1. **Tự động áp Bảng giá Hợp đồng:** Khi chọn khách hàng B2B, giá hợp đồng đã ký (như 65.000 VNĐ cho `ST-001`) tự động xuất hiện trên đơn, xóa bỏ 100% lỗi copy-paste thủ công.  
> 2. **Kiểm tra Tồn kho Khả dụng (ATP) Thời gian thực:** Trước khi xác nhận đơn, hệ thống kiểm tra ngay tồn kho khả dụng giữa kho Tân Bình và Biên Hòa, giảm 95% sự cố thiếu hàng. Nếu tồn kho dưới ngưỡng an toàn, hệ thống tự sinh bản thảo Yêu cầu mua hàng (Purchase Requisition).  
> 3. **Tự động Kiểm soát Nợ quá hạn:** Hệ thống tự động khóa xác nhận đơn với các tài khoản có nợ quá hạn trên 30 ngày, ngăn ngừa rủi ro nợ xấu.  
> 4. **Tự động Đối soát 3 Bên:** Khi giao hàng hoàn tất, xác nhận giao nhận điện tử tự động liên kết với Đơn bán hàng và Phiếu xuất kho để phát hành hóa đơn VAT chuẩn xác.  
> 
> Luồng dữ liệu vận hành liền mạch qua các phòng ban mà không còn phụ thuộc vào chứng từ giấy."

---

# SLIDE 16: SƠ ĐỒ BPMN SWIMLANE LIÊN CHỨC NĂNG TƯƠNG LAI TO-BE (TO-BE SWIMLANE BPMN DIAGRAM)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 55 - 60 giây  

### 🇬🇧 English Script:
> "Slide 16 visualizes this digital transformation through the **TO-BE Cross-Functional Swimlane BPMN Diagram**:  
> 
> - **Customer Lane:** Submits digital RFQs via portal or email, receives instant quote approvals with guaranteed contract rate lock, and executes digital proof-of-delivery (e-POD) sign-off.  
> - **Sales Representative Lane:** Enjoys automated contract price lookups (100% rate accuracy), automated credit risk validation, and instant one-click order confirmation.  
> - **Warehouse Operations Lane:** Picks and packs against real-time digital pick-lists, scans barcodes at the loading dock, and verifies cross-dock transfers between Tan Binh and Bien Hoa seamlessly.  
> - **Accounting & Finance Lane:** No longer keys manual invoices. The system triggers automated 3-way matching, auto-generates VAT e-invoices, and dispatches automated payment reminders on Day 25 of Net 30 terms.  
> - **Procurement Lane:** Receives automated reorder triggers when ATP drops below safety stock, evaluating multi-vendor RFQ matrices digitally within hours rather than days.  
> 
> All five swimlanes now interact in real time through shared operational data."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 16 trực quan hóa bước nhảy chuyển đổi số này thông qua **Sơ đồ BPMN Swimlane Liên chức năng Tương lai TO-BE**:  
> 
> - **Làn Khách hàng:** Gửi yêu cầu mua hàng qua cổng thông tin hoặc email, nhận báo giá chuẩn xác tức thì với cam kết giữ giá hợp đồng, và ký biên bản giao nhận điện tử (e-POD).  
> - **Làn Nhân viên Kinh doanh:** Được hệ thống tự động áp giá hợp đồng (đạt độ chính xác 100%), tự động kiểm tra rủi ro tín dụng và chốt đơn nhanh chỉ với một thao tác.  
> - **Làn Thủ kho:** Nhặt hàng theo phiếu xuất kho điện tử thời gian thực, quét mã vạch kiểm tra tại cửa xuất, và luân chuyển hàng giữa kho Tân Bình - Biên Hòa mượt mà.  
> - **Làn Kế toán:** Hoàn toàn giải phóng khỏi việc nhập liệu tay. Hệ thống tự động đối soát 3 bên, tự xuất hóa đơn điện tử VAT và tự gửi email nhắc nợ vào Ngày thứ 25 của chu kỳ Net 30.  
> - **Làn Thu mua:** Nhận cảnh báo đặt hàng tự động khi tồn kho ATP xuống thấp, so sánh ma trận báo giá nhà cung cấp trên hệ thống chỉ trong vài giờ thay vì nhiều ngày.  
> 
> Cả 5 làn bơi giờ đây tương tác đồng bộ trong thời gian thực qua cùng một nguồn dữ liệu duy nhất."

---

# SLIDE 17: SO SÁNH HIỆU QUẢ VẬN HÀNH AS-IS VS TO-BE (OPERATIONAL COMPARISON TABLE)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 50 - 55 giây  

### 🇬🇧 English Script:
> "Slide 17 directly contrasts the current AS-IS state against the proposed TO-BE state across five key operational dimensions:  
> 
> - **Contract Pricing:** Moves from manual Excel lookups to automated system retrieval ➔ **Achieving 0% Pricing Error Rate**.  
> - **Inventory Visibility:** Moves from phone calls and 48-hour receiving lags to real-time ATP visibility across both facilities ➔ **Cutting stockouts by 95%**.  
> - **Stock Replenishment:** Moves from reactive handwritten alerts to automated draft Purchase Requisitions ➔ **Ensuring zero stockouts on fast-movers like Double A paper**.  
> - **Credit Enforcement:** Moves from paper rules bypassed by verbal appeals to hard automated system credit holds ➔ **Enforcing 100% policy compliance**.  
> - **Invoice Reconciliation:** Moves from 15–20 hours of manual paper matching weekly to automated digital 3-way matching ➔ **Reducing accounting reconciliation overhead by 90%, from 20 hours to just 2 hours per week**.  
> 
> These metrics provide clear, quantifiable business justification for system implementation."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 17 đối chiếu trực diện giữa Hiện trạng AS-IS và Tương lai TO-BE trên 5 khía cạnh vận hành trọng yếu:  
> 
> - **Tra cứu Giá Hợp đồng:** Từ mở file Excel thủ công chuyển sang hệ thống tự động áp giá ➔ **Đưa tỷ lệ lỗi giá từ 5-8% về 0%**.  
> - **Minh bạch Tồn kho:** Từ gọi điện thoại và trễ nhập hàng 48 giờ chuyển sang hiển thị tồn kho ATP thời gian thực ➔ **Giảm 95% sự cố hết hàng sau khi chốt đơn**.  
> - **Bổ sung Hàng hóa:** Từ viết giấy ghi chú khi đã hết hàng chuyển sang tự động sinh bản thảo Purchase Requisition ➔ **Đảm bảo không bao giờ đứt gãy nguồn hàng giấy Double A**.  
> - **Kiểm soát Công nợ:** Từ quy định trên giấy dễ dàng xin duyệt miệng chuyển sang khóa đơn tự động trên hệ thống ➔ **Tuân thủ 100% chính sách tín dụng**.  
> - **Đối soát Hóa đơn:** Từ 15-20 giờ dò chứng từ giấy thủ công chuyển sang đối soát 3 bên tự động ➔ **Tiết kiệm 90% thời gian kế toán, giảm từ 20 giờ xuống còn 2 giờ/tuần**.  
> 
> Đây là các chỉ số định lượng chứng minh giá trị kinh tế rõ ràng của đồ án."

---

# SLIDE 18: DANH MỤC YÊU CẦU CHỨC NĂNG MOSCOW (MOSCOW FUNCTIONAL REQUIREMENTS CATALOG)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 55 - 60 giây  

### 🇬🇧 English Script:
> "To conclude our Phase 1 Requirements Engineering, Slide 18 frames our prioritized **MoSCoW Functional Requirements Catalog** (spanning `FR-01` through `FR-08`):  
> 
> - **MUST HAVE Requirements (Core Baseline):**  
>   - `FR-01` (Sales): System shall automatically retrieve customer contract pricelists upon client selection.  
>   - `FR-02` (Inventory): System shall display real-time ATP stock levels across Tan Binh and Bien Hoa warehouses.  
>   - `FR-03` (Invoicing): System shall enforce automatic Credit Hold for accounts with overdue debt > 30 days.  
>   - `FR-04` (Purchasing): System shall generate draft Purchase Requisitions when stock falls below reorder points.  
>   - `FR-05` (Invoicing): System shall execute automated 3-way matching between SO, Delivery Note, and Billing Invoice.  
> 
> - **SHOULD HAVE Requirements:**  
>   - `FR-06` (Sales): 30-day advance alerts for framework contract expiration.  
>   - `FR-07` (Purchasing): Multi-vendor RFQ price comparison matrix.  
> 
> - **COULD HAVE Requirements:**  
>   - `FR-08` (Executive): Accounts Receivable aging debt analysis dashboards.  
> 
> Every single functional requirement maps directly back to a diagnosed business problem and validated stakeholder information need."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Để hoàn tất việc đặc tả yêu cầu trong Phase 1, Slide 18 trình bày **Danh mục Yêu cầu Chức năng Ưu tiên theo Khung MoSCoW** (từ `FR-01` đến `FR-08`):  
> 
> - **Yêu cầu BẮT BUỘC PHẢI CÓ (Must Have):**  
>   - `FR-01` (Bán hàng): Hệ thống tự động áp bảng giá hợp đồng khi chọn khách hàng B2B.  
>   - `FR-02` (Kho bãi): Hiển thị tồn kho khả dụng (ATP) thời gian thực giữa kho Tân Bình và Biên Hòa.  
>   - `FR-03` (Kế toán): Tự động khóa đơn hàng đối với các khách có nợ quá hạn > 30 ngày.  
>   - `FR-04` (Thu mua): Tự động tạo bản thảo Yêu cầu mua hàng khi tồn kho xuống dưới định mức tối thiểu.  
>   - `FR-05` (Kế toán): Tự động đối soát 3 bên giữa Đơn bán hàng, Phiếu xuất kho và Hóa đơn.  
> 
> - **Yêu cầu NÊN CÓ (Should Have):**  
>   - `FR-06` (Bán hàng): Cảnh báo trước 30 ngày khi hợp đồng nguyên tắc sắp hết hạn.  
>   - `FR-07` (Thu mua): Bảng ma trận so sánh báo giá RFQ giữa nhiều nhà cung cấp.  
> 
> - **Yêu cầu CÓ THỂ CÓ (Could Have):**  
>   - `FR-08` (Ban Giám đốc): Dashboard báo cáo phân tích tuổi nợ công nợ phải thu cho Ban giám đốc.  
> 
> Toàn bộ 8 yêu cầu chức năng này đều truy vết trực tiếp về nỗi đau thực tế của doanh nghiệp và nhu cầu thông tin của các stakeholder."

---

# SLIDE 19: MA TRẬN TRUY XUẤT YÊU CẦU ĐẦU-CUỐI RTM (END-TO-END REQUIREMENTS TRACEABILITY MATRIX)
**Người trình bày:** Phạm Nguyễn Gia Thuận (Speaker 2)  
**Thời lượng dự kiến:** 55 - 60 giây  

### 🇬🇧 English Script:
> "Slide 19 establishes our **End-to-End Requirements Traceability Matrix (RTM)**, proving 100% bidirectional traceability across all analysis artifacts:  
> 
> - As shown in the matrix, every single row maps a validated field evidence observation—such as `EVD-W2-SALES-01` from our Sales interview—directly to a stakeholder information need (`INF-SALES-01`), a Business Requirement (`BR-01`), a prioritized Functional Requirement (`FR-01`), and its corresponding core process (`BP2`).  
> - Similarly, warehouse receiving delay `EVD-W2-WH-02` traces directly to `INF-WH-01`, `BR-02`, and `FR-02` (Real-Time ATP).  
> - Overdue debt losses `EVD-W3-ACCT-03` trace to `INF-ACCT-01`, `BR-03`, and `FR-03` (Automated Credit Hold).  
> - Stockout emergencies `EVD-W3-PROC-04` trace to `INF-PROC-01`, `BR-04`, and `FR-04` (Automated Reorder Points).  
> - And manual billing overhead `EVD-W3-ACCT-05` traces to `INF-ACCT-02`, `BR-05`, and `FR-05` (Automated 3-Way Matching).  
> 
> This matrix proves to the Examination Board that no functional requirement was arbitrarily invented; each one is firmly rooted in verified operational evidence."

### 🇻🇳 Lời dịch & Hướng dẫn nói Tiếng Việt:
> "Slide 19 trình bày **Ma trận Truy xuất Yêu cầu Nghiệp vụ Đầu-cuối (RTM)**, minh chứng tính truy vết hai chiều 100% giữa các cấu phần phân tích:  
> 
> - Như bảng ma trận thể hiện, từng dòng đều liên kết trực tiếp từ một Bằng chứng thực địa phỏng vấn—như `EVD-W2-SALES-01` phỏng vấn kinh doanh—tới Nhu cầu thông tin (`INF-SALES-01`), Yêu cầu nghiệp vụ (`BR-01`), Yêu cầu chức năng (`FR-01`), và Quy trình liên quan (`BP2`).  
> - Tương tự, độ trễ nhập kho `EVD-W2-WH-02` truy vết thẳng tới `INF-WH-01`, `BR-02`, và `FR-02` (Tồn kho ATP thời gian thực).  
> - Tổn thất nợ xấu `EVD-W3-ACCT-03` truy vết tới `INF-ACCT-01`, `BR-03`, và `FR-03` (Khóa công nợ tự động).  
> - Sự cố thiếu hàng `EVD-W3-PROC-04` truy vết tới `INF-PROC-01`, `BR-04`, và `FR-04` (Điểm đặt hàng lại tự động).  
> - Và gánh nặng đối soát hóa đơn `EVD-W3-ACCT-05` truy vết tới `INF-ACCT-02`, `BR-05`, và `FR-05` (Đối soát 3 bên tự động).  
> 
> Ma trận RTM này chứng minh với Hội đồng rằng không có bất kỳ yêu cầu chức năng nào được bịa đặt hay suy diễn tùy tiện, mà tất cả đều bắt nguồn vững chắc từ bằng chứng vận hành thực tế."

---

# SLIDE 20: TỔNG KẾT PHASE 1, BÀN GIAO PHASE 2 & BẢO VỆ PHẢN BIỆN (CONCLUSION & ORAL DEFENSE Q&A)
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

## 🎯 BỘ CÂU HỎI PHẢN BIỆN CHUYÊN SÂU DỰ PHÒNG CHO PHASE 1 (ANTICIPATED PHASE 1 DEFENSE Q&A)

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
