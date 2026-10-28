/**
 * ==============================================================================
 * AUTOMATED COURSEWORK & KNOWLEDGE BASE SYNC ENGINE
 * Course: Business Systems Analysis (BSA) — Faculty of Technology, HSU
 * Maintainer: Vo Duy Binh (ID: 22301500) — Team Leader Group 6
 * ==============================================================================
 * This script scans:
 *   - Slide/ (Lecture Slide PDFs)
 *   - Inviduals/ (Weekly Individual Assignment Markdowns)
 *   - Group/ (Weekly Group Assignment Markdowns)
 *   - Project/ (Phase 1 & Phase 2 BRDs, Reports & Assets)
 * And automatically regenerates:
 *   - COURSEWORK_KNOWLEDGE_BASE.md
 *
 * Usage:
 *   - One-shot sync:  node scripts/auto_update_knowledge.js
 *   - Watcher daemon: node scripts/auto_update_knowledge.js --watch
 * ==============================================================================
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const OUTPUT_FILE = path.join(ROOT_DIR, 'COURSEWORK_KNOWLEDGE_BASE.md');

// Watched directories
const WATCH_DIRS = [
  path.join(ROOT_DIR, 'Slide'),
  path.join(ROOT_DIR, 'Inviduals'),
  path.join(ROOT_DIR, 'Group'),
  path.join(ROOT_DIR, 'Project')
];

/**
 * Scan a directory recursively and return files with metadata
 */
function scanDirectory(dirPath, allowedExts = ['.md', '.pdf', '.docx']) {
  if (!fs.existsSync(dirPath)) return [];
  let results = [];
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dirPath, item.name);
    if (item.isDirectory()) {
      if (item.name !== 'node_modules' && item.name !== '.git' && item.name !== 'scratch') {
        results = results.concat(scanDirectory(fullPath, allowedExts));
      }
    } else {
      const ext = path.extname(item.name).toLowerCase();
      if (allowedExts.includes(ext)) {
        const stats = fs.statSync(fullPath);
        results.push({
          name: item.name,
          relativePath: path.relative(ROOT_DIR, fullPath).replace(/\\/g, '/'),
          size: stats.size,
          mtime: stats.mtime,
          ext: ext
        });
      }
    }
  }
  return results;
}

/**
 * Extract summary or line count from Markdown files
 */
function inspectMarkdown(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const headings = lines
      .map(l => l.trim())
      .filter(l => l.startsWith('#'))
      .slice(0, 5);
    return {
      lineCount: lines.length,
      byteCount: Buffer.byteLength(content, 'utf8'),
      headings: headings
    };
  } catch (err) {
    return { lineCount: 0, byteCount: 0, headings: [] };
  }
}

/**
 * Generate Master Coursework Knowledge Base Markdown
 */
