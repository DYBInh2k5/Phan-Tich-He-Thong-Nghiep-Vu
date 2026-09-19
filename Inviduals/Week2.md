
## Stakeholder Investigation

**Homework – Individual**

Use your validated enterprise context and Week 1 Investigation Plan to conduct an interview with your assigned stakeholder using the  **AI Stakeholder Simulator** .

### Instructions

1. Interview your assigned stakeholder.
2. Use your 5–7 initial questions as a starting point.
3. Ask follow-up questions based on the stakeholder's responses.
4. Investigate the current business process, including activities, actors, information, handoffs, exceptions, and current tools/workarounds.
5. Revisit your Week 1 assumptions and classify them as  **Confirmed, Revised, or Uncertain** .
6. Record at least one unresolved question.

### Deliverable — Interview Evidence Log

Submit:

* Stakeholder
* Investigation focus
* Process investigated
* Key activities
* Actors involved
* Information used/produced
* Handoffs
* Exceptions
* Current tools/workarounds
* Assumptions: Confirmed / Revised / Uncertain
* Unresolved questions
* Short reflection

**Reflection:**

> What did you learn from the interview that you could not have known from your initial enterprise understanding?

### Submission

* **Submission type:** File upload
* **Format:** PDF
* **Length:** 1–2 pages
* **File name:** `W2_InterviewEvidence_[StudentID]_[Name].pdf`
* **Submit individually on Mlearning**

> **Important:** Record what the stakeholder tells you as evidence. Do not jump directly to business problems, system requirements, or technology solutions.
>

---
================================================================================
          INDIVIDUAL DELIVERABLE WEEK 2 - VO DUY BINH (ID: 22301500)
================================================================================

# INTERVIEW EVIDENCE LOG — WEEK 2

## STUDENT & PROJECT INFORMATION
* **Student Name**: Vo Duy Binh
* **Student ID**: 22301500
* **Course**: Business Systems Analysis (BSA) — Hoa Sen University
* **Group**: Group 6 (Scenario B: B2B Wholesale & Distribution – Office Supplies & Stationery)
* **Assigned Role**: Team Leader / Business Analyst (Sales & Customer Orders Focus)
* **Enterprise Name**: OfficePro Distribution Co., Ltd. (`OfficePro Distribution`)

---

## 1. INTERVIEW OVERVIEW

* **Assigned Stakeholder**: **Sales Manager** (AI Stakeholder Simulator)
* **Primary Investigation Focus**: B2B Sales Operations, Order Entry (Sales Orders - SO), and Contract-Based Pricing Management (Contract Pricing).
* **Process Investigated**: End-to-End B2B Quotation, Contract Price Verification, Order Entry, and Sales Order Confirmation Flow.

---

## 2. BUSINESS PROCESS EVIDENCE

### A. Key Activities
1. **Order Receipt & Inquiry**: The sales team receives purchase inquiries or RFQs from corporate B2B clients via email, phone, or corporate Zalo OA.
2. **Contract Pricing Lookup**: The sales rep opens individual Excel price lookup files or PDF framework contracts to locate the agreed contract price per SKU for that specific customer account.
3. **Discount & Approval Check**: If the client requests volume discounts beyond contract terms, the sales rep submits a manual approval request to the Sales Manager (for discounts > 5%).
4. **Stock Availability Verification**: Sales reps call or send Zalo messages to Warehouse keepers to verbally confirm if physical stock (e.g., A4 Copy Paper) is available for immediate fulfillment.
5. **Credit & Debt Status Check**: Sales reps informally ask Accounting or check a shared monthly Excel debt report to see if the client has overdue payments exceeding 30 days.
6. **Quotation & Sales Order Creation**: Sales Rep drafts a PDF Quotation in Excel, emails it to the client, and generates a manual Sales Order (SO) upon receiving the client's official Purchase Order (PO).
7. **Order Dispatch & Handoff**: The confirmed SO is printed and handed over to the Warehouse for stock picking and forwarded to Accounting for billing.

### B. Actors Involved
* **B2B Sales Representative / Sales Admin**: Main point of contact; receives inquiries, looks up pricing, creates quotes and Sales Orders.
* **Sales Manager (Interviewee)**: Oversees sales operations, approves custom discount requests (> 5%), and negotiates annual contract terms.
* **Corporate B2B Client Procurement Officer**: Places orders, requests quotations, and submits corporate Purchase Orders.
* **Warehouse Keeper**: Receives stock availability inquiries from Sales and performs physical stock picking.
* **Accounts Receivable (AR) Accountant**: Manages client credit limits, monitors overdue invoices, and issues official VAT invoices.

### C. Information Used & Produced
* **Information Used**:
  * Master Product Catalog (10 SKUs).
  * Signed Customer Framework Agreements (PDFs in shared drives).
  * Excel Contract Price Lookup Sheets (maintained separately per sales rep/account).
  * Verbal / Zalo stock availability updates from Warehouse.
  * Monthly Accounts Receivable Debt Summary (Excel from Accounting).
