import type { Node, Edge } from "@xyflow/react";

// 🌟 The Optimistic Job Application Database (Fully Connected Edition)
export const initialNodes: Node[] = [
  {
    id: "candidates",
    type: "tableNode",
    position: { x: 850, y: 120 },
    data: {
      label: "candidates",
      fields: [
        { name: "id", type: "int", isPrimary: true },
        { name: "full_name", type: "varchar" },
        { name: "email", type: "varchar" },
        { name: "skills", type: "json" },
        { name: "dream_role", type: "varchar" },
        { name: "portfolio_link", type: "varchar" },
        { name: "confidence_level", type: "decimal" },
        { name: "applied_role_id", type: "int", isForeign: true },
        { name: "hired_company_id", type: "int", isForeign: true },
      ],
    },
  },
  {
    id: "job_postings",
    type: "tableNode",
    position: { x: 480, y: 180 },
    data: {
      label: "job_postings",
      fields: [
        { name: "id", type: "int", isPrimary: true },
        { name: "title", type: "varchar" },
        { name: "department", type: "varchar" },
        { name: "skills_required", type: "json" },
        { name: "salary_range", type: "varchar" },
        { name: "hr_id", type: "int", isForeign: true },
        { name: "company_id", type: "int", isForeign: true },
        // { name: "posted_at", type: "timestamp" },
      ],
    },
  },
  {
    id: "recruiters",
    type: "tableNode",
    position: { x: 100, y: 150 },
    data: {
      label: "recruiters",
      fields: [
        { name: "id", type: "int", isPrimary: true },
        { name: "name", type: "varchar" },
        { name: "email", type: "varchar" },
        { name: "kindness_score", type: "decimal" }, // ❤️
        { name: "response_time", type: "varchar" }, // “within 24h”
        { name: "company_id", type: "int", isForeign: true },
        { name: "favorite_quote", type: "varchar" },
      ],
    },
  },
  {
    id: "interviews",
    type: "tableNode",
    position: { x: 100, y: 460 },
    data: {
      label: "interviews",
      fields: [
        { name: "id", type: "int", isPrimary: true },
        { name: "candidate_id", type: "int", isForeign: true },
        { name: "job_posting_id", type: "int", isForeign: true },
        { name: "interviewer_name", type: "varchar" },
        { name: "topics_discussed", type: "json" },
        { name: "candidate_strength", type: "varchar" },
        { name: "feedback", type: "varchar" },
        { name: "outcome", type: "varchar" },
      ],
    },
  },
  {
    id: "career_tips",
    type: "tableNode",
    position: { x: 480, y: 500 },
    data: {
      label: "career_tips",
      fields: [
        { name: "id", type: "int", isPrimary: true },
        { name: "shared_by_hr_id", type: "int", isForeign: true },
        { name: "title", type: "varchar" },
        { name: "content", type: "text" },
        { name: "times_shared", type: "int" },
      ],
    },
  },
  {
    id: "companies",
    type: "tableNode",
    position: { x: 850, y: 570 },
    data: {
      label: "companies",
      fields: [
        { name: "id", type: "int", isPrimary: true },
        { name: "name", type: "varchar" },
        { name: "industry", type: "varchar" },
        { name: "mission", type: "varchar" },
        { name: "employee_happiness_index", type: "decimal" },
        { name: "active_job_postings", type: "int" },
      ],
    },
  },
];

export const initialEdges: Edge[] = [
  // Candidates apply for job postings
  {
    id: "candidates-job_postings",
    source: "candidates",
    target: "job_postings",
    sourceHandle: "applied_role_id",
    targetHandle: "id",
  },
  // Recruiters post job listings
  {
    id: "recruiters-job_postings",
    source: "recruiters",
    target: "job_postings",
    sourceHandle: "id",
    targetHandle: "hr_id",
  },
  // Candidates attend interviews
  {
    id: "candidates-interviews",
    source: "candidates",
    target: "interviews",
    sourceHandle: "id",
    targetHandle: "candidate_id",
  },
  // Job postings have interviews
  {
    id: "job_postings-interviews",
    source: "job_postings",
    target: "interviews",
    sourceHandle: "id",
    targetHandle: "job_posting_id",
  },
  // Recruiters share career tips
  {
    id: "recruiters-career_tips",
    source: "recruiters",
    target: "career_tips",
    sourceHandle: "id",
    targetHandle: "shared_by_hr_id",
  },
  // Companies hire recruiters
  {
    id: "companies-recruiters",
    source: "companies",
    target: "recruiters",
    sourceHandle: "id",
    targetHandle: "company_id",
  },
  // Companies post job listings
  {
    id: "companies-job_postings",
    source: "companies",
    target: "job_postings",
    sourceHandle: "id",
    targetHandle: "company_id",
  },
  // Companies hire candidates
  {
    id: "companies-candidates",
    source: "companies",
    target: "candidates",
    sourceHandle: "id",
    targetHandle: "hired_company_id",
  },
];
