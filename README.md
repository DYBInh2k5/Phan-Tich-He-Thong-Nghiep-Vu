# Business Systems Analysis (BSA) — Course Repository & Group Project

![Course](https://img.shields.io/badge/Course-Business%20Systems%20Analysis-blue)
![University](https://img.shields.io/badge/University-Hoa%20Sen%20University%20(HSU)-red)
![Term](https://img.shields.io/badge/Academic%20Term-2026--2027%20Semester%201-green)
![Status](https://img.shields.io/badge/Project%20Status-Active%20(Week%201)-brightgreen)

## 📌 Course Overview

This repository contains all coursework, lecture materials, individual deliverables, and group project documentation for the **Business Systems Analysis (BSA)** course at the Faculty of Technology, Hoa Sen University (HSU).

* **Instructor**: MSc. Nguyen Thi Thanh Thanh (`thanh.nguyenthithanh@hoasen.edu.vn`)
* **Student & Repository Maintainer**: Vo Duy Binh (ID: `22301500`) — Team Leader of Group 6
* **Language of Instruction & Deliverables**: English

---

## 🎯 Core BSA Methodology & Philosophy

The course emphasizes a strict **Business-First** approach:

> 💡 **"BUSINESS FIRST → TECHNOLOGY SECOND"**  
> *Do not jump to "which Odoo module should we use?". First investigate "What is the operational business problem, who is affected, and what does the organization need?" Code and ERP software are merely tools. A feature-rich software system that fails to solve an operational problem is a failed product.*

### End-to-End Requirements Traceability Chain
Every system capability implemented in this repository must be traceable back to a verified business need:

$$\text{Business Problem} \longrightarrow \text{Process / Pain Point} \longrightarrow \text{Business Need} \longrightarrow \text{Requirement (MoSCoW)} \longrightarrow \text{Use Case} \longrightarrow \text{Odoo ERP Functionality} \longrightarrow \text{UAT Validation}$$

---

## 🏢 Group Project Context — Group 6

* **Master Scenario**: Scenario B — B2B Wholesale & Distribution
* **Industry Domain**: Office Supplies & Stationery (Văn phòng phẩm & Dụng cụ học sinh)
* **Enterprise Name**: **OfficePro Distribution Co., Ltd.** (`OfficePro Distribution`)
* **Key Business Characteristics**:
  * **Contract Pricing**: Customer-specific contract price agreements for corporate B2B clients.
  * **Purchase Requisitions**: Structured replenishment requests triggered by inventory shortage.
  * **Credit Terms & Invoicing**: Net 30-day payment terms, 3-way invoice matching, and overdue debt safeguards.
* **Core Odoo System Scope**: Constrained to a maximum of 4 modules: **Sales, Purchase, Inventory, and Invoicing/Accounting**.

---

## 👥 Group 6 Team Members & RACI Assignment

| No. | Student Name | Student ID | Group Role | Primary Investigation Focus | Primary Stakeholder |
|---|---|---|---|---|---|
| 1 | **Vo Duy Binh** | **22301500** | **Team Leader / Lead BA** | **Sales & Customer Orders** (B2B Sales & Contract Pricing) | Sales Manager |
| 2 | **Tran Ba Loi** | **22300236** | **Project Manager / Systems Analyst** | **Purchasing & Replenishment** (Procurement & Vendor Mgmt) | Purchasing Manager |
| 3 | **Nguyen Vu Minh Huy** | **22303760** | **Solution Configurator / ERP Specialist** | **Inventory & Warehouse Operations** (Stock & Fulfillment) | Warehouse Manager |
| 4 | **Pham Nguyen Gia Thuan** | **22204631** | **QA & UAT Analyst** | **Invoicing & Payments** (Accounts Receivable & Net 30) | Chief Accountant |

---

## 📂 Repository Structure

```
.
├── README.md                                  # Comprehensive overview of the repository & project
├── Course.md                                  # Course syllabus, learning outcomes (COs) & grading criteria
├── Materials.md                               # Textbooks, references & software tools (Odoo ERP, BPMN)
├── Slide/                                     # Lecture slides provided by the instructor
│   └── Week 1.pdf                             # Week 1: Introduction to BSA & Understanding the Enterprise
├── Inviduals/                                 # Individual student deliverables (Vo Duy Binh - 22301500)
│   ├── Week1.md                               # Week 1 Individual Investigation Plan
│   ├── Week2.md                               # Week 2 Interview Evidence Log (Sales Manager)
│   └── Week3.md ... Week15.md                 # Weekly individual task deliverables
├── Group/                                     # Group project deliverables (Group 6 - OfficePro Distribution)
│   ├── Week1.md                               # Week 1 Enterprise Profile, Stakeholder Map & RACI Matrix
│   └── Week2.md ... Week15.md                 # Weekly group task deliverables & process models
└── Project/                                   # Project reference materials & briefs
    └── Final Project/
        ├── BSA_Project_Brief__Guidelines.pdf  # Official Master Project Brief & Guidelines (Weeks 1-15)
        ├── BRD_Template_BSA.docx              # Official Business Requirements Document (BRD) Template
        └── Project.md                         # Detailed 15-Week Implementation Roadmap for Group 6
```


---

## 🗓️ 15-Week Project Roadmap & Assessment Milestones

| Phase | Weeks | Strategic Focus | Primary Deliverables & Outputs | Assessment Weight |
|---|---|---|---|---|
| **Phase 1: Business Analysis & Requirements Engineering** | **Weeks 1–4** | Domain Setup & Elicitation | Enterprise Context, Group RACI Matrix, AI Stakeholder Interview Logs & Information Needs Matrix | **Draft BRD (Sections 1 & 2)** |
| | **Weeks 5–9** | Process Modeling & Framing | AS-IS BPMN Diagrams, Bottleneck Analysis, 5-Whys Root Cause Analysis, TO-BE BPMN Diagrams & MoSCoW Functional Requirements | **Phase 1 BRD Submission (30%)** *(Evaluates Pure Business Analysis - No Odoo screenshots required)* |
| **Phase 2: Solution Mapping, Odoo Config & UAT** | **Weeks 10–11** | System Specifications & Quality | Enterprise Use Case Diagram, Detailed Use Case Specifications, Business Rules Matrix, and Requirements Traceability Matrix (RTM) | **Section 4 Specifications** |
| | **Weeks 12–13** | ERP Setup & Testing | Odoo ERP Core Module Setup, 10 SKUs Master Data Entry, Peer User Acceptance Testing (UAT) & Executed Test Log with Pass/Fail Screenshots | **Complete Master BRD (40%)** |
| | **Weeks 14–15** | Defense & Final Live Demo | Final Master BRD Document, Live End-to-End Odoo Workflow Demonstration, and Oral Q&A Defense | **Presentation & Live Demo** |

---

## 📦 Master Data — 10 Domain SKUs (OfficePro Distribution)

| No. | SKU Code | Product Description | Unit of Measure | List Price (VND) |
|---|---|---|---|---|
| 1 | `ST-001` | A4 Copy Paper Double A 70gsm (500 sheets/ream) | Ream | 65,000 |
| 2 | `ST-002` | A4 Copy Paper IK Plus 80gsm (500 sheets/ream) | Ream | 75,000 |
| 3 | `ST-003` | Thien Long TL-027 Blue Ballpoint Pen (Box of 20) | Box | 90,000 |
| 4 | `ST-004` | Pilot G2 Black Gel Pen 0.7mm (Box of 12) | Box | 320,000 |
| 5 | `ST-005` | King Jim A4 Display Book 60 Pockets | Piece | 45,000 |
| 6 | `ST-006` | Deli A5 Spiral Notebook 160 Pages | Piece | 35,000 |
| 7 | `ST-007` | Kangaro HD-10 Heavy Duty Stapler | Piece | 28,000 |
| 8 | `ST-008` | Kangaro No.10 Staples (Box of 20 small packs) | Big Box | 42,000 |
| 9 | `ST-009` | Original HP 107a Black Laser Toner Cartridge | Box | 1,150,000 |
| 10 | `ST-010` | Pentel WB1 Whiteboard Marker (Box of 12) | Box | 180,000 |

---

## 📊 Course Assessment Breakdown

* **Individual Quizzes & Assignments**: `30%` (Weeks 2–13)
* **Project Phase 1 (Mid-Term Assessment)**: `30%` (Submitted Week 9)
* **Project Phase 2 (Final Assessment & Defense)**: `40%` (Submitted Week 14–15)

---

## 🤝 Contribution & Maintenance

This repository is maintained by **Vo Duy Binh (ID: 22301500)** for academic tracking and version control during the 2026–2027 Academic Year at Hoa Sen University.