* **Information Produced**:
  * Formal Customer Sales Quotation (PDF).
  * Confirmed Sales Order (SO Document).
  * Picking & Packing Instruction (Printed paper copy sent to Warehouse).
  * Billing Request Trigger (Forwarded to Accounting).

### D. Handoffs
* **Client ➔ Sales**: Client emails a formal Purchase Order (PO) or inquiry to the Sales Representative.
* **Sales ➔ Warehouse**: Sales Rep prints and physically delivers or emails the confirmed Sales Order to Warehouse staff for stock picking.
* **Sales ➔ Accounting**: Sales Rep forwards the signed client PO and confirmed Sales Order to Accounting to initiate invoice creation and credit tracking.

### E. Exceptions & Operational Workarounds
* **Exception 1 — Price Discrepancy / Disagreement**: Client claims a lower contract price than shown in Sales' Excel sheet.  
  * *Workaround*: Sales Rep must search through archive folders for the signed PDF framework agreement, delaying quote issuance by 1–2 days.
* **Exception 2 — Inventory Shortage Post-Confirmation**: Sales Rep confirms an order based on yesterday's Excel stock report, but Warehouse discovers physical stock is depleted.  
  * *Workaround*: Sales Rep has to call the client to negotiate split delivery or substitute items (e.g., swapping Double A 70gsm with IK Plus 80gsm).
* **Exception 3 — Overdue Debt Override Request**: Client with a 30-day overdue balance places an urgent order.  
  * *Workaround*: Sales Rep informally requests the Sales Manager to override the credit hold verbally so the order can be processed to hit sales targets.

### F. Current Tools & Systems Used
* **Microsoft Excel**: Separate spreadsheet files used for contract pricing lookup, quote generation, and tracking account sales.
* **Network Shared Drive**: Folder storing scanned PDF copies of signed customer framework agreements.
* **Zalo / Email / Phone**: Used for informal real-time communication between Sales, Warehouse, and Accounting.
* **Paper Physical Files**: Printed Sales Orders and picking slips signed manually by department heads.

---

## 3. ASSUMPTIONS CLASSIFICATION (WEEK 1 VS. WEEK 2 EVIDENCE)

| No. | Week 1 Initial Assumption | Interview Evidence Obtained | Status |
|---|---|---|---|
| **1** | Sales representatives look up contract prices manually from disconnected Excel files, leading to pricing errors. | The Sales Manager confirmed that each corporate account has custom contract prices stored in separate Excel sheets. Reps copy-paste prices manually, causing 5–8% pricing error rates flagged by Accounting monthly. | **CONFIRMED** |
| **2** | Sales staff confirm delivery timelines based on informal verbal checks with Warehouse rather than real-time inventory data. | The Sales Manager stated there is no real-time inventory system visible to Sales. Reps call warehouse keepers directly or rely on daily Excel reports, causing stockouts post-confirmation 3–4 times per week. | **CONFIRMED** |
| **3** | There is no automated system safeguard to block new sales orders for clients with debt overdue by > 30 days. | The Sales Manager clarified that a credit policy exists on paper, but it is not automated. Sales reps can still draft and confirm orders unless Accounting notices the overdue balance manually and intervenes. | **REVISED** *(Policy exists on paper, but enforcement is manual and bypassable)* |

---

## 4. UNRESOLVED QUESTIONS

1. **Contract Expiration Grace Period**: What exact protocol is followed when a customer's annual contract price agreement expires mid-order? Does the system automatically revert to list price, or is Sales allowed an unmonitored grace period?
2. **Accounting Credit Lift Notification**: How does Accounting officially notify Sales when a blocked customer's credit hold is lifted after payment is received, ensuring no communication delays?

---

## 5. SHORT REFLECTION

> **Reflection Prompt**: *What did you learn from the interview that you could not have known from your initial enterprise understanding?*

**Reflection Answer**:  
Before conducting the interview, I assumed that sales discrepancies and order delays were primarily caused by individual employee oversight or lack of attention. However, the evidence gathered from the Sales Manager revealed that the root problem is **systemic and structural**. 

Sales representatives are forced to operate in an environment with fragmented information—navigating separate Excel pricelists, scanned PDF contracts, and informal Zalo stock checks under severe time pressure. Furthermore, I discovered an underlying operational tension between Sales and Accounting: while Sales representatives prioritize fast order confirmation and customer satisfaction, Accounting prioritizes credit risk control and cash collection. Because the current manual workflow lacks automated system controls (such as real-time inventory visibility and automated credit blocks), employees rely on informal workarounds that create delays and errors. 

This interview reinforced a fundamental Business Systems Analysis (BSA) principle: **Operational problems occur between cross-functional boundaries, not inside isolated departments.** A successful technology solution must integrate workflow data across Sales, Inventory, and Accounting rather than simply automating individual tasks.
