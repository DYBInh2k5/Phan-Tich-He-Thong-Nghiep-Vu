
GROUP TASK

Your team will:

1. Confirm your enterprise scenario

•Understand the business context provided.
2. Create an Enterprise Profile

•Identify:
•Business type
•Products/services
•Customers
•Sales channels
•Locations
•Main business functions
3. Identify initial stakeholders

•Create an initial stakeholder map.
4. Identify investigation areas

•Assign each student a Primary Investigation Focus.
Week 1 Quality Checklist
•☐ The team can explain what the enterprise does.
•☐ The team can identify its major business functions.
•☐ The team can identify key stakeholders.
•☐ Each student has a clear Primary Investigation Focus.
•☐ Each student has identified a relevant stakeholder.
•☐ Each student has prepared 5–7 interview questions.
•☐ Students have identified initial assumptions to verify.
•☐ The team understands that business functions are interconnected.
•☐ No solution or technology has been proposed prematurely.

---
================================================================================
                      GROUP DRAFT & DELIVERABLES - WEEK 1
================================================================================

# GROUP 6 — SCENARIO B: B2B WHOLESALE & DISTRIBUTION
**Industry Domain**: Office Supplies & Stationery

---

### GROUP 6 MEMBERS & RACI ASSIGNMENT

| No. | Student Name | Student ID | Group Role | Primary Investigation Focus |
|---|---|---|---|---|
| 1 | **Vo Duy Binh** | **22301500** | **Team Leader / Lead BA** | Sales & Customer Orders (B2B Sales & Contract Pricing) |
| 2 | **Tran Ba Loi** | **22300236** | **Project Manager / Systems Analyst** | Purchasing & Replenishment (Procurement & Vendor Mgmt) |
| 3 | **Nguyen Vu Minh Huy** | **22303760** | **Solution Configurator / ERP Specialist** | Inventory & Warehouse Operations (Stock & Fulfillment) |
| 4 | **Pham Nguyen Gia Thuan** | **22204631** | **QA & UAT Analyst** | Invoicing & Payments (Accounts Receivable & Credit Terms) |

---

## ARTIFACT 1: ENTERPRISE PROFILE

### 1. General Enterprise Information
* **Company Name**: OfficePro Distribution Co., Ltd. (**OfficePro Distribution**)
* **Business Model**: Regional B2B Wholesale & Distribution.
* **Locations**:
  * Corporate Headquarters & Sales Office: District 3, Ho Chi Minh City.
  * Central Warehouse: Tan Binh Industrial Park, Ho Chi Minh City (Area: 2,500 m²).
  * Regional Depot: Bien Hoa 2 Industrial Park, Dong Nai.

### 2. Products & Master Data Catalog (10 Domain SKUs)
OfficePro supplies corporate clients, educational institutions, and sub-dealers with 10 primary SKUs:

| No. | SKU Code | Product Description | Unit of Measure (UoM) | List Price (VND) |
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

### 3. Customer Segments & Sales Channels
* **Target B2B Customers**:
  * Corporate Clients: Order in large batches on periodic schedules; require fixed contract-based pricing agreements and 30-day payment terms (Net 30).
  * Educational Institutions: Order per school term/academic year; payments aligned with disbursement schedules.
  * Sub-dealers & Retail Outlets: Order medium quantities; receive tiered volume discounts.
* **Sales Channels**:
  * Direct B2B Sales Representatives.
  * Enterprise Email & Corporate Zalo OA.
  * Long-term Annual Framework Contracts.

### 4. End-to-End Core Business Functions Workflow
Suppliers ➔ Purchasing ➔ Central Warehouse ➔ Sales Department ➔ B2B Customers ➔ Accounting Department.

---

## ARTIFACT 2: STAKEHOLDER MAP & RACI MATRIX

### 1. Initial Stakeholder Map
* **Internal Stakeholders**:
  * **Management / Business Owner**: Concerned with revenue growth, operational profit, cost control, and credit risk mitigation.
  * **Sales Manager & Sales Staff**: Concerned with accurate contract price retrieval, real-time inventory checking, and fast order processing.
  * **Purchasing Manager & Procurement Staff**: Concerned with supplier tracking, Purchase Requisition approval, and purchase price optimization.
  * **Warehouse Manager & Stock Keepers**: Concerned with inventory accuracy, efficient receipt/delivery operations, and discrepancy management.
  * **Accounting Manager & AR Accountants**: Concerned with 3-way invoice matching, overdue debt collection, and payment reconciliation.