function generateKnowledgeBase() {
  const now = new Date();
  const timestampStr = now.toISOString().replace('T', ' ').substring(0, 19) + ' (UTC)';

  // Scan files
  const slideFiles = scanDirectory(path.join(ROOT_DIR, 'Slide'), ['.pdf']);
  const individualFiles = scanDirectory(path.join(ROOT_DIR, 'Inviduals'), ['.md']);
  const groupFiles = scanDirectory(path.join(ROOT_DIR, 'Group'), ['.md']);
  const projectFiles = scanDirectory(path.join(ROOT_DIR, 'Project'), ['.md', '.docx', '.html']);

  let md = '';

  // 1. Header & Live Synchronization Banner
  md += `# FACULTY OF TECHNOLOGY — HOA SEN UNIVERSITY\n`;
  md += `## BUSINESS SYSTEMS ANALYSIS (BSA) — MASTER COURSEWORK & EXERCISES KNOWLEDGE BASE\n\n`;
  md += `> 🔄 **AUTOMATED SYNCHRONIZATION STATUS: ACTIVE**  \n`;
  md += `> **Last Auto-Updated:** \`${timestampStr}\`  \n`;
  md += `> **Sync Engine:** \`scripts/auto_update_knowledge.js\`  \n`;
  md += `> **Target Tracking:** All Lecture Slides, Individual Deliverables, Group Submissions, and Project Phase 1/2 Artifacts.  \n`;
  md += `> *Note: This file is dynamically re-compiled whenever new slides, assignments, or project files are committed or saved.*\n\n`;
  md += `---\n\n`;

  // 2. Table of Contents
  md += `## 📚 TABLE OF CONTENTS\n\n`;
  md += `1. [Academic Information & Syllabus Map](#1-academic-information--syllabus-map)\n`;
  md += `2. [Live Repository Deliverables Inventory](#2-live-repository-deliverables-inventory)\n`;
  md += `3. [Master Weekly Knowledge & Exercises Archive (Weeks 1 to 7+)](#3-master-weekly-knowledge--exercises-archive-weeks-1-to-7)\n`;
  md += `   * [Week 1: Enterprise Context & Stakeholder Scoping](#week-1-enterprise-context--stakeholder-scoping)\n`;
  md += `   * [Week 2: Stakeholder Investigation & Evidence Elicitation](#week-2-stakeholder-investigation--evidence-elicitation)\n`;
  md += `   * [Week 3: AS-IS Process Modeling & Scope Rules](#week-3-as-is-process-modeling--scope-rules)\n`;
  md += `   * [Week 4: Business Process Simulation & Friction Diagnosis](#week-4-business-process-simulation--friction-diagnosis)\n`;
  md += `   * [Week 5: Evidence Validation & AS-IS Quality Review](#week-5-evidence-validation--as-is-quality-review)\n`;
  md += `   * [Week 6: Business Problems, Information Needs & Requirements Engineering](#week-6-business-problems-information-needs--requirements-engineering)\n`;
  md += `   * [Week 7: TO-BE Process Design, Process Integration & Requirements Refinement](#week-7-to-be-process-design-process-integration--requirements-refinement)\n`;
  md += `   * [Roadmap: Weeks 8 to 15 (Phase 2, Odoo ERP, UAT & Defense)](#roadmap-weeks-8-to-15-phase-2-odoo-erp-uat--defense)\n`;
  md += `4. [Core BSA Concepts, Frameworks & Formulas Encyclopedia](#4-core-bsa-concepts-frameworks--formulas-encyclopedia)\n`;
  md += `5. [Automated Update Engine & File-Watcher Instructions](#5-automated-update-engine--file-watcher-instructions)\n\n`;
  md += `---\n\n`;

  // 3. Academic Information
  md += `## 1. ACADEMIC INFORMATION & SYLLABUS MAP\n\n`;
  md += `* **Course Title:** Business Systems Analysis (BSA) — Phân tích Hệ thống Nghiệp vụ\n`;
  md += `* **Course Code:** 2631 Semester 1 (Academic Year 2026–2027)\n`;
  md += `* **Academic Institution:** Faculty of Technology, Hoa Sen University (HSU)\n`;
  md += `* **Instructor:** MSc. Nguyen Thi Thanh Thanh (\`thanh.nguyenthithanh@hoasen.edu.vn\`)\n`;
  md += `* **Student & Team Leader:** Võ Duy Bình (ID: \`22301500\`) — Group 6\n`;
  md += `* **Team Partner:** Phạm Nguyễn Gia Thuận (ID: \`22204631\`) — Group 6\n`;
  md += `* **Assigned Business Case:** Scenario 6 (Scenario B) — Office Supplies & Stationery (\`OfficePro Distribution Co., Ltd.\`)\n\n`;

  md += `### Course Objectives & Assessment Scheme:\n\n`;
  md += `| Component | Description | Percentage | Schedule | Core Learning Outcomes (CLOs) |\n`;
  md += `| :--- | :--- | :---: | :---: | :---: |\n`;
  md += `| **Individual Assessments** | Weekly Quizzes, Homework & Classroom Exercises | **30%** | Weeks 2–13 | CLO1, CLO2, CLO3 |\n`;
  md += `| **Project Phase 1** | Pure Business Systems Analysis (Scope, AS-IS, TO-BE, BRD) | **30%** | Weeks 1–9 | CLO2, CLO3 |\n`;
  md += `| **Project Phase 2** | Use Cases, Odoo Prototype, UAT & Final Presentation | **40%** | Weeks 10–15 | CLO3, CLO4, CLO5 |\n`;
  md += `| **Total** | | **100%** | | |\n\n`;
  md += `---\n\n`;

  // 4. Live Repository Deliverables Inventory
  md += `## 2. LIVE REPOSITORY DELIVERABLES INVENTORY\n\n`;
  md += `Bảng thống kê trạng thái các tệp tin bài học và bài tập hiện có trong hệ thống (tự động quét và cập nhật):\n\n`;

  md += `### 2.1. Lecture Slide Decks (\`Slide/\`)\n\n`;
  md += `| Slide Filename | File Size | Last Modified | Core Theme Covered |\n`;
  md += `| :--- | :---: | :---: | :--- |\n`;
  slideFiles.sort((a, b) => a.name.localeCompare(b.name)).forEach(f => {
    md += `| [\`${f.name}\`](file:///${path.join(ROOT_DIR, f.relativePath).replace(/\\/g, '/')}) | ${(f.size / 1024 / 1024).toFixed(2)} MB | ${f.mtime.toISOString().substring(0, 10)} | Lecture Deck Content |\n`;
  });

  md += `\n### 2.2. Weekly Individual Exercises (\`Inviduals/\`)\n\n`;
  md += `| Week / Deliverable | Status & Size | Key Completed Artifacts & Topics |\n`;
  md += `| :--- | :---: | :--- |\n`;
  individualFiles.sort((a, b) => a.name.localeCompare(b.name)).forEach(f => {
    const meta = inspectMarkdown(path.join(ROOT_DIR, f.relativePath));
    const status = f.size > 1000 ? `✅ Completed (${(f.size / 1024).toFixed(1)} KB)` : `⏳ Template (${f.size} B)`;
    const headingSummary = meta.headings.slice(0, 2).map(h => h.replace(/^#+\s*/, '')).join('; ') || 'Pending';
    md += `| [\`${f.name}\`](file:///${path.join(ROOT_DIR, f.relativePath).replace(/\\/g, '/')}) | ${status} | ${headingSummary} |\n`;
  });

  md += `\n### 2.3. Weekly Group Project Submissions (\`Group/\`)\n\n`;
  md += `| Week / Deliverable | Status & Size | Key Completed Artifacts & Topics |\n`;
  md += `| :--- | :---: | :--- |\n`;
  groupFiles.sort((a, b) => a.name.localeCompare(b.name)).forEach(f => {
    const meta = inspectMarkdown(path.join(ROOT_DIR, f.relativePath));
    const status = f.size > 1000 ? `✅ Completed (${(f.size / 1024).toFixed(1)} KB)` : `⏳ Template (${f.size} B)`;
    const headingSummary = meta.headings.slice(0, 2).map(h => h.replace(/^#+\s*/, '')).join('; ') || 'Pending';
    md += `| [\`${f.name}\`](file:///${path.join(ROOT_DIR, f.relativePath).replace(/\\/g, '/')}) | ${status} | ${headingSummary} |\n`;
  });

  md += `\n### 2.4. Project Phase 1 Master Deliverables (\`Project/\`)\n\n`;
  md += `| Project Deliverable | File Path | Size | Description |\n`;
  md += `| :--- | :--- | :---: | :--- |\n`;
  projectFiles.sort((a, b) => a.name.localeCompare(b.name)).forEach(f => {
    md += `| **${f.name}** | [\`${f.relativePath}\`](file:///${path.join(ROOT_DIR, f.relativePath).replace(/\\/g, '/')}) | ${(f.size / 1024).toFixed(1)} KB | Official Phase 1 Artifact |\n`;
  });

  md += `\n---\n\n`;

  // 5. Master Weekly Knowledge & Exercises Archive (Weeks 1 to 7+)
  md += `## 3. MASTER WEEKLY KNOWLEDGE & EXERCISES ARCHIVE (WEEKS 1 TO 7+)\n\n`;

  // Week 1
  md += `### Week 1: Enterprise Context & Stakeholder Scoping\n\n`;
  md += `* **Slide Reference:** [\`Week 1.pdf\`](file:///${path.join(ROOT_DIR, 'Slide/Week 1.pdf').replace(/\\/g, '/')})\n`;
  md += `* **Core Theory & Concepts:**\n`;
  md += `  - What is an Enterprise? An organization designed to deliver products or services to customers while generating sustainable economic value.\n`;
  md += `  - Business Model Canvas: Customer Segments, Value Propositions, Channels, Revenue Streams, Key Activities, Key Resources, Cost Structure.\n`;
  md += `  - B2B Wholesale vs. Retail: Wholesale features high order volumes, negotiated credit terms (Net 30), legal framework agreements, and complex fulfillment.\n`;
  md += `* **Individual Deliverable ([\`Inviduals/Week1.md\`](file:///${path.join(ROOT_DIR, 'Inviduals/Week1.md').replace(/\\/g, '/')}))**: Personal investigation focus, initial understanding of B2B wholesale dynamics, stakeholder mapping.\n`;
  md += `* **Group Deliverable ([\`Group/Week1.md\`](file:///${path.join(ROOT_DIR, 'Group/Week1.md').replace(/\\/g, '/')}))**: Enterprise Profile of **OfficePro Distribution Co., Ltd.**, 10 primary SKUs (\`ST-001\` to \`ST-010\`), facilities network (Tan Binh Central Hub 2,500 m², Bien Hoa Transit Depot 800 m²), and RACI matrix setup.\n\n`;

  // Week 2
  md += `### Week 2: Stakeholder Investigation & Evidence Elicitation\n\n`;
  md += `* **Slide Reference:** [\`Week 2 Business Process  Stakeholder Investigation.pdf\`](file:///${path.join(ROOT_DIR, 'Slide/Week 2 Business Process  Stakeholder Investigation.pdf').replace(/\\/g, '/')})\n`;
  md += `* **Core Theory & Concepts:**\n`;
  md += `  - Stakeholder Identification: Internal (Sales, Warehouse, Accounting, Procurement) vs. External (Corporate Buyers, Suppliers).\n`;
  md += `  - Power-Interest Grid: High Power / High Interest (Manage Closely: Sales Manager, Chief Accountant); High Power / Low Interest (Keep Satisfied: Director); Low Power / High Interest (Keep Informed: Warehouse Keeper, Procurement Officer).\n`;
  md += `  - Qualitative Elicitation Techniques: Structured & Semi-structured interviews, shadowing, simulation walks, and artifact examination.\n`;
  md += `* **Individual Deliverable ([\`Inviduals/Week2.md\`](file:///${path.join(ROOT_DIR, 'Inviduals/Week2.md').replace(/\\/g, '/')}))**: Interview Evidence Log with verified evidence IDs (\`EVD-W2-SALES-01\`, \`EVD-W2-WH-02\`, \`EVD-W2-ACC-01\`, \`EVD-W2-PURCH-01\`).\n`;
  md += `* **Group Deliverable ([\`Group/Week2.md\`](file:///${path.join(ROOT_DIR, 'Group/Week2.md').replace(/\\/g, '/')}))**: Validation of simulated enterprise context, stakeholder perception gap analysis, and consolidated evidence matrix.\n\n`;

  // Week 3
  md += `### Week 3: AS-IS Process Modeling & Scope Rules\n\n`;
  md += `* **Slide Reference:** [\`Week 3 - AS-IS Processes.pdf\`](file:///${path.join(ROOT_DIR, 'Slide/Week 3 - AS-IS Processes.pdf').replace(/\\/g, '/')})\n`;
  md += `* **Core Theory & Concepts:**\n`;
  md += `  - Definition of a Business Process: A structured, coordinated set of activities and tasks that produce a specific service or product that meets the business goal of a customer.\n`;
  md += `  - Process vs. Procedure vs. Task: Process (End-to-End value delivery) > Procedure (Method of executing a process) > Task (Single unit of work).\n`;
  md += `  - The Scope Rule (Slide 8): Clear operational triggers, distinct start and end points, identifiable handoffs between organizational roles.\n`;
  md += `* **Individual Deliverable ([\`Inviduals/Week3.md\`](file:///${path.join(ROOT_DIR, 'Inviduals/Week3.md').replace(/\\/g, '/')}))**: From interview evidence to AS-IS process draft, identifying boundaries for Sales Order execution.\n`;
  md += `* **Group Deliverable ([\`Group/Week3.md\`](file:///${path.join(ROOT_DIR, 'Group/Week3.md').replace(/\\/g, '/')}))**: Initial AS-IS Process Table mapping the 5 core processes of Scenario 6.\n\n`;

  // Week 4
  md += `### Week 4: Business Process Simulation & Friction Diagnosis\n\n`;
  md += `* **Slide Reference:** [\`Week 4 - Business Process Simulation.pdf\`](file:///${path.join(ROOT_DIR, 'Slide/Week 4 - Business Process Simulation.pdf').replace(/\\/g, '/')})\n`;
  md += `* **Core Theory & Concepts:**\n`;
  md += `  - Business Process Simulation: Walking through realistic transaction batches to observe where delays, rework, and paper bottlenecks accumulate.\n`;
  md += `  - Swimlane / Cross-Functional Flowcharting (BPMN): Pools (Organizations), Lanes (Departmental Roles), Gateways (Exclusive Decision XOR, Parallel AND), Event Circles (Thin = Start, Double = Intermediate, Thick = End).\n`;
  md += `  - Friction Points Identification: Unnecessary physical handoffs, manual transcription across spreadsheets, lack of digital audit trail.\n`;
  md += `* **Individual Deliverable ([\`Inviduals/Week4.md\`](file:///${path.join(ROOT_DIR, 'Inviduals/Week4.md').replace(/\\/g, '/')}))**: In-depth individual process deep dive by **Võ Duy Bình** for \`BP2. Verifying Contract Prices\`, complete 12-element table, 3-lane Swimlane model, diagnosis of 3 friction points (Excel silos, Zalo approvals, unrecorded verbal overrides).\n`;
  md += `* **Group Deliverable ([\`Group/Week4.md\`](file:///${path.join(ROOT_DIR, 'Group/Week4.md').replace(/\\/g, '/')}))**: Group simulation synthesis, diagnosing cross-departmental paper delays between Sales, Warehouse, and Accounting.\n\n`;

  // Week 5
  md += `### Week 5: Evidence Validation & AS-IS Quality Review\n\n`;
  md += `* **Slide Reference:** [\`WEEK 5 - EVIDENCE VALIDATION  AS-IS PROCESS REVIEW.pdf\`](file:///${path.join(ROOT_DIR, 'Slide/WEEK 5 - EVIDENCE VALIDATION  AS-IS PROCESS REVIEW.pdf').replace(/\\/g, '/')})\n`;
  md += `* **Core Theory & Concepts:**\n`;
  md += `  - Triangulation of Evidence: Cross-verifying interview statements against physical artifacts (delivery slips, Excel sheets) and simulation performance.\n`;
  md += `  - AS-IS Quality Review Checklist: Verification of actors, completeness of decision branches, explicit documentation of exceptions, and alignment with business evidence.\n`;
  md += `* **Group Deliverable ([\`Group/Week5.md\`](file:///${path.join(ROOT_DIR, 'Group/Week5.md').replace(/\\/g, '/')}))**: Reviewed and revised AS-IS process descriptions and Swimlane models for all 5 business processes (\`BP1\` to \`BP5\`), verifying 100% compliance with course quality gates.\n\n`;

  // Week 6
  md += `### Week 6: Business Problems, Information Needs & Requirements Engineering\n\n`;
  md += `* **Slide Reference:** [\`WEEK 6 - BUSINESS PROBLEMS, INFORMATION NEEDS  REQUIREMENTS.pdf\`](file:///${path.join(ROOT_DIR, 'Slide/WEEK 6 - BUSINESS PROBLEMS, INFORMATION NEEDS  REQUIREMENTS.pdf').replace(/\\/g, '/')})\n`;
  md += `* **Core Theory & Concepts:**\n`;
  md += `  - Problem vs. Symptom: A symptom is an observable pain (e.g. 5–8% invoice dispute); a problem is the underlying operational cause (decentralized, unverified Excel pricelists).\n`;
  md += `  - 5-Whys Root Cause Analysis: Repeatedly interrogating failures until systemic process defects are uncovered.\n`;
  md += `  - Information Need: The data required at a specific decision point to execute an activity correctly (e.g. Real-time ATP inventory, active framework contract price tier).\n`;
  md += `  - Business Requirements (BRs) vs. Functional Requirements (FRs):\n`;
  md += `    * **BR:** Expresses a business outcome, operational capability, or strategic goal (e.g. \`BR-01\`: eliminate billing discrepancies).\n`;
  md += `    * **FR:** Expresses observable, testable system behavior conforming to IEEE 830 standards: \`The system shall + action + object + condition\` (e.g. \`FR-01\`: auto-retrieve contract price).\n`;
  md += `  - MoSCoW Prioritization Framework: Must Have, Should Have, Could Have, Won't Have.\n`;
  md += `* **Individual Deliverable ([\`Inviduals/Week6.md\`](file:///${path.join(ROOT_DIR, 'Inviduals/Week6.md').replace(/\\/g, '/')}))**: Individual homework & classroom workshop tasks, problem formulation for \`ISS-01\` and \`ISS-02\`, information needs analysis, initial draft BRs and FRs.\n`;
  md += `* **Group Deliverable ([\`Group/Week6.md\`](file:///${path.join(ROOT_DIR, 'Group/Week6.md').replace(/\\/g, '/')}))**: Consolidated Group BR/FR specification, linking verified evidence to system behavior.\n\n`;

  // Week 7
  md += `### Week 7: TO-BE Process Design, Process Integration & Requirements Refinement\n\n`;
  md += `* **Slide Reference:** [\`WEEK 7 - TO-BE PROCESS DESIGN  REQUIREMENTS REFINEMENT.pdf\`](file:///${path.join(ROOT_DIR, 'Slide/WEEK 7 - TO-BE PROCESS DESIGN  REQUIREMENTS REFINEMENT.pdf').replace(/\\/g, '/')})\n`;
  md += `* **Core Theory & Concepts:**\n`;
  md += `  - Process Integration & Relationship Mapping: Categorizing inter-process connections into Synchronous (two-way dependency), Trigger (event-driven initiation), and Prerequisite (condition precedent).\n`;
  md += `  - TO-BE Process Re-engineering: Eliminating paper bottlenecks, establishing automated approval gates (5% threshold), integrating real-time Available-to-Promise (ATP) calculations.\n`;
  md += `  - AS-IS vs. TO-BE 4-Dimension Evaluation (Slide 9): What changes, where it improves, what information becomes available, and how handoffs transform.\n`;
  md += `  - Requirements Review Decisions (Slide 10): Keep, Revise, Remove, or Investigate.\n`;
  md += `  - 6-Step End-to-End Requirements Traceability Matrix (Slide 12):\n`;
  md += `    $$\\text{Evidence} \\longrightarrow \\text{AS-IS Observation} \\longrightarrow \\text{Problem} \\longrightarrow \\text{Information Need} \\longrightarrow \\text{BR} \\longrightarrow \\text{FR} \\longrightarrow \\text{Related TO-BE Process}$$\n`;
  md += `* **Group Deliverable ([\`Group/Week7.md\`](file:///${path.join(ROOT_DIR, 'Group/Week7.md').replace(/\\/g, '/')}))**: Comprehensive 8-activity submission:\n`;
  md += `  - Section 1: Reviewed AS-IS models for all 5 processes (\`BP1\` to \`BP5\`).\n`;
  md += `  - Section 2: Process Relationship Map & 4-column Integration Table + 4 Discussion Questions.\n`;
  md += `  - Section 3: Evidence-based Problem & Information Needs Analysis (7-element Slide 7 tables for \`ISS-01\`, \`ISS-02\`, \`ISS-03\`).\n`;
  md += `  - Section 4: 3 Core TO-BE Swimlane BPMN models (\`BP1\`, \`BP2\`, \`BP3\`), 4-dimension Slide 9 comparative matrices, and improvement directions for \`BP4\` & \`BP5\`.\n`;
  md += `  - Section 5: Refined 8-field BR/FR table with review decisions and guidelines verification.\n`;
  md += `  - Section 6: Complete 7-column RTM and validation requirements compliance.\n`;
  md += `  - Section 7: Internal Peer Review, Cross-Group Peer Review (with Group 7), and Individual Exit Ticket for Võ Duy Bình.\n`;
  md += `  - Section 8: Slide 15 submission checklist verification (100% complete).\n\n`;

  // Roadmap Weeks 8 to 15
  md += `### Roadmap: Weeks 8 to 15 (Phase 2, Odoo ERP, UAT & Defense)\n\n`;
  md += `* **Week 8–9:** Phase 1 Mid-Term Report Synthesis & Official BRD Submission (\`BRD_Official_Report_Group6.md\` and \`Project phase 1.docx\`).\n`;
  md += `* **Week 10:** Phase 2 Kick-off — Use Case Specifications, Actor-Goal Lists, and System Sequence Diagrams.\n`;
  md += `* **Week 11:** Odoo ERP Module Mapping (Sales, Purchase, Inventory, Invoicing), Data Dictionary & Master Data Import (\`ST-001\` to \`ST-010\`).\n`;
  md += `* **Week 12:** Core TO-BE Configuration (Pricelists, Reordering Rules, ATP Multi-Warehouse, Credit Hold Gates).\n`;
  md += `* **Week 13:** User Acceptance Testing (UAT) Test Cases & Traceability Validation.\n`;
  md += `* **Week 14:** Live End-to-End Simulation Demo & Pilot Run.\n`;
  md += `* **Week 15:** Final Project Defense Presentation & Technical Report Handover.\n\n`;
  md += `---\n\n`;

  // 6. Core BSA Concepts, Frameworks & Formulas Encyclopedia
  md += `## 4. CORE BSA CONCEPTS, FRAMEWORKS & FORMULAS ENCYCLOPEDIA\n\n`;

  md += `### 4.1. Available-to-Promise (ATP) Inventory Formula\n`;
  md += `In wholesale distribution, promising delivery dates based on raw physical count causes catastrophic stockouts. ATP represents uncommitted inventory available for customer orders:\n\n`;
  md += `$$\\mathbf{ATP} = \\text{Physical On-Hand Stock} - \\text{Committed / Reserved Orders} + \\text{Scheduled Inbound Receipts (Approved POs)}$$\n\n`;
  md += `* *Application in OfficePro:* Prevents Sales Reps from double-selling stock across Tan Binh and Bien Hoa hubs, reducing post-confirmation order cancellations by 95%.\n\n`;

  md += `### 4.2. Financial 3-Way Matching Principle\n`;
  md += `To safeguard corporate working capital and prevent unauthorized disbursements, accounts payable and billing must reconcile three legally binding documents:\n\n`;
  md += `$$\\text{Confirmed Purchase/Sales Order (SO/PO)} \\quad \\equiv \\quad \\text{Signed Warehouse Receiving/Delivery Slip} \\quad \\equiv \\quad \\text{Vendor / Customer VAT Invoice}$$\n\n`;
  md += `* *Application in OfficePro:* Eliminates 15–20 hours weekly of manual paper checking by establishing automated cross-document reconciliation in TO-BE BP1.\n\n`;

  md += `### 4.3. IEEE 830 Functional Requirement Syntax Standard\n`;
  md += `Avoid ambiguous, un-testable statements such as *"The system should be fast"* or *"The system should manage stock"*. All FRs must strictly adhere to:\n\n`;
  md += `$$\\mathbf{\\text{The system shall}} \\; + \\; \\mathbf{\\text{[Observable Action Verb]}} \\; + \\; \\mathbf{\\text{[Direct Object Entity]}} \\; + \\; \\mathbf{\\text{[Operational Condition / Threshold]}}$$\n\n`;
  md += `* *Example:* \`FR-02\`: *"The system shall block order confirmation and require authorized managerial override whenever a requested unit price is discounted by more than 5% below the contract baseline price."*\n\n`;

  md += `### 4.4. The Scope Rule for Business Process Modeling (Slide 8)\n`;
  md += `1. **Clear Trigger:** Every process must be initiated by an unambiguous business event (e.g. RFQ received, delivery truck arrives at dock).\n`;
  md += `2. **Single Value Delivery:** The process must produce a distinct commercial outcome that benefits a customer or internal stakeholder.\n`;
  md += `3. **Clear Boundary & End Point:** The process must terminate at a definitive state (e.g. Sales Order confirmed, stock shelved and ATP updated).\n\n`;
  md += `---\n\n`;

  // 7. Automated Update Engine & File-Watcher Instructions
  md += `## 5. AUTOMATED UPDATE ENGINE & FILE-WATCHER INSTRUCTIONS\n\n`;
  md += `Tệp tài liệu này được kết nối trực tiếp với công cụ tự động hóa thông minh \`scripts/auto_update_knowledge.js\`.\n\n`;
  md += `### Cách thức hoạt động của cơ chế tự động cập nhật:\n`;
  md += `1. **Quét dữ liệu tự động:** Trình quét tự động theo dõi toàn bộ các thư mục bài học và bài tập (\`Slide/\`, \`Inviduals/\`, \`Group/\`, \`Project/\`).\n`;
  md += `2. **Nhận diện thay đổi:** Khi bạn thêm một slide PDF mới (ví dụ \`Week 8.pdf\`), sửa bài tập cá nhân (\`Inviduals/Week8.md\`) hoặc nộp bài nhóm (\`Group/Week8.md\`), công cụ sẽ tự động nhận diện dung lượng, thời gian sửa đổi và tiêu đề mới.\n`;
  md += `3. **Tái đồng bộ tự động:** Toàn bộ bảng thống kê tiến độ và nội dung tổng hợp sẽ được biên dịch lại tức thì, đảm bảo tài liệu luôn là nguồn tri thức duy nhất chính xác nhất (Single Source of Truth).\n\n`;

  md += `### Các lệnh thực thi công cụ:\n\n`;
  md += `* **Chạy cập nhật thủ công một chạm:**\n`;
  md += `  \`\`\`bash\n`;
  md += `  node scripts/auto_update_knowledge.js\n`;
  md += `  \`\`\`\n\n`;
  md += `* **Bật chế độ thường trực giám sát tự động (Live Watcher Daemon):**\n`;
  md += `  \`\`\`bash\n`;
  md += `  node scripts/auto_update_knowledge.js --watch\n`;
  md += `  \`\`\`\n`;
  md += `  *(Khi bật chế độ này, bất cứ khi nào bạn lưu file markdown hoặc kéo thả slide mới vào thư mục, tệp \`COURSEWORK_KNOWLEDGE_BASE.md\` sẽ tự động cập nhật ngay trong 1 giây mà không cần gõ lệnh lại).*\n\n`;
  md += `* **Tích hợp Git Pre-commit Hook:**\n`;
  md += `  Đã được tích hợp sẵn vào \`.git/hooks/pre-commit\`. Mỗi khi bạn thực hiện lệnh \`git commit\`, hệ thống sẽ tự động quét và cập nhật lại file này trước khi commit mã nguồn lên GitHub.\n\n`;
  md += `---\n\n`;
  md += `*Tài liệu được quản lý tự động bởi Repository Maintainer: Võ Duy Bình (MSSV: 22301500) — Nhóm trưởng Group 6.*  \n`;

  return md;
}

/**
 * Main execution routine
 */
function main() {
  const isWatchMode = process.argv.includes('--watch');

  console.log(`[Auto-Update KB] Generating master coursework knowledge base...`);
  try {
    const mdContent = generateKnowledgeBase();
    fs.writeFileSync(OUTPUT_FILE, mdContent, 'utf8');
    console.log(`[Auto-Update KB] SUCCESS: Successfully generated ${OUTPUT_FILE}`);
  } catch (err) {
    console.error(`[Auto-Update KB] ERROR generating knowledge base:`, err);
    if (!isWatchMode) process.exit(1);
  }

  if (isWatchMode) {
    console.log(`[Auto-Update KB] Starting live file watcher on directories:`);
    WATCH_DIRS.forEach(dir => console.log(`  - ${dir}`));
    console.log(`[Auto-Update KB] Watching for file additions and modifications... (Press Ctrl+C to stop)`);

    let debounceTimer = null;
    WATCH_DIRS.forEach(dir => {
      if (!fs.existsSync(dir)) return;
      fs.watch(dir, { recursive: true }, (eventType, filename) => {
        if (!filename) return;
        const ext = path.extname(filename).toLowerCase();
        if (['.md', '.pdf', '.docx', '.html'].includes(ext)) {
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            console.log(`[Auto-Update KB] Detected change in ${filename} (${eventType}). Re-syncing...`);
            try {
              const updatedMd = generateKnowledgeBase();
              fs.writeFileSync(OUTPUT_FILE, updatedMd, 'utf8');
              console.log(`[Auto-Update KB] Updated ${OUTPUT_FILE} at ${new Date().toLocaleTimeString()}`);
            } catch (err) {
              console.error(`[Auto-Update KB] Re-sync failed:`, err);
            }
          }, 500);
        }
      });
    });
  }
}

main();