* **External Stakeholders**:
  * Corporate B2B Customers: Require timely deliveries, correct contract prices, and valid VAT invoices.
  * Suppliers / Vendors: Require predictable purchase orders and on-time payments.

### 2. Group RACI Assignment Matrix

*(R - Responsible | A - Accountable | C - Consulted | I - Informed)*

| Project Phase / Key Deliverable | Vo Duy Binh (Sales BA) | Tran Ba Loi (Purchasing BA) | Nguyen Vu Minh Huy (Inventory BA) | Pham Nguyen Gia Thuan (Accounting BA) |
|---|---|---|---|---|
| **Phase 1: Business Analysis** | | | | |
| 1. Enterprise Profile & RACI Matrix | **A/R** | R | R | R |
| 2. AI Stakeholder Interviews | **A/R** (Sales Mgr) | R (Purchasing Mgr) | R (Warehouse Mgr) | R (Accounting Mgr) |
| 3. AS-IS Process & Bottleneck Analysis | **A/R** (Sales AS-IS) | R (Purchasing AS-IS) | R (Inventory AS-IS) | R (Accounting AS-IS) |
| 4. Root Cause Analysis (5-Whys) | R | **A/R** | R | R |
| 5. TO-BE Process Design | **A/R** (Sales TO-BE) | R (Purchasing TO-BE) | R (Inventory TO-BE) | R (Accounting TO-BE) |
| 6. MoSCoW Requirements List | R | R | R | **A/R** |
| **Phase 2: Systems Analysis & Prototype** | | | | |
| 7. Use Case Diagrams & Specifications | **A/R** (Sales UCs) | R (Purchase UCs) | R (Inventory UCs) | R (Invoice UCs) |
| 8. Odoo ERP Setup & Master Data | C | C | **A/R** | C |
| 9. Peer UAT Execution & Log | R | R | R | **A/R** |
| 10. Master BRD & Live Demo Defense | **A/R** (Presenter) | R (Demo PO) | R (Demo Stock) | R (Demo Invoice) |

---

## ARTIFACT 3: INVESTIGATION FOCUS MATRIX

| Student Name | Student ID | Primary Focus Area | Primary Stakeholder | Primary Investigation Objective |
|---|---|---|---|---|
| **Vo Duy Binh** | **22301500** | **Sales & Customer Orders** | Sales Manager | Investigate B2B order entry, contract-based price agreements, discount policies, and order confirmation flows. |
| **Tran Ba Loi** | **22300236** | **Purchasing & Replenishment** | Purchasing Manager | Investigate Purchase Requisitions, Request for Quotations (RFQs), vendor selection, and PO tracking. |
| **Nguyen Vu Minh Huy** | **22303760** | **Inventory & Warehouse** | Warehouse Manager | Investigate goods receiving, stock picking, delivery fulfillment, real-time stock updates, and inventory count audits. |
| **Pham Nguyen Gia Thuan** | **22204631** | **Invoicing & Payments** | Chief Accountant | Investigate customer invoicing, credit term enforcement (Net 30), payment matching, and overdue debt management. |

---

## ARTIFACT 4: INITIAL BUSINESS QUESTIONS

1. How can Sales Representatives ensure they always apply the correct contract-based price for each B2B customer without relying on manual price lookup sheets?
2. What criteria and thresholds trigger the Purchasing Department to initiate product replenishment from suppliers?
3. Why are inventory levels inconsistent between physical warehouse stock and the sales team, resulting in order confirmations for out-of-stock items?
4. How long does Accounting spend manually matching Sales Orders, Delivery Notes, and Invoices before issuing formal VAT invoices to clients?
5. How can the system prevent new sales orders from being created for customers with overdue debts exceeding the allowable credit limit?

---

## WEEK 1 QUALITY CHECKLIST (COMPLETED)

* [x] The team can explain what OfficePro does (B2B Wholesale of Office Supplies & Stationery).
* [x] The team can identify its major business functions (Sales, Purchasing, Warehouse, Accounting).
* [x] The team can identify key internal and external stakeholders.
* [x] Each student has a clear Primary Investigation Focus.
* [x] Each student has identified a relevant primary stakeholder.
* [x] Each student has prepared 5–7 initial interview questions.
* [x] Students have identified initial assumptions to verify during interviews.
* [x] The team understands that business functions are cross-functional and interconnected.
* [x] **No solution or technology (e.g., specific Odoo modules) has been proposed prematurely.**


